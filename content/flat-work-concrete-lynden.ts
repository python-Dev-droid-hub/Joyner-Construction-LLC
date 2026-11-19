import type { LandingPageContent } from "@/content/landing";

export function isLyndenFlatWorkConcrete(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "flat-work-concrete" && areaSlug === "lynden-wa";
}

export const lyndenFlatWorkConcreteHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Flatwork Concrete Services Contractor in Lynden, WA",
  supporting:
    "From farm-style residential properties to busy commercial entrances, concrete surfaces need to match their surroundings and practical demands. Property owners in Lynden, WA, can explore flatwork concrete solutions for driveways, walkways, patios, sidewalks, and other exterior improvements.",
};

export const lyndenFlatWorkConcreteSeo = {
  title:
    "Hire Expert Concrete Contractors for Flatwork & Driveways in Lynden, WA | Joyner Construction LLC",
  description:
    "Ready to improve your property in Lynden, WA? Choose Joyner Construction LLC for professional concrete flatwork, driveway construction, patio installation, sidewalks, and concrete repairs. Get dependable service and quality results. Contact us today for a competitive estimate!",
};

/** Swap the shared template copy for the Lynden flatwork concrete page. Images stay in place. */
export function applyLyndenFlatWorkConcreteContent(
  content: LandingPageContent,
): LandingPageContent {
  const [driveways, walks, patios] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Concrete Sidewalk and Walkway Installation in Lynden, WA",
      paragraphs: [
        "Convenient outdoor access starts with walkways and sidewalks that follow the property's layout. Joyner Construction LLC provides concrete flatwork services in Lynden, WA, for homeowners and commercial building owners. As experienced flatwork concrete contractors, the company can help plan installations through a residential concrete flatwork company approach that considers surface use, dimensions, and site conditions.",
        "Services include concrete installation services, professional concrete installation, and concrete pouring services in Lynden, WA. Property owners can also explore professional and affordable concrete sidewalk installation, sidewalk repair services, and concrete walkway construction for practical outdoor access and properly finished surfaces.",
      ],
      visualCaption: "Tap a node to explore each stage of flatwork concrete.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Explore suitable concrete options, installation details, repairs, and project costs.",
          scope:
            "Planning covers surface measurements, ground preparation, concrete quantities, and finishing.",
          layout:
            "Careful planning connects entrances, parking areas, buildings, and outdoor destinations.",
          craft:
            "Detailed finishing gives concrete surfaces consistent textures and defined boundaries.",
          structure:
            "Site evaluation determines suitable preparation for stable concrete placement.",
          handoff:
            "Completed installations receive a final inspection and project review.",
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
            "A concrete driveway can organize vehicle access while providing a clean transition between the road and property. Appropriate grading, base preparation, and finishing support its intended residential or commercial use.",
          imageAlt: "Driveway concrete in Lynden, WA",
        },
        {
          ...walks,
          label: "Walks",
          title: "Sidewalks & Paths",
          description:
            "Concrete sidewalks create defined pedestrian routes between entrances and outdoor destinations. Properly planned paths help organize movement, accommodate site layouts, and provide functional access throughout the property.",
          imageAlt: "Concrete sidewalks and paths in Lynden, WA",
        },
        {
          ...patios,
          label: "Patios",
          title: "Patio Flatwork",
          description:
            "Patio flatwork creates a dedicated outdoor surface for family activities and gatherings. Property owners can choose dimensions and finishes that coordinate with gardens, seating areas, and home architecture.",
          imageAlt: "Patio flatwork concrete in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Flatwork concrete",
      heading:
        "Are You Looking for Affordable Concrete Replacement Contractors for Your Residential or Commercial Building in Lynden, WA?",
      body: "Replace deteriorated concrete with a surface planned for your property's daily requirements. Contact a qualified contractor in Lynden to discuss removal, preparation, installation options, and project estimates.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Flatwork Concrete",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Concrete Flatwork Contractor Services Agency in Lynden, WA",
      intro:
        "Outdoor concrete should work naturally with the property's architecture, landscape, and intended activities. In Lynden, WA, homeowners and commercial property managers can plan flatwork projects that improve access and organize exterior spaces. Services may include concrete driveways, residential slabs, patios, sidewalks, and repairs to existing surfaces. Before construction, site conditions and ground preparation deserve careful attention. Dimensions, drainage, and expected traffic also influence the design. A practical installation plan helps ensure that the completed concrete surface suits the property rather than simply filling an available area.",
      sections: [
        {
          heading: "Concrete Driveway Installation Specialists in Lynden, WA",
          body: [
            "Properties with different layouts require driveways that accommodate their specific vehicle access and parking requirements. A concrete driveway can be planned around garage placement, available frontage, turning space, and the route connecting the property to the road. In Lynden, homeowners can discuss surface dimensions, grading, drainage, and finishing preferences before installation. Contractors evaluate the ground and prepare a suitable base to support the planned work. Proper formwork and controlled concrete placement help establish the intended shape. The finished driveway provides an organized parking and access area.",
          ],
        },
        {
          heading: "Residential Concrete Slab Contractors in Lynden, WA",
          body: [
            "Residential concrete slabs are useful for projects that require a level, prepared surface, such as outdoor storage areas, equipment foundations, and other property improvements. The slab must be designed according to its intended purpose rather than using a one-size-fits-all specification. Lynden homeowners can discuss dimensions, thickness, ground conditions, and reinforcement needs during project planning. Site preparation may include clearing, grading, and compacting the supporting base. Proper formwork and placement help create the required shape and elevation, providing a concrete foundation suited to the planned application.",
          ],
        },
        {
          heading: "Professional Concrete Patio Installation in Lynden, WA",
          body: [
            "A well-designed patio can connect indoor living areas with the surrounding yard and provide additional room for outdoor activities. Homeowners in Lynden can plan concrete patios around existing landscaping, garden borders, outdoor furniture, and preferred access routes. The installation process begins with establishing dimensions and reviewing the ground's slope and drainage. Different finishing choices can help the surface complement the home's exterior. Proper base preparation and controlled placement are essential for a consistent result. A finished patio provides a practical outdoor area that can accommodate changing household needs.",
          ],
        },
        {
          heading: "Concrete Sidewalk Repair Contractors in Lynden, WA",
          body: [
            "A damaged sidewalk can interrupt pedestrian routes and create uneven transitions around a building. Common problems include cracking, surface scaling, displaced sections, and deterioration near edges or joints. Property owners in Lynden can have affected walkways examined to determine whether the damage is limited or connected to underlying settlement. Repair recommendations depend on the condition of the concrete and its supporting base. Some areas may require targeted work, while severely damaged sections may need replacement. Addressing these concerns helps restore more consistent access around residential and commercial properties.",
          ],
        },
        {
          heading: "Concrete Flatwork Repair Services in Lynden, WA",
          body: [
            "Existing concrete does not always need complete removal when visible problems develop. Depending on their severity, certain cracks, surface defects, and damaged sections may be suitable for repair. A proper assessment examines the affected area, surrounding concrete, drainage, and supporting ground conditions. In Lynden, property owners can discuss repair options for patios, sidewalks, slabs, and driveway surfaces. The recommended approach should account for how the area is used and whether the damage is likely to continue. This evaluation helps determine when repair is reasonable and when replacement deserves consideration.",
          ],
        },
        {
          heading: "Experienced Concrete Pouring Contractors in Lynden, WA",
          body: [
            "Concrete pouring for residential and commercial projects requires an organized sequence of preparation and placement. The site must be cleared, measured, graded, and fitted with suitable forms before the material arrives. Lynden property owners can discuss concrete requirements for slabs, patios, sidewalks, and driveway installations. Project considerations may include reinforcement, access for delivery, placement conditions, and the selected surface finish. Careful distribution and finishing help create the intended shape and appearance. Following placement, suitable curing practices allow the concrete to develop its required characteristics.",
          ],
        },
        {
          heading: "Affordable Concrete Replacement Services in Lynden, WA",
          body: [
            "Replacing an old concrete surface can help restore access and improve the appearance of an outdoor area. The work may involve removing cracked slabs, damaged sidewalk sections, or deteriorated driveway concrete before installing new material. Lynden property owners can review the affected area with a contractor to establish the necessary removal and preparation. Surface dimensions, disposal requirements, ground conditions, and finishing choices influence the estimate. A properly organized replacement project addresses the condition of the supporting base as well as the visible concrete, helping avoid simply covering up existing problems.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Flatwork Concrete Services in Lynden, WA",
      description:
        "Explore practical information about concrete surface design, installation requirements, repair options, and replacement projects for Lynden properties.",
      items: [
        {
          question: "What types of concrete flatwork can be installed?",
          answer:
            "Common projects include residential driveways, commercial walkways, sidewalks, patios, outdoor slabs, and connecting paths. Design depends on property dimensions and intended surface use.",
        },
        {
          question: "Can a concrete driveway accommodate larger vehicles?",
          answer:
            "Yes, when designed with appropriate dimensions and specifications. Vehicle weight, traffic frequency, ground conditions, and reinforcement requirements should be considered during planning.",
        },
        {
          question: "How do I plan a concrete patio for my yard?",
          answer:
            "Consider available space, furniture placement, access, landscaping, and drainage. These details help determine suitable patio dimensions, positioning, and surface finishes.",
        },
        {
          question: "What causes concrete sidewalks to become uneven?",
          answer:
            "Possible causes include soil movement, inadequate base preparation, drainage problems, and root growth. A site evaluation helps identify the likely source of settlement.",
        },
        {
          question: "Is concrete replacement better than repeated repairs?",
          answer:
            "Replacement may be more practical when deterioration is widespread or underlying support has failed. A professional assessment helps compare the available options.",
        },
        {
          question: "Does concrete need time to cure after installation?",
          answer:
            "Yes. Concrete needs an appropriate curing period to develop strength. The timing for foot traffic and vehicle use depends on project conditions and specifications.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning an outdoor improvement in Lynden? Request an estimate from Joyner Construction LLC for concrete installation, repairs, and replacement.",
    },
  };
}
