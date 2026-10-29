import Image from "next/image";
import { Button } from "@/components/ui/Button";

type Cta = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  supporting: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  image: string;
  imageAlt: string;
};

/** Compact full-bleed hero for service × area pages (homepage keeps the heavy Hero). */
export function PageHero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[22rem] overflow-hidden bg-charcoal text-ivory md:min-h-[26rem]"
      aria-label={headline}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/70 to-charcoal/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:px-8 md:pb-14 md:pt-32">
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-copper-bright">
          {eyebrow}
        </p>

        <h1
          id="page-title"
          className="max-w-3xl font-display text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ivory"
        >
          {headline}
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/78 md:text-lg">
          {supporting}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
