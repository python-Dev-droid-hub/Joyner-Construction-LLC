import type { LandingPageContent } from "@/content/landing";

export function isBellinghamFences(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "fences" && areaSlug === "bellingham-wa";
}

export const bellinghamFencesHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Fence Repair, Installation & Replacement Services Contractor Bellingham, WA",
  supporting:
    "Protect your property and enhance its appearance with professional fencing services from Joyner Construction LLC. Serving Bellingham, WA, we provide residential and commercial fence installation, repair, and replacement solutions designed to improve privacy, security, and curb appeal while meeting your property's specific needs.",
};

export const bellinghamFencesSeo = {
  title:
    "Professional Fence Installation & Repair Services in Bellingham, WA | Joyner Construction LLC",
  description:
    "Looking for reliable fence installation services in Bellingham, WA? Joyner Construction LLC provides professional fence installation, replacement, repair, and custom fencing solutions for residential properties. Improve your property's privacy, security, and appearance with quality craftsmanship and dependable service. Contact us today!",
};

/** Swap the shared template copy for the Bellingham fences page. Images stay in place. */
export function applyBellinghamFencesContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Damaged Fence Panel Repair and Replacement Contractor or Company Bellingham, WA",
      paragraphs: [
        "A damaged or deteriorating fence can compromise property security, privacy, and appearance. Joyner Construction LLC provides comprehensive fence installation services and residential fence repair in Bellingham, WA, helping property owners maintain functional outdoor boundaries. Our contractors handle damaged fence repair, wooden fence replacement, and new fence installation for homes, offices, and commercial properties.",
        "Whether your existing fence has broken panels, unstable posts, or weathered materials, we evaluate practical repair and replacement options. Our wood fence installation services include customized privacy fencing designed to complement surrounding landscapes. From selecting suitable materials to completing detailed construction work, we focus on dependable craftsmanship, durable fencing solutions, and improvements that support your property's everyday requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of fencing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about damaged sections, installation preferences, and property concerns.",
          scope:
            "We outline proposed fencing work, material requirements, and project expectations.",
          layout:
            "We plan fence placement around boundaries, access points, and landscaping.",
          craft:
            "Our installation methods emphasize neat finishes and careful material handling.",
          structure:
            "Properly aligned posts and secure connections support dependable fence performance.",
          handoff:
            "We review completed fencing and explain relevant upkeep and maintenance.",
        },
      },
    },
    services: {
      title: "Fence Installation, Replacement, and Repair",
      items: [
        {
          ...install,
          label: "Install",
          title: "Fence Installation",
          description:
            "Establish attractive property boundaries with customized fence installation services. Our contractors install wood, vinyl, and metal fencing options designed to improve privacy, organize outdoor spaces, and complement existing architectural features.",
          imageAlt: "Fence installation in Bellingham, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Fence Replacement",
          description:
            "Replace aging, unstable, or severely damaged fencing with practical construction solutions. We remove deteriorated sections, evaluate replacement requirements, and install updated fencing materials suited to your property's layout and preferences.",
          imageAlt: "Fence replacement in Bellingham, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Fence Repair",
          description:
            "Restore the function and appearance of existing fences through targeted repair services. Our team addresses damaged panels, loose posts, deteriorating boards, and gate problems to improve everyday fence reliability and security.",
          imageAlt: "Fence repair in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Fencing services",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Fencing Installation Needs in Bellingham, WA?",
      body: "Need dependable fencing for your home or commercial property? Contact Joyner Construction LLC in Bellingham, WA, to discuss fence installation, damaged panel repairs, or complete replacement solutions for your property.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Fencing Services",
      title:
        "Trusted Commercial or Residential Fence Installation Specialists and Contractors Bellingham, WA",
      intro:
        "A properly constructed fence creates clear boundaries while contributing to the safety and appearance of your outdoor space. Joyner Construction LLC offers residential and commercial fencing services throughout Bellingham, WA, with solutions tailored to different property conditions. Our contractors consider fence height, material durability, access requirements, and design preferences before construction. From new installations to structural repairs, we emphasize practical planning, consistent workmanship, and fencing improvements suited to long-term use.",
      sections: [
        {
          heading: "Reliable Fence Repair Contractors Company Bellingham, WA",
          body: [
            "Exposure to moisture, shifting soil, and everyday wear can gradually weaken fencing components. Joyner Construction LLC provides fence repair services in Bellingham, WA, addressing problems that affect structural stability and appearance. Our contractors inspect damaged boards, leaning posts, loose connections, and deteriorated sections to identify appropriate repairs. Whether your property has wooden privacy fencing or another common fence style, we focus on restoring useful performance while preserving serviceable materials whenever practical.",
          ],
        },
        {
          heading:
            "Affordable Custom Residential Fence Installation Bellingham, WA",
          body: [
            "Every residential property has different privacy needs, outdoor dimensions, and design preferences. Joyner Construction LLC offers custom residential fence installation in Bellingham, WA, with options suited to individual budgets and property layouts. We help homeowners consider fence styles, material choices, gate locations, and practical maintenance requirements. Our construction team installs fencing intended to define yards, improve outdoor organization, and create comfortable spaces for families while complementing the home's existing exterior features.",
          ],
        },
        {
          heading: "Local Vinyl Fence Installation and Replacement Specialists",
          body: [
            "Vinyl fencing offers a clean appearance and generally requires less routine maintenance than traditional wood fencing. Joyner Construction LLC provides vinyl fence installation and replacement services for Bellingham residential and commercial properties. We discuss panel styles, fence heights, and suitable configurations before beginning construction. Our contractors focus on accurate placement, secure post installation, and properly connected sections. The finished fence provides an attractive boundary designed to accommodate everyday outdoor use and weather exposure.",
          ],
        },
        {
          heading: "Metal Fence Installation and Repair Contractors",
          body: [
            "Metal fencing can provide a strong, visually appealing boundary for residential yards, office properties, and commercial outdoor areas. Joyner Construction LLC handles metal fence installation and repair in Bellingham, WA, with attention to structural connections and practical access requirements. Our team evaluates existing damage, discusses suitable fencing styles, and completes necessary construction work. We focus on secure installations and functional repairs that support property protection without overlooking exterior appearance or usability.",
          ],
        },
        {
          heading: "Fence Gate Installation and Repair Contractors",
          body: [
            "A poorly functioning gate can make an otherwise sturdy fence inconvenient to use. Joyner Construction LLC offers fence gate installation and repair services in Bellingham, WA, for residential and commercial properties. Our contractors address alignment problems, damaged hinges, loose hardware, and deteriorated gate components. We also install new gates designed around available openings and access needs. Our approach emphasizes smooth operation, dependable connections, and convenient entry to enclosed outdoor spaces.",
          ],
        },
        {
          heading: "Residential Fence Repair Services Company",
          body: [
            "Not every damaged residential fence requires complete replacement. Joyner Construction LLC helps Bellingham homeowners identify practical repair options for fencing affected by wear, accidental impact, or aging materials. Our residential fence repair services address broken pickets, unstable sections, weakened connections, and other common problems. We assess the condition of surrounding components before recommending work. Our goal is to restore useful fence performance while maintaining a consistent appearance across the property.",
          ],
        },
        {
          heading: "Privacy Fence Installation and Construction Services",
          body: [
            "A thoughtfully positioned privacy fence can make patios, backyards, and outdoor gathering areas feel more comfortable. Joyner Construction LLC provides privacy fence installation services in Bellingham, WA, with designs suited to different residential layouts. We consider fence height, panel spacing, material selection, and property access when planning construction. Our contractors build privacy barriers that reduce unwanted visibility, define outdoor living areas, and complement the surrounding home and landscape design.",
          ],
        },
        {
          heading: "Wood Fence Installation and Repair Contractors",
          body: [
            "Wood fencing brings natural texture and traditional character to residential and commercial properties. Joyner Construction LLC offers wood fence installation and repair in Bellingham, WA, including replacement boards, damaged posts, and customized wooden privacy panels. Our team considers lumber selection, structural support, and outdoor exposure during construction. We create and maintain wooden fencing designed to provide functional boundaries while complementing gardens, yards, and existing architectural details across different property styles.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Fence Installation & Repair in Bellingham, WA",
      description:
        "Find answers to common questions about fencing services in Bellingham.",
      items: [
        {
          question: "What Types of Fencing Can I Install Around My Property?",
          answer:
            "Common options include wood, vinyl, and metal fencing. Your ideal choice depends on privacy requirements, maintenance preferences, available budget, property layout, and any applicable local fencing regulations or restrictions.",
        },
        {
          question:
            "Can Damaged Fence Panels Be Repaired Instead of Replaced?",
          answer:
            "Individual panels can often be repaired when surrounding posts and structural components remain sound. Extensive deterioration, widespread damage, or unstable supports may make replacing affected fence sections more practical overall.",
        },
        {
          question:
            "How Do I Know When My Wooden Fence Needs Replacement?",
          answer:
            "Signs include widespread rot, repeated structural failures, leaning sections, and severely weakened posts. A professional inspection can help determine whether repairs remain practical or a complete replacement is more appropriate.",
        },
        {
          question: "Does Vinyl Fencing Require Regular Painting or Staining?",
          answer:
            "Vinyl fencing generally does not require painting or staining like traditional wood. Occasional cleaning and inspections help maintain its appearance and identify damaged components that may require repair or replacement later.",
        },
        {
          question: "Can You Install Fencing Around Commercial Office Buildings?",
          answer:
            "Commercial fencing can help define property boundaries, manage access, and organize outdoor areas. Suitable designs depend on site conditions, business needs, accessibility considerations, and applicable building or development requirements for installation.",
        },
        {
          question:
            "What Should I Prepare Before Requesting a Fence Installation Estimate?",
          answer:
            "Identify the proposed fence location, approximate dimensions, preferred materials, and desired gate locations. Sharing photographs of existing fencing or damaged areas can also help clarify the scope of your project.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC for your Bellingham fencing project and request a customized estimate today.",
    },
  };
}
