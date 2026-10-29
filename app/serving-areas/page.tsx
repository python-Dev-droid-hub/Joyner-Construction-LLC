import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServingAreasDirectory } from "@/components/sections/ServingAreasDirectory";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

const title = "Serving Areas";
const description = `Residential construction services in Bellingham, Ferndale, Lynden, and Burlington, WA. Browse services by city and request an estimate from ${site.businessName}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/serving-areas" },
  openGraph: {
    title: `${title} | ${site.businessName}`,
    description,
    url: (() => {
      const siteUrl = getSiteUrl();
      return siteUrl ? `${siteUrl}/serving-areas` : "/serving-areas";
    })(),
    images: [
      {
        url: "/images/service-area/bellingham-landmark.jpg",
        alt: "Serving areas across Whatcom and Skagit County, Washington",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${site.businessName}`,
    description,
    images: ["/images/service-area/bellingham-landmark.jpg"],
  },
};

export default function ServingAreasPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow={site.businessName}
          headline="Serving Areas Across Northwest Washington"
          supporting="Residential services in Bellingham, Ferndale, Lynden, and Burlington, WA. Pick your city, then open the service page that matches your project."
          primaryCta={{ label: "Request an Estimate", href: "/#contact" }}
          image="/images/service-area/bellingham-landmark.jpg"
          imageAlt="Historic landmark in Bellingham, Washington"
        />
        <ServingAreasDirectory />
      </main>
      <Footer />
    </>
  );
}
