import { NextResponse } from "next/server";
import { isSmtpConfigured, sendEstimateRequestEmail } from "@/lib/mail";
import { checkEstimateRateLimit } from "@/lib/rate-limit";

type EstimatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
  consent?: boolean | string;
  /** Honeypot — must stay empty. */
  companyWebsite?: string;
};

const MAX_BODY_BYTES = 32 * 1024;
const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  projectDetails: 5000,
} as const;

function isEmail(value: string) {
  if (value.length > LIMITS.email) return false;
  if (/[\r\n\u0000-\u001f\u007f]/.test(value)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function hasLiveDelivery(): boolean {
  return Boolean(
    isSmtpConfigured() ||
      process.env.ESTIMATE_WEBHOOK_URL?.trim() ||
      process.env.FORMSPREE_ENDPOINT?.trim(),
  );
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Unsupported content type." },
      { status: 415 },
    );
  }

  const rate = checkEstimateRateLimit(clientIp(request));
  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again later.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSeconds) },
      },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Request is too large." },
      { status: 413 },
    );
  }

  let body: EstimatePayload;
  try {
    body = JSON.parse(raw) as EstimatePayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: bots that fill hidden fields are rejected quietly.
  if (String(body.companyWebsite ?? "").trim()) {
    return NextResponse.json({
      ok: true,
      message: "Thank you. Your estimate request has been sent.",
    });
  }

  const name = String(body.name ?? "").trim().slice(0, LIMITS.name);
  const email = String(body.email ?? "").trim().slice(0, LIMITS.email);
  const phone = String(body.phone ?? "").trim().slice(0, LIMITS.phone);
  const projectDetails = String(body.projectDetails ?? "")
    .trim()
    .slice(0, LIMITS.projectDetails);
  const consent =
    body.consent === true || body.consent === "true" || body.consent === "on";

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (projectDetails.length < 10) {
    errors.projectDetails =
      "Please share a bit more about your framing project.";
  }
  if (String(body.projectDetails ?? "").trim().length > LIMITS.projectDetails) {
    errors.projectDetails = "Please keep project details under 5000 characters.";
  }
  if (!consent) {
    errors.consent = "Consent is required so we can contact you.";
  }
  if (phone && phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number or leave it blank.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  if (!hasLiveDelivery()) {
    if (process.env.NODE_ENV === "production") {
      console.error("[estimate] Form unavailable: no SMTP/webhook configured");
      return NextResponse.json(
        {
          ok: false,
          error:
            "The form is temporarily unavailable. Please email joynerconstllc@gmail.com.",
        },
        { status: 503 },
      );
    }

    console.info("[estimate] Development-mode submission (no SMTP configured)");
    return NextResponse.json({
      ok: true,
      message:
        "Request received in development mode. Configure SMTP to enable live delivery.",
    });
  }

  if (isSmtpConfigured()) {
    try {
      await sendEstimateRequestEmail({
        name,
        email,
        phone: phone || undefined,
        projectDetails,
      });

      return NextResponse.json({
        ok: true,
        message: "Thank you. Your estimate request has been sent.",
      });
    } catch (error) {
      console.error("[estimate] Nodemailer delivery failed", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your request right now. Please email joynerconstllc@gmail.com or try again shortly.",
        },
        { status: 502 },
      );
    }
  }

  const webhook = process.env.ESTIMATE_WEBHOOK_URL?.trim();
  const formspree = process.env.FORMSPREE_ENDPOINT?.trim();
  const endpoint = webhook || formspree;

  if (!endpoint) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The form is temporarily unavailable. Please email joynerconstllc@gmail.com.",
      },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || undefined,
        projectDetails,
        consent,
        source: "joynerconstructionllc-website",
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "The form service could not accept this request. Please email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Thank you. Your estimate request has been sent.",
    });
  } catch (error) {
    console.error("[estimate] Webhook delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your request right now. Please email joynerconstllc@gmail.com or try again shortly.",
      },
      { status: 502 },
    );
  }
}
