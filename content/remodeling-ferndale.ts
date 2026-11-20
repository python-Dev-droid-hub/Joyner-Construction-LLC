import type { LandingPageContent } from "@/content/landing";

export function isFerndaleRemodeling(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "remodeling" && areaSlug === "ferndale-wa";
}

export const ferndaleRemodelingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Remodeling Services Contractor Ferndale, WA",
  supporting:
    "Give your property a fresh direction with remodeling solutions designed around its purpose and condition. From improving family living spaces to updating commercial interiors, thoughtful renovations help Ferndale, WA, property owners create more functional, comfortable, and appealing environments.",
};

export const ferndaleRemodelingSeo = {
  title: "Remodeling Services in Ferndale, WA",
  description:
    "Joyner Construction LLC provides residential and commercial remodeling services in Ferndale, WA—kitchen, bathroom, interior, and whole-home renovations.",
};

/** Swap the shared template copy for the Ferndale remodeling page. Images stay in place. */
export function applyFerndaleRemodelingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, kitchenBath, wholeHome] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Kitchen or Bathroom Remodeling and Renovation Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "A well-designed renovation can make your property more enjoyable while addressing practical concerns that develop over time. Joyner Construction LLC provides residential and commercial remodeling solutions in Ferndale, WA. Our kitchen remodeling services focus on improving work areas, cabinet arrangements, storage, and overall usability. Homeowners considering kitchen renovation contractors can explore upgrades that complement their cooking routines and design preferences.",
        "We also provide guidance for bathroom remodeling services, including updated fixtures, improved layouts, and attractive finishes. Whether you are planning kitchen upgrades or custom bathroom remodeling services, our team approaches each project with attention to your property's existing features, renovation priorities, and desired results.",
      ],
      visualCaption: "Tap a node to explore each stage of remodeling work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your property and discuss your renovation possibilities.",
          scope:
            "Clear project boundaries help establish priorities, expectations, and improvement requirements.",
          layout:
            "We organize room arrangements to create better movement and usable spaces.",
          craft:
            "Detailed workmanship helps deliver attractive finishes and practical interior improvements.",
          structure:
            "Existing building conditions guide suitable renovation decisions and construction planning.",
          handoff:
            "We communicate project progress and completion details throughout the remodeling process.",
        },
      },
    },
    services: {
      title:
        "Interior Remodeling, Kitchen & Bath Remodels, and Whole-Home Remodeling",
      items: [
        {
          ...interior,
          label: "Interior",
          title: "Interior Remodeling",
          description:
            "Make better use of your existing interior with updates that address outdated finishes, inefficient arrangements, and changing household requirements. Interior remodeling can refresh individual rooms while maintaining a consistent appearance throughout your Ferndale property.",
          imageAlt: "Interior remodeling in Ferndale, WA",
        },
        {
          ...kitchenBath,
          label: "Kitchen/Bath",
          title: "Kitchen & Bath Remodels",
          description:
            "Improve the rooms that support your daily routines through carefully considered kitchen and bathroom renovations. Updated countertops, storage arrangements, fixtures, lighting, and finishes can help make these essential spaces more comfortable and convenient.",
          imageAlt: "Kitchen and bathroom remodeling in Ferndale, WA",
        },
        {
          ...wholeHome,
          label: "Whole Home",
          title: "Whole-Home Remodeling",
          description:
            "Give your entire home a more coordinated appearance through renovations planned around its existing layout and future requirements. Whole-home improvements can connect separate rooms, modernize interior finishes, and create a more functional living environment.",
          imageAlt: "Whole-home remodeling in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Remodeling services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Old Home or Offices Remodeling Contractors Installation Ferndale, WA?",
      body: "Is your home or office ready for meaningful improvements? Discuss your renovation plans with our team, explore suitable remodeling options, and identify the right direction for your property.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Remodeling Services",
      title:
        "Certified or Trusted Reliable Building Remodeling Contractors Services Agency Ferndale, WA",
      intro:
        "Remodeling an existing property requires decisions that account for its current condition, available space, and intended use. Joyner Construction LLC offers residential and commercial building remodeling solutions in Ferndale, WA. Whether your plans involve refreshing interior rooms, redesigning a kitchen, or improving an office environment, careful coordination helps keep the project focused. Explore renovation possibilities that match your priorities and create spaces that serve your property's changing needs.",
      sections: [
        {
          heading: "Professional Home Remodeling Contractors Ferndale, WA",
          body: [
            "Updating a home involves balancing appearance, comfort, and the practical demands of everyday living. Professional home remodeling contractors can help homeowners identify improvements that make better use of existing rooms. Whether your Ferndale property needs refreshed interior finishes, improved storage, or a redesigned living area, begin by defining what currently feels outdated or inconvenient. A clear renovation direction makes it easier to evaluate design choices, material options, and project requirements before construction begins.",
          ],
        },
        {
          heading: "Affordable Residential Remodeling Services Ferndale, WA",
          body: [
            "Making meaningful home improvements does not always require changing everything at once. Affordable residential remodeling services can begin with the rooms or features that need the most attention. Homeowners in Ferndale can establish renovation priorities by considering available budgets, material preferences, and the condition of existing spaces. Comparing suitable improvement options also helps prevent unnecessary expenses. A clearly outlined project scope gives you a better understanding of the work involved before committing to renovation plans.",
          ],
        },
        {
          heading: "Local Home Renovation Company Ferndale, WA",
          body: [
            "Choosing a local home renovation company gives property owners an opportunity to discuss their improvement goals with a team serving the Ferndale area. Every home presents different considerations, including room dimensions, existing finishes, and structural conditions. Some homeowners may want to modernize older interiors, while others need more practical layouts for changing household needs. Understanding these differences helps establish a renovation plan that respects the property's existing character while introducing useful improvements.",
          ],
        },
        {
          heading: "Kitchen Remodeling Contractors Near Me Ferndale, WA",
          body: [
            "A kitchen should provide enough room for preparing meals, organizing supplies, and moving comfortably between work areas. When searching for kitchen remodeling contractors near me in Ferndale, WA, consider the improvements that would make the biggest difference to your routine. Updated cabinetry, additional storage, improved countertops, and better appliance placement can contribute to a more usable environment. Reviewing these priorities before selecting materials helps create a kitchen renovation plan with a clear purpose.",
          ],
        },
        {
          heading: "Bathroom Renovation Specialists Ferndale, WA",
          body: [
            "Bathroom improvements can address several concerns, from limited storage to outdated fixtures and inefficient layouts. Bathroom renovation specialists can help homeowners explore ways to make these spaces more comfortable and easier to maintain. Consider whether your existing bathroom needs a different vanity arrangement, updated lighting, improved storage, or refreshed surfaces. Property owners in Ferndale can establish a practical renovation direction by identifying daily inconveniences and selecting improvements that support their household's needs.",
          ],
        },
        {
          heading: "Whole-House Remodeling Company Ferndale, WA",
          body: [
            "A property-wide renovation offers an opportunity to reconsider how different rooms connect and function together. Working with a whole-house remodeling company can help homeowners organize improvements across multiple areas instead of treating every room as a separate project. Flooring, wall finishes, lighting, and room arrangements should support a consistent design direction. Whether you are updating an older home or adapting your space for new requirements, a coordinated renovation plan helps maintain continuity.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors",
          body: [
            "Home improvement decisions can affect how comfortably you use your property for years. Experienced home improvement contractors should understand the importance of evaluating existing conditions, discussing design preferences, and defining project responsibilities. Homeowners can prepare by identifying problem areas, collecting design ideas, and establishing realistic expectations. These early discussions help clarify the renovation process and make it easier to consider suitable materials, construction requirements, and improvements that complement the home's existing features.",
          ],
        },
        {
          heading: "Complete Home Renovation Services Ferndale, WA",
          body: [
            "Some properties require several improvements before their interiors feel comfortable and cohesive again. Complete home renovation services can bring different updates into one organized improvement plan. Ferndale homeowners may consider refreshing living areas, replacing outdated finishes, improving room functionality, or renovating kitchens and bathrooms. Evaluating each space individually helps determine which changes deserve priority. Connecting those decisions through a consistent design approach can produce a more balanced result throughout the property.",
          ],
        },
        {
          heading: "Licensed and Insured Remodeling Contractors",
          body: [
            "Before beginning a renovation, property owners should verify the contractor's licensing status, insurance coverage, and qualifications applicable to the proposed work. Licensed and insured remodeling contractors should be able to explain their responsibilities and provide relevant documentation when requested. Ask questions about project supervision, subcontractors, written agreements, and the work included in your estimate. Taking time to review these details helps Ferndale homeowners make informed hiring decisions and understand the arrangements before construction starts.",
          ],
        },
        {
          heading: "Custom Residential Remodeling Company Ferndale, WA",
          body: [
            "Your home's layout and design preferences should influence every remodeling decision. A custom residential remodeling company can help homeowners explore improvements that respond to their property's dimensions, existing features, and household routines. You might want a more open living area, additional kitchen storage, or a bathroom that makes better use of available space. Defining these preferences early creates a stronger foundation for selecting finishes, discussing design possibilities, and organizing your renovation project.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Remodeling Services in Ferndale, WA",
      description:
        "Explore answers to common questions about home and commercial remodeling projects.",
      items: [
        {
          question: "What Residential Remodeling Projects Can I Plan in Ferndale?",
          answer:
            "Homeowners can explore kitchen renovations, bathroom upgrades, interior improvements, and complete home remodeling. Suitable options depend on property conditions, project goals, and available budgets.",
        },
        {
          question: "Can Remodeling Improve My Existing Home's Functionality?",
          answer:
            "Yes. Updating room arrangements, storage, lighting, and interior finishes can improve everyday convenience. The best improvements depend on your household's specific requirements.",
        },
        {
          question: "What Should I Consider Before Starting Kitchen Renovations?",
          answer:
            "Evaluate cabinet storage, countertop space, appliance placement, lighting, and movement between work areas. These considerations help establish practical kitchen remodeling priorities.",
        },
        {
          question: "Do Commercial Properties Also Require Interior Remodeling?",
          answer:
            "Commercial renovations can improve workspace organization, interior appearance, and employee convenience. Project planning should reflect the building's intended use and operational requirements.",
        },
        {
          question: "How Can I Prepare for a Bathroom Renovation?",
          answer:
            "Identify outdated fixtures, storage limitations, lighting concerns, and layout problems. Establishing priorities beforehand helps guide material selections and renovation decisions.",
        },
        {
          question: "How Do I Select a Remodeling Contractor in Ferndale?",
          answer:
            "Review relevant experience, licensing, insurance documentation, written estimates, and project responsibilities. Clear communication helps you evaluate contractors before choosing a renovation team.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning a property upgrade? Contact our team to discuss your renovation goals and request an estimate today.",
    },
  };
}
