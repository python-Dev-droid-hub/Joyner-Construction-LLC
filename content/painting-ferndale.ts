import type { LandingPageContent } from "@/content/landing";

export function isFerndalePainting(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "painting" && areaSlug === "ferndale-wa";
}

export const ferndalePaintingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Interior & Exterior Painting Services Contractor in Ferndale, WA",
  supporting:
    "Worn paint, faded colors, and damaged finishes can take away from a property's overall appearance. Homeowners and businesses in Ferndale, WA, can explore professional painting services to renew interior rooms, improve exterior surfaces, and maintain attractive building finishes.",
};

export const ferndalePaintingSeo = {
  title:
    "Affordable House Painting, Interior & Exterior Painting Experts in Ferndale, WA | Joyner Construction LLC",
  description:
    "Want to enhance your home's appearance in Ferndale, WA? Trust Joyner Construction LLC for quality interior painting, exterior painting, residential repainting, and professional wall finishing. Give your property a clean, refreshed look with expert service. Contact us today to request a free estimate!",
};

/** Swap the shared template copy for the Ferndale painting page. Images stay in place. */
export function applyFerndalePaintingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, exterior, refresh] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Interior Wall Painting and Finishing Services in Ferndale, WA",
      paragraphs: [
        "Updating your property's paintwork is an effective way to improve its presentation without undertaking a complete renovation. Joyner Construction LLC offers interior painting services in Ferndale, WA, including residential interior painting, interior house painters, and professional indoor painting contractors.",
        "Exterior painting services are available for exterior house painting and residential exterior painters seeking to refresh exposed building surfaces. Property owners can also discuss outdoor painting contractors, affordable wall painting services, and professional interior wall painting. Careful preparation, compatible coatings, and suitable color selections help create finishes that match each property's condition and design preferences.",
      ],
      visualCaption: "Tap a node to explore each stage of painting work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Ask about repainting options, suitable coatings, preparation work, and scheduling.",
          scope:
            "Every project defines paint quantities, surface repairs, access, and labor.",
          layout:
            "Painting plans organize rooms, surface sections, color transitions, and project priorities.",
          craft:
            "Professional application helps achieve smooth finishes and carefully painted corners.",
          structure:
            "Surface preparation addresses flaking coatings, minor defects, and uneven areas.",
          handoff:
            "Finished surfaces receive inspection, cleanup, and a final project walkthrough.",
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
            "Give older rooms a different look with fresh interior colors. Painting walls, ceilings, and trim can improve visual consistency while complementing updated furniture, flooring, and decorative features.",
          imageAlt: "Interior painting in Ferndale, WA",
        },
        {
          ...exterior,
          label: "Exterior",
          title: "Exterior Painting",
          description:
            "Exterior painting helps maintain the appearance of siding, trim, doors, and other exposed surfaces. Proper preparation and suitable coatings support a neat finish and address existing paint deterioration.",
          imageAlt: "Exterior painting in Ferndale, WA",
        },
        {
          ...refresh,
          label: "Refresh",
          title: "Paint Refresh Projects",
          description:
            "Small painting improvements can make noticeable differences throughout a property. Repainting selected rooms, accent walls, doors, or trim provides a practical way to update existing finishes.",
          imageAlt: "Paint refresh project in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Painting services",
      heading:
        "Are You Looking for Professional House or Office Repainting Contractors in Ferndale, WA?",
      body: "Restore faded colors and worn finishes with a planned repainting project. Contact a professional painting contractor in Ferndale to discuss your home's or office's surfaces, preferred colors, and estimated costs.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Painting Services",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Interior and Exterior Painting Services Agency in Ferndale, WA",
      intro:
        "Maintaining painted surfaces helps residential and commercial properties retain a clean, presentable appearance. In Ferndale, WA, property owners can arrange painting for interior walls, exterior siding, ceilings, doors, cabinets, and office spaces. The right approach depends on the existing coating, material condition, and desired finish. Preparation may include cleaning, scraping, sanding, filling imperfections, and priming before new paint is applied. Whether the project addresses visible deterioration or a planned color change, proper product selection and careful workmanship help create a consistent result across the building.",
      sections: [
        {
          heading:
            "Local Interior and Exterior Painters Company in Ferndale, WA",
          body: [
            "A property's appearance is influenced by the condition of both its indoor and outdoor painted surfaces. Interior work may focus on walls, ceilings, trim, and doors, while exterior painting addresses siding and other suitable building materials. Ferndale homeowners and business owners can review their priorities before choosing a project scope. Existing coatings should be inspected to identify peeling, discoloration, or surface damage. The selected products must also match the material being painted. A coordinated approach helps create a consistent appearance while addressing the different preparation requirements of interior and exterior areas.",
          ],
        },
        {
          heading: "Affordable Residential Painting Services in Ferndale, WA",
          body: [
            "Residential painting can be organized around specific improvements rather than requiring every room to be painted at once. Homeowners in Ferndale may prioritize high-traffic hallways, family rooms, bedrooms, kitchens, or exterior sections showing visible wear. Project estimates depend on surface measurements, repairs, coating choices, and the amount of preparation involved. Selecting durable finishes for frequently used spaces can also help meet household needs. A clearly defined scope allows homeowners to focus on important areas, compare available options, and plan painting improvements according to their preferences and budget.",
          ],
        },
        {
          heading:
            "Experienced House Painting Contractors and Specialists in Ferndale, WA",
          body: [
            "House painting involves careful coordination of preparation, protection, application, and finishing. Contractors should assess walls, ceilings, siding, and trim before recommending products or beginning work. Ferndale homeowners can identify problems such as peeling coatings, stains, cracks, or damaged areas that may need attention. Preparation may require scraping loose paint, washing surfaces, sanding, filling imperfections, and priming. Protecting floors, fixtures, and nearby landscaping is also important during the project. Careful application helps achieve uniform coverage and a neat appearance across the selected areas.",
          ],
        },
        {
          heading:
            "Complete Interior and Exterior House Painting Contractors in Ferndale, WA",
          body: [
            "A complete house painting project can address both the atmosphere inside the home and its exterior presentation. Interior improvements may involve bedrooms, kitchens, hallways, living areas, and architectural trim. Exterior work can focus on siding, doors, and other suitable surfaces that need renewed coatings. Ferndale property owners can plan the project according to access, weather conditions, and household schedules. Choosing compatible colors creates a more coordinated design. Each surface should receive the preparation and paint product appropriate for its material, ensuring the finished work meets its intended appearance.",
          ],
        },
        {
          heading:
            "Cabinet Painting and Refinishing Contractors in Ferndale, WA",
          body: [
            "Cabinets often show wear around handles, corners, and frequently used doors. Refinishing can help update these surfaces without changing the entire kitchen or storage arrangement. Ferndale homeowners can explore new cabinet colors that coordinate with their counters, walls, flooring, and fixtures. The process generally includes cleaning, removing loose coatings, preparing the surface, and applying compatible primer and paint. Minor imperfections should be addressed before finishing. Proper drying and application techniques help create a consistent appearance and a coating suited to regular opening, closing, and everyday household contact.",
          ],
        },
        {
          heading: "Professional House Repainting Services in Ferndale, WA",
          body: [
            "Repainting can address faded finishes, outdated colors, and visible marks that make a home appear less maintained. The project may focus on selected rooms or cover multiple interior and exterior areas. Ferndale homeowners can discuss their preferred color changes and identify surfaces requiring additional preparation. Existing paint should be checked for peeling, cracks, stains, and adhesion problems before new coatings are applied. Cleaning, patching, sanding, and priming may be necessary to prepare the surface. A planned repainting project helps renew the home while maintaining a consistent finish.",
          ],
        },
        {
          heading: "Commercial Painting Services in Ferndale, WA",
          body: [
            "A clean painting finish can make offices, commercial buildings, and customer-facing spaces more welcoming. Businesses in Ferndale can plan interior painting for reception areas, workspaces, corridors, and meeting rooms. Exterior painting may address siding, entrances, and other visible sections of the facility. Project planning should consider business hours, building access, employee movement, and the areas affected by the work. Paint selection should also reflect the property's purpose and desired presentation. Coordinated preparation and application help maintain professional-looking surfaces while managing disruption to normal operations.",
          ],
        },
        {
          heading:
            "Drywall Preparation and Painting, Drywall Repair and Painting Contractors in Ferndale, WA",
          body: [
            "Damaged drywall can affect the appearance of an entire room, especially after new paint highlights uneven areas. Preparation may involve filling holes, repairing cracks, securing loose sections, smoothing joint compound, and sanding rough patches. Ferndale homeowners can include these repairs in a broader interior painting project. The surface should be clean and properly prepared before primer and paint are applied. Addressing imperfections first helps reduce visible marks and inconsistent coverage. Combining drywall repair and painting provides a practical way to restore walls and improve the overall appearance of interior spaces.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Painting Services in Ferndale, WA",
      description:
        "Get practical information about repainting schedules, wall preparation, cabinet finishes, exterior coatings, and commercial painting in Ferndale.",
      items: [
        {
          question: "What signs indicate that a home needs repainting?",
          answer:
            "Peeling paint, fading colors, visible stains, and damaged finishes may indicate repainting needs. Surface inspection helps establish the necessary preparation and coating requirements.",
        },
        {
          question: "Can painting improve the appearance of older properties?",
          answer:
            "Yes. Updated colors and properly prepared finishes can refresh older interiors and exteriors. Product selection should reflect the property's materials and existing conditions.",
        },
        {
          question:
            "Do painters prepare exterior siding before applying paint?",
          answer:
            "Preparation may include cleaning, scraping loose coatings, repairing defects, caulking suitable gaps, and priming. The exact process depends on siding condition and material.",
        },
        {
          question: "How can I choose paint colors for my home?",
          answer:
            "Consider natural lighting, room size, flooring, furniture, and architectural features. Comparing samples in the actual space can help narrow suitable color choices.",
        },
        {
          question: "Can commercial painting be scheduled in stages?",
          answer:
            "Depending on the building and project scope, work may be divided into sections. Discuss business operations, access, and scheduling requirements before painting begins.",
        },
        {
          question:
            "Why is drywall repair important before interior painting?",
          answer:
            "Unrepaired holes, cracks, and uneven patches can remain visible through new paint. Proper repairs and surface preparation help achieve a smoother, cleaner finish.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning a painting project in Ferndale? Request an estimate from Joyner Construction LLC for residential, commercial, interior, and exterior painting.",
    },
  };
}
