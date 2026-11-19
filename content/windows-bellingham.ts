import type { LandingPageContent } from "@/content/landing";

export function isBellinghamWindows(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "windows" && areaSlug === "bellingham-wa";
}

export const bellinghamWindowsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Window Repair, Installation & Replacement Services Contractor in Bellingham, WA",
  supporting:
    "Reliable window solutions help protect your property, improve comfort, and refresh its appearance. Homeowners and businesses in Bellingham, WA, can depend on skilled professionals for window repairs, installations, replacements, and practical maintenance tailored to each building.",
};

export const bellinghamWindowsSeo = {
  title: "Window Installation Services in Bellingham, WA",
  description:
    "Joyner Construction LLC provides residential and commercial window repair, installation, and replacement services in Bellingham, WA.",
};

/** Swap the shared template copy for the Bellingham windows page. Images stay in place. */
export function applyBellinghamWindowsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, upgrade] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Complete Commercial or Residential Building Window Replacement Services in Bellingham, WA",
      paragraphs: [
        "Choosing the right windows can improve comfort, appearance, and energy performance throughout your property. Joyner Construction LLC provides window replacement services in Bellingham, WA, for homeowners and commercial property owners seeking dependable results.",
        "Whether you need residential window replacement, a complete house window replacement, or an experienced old window replacement company, the team can assess your existing windows and recommend suitable options. Support is also available for window repair services, residential window repair, home window repair, and broken window repair in Bellingham, WA. Property owners can also discuss professional vinyl window installation, vinyl window repair, and vinyl window replacement with a trusted, affordable contractor focused on careful workmanship and a smooth project experience.",
      ],
      visualCaption: "Tap a node to explore each stage of window work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Ask about window options, project timing, repairs, and installation requirements.",
          scope:
            "Project scope considers window quantity, materials, access, condition, and complexity.",
          layout:
            "A clear project plan organizes measurements, product choices, scheduling, and installation details.",
          craft:
            "Careful workmanship delivers precise fitting, clean finishes, durable materials, and dependable results.",
          structure:
            "Every building receives recommendations based on its design, condition, and requirements.",
          handoff:
            "Final inspections, project explanations, and cleanup help complete each window installation.",
        },
      },
    },
    services: {
      title: "Window Installation, Replacement, and Upgrades",
      items: [
        {
          ...install,
          label: "Install",
          title: "Window Installation",
          description:
            "Professional window installation creates a secure fit and attractive finish. Accurate measurements, suitable materials, and careful sealing help residential and commercial windows operate properly while supporting indoor comfort.",
          imageAlt: "Window installation in Bellingham, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Window Replacement",
          description:
            "Replacing outdated or damaged windows improves appearance and addresses operating problems. Professional assessments help property owners select suitable replacement units that fit existing openings and building requirements.",
          imageAlt: "Window replacement in Bellingham, WA",
        },
        {
          ...upgrade,
          label: "Upgrade",
          title: "Window Upgrades",
          description:
            "Window upgrades can improve functionality, appearance, and indoor comfort. Updated frames, modern operating styles, and energy-conscious glass options provide practical improvements suited to each property's specific requirements.",
          imageAlt: "Window upgrades in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Window services",
      heading:
        "Are You Looking for Licensed and Insured Residential or Commercial Window Installation Contractors in Bellingham, WA?",
      body: "Planning a window project in Bellingham? Contact a licensed and insured window installation contractor to discuss your residential or commercial property's repair, installation, or replacement needs and request dependable service.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Window Services",
      title:
        "Certified, Trusted, and Reliable Building Window Repair, Installation & Replacement Services Agency in Bellingham, WA",
      intro:
        "Well-maintained windows contribute to a building's appearance, comfort, security, and everyday function. In Bellingham, WA, property owners can seek professional support for repairs, new installations, and full replacements based on each opening's condition. A reliable provider evaluates existing frames, glass, and operating components before recommending suitable work. From one damaged window to a larger property improvement, clear communication and careful workmanship help keep projects organized. Choose solutions that fit your building's needs, design, and budget while supporting lasting performance.",
      sections: [
        {
          heading:
            "Residential Window Installation Services Company in Bellingham, WA",
          body: [
            "Professional residential window installation can improve a home's appearance, comfort, and everyday function. Each project begins with accurate measurements and an assessment of the existing opening, frame, and surrounding materials. Homeowners in Bellingham can explore styles and materials that complement their property's architecture while supporting smooth operation and a secure fit. Careful installation also helps address gaps that may contribute to drafts or moisture concerns. The finished windows should suit the home's layout, practical needs, and preferred appearance, with details reviewed before work begins.",
          ],
        },
        {
          heading: "Complete Window Replacement Services in Bellingham, WA",
          body: [
            "Complete window replacement can address worn, damaged, or outdated units across a home or commercial building. The process involves reviewing each opening, checking frame conditions, and selecting windows that suit the property's design and functional requirements. For Bellingham property owners, a coordinated project can create a consistent appearance while resolving recurring issues with operation, drafts, or deteriorating components. Careful removal and fitting matter because new windows must align properly with the existing structure. Discuss available options before choosing a replacement plan for your property.",
          ],
        },
        {
          heading:
            "Aluminum Window Installation and Repair Specialists in Bellingham, WA",
          body: [
            "Aluminum windows offer a durable frame option for properties that need a clean, practical appearance. Installation and repair should account for frame condition, hardware function, seals, and fit within each opening. In Bellingham, homeowners and commercial property managers can assess whether an aluminum window needs adjustment, component repair, or full replacement. Properly fitted units support reliable operation and help maintain the building envelope. A project assessment can identify the most suitable approach based on the window's age, condition, and performance.",
          ],
        },
        {
          heading:
            "Broken Glass Window Repair and Replacement Contractors in Bellingham, WA",
          body: [
            "Broken glass can create safety concerns and leave a building exposed to weather and unwanted entry. Prompt assessment helps determine whether glass can be replaced within the existing frame or whether the full window unit needs attention. For homes and businesses in Bellingham, professionals can review the damage, frame condition, and glass requirements before recommending a solution. Keep people away from damaged areas until they can be addressed safely. Replacement glass should suit the window's design and specifications for a secure, appropriate fit.",
          ],
        },
        {
          heading: "Sliding Window Repair",
          body: [
            "Sliding windows should open and close smoothly without sticking, rattling, or leaving noticeable gaps. When operation becomes difficult, the cause may involve worn rollers, damaged tracks, misalignment, or deteriorated seals. An inspection can identify which components need adjustment or replacement. Bellingham property owners can arrange sliding window repair to restore practical operation and address visible wear. The right repair depends on the window's design, age, and overall condition, helping avoid unnecessary replacement when a suitable fix is available and cost-effective.",
          ],
        },
        {
          heading: "Window Frame Replacement",
          body: [
            "A damaged or deteriorating window frame can affect stability, operation, and the fit of the entire unit. Signs such as soft material, visible cracking, warping, or moisture damage deserve inspection. Window frame replacement may be appropriate when repairs cannot restore reliable support. For properties in Bellingham, the replacement frame should match the opening and work with the selected window system. A professional assessment helps establish the extent of the damage and identify practical next steps before installation begins.",
          ],
        },
        {
          heading: "Energy-Efficient Window Installation",
          body: [
            "Energy-efficient window installation can help reduce unwanted heat transfer and improve indoor comfort when products suit the building. Glass type, frame material, window orientation, and proper fitting all influence performance. Bellingham homeowners and commercial property owners can compare options based on their property's needs and existing conditions. A well-planned installation also addresses sealing around the opening, since gaps can undermine upgraded windows. Choose features that make sense for the project, building design, and budget, with professional guidance where needed.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Window Services in Bellingham, WA",
      description:
        "Find clear answers about window repairs, installations, replacements, materials, project planning, and service options for Bellingham homes and commercial properties.",
      items: [
        {
          question: "What window services are available in Bellingham, WA?",
          answer:
            "Joyner Construction LLC offers window repair, installation, and replacement support for residential and commercial properties. Contact the company to discuss your building's specific window needs.",
        },
        {
          question: "When should I consider replacing my windows?",
          answer:
            "Window replacement can address aging, damaged, or inefficient units. An assessment helps determine suitable products, frame requirements, and the scope of work for your property.",
        },
        {
          question: "Does Joyner Construction LLC provide vinyl window services?",
          answer:
            "Vinyl windows may be installed, repaired, or replaced depending on their condition and project needs. Ask about available options for your Bellingham property.",
        },
        {
          question: "Can broken window glass be repaired or replaced?",
          answer:
            "A damaged window should be assessed promptly. Keep people clear of broken glass and contact a qualified professional to discuss safe repair or replacement options.",
        },
        {
          question: "Can sliding windows be repaired instead of replaced?",
          answer:
            "Sliding window problems may involve tracks, rollers, alignment, or seals. An inspection can identify the cause and determine whether repair is practical.",
        },
        {
          question:
            "How long does a window installation or replacement project take?",
          answer:
            "Project timing depends on window quantity, product availability, site conditions, and work complexity. Request an estimate to discuss the expected schedule for your project.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Request an estimate from Joyner Construction LLC to discuss your Bellingham window repair, installation, or replacement project and explore suitable options for your property.",
    },
  };
}
