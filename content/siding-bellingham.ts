import type { LandingPageContent } from "@/content/landing";

export function isBellinghamSiding(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "siding" && areaSlug === "bellingham-wa";
}

export const bellinghamSidingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Siding Repair or Replacement Services Contractor Bellingham, WA",
  supporting:
    "Joyner Construction LLC provides best residential and commercial siding solutions in Bellingham, WA. From damaged exterior panels to complete siding upgrades, our team focuses on quality workmanship, suitable materials, and reliable improvements that help protect and refresh homes, offices, and commercial buildings.",
};

export const bellinghamSidingSeo = {
  title:
    "Professional Siding Installation, Repair & Replacement Services in Bellingham, WA | Joyner Construction LLC",
  description:
    "Looking for professional siding services in Bellingham, WA? Joyner Construction LLC provides quality siding installation, repair, and replacement to protect and enhance your home's appearance. Contact us today for a free estimate!",
};

/** Swap the shared template copy for the Bellingham siding page. Images stay in place. */
export function applyBellinghamSidingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Siding Install or Replace or Repair Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "Your property's exterior deserves siding solutions that combine appearance, durability, and proper installation. Joyner Construction LLC provides dependable siding repair services in Bellingham, WA, for residential and commercial buildings. Whether you need house siding repair, residential siding repair, or exterior siding repair, we assess the condition of your existing materials before recommending practical improvements.",
        "As a siding install services contractor in Bellingham, WA, we also help property owners plan new installations and replacements. Our professional and trusted team focuses on careful preparation, suitable material selection, and clean finishing to address each property's requirements and deliver lasting exterior improvements.",
      ],
      visualCaption: "Tap a node to explore each stage of siding work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your exterior concerns and explore suitable siding improvement options.",
          scope:
            "Every project follows defined requirements, priorities, and agreed expectations.",
          layout:
            "We organize every siding project around practical design and property requirements.",
          craft:
            "Careful workmanship creates consistent finishes and properly installed exterior siding.",
          structure:
            "We evaluate existing exterior conditions before recommending suitable siding solutions.",
          handoff:
            "We review completed work and communicate important project details clearly.",
        },
      },
    },
    services: {
      title: "New Siding Installation, Replacement, and Repair",
      items: [
        {
          ...install,
          label: "Install",
          title: "New Siding Installation",
          description:
            "Upgrade your property's exterior with professionally installed siding. We help homeowners and commercial property owners select suitable materials and plan installations that complement their buildings and requirements.",
          imageAlt:
            "New siding installation on a property in Bellingham, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Siding Replacement",
          description:
            "Replace deteriorating or outdated siding with materials that refresh your property's exterior. We consider existing conditions, building design, and installation requirements to plan effective siding upgrades.",
          imageAlt: "Siding replacement on a property in Bellingham, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Siding Repair",
          description:
            "Address cracked panels, loose sections, and visible exterior damage with targeted siding repairs. We assess affected areas and recommend practical solutions to restore your property's appearance.",
          imageAlt: "Siding repair on a property in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Siding installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Siding Installation Bellingham, WA?",
      body: "Looking for dependable siding installation? Contact Joyner Construction LLC to discuss your residential or commercial project in Bellingham, WA. Let's plan an exterior upgrade that meets your needs.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Siding Services",
      title:
        "Certified or Trusted Siding Installation or Replacement Services Agency Bellingham, WA",
      intro:
        "Choosing the right siding contractor helps protect your property and maintain its exterior appearance. Joyner Construction LLC provides siding installation and replacement solutions for residential and commercial buildings in Bellingham, WA. Whether you are updating worn materials or planning a new exterior, we consider your building's design, material requirements, and project goals. Our focus remains on careful preparation, suitable installation methods, and quality workmanship throughout every project.",
      sections: [
        {
          heading: "Vinyl Siding",
          body: [
            "Vinyl siding is a popular exterior option because it offers versatile styles, colors, and textures for different property designs. It can give an aging home a cleaner appearance while providing a practical exterior covering. Joyner Construction LLC helps property owners in Bellingham, WA, explore vinyl siding options for their improvement projects. Proper panel alignment, secure fastening, and careful finishing contribute to an attractive installation that complements the building's overall appearance.",
          ],
        },
        {
          heading: "Fiber Cement Siding",
          body: [
            "Fiber cement siding offers a durable exterior option with design flexibility for residential and commercial buildings. Its available finishes can complement traditional homes, modern properties, and office exteriors. Joyner Construction LLC helps Bellingham, WA, property owners consider this material when planning siding upgrades. Successful installation requires appropriate preparation, accurate measurements, and suitable fastening methods. Evaluating the building's design and exterior requirements helps determine whether fiber cement is a practical choice.",
          ],
        },
        {
          heading: "General Siding",
          body: [
            "Siding contributes to a building's appearance and helps protect its exterior from everyday exposure. Loose panels, cracks, fading, and deteriorating sections can affect the condition of your property. Joyner Construction LLC provides siding solutions for homes and commercial buildings in Bellingham, WA. Whether you are addressing isolated damage or considering a complete exterior update, selecting appropriate materials and installation methods helps create a consistent finish suited to your building.",
          ],
        },
        {
          heading: "Local Siding Installation Company",
          body: [
            "Planning an exterior improvement starts with understanding your building's condition and installation requirements. Joyner Construction LLC works with residential and commercial property owners in Bellingham, WA, to address their siding project needs. From discussing material options to planning installation details, we focus on solutions that suit each property's design and intended use. Whether you are updating a family home or improving an office exterior, a clear project plan helps establish expectations.",
          ],
        },
        {
          heading: "Siding Repair and Installation Services",
          body: [
            "Siding damage can appear as cracked panels, loose sections, moisture-related deterioration, or visible gaps around exterior surfaces. Addressing these issues helps maintain your building's condition and appearance. Joyner Construction LLC provides siding repair and installation services in Bellingham, WA, for residential and commercial properties. Whether your project involves replacing a damaged section or installing siding across an entire building, the recommended approach should reflect the material condition and project requirements.",
          ],
        },
        {
          heading: "Licensed and Insured Siding Contractors",
          body: [
            "Choosing qualified siding contractors is an important part of planning an exterior improvement project. Property owners should verify applicable licensing, insurance coverage, and contractor credentials before work begins. Joyner Construction LLC recognizes the importance of clear communication, responsible project planning, and professional workmanship when handling siding projects in Bellingham, WA. Understanding these details helps homeowners and commercial property managers make informed decisions and establish clear expectations before moving forward.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Siding Materials, Installation, and Replacement",
      description:
        "Explore common questions about siding materials, installation, repairs, and replacement projects.",
      items: [
        {
          question: "When Should I Consider Replacing My Home's Siding?",
          answer:
            "Consider replacement when siding has widespread deterioration, recurring damage, or moisture-related problems. A professional assessment can help determine whether repairs or complete replacement makes more sense.",
        },
        {
          question: "What Types of Siding Are Available for Installation?",
          answer:
            "Common siding options include vinyl, fiber cement, wood, and engineered wood. Each material offers different appearances, maintenance requirements, and performance characteristics for residential and commercial properties.",
        },
        {
          question: "Can Contractors Repair Individual Damaged Siding Panels?",
          answer:
            "Yes, individual damaged panels can often be repaired or replaced when surrounding materials remain in suitable condition. The repair approach depends on damage and material availability.",
        },
        {
          question: "How Long Does a Siding Installation Project Take?",
          answer:
            "Installation time varies according to building size, material selection, weather, and preparation requirements. Your contractor can provide a project timeline after reviewing the property's specific conditions.",
        },
        {
          question: "Is New Siding Installation Worthwhile for Older Homes?",
          answer:
            "New siding can refresh an older home's appearance and address deteriorating exterior materials. The right option depends on existing conditions, improvement goals, and your renovation budget.",
        },
        {
          question: "Do Commercial Buildings Need Different Siding Solutions?",
          answer:
            "Commercial buildings may require different materials, installation methods, and project planning than residential properties. Building design, exterior exposure, and applicable requirements help determine suitable siding solutions.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate",
      description:
        "Contact Joyner Construction LLC today to discuss your siding project and request an estimate for your property.",
    },
  };
}
