import type { LandingPageContent } from "@/content/landing";

export function isFerndaleElectrical(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "electrical" && areaSlug === "ferndale-wa";
}

export const ferndaleElectricalHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Electrical Wiring Installation, Repair or Replacement Services Contractor Ferndale, WA",
  supporting:
    "Joyner Construction LLC helps Ferndale, WA, homeowners and business owners maintain dependable electrical systems through professional wiring installation, repair, and replacement. From residential upgrades to commercial construction needs, our team focuses on practical planning, careful workmanship, and electrical solutions suited to each property.",
};

export const ferndaleElectricalSeo = {
  title:
    "Professional Electrical Services in Ferndale, WA | Expert Installation, Wiring, Repairs & Lighting Solutions – Joyner Construction LLC",
  description:
    "Joyner Construction LLC offers professional electrical services in Ferndale, WA, including electrical installation, wiring, repairs, lighting upgrades, fixture replacement, and residential electrical solutions. Contact us for reliable service and quality workmanship.",
};

/** Swap the shared template copy for the Ferndale electrical page. Images stay in place. */
export function applyFerndaleElectricalContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Electrical Wiring Replacement Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "Aging electrical systems can struggle to accommodate modern appliances, equipment, and everyday power requirements. Joyner Construction LLC provides electrical wiring replacement in Ferndale, WA, helping property owners address deteriorating connections and outdated installations. Our house rewiring services and old wiring replacement solutions are planned around the condition and layout of each home.",
        "We also handle residential electrical wiring services for homeowners seeking dependable installation support. For businesses, our professional commercial electrical wiring and commercial wiring installation solutions address building-specific requirements. Whether you are upgrading an older property or preparing a commercial space for new operations, our team helps organize the work around your project goals.",
      ],
      visualCaption: "Tap a node to explore each stage of electrical work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your building's electrical challenges and discuss possible solutions.",
          scope:
            "We establish installation priorities, project requirements, and expected work before starting.",
          layout:
            "We map electrical routes around room functions, access points, and building plans.",
          craft:
            "Every installation receives attention to connection quality, material selection, and workmanship.",
          structure:
            "We consider existing construction before planning practical electrical system improvements.",
          handoff:
            "We communicate project details and completed work before wrapping up installations.",
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
            "Homeowners in Ferndale, WA, can discuss wiring upgrades, electrical repairs, and replacement projects with Joyner Construction LLC. We consider household layouts and power requirements when planning residential improvements.",
          imageAlt: "Residential electrical wiring in Ferndale, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Electrical",
          description:
            "Electrical modifications are an important part of successful property renovations. Our team helps coordinate wiring changes, outlet adjustments, and installation requirements so updated spaces accommodate their intended residential or commercial use.",
          imageAlt: "Remodel electrical work in Ferndale, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Electrical Project Support",
          description:
            "Construction projects often require electrical decisions at different stages. Joyner Construction LLC assists with planning considerations, wiring coordination, and installation requirements to help keep residential and commercial electrical work organized.",
          imageAlt: "Electrical project support in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Electrical services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Projects Electrical Safety Inspection, Home Electrical Inspection, Electrical Wiring Inspection Contractors Installation Ferndale, WA?",
      body: "Concerned about outdated connections or electrical performance? Joyner Construction LLC helps Ferndale property owners explore professional wiring inspections and identify improvements suited to their buildings.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Electrical Services",
      title:
        "Certified or Trusted Reliable Licensed Electrical Wiring Contractors Services Agency Ferndale, WA",
      intro:
        "Electrical projects require thoughtful planning and workmanship that accounts for the property's specific needs. Joyner Construction LLC works with residential and commercial property owners in Ferndale, WA, on wiring installations, system repairs, and replacement projects. Whether you are updating an existing building or incorporating electrical work into new construction, our team considers project requirements, building conditions, and intended electrical use to help develop practical solutions for your space.",
      sections: [
        {
          heading: "Emergency Electrical Wiring Repair Company",
          body: [
            "Electrical wiring damage can develop unexpectedly and affect the safe operation of your building. Joyner Construction LLC helps property owners in Ferndale, WA, address problems involving damaged wires, loose connections, and disrupted electrical circuits. Ignoring these warning signs can allow problems to worsen. Our team considers the reported symptoms and existing installation before determining an appropriate repair approach. If you notice sparks, smoke, or burning odors, avoid the affected area and seek qualified assistance immediately.",
          ],
        },
        {
          heading: "Professional Home Wiring Installation",
          body: [
            "New home construction and residential improvements both depend on an electrical layout that supports everyday activities. Joyner Construction LLC assists Ferndale, WA, homeowners with professional wiring installation planned around room arrangements and electrical requirements. From determining suitable outlet positions to considering circuit placement, installation planning influences how conveniently a home operates. Our team helps address wiring requirements for new spaces, property additions, and upgrades while considering the overall residential construction plan.",
          ],
        },
        {
          heading: "Circuit Breaker Repair and Replacement Specialists",
          body: [
            "A circuit breaker protects electrical circuits by interrupting power when certain problems occur. If your breaker trips repeatedly, refuses to reset, or shows signs of damage, the underlying issue deserves professional evaluation. Joyner Construction LLC helps Ferndale, WA, property owners explore breaker repair and replacement solutions. Our team considers circuit conditions, panel requirements, and electrical demand when assessing the problem. Properly addressing breaker concerns can help restore dependable operation and reduce recurring interruptions.",
          ],
        },
        {
          heading: "Electrical Safety Inspection Services Contractors",
          body: [
            "Knowing the condition of your electrical system helps you make informed property maintenance decisions. Joyner Construction LLC supports electrical inspection projects in Ferndale, WA, for homeowners and commercial property owners. Evaluations can help identify visible concerns involving wiring, outlets, switches, and electrical connections. Whether you are preparing for renovations or reviewing an older installation, an inspection provides useful information about areas that may require repair, replacement, or additional professional assessment.",
          ],
        },
        {
          heading: "Whole-House Rewiring Contractors",
          body: [
            "When electrical wiring throughout a home becomes outdated or deteriorated, individual repairs may not address every concern. Joyner Construction LLC helps Ferndale, WA, homeowners consider whole-house rewiring based on the property's existing conditions. This work involves reviewing wiring routes, household electrical requirements, and the scope of replacement needed. A properly planned rewiring project can accommodate modern electrical usage while addressing aging components and providing a more suitable foundation for future home improvements.",
          ],
        },
        {
          heading: "Indoor and Outdoor Electrical Wiring Company",
          body: [
            "Different parts of a property require electrical connections suited to their surroundings and intended use. Joyner Construction LLC assists with indoor and outdoor wiring projects in Ferndale, WA, for residential and commercial buildings. Interior work may involve room wiring, outlets, and lighting connections, while exterior installations require attention to environmental exposure and suitable materials. Our team considers these differences when discussing project requirements and developing an electrical installation plan for your property.",
          ],
        },
        {
          heading: "Electrical Outlet and Switch Installation Services",
          body: [
            "Poorly positioned outlets and outdated switches can make rooms less convenient to use. Joyner Construction LLC helps Ferndale, WA, property owners plan outlet and switch installations that accommodate furniture arrangements, equipment placement, and everyday activities. Whether you are adding connections during construction or replacing existing electrical fixtures during a renovation, thoughtful positioning matters. Our team considers the intended use of each space and the existing wiring conditions when discussing suitable installation options.",
          ],
        },
        {
          heading: "Emergency Electrical Repair Services Contractors",
          body: [
            "Electrical interruptions can disrupt household routines and affect business operations without warning. Joyner Construction LLC helps property owners in Ferndale, WA, address unexpected electrical repair concerns involving wiring damage, malfunctioning connections, and circuit problems. Electrical sparks, smoke, or burning smells require immediate caution. Stop using affected equipment, keep away from damaged wiring, and contact qualified assistance. Our team can discuss the reported issue and help determine the appropriate repair requirements for your building.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Electrical Wiring Services in Ferndale, WA",
      description:
        "Explore common questions about residential and commercial electrical wiring services in Ferndale.",
      items: [
        {
          question: "How can I tell if my home's wiring needs replacement?",
          answer:
            "Frequent breaker trips, deteriorating insulation, flickering lights, and damaged outlets may indicate wiring concerns. A professional evaluation helps determine whether repairs or replacement are appropriate.",
        },
        {
          question:
            "Does Joyner Construction LLC handle commercial wiring installations?",
          answer:
            "Joyner Construction LLC supports commercial wiring projects in Ferndale, WA, including installation, repairs, and replacement work based on building layouts and individual electrical requirements.",
        },
        {
          question: "What causes electrical outlets to stop working?",
          answer:
            "Loose connections, damaged outlets, tripped breakers, or circuit problems can interrupt power. A qualified professional can investigate the cause and recommend an appropriate solution.",
        },
        {
          question: "When should homeowners consider whole-house rewiring?",
          answer:
            "Whole-house rewiring may be necessary when wiring becomes deteriorated, outdated, or unsuitable for current electrical demands. An assessment helps establish the project's actual requirements.",
        },
        {
          question: "Can electrical wiring be changed during home renovations?",
          answer:
            "Yes. Renovations offer an opportunity to relocate outlets, update wiring routes, and accommodate new appliances or room functions through properly planned electrical modifications.",
        },
        {
          question:
            "Are electrical inspections useful before purchasing a property?",
          answer:
            "An electrical inspection can reveal visible concerns involving wiring, outlets, panels, and connections. This information helps prospective buyers understand potential electrical improvements or repairs.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need dependable electrical wiring solutions in Ferndale, WA? Contact Joyner Construction LLC today and request your project estimate!",
    },
  };
}
