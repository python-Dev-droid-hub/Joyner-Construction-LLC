import type { LandingPageContent } from "@/content/landing";

export function isLyndenHomeRenovation(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "home-renovation" && areaSlug === "lynden-wa";
}

export const lyndenHomeRenovationHero = {
  headline:
    "Your Trusted & Professional Full Home Renovation Services Contractor Lynden, WA",
  supporting:
    "Bring renewed comfort and lasting functionality to your residence with Joyner Construction LLC. Our home renovation services in Lynden, WA, help homeowners update traditional interiors, restore worn residential features, and create practical spaces that accommodate changing family needs while respecting each property's distinctive architectural style.",
};

export const lyndenHomeRenovationSeo = {
  title:
    "Enhance Your Property with Professional Home Renovation, Remodeling & Custom Improvement Services in Lynden, WA | Joyner Construction LLC",
  description:
    "Give your home a fresh look with expert renovation services in Lynden, WA. Joyner Construction LLC provides quality home remodeling, interior renovations, exterior upgrades, and custom home improvement solutions. From small updates to major renovation projects, we focus on reliable service and quality workmanship. Contact us today to discuss your project!",
};

/** Swap the shared template copy for the Lynden home renovation page. Images stay in place. */
export function applyLyndenHomeRenovationContent(
  content: LandingPageContent,
): LandingPageContent {
  const [update, restore, improve] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Residential Home Renovation Contractors or Company Lynden, WA",
      paragraphs: [
        "A home that once suited your family perfectly may need adjustments as routines, preferences, and space requirements change. Joyner Construction LLC provides residential home renovation services in Lynden, WA, helping property owners adapt their surroundings without sacrificing familiar comforts. Our home renovation contractors handle kitchen remodeling, bathroom renovation services, interior upgrades, and complete house renovation projects.",
        "We consider existing architectural details, room proportions, and daily household activities when discussing improvement options. Whether your plans involve refreshing traditional finishes, updating an aging bathroom, or renovating several connected living spaces, our construction team emphasizes suitable materials and organized project coordination. We create practical residential improvements that support modern convenience while complementing the home's established character.",
      ],
      visualCaption: "Tap a node to explore each stage of renovation work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Explain your family's priorities, preferred finishes, and desired residential changes.",
          scope:
            "We define renovation activities, design selections, and important project considerations.",
          layout:
            "We consider household routines when developing comfortable, accessible room arrangements.",
          craft:
            "Thoughtful construction details preserve visual harmony between old and new.",
          structure:
            "Existing framing and building conditions inform appropriate renovation construction decisions.",
          handoff:
            "Finished spaces are reviewed alongside relevant care and upkeep recommendations.",
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
            "Refresh the rooms your household uses most with customized home updates. We improve fixtures, surfaces, lighting arrangements, and finishes to create welcoming interiors that support changing routines and personal design preferences.",
          imageAlt: "Home updates in Lynden, WA",
        },
        {
          ...restore,
          label: "Restore",
          title: "Renovation Restorations",
          description:
            "Preserve meaningful residential details while addressing deterioration through carefully planned restoration services. Our team repairs worn features, replaces unsuitable materials, and refreshes aging interiors without overlooking the home's established architectural identity.",
          imageAlt: "Renovation restorations in Lynden, WA",
        },
        {
          ...improve,
          label: "Improve",
          title: "Space Improvements",
          description:
            "Create a more convenient household environment through targeted space improvements. We consider room connections, storage limitations, and practical interior modifications that help existing living areas accommodate different family activities comfortably.",
          imageAlt: "Space improvements in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Home renovation",
      heading:
        "Are You Looking for Joyner Construction LLC for Custom Home Improvement and Renovation Solutions Contractors Lynden, WA?",
      body: "Give your home the improvements it deserves. Joyner Construction LLC helps Lynden homeowners explore kitchen remodeling, bathroom upgrades, interior restoration, and personalized renovation solutions that support comfortable everyday family living.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Home Renovation",
      title:
        "Trusted and Reliable Interior or Exterior Home Renovation Services Contractors Lynden, WA",
      intro:
        "Preserving what makes a house feel like home is an important part of thoughtful renovation planning. Joyner Construction LLC offers interior and exterior home renovation services in Lynden, WA, for homeowners seeking improvements that respect existing residential character. We discuss architectural details, functional limitations, material preferences, and desired updates before organizing construction work. Our approach emphasizes practical changes, coordinated finishes, and durable improvements that support comfortable family living over time.",
      sections: [
        {
          heading: "Professional Home Renovation Contractors Lynden, WA",
          body: [
            "A successful home renovation should respond to the people who use the space rather than follow temporary design trends. Joyner Construction LLC provides professional home renovation services in Lynden, WA, tailored to household routines and residential conditions. Our contractors discuss existing frustrations, desired improvements, and suitable construction methods. From refreshing familiar rooms to completing substantial interior changes, we focus on functional details, coordinated materials, and workmanship that supports comfortable daily living.",
          ],
        },
        {
          heading: "Affordable Residential Renovation Services Lynden, WA",
          body: [
            "Budget conscious renovation planning involves understanding which improvements are essential and which can be completed later. Joyner Construction LLC offers residential renovation services in Lynden, WA, with options tailored to individual financial priorities. Our team discusses practical material choices, opportunities to retain serviceable features, and construction approaches suited to the project. We help homeowners consider meaningful updates that improve comfort and appearance without automatically expanding the scope of work unnecessarily.",
          ],
        },
        {
          heading: "Local House Renovation Company Lynden, WA",
          body: [
            "Homes with established architectural details often benefit from renovations that maintain continuity between original and updated spaces. Joyner Construction LLC provides house renovation services in Lynden, WA, with attention to existing materials, room proportions, and design character. Our contractors consider how new finishes and functional improvements will complement surrounding features. We develop renovation solutions for homeowners seeking modern convenience while preserving the distinctive appearance and comfortable atmosphere of their residential property.",
          ],
        },
        {
          heading: "Complete Home Renovation Specialists Lynden, WA",
          body: [
            "A complete residential renovation can bring separate rooms together through consistent finishes and better functional relationships. Joyner Construction LLC handles complete home renovation projects in Lynden, WA, for properties requiring improvements across multiple areas. We consider flooring continuity, lighting arrangements, updated fixtures, and appropriate layout modifications when developing construction plans. Our team coordinates renovation activities to create comfortable spaces that share a cohesive design while accommodating different household purposes.",
          ],
        },
        {
          heading: "Whole-House Renovation Contractors",
          body: [
            "Updating an entire house requires understanding how individual improvements affect the residence as a whole. Joyner Construction LLC provides whole-house renovation services in Lynden, WA, with coordinated construction approaches for multiple rooms and building features. We discuss priorities involving kitchens, bathrooms, living areas, and exterior elements before organizing project activities. Our contractors focus on compatible materials, practical sequencing, and consistent workmanship that helps create a unified residential environment throughout the property.",
          ],
        },
        {
          heading: "Kitchen and Bathroom Renovation Services Lynden, WA",
          body: [
            "Family kitchens and bathrooms should accommodate frequent activity while remaining comfortable and easy to maintain. Joyner Construction LLC provides kitchen and bathroom renovation services in Lynden, WA, with attention to functional layouts and appropriate materials. Our contractors work on cabinet improvements, countertops, flooring, bathroom fixtures, and interior finishes. We consider storage needs, lighting, ventilation, and everyday accessibility when planning spaces that support household routines and reflect personal preferences.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors Lynden, WA",
          body: [
            "Some of the most useful home improvements involve details that affect daily convenience rather than dramatic visual changes. Joyner Construction LLC provides home improvement services in Lynden, WA, for homeowners seeking practical residential upgrades. Our contractors address worn finishes, inefficient storage, outdated fixtures, and suitable room modifications. We consider how proposed improvements interact with existing spaces, helping develop construction solutions that enhance functionality while respecting the property's established appearance.",
          ],
        },
        {
          heading: "Professional Interior Renovation Company Lynden, WA",
          body: [
            "Interior renovations offer an opportunity to refresh living spaces while retaining the qualities that make a residence familiar. Joyner Construction LLC provides interior renovation services in Lynden, WA, with solutions for flooring, wall finishes, trim, fixtures, and room improvements. Our team considers natural light, interior proportions, and existing design details when discussing construction options. We focus on creating comfortable rooms that blend updated features with the home's original character.",
          ],
        },
        {
          heading: "Residential Exterior Renovation Services",
          body: [
            "Exterior improvements can refresh a home's appearance while addressing aging materials and maintenance concerns. Joyner Construction LLC offers residential exterior renovation services in Lynden, WA, for homeowners interested in siding improvements, trim updates, and suitable exterior restoration work. Our contractors consider existing architectural features, weather exposure, and material compatibility before recommending construction approaches. We focus on practical improvements that maintain visual consistency and support the property's ongoing exterior condition.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Home Renovation Services in Lynden, WA",
      description:
        "Explore helpful guidance for planning residential home renovations in Lynden.",
      items: [
        {
          question:
            "Can I Renovate a Traditional Home Without Losing Its Character?",
          answer:
            "Yes, thoughtful renovations can retain original trim, architectural proportions, and distinctive finishes. Selecting compatible materials and carefully planning modifications helps preserve familiar features while improving comfort and everyday residential functionality.",
        },
        {
          question:
            "What Is the Best Way to Plan a Multigenerational Home Renovation?",
          answer:
            "Consider privacy, accessible bathrooms, convenient bedrooms, and shared living arrangements. Evaluating each household member's needs helps identify practical layout changes that support comfortable living across different ages and mobility levels.",
        },
        {
          question:
            "Should I Replace All My Flooring During a Home Renovation?",
          answer:
            "Not necessarily. Existing flooring may remain suitable if its condition and appearance meet your needs. Replacement decisions should consider durability, maintenance, room transitions, moisture exposure, and the overall renovation budget.",
        },
        {
          question:
            "Can Bathroom Renovations Improve Accessibility for Older Family Members?",
          answer:
            "Bathroom renovations may incorporate wider access areas, suitable shower arrangements, grab bars, and slip resistant flooring. Specific improvements depend on existing dimensions, structural conditions, and the accessibility needs of intended users.",
        },
        {
          question: "How Can I Choose Materials for a Residential Renovation?",
          answer:
            "Compare durability, appearance, maintenance requirements, and compatibility with existing features. Consider how frequently each space is used and whether selected materials suit the home's environment, budget, and intended design style.",
        },
        {
          question: "Is It Possible to Renovate My Home in Separate Phases?",
          answer:
            "Yes, phased renovations can distribute expenses and reduce disruption. Planning related improvements together helps avoid repeated construction work, incompatible finishes, and unnecessary changes to previously completed areas during later project stages.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to discuss your Lynden renovation priorities and request a personalized project estimate.",
    },
  };
}
