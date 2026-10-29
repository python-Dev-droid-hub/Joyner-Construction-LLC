import type { MetadataRoute } from "next";
import { allPageParams } from "@/content/pages";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  const lastModified = new Date(Date.UTC(siteYear(), 0, 1));

  const home: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const servingAreas: MetadataRoute.Sitemap[number] = {
    url: `${siteUrl}/serving-areas`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  };

  const pages: MetadataRoute.Sitemap = allPageParams().map(({ slug }) => ({
    url: `${siteUrl}/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [home, servingAreas, ...pages];
}

function siteYear() {
  // Keep static for Cache Components / prerender stability
  return 2026;
}
