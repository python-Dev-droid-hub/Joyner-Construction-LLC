import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonRemodeling(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "remodeling" && areaSlug === "burlington-wa";
}

export const burlingtonRemodelingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Remodeling Services Contractor Burlington, WA",
  supporting:
    "Make your property work better with remodeling services that combine practical improvements and refreshed design. Whether modernizing a residential interior or updating a commercial workspace, Burlington, WA, property owners can explore renovation solutions suited to their space and objectives.",
};

export const burlingtonRemodelingSeo = {
  title: "Remodeling Services in Burlington, WA",
  description:
    "Joyner Construction LLC provides residential and commercial remodeling services in Burlington, WA—kitchen, bathroom, interior, and whole-home renovations.",
};

/** Swap the shared template copy for the Burlington remodeling page. Images stay in place. */
export function applyBurlingtonRemodelingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, kitchenBath, wholeHome] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Kitchen or Bathroom Remodeling and Renovation Services Contractor or Company Burlington, WA",
      paragraphs: [
        "Outdated kitchens and bathrooms can limit how comfortably you use your property. Joyner Construction LLC helps residential and commercial property owners in Burlington, WA, plan improvements that make these spaces more functional and attractive. Our kitchen remodeling services can address insufficient storage, worn countertops, inconvenient layouts, and outdated finishes.",
        "Homeowners looking for kitchen renovation contractors can discuss practical upgrades that suit their needs. We also provide bathroom remodeling solutions focused on fixture updates, improved organization, and better use of available space. Whether you are considering kitchen upgrades or custom bathroom remodeling services, our team helps you explore renovation possibilities based on your property's condition and improvement goals.",
      ],
      visualCaption: "Tap a node to explore each stage of remodeling work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Contact our team to discuss your property's remodeling requirements today.",
          scope:
            "Defined renovation goals help organize resources, decisions, and project expectations.",
          layout:
            "We assess room dimensions to plan useful and balanced arrangements.",
          craft:
            "Finishing details help create polished interiors with practical everyday benefits.",
          structure:
            "Careful evaluation helps determine suitable changes to existing buildings.",
          handoff:
            "We review completed improvements and communicate important project details clearly.",
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
            "Refresh the appearance and usability of your property with interior improvements tailored to your needs. From replacing dated finishes to reorganizing room arrangements, remodeling can help create more welcoming residential and commercial environments.",
          imageAlt: "Interior remodeling in Burlington, WA",
        },
        {
          ...kitchenBath,
          label: "Kitchen/Bath",
          title: "Kitchen & Bath Remodels",
          description:
            "Bring greater convenience to your daily routines with updated kitchen and bathroom features. Improvements to cabinetry, fixtures, countertops, lighting, and storage can make these spaces easier to use while creating a more current appearance.",
          imageAlt: "Kitchen and bathroom remodeling in Burlington, WA",
        },
        {
          ...wholeHome,
          label: "Whole Home",
          title: "Whole-Home Remodeling",
          description:
            "Reconsider your property's interior from room to room with a coordinated whole-home renovation. Updating multiple spaces together can improve consistency, address functional limitations, and create an environment better suited to your household.",
          imageAlt: "Whole-home remodeling in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Remodeling services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Old Home or Offices Remodeling Contractors Installation Burlington, WA?",
      body: "Planning to modernize an older building or office? Let our team understand your requirements, explore potential improvements, and discuss remodeling solutions that suit your property.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Remodeling Services",
      title:
        "Certified or Trusted Reliable Building Remodeling Contractors Services Agency Burlington, WA",
      intro:
        "Functional spaces can make a significant difference in how residential and commercial properties serve their occupants. Joyner Construction LLC offers building remodeling solutions for property owners in Burlington, WA. From reorganizing interior spaces to updating kitchens, bathrooms, and office environments, each renovation should begin with a clear understanding of the intended improvements. Explore suitable design possibilities, discuss your project requirements, and plan updates that make your property more practical and inviting.",
      sections: [
        {
          heading: "Professional Home Remodeling Contractors Burlington, WA",
          body: [
            "Your home's interior should support your routines rather than create unnecessary limitations. Professional home remodeling contractors can help evaluate room layouts, outdated surfaces, and areas that need better organization. Burlington homeowners may consider improvements that make living areas more comfortable, create additional storage opportunities, or refresh older interiors. Before beginning, identify the features you want to change and establish your preferred design direction. These decisions provide a useful starting point for discussing the renovation scope.",
          ],
        },
        {
          heading: "Affordable Residential Remodeling Services Burlington, WA",
          body: [
            "Managing renovation expenses begins with understanding the work your property actually needs. Affordable residential remodeling services can help homeowners prioritize important improvements instead of committing to unnecessary changes. Consider the condition of existing rooms, available materials, and the amount you plan to invest. Burlington property owners can compare practical renovation possibilities before deciding on a project scope. Clear expectations and an organized plan help you evaluate suitable upgrades while keeping budget considerations part of the decision-making process.",
          ],
        },
        {
          heading: "Local Home Renovation Company Burlington, WA",
          body: [
            "Every renovation begins with a property that has its own limitations and opportunities. A local home renovation company should take time to understand existing room arrangements, construction conditions, and the owner's improvement goals. Burlington homeowners may want to refresh a dated interior, improve kitchen organization, or make better use of available living space. Rather than choosing upgrades at random, consider how each change will affect the property's overall functionality and appearance. This helps establish a more purposeful renovation direction.",
          ],
        },
        {
          heading: "Kitchen Remodeling Contractors Near Me Burlington, WA",
          body: [
            "When searching for kitchen remodeling contractors near me in Burlington, WA, focus on teams that can understand your specific kitchen requirements. Think about whether your current cabinets provide sufficient storage, whether countertops offer enough preparation space, and whether appliances are positioned conveniently. Lighting and movement between work areas also influence how efficiently a kitchen functions. Identifying these issues before selecting finishes or fixtures helps create a renovation plan based on everyday needs rather than appearance alone.",
          ],
        },
        {
          heading: "Bathroom Renovation Specialists Burlington, WA",
          body: [
            "Bathrooms benefit from improvements that make better use of available floor space and storage. Bathroom renovation specialists can help homeowners consider updated vanities, fixtures, lighting, and finishes that suit the room's dimensions. If your current bathroom feels crowded or outdated, begin by identifying the features that affect daily convenience. Burlington homeowners can use these priorities to compare suitable design options and organize renovation decisions. A practical approach helps ensure that appearance and functionality remain equally important.",
          ],
        },
        {
          heading: "Whole-House Remodeling Company Burlington, WA",
          body: [
            "A whole-house renovation can provide an opportunity to update several areas while maintaining a consistent interior style. A whole-house remodeling company can help homeowners consider how changes to flooring, wall finishes, lighting, and room arrangements will work together. Burlington property owners may be preparing a home for changing household needs or simply looking to refresh an outdated interior. Establishing priorities for each room helps organize the larger project and gives the renovation a more cohesive direction.",
          ],
        },
        {
          heading: "Experienced Home Improvement Contractors",
          body: [
            "The success of a home improvement project depends partly on how clearly its requirements are understood before work begins. Experienced home improvement contractors should discuss the property's current condition, desired changes, material options, and project responsibilities. Homeowners can prepare by collecting ideas and identifying the areas that require attention. Whether you are planning a kitchen update or a broader interior renovation, clear communication makes it easier to evaluate proposed work and understand what the project involves.",
          ],
        },
        {
          heading: "Complete Home Renovation Services Burlington, WA",
          body: [
            "When several parts of your home need attention, organizing the improvements under one broader plan can be useful. Complete home renovation services may include updated interior finishes, redesigned kitchens, bathroom improvements, and changes to existing room arrangements. Burlington homeowners should consider which spaces require immediate attention and how individual upgrades will complement one another. A coordinated approach helps establish a consistent design direction while addressing the practical issues that affect how comfortably the property is used.",
          ],
        },
        {
          heading: "Licensed and Insured Remodeling Contractors",
          body: [
            "Property owners should take time to review contractor credentials before approving any remodeling work. Licensed and insured remodeling contractors should be able to explain their applicable qualifications and provide current documentation upon request. You should also understand who is responsible for project supervision, which tasks are included, and whether additional tradespeople will be involved. Reviewing written estimates and agreements helps clarify the proposed work. These checks support more informed decisions when selecting contractors for your Burlington renovation.",
          ],
        },
        {
          heading: "Custom Residential Remodeling Company Burlington, WA",
          body: [
            "Your renovation plans should reflect the way you want to use your home, not simply follow a standard design. A custom residential remodeling company can help explore improvements based on your room dimensions, household routines, and preferred finishes. You may want to create more usable living areas, improve kitchen organization, or update an older bathroom. Discussing these goals helps establish suitable design possibilities and gives your remodeling project a direction that reflects your property's individual requirements.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Remodeling Services in Burlington, WA",
      description:
        "Get practical information about residential and commercial remodeling in Burlington.",
      items: [
        {
          question:
            "What Types of Residential Remodeling Are Available in Burlington?",
          answer:
            "Homeowners can consider kitchen upgrades, bathroom renovations, interior improvements, and whole-house remodeling. Available options depend on property conditions and project requirements.",
        },
        {
          question: "Can Commercial Buildings Benefit From Remodeling Services?",
          answer:
            "Yes. Commercial remodeling can improve workspace layouts, interior finishes, and building functionality. The project should reflect business operations and property requirements.",
        },
        {
          question: "How Do I Know Whether My Kitchen Needs Remodeling?",
          answer:
            "Limited storage, worn countertops, outdated cabinets, and inefficient layouts may indicate improvement opportunities. Evaluate which changes would make everyday kitchen activities easier.",
        },
        {
          question: "What Factors Affect Residential Remodeling Costs?",
          answer:
            "Project dimensions, material selections, labor requirements, existing conditions, and design complexity influence renovation costs. A detailed estimate helps clarify expected expenses.",
        },
        {
          question: "Can Bathroom Remodeling Increase Everyday Comfort?",
          answer:
            "Updated fixtures, improved storage, better lighting, and functional layouts can make bathrooms more convenient. Suitable changes depend on available space and household needs.",
        },
        {
          question: "Why Should I Request a Remodeling Estimate?",
          answer:
            "An estimate helps outline anticipated work, material considerations, and project expenses. It also gives homeowners an opportunity to discuss requirements before making decisions.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready for a better space? Contact our team to discuss your remodeling needs and request an estimate today.",
    },
  };
}
