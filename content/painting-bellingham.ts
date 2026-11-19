import type { LandingPageContent } from "@/content/landing";

export function isBellinghamPainting(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "painting" && areaSlug === "bellingham-wa";
}

export const bellinghamPaintingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Interior & Exterior Painting Services Contractor in Bellingham, WA",
  supporting:
    "Your property's paintwork influences its curb appeal, interior atmosphere, and protection against everyday wear. Residential and commercial owners in Bellingham, WA, can arrange professional painting for interior walls, exterior finishes, offices, and other building surfaces.",
};

export const bellinghamPaintingSeo = {
  title: "Painting Services in Bellingham, WA",
  description:
    "Joyner Construction LLC provides residential and commercial interior and exterior painting services in Bellingham, WA.",
};

/** Swap the shared template copy for the Bellingham painting page. Images stay in place. */
export function applyBellinghamPaintingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, exterior, refresh] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Interior Wall Painting and Finishing Services in Bellingham, WA",
      paragraphs: [
        "A carefully painted interior can make rooms feel brighter, cleaner, and more coordinated. Joyner Construction LLC provides interior painting services in Bellingham, WA, for homeowners and businesses seeking professional finishes. Projects can include residential interior painting, detailed work by interior house painters, and support from indoor painting contractors.",
        "Exterior painting services are also available for properties requiring exterior house painting or residential exterior painters. Commercial and residential owners can discuss outdoor painting contractors, affordable wall painting services, and professional interior wall painting. Each project considers existing surface conditions, suitable coatings, color preferences, and the desired appearance.",
      ],
      visualCaption: "Tap a node to explore each stage of painting work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Explore paint finishes, preparation needs, scheduling options, and project pricing.",
          scope:
            "The estimate considers surface area, coating requirements, repairs, and labor.",
          layout:
            "Room measurements and lighting guide color placement and painting priorities.",
          craft:
            "Consistent brushwork and rolling techniques produce attractive, uniform surface coverage.",
          structure:
            "Existing finishes receive inspection before cleaning, patching, sanding, or priming.",
          handoff:
            "Completed areas are reviewed carefully, with leftover materials and debris addressed.",
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
            "Refresh interior spaces with carefully selected colors and suitable finishes. Professional application can improve walls, ceilings, doors, and trim while creating a more welcoming atmosphere throughout your property.",
          imageAlt: "Interior painting in Bellingham, WA",
        },
        {
          ...exterior,
          label: "Exterior",
          title: "Exterior Painting",
          description:
            "Exterior coatings influence how a building looks and withstands environmental exposure. Proper cleaning, surface preparation, compatible products, and controlled application help maintain an attractive exterior appearance.",
          imageAlt: "Exterior painting in Bellingham, WA",
        },
        {
          ...refresh,
          label: "Refresh",
          title: "Paint Refresh Projects",
          description:
            "Selected repainting projects provide an opportunity to update worn walls, faded trim, and outdated color schemes. Targeted improvements can renew individual spaces without changing the entire property.",
          imageAlt: "Paint refresh project in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Painting services",
      heading:
        "Are You Looking for Professional House or Office Repainting Contractors in Bellingham, WA?",
      body: "Update tired walls, faded exterior finishes, or outdated office colors with professional repainting. Contact a qualified contractor to discuss your property, preferred finishes, preparation requirements, and project estimate.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Painting Services",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Interior and Exterior Painting Services Agency in Bellingham, WA",
      intro:
        "Painting can improve the look of a property while helping maintain its interior and exterior surfaces. In Bellingham, WA, residential and commercial owners can plan projects involving walls, ceilings, siding, doors, cabinets, and other suitable areas. Every successful finish depends on choosing compatible products and preparing surfaces correctly. Existing damage, old coatings, and environmental exposure should be considered before work begins. From a single-room update to a complete property repaint, a structured approach helps deliver consistent coverage and a finish suited to the building.",
      sections: [
        {
          heading:
            "Local Interior and Exterior Painters Company in Bellingham, WA",
          body: [
            "A property's painting requirements often extend beyond its walls. Interior spaces may need refreshed colors, repaired surfaces, and updated trim, while exterior areas require products suitable for their materials and exposure. Bellingham property owners can plan both types of work according to their building's condition and appearance goals. A surface inspection helps determine whether cleaning, sanding, patching, or priming is needed. Coordinating the colors and finishes across different areas can also create a more unified look. Proper planning keeps the project focused on the property's actual requirements.",
          ],
        },
        {
          heading:
            "Affordable Residential Painting Services in Bellingham, WA",
          body: [
            "Homeowners can prioritize painting improvements according to the rooms and surfaces that need the most attention. A residential project may cover a living room, kitchen, bedrooms, hallways, ceilings, or selected exterior sections. In Bellingham, estimates should account for room dimensions, furniture protection, surface repairs, paint quality, and preparation time. Choosing a suitable project scope helps homeowners manage costs without overlooking essential work. Color consultations and finish comparisons can also make product selection easier. Careful application helps renew the home while keeping the result consistent with the owner's preferences.",
          ],
        },
        {
          heading:
            "Experienced House Painting Contractors and Specialists in Bellingham, WA",
          body: [
            "A smooth finish requires more than applying a fresh coat over an existing surface. House painting contractors need to identify peeling paint, uneven patches, cracks, stains, and other conditions that could affect the result. Bellingham homeowners can discuss these concerns before selecting products and colors. Depending on the surface, preparation may involve washing, scraping, sanding, caulking, patching, and priming. Careful masking and application help protect surrounding fixtures and maintain clean edges. These steps support a professional appearance across interior rooms and exterior building surfaces.",
          ],
        },
        {
          heading:
            "Complete Interior and Exterior House Painting Contractors in Bellingham, WA",
          body: [
            "Updating a home's interior and exterior together can create a coordinated appearance from the front entrance to the living spaces. Interior painting may focus on walls, ceilings, doors, and trim, while exterior work addresses siding and other suitable surfaces. Bellingham homeowners can organize both projects around weather conditions, room access, and household schedules. Choosing complementary colors helps connect the property's overall design. Contractors should also evaluate each surface separately because interior and exterior coatings have different requirements. A detailed plan helps coordinate the work without compromising preparation or finish quality.",
          ],
        },
        {
          heading:
            "Cabinet Painting and Refinishing Contractors in Bellingham, WA",
          body: [
            "Worn cabinet finishes can make an otherwise attractive kitchen or bathroom appear dated. Painting and refinishing offer a way to update existing cabinetry while keeping its current configuration. Homeowners in Bellingham can consider colors that complement countertops, backsplashes, flooring, and hardware. Preparation generally involves cleaning away grease, removing loose coatings, addressing surface imperfections, and selecting compatible primers and paints. Doors and drawer fronts may need separate attention to achieve an even finish. Proper application helps cabinets look refreshed and supports a coating suited to frequent household use.",
          ],
        },
        {
          heading: "Professional House Repainting Services in Bellingham, WA",
          body: [
            "Repainting can restore rooms that have become marked, faded, or visually outdated. It is also an opportunity to change colors, coordinate finishes, and address minor surface defects before they become more noticeable. Bellingham homeowners can plan repainting for individual rooms or multiple areas throughout the house. Before application, contractors should examine the existing paint and determine whether scraping, patching, sanding, or priming is necessary. Suitable coatings and consistent application help create an even result. A well-organized repainting project can improve the property's appearance without requiring major structural changes.",
          ],
        },
        {
          heading: "Commercial Painting Services in Bellingham, WA",
          body: [
            "Office buildings, retail locations, and commercial facilities benefit from clean, well-maintained painted surfaces. Interior painting can update reception areas, meeting rooms, corridors, and employee workspaces. Exterior painting helps maintain the building's presentation to customers and visitors. Businesses in Bellingham should consider operating schedules, access restrictions, surface conditions, and the need to coordinate work around daily activities. Choosing suitable colors and finishes can also support the company's professional image. A defined schedule and preparation plan help manage the project while limiting unnecessary interruptions to normal operations.",
          ],
        },
        {
          heading:
            "Drywall Preparation and Painting, Drywall Repair and Painting Contractors in Bellingham, WA",
          body: [
            "Wall imperfections can remain visible even after applying high-quality paint. Damaged drywall, loose joint compound, nail holes, cracks, and uneven patches should be addressed before finishing begins. Bellingham property owners can arrange drywall preparation and repair as part of an interior painting project. The work may involve filling holes, replacing damaged sections, smoothing joints, sanding rough areas, and applying primer. Proper preparation creates a more even foundation for paint and helps reduce visible inconsistencies. Combining drywall repairs with repainting provides a practical way to improve the overall condition of interior walls.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Painting Services in Bellingham, WA",
      description:
        "Explore answers about home painting, exterior coatings, drywall preparation, cabinet refinishing, and commercial painting services in Bellingham.",
      items: [
        {
          question:
            "What areas can be included in an interior painting project?",
          answer:
            "Interior projects can cover walls, ceilings, doors, trim, cabinets, hallways, and other suitable surfaces. The final scope depends on your property's needs.",
        },
        {
          question:
            "Does exterior painting require different paint from interior work?",
          answer:
            "Yes. Exterior coatings are formulated for outdoor exposure, while interior products are selected for indoor surfaces, cleaning requirements, and room conditions.",
        },
        {
          question: "Can painters work around occupied commercial offices?",
          answer:
            "Scheduling may be arranged around business operations, subject to access and project requirements. Discuss working hours and affected areas before the project starts.",
        },
        {
          question: "What should happen before repainting an old wall?",
          answer:
            "Inspect the existing coating, clean the surface, repair damage, sand rough sections, and apply primer when necessary. Preparation depends on wall condition.",
        },
        {
          question: "Is cabinet refinishing suitable for older kitchens?",
          answer:
            "It can be suitable when cabinets remain structurally sound. Their material, existing coating, and overall condition determine the appropriate preparation and refinishing method.",
        },
        {
          question: "Can drywall damage be fixed before painting?",
          answer:
            "Yes. Holes, cracks, dents, and damaged joints can be repaired and smoothed before primer and paint are applied for a cleaner finish.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Give your Bellingham property a fresh appearance. Contact Joyner Construction LLC for painting estimates covering interior walls, exterior surfaces, offices, and residential projects.",
    },
  };
}
