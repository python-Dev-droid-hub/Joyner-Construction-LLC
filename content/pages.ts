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

export function pagePath(serviceSlug: string, areaSlug: string): string {
  return `/${buildPageSlug(serviceSlug, areaSlug)}`;
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
    services.map((service) => ({
      slug: buildPageSlug(service.slug, area.slug),
    })),
  );
}

export function buildPageHeroCopy(
  service: ServiceDef,
  area: AreaDef,
  heroImage: string = service.image,
) {
  return {
    eyebrow: "Joyner Construction LLC",
    headline: `${service.name} in ${area.name}`,
    supporting: `${service.blurb} Serving homeowners in ${area.nameShort} and nearby communities. Request an estimate to discuss scope.`,
    primaryCta: { label: "Request an Estimate", href: "#contact" },
    secondaryCta: { label: "Serving Areas", href: "/serving-areas" },
    image: heroImage,
    imageAlt: `${service.name} — ${service.imageAlt} in ${area.name}`,
  };
}

export function buildPageSeo(service: ServiceDef, area: AreaDef) {
  const title = `${service.name} in ${area.name}`;
  const description = `${service.name} services in ${area.name} from Joyner Construction LLC. ${service.blurb} Call (360) 595-8365 or request an estimate.`;
  return {
    title,
    description,
    path: pagePath(service.slug, area.slug),
    ogImage: service.image,
  };
}
