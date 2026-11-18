import type { LandingPageContent } from "@/content/landing";

export function isBellinghamDecks(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "decks" && areaSlug === "bellingham-wa";
}

export const bellinghamDecksHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Deck Installation, Repair or Replacement Services Contractor Bellingham, WA",
  supporting:
    "A well-built deck creates valuable outdoor space for relaxation, gatherings, and everyday activities. In Bellingham, WA, Joyner Construction LLC provides residential and commercial deck installation, repair, and replacement services focused on functional designs, dependable construction, and workmanship suited to each property's needs.",
};

export const bellinghamDecksSeo = {
  title: "Deck Installation Services in Bellingham, WA",
  description:
    "Joyner Construction LLC provides residential and commercial deck installation, repair, and replacement services in Bellingham, WA.",
};

/** Swap the shared template copy for the Bellingham decks page. Images stay in place. */
export function applyBellinghamDecksContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newDeck, rebuild, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Deck Design and Construction Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "A custom deck can turn an underused outdoor area into a practical extension of your property. Whether you want a new entertainment space or need to improve an aging structure, thoughtful construction makes a difference. Joyner Construction LLC provides deck installation services in Bellingham, WA, including residential deck installation, new deck construction, and backyard deck projects.",
        "We also handle deck repair services, residential deck repair, wood deck repair, and damaged deck repair services. From functional platforms to custom backyard decks, our professional custom deck construction solutions address different property requirements. Homeowners seeking residential deck builders can discuss layouts, materials, and project goals with our team.",
      ],
      visualCaption: "Tap a node to explore each stage of deck work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your outdoor construction ideas and discuss suitable deck improvement solutions.",
          scope:
            "We establish project requirements, material preferences, and construction priorities before starting.",
          layout:
            "We organize deck dimensions around property boundaries, accessibility, and outdoor activities.",
          craft:
            "Quality materials and careful construction practices guide every deck improvement project.",
          structure:
            "We consider framing, support requirements, and stability throughout deck construction.",
          handoff:
            "We review completed construction details and explain important project information clearly.",
        },
      },
    },
    services: {
      title: "New Deck Construction, Rebuilds, and Repair",
      items: [
        {
          ...newDeck,
          label: "New Deck",
          title: "New Deck Construction",
          description:
            "Planning a new outdoor gathering area starts with the right design. We develop deck construction solutions around available space, preferred materials, property access, and your intended activities.",
          imageAlt: "New deck construction in Bellingham, WA",
        },
        {
          ...rebuild,
          label: "Rebuild",
          title: "Deck Rebuilds",
          description:
            "An aging deck with widespread deterioration may need a fresh start. We help property owners rebuild existing structures with updated dimensions, replacement materials, and improved outdoor functionality.",
          imageAlt: "Deck rebuild project in Bellingham, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Deck Repair",
          description:
            "Weather exposure and everyday use can gradually damage deck surfaces and connections. Our repair services address loose boards, worn components, damaged railings, and other concerns affecting usability.",
          imageAlt: "Deck repair work in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Deck services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Deck Inspection and Maintenance Services Contractors Bellingham, WA?",
      body: "Regular deck inspections help identify deteriorating boards, loose railings, and potential structural concerns. Contact Joyner Construction LLC in Bellingham, WA, to discuss suitable maintenance and repair solutions.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Deck Services",
      title:
        "Certified or Trusted Reliable Professional Deck Installation Contractors Services Agency Bellingham, WA",
      intro:
        "Choosing the right deck contractor helps establish a strong foundation for your outdoor improvement project. From initial design considerations to material selection and construction planning, every detail matters. Joyner Construction LLC supports residential and commercial deck installation in Bellingham, WA, with practical solutions for different property layouts. Whether you need a completely new structure or want to improve an existing deck, our team helps organize the project around your goals.",
      sections: [
        {
          heading: "Reliable Residential Deck Repair Specialists Company",
          body: [
            "A damaged deck can make an otherwise enjoyable outdoor area difficult to use. Loose planks, splintered surfaces, unstable railings, and deteriorating connections are common problems that deserve attention. Homeowners in Bellingham, WA, can explore residential deck repair services from Joyner Construction LLC. We consider the affected components and the overall condition of the structure before discussing appropriate improvements. Addressing deck damage helps maintain functionality and supports safer outdoor use.",
          ],
        },
        {
          heading: "Local Deck Building Contractors Services Bellingham, WA",
          body: [
            "Every property has different outdoor construction possibilities, making careful project planning essential. Whether your available space is beside a home, behind an office, or connected to a commercial building, the deck should complement its surroundings. Joyner Construction LLC helps Bellingham, WA, property owners explore deck building requirements, material choices, dimensions, and construction details. Our team focuses on practical layouts that make outdoor spaces more useful for their intended purposes.",
          ],
        },
        {
          heading:
            "Custom Deck Design and Construction Specialists Bellingham, WA",
          body: [
            "Your deck should reflect how you plan to use your outdoor space. Some property owners prefer an open platform for entertaining, while others need a smaller area for everyday relaxation. Joyner Construction LLC supports custom deck design and construction in Bellingham, WA, with attention to dimensions, access, railing arrangements, and material preferences. We help turn individual ideas into organized construction plans suited to each property's requirements and outdoor environment.",
          ],
        },
        {
          heading: "Wood Deck Installation and Repair Contractors",
          body: [
            "Wood decking offers a natural appearance that works well with many residential and commercial properties. However, moisture, sunlight, and regular foot traffic can gradually affect its condition. Joyner Construction LLC helps Bellingham, WA, property owners with wood deck installation and repair projects. Whether you are planning a new wooden deck or addressing damaged boards, we consider material selection, construction requirements, and existing conditions when discussing suitable solutions.",
          ],
        },
        {
          heading: "Backyard Deck Construction Contractors",
          body: [
            "An unfinished backyard can become a more inviting outdoor area with a thoughtfully designed deck. A suitable layout provides space for outdoor furniture, family gatherings, and seasonal activities. Joyner Construction LLC helps homeowners in Bellingham, WA, plan backyard deck construction around property dimensions and personal preferences. From determining platform size to considering steps and access points, our team helps organize construction details that support your intended outdoor lifestyle.",
          ],
        },
        {
          heading: "Deck Railing Installation and Replacement Company",
          body: [
            "Deck railings provide an important boundary around elevated platforms, stairs, and other exposed edges. Damaged sections, loose connections, or outdated designs may require replacement or improvement. Joyner Construction LLC helps Bellingham, WA, property owners plan deck railing installation and replacement projects. We consider the deck's dimensions, material compatibility, and applicable safety requirements when discussing suitable arrangements. Properly planned railings contribute to the structure's appearance, functionality, and overall usability.",
          ],
        },
        {
          heading: "Residential Deck Remodeling Services",
          body: [
            "Changing household needs can make an existing deck feel outdated or less practical. Remodeling provides an opportunity to adjust its layout, replace worn surfaces, and update selected features without automatically rebuilding the entire structure. Joyner Construction LLC supports residential deck remodeling in Bellingham, WA, based on each property's condition and homeowner preferences. Whether you want a different configuration or improved outdoor functionality, we help plan appropriate construction modifications.",
          ],
        },
        {
          heading: "Complete Deck Replacement Services Contractors",
          body: [
            "Some decks experience extensive deterioration that cannot be addressed effectively through isolated repairs. When major components become unsuitable, complete replacement may offer a more practical long-term solution. Joyner Construction LLC helps property owners in Bellingham, WA, explore deck replacement options based on existing conditions and project objectives. We consider the desired dimensions, construction materials, and layout when planning a new structure that better accommodates your property's outdoor requirements.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Deck Services in Bellingham, WA",
      description:
        "Explore helpful answers about deck construction, repairs, replacement, materials, and maintenance.",
      items: [
        {
          question: "How long does a typical deck installation take?",
          answer:
            "Project duration depends on deck dimensions, materials, site conditions, and design complexity. A contractor can provide a more accurate timeline after reviewing your construction requirements.",
        },
        {
          question: "Does Joyner Construction LLC provide residential deck repair?",
          answer:
            "Joyner Construction LLC supports residential deck repair in Bellingham, WA, addressing damaged boards, deteriorating components, loose railings, and other concerns affecting existing structures.",
        },
        {
          question: "What are the signs that a deck needs replacement?",
          answer:
            "Significant wood deterioration, unstable framing, extensive structural damage, and recurring repair requirements may indicate replacement is necessary. A professional assessment helps determine suitable options.",
        },
        {
          question: "Can I customize the design of my backyard deck?",
          answer:
            "Yes. Custom deck designs can accommodate preferred dimensions, layouts, materials, stairs, and railings. Planning around property conditions helps create a practical outdoor living space.",
        },
        {
          question:
            "Which materials are suitable for residential deck construction?",
          answer:
            "Common choices include pressure-treated lumber, cedar, composite decking, and other suitable materials. Selection depends on appearance, maintenance expectations, budget, and environmental exposure.",
        },
        {
          question: "Why should I schedule regular deck inspections?",
          answer:
            "Regular inspections help identify loose boards, deteriorating connections, damaged railings, and structural concerns before they become more extensive maintenance or repair problems.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning a new deck or repairs in Bellingham, WA? Contact Joyner Construction LLC today for an estimate!",
    },
  };
}
