import type { LandingPageContent } from "@/content/landing";

export function isLyndenFences(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "fences" && areaSlug === "lynden-wa";
}

export const lyndenFencesHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Fence Repair, Installation & Replacement Services Contractor Lynden, WA",
  supporting:
    "A well-built fence brings order, character, and practical separation to your property. Joyner Construction LLC offers fence installation, repair, and replacement services in Lynden, WA, helping residential and commercial property owners create dependable boundaries through suitable materials, careful construction, and customized outdoor improvements.",
};

export const lyndenFencesSeo = {
  title:
    "Affordable Fence Installation, Repair & Replacement Services in Lynden, WA | Joyner Construction LLC",
  description:
    "Looking for trusted fence services in Lynden, WA? Joyner Construction LLC provides professional fence installation, repair, replacement, and custom fencing solutions to meet your property needs. Improve your home's privacy, security, and curb appeal with quality materials and expert craftsmanship. Contact us today!",
};

/** Swap the shared template copy for the Lynden fences page. Images stay in place. */
export function applyLyndenFencesContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Damaged Fence Panel Repair and Replacement Contractor or Company Lynden, WA",
      paragraphs: [
        "Fencing should complement the character of your property while providing the privacy and access control you need. Joyner Construction LLC delivers fence installation services in Lynden, WA, for residential yards, office properties, and other commercial spaces. Our team handles wooden fence repair, damaged panel replacement, new fence installation, and customized perimeter improvements.",
        "We consider outdoor conditions, property dimensions, and preferred fence styles when discussing construction options. From replacing deteriorated wood boards to installing attractive privacy barriers, our contractors emphasize appropriate materials and careful workmanship. Whether you need a small repair or a complete fencing project, we work toward practical results that improve boundary definition, outdoor usability, and the appearance of your surroundings.",
      ],
      visualCaption: "Tap a node to explore each stage of fencing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your enclosure goals, existing damage, and preferred design features.",
          scope:
            "Construction planning establishes work areas, fence specifications, and material needs.",
          layout:
            "Property measurements guide thoughtful fence positioning and convenient entrance placement.",
          craft:
            "Material preparation and precise assembly create cohesive, visually appealing fences.",
          structure:
            "Reliable framing and securely positioned supports strengthen the finished enclosure.",
          handoff:
            "We explain finished gate functions and basic fence care recommendations.",
        },
      },
    },
    services: {
      title: "Fence Installation, Replacement, and Repair",
      items: [
        {
          ...install,
          label: "Install",
          title: "Fence Installation",
          description:
            "Add definition and visual appeal to your property with tailored fence installation. We build practical outdoor boundaries using suitable materials, organized layouts, and construction details selected for your intended use.",
          imageAlt: "Fence installation in Lynden, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Fence Replacement",
          description:
            "Modernize aging perimeter structures with thoughtfully planned fence replacement. Our team identifies deteriorated fencing, discusses suitable alternatives, and installs updated sections that support property access, consistent appearance, and structural stability.",
          imageAlt: "Fence replacement in Lynden, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Fence Repair",
          description:
            "Keep your existing enclosure functional through professional fence repair services. We address weakened rails, broken pickets, damaged posts, and gate alignment concerns while maintaining the character of surrounding fence sections.",
          imageAlt: "Fence repair in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Fencing services",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Fencing Installation Needs in Lynden, WA?",
      body: "Improve your property's boundaries with fencing designed around your needs. Joyner Construction LLC helps Lynden homeowners and businesses explore practical fence repairs, attractive new installations, and reliable replacement options today.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Fencing Services",
      title:
        "Trusted Commercial or Residential Fence Installation Specialists and Contractors Lynden, WA",
      intro:
        "A fence should provide more than a visible dividing line. It should complement your property, accommodate regular access, and remain functional through changing outdoor conditions. Joyner Construction LLC offers residential and commercial fencing services in Lynden, WA, including new construction, repairs, and replacement work. Our contractors consider suitable fence configurations, material characteristics, and existing site features to develop practical installations that support privacy, appearance, and everyday property use.",
      sections: [
        {
          heading: "Reliable Fence Repair Contractors Company Lynden, WA",
          body: [
            "An aging fence may develop problems gradually, making early attention especially useful. Joyner Construction LLC provides fence repair services in Lynden, WA, for damaged rails, loose boards, leaning posts, and weakened connections. Our contractors examine the condition of affected sections before determining appropriate repair options. We focus on correcting problems that interfere with fence performance while maintaining compatible materials and finishes. Timely repairs can help preserve serviceable fencing and improve overall stability.",
          ],
        },
        {
          heading:
            "Affordable Custom Residential Fence Installation Lynden, WA",
          body: [
            "Residential fencing can create separate spaces for gardening, recreation, and quiet outdoor enjoyment. Joyner Construction LLC offers custom fence installation in Lynden, WA, with designs shaped around individual property features and household preferences. We help homeowners explore material options, fence heights, decorative details, and suitable gate placements. Our team develops practical installations that complement existing homes while balancing desired privacy, outdoor functionality, maintenance expectations, and project budget considerations.",
          ],
        },
        {
          heading: "Local Vinyl Fence Installation and Replacement Specialists",
          body: [
            "Vinyl fencing can provide an attractive, consistent boundary for homeowners who prefer a low-maintenance material. Joyner Construction LLC offers vinyl fence installation and replacement services in Lynden, WA, with options for different property configurations. Our contractors consider fence alignment, panel connections, and the placement of supporting posts. Whether updating deteriorated sections or constructing a new enclosure, we emphasize clean installation details and practical designs that complement residential outdoor spaces.",
          ],
        },
        {
          heading: "Metal Fence Installation and Repair Contractors",
          body: [
            "Metal fencing can enhance property definition while allowing open views across lawns and landscaped areas. Joyner Construction LLC provides metal fence installation and repair in Lynden, WA, for residential and commercial applications. Our contractors assess existing connections, support conditions, and damaged components when planning repairs. For new installations, we consider fence style, entry requirements, and appropriate construction methods to create functional boundaries that coordinate with surrounding exterior features.",
          ],
        },
        {
          heading: "Fence Gate Installation and Repair Contractors",
          body: [
            "Convenient access is an important part of a properly designed fence. Joyner Construction LLC provides fence gate installation and repair services in Lynden, WA, helping property owners improve everyday movement between outdoor areas. Our team addresses gate sagging, latch problems, worn hinges, and damaged supporting posts. We also install new gates that complement surrounding fence materials. Our focus remains on smooth operation, reliable closures, and practical entrance arrangements.",
          ],
        },
        {
          heading: "Residential Fence Repair Services Company",
          body: [
            "Small fencing problems can become more noticeable as boards loosen and supporting components deteriorate. Joyner Construction LLC offers residential fence repair services in Lynden, WA, to address localized damage before it affects larger sections. We examine existing materials, identify weakened connections, and consider suitable repair techniques. Our contractors work to restore structural function and consistent appearance, helping homeowners maintain attractive property boundaries without replacing components that remain in usable condition.",
          ],
        },
        {
          heading: "Privacy Fence Installation and Construction Services",
          body: [
            "A private outdoor setting can make everyday activities more enjoyable, whether relaxing on a patio or spending time with family. Joyner Construction LLC provides privacy fence installation in Lynden, WA, with options suited to different residential properties. We consider panel arrangements, fence height, landscaping, and convenient access when developing construction plans. Our team builds attractive barriers designed to provide visual separation while maintaining a cohesive exterior appearance.",
          ],
        },
        {
          heading: "Wood Fence Installation and Repair Contractors",
          body: [
            "Wood fencing remains a versatile option for property owners who appreciate natural materials and customizable designs. Joyner Construction LLC offers wood fence installation and repair services in Lynden, WA, for traditional picket fences, privacy panels, and other wooden enclosures. Our contractors consider board arrangement, post support, and exposure to outdoor moisture. We repair damaged components and construct new fences that complement residential architecture and surrounding landscape features.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Fence Installation & Repair in Lynden, WA",
      description:
        "Learn more about fence materials, repairs, and installations throughout Lynden.",
      items: [
        {
          question:
            "Which Fence Material Works Well for a Traditional Residential Property?",
          answer:
            "Wood fencing offers a classic appearance and flexible design options. Vinyl and metal are also worth considering, depending on your preferred style, maintenance expectations, privacy needs, and overall installation budget.",
        },
        {
          question: "Can a Leaning Wooden Fence Be Straightened and Repaired?",
          answer:
            "Some leaning fences can be repaired by correcting damaged posts or weakened supports. Extensive deterioration or unstable foundations may require replacing affected sections to restore a secure, properly aligned boundary.",
        },
        {
          question: "What Should I Consider When Planning a Fence Gate?",
          answer:
            "Think about opening width, walking access, gate direction, hardware, and surrounding obstacles. Proper positioning and dependable supporting posts help create an entrance that operates conveniently and complements the adjoining fence design.",
        },
        {
          question: "How Often Should I Inspect My Residential Fence?",
          answer:
            "Inspect your fence periodically and after significant storms. Look for loose fasteners, deteriorating wood, shifting posts, damaged panels, and gate problems that may indicate a need for maintenance or repairs soon.",
        },
        {
          question: "Can New Fence Sections Match My Existing Wooden Fence?",
          answer:
            "Matching may be possible when compatible materials, dimensions, and styles are available. Differences in wood aging, weather exposure, and existing finishes can affect how closely replacement sections resemble older fencing materials.",
        },
        {
          question: "Are There Restrictions on Fence Height in Lynden, WA?",
          answer:
            "Fence height and placement may be subject to local zoning rules and property conditions. Confirm applicable requirements with the appropriate city department before choosing dimensions or beginning a new fence installation project.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Explore your Lynden fencing options with Joyner Construction LLC and request a personalized project estimate today.",
    },
  };
}
