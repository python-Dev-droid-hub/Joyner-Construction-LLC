import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonWindows(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "windows" && areaSlug === "burlington-wa";
}

export const burlingtonWindowsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Window Repair, Installation & Replacement Services Contractor in Burlington, WA",
  supporting:
    "Damaged, outdated, or poorly fitted windows can affect a property's appearance and daily functionality. Residential and commercial property owners in Burlington, WA, can find professional solutions for window repairs, new installations, complete replacements, and ongoing window maintenance.",
};

export const burlingtonWindowsSeo = {
  title: "Window Installation Services in Burlington, WA",
  description:
    "Joyner Construction LLC provides residential and commercial window repair, installation, and replacement services in Burlington, WA.",
};

/** Swap the shared template copy for the Burlington windows page. Images stay in place. */
export function applyBurlingtonWindowsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, upgrade] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Window Replacement Services in Burlington, WA",
      paragraphs: [
        "A window improvement project should address existing problems while giving your property a fresh, functional appearance. Joyner Construction LLC provides window replacement services in Burlington, WA, for homeowners, business owners, and commercial property managers.",
        "Whether you need residential window replacement, house window replacement, or assistance from an old window replacement company, the right solution begins with evaluating your current units. Additional options include window repair services, residential window repair, home window repair, and broken window repair in Burlington, WA. You can also explore professional vinyl window installation, vinyl window repair, and vinyl window replacement to find products that meet your building's design and practical needs.",
      ],
      visualCaption: "Tap a node to explore each stage of window work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your preferred window designs, repair concerns, and project expectations.",
          scope:
            "Project planning identifies materials, quantities, measurements, preparation, and installation requirements.",
          layout:
            "Window configurations are selected according to dimensions, room use, and appearance.",
          craft:
            "Detailed installation work focuses on accurate placement and quality finishing.",
          structure:
            "Frame inspections reveal damaged components and openings requiring additional preparation.",
          handoff:
            "The finished project receives a review, cleanup, and completion discussion.",
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
            "Well-installed windows contribute to a property's overall functionality and visual appeal. Professional fitting accounts for frame compatibility, opening dimensions, glass selection, secure positioning, and appropriate finishing work.",
          imageAlt: "Window installation in Burlington, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Window Replacement",
          description:
            "Window replacement provides an opportunity to remove damaged or outdated units and introduce more suitable designs. Proper planning helps coordinate measurements, material selection, removal, and installation.",
          imageAlt: "Window replacement in Burlington, WA",
        },
        {
          ...upgrade,
          label: "Upgrade",
          title: "Window Upgrades",
          description:
            "Refresh your building with updated window designs, improved operating mechanisms, and contemporary frame options. Thoughtful upgrades can make windows easier to use while complementing existing architectural details.",
          imageAlt: "Window upgrades in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Window services",
      heading:
        "Are You Looking for Licensed and Insured Residential or Commercial Window Installation Contractors in Burlington, WA?",
      body: "Planning to replace damaged windows or install new ones? Speak with a qualified contractor in Burlington about your residential or commercial project, product choices, installation requirements, and estimated costs.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Window Services",
      title:
        "Certified, Trusted, and Reliable Building Window Repair, Installation & Replacement Services Agency in Burlington, WA",
      intro:
        "A window project requires more than choosing an attractive replacement unit. Measurements, frame conditions, glass specifications, and installation methods all influence the finished result. Residential and commercial property owners in Burlington, WA, can seek professional assistance for damaged windows, aging frames, and new construction requirements. Whether the work involves a single opening or several areas, an organized approach helps establish the necessary materials and project scope. Proper installation and suitable product selection support dependable operation while giving the building a clean, updated appearance.",
      sections: [
        {
          heading:
            "Residential Window Installation Services Company in Burlington, WA",
          body: [
            "Every room has different lighting, ventilation, and privacy requirements, making window selection an important part of home improvement. Professional residential window installation helps homeowners choose suitable configurations for bedrooms, kitchens, living spaces, and other areas. In Burlington, property owners can compare window styles, frame materials, and glass features based on their existing openings and design preferences. Accurate measurements help prevent sizing and alignment issues during installation. Careful fitting and finishing complete the project, creating windows that complement the home's layout while supporting their intended everyday use.",
          ],
        },
        {
          heading: "Complete Window Replacement Services in Burlington, WA",
          body: [
            "When windows become difficult to maintain or no longer meet a property's needs, complete replacement may offer a practical improvement. The project can include removing outdated units, checking surrounding openings, and installing new products selected for the building. Burlington homeowners and commercial property managers can discuss replacement options based on window sizes, frame materials, appearance, and functional expectations. Coordinating multiple replacements also provides an opportunity to create a more uniform exterior. A detailed assessment helps establish which components require attention and how the installation should be organized.",
          ],
        },
        {
          heading:
            "Aluminum Window Installation and Repair Specialists in Burlington, WA",
          body: [
            "Aluminum window frames provide a distinct appearance and can work well in various residential and commercial settings. Over time, operating hardware, seals, tracks, and frame connections may require attention. Burlington property owners can arrange an evaluation when aluminum windows develop sticking panels, loose components, or visible deterioration. For new installations, selecting compatible frame dimensions and configurations is essential. Depending on the existing system, the recommended service may involve targeted repairs, component replacement, or installation of a new window. Careful assessment helps establish the most appropriate option.",
          ],
        },
        {
          heading:
            "Broken Glass Window Repair and Replacement Contractors in Burlington, WA",
          body: [
            "A broken window can disrupt privacy, expose interior areas, and create hazards around the damaged opening. Property owners should keep occupants away from loose glass and arrange professional assistance. The repair process begins by examining the affected pane, frame, and surrounding installation. Depending on the damage, Burlington homes and businesses may need replacement glass or an entirely new window unit. Proper measurements and compatible glass specifications help ensure the replacement fits correctly. Prompt attention also helps limit exposure to outside conditions while restoring the window's intended function.",
          ],
        },
        {
          heading: "Sliding Window Repair",
          body: [
            "Sliding windows are designed for convenient operation, but worn parts can interfere with their movement. Common problems include damaged rollers, obstructed tracks, loose handles, and panels that no longer align properly. Burlington property owners can have these components inspected to determine why a window sticks or fails to close securely. Depending on the condition, repair work may involve track cleaning, roller replacement, alignment adjustments, or new hardware. Addressing the underlying issue can restore smoother operation and help extend the useful life of an otherwise serviceable sliding window.",
          ],
        },
        {
          heading: "Window Frame Replacement",
          body: [
            "A window frame that has lost its shape or structural condition may prevent the unit from fitting and operating correctly. Common concerns include splitting, corrosion, warping, and deterioration around joints or corners. When these problems extend beyond practical repair, replacement may be the better option. Burlington property owners can arrange an assessment to review the frame dimensions, surrounding opening, and material requirements. Selecting a compatible replacement helps maintain proper alignment and supports the installed window. Professional preparation and fitting also contribute to a clean transition between the frame and building surfaces.",
          ],
        },
        {
          heading: "Energy-Efficient Window Installation",
          body: [
            "Window selection can influence how a building manages indoor temperatures and responds to outdoor conditions. Energy-efficient products may feature insulated glass, suitable frame construction, and performance ratings that help property owners compare available options. Burlington residents and commercial building managers can consider these features when upgrading outdated windows. Correct installation is equally important because gaps around the opening can allow unwanted air movement. A project assessment helps identify suitable products for the building's size, orientation, and existing construction. The aim is to balance comfort improvements, product quality, appearance, and budget.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Window Services in Burlington, WA",
      description:
        "Get straightforward information about window installation, replacement materials, damaged glass, maintenance concerns, and residential or commercial projects in Burlington.",
      items: [
        {
          question: "What should I consider before installing new windows?",
          answer:
            "Consider opening measurements, frame materials, glass specifications, operating styles, and appearance. Your property's existing construction and intended use should guide the final selection.",
        },
        {
          question:
            "Can individual windows be replaced without updating the entire building?",
          answer:
            "Yes. Individual window replacement is possible when only certain units need attention. A professional assessment helps identify affected openings and suitable replacement products.",
        },
        {
          question: "What types of window frames can be installed?",
          answer:
            "Available frame materials vary by product and project requirements. Vinyl and aluminum are common options, and selection depends on design preferences, compatibility, and maintenance considerations.",
        },
        {
          question: "How do I know if a window frame needs replacement?",
          answer:
            "Visible warping, cracking, corrosion, or deteriorated materials may indicate replacement needs. An inspection helps establish whether localized repairs or a new frame is more appropriate.",
        },
        {
          question: "Can damaged sliding window hardware be repaired?",
          answer:
            "Yes. Depending on the window's condition, rollers, tracks, handles, and other operating components may be repaired or replaced to restore smoother movement.",
        },
        {
          question: "Do new windows require professional measurements?",
          answer:
            "Accurate measurements are essential for proper window selection and installation. Professional assessment helps confirm opening dimensions, frame compatibility, and product requirements before ordering replacement units.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to improve your Burlington property? Contact Joyner Construction LLC to request an estimate for window installation, replacement, repairs, or upgrades.",
    },
  };
}
