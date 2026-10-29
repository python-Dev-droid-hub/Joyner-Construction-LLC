"use client";

import { useRef } from "react";
import SpatialServiceShowcase, {
  type ServiceShowcaseItem,
} from "@/components/ui/spatial-product-showcase";
import type { LandingPageContent } from "@/content/landing";
import { servicesContent } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

const defaultShowcaseItems: ServiceShowcaseItem[] = [
  {
    id: "new-home",
    label: "New Home",
    title: "New Home Framing",
    description:
      "Structural framing for new residential construction in Bellingham—from early layout through walls, floors, and roof framing as the project requires. Clean measuring, solid connections, and square walls set up every trade that follows, from mechanicals to finishes. Share plans, site access notes, and timing preferences when you request an estimate so the conversation stays practical. Work is discussed before it is priced—no one-size quotes—so the frame matches your drawings, lot conditions, and the handoff the rest of the build needs without inflated promises.",
    image: "/images/hero/framing-neighborhood.webp",
    imageAlt: "New residential wood framing under construction",
    accent: "copper",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "addition",
    label: "Addition",
    title: "Home Addition Framing",
    description:
      "Framing for residential additions in Bellingham, with careful attention to how new structure meets the existing home. Floor levels, wall planes, openings, and load paths need accurate layout so the addition feels intentional—not patched on. Occupied homes also need clear sequencing, temporary protection, and site access planning while living space stays in use. Bring sketches or plans if you have them; early room goals still help start the talk. Scope is confirmed in conversation, then estimated around the real tie-in work your project needs.",
    image: "/images/hero/frame-beams.jpg",
    imageAlt: "Timber framing details for a residential addition",
    accent: "charcoal",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "renovation",
    label: "Renovation",
    title: "Renovation Framing",
    description:
      "Renovation framing for Bellingham homes where walls, openings, or structural updates need precise carpentry. Opening layouts, selective reframing, and careful measuring matter when the existing house sets the constraints. Temporary support and coordination with other trades belong in a practical scope talk—not as afterthoughts mid-job. Share what is changing, what stays, preferred timing, and any drawings you have. You get a framing-focused estimate after the work is defined, leaving the structure ready for mechanicals and finishes that follow.",
    image: "/images/hero/framing-crew.webp",
    imageAlt: "Crew installing sheathing on a residential frame",
    accent: "stone",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
];

type ServicesProps = {
  content?: LandingPageContent["services"];
};

export function Services({ content }: ServicesProps = {}) {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.08, id: "reveal-services" });

  const title = content?.title ?? servicesContent.title;
  const items = content?.items ?? defaultShowcaseItems;

  return (
    <section
      id="services"
      ref={ref}
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory px-5 py-14 text-charcoal md:px-8 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="services-heading"
            className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-charcoal"
          >
            {title}
          </h2>
        </div>

        <div className="mt-8" data-reveal>
          <SpatialServiceShowcase items={items} autoPlayMs={5000} />
        </div>
      </div>
    </section>
  );
}
