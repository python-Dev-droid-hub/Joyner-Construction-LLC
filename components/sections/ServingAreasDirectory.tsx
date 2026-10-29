import Image from "next/image";
import { areas, pagePath, services } from "@/content/pages";
import { getAreaLandmark } from "@/content/service-images";
import { Button } from "@/components/ui/Button";

export function ServingAreasDirectory() {
  return (
    <div className="bg-ivory text-charcoal">
      {areas.map((area, index) => {
        const landmark = getAreaLandmark(area.slug);
        const isAlt = index % 2 === 1;

        return (
          <section
            key={area.slug}
            id={area.slug}
            className={`scroll-mt-24 border-t border-charcoal/10 ${
              isAlt ? "bg-charcoal/[0.03]" : "bg-ivory"
            }`}
            aria-labelledby={`services-in-${area.slug}`}
          >
            <div
              className={`mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14 lg:py-20 ${
                isAlt ? "lg:[grid-template-columns:minmax(0,1.05fr)_minmax(0,0.95fr)]" : ""
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden lg:aspect-[5/4] ${
                  isAlt ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={landmark}
                  alt={`${area.name} landmark`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>

              <div className={isAlt ? "lg:order-1" : undefined}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
                  Serving Area
                </p>
                <h2
                  id={`services-in-${area.slug}`}
                  className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-charcoal"
                >
                  Services in {area.name}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-ink">
                  Choose a service below to see details for residential work in{" "}
                  {area.nameShort}. Each page covers scope, local context, and how
                  to request an estimate.
                </p>

                <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {services.map((service) => (
                    <li key={service.slug} className="min-w-0">
                      <Button
                        href={pagePath(service.slug, area.slug)}
                        variant="secondaryOnLight"
                        className="h-full min-h-11 w-full px-3 text-center text-[0.62rem] leading-snug tracking-[0.12em] sm:text-[0.65rem]"
                      >
                        {service.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
