import type { LandingPageContent } from "@/content/landing";

export function isBellinghamAduAdditions(
  serviceSlug: string,
  areaSlug: string,
) {
  return serviceSlug === "adu-additions" && areaSlug === "bellingham-wa";
}

export const bellinghamAduAdditionsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial ADU Addition Services Contractor Bellingham, WA",
  supporting:
    "Joyner Construction LLC provides professional residential and commercial ADU addition services in Bellingham, WA. From backyard cottages to office space expansions, our skilled contractors deliver practical designs, quality craftsmanship, and dependable construction solutions that enhance property functionality, maximize available space, and support your long-term goals.",
};

export const bellinghamAduAdditionsSeo = {
  title: "ADU Addition Services in Bellingham, WA",
  description:
    "Joyner Construction LLC provides residential and commercial ADU addition, home addition, and living space expansion services in Bellingham, WA.",
};

/** Swap the shared template copy for the Bellingham ADU additions page. Images stay in place. */
export function applyBellinghamAduAdditionsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [adu, addition, expand] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom ADU Design and Building Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "Creating additional living or working space requires thoughtful planning, reliable construction, and attention to every detail. Joyner Construction LLC offers comprehensive ADU construction services in Bellingham, WA, helping property owners transform underused areas into comfortable, functional spaces.",
        "Our experienced ADU builders handle residential ADU construction, accessory dwelling unit additions, and customized home expansions with careful coordination. Whether you need affordable attached ADU construction, a separate backyard cottage, or an attached dwelling unit addition, our team develops solutions that complement your existing property. As trusted local ADU contractors, we prioritize structural integrity, efficient layouts, and lasting craftsmanship. From backyard living space additions to commercial property improvements, we help bring your construction plans to life.",
      ],
      visualCaption: "Tap a node to explore each stage of ADU work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your project ideas with our team for personalized guidance.",
          scope:
            "We establish clear project requirements, construction priorities, and realistic expectations.",
          layout:
            "We create functional layouts that maximize comfort, accessibility, and space.",
          craft:
            "Our skilled builders deliver precise workmanship using dependable construction materials.",
          structure:
            "We develop durable structural solutions supporting safety and long-term performance.",
          handoff:
            "We review completed construction details before delivering your finished space.",
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
            "Build a comfortable, independent living space with customized ADU construction solutions. Our team manages structural planning, efficient layouts, and quality workmanship to create practical additions that complement your property.",
          imageAlt: "ADU construction in Bellingham, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Additions",
          description:
            "Expand your home's possibilities with thoughtfully designed additions that improve comfort and functionality. We construct extra bedrooms, family rooms, and flexible spaces while maintaining architectural consistency and dependable structural quality.",
          imageAlt: "Home additions in Bellingham, WA",
        },
        {
          ...expand,
          label: "Expand",
          title: "Living Space Expansion",
          description:
            "Transform limited square footage into versatile areas designed around your lifestyle. Our construction team creates practical room expansions, improved layouts, and comfortable interiors that accommodate changing household or business needs.",
          imageAlt: "Living space expansion in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "ADU additions",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Small Home or Offices Addition and Expansion Services Contractors Bellingham, WA?",
      body: "Need more functional space? Contact Joyner Construction LLC for customized residential and commercial additions in Bellingham, WA. Discuss your project goals and explore dependable construction solutions with our team today.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "ADU Additions",
      title:
        "Certified Or Trusted Reliable Complete ADU Planning and Construction Services Agency Bellingham, WA",
      intro:
        "Expanding your property starts with a construction partner who understands your vision and practical requirements. Joyner Construction LLC provides reliable ADU planning and construction services throughout Bellingham, WA. We coordinate design considerations, structural requirements, material selection, and construction activities to support successful projects. Whether developing a private guest residence or expanding usable space, our team emphasizes thoughtful communication, efficient coordination, and durable results tailored to your property's specific needs and goals.",
      sections: [
        {
          heading: "ADU Construction Services Bellingham, WA",
          body: [
            "A well-designed accessory dwelling unit can provide flexible accommodation without requiring a completely new property. Joyner Construction LLC delivers ADU construction services in Bellingham, WA, tailored to different property layouts and household needs. Our team considers available space, structural requirements, accessibility, and interior functionality throughout construction. From compact living quarters to spacious secondary residences, we focus on creating attractive, durable units that integrate naturally with your existing surroundings and lifestyle.",
          ],
        },
        {
          heading: "ADU Addition Contractors Bellingham, WA",
          body: [
            "Choosing experienced ADU addition contractors helps simplify complex building decisions and construction coordination. Joyner Construction LLC assists Bellingham property owners with planning practical additions that support privacy, convenience, and everyday functionality. We evaluate existing structures, discuss project requirements, and organize construction activities around your objectives. Whether extending your home or developing additional usable square footage, our contractors prioritize dependable workmanship, appropriate materials, and clear communication throughout each project stage from beginning to completion.",
          ],
        },
        {
          heading: "Accessory Dwelling Unit Builders Bellingham, WA",
          body: [
            "Every accessory dwelling unit should balance comfortable living arrangements with efficient use of available property space. Our accessory dwelling unit builders in Bellingham, WA, create customized secondary residences suited to individual preferences. Joyner Construction LLC focuses on practical floor plans, functional room arrangements, and construction details that complement surrounding architecture. We help property owners develop adaptable spaces suitable for guests, extended family, or other permitted residential purposes while maintaining lasting structural quality.",
          ],
        },
        {
          heading: "Residential ADU Construction Bellingham, WA",
          body: [
            "Growing households often need additional accommodation without sacrificing the comfort of their primary residence. Joyner Construction LLC provides residential ADU construction in Bellingham, WA, with solutions designed around changing family requirements. We help homeowners explore efficient living arrangements, suitable building configurations, and practical interior features. Our construction approach emphasizes dependable materials, organized project coordination, and comfortable spaces that accommodate independent living while preserving the character and usability of existing residential properties.",
          ],
        },
        {
          heading: "Detached ADU Construction Bellingham, WA",
          body: [
            "A detached accessory dwelling unit creates a separate residential space while maintaining independence from the main house. Joyner Construction LLC offers detached ADU construction in Bellingham, WA, for homeowners seeking privacy and flexible property use. Our team considers building placement, access, utility connections, and efficient interior layouts during project planning. We construct standalone living spaces with attention to architectural compatibility, structural durability, and practical features that support comfortable everyday residential use.",
          ],
        },
        {
          heading: "Attached ADU Additions Bellingham, WA",
          body: [
            "Connecting a secondary living area to your existing home can provide additional accommodation while preserving convenient access. Joyner Construction LLC specializes in attached ADU additions in Bellingham, WA, designed to complement existing residential structures. Our contractors assess available building space, structural connections, and functional layout possibilities before construction begins. We focus on creating comfortable, practical extensions that maintain visual consistency, support privacy, and make efficient use of your property's existing footprint.",
          ],
        },
        {
          heading: "Garage Conversion to ADU",
          body: [
            "An underused garage offers an opportunity to create functional living accommodations without constructing an entirely separate building. Joyner Construction LLC helps homeowners explore garage conversion to ADU projects through careful structural evaluation and practical design planning. Our team considers insulation, ventilation, access, interior arrangements, and utility requirements when developing conversion solutions. We transform suitable garage spaces into comfortable residential areas while addressing construction requirements, usability, and compatibility with the surrounding property.",
          ],
        },
        {
          heading: "Backyard ADU Construction Bellingham, WA",
          body: [
            "Your backyard can become a valuable extension of your property's living possibilities through carefully planned ADU construction. Joyner Construction LLC provides backyard ADU construction in Bellingham, WA, creating independent cottages and versatile residential spaces. Our builders consider site accessibility, outdoor surroundings, architectural preferences, and efficient building layouts. Whether you envision guest accommodations or additional family housing, we develop practical backyard structures designed for comfort, privacy, and dependable long-term use.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "ADU Addition Services in Bellingham, WA",
      description:
        "Explore answers to common questions about ADU construction in Bellingham.",
      items: [
        {
          question: "What Is an Accessory Dwelling Unit?",
          answer:
            "An accessory dwelling unit is a secondary residential space located on the same property as a primary home. It typically includes independent living facilities and requires applicable local approvals.",
        },
        {
          question:
            "Can I Build a Detached ADU on My Property in Bellingham, WA?",
          answer:
            "Detached ADU construction depends on applicable zoning regulations, property conditions, and building requirements. Our team can help you explore construction options and identify considerations before starting your project.",
        },
        {
          question: "How Long Does an ADU Construction Project Take?",
          answer:
            "Construction timelines vary depending on project size, design complexity, permitting, site conditions, and material availability. We discuss anticipated schedules during planning and provide updates as your construction project progresses.",
        },
        {
          question: "Can an Existing Garage Be Converted Into an ADU?",
          answer:
            "Many garages can potentially become accessory dwelling units when structural conditions and local regulations allow. A proper assessment helps determine necessary modifications, utility improvements, and building compliance requirements.",
        },
        {
          question:
            "What Is the Difference Between Attached and Detached ADUs?",
          answer:
            "Attached ADUs connect directly to an existing residence, while detached ADUs occupy separate structures. Both provide additional living space, although construction requirements, layouts, privacy, and accessibility can differ significantly.",
        },
        {
          question: "How Much Does ADU Construction Cost in Bellingham, WA?",
          answer:
            "ADU construction costs depend on building size, site preparation, materials, utility connections, and design requirements. Requesting a project estimate helps clarify anticipated expenses based on your specific construction plans.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC today to discuss your ADU project and request a personalized estimate.",
    },
  };
}
