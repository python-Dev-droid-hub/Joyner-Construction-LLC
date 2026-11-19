import {
  bellinghamSidingHero,
  bellinghamSidingSeo,
  isBellinghamSiding,
} from "@/content/siding-bellingham";
import {
  ferndaleSidingHero,
  ferndaleSidingSeo,
  isFerndaleSiding,
} from "@/content/siding-ferndale";
import {
  lyndenSidingHero,
  lyndenSidingSeo,
  isLyndenSiding,
} from "@/content/siding-lynden";
import {
  burlingtonSidingHero,
  burlingtonSidingSeo,
  isBurlingtonSiding,
} from "@/content/siding-burlington";
import {
  burlingtonFramingHero,
  burlingtonFramingSeo,
  isBurlingtonFraming,
} from "@/content/framing-burlington";
import {
  ferndaleFramingHero,
  ferndaleFramingSeo,
  isFerndaleFraming,
} from "@/content/framing-ferndale";
import {
  lyndenFramingHero,
  lyndenFramingSeo,
  isLyndenFraming,
} from "@/content/framing-lynden";
import {
  bellinghamRoofingHero,
  bellinghamRoofingSeo,
  isBellinghamRoofing,
} from "@/content/roofing-bellingham";
import {
  ferndaleRoofingHero,
  ferndaleRoofingSeo,
  isFerndaleRoofing,
} from "@/content/roofing-ferndale";
import {
  lyndenRoofingHero,
  lyndenRoofingSeo,
  isLyndenRoofing,
} from "@/content/roofing-lynden";
import {
  burlingtonRoofingHero,
  burlingtonRoofingSeo,
  isBurlingtonRoofing,
} from "@/content/roofing-burlington";
import {
  bellinghamPlumbingHero,
  bellinghamPlumbingSeo,
  isBellinghamPlumbing,
} from "@/content/plumbing-bellingham";
import {
  ferndalePlumbingHero,
  ferndalePlumbingSeo,
  isFerndalePlumbing,
} from "@/content/plumbing-ferndale";
import {
  lyndenPlumbingHero,
  lyndenPlumbingSeo,
  isLyndenPlumbing,
} from "@/content/plumbing-lynden";
import {
  burlingtonPlumbingHero,
  burlingtonPlumbingSeo,
  isBurlingtonPlumbing,
} from "@/content/plumbing-burlington";
import {
  bellinghamElectricalHero,
  bellinghamElectricalSeo,
  isBellinghamElectrical,
} from "@/content/electrical-bellingham";
import {
  ferndaleElectricalHero,
  ferndaleElectricalSeo,
  isFerndaleElectrical,
} from "@/content/electrical-ferndale";
import {
  lyndenElectricalHero,
  lyndenElectricalSeo,
  isLyndenElectrical,
} from "@/content/electrical-lynden";
import {
  burlingtonElectricalHero,
  burlingtonElectricalSeo,
  isBurlingtonElectrical,
} from "@/content/electrical-burlington";
import {
  bellinghamDecksHero,
  bellinghamDecksSeo,
  isBellinghamDecks,
} from "@/content/decks-bellingham";
import {
  ferndaleDecksHero,
  ferndaleDecksSeo,
  isFerndaleDecks,
} from "@/content/decks-ferndale";
import {
  lyndenDecksHero,
  lyndenDecksSeo,
  isLyndenDecks,
} from "@/content/decks-lynden";
import {
  burlingtonDecksHero,
  burlingtonDecksSeo,
  isBurlingtonDecks,
} from "@/content/decks-burlington";
import {
  bellinghamWindowsHero,
  bellinghamWindowsSeo,
  isBellinghamWindows,
} from "@/content/windows-bellingham";
import {
  ferndaleWindowsHero,
  ferndaleWindowsSeo,
  isFerndaleWindows,
} from "@/content/windows-ferndale";
import {
  lyndenWindowsHero,
  lyndenWindowsSeo,
  isLyndenWindows,
} from "@/content/windows-lynden";
import {
  burlingtonWindowsHero,
  burlingtonWindowsSeo,
  isBurlingtonWindows,
} from "@/content/windows-burlington";
import {
  bellinghamFlatWorkConcreteHero,
  bellinghamFlatWorkConcreteSeo,
  isBellinghamFlatWorkConcrete,
} from "@/content/flat-work-concrete-bellingham";
import {
  ferndaleFlatWorkConcreteHero,
  ferndaleFlatWorkConcreteSeo,
  isFerndaleFlatWorkConcrete,
} from "@/content/flat-work-concrete-ferndale";
import {
  lyndenFlatWorkConcreteHero,
  lyndenFlatWorkConcreteSeo,
  isLyndenFlatWorkConcrete,
} from "@/content/flat-work-concrete-lynden";
import {
  burlingtonFlatWorkConcreteHero,
  burlingtonFlatWorkConcreteSeo,
  isBurlingtonFlatWorkConcrete,
} from "@/content/flat-work-concrete-burlington";

