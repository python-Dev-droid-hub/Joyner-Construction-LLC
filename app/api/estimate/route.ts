import { NextResponse } from "next/server";
import { isSmtpConfigured, sendEstimateRequestEmail } from "@/lib/mail";

type EstimatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
  consent?: boolean | string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: EstimatePayload;

  try {
    body = (await request.json()) as EstimatePayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const projectDetails = String(body.projectDetails ?? "").trim();
  const consent =
    body.consent === true || body.consent === "true" || body.consent === "on";

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (projectDetails.length < 10) {
    errors.projectDetails =
      "Please share a bit more about your framing project.";
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
        mode: "live",
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

  const webhook = process.env.ESTIMATE_WEBHOOK_URL;
  const formspree = process.env.FORMSPREE_ENDPOINT;

  if (webhook || formspree) {
    const endpoint = webhook || formspree!;
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
        source: "joynerconstructionllc-residential-framing-bellingham",
      }),
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
      mode: "live",
      message: "Thank you. Your estimate request has been sent.",
    });
  }

  console.info("[estimate] Development-mode submission (no SMTP configured)", {
    name,
    email,
    phone: phone || null,
    projectDetails,
  });

  return NextResponse.json({
    ok: true,
    mode: "development",
    message:
      "Request received in development mode. No email backend is configured yet—set SMTP_HOST, SMTP_USER, and SMTP_PASS to enable live delivery.",
  });
}
