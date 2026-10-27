import { faqContent, site, socialProfiles } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const seo = {
  title: `Residential Framing in Bellingham, WA | ${site.businessName}`,
  description: `Residential framing for new homes, additions, and renovations in Bellingham, Ferndale, Lynden, and Burlington, WA. Call ${site.phone} or email ${site.email}. Hours: ${site.hoursShort} Pacific Time.`,
  keywords: [
    "residential framing Bellingham",
    "residential framing Bellingham WA",
    "home framing contractor Bellingham",
    "residential framing Ferndale WA",
    "residential framing Lynden WA",
    "residential framing Burlington WA",
    "Joyner Construction LLC",
  ],
  ogImagePath: "/images/hero/framing-neighborhood.webp",
  locale: "en_US",
} as const;

const AREA_PLACES = [
  { name: "Bellingham", region: "WA", geo: { lat: 48.7519, lng: -122.4787 } },
  { name: "Ferndale", region: "WA", geo: { lat: 48.8465, lng: -122.591 } },
  { name: "Lynden", region: "WA", geo: { lat: 48.9465, lng: -122.484 } },
  { name: "Burlington", region: "WA", geo: { lat: 48.4757, lng: -122.3254 } },
] as const;

function stripUndefined<T>(data: T): T {
  return JSON.parse(
    JSON.stringify(data, (_key, value) =>
      value === undefined ? undefined : value,
    ),
  ) as T;
}

function absoluteUrl(path: string, siteUrl?: string) {
  if (!siteUrl) return undefined;
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Full JSON-LD @graph for the landing page. No invented reviews or blog posts. */
export function buildSeoJsonLdGraph() {
  const siteUrl = getSiteUrl();
  const logoUrl = absoluteUrl("/logo.png", siteUrl);
  const ogImage = absoluteUrl(seo.ogImagePath, siteUrl);
  const orgId = siteUrl ? `${siteUrl}/#organization` : "#organization";
  const businessId = siteUrl ? `${siteUrl}/#localbusiness` : "#localbusiness";
  const websiteId = siteUrl ? `${siteUrl}/#website` : "#website";
  const webpageId = siteUrl ? `${siteUrl}/#webpage` : "#webpage";

  const areaServed = AREA_PLACES.map((area) => ({
    "@type": "City",
    name: area.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: area.region,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.geo.lat,
      longitude: area.geo.lng,
    },
  }));

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: site.businessName,
    url: siteUrl,
    logo: logoUrl
      ? {
          "@type": "ImageObject",
          url: logoUrl,
        }
      : undefined,
    email: site.email,
    telephone: site.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      areaServed: "US-WA",
      availableLanguage: "English",
    },
    sameAs: [...socialProfiles],
  };

  const localBusiness = {
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": businessId,
    name: site.businessName,
    description: seo.description,
    url: siteUrl,
    email: site.email,
    telephone: site.phone,
    image: ogImage ? [ogImage, logoUrl].filter(Boolean) : undefined,
    logo: logoUrl,
    priceRange: "$$",
    parentOrganization: { "@id": orgId },
    areaServed,
    knowsAbout: [
      "Residential framing",
      "New home framing",
      "Home addition framing",
      "Renovation framing",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      availableLanguage: "English",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: site.businessName,
    description: seo.description,
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": webpageId,
    url: siteUrl,
    name: seo.title,
    description: seo.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    primaryImageOfPage: ogImage
      ? {
          "@type": "ImageObject",
          url: ogImage,
        }
      : undefined,
    inLanguage: "en-US",
  };

  const services = [
    {
      name: "New Home Framing",
      description:
        "Structural framing for new residential construction in Bellingham and nearby communities.",
    },
    {
      name: "Home Addition Framing",
      description:
        "Framing for residential additions with careful tie-in to existing structures.",
    },
    {
      name: "Renovation Framing",
      description:
        "Framing for renovation projects involving walls, openings, and structural updates.",
    },
  ].map((service, index) => ({
    "@type": "Service",
    "@id": siteUrl ? `${siteUrl}/#service-${index + 1}` : `#service-${index + 1}`,
    name: service.name,
    description: service.description,
    provider: { "@id": businessId },
    areaServed,
    serviceType: "Residential framing",
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": siteUrl ? `${siteUrl}/#faq` : "#faq",
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": siteUrl ? `${siteUrl}/#breadcrumb` : "#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl || undefined,
      },
    ],
  };

  if (!organization.sameAs.length) {
    delete (organization as { sameAs?: string[] }).sameAs;
  }

  return stripUndefined({
    "@context": "https://schema.org",
    "@graph": [
      organization,
      localBusiness,
      website,
      webpage,
      breadcrumb,
      faqPage,
      ...services,
    ],
  });
}

/** @deprecated use buildSeoJsonLdGraph */
export function buildLocalBusinessJsonLd() {
  return buildSeoJsonLdGraph();
}