export type ServiceDef = {
  slug: string;
  name: string;
  /** Short phrase for hero supporting copy */
  blurb: string;
  image: string;
  imageAlt: string;
};

export type AreaDef = {
  slug: string;
  name: string;
  nameShort: string;
  state: "WA";
  geo: { lat: number; lng: number };
};

export const services: readonly ServiceDef[] = [
  {
    slug: "framing",
    name: "Framing",
    blurb:
      "Structural residential framing for new homes, additions, and renovation projects.",
    image: "/images/services/framing.jpg",
    imageAlt: "Residential wood framing under construction",
  },
  {
    slug: "siding",
    name: "Siding",
    blurb:
      "Exterior siding installation and replacement to protect and finish the home envelope.",
    image: "/images/services/siding.jpg",
    imageAlt: "Residential exterior siding on a home",
  },
  {
    slug: "roofing",
    name: "Roofing",
    blurb:
      "Residential roofing work focused on weather protection and clean, dependable installation.",
    image: "/images/services/roofing.jpg",
    imageAlt: "Residential roofing and construction site",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    blurb:
      "Residential plumbing support for home projects, coordinated with clear scope and scheduling.",
    image: "/images/services/plumbing.jpg",
    imageAlt: "Residential plumbing work during a home project",
  },
  {
    slug: "electrical",
    name: "Electrical",
    blurb:
      "Residential electrical work for homes and remodeling projects with careful coordination.",
    image: "/images/services/electrical.jpg",
    imageAlt: "Residential electrical panel and wiring",
  },
  {
    slug: "decks",
    name: "Decks",
    blurb:
      "Custom residential decks built for outdoor living, structure, and lasting usability.",
    image: "/images/services/decks.jpg",
    imageAlt: "Wood deck construction for a residential home",
  },
  {
    slug: "fences",
    name: "Fences",
    blurb:
      "Residential fencing for privacy, boundaries, and property definition.",
    image: "/images/services/fences.jpg",
    imageAlt: "Residential wood fence along a property line",
  },
  {
    slug: "painting",
    name: "Painting",
    blurb:
      "Interior and exterior residential painting for clean, finished living spaces.",
    image: "/images/services/painting.jpg",
    imageAlt: "Residential painting work on a home interior",
  },
  {
    slug: "windows",
    name: "Windows",
    blurb:
      "Window installation and replacement for comfort, light, and weather performance.",
    image: "/images/services/windows.jpg",
    imageAlt: "Residential window installation on a home",
  },
  {
    slug: "flat-work-concrete",
    name: "Flat Work Concrete",
    blurb:
      "Flatwork concrete for driveways, sidewalks, patios, and related residential surfaces.",
    image: "/images/services/flat-work-concrete.jpg",
    imageAlt: "Residential flatwork concrete being finished",
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    blurb:
      "Residential remodeling that updates living spaces with practical scope and clear communication.",
    image: "/images/services/remodeling.jpg",
    imageAlt: "Residential remodeling project in progress",
  },
  {
    slug: "home-renovation",
    name: "Home Renovation",
    blurb:
      "Home renovation projects that improve function and finish while keeping structure first.",
    image: "/images/services/home-renovation.jpg",
    imageAlt: "Home renovation work inside a residential property",
  },
  {
    slug: "adu-additions",
    name: "ADU Additions",
    blurb:
      "ADU and addition projects that expand living space with careful structural planning.",
    image: "/images/services/adu-additions.jpg",
    imageAlt: "Accessory dwelling unit addition under construction",
  },
] as const;

