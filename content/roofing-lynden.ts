import type { LandingPageContent } from "@/content/landing";

export function isLyndenRoofing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "roofing" && areaSlug === "lynden-wa";
}

export const lyndenRoofingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Roofing Repair, Replacement & Installation Services Contractor Lynden, WA",
  supporting:
    "Joyner Construction LLC delivers residential and commercial roofing solutions in Lynden, WA. Whether you are developing a new property, maintaining an existing roof, or addressing weather-related damage, we discuss suitable roofing materials, repair options, and installation requirements for your building.",
};

export const lyndenRoofingSeo = {
  title: "Roofing Services in Lynden, WA",
  description:
    "Joyner Construction LLC delivers residential and commercial roofing solutions in Lynden, WA—repairs, replacements, and installations with suitable materials for your building.",
};

/** Swap the shared template copy for the Lynden roofing page. Images stay in place. */
export function applyLyndenRoofingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Flat Roof Repair and Replacement Services Contractor or Company Lynden, WA",
      paragraphs: [
        "Maintaining a dependable roofing system requires attention to material condition, drainage, and exterior protection. Joyner Construction LLC serves Lynden, WA, with roof repair services for residential and commercial buildings.",
        "Our home roof repair company discusses asphalt shingle roofing, shingle roof repair, and shingle roof replacement services for different property requirements. We also provide flat roof repair, flat roof replacement, and installation solutions. For properties affected by hail, storms, or strong winds, our team can discuss the extent of the damage and suitable repair or replacement options.",
      ],
      visualCaption: "Tap a node to explore each stage of roofing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Contact our team to explain your roofing concerns and discuss available service options.",
          scope:
            "We review the affected areas, installation needs, material requirements, and expected project schedule.",
          layout:
            "We examine existing roofing materials, roof measurements, drainage arrangements, and property access requirements.",
          craft:
            "We focus on suitable roofing materials, careful fitting, and consistent attention to project details.",
          structure:
            "We consider roof slopes, flashing connections, drainage systems, and surrounding building components.",
          handoff:
            "We discuss completed roofing work and provide relevant project information before final coordination.",
        },
      },
    },
    services: {
      title: "Roof Installation, Replacement, and Repair",
      items: [
        {
          ...install,
          label: "Install",
          title: "Roof Installation",
          description:
            "New construction requires a roofing system selected according to the building's design and specifications. Joyner Construction LLC coordinates residential and commercial roof installation in Lynden, WA, with attention to material compatibility and installation planning.",
          imageAlt: "Roof installation in Lynden, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Roof Replacement",
          description:
            "An older roof with extensive deterioration may need a complete replacement rather than repeated repairs. We discuss existing material removal, roofing selections, and installation requirements to help property owners plan the transition.",
          imageAlt: "Roof replacement project in Lynden, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Roof Repair",
          description:
            "Roofing problems can develop around shingles, flashing, edges, and drainage areas. Our repair services address identified damage and help property owners discuss suitable solutions according to their building's roofing condition.",
          imageAlt: "Roof repair work in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Roofing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Storm and Wind Damage Roof Repair Contractors Installation Lynden, WA?",
      body: "Severe weather can compromise roofing materials and create openings for moisture. Contact Joyner Construction LLC in Lynden, WA, to discuss storm damage inspections, wind-related repairs, roofing replacement, and installation requirements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Roofing Services",
      title:
        "Certified Or Trusted Reliable Roofing Replacement Specialists Contractors Services Lynden, WA",
      intro:
        "The right roofing solution depends on the building, existing materials, and condition of the roof. Joyner Construction LLC provides residential and commercial roofing services in Lynden, WA, for property owners considering maintenance, repairs, replacements, or new installations. We discuss shingle systems, flat roofing, weather-related damage, and material requirements according to individual project needs. Our team helps clarify the proposed work so property owners can make informed decisions about their roofing investments.",
      sections: [
        {
          heading: "Affordable Roof Repair Contractors",
          body: [
            "Roof maintenance and timely repairs can help property owners address developing problems before they affect larger sections of a building. Joyner Construction LLC discusses affordable roof repair services in Lynden, WA, for residential and commercial properties. We review concerns involving damaged shingles, loose flashing, leaks, and other visible roofing issues. The recommended work depends on the roof's condition and the extent of the damage. Contact our team to discuss your repair priorities and project requirements.",
          ],
        },
        {
          heading: "Professional Roof Replacement Company",
          body: [
            "A roof replacement project requires careful consideration of existing materials, building dimensions, and installation requirements. Joyner Construction LLC provides roof replacement services in Lynden, WA, for homeowners and commercial property owners. We discuss asphalt shingle options, flat roofing systems, removal requirements, and material specifications according to the building design. Whether your roof has widespread deterioration or you are planning a major property improvement, our team can help outline the work involved and discuss the replacement process.",
          ],
        },
        {
          heading: "Local Residential Roofing Contractors",
          body: [
            "Your home's roof should suit its architectural design while providing protection against exterior weather exposure. Joyner Construction LLC serves Lynden, WA, with residential roofing services covering repairs, replacements, and new installations. We discuss roofing materials, shingle conditions, flashing, and drainage details when reviewing project requirements. Whether you are building a new house or addressing problems with an existing roofing system, our team can help you understand the available options and plan the required work.",
          ],
        },
        {
          heading: "Best Roof Installation Services",
          body: [
            "Selecting a roofing system involves more than choosing an exterior appearance. Joyner Construction LLC provides residential and commercial roof installation services in Lynden, WA, with attention to building specifications and material requirements. We discuss roof measurements, suitable products, flashing details, and installation preparation before work begins. Property owners can explore asphalt shingles and other appropriate roofing options according to their project's needs. A defined installation scope helps organize materials, scheduling, and construction coordination.",
          ],
        },
        {
          heading: "Licensed and Insured Roofing Contractors",
          body: [
            "Checking contractor qualifications helps property owners understand who will perform their roofing work and what documentation applies. Joyner Construction LLC encourages Lynden, WA, customers to verify current licensing and insurance information before hiring a roofing contractor. We can discuss the project scope, installation responsibilities, and material requirements during the estimate process. Ask about applicable credentials and insurance documentation before scheduling work. Reviewing these details helps you evaluate contractors and make a more informed decision.",
          ],
        },
        {
          heading: "Emergency Residential or Commercial Roof Repair",
          body: [
            "Roof damage following severe weather can create problems that require prompt professional attention. Joyner Construction LLC helps residential and commercial property owners in Lynden, WA, discuss urgent roofing concerns. Situations may include active leaks, missing shingles, damaged flashing, or exposed roof sections. We consider the reported conditions and discuss appropriate repair requirements based on the affected areas. If your building experiences water intrusion, take reasonable steps to protect the interior and arrange professional roofing assistance.",
          ],
        },
        {
          heading: "Reliable Roofing Replacement Specialists",
          body: [
            "A replacement project should address the limitations of the existing roof while accommodating the building's requirements. Joyner Construction LLC discusses residential and commercial roofing replacement in Lynden, WA, with attention to material selection, roof dimensions, removal needs, and installation planning. Whether you are upgrading an asphalt shingle roof or considering a flat roofing system for a commercial property, our team can help define the project scope and explain the work involved before installation.",
          ],
        },
        {
          heading: "Complete House Roof Installation",
          body: [
            "A complete residential roofing project requires coordination of materials and installation details across the entire roof. Joyner Construction LLC provides house roof installation services in Lynden, WA, for new construction and major home improvements. We discuss the building's roof design, measurements, material preferences, flashing, and installation requirements. Whether you prefer asphalt shingles or another suitable roofing product, our team can help clarify the work needed to prepare your home for a new roofing system.",
          ],
        },
        {
          heading: "Experienced Roof Repair Specialists",
          body: [
            "Different roofing problems require different repair approaches. Joyner Construction LLC provides roof repair services in Lynden, WA, for homes and commercial properties experiencing material deterioration or weather-related damage. We discuss concerns such as cracked shingles, loose flashing, roof leaks, and damaged sections to understand the required work. The repair approach depends on the roof's existing condition and affected components. Contact our team to discuss your property's roofing problems and explore suitable solutions.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Roofing Services in Lynden, WA",
      description:
        "Common questions about roofing repair, replacement, and installation in Lynden, WA.",
      items: [
        {
          question: "What roofing services can I request in Lynden?",
          answer:
            "Joyner Construction LLC provides residential and commercial roofing repair, replacement, and installation services, including asphalt shingle roofing, flat roofing, and weather-related damage repairs.",
        },
        {
          question: "How do I know if my roof needs professional repair?",
          answer:
            "Missing shingles, damaged flashing, recurring leaks, and visible material deterioration can indicate roofing problems. A professional assessment helps determine the necessary repair work.",
        },
        {
          question: "Are asphalt shingles suitable for residential roofing?",
          answer:
            "Asphalt shingles are a common residential roofing option. Their suitability depends on roof design, product specifications, installation requirements, and the property's individual needs.",
        },
        {
          question: "What should I do after storm-related roof damage?",
          answer:
            "Keep away from damaged roof sections, protect interior belongings when safe, and contact a qualified roofing professional. Document visible damage from a safe location for assessment.",
        },
        {
          question: "Do you handle residential and commercial flat roofing?",
          answer:
            "We discuss flat roofing repair, replacement, and installation requirements for residential and commercial properties. Suitable materials and installation methods depend on the building specifications.",
        },
        {
          question: "How can I get a roofing estimate in Lynden?",
          answer:
            "Contact Joyner Construction LLC with your property address, roofing concerns, available photographs, and project details. Our team can discuss your requirements and estimate arrangements.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Looking for roofing solutions in Lynden? Contact Joyner Construction LLC today to discuss your repair, replacement, or installation requirements.",
    },
  };
}
