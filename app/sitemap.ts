import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  // Single landing page site — one canonical URL. Section anchors are not separate pages.
  return [
    {
      url: siteUrl,
      lastModified: new Date(Date.UTC(siteYear(), 0, 1)),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

function siteYear() {
  // Keep static for Cache Components / prerender stability
  return 2026;
}
