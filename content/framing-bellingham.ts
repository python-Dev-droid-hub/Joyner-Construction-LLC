import type { LandingPageContent } from "@/content/landing";

export function isBellinghamFraming(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "framing" && areaSlug === "bellingham-wa";
}

export const bellinghamFramingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Structural Framing Services Contractor Bellingham, WA",
  supporting:
    "From residential floor plans to commercial building layouts, framing requires careful attention to construction details. Joyner Construction LLC provides structural framing services in Bellingham, WA, with wood and steel installation options for new buildings, property expansions, and renovation projects.",
};

export const bellinghamFramingSeo = {
  title: "Structural Framing in Bellingham, WA",
  description:
    "Joyner Construction LLC provides structural framing services in Bellingham, WA, with wood and steel installation options for new buildings, property expansions, and renovation projects.",
};

/** Swap the shared template copy for the Bellingham framing page. Images stay in place. */
export function applyBellinghamFramingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newHome, addition, renovation] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building House Framing Repair and Replacement Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "Different building designs require framing solutions that accommodate their layouts, materials, and construction specifications. Joyner Construction LLC is a structural framing company serving Bellingham, WA, with services for residential properties, commercial spaces, and office buildings. Our structural framing contractors discuss wood framing, steel structural framing, and metal framing services based on approved project documents.",
        "We also coordinate interior wall framing and exterior wall framing for different building configurations. Whether you need framing for a new property, selected repairs, or replacement components, we focus on understanding the design, measurements, and installation requirements before work begins.",
      ],
      visualCaption: "Tap a node to explore each stage of framing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your building project and the framing assistance you need.",
          scope:
            "We discuss project complexity, material specifications, work areas, and installation scheduling.",
          layout:
            "We map out framing areas, review construction drawings, and identify dimensions that guide installation.",
          craft:
            "We focus on material preparation, appropriate construction methods, and attention to installation details.",
          structure:
            "We coordinate framing systems with building plans, structural specifications, and designated wall openings.",
          handoff:
            "We review the completed framing scope and communicate relevant details for the next trades.",
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
            "New residential construction requires framing that accommodates the planned floor plan and building specifications. Joyner Construction LLC coordinates new home framing in Bellingham, WA, with attention to wall layouts, openings, and specified structural materials.",
          imageAlt: "New home framing under construction in Bellingham, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Addition Framing",
          description:
            "A home expansion changes the building's existing footprint and requires a coordinated framing plan. We discuss additional wall systems, structural connections, measurements, and material requirements for planned residential additions.",
          imageAlt: "Home addition framing in Bellingham, WA",
        },
        {
          ...renovation,
          label: "Renovation",
          title: "Renovation Framing",
          description:
            "Remodeling projects may require revised room divisions, replacement wall sections, or updated framing arrangements. Our renovation framing services follow project specifications while considering how new components connect with existing construction.",
          imageAlt: "Renovation framing work in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Framing installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial New Home or Offices Framing Contractors Installation Bellingham, WA?",
      body: "Building a new home or updating commercial space in Bellingham? Contact Joyner Construction LLC to discuss your structural framing plans and arrange an estimate for your project.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Framing Services",
      title:
        "Certified Or Trusted Reliable Building Framing Contractors Services Agency Bellingham, WA",
      intro:
        "Choosing the right framing approach starts with understanding the building's design and construction requirements. Joyner Construction LLC provides residential and commercial structural framing services in Bellingham, WA. We discuss material selections, wall configurations, measurements, and installation planning to help organize each project. From individual residential properties to commercial office interiors, our team considers the approved construction documents and required framing scope. Contact us to discuss your building plans and identify the next steps for your framing project.",
      sections: [
        {
          heading: "Residential Structural Framing Company",
          body: [
            "A home's framework determines the arrangement of walls and supports the construction plan for later building stages. Joyner Construction LLC provides residential structural framing services in Bellingham, WA, for new houses and property improvements. We coordinate wall layouts, openings, building dimensions, and specified materials using available project drawings. Homeowners and builders can discuss wood or steel framing options according to the design. Our goal is to establish a clearly defined framing scope before the installation process begins.",
          ],
        },
        {
          heading: "Affordable House Framing Services",
          body: [
            "Finding a suitable framing solution involves considering the building design, available budget, and required materials. Joyner Construction LLC discusses affordable house framing services in Bellingham, WA, for residential construction and improvement projects. We review the proposed scope, building dimensions, and installation requirements to help clarify the work involved. Whether you are planning a compact residence or a larger home, discussing project specifications early can help you understand the framing needs and associated cost considerations.",
          ],
        },
        {
          heading: "Local Structural Framing Specialists",
          body: [
            "Structural framing requirements vary according to building size, architectural design, and intended use. Joyner Construction LLC provides framing services in Bellingham, WA, for residential and commercial construction projects. We review construction documents, discuss material specifications, and coordinate wall configurations and installation requirements. Our team can address wood framing, steel structural framing, and metal framing applications according to the project design. Contact us to discuss your property's construction needs and arrange a conversation about the framing scope.",
          ],
        },
        {
          heading: "New Home Framing Contractors",
          body: [
            "A new home's framework needs to reflect the architectural plan and specified structural requirements. Joyner Construction LLC offers new home framing services in Bellingham, WA, for homeowners and residential builders. We discuss room configurations, wall locations, openings, measurements, and required materials before installation. Our team works from project specifications to coordinate the framing stage with the wider construction schedule. This preparation helps establish the building layout before roofing, finishing, and other trades continue their work.",
          ],
        },
        {
          heading: "Experienced Wood Framing Contractors",
          body: [
            "Wood framing can accommodate a wide range of residential layouts, from traditional floor plans to customized living spaces. Joyner Construction LLC provides wood framing services in Bellingham, WA, based on approved building documents and material specifications. We consider measurements, wall arrangements, openings, and installation details when organizing the work. Whether you are constructing a new residence or modifying an existing property, our team discusses the framing requirements and helps coordinate the work with your construction plans.",
          ],
        },
        {
          heading: "Structural Framing Installation Company",
          body: [
            "Structural framing installation connects the building design with the physical framework required for construction. Joyner Construction LLC provides framing installation services in Bellingham, WA, for residential and commercial projects. Depending on the approved specifications, installation may involve wood framing, steel structural framing, or metal wall systems. We discuss measurements, material requirements, connection details, and scheduling before starting. Clear preparation helps builders and property owners understand the framing work and coordinate the remaining construction activities.",
          ],
        },
        {
          heading: "Residential Framing Construction Services",
          body: [
            "Residential framing requires coordination between the architectural layout, material selections, and installation details. Joyner Construction LLC provides residential framing construction services in Bellingham, WA, for new construction, home expansions, and renovation work. We discuss the location of walls, openings, dimensions, and framing specifications according to the project drawings. Our team can review wood and steel framing options where appropriate. A defined scope helps homeowners and builders prepare for the next stages of their residential construction project.",
          ],
        },
        {
          heading: "Reliable Building Framing Contractors",
          body: [
            "Commercial and residential buildings require framing arrangements suited to their individual designs and intended functions. Joyner Construction LLC offers building framing services in Bellingham, WA, with project planning focused on approved construction documents. We discuss wall configurations, material specifications, installation areas, and scheduling requirements before work begins. Whether the project involves a residential wood framework or commercial metal wall systems, our team helps clarify the work needed to coordinate the framing stage with other construction activities.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Framing Services in Bellingham, WA",
      description:
        "Answers to frequently asked structural framing questions in Bellingham, WA.",
      items: [
        {
          question: "What residential framing services do you provide?",
          answer:
            "Our residential framing services include new home framing, additions, renovation framing, wood framing, and selected structural framing work based on approved building plans and project specifications.",
        },
        {
          question: "Do you work on commercial framing projects?",
          answer:
            "Yes. We can discuss commercial framing requirements for office buildings and other business properties, including metal wall systems, structural layouts, and installation coordination.",
        },
        {
          question: "Can I choose between wood and steel framing?",
          answer:
            "Material selection depends on your building design, engineering requirements, project specifications, and intended use. Our team can discuss the available options for your construction plans.",
        },
        {
          question: "Do you provide interior and exterior wall framing?",
          answer:
            "We can discuss both interior and exterior wall framing requirements for residential and commercial properties. The specific installation scope depends on the approved drawings and building specifications.",
        },
        {
          question: "How do I prepare for a framing estimate?",
          answer:
            "Gather your architectural drawings, project dimensions, material preferences, site information, and estimated schedule. These details help clarify the required work and project expectations.",
        },
        {
          question: "Why should I plan framing before construction starts?",
          answer:
            "Early framing coordination helps establish material requirements, wall locations, dimensions, and installation sequencing. This preparation supports communication between the framing team and other construction trades.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to discuss your Bellingham framing project? Contact Joyner Construction LLC today to review your plans and request a construction estimate.",
    },
  };
}
