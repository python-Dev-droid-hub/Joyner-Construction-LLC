import type { LandingPageContent } from "@/content/landing";

export function isFerndaleDecks(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "decks" && areaSlug === "ferndale-wa";
}

export const ferndaleDecksHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Decks Installation Repair or Replacement Services Contractor Ferndale, WA",
  supporting:
    "An attractive, dependable deck makes outdoor areas more useful for relaxing, entertaining, and everyday activities. Whether you need a new structure or repairs to an existing one, Joyner Construction LLC provides residential and commercial deck solutions designed around your property's needs in Ferndale, WA.",
};

export const ferndaleDecksSeo = {
  title: "Deck Installation Services in Ferndale, WA",
  description:
    "Joyner Construction LLC provides residential and commercial deck installation, repair, and replacement services in Ferndale, WA.",
};

/** Swap the shared template copy for the Ferndale decks page. Images stay in place. */
export function applyFerndaleDecksContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newDeck, rebuild, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Deck Design and Construction Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "Outdoor spaces deserve construction that balances appearance, stability, and practical use. Joyner Construction LLC helps property owners plan projects that suit their buildings, available space, and long-term goals. Our deck installation services include residential deck installation, new deck construction, and backyard deck installation company solutions in Ferndale, WA.",
        "When an existing structure needs attention, our deck repair services address residential deck repair, wood deck repair, and damaged deck repair services. We also provide professional and trusted custom deck construction, affordable custom backyard decks, and residential deck builders contractor or company services. From private homes to office buildings, each project receives careful planning and workmanship.",
      ],
      visualCaption: "Tap a node to explore each stage of deck work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your ideas, property details, and project concerns to begin planning.",
          scope:
            "We define project requirements, expected work, and suitable construction options together.",
          layout:
            "We assess available outdoor space, discuss your priorities, and plan practical deck layouts.",
          craft:
            "Careful material selection and precise workmanship help create attractive, dependable outdoor structures.",
          structure:
            "We consider support, connections, and construction details before building or repairing decks.",
          handoff:
            "We review completed work with you and explain important care considerations.",
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
            "Create a comfortable outdoor extension with a deck designed around your property's layout. We plan new construction with attention to usable space, suitable materials, access, and structural details, giving Ferndale homeowners a practical place to enjoy their yards.",
          imageAlt: "New deck construction in Ferndale, WA",
        },
        {
          ...rebuild,
          label: "Rebuild",
          title: "Deck Rebuilds",
          description:
            "An aging or extensively damaged deck may need more than isolated repairs. We assess the existing structure, identify components that require replacement, and rebuild the necessary sections to improve usability, appearance, and dependable performance.",
          imageAlt: "Deck rebuild project in Ferndale, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Deck Repair",
          description:
            "Loose boards, worn surfaces, unstable railings, and deteriorating connections can affect deck safety and enjoyment. Our repair work addresses visible problems and underlying concerns, helping property owners restore outdoor spaces without automatically replacing the entire structure.",
          imageAlt: "Deck repair work in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Deck services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Deck Inspection and Maintenance Services contractors Ferndale, WA?",
      body: "Deck problems can develop gradually and become harder to manage when ignored. Arrange an inspection to discuss worn boards, loose railings, structural concerns, or maintenance needs. We can help determine a suitable next step.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Deck Services",
      title:
        "Certified or Trusted Reliable Professional Deck Installation Contractors Services Agency Ferndale, WA",
      intro:
        "A successful deck project begins with understanding how the space will be used. Some properties need room for outdoor dining, while others require a simple platform for everyday access. Joyner Construction LLC considers these practical needs when planning construction and repairs. Our team works to deliver suitable solutions for residential and commercial properties, with attention to project details, materials, and the finished structure.",
      sections: [
        {
          heading: "Reliable Residential Deck Repair Specialists Company",
          body: [
            "A damaged deck can interrupt outdoor activities and create concerns about the condition of the structure. Our residential deck repair work focuses on identifying worn boards, loose connections, deteriorating steps, and other visible issues. We assess the affected areas before recommending suitable repairs. Whether your Ferndale property needs attention to a small section or several deck components, we aim to restore practical use while preserving sound parts whenever possible.",
          ],
        },
        {
          heading: "Local Deck Building Contractors Services Ferndale, WA",
          body: [
            "Building a deck requires more than selecting boards and deciding on its shape. The design must work with the property's outdoor space, access points, and intended use. Our deck building services help Ferndale property owners plan structures that complement their homes or commercial buildings. From discussing layout options to completing construction details, we focus on creating usable outdoor areas with thoughtful planning, suitable materials, and careful workmanship throughout the project.",
          ],
        },
        {
          heading:
            "Custom Deck Design and Construction Specialists Ferndale, WA",
          body: [
            "A custom deck should reflect how you want to use your outdoor space. You may need room for gatherings, a quiet sitting area, or convenient access from your home. We consider these priorities when planning deck dimensions, layout, and construction details. Joyner Construction LLC works with Ferndale property owners to develop practical custom deck solutions that suit the building, available space, and project goals without relying on one-size-fits-all designs.",
          ],
        },
        {
          heading: "Wood Deck Installation and Repair Contractors",
          body: [
            "Wood decks offer a familiar appearance and can complement many residential and commercial properties. However, their surfaces and structural components need appropriate installation and timely attention. Our services include wood deck construction, board replacement, and repairs to damaged sections. We assess the condition of the existing materials and discuss suitable work before proceeding. This approach helps Ferndale property owners maintain attractive, functional wood decks with repairs focused on their actual needs.",
          ],
        },
        {
          heading: "Backyard Deck Construction Contractors",
          body: [
            "A backyard deck can make an underused outdoor area more inviting and functional. Whether you picture a space for family meals, casual seating, or outdoor entertaining, the layout should suit your yard and daily routine. We help plan and construct backyard decks with attention to access, dimensions, materials, and practical use. For Ferndale homeowners, the goal is an outdoor structure that feels like a natural extension of the property.",
          ],
        },
        {
          heading: "Deck Railing Installation and Replacement Company",
          body: [
            "Deck railings provide an important boundary around elevated outdoor spaces and contribute to the overall appearance of the structure. Loose, damaged, or outdated railings may need repair or replacement. We review the existing railing condition and discuss options that suit the deck's design and requirements. Whether your Ferndale property needs new railing sections or a broader update, our work focuses on secure installation and a consistent finished appearance.",
          ],
        },
        {
          heading: "Residential Deck Remodeling Services",
          body: [
            "An older deck may no longer match your home's appearance or the way your household uses outdoor space. Remodeling can update worn surfaces, improve the layout, or replace selected components without starting every project from scratch. We discuss the changes you want and assess the existing structure before outlining suitable improvements. Our residential deck remodeling services help Ferndale homeowners refresh outdoor areas while considering the condition and usefulness of existing materials.",
          ],
        },
        {
          heading: "Complete Deck Replacement Services Contractors",
          body: [
            "When a deck has widespread deterioration or its existing design no longer meets your needs, complete replacement may be worth considering. We evaluate the current structure, discuss your preferred layout, and plan the removal and construction work involved. A replacement project provides an opportunity to reconsider materials, access, and outdoor functionality. Joyner Construction LLC helps Ferndale property owners move toward a new deck suited to their property's requirements.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Deck Services in Ferndale, WA",
      description:
        "Explore these answers to common questions about planning, repairing, and replacing decks.",
      items: [
        {
          question: "When should I consider replacing my deck?",
          answer:
            "Consider replacement when widespread deterioration, recurring damage, or major structural concerns make isolated repairs impractical. An assessment can help determine whether rebuilding or replacement better suits your property.",
        },
        {
          question: "Can damaged deck boards be replaced individually?",
          answer:
            "Yes. Individual boards can often be replaced when the supporting structure remains in suitable condition. The affected area should be inspected to identify any additional damage before repairs begin.",
        },
        {
          question: "Do you build custom backyard decks?",
          answer:
            "Yes. Custom backyard decks can be planned around your available space, preferred layout, and intended activities. Discuss your ideas and property requirements to explore suitable construction options.",
        },
        {
          question: "Can you repair loose or damaged deck railings?",
          answer:
            "Deck railing problems can often be addressed through repair or replacement, depending on their condition and attachment points. An inspection helps determine the appropriate work for your structure.",
        },
        {
          question: "What should I consider before installing a new deck?",
          answer:
            "Think about the deck's intended use, available space, access, material preferences, and desired layout. These details help guide planning and support decisions that suit your property.",
        },
        {
          question: "Do older decks always need complete replacement?",
          answer:
            "No. Some older decks need only targeted repairs or selected component replacements. The overall condition of the boards, supports, connections, and railings helps determine the best approach.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to improve your outdoor space? Contact Joyner Construction LLC to discuss your Ferndale deck project and request an estimate for suitable construction or repair work.",
    },
  };
}
