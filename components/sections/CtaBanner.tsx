"use client";

import FinalCtaBanner from "@/components/ui/final-cta-banner";
import type { LandingPageContent } from "@/content/landing";
import { site } from "@/content/site";

type CtaBannerProps = {
  content?: LandingPageContent["cta"];
};

export function CtaBanner({ content }: CtaBannerProps = {}) {
  const heading =
    content?.heading ??
    `Let's frame your next residential project in ${site.locationShort}.`;
  const body =
    content?.body ??
    `Tell ${site.contactName} about your new home, addition, or renovation framing needs. You'll get a clear conversation focused on scope—not pressure.`;
  const backgroundImage =
    content?.backgroundImage ?? "/images/hero/framing-crew.webp";
  const backgroundAlt =
    content?.backgroundAlt ??
    "Residential framing crew on a construction site";
  const eyebrow = content?.eyebrow ?? "Ready to build";

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
        gradientColors={["#c98a5e", "#b8734a", "#5c3d2e", "#141210"]}
      />
    </div>
  );
}
