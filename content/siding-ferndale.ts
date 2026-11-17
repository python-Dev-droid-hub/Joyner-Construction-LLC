import type { LandingPageContent } from "@/content/landing";

export function isFerndaleSiding(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "siding" && areaSlug === "ferndale-wa";
}

export const ferndaleSidingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Siding Repair or Replacement Services Contractor Ferndale, WA",
  supporting:
    "Give your property a refreshed exterior with Joyner Construction LLC. We provide residential and commercial siding repair, replacement, and installation services in Ferndale, WA. Whether your building has aging panels or needs a complete exterior upgrade, we focus on practical solutions and quality workmanship.",
};

export const ferndaleSidingSeo = {
  title:
    "Professional Siding Installation, Repair & Replacement Services in Ferndale, WA | Joyner Construction LLC",
  description:
    "Looking for professional siding services in Ferndale, WA? Joyner Construction LLC offers residential and commercial siding installation, repair, and replacement, including vinyl and fiber cement siding. Contact us today for an estimate!",
};

/** Swap the shared template copy for the Ferndale siding page. Images stay in place. */
export function applyFerndaleSidingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Siding Install or Replace or Repair Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "Damaged or outdated siding can affect your property's appearance and leave exterior surfaces vulnerable to weather exposure. Joyner Construction LLC helps homeowners and business owners in Ferndale, WA, address these concerns with dependable siding solutions. Our siding repair services cover common exterior problems, including loose panels, cracks, and deteriorating sections.",
        "Whether you need house siding repair, residential siding repair, or more extensive exterior siding repair, we consider the condition of your existing materials before recommending improvements. As a siding installation contractor, we also handle new siding projects and replacements. Our professional team emphasizes suitable material choices, careful preparation, and finished results that complement your building.",
      ],
      visualCaption: "Tap a node to explore each stage of siding work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your building and discuss your siding improvement goals.",
          scope:
            "We define project priorities according to property conditions and expectations.",
          layout:
            "We coordinate exterior details to achieve a clean, well-planned siding appearance.",
          craft:
            "Precise installation techniques help create attractive and consistent exterior finishes.",
          structure:
            "Existing walls and siding conditions guide our project recommendations.",
          handoff:
            "We communicate completion details and review important project considerations together.",
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
            "Give your building a fresh exterior with carefully planned siding installation. We help property owners consider suitable materials, design preferences, and project requirements for new construction or upgrades.",
          imageAlt: "New siding installation on a property in Ferndale, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Siding Replacement",
          description:
            "Outdated siding can make an otherwise attractive property look neglected. Replacement provides an opportunity to update exterior materials, improve visual consistency, and give your building a refreshed appearance.",
          imageAlt: "Siding replacement on a property in Ferndale, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Siding Repair",
          description:
            "Damaged siding deserves attention before minor exterior issues become more extensive. We assess affected panels, identify visible problems, and recommend appropriate repairs based on existing material conditions.",
          imageAlt: "Siding repair on a property in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Siding installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Siding Installation Ferndale, WA?",
      body: "Need dependable siding installation for your home or business? Connect with Joyner Construction LLC to discuss your Ferndale, WA, project and explore suitable exterior improvement solutions.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Siding Services",
      title:
        "Certified or Trusted Siding Installation or Replacement Services Agency Ferndale, WA",
      intro:
        "Your siding should complement your property's architecture while providing a dependable exterior covering. Joyner Construction LLC offers residential and commercial siding installation and replacement solutions in Ferndale, WA. Whether your existing exterior shows signs of wear or you want a different appearance, we help you consider appropriate materials and project requirements. Our approach emphasizes thoughtful planning, accurate installation, and attention to the details that influence your building's finished appearance.",
      sections: [
        {
          heading: "Vinyl Siding",
          body: [
            "For homeowners looking an exterior with plenty of design options, vinyl siding offers a practical choice. Its range of colors, profiles, and textures makes it suitable for different architectural styles. Joyner Construction LLC helps Ferndale, WA, property owners explore vinyl siding for exterior renovation projects. The installation process involves careful measurements, panel positioning, and secure fastening. Selecting an appropriate style can help create a coordinated appearance that complements your home's overall design.",
          ],
        },
        {
          heading: "Fiber Cement Siding",
          body: [
            "Fiber cement siding is valued for its solid construction and ability to complement a variety of building styles. It is available in finishes that can resemble traditional exterior materials while offering a distinct appearance. Joyner Construction LLC helps property owners in Ferndale, WA, evaluate fiber cement for siding upgrades. Proper handling, accurate cutting, suitable fastening, and manufacturer-recommended installation practices are important considerations when planning this type of exterior improvement.",
          ],
        },
        {
          heading: "General Siding",
          body: [
            "Every building has different exterior requirements, making siding selection an important part of property improvement. Material condition, architectural style, and exposure to the elements can influence the right approach. Joyner Construction LLC provides general siding solutions for residential and commercial properties in Ferndale, WA. Whether you are refreshing an older exterior, correcting visible damage, or planning a new project, we help you consider practical options for your building.",
          ],
        },
        {
          heading: "Local Siding Installation Company",
          body: [
            "A successful siding project begins with a clear understanding of the property and the improvements you want to make. Joyner Construction LLC works with homeowners and commercial property owners in Ferndale, WA, on exterior siding projects. Whether your plans involve changing your home's appearance or updating a business property, material selection and installation details deserve attention. Discussing your priorities early helps establish a practical direction for your siding project.",
          ],
        },
        {
          heading: "Siding Repair and Installation Services",
          body: [
            "Exterior siding can develop problems such as separated joints, damaged corners, cracked panels, and sections that no longer sit securely. These conditions can affect your building's appearance and exterior protection. Joyner Construction LLC provides siding repair and installation services in Ferndale, WA, for different property types. Depending on the extent of the damage, your project may involve targeted repairs, partial replacement, or a complete siding installation.",
          ],
        },
        {
          heading: "Licensed and Insured Siding Contractors",
          body: [
            "Before hiring a siding contractor, property owners should review credentials, insurance documentation, and relevant experience. These checks help clarify who will handle the work and what protections apply during the project. Joyner Construction LLC encourages informed decisions when planning siding improvements in Ferndale, WA. Clear estimates, defined project responsibilities, and consistent communication are also important considerations when selecting a contractor for residential or commercial exterior work.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Siding Repairs, Replacement, and Installation",
      description:
        "Learn about siding repairs, replacement options, installation processes, and contractor selection.",
      items: [
        {
          question: "What Causes Residential Siding to Become Damaged?",
          answer:
            "Strong winds, moisture exposure, impact, aging materials, and improper installation can contribute to siding damage. Regular exterior inspections help identify problems before deterioration spreads.",
        },
        {
          question: "Should I Repair or Replace My Existing Siding?",
          answer:
            "The decision depends on the extent of damage, material condition, and repair history. Localized problems may need repairs, while widespread deterioration can justify replacement.",
        },
        {
          question: "Which Siding Material Is Suitable for My Property?",
          answer:
            "Vinyl and fiber cement are common options, each offering different characteristics. Consider your building's design, maintenance preferences, budget, and installation requirements before selecting materials.",
        },
        {
          question: "Can New Siding Change My Property's Appearance?",
          answer:
            "Absolutely. New siding can transform an exterior through updated colors, textures, and profiles. Choosing a style that complements your architecture creates a more coordinated appearance.",
        },
        {
          question: "Is Siding Installation Possible for Commercial Buildings?",
          answer:
            "Yes, commercial properties can receive new siding or exterior replacements. Material selection and installation planning should account for building design, intended use, and applicable requirements.",
        },
        {
          question: "How Can I Prepare My Property for Siding Installation?",
          answer:
            "Move outdoor furniture, clear access around exterior walls, and protect nearby landscaping. Your contractor can explain additional preparation steps based on the project's scope.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning siding repairs or replacement in Ferndale? Contact Joyner Construction LLC to discuss your project and request an estimate.",
    },
  };
}
