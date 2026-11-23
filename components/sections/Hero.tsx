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
      aria-label="Structural framing in Bellingham"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImages.main.src}
          alt={heroImages.main.alt}
          title={heroImages.main.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-charcoal/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/35" />
        <HeroAtmosphere />
      </div>

      {/* Top padding reserves the fixed header so long mobile copy cannot
          grow upward into the logo when content is bottom-aligned. */}
      <div className="relative z-10 flex h-full min-h-0 items-end overflow-y-auto overscroll-y-contain pt-[calc(var(--site-header-h)+1rem)] md:items-center md:overflow-visible md:pt-[calc(var(--site-header-h)+1.25rem)]">
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-3 drop-shadow-[0_2px_24px_rgba(20,18,16,0.45)] md:px-8 md:pb-24 md:pt-6">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-copper-bright md:mb-6">
            {heroContent.eyebrow}
          </p>

          <h1
            id="page-title"
            className={
              heroContent.headline.length > 90
                ? "max-w-4xl font-display text-[clamp(1.35rem,3.8vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ivory"
                : "max-w-3xl font-display text-[clamp(2.1rem,6.5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-ivory"
            }
          >
            {heroContent.headline}
          </h1>

          {heroContent.brandLine ? (
            <p className="mt-4 max-w-2xl font-display text-[clamp(1.35rem,3.2vw,2.15rem)] font-semibold leading-tight tracking-[-0.01em] text-ivory/88 md:mt-5">
              {heroContent.brandLine}
            </p>
          ) : null}

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/78 md:mt-8 md:text-lg">
            {heroContent.supporting}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
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
