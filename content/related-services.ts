import { getServiceBySlug, pagePath, type AreaDef, type ServiceDef } from "@/content/pages";

/** Bidirectional related-service pairs for About-body interlinking. */
const RELATED_SERVICE_SLUG: Record<string, string> = {
  framing: "adu-additions",
  "adu-additions": "framing",
  siding: "painting",
  painting: "siding",
  roofing: "siding",
  plumbing: "electrical",
  electrical: "plumbing",
  decks: "fences",
  fences: "decks",
  windows: "siding",
  "flat-work-concrete": "decks",
  remodeling: "home-renovation",
  "home-renovation": "remodeling",
};

/** Phrases matched (case-insensitive) when linking the related service inline. */
const RELATED_MATCH_PHRASES: Record<string, string[]> = {
  framing: ["structural framing", "house framing", "framing"],
  "adu-additions": [
    "accessory dwelling unit",
    "accessory dwelling",
    "home addition",
    "ADU additions",
    "ADU",
  ],
  siding: ["siding"],
  painting: ["painting", "paint"],
  roofing: ["roofing", "roof"],
  plumbing: ["plumbing"],
  electrical: ["electrical"],
  decks: ["decking", "decks", "deck"],
  fences: ["fencing", "fences", "fence"],
  windows: ["windows", "window"],
  "flat-work-concrete": [
    "flat work concrete",
    "flat-work concrete",
    "flatwork concrete",
    "flatwork",
    "concrete",
  ],
  remodeling: ["remodeling", "remodel"],
  "home-renovation": ["home renovation", "renovation"],
};

export type AboutInternalLinks = {
  /** Homepage brand target; null skips brand linking (already on `/`). */
  brandHref: string | null;
  relatedHref: string;
  relatedLabel: string;
  relatedPhrases: string[];
  areaNameShort: string;
};

export function getRelatedServiceSlug(serviceSlug: string): string | undefined {
  return RELATED_SERVICE_SLUG[serviceSlug];
}

export function getRelatedMatchPhrases(serviceSlug: string): string[] {
  return RELATED_MATCH_PHRASES[serviceSlug] ?? [];
}

/** Build About interlink meta for a service × area landing page. */
export function buildAboutInternalLinks(
  service: ServiceDef,
  area: AreaDef,
): AboutInternalLinks | undefined {
  const relatedSlug = getRelatedServiceSlug(service.slug);
  const related = relatedSlug ? getServiceBySlug(relatedSlug) : undefined;
  if (!related) return undefined;

  const isHomepage =
    service.slug === "framing" && area.slug === "bellingham-wa";

  return {
    brandHref: isHomepage ? null : "/",
    relatedHref: pagePath(related.slug, area.slug),
    relatedLabel: related.name,
    relatedPhrases: getRelatedMatchPhrases(related.slug),
    areaNameShort: area.nameShort,
  };
}
