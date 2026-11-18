import type { LandingPageContent } from "@/content/landing";

export function isBellinghamElectrical(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "electrical" && areaSlug === "bellingham-wa";
}

export const bellinghamElectricalHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Electrical Wiring Installation, Repair or Replacement Services Contractor Bellingham, WA",
  supporting:
    "Joyner Construction LLC provides best residential and commercial electrical wiring installation, repair, and replacement services in Bellingham, WA. Our team focuses on safe installations, practical solutions, and quality workmanship to support reliable electrical systems in homes, offices, and commercial buildings.",
};

export const bellinghamElectricalSeo = {
  title:
    "Electrical Services in Bellingham, WA | Installation & Repair – Joyner Construction LLC",
  description:
    "Joyner Construction LLC offers reliable electrical services in Bellingham, WA, including electrical installation, repairs, wiring, and lighting solutions. Contact us for quality workmanship and dependable service.",
};

/** Swap the shared template copy for the Bellingham electrical page. Images stay in place. */
export function applyBellinghamElectricalContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Electrical Wiring Replacement Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "Outdated or damaged wiring can create safety concerns and limit your property's electrical capacity. Joyner Construction LLC provides professional electrical wiring replacement in Bellingham, WA, helping homeowners upgrade aging systems through dependable house rewiring services and old wiring replacement. Our residential electrical wiring services address the needs of different homes, while our home electrical wiring contractors focus on organized installations and reliable results.",
        "We also support businesses with professional and affordable commercial electrical wiring, commercial wiring installation, and practical upgrades. Whether you are renovating a property or improving an existing electrical system, our team delivers carefully planned solutions for residential and commercial buildings throughout Bellingham.",
      ],
      visualCaption: "Tap a node to explore each stage of electrical work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your electrical needs with our team to explore suitable solutions.",
          scope:
            "We define project requirements, priorities, and installation details before beginning work.",
          layout:
            "We plan wiring routes carefully to support accessibility, safety, and functionality.",
          craft:
            "Our workmanship prioritizes accurate connections, quality materials, and dependable electrical performance.",
          structure:
            "We coordinate wiring requirements with building layouts and construction considerations.",
          handoff:
            "We review completed work and explain important details before project handoff.",
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
            "Joyner Construction LLC supports residential electrical projects in Bellingham, WA, with wiring installation, repairs, and replacement. We help homeowners improve electrical functionality while considering property layouts, safety, and household requirements.",
          imageAlt: "Residential electrical wiring in Bellingham, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Electrical",
          description:
            "Planning a home renovation requires electrical work that fits the updated design. Our team supports remodeling projects with wiring adjustments, new installations, and coordinated electrical improvements that accommodate changing spaces.",
          imageAlt: "Remodel electrical work in Bellingham, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Electrical Project Support",
          description:
            "From initial planning to completed installation, Joyner Construction LLC provides practical electrical project support. We coordinate wiring requirements, address construction considerations, and help residential and commercial clients move projects forward.",
          imageAlt: "Electrical project support in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Electrical services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Projects Electrical Safety Inspection, Home Electrical Inspection, Electrical Wiring Inspection Contractors Installation Bellingham, WA?",
      body: "Protect your property with professional electrical inspections from Joyner Construction LLC. Contact our team in Bellingham, WA, to discuss wiring concerns, identify potential issues, and plan appropriate improvements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Electrical Services",
      title:
        "Certified or Trusted Reliable Licensed Electrical Wiring Contractors Services Agency Bellingham, WA",
      intro:
        "Choosing an experienced electrical wiring contractor matters when planning installations, repairs, or upgrades. Joyner Construction LLC helps residential and commercial property owners in Bellingham, WA, address their electrical project requirements with organized workmanship and practical solutions. Whether your building needs wiring improvements, replacement services, or installation support, our team considers its layout, intended use, and project scope to help deliver electrical systems that support everyday functionality and long-term reliability.",
      sections: [
        {
          heading: "Emergency Electrical Wiring Repair Company",
          body: [
            "Unexpected wiring problems can interrupt daily activities and create concerns about electrical safety. Joyner Construction LLC helps property owners address electrical wiring repair needs in Bellingham, WA. Damaged connections, exposed wires, and malfunctioning circuits deserve prompt attention from qualified professionals. Our team assesses the reported problem, considers the building's electrical layout, and determines an appropriate repair approach. Contact us to discuss your wiring concerns and arrange professional assistance for your property.",
          ],
        },
        {
          heading: "Professional Home Wiring Installation",
          body: [
            "A dependable electrical system begins with properly planned wiring. Joyner Construction LLC supports home wiring installation projects in Bellingham, WA, with solutions suited to each property's layout and electrical requirements. Whether you are constructing a new home, updating an existing space, or adding electrical capacity during renovations, careful planning matters. Our team considers outlet locations, circuit needs, and installation details to help create an organized residential electrical system.",
          ],
        },
        {
          heading: "Circuit Breaker Repair and Replacement Specialists",
          body: [
            "Frequent breaker trips, unusual sounds, or breakers that fail to reset may indicate an electrical problem requiring attention. Joyner Construction LLC helps Bellingham, WA, property owners address circuit breaker repair and replacement needs. Our team considers the panel's condition, connected circuits, and electrical demands before recommending an appropriate solution. Addressing breaker issues professionally can help restore dependable operation and reduce the risk of ongoing electrical interruptions throughout your property.",
          ],
        },
        {
          heading: "Electrical Safety Inspection Services Contractors",
          body: [
            "Electrical inspections help property owners understand the condition of their wiring, outlets, connections, and other electrical components. Joyner Construction LLC supports electrical safety inspection projects in Bellingham, WA, for residential and commercial properties. Our team reviews relevant electrical concerns and identifies visible issues that may require further attention. Whether you are purchasing a property, planning renovations, or reviewing an existing system, an inspection can help inform your next electrical maintenance or improvement decisions.",
          ],
        },
        {
          heading: "Whole-House Rewiring Contractors",
          body: [
            "Older homes may contain wiring that no longer suits modern electrical demands or current renovation plans. Joyner Construction LLC helps homeowners in Bellingham, WA, explore whole-house rewiring solutions based on their property's condition and requirements. Replacing outdated wiring can support improved electrical functionality and provide opportunities to address aging connections. Our team considers the building layout, project scope, and installation needs when planning residential rewiring work for your home.",
          ],
        },
        {
          heading: "Indoor and Outdoor Electrical Wiring Company",
          body: [
            "Electrical wiring needs can extend beyond interior rooms to garages, exterior spaces, and other areas around a property. Joyner Construction LLC supports indoor and outdoor electrical wiring projects in Bellingham, WA, with solutions suited to the intended application. From interior wiring improvements to connections for outdoor areas, proper planning helps account for building conditions and installation requirements. Discuss your project with our team to determine the appropriate wiring approach for your property.",
          ],
        },
        {
          heading: "Electrical Outlet and Switch Installation Services",
          body: [
            "Convenient outlet and switch placement makes everyday electrical use easier throughout a home or commercial building. Joyner Construction LLC provides electrical outlet and switch installation support in Bellingham, WA, for new construction, renovations, and property upgrades. Whether you need additional outlets, replacement switches, or adjustments to existing locations, our team considers the room layout and intended electrical use. Proper installation helps create accessible connections and supports the functionality of your electrical system.",
          ],
        },
        {
          heading: "Emergency Electrical Repair Services Contractors",
          body: [
            "Sudden electrical problems can affect lighting, equipment, appliances, and normal building operations. Joyner Construction LLC helps residential and commercial property owners in Bellingham, WA, address urgent electrical repair concerns. Burning odors, visible wiring damage, sparks, or repeated power interruptions should never be ignored. If you notice these warning signs, avoid touching affected equipment and contact a qualified professional. Our team can discuss the issue and help determine suitable next steps for your property.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Electrical Wiring Services in Bellingham, WA",
      description:
        "Find helpful answers about electrical wiring installation, repairs, replacements, and inspections.",
      items: [
        {
          question: "When should residential electrical wiring be replaced?",
          answer:
            "Wiring may need replacement when it becomes damaged, outdated, deteriorated, or unsuitable for household electrical demands. A professional inspection can help determine appropriate improvements.",
        },
        {
          question:
            "Does Joyner Construction LLC provide commercial electrical wiring services?",
          answer:
            "Joyner Construction LLC supports commercial electrical wiring projects in Bellingham, WA, including installation, repairs, and replacement solutions based on individual building requirements and project needs.",
        },
        {
          question: "What are common signs of faulty electrical wiring?",
          answer:
            "Common warning signs include flickering lights, burning odors, frequently tripped breakers, warm outlets, and visible wire damage. Have concerning electrical issues evaluated professionally.",
        },
        {
          question: "Why is whole-house electrical rewiring important?",
          answer:
            "Whole-house rewiring replaces outdated or deteriorated wiring throughout a property. It can improve electrical functionality, accommodate modern demands, and address concerns identified during professional inspections.",
        },
        {
          question:
            "Can electrical wiring be updated during a remodeling project?",
          answer:
            "Yes. Remodeling provides an opportunity to update wiring, relocate outlets, and accommodate new electrical requirements. Proper coordination helps integrate electrical improvements into the renovation.",
        },
        {
          question: "Why should I schedule an electrical safety inspection?",
          answer:
            "Electrical safety inspections help identify visible wiring concerns, damaged connections, and potential system issues. Professional evaluations provide useful information when planning maintenance, repairs, or upgrades.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning an electrical project in Bellingham, WA? Contact Joyner Construction LLC today to request your estimate!",
    },
  };
}
