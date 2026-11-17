import type { LandingPageContent } from "@/content/landing";

export function isLyndenFraming(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "framing" && areaSlug === "lynden-wa";
}

export const lyndenFramingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Structural Framing Services Contractor Lynden, WA",
  supporting:
    "Every well-planned building starts with a framework designed around its intended use. Joyner Construction LLC offers residential and commercial structural framing in Lynden, WA, helping property owners and builders coordinate wood and steel framing installations for new construction, additions, and building improvements.",
};

export const lyndenFramingSeo = {
  title:
    "Reliable Residential & Commercial Building Framing Services in Lynden, WA | Joyner Construction LLC",
  description:
    "Looking for experienced framing professionals in Lynden, WA? Joyner Construction LLC offers quality home framing, commercial framing, structural framing, and new construction services for lasting construction results. Contact us today to discuss your project!",
};

/** Swap the shared template copy for the Lynden framing page. Images stay in place. */
export function applyLyndenFramingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newHome, addition, renovation] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building House Framing Repair and Replacement Services Contractor or Company Lynden, WA",
      paragraphs: [
        "The framing stage turns architectural plans into the physical layout of a building. Joyner Construction LLC provides structural framing services in Lynden, WA, for residential properties, commercial buildings, and office spaces. Our structural framing contractors coordinate wood framing, steel structural framing, and metal framing services according to individual project specifications.",
        "We also address interior wall framing and exterior wall framing requirements for different construction layouts. Whether your project involves repairing an existing framework, replacing selected components, or preparing a new building, we discuss measurements, material options, and installation details to establish a practical scope of work.",
      ],
      visualCaption: "Tap a node to explore each stage of framing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your building plans and discuss the framing services required for your property.",
          scope:
            "We identify installation areas, material needs, project dimensions, and scheduling considerations before starting.",
          layout:
            "We examine architectural drawings, room configurations, wall positions, and site conditions to prepare for framing.",
          craft:
            "Our team considers material specifications, accurate measurements, and appropriate installation methods throughout the project.",
          structure:
            "We organize framing components around building dimensions, designated openings, and approved structural requirements.",
          handoff:
            "We coordinate framing completion details with the project team before subsequent construction activities.",
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
            "A residential building needs a framework that accommodates its floor plan, room dimensions, and structural design. Joyner Construction LLC coordinates new home framing in Lynden, WA, around approved drawings and specified construction materials.",
          imageAlt: "New home framing under construction in Lynden, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Addition Framing",
          description:
            "Expanding a house requires framing that accommodates the proposed addition and its connection to existing construction. Our team discusses wall configurations, structural details, and material requirements for planned home expansions.",
          imageAlt: "Home addition framing in Lynden, WA",
        },
        {
          ...renovation,
          label: "Renovation",
          title: "Renovation Framing",
          description:
            "Updating an older property may require modified walls, new partitions, or replacement framing components. We coordinate renovation framing around approved project documents and the conditions of the existing building.",
          imageAlt: "Renovation framing work in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Framing installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial New Home or Offices Framing Contractors Installation Lynden, WA?",
      body: "Have a residential or commercial building planned in Lynden? Contact Joyner Construction LLC to review your framing requirements, discuss wood or steel options, and request an estimate.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Framing Services",
      title:
        "Certified Or Trusted Reliable Building Framing Contractors Services Agency Lynden, WA",
      intro:
        "Framing decisions influence how construction progresses from the initial building layout to the finishing stages. Joyner Construction LLC provides structural framing services in Lynden, WA, for homeowners, builders, and commercial property owners. We discuss construction drawings, material specifications, wall arrangements, and installation requirements before work begins. Whether the project involves a new residence, an expanded floor plan, or a commercial interior, our team helps clarify the framing scope and coordinate the required work.",
      sections: [
        {
          heading: "Residential Structural Framing Company",
          body: [
            "A residential framing system must reflect the home's planned dimensions, architectural layout, and specified structural components. Joyner Construction LLC provides residential structural framing services in Lynden, WA, for new construction and property improvements. We review available drawings and discuss wall positions, openings, material requirements, and installation details. Our team can coordinate wood or steel framing options based on the approved design. This planning gives homeowners and builders a clearer understanding of the framework needed before finishing work begins.",
          ],
        },
        {
          heading: "Affordable House Framing Services",
          body: [
            "Managing construction expenses starts with understanding the work included in each project stage. Joyner Construction LLC discusses affordable house framing services in Lynden, WA, with attention to building dimensions, material choices, and installation requirements. We review your available plans and help clarify the proposed framing scope. Whether you are planning a complete home build or a smaller residential expansion, discussing project priorities and specifications helps establish expectations before construction moves forward.",
          ],
        },
        {
          heading: "Local Structural Framing Specialists",
          body: [
            "Every building has different framing requirements based on its design, dimensions, and intended purpose. Joyner Construction LLC serves Lynden, WA, with structural framing services for residential and commercial construction. We consider architectural plans, material specifications, wall placement, and installation sequencing when reviewing project details. Our team can discuss wood framing, steel structural framing, and metal framing applications. Contact us to explain your construction plans and discuss the framing arrangements required for your property.",
          ],
        },
        {
          heading: "New Home Framing Contractors",
          body: [
            "A residential construction project needs a framework that follows the approved building design from the beginning. Joyner Construction LLC provides new home framing services in Lynden, WA, with attention to floor plans, wall configurations, openings, and specified materials. We discuss installation requirements with homeowners and builders before work starts. Whether the design includes an open living area, multiple bedrooms, or a customized layout, careful coordination helps prepare the structure for the following construction phases.",
          ],
        },
        {
          heading: "Experienced Wood Framing Contractors",
          body: [
            "Different residential designs call for wood framing arrangements that match their dimensions and construction specifications. Joyner Construction LLC provides wood framing services in Lynden, WA, for new houses, additions, and selected renovation projects. We review project drawings and discuss wall layouts, openings, measurements, and material requirements before installation. Our approach focuses on coordinating the framing work with the building plan, helping homeowners and construction teams prepare for exterior finishes, interior work, and subsequent trades.",
          ],
        },
        {
          heading: "Structural Framing Installation Company",
          body: [
            "A well-organized installation process begins with clear project information and appropriate material specifications. Joyner Construction LLC provides structural framing installation services in Lynden, WA, for residential and commercial buildings. Depending on the approved design, projects may require wood framing, steel structural framing, or metal wall systems. We discuss dimensions, installation areas, and construction sequencing before work begins. This helps property owners and builders understand the requirements associated with their building's framing stage.",
          ],
        },
        {
          heading: "Residential Framing Construction Services",
          body: [
            "The residential framing stage establishes the building's internal layout and prepares its structure for later construction work. Joyner Construction LLC offers residential framing construction services in Lynden, WA, for new homes, additions, and renovations. We coordinate wall positions, measurements, openings, and material selections according to project specifications. Our team can discuss suitable wood or steel framing approaches based on the design. Careful preparation helps connect the framing stage with the remaining residential construction schedule.",
          ],
        },
        {
          heading: "Reliable Building Framing Contractors",
          body: [
            "A dependable framing contractor should understand the drawings, materials, and construction sequence before beginning installation. Joyner Construction LLC provides residential and commercial framing services in Lynden, WA, with attention to project coordination. We discuss wood and metal framing requirements, building dimensions, wall systems, and installation details. From a residential floor plan to an office interior, our team helps define the work involved and coordinate framing requirements with the wider building project.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Framing Services in Lynden, WA",
      description: "Common questions about our framing services in Lynden, WA.",
      items: [
        {
          question: "What types of structural framing projects do you handle?",
          answer:
            "Joyner Construction LLC supports residential and commercial construction, including new houses, home additions, renovations, wood framing, steel framing, and interior and exterior wall installation projects.",
        },
        {
          question: "Do you offer metal framing for commercial properties?",
          answer:
            "We can discuss metal framing requirements for commercial interiors and other applications. The appropriate framing system depends on approved drawings, material specifications, and building requirements.",
        },
        {
          question: "Can you replace damaged structural framing?",
          answer:
            "Replacement work depends on the condition of existing components and the approved repair plan. A project assessment helps determine the required framing scope and installation approach.",
        },
        {
          question: "Is wood framing suitable for new residential construction?",
          answer:
            "Wood framing suits many residential building designs. Its suitability depends on the architectural plans, structural specifications, building requirements, and material selections for the particular project.",
        },
        {
          question: "What affects the cost of structural framing?",
          answer:
            "Project size, building design, materials, labor requirements, installation complexity, and site conditions can influence framing costs. Reviewing the plans helps clarify the project scope.",
        },
        {
          question: "How can I discuss my Lynden framing project?",
          answer:
            "Contact Joyner Construction LLC with your project location, construction drawings, estimated dimensions, and timeline. Our team can discuss your framing requirements and possible next steps.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need framing support in Lynden? Contact Joyner Construction LLC to discuss your residential or commercial construction plans and request pricing.",
    },
  };
}
