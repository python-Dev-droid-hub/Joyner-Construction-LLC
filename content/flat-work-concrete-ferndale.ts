import type { LandingPageContent } from "@/content/landing";

export function isFerndaleFlatWorkConcrete(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "flat-work-concrete" && areaSlug === "ferndale-wa";
}

export const ferndaleFlatWorkConcreteHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Flatwork Concrete Services Contractor in Ferndale, WA",
  supporting:
    "Outdoor concrete surfaces need proper construction to handle daily use and changing site conditions. In Ferndale, WA, homeowners and commercial property managers can arrange flatwork concrete installation, sidewalk construction, driveway projects, patio surfaces, and repairs suited to their properties.",
};

export const ferndaleFlatWorkConcreteSeo = {
  title:
    "Professional Concrete Flatwork, Driveways & Patio Services in Ferndale, WA | Joyner Construction LLC",
  description:
    "Planning a concrete project in Ferndale, WA? Hire Joyner Construction LLC for reliable concrete flatwork, driveway installation, patio construction, sidewalks, and concrete repairs. Get durable results and quality workmanship. Contact us today for a project estimate!",
};

/** Swap the shared template copy for the Ferndale flatwork concrete page. Images stay in place. */
export function applyFerndaleFlatWorkConcreteContent(
  content: LandingPageContent,
): LandingPageContent {
  const [driveways, walks, patios] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Concrete Sidewalk and Walkway Installation in Ferndale, WA",
      paragraphs: [
        "Uneven walkways and aging concrete can make property access inconvenient and affect the appearance of outdoor areas. Joyner Construction LLC provides concrete flatwork services in Ferndale, WA, for residential and commercial projects. Experienced flatwork concrete contractors can help plan durable surfaces through a residential concrete flatwork company approach that considers site dimensions and intended use.",
        "Available work includes concrete installation services, professional concrete installation, and concrete pouring services in Ferndale, WA. Property owners can also request professional and affordable concrete sidewalk installation, sidewalk repair services, and concrete walkway construction from a contractor focused on surface preparation and precise finishing.",
      ],
      visualCaption: "Tap a node to explore each stage of flatwork concrete.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Ask about concrete designs, repair methods, material choices, and pricing.",
          scope:
            "Work requirements include excavation, dimensions, reinforcement, placement, and finishing specifications.",
          layout:
            "Site measurements establish practical routes, surface dimensions, elevations, and access points.",
          craft:
            "Consistent finishing produces attractive surfaces with carefully formed edges and joints.",
          structure:
            "Compacted ground and suitable base materials support stable concrete installations.",
          handoff:
            "A completion walkthrough reviews finished surfaces, site cleanliness, and project details.",
        },
      },
    },
    services: {
      title: "Driveway Concrete, Sidewalks & Paths, and Patio Flatwork",
      items: [
        {
          ...driveways,
          label: "Driveways",
          title: "Driveway Concrete",
          description:
            "Concrete driveways provide dedicated parking and vehicle access for residential and commercial properties. Proper excavation, grading, base preparation, and finishing help create a surface designed around traffic requirements.",
          imageAlt: "Driveway concrete in Ferndale, WA",
        },
        {
          ...walks,
          label: "Walks",
          title: "Sidewalks & Paths",
          description:
            "Well-planned concrete paths connect building entrances, parking spaces, gardens, and outdoor areas. Consistent elevations and carefully finished surfaces create convenient pedestrian routes around residential and commercial properties.",
          imageAlt: "Concrete sidewalks and paths in Ferndale, WA",
        },
        {
          ...patios,
          label: "Patios",
          title: "Patio Flatwork",
          description:
            "A concrete patio offers a low-maintenance foundation for outdoor furniture and gatherings. Custom layouts help make better use of available yard space while coordinating with surrounding landscaping.",
          imageAlt: "Patio flatwork concrete in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Flatwork concrete",
      heading:
        "Are You Looking for Affordable Concrete Replacement Contractors for Your Residential or Commercial Building in Ferndale, WA?",
      body: "Restore worn outdoor surfaces with properly planned concrete replacement. Contact a qualified contractor in Ferndale to review damaged areas, discuss material options, and arrange an estimate for your property.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Flatwork Concrete",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Concrete Flatwork Contractor Services Agency in Ferndale, WA",
      intro:
        "From private driveways to shared commercial walkways, concrete flatwork must suit the property's layout and expected traffic. In Ferndale, WA, property owners can explore installation, repair, and replacement services for different outdoor surfaces. The work starts with reviewing ground conditions, drainage, access, and project dimensions. Proper preparation helps establish a suitable foundation before concrete placement. Whether constructing a new patio or replacing an uneven sidewalk, attention to layout and finishing contributes to a functional surface that complements the surrounding property.",
      sections: [
        {
          heading: "Concrete Driveway Installation Specialists in Ferndale, WA",
          body: [
            "A driveway should accommodate vehicle movement while providing convenient access to the garage, parking area, or building entrance. Concrete driveway installation requires careful planning of width, slope, drainage, and ground preparation. Ferndale property owners can discuss designs that fit their available space and daily parking needs. Contractors assess the existing ground before establishing forms and preparing the base for placement. Reinforcement and thickness considerations depend on the intended use and site conditions. A professionally finished driveway provides a defined parking surface that complements the property's overall layout.",
          ],
        },
        {
          heading: "Residential Concrete Slab Contractors in Ferndale, WA",
          body: [
            "A properly prepared concrete slab can support various residential projects, from equipment areas to outdoor structures and other planned improvements. Its design should reflect the load requirements, dimensions, ground conditions, and intended application. Homeowners in Ferndale can discuss site preparation, grading, formwork, and reinforcement requirements before concrete placement. The installation process should establish a stable base and account for water movement around the finished surface. Careful planning helps reduce avoidable problems and produces a slab suited to the project's purpose and the property's construction needs.",
          ],
        },
        {
          heading: "Professional Concrete Patio Installation in Ferndale, WA",
          body: [
            "Create a defined outdoor gathering area with a concrete patio designed around your backyard. The layout can accommodate dining furniture, lounge seating, grills, or connections to existing outdoor features. In Ferndale, patio installation begins with evaluating available space, ground levels, drainage, and access to the work area. Property owners can discuss different finishing options to complement their landscaping and home exterior. Proper preparation, form placement, concrete distribution, and finishing are essential to the completed surface. The result provides a functional outdoor area for everyday enjoyment.",
          ],
        },
        {
          heading: "Concrete Sidewalk Repair Contractors in Ferndale, WA",
          body: [
            "Sidewalk damage can make entrances and outdoor routes less convenient for visitors, residents, and employees. Cracks, surface deterioration, displaced sections, and uneven transitions should be assessed to determine their underlying causes. Ferndale property owners can arrange concrete sidewalk repair for affected areas around their buildings. Depending on the condition, the work may involve repairing a limited section or removing and replacing a larger portion. Attention to elevations and drainage helps restore a more consistent walking surface. Timely evaluation can also help identify issues before they spread.",
          ],
        },
        {
          heading: "Concrete Flatwork Repair Services in Ferndale, WA",
          body: [
            "Concrete flatwork around a property can experience wear from vehicle traffic, foot traffic, water exposure, and changing ground conditions. Driveways, patios, sidewalks, and slabs may develop cracks, chipped edges, or uneven areas over time. Repair work should begin with a close review of the affected surface and its supporting base. Ferndale property owners can discuss whether localized repairs are practical or whether more extensive work is needed. Selecting the right method depends on the damage, surface purpose, and condition of the surrounding concrete.",
          ],
        },
        {
          heading: "Experienced Concrete Pouring Contractors in Ferndale, WA",
          body: [
            "Concrete placement requires coordination between site preparation, formwork, material delivery, and finishing. Before pouring begins, the work area must be prepared according to the project's dimensions and ground conditions. Ferndale property owners planning driveways, walkways, slabs, or patios can discuss reinforcement, concrete requirements, and surface finishes. Consistent placement helps reduce unwanted variations across the finished area. Once the material is positioned, finishing and curing practices become important parts of the process. Proper coordination helps keep the installation organized from preparation through completion.",
          ],
        },
        {
          heading: "Affordable Concrete Replacement Services in Ferndale, WA",
          body: [
            "When a concrete surface has widespread deterioration, replacing it may provide a more practical solution than repeated repairs. The process generally includes breaking out the existing material, removing debris, evaluating the base, and preparing for a new installation. Ferndale property owners can request an assessment for deteriorating driveways, sidewalks, patios, or slabs. Project costs depend on the surface area, removal requirements, site accessibility, materials, and finishing choices. A detailed estimate helps clarify the necessary work and provides a clearer understanding of the replacement project.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Flatwork Concrete Services in Ferndale, WA",
      description:
        "Learn about concrete flatwork planning, driveway construction, sidewalk maintenance, patio installation, and replacement considerations for Ferndale properties.",
      items: [
        {
          question:
            "What properties benefit from concrete flatwork installation?",
          answer:
            "Homes, offices, retail buildings, and other properties can benefit from concrete driveways, sidewalks, patios, paths, and slabs designed for their intended use.",
        },
        {
          question:
            "Can I install a new concrete driveway over an existing one?",
          answer:
            "It depends on the existing surface's condition, thickness, drainage, and elevation. A site assessment helps determine whether resurfacing or complete replacement is appropriate.",
        },
        {
          question: "What makes a concrete walkway durable?",
          answer:
            "Proper ground preparation, suitable concrete specifications, appropriate reinforcement where needed, controlled placement, and careful finishing all contribute to walkway performance.",
        },
        {
          question: "How do contractors prepare a patio area?",
          answer:
            "Preparation may involve measuring, excavation, grading, compacting the base, installing forms, and planning drainage before the concrete is poured.",
        },
        {
          question:
            "Are concrete flatwork repairs possible for commercial properties?",
          answer:
            "Yes. Commercial driveways, walkways, entrance paths, and outdoor slabs can be assessed for localized repairs or larger replacement projects.",
        },
        {
          question: "What affects the cost of concrete replacement?",
          answer:
            "Pricing depends on dimensions, demolition, disposal, ground conditions, concrete requirements, accessibility, and finishing choices. An on-site assessment helps establish project costs.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need new concrete surfaces in Ferndale? Request an estimate from Joyner Construction LLC for properly planned flatwork installation, repairs, and replacement.",
    },
  };
}
