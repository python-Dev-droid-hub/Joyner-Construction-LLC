import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonPainting(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "painting" && areaSlug === "burlington-wa";
}

export const burlingtonPaintingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Interior & Exterior Painting Services Contractor in Burlington, WA",
  supporting:
    "Well-maintained paintwork gives buildings a cleaner appearance and helps preserve the surfaces beneath it. Property owners in Burlington, WA, can explore professional painting for homes, offices, commercial facilities, interior walls, exterior finishes, and other suitable surfaces.",
};

export const burlingtonPaintingSeo = {
  title:
    "Professional Home Painters for Interior, Exterior & Residential Painting in Burlington, WA | Joyner Construction LLC",
  description:
    "Looking to upgrade your property in Burlington, WA? Choose Joyner Construction LLC for expert interior painting, exterior painting, house repainting, and wall finishing services. Give your home a beautiful new look with quality craftsmanship. Contact us today to schedule your painting project and request a quote!",
};

/** Swap the shared template copy for the Burlington painting page. Images stay in place. */
export function applyBurlingtonPaintingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [interior, exterior, refresh] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Interior Wall Painting and Finishing Services in Burlington, WA",
      paragraphs: [
        "A painting project should reflect how a property is used and the appearance its owner wants to achieve. Joyner Construction LLC provides interior painting services in Burlington, WA, for residential and commercial buildings. Homeowners can explore residential interior painting with experienced interior house painters and indoor painting contractors.",
        "Exterior painting services include exterior house painting and support from residential exterior painters for suitable outdoor surfaces. Commercial property owners can also discuss outdoor painting contractors, professional wall painting services, and affordable interior wall painting. Proper surface preparation and appropriate coatings help deliver finishes suited to each property's requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of painting work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss painting priorities, coating selections, property access, and project timelines.",
          scope:
            "Defined project details cover surfaces, preparation, products, repairs, and labor.",
          layout:
            "Color coordination connects rooms, exterior features, architectural details, and finishes.",
          craft:
            "Accurate paint application provides even coverage and carefully finished edges.",
          structure:
            "Surface evaluation identifies repairs and preparation required for successful coating.",
          handoff:
            "Project completion includes painted-area inspection, cleanup, and final communication.",
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
            "Interior painting can bring consistency to spaces with mismatched colors or aging finishes. Updated coatings refresh walls, ceilings, doors, and trim while complementing the property's existing design elements.",
          imageAlt: "Interior painting in Burlington, WA",
        },
        {
          ...exterior,
          label: "Exterior",
          title: "Exterior Painting",
          description:
            "Repainting exterior surfaces helps improve a building's presentation and maintain its protective finish. Appropriate coatings and thorough preparation contribute to consistent coverage across siding, trim, and other areas.",
          imageAlt: "Exterior painting in Burlington, WA",
        },
        {
          ...refresh,
          label: "Refresh",
          title: "Paint Refresh Projects",
          description:
            "Targeted repainting can renew entrances, selected rooms, office spaces, and decorative features. Focused improvements provide flexibility when a property needs a visual update rather than complete repainting.",
          imageAlt: "Paint refresh project in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Painting services",
      heading:
        "Are You Looking for Professional House or Office Repainting Contractors in Burlington, WA?",
      body: "Give your home or workplace a more polished appearance with professional repainting. Contact a qualified contractor in Burlington to discuss color updates, surface preparation, coating options, and project estimates.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Painting Services",
      title:
        "Certified, Trusted, and Reliable Commercial or Residential Interior and Exterior Painting Services Agency in Burlington, WA",
      intro:
        "A well-executed painting project brings together suitable coatings, clean preparation, and attention to the property's individual surfaces. Homeowners and business owners in Burlington, WA, can plan improvements for interior walls, ceilings, exterior siding, cabinets, and commercial spaces. Different materials require different preparation methods and paint products, making an initial surface evaluation important. Existing damage should also be addressed before application. Whether refreshing a single area or updating an entire building, an organized process helps achieve consistent coverage and a finish that supports the property's intended appearance.",
      sections: [
        {
          heading:
            "Local Interior and Exterior Painters Company in Burlington, WA",
          body: [
            "Painting requirements can vary between residential interiors, commercial workspaces, and exposed exterior surfaces. A property's walls may need a simple color update, while siding and trim may require more extensive cleaning and preparation. Burlington property owners can discuss the areas they want to improve and establish suitable coating options for each material. Interior and exterior projects should be evaluated separately to account for their different environmental conditions. Careful coordination of colors, finishes, and preparation helps maintain a consistent appearance while addressing the practical needs of the building.",
          ],
        },
        {
          heading:
            "Affordable Residential Painting Services in Burlington, WA",
          body: [
            "A residential painting project can be planned around the rooms and surfaces that would benefit most from an update. Homeowners may choose to refresh a single bedroom, repaint shared living spaces, or improve the exterior appearance of the house. In Burlington, project estimates should reflect surface measurements, repair requirements, preparation time, and paint specifications. Selecting the right finish for each room also matters, especially in kitchens, hallways, and frequently used spaces. A clearly defined project helps homeowners prioritize improvements and make informed decisions about available painting options.",
          ],
        },
        {
          heading:
            "Experienced House Painting Contractors and Specialists in Burlington, WA",
          body: [
            "Different parts of a home require different painting techniques and preparation methods. Interior walls may need patching and sanding, while exterior siding may require cleaning, scraping, and attention to weather-exposed areas. Burlington homeowners can arrange an evaluation to identify these requirements before selecting paint products. Contractors should also consider the existing coating and whether primer or additional surface treatment is appropriate. Careful masking, controlled application, and attention to edges help create a consistent finish. These details contribute to a neat appearance across the property's painted surfaces.",
          ],
        },
        {
          heading:
            "Complete Interior and Exterior House Painting Contractors in Burlington, WA",
          body: [
            "A full-house painting project provides an opportunity to coordinate colors throughout the interior and exterior. Homeowners can plan refreshed living areas, bedrooms, kitchens, ceilings, trim, siding, and other suitable surfaces as part of a broader improvement. In Burlington, project coordination should consider room access, outdoor conditions, preparation requirements, and the order of work. Complementary color selections can create a more unified appearance from the home's exterior to its interior spaces. Evaluating each surface individually helps determine the appropriate coating and preparation before the painting process begins.",
          ],
        },
        {
          heading:
            "Cabinet Painting and Refinishing Contractors in Burlington, WA",
          body: [
            "Updating cabinets through painting can provide a noticeable design change without replacing the existing storage units. Kitchens, bathrooms, laundry rooms, and built-in storage areas may all benefit from refreshed finishes. Burlington homeowners can compare colors that work with surrounding countertops, tiles, flooring, and wall treatments. Cabinet preparation generally includes removing dirt and grease, addressing surface defects, sanding, and applying compatible primer. Paint selection should account for frequent handling and cleaning. Careful application across doors, drawer fronts, and exposed frames helps create a more uniform and coordinated appearance.",
          ],
        },
        {
          heading: "Professional House Repainting Services in Burlington, WA",
          body: [
            "When existing paint becomes dull, marked, or damaged, repainting can restore a cleaner appearance to the property. The work may include changing room colors, refreshing trim, or updating exterior surfaces that show signs of deterioration. Burlington homeowners can identify the areas that require attention and discuss suitable finishes before work begins. Preparation should address loose paint, stains, cracks, and other imperfections. Depending on the surface, cleaning, sanding, patching, and priming may be necessary. A properly planned repainting project helps improve appearance while addressing existing coating problems.",
          ],
        },
        {
          heading: "Commercial Painting Services in Burlington, WA",
          body: [
            "Commercial painting plays an important role in maintaining the appearance of offices, storefronts, business facilities, and other professional spaces. Interior updates can refresh reception areas, hallways, meeting rooms, and employee workspaces. Exterior projects may focus on building entrances, siding, trim, and other visible surfaces. Burlington businesses should discuss scheduling, site accessibility, customer movement, and operational requirements before painting begins. Choosing suitable colors and finishes can support the property's intended image. A coordinated project plan helps manage the work while keeping affected areas organized.",
          ],
        },
        {
          heading:
            "Drywall Preparation and Painting, Drywall Repair and Painting Contractors in Burlington, WA",
          body: [
            "A fresh paint finish cannot fully conceal poorly repaired drywall. Cracks, nail holes, dents, damaged corners, and uneven joints should be corrected before painting begins. Burlington property owners can include drywall repair in their interior renovation or repainting plans. Preparation may involve removing loose material, filling damaged sections, smoothing joint compound, sanding, and applying primer. Once the wall is properly prepared, paint can be applied for a more consistent appearance. Addressing drywall problems before finishing helps improve the overall quality of the room and reduces visible surface imperfections.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Painting Services in Burlington, WA",
      description:
        "Discover helpful information about residential repainting, office painting, cabinet refinishing, drywall repairs, and exterior coating options in Burlington.",
      items: [
        {
          question: "What is the best time to schedule exterior painting?",
          answer:
            "Exterior painting should be scheduled when weather and surface conditions suit the selected coating. Temperature, moisture, and product instructions influence appropriate application conditions.",
        },
        {
          question:
            "Can I repaint my home without changing its existing colors?",
          answer:
            "Yes. Repainting can restore the same color or refresh the finish. Surface preparation and compatible coatings remain important for a consistent appearance.",
        },
        {
          question: "What surfaces can commercial painters work on?",
          answer:
            "Commercial painting may include suitable interior walls, ceilings, doors, trim, siding, and other building surfaces. The project scope depends on material conditions and requirements.",
        },
        {
          question: "How long does residential interior painting take?",
          answer:
            "Duration depends on room sizes, surface repairs, preparation, paint coats, drying requirements, and access. A project assessment helps establish a realistic schedule.",
        },
        {
          question: "Can damaged drywall be repaired and painted together?",
          answer:
            "Yes. Combining drywall repairs with painting allows damaged areas to be prepared before new coatings are applied, helping create a more uniform finish.",
        },
        {
          question: "Is cabinet painting a good alternative to replacement?",
          answer:
            "Painting can be suitable when cabinet boxes and doors remain in good condition. An inspection helps determine whether refinishing is practical for the existing material.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning to repaint your Burlington property? Contact Joyner Construction LLC to request an estimate for interior, exterior, cabinet, and commercial painting.",
    },
  };
}
