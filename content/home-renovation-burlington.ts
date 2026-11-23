import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonHomeRenovation(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "home-renovation" && areaSlug === "burlington-wa";
}

export const burlingtonHomeRenovationHero = {
  headline:
    "Your Trusted & Professional Full Home Renovation Services Contractor Burlington, WA",
  supporting:
    "Make every room work better for your lifestyle with residential renovation services from Joyner Construction LLC. Serving Burlington, WA, our home improvement contractors modernize kitchens, refresh bathrooms, and upgrade interior and exterior features, helping homeowners achieve more functional spaces, updated appearances, and greater everyday convenience.",
};

export const burlingtonHomeRenovationSeo = {
  title:
    "Bring New Life to Your Property with Expert Home Renovation, Remodeling & Custom Improvement Contractors in Burlington, WA | Joyner Construction LLC",
  description:
    "Looking to improve your home in Burlington, WA? Joyner Construction LLC offers dependable home renovation and remodeling services, including interior upgrades, exterior improvements, and customized home improvement solutions. We help homeowners create comfortable, functional, and beautiful living spaces through quality craftsmanship and professional construction services. Contact us today to get started!",
};

/** Swap the shared template copy for the Burlington home renovation page. Images stay in place. */
export function applyBurlingtonHomeRenovationContent(
  content: LandingPageContent,
): LandingPageContent {
  const [update, restore, improve] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Residential Home Renovation Contractors or Company Burlington, WA",
      paragraphs: [
        "Your home's layout and features should make everyday tasks easier, not create unnecessary limitations. Joyner Construction LLC provides home renovation services in Burlington, WA, for property owners ready to improve comfort, efficiency, and interior appearance. Our professional home renovators handle kitchen renovation and remodeling services, bathroom upgrades, residential interior improvements, and complete house renovation projects.",
        "We help homeowners explore practical solutions for outdated finishes, limited storage, inefficient room arrangements, and aging residential features. Whether your plans involve updating individual rooms or coordinating improvements throughout the property, our contractors consider existing construction conditions and suitable material options. We emphasize functional design, careful installation, and organized renovation work that supports your household's evolving needs and preferences.",
      ],
      visualCaption: "Tap a node to explore each stage of renovation work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us which spaces need attention and what outcomes matter.",
          scope:
            "Renovation requirements clarify proposed upgrades, selected materials, and work priorities.",
          layout:
            "Practical room planning addresses storage, movement, and efficient daily use.",
          craft:
            "Quality installation techniques support clean details and coordinated finished surfaces.",
          structure:
            "Building assessments help identify considerations affecting proposed residential construction changes.",
          handoff:
            "We discuss completed improvements and provide relevant material maintenance guidance.",
        },
      },
    },
    services: {
      title: "Home Updates, Renovation Restorations, and Space Improvements",
      items: [
        {
          ...update,
          label: "Update",
          title: "Home Updates",
          description:
            "Replace dated residential features with practical home updates designed for modern living. Our contractors improve fixtures, finishes, flooring, and selected room elements to create attractive interiors with greater everyday convenience.",
          imageAlt: "Home updates in Burlington, WA",
        },
        {
          ...restore,
          label: "Restore",
          title: "Renovation Restorations",
          description:
            "Revitalize worn residential areas with renovation restoration services tailored to existing building conditions. We address damaged finishes, aging materials, and deteriorated features while developing improvements that maintain functional architectural elements.",
          imageAlt: "Renovation restorations in Burlington, WA",
        },
        {
          ...improve,
          label: "Improve",
          title: "Space Improvements",
          description:
            "Get more value from existing square footage through strategic space improvements. Our team explores efficient storage, better room organization, and appropriate layout changes that support comfortable household activities and movement.",
          imageAlt: "Space improvements in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Home renovation",
      heading:
        "Are You Looking for Joyner Construction LLC for Custom Home Improvement and Renovation Solutions Contractors Burlington, WA?",
      body: "Outdated rooms limiting your home's potential? Joyner Construction LLC provides Burlington homeowners with customized remodeling solutions, functional interior improvements, and residential renovation services designed to address specific property challenges effectively.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Home Renovation",
      title:
        "Trusted and Reliable Interior or Exterior Home Renovation Services Contractors Burlington, WA",
      intro:
        "Practical home renovations can improve the way rooms function while refreshing a property's overall appearance. Joyner Construction LLC provides interior and exterior home renovation services in Burlington, WA, for homeowners seeking customized improvements. Our contractors consider existing building conditions, household activities, material requirements, and design preferences before planning construction. From kitchen upgrades to broader residential transformations, we focus on organized project coordination, functional details, and improvements suited to everyday use.",
      sections: [
        {
          heading: "Professional Home Renovation Contractors Burlington, WA",
          body: [
            "Modernizing a residence often involves improving several small details that influence comfort and convenience. Joyner Construction LLC provides professional home renovation services in Burlington, WA, for homeowners seeking purposeful updates. Our contractors assess existing spaces, discuss desired changes, and identify suitable construction approaches. Whether replacing outdated finishes or completing extensive remodeling work, we emphasize functional improvements, compatible materials, and careful installation practices that support comfortable, practical living environments for homeowners.",
          ],
        },
        {
          heading: "Affordable Residential Renovation Services Burlington, WA",
          body: [
            "Home renovation costs can vary considerably depending on materials, existing conditions, and the extent of proposed changes. Joyner Construction LLC offers residential renovation services in Burlington, WA, with solutions developed around individual project budgets. We help homeowners compare improvement priorities and consider practical material choices before construction. Our approach focuses on useful updates, appropriate workmanship, and realistic project planning rather than recommending unnecessary changes to functional areas of the home.",
          ],
        },
        {
          heading: "Local House Renovation Company Burlington, WA",
          body: [
            "Residential properties often require updates as building materials age and household expectations change. Joyner Construction LLC provides house renovation services in Burlington, WA, with solutions tailored to individual property conditions. Our team discusses existing concerns, desired features, and potential construction limitations when developing renovation plans. We work on interior improvements and suitable exterior upgrades, focusing on practical results that enhance residential usability while maintaining consistency with the building's existing architectural design.",
          ],
        },
        {
          heading: "Complete Home Renovation Specialists Burlington, WA",
          body: [
            "A comprehensive home renovation can address outdated finishes, inefficient spaces, and inconsistent design features within one coordinated project. Joyner Construction LLC provides complete home renovation services in Burlington, WA, for homeowners planning extensive residential updates. Our contractors consider kitchen improvements, bathroom remodeling, flooring changes, and interior finishing work as connected elements. We focus on practical project coordination and consistent construction details that support attractive, functional spaces throughout the residence.",
          ],
        },
        {
          heading: "Whole-House Renovation Contractors",
          body: [
            "Whole-house renovation allows homeowners to reconsider how their property accommodates everyday living and future requirements. Joyner Construction LLC handles whole-house renovation projects in Burlington, WA, involving coordinated improvements across multiple residential areas. We discuss construction priorities, material selections, and the relationships between existing rooms before organizing work. Our contractors focus on improving interior functionality, updating aging features, and maintaining a consistent appearance throughout the renovated home while considering existing conditions.",
          ],
        },
        {
          heading: "Kitchen and Bathroom Renovation Services Burlington, WA",
          body: [
            "Busy kitchens and bathrooms benefit from practical storage, suitable fixtures, and finishes designed for regular use. Joyner Construction LLC provides kitchen and bathroom renovation services in Burlington, WA, with customized remodeling solutions. Our contractors address cabinets, countertops, flooring, lighting, and bathroom features according to project requirements. We consider efficient layouts, ventilation needs, and appropriate material selection when developing updated spaces that support convenient household routines and comfortable daily use.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors Burlington, WA",
          body: [
            "Residential improvements should solve existing problems while complementing the rest of the property. Joyner Construction LLC provides home improvement services in Burlington, WA, for homeowners seeking updated fixtures, refreshed surfaces, and more functional room arrangements. Our contractors consider the condition of existing materials and the intended purpose of each improvement. We emphasize practical construction decisions and coordinated finishing details that help create comfortable spaces suited to everyday household activities.",
          ],
        },
        {
          heading: "Professional Interior Renovation Company Burlington, WA",
          body: [
            "Interior renovation can make an existing home feel more organized, attractive, and comfortable without increasing its overall size. Joyner Construction LLC provides interior renovation services in Burlington, WA, with options for updating floors, walls, fixtures, trim, and selected room configurations. Our team considers lighting, storage, material durability, and visual consistency when discussing improvements. We focus on developing refreshed residential interiors that accommodate daily activities and reflect homeowners' individual preferences.",
          ],
        },
        {
          heading: "Residential Exterior Renovation Services",
          body: [
            "Exterior renovation projects can address aging finishes while improving the overall appearance of residential properties. Joyner Construction LLC offers residential exterior renovation services in Burlington, WA, with options based on existing building conditions. Our contractors discuss siding improvements, trim replacement, surface updates, and suitable restoration work. We consider moisture exposure, material compatibility, and architectural details when planning construction that helps maintain attractive exteriors and supports ongoing residential property maintenance needs.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Home Renovation Services in Burlington, WA",
      description:
        "Get answers about residential remodeling and home improvement in Burlington.",
      items: [
        {
          question: "What Areas of My Home Can Be Included in Renovations?",
          answer:
            "Residential renovations may involve kitchens, bathrooms, bedrooms, living rooms, flooring, and exterior features. The project scope depends on your priorities, existing property conditions, available budget, and desired functional improvements overall.",
        },
        {
          question:
            "Can Renovating My Kitchen Improve Storage and Organization?",
          answer:
            "Yes, kitchen renovations can incorporate improved cabinet arrangements, additional drawers, pantry storage, and more efficient work areas. Suitable improvements depend on available space, existing utilities, and your household's daily requirements.",
        },
        {
          question: "How Do I Know Whether My Bathroom Needs Renovation?",
          answer:
            "Common signs include deteriorating surfaces, persistent moisture problems, outdated fixtures, inadequate storage, and inconvenient layouts. Evaluating these issues helps determine whether targeted repairs or a broader renovation would be appropriate.",
        },
        {
          question:
            "Can I Make My Living Room More Functional Without Expanding It?",
          answer:
            "Yes, improved furniture arrangements, built-in storage, lighting updates, and appropriate layout modifications can enhance usability. Renovation options depend on existing room dimensions, structural conditions, and your intended household activities and needs.",
        },
        {
          question:
            "What Can Affect the Final Cost of a Whole-House Renovation?",
          answer:
            "Costs depend on property size, material selections, structural modifications, labor requirements, and unforeseen building conditions. Changes during construction and specialized installations can also influence the final renovation budget and project expenses.",
        },
        {
          question:
            "What Should I Discuss With a Contractor Before Renovation Begins?",
          answer:
            "Discuss project goals, expected costs, material preferences, anticipated timelines, and potential disruptions. Clarifying the proposed scope and communication process helps establish realistic expectations before residential renovation work begins on your property.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC for Burlington home renovation services and request an estimate for your project.",
    },
  };
}
