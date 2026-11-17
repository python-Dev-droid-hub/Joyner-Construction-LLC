/** Canonical production origin for Joyner Construction LLC. */
const PRODUCTION_SITE_URL = "https://www.joynerconstructionllc.com";

/**
 * Production site origin. Canonical, OG, sitemap, and JSON-LD `@id`/`url`
 * prefer NEXT_PUBLIC_SITE_URL; fall back to Vercel production host, then the
 * known custom domain on production/Vercel builds.
 */
export function getSiteUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    return `https://${vercelProd.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  return undefined;
}
