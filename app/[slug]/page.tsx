import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { LandingSections } from "@/components/sections/LandingSections";
import { PageHero } from "@/components/sections/PageHero";
import { buildLandingContent } from "@/content/landing";
import {
  allPageParams,
  buildPageHeroCopy,
  buildPageSeo,
  parsePageSlug,
} from "@/content/pages";
import { getServiceImagePack } from "@/content/service-images.server";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPageParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = parsePageSlug(slug);

  if (!page) {
    return { title: "Page not found" };
  }

  const { service, area } = page;
  const pageSeo = buildPageSeo(service, area);
  const siteUrl = getSiteUrl();
  const canonical = siteUrl ? `${siteUrl}${pageSeo.path}` : pageSeo.path;

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    alternates: { canonical: pageSeo.path },
    openGraph: {
      title: `${pageSeo.title} | ${site.businessName}`,
      description: pageSeo.description,
      url: canonical,
      images: [
        {
          url: pageSeo.ogImage,
          alt: `${service.name} in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageSeo.title} | ${site.businessName}`,
      description: pageSeo.description,
      images: [pageSeo.ogImage],
    },
    other: {
      "geo.region": "US-WA",
      "geo.placename": area.nameShort,
    },
  };
}

function PageFallback() {
  return (
    <>
      <main id="main-content">
        <section
          id="home"
          className="relative min-h-[22rem] overflow-hidden bg-charcoal md:min-h-[26rem]"
          aria-hidden="true"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:px-8 md:pb-14 md:pt-32">
            <div className="mb-3 h-3 w-40 rounded bg-ivory/15" />
            <div className="h-10 max-w-xl rounded bg-ivory/20 md:h-12" />
            <div className="mt-4 h-16 max-w-lg rounded bg-ivory/10" />
            <div className="mt-7 h-11 w-48 rounded bg-copper/40" />
          </div>
        </section>
        <div className="min-h-[40vh] bg-ivory" aria-hidden="true" />
      </main>
      <Footer />
    </>
  );
}

async function ServiceAreaPageContent({
  params,
}: {
  params: PageProps["params"];
}) {
  const { slug } = await params;
  const page = parsePageSlug(slug);

  if (!page) {
    notFound();
  }

  const images = getServiceImagePack(
    page.service.slug,
    page.service.image,
  );
  const hero = buildPageHeroCopy(page.service, page.area, images.hero);
  const landing = buildLandingContent(page.service, page.area, images);

  return (
    <>
      <main id="main-content">
        <PageHero {...hero} />
        <LandingSections content={landing} />
      </main>
      <Footer />
    </>
  );
}

export default function ServiceAreaPage({ params }: PageProps) {
  return (
    <Suspense fallback={<PageFallback />}>
      <ServiceAreaPageContent params={params} />
    </Suspense>
  );
}
