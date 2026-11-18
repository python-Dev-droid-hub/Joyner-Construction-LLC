import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonElectrical(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "electrical" && areaSlug === "burlington-wa";
}

export const burlingtonElectricalHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Electrical Wiring Installation, Repair or Replacement Services Contractor Burlington, WA",
  supporting:
    "Joyner Construction LLC provides residential and commercial electrical wiring services in Burlington, WA, for properties requiring dependable installations and system improvements. From correcting wiring problems to planning complete replacements, we focus on practical construction coordination, carefully considered electrical layouts, and quality project workmanship.",
};

export const burlingtonElectricalSeo = {
  title:
    "Quality Electrical Contractors in Burlington, WA | Residential Electrical Installation, Wiring, Lighting Upgrades & Repair Solutions – Joyner Construction LLC",
  description:
    "Need dependable electrical work in Burlington, WA? Joyner Construction LLC delivers quality electrical installations, wiring improvements, lighting upgrades, fixture replacements, and repair services to keep your property's electrical systems safe and efficient.",
};

/** Swap the shared template copy for the Burlington electrical page. Images stay in place. */
export function applyBurlingtonElectricalContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Complete Electrical Wiring Replacement Services Contractor or Company Burlington, WA",
      paragraphs: [
        "Electrical upgrades can become necessary when a building's wiring no longer supports its current usage. Joyner Construction LLC provides electrical wiring replacement in Burlington, WA, for homeowners and commercial property owners addressing aging systems or renovation requirements. Our house rewiring services and old wiring replacement options help address existing installation concerns.",
        "We also assist with residential electrical wiring services for new construction and home improvements. Businesses can explore professional commercial electrical wiring and commercial wiring installation for offices, retail properties, and other facilities. By considering building conditions, electrical demands, and project objectives, our team helps clients plan wiring improvements that support their property's intended use.",
      ],
      visualCaption: "Tap a node to explore each stage of electrical work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Discuss your upcoming construction or electrical improvements with our experienced team.",
          scope:
            "We outline the necessary electrical work before coordinating the installation process.",
          layout:
            "We position wiring plans around functional spaces and practical installation requirements.",
          craft:
            "Quality-focused execution guides our approach to electrical installation and replacement work.",
          structure:
            "We account for building components when coordinating electrical construction activities.",
          handoff:
            "We communicate installation outcomes and important project details upon completion.",
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
            "Joyner Construction LLC helps Burlington, WA, homeowners address electrical requirements through wiring installation, repair, and system upgrades. We consider property layouts and household needs when discussing suitable improvements.",
          imageAlt: "Residential electrical wiring in Burlington, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Electrical",
          description:
            "Changing a property's interior design may require corresponding electrical adjustments. Our team supports remodeling work involving revised wiring arrangements, additional connections, and installations that accommodate updated room purposes.",
          imageAlt: "Remodel electrical work in Burlington, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Electrical Project Support",
          description:
            "Electrical requirements should align with the broader construction schedule and building design. We assist project owners with wiring considerations, installation planning, and coordination for different property improvement requirements.",
          imageAlt: "Electrical project support in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Electrical services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Projects Electrical Safety Inspection, Home Electrical Inspection, Electrical Wiring Inspection Contractors Installation Burlington, WA?",
      body: "Uncertain about your building's electrical condition? Joyner Construction LLC helps Burlington property owners discuss professional wiring inspections, identify concerns, and plan appropriate electrical improvements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Electrical Services",
      title:
        "Certified or Trusted Reliable Licensed Electrical Wiring Contractors Services Agency Burlington, WA",
      intro:
        "Reliable electrical installations start with understanding the building, its wiring requirements, and how each space will function. Joyner Construction LLC works with homeowners and commercial clients in Burlington, WA, on electrical wiring installation, repair, and replacement. Whether you are improving an existing property or coordinating electrical work for a construction project, our team considers practical installation details and project objectives. We help clients explore suitable solutions for their electrical improvement needs.",
      sections: [
        {
          heading: "Emergency Electrical Wiring Repair Company",
          body: [
            "A sudden wiring failure can affect several areas of a building and may indicate a serious electrical concern. Joyner Construction LLC helps Burlington, WA, property owners address wiring repair requirements involving damaged cables, faulty connections, and unexpected circuit interruptions. Electrical problems should be investigated rather than temporarily overlooked. If you experience sparks, smoke, or burning odors, keep away from the affected equipment and contact qualified professionals. Prompt attention helps prevent further disruption and supports safer repair decisions.",
          ],
        },
        {
          heading: "Professional Home Wiring Installation",
          body: [
            "A well-planned home wiring system should accommodate current household needs while allowing practical use of each room. Joyner Construction LLC helps Burlington, WA, homeowners with residential wiring installation for new construction, additions, and property upgrades. We consider how appliances, lighting, outlets, and electrical equipment will be used throughout the home. Coordinating these requirements before installation helps establish an organized electrical layout that complements the building's design and everyday residential activities.",
          ],
        },
        {
          heading: "Circuit Breaker Repair and Replacement Specialists",
          body: [
            "An electrical panel that experiences recurring breaker problems may require closer examination. Circuit breakers can trip because of overloads, short circuits, ground faults, or defective components. Joyner Construction LLC helps Burlington, WA, property owners address circuit breaker repair and replacement requirements. Our team considers the affected circuits, panel condition, and connected electrical loads when evaluating the situation. Professional troubleshooting helps identify the cause instead of treating repeated breaker trips as an ordinary inconvenience.",
          ],
        },
        {
          heading: "Electrical Safety Inspection Services Contractors",
          body: [
            "A property's electrical condition can change as wiring ages, equipment is added, and building spaces are modified. Joyner Construction LLC assists residential and commercial clients in Burlington, WA, with electrical safety inspection projects. Evaluations may identify visible problems involving wiring, outlets, switches, and connections that deserve additional attention. Whether you manage an established commercial building or maintain a family home, an inspection can provide helpful information when planning electrical maintenance and future improvements.",
          ],
        },
        {
          heading: "Whole-House Rewiring Contractors",
          body: [
            "Homes with extensive wiring deterioration may benefit from a comprehensive replacement rather than repeated isolated repairs. Joyner Construction LLC helps Burlington, WA, homeowners explore whole-house rewiring when existing electrical installations require significant improvement. The process involves considering the home's wiring condition, electrical requirements, and construction layout. A carefully planned project can replace unsuitable wiring, address outdated connections, and prepare the property to better accommodate modern household appliances and electrical equipment.",
          ],
        },
        {
          heading: "Indoor and Outdoor Electrical Wiring Company",
          body: [
            "Properties often need electrical connections in areas with very different installation conditions. Joyner Construction LLC assists Burlington, WA, customers with indoor and outdoor electrical wiring projects for residential and commercial buildings. Interior installations may support lighting, appliances, and general room functionality, while exterior wiring requires appropriate protection for outdoor exposure. We consider the intended application, building arrangement, and project requirements when discussing suitable wiring solutions for indoor and exterior spaces.",
          ],
        },
        {
          heading: "Electrical Outlet and Switch Installation Services",
          body: [
            "An electrical layout should make power access convenient without compromising installation requirements. Joyner Construction LLC helps Burlington, WA, property owners with outlet and switch installation for new spaces, renovations, and existing building improvements. Whether you need connections for additional appliances or want to change switch locations, planning is important. Our team considers the room's intended function, existing circuits, and wiring conditions to discuss suitable installation arrangements for your property.",
          ],
        },
        {
          heading: "Emergency Electrical Repair Services Contractors",
          body: [
            "Electrical malfunctions can create unexpected challenges for families, employees, and property managers. Joyner Construction LLC helps Burlington, WA, property owners address urgent electrical repair needs involving faulty wiring, damaged connections, and malfunctioning circuits. Some warning signs require immediate safety precautions, particularly smoke, sparks, or burning odors. Avoid using affected electrical equipment and keep clear of damaged components. Professional evaluation can help establish the source of the problem and identify the appropriate repair requirements.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Electrical Wiring Services in Burlington, WA",
      description:
        "Learn about common electrical wiring concerns, installation options, repairs, and inspections.",
      items: [
        {
          question: "What are the benefits of replacing old electrical wiring?",
          answer:
            "Replacing deteriorated wiring can address aging components, improve electrical functionality, and accommodate modern power requirements. A professional evaluation helps determine whether replacement is necessary.",
        },
        {
          question:
            "Does Joyner Construction LLC offer electrical wiring repairs in Burlington?",
          answer:
            "Joyner Construction LLC supports electrical wiring repair projects in Burlington, WA, for residential and commercial properties, addressing installation concerns and electrical problems based on project requirements.",
        },
        {
          question:
            "Can commercial buildings require complete electrical rewiring?",
          answer:
            "Yes. Extensive deterioration, building renovations, or changing electrical demands may make comprehensive rewiring necessary. An assessment helps determine the appropriate replacement scope.",
        },
        {
          question: "What happens during a home electrical inspection?",
          answer:
            "An inspection may involve evaluating visible wiring, outlets, switches, electrical panels, and other accessible components to identify concerns requiring additional attention or corrective work.",
        },
        {
          question: "Should I replace damaged electrical outlets immediately?",
          answer:
            "Damaged, loose, or discolored outlets should receive professional attention. Stop using affected outlets and arrange an evaluation to determine whether repair or replacement is needed.",
        },
        {
          question: "Can new electrical wiring be installed in commercial offices?",
          answer:
            "Yes. Office wiring projects can accommodate lighting, equipment, outlets, and other electrical requirements. Planning should account for the building layout and intended workplace operations.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to improve your property's electrical system in Burlington, WA? Contact Joyner Construction LLC to request an estimate!",
    },
  };
}
