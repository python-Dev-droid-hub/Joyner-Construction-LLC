/**
 * Production site origin. Canonical, OG, sitemap, and JSON-LD `@id`/`url`
 * prefer NEXT_PUBLIC_SITE_URL; fall back to Vercel production host when set.
 */
export function getSiteUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    return `https://${vercelProd.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  return undefined;
}
