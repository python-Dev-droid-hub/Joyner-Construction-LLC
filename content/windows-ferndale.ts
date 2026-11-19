import type { LandingPageContent } from "@/content/landing";

export function isFerndaleWindows(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "windows" && areaSlug === "ferndale-wa";
}

export const ferndaleWindowsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Window Repair, Installation & Replacement Services Contractor in Ferndale, WA",
  supporting:
    "Windows play an important role in protecting buildings from changing weather while maintaining natural light and indoor comfort. Property owners in Ferndale, WA, can access professional window repair, installation, replacement, and maintenance solutions for residential and commercial spaces.",
};

export const ferndaleWindowsSeo = {
  title:
    "Upgrade Your Home with Expert Window Installation & Replacement in Ferndale, WA | Joyner Construction LLC",
  description:
    "Hire Joyner Construction LLC for professional window installation, replacement, repair, and home window upgrades in Ferndale, WA. Enhance your home's appearance, comfort, and energy efficiency. Contact us today to discuss your project and request a free estimate!",
};

/** Swap the shared template copy for the Ferndale windows page. Images stay in place. */
export function applyFerndaleWindowsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, upgrade] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Window Replacement Services in Ferndale, WA",
      paragraphs: [
        "Drafty rooms, damaged glass, and aging frames can affect your property's comfort and appearance. Joyner Construction LLC provides window replacement services in Ferndale, WA, for residential and commercial buildings. Whether you need residential window replacement, a complete house window replacement, or help selecting an old window replacement company, the project can begin with an assessment of your existing units.",
        "The team also addresses window repair services, residential window repair, home window repair, and broken window repair in Ferndale, WA. Property owners can explore professional vinyl window installation, vinyl window repair, and vinyl window replacement options suited to their building's design and requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of window work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss damaged windows, replacement choices, installation schedules, and service requirements.",
          scope:
            "Each estimate considers window dimensions, materials, labor, access, and complexity.",
          layout:
            "Thoughtful layouts account for room dimensions, window placement, access, and functionality.",
          craft:
            "Precise installation techniques help achieve clean finishes and dependable window operation.",
          structure:
            "Frame assessments identify structural concerns before replacement or installation work begins.",
          handoff:
            "Completed work includes a final review, cleanup, and project communication.",
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
            "New windows can transform a property's appearance while improving everyday functionality. Professional installation focuses on correct sizing, secure placement, suitable materials, and proper sealing around each opening for dependable results.",
          imageAlt: "Window installation in Ferndale, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Window Replacement",
          description:
            "Older windows may develop damaged seals, difficult operation, or deteriorating frames. Replacing affected units gives property owners an opportunity to update their building's appearance and select more suitable window designs.",
          imageAlt: "Window replacement in Ferndale, WA",
        },
        {
          ...upgrade,
          label: "Upgrade",
          title: "Window Upgrades",
          description:
            "Upgrading existing windows can address outdated designs and improve usability. Consider modern frame styles, improved glass options, and updated hardware to create a more comfortable and functional interior environment.",
          imageAlt: "Window upgrades in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Window services",
      heading:
        "Are You Looking for Licensed and Insured Residential or Commercial Window Installation Contractors in Ferndale, WA?",
      body: "Whether updating a family home or improving a commercial property, get professional guidance for your window project. Contact a qualified contractor to discuss installation, replacement, repair options, and project estimates.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Window Services",
      title:
        "Certified, Trusted, and Reliable Building Window Repair, Installation & Replacement Services Agency in Ferndale, WA",
      intro:
        "A window problem can affect more than the appearance of a building. Loose frames, cracked glass, worn seals, and difficult operation can create ongoing maintenance concerns. Property owners in Ferndale, WA, can explore professional solutions for individual repairs or larger window improvement projects. Every opening deserves attention to its dimensions, surrounding materials, and intended function. From selecting replacement units to correcting installation issues, a carefully planned approach helps maintain a consistent appearance and dependable performance throughout residential and commercial properties.",
      sections: [
        {
          heading:
            "Residential Window Installation Services Company in Ferndale, WA",
          body: [
            "A home's windows influence its natural lighting, ventilation, exterior appearance, and indoor comfort. Professional residential window installation begins with reviewing the existing openings and determining which window styles suit the property's layout. Homeowners in Ferndale can consider different frame materials, operating styles, and glass configurations before selecting replacement units. Accurate measurements and careful fitting are important for preventing alignment problems and unwanted gaps. Whether updating one room or several areas of the house, a properly organized installation helps create a consistent finish while supporting the windows' intended operation.",
          ],
        },
        {
          heading: "Complete Window Replacement Services in Ferndale, WA",
          body: [
            "When several windows show signs of aging, replacing them together may provide a more consistent result than handling individual problems over time. Complete window replacement involves reviewing the condition of existing units, identifying frame concerns, and selecting appropriate products for the building. Ferndale homeowners and commercial property managers can discuss replacement options based on opening dimensions, appearance, and functional requirements. Careful removal and installation help protect surrounding materials and support proper alignment. A project assessment also provides an opportunity to identify which windows need full replacement and which may remain serviceable.",
          ],
        },
        {
          heading:
            "Aluminum Window Installation and Repair Specialists in Ferndale, WA",
          body: [
            "Aluminum window systems are valued for their streamlined appearance and practical frame design. However, loose hardware, damaged seals, alignment issues, and worn components can affect their operation. Property owners in Ferndale can arrange an assessment to determine whether an aluminum window needs maintenance, component repair, or complete replacement. New installations should account for opening measurements, frame specifications, and the surrounding building materials. Choosing the right solution helps maintain the window's intended function while preserving the property's exterior appearance. The recommended work should reflect the condition of the existing system.",
          ],
        },
        {
          heading:
            "Broken Glass Window Repair and Replacement Contractors in Ferndale, WA",
          body: [
            "A cracked or shattered window requires prompt attention because damaged glass can expose occupants to injury and leave interior spaces vulnerable. Avoid touching broken pieces or attempting an improvised repair. A professional can inspect the affected area, check whether the frame remains usable, and determine the appropriate glass replacement method. For Ferndale homes and commercial buildings, the solution may involve replacing the glass alone or installing a complete window unit. Matching the replacement to the existing window specifications helps maintain proper fit, appearance, and everyday functionality.",
          ],
        },
        {
          heading: "Sliding Window Repair",
          body: [
            "Sliding windows depend on properly aligned tracks, functional rollers, and secure locking components. Dirt buildup, worn hardware, or damaged tracks can make a window difficult to move or prevent it from closing correctly. An inspection helps identify whether cleaning, adjustment, or component replacement is necessary. Ferndale property owners can address these issues before they cause additional wear. Restoring smooth movement can make everyday ventilation easier and improve the window's usability. If the frame or surrounding components are severely damaged, a professional can discuss more extensive repair or replacement options.",
          ],
        },
        {
          heading: "Window Frame Replacement",
          body: [
            "The frame provides the support needed to keep a window properly positioned and operating. Cracks, warping, moisture damage, and deteriorating materials may compromise its condition. When localized repairs are no longer practical, window frame replacement can provide a more dependable solution. Property owners in Ferndale should have the opening evaluated before selecting a replacement frame. Measurements, material compatibility, and the condition of surrounding surfaces all influence the work. Proper preparation and fitting help create a stable installation that accommodates the selected window unit and complements the building.",
          ],
        },
        {
          heading: "Energy-Efficient Window Installation",
          body: [
            "Improving window performance starts with selecting products that suit the property's climate, orientation, and construction. Energy-efficient window installation may involve insulated glass, suitable frame materials, and appropriate sealing methods. Ferndale homeowners can compare window features based on comfort goals, existing drafts, and the condition of current units. Professional fitting matters because gaps around the frame can reduce the benefits of upgraded glass. A careful assessment helps identify practical improvements without assuming every building requires the same product. The final selection should balance performance, appearance, and project budget.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Window Services in Ferndale, WA",
      description:
        "Explore common questions about residential and commercial window installation, glass repairs, replacement options, and project planning in Ferndale.",
      items: [
        {
          question: "What types of window services are available in Ferndale, WA?",
          answer:
            "Property owners can discuss residential and commercial window installation, replacement, glass repairs, frame work, and sliding window repairs. Service recommendations depend on the existing window's condition.",
        },
        {
          question: "How can I tell whether my windows need replacement?",
          answer:
            "Frequent drafts, damaged frames, persistent moisture between glass panes, and difficult operation may indicate replacement needs. A professional inspection helps identify suitable solutions.",
        },
        {
          question: "Can vinyl windows be installed in older homes?",
          answer:
            "Vinyl windows may suit many older properties when measurements, opening conditions, and design requirements are considered. Discuss available styles and installation requirements before choosing replacement units.",
        },
        {
          question: "Should I replace the entire window after glass breaks?",
          answer:
            "Not every broken window requires complete replacement. If the frame remains sound, replacing the glass may be possible. A professional assessment determines the appropriate repair.",
        },
        {
          question: "Why is my sliding window difficult to open?",
          answer:
            "Worn rollers, obstructed tracks, misalignment, or damaged hardware can interfere with sliding movement. An inspection helps determine which components need adjustment or replacement.",
        },
        {
          question: "Can new windows improve indoor comfort?",
          answer:
            "Properly selected and installed windows can help reduce unwanted drafts and heat transfer. Performance depends on glass specifications, frame quality, installation, and existing building conditions.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning window improvements in Ferndale? Request an estimate from Joyner Construction LLC to discuss your property's repair, replacement, or installation requirements.",
    },
  };
}
