import type { LandingPageContent } from "@/content/landing";

export function isFerndaleAduAdditions(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "adu-additions" && areaSlug === "ferndale-wa";
}

export const ferndaleAduAdditionsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial ADU Addition Services Contractor Ferndale, WA",
  supporting:
    "Make better use of your property with customized ADU addition services from Joyner Construction LLC. Serving Ferndale, WA, our residential and commercial construction contractors create functional living areas, backyard cottages, and property expansions with thoughtful designs, dependable craftsmanship, and solutions tailored to your space requirements.",
};

export const ferndaleAduAdditionsSeo = {
  title: "ADU Addition Services in Ferndale, WA",
  description:
    "Joyner Construction LLC provides residential and commercial ADU addition, home addition, and living space expansion services in Ferndale, WA.",
};

/** Swap the shared template copy for the Ferndale ADU additions page. Images stay in place. */
export function applyFerndaleAduAdditionsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [adu, addition, expand] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom ADU Design and Building Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "Your property should offer enough room to accommodate changing needs without compromising comfort or functionality. Joyner Construction LLC provides professional ADU construction services in Ferndale, WA, helping homeowners and commercial property owners create purposeful spaces through customized building solutions. Our ADU builders handle residential ADU construction, accessory dwelling unit additions, and home ADU addition services with careful attention to property requirements.",
        "Whether you are considering attached ADU construction, a backyard cottage, or an independent living area, our contractors develop practical solutions suited to your goals. From initial discussions through construction, we emphasize organized project management, durable materials, and quality workmanship. Discover how thoughtfully planned additions can improve your property's everyday usability and long-term flexibility.",
      ],
      visualCaption: "Tap a node to explore each stage of ADU work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your space requirements and preferred construction features.",
          scope:
            "Detailed project discussions establish priorities, design expectations, and construction considerations.",
          layout:
            "Thoughtful floor plans create comfortable spaces while maximizing available square footage.",
          craft:
            "Careful workmanship brings lasting quality to every custom construction detail.",
          structure:
            "Sound structural planning supports durable additions and dependable building performance.",
          handoff:
            "Final project walkthroughs clarify completed features and important maintenance considerations.",
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
            "Create an independent residential retreat with professional ADU construction tailored to your property. We develop practical floor plans, coordinate building requirements, and construct comfortable spaces designed for lasting everyday use.",
          imageAlt: "ADU construction in Ferndale, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Additions",
          description:
            "Give your household room to grow with carefully planned home additions. Our contractors build functional bedrooms, expanded gathering areas, and customized extensions that blend naturally with your existing home's architecture.",
          imageAlt: "Home additions in Ferndale, WA",
        },
        {
          ...expand,
          label: "Expand",
          title: "Living Space Expansion",
          description:
            "Reimagine how your existing property works with strategic living space expansions. We improve room arrangements, increase usable square footage, and develop flexible interiors that accommodate evolving residential or commercial needs.",
          imageAlt: "Living space expansion in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "ADU additions",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Small Home or Office Addition and Expansion Services in Ferndale, WA?",
      body: "Planning to expand your home or commercial property? Connect with Joyner Construction LLC in Ferndale, WA, to explore customized additions, efficient construction solutions, and practical improvements for your available space.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "ADU Additions",
      title:
        "Trusted and Reliable Complete ADU Planning and Construction Services Company Ferndale, WA",
      intro:
        "A successful property addition begins with understanding how the finished space will function. Joyner Construction LLC offers comprehensive ADU planning and construction services in Ferndale, WA, for homeowners seeking practical, customized improvements. Our team considers building placement, architectural compatibility, structural requirements, and interior efficiency when developing construction plans. From secondary residences to property extensions, we focus on organized coordination, clear communication, and workmanship that supports comfortable, lasting use for property owners.",
      sections: [
        {
          heading: "ADU Construction Services Ferndale, WA",
          body: [
            "Adding a secondary residence requires more than selecting a floor plan. Joyner Construction LLC provides ADU construction services in Ferndale, WA, with attention to property conditions, functional design, and building requirements. Our contractors help homeowners explore suitable layouts, efficient room configurations, and construction materials that complement existing structures. Whether you need accommodations for relatives or an independent residential unit, we create practical spaces that support privacy, accessibility, and everyday comfort.",
          ],
        },
        {
          heading: "ADU Addition Contractors Ferndale, WA",
          body: [
            "When your existing property no longer provides enough usable space, a carefully designed addition can offer a practical solution. Our ADU addition contractors in Ferndale, WA, help evaluate expansion possibilities based on your building's layout and intended use. Joyner Construction LLC coordinates construction considerations, structural connections, and interior arrangements to develop functional additions. We prioritize reliable communication and detailed workmanship while creating spaces that integrate comfortably with your property's existing features.",
          ],
        },
        {
          heading: "Accessory Dwelling Unit Builders Ferndale, WA",
          body: [
            "An accessory dwelling unit can accommodate different household arrangements while making productive use of residential property. Joyner Construction LLC works with Ferndale homeowners to create secondary living spaces that balance independence and convenience. Our accessory dwelling unit builders consider natural lighting, accessible entrances, room dimensions, and efficient circulation during project planning. From compact residences to larger customized units, we focus on comfortable interiors and construction solutions suited to your needs.",
          ],
        },
        {
          heading: "Residential ADU Construction Ferndale, WA",
          body: [
            "Families sometimes need separate accommodations for aging parents, adult children, or visiting relatives. Residential ADU construction offers an opportunity to address these needs while maintaining distinct living arrangements. Joyner Construction LLC develops residential ADU solutions in Ferndale, WA, with practical floor plans and carefully considered building features. Our contractors emphasize privacy, usable storage, convenient access, and durable construction, helping homeowners create adaptable spaces that accommodate different stages of family life.",
          ],
        },
        {
          heading: "Detached ADU Construction Ferndale, WA",
          body: [
            "Separate backyard residences can offer greater independence without requiring changes to your primary home's interior layout. Joyner Construction LLC provides detached ADU construction in Ferndale, WA, for property owners interested in standalone living accommodations. We assess available building areas, access routes, utility considerations, and architectural preferences before developing construction plans. Our team creates functional detached units with comfortable interiors, dependable structural elements, and exterior designs that complement the surrounding residential property.",
          ],
        },
        {
          heading: "Attached ADU Additions Ferndale, WA",
          body: [
            "Extending your existing residence with an attached ADU can create a separate living area while maintaining a physical connection to the main building. Joyner Construction LLC helps Ferndale homeowners plan attached ADU additions that suit available space and structural conditions. We consider entrance placement, privacy, room arrangements, and architectural transitions throughout the process. Our construction team focuses on creating cohesive extensions that provide everyday convenience without overlooking important functional details.",
          ],
        },
        {
          heading: "Garage Conversion to ADU",
          body: [
            "Instead of leaving an existing garage underused, consider transforming it into a comfortable secondary residence. Joyner Construction LLC assists Ferndale property owners with garage conversion to ADU projects that make better use of existing structures. Our team evaluates building conditions, ceiling heights, insulation needs, utility access, and interior layout possibilities. We plan necessary construction improvements to support functional residential spaces while considering applicable building codes and local conversion requirements.",
          ],
        },
        {
          heading: "Backyard ADU Construction Ferndale, WA",
          body: [
            "A thoughtfully positioned backyard cottage can introduce additional living space while preserving the usefulness of your outdoor surroundings. Joyner Construction LLC offers backyard ADU construction in Ferndale, WA, with designs tailored to individual lot configurations. Our builders consider pedestrian access, window placement, landscaping relationships, and interior functionality when planning each structure. We develop inviting backyard residences that provide private accommodations while maintaining an appropriate connection to the main property.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "ADU Addition Services in Ferndale, WA",
      description:
        "Find helpful answers about planning and building ADUs in Ferndale.",
      items: [
        {
          question: "What Types of ADUs Can Homeowners Build in Ferndale, WA?",
          answer:
            "Homeowners may consider attached units, detached backyard cottages, or garage conversions, depending on property eligibility. Local development regulations, building standards, and site conditions determine which construction options are permitted.",
        },
        {
          question: "Do I Need Building Permits for an ADU in Ferndale, WA?",
          answer:
            "ADU projects generally require applicable building permits and compliance with local development regulations. Additional approvals may depend on utility connections, site conditions, structural changes, and the proposed unit's design and location.",
        },
        {
          question:
            "Can an ADU Provide Separate Living Space for Family Members?",
          answer:
            "Yes, an ADU can provide independent accommodations for relatives while keeping households on the same property. Appropriate layouts, private entrances, and essential living facilities help support comfortable, separate residential arrangements.",
        },
        {
          question: "What Factors Influence the Cost of Building an ADU?",
          answer:
            "Construction expenses depend on unit size, site preparation, foundation requirements, materials, utilities, and interior finishes. Design complexity and permitting considerations also influence the overall budget for an accessory dwelling unit project.",
        },
        {
          question:
            "Is It Possible to Convert an Existing Garage Into Living Space?",
          answer:
            "Garage conversions may be possible when the structure meets applicable requirements or can be appropriately modified. Evaluating foundations, insulation, ventilation, utilities, and available space helps determine project feasibility before construction begins.",
        },
        {
          question: "How Should I Prepare for an ADU Construction Consultation?",
          answer:
            "Consider your intended use, preferred layout, available budget, and desired project timeline. Sharing property information and design ideas helps contractors discuss potential construction approaches and identify important planning considerations early.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Discuss your Ferndale ADU construction plans with Joyner Construction LLC and request your personalized estimate.",
    },
  };
}
