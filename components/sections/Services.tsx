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
      "New residential construction requires framing that accommodates the planned floor plan and building specifications. Joyner Construction LLC coordinates new home framing in Bellingham, WA, with attention to wall layouts, openings, and specified structural materials.",
    image: "/images/hero/framing-neighborhood.webp",
    imageAlt: "New home framing under construction in Bellingham, WA",
    accent: "copper",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "addition",
    label: "Addition",
    title: "Home Addition Framing",
    description:
      "A home expansion changes the building's existing footprint and requires a coordinated framing plan. We discuss additional wall systems, structural connections, measurements, and material requirements for planned residential additions.",
    image: "/images/hero/frame-beams.jpg",
    imageAlt: "Home addition framing in Bellingham, WA",
    accent: "charcoal",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "renovation",
    label: "Renovation",
    title: "Renovation Framing",
    description:
      "Remodeling projects may require revised room divisions, replacement wall sections, or updated framing arrangements. Our renovation framing services follow project specifications while considering how new components connect with existing construction.",
    image: "/images/hero/framing-crew.webp",
    imageAlt: "Renovation framing work in Bellingham, WA",
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
