"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import { ChevronRight, Hammer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type ServiceShowcaseId = string;

export interface ServiceShowcaseItem {
  id: ServiceShowcaseId;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: "copper" | "charcoal" | "stone";
  ctaHref?: string;
  ctaLabel?: string;
}

const ACCENT = {
  copper: {
    glow: "rgba(184, 115, 74, 0.18)",
    dot: "bg-copper",
  },
  charcoal: {
    glow: "rgba(20, 18, 16, 0.1)",
    dot: "bg-charcoal",
  },
  stone: {
    glow: "rgba(138, 132, 122, 0.16)",
    dot: "bg-stone",
  },
} as const;

const AUTO_MS = 5000;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
  exit: { opacity: 0, y: -8 },
};

const imageVariants: Variants = {
  initial: { opacity: 0, scale: 1.08 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 24 },
  },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.18 } },
};

type SpatialServiceShowcaseProps = {
  items: ServiceShowcaseItem[];
  className?: string;
  /** Auto-advance interval in ms. Set 0 to disable. Default 5000. */
  autoPlayMs?: number;
};

export default function SpatialServiceShowcase({
  items,
  className,
  autoPlayMs = AUTO_MS,
}: SpatialServiceShowcaseProps) {
  const [activeId, setActiveId] = useState<ServiceShowcaseId>(
    items[0]?.id ?? "",
  );
  const [paused, setPaused] = useState(false);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const current = items[activeIndex] ?? items[0];
  const accent = ACCENT[current?.accent ?? "copper"];

  const options = useMemo(
    () => items.map((item) => ({ id: item.id, label: item.label })),
    [items],
  );

  useEffect(() => {
    if (!autoPlayMs || items.length < 2 || paused) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setActiveId((prev) => {
        const i = items.findIndex((item) => item.id === prev);
        const next = (i + 1) % items.length;
        return items[next].id;
      });
    }, autoPlayMs);

    return () => window.clearInterval(id);
  }, [autoPlayMs, items, paused]);

  if (!current) return null;

  return (
    <div
      className={cn("relative w-full bg-ivory text-charcoal", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `radial-gradient(circle at 22% 48%, ${accent.glow}, transparent 52%)`,
        }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-1 py-4 md:grid-cols-2 md:gap-12 md:py-6 lg:gap-16">
        <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center md:mx-0">
          <div className="relative aspect-square w-full max-w-[26rem]">
            <div
              className="pointer-events-none absolute inset-[-6%] rounded-full border border-charcoal/[0.07]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-[-12%] rounded-full border border-charcoal/[0.05]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-[-18%] rounded-full border border-dashed border-charcoal/[0.08]"
              aria-hidden="true"
            />

            <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-ivory bg-stone/10 shadow-[0_28px_70px_-30px_rgba(20,18,16,0.55)] ring-1 ring-charcoal/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    title={current.imageAlt}
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    quality={92}
                    className="object-cover object-center contrast-[1.05] saturate-[1.06]"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2">
              <div className="flex items-center gap-2 rounded-full border border-charcoal/10 bg-ivory px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone shadow-[0_10px_28px_-14px_rgba(20,18,16,0.4)]">
                <span
                  className={cn("h-1.5 w-1.5 rounded-full", accent.dot)}
                  aria-hidden="true"
                />
                Bellingham, WA
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:pl-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-start text-left"
            >
              <motion.p
                variants={itemVariants}
                className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-copper"
              >
                {current.label}
              </motion.p>

              <motion.h3
                variants={itemVariants}
                className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-charcoal"
              >
                {current.title}
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-lg text-base leading-relaxed text-stone-ink md:text-[1.05rem]"
              >
                {current.description}
              </motion.p>

              <motion.div variants={itemVariants} className="mt-8">
                <Button
                  href={current.ctaHref ?? "#contact"}
                  variant="primaryOnLight"
                  className="min-h-11"
                >
                  <span className="inline-flex items-center gap-2">
                    <Hammer size={14} aria-hidden="true" />
                    {current.ctaLabel ?? "Request an Estimate"}
                    <ChevronRight size={14} aria-hidden="true" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-20 flex justify-center px-4 pb-4 pt-1">
        <div
          className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-charcoal/10 bg-ivory p-1.5 shadow-[0_14px_40px_-24px_rgba(20,18,16,0.4)]"
          role="tablist"
          aria-label="Framing services"
        >
          {options.map((opt) => {
            const selected = activeId === opt.id;
            return (
              <motion.button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(opt.id)}
                whileTap={{ scale: 0.97 }}
                className="relative min-h-11 rounded-full px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper sm:px-5"
              >
                {selected ? (
                  <motion.div
                    layoutId="service-tab-surface"
                    className="absolute inset-0 rounded-full bg-charcoal shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 26,
                    }}
                  />
                ) : null}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    selected ? "text-ivory" : "text-stone hover:text-charcoal",
                  )}
                >
                  {opt.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
