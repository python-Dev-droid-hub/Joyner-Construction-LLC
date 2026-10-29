import { existsSync } from "node:fs";
import path from "node:path";
import {
  expectedServiceImagePaths,
  SERVICE_IMAGE_SLOTS,
  type ServiceImagePack,
} from "@/content/service-images";

/**
 * Temporary unique fillers when a service folder pack is incomplete.
 * Prefer process/hero stock, then other service stills, then fill/*.
 * Landmarks stay reserved for the Service Area section only.
 */
const TEMP_FILL_POOL = [
  "/images/hero/frame-main.jpg",
  "/images/hero/frame-beams.jpg",
  "/images/hero/framing-crew.webp",
  "/images/hero/frame-detail.jpg",
  "/images/hero/framing-neighborhood.webp",
  "/images/fill/fill-03.jpg",
  "/images/fill/fill-04.jpg",
  "/images/fill/fill-05.jpg",
  "/images/fill/fill-06.jpg",
  "/images/fill/fill-08.jpg",
  "/images/services/framing.jpg",
  "/images/services/siding.jpg",
  "/images/services/plumbing.jpg",
  "/images/services/electrical.jpg",
  "/images/services/decks.jpg",
  "/images/services/fences.jpg",
  "/images/services/painting.jpg",
  "/images/services/windows.jpg",
  "/images/services/flat-work-concrete.jpg",
  "/images/services/remodeling.jpg",
  "/images/services/home-renovation.jpg",
  "/images/services/adu-additions.jpg",
] as const;

/** Framing: homepage hero + the 7 images you supplied (no other stock). */
const FRAMING_PACK: ServiceImagePack = {
  hero: "/images/hero/framing-neighborhood.webp",
  orbitCenter: "/images/services/framing/02-orbit-center.jpg",
  orbitInquire: "/images/services/framing/03-orbit-inquire.jpg",
  orbitScope: "/images/services/framing/04-orbit-scope.jpg",
  orbitLayout: "/images/services/framing/05-orbit-layout.jpg",
  orbitCraft: "/images/services/framing/06-orbit-craft.jpg",
  orbitStructure: "/images/services/framing/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/framing/08-orbit-handoff.png",
  // Extra page slots — same set only (will match orbit until you send more)
  showcase1: "/images/services/framing/06-orbit-craft.jpg",
  showcase2: "/images/services/framing/04-orbit-scope.jpg",
  showcase3: "/images/services/framing/05-orbit-layout.jpg",
  cta: "/images/services/framing/07-orbit-structure.jpg",
  faq: "/images/services/framing/03-orbit-inquire.jpg",
};

/** Siding: existing siding still as hero + 7 new orbit images. */
const SIDING_PACK: ServiceImagePack = {
  hero: "/images/services/siding.jpg",
  orbitCenter: "/images/services/siding/02-orbit-center.png",
  orbitInquire: "/images/services/siding/03-orbit-inquire.jpg",
  orbitScope: "/images/services/siding/04-orbit-scope.jpg",
  orbitLayout: "/images/services/siding/05-orbit-layout.jpg",
  orbitCraft: "/images/services/siding/06-orbit-craft.jpg",
  orbitStructure: "/images/services/siding/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/siding/08-orbit-handoff.jpg",
  showcase1: "/images/services/siding/06-orbit-craft.jpg",
  showcase2: "/images/services/siding/04-orbit-scope.jpg",
  showcase3: "/images/services/siding/05-orbit-layout.jpg",
  cta: "/images/services/siding/07-orbit-structure.jpg",
  faq: "/images/services/siding/03-orbit-inquire.jpg",
};

/** Roofing: existing roofing still as hero + 7 new orbit images. */
const ROOFING_PACK: ServiceImagePack = {
  hero: "/images/services/roofing.jpg",
  orbitCenter: "/images/services/roofing/02-orbit-center.jpg",
  orbitInquire: "/images/services/roofing/03-orbit-inquire.png",
  orbitScope: "/images/services/roofing/04-orbit-scope.png",
  orbitLayout: "/images/services/roofing/05-orbit-layout.png",
  orbitCraft: "/images/services/roofing/06-orbit-craft.jpg",
  orbitStructure: "/images/services/roofing/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/roofing/08-orbit-handoff.png",
  showcase1: "/images/services/roofing/06-orbit-craft.jpg",
  showcase2: "/images/services/roofing/04-orbit-scope.png",
  showcase3: "/images/services/roofing/05-orbit-layout.png",
  cta: "/images/services/roofing/07-orbit-structure.jpg",
  faq: "/images/services/roofing/03-orbit-inquire.png",
};

