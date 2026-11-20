import type { LandingPageContent } from "@/content/landing";

export function isLyndenAduAdditions(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "adu-additions" && areaSlug === "lynden-wa";
}

export const lyndenAduAdditionsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial ADU Addition Services Contractor Lynden, WA",
  supporting:
    "Unlock new possibilities for your property with Joyner Construction LLC, a trusted residential and commercial ADU addition contractor in Lynden, WA. Our skilled construction team builds customized dwelling units, functional home extensions, and adaptable office spaces with careful planning, quality materials, and attention to your individual requirements.",
};

export const lyndenAduAdditionsSeo = {
  title:
    "Affordable & Professional ADU Additions Services in Lynden, WA | Joyner Construction LLC",
  description:
    "Looking for trusted ADU additions services in Lynden, WA? Joyner Construction LLC provides professional accessory dwelling unit construction, custom home additions, and reliable building solutions. Expand your living space with quality workmanship and expert construction services. Contact us today to discuss your project!",
};

/** Swap the shared template copy for the Lynden ADU additions page. Images stay in place. */
export function applyLyndenAduAdditionsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [adu, addition, expand] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom ADU Design and Building Services Contractor or Company Lynden, WA",
      paragraphs: [
        "Making room for new possibilities should not mean giving up the property you already enjoy. Joyner Construction LLC delivers customized ADU construction services in Lynden, WA, for homeowners and businesses seeking additional functional space. Our ADU builders develop solutions for residential ADU construction, attached dwelling unit additions, and independent backyard accommodations.",
        "Whether your project involves converting an existing structure, adding a private family suite, or building a backyard cottage, we consider architectural details and practical requirements throughout construction. As a local ADU construction company, we emphasize organized scheduling, thoughtful material selection, and consistent communication. Our goal is to create accessory dwelling unit additions that improve everyday convenience while respecting your property's existing design and intended use.",
      ],
      visualCaption: "Tap a node to explore each stage of ADU work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Start by discussing your property's limitations, opportunities, and intended improvements.",
          scope:
            "Project parameters outline proposed work, material choices, and scheduling considerations.",
          layout:
            "Smart spatial arrangements balance personal privacy with everyday living convenience.",
          craft:
            "Skilled construction techniques shape attractive finishes and dependable building details.",
          structure:
            "We consider foundational support, building connections, and overall structural stability.",
          handoff:
            "Completed spaces receive a walkthrough covering features and operating considerations.",
        },
      },
    },
    services: {
      title: "ADU Construction, Home Additions, and Living Space Expansion",
      items: [
        {
          ...adu,
          label: "ADU",
          title: "ADU Construction",
          description:
            "Establish a welcoming secondary residence through tailored ADU construction. Our builders consider privacy, utility connections, and interior efficiency while creating independent accommodations that fit your property's layout and residential needs.",
          imageAlt: "ADU construction in Lynden, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Additions",
          description:
            "Accommodate life's transitions with personalized home additions. We construct new rooms, connected suites, and versatile extensions that increase usable space while respecting the proportions and character of your existing residence.",
          imageAlt: "Home additions in Lynden, WA",
        },
        {
          ...expand,
          label: "Expand",
          title: "Living Space Expansion",
          description:
            "Adapt your property to changing priorities through purposeful living space expansion. Our team develops larger interiors, improved circulation, and multipurpose areas that support household activities, professional tasks, and comfortable daily routines.",
          imageAlt: "Living space expansion in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "ADU additions",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Small Home or Office Addition and Expansion Services in Lynden, WA?",
      body: "Ready to create more room for living or working? Joyner Construction LLC helps Lynden property owners explore customized additions, practical building configurations, and construction options suited to their expansion goals.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "ADU Additions",
      title:
        "Trusted and Reliable Complete ADU Planning and Construction Services Company Lynden, WA",
      intro:
        "Thoughtful ADU development considers how a property functions today and how its occupants may use it tomorrow. Joyner Construction LLC provides complete ADU planning and construction services in Lynden, WA, with solutions shaped around household arrangements and site characteristics. Our team discusses suitable building configurations, interior requirements, utility considerations, and construction details. We focus on creating functional secondary spaces through coordinated planning, attentive workmanship, and communication throughout the building process.",
      sections: [
        {
          heading: "ADU Construction Services Lynden, WA",
          body: [
            "Secondary housing can provide a convenient option for families seeking more independence within a shared property. Joyner Construction LLC offers ADU construction services in Lynden, WA, designed to accommodate varied residential needs. We discuss how occupants will use the space before considering room placement, kitchen facilities, bathroom arrangements, and access points. Our construction team brings these elements together through practical building solutions that emphasize comfort, durability, and everyday residential functionality.",
          ],
        },
        {
          heading: "ADU Addition Contractors Lynden, WA",
          body: [
            "Expanding an existing building requires careful attention to how new construction interacts with the original structure. As ADU addition contractors serving Lynden, WA, Joyner Construction LLC helps property owners consider compatible designs, structural transitions, and efficient space utilization. We examine project objectives alongside available building conditions to develop appropriate construction approaches. Our contractors coordinate essential building activities while emphasizing workmanship that supports reliable performance and a cohesive finished appearance for the addition.",
          ],
        },
        {
          heading: "Accessory Dwelling Unit Builders Lynden, WA",
          body: [
            "A secondary dwelling should feel like a complete home rather than an afterthought. Joyner Construction LLC provides accessory dwelling unit builders in Lynden, WA, who focus on comfortable proportions and practical amenities. We help homeowners consider storage, natural light, kitchen placement, and circulation between living areas. Whether the proposed unit is compact or more spacious, our approach supports usable interiors that suit independent occupancy while complementing the property's overall residential setting.",
          ],
        },
        {
          heading: "Residential ADU Construction Lynden, WA",
          body: [
            "Multigenerational households often benefit from having individual spaces that allow family members to remain nearby without sharing every room. Joyner Construction LLC handles residential ADU construction in Lynden, WA, with attention to household privacy and accessibility. We consider separate entrances, convenient living arrangements, and adaptable room configurations based on intended occupants. Our team develops residential additions that accommodate family relationships while supporting independent routines and comfortable living within the same property.",
          ],
        },
        {
          heading: "Detached ADU Construction Lynden, WA",
          body: [
            "For homeowners who prefer physical separation between residences, a detached ADU offers an alternative to extending the main house. Joyner Construction LLC develops detached ADU construction projects in Lynden, WA, with attention to lot arrangement and building access. We consider setbacks, site preparation, utility routing, and outdoor circulation as part of project discussions. Our contractors create standalone structures designed to provide independent living accommodations with functional interiors and compatible exterior features.",
          ],
        },
        {
          heading: "Attached ADU Additions Lynden, WA",
          body: [
            "An attached accessory dwelling unit can extend the usefulness of your existing residence without requiring a separate backyard building. Joyner Construction LLC provides attached ADU additions in Lynden, WA, with layouts that consider household connections and independent occupancy. We examine possible entry locations, shared walls, sound separation, and structural integration when discussing design options. Our building approach aims to create comfortable living quarters that work alongside the original home's established layout.",
          ],
        },
        {
          heading: "Garage Conversion to ADU",
          body: [
            "A garage may offer an adaptable starting point for a secondary living unit when its structure and location are suitable. Joyner Construction LLC assists Lynden homeowners with garage conversion to ADU construction that addresses residential comfort and functionality. We consider existing floor conditions, weather protection, window openings, mechanical systems, and utility availability. Our contractors plan improvements around the building's current configuration while accounting for relevant residential construction and permitting requirements.",
          ],
        },
        {
          heading: "Backyard ADU Construction Lynden, WA",
          body: [
            "Building a backyard residence involves balancing indoor comfort with the outdoor space surrounding it. Joyner Construction LLC offers backyard ADU construction in Lynden, WA, for homeowners considering cottages or separate family accommodations. We review potential building locations, outdoor access, daylight opportunities, and relationships between existing structures. Our team develops backyard dwelling solutions that make efficient use of available land while providing welcoming interiors and a sense of residential independence.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "ADU Addition Services in Lynden, WA",
      description:
        "Get clear guidance on common Lynden ADU planning and construction questions.",
      items: [
        {
          question: "Can I Add an ADU to My Existing Home in Lynden?",
          answer:
            "An attached ADU may be possible if your property and proposed design meet local requirements. Building configuration, structural conditions, utility capacity, and applicable regulations influence the available addition options for homeowners.",
        },
        {
          question:
            "Are Detached ADUs Suitable for Multigenerational Living Arrangements?",
          answer:
            "Detached units can provide separate accommodations for relatives while keeping family members close. Independent entrances, kitchens, bathrooms, and comfortable living areas support privacy and convenience for households with different daily routines.",
        },
        {
          question:
            "What Should I Consider Before Choosing an ADU Floor Plan?",
          answer:
            "Think about intended occupants, accessibility, storage requirements, room sizes, and natural lighting. A functional floor plan should accommodate daily activities while making efficient use of the available building footprint and space.",
        },
        {
          question: "Can an Attached ADU Have Its Own Private Entrance?",
          answer:
            "Yes, attached ADUs can incorporate separate entrances when the building design and applicable requirements allow. Entrance placement should consider accessibility, privacy, outdoor circulation, and the existing home's structural layout and configuration.",
        },
        {
          question: "Will a Garage Conversion Require Structural Improvements?",
          answer:
            "Some garage conversions need modifications to foundations, insulation, ventilation, windows, or utility systems. A building assessment helps identify necessary improvements before the existing space can function as residential living accommodations safely.",
        },
        {
          question: "How Can I Start Planning an ADU Construction Project?",
          answer:
            "Begin by identifying your space requirements, intended occupants, preferred design, and approximate budget. Discussing these details with a contractor helps establish project priorities and determine which building options deserve further evaluation.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to explore your Lynden ADU project and request a customized estimate.",
    },
  };
}
