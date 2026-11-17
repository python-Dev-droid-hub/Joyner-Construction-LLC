"use client";

import FinalCtaBanner from "@/components/ui/final-cta-banner";
import type { LandingPageContent } from "@/content/landing";
import { ctaContent, site } from "@/content/site";

type CtaBannerProps = {
  content?: LandingPageContent["cta"];
};

export function CtaBanner({ content }: CtaBannerProps = {}) {
  const heading = content?.heading ?? ctaContent.heading;
  const body = content?.body ?? ctaContent.body;
  const backgroundImage =
    content?.backgroundImage ?? "/images/hero/framing-crew.webp";
  const backgroundAlt =
    content?.backgroundAlt ??
    "Residential framing crew on a construction site";
  const eyebrow = content?.eyebrow ?? ctaContent.eyebrow;
  const layout = content?.layout ?? ctaContent.layout;

  return (
    <div id="get-started" className="scroll-mt-24 bg-ivory px-5 py-10 md:px-8 md:py-14">
      <FinalCtaBanner
        eyebrow={eyebrow}
        heading={heading}
        body={body}
        primaryLabel="Request an Estimate"
        primaryHref="#contact"
        secondaryLabel={`Email ${site.contactName.split(" ")[0]}`}
        secondaryHref={`mailto:${site.email}`}
        backgroundImage={backgroundImage}
        backgroundAlt={backgroundAlt}
        className={layout === "editorial" ? "fcb-editorial" : ""}
        gradientColors={["#c98a5e", "#b8734a", "#5c3d2e", "#141210"]}
      />
    </div>
  );
}
