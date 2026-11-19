import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonDecks(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "decks" && areaSlug === "burlington-wa";
}

export const burlingtonDecksHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Decks Installation Repair or Replacement Services Contractor Burlington, WA",
  supporting:
    "Make better use of your property's exterior with a deck that suits its design and daily demands. Joyner Construction LLC helps Burlington homeowners and commercial property owners address new deck construction, worn structures, repairs, and replacement projects.",
};

export const burlingtonDecksSeo = {
  title: "Deck Installation Services in Burlington, WA",
  description:
    "Joyner Construction LLC provides residential and commercial deck installation, repair, and replacement services in Burlington, WA.",
};

/** Swap the shared template copy for the Burlington decks page. Images stay in place. */
export function applyBurlingtonDecksContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newDeck, rebuild, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Deck Design and Construction Services Contractor or Company Burlington, WA",
      paragraphs: [
        "A deck should provide useful outdoor space while complementing the building it serves. Whether you are updating a private residence or improving an exterior area at a commercial property, Joyner Construction LLC helps organize the work around your goals. Our deck installation services include residential deck installation, new deck construction, and backyard deck installation company solutions in Burlington, WA.",
        "We also handle deck repair services, residential deck repair, wood deck repair, and damaged deck repair services. For new projects, our professional and trusted custom deck construction, affordable custom backyard decks, and residential deck builders contractor or company services provide practical options for different property layouts.",
      ],
      visualCaption: "Tap a node to explore each stage of deck work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Describe your preferred improvements so we can understand your priorities.",
          scope:
            "We establish the work needed and discuss appropriate project options.",
          layout:
            "We map out the proposed deck area to support access and everyday function.",
          craft:
            "We pay attention to board placement, connections, and the finished surface.",
          structure:
            "We review important deck components and identify construction requirements.",
          handoff:
            "We explain the completed work and answer questions about the project.",
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
            "Add a defined outdoor living area with a deck built around your property's needs. We consider how the space connects to the building, how much room is available, and which layout will best support your planned activities.",
          imageAlt: "New deck construction in Burlington, WA",
        },
        {
          ...rebuild,
          label: "Rebuild",
          title: "Deck Rebuilds",
          description:
            "A deck with multiple worn or damaged sections may benefit from a more extensive renovation. We assess the existing construction and identify which parts need rebuilding, helping you move toward an improved outdoor structure with a suitable design.",
          imageAlt: "Deck rebuild project in Burlington, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Deck Repair",
          description:
            "Deck surfaces and components can deteriorate through ongoing use and exposure. We review problems such as damaged boards, loose railings, and worn steps, then complete appropriate repairs to help restore the deck's condition and usability.",
          imageAlt: "Deck repair work in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Deck services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Deck Inspection and Maintenance Services contractors Burlington, WA?",
      body: "A deck inspection can help clarify the condition of aging materials and frequently used components. Contact our team about maintenance, damaged boards, railing concerns, or other visible problems. We can discuss your property and potential repair options.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Deck Services",
      title:
        "Certified or Trusted Reliable Professional Deck Installation Contractors Services Agency Burlington, WA",
      intro:
        "A deck project should account for the building, the surrounding outdoor area, and the people who will use it. The right approach may involve constructing a new platform, updating an existing surface, or replacing an aging structure. Joyner Construction LLC works with Burlington property owners to understand these priorities and plan suitable improvements. We emphasize clear project planning, practical material choices, and attention to the details that shape the finished deck.",
      sections: [
        {
          heading: "Reliable Residential Deck Repair Specialists Company",
          body: [
            "Deck damage does not always affect the entire structure at once. A few boards may become worn, a step may loosen, or railing components may need attention. Our residential deck repair services focus on reviewing these individual concerns and checking the surrounding areas for related problems. We discuss the required work before making improvements. Burlington homeowners can use this assessment to understand their deck's condition and choose a repair approach suited to the property.",
          ],
        },
        {
          heading: "Local Deck Building Contractors Services Burlington, WA",
          body: [
            "The location and arrangement of a deck can influence how comfortably it fits into an outdoor area. A practical design should account for available space, building access, and the activities the structure will support. Our deck building services help Burlington property owners plan these details before construction. We work toward a suitable finished layout through careful project preparation, material consideration, and attention to construction requirements, whether the deck serves a home or commercial property.",
          ],
        },
        {
          heading:
            "Custom Deck Design and Construction Specialists Burlington, WA",
          body: [
            "A custom deck gives property owners greater flexibility when planning an outdoor area. You might want a space that connects to a patio, provides room for outdoor dining, or creates a convenient transition from the house to the yard. We discuss these goals and consider the property's layout before developing a construction plan. Joyner Construction LLC helps Burlington clients shape deck projects around their preferred use, available space, and practical building requirements.",
          ],
        },
        {
          heading: "Wood Deck Installation and Repair Contractors",
          body: [
            "Wood deck projects require attention to the condition and placement of each component. New installations need suitable preparation and careful fitting, while repairs may involve replacing worn boards or addressing damaged sections. We review the project requirements and discuss the work needed before starting. Our wood deck installation and repair services help Burlington property owners maintain the appearance and usefulness of their outdoor structures through focused construction and repair solutions.",
          ],
        },
        {
          heading: "Backyard Deck Construction Contractors",
          body: [
            "A deck can turn part of a backyard into a more organized outdoor destination. It may provide space for seating, family activities, or meals outside without taking over the entire yard. We help homeowners consider the dimensions, access, and arrangement that make sense for their property. Our backyard deck construction services focus on creating a functional connection between the home and outdoor area, with project decisions guided by your intended use.",
          ],
        },
        {
          heading: "Deck Railing Installation and Replacement Company",
          body: [
            "A railing should complement the deck while serving its practical purpose. Over time, individual sections may loosen, deteriorate, or become unsuitable for the existing structure. We inspect the affected components and discuss whether repair or replacement is appropriate. Burlington property owners can update damaged or outdated railings through work planned around the deck's design. Our focus includes proper fitting, consistent appearance, and attention to the connections that support the finished installation.",
          ],
        },
        {
          heading: "Residential Deck Remodeling Services",
          body: [
            "An existing deck may need changes to better match your home's exterior or the way you use the backyard. Remodeling can involve refreshing surfaces, replacing selected features, or making practical layout improvements where the structure allows. We review the deck's current condition and discuss your preferred changes before recommending a direction. Our residential deck remodeling services help Burlington homeowners update outdoor spaces while making thoughtful use of components that remain in suitable condition.",
          ],
        },
        {
          heading: "Complete Deck Replacement Services Contractors",
          body: [
            "When an existing deck has extensive damage or no longer fits the property's needs, replacement may be the more practical option. We consider the condition of the current structure, the proposed design, and the work involved in constructing a new deck. This process also gives property owners an opportunity to reconsider access, dimensions, and material preferences. Joyner Construction LLC helps Burlington clients plan replacement projects with their property's requirements in mind.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Deck Services in Burlington, WA",
      description:
        "Find straightforward answers to common questions about residential and commercial deck projects.",
      items: [
        {
          question: "What deck problems should I address promptly?",
          answer:
            "Pay attention to loose boards, unstable railings, damaged steps, deteriorating connections, and noticeable movement. These issues deserve assessment so you can understand their condition and discuss appropriate repairs.",
        },
        {
          question: "Can you construct decks for commercial properties?",
          answer:
            "Yes. Deck construction can be planned for commercial properties as well as residences. The design should reflect the building's layout, intended use, available space, and applicable project requirements.",
        },
        {
          question: "What is included in a custom deck project?",
          answer:
            "A custom project may involve discussing the layout, dimensions, materials, access, and intended activities. The final scope depends on your property, design preferences, and construction requirements.",
        },
        {
          question: "When is deck railing replacement necessary?",
          answer:
            "Replacement may be appropriate when railings have extensive damage, unstable connections, or components that cannot be suitably repaired. An assessment helps determine whether individual sections or the full railing need attention.",
        },
        {
          question: "Can I remodel my deck instead of replacing it?",
          answer:
            "Yes, if the existing structure remains suitable for the planned improvements. Remodeling may include surface updates, railing changes, or selected repairs based on the deck's condition.",
        },
        {
          question: "How can I prepare for a deck installation project?",
          answer:
            "Consider your preferred deck size, intended activities, material preferences, and connection to the building. Sharing these details helps establish a project direction that fits your property.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to discuss your deck plans? Contact Joyner Construction LLC for help reviewing your Burlington project requirements and requesting an estimate for installation, repair, or replacement.",
    },
  };
}
