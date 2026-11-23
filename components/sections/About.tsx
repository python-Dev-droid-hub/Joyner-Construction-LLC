"use client";

import { useRef } from "react";
import { AboutOrbit } from "@/components/sections/AboutOrbit";
import { Button } from "@/components/ui/Button";
import type { LandingPageContent } from "@/content/landing";
import { getAreaBySlug, getServiceBySlug } from "@/content/pages";
import { buildAboutInternalLinks } from "@/content/related-services";
import { aboutContent } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";
import { linkifyAboutParagraphs } from "@/lib/linkify-about";

type AboutProps = {
  content?: LandingPageContent["about"];
};

/** Homepage About is framing × Bellingham — brand stays unlinked; related → ADU. */
const homepageInternalLinks = buildAboutInternalLinks(
  getServiceBySlug("framing")!,
  getAreaBySlug("bellingham-wa")!,
);

export function About({ content }: AboutProps = {}) {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.1, id: "reveal-about" });

  const eyebrow = content?.eyebrow ?? aboutContent.eyebrow;
  const heading = content?.heading ?? aboutContent.heading;
  const paragraphs = content?.paragraphs ?? [...aboutContent.paragraphs];
  const cta = content?.cta ?? aboutContent.cta;
  const visualCaption =
    content?.visualCaption ?? aboutContent.visualCaption;
  const orbit = content?.orbit
    ? content.orbit
    : { steps: { ...aboutContent.orbitSteps } };
  const internalLinks = content
    ? content.internalLinks
    : homepageInternalLinks;
  const body = internalLinks
    ? linkifyAboutParagraphs(paragraphs, internalLinks)
    : paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ));

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24 overflow-x-hidden border-t border-charcoal/10 bg-ivory px-5 py-14 text-charcoal md:px-8 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="about-inner mx-auto grid w-full max-w-7xl items-center gap-10 overflow-x-hidden lg:grid-cols-2 lg:gap-16">
        <div className="about-copy max-w-xl" data-reveal>
          <p className="about-eyebrow mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </p>
          <h2
            id="about-heading"
            className={
              heading.length > 90
                ? "about-heading font-display text-[clamp(1.35rem,2.6vw,2rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-charcoal"
                : "about-heading font-display text-[clamp(1.85rem,4.2vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal"
            }
          >
            {heading}
          </h2>
          <div className="about-body mt-6 space-y-4 text-base leading-relaxed text-stone-ink md:text-lg">
            {body}
          </div>
          <div className="about-cta mt-8 flex flex-wrap gap-3">
            <Button href={cta.href} variant="primaryOnLight">
              {cta.label}
            </Button>
            <Button href="#faqs" variant="secondaryOnLight">
              Read FAQs
            </Button>
          </div>
        </div>

        <div className="about-visual w-full max-w-full overflow-hidden" data-reveal>
          <AboutOrbit content={orbit} />
          <p className="mt-2 text-center text-xs text-stone">{visualCaption}</p>
        </div>
      </div>
    </section>
  );
}
