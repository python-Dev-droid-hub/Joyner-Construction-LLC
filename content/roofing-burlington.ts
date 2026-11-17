import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonRoofing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "roofing" && areaSlug === "burlington-wa";
}

export const burlingtonRoofingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Roofing Repair, Replacement & Installation Services Contractor Burlington, WA",
  supporting:
    "Joyner Construction LLC provides residential and commercial roofing services in Burlington, WA. Whether your property needs shingle repairs, flat roof replacement, or a new roofing system, we help organize suitable solutions around building specifications, material requirements, and project goals.",
};

export const burlingtonRoofingSeo = {
  title:
    "Professional Roofing Contractors for Residential & Commercial Roof Repair, Installation and Replacement in Burlington, WA | Joyner Construction LLC",
  description:
    "Enhance your property's safety and durability with expert roofing services in Burlington, WA. Joyner Construction LLC offers residential and commercial roof installation, replacement, repair, and customized roofing solutions. Our team focuses on quality results and dependable service for every project. Get in touch today!",
};

/** Swap the shared template copy for the Burlington roofing page. Images stay in place. */
export function applyBurlingtonRoofingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Flat Roof Repair and Replacement Services Contractor or Company Burlington, WA",
      paragraphs: [
        "Roofing problems can develop through aging materials, damaged shingles, worn flashing, or prolonged weather exposure. Joyner Construction LLC provides roof repair services in Burlington, WA, for residential and commercial properties.",
        "Our local roof repair contractors discuss residential roof repair, asphalt shingle roofing, shingle roof repair, and shingle roof replacement services. We also handle flat roof repair, flat roof replacement, and installation requirements. From storm damage roof repair to wind and hail damage, we consider the affected areas and recommend discussing suitable solutions based on your property's roofing condition.",
      ],
      visualCaption: "Tap a node to explore each stage of roofing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your roofing concerns, property details, and preferred installation or repair schedule with us.",
          scope:
            "We identify affected roof sections, material requirements, replacement needs, and project expectations beforehand.",
          layout:
            "We examine roof dimensions, drainage points, material conditions, and access before preparing work.",
          craft:
            "We consider appropriate roofing materials, installation techniques, and detailed workmanship throughout every project.",
          structure:
            "We review roof slopes, flashing locations, drainage arrangements, and connections with existing building components.",
          handoff:
            "We communicate project completion details and coordinate remaining exterior construction requirements with relevant trades.",
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
            "A new roofing system should match the building's design, slope, and material requirements. Joyner Construction LLC coordinates roof installation in Burlington, WA, with attention to product selection, preparation, and project specifications.",
          imageAlt: "Roof installation in Burlington, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Roof Replacement",
          description:
            "Widespread shingle deterioration, recurring leaks, or an aging roofing system may indicate replacement needs. We discuss removal requirements, suitable materials, and installation planning to prepare your property for its next roof.",
          imageAlt: "Roof replacement project in Burlington, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Roof Repair",
          description:
            "Localized roofing problems can allow moisture to enter your property if left unaddressed. Our roof repair services address damaged shingles, flashing concerns, and weather-related issues according to the roof's condition.",
          imageAlt: "Roof repair work in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Roofing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Storm and Wind Damage Roof Repair Contractors Installation Burlington, WA?",
      body: "Strong winds and severe weather can loosen shingles and expose vulnerable roof sections. Contact Joyner Construction LLC in Burlington, WA, to discuss damage assessment, repairs, replacement options, and installation requirements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Roofing Services",
      title:
        "Certified Or Trusted Reliable Roofing Replacement Specialists Contractors Services Burlington, WA",
      intro:
        "A roof protects more than a building's appearance; it helps manage moisture and exterior weather exposure. Joyner Construction LLC provides residential and commercial roofing services in Burlington, WA, for properties with different roofing requirements. We discuss damaged materials, replacement options, installation details, and maintenance considerations. Whether you need attention for an asphalt shingle roof or a commercial flat roofing system, our team helps clarify the work involved and organize the next steps for your property.",
      sections: [
        {
          heading: "Affordable Roof Repair Contractors",
          body: [
            "A small roofing problem can become more disruptive when moisture reaches underlying building materials. Joyner Construction LLC discusses affordable roof repair services in Burlington, WA, for homeowners and commercial property owners. We consider missing shingles, deteriorated flashing, and other visible concerns when reviewing the proposed work. Our team can explain available repair options according to the roof's condition and affected areas. Contact us to discuss your roofing concerns and determine which repairs may be appropriate.",
          ],
        },
        {
          heading: "Professional Roof Replacement Company",
          body: [
            "Replacing a roof gives property owners an opportunity to address aging materials and recurring roofing problems. Joyner Construction LLC provides roof replacement services in Burlington, WA, with attention to existing conditions, material choices, and installation requirements. We discuss asphalt shingle replacement and other suitable roofing systems based on the building design. Whether your property needs a complete replacement or a planned roofing upgrade, our team helps establish the project scope before work begins.",
          ],
        },
        {
          heading: "Local Residential Roofing Contractors",
          body: [
            "Residential roofs require materials and installation methods suited to their design and exposure. Joyner Construction LLC serves Burlington, WA, homeowners with roofing services for new construction, repairs, and replacements. We discuss asphalt shingles, flashing, roof drainage, and other components when reviewing a property's needs. Whether you have noticed missing shingles or want to update an aging roof, our team can help clarify the available options and discuss the requirements for your residential roofing project.",
          ],
        },
        {
          heading: "Best Roof Installation Services",
          body: [
            "Roof installation involves coordinating building dimensions, roofing materials, underlayment, flashing, and other essential components. Joyner Construction LLC provides residential and commercial roof installation services in Burlington, WA. We discuss suitable roofing systems according to the property's design and project specifications. Whether you are constructing a new home or developing a commercial building, our team can review the installation scope and material requirements. Proper preparation helps organize the work before the roofing system is installed.",
          ],
        },
        {
          heading: "Licensed and Insured Roofing Contractors",
          body: [
            "Verifying contractor credentials is an important step when planning residential or commercial roofing work. Joyner Construction LLC encourages Burlington property owners to discuss applicable licensing, insurance documentation, and project responsibilities before hiring a contractor. We can review your roofing requirements, explain the proposed work, and discuss installation or repair considerations. Ask our team about relevant credentials and documentation when requesting an estimate so you can make an informed decision about your property's roofing project.",
          ],
        },
        {
          heading: "Emergency Residential or Commercial Roof Repair",
          body: [
            "Unexpected roofing damage can create immediate concerns when rain or wind exposes vulnerable building areas. Joyner Construction LLC helps residential and commercial property owners in Burlington, WA, discuss urgent roof repair requirements. Problems may include displaced shingles, damaged flashing, active leaks, or storm-related deterioration. We review the reported concerns and discuss appropriate repair options based on the affected areas. If water enters your property, protect the interior safely and contact a qualified roofing professional.",
          ],
        },
        {
          heading: "Reliable Roofing Replacement Specialists",
          body: [
            "An effective roof replacement plan considers the condition of existing materials and the requirements of the new system. Joyner Construction LLC discusses residential and commercial roofing replacements in Burlington, WA. We review material preferences, roof dimensions, removal requirements, and installation considerations before outlining the work. Whether you are replacing worn asphalt shingles or updating a commercial flat roof, our team helps clarify the process and coordinate the project around your building's specifications.",
          ],
        },
        {
          heading: "Complete House Roof Installation",
          body: [
            "A complete house roof installation requires coordination between the building's design and the selected roofing materials. Joyner Construction LLC provides residential roof installation services in Burlington, WA, for new homes and major property improvements. We discuss roof dimensions, material specifications, flashing, underlayment, and installation requirements. From asphalt shingle systems to other suitable options, our team helps homeowners understand the work involved and prepare for the roofing stage of their construction project.",
          ],
        },
        {
          heading: "Experienced Roof Repair Specialists",
          body: [
            "Roofing damage can appear in different areas, including valleys, roof edges, flashing connections, and shingle surfaces. Joyner Construction LLC provides roof repair services in Burlington, WA, for residential and commercial buildings. We discuss visible problems such as leaks, loose shingles, wind damage, and weather-related deterioration to understand the required work. Identifying the affected sections helps clarify repair options and material requirements. Contact our team to discuss your property's roofing condition and possible next steps.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Roofing Services in Burlington, WA",
      description:
        "Common questions about roofing repair, replacement, and installation in Burlington, WA.",
      items: [
        {
          question: "What roofing services does Joyner Construction LLC offer?",
          answer:
            "Joyner Construction LLC provides residential and commercial roof installation, replacement, and repair services, including asphalt shingle roofing, flat roofing, and storm-related damage repair in Burlington.",
        },
        {
          question: "Can you repair a roof with missing or damaged shingles?",
          answer:
            "Yes. We discuss shingle roof repairs involving missing, cracked, or displaced materials. The appropriate solution depends on the damage, surrounding shingles, and overall roof condition.",
        },
        {
          question: "When is complete roof replacement necessary?",
          answer:
            "Replacement may be appropriate when roofing materials experience widespread deterioration, recurring leaks, or extensive damage. A professional assessment helps determine whether repairs remain suitable.",
        },
        {
          question: "Do you provide commercial flat roof replacement?",
          answer:
            "We discuss commercial flat roof replacement and installation requirements. Material selection and installation methods depend on the building design, existing roofing system, and project specifications.",
        },
        {
          question:
            "Can storms and hail damage require professional roof repairs?",
          answer:
            "Yes. Hail and storms can damage shingles, flashing, and other roofing components. A professional assessment helps identify affected areas and determine appropriate repairs.",
        },
        {
          question: "How can I request a Burlington roofing estimate?",
          answer:
            "Contact Joyner Construction LLC with your property location, roof concerns, available photographs, and project details. Our team can discuss your requirements and estimate process.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need roofing assistance in Burlington? Contact Joyner Construction LLC today to discuss your property, explore suitable solutions, and request an estimate.",
    },
  };
}
