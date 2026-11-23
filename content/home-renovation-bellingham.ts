import type { LandingPageContent } from "@/content/landing";

export function isBellinghamHomeRenovation(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "home-renovation" && areaSlug === "bellingham-wa";
}

export const bellinghamHomeRenovationHero = {
  headline:
    "Your Trusted & Professional Full Home Renovation Services Contractor Bellingham, WA",
  supporting:
    "Reimagine your home's potential with Joyner Construction LLC, providing residential renovation services in Bellingham, WA. From modern kitchen transformations to complete interior upgrades, our home renovation contractors help homeowners refresh aging spaces, improve room functionality, and create inviting living environments through personalized construction solutions and detailed workmanship.",
};

export const bellinghamHomeRenovationSeo = {
  title:
    "Transform Your Home with Expert Renovation, Remodeling & Improvement Contractors in Bellingham, WA | Joyner Construction LLC",
  description:
    "Ready to upgrade your home in Bellingham, WA? Joyner Construction LLC delivers dependable home renovation and remodeling services, including interior upgrades, exterior improvements, and customized home transformation solutions. Bring your renovation ideas to life with skilled contractors and quality workmanship. Get in touch today to start your project!",
};

/** Swap the shared template copy for the Bellingham home renovation page. Images stay in place. */
export function applyBellinghamHomeRenovationContent(
  content: LandingPageContent,
): LandingPageContent {
  const [update, restore, improve] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Residential Home Renovation Contractors or Company Bellingham, WA",
      paragraphs: [
        "An outdated floor plan, worn finishes, or inefficient rooms can make daily life more complicated than necessary. Joyner Construction LLC offers home renovation services in Bellingham, WA, designed to address these challenges through purposeful residential improvements. Our home renovation contractors handle kitchen renovation and remodeling services, bathroom upgrades, interior home renovation, and complete house renovation projects.",
        "Whether you want to modernize an older residence, improve storage, or introduce a more open living arrangement, we consider existing building conditions and your preferred design direction. Our approach brings together material selection, construction planning, and detailed finishing work. We develop practical home improvements that enhance residential comfort while maintaining the architectural character of your property.",
      ],
      visualCaption: "Tap a node to explore each stage of renovation work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Describe your home's current challenges and the changes you envision.",
          scope:
            "Project priorities establish renovation boundaries, material requirements, and scheduling considerations.",
          layout:
            "Room configurations are evaluated for movement, accessibility, and everyday convenience.",
          craft:
            "Detailed finishing techniques create attractive surfaces and consistent interior transitions.",
          structure:
            "Existing building components guide appropriate renovation methods and modification decisions.",
          handoff:
            "We review finished improvements and discuss recommended care for materials.",
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
            "Modernize familiar rooms with carefully selected residential updates. Our team refreshes flooring, fixtures, finishes, and interior features to improve visual appeal while making existing spaces more comfortable for everyday activities.",
          imageAlt: "Home updates in Bellingham, WA",
        },
        {
          ...restore,
          label: "Restore",
          title: "Renovation Restorations",
          description:
            "Bring aging residential interiors back to life through focused restoration work. We address deteriorated finishes, worn architectural details, and outdated features while retaining suitable elements that contribute to your home's character.",
          imageAlt: "Renovation restorations in Bellingham, WA",
        },
        {
          ...improve,
          label: "Improve",
          title: "Space Improvements",
          description:
            "Improve how your rooms connect and function with strategic space improvements. Our contractors explore practical layout adjustments, storage enhancements, and interior modifications that make existing square footage more useful daily.",
          imageAlt: "Space improvements in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Home renovation",
      heading:
        "Are You Looking for Joyner Construction LLC for Custom Home Improvement and Renovation Solutions Contractors Bellingham, WA?",
      body: "Planning a kitchen transformation or complete home makeover? Joyner Construction LLC offers Bellingham homeowners tailored renovation solutions, thoughtful construction planning, and practical upgrades designed around individual lifestyles and property needs.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Home Renovation",
      title:
        "Trusted and Reliable Interior or Exterior Home Renovation Services Contractors Bellingham, WA",
      intro:
        "Older finishes, changing household needs, and inefficient layouts can create opportunities for meaningful residential improvements. Joyner Construction LLC provides interior and exterior home renovation services in Bellingham, WA, with solutions tailored to existing property conditions. We consider design compatibility, structural requirements, material durability, and everyday functionality when discussing renovations. Our contractors focus on coordinated construction work and practical improvements that enhance residential comfort while respecting each home's individual architectural characteristics.",
      sections: [
        {
          heading: "Professional Home Renovation Contractors Bellingham, WA",
          body: [
            "Renovating a residence involves balancing your preferred appearance with the practical realities of existing construction. Joyner Construction LLC offers professional home renovation services in Bellingham, WA, for homeowners seeking carefully planned improvements. Our contractors assess room conditions, discuss functional concerns, and consider appropriate construction approaches before beginning work. Whether updating a dated interior or coordinating several improvements, we emphasize compatible materials, detailed finishes, and residential renovations suited to your property's layout and needs.",
          ],
        },
        {
          heading: "Affordable Residential Renovation Services Bellingham, WA",
          body: [
            "A thoughtful renovation budget starts with identifying which improvements will make the greatest difference to your household. Joyner Construction LLC provides residential renovation services in Bellingham, WA, with options shaped around project priorities and financial considerations. We discuss material alternatives, existing features worth preserving, and practical construction choices. Our approach helps homeowners focus on useful upgrades, from refreshed finishes to functional room improvements, without automatically replacing elements that remain serviceable.",
          ],
        },
        {
          heading: "Local House Renovation Company Bellingham, WA",
          body: [
            "Bellingham homes vary in architectural character, interior configuration, and construction age. Joyner Construction LLC provides house renovation services that respond to these differences rather than relying on identical remodeling solutions. Our team considers existing building features, desired updates, and appropriate material choices when discussing each project. Whether your residence needs targeted interior improvements or broader renovations, we develop construction approaches intended to preserve useful characteristics while introducing greater comfort and everyday functionality.",
          ],
        },
        {
          heading: "Complete Home Renovation Specialists Bellingham, WA",
          body: [
            "Transforming multiple areas of a residence requires coordination to maintain a consistent design throughout the property. Joyner Construction LLC offers complete home renovation services in Bellingham, WA, covering kitchens, bathrooms, living areas, and other interior spaces. Our contractors consider how finishes, room arrangements, and building modifications work together. We focus on organizing renovation activities and selecting compatible construction details that support a cohesive appearance and practical use across the finished home.",
          ],
        },
        {
          heading: "Whole-House Renovation Contractors",
          body: [
            "Whole-house renovation provides an opportunity to address several longstanding property concerns within one coordinated improvement plan. Joyner Construction LLC assists Bellingham homeowners with extensive renovation projects involving interior updates, room modifications, and selected exterior improvements. We examine how proposed changes affect neighboring spaces, material transitions, and household activities. Our contractors prioritize practical sequencing and durable construction details while helping create a more consistent, comfortable living environment throughout the residence.",
          ],
        },
        {
          heading: "Kitchen and Bathroom Renovation Services Bellingham, WA",
          body: [
            "Kitchen and bathroom renovations should make essential household routines easier while improving the appearance of frequently used spaces. Joyner Construction LLC offers kitchen and bathroom remodeling services in Bellingham, WA, with attention to storage, fixture placement, flooring, and surface durability. Our contractors work on cabinet updates, countertop improvements, bathroom fixtures, and interior finishes. We consider moisture management and practical room layouts to develop attractive spaces suited to daily residential use.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors Bellingham, WA",
          body: [
            "Home improvement projects often begin with a specific frustration, such as insufficient storage, outdated materials, or rooms that no longer function efficiently. Joyner Construction LLC helps Bellingham homeowners address these concerns through customized renovation services. Our contractors discuss the intended outcome before selecting suitable construction approaches. From small interior updates to connected improvements across several rooms, we focus on thoughtful material choices, dependable workmanship, and functional results for everyday living.",
          ],
        },
        {
          heading: "Professional Interior Renovation Company Bellingham, WA",
          body: [
            "The right interior improvements can change how a home feels without expanding its physical footprint. Joyner Construction LLC provides interior renovation services in Bellingham, WA, for homeowners interested in updated surfaces, better room flow, and refreshed design details. We work with flooring, trim, wall finishes, fixtures, and appropriate layout adjustments. Our team considers existing architectural features and personal preferences to develop comfortable interiors with a coordinated appearance and improved functionality.",
          ],
        },
        {
          heading: "Residential Exterior Renovation Services",
          body: [
            "Exterior renovations help maintain a home's appearance while addressing materials exposed to changing weather conditions. Joyner Construction LLC provides residential exterior renovation services in Bellingham, WA, with improvements selected around property conditions and architectural requirements. Our contractors discuss siding updates, trim repairs, exterior finishes, and other suitable construction work. We consider moisture exposure, material compatibility, and existing building details when developing practical improvements that support attractive and functional residential exteriors.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Home Renovation Services in Bellingham, WA",
      description:
        "Find practical answers to common residential renovation questions in Bellingham.",
      items: [
        {
          question:
            "Can I Modernize an Older Home Without Changing Its Original Character?",
          answer:
            "Yes, renovations can preserve distinctive architectural details while updating functional features. Careful material selection, compatible finishes, and thoughtful design decisions help maintain the home's character throughout the improvement process.",
        },
        {
          question: "Which Home Renovations Should I Prioritize First?",
          answer:
            "Start with safety concerns, moisture problems, and essential repairs before considering cosmetic updates. Kitchen functionality, bathroom condition, storage needs, and daily comfort can help guide subsequent renovation priorities and decisions.",
        },
        {
          question: "Can Home Renovations Improve Energy Efficiency?",
          answer:
            "Certain renovations may improve energy efficiency through insulation upgrades, better windows, air sealing, and efficient fixtures. Actual improvements depend on existing conditions, selected materials, installation quality, and the project's scope.",
        },
        {
          question:
            "Do I Need to Move Out During a Whole-House Renovation?",
          answer:
            "Temporary relocation may be helpful when renovations affect essential utilities, multiple rooms, or safe access. Smaller projects might allow continued occupancy depending on construction activities, dust control, and household needs overall.",
        },
        {
          question:
            "Can Kitchen Remodeling Include Changes to the Existing Layout?",
          answer:
            "Kitchen remodeling may include cabinet relocation, improved storage, revised work areas, or structural changes when feasible. Existing plumbing, electrical systems, and building conditions influence which layout modifications are practical and permitted.",
        },
        {
          question: "How Can I Keep My Home Renovation Within Budget?",
          answer:
            "Establish priorities, compare material options, and include contingency funds for unexpected conditions. Reviewing the proposed work and discussing potential changes early can help maintain better control over overall renovation expenses and decisions.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Discuss your Bellingham renovation goals with Joyner Construction LLC and request a customized home improvement estimate.",
    },
  };
}
