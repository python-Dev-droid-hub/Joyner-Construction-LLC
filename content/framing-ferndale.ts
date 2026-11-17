import type { LandingPageContent } from "@/content/landing";

export function isFerndaleFraming(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "framing" && areaSlug === "ferndale-wa";
}

export const ferndaleFramingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Structural Framing Services Contractor Ferndale, WA",
  supporting:
    "Building a home or commercial property requires a dependable structural framework. Joyner Construction LLC provides residential and commercial structural framing in Ferndale, WA, offering wood and steel framing solutions, organized installation, and careful project coordination for construction plans of different sizes and requirements.",
};

export const ferndaleFramingSeo = {
  title: "Structural Framing in Ferndale, WA",
  description:
    "Joyner Construction LLC provides residential and commercial structural framing in Ferndale, WA, offering wood and steel framing solutions, organized installation, and careful project coordination.",
};

/** Swap the shared template copy for the Ferndale framing page. Images stay in place. */
export function applyFerndaleFramingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newHome, addition, renovation] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building House Framing Repair and Replacement Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "A properly planned framework gives a building the support and layout needed for the next stages of construction. Joyner Construction LLC is a structural framing company serving residential and commercial projects in Ferndale, WA. Our structural framing contractors work with project drawings to coordinate wood framing, steel structural framing, and metal framing services.",
        "From interior wall framing to exterior wall framing, we consider measurements, openings, material specifications, and installation requirements. Whether you are planning a new property, repairing an existing framework, or replacing damaged framing components, our team helps organize the work around your construction goals and project scope.",
      ],
      visualCaption: "Tap a node to explore each stage of framing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your property, construction plans, and preferred framing materials with our team.",
          scope:
            "We outline project dimensions, installation requirements, material selections, and scheduling expectations before work starts.",
          layout:
            "We review building plans, site measurements, access points, and framing requirements before scheduling installation.",
          craft:
            "Our framing approach considers material suitability, accurate cuts, proper alignment, and consistent workmanship.",
          structure:
            "We coordinate wall systems, openings, and framing connections according to approved construction drawings.",
          handoff:
            "We communicate completed framing details and coordinate the transition to the next construction stage.",
        },
      },
    },
    services: {
      title: "New Home, Addition, and Renovation Framing",
      items: [
        {
          ...newHome,
          label: "New Home",
          title: "New Home Framing",
          description:
            "Starting a residential build requires a framework that follows the home's architectural design. Joyner Construction LLC coordinates wall layouts, openings, and structural components for new home framing projects in Ferndale, WA, according to approved construction documents.",
          imageAlt: "New home framing under construction in Ferndale, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Addition Framing",
          description:
            "Adding another room or expanding an existing property requires careful coordination between old and new construction. Our home addition framing services address planned wall layouts, structural connections, and material requirements for a cohesive building design.",
          imageAlt: "Home addition framing in Ferndale, WA",
        },
        {
          ...renovation,
          label: "Renovation",
          title: "Renovation Framing",
          description:
            "Property renovations can involve changing room configurations, rebuilding partitions, or preparing spaces for updated features. We coordinate renovation framing around approved plans, helping align new wood or metal framing with the existing building.",
          imageAlt: "Renovation framing work in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Framing installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial New Home or Offices Framing Contractors Installation Ferndale, WA?",
      body: "Need dependable framing for a home, addition, or office project? Contact Joyner Construction LLC to discuss your Ferndale construction plans, material requirements, and installation estimate.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Framing Services",
      title:
        "Certified Or Trusted Reliable Building Framing Contractors Services Agency Ferndale, WA",
      intro:
        "A successful construction project needs a framework that matches its design, dimensions, and intended use. Joyner Construction LLC supports residential and commercial building projects in Ferndale, WA, with organized structural framing services. We discuss wood and steel options, review project drawings, and coordinate installation requirements with the wider construction schedule. Whether you are developing a new property or improving an existing building, our team helps establish a clear framing scope before work begins.",
      sections: [
        {
          heading: "Residential Structural Framing Company",
          body: [
            "Residential construction depends on a carefully coordinated framework that accommodates the home's floor plan and structural design. Joyner Construction LLC provides residential structural framing services in Ferndale, WA, for new houses, additions, and planned improvements. We review available drawings, building dimensions, wall locations, and material specifications before installation. Our team discusses wood and steel framing options according to project requirements, helping homeowners and builders understand the work involved in preparing the property for subsequent construction stages.",
          ],
        },
        {
          heading: "Affordable House Framing Services",
          body: [
            "Budget planning is an important part of any residential construction project. Joyner Construction LLC discusses affordable house framing services in Ferndale, WA, by reviewing the building design, project dimensions, material requirements, and installation scope. We help homeowners understand the framing work involved before scheduling begins. Whether you are constructing a new residence or expanding an existing home, discussing your drawings and priorities early can help establish realistic expectations for the project and its construction budget.",
          ],
        },
        {
          heading: "Local Structural Framing Specialists",
          body: [
            "Understanding the project requirements is essential before framing installation begins. Joyner Construction LLC serves Ferndale, WA, with structural framing services for residential and commercial properties. Our team considers building plans, wall configurations, material specifications, and construction sequencing when discussing each project. We can review requirements for wood framing, steel structural framing, and metal wall systems. Property owners and builders can contact us to discuss project details, installation expectations, and scheduling before moving forward with construction.",
          ],
        },
        {
          heading: "New Home Framing Contractors",
          body: [
            "A new home needs a framing plan that reflects its architectural drawings and intended layout. Joyner Construction LLC provides new home framing services in Ferndale, WA, for residential construction projects. We coordinate wall placement, door and window openings, measurements, and specified framing materials. Our team discusses installation requirements with homeowners and builders to establish a clear scope of work. Careful planning at this stage helps prepare the building for roofing, exterior finishing, and other subsequent construction activities.",
          ],
        },
        {
          heading: "Experienced Wood Framing Contractors",
          body: [
            "Wood framing remains a practical choice for many residential building designs because it accommodates different room configurations and construction requirements. Joyner Construction LLC provides wood framing services in Ferndale, WA, based on approved project specifications. We consider measurements, wall placement, openings, and connections when organizing installation. Whether your plans involve a detached home, an addition, or interior improvements, our team discusses the required materials and framing details to help coordinate the work with the overall construction schedule.",
          ],
        },
        {
          heading: "Structural Framing Installation Company",
          body: [
            "Framing installation requires a coordinated approach to measurements, materials, connections, and construction drawings. Joyner Construction LLC supports structural framing installation in Ferndale, WA, for residential and commercial projects. Depending on the approved design, the work may involve wood framing, steel structural framing, or metal framing systems. We review the project scope and discuss installation requirements before work begins. This preparation helps property owners and builders understand how the framing stage fits into the broader construction process.",
          ],
        },
        {
          heading: "Residential Framing Construction Services",
          body: [
            "A home's framework establishes the layout for its rooms, walls, and other building components. Joyner Construction LLC offers residential framing construction services in Ferndale, WA, for new homes, additions, and renovation projects. We coordinate measurements, material choices, wall configurations, and openings according to the available construction documents. Our team can discuss wood or steel framing options based on the design. Clear project planning helps homeowners and builders prepare for the next stages of residential construction.",
          ],
        },
        {
          heading: "Reliable Building Framing Contractors",
          body: [
            "Dependable framing begins with a clear understanding of the building design and installation requirements. Joyner Construction LLC provides residential and commercial building framing services in Ferndale, WA. We discuss structural layouts, wall systems, material specifications, and project scheduling before installation. Our work can involve wood framing for homes or metal framing for commercial interiors, depending on the approved plans. Contact our team to discuss your construction objectives and determine the framing requirements for your property.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Structural Framing in Ferndale, WA",
      description:
        "Frequently asked questions about structural framing in Ferndale, WA.",
      items: [
        {
          question: "What structural framing services are available in Ferndale?",
          answer:
            "Joyner Construction LLC supports residential and commercial framing projects, including new home construction, additions, renovations, wood framing, steel framing, interior walls, and exterior wall systems.",
        },
        {
          question: "Can you help with framing for commercial office buildings?",
          answer:
            "Yes. We can discuss commercial framing requirements for office buildings and other business properties, including wall layouts, metal framing systems, material specifications, and project coordination.",
        },
        {
          question: "What is the difference between wood and steel framing?",
          answer:
            "Wood framing commonly supports residential building designs, while steel framing can suit various residential and commercial applications. The appropriate system depends on project specifications and engineering requirements.",
        },
        {
          question: "Do you provide framing for existing home renovations?",
          answer:
            "Yes. Renovation projects may require new partitions, modified room layouts, or replacement framing. The specific work depends on existing conditions and approved construction plans.",
        },
        {
          question: "How do I get a house framing estimate in Ferndale?",
          answer:
            "Contact Joyner Construction LLC with your project drawings, approximate building dimensions, material preferences, and expected schedule so our team can discuss the required framing work.",
        },
        {
          question: "Why is accurate structural framing important?",
          answer:
            "Accurate framing helps establish the intended building layout and supports proper coordination of later construction stages. Measurements, material specifications, and approved plans guide installation requirements.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning a framing project in Ferndale? Contact Joyner Construction LLC to discuss your building plans, material options, and estimate.",
    },
  };
}
