import type { LandingPageContent } from "@/content/landing";

export function isLyndenWindows(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "windows" && areaSlug === "lynden-wa";
}

export const lyndenWindowsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Window Repair, Installation & Replacement Services Contractor in Lynden, WA",
  supporting:
    "Well-fitted windows bring natural light into a building while supporting privacy, weather protection, and everyday comfort. Homeowners and businesses in Lynden, WA, can explore dependable window installation, replacement, repair, and maintenance services for properties of different sizes and styles.",
};

export const lyndenWindowsSeo = {
  title: "Window Installation Services in Lynden, WA",
  description:
    "Joyner Construction LLC provides residential and commercial window repair, installation, and replacement services in Lynden, WA.",
};

/** Swap the shared template copy for the Lynden windows page. Images stay in place. */
export function applyLyndenWindowsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, upgrade] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Window Replacement Services in Lynden, WA",
      paragraphs: [
        "Windows that no longer close properly or complement your property's appearance may need professional attention. Joyner Construction LLC helps Lynden property owners plan window replacement services for residential and commercial buildings. From residential window replacement and house window replacement to finding an experienced old window replacement company, selecting the right solution starts with understanding the existing window system.",
        "Available services also include window repair services, residential window repair, home window repair, and broken window repair in Lynden, WA. Property owners can discuss professional vinyl window installation, vinyl window repair, and vinyl window replacement options that complement their building's style and practical requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of window work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Get guidance about window styles, material choices, repairs, and scheduling.",
          scope:
            "A defined scope outlines measurements, selected products, preparation, and installation.",
          layout:
            "Window placement is planned around room proportions, exterior design, and accessibility.",
          craft:
            "Experienced workmanship supports accurate fitting, balanced frames, and polished finishes.",
          structure:
            "Existing openings receive attention to identify frame damage and installation concerns.",
          handoff:
            "Project completion includes a walkthrough, workmanship review, and basic cleanup.",
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
            "The right window design can complement traditional or contemporary architecture. Professional installation considers the building's exterior, interior layout, opening measurements, frame compatibility, and finishing details for a cohesive result.",
          imageAlt: "Window installation in Lynden, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Window Replacement",
          description:
            "Replacing worn windows helps restore appearance and address recurring performance concerns. Property owners can select updated designs, frame materials, and glass configurations that better match their building's requirements.",
          imageAlt: "Window replacement in Lynden, WA",
        },
        {
          ...upgrade,
          label: "Upgrade",
          title: "Window Upgrades",
          description:
            "Modern window upgrades offer opportunities to refresh older spaces without changing the property's overall character. Updated hardware, frame finishes, and glass options can improve usability and appearance.",
          imageAlt: "Window upgrades in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Window services",
      heading:
        "Are You Looking for Licensed and Insured Residential or Commercial Window Installation Contractors in Lynden, WA?",
      body: "Give your property a practical window improvement plan. Contact a qualified installation contractor in Lynden to review your building, compare suitable products, and discuss repair or replacement estimates.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Window Services",
      title:
        "Certified, Trusted, and Reliable Building Window Repair, Installation & Replacement Services Agency in Lynden, WA",
      intro:
        "Windows should complement a building's design while performing reliably through everyday use and changing weather. In Lynden, WA, residential and commercial property owners can address loose frames, broken glass, outdated units, and installation concerns with professional support. The right service depends on the opening, material, and condition of each window. A detailed evaluation helps establish whether repair or replacement makes more sense. From updating a single room to improving an entire building, careful product selection and accurate installation contribute to a clean, functional finish.",
      sections: [
        {
          heading:
            "Residential Window Installation Services Company in Lynden, WA",
          body: [
            "Residential window installation should reflect the home's architectural style, room arrangement, and practical needs. Property owners in Lynden may prefer traditional-looking frames, modern designs, or window configurations that bring additional daylight into specific rooms. Before installation, each opening should be measured and checked for compatibility with the selected unit. Proper fitting, sealing, and finishing help the new window operate as intended. Whether the project involves a kitchen, bedroom, living area, or an entire home, selecting appropriate materials and installation details helps maintain a coordinated appearance throughout the property.",
          ],
        },
        {
          heading: "Complete Window Replacement Services in Lynden, WA",
          body: [
            "A coordinated window replacement project can refresh several areas of a property while addressing aging components and recurring maintenance concerns. The process begins by examining existing frames, glass, seals, and opening dimensions. Lynden property owners can compare replacement styles that complement their building's exterior and interior finishes. Commercial buildings may require different considerations than residential properties, particularly regarding window quantities, access, and project scheduling. Professional removal and fitting help ensure the replacement units align with their openings. A well-defined plan also makes it easier to organize product selection and installation.",
          ],
        },
        {
          heading:
            "Aluminum Window Installation and Repair Specialists in Lynden, WA",
          body: [
            "Aluminum windows can provide a neat, modern appearance across residential and commercial properties. Their frames and operating components still require attention when wear, alignment problems, or seal damage develops. Property owners in Lynden can arrange aluminum window repair to investigate sticking panels, loose hardware, or other visible concerns. When installing new units, measurements and frame specifications should be reviewed carefully to ensure compatibility with the building. The appropriate approach may involve replacing individual components or upgrading the entire window. An inspection helps determine which option best fits the property's requirements.",
          ],
        },
        {
          heading:
            "Broken Glass Window Repair and Replacement Contractors in Lynden, WA",
          body: [
            "Damaged glass can interrupt normal building use and create an immediate safety concern. Whether a window has a small crack or extensive breakage, the affected area should be kept clear until it can be assessed. A professional can examine the glass type, frame condition, and dimensions before recommending a replacement. For homes and businesses in Lynden, the work may involve a glass-only replacement or a complete window installation. Choosing a suitable replacement helps maintain the unit's appearance and function while addressing the damage safely and appropriately.",
          ],
        },
        {
          heading: "Sliding Window Repair",
          body: [
            "A sliding window should move smoothly along its track and remain secure when closed. If the panel becomes difficult to operate, the problem may involve roller wear, track damage, dirt, or a faulty latch. Rather than forcing the window, property owners in Lynden can arrange an inspection to identify the cause. Depending on the findings, repairs may involve cleaning, realignment, hardware adjustment, or component replacement. Addressing the issue can restore easier operation and help prevent additional stress on the window assembly. Replacement may be considered when damage is extensive.",
          ],
        },
        {
          heading: "Window Frame Replacement",
          body: [
            "Window frames influence the stability, alignment, and overall appearance of an installed unit. Deterioration, moisture exposure, cracking, or deformation can make a frame unsuitable for continued use. In these situations, replacing the affected frame may be more practical than repeatedly repairing damaged areas. Lynden property owners should consider the window's dimensions, surrounding wall materials, and compatibility with the replacement unit. A proper evaluation helps establish the extent of the work before installation begins. The goal is a secure frame that supports reliable window operation and a finished appearance.",
          ],
        },
        {
          heading: "Energy-Efficient Window Installation",
          body: [
            "Selecting energy-conscious windows can be a useful improvement when older units allow noticeable drafts or unwanted heat transfer. Product choices may include insulated glass, suitable frame designs, and features selected for the building's orientation and use. Lynden homeowners and commercial property owners can compare available specifications before making a decision. Installation quality remains essential because poorly sealed openings can undermine product performance. A professional review of existing windows helps identify where improvements may be worthwhile. The final selection should consider comfort, appearance, maintenance needs, and the project's overall budget.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Window Services in Lynden, WA",
      description:
        "Review helpful answers about window selection, replacement decisions, installation details, and repair services for Lynden property owners.",
      items: [
        {
          question: "Does window replacement work for traditional-style homes?",
          answer:
            "Yes. Replacement windows are available in different frame styles and finishes. Product selection should consider the home's architecture, opening dimensions, and preferred exterior appearance.",
        },
        {
          question: "What are common signs of damaged window frames?",
          answer:
            "Visible cracking, warping, soft materials, and moisture-related deterioration can indicate frame problems. An inspection helps determine whether repairs are sufficient or replacement is necessary.",
        },
        {
          question:
            "Can commercial buildings receive window installation services?",
          answer:
            "Commercial properties can require new installations, replacement units, or repairs. Project planning should account for building access, window quantities, product specifications, and operational requirements.",
        },
        {
          question: "Are vinyl windows available for replacement projects?",
          answer:
            "Vinyl windows are an option for many properties. Their suitability depends on measurements, design preferences, existing openings, and the performance features selected for the project.",
        },
        {
          question: "What causes windows to develop drafts?",
          answer:
            "Worn weatherstripping, damaged seals, poor installation, and frame gaps can contribute to drafts. An assessment helps locate the source and determine suitable corrective work.",
        },
        {
          question: "Should I repair or replace an aging window?",
          answer:
            "The decision depends on the frame, glass, hardware, and overall condition. A professional evaluation can compare repair costs and replacement requirements before work begins.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Discuss your Lynden property's window needs with Joyner Construction LLC. Request an estimate to review available materials, repair options, and installation plans.",
    },
  };
}
