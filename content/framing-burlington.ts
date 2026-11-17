import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonFraming(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "framing" && areaSlug === "burlington-wa";
}

export const burlingtonFramingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Structural Framing Services Contractor Burlington, WA",
  supporting:
    "Joyner Construction LLC provides reliable residential and commercial structural framing in Burlington, WA. From new homes to office buildings, our team delivers carefully planned wood and steel framing, practical installation support, and attentive workmanship tailored to each project's design, schedule, and structural requirements.",
};

export const burlingtonFramingSeo = {
  title: "Structural Framing in Burlington, WA",
  description:
    "Joyner Construction LLC provides reliable residential and commercial structural framing in Burlington, WA. From new homes to office buildings, our team delivers carefully planned wood and steel framing.",
};

/** Swap the shared template copy for the Burlington framing page. Images stay in place. */
export function applyBurlingtonFramingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [newHome, addition, renovation] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building House Framing Repair and Replacement Services Contractor or Company Burlington, WA",
      paragraphs: [
        "Joyner Construction LLC is a structural framing company serving residential and commercial projects in Burlington, WA. Our structural framing contractors help plan and build dependable framing systems for homes, additions, renovations, and office buildings. We provide steel structural framing, metal framing services, and wood framing solutions based on each project's plans and requirements.",
        "Whether you need interior wall framing or exterior wall framing, our team focuses on accurate measurements, coordinated installation, and careful workmanship. Property owners can discuss project scope, material options, and scheduling with a professional, trusted contractor. From repair planning to replacement work, we aim to make the framing process clear and organized.",
      ],
      visualCaption: "Tap a node to explore each stage of framing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Contact us to discuss your Burlington project and framing requirements.",
          scope:
            "We clarify project size, materials, framing needs, and scheduling expectations.",
          layout:
            "We check plans, dimensions, access, and conditions before work begins.",
          craft:
            "Our team selects suitable materials and methods for dependable workmanship.",
          structure:
            "We coordinate walls, openings, and connections with approved building plans.",
          handoff:
            "We review framing and communicate details before subsequent trades begin.",
        },
      },
    },
    services: {
      title: "New Home, Addition, and Renovation Framing",
      items: [
        {
          ...newHome,
          label: "New Home",
          title: "New Home Framing",
          description:
            "New home framing creates the framework for later construction. Joyner Construction LLC coordinates walls, openings, and structural components using wood or steel systems specified in your approved Burlington project plans.",
          imageAlt: "New home framing under construction in Burlington, WA",
        },
        {
          ...addition,
          label: "Addition",
          title: "Home Addition Framing",
          description:
            "Home addition framing connects new rooms and expanded living areas with the existing house. We carefully follow approved plans, coordinating wall placement, openings, and materials to suit the home's layout.",
          imageAlt: "Home addition framing in Burlington, WA",
        },
        {
          ...renovation,
          label: "Renovation",
          title: "Renovation Framing",
          description:
            "Renovation framing may involve rebuilding walls, changing room layouts, or preparing spaces for updates. Our team follows your project plans to coordinate wood or metal framing carefully with existing structures.",
          imageAlt: "Renovation framing work in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Framing installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial New Home or Offices Framing Contractors Installation Burlington, WA?",
      body: "Planning a home or office project in Burlington? Contact Joyner Construction LLC to discuss your residential or commercial framing installation needs and request an estimate.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Framing Services",
      title:
        "Certified Or Trusted Reliable Building Framing Contractors Services Agency Burlington, WA",
      intro:
        "Choose a framing contractor who understands that dependable construction starts with careful planning. Joyner Construction LLC supports residential and commercial framing projects in Burlington, WA, with wood and steel options shaped around approved plans. We coordinate measurements, materials, wall layouts, and installation details to help keep work organized. Whether you are building a home, expanding a property, or preparing an office space, discuss your scope and schedule with our team.",
      sections: [
        {
          heading: "Residential Structural Framing Company",
          body: [
            "A home's frame supports its layout, walls, roof system, and later construction stages. Joyner Construction LLC provides residential structural framing in Burlington, WA, for new builds and planned improvements. We work from project drawings to coordinate measurements, wall placement, openings, and material choices. Our team discusses wood or steel options, installation details, and scheduling with homeowners and builders before work begins onsite, helping keep the framing scope clear and organized.",
          ],
        },
        {
          heading: "Affordable House Framing Services",
          body: [
            "Planning a home build or improvement often means balancing quality, scope, and budget. Joyner Construction LLC discusses affordable house framing services in Burlington, WA, with your project requirements in view. We review plans, dimensions, material options, and installation needs before work begins. This conversation helps clarify what the framing stage includes and where coordination may be needed. Contact our team to discuss practical options for your home and project timeline.",
          ],
        },
        {
          heading: "Local Structural Framing Specialists",
          body: [
            "Choosing a local framing team can make project communication and site coordination more straightforward. Joyner Construction LLC serves Burlington, WA, with structural framing support for residential and commercial construction. We consider approved drawings, building dimensions, material specifications, and the sequence of work before installation. Our specialists discuss wood and steel framing, wall layouts, and project details with homeowners, builders, and property teams. Contact us to review your plans and schedule.",
          ],
        },
        {
          heading: "New Home Framing Contractors",
          body: [
            "Starting a home build requires a framing contractor who can work from the project plans and schedule. Joyner Construction LLC provides new home framing in Burlington, WA, using wood or steel systems as specified. We coordinate wall layouts, openings, measurements, and structural components to prepare the building for subsequent trades. Clear communication helps keep requirements understood as the project progresses. Discuss your drawings, material preferences, and timeline with our team.",
          ],
        },
        {
          heading: "Experienced Wood Framing Contractors",
          body: [
            "Wood framing suits many residential projects because it accommodates a range of layouts and designs. Joyner Construction LLC provides wood framing in Burlington, WA, based on approved plans and project specifications. We coordinate measurements, wall placement, openings, and connections while considering the construction sequence. Whether your project involves a new home, addition, or renovation, our team focuses on careful installation and communication with the people managing the build throughout construction.",
          ],
        },
        {
          heading: "Structural Framing Installation Company",
          body: [
            "Structural framing installation requires accurate layout, suitable materials, and coordination with approved building documents. Joyner Construction LLC installs framing systems for residential and commercial projects in Burlington, WA. Depending on the design, work may involve wood framing, steel structural framing, or metal wall systems. We review the scope, dimensions, and sequencing needs so installation aligns with the wider construction plan. Contact our team to discuss your project requirements and schedule.",
          ],
        },
        {
          heading: "Residential Framing Construction Services",
          body: [
            "Residential framing construction shapes the rooms, walls, and structural framework of a home. Joyner Construction LLC supports Burlington, WA, homeowners and builders with framing for new construction, additions, and renovations. We follow project drawings and coordinate material choices, measurements, openings, and installation details. Our team can discuss wood or steel options according to design requirements. A clear scope helps everyone understand the work before the next construction stages begin smoothly.",
          ],
        },
        {
          heading: "Reliable Building Framing Contractors",
          body: [
            "Reliable framing work depends on careful preparation, consistent communication, and installation that follows project documents. Joyner Construction LLC provides building framing services in Burlington, WA, for residential and commercial projects. We coordinate with property owners, builders, and other trades to understand dimensions, materials, wall systems, and scheduling needs. From wood framing in a new home to metal framing in an office, we approach each project with careful attention to detail.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Residential and Commercial Framing Services",
      description:
        "Find clear answers about our residential and commercial framing services.",
      items: [
        {
          question: "What framing services does Joyner Construction LLC provide?",
          answer:
            "Joyner Construction LLC provides residential and commercial framing support, including wood framing, steel framing, interior walls, exterior walls, new construction, additions, and renovation projects throughout Burlington, Washington.",
        },
        {
          question: "Do you handle both residential and commercial framing?",
          answer:
            "Yes. Our framing services can support homes, additions, renovations, office buildings, and other commercial spaces, with the framing approach based on approved plans, building specifications, and project requirements.",
        },
        {
          question: "Can you install both wood and steel structural framing?",
          answer:
            "We can discuss wood and steel framing options for your project. The suitable system depends on the building design, specifications, intended use, budget, and applicable construction requirements.",
        },
        {
          question: "Do you provide framing for home additions and renovations?",
          answer:
            "Yes. We provide framing support for planned additions and renovations, including new rooms, revised layouts, and replacement framing where the project scope and approved plans call for it.",
        },
        {
          question: "How can I request an estimate for framing in Burlington?",
          answer:
            "Contact Joyner Construction LLC with your project location, plans, approximate size, and desired timeline. Our team can review the details, explain the process, and discuss next steps.",
        },
        {
          question:
            "What information should I prepare before contacting a framing contractor?",
          answer:
            "Prepare available drawings, project dimensions, preferred materials, site details, and your expected schedule. These details help the contractor understand the framing scope and discuss project requirements more efficiently.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Planning residential or commercial framing in Burlington? Contact Joyner Construction LLC today to discuss your construction requirements and request a project estimate.",
    },
  };
}
