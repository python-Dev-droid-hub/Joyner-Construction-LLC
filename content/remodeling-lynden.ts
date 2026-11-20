import type { LandingPageContent } from "@/content/landing";

export function isLyndenRemodeling(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "remodeling" && areaSlug === "lynden-wa";
}

export const lyndenRemodelingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Remodeling Services Contractor Lynden, WA",
  supporting:
    "Preserve the character of your property while making room for modern comfort and functionality. From thoughtful home renovations to commercial interior redesigns, remodeling solutions in Lynden, WA, can help property owners update existing spaces without losing sight of their original purpose.",
};

export const lyndenRemodelingSeo = {
  title: "Remodeling Services in Lynden, WA",
  description:
    "Joyner Construction LLC provides residential and commercial remodeling services in Lynden, WA—kitchen, bathroom, interior, and whole-home renovations.",
};

/** Swap the shared template copy for the Lynden remodeling page. Images stay in place. */
export function applyLyndenRemodelingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, kitchenBath, wholeHome] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Kitchen or Bathroom Remodeling and Renovation Services Contractor or Company Lynden, WA",
      paragraphs: [
        "Your kitchen and bathroom should reflect how your household lives, works, and uses its available space. Joyner Construction LLC helps property owners in Lynden, WA, explore remodeling options that combine appearance with everyday practicality. Our kitchen remodeling services can address outdated cabinets, limited preparation areas, inefficient storage, and worn surfaces.",
        "If you are comparing kitchen renovation contractors, consider improvements that support your cooking habits and preferred style. We also offer bathroom remodeling solutions for homeowners interested in better layouts, refreshed fixtures, and comfortable finishes. From kitchen upgrades to custom bathroom remodeling services, each renovation begins with understanding your property's existing features and the changes you want to achieve.",
      ],
      visualCaption: "Tap a node to explore each stage of remodeling work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your ideas and explore remodeling options for your property.",
          scope:
            "We establish project priorities before selecting suitable renovation improvements.",
          layout:
            "We evaluate available space before organizing functional interior arrangements.",
          craft:
            "Quality-focused finishing brings consistency to your property's renovated rooms.",
          structure:
            "Building conditions influence the planning of appropriate renovation work.",
          handoff:
            "Project completion includes communication about finished work and remaining details.",
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
            "Give your interiors a more cohesive appearance with improvements that respect the property's existing character. Interior remodeling can address worn surfaces, outdated room arrangements, and changing space requirements while introducing finishes that complement your preferred style.",
          imageAlt: "Interior remodeling in Lynden, WA",
        },
        {
          ...kitchenBath,
          label: "Kitchen/Bath",
          title: "Kitchen & Bath Remodels",
          description:
            "Create more welcoming kitchens and bathrooms with renovations focused on comfort, organization, and appearance. Thoughtful fixture selections, practical storage, improved surfaces, and updated layouts can make everyday activities easier for your household.",
          imageAlt: "Kitchen and bathroom remodeling in Lynden, WA",
        },
        {
          ...wholeHome,
          label: "Whole Home",
          title: "Whole-Home Remodeling",
          description:
            "Bring different areas of your home together through a coordinated renovation strategy. Whole-home remodeling can address outdated interiors, inconsistent finishes, and changing household requirements while establishing a more unified appearance throughout the property.",
          imageAlt: "Whole-home remodeling in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Remodeling services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Old Home or Offices Remodeling Contractors Installation Lynden, WA?",
      body: "Give your older home or commercial property a fresh start. Connect with our team to discuss renovation ideas, identify improvement priorities, and plan your next remodeling project.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Remodeling Services",
      title:
        "Certified or Trusted Reliable Building Remodeling Contractors Services Agency Lynden, WA",
      intro:
        "Older properties and changing household requirements often create new opportunities for remodeling. Joyner Construction LLC provides residential and commercial building renovation solutions in Lynden, WA, with attention to each property's layout, condition, and intended use. Whether you want to refresh traditional interiors, improve an existing kitchen, or redesign office space, establishing clear project priorities helps guide the work. Explore practical updates that support your property's appearance, comfort, and functionality.",
      sections: [
        {
          heading: "Professional Home Remodeling Contractors Lynden, WA",
          body: [
            "A home renovation should improve the way your property looks and functions without overlooking its existing character. Professional home remodeling contractors can help homeowners evaluate outdated rooms, inefficient storage, and interior features that no longer meet their needs. In Lynden, renovation plans may involve refreshing established homes or adapting interiors for changing family routines. Begin by identifying your preferred improvements and discussing how different design choices could make your living spaces more comfortable and useful.",
          ],
        },
        {
          heading: "Affordable Residential Remodeling Services Lynden, WA",
          body: [
            "Planning residential improvements starts with understanding which changes provide the greatest value for your household. Affordable residential remodeling services focus on establishing realistic priorities, evaluating material choices, and organizing work around an agreed project scope. Lynden homeowners may choose to update one room before considering larger renovations. Comparing options for finishes, fixtures, and layouts helps guide spending decisions. A detailed discussion about your expectations can make the overall project easier to plan and manage.",
          ],
        },
        {
          heading: "Local Home Renovation Company Lynden, WA",
          body: [
            "Homes throughout Lynden have different layouts, design details, and renovation requirements. A local home renovation company should consider these individual characteristics before recommending improvements. Whether your property features traditional interior finishes or a more recent design, the right updates should support its intended use. Homeowners can explore options for modernizing living areas, improving storage, or renovating frequently used rooms. Careful consideration of existing features helps create a renovation plan that feels appropriate for the property.",
          ],
        },
        {
          heading: "Kitchen Remodeling Contractors Near Me Lynden, WA",
          body: [
            "Searching for kitchen remodeling contractors near me in Lynden, WA, can help you begin comparing options for improving one of your home's most important spaces. Think about how your current kitchen handles meal preparation, storage, and everyday movement. Cabinet configurations, counter surfaces, appliance locations, and lighting all influence usability. Identifying specific limitations before renovation begins helps establish a more focused improvement plan. Your preferred design style can then guide the selection of materials and finishes.",
          ],
        },
        {
          heading: "Bathroom Renovation Specialists Lynden, WA",
          body: [
            "A bathroom renovation provides an opportunity to improve comfort while addressing fixtures, surfaces, and storage that may have become outdated. Bathroom renovation specialists can help homeowners consider practical changes based on the room's dimensions and daily use. You might need a better vanity arrangement, improved lighting, or more convenient storage. In Lynden, reviewing these details before choosing materials helps create a renovation plan that balances your design preferences with the practical requirements of your household.",
          ],
        },
        {
          heading: "Whole-House Remodeling Company Lynden, WA",
          body: [
            "Renovating several rooms requires a broader perspective than planning individual interior updates. A whole-house remodeling company can help homeowners consider how flooring, colors, fixtures, and room arrangements will relate across the property. This is especially useful when older interiors need a more consistent appearance or when household requirements have changed. By establishing a unified renovation direction, homeowners can organize improvements more effectively and create living spaces that feel connected rather than independently updated.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors",
          body: [
            "Choosing contractors for home improvements requires more than comparing design ideas or estimated prices. Experienced home improvement contractors should be prepared to discuss property conditions, project requirements, material selections, and construction responsibilities. Homeowners can make discussions more productive by identifying existing problems and deciding which changes matter most. Whether the work involves a single room or several interior areas, understanding the proposed scope helps everyone maintain realistic expectations throughout the renovation process.",
          ],
        },
        {
          heading: "Complete Home Renovation Services Lynden, WA",
          body: [
            "A comprehensive home renovation can help bring outdated rooms and disconnected design choices into a more consistent arrangement. Complete home renovation services may include interior updates, kitchen improvements, bathroom remodeling, and changes to room functionality. Lynden homeowners should begin by evaluating the condition of each space and deciding which improvements are most important. Connecting these priorities within one renovation plan can help create a home that better reflects current preferences and practical household requirements.",
          ],
        },
        {
          heading: "Licensed and Insured Remodeling Contractors",
          body: [
            "Verifying a contractor's credentials is an important part of preparing for residential or commercial remodeling. Ask licensed and insured remodeling contractors to provide applicable licensing information and current insurance documentation. It is also helpful to review written estimates, project timelines, work responsibilities, and any subcontracting arrangements. These steps give property owners a clearer understanding of the proposed work and the contractor's qualifications. Taking time to verify details supports more informed decisions before starting a renovation project.",
          ],
        },
        {
          heading: "Custom Residential Remodeling Company Lynden, WA",
          body: [
            "A personalized renovation should account for your home's layout, architectural details, and the way each room is used. A custom residential remodeling company can help homeowners explore design changes that suit their property's individual requirements. Whether you want to improve an older kitchen, update bathroom finishes, or create more useful living areas, defining your goals helps guide the project. Thoughtful material and layout choices can introduce modern convenience while respecting the home's existing character.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Remodeling Services in Lynden, WA",
      description:
        "Learn more about planning residential and commercial renovations in Lynden.",
      items: [
        {
          question: "Can Older Homes in Lynden Benefit From Remodeling?",
          answer:
            "Yes. Renovations can refresh outdated finishes, improve room functionality, and address changing household needs. The appropriate improvements depend on the home's existing condition.",
        },
        {
          question: "What Is Included in Residential Interior Remodeling?",
          answer:
            "Interior remodeling may involve updated flooring, wall finishes, lighting, storage, and room arrangements. Project details depend on your property's requirements and preferences.",
        },
        {
          question: "How Can Kitchen Renovations Improve Everyday Convenience?",
          answer:
            "Improved cabinets, countertops, appliance placement, and lighting can make meal preparation more organized. A suitable layout also supports easier movement.",
        },
        {
          question: "Can I Renovate Multiple Rooms Together?",
          answer:
            "Yes. Multiple rooms can be included in a coordinated renovation plan. Project scope, scheduling, materials, and property conditions influence the overall process.",
        },
        {
          question: "What Should I Discuss Before Hiring Remodeling Contractors?",
          answer:
            "Discuss experience, applicable licensing, insurance, estimates, project responsibilities, and expected timelines. Clear agreements help establish expectations before renovation work begins.",
        },
        {
          question: "How Do I Plan a Bathroom Remodeling Project?",
          answer:
            "Start by reviewing your bathroom's layout, storage, fixtures, lighting, and finishes. Prioritizing improvements helps guide design and material decisions.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Have renovation ideas in mind? Speak with our team about your property and request an estimate for improvements.",
    },
  };
}
