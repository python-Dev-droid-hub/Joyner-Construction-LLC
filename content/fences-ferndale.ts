import type { LandingPageContent } from "@/content/landing";

export function isFerndaleFences(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "fences" && areaSlug === "ferndale-wa";
}

export const ferndaleFencesHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Fence Repair, Installation & Replacement Services Contractor Ferndale, WA",
  supporting:
    "Create a more secure, attractive outdoor environment with fencing solutions from Joyner Construction LLC. Our Ferndale, WA, fence contractors help homeowners and business owners address damaged barriers, install new perimeter fencing, and replace outdated structures with materials and designs selected for lasting functionality.",
};

export const ferndaleFencesSeo = {
  title:
    "Expert Fence Installation & Replacement Services in Ferndale, WA | Joyner Construction LLC",
  description:
    "Need professional fence services in Ferndale, WA? Joyner Construction LLC offers reliable fence installation, repair, replacement, and custom fencing solutions for residential properties. Enhance your outdoor space with durable materials, expert workmanship, and dependable construction services. Contact us today for a consultation!",
};

/** Swap the shared template copy for the Ferndale fences page. Images stay in place. */
export function applyFerndaleFencesContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Damaged Fence Panel Repair and Replacement Contractor or Company Ferndale, WA",
      paragraphs: [
        "Outdoor fencing plays an important role in defining usable property space, managing access, and maintaining privacy. Joyner Construction LLC offers residential and commercial fence installation services in Ferndale, WA, with solutions tailored to different building environments. Our contractors work on new fence installation, damaged fence repair, wooden fence replacement, and custom privacy fencing projects.",
        "Whether your backyard needs a secure enclosure or your business requires improvements to an existing perimeter, we consider the condition of your property and your preferred materials. Our wood fence repair and installation services address structural concerns while supporting a cohesive exterior appearance. We focus on practical construction methods, careful project coordination, and fencing that serves its intended purpose.",
      ],
      visualCaption: "Tap a node to explore each stage of fencing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your preferred fencing style, concerns, and desired project outcomes.",
          scope:
            "We identify necessary construction tasks and discuss suitable material options.",
          layout:
            "Fence routes account for yard features, entrances, and boundary considerations.",
          craft:
            "Careful assembly produces consistent panel spacing and attractive finished surfaces.",
          structure:
            "Stable supports and appropriate fasteners help withstand regular outdoor exposure.",
          handoff:
            "Finished installations are reviewed for access, appearance, and operational concerns.",
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
            "Transform open yard boundaries into defined outdoor areas with professionally installed fencing. We consider property dimensions, material preferences, and access requirements when developing practical enclosures for residential and commercial spaces.",
          imageAlt: "Fence installation in Ferndale, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Fence Replacement",
          description:
            "Give worn fencing a fresh start through complete or partial replacement. Our contractors evaluate deteriorated components, prepare affected areas, and construct updated boundaries that improve appearance, stability, and everyday usability.",
          imageAlt: "Fence replacement in Ferndale, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Fence Repair",
          description:
            "Address fencing problems before they create larger property concerns. We repair damaged sections, loose boards, weakened supports, and malfunctioning gates using appropriate techniques that help restore dependable outdoor boundaries and access.",
          imageAlt: "Fence repair in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Fencing services",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Fencing Installation Needs in Ferndale, WA?",
      body: "Is your fence showing signs of wear or failing to provide adequate privacy? Joyner Construction LLC offers Ferndale property owners customized installation, replacement, and repair options for outdoor fencing projects.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Fencing Services",
      title:
        "Trusted Commercial or Residential Fence Installation Specialists and Contractors Ferndale, WA",
      intro:
        "From backyard enclosures to commercial property boundaries, fencing should support how an outdoor area is used. Joyner Construction LLC provides fence installation and maintenance solutions in Ferndale, WA, with attention to property access, suitable materials, and functional design. We evaluate installation conditions and discuss project priorities before construction. Our approach emphasizes sound post placement, consistent fence alignment, and durable connections that contribute to attractive, dependable residential and commercial fencing.",
      sections: [
        {
          heading: "Reliable Fence Repair Contractors Company Ferndale, WA",
          body: [
            "Strong winds, prolonged moisture exposure, and ordinary aging can affect the condition of outdoor fencing. Joyner Construction LLC provides fence repair services in Ferndale, WA, for properties experiencing loose panels, cracked boards, or unstable fence posts. Our contractors examine affected areas and consider whether individual components can be restored. We aim to preserve functional sections while addressing damage that compromises stability, helping property owners maintain practical boundaries without unnecessary replacement of serviceable fencing materials.",
          ],
        },
        {
          heading:
            "Affordable Custom Residential Fence Installation Ferndale, WA",
          body: [
            "A new residential fence should fit your outdoor routine as well as your property's appearance. Joyner Construction LLC offers custom fence installation in Ferndale, WA, with material and design choices suited to different budgets. Homeowners can explore decorative boundaries, enclosed backyard areas, and practical fencing for side yards. Our contractors consider existing landscaping, preferred entry points, and maintenance expectations when developing installations that provide useful separation and complement surrounding residential features.",
          ],
        },
        {
          heading: "Local Vinyl Fence Installation and Replacement Specialists",
          body: [
            "Homeowners seeking a uniform fence appearance often consider vinyl for its range of styles and relatively simple upkeep. Joyner Construction LLC provides vinyl fence installation and replacement in Ferndale, WA, for yards and commercial outdoor areas. Our team considers panel dimensions, support placement, and gate compatibility when organizing construction. We replace damaged vinyl sections where practical and install new fencing with attention to alignment, secure connections, and long-term outdoor functionality.",
          ],
        },
        {
          heading: "Metal Fence Installation and Repair Contractors",
          body: [
            "For properties requiring visible boundaries without completely blocking surrounding views, metal fencing can offer a suitable option. Joyner Construction LLC provides metal fence installation and repair services in Ferndale, WA, for residential and commercial settings. We consider fence configurations, access points, and the condition of existing supports before beginning work. Our contractors address damaged sections and install new components with attention to structural integrity, exterior compatibility, and practical maintenance considerations.",
          ],
        },
        {
          heading: "Fence Gate Installation and Repair Contractors",
          body: [
            "Every frequently used gate needs dependable hardware and proper alignment to function smoothly. Joyner Construction LLC offers fence gate installation and repair services in Ferndale, WA, for pedestrian entrances and other property access points. We examine hinges, latches, posts, and gate frames when identifying operational problems. Whether installing a new entrance or repairing an existing gate, our contractors focus on convenient movement, secure closures, and compatibility with surrounding fence sections.",
          ],
        },
        {
          heading: "Residential Fence Repair Services Company",
          body: [
            "Residential fences experience different types of wear depending on their materials, age, and exposure to outdoor conditions. Joyner Construction LLC provides residential fence repair in Ferndale, WA, for homeowners dealing with splintered boards, loose pickets, and shifting sections. Our team reviews the affected components and recommends suitable corrective work. We focus on improving fence stability and appearance while helping homeowners avoid unnecessary disruption to surrounding yards and landscaping.",
          ],
        },
        {
          heading: "Privacy Fence Installation and Construction Services",
          body: [
            "Privacy fencing can transform an exposed backyard into a more comfortable setting for everyday outdoor activities. Joyner Construction LLC provides privacy fence construction in Ferndale, WA, using configurations selected around individual property requirements. We consider sightlines, panel height, gate positioning, and material appearance when discussing installation options. Our contractors create defined outdoor spaces that offer greater separation from neighboring areas while maintaining convenient access and a coordinated residential appearance.",
          ],
        },
        {
          heading: "Wood Fence Installation and Repair Contractors",
          body: [
            "Traditional wooden fencing offers flexibility in height, board arrangement, and overall design. Joyner Construction LLC provides wood fence installation and repair services in Ferndale, WA, for homeowners and commercial property owners seeking practical boundaries. Our contractors work with damaged boards, weakened supports, and aging fence sections while considering appropriate replacement materials. For new installations, we focus on consistent construction details and suitable lumber choices that complement the property's exterior environment.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Fence Installation & Repair in Ferndale, WA",
      description:
        "Explore practical answers to frequent fencing questions from Ferndale property owners.",
      items: [
        {
          question: "How Can I Choose the Right Fence for My Backyard?",
          answer:
            "Consider your privacy goals, yard dimensions, preferred appearance, and maintenance expectations. Comparing wood, vinyl, and metal fencing can help identify an option that suits your property's needs and available budget.",
        },
        {
          question: "Can Strong Winds Damage an Existing Residential Fence?",
          answer:
            "Yes, strong winds can loosen panels, weaken connections, and place pressure on fence posts. Inspecting affected sections after severe weather helps identify damage that may require repairs or additional structural attention.",
        },
        {
          question: "Is Replacing Only Part of My Fence an Option?",
          answer:
            "Partial replacement may be practical when damage is limited to specific sections. The condition of remaining posts, materials, and connections helps determine whether targeted replacement can provide a dependable result overall.",
        },
        {
          question:
            "What Makes a Privacy Fence Different From Decorative Fencing?",
          answer:
            "Privacy fences typically use closely spaced or solid panels to reduce visibility. Decorative fencing often emphasizes appearance and open designs, offering boundary definition without necessarily providing the same level of visual separation.",
        },
        {
          question: "Why Does My Fence Gate Keep Dragging Against the Ground?",
          answer:
            "Dragging can result from shifting posts, loose hinges, misalignment, or a sagging gate frame. Identifying the underlying cause helps determine whether hardware adjustments or structural repairs are needed to restore operation.",
        },
        {
          question:
            "Should I Check Property Boundaries Before Installing a New Fence?",
          answer:
            "Yes, confirming property boundaries helps avoid placement disputes and unnecessary construction changes. Review available survey information and applicable local requirements before deciding exactly where the proposed fence should be installed on-site.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Discuss your Ferndale fence installation or repair needs with Joyner Construction LLC and request an estimate.",
    },
  };
}
