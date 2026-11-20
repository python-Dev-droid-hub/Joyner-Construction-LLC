import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonAduAdditions(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "adu-additions" && areaSlug === "burlington-wa";
}

export const burlingtonAduAdditionsHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial ADU Addition Services Contractor Burlington, WA",
  supporting:
    "Turn unused square footage into valuable living or working space with Joyner Construction LLC. Our ADU addition contractors serve Burlington, WA, providing customized backyard dwellings, residential extensions, and commercial space improvements. We combine practical construction methods with thoughtful design to create durable, comfortable, and functional property additions.",
};

export const burlingtonAduAdditionsSeo = {
  title:
    "Trusted ADU Additions & Custom Home Expansion Services in Burlington, WA | Joyner Construction LLC",
  description:
    "Searching for reliable ADU additions services in Burlington, WA? Joyner Construction LLC offers expert accessory dwelling unit construction, custom home additions, and professional remodeling solutions. Create additional living space with quality craftsmanship and dependable construction services. Contact us today for a free consultation!",
};

/** Swap the shared template copy for the Burlington ADU additions page. Images stay in place. */
export function applyBurlingtonAduAdditionsContent(
  content: LandingPageContent,
): LandingPageContent {
  const [adu, addition, expand] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom ADU Design and Building Services Contractor or Company Burlington, WA",
      paragraphs: [
        "Limited space should not prevent your property from meeting new demands. Joyner Construction LLC offers professional ADU construction services in Burlington, WA, helping residential and commercial property owners develop additional usable areas. Our ADU contractors handle accessory dwelling unit additions, backyard cottage construction, attached ADU projects, and customized building expansions.",
        "Whether you want to establish a private guest residence, convert an existing garage, or create additional office space, we consider your property's configuration and intended use. Our approach includes practical design discussions, material selection, and coordinated construction activities. With attention to efficient layouts and lasting structural performance, we create building solutions that accommodate changing space requirements while complementing existing property features and architectural characteristics.",
      ],
      visualCaption: "Tap a node to explore each stage of ADU work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Describe your proposed addition and the challenges you want addressed.",
          scope:
            "Defined construction objectives help clarify materials, responsibilities, and project expectations.",
          layout:
            "Efficient designs organize essential rooms without wasting valuable interior space.",
          craft:
            "Detailed construction work supports attractive surfaces and dependable finished results.",
          structure:
            "Building components are planned around stability, durability, and structural compatibility.",
          handoff:
            "We discuss completed project features and relevant ongoing care considerations.",
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
            "Develop additional housing opportunities with customized ADU construction services. We build independent dwelling spaces featuring efficient interiors, practical amenities, and durable structural components suited to your property's available building area.",
          imageAlt: "ADU construction in Burlington, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Additions",
          description:
            "Create extra room without relocating through professionally planned home additions. Our team constructs connected living areas, additional bedrooms, and functional extensions designed to complement your property's existing structural characteristics and appearance.",
          imageAlt: "Home additions in Burlington, WA",
        },
        {
          ...expand,
          label: "Expand",
          title: "Living Space Expansion",
          description:
            "Improve your property's versatility with tailored space expansion solutions. We develop larger rooms, adaptable workspaces, and more efficient interior arrangements that support changing household activities or business operations over time.",
          imageAlt: "Living space expansion in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "ADU additions",
      heading:
        "Are You Looking for Joyner Construction LLC for Your Residential or Commercial Small Home or Office Addition and Expansion Services in Burlington, WA?",
      body: "Make your property work harder with customized construction solutions. Contact Joyner Construction LLC for residential additions, commercial space expansions, and ADU building services tailored to your Burlington, WA, project requirements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "ADU Additions",
      title:
        "Trusted and Reliable Complete ADU Planning and Construction Services Company Burlington, WA",
      intro:
        "Successful ADU construction requires careful coordination between site conditions, building design, and practical occupancy needs. Joyner Construction LLC delivers comprehensive ADU planning and construction services in Burlington, WA, helping property owners evaluate suitable development options. We consider available land, structural specifications, interior functionality, and material requirements when organizing projects. Our construction approach emphasizes efficient space utilization, dependable building practices, and clear project communication from initial planning discussions through completion.",
      sections: [
        {
          heading: "ADU Construction Services Burlington, WA",
          body: [
            "Creating a secondary dwelling involves coordinating several building elements within a defined footprint. Joyner Construction LLC provides ADU construction services in Burlington, WA, for homeowners seeking efficient residential improvements. Our contractors consider foundation requirements, interior configurations, utility access, and exterior compatibility when developing construction solutions. From smaller independent units to customized secondary residences, we focus on durable building components and practical living arrangements that accommodate your property's intended residential use.",
          ],
        },
        {
          heading: "ADU Addition Contractors Burlington, WA",
          body: [
            "Property expansions should address specific space limitations rather than simply increase a building's overall size. Joyner Construction LLC serves as an ADU addition contractor in Burlington, WA, helping owners identify suitable construction approaches for existing properties. We discuss available expansion areas, structural conditions, and intended occupancy before organizing building activities. Our team emphasizes functional transitions, appropriate construction materials, and thoughtful details that support comfortable use of the completed addition over time.",
          ],
        },
        {
          heading: "Accessory Dwelling Unit Builders Burlington, WA",
          body: [
            "A compact residence can offer substantial functionality when its interior spaces are arranged effectively. Our accessory dwelling unit builders in Burlington, WA, develop customized construction solutions that prioritize essential living features. Joyner Construction LLC considers kitchen efficiency, bathroom placement, storage opportunities, and comfortable room proportions during project discussions. We create secondary dwellings with practical layouts and durable finishes, helping property owners establish independent accommodations suited to their available space and intended occupants.",
          ],
        },
        {
          heading: "Residential ADU Construction Burlington, WA",
          body: [
            "Homeowners seeking flexible housing arrangements may benefit from adding a separate residential unit to their property. Joyner Construction LLC provides residential ADU construction in Burlington, WA, with options tailored to different household requirements. We consider daily activities, occupant privacy, convenient access, and interior usability when discussing building configurations. Our construction team develops functional residential spaces that can accommodate eligible family housing, guest accommodations, or other uses permitted by applicable local regulations.",
          ],
        },
        {
          heading: "Detached ADU Construction Burlington, WA",
          body: [
            "A standalone dwelling can provide additional residential space without changing the internal arrangement of your primary home. Joyner Construction LLC offers detached ADU construction in Burlington, WA, with attention to property access and site development requirements. We evaluate possible building locations, foundation considerations, exterior design preferences, and utility connections. Our contractors develop independent structures with efficient living areas, weather appropriate construction details, and architectural features suited to the surrounding property.",
          ],
        },
        {
          heading: "Attached ADU Additions Burlington, WA",
          body: [
            "Connecting a new residential unit to an existing structure requires careful coordination of building systems and architectural details. Joyner Construction LLC provides attached ADU additions in Burlington, WA, for homeowners interested in extending their current residence. Our team considers wall connections, roof transitions, utility arrangements, and separate living requirements during planning. We focus on constructing functional additions that maintain structural compatibility while providing comfortable accommodations for occupants with different household needs.",
          ],
        },
        {
          heading: "Garage Conversion to ADU",
          body: [
            "Converting a garage into residential accommodation can offer an alternative to building an entirely new structure. Joyner Construction LLC helps Burlington homeowners explore garage conversion to ADU projects through practical building assessments and construction planning. We consider existing wall assemblies, floor conditions, insulation, ventilation, and necessary utility improvements. Our team develops conversion solutions intended to create usable living environments while accounting for relevant building standards and residential occupancy requirements.",
          ],
        },
        {
          heading: "Backyard ADU Construction Burlington, WA",
          body: [
            "Backyard cottages can introduce independent housing while maintaining a clear relationship with the primary residence. Joyner Construction LLC offers backyard ADU construction in Burlington, WA, for properties with suitable development space. Our contractors consider building orientation, exterior access, site drainage, and functional interior arrangements when discussing project possibilities. We create customized backyard living spaces that balance privacy, efficient land use, and architectural compatibility with the property's existing surroundings.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "ADU Addition Services in Burlington, WA",
      description:
        "Discover useful answers to Burlington ADU construction and expansion questions.",
      items: [
        {
          question: "What Is the Difference Between an ADU and a Home Addition?",
          answer:
            "An ADU typically provides independent residential facilities, while a conventional home addition expands the primary residence. Design requirements and applicable regulations differ depending on the proposed structure and intended occupancy.",
        },
        {
          question: "Can I Build a Backyard Cottage on a Small Property?",
          answer:
            "Backyard cottage eligibility depends on local development standards, available space, building placement, and utility requirements. Reviewing your property's characteristics helps determine whether a detached residential unit may be feasible there.",
        },
        {
          question: "What Utilities Does a New ADU Typically Need?",
          answer:
            "Accessory dwelling units generally require appropriate electrical, plumbing, heating, and ventilation systems. Utility connection arrangements depend on building design, available infrastructure, local regulations, and the specific requirements of the proposed residence.",
        },
        {
          question:
            "Can Commercial Property Owners Request Building Addition Services?",
          answer:
            "Yes, commercial property owners can explore building additions for offices, storage, or other permitted uses. Project feasibility depends on zoning, occupancy classifications, structural conditions, and applicable commercial construction requirements and approvals.",
        },
        {
          question: "How Can I Make a Small ADU Feel More Spacious?",
          answer:
            "Efficient room arrangements, suitable window placement, integrated storage, and practical furniture layouts can improve comfort. Thoughtful interior planning helps maximize usable space without unnecessarily increasing the building's overall footprint or size.",
        },
        {
          question:
            "What Information Is Needed to Request an ADU Construction Estimate?",
          answer:
            "Provide your property location, proposed unit type, approximate size, preferred features, and budget expectations. These details help contractors understand your objectives and discuss the next steps for evaluating construction costs accurately.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC for Burlington ADU construction guidance and request an estimate for your project.",
    },
  };
}
