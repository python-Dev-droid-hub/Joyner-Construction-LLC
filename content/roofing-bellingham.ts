import type { LandingPageContent } from "@/content/landing";

export function isBellinghamRoofing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "roofing" && areaSlug === "bellingham-wa";
}

export const bellinghamRoofingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Roofing Repair, Replacement & Installation Services Contractor Bellingham, WA",
  supporting:
    "Joyner Construction LLC provides residential and commercial roofing services in Bellingham, WA. From storm-related repairs to complete roof replacements, we help property owners address roofing concerns with suitable materials, careful installation planning, and solutions tailored to their building requirements.",
};

export const bellinghamRoofingSeo = {
  title:
    "Professional Residential & Commercial Roof Repair, Replacement and Installation Services in Bellingham, WA | Joyner Construction LLC",
  description:
    "Upgrade your property with trusted roofing services in Bellingham, WA. Joyner Construction LLC specializes in residential and commercial roofing, offering dependable roof installation, replacement, and repair solutions. Get quality construction support and professional service for your roofing project. Contact us today!",
};

/** Swap the shared template copy for the Bellingham roofing page. Images stay in place. */
export function applyBellinghamRoofingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Flat Roof Repair and Replacement Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "A dependable roof helps protect your property from moisture, weather exposure, and exterior damage. Joyner Construction LLC provides roof repair services in Bellingham, WA, for residential and commercial buildings. Our team discusses residential roof repair, asphalt shingle roofing, shingle roof repair, and shingle roof replacement services according to your property's condition.",
        "We also handle flat roof repair, flat roof replacement, and installation requirements. Whether you need storm damage roof repair, wind damage roof repair, or hail damage roof repair, we assess the project scope and discuss suitable options with you.",
      ],
      visualCaption: "Tap a node to explore each stage of roofing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your roofing concerns, property type, and preferred project timeline.",
          scope:
            "We outline repair areas, replacement requirements, material options, and expected project considerations.",
          layout:
            "We review roof dimensions, drainage areas, material conditions, and access before planning the roofing work.",
          craft:
            "Our team focuses on appropriate materials, precise installation, and careful attention to roofing details.",
          structure:
            "We consider roof slopes, drainage systems, flashing, and connections when reviewing your building's requirements.",
          handoff:
            "We communicate completed work details and coordinate any remaining roofing or exterior construction requirements.",
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
            "A new roof requires suitable materials and installation planning for the building's design. Joyner Construction LLC coordinates residential and commercial roof installation in Bellingham, WA, according to project specifications and property requirements.",
          imageAlt: "Roof installation in Bellingham, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Roof Replacement",
          description:
            "When an existing roof reaches the end of its service life, replacement may become necessary. We discuss roofing material options, removal requirements, and installation details to prepare your property for a new roofing system.",
          imageAlt: "Roof replacement project in Bellingham, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Roof Repair",
          description:
            "Missing shingles, damaged flashing, and weather-related leaks can affect roof performance. Our roof repair services address identified problems and help property owners determine suitable repairs based on the roof's condition.",
          imageAlt: "Roof repair work in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Roofing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Storm and Wind Damage Roof Repair Contractors Installation Bellingham, WA?",
      body: "Storms and strong winds can leave roofing materials damaged or displaced. Contact Joyner Construction LLC in Bellingham, WA, to discuss your roof inspection, repair, replacement, and installation requirements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Roofing Services",
      title:
        "Certified Or Trusted Reliable Roofing Replacement Specialists Contractors Services Bellingham, WA",
      intro:
        "Roofing problems can affect a property's protection, appearance, and long-term maintenance needs. Joyner Construction LLC provides residential and commercial roofing services in Bellingham, WA, with solutions based on roof condition and project requirements. From localized repairs to complete replacements, we discuss suitable materials, installation details, and scheduling. Whether your property has asphalt shingles or a flat roofing system, our team helps clarify the work needed to address your roofing concerns.",
      sections: [
        {
          heading: "Affordable Roof Repair Contractors",
          body: [
            "Roof damage does not always require a complete replacement. Joyner Construction LLC discusses affordable roof repair services in Bellingham, WA, for residential and commercial properties. We review visible concerns, damaged roofing materials, and the affected areas before discussing suitable repair options. Whether your roof has missing shingles, loose flashing, or signs of moisture intrusion, understanding the problem helps determine the appropriate work. Contact our team to discuss your roof's condition and repair requirements.",
          ],
        },
        {
          heading: "Professional Roof Replacement Company",
          body: [
            "An aging or extensively damaged roof may require replacement to address recurring problems. Joyner Construction LLC provides roof replacement services in Bellingham, WA, for homeowners and commercial property owners. We discuss existing roof conditions, material preferences, removal requirements, and the proposed installation scope. Whether you are considering asphalt shingles or another suitable roofing system, our team can help explain the available options. A clear replacement plan helps organize the project before installation begins.",
          ],
        },
        {
          heading: "Local Residential Roofing Contractors",
          body: [
            "Residential roofing requirements vary according to roof design, material selection, and exposure to weather. Joyner Construction LLC serves Bellingham, WA, homeowners with roofing services for new installations, repairs, and replacements. We discuss concerns involving shingles, flashing, drainage, and other roofing components based on the property's condition. Whether your home needs a localized repair or a complete roofing update, our team can review the project requirements and discuss practical next steps.",
          ],
        },
        {
          heading: "Best Roof Installation Services",
          body: [
            "A properly planned roof installation starts with selecting materials suited to the building and its specifications. Joyner Construction LLC provides residential and commercial roof installation services in Bellingham, WA. We discuss roof dimensions, existing structures, material requirements, and installation details before work begins. From asphalt shingle systems to other suitable roofing options, the installation approach depends on the property's design. Contact our team to discuss your new roofing project and available materials.",
          ],
        },
        {
          heading: "Licensed and Insured Roofing Contractors",
          body: [
            "Before hiring a roofing contractor, property owners should verify licensing and insurance information. Joyner Construction LLC encourages customers to discuss contractor credentials, project responsibilities, and applicable requirements before scheduling roofing work in Bellingham, WA. We can review your roofing needs, explain the proposed scope, and discuss material and installation considerations. Ask our team about relevant licensing and insurance documentation when requesting an estimate, so you can make an informed decision about your project.",
          ],
        },
        {
          heading: "Emergency Residential or Commercial Roof Repair",
          body: [
            "Unexpected roof damage can leave a building exposed to rain and moisture. Joyner Construction LLC helps residential and commercial property owners in Bellingham, WA, discuss urgent roofing concerns. Storm damage, displaced shingles, damaged flashing, and active leaks may require prompt attention. We review the reported problem and discuss appropriate repair steps based on the roof's condition. If water is entering your property, protect the affected area safely and contact a qualified roofing professional.",
          ],
        },
        {
          heading: "Reliable Roofing Replacement Specialists",
          body: [
            "Replacing a roof involves more than selecting a new exterior material. Joyner Construction LLC discusses roofing replacement projects in Bellingham, WA, with attention to existing conditions, material compatibility, removal requirements, and installation planning. Our team can help property owners compare suitable roofing options for residential and commercial buildings. Whether you are replacing an aging shingle roof or updating another roofing system, we work to establish a clear project scope before the replacement process begins.",
          ],
        },
        {
          heading: "Complete House Roof Installation",
          body: [
            "A complete house roof installation requires coordination between the roof design, selected materials, and building specifications. Joyner Construction LLC provides residential roofing installation services in Bellingham, WA, for homeowners planning new construction or major improvements. We discuss roof measurements, material choices, installation requirements, and project scheduling. From asphalt shingles to other suitable roofing systems, our team helps clarify the installation process so homeowners understand the work involved before construction moves forward.",
          ],
        },
        {
          heading: "Experienced Roof Repair Specialists",
          body: [
            "Roofing issues can develop around shingles, flashing, valleys, and drainage points. Joyner Construction LLC provides roof repair services in Bellingham, WA, for residential and commercial properties experiencing different types of damage. We discuss problems such as missing shingles, leaks, wind damage, and weather-related deterioration to understand the required repair scope. Addressing the affected areas with suitable materials can help limit further exposure. Contact our team to discuss your roofing concerns and possible repair options.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Roofing Services in Bellingham, WA",
      description:
        "Common questions about roofing repair, replacement, and installation in Bellingham, WA.",
      items: [
        {
          question: "What roofing services does Joyner Construction LLC provide?",
          answer:
            "Joyner Construction LLC offers residential and commercial roof installation, repair, and replacement services, including asphalt shingle roofing, flat roofing, and weather-related damage repairs in Bellingham.",
        },
        {
          question: "When should I consider replacing my existing roof?",
          answer:
            "Consider replacement when roofing materials show extensive deterioration, recurring leaks, widespread damage, or age-related problems. A professional assessment can help determine whether repairs remain practical.",
        },
        {
          question: "Do you provide storm and wind damage roof repairs?",
          answer:
            "We address roofing concerns involving storm and wind damage. The required work depends on the affected materials, damage severity, roof condition, and necessary repairs.",
        },
        {
          question: "Can you repair or replace asphalt shingle roofs?",
          answer:
            "Yes. We provide asphalt shingle roofing solutions, including repairs and replacement planning. The recommended approach depends on shingle condition, affected areas, and overall roof performance.",
        },
        {
          question: "Do you offer flat roof repair and installation?",
          answer:
            "We can discuss flat roof repair, replacement, and installation requirements for residential and commercial properties. Suitable materials and methods depend on the building's roofing specifications.",
        },
        {
          question: "How can I request a roofing estimate in Bellingham?",
          answer:
            "Contact Joyner Construction LLC with your property location, roofing concerns, available photos, and project requirements. Our team can discuss the proposed work and estimate process.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need dependable roofing assistance in Bellingham? Contact Joyner Construction LLC today to discuss your repair, replacement, or installation project and request an estimate.",
    },
  };
}
