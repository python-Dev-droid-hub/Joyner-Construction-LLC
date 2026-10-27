"use client";

import { useRef } from "react";
import { AboutOrbit } from "@/components/sections/AboutOrbit";
import { Button } from "@/components/ui/Button";
import { aboutContent, site } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

export function About() {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.1, id: "reveal-about" });

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory px-5 py-14 text-charcoal md:px-8 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="about-inner mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="about-copy max-w-xl" data-reveal>
          <p className="about-eyebrow mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
            {aboutContent.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="about-heading font-display text-[clamp(1.85rem,4.2vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal"
          >
            {aboutContent.heading}
          </h2>
          <div className="about-body mt-6 space-y-4 text-base leading-relaxed text-stone-ink md:text-lg">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="about-locale mt-5 text-sm leading-relaxed text-stone-ink">
            Serving{" "}
            <a
              href="#service-area"
              className="font-semibold text-charcoal underline decoration-copper/40 underline-offset-4 hover:decoration-copper"
            >
              {site.locationShort}
            </a>{" "}
            and nearby communities. See{" "}
            <a
              href="#services"
              className="font-semibold text-charcoal underline decoration-copper/40 underline-offset-4 hover:decoration-copper"
            >
              framing services
            </a>{" "}
            or{" "}
            <a
              href="#contact"
              className="font-semibold text-charcoal underline decoration-copper/40 underline-offset-4 hover:decoration-copper"
            >
              request an estimate
            </a>
            .
          </p>
          <div className="about-cta mt-8 flex flex-wrap gap-3">
            <Button href={aboutContent.cta.href} variant="primaryOnLight">
              {aboutContent.cta.label}
            </Button>
            <Button href="#faqs" variant="secondaryOnLight">
              Read FAQs
            </Button>
          </div>
        </div>

        <div className="about-visual w-full overflow-visible" data-reveal>
          <AboutOrbit />
          <p className="mt-2 text-center text-xs text-stone">
            Tap a node to explore each stage of residential framing.
          </p>
        </div>
      </div>
    </section>
  );
}
