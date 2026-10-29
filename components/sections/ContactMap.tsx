"use client";

import { MapPin } from "lucide-react";
import { contactContent } from "@/content/site";

type ContactMapProps = {
  map?: {
    lat: number;
    lng: number;
    zoomLabel: string;
  };
  title?: string;
};

/** OpenStreetMap embed — no API key. */
export function ContactMap({
  map = contactContent.map,
  title = "Map of residential construction service area",
}: ContactMapProps = {}) {
  const { lat, lng, zoomLabel } = map;
  const delta = 0.09;
  const bbox = [
    lng - delta,
    lat - delta * 0.65,
    lng + delta,
    lat + delta * 0.65,
  ].join("%2C");

  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="flex h-full min-h-[18rem] flex-col overflow-hidden border border-charcoal/10 bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-charcoal/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-copper" aria-hidden="true" />
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-stone">
            Service map
          </p>
        </div>
        <p className="truncate text-xs text-stone-ink">{zoomLabel}</p>
      </div>

      <div className="relative min-h-[14rem] flex-1 bg-stone/10">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