/** Plumbing: existing plumbing still as hero + 7 new orbit images. */
const PLUMBING_PACK: ServiceImagePack = {
  hero: "/images/services/plumbing.jpg",
  orbitCenter: "/images/services/plumbing/02-orbit-center.png",
  orbitInquire: "/images/services/plumbing/03-orbit-inquire.jpg",
  orbitScope: "/images/services/plumbing/04-orbit-scope.jpg",
  orbitLayout: "/images/services/plumbing/05-orbit-layout.png",
  orbitCraft: "/images/services/plumbing/06-orbit-craft.jpg",
  orbitStructure: "/images/services/plumbing/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/plumbing/08-orbit-handoff.png",
  showcase1: "/images/services/plumbing/06-orbit-craft.jpg",
  showcase2: "/images/services/plumbing/04-orbit-scope.jpg",
  showcase3: "/images/services/plumbing/05-orbit-layout.png",
  cta: "/images/services/plumbing/07-orbit-structure.jpg",
  faq: "/images/services/plumbing/03-orbit-inquire.jpg",
};

/** Electrical: existing electrical still as hero + 7 new orbit images. */
const ELECTRICAL_PACK: ServiceImagePack = {
  hero: "/images/services/electrical.jpg",
  orbitCenter: "/images/services/electrical/02-orbit-center.jpg",
  orbitInquire: "/images/services/electrical/03-orbit-inquire.png",
  orbitScope: "/images/services/electrical/04-orbit-scope.png",
  orbitLayout: "/images/services/electrical/05-orbit-layout.jpg",
  orbitCraft: "/images/services/electrical/06-orbit-craft.png",
  orbitStructure: "/images/services/electrical/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/electrical/08-orbit-handoff.png",
  showcase1: "/images/services/electrical/06-orbit-craft.png",
  showcase2: "/images/services/electrical/04-orbit-scope.png",
  showcase3: "/images/services/electrical/05-orbit-layout.jpg",
  cta: "/images/services/electrical/07-orbit-structure.jpg",
  faq: "/images/services/electrical/03-orbit-inquire.png",
};

/** Decks: existing decks still as hero + 7 new orbit images. */
const DECKS_PACK: ServiceImagePack = {
  hero: "/images/services/decks.jpg",
  orbitCenter: "/images/services/decks/02-orbit-center.jpg",
  orbitInquire: "/images/services/decks/03-orbit-inquire.jpg",
  orbitScope: "/images/services/decks/04-orbit-scope.jpg",
  orbitLayout: "/images/services/decks/05-orbit-layout.jpg",
  orbitCraft: "/images/services/decks/06-orbit-craft.png",
  orbitStructure: "/images/services/decks/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/decks/08-orbit-handoff.jpg",
  showcase1: "/images/services/decks/06-orbit-craft.png",
  showcase2: "/images/services/decks/04-orbit-scope.jpg",
  showcase3: "/images/services/decks/05-orbit-layout.jpg",
  cta: "/images/services/decks/07-orbit-structure.jpg",
  faq: "/images/services/decks/03-orbit-inquire.jpg",
};

/** Fences: existing fences still as hero + 7 new orbit images. */
const FENCES_PACK: ServiceImagePack = {
  hero: "/images/services/fences.jpg",
  orbitCenter: "/images/services/fences/02-orbit-center.png",
  orbitInquire: "/images/services/fences/03-orbit-inquire.jpg",
  orbitScope: "/images/services/fences/04-orbit-scope.jpg",
  orbitLayout: "/images/services/fences/05-orbit-layout.jpg",
  orbitCraft: "/images/services/fences/06-orbit-craft.jpg",
  orbitStructure: "/images/services/fences/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/fences/08-orbit-handoff.jpg",
  showcase1: "/images/services/fences/06-orbit-craft.jpg",
  showcase2: "/images/services/fences/04-orbit-scope.jpg",
  showcase3: "/images/services/fences/05-orbit-layout.jpg",
  cta: "/images/services/fences/07-orbit-structure.jpg",
  faq: "/images/services/fences/03-orbit-inquire.jpg",
};

