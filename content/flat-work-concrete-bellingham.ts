import type { LandingPageContent } from "@/content/landing";

export function isBellinghamFlatWorkConcrete(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "flat-work-concrete" && areaSlug === "bellingham-wa";
}

export const bellinghamFlatWorkConcreteHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Flatwork Concrete Services Contractor in Bellingham, WA",
  supporting:
    "Strong, properly finished concrete surfaces make outdoor spaces safer, more functional, and easier to maintain. Property owners in Bellingham, WA, can explore professional flatwork concrete installation, repair, and replacement for driveways, sidewalks, patios, and commercial walkways.",
};

export const bellinghamFlatWorkConcreteSeo = {
  title: "Flatwork Concrete Services in Bellingham, WA",
  description:
    "Joyner Construction LLC provides residential and commercial flatwork concrete installation, repair, and replacement services in Bellingham, WA.",
};

/** Swap the shared template copy for the Bellingham flatwork concrete page. Images stay in place. */
export function applyBellinghamFlatWorkConcreteContent(
  content: LandingPageContent,
): LandingPageContent {
  const [driveways, walks, patios] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Concrete Sidewalk and Walkway Installation in Bellingham, WA",
      paragraphs: [
        "Well-constructed concrete surfaces provide dependable access and improve the usability of residential and commercial properties. Joyner Construction LLC offers concrete flatwork services in Bellingham, WA, including driveway surfaces, sidewalks, and outdoor walkways.",
        "As experienced flatwork concrete contractors, the team can help homeowners plan projects with a residential concrete flatwork company approach tailored to their property's layout. Services include concrete installation services, professional concrete installation, and concrete pouring services in Bellingham, WA. Property owners can also discuss professional and affordable concrete sidewalk installation, sidewalk repair services, and concrete walkway construction with a contractor focused on proper preparation, accurate placement, and clean finishing.",
      ],
      visualCaption: "Tap a node to explore each stage of flatwork concrete.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss concrete materials, installation options, repairs, scheduling, and estimates.",
          scope:
            "Project scope defines dimensions, excavation, reinforcement, materials, and finishing requirements.",
          layout:
            "Surface layouts consider dimensions, access points, drainage, and intended everyday use.",
          craft:
            "Skilled finishing creates consistent surfaces with clean edges and durable textures.",
          structure:
            "Ground preparation establishes a stable base before concrete placement begins.",
          handoff:
            "Final reviews confirm surface appearance, cleanup, and project completion details.",
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
            "A professionally installed concrete driveway provides a stable parking surface and creates a clean entrance. Proper grading, base preparation, reinforcement considerations, and finishing help support everyday vehicle traffic.",
          imageAlt: "Driveway concrete in Bellingham, WA",
        },
        {
          ...walks,
          label: "Walks",
          title: "Sidewalks & Paths",
          description:
            "Concrete sidewalks and paths create convenient routes around homes and commercial properties. Thoughtful placement, consistent elevations, and properly finished surfaces help improve accessibility and provide dependable pedestrian access.",
          imageAlt: "Concrete sidewalks and paths in Bellingham, WA",
        },
        {
          ...patios,
          label: "Patios",
          title: "Patio Flatwork",
          description:
            "Concrete patio flatwork creates a practical outdoor area for relaxing, dining, and entertaining. Custom dimensions and finishing options help homeowners develop a space that complements their property's landscape.",
          imageAlt: "Patio flatwork concrete in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Flatwork concrete",
      heading:
        "Are You Looking for Affordable Concrete Replacement Contractors for Your Residential or Commercial Building in Bellingham, WA?",
      body: "Upgrade deteriorating concrete surfaces with a project designed around your property's needs. Contact a qualified contractor to discuss replacement options, material requirements, surface preparation, and an estimate for your concrete work.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Flatwork Concrete",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Concrete Flatwork Contractor Services Agency in Bellingham, WA",
      intro:
        "Concrete flatwork requires proper planning, a stable foundation, and careful finishing to achieve a dependable surface. Residential and commercial property owners in Bellingham, WA, can explore solutions for driveways, sidewalks, patios, slabs, and other ground-level concrete features. Each project begins by considering site conditions, dimensions, drainage, and intended use. From new construction to worn surface replacement, suitable preparation and controlled concrete placement help create functional results. A clearly defined project plan also helps property owners understand the materials, work requirements, and finishing options.",
      sections: [
        {
          heading:
            "Concrete Driveway Installation Specialists in Bellingham, WA",
          body: [
            "A driveway must provide enough strength and space for the vehicles that regularly use it. Professional concrete driveway installation starts with evaluating the ground, measuring the available area, and planning the necessary slope for drainage. Homeowners in Bellingham can discuss driveway dimensions, edge details, reinforcement considerations, and surface finishes before construction begins. Proper excavation and base preparation help reduce the risk of uneven settling. A carefully finished concrete driveway creates a practical entrance while complementing the home's exterior and providing a stable area for everyday parking.",
          ],
        },
        {
          heading: "Residential Concrete Slab Contractors in Bellingham, WA",
          body: [
            "Concrete slabs provide a foundation for many residential improvements, including outdoor structures, utility areas, and other building-related projects. Before pouring, contractors must consider ground conditions, slab dimensions, thickness requirements, and any reinforcement specified for the intended application. Bellingham homeowners can discuss the purpose of the slab and the site preparation needed to support it. Proper grading and a stable base are important parts of the process. A planned installation helps establish an even concrete surface suited to the property's intended use and construction requirements.",
          ],
        },
        {
          heading:
            "Professional Concrete Patio Installation in Bellingham, WA",
          body: [
            "A concrete patio can turn an unused backyard area into a comfortable place for outdoor activities. Homeowners can choose a layout that accommodates seating, dining arrangements, garden features, or outdoor entertainment. Professional installation involves measuring the area, preparing the ground, planning drainage, and selecting a suitable surface finish. In Bellingham, a properly designed patio should work with the yard's existing elevation and landscape. Careful concrete placement and finishing help create a practical outdoor surface that complements the home and supports regular use.",
          ],
        },
        {
          heading: "Concrete Sidewalk Repair Contractors in Bellingham, WA",
          body: [
            "Cracked, uneven, or deteriorating sidewalks can interfere with safe pedestrian movement around a property. Repair requirements depend on the damage, underlying conditions, and whether the affected section can be restored effectively. Property owners in Bellingham can arrange an assessment to identify surface cracks, settlement, drainage concerns, or damaged edges. Depending on the findings, repairs may involve localized correction or replacement of a larger section. Addressing sidewalk problems helps maintain convenient access between entrances, parking areas, and outdoor spaces while improving the property's overall appearance.",
          ],
        },
        {
          heading: "Concrete Flatwork Repair Services in Bellingham, WA",
          body: [
            "Outdoor concrete surfaces can develop cracks, surface deterioration, discoloration, or uneven sections through regular use and exposure to changing conditions. Concrete flatwork repair begins by identifying the cause and extent of the damage. Bellingham property owners can have driveways, walkways, patios, and slabs evaluated before choosing a repair method. Some issues may require localized work, while extensive deterioration can make replacement more practical. A suitable repair plan considers the existing concrete, site conditions, and intended use to determine the most appropriate way forward.",
          ],
        },
        {
          heading: "Experienced Concrete Pouring Contractors in Bellingham, WA",
          body: [
            "Successful concrete pouring depends on more than delivering and placing the material. Site preparation, formwork, reinforcement requirements, concrete consistency, placement timing, and finishing all influence the completed surface. Property owners in Bellingham can discuss these details when planning a driveway, patio, sidewalk, or slab project. Proper coordination helps keep the installation organized and reduces avoidable placement problems. After the concrete is poured, suitable finishing and curing practices are important for developing the intended surface characteristics and supporting the long-term performance of the finished work.",
          ],
        },
        {
          heading: "Affordable Concrete Replacement Services in Bellingham, WA",
          body: [
            "Severely damaged or deteriorating concrete may require replacement when repairs cannot provide a suitable result. A replacement project involves removing the affected material, examining the underlying base, and preparing the area for new concrete. Bellingham homeowners and commercial property managers can compare replacement options according to surface dimensions, intended use, and project requirements. The estimate should account for demolition, disposal, preparation, materials, and finishing. A well-planned replacement can restore the usability of driveways, sidewalks, patios, and other concrete areas around the property.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Flatwork Concrete Services in Bellingham, WA",
      description:
        "Find helpful answers about concrete installation, surface repairs, replacement options, and residential or commercial flatwork projects in Bellingham.",
      items: [
        {
          question:
            "What is included in residential concrete flatwork services?",
          answer:
            "Residential flatwork commonly includes driveways, patios, sidewalks, paths, and slabs. The exact project depends on property layout, surface dimensions, and intended functionality.",
        },
        {
          question: "How long does a concrete driveway installation take?",
          answer:
            "Timing depends on driveway size, excavation, site conditions, weather, and finishing requirements. Contractors can provide a project schedule after evaluating the property.",
        },
        {
          question: "Can damaged concrete sidewalks be repaired?",
          answer:
            "Some sidewalk damage can be repaired, while extensive deterioration may require replacement. An assessment helps determine the appropriate approach based on surface conditions.",
        },
        {
          question: "What preparation is needed before pouring concrete?",
          answer:
            "Preparation may include excavation, grading, compaction, form installation, and reinforcement. Requirements depend on the surface design, soil conditions, and intended application.",
        },
        {
          question: "Can concrete patios be customized?",
          answer:
            "Yes. Patio dimensions, layout, edges, and available surface finishes can be selected according to outdoor space, property design, and intended activities.",
        },
        {
          question: "When should concrete flatwork be replaced?",
          answer:
            "Replacement may be appropriate when concrete has extensive cracking, major settlement, or widespread deterioration. A professional assessment helps compare repair and replacement options.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning concrete improvements in Bellingham? Request an estimate from Joyner Construction LLC for installation, repair, replacement, and flatwork project options.",
    },
  };
}
