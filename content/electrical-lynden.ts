import type { LandingPageContent } from "@/content/landing";

export function isLyndenElectrical(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "electrical" && areaSlug === "lynden-wa";
}

export const lyndenElectricalHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Electrical Wiring Installation, Repair or Replacement Services Contractor Lynden, WA",
  supporting:
    "Joyner Construction LLC delivers practical electrical wiring solutions for homes and commercial properties in Lynden, WA. Whether your project involves new wiring, troubleshooting existing connections, or replacing an aging electrical system, our team focuses on careful coordination, functional installations, and quality construction support.",
};

export const lyndenElectricalSeo = {
  title: "Electrical Wiring Services in Lynden, WA",
  description:
    "Joyner Construction LLC delivers practical electrical wiring solutions for homes and commercial properties in Lynden, WA—installation, repair, and replacement.",
};

/** Swap the shared template copy for the Lynden electrical page. Images stay in place. */
export function applyLyndenElectricalContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Electrical Wiring Replacement Services Contractor or Company Lynden, WA",
      paragraphs: [
        "An electrical system should accommodate the way a property is used today. Joyner Construction LLC assists homeowners and businesses in Lynden, WA, with electrical wiring replacement when existing installations require attention. Our services include house rewiring and old wiring replacement for properties with aging or unsuitable electrical components.",
        "We also provide residential electrical wiring services designed around household layouts, renovations, and changing power needs. Commercial property owners can discuss professional commercial electrical wiring and commercial wiring installation for offices, retail spaces, and other buildings. From evaluating existing connections to coordinating replacement work, our team helps establish a practical direction for your electrical improvement project.",
      ],
      visualCaption: "Tap a node to explore each stage of electrical work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Share your electrical plans with our team to discuss project possibilities.",
          scope:
            "We identify essential work areas and coordinate electrical tasks with construction requirements.",
          layout:
            "We organize wiring plans around building dimensions, room purposes, and accessibility.",
          craft:
            "Careful installation practices help support consistent connections and dependable electrical operation.",
          structure:
            "Our planning accounts for construction details and existing building components.",
          handoff:
            "We explain project completion details and communicate relevant installation information clearly.",
        },
      },
    },
    services: {
      title: "Residential, Remodel, and Project Electrical",
      items: [
        {
          ...residential,
          label: "Residential",
          title: "Residential Electrical",
          description:
            "From older homes to recently constructed properties, electrical requirements can vary considerably. Joyner Construction LLC helps Lynden homeowners plan wiring installations, troubleshoot problems, and consider upgrades suited to household needs.",
          imageAlt: "Residential electrical wiring in Lynden, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Electrical",
          description:
            "Updating a property often involves changing how electrical connections serve individual rooms. We assist with renovation-related wiring adjustments, new outlet locations, and electrical installation coordination that complements the redesigned space.",
          imageAlt: "Remodel electrical work in Lynden, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Electrical Project Support",
          description:
            "Successful electrical work depends on understanding construction requirements before installation begins. Our team provides project support through wiring discussions, installation coordination, and practical planning for residential and commercial buildings.",
          imageAlt: "Electrical project support in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Electrical services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Projects Electrical Safety Inspection, Home Electrical Inspection, Electrical Wiring Inspection Contractors Installation Lynden, WA?",
      body: "Make informed decisions about your property's electrical condition. Contact Joyner Construction LLC in Lynden, WA, to discuss wiring inspections, safety concerns, and recommended electrical improvements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Electrical Services",
      title:
        "Certified Or Trusted Reliable Licensed Electrical Wiring Contractors Services Agency Lynden, WA",
      intro:
        "Planning electrical improvements requires an understanding of how wiring supports the entire building. Joyner Construction LLC assists residential and commercial clients in Lynden, WA, with electrical installation, repair, and replacement projects. Our approach considers existing connections, building construction, and the purpose of each space. Whether you need assistance with a renovation or want to address aging wiring, we help identify project requirements and discuss practical solutions for your property.",
      sections: [
        {
          heading: "Emergency Electrical Wiring Repair Company",
          body: [
            "Electrical failures can affect more than convenience, particularly when wiring becomes damaged or connections stop functioning properly. Joyner Construction LLC helps Lynden, WA, property owners address unexpected wiring problems involving deteriorated cables, loose connections, and circuit interruptions. Identifying the source of the issue is important before repairs begin. If you notice electrical sparks, smoke, or burning odors, stay clear of the affected equipment and seek qualified assistance rather than attempting repairs yourself.",
          ],
        },
        {
          heading: "Professional Home Wiring Installation",
          body: [
            "Every home needs an electrical arrangement that accommodates its appliances, lighting, and everyday activities. Joyner Construction LLC supports residential wiring installation in Lynden, WA, with attention to property design and household requirements. Whether your project involves a new residence, an additional room, or an electrical upgrade, the installation should be planned before work begins. Our team considers connection locations, circuit requirements, and construction details to help support a functional home electrical system.",
          ],
        },
        {
          heading: "Circuit Breaker Repair and Replacement Specialists",
          body: [
            "Circuit breakers play an important role in protecting electrical systems against certain overload and fault conditions. Persistent tripping, physical damage, or breakers that will not reset can point to a problem requiring professional attention. Joyner Construction LLC helps property owners in Lynden, WA, assess circuit breaker repair and replacement needs. Our team considers the electrical panel, connected equipment, and circuit conditions to determine suitable next steps for restoring reliable electrical operation.",
          ],
        },
        {
          heading: "Electrical Safety Inspection Services Contractors",
          body: [
            "Electrical systems contain multiple components that deserve attention during routine property evaluations. Joyner Construction LLC assists Lynden, WA, homeowners and business owners with electrical safety inspection projects. An evaluation can help identify visible damage, deteriorating wiring, loose connections, and concerns involving switches or outlets. These findings can help property owners understand where further assessment or improvements may be necessary. Consider an inspection when preparing renovations, maintaining an older building, or investigating recurring electrical problems.",
          ],
        },
        {
          heading: "Whole-House Rewiring Contractors",
          body: [
            "Some properties require more extensive electrical improvements than isolated wiring repairs can provide. Whole-house rewiring may be worth considering when existing wiring is deteriorated, outdated, or unable to accommodate household requirements. Joyner Construction LLC helps Lynden, WA, homeowners explore residential rewiring based on their property's condition. We consider the existing installation, building layout, and replacement scope when discussing the work. Careful planning helps coordinate wiring improvements with the home's construction and renovation needs.",
          ],
        },
        {
          heading: "Indoor and Outdoor Electrical Wiring Company",
          body: [
            "Electrical installations must account for where connections will be used and the conditions surrounding them. Joyner Construction LLC supports interior and exterior wiring projects for properties throughout Lynden, WA. Indoor wiring may serve kitchens, bedrooms, offices, and other occupied spaces, while outdoor applications require suitable protection against environmental exposure. Our team considers the property's layout and intended electrical use when discussing installation requirements, helping clients plan wiring solutions that fit their residential or commercial projects.",
          ],
        },
        {
          heading: "Electrical Outlet and Switch Installation Services",
          body: [
            "The placement of electrical outlets and switches affects how comfortably people use their living and working spaces. Joyner Construction LLC helps Lynden, WA, property owners plan installations that suit furniture arrangements, appliances, lighting, and room functions. Additional outlets can be useful during renovations, while replacement switches may address aging or damaged fixtures. Our team considers existing wiring conditions and the intended application when discussing installation options for residential and commercial properties.",
          ],
        },
        {
          heading: "Emergency Electrical Repair Services Contractors",
          body: [
            "Unexpected electrical problems can interfere with essential activities and business equipment. Joyner Construction LLC helps residential and commercial property owners in Lynden, WA, address urgent repair concerns involving malfunctioning circuits, damaged connections, and electrical wiring problems. Signs such as burning smells, smoke, or sparking equipment require immediate caution. Avoid handling exposed wires or attempting to reset visibly damaged components. Contact qualified assistance to assess the situation and determine the appropriate repair approach.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Electrical Wiring Services in Lynden, WA",
      description:
        "Get straightforward information about electrical installations, replacements, repairs, and property inspections.",
      items: [
        {
          question: "What makes electrical wiring replacement necessary?",
          answer:
            "Deteriorated insulation, damaged connections, outdated installations, and changing power requirements may justify replacement. A professional assessment helps determine the extent of work needed.",
        },
        {
          question:
            "Does Joyner Construction LLC work on residential and commercial properties?",
          answer:
            "Yes. Joyner Construction LLC supports residential and commercial electrical wiring projects in Lynden, WA, including installation, repair, and replacement based on individual property requirements.",
        },
        {
          question: "How often should electrical wiring be inspected?",
          answer:
            "Inspection frequency depends on the property's age, electrical condition, usage, and previous maintenance. Have a qualified professional evaluate concerns whenever warning signs appear.",
        },
        {
          question: "Can new outlets be installed in existing rooms?",
          answer:
            "Yes. Additional outlets can be incorporated into existing spaces when wiring capacity, circuit requirements, and installation conditions allow. A professional evaluation helps establish feasibility.",
        },
        {
          question: "What should I do when a circuit breaker keeps tripping?",
          answer:
            "Repeated tripping can indicate an overloaded circuit, electrical fault, or equipment problem. Reduce use of the affected circuit and arrange professional troubleshooting instead of repeatedly resetting it.",
        },
        {
          question: "Is rewiring necessary when remodeling an older house?",
          answer:
            "Not always. However, remodeling provides an opportunity to evaluate aging wiring and identify upgrades. A professional assessment determines whether partial improvements or complete rewiring are appropriate.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Have an electrical upgrade planned in Lynden, WA? Reach out to Joyner Construction LLC for an estimate!",
    },
  };
}