/** Painting: existing painting still as hero + 7 new orbit images. */
const PAINTING_PACK: ServiceImagePack = {
  hero: "/images/services/painting.jpg",
  orbitCenter: "/images/services/painting/02-orbit-center.jpg",
  orbitInquire: "/images/services/painting/03-orbit-inquire.png",
  orbitScope: "/images/services/painting/04-orbit-scope.png",
  orbitLayout: "/images/services/painting/05-orbit-layout.jpg",
  orbitCraft: "/images/services/painting/06-orbit-craft.jpg",
  orbitStructure: "/images/services/painting/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/painting/08-orbit-handoff.png",
  showcase1: "/images/services/painting/06-orbit-craft.jpg",
  showcase2: "/images/services/painting/04-orbit-scope.png",
  showcase3: "/images/services/painting/05-orbit-layout.jpg",
  cta: "/images/services/painting/07-orbit-structure.jpg",
  faq: "/images/services/painting/03-orbit-inquire.png",
};

/** Windows: existing windows still as hero + 7 new orbit images. */
const WINDOWS_PACK: ServiceImagePack = {
  hero: "/images/services/windows.jpg",
  orbitCenter: "/images/services/windows/02-orbit-center.jpg",
  orbitInquire: "/images/services/windows/03-orbit-inquire.png",
  orbitScope: "/images/services/windows/04-orbit-scope.jpg",
  orbitLayout: "/images/services/windows/05-orbit-layout.png",
  orbitCraft: "/images/services/windows/06-orbit-craft.jpg",
  orbitStructure: "/images/services/windows/07-orbit-structure.png",
  orbitHandoff: "/images/services/windows/08-orbit-handoff.png",
  showcase1: "/images/services/windows/06-orbit-craft.jpg",
  showcase2: "/images/services/windows/04-orbit-scope.jpg",
  showcase3: "/images/services/windows/05-orbit-layout.png",
  cta: "/images/services/windows/07-orbit-structure.png",
  faq: "/images/services/windows/03-orbit-inquire.png",
};

/** Flat work concrete: existing still as hero + 7 new orbit images. */
const FLAT_WORK_CONCRETE_PACK: ServiceImagePack = {
  hero: "/images/services/flat-work-concrete.jpg",
  orbitCenter: "/images/services/flat-work-concrete/02-orbit-center.jpg",
  orbitInquire: "/images/services/flat-work-concrete/03-orbit-inquire.jpg",
  orbitScope: "/images/services/flat-work-concrete/04-orbit-scope.jpg",
  orbitLayout: "/images/services/flat-work-concrete/05-orbit-layout.jpg",
  orbitCraft: "/images/services/flat-work-concrete/06-orbit-craft.jpg",
  orbitStructure: "/images/services/flat-work-concrete/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/flat-work-concrete/08-orbit-handoff.png",
  showcase1: "/images/services/flat-work-concrete/06-orbit-craft.jpg",
  showcase2: "/images/services/flat-work-concrete/04-orbit-scope.jpg",
  showcase3: "/images/services/flat-work-concrete/05-orbit-layout.jpg",
  cta: "/images/services/flat-work-concrete/07-orbit-structure.jpg",
  faq: "/images/services/flat-work-concrete/03-orbit-inquire.jpg",
};

/** Remodeling: existing remodeling still as hero + 7 new orbit images. */
const REMODELING_PACK: ServiceImagePack = {
  hero: "/images/services/remodeling.jpg",
  orbitCenter: "/images/services/remodeling/02-orbit-center.png",
  orbitInquire: "/images/services/remodeling/03-orbit-inquire.jpg",
  orbitScope: "/images/services/remodeling/04-orbit-scope.png",
  orbitLayout: "/images/services/remodeling/05-orbit-layout.jpg",
  orbitCraft: "/images/services/remodeling/06-orbit-craft.jpg",
  orbitStructure: "/images/services/remodeling/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/remodeling/08-orbit-handoff.jpg",
  showcase1: "/images/services/remodeling/06-orbit-craft.jpg",
  showcase2: "/images/services/remodeling/04-orbit-scope.png",
  showcase3: "/images/services/remodeling/05-orbit-layout.jpg",
  cta: "/images/services/remodeling/07-orbit-structure.jpg",
  faq: "/images/services/remodeling/03-orbit-inquire.jpg",
};

