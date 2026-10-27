import Image from "next/image";
import { HeroAtmosphere } from "@/components/hero/HeroAtmosphere";
import { Button } from "@/components/ui/Button";
import { heroContent, heroImages } from "@/content/site";

/** Static full-viewport hero — single image, no scroll motion. */
export function Hero() {
  return (
    <section
      id="home"
      className="hero-root relative h-[100svh] min-h-[36rem] overflow-hidden bg-charcoal text-ivory"
      aria-label="Residential framing in Bellingham"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImages.main.src}
          alt={heroImages.main.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-charcoal/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/35" />
        <HeroAtmosphere />
      </div>

      <div className="relative z-10 flex h-full items-end md:items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 drop-shadow-[0_2px_24px_rgba(20,18,16,0.45)] md:px-8 md:pb-24 md:pt-32">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-copper-bright md:mb-6">
            {heroContent.eyebrow}
          </p>

          <h1
            id="page-title"
            className="max-w-3xl font-display text-[clamp(2.35rem,6.5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-ivory"
          >
            {heroContent.headline}
          </h1>

          <p className="mt-4 max-w-2xl font-display text-[clamp(1.35rem,3.2vw,2.15rem)] font-semibold leading-tight tracking-[-0.01em] text-ivory/88 md:mt-5">
            {heroContent.brandLine}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/78 md:mt-8 md:text-lg">
            {heroContent.supporting}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <Button href={heroContent.primaryCta.href} variant="primary">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
