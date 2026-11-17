import type { MetadataRoute } from "next";
import { indexedLandingPaths } from "@/content/pages";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  const lastModified = new Date(Date.UTC(siteYear(), 0, 1));

  const homepage: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const landingPages: MetadataRoute.Sitemap = indexedLandingPaths().map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [homepage, ...landingPages];
}

function siteYear() {
  // Keep static for Cache Components / prerender stability
  return 2026;
}
