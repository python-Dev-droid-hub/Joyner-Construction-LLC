import type { LandingPageContent } from "@/content/landing";

export function isBellinghamPlumbing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "plumbing" && areaSlug === "bellingham-wa";
}

export const bellinghamPlumbingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Plumbing Installation Repair or Replacement Services Contractor Bellingham, WA",
  supporting:
    "Joyner Construction LLC provides residential and commercial plumbing services in Bellingham, WA. From leaking pipes and fixture installations to complete plumbing replacements, we help property owners address water system problems with practical solutions tailored to their buildings.",
};

export const bellinghamPlumbingSeo = {
  title: "Plumbing Services in Bellingham, WA",
  description:
    "Joyner Construction LLC provides residential and commercial plumbing services in Bellingham, WA—pipe repairs, fixture installations, water line work, and plumbing replacements.",
};

/** Swap the shared template copy for the Bellingham plumbing page. Images stay in place. */
export function applyBellinghamPlumbingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Water Line Installation and Repair Services Contractor or Company Bellingham, WA",
      paragraphs: [
        "A properly functioning plumbing system keeps water moving where your property needs it. Joyner Construction LLC provides plumbing repair services in Bellingham, WA, for residential and commercial buildings. Our local plumbing repair company handles residential plumbing repair, home plumbing repair, water pipe repair, leaking pipe repair, and broken pipe replacement.",
        "We also discuss pipe installation, bathroom plumbing installation, shower plumbing services, and toilet installation or replacement. Whether you need a bathroom pipe repair or a complete water line upgrade, our team helps identify the project requirements and discuss suitable plumbing solutions.",
      ],
      visualCaption: "Tap a node to explore each stage of plumbing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us about your plumbing concerns, building type, and preferred service schedule.",
          scope:
            "We identify affected pipes, fixture requirements, replacement needs, and project expectations before work.",
          layout:
            "We review fixture locations, pipe routes, water connections, and access before planning installation.",
          craft:
            "We focus on suitable plumbing materials, accurate connections, and careful installation techniques.",
          structure:
            "We coordinate water supply lines, drainage connections, fixtures, and existing plumbing components.",
          handoff:
            "We communicate completed work details and discuss any remaining plumbing requirements with property owners.",
        },
      },
    },
    services: {
      title: "Residential, Remodel, and Project Plumbing",
      items: [
        {
          ...residential,
          label: "Residential",
          title: "Residential Plumbing",
          description:
            "Residential plumbing keeps household water systems and fixtures working as intended. Joyner Construction LLC provides plumbing support in Bellingham, WA, for pipe repairs, fixture installations, water connections, and everyday household plumbing requirements.",
          imageAlt: "Residential plumbing work in Bellingham, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Plumbing",
          description:
            "Updating a kitchen or bathroom often requires changes to existing plumbing connections. We coordinate remodel plumbing around fixture locations, water supply lines, drainage arrangements, and the specifications of your renovation plans.",
          imageAlt: "Remodel plumbing installation in Bellingham, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Plumbing Project Support",
          description:
            "Construction and improvement projects need plumbing coordination at the right stages. Our team discusses installation requirements, pipe routing, fixture connections, and replacement needs to help organize residential and commercial plumbing work.",
          imageAlt: "Plumbing project support in Bellingham, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Plumbing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Faucet and Sink Installation and Replacement Contractors Installation Bellingham, WA?",
      body: "Planning new faucets or replacing outdated sinks? Contact Joyner Construction LLC in Bellingham, WA, to discuss fixture selection, plumbing connections, installation requirements, and replacement options for your property.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Plumbing Services",
      title:
        "Certified or Trusted Reliable Building Plumbing Contractors Services Agency Bellingham, WA",
      intro:
        "Plumbing problems can interrupt everyday routines and affect the way a property operates. Joyner Construction LLC provides residential and commercial plumbing services in Bellingham, WA, covering pipe repairs, fixture installations, water line work, and plumbing replacements. We discuss the condition of existing components, project requirements, and suitable materials before outlining the work. Whether you are updating a bathroom or addressing a leaking water line, our team helps clarify your plumbing needs.",
      sections: [
        {
          heading:
            "Water Heater Installation, Water Heater Repair, Water Heater Replacement",
          body: [
            "Hot water problems can affect household comfort and daily business operations. Joyner Construction LLC discusses water heater installation, repair, and replacement services in Bellingham, WA. Whether your existing unit leaks, produces inconsistent temperatures, or no longer meets your property's needs, our team can review the project requirements. We consider the existing plumbing connections, unit specifications, and installation arrangements to help determine suitable next steps for your residential or commercial water heating system.",
          ],
        },
        {
          heading:
            "Kitchen Plumbing Repair, Kitchen Sink Installation, Kitchen Faucet Replacement Bellingham, WA",
          body: [
            "Kitchen plumbing supports essential activities such as cooking, cleaning, and washing dishes. Joyner Construction LLC provides kitchen plumbing repair and fixture installation services in Bellingham, WA. We discuss leaking connections, damaged faucets, sink replacement, and related water supply requirements. Whether you are updating your kitchen during a renovation or addressing an existing plumbing issue, our team can review the fixture specifications and installation needs. Proper planning helps coordinate new connections with the kitchen's existing plumbing layout.",
          ],
        },
        {
          heading:
            "Drain Cleaning Services, Clogged Drain Repair, Residential Drain Cleaning Specialists Bellingham, WA",
          body: [
            "Slow drains and recurring blockages can interfere with normal plumbing use. Joyner Construction LLC discusses drain cleaning services in Bellingham, WA, for residential and commercial properties. We consider clogged sinks, restricted bathroom drains, and other drainage concerns when reviewing the required work. Addressing the source of a blockage helps determine an appropriate cleaning or repair approach. Contact our team to discuss persistent drainage problems and explore suitable solutions for your property's plumbing system.",
          ],
        },
        {
          heading:
            "Whole-House Repiping, Residential Repiping Services, Home Water Pipe Replacement",
          body: [
            "Older or deteriorating water pipes may eventually require replacement throughout a home. Joyner Construction LLC discusses whole-house repiping and residential repiping services in Bellingham, WA. We consider pipe material, existing connections, water distribution, and the property's plumbing layout when reviewing replacement requirements. Whether you are experiencing recurring leaks or planning an extensive plumbing renovation, our team can help define the work involved. A clear repiping plan helps coordinate new water lines with existing fixtures and connections.",
          ],
        },
        {
          heading: "Drain Cleaning and Plumbing Repair Contractors",
          body: [
            "Drainage problems sometimes occur alongside leaks, damaged connections, or other plumbing concerns. Joyner Construction LLC provides drain cleaning and plumbing repair services in Bellingham, WA, for residential and commercial properties. We discuss slow drains, clogged fixtures, leaking pipes, and damaged plumbing components to understand the affected areas. Depending on the issue, the required work may involve cleaning, pipe repair, or replacement. Contact our team to discuss your property's drainage and plumbing requirements.",
          ],
        },
        {
          heading: "Emergency Plumbing Repair Services Company",
          body: [
            "Unexpected plumbing failures can lead to water damage and disrupt normal property operations. Joyner Construction LLC helps Bellingham, WA, property owners discuss urgent plumbing repair requirements involving burst pipes, significant leaks, and malfunctioning water connections. Our team considers the reported problem and discusses suitable repair options based on the affected system. If a pipe is actively leaking, shut off the water supply when safe and contact a qualified plumbing professional to address the situation.",
          ],
        },
        {
          heading: "Water Line Installation and Repair",
          body: [
            "Water lines supply clean water to fixtures, appliances, and other plumbing connections throughout a property. Joyner Construction LLC provides water line installation and repair services in Bellingham, WA, for residential and commercial buildings. We discuss leaking connections, damaged pipes, replacement requirements, and new line installations according to the property's layout. Whether you are constructing a building or addressing an existing water supply problem, our team can review the project scope and suitable plumbing requirements.",
          ],
        },
        {
          heading: "Reliable Plumbing Installation Contractors",
          body: [
            "New plumbing installations require coordination between water supply lines, drainage systems, fixtures, and building specifications. Joyner Construction LLC discusses residential and commercial plumbing installation services in Bellingham, WA. We help property owners plan pipe connections, bathroom fixtures, kitchen sinks, faucets, and other plumbing components according to project requirements. Whether the work involves new construction or a property renovation, our team focuses on understanding the installation scope and coordinating the plumbing work with the wider building project.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Plumbing Services in Bellingham, WA",
      description:
        "Common questions about plumbing installation, repair, and replacement in Bellingham, WA.",
      items: [
        {
          question: "What plumbing services does Joyner Construction LLC provide?",
          answer:
            "Joyner Construction LLC discusses residential and commercial plumbing installation, repair, and replacement, including water lines, leaking pipes, bathroom fixtures, toilets, drains, and kitchen plumbing.",
        },
        {
          question: "Can you repair leaking or broken water pipes?",
          answer:
            "Yes. We discuss leaking pipe repairs and broken pipe replacement based on the affected sections, pipe materials, accessibility, and the property's existing plumbing configuration.",
        },
        {
          question:
            "Do you provide bathroom plumbing installation and repairs?",
          answer:
            "We discuss bathroom plumbing installation, shower connections, bathroom pipe repairs, toilet installation, and fixture replacement according to renovation plans and existing plumbing requirements.",
        },
        {
          question: "When should a homeowner consider whole-house repiping?",
          answer:
            "Repiping may be necessary when pipes experience recurring leaks, corrosion, deterioration, or persistent water distribution problems. A professional assessment helps determine suitable replacement options.",
        },
        {
          question: "Do you offer kitchen sink and faucet replacement?",
          answer:
            "We discuss kitchen sink installation, faucet replacement, and related plumbing connections for residential and commercial properties. Requirements depend on fixture specifications and existing water lines.",
        },
        {
          question: "How can I request plumbing services in Bellingham?",
          answer:
            "Contact Joyner Construction LLC with your property location, plumbing concerns, available photographs, and project details. Our team can discuss your requirements and estimate arrangements.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Need dependable plumbing assistance in Bellingham? Contact Joyner Construction LLC today to discuss your installation, repair, or replacement project.",
    },
  };
}
