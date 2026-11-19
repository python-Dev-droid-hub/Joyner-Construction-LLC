import type { LandingPageContent } from "@/content/landing";

export function isLyndenPainting(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "painting" && areaSlug === "lynden-wa";
}

export const lyndenPaintingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Interior & Exterior Painting Services Contractor in Lynden, WA",
  supporting:
    "A fresh coat of paint can transform a property's appearance, protect exposed surfaces, and create more inviting spaces. Homeowners and businesses in Lynden, WA, can explore professional interior and exterior painting solutions tailored to their buildings, surfaces, and renovation goals.",
};

export const lyndenPaintingSeo = {
  title:
    "Get Expert Residential Painting, Home Repainting & Wall Finishing in Lynden, WA | Joyner Construction LLC",
  description:
    "Planning to refresh your property in Lynden, WA? Hire Joyner Construction LLC for reliable interior painting, exterior house painting, residential repainting, and wall finishing. Enhance your home's beauty with professional painting solutions. Contact us today to discuss your project and get a competitive quote!",
};

/** Swap the shared template copy for the Lynden painting page. Images stay in place. */
export function applyLyndenPaintingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, exterior, refresh] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Interior Wall Painting and Finishing Services in Lynden, WA",
      paragraphs: [
        "Well-planned painting improves both the appearance and condition of residential and commercial properties. Joyner Construction LLC provides interior painting services in Lynden, WA, including residential interior painting and professional support from experienced interior house painters.",
        "Property owners can also discuss exterior painting services, exterior house painting, and residential exterior painters for different building surfaces. Whether you need indoor painting contractors or outdoor painting contractors, the project can be planned around your property's condition. Affordable wall painting services, interior wall painting, and professional wall painters help create clean, consistent finishes that complement your preferred colors and overall design.",
      ],
      visualCaption: "Tap a node to explore each stage of painting work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss color choices, surface conditions, painting schedules, and project estimates.",
          scope:
            "Project scope identifies surfaces, preparation, coatings, labor, and finishing requirements.",
          layout:
            "Color planning considers room dimensions, lighting, architectural details, and preferences.",
          craft:
            "Careful application creates smooth coverage, clean edges, and consistent finishes.",
          structure:
            "Surface inspections identify preparation needs before painting work begins.",
          handoff:
            "Final walkthroughs review painted areas, cleanup, and completed project details.",
        },
      },
    },
    services: {
      title: "Interior Painting, Exterior Painting, and Paint Refresh Projects",
      items: [
        {
          ...interior,
          label: "Interior",
          title: "Interior Painting",
          description:
            "Interior painting refreshes living spaces, bedrooms, kitchens, and shared areas. Suitable colors and careful application help create a cohesive appearance while complementing existing furniture, lighting, and interior finishes.",
          imageAlt: "Interior painting in Lynden, WA",
        },
        {
          ...exterior,
          label: "Exterior",
          title: "Exterior Painting",
          description:
            "Exterior painting updates visible building surfaces while helping protect them from everyday environmental exposure. Proper preparation, compatible coatings, and even application contribute to an attractive, lasting exterior finish.",
          imageAlt: "Exterior painting in Lynden, WA",
        },
        {
          ...refresh,
          label: "Refresh",
          title: "Paint Refresh Projects",
          description:
            "A targeted paint refresh can improve selected rooms, walls, trim, or exterior sections without requiring a complete renovation. Updated colors help renew spaces and maintain visual consistency.",
          imageAlt: "Paint refresh project in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Painting services",
      heading:
        "Are You Looking for Professional House or Office Repainting Contractors in Lynden, WA?",
      body: "Give your home or commercial property a refreshed appearance with carefully planned painting services. Contact a qualified painting contractor to discuss surface preparation, color options, repainting requirements, and project scheduling.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Painting Services",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Interior and Exterior Painting Services Agency in Lynden, WA",
      intro:
        "A successful painting project starts with understanding the surface rather than simply selecting a color. Property owners in Lynden, WA, can explore painting solutions for interior walls, exterior siding, ceilings, trim, cabinets, and commercial spaces. Each surface requires suitable preparation and coating selection to achieve the intended finish. Professional planning also considers existing paint conditions, repairs, accessibility, and the property's appearance. Whether updating one room or repainting an entire building, careful application and organized workmanship help create a clean, coordinated result.",
      sections: [
        {
          heading: "Local Interior and Exterior Painters Company in Lynden, WA",
          body: [
            "Different properties require different painting approaches, from detailed interior finishes to weather-exposed exterior surfaces. Homeowners and commercial property managers in Lynden can discuss color selection, coating compatibility, and preparation requirements before beginning a project. Interior work may include walls, ceilings, doors, and trim, while exterior painting can cover siding and other suitable surfaces. Understanding the building's materials helps determine the appropriate products and application methods. A well-organized painting plan brings these details together and helps maintain a consistent appearance throughout the property.",
          ],
        },
        {
          heading: "Affordable Residential Painting Services in Lynden, WA",
          body: [
            "Refreshing your home does not always require a complete renovation. Residential painting can update individual rooms, hallways, ceilings, exterior siding, or selected architectural features according to your priorities. Homeowners in Lynden can establish a practical project scope based on the surfaces that need attention and their preferred finish. Preparation requirements, paint selection, room dimensions, and accessibility all influence the estimate. A clear discussion of these details helps avoid unnecessary work and keeps the project focused. The goal is a refreshed home appearance supported by appropriate materials and careful application.",
          ],
        },
        {
          heading:
            "Experienced House Painting Contractors and Specialists in Lynden, WA",
          body: [
            "House painting involves several steps that influence the quality of the finished surface. Before applying paint, contractors should examine existing coatings, identify imperfections, and determine whether cleaning, sanding, patching, or priming is necessary. Homeowners in Lynden can discuss the condition of their walls, ceilings, siding, and trim to establish a suitable plan. Choosing compatible products also matters when different materials require specific coatings. Attention to preparation and application helps produce even coverage, cleaner edges, and a finish that complements the home's overall design.",
          ],
        },
        {
          heading:
            "Complete Interior and Exterior House Painting Contractors in Lynden, WA",
          body: [
            "Coordinating interior and exterior painting can give a home a more consistent appearance while addressing several maintenance and design priorities. Interior projects may involve living spaces, bedrooms, kitchens, hallways, and trim. Exterior work can include siding, doors, and other paintable surfaces. In Lynden, homeowners can organize these improvements according to property conditions, access, and scheduling needs. Each area should receive suitable preparation and compatible paint products. Planning both sides of the property together also helps coordinate colors and create a cohesive result without overlooking individual surface requirements.",
          ],
        },
        {
          heading:
            "Cabinet Painting and Refinishing Contractors in Lynden, WA",
          body: [
            "Cabinet painting can change the appearance of a kitchen, bathroom, or storage area without replacing every cabinet. The process requires careful cleaning, hardware removal where appropriate, surface preparation, and coatings suitable for cabinet materials. Homeowners in Lynden can consider updated colors that complement countertops, flooring, and surrounding finishes. Refinishing may also involve addressing scratches, worn coatings, and minor surface imperfections before applying new paint. Proper preparation is especially important because cabinets experience frequent handling. A carefully finished result can give existing cabinetry a refreshed appearance while preserving its current layout.",
          ],
        },
        {
          heading: "Professional House Repainting Services in Lynden, WA",
          body: [
            "Repainting becomes useful when existing colors look dated, paint begins peeling, or interior and exterior surfaces show visible wear. A repainting project should begin with an evaluation of the old coating and the condition of the underlying material. Homeowners in Lynden can identify priority areas and select colors that suit their property's architecture and personal preferences. Preparation may include washing, scraping, sanding, patching, and priming where necessary. Applying appropriate coatings helps create a more uniform finish and improves the overall appearance of the rooms or exterior surfaces being updated.",
          ],
        },
        {
          heading: "Commercial Painting Services in Lynden, WA",
          body: [
            "Commercial painting helps businesses maintain professional-looking offices, retail spaces, workplaces, and other facilities. Interior projects may cover office walls, ceilings, corridors, and common areas, while exterior work can refresh visible building surfaces. Business owners in Lynden should consider operating hours, access, surface conditions, and project scheduling when arranging painting services. Color selection can also support the property's branding and interior design. A defined work plan helps coordinate preparation, application, and cleanup while reducing unnecessary disruption to normal business activities.",
          ],
        },
        {
          heading:
            "Drywall Preparation and Painting, Drywall Repair and Painting Contractors in Lynden, WA",
          body: [
            "Painted walls look better when the drywall underneath is properly prepared. Holes, dents, cracks, loose joint compound, and uneven patches can remain visible after painting if they are not addressed first. Property owners in Lynden can arrange drywall repair and preparation before applying new coatings. The process may include patching damaged areas, sanding rough sections, smoothing joints, and applying primer where needed. Once the surface is ready, suitable paint can provide consistent coverage. Combining drywall preparation with painting helps create a cleaner finish and a more polished interior appearance.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Painting Services in Lynden, WA",
      description:
        "Find useful answers about residential and commercial painting, surface preparation, color selection, and repainting projects in Lynden.",
      items: [
        {
          question: "What painting services are available for Lynden properties?",
          answer:
            "Services may include interior walls, exterior surfaces, cabinets, drywall preparation, repairs, and complete repainting. Project recommendations depend on property conditions and requirements.",
        },
        {
          question:
            "How often should a house receive new exterior paint?",
          answer:
            "Repainting frequency depends on siding material, coating quality, exposure, and maintenance. Peeling, fading, and deteriorating finishes may indicate that an inspection is needed.",
        },
        {
          question: "Do interior walls need preparation before painting?",
          answer:
            "Yes. Cleaning, patching, sanding, and priming may be necessary depending on existing wall conditions. Proper preparation helps improve paint adhesion and appearance.",
        },
        {
          question: "Can kitchen cabinets be painted instead of replaced?",
          answer:
            "Yes. Suitable cabinets can often be refinished after proper cleaning and preparation. Their material and condition determine whether painting is a practical option.",
        },
        {
          question: "Can painting contractors repair damaged drywall?",
          answer:
            "Drywall preparation and repair can address holes, cracks, dents, and uneven areas before painting. The necessary work depends on the extent of the damage.",
        },
        {
          question: "How can I estimate the cost of a painting project?",
          answer:
            "Costs depend on surface area, preparation, paint selection, repairs, accessibility, and labor. A project assessment helps establish a more accurate estimate.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Refresh your Lynden property with professional painting. Contact Joyner Construction LLC to discuss interior, exterior, cabinet painting, and repainting estimates.",
    },
  };
}
