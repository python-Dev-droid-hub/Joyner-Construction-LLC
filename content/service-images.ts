/**
 * Unique image slots for each service landing page (no repeats on one page).
 *
 * Drop files into: `public/images/services/{slug}/`
 * Example: `public/images/services/roofing/01-hero.jpg`
 *
 * Per service: **13 images**
 * Plus city landmarks (shared): **4 images** (one per area)
 */

export const SERVICE_IMAGE_SLOTS = [
  { key: "hero", file: "01-hero.jpg", label: "Hero banner" },
  { key: "orbitCenter", file: "02-orbit-center.jpg", label: "Orbit · center" },
  {
    key: "orbitInquire",
    file: "03-orbit-inquire.jpg",
    label: "Orbit · Inquire",
  },
  { key: "orbitScope", file: "04-orbit-scope.jpg", label: "Orbit · Scope" },
  { key: "orbitLayout", file: "05-orbit-layout.jpg", label: "Orbit · Layout" },
  { key: "orbitCraft", file: "06-orbit-craft.jpg", label: "Orbit · Craft" },
  {
    key: "orbitStructure",
    file: "07-orbit-structure.jpg",
    label: "Orbit · Structure",
  },
  {
    key: "orbitHandoff",
    file: "08-orbit-handoff.png",
    label: "Orbit · Handoff",
  },
  { key: "showcase1", file: "09-showcase-1.jpg", label: "Services card 1" },
  { key: "showcase2", file: "10-showcase-2.jpg", label: "Services card 2" },
  { key: "showcase3", file: "11-showcase-3.jpg", label: "Services card 3" },
  { key: "cta", file: "12-cta.jpg", label: "CTA banner background" },
  { key: "faq", file: "13-faq.jpg", label: "FAQ side image" },
] as const;

export type ServiceImageKey = (typeof SERVICE_IMAGE_SLOTS)[number]["key"];

export type ServiceImagePack = Record<ServiceImageKey, string>;

/** One landmark photo per city (Service Area section only — not in the 13). */
export const AREA_LANDMARKS: Record<string, string> = {
  "bellingham-wa": "/images/service-area/bellingham-landmark.jpg",
  "ferndale-wa": "/images/service-area/ferndale-landmark.jpg",
  "lynden-wa": "/images/service-area/lynden-landmark.jpg",
  "burlington-wa": "/images/service-area/burlington-landmark.jpg",
};

export function serviceImagePath(slug: string, file: string): string {
  return `/images/services/${slug}/${file}`;
}

export function expectedServiceImagePaths(slug: string): ServiceImagePack {
  return Object.fromEntries(
    SERVICE_IMAGE_SLOTS.map((slot) => [
      slot.key,
      serviceImagePath(slug, slot.file),
    ]),
  ) as ServiceImagePack;
}

export function getAreaLandmark(areaSlug: string): string {
  return (
    AREA_LANDMARKS[areaSlug] ?? "/images/service-area/bellingham-landmark.jpg"
  );
}
