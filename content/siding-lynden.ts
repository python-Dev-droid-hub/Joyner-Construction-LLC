import type { LandingPageContent } from "@/content/landing";

export function isLyndenSiding(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "siding" && areaSlug === "lynden-wa";
}

export const lyndenSidingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Siding Repair or Replacement Services Contractor Lynden, WA",
  supporting:
    "Give your home or business a well-maintained exterior with Joyner Construction LLC. We provide siding repair, replacement, and installation services in Lynden, WA, helping property owners address exterior wear, update outdated materials, and create attractive building finishes through careful planning and quality workmanship.",
};

export const lyndenSidingSeo = {
  title:
    "Reliable Siding Contractors in Lynden, WA | Installation, Repairs & Home Exterior Upgrades – Joyner Construction LLC",
  description:
    "Upgrade your home's exterior with professional siding services in Lynden, WA. Joyner Construction LLC delivers dependable siding installation, repairs, and replacement solutions. Get in touch today!",
};

/** Swap the shared template copy for the Lynden siding page. Images stay in place. */
export function applyLyndenSidingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Siding Install or Replace or Repair Services Contractor or Company Lynden, WA",
      paragraphs: [
        "Your building's siding should complement its architecture while standing up to everyday outdoor conditions. Joyner Construction LLC helps residential and commercial property owners in Lynden, WA, maintain and improve their exterior surfaces. Our siding repair services address concerns such as damaged panels, loose sections, and deteriorating finishes.",
        "Whether you require house siding repair, residential siding repair, or more extensive exterior siding repair, we consider the existing condition before suggesting a suitable approach. We also provide siding installation solutions for property owners planning new construction or exterior renovations. From material considerations to finishing details, our team focuses on practical project planning and workmanship suited to your building.",
      ],
      visualCaption: "Tap a node to explore each stage of siding work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your renovation ideas and discuss your property's exterior requirements.",
          scope:
            "We establish project boundaries according to building conditions and priorities.",
          layout:
            "We plan exterior arrangements that complement your building's proportions and design.",
          craft:
            "Attention to installation details supports neat finishes and consistent workmanship.",
          structure:
            "We examine existing siding conditions before determining appropriate project requirements.",
          handoff:
            "We explain completed work and clarify relevant project information before finishing.",
        },
      },
    },
    services: {
      title: "New Siding Installation, Replacement, and Repair",
      items: [
        {
          ...install,
          label: "Install",
          title: "New Siding Installation",
          description:
            "Create a unique exterior with siding selected for your property's architecture and practical needs. We help plan new installations with attention to material options, preparation, and finishing details.",
          imageAlt: "New siding installation on a property in Lynden, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Siding Replacement",
          description:
            "When existing siding no longer suits your property's condition or appearance, replacement offers a fresh start. Update worn exterior materials with options that better complement your building.",
          imageAlt: "Siding replacement on a property in Lynden, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Siding Repair",
          description:
            "Loose, cracked, or deteriorating siding can affect your building's exterior. Targeted repairs address damaged sections and help maintain a consistent appearance without replacing unaffected materials unnecessarily.",
          imageAlt: "Siding repair on a property in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Siding installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Siding Installation Lynden, WA?",
      body: "Give your building the exterior attention it deserves. Contact Joyner Construction LLC to discuss residential or commercial siding installation in Lynden, WA, and explore options for your project.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Siding Services",
      title:
        "Certified or Trusted Siding Installation or Replacement Services Agency Lynden, WA",
      intro:
        "An exterior renovation is an opportunity to improve your property's appearance and address aging siding materials. Joyner Construction LLC provides siding installation and replacement solutions for homes and commercial buildings in Lynden, WA. We consider architectural features, existing exterior conditions, and material preferences when planning each project. Whether you want a subtle update or a noticeably different finish, our approach focuses on suitable products, careful preparation, and detailed installation.",
      sections: [
        {
          heading: "Vinyl Siding",
          body: [
            "Vinyl siding gives property owners flexibility when choosing an exterior style. Available in numerous colors, textures, and profiles, it can complement everything from traditional residences to contemporary buildings. Joyner Construction LLC helps homeowners in Lynden, WA, consider vinyl siding for their exterior renovation plans. Material selection should account for the building's design and installation requirements. Proper panel spacing, fastening, and finishing are essential details for a neat, consistent exterior.",
          ],
        },
        {
          heading: "Fiber Cement Siding",
          body: [
            "For property owners interested in a substantial exterior upgrade, fiber cement siding offers a versatile material option. Its range of finishes and profiles can suit different architectural preferences, including traditional and modern designs. Joyner Construction LLC helps Lynden, WA, property owners evaluate this material for residential and commercial projects. Installation planning should include appropriate cutting, handling, fastening, and finishing methods to support the material's intended performance and finished appearance.",
          ],
        },
        {
          heading: "General Siding",
          body: [
            "The right siding solution depends on more than color or exterior style. Building construction, existing material conditions, maintenance expectations, and exposure to outdoor elements all influence material selection. Joyner Construction LLC provides general siding solutions in Lynden, WA, for residential and commercial properties. Whether you are addressing aging surfaces or planning an exterior transformation, considering these factors helps establish a suitable direction for your property's siding improvements.",
          ],
        },
        {
          heading: "Local Siding Installation Company",
          body: [
            "Choosing a siding company involves finding a team that understands your project's priorities and communicates clearly throughout the process. Joyner Construction LLC works with property owners in Lynden, WA, on residential and commercial siding improvements. Whether your building needs a different exterior finish or new materials for an upcoming construction project, discussing design preferences, preparation, and installation expectations helps create a more organized approach to the work.",
          ],
        },
        {
          heading: "Siding Repair and Installation Services",
          body: [
            "Not every siding problem requires a complete exterior renovation. Isolated cracks, displaced panels, damaged edges, and deteriorating sections may be suitable for targeted repairs. Joyner Construction LLC provides siding repair and installation services in Lynden, WA, to address different exterior project requirements. After considering the affected areas and surrounding materials, property owners can determine whether individual repairs, partial replacement, or new siding installation offers the most practical solution.",
          ],
        },
        {
          heading: "Licensed and Insured Siding Contractors",
          body: [
            "Selecting a siding contractor requires more than comparing project estimates. Property owners should review applicable licensing, insurance coverage, references, and the contractor's ability to explain the proposed work. Joyner Construction LLC emphasizes the importance of informed contractor selection for siding projects in Lynden, WA. Before signing an agreement, clarify material responsibilities, project expectations, estimated timelines, and payment terms to establish a clear understanding of the work.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Siding Materials, Upgrades, and Installation",
      description:
        "Get answers about siding materials, exterior upgrades, repairs, and installation planning.",
      items: [
        {
          question: "What Are the Benefits of Updating Old Exterior Siding?",
          answer:
            "Updated siding can improve curb appeal, replace deteriorating materials, and refresh your building's overall appearance. Material selection should reflect your property's condition, design, and maintenance preferences.",
        },
        {
          question: "How Can I Identify Problems With My Existing Siding?",
          answer:
            "Look for warped panels, cracks, loose sections, peeling finishes, and moisture stains. These visible changes may indicate deterioration that requires closer inspection and appropriate repairs.",
        },
        {
          question: "Is Vinyl Siding Suitable for Residential Properties?",
          answer:
            "Vinyl siding suits many residential designs because it comes in different colors, textures, and profiles. Its suitability depends on installation conditions, architectural preferences, and maintenance expectations.",
        },
        {
          question: "Can I Replace Only One Section of Damaged Siding?",
          answer:
            "Yes, replacing an individual section may work when surrounding siding remains in good condition. Matching the existing material, color, and profile can influence the final appearance.",
        },
        {
          question: "What Should I Consider Before Choosing New Siding?",
          answer:
            "Compare material durability, appearance, maintenance needs, installation requirements, and overall cost. Your building's architecture and existing exterior conditions should also influence the final selection.",
        },
        {
          question:
            "Do Siding Contractors Handle Both Repairs and Full Installations?",
          answer:
            "Many siding contractors handle individual repairs, partial replacements, and complete installations. Ask about their specific services to determine whether they can accommodate your property's project requirements.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to improve your property's exterior in Lynden? Contact Joyner Construction LLC today to request your siding project estimate.",
    },
  };
}