/** Home renovation: existing still as hero + 7 new orbit images. */
const HOME_RENOVATION_PACK: ServiceImagePack = {
  hero: "/images/services/home-renovation.jpg",
  orbitCenter: "/images/services/home-renovation/02-orbit-center.jpg",
  orbitInquire: "/images/services/home-renovation/03-orbit-inquire.jpg",
  orbitScope: "/images/services/home-renovation/04-orbit-scope.png",
  orbitLayout: "/images/services/home-renovation/05-orbit-layout.jpg",
  orbitCraft: "/images/services/home-renovation/06-orbit-craft.jpg",
  orbitStructure: "/images/services/home-renovation/07-orbit-structure.jpg",
  orbitHandoff: "/images/services/home-renovation/08-orbit-handoff.png",
  showcase1: "/images/services/home-renovation/06-orbit-craft.jpg",
  showcase2: "/images/services/home-renovation/04-orbit-scope.png",
  showcase3: "/images/services/home-renovation/05-orbit-layout.jpg",
  cta: "/images/services/home-renovation/07-orbit-structure.jpg",
  faq: "/images/services/home-renovation/03-orbit-inquire.jpg",
};

/** ADU additions: existing still as hero + 7 new orbit images. */
const ADU_ADDITIONS_PACK: ServiceImagePack = {
  hero: "/images/services/adu-additions.jpg",
  orbitCenter: "/images/services/adu-additions/02-orbit-center.png",
  orbitInquire: "/images/services/adu-additions/03-orbit-inquire.jpg",
  orbitScope: "/images/services/adu-additions/04-orbit-scope.jpg",
  orbitLayout: "/images/services/adu-additions/05-orbit-layout.jpg",
  orbitCraft: "/images/services/adu-additions/06-orbit-craft.jpg",
  orbitStructure: "/images/services/adu-additions/07-orbit-structure.png",
  orbitHandoff: "/images/services/adu-additions/08-orbit-handoff.jpg",
  showcase1: "/images/services/adu-additions/06-orbit-craft.jpg",
  showcase2: "/images/services/adu-additions/04-orbit-scope.jpg",
  showcase3: "/images/services/adu-additions/05-orbit-layout.jpg",
  cta: "/images/services/adu-additions/07-orbit-structure.png",
  faq: "/images/services/adu-additions/03-orbit-inquire.jpg",
};

function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}

/**
 * Build a pack with no repeated paths on the page when possible.
 * Framing uses the curated pack from your uploads.
 */
export function getServiceImagePack(
  slug: string,
  legacyHero: string,
): ServiceImagePack {
  if (slug === "framing") {
    return FRAMING_PACK;
  }
  if (slug === "siding") {
    return SIDING_PACK;
  }
  if (slug === "roofing") {
    return ROOFING_PACK;
  }
  if (slug === "plumbing") {
    return PLUMBING_PACK;
  }
  if (slug === "electrical") {
    return ELECTRICAL_PACK;
  }
  if (slug === "decks") {
    return DECKS_PACK;
  }
  if (slug === "fences") {
    return FENCES_PACK;
  }
  if (slug === "painting") {
    return PAINTING_PACK;
  }
  if (slug === "windows") {
    return WINDOWS_PACK;
  }
  if (slug === "flat-work-concrete") {
    return FLAT_WORK_CONCRETE_PACK;
  }
  if (slug === "remodeling") {
    return REMODELING_PACK;
  }
  if (slug === "home-renovation") {
    return HOME_RENOVATION_PACK;
  }
  if (slug === "adu-additions") {
    return ADU_ADDITIONS_PACK;
  }

  const expected = expectedServiceImagePaths(slug);
  const used = new Set<string>();
  const pack = {} as ServiceImagePack;

  const take = (preferred: string, fallbackHero?: string): string => {
    if (preferred && publicFileExists(preferred) && !used.has(preferred)) {
      used.add(preferred);
      return preferred;
    }
    if (
      fallbackHero &&
      publicFileExists(fallbackHero) &&
      !used.has(fallbackHero)
    ) {
      used.add(fallbackHero);
      return fallbackHero;
    }
    for (const candidate of TEMP_FILL_POOL) {
      if (!used.has(candidate) && publicFileExists(candidate)) {
        used.add(candidate);
        return candidate;
      }
    }
    used.add(preferred);
    return preferred;
  };

  for (const slot of SERVICE_IMAGE_SLOTS) {
    if (slot.key === "hero") {
      pack.hero = take(expected.hero, legacyHero);
      continue;
    }
    pack[slot.key] = take(expected[slot.key]);
  }

  return pack;
}
