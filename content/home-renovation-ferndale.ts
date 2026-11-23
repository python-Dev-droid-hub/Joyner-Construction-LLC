import type { LandingPageContent } from "@/content/landing";

export function isFerndaleHomeRenovation(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "home-renovation" && areaSlug === "ferndale-wa";
}

export const ferndaleHomeRenovationHero = {
  headline:
    "Your Trusted & Professional Full Home Renovation Services Contractor Ferndale, WA",
  supporting:
    "Give your home a fresh start with customized renovation solutions from Joyner Construction LLC. As a trusted home renovation contractor in Ferndale, WA, we transform outdated interiors, improve everyday functionality, and upgrade residential spaces through thoughtful planning, quality materials, and dependable craftsmanship.",
};

export const ferndaleHomeRenovationSeo = {
  title: "Home Renovation Services in Ferndale, WA",
  description:
    "Joyner Construction LLC provides full home renovation, kitchen and bathroom upgrades, and residential improvement services in Ferndale, WA.",
};

/** Swap the shared template copy for the Ferndale home renovation page. Images stay in place. */
export function applyFerndaleHomeRenovationContent(
  content: LandingPageContent,
): LandingPageContent {
  const [update, restore, improve] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Residential Home Renovation Contractors or Company Ferndale, WA",
      paragraphs: [
        "Your home should reflect your lifestyle while providing the comfort and functionality your family deserves. Joyner Construction LLC delivers comprehensive home renovation services in Ferndale, WA, helping homeowners improve outdated spaces and modernize existing interiors. Our residential home renovation solutions include kitchen renovation and remodeling services, bathroom upgrades, interior improvements, and complete house renovation projects.",
        "Whether you want to refresh a single room or transform multiple living areas, our home renovation contractors consider your preferences, property conditions, and project requirements. From updating finishes to improving room layouts, we focus on practical design decisions and careful construction. Our goal is to create welcoming residential environments that support comfortable living and lasting property improvements.",
      ],
      visualCaption: "Tap a node to explore each stage of renovation work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your renovation ideas, priorities, concerns, and preferred design features.",
          scope:
            "We clarify project requirements, material selections, and anticipated construction activities.",
          layout:
            "We develop practical floor plans that improve comfort and circulation.",
          craft:
            "Careful workmanship transforms existing spaces through precise construction and finishing.",
          structure:
            "We assess structural considerations before planning significant residential building modifications.",
          handoff:
            "Completed improvements receive a walkthrough covering finishes and maintenance considerations.",
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
            "Refresh your living environment with thoughtfully selected home updates. We improve outdated fixtures, interior finishes, and essential room features to create comfortable spaces that complement your lifestyle and personal preferences.",
          imageAlt: "Home updates in Ferndale, WA",
        },
        {
          ...restore,
          label: "Restore",
          title: "Renovation Restorations",
          description:
            "Restore the character and functionality of aging residential spaces through detailed renovation work. Our contractors address worn surfaces, deteriorated features, and outdated materials while preserving suitable architectural elements and finishes.",
          imageAlt: "Renovation restorations in Ferndale, WA",
        },
        {
          ...improve,
          label: "Improve",
          title: "Space Improvements",
          description:
            "Make existing rooms more practical with customized space improvements. We enhance interior layouts, improve storage opportunities, and develop functional living arrangements that accommodate changing household needs and daily activities comfortably.",
          imageAlt: "Space improvements in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Home renovation",
      heading:
        "Are You Looking for Joyner Construction LLC for Custom Home Improvement and Renovation Solutions Contractors Ferndale, WA?",
      body: "Ready to transform your living space? Contact Joyner Construction LLC for customized home renovation services in Ferndale, WA. Discuss your remodeling ideas and explore practical improvements tailored to your property.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Home Renovation",
      title:
        "Trusted and Reliable Interior or Exterior Home Renovation Services Contractors Ferndale, WA",
      intro:
        "Every successful renovation begins with understanding what your home needs and how you want to use it. Joyner Construction LLC provides interior and exterior home renovation services in Ferndale, WA, helping homeowners create attractive, functional residential spaces. Our contractors consider existing building conditions, design preferences, material choices, and construction requirements. From individual room improvements to extensive property transformations, we emphasize organized planning, dependable workmanship, and lasting residential upgrades throughout each project.",
      sections: [
        {
          heading: "Professional Home Renovation Contractors Ferndale, WA",
          body: [
            "Renovating an existing home requires careful coordination between design goals and practical construction requirements. Joyner Construction LLC provides professional home renovation contractors in Ferndale, WA, for homeowners seeking functional property improvements. We evaluate existing room conditions, discuss desired changes, and consider suitable materials before beginning construction. Whether updating interior finishes or improving multiple rooms, our team focuses on detailed workmanship, efficient project organization, and renovations that complement your home's character.",
          ],
        },
        {
          heading: "Affordable Residential Renovation Services Ferndale, WA",
          body: [
            "Improving your home does not always require replacing every existing feature. Joyner Construction LLC offers affordable residential renovation services in Ferndale, WA, with solutions shaped around individual priorities and available budgets. Our contractors help homeowners identify practical updates, suitable material alternatives, and improvements that deliver meaningful everyday benefits. From refreshing living spaces to modernizing essential rooms, we emphasize thoughtful planning and quality construction without encouraging unnecessary changes to functional residential features.",
          ],
        },
        {
          heading: "Local House Renovation Company Ferndale, WA",
          body: [
            "Every house presents different opportunities for improvement based on its age, layout, and existing condition. Joyner Construction LLC serves Ferndale, WA, homeowners with customized house renovation services designed around specific property requirements. Our team discusses renovation objectives, evaluates existing spaces, and develops practical approaches to updating residential interiors and exteriors. We focus on improving comfort, appearance, and functionality while maintaining architectural consistency and considering the property's original building characteristics throughout construction.",
          ],
        },
        {
          heading: "Complete Home Renovation Specialists Ferndale, WA",
          body: [
            "A complete home renovation offers an opportunity to rethink how different rooms work together. Joyner Construction LLC provides comprehensive renovation solutions in Ferndale, WA, for homeowners planning extensive residential improvements. Our contractors coordinate interior updates, material selections, room modifications, and finishing details to create cohesive results. We consider how changes to kitchens, bathrooms, bedrooms, and shared spaces affect overall functionality, helping develop comfortable homes with consistent design features and practical layouts.",
          ],
        },
        {
          heading: "Whole-House Renovation Contractors",
          body: [
            "When several areas of your home need attention, a coordinated renovation approach can simplify planning and improve design consistency. Joyner Construction LLC handles whole-house renovation projects in Ferndale, WA, with attention to existing conditions and household priorities. Our team considers room connections, flooring transitions, interior finishes, and functional improvements across multiple spaces. We organize construction activities around your renovation objectives while focusing on durable materials, cohesive appearance, and comfortable living environments.",
          ],
        },
        {
          heading: "Kitchen and Bathroom Renovation Services Ferndale, WA",
          body: [
            "Kitchens and bathrooms experience frequent use, making practical layouts and durable finishes especially important. Joyner Construction LLC provides kitchen and bathroom renovation services in Ferndale, WA, for homeowners seeking improved functionality and updated appearances. Our contractors handle cabinet improvements, countertop replacements, flooring updates, fixture installations, and interior remodeling work. We consider storage, lighting, accessibility, and moisture resistant materials when developing renovation solutions that support convenient daily routines and comfortable residential spaces.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors Ferndale, WA",
          body: [
            "Thoughtful home improvements can make everyday activities easier while refreshing the appearance of existing rooms. Joyner Construction LLC provides home improvement services in Ferndale, WA, tailored to residential properties with different renovation needs. Our contractors address outdated features, inefficient layouts, worn materials, and practical maintenance concerns. Whether your project involves targeted upgrades or several connected improvements, we emphasize appropriate construction methods, careful finishing, and solutions designed around your household's preferences.",
          ],
        },
        {
          heading: "Professional Interior Renovation Company Ferndale, WA",
          body: [
            "Interior renovation can transform the atmosphere of your home without changing its overall footprint. Joyner Construction LLC offers interior renovation services in Ferndale, WA, focusing on comfortable layouts, updated finishes, and practical room improvements. Our team works with flooring, wall finishes, trim, interior fixtures, and selected layout modifications. We consider how lighting, materials, and room arrangements influence daily use, creating refreshed interiors that reflect your preferred style and functional requirements.",
          ],
        },
        {
          heading: "Residential Exterior Renovation Services",
          body: [
            "Your home's exterior contributes to its appearance, weather protection, and overall condition. Joyner Construction LLC provides residential exterior renovation services in Ferndale, WA, for homeowners seeking practical property improvements. Our contractors address suitable exterior finishes, trim updates, siding related improvements, and other renovation needs based on existing conditions. We consider material durability, architectural compatibility, and local weather exposure when planning work that helps maintain attractive, functional residential exteriors over time.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Home Renovation Services in Ferndale, WA",
      description:
        "Explore helpful answers to common home renovation questions in Ferndale.",
      items: [
        {
          question: "What Services Are Included in a Full Home Renovation?",
          answer:
            "Full home renovations may include kitchen remodeling, bathroom upgrades, flooring replacement, interior finishes, layout modifications, and exterior improvements. The exact scope depends on property conditions, project goals, and available budget.",
        },
        {
          question:
            "How Long Does a Residential Home Renovation Usually Take?",
          answer:
            "Renovation timelines vary according to project size, structural changes, material availability, and permitting requirements. Smaller updates may take weeks, while extensive whole-house renovations can require several months to complete successfully.",
        },
        {
          question:
            "Can I Renovate My Kitchen and Bathroom at the Same Time?",
          answer:
            "Yes, kitchen and bathroom renovations can be coordinated within one project. Scheduling depends on construction complexity, available resources, material delivery, and whether your household can manage temporary disruptions to essential facilities.",
        },
        {
          question:
            "Do Home Renovation Projects Require Permits in Ferndale, WA?",
          answer:
            "Some renovation projects require permits, particularly when modifying structural components, plumbing, electrical systems, or building layouts. Confirm applicable requirements with the local building department before starting construction work on your property.",
        },
        {
          question:
            "Is It Better to Renovate One Room or the Entire House?",
          answer:
            "The best approach depends on your budget, property condition, and renovation priorities. Individual room updates address specific concerns, while whole-house renovations can provide more consistent improvements across multiple residential spaces simultaneously.",
        },
        {
          question: "How Should I Prepare for a Home Renovation Estimate?",
          answer:
            "Identify the rooms requiring improvements, preferred materials, design goals, and approximate budget. Sharing photographs, measurements, and renovation priorities helps contractors understand your project and discuss suitable construction options during consultation.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to discuss your Ferndale home renovation plans and request a personalized estimate.",
    },
  };
}