export const areas: readonly AreaDef[] = [
  {
    slug: "bellingham-wa",
    name: "Bellingham, WA",
    nameShort: "Bellingham",
    state: "WA",
    geo: { lat: 48.7519, lng: -122.4787 },
  },
  {
    slug: "ferndale-wa",
    name: "Ferndale, WA",
    nameShort: "Ferndale",
    state: "WA",
    geo: { lat: 48.8465, lng: -122.591 },
  },
  {
    slug: "lynden-wa",
    name: "Lynden, WA",
    nameShort: "Lynden",
    state: "WA",
    geo: { lat: 48.9465, lng: -122.484 },
  },
  {
    slug: "burlington-wa",
    name: "Burlington, WA",
    nameShort: "Burlington",
    state: "WA",
    geo: { lat: 48.4757, lng: -122.3254 },
  },
] as const;

const SLUG_JOIN = "-services-in-";

export function getServiceBySlug(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAreaBySlug(slug: string): AreaDef | undefined {
  return areas.find((a) => a.slug === slug);
}

/** e.g. framing-services-in-bellingham-wa */
export function buildPageSlug(serviceSlug: string, areaSlug: string): string {
  return `${serviceSlug}${SLUG_JOIN}${areaSlug}`;
}

/**
 * Homepage is the Bellingham framing serving-area page.
 * All other service × area combos use dedicated landing URLs.
 */
export function pagePath(serviceSlug: string, areaSlug: string): string {
  if (serviceSlug === "framing" && areaSlug === "bellingham-wa") {
    return "/";
  }
  return `/${buildPageSlug(serviceSlug, areaSlug)}`;
}

export function isHomepageFramingBellingham(
  serviceSlug: string,
  areaSlug: string,
): boolean {
  return serviceSlug === "framing" && areaSlug === "bellingham-wa";
}

/**
 * Landing pages with custom content + metadata that should be indexed.
 * Bellingham framing is the homepage (`/`) — already indexed separately.
 */
export function isIndexedLandingPage(
  serviceSlug: string,
  areaSlug: string,
): boolean {
  return (
    isBellinghamSiding(serviceSlug, areaSlug) ||
    isFerndaleSiding(serviceSlug, areaSlug) ||
    isLyndenSiding(serviceSlug, areaSlug) ||
    isBurlingtonSiding(serviceSlug, areaSlug) ||
    isBurlingtonFraming(serviceSlug, areaSlug) ||
    isFerndaleFraming(serviceSlug, areaSlug) ||
    isLyndenFraming(serviceSlug, areaSlug) ||
    isBellinghamRoofing(serviceSlug, areaSlug) ||
    isFerndaleRoofing(serviceSlug, areaSlug) ||
    isLyndenRoofing(serviceSlug, areaSlug) ||
    isBurlingtonRoofing(serviceSlug, areaSlug) ||
    isFerndalePlumbing(serviceSlug, areaSlug) ||
    isLyndenPlumbing(serviceSlug, areaSlug) ||
    isBurlingtonPlumbing(serviceSlug, areaSlug) ||
    isBellinghamElectrical(serviceSlug, areaSlug) ||
    isFerndaleElectrical(serviceSlug, areaSlug) ||
    isLyndenElectrical(serviceSlug, areaSlug) ||
    isBurlingtonElectrical(serviceSlug, areaSlug) ||
    isBellinghamDecks(serviceSlug, areaSlug) ||
    isFerndaleDecks(serviceSlug, areaSlug) ||
    isLyndenDecks(serviceSlug, areaSlug) ||
    isBurlingtonDecks(serviceSlug, areaSlug) ||
    isBellinghamWindows(serviceSlug, areaSlug) ||
    isFerndaleWindows(serviceSlug, areaSlug) ||
    isLyndenWindows(serviceSlug, areaSlug) ||
    isBurlingtonWindows(serviceSlug, areaSlug)
  );
}

export function indexedLandingPaths(): string[] {
  return areas.flatMap((area) =>
    services
      .filter((service) => isIndexedLandingPage(service.slug, area.slug))
      .map((service) => pagePath(service.slug, area.slug)),
  );
}

export function parsePageSlug(
  slug: string,
): { service: ServiceDef; area: AreaDef } | undefined {
  const joinAt = slug.indexOf(SLUG_JOIN);
  if (joinAt <= 0) return undefined;

  const serviceSlug = slug.slice(0, joinAt);
  const areaSlug = slug.slice(joinAt + SLUG_JOIN.length);
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);

  if (!service || !area) return undefined;
  return { service, area };
}

