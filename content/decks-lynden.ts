import type { LandingPageContent } from "@/content/landing";

export function isLyndenDecks(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "decks" && areaSlug === "lynden-wa";
}

export const lyndenDecksHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Decks Installation Repair or Replacement Services Contractor Lynden, WA",
  supporting:
    "A thoughtfully planned deck can provide a useful transition between indoor living and the outdoors. From replacing worn surfaces to building a larger gathering area, Joyner Construction LLC offers deck installation, repair, and replacement services for properties throughout Lynden, WA.",
};

export const lyndenDecksSeo = {
  title:
    "Get Custom Deck Installation, Building & Repair in Lynden, WA | Joyner Construction",
  description:
    "Ready to upgrade your outdoor space? Choose Joyner Construction LLC for expert deck construction, custom deck installation, wood deck repairs, remodeling, and replacement in Lynden, WA. Contact our team today to discuss your project and get a competitive estimate!",
};

/** Swap the shared template copy for the Lynden decks page. Images stay in place. */
export function applyLyndenDecksContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newDeck, rebuild, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Deck Design and Construction Services Contractor or Company Lynden, WA",
      paragraphs: [
        "Every property has different outdoor space requirements. A family may want a deck for weekend gatherings, while a commercial building may need a practical exterior area that fits its layout. Joyner Construction LLC provides deck installation services, residential deck installation, new deck construction, and backyard deck installation company solutions in Lynden, WA.",
        "Our deck repair services include residential deck repair, wood deck repair, and damaged deck repair services. We also plan professional and trusted custom deck construction, affordable custom backyard decks, and residential deck builders contractor or company projects. We focus on practical designs, appropriate materials, and careful construction from the planning stage through completion.",
      ],
      visualCaption: "Tap a node to explore each stage of deck work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us what you want your deck to provide for your property.",
          scope:
            "We review the requested work and establish a clear project direction.",
          layout:
            "We plan deck dimensions and access around your property's outdoor arrangement.",
          craft:
            "Our construction process emphasizes accurate fitting, consistent finishes, and careful details.",
          structure:
            "We evaluate existing components and plan suitable support for new construction.",
          handoff:
            "We walk through completed work and discuss basic upkeep recommendations.",
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
            "Give your property a dedicated outdoor area with a deck planned for its surroundings. We consider the available yard, building access, preferred materials, and intended activities to create a useful structure that supports how you want to spend time outside.",
          imageAlt: "New deck construction in Lynden, WA",
        },
        {
          ...rebuild,
          label: "Rebuild",
          title: "Deck Rebuilds",
          description:
            "When an existing deck has extensive wear or an unsuitable layout, rebuilding selected or major sections may provide a better solution. We review the structure, discuss your priorities, and plan the necessary construction work to renew the outdoor space.",
          imageAlt: "Deck rebuild project in Lynden, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Deck Repair",
          description:
            "A deck's condition can change as boards, fasteners, railings, and steps experience regular use. We address repair needs based on the affected components, helping Lynden property owners improve the condition and functionality of existing outdoor structures.",
          imageAlt: "Deck repair work in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Deck services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Deck Inspection and Maintenance Services contractors Lynden, WA?",
      body: "Regular attention can help identify deck concerns before they interfere with everyday use. Discuss loose connections, weathered boards, railing issues, or general maintenance needs with our team. We can review your concerns and explain possible solutions.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Deck Services",
      title:
        "Certified or Trusted Reliable Professional Deck Installation Contractors Services Agency Lynden, WA",
      intro:
        "The right deck should fit the property rather than force the property to fit a standard design. Its size, access, surface, and overall arrangement should reflect how people will use it. Joyner Construction LLC helps Lynden property owners consider these details when planning deck installation, remodeling, and repairs. We focus on practical project decisions, appropriate construction methods, and finished outdoor spaces that support everyday use.",
      sections: [
        {
          heading: "Reliable Residential Deck Repair Specialists Company",
          body: [
            "Everyday exposure and regular foot traffic can gradually affect a residential deck. Boards may loosen, steps may wear, and railings may require attention. Our repair services begin with reviewing the affected areas and understanding the concerns you have noticed. We then discuss suitable work based on the structure's condition. For Lynden homeowners, this means addressing specific deck problems with a practical repair plan instead of assuming every issue requires complete replacement.",
          ],
        },
        {
          heading: "Local Deck Building Contractors Services Lynden, WA",
          body: [
            "A well-planned deck can improve how a property connects with its outdoor surroundings. Before construction begins, it is important to consider the yard's shape, the building's access points, and the activities the deck should accommodate. We help Lynden property owners work through these decisions and develop a suitable construction plan. Our deck building services focus on practical layouts, appropriate materials, and careful execution to create outdoor areas that serve a clear purpose.",
          ],
        },
        {
          heading:
            "Custom Deck Design and Construction Specialists Lynden, WA",
          body: [
            "No two outdoor spaces need to serve exactly the same purpose. One homeowner may prefer a compact deck for morning coffee, while another may want a larger area for hosting guests. Our custom deck design and construction services begin with your intended use and property conditions. We help Lynden clients consider dimensions, arrangement, and material choices before construction. The result is a project planned around individual requirements rather than a standard layout.",
          ],
        },
        {
          heading: "Wood Deck Installation and Repair Contractors",
          body: [
            "Choosing wood for a deck calls for attention to both its appearance and ongoing condition. Proper installation, well-fitted boards, and suitable structural components all matter to the finished project. We provide wood deck installation and repair services for properties that need a new surface or attention to existing materials. For Lynden property owners, our approach includes reviewing the work area, identifying damaged sections, and completing the agreed improvements with care.",
          ],
        },
        {
          heading: "Backyard Deck Construction Contractors",
          body: [
            "A backyard can offer more than open lawn when its layout includes a comfortable place to sit, dine, or spend time outdoors. A deck helps define that space and create a convenient area connected to the home. We plan backyard construction around the property's dimensions, access, and intended activities. Whether you want a modest platform or a larger outdoor setting, our team helps Lynden homeowners develop a practical deck design.",
          ],
        },
        {
          heading: "Deck Railing Installation and Replacement Company",
          body: [
            "Railings influence both the usability and finished look of a deck. Damaged sections, unstable posts, or an outdated design may call for repair or a complete railing update. We review the existing arrangement and discuss replacement options that suit the structure. Our railing services help Lynden property owners address worn components and improve the appearance of their outdoor spaces. Each project is planned with attention to fitting, connections, and overall consistency.",
          ],
        },
        {
          heading: "Residential Deck Remodeling Services",
          body: [
            "Changes in household routines can make an existing deck feel too small, poorly arranged, or outdated. Remodeling offers a way to update the space according to current needs. Depending on the structure's condition, improvements may include replacing surfaces, changing selected features, or adjusting the deck's layout. We help Lynden homeowners review their options and plan suitable updates. The aim is to make the outdoor area more useful while considering what can remain.",
          ],
        },
        {
          heading: "Complete Deck Replacement Services Contractors",
          body: [
            "Some decks reach a point where repeated repairs no longer make practical sense. Extensive deterioration, multiple damaged components, or changing property needs may support a full replacement. We review the existing structure and discuss what you want from the new deck before planning the work. Replacement can provide an opportunity to reconsider the layout, materials, and access. Joyner Construction LLC helps Lynden property owners plan a new structure around their outdoor requirements.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Deck Services in Lynden, WA",
      description:
        "These helpful answers cover common deck construction and maintenance questions.",
      items: [
        {
          question: "How do I know if my deck needs repairs?",
          answer:
            "Look for loose boards, unstable railings, damaged steps, visible deterioration, or movement in the structure. If you notice these concerns, arrange an assessment to understand the required repairs.",
        },
        {
          question: "Can a deck be redesigned during a rebuild?",
          answer:
            "Yes. A rebuild can provide an opportunity to reconsider the deck's dimensions, arrangement, and intended use. The existing structure should be evaluated before finalizing the new design.",
        },
        {
          question: "What types of deck projects do you handle?",
          answer:
            "Deck projects can include new construction, custom designs, repairs, remodeling, railing work, and complete replacement. Discuss your property's condition and goals to identify an appropriate service.",
        },
        {
          question: "Is wood suitable for a residential deck?",
          answer:
            "Wood can be a suitable choice when its appearance, installation requirements, and maintenance needs match your preferences. Discuss material options before selecting the best approach for your project.",
        },
        {
          question: "Can you update an older backyard deck?",
          answer:
            "Yes. Depending on its condition, an older deck may benefit from surface improvements, railing updates, selected repairs, or remodeling. An assessment helps establish what work is practical.",
        },
        {
          question: "Should I repair or replace a damaged deck?",
          answer:
            "The decision depends on the extent of deterioration and the condition of the supporting structure. A professional review can help determine whether targeted repairs or replacement makes more sense.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning a new deck or considering repairs? Contact Joyner Construction LLC to discuss your Lynden property, outline your project needs, and request an estimate.",
    },
  };
}
