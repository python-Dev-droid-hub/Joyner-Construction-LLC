"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type TestimonialItem = {
  name: string;
  handle: string;
  description: string;
  image: string;
};

type AnimatedTestimonialsProps = {
  data: TestimonialItem[];
  className?: string;
  cardClassName?: string;
  /** Number of marquee rows. Default 2. */
  rows?: number;
};

function TestimonialCard({
  item,
  className,
}: {
  item: TestimonialItem;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex w-80 shrink-0 flex-col gap-4 border border-charcoal/10 bg-ivory/95 p-5 shadow-[0_18px_40px_-28px_rgba(20,18,16,0.45)] backdrop-blur-sm",
        className,
      )}
    >
      <blockquote className="text-sm leading-relaxed text-charcoal/80">
        “{item.description}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <div className="relative size-10 overflow-hidden rounded-full bg-stone/20 ring-1 ring-charcoal/10">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="truncate text-sm font-semibold tracking-tight text-charcoal">
            {item.name}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

/** Repeat items until the strip is wide enough for a seamless loop on large screens. */
function fillTrack(items: TestimonialItem[], minCount = 8) {
  if (!items.length) return [];
  const out: TestimonialItem[] = [];
  while (out.length < minCount) {
    out.push(...items);
  }
  return out;
}

function MarqueeRow({
  items,
  reverse = false,
  duration = "42s",
  cardClassName,
}: {
  items: TestimonialItem[];
  reverse?: boolean;
  duration?: string;
  cardClassName?: string;
}) {
  const track = fillTrack(items);
  /** One full set duplicated → animate by -50% for a seamless infinite loop. */
  const loop = [...track, ...track];

  return (
    <div
      className="group/marquee w-full overflow-hidden"
      style={{ "--duration": duration } as CSSProperties}
    >
      <div
        className={cn(
          "flex w-max gap-4 pr-4 group-hover/marquee:[animation-play-state:paused]",
          reverse ? "animate-testimonials-marquee-reverse" : "animate-testimonials-marquee",
        )}
      >
        {loop.map((item, index) => (
          <TestimonialCard
            key={`${reverse ? "rev" : "fwd"}-${item.name}-${index}`}
            item={item}
            className={cardClassName}
          />
        ))}
      </div>
    </div>
  );
}

function splitRows(data: TestimonialItem[], rows: number) {
  const buckets: TestimonialItem[][] = Array.from({ length: rows }, () => []);
  data.forEach((item, index) => {
    buckets[index % rows].push(item);
  });
  return buckets.map((row) => (row.length ? row : data));
}

export function AnimatedTestimonials({
  data,
  className,
  cardClassName,
  rows = 2,
}: AnimatedTestimonialsProps) {
  const rowData = splitRows(data, Math.max(1, rows));

  return (
    <div
      className={cn(
        "relative flex w-full flex-col gap-4 py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
    >
      {rowData.map((items, index) => (
        <MarqueeRow
          key={`row-${index}`}
          items={items}
          reverse={index % 2 === 1}
          duration={index % 2 === 0 ? "48s" : "56s"}
          cardClassName={cardClassName}
        />
      ))}
    </div>
  );
}
