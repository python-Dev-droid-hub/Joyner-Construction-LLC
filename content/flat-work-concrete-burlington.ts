import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonFlatWorkConcrete(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "flat-work-concrete" && areaSlug === "burlington-wa";
}

export const burlingtonFlatWorkConcreteHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Flatwork Concrete Services Contractor in Burlington, WA",
  supporting:
    "A well-built concrete surface provides reliable access, defined outdoor spaces, and practical areas for everyday activities. Homeowners and businesses in Burlington, WA, can arrange professional flatwork concrete installation, driveway construction, sidewalk projects, patio work, and concrete replacement.",
};

export const burlingtonFlatWorkConcreteSeo = {
  title:
    "Custom Concrete Flatwork, Driveway & Patio Contractors in Burlington, WA | Joyner Construction LLC",
  description:
    "Looking for trusted concrete specialists in Burlington, WA? Joyner Construction LLC offers professional flatwork, concrete driveway installation, patio construction, sidewalk services, and repairs. Enhance your property's functionality with quality concrete work. Contact us today to get a project quote!",
};

/** Swap the shared template copy for the Burlington flatwork concrete page. Images stay in place. */
export function applyBurlingtonFlatWorkConcreteContent(
  content: LandingPageContent,
): LandingPageContent {
  const [driveways, walks, patios] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Concrete Sidewalk and Walkway Installation in Burlington, WA",
      paragraphs: [
        "Functional outdoor spaces depend on concrete surfaces that fit the property's layout and daily demands. Joyner Construction LLC offers concrete flatwork services in Burlington, WA, for residential and commercial construction projects. Experienced flatwork concrete contractors can help property owners plan suitable installations through a residential concrete flatwork company approach.",
        "Available options include concrete installation services, professional concrete installation, and concrete pouring services in Burlington, WA. Additional services cover professional and affordable concrete sidewalk installation, sidewalk repair services, and concrete walkway construction. Each project considers site preparation, surface dimensions, intended traffic, and finishing requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of flatwork concrete.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your proposed surfaces, construction preferences, repair needs, and budget.",
          scope:
            "Estimates account for removal, preparation, dimensions, materials, and installation.",
          layout:
            "Design planning establishes surface boundaries, access routes, dimensions, and elevations.",
          craft:
            "Careful workmanship produces evenly finished concrete with properly defined edges.",
          structure:
            "Base preparation supports the concrete and addresses existing ground conditions.",
          handoff:
            "A final review checks completed work, cleanliness, and project requirements.",
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
            "Concrete driveway construction creates an organized area for parking and vehicle movement. Proper dimensions, suitable grading, and a prepared foundation help accommodate the property's access requirements and regular traffic.",
          imageAlt: "Driveway concrete in Burlington, WA",
        },
        {
          ...walks,
          label: "Walks",
          title: "Sidewalks & Paths",
          description:
            "Concrete paths help connect different parts of a property with clear pedestrian routes. Carefully planned placement improves outdoor organization and provides practical access between entrances, buildings, and parking areas.",
          imageAlt: "Concrete sidewalks and paths in Burlington, WA",
        },
        {
          ...patios,
          label: "Patios",
          title: "Patio Flatwork",
          description:
            "A concrete patio offers a defined surface for outdoor dining, seating, and recreation. Layout and finishing choices can complement the home's exterior while making the yard more usable.",
          imageAlt: "Patio flatwork concrete in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Flatwork concrete",
      heading:
        "Are You Looking for Affordable Concrete Replacement Contractors for Your Residential or Commercial Building in Burlington, WA?",
      body: "Worn concrete can affect access, appearance, and everyday property use. Discuss your replacement project with a qualified contractor in Burlington and explore suitable materials, preparation requirements, and installation estimates.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Flatwork Concrete",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Concrete Flatwork Contractor Services Agency in Burlington, WA",
      intro:
        "Concrete flatwork provides the finished surfaces people use to access, park around, and enjoy their properties. In Burlington, WA, residential and commercial projects can include new driveways, connecting sidewalks, patios, concrete slabs, and replacement work. Each application has different requirements based on its dimensions, expected traffic, and surrounding ground conditions. Professional planning helps establish the necessary preparation and materials before construction begins. Whether the goal is to improve an entrance or rebuild an outdoor surface, a carefully managed project supports practical use and a consistent finished appearance.",
      sections: [
        {
          heading:
            "Concrete Driveway Installation Specialists in Burlington, WA",
          body: [
            "Driveway construction should account for the number of vehicles, available parking space, and movement between the street and property. Concrete installation starts with measuring the area and evaluating its existing elevation and drainage. Burlington homeowners can discuss driveway designs that provide convenient access without disrupting nearby landscaping or other outdoor features. Contractors prepare the ground, establish forms, and consider suitable reinforcement and concrete specifications. Attention to the finishing process helps create an even, functional surface. A properly planned driveway can improve the property's entrance and everyday parking arrangements.",
          ],
        },
        {
          heading: "Residential Concrete Slab Contractors in Burlington, WA",
          body: [
            "Concrete slabs can support a range of residential applications, but their construction must match the planned use. A slab intended for an outdoor utility area may have different requirements from one designed to support a structure or equipment. Burlington homeowners can discuss the project's purpose, dimensions, soil conditions, and required specifications before installation. Preparation typically involves clearing the site, establishing elevations, compacting the base, and setting forms. Reinforcement may be appropriate depending on the application. Proper placement and finishing help create a level surface that meets the project's intended requirements.",
          ],
        },
        {
          heading:
            "Professional Concrete Patio Installation in Burlington, WA",
          body: [
            "Make better use of your backyard by creating a concrete patio that suits your outdoor lifestyle. A carefully selected layout can provide room for outdoor dining, garden furniture, cooking equipment, or a dedicated relaxation area. Burlington homeowners can consider how the patio will connect with the house, lawn, and surrounding landscape. Before pouring, contractors review the site's dimensions, elevation, and drainage requirements. The selected finish can also influence the overall appearance of the space. Proper installation provides a practical outdoor surface designed around the property's available area.",
          ],
        },
        {
          heading: "Concrete Sidewalk Repair Contractors in Burlington, WA",
          body: [
            "Concrete sidewalks provide important connections between building entrances, parking spaces, and outdoor areas. When sections become cracked, chipped, or uneven, pedestrian access can become less convenient. Burlington property owners can arrange an inspection to identify damaged sections and determine the appropriate repair approach. The assessment should consider surface deterioration, drainage, ground movement, and the condition of nearby concrete. Depending on the findings, localized repairs or full section replacement may be necessary. Correcting affected areas helps maintain functional pedestrian routes and a more consistent appearance around the property.",
          ],
        },
        {
          heading: "Concrete Flatwork Repair Services in Burlington, WA",
          body: [
            "Driveways, sidewalks, slabs, and patios experience different forms of wear depending on their location and use. Cracking, surface flaking, damaged edges, and settlement can indicate that an existing concrete area needs attention. Professional flatwork repair begins with examining the affected surface and identifying contributing site conditions. Burlington property owners can discuss suitable options based on the severity and location of the damage. While certain defects may allow localized repairs, more extensive deterioration can require replacement. Evaluating the entire affected area helps establish a practical repair plan.",
          ],
        },
        {
          heading:
            "Experienced Concrete Pouring Contractors in Burlington, WA",
          body: [
            "Concrete pouring is a critical stage of any flatwork installation because placement and finishing influence the final surface. Before work starts, contractors coordinate the prepared base, forms, reinforcement requirements, and material delivery. Burlington property owners can plan pouring projects for patios, driveways, sidewalks, and slabs according to their dimensions and intended use. The concrete must be distributed and finished according to the project's specifications. Weather and site accessibility may also influence scheduling. Proper coordination, finishing, and curing practices help the completed installation achieve its intended performance.",
          ],
        },
        {
          heading:
            "Affordable Concrete Replacement Services in Burlington, WA",
          body: [
            "An aging concrete surface can become difficult to maintain when cracks, settlement, and deterioration affect large sections. Replacing the damaged material provides an opportunity to reassess the base and correct preparation concerns before installing a new surface. In Burlington, replacement projects may include driveways, patios, sidewalks, and residential or commercial slabs. Contractors evaluate the removal area, disposal requirements, accessibility, and installation specifications when preparing an estimate. Comparing these details helps property owners understand the project scope and select a replacement solution that meets their functional needs and budget.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Flatwork Concrete Services in Burlington, WA",
      description:
        "Find answers to common questions about concrete pouring, replacement, driveway construction, sidewalk repairs, and flatwork installation in Burlington.",
      items: [
        {
          question:
            "What is the difference between concrete flatwork and foundations?",
          answer:
            "Flatwork generally refers to horizontal concrete surfaces such as driveways, sidewalks, patios, and slabs. Foundations serve different structural purposes and require specific engineering considerations.",
        },
        {
          question: "Can commercial properties install concrete walkways?",
          answer:
            "Yes. Commercial walkways can connect entrances, parking areas, and building sections. Design should consider pedestrian traffic, site dimensions, drainage, and accessibility requirements.",
        },
        {
          question: "How should I maintain a concrete driveway?",
          answer:
            "Keep the surface clean, address drainage problems, avoid unnecessary heavy impacts, and inspect visible cracks. Appropriate maintenance depends on the concrete's condition and finish.",
        },
        {
          question: "Can an existing patio be replaced with new concrete?",
          answer:
            "Yes. Replacement may involve removing the old patio, preparing the supporting base, establishing new forms, and pouring concrete according to the updated layout.",
        },
        {
          question: "What determines the thickness of a concrete slab?",
          answer:
            "Thickness depends on the intended application, expected loads, ground conditions, and project specifications. Contractors should evaluate these factors before establishing the slab design.",
        },
        {
          question: "How can I get an estimate for concrete flatwork?",
          answer:
            "Provide the project location, approximate dimensions, surface type, and existing conditions. A contractor can assess the requirements and prepare an appropriate project estimate.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to discuss Burlington concrete projects and request an estimate for new installations, surface repairs, or replacement work.",
    },
  };
}