export function allPageParams(): { slug: string }[] {
  return areas.flatMap((area) =>
    services
      .filter(
        (service) => !isHomepageFramingBellingham(service.slug, area.slug),
      )
      .map((service) => ({
        slug: buildPageSlug(service.slug, area.slug),
      })),
  );
}

type CustomPageCopy = {
  headline: string;
  supporting: string;
  title: string;
  description: string;
};

function getCustomPageCopy(
  service: ServiceDef,
  area: AreaDef,
): CustomPageCopy | undefined {
  if (isBellinghamSiding(service.slug, area.slug)) {
    return {
      headline: bellinghamSidingHero.headline,
      supporting: bellinghamSidingHero.supporting,
      title: bellinghamSidingSeo.title,
      description: bellinghamSidingSeo.description,
    };
  }
  if (isFerndaleSiding(service.slug, area.slug)) {
    return {
      headline: ferndaleSidingHero.headline,
      supporting: ferndaleSidingHero.supporting,
      title: ferndaleSidingSeo.title,
      description: ferndaleSidingSeo.description,
    };
  }
  if (isLyndenSiding(service.slug, area.slug)) {
    return {
      headline: lyndenSidingHero.headline,
      supporting: lyndenSidingHero.supporting,
      title: lyndenSidingSeo.title,
      description: lyndenSidingSeo.description,
    };
  }
  if (isBurlingtonSiding(service.slug, area.slug)) {
    return {
      headline: burlingtonSidingHero.headline,
      supporting: burlingtonSidingHero.supporting,
      title: burlingtonSidingSeo.title,
      description: burlingtonSidingSeo.description,
    };
  }
  if (isBurlingtonFraming(service.slug, area.slug)) {
    return {
      headline: burlingtonFramingHero.headline,
      supporting: burlingtonFramingHero.supporting,
      title: burlingtonFramingSeo.title,
      description: burlingtonFramingSeo.description,
    };
  }
  if (isFerndaleFraming(service.slug, area.slug)) {
    return {
      headline: ferndaleFramingHero.headline,
      supporting: ferndaleFramingHero.supporting,
      title: ferndaleFramingSeo.title,
      description: ferndaleFramingSeo.description,
    };
  }
  if (isLyndenFraming(service.slug, area.slug)) {
    return {
      headline: lyndenFramingHero.headline,
      supporting: lyndenFramingHero.supporting,
      title: lyndenFramingSeo.title,
      description: lyndenFramingSeo.description,
    };
  }
  if (isBellinghamRoofing(service.slug, area.slug)) {
    return {
      headline: bellinghamRoofingHero.headline,
      supporting: bellinghamRoofingHero.supporting,
      title: bellinghamRoofingSeo.title,
      description: bellinghamRoofingSeo.description,
    };
  }
  if (isFerndaleRoofing(service.slug, area.slug)) {
    return {
      headline: ferndaleRoofingHero.headline,
      supporting: ferndaleRoofingHero.supporting,
      title: ferndaleRoofingSeo.title,
      description: ferndaleRoofingSeo.description,
    };
  }
  if (isLyndenRoofing(service.slug, area.slug)) {
    return {
      headline: lyndenRoofingHero.headline,
      supporting: lyndenRoofingHero.supporting,
      title: lyndenRoofingSeo.title,
      description: lyndenRoofingSeo.description,
    };
  }
  if (isBurlingtonRoofing(service.slug, area.slug)) {
    return {
      headline: burlingtonRoofingHero.headline,
      supporting: burlingtonRoofingHero.supporting,
      title: burlingtonRoofingSeo.title,
      description: burlingtonRoofingSeo.description,
    };
  }
  if (isBellinghamPlumbing(service.slug, area.slug)) {
    return {
      headline: bellinghamPlumbingHero.headline,
      supporting: bellinghamPlumbingHero.supporting,
      title: bellinghamPlumbingSeo.title,
      description: bellinghamPlumbingSeo.description,
    };
  }
  if (isFerndalePlumbing(service.slug, area.slug)) {
    return {
      headline: ferndalePlumbingHero.headline,
      supporting: ferndalePlumbingHero.supporting,
      title: ferndalePlumbingSeo.title,
      description: ferndalePlumbingSeo.description,
    };
  }
  if (isLyndenPlumbing(service.slug, area.slug)) {
    return {
      headline: lyndenPlumbingHero.headline,
      supporting: lyndenPlumbingHero.supporting,
      title: lyndenPlumbingSeo.title,
      description: lyndenPlumbingSeo.description,
    };
  }
  if (isBurlingtonPlumbing(service.slug, area.slug)) {
    return {
      headline: burlingtonPlumbingHero.headline,
      supporting: burlingtonPlumbingHero.supporting,
      title: burlingtonPlumbingSeo.title,
      description: burlingtonPlumbingSeo.description,
    };
  }
  if (isBellinghamElectrical(service.slug, area.slug)) {
    return {
      headline: bellinghamElectricalHero.headline,
      supporting: bellinghamElectricalHero.supporting,
      title: bellinghamElectricalSeo.title,
      description: bellinghamElectricalSeo.description,
    };
  }
  if (isFerndaleElectrical(service.slug, area.slug)) {
    return {
      headline: ferndaleElectricalHero.headline,
      supporting: ferndaleElectricalHero.supporting,
      title: ferndaleElectricalSeo.title,
      description: ferndaleElectricalSeo.description,
    };
  }
  if (isLyndenElectrical(service.slug, area.slug)) {
    return {
      headline: lyndenElectricalHero.headline,
      supporting: lyndenElectricalHero.supporting,
      title: lyndenElectricalSeo.title,
      description: lyndenElectricalSeo.description,
    };
  }
  if (isBurlingtonElectrical(service.slug, area.slug)) {
    return {
      headline: burlingtonElectricalHero.headline,
      supporting: burlingtonElectricalHero.supporting,
      title: burlingtonElectricalSeo.title,
      description: burlingtonElectricalSeo.description,
    };
  }
  if (isBellinghamDecks(service.slug, area.slug)) {
    return {
      headline: bellinghamDecksHero.headline,
      supporting: bellinghamDecksHero.supporting,
      title: bellinghamDecksSeo.title,
      description: bellinghamDecksSeo.description,
    };
  }
  if (isFerndaleDecks(service.slug, area.slug)) {
    return {
      headline: ferndaleDecksHero.headline,
      supporting: ferndaleDecksHero.supporting,
      title: ferndaleDecksSeo.title,
      description: ferndaleDecksSeo.description,
    };
  }
  if (isLyndenDecks(service.slug, area.slug)) {
    return {
      headline: lyndenDecksHero.headline,
      supporting: lyndenDecksHero.supporting,
      title: lyndenDecksSeo.title,
      description: lyndenDecksSeo.description,
    };
  }
  if (isBurlingtonDecks(service.slug, area.slug)) {
    return {
      headline: burlingtonDecksHero.headline,
      supporting: burlingtonDecksHero.supporting,
      title: burlingtonDecksSeo.title,
      description: burlingtonDecksSeo.description,
    };
  }
  if (isBellinghamWindows(service.slug, area.slug)) {
    return {
      headline: bellinghamWindowsHero.headline,
      supporting: bellinghamWindowsHero.supporting,
      title: bellinghamWindowsSeo.title,
      description: bellinghamWindowsSeo.description,
    };
  }
  if (isFerndaleWindows(service.slug, area.slug)) {
    return {
      headline: ferndaleWindowsHero.headline,
      supporting: ferndaleWindowsHero.supporting,
      title: ferndaleWindowsSeo.title,
      description: ferndaleWindowsSeo.description,
    };
  }
  if (isLyndenWindows(service.slug, area.slug)) {
    return {
      headline: lyndenWindowsHero.headline,
      supporting: lyndenWindowsHero.supporting,
      title: lyndenWindowsSeo.title,
      description: lyndenWindowsSeo.description,
    };
  }
  if (isBurlingtonWindows(service.slug, area.slug)) {
    return {
      headline: burlingtonWindowsHero.headline,
      supporting: burlingtonWindowsHero.supporting,
      title: burlingtonWindowsSeo.title,
      description: burlingtonWindowsSeo.description,
    };
  }
  if (isBellinghamFlatWorkConcrete(service.slug, area.slug)) {
    return {
      headline: bellinghamFlatWorkConcreteHero.headline,
      supporting: bellinghamFlatWorkConcreteHero.supporting,
      title: bellinghamFlatWorkConcreteSeo.title,
      description: bellinghamFlatWorkConcreteSeo.description,
    };
  }
  if (isFerndaleFlatWorkConcrete(service.slug, area.slug)) {
    return {
      headline: ferndaleFlatWorkConcreteHero.headline,
      supporting: ferndaleFlatWorkConcreteHero.supporting,
      title: ferndaleFlatWorkConcreteSeo.title,
      description: ferndaleFlatWorkConcreteSeo.description,
    };
  }
  if (isLyndenFlatWorkConcrete(service.slug, area.slug)) {
    return {
      headline: lyndenFlatWorkConcreteHero.headline,
      supporting: lyndenFlatWorkConcreteHero.supporting,
      title: lyndenFlatWorkConcreteSeo.title,
      description: lyndenFlatWorkConcreteSeo.description,
    };
  }
  if (isBurlingtonFlatWorkConcrete(service.slug, area.slug)) {
    return {
      headline: burlingtonFlatWorkConcreteHero.headline,
      supporting: burlingtonFlatWorkConcreteHero.supporting,
      title: burlingtonFlatWorkConcreteSeo.title,
      description: burlingtonFlatWorkConcreteSeo.description,
    };
  }
  return undefined;
}

export function buildPageHeroCopy(
  service: ServiceDef,
  area: AreaDef,
  heroImage: string = service.image,
) {
  const custom = getCustomPageCopy(service, area);

  return {
    eyebrow: "Joyner Construction LLC",
    headline: custom?.headline ?? `${service.name} in ${area.name}`,
    supporting:
      custom?.supporting ??
      `${service.blurb} Serving homeowners in ${area.nameShort} and nearby communities. Request an estimate to discuss scope.`,
    primaryCta: { label: "Request an Estimate", href: "#contact" },
    secondaryCta: { label: "Serving Areas", href: "/serving-areas" },
    image: heroImage,
    imageAlt: `${service.name} by Joyner Construction LLC — ${service.imageAlt} in ${area.name}`,
  };
}

export function buildPageSeo(service: ServiceDef, area: AreaDef) {
  const custom = getCustomPageCopy(service, area);
  return {
    title: custom?.title ?? `${service.name} in ${area.name}`,
    description:
      custom?.description ??
      `${service.name} services in ${area.name} from Joyner Construction LLC. ${service.blurb} Call (360) 595-8365 or request an estimate.`,
    path: pagePath(service.slug, area.slug),
    ogImage: service.image,
  };
}
