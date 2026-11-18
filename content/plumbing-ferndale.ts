import type { LandingPageContent } from "@/content/landing";

export function isFerndalePlumbing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "plumbing" && areaSlug === "ferndale-wa";
}

export const ferndalePlumbingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Plumbing Installation Repair or Replacement Services Contractor Ferndale, WA",
  supporting:
    "Joyner Construction LLC provides residential and commercial plumbing services in Ferndale, WA, helping property owners handle leaking pipes, outdated fixtures, drainage concerns, and plumbing upgrades. From individual repairs to larger installation projects, our team focuses on practical solutions suited to each property's needs.",
};

export const ferndalePlumbingSeo = {
  title:
    "Ferndale, WA Plumbing Experts | Professional Plumbing Installation, Repairs, Drain Cleaning & Water Heater Services – Joyner Construction LLC",
  description:
    "Need reliable plumbing services in Ferndale, WA? Joyner Construction LLC offers professional plumbing solutions, including pipe repairs, drain cleaning, water heater services, plumbing installations, and residential plumbing improvements. Count on quality workmanship and dependable service for your plumbing needs.",
};

/** Swap the shared template copy for the Ferndale plumbing page. Images stay in place. */
export function applyFerndalePlumbingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Water Line Installation and Repair Services Contractor or Company Ferndale, WA",
      paragraphs: [
        "Plumbing problems can affect daily routines, building operations, and the condition of a property. Joyner Construction LLC offers plumbing solutions for residential and commercial properties in Ferndale, WA, with services covering pipe installation, leaking pipe repair, fixture upgrades, and water line work.",
        "Whether a homeowner needs help with a damaged pipe or a business is planning plumbing improvements, the right approach starts with understanding the problem and the building's requirements. Our services include residential plumbing repair, home plumbing repair, bathroom plumbing installation, shower plumbing services, and toilet installation or replacement. We also assist with water pipe repair and broken pipe replacement based on project conditions.",
      ],
      visualCaption: "Tap a node to explore each stage of plumbing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "We discuss your plumbing concerns, project goals, and preferred improvements before determining a suitable scope.",
          scope:
            "We identify the work involved, from a specific repair to a broader plumbing installation or replacement project.",
          layout:
            "We review the property's plumbing layout to understand fixture locations, pipe routes, access points, and project requirements.",
          craft:
            "Our work planning considers suitable materials, installation methods, and the practical needs of each plumbing project.",
          structure:
            "We assess how existing pipes, fixtures, and connections relate to the building's overall water system.",
          handoff:
            "We explain the completed work and relevant next steps so property owners understand the service provided.",
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
            "Residential plumbing services address common household concerns, including leaking pipes, faulty fixtures, toilet problems, and water line issues. We help homeowners plan repairs and installations around their property's existing plumbing system.",
          imageAlt: "Residential plumbing work in Ferndale, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Plumbing",
          description:
            "A bathroom or kitchen remodel may require updated pipe connections, relocated fixtures, or new plumbing installations. We help plan plumbing work that supports the intended layout and practical use of the renovated space.",
          imageAlt: "Remodel plumbing installation in Ferndale, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Plumbing Project Support",
          description:
            "Commercial and residential projects can involve several plumbing requirements. From replacing damaged pipe sections to coordinating fixture installations, we help property owners understand the work needed for their building.",
          imageAlt: "Plumbing project support in Ferndale, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Plumbing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Faucet and Sink Installation and Replacement Contractors Installation Ferndale, WA?",
      body: "Planning a faucet or sink upgrade? Joyner Construction LLC can help assess your property's plumbing connections and discuss installation or replacement options for residential and commercial spaces in Ferndale, WA.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Plumbing Services",
      title:
        "Certified or Trusted Reliable Building Plumbing Contractors Services Agency Ferndale, WA",
      intro:
        "A dependable plumbing system supports comfortable living and efficient building operations. Joyner Construction LLC provides plumbing installation, repair, and replacement services for properties in Ferndale, WA. Whether you are addressing a recurring leak, upgrading a bathroom, or planning new water line connections, we consider the property's existing setup and the work required. Our plumbing services cover several areas of a building, helping owners plan improvements without overlooking connected fixtures, pipes, or drainage needs.",
      sections: [
        {
          heading:
            "Water Heater Installation, Water Heater Repair, Water Heater Replacement",
          body: [
            "A water heater that leaks, struggles to maintain temperature, or no longer meets household demand may need professional attention. Joyner Construction LLC can discuss water heater installation, repair, and replacement options for Ferndale properties. The appropriate service depends on the unit's condition, existing connections, and the property's hot water requirements. We help identify the project scope before work begins, so homeowners and commercial property managers can make informed decisions about their water heating systems.",
          ],
        },
        {
          heading:
            "Kitchen Plumbing Repair, Kitchen Sink Installation, Kitchen Faucet Replacement Ferndale, WA",
          body: [
            "Kitchen plumbing problems can interrupt cooking, cleaning, and everyday use. A dripping faucet, damaged sink connection, or leaking pipe beneath a cabinet should be assessed before the issue causes further inconvenience. Joyner Construction LLC provides kitchen plumbing repair and can discuss kitchen sink installation or kitchen faucet replacement in Ferndale, WA. We consider the existing water connections, fixture dimensions, and intended layout when planning the work. This helps property owners choose practical improvements for their kitchens.",
          ],
        },
        {
          heading:
            "Drain Cleaning Services, Clogged Drain Repair, Residential Drain Cleaning Specialists Ferndale, WA",
          body: [
            "Slow drainage, recurring blockages, and unpleasant odors can indicate a problem within a drain line. Joyner Construction LLC helps property owners in Ferndale, WA, address drain concerns through appropriate cleaning and plumbing repair services. The right solution depends on the blockage, pipe condition, and location of the affected drain. If a simple cleaning is not enough, further inspection may be needed to identify the underlying issue. Prompt attention can help restore normal drainage and reduce repeated disruptions.",
          ],
        },
        {
          heading:
            "Whole-House Repiping, Residential Repiping Services, Home Water Pipe Replacement",
          body: [
            "Older or deteriorating pipes can lead to recurring leaks, reduced water flow, and repeated repair needs. Whole-house repiping may be worth considering when several sections of a home's plumbing system show signs of wear. Joyner Construction LLC can discuss residential repiping services and home water pipe replacement in Ferndale, WA. The recommended scope depends on pipe materials, building access, water conditions, and the extent of deterioration. A property assessment helps determine whether a targeted repair or broader replacement is more appropriate.",
          ],
        },
        {
          heading: "Drain Cleaning and Plumbing Repair Contractors",
          body: [
            "Drainage and plumbing concerns sometimes occur together. A clogged drain may be accompanied by leaking connections, damaged fittings, or other issues that affect normal water use. Joyner Construction LLC provides drain cleaning and plumbing repair support for residential and commercial properties in Ferndale, WA. We consider the symptoms and the affected plumbing components before discussing the work required. Whether the project involves clearing a blockage or addressing a related pipe problem, the goal is to identify a suitable repair approach.",
          ],
        },
        {
          heading: "Emergency Plumbing Repair Services Company",
          body: [
            "Unexpected plumbing failures can cause water damage and interrupt normal activities. A burst pipe, sudden leak, or overflowing fixture may require urgent attention to limit further problems. Joyner Construction LLC can discuss emergency plumbing repair needs for properties in Ferndale, WA, and help determine the next steps based on the situation. If water is actively escaping, shut off the relevant supply when it is safe to do so. The repair plan will depend on the source and extent of the damage.",
          ],
        },
        {
          heading: "Water Line Installation and Repair",
          body: [
            "Water lines carry clean water to the fixtures and appliances a property depends on. Damaged connections, leaking sections, or outdated lines can affect water delivery and create concerns around the building. Joyner Construction LLC offers water line installation and repair services for residential and commercial properties in Ferndale, WA. We consider the location of the affected line, existing materials, access requirements, and the property's water needs when planning the project. Repairs or replacement can then be discussed according to the findings.",
          ],
        },
        {
          heading: "Reliable Plumbing Installation Contractors",
          body: [
            "New plumbing installations require careful planning around the building's layout, fixture positions, and water supply connections. Joyner Construction LLC helps Ferndale property owners plan plumbing installation work for new fixtures, replacement components, and improvement projects. Whether you are updating a bathroom, changing a kitchen sink, or adding plumbing to a renovated area, we consider how the new components connect with the existing system. A clearly defined project scope helps reduce installation conflicts and supports a practical result.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Plumbing Services in Ferndale, WA",
      description:
        "Common questions about plumbing installation, repair, and replacement in Ferndale, WA.",
      items: [
        {
          question:
            "What plumbing services does Joyner Construction LLC provide in Ferndale, WA?",
          answer:
            "Services include plumbing installation, pipe repair, water line work, drain cleaning, water heater projects, bathroom plumbing, kitchen fixture installation, toilet replacement, and residential or commercial plumbing improvements.",
        },
        {
          question: "Can you repair leaking water pipes in residential properties?",
          answer:
            "Yes. Leaking pipe repair may involve locating the affected section, assessing its condition, and determining whether a repair or replacement is the more suitable solution.",
        },
        {
          question: "Do you provide bathroom plumbing installation services?",
          answer:
            "Bathroom plumbing projects may include shower connections, sink fixtures, toilet installation, pipe adjustments, and replacement work. The required services depend on the bathroom layout and project scope.",
        },
        {
          question: "When should a homeowner consider replacing old water pipes?",
          answer:
            "Consider an assessment when pipes develop repeated leaks, corrosion, reduced flow, or visible deterioration. A professional evaluation can help determine whether targeted repairs or repiping are appropriate.",
        },
        {
          question: "Can plumbing fixtures be replaced during a kitchen remodel?",
          answer:
            "Yes. Kitchen remodel plumbing may include sink installation, faucet replacement, drain adjustments, and water connection updates, depending on the new design and existing plumbing configuration.",
        },
        {
          question: "How can I request a plumbing estimate in Ferndale?",
          answer:
            "Contact Joyner Construction LLC with your property's location, the plumbing issue, and any planned upgrades. Sharing these details helps establish the project requirements and next steps.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to discuss your Ferndale plumbing project, explain your property's needs, and request an estimate for suitable installation, repair, or replacement work.",
    },
  };
}
