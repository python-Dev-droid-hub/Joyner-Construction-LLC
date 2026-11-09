import nodemailer from "nodemailer";
import { site } from "@/content/site";

export type EstimateMailPayload = {
  name: string;
  email: string;
  phone?: string;
  projectDetails: string;
};

function requiredEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

/** True when SMTP credentials are present for live email delivery. */
export function isSmtpConfigured(): boolean {
  return Boolean(
    requiredEnv("SMTP_HOST") &&
      requiredEnv("SMTP_USER") &&
      requiredEnv("SMTP_PASS"),
  );
}

function createTransport() {
  const host = requiredEnv("SMTP_HOST");
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");

  if (!host || !user || !pass) {
    throw new Error("SMTP is not fully configured.");
  }

  const port = Number(requiredEnv("SMTP_PORT") ?? "587");
  const secure =
    requiredEnv("SMTP_SECURE") === "true" ||
    requiredEnv("SMTP_SECURE") === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Strip CR/LF and control chars so values cannot inject email headers. */
export function sanitizeHeaderValue(value: string, max = 200): string {
  return value
    .replace(/[\r\n\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, max);
}

export async function sendEstimateRequestEmail(payload: EstimateMailPayload) {
  const to =
    requiredEnv("CONTACT_TO_EMAIL") ??
    requiredEnv("SMTP_USER") ??
    site.email;
  const from =
    requiredEnv("SMTP_FROM") ??
    `"${site.businessName}" <${requiredEnv("SMTP_USER") ?? site.email}>`;

  const safeName = sanitizeHeaderValue(payload.name, 100);
  const safeEmail = sanitizeHeaderValue(payload.email, 254);
  const phoneLine = payload.phone?.trim()
    ? sanitizeHeaderValue(payload.phone, 40)
    : "Not provided";

  const text = [
    `New estimate request from the ${site.businessName} website`,
    "",
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${phoneLine}`,
    "",
    "Project details:",
    payload.projectDetails.slice(0, 5000),
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#141210">
      <h2 style="margin:0 0 12px">New estimate request</h2>
      <p style="margin:0 0 16px">Submitted from the ${escapeHtml(site.businessName)} website.</p>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tr>
          <td style="padding:8px 0;font-weight:bold;width:120px">Name</td>
          <td style="padding:8px 0">${escapeHtml(safeName)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:bold">Email</td>
          <td style="padding:8px 0"><a href="mailto:${escapeHtml(safeEmail)}">${escapeHtml(safeEmail)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:bold">Phone</td>
          <td style="padding:8px 0">${escapeHtml(phoneLine)}</td>
        </tr>
      </table>
      <h3 style="margin:20px 0 8px">Project details</h3>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(payload.projectDetails.slice(0, 5000))}</p>
    </div>
  `;

  const transport = createTransport();
  await transport.sendMail({
    from,
    to,
    replyTo: safeEmail,
    subject: `Estimate request from ${safeName || "website visitor"}`,
    text,
    html,
  });
}
