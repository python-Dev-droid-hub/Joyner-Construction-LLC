import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonFences(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "fences" && areaSlug === "burlington-wa";
}

export const burlingtonFencesHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Fence Repair, Installation & Replacement Services Contractor Burlington, WA",
  supporting:
    "From securing business perimeters to improving backyard privacy, Joyner Construction LLC provides dependable fencing solutions in Burlington, WA. Our residential and commercial fence contractors handle new installations, damaged fence repairs, and complete replacements, helping property owners establish attractive, functional boundaries with construction tailored to their needs.",
};

export const burlingtonFencesSeo = {
  title: "Fence Installation, Repair & Replacement in Burlington, WA",
  description:
    "Joyner Construction LLC provides residential and commercial fence installation, repair, and replacement services in Burlington, WA.",
};

/** Swap the shared template copy for the Burlington fences page. Images stay in place. */
export function applyBurlingtonFencesContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Damaged Fence Panel Repair and Replacement Contractor or Company Burlington, WA",
      paragraphs: [
        "Property boundaries need to remain functional despite regular use, changing weather, and gradual material deterioration. Joyner Construction LLC provides fence installation, repair, and replacement services in Burlington, WA, for homes, commercial buildings, and office properties. Our fencing contractors address broken panels, weakened posts, damaged wooden sections, and outdated perimeter structures.",
        "We also offer residential fence installation, wood privacy fence construction, and new fencing designed around access and security requirements. Whether replacing an aging enclosure or repairing isolated damage, we assess existing conditions before discussing suitable materials and construction approaches. Our team focuses on practical improvements, dependable structural connections, and consistent workmanship that helps property owners maintain useful, visually appealing outdoor spaces.",
      ],
      visualCaption: "Tap a node to explore each stage of fencing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Explain your fencing concerns, desired materials, and property access needs.",
          scope:
            "We clarify construction activities, replacement priorities, and expected project deliverables.",
          layout:
            "We map proposed fencing around site conditions and access requirements.",
          craft:
            "Accurate cutting and assembly support professional finishes across installed sections.",
          structure:
            "Suitable post foundations and secure fittings improve overall fence integrity.",
          handoff:
            "We review finished boundaries and discuss appropriate routine maintenance practices.",
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
            "Build clearly defined outdoor boundaries with professional fence installation services. We develop customized fencing solutions for homes, offices, and commercial properties, considering access points, materials, and practical long-term maintenance requirements.",
          imageAlt: "Fence installation in Burlington, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Fence Replacement",
          description:
            "Upgrade deteriorating fences with replacement solutions suited to your property's needs. Our contractors remove compromised components, prepare installation areas, and construct updated fencing that improves structural performance and exterior appearance.",
          imageAlt: "Fence replacement in Burlington, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Fence Repair",
          description:
            "Resolve common fencing issues through focused repair services that address damaged materials and weakened connections. We restore affected posts, panels, rails, and gates to support safer, more convenient property access.",
          imageAlt: "Fence repair in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Fencing services",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Fencing Installation Needs in Burlington, WA?",
      body: "Protect your outdoor spaces with fencing solutions suited to your property. Joyner Construction LLC offers Burlington homeowners and businesses professional installation, replacement, and repair services for functional, attractive property boundaries.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Fencing Services",
      title:
        "Trusted Commercial or Residential Fence Installation Specialists and Contractors Burlington, WA",
      intro:
        "Different properties require different fencing solutions, particularly when balancing privacy, access, appearance, and ongoing maintenance. Joyner Construction LLC provides residential and commercial fence installation services in Burlington, WA, alongside targeted repairs and complete replacements. Our contractors evaluate existing conditions, discuss appropriate materials, and consider functional site requirements before construction. We focus on dependable installation practices and practical fence designs that support organized outdoor areas, reliable boundaries, and lasting property improvements.",
      sections: [
        {
          heading: "Reliable Fence Repair Contractors Company Burlington, WA",
          body: [
            "Damaged fencing can create unwanted openings, reduce privacy, and interfere with controlled property access. Joyner Construction LLC provides fence repair services in Burlington, WA, for residential yards and commercial outdoor areas. Our contractors address broken panels, loose rails, unstable posts, and damaged connections after evaluating the affected structure. We consider appropriate repair materials and practical restoration methods to help property owners maintain secure boundaries and avoid unnecessary replacement of functional components.",
          ],
        },
        {
          heading:
            "Affordable Custom Residential Fence Installation Burlington, WA",
          body: [
            "Installing a residential fence offers an opportunity to improve outdoor organization while creating a more comfortable home environment. Joyner Construction LLC provides custom residential fence installation in Burlington, WA, with options for different property sizes and budgets. Our team discusses material durability, privacy preferences, decorative styles, and entrance locations before planning construction. We build practical residential boundaries designed to complement existing landscaping, support convenient access, and accommodate daily outdoor activities.",
          ],
        },
        {
          heading: "Local Vinyl Fence Installation and Replacement Specialists",
          body: [
            "Vinyl fencing offers a practical alternative for property owners who want a consistent appearance without routine staining. Joyner Construction LLC provides vinyl fence installation and replacement services in Burlington, WA, for residential and commercial applications. Our contractors consider panel configurations, support spacing, and gate placement when developing installation plans. We replace damaged sections where appropriate and construct new vinyl boundaries with attention to stable connections, alignment, and convenient outdoor maintenance.",
          ],
        },
        {
          heading: "Metal Fence Installation and Repair Contractors",
          body: [
            "Commercial properties and residential landscapes may benefit from metal fencing that combines boundary definition with an open appearance. Joyner Construction LLC offers metal fence installation and repair in Burlington, WA, for suitable outdoor applications. Our team evaluates material conditions, post stability, and access requirements before recommending construction work. We address damaged metal sections and install new fencing with attention to secure connections, consistent alignment, and compatibility with surrounding property features.",
          ],
        },
        {
          heading: "Fence Gate Installation and Repair Contractors",
          body: [
            "Reliable gates help control entry while allowing convenient movement through enclosed property areas. Joyner Construction LLC provides fence gate installation and repair services in Burlington, WA, for residential and commercial fencing systems. Our contractors examine hinges, latches, gate frames, and supporting posts when troubleshooting problems. We also construct new entrances suited to existing fence styles and access requirements, emphasizing dependable operation, suitable hardware, and properly aligned gate components.",
          ],
        },
        {
          heading: "Residential Fence Repair Services Company",
          body: [
            "A damaged backyard fence may affect privacy, outdoor appearance, and the usability of enclosed areas. Joyner Construction LLC offers residential fence repair in Burlington, WA, for homeowners experiencing broken boards, loose posts, or deteriorating panels. Our contractors assess damaged sections and identify appropriate restoration options based on existing materials. We focus on strengthening weakened components, improving fence alignment, and preserving serviceable structures whenever repairs provide a practical solution.",
          ],
        },
        {
          heading: "Privacy Fence Installation and Construction Services",
          body: [
            "Properties located near busy outdoor areas may benefit from additional visual separation. Joyner Construction LLC provides privacy fence installation in Burlington, WA, with designs intended to create more comfortable residential surroundings. Our contractors discuss solid panel options, fence heights, material characteristics, and suitable gate arrangements. We construct privacy barriers that help screen patios, gardens, and backyard gathering spaces while complementing the property's architecture and existing outdoor layout.",
          ],
        },
        {
          heading: "Wood Fence Installation and Repair Contractors",
          body: [
            "Wooden fencing provides customizable options for privacy, decorative boundaries, and traditional outdoor enclosures. Joyner Construction LLC offers wood fence installation and repair in Burlington, WA, for residential and commercial properties. Our team works with deteriorating boards, damaged posts, weakened rails, and replacement panels. During new construction, we consider lumber characteristics, structural support, and fence design to create attractive wooden boundaries suited to the property's intended use.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Fence Installation & Repair in Burlington, WA",
      description:
        "Find useful information about Burlington fence installation, replacement, and repairs.",
      items: [
        {
          question:
            "Can Fence Installation Improve Security Around a Commercial Property?",
          answer:
            "Appropriate fencing can help define restricted areas, organize entrances, and discourage unauthorized access. The effectiveness depends on fence design, height, gate hardware, property layout, and other security measures already implemented onsite.",
        },
        {
          question: "What Causes Wooden Fence Posts to Become Unstable?",
          answer:
            "Posts may weaken because of moisture exposure, wood decay, soil movement, or inadequate support. Inspecting the affected area helps identify whether reinforcement, post replacement, or additional structural work is necessary.",
        },
        {
          question: "Is Vinyl Fencing Suitable for Commercial Outdoor Areas?",
          answer:
            "Vinyl fencing may suit commercial areas requiring visual separation or defined boundaries. Material selection should consider expected use, exposure conditions, maintenance preferences, and any applicable security or property development requirements.",
        },
        {
          question:
            "Can I Replace My Fence Without Changing Its Existing Layout?",
          answer:
            "In many situations, replacement fencing can follow an existing alignment. However, property boundaries, local regulations, site conditions, and deteriorated foundations should be reviewed before reusing the original fence placement for construction.",
        },
        {
          question:
            "What Should I Do if My Fence Gate No Longer Closes Properly?",
          answer:
            "Check for visible obstructions, loose hardware, or signs of misalignment. A contractor can assess hinges, supporting posts, and the gate frame to determine which adjustments or repairs may restore operation.",
        },
        {
          question: "How Do I Compare Fence Installation and Repair Costs?",
          answer:
            "Compare the extent of existing damage, material requirements, labor, and expected service life. An itemized estimate can help determine whether targeted repairs or replacement offers better value for your property.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to discuss your Burlington fencing needs and request a customized project estimate.",
    },
  };
}
