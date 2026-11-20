import type { LandingPageContent } from "@/content/landing";

export function isBellinghamRemodeling(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "remodeling" && areaSlug === "bellingham-wa";
}

export const bellinghamRemodelingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Remodeling Services Contractor Bellingham, WA",
  supporting:
    "Transform outdated spaces into functional, attractive environments with professional remodeling services in Bellingham, WA. Whether updating a family home or renovating office buildings, our team focuses on thoughtful planning, quality workmanship, and practical improvements that support your property's needs.",
};

export const bellinghamRemodelingSeo = {
  title:
    "Home Renovation & Remodeling Experts in Bellingham, WA | Joyner Construction LLC",
  description:
    "Upgrade your living space with expert remodeling services in Bellingham, WA. Joyner Construction LLC delivers customized home renovations, kitchen and bathroom remodeling, interior upgrades, and quality construction solutions to bring your ideas to life.",
};

/** Swap the shared template copy for the Bellingham remodeling page. Images stay in place. */
export function applyBellinghamRemodelingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, kitchenBath, wholeHome] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Kitchen or Bathroom Remodeling and Renovation Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "Creating a more comfortable and functional property starts with remodeling that reflects your goals. Joyner Construction LLC provides residential and commercial renovation solutions for property owners in Bellingham, WA. Our kitchen remodeling services include practical kitchen upgrades, improved layouts, and custom kitchen remodeling designed around everyday use.",
        "We also help homeowners improve outdated spaces through bathroom remodeling services, including modern fixtures, better storage, and thoughtful finishes. Whether you need experienced kitchen renovation contractors or dependable bathroom renovation contractors, each project receives careful attention from planning through completion. Our approach combines functional design, organized project coordination, and quality workmanship to make your kitchen or bathroom renovation a worthwhile investment.",
      ],
      visualCaption: "Tap a node to explore each stage of remodeling work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your remodeling goals and receive guidance about possible improvements.",
          scope:
            "Every project begins with defined priorities, expectations, and renovation requirements.",
          layout:
            "We plan practical layouts that improve movement, comfort, and functionality.",
          craft:
            "Careful workmanship brings attractive finishes and dependable everyday performance together.",
          structure:
            "We consider existing structures before recommending suitable remodeling improvements.",
          handoff:
            "Clear communication keeps project expectations organized through final completion and handoff.",
        },
      },
    },
    services: {
      title: "Interior Remodeling, Kitchen & Bath Remodels, and Whole-Home Remodeling",
      items: [
        {
          ...interior,
          label: "Interior",
          title: "Interior Remodeling",
          description:
            "Refresh outdated interiors with improvements that make rooms more comfortable, attractive, and functional. We consider your property's existing layout, design preferences, and daily requirements when planning interior remodeling projects.",
          imageAlt: "Interior remodeling in Bellingham, WA",
        },
        {
          ...kitchenBath,
          label: "Kitchen/Bath",
          title: "Kitchen & Bath Remodels",
          description:
            "Improve two of your property's most frequently used spaces with thoughtful kitchen and bathroom renovations. Updated layouts, practical storage, attractive finishes, and carefully selected fixtures can improve everyday convenience.",
          imageAlt: "Kitchen and bathroom remodeling in Bellingham, WA",
        },
        {
          ...wholeHome,
          label: "Whole Home",
          title: "Whole-Home Remodeling",
          description:
            "Bring greater consistency and functionality to your property through coordinated whole-home remodeling. From individual room improvements to broader interior updates, thoughtful planning helps create a more comfortable living environment.",
          imageAlt: "Whole-home remodeling in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Remodeling services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Old Home or Offices Remodeling Contractors Installation Bellingham, WA?",
      body: "Ready to update your home or office? Discuss your remodeling requirements with our team. Explore practical renovation solutions, clarify your project goals, and take the next step.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Remodeling Services",
      title:
        "Certified or Trusted Reliable Building Remodeling Contractors Services Agency Bellingham, WA",
      intro:
        "Choosing the right remodeling team can make a meaningful difference in your property's appearance and functionality. Joyner Construction LLC offers remodeling solutions for residential and commercial properties in Bellingham, WA. From interior improvements to larger renovation projects, our approach emphasizes careful planning, practical design decisions, and attentive workmanship. Property owners can discuss their goals, explore suitable improvements, and establish a clear direction for transforming outdated spaces into more useful environments.",
      sections: [
        {
          heading: "Professional Home Remodeling Contractors Bellingham, WA",
          body: [
            "Planning a home renovation requires attention to your property's layout, existing features, and everyday needs. Professional home remodeling contractors can help coordinate improvements that make rooms more practical and visually appealing. Whether you are updating a single space or considering several interior changes, a structured approach helps maintain consistency throughout the project. Discuss your preferred finishes, functional requirements, and renovation priorities before moving forward with your Bellingham home improvement plans.",
          ],
        },
        {
          heading: "Affordable Residential Remodeling Services Bellingham, WA",
          body: [
            "A successful renovation should balance your improvement goals with a realistic project budget. Affordable residential remodeling services begin with identifying essential upgrades, understanding material options, and establishing a suitable project scope. Homeowners in Bellingham can prioritize improvements based on comfort, functionality, and long-term property needs. Careful planning also helps reduce unnecessary changes during construction. Discuss your expectations early to explore remodeling options that align with your available budget and preferred results.",
          ],
        },
        {
          heading: "Local Home Renovation Company Bellingham, WA",
          body: [
            "Working with a local home renovation company makes it easier to discuss property requirements and understand the needs of your surrounding community. Bellingham homeowners may have different renovation priorities depending on their home's age, layout, and condition. From improving outdated interiors to updating frequently used rooms, every project benefits from thoughtful planning. Consider your property's existing features, preferred design direction, and practical requirements when exploring home renovation opportunities.",
          ],
        },
        {
          heading: "Kitchen Remodeling Contractors Near Me Bellingham, WA",
          body: [
            "Searching for kitchen remodeling contractors near me in Bellingham, WA, often means looking for a team that understands both design preferences and everyday functionality. A well-planned kitchen renovation can improve cabinet storage, countertop space, lighting, and movement between work areas. Homeowners should consider how they prepare meals, organize appliances, and use their kitchens throughout the day. These details help establish renovation priorities and guide decisions about layouts, finishes, and upgrades.",
          ],
        },
        {
          heading: "Bathroom Renovation Specialists Bellingham, WA",
          body: [
            "An outdated bathroom can benefit from improvements that address comfort, storage, appearance, and usability. Bathroom renovation specialists can help property owners consider updated fixtures, improved lighting, practical vanities, and better use of available space. Before selecting finishes, evaluate your existing bathroom layout and identify the changes that would make daily routines easier. A clearly defined renovation plan helps homeowners in Bellingham understand their options and make informed decisions about bathroom improvements.",
          ],
        },
        {
          heading: "Whole-House Remodeling Company Bellingham, WA",
          body: [
            "Updating an entire property requires coordination between individual rooms, design choices, and renovation priorities. A whole-house remodeling company can help homeowners approach larger improvement projects with a consistent plan. Consider how flooring, interior finishes, room layouts, and functional upgrades will work together throughout the home. Whether you are modernizing an older property or adapting your space to changing household needs, organized planning helps establish a cohesive direction for your renovation.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors",
          body: [
            "Home improvement projects involve more than selecting attractive materials or choosing new finishes. Experienced home improvement contractors understand the importance of evaluating existing conditions, discussing project expectations, and coordinating renovation activities. Homeowners should communicate their priorities clearly before work begins, especially when multiple rooms or improvements are involved. From interior updates to functional upgrades, careful project planning helps create a smoother renovation process and supports results that complement the property's existing features.",
          ],
        },
        {
          heading: "Complete Home Renovation Services Bellingham, WA",
          body: [
            "Complete home renovation services can address several improvement needs within one coordinated project. Homeowners in Bellingham may want to update outdated interiors, improve room functionality, refresh kitchens, or modernize bathrooms. Establishing clear priorities helps determine which improvements should receive attention first. Consider your property's current condition, preferred design style, and available budget when planning renovation work. A well-organized approach can help connect individual upgrades and create a more consistent home environment.",
          ],
        },
        {
          heading: "Licensed and Insured Remodeling Contractors",
          body: [
            "Before hiring remodeling contractors, homeowners should confirm the company's current licensing, insurance coverage, and applicable qualifications. These details help property owners understand who will perform the work and what protections may apply during the project. Ask about relevant experience, project responsibilities, written estimates, and insurance documentation before making a decision. Clear verification is especially important for residential and commercial renovations involving multiple improvements, specialized trades, or significant changes to existing spaces.",
          ],
        },
        {
          heading: "Custom Residential Remodeling Company Bellingham, WA",
          body: [
            "Every home has different dimensions, design preferences, and functional requirements. Custom residential remodeling allows homeowners to plan improvements around the way they actually use their spaces. Whether you want better kitchen storage, a more comfortable bathroom, or updated interior finishes, identifying your priorities helps guide the design direction. Consider your property's existing character and long-term needs when exploring custom renovation possibilities in Bellingham, WA.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Remodeling Services in Bellingham, WA",
      description:
        "Find helpful answers to common questions about residential and commercial remodeling.",
      items: [
        {
          question: "What Remodeling Services Are Available in Bellingham, WA?",
          answer:
            "Remodeling options include interior renovations, kitchen upgrades, bathroom improvements, and whole-home projects. Services depend on your property's condition, project requirements, and desired improvements.",
        },
        {
          question: "How Much Does a Home Remodeling Project Cost?",
          answer:
            "Remodeling costs vary based on project size, materials, labor, and design complexity. Requesting an estimate helps establish realistic expectations and identify suitable renovation options.",
        },
        {
          question: "How Long Does a Residential Remodeling Project Take?",
          answer:
            "Project timelines depend on renovation scope, material availability, scheduling, and existing property conditions. Discussing expectations beforehand helps homeowners understand the anticipated construction schedule.",
        },
        {
          question: "Can You Remodel Commercial Office Buildings?",
          answer:
            "Commercial remodeling can improve office layouts, interior appearance, and workspace functionality. Project requirements depend on the building's existing condition, intended use, and renovation objectives.",
        },
        {
          question:
            "Can I Customize My Kitchen or Bathroom Remodeling Project?",
          answer:
            "Yes. Kitchen and bathroom renovations can reflect your preferred layouts, fixtures, storage solutions, materials, and finishes. Discussing your priorities helps guide suitable design decisions.",
        },
        {
          question:
            "How Do I Choose Reliable Remodeling Contractors in Bellingham?",
          answer:
            "Review contractor qualifications, licensing, insurance, relevant experience, and written estimates. Discuss project expectations clearly and compare proposed scopes before selecting a remodeling company.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to improve your property? Contact our team today to discuss your remodeling project and request an estimate.",
    },
  };
}
