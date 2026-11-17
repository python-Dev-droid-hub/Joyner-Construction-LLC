import type { LandingPageContent } from "@/content/landing";

export function isFerndaleRoofing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "roofing" && areaSlug === "ferndale-wa";
}

export const ferndaleRoofingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Roofing Repair, Replacement & Installation Services Contractor Ferndale, WA",
  supporting:
    "Joyner Construction LLC helps Ferndale, WA, property owners address residential and commercial roofing needs. From replacing worn roofing materials to repairing weather-damaged sections, we discuss practical installation and maintenance solutions based on each building's design and condition.",
};

export const ferndaleRoofingSeo = {
  title: "Roofing Services in Ferndale, WA",
  description:
    "Joyner Construction LLC helps Ferndale, WA, property owners address residential and commercial roofing needs—from replacing worn roofing materials to repairing weather-damaged sections.",
};

/** Swap the shared template copy for the Ferndale roofing page. Images stay in place. */
export function applyFerndaleRoofingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Flat Roof Repair and Replacement Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "A roof exposed to changing weather needs suitable materials and attention to developing damage. Joyner Construction LLC offers roof repair services in Ferndale, WA, for houses, commercial buildings, and office properties. Our local roof repair contractors discuss residential roof repair, asphalt shingle roofing, shingle roof repair, and complete shingle roof replacement services.",
        "We also provide solutions for flat roof repair, replacement, and installation. If your property experiences storm damage, wind damage, or hail damage, we can discuss the affected roofing areas and appropriate repair or replacement requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of roofing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your roof concerns and building details to discuss suitable roofing services.",
          scope:
            "We define repair locations, installation requirements, material selections, and project scheduling before beginning.",
          layout:
            "We assess roof sections, material condition, drainage paths, and property access before organizing work.",
          craft:
            "We prioritize suitable roofing products, accurate fitting, and attention to installation specifications.",
          structure:
            "We examine roof edges, slopes, flashing, and drainage details when planning the required work.",
          handoff:
            "We explain completed roofing work and communicate any remaining project requirements to the property owner.",
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
            "Installing a roof requires preparation that reflects the property's architectural design and material specifications. Joyner Construction LLC provides roof installation services in Ferndale, WA, for residential and commercial construction projects.",
          imageAlt: "Roof installation in Ferndale, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Roof Replacement",
          description:
            "When repairs no longer address an aging or extensively damaged roof, replacement may offer a more suitable solution. We discuss material selection, removal, and installation requirements for your property.",
          imageAlt: "Roof replacement project in Ferndale, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Roof Repair",
          description:
            "Damaged flashing, loose shingles, and water intrusion can affect roofing performance. Our roof repair services focus on identifying affected sections and discussing suitable repair work based on existing conditions.",
          imageAlt: "Roof repair work in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Roofing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Storm and Wind Damage Roof Repair Contractors Installation Ferndale, WA?",
      body: "Weather-related roof damage can expose insulation, ceilings, and interior spaces to moisture. Contact Joyner Construction LLC in Ferndale, WA, to discuss storm damage repairs, roofing replacement, and suitable installation solutions.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Roofing Services",
      title:
        "Certified Or Trusted Reliable Roofing Replacement Specialists Contractors Services Ferndale, WA",
      intro:
        "Roofing decisions should account for the building's condition, material requirements, and exposure to the elements. Joyner Construction LLC provides residential and commercial roofing services in Ferndale, WA, for property owners planning repairs, replacements, or new installations. We discuss asphalt shingles, flat roofing systems, damaged roof sections, and installation requirements. Whether you are addressing a recurring leak or planning an entirely new roof, our team helps define the work and discuss appropriate project options.",
      sections: [
        {
          heading: "Affordable Roof Repair Contractors",
          body: [
            "Roof repairs can address specific problems without automatically requiring an entirely new roofing system. Joyner Construction LLC discusses affordable roof repair services in Ferndale, WA, for residential and commercial properties. We consider the location of leaks, condition of shingles, damaged flashing, and other visible roofing concerns when discussing possible work. Understanding the extent of the damage helps clarify whether localized repairs are appropriate. Contact our team to discuss your roof and explore available repair options.",
          ],
        },
        {
          heading: "Professional Roof Replacement Company",
          body: [
            "An existing roofing system may eventually require replacement because of age, widespread deterioration, or recurring problems. Joyner Construction LLC provides roof replacement services in Ferndale, WA, for residential and commercial properties. We discuss the removal of existing materials, new roofing selections, and installation requirements according to the building's specifications. Whether you are considering asphalt shingles or a flat roofing system, our team can help organize the project scope and explain the replacement process.",
          ],
        },
        {
          heading: "Local Residential Roofing Contractors",
          body: [
            "A residential roofing project should consider the home's architectural style, roof slope, and exposure to weather. Joyner Construction LLC serves Ferndale, WA, with residential roof repair, replacement, and installation services. We discuss shingle conditions, flashing details, drainage requirements, and suitable roofing materials for each project. Whether your home needs attention after a storm or you are planning a complete roofing upgrade, our team can help clarify the work involved and discuss suitable options.",
          ],
        },
        {
          heading: "Best Roof Installation Services",
          body: [
            "A roofing installation must account for the building's structure and the requirements of the selected roofing products. Joyner Construction LLC provides roof installation services in Ferndale, WA, for residential and commercial projects. We discuss material compatibility, roof dimensions, flashing, and installation preparation according to the project design. From new home construction to commercial building improvements, our team helps property owners understand the installation requirements and coordinate the roofing work with the wider construction schedule.",
          ],
        },
        {
          heading: "Licensed and Insured Roofing Contractors",
          body: [
            "Roofing projects involve property access, materials, and work performed at height, making contractor verification important. Joyner Construction LLC encourages property owners in Ferndale, WA, to review applicable licensing and insurance documentation before hiring a roofing contractor. We can discuss the proposed project, roofing materials, and installation responsibilities. Customers should confirm the contractor's current credentials and coverage for the work being considered. This step helps property owners make informed decisions before scheduling roofing repairs or replacement.",
          ],
        },
        {
          heading: "Emergency Residential or Commercial Roof Repair",
          body: [
            "A sudden roof leak or storm-related problem can require prompt attention to protect the property. Joyner Construction LLC helps Ferndale, WA, property owners discuss urgent residential and commercial roof repair needs. Common concerns include broken shingles, exposed roof sections, damaged flashing, and moisture entering interior spaces. We review the reported damage and discuss appropriate repair options based on the situation. Avoid climbing onto a damaged roof and contact a qualified professional for assistance.",
          ],
        },
        {
          heading: "Reliable Roofing Replacement Specialists",
          body: [
            "Roof replacement requires a clear plan for removing old materials and installing the selected roofing system. Joyner Construction LLC discusses roofing replacement services in Ferndale, WA, for residential homes and commercial buildings. We consider roof dimensions, existing conditions, material preferences, and installation requirements before defining the project. Whether you need new asphalt shingles or an updated flat roofing system, our team can explain the work involved and help organize the replacement process around your property's needs.",
          ],
        },
        {
          heading: "Complete House Roof Installation",
          body: [
            "Building a house involves several construction stages, and roofing installation is an important part of preparing the property for protection against the elements. Joyner Construction LLC provides complete house roof installation services in Ferndale, WA. We discuss roof measurements, selected materials, flashing details, and installation specifications based on the building design. Homeowners can explore suitable asphalt shingle and other roofing options while reviewing the work required to complete their residential roofing project.",
          ],
        },
        {
          heading: "Experienced Roof Repair Specialists",
          body: [
            "A roofing issue may originate from deteriorated shingles, damaged flashing, or problems around roof openings. Joyner Construction LLC provides roof repair services in Ferndale, WA, for residential and commercial properties. We discuss the visible symptoms, affected roofing sections, and possible causes before outlining the required work. Whether your property has experienced wind damage, hail impact, or a persistent leak, our team can help clarify the repair requirements and discuss suitable next steps.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Roofing Services in Ferndale, WA",
      description:
        "Common questions about roofing repair, replacement, and installation in Ferndale, WA.",
      items: [
        {
          question:
            "What residential and commercial roofing services are available?",
          answer:
            "Joyner Construction LLC provides roofing repair, replacement, and installation services for homes, commercial buildings, and office properties, including shingle and flat roofing systems in Ferndale.",
        },
        {
          question: "How can I identify wind damage on my roof?",
          answer:
            "Look for missing shingles, lifted roofing materials, damaged flashing, and visible leaks. A qualified roofing professional can assess the affected areas and discuss appropriate repairs.",
        },
        {
          question: "Do you provide asphalt shingle roof replacement?",
          answer:
            "We discuss asphalt shingle roof replacement for residential and commercial properties. Material selection and installation requirements depend on the roof design and project specifications.",
        },
        {
          question: "Can a leaking flat roof be repaired?",
          answer:
            "Flat roof leaks may result from damaged seams, worn materials, or drainage problems. A professional assessment helps identify the affected sections and suitable repair options.",
        },
        {
          question: "Should I repair or replace an aging roof?",
          answer:
            "The decision depends on material deterioration, damage extent, recurring leaks, and overall roof condition. A professional assessment can help compare repair and replacement options.",
        },
        {
          question: "How do I arrange roofing services in Ferndale?",
          answer:
            "Contact Joyner Construction LLC with your property details, roofing concerns, and preferred timeline. Our team can discuss the work required and explain how to request an estimate.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need professional roofing work in Ferndale? Contact Joyner Construction LLC to discuss repairs, new installations, or replacement options.",
    },
  };
}
