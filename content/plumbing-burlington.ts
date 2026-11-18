import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonPlumbing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "plumbing" && areaSlug === "burlington-wa";
}

export const burlingtonPlumbingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Plumbing Installation Repair or Replacement Services Contractor Burlington, WA",
  supporting:
    "For plumbing repairs and upgrades in Burlington, WA, Joyner Construction LLC helps residential and commercial property owners address damaged pipes, fixture problems, water line needs, and new installations. We consider each property's existing system and project goals before discussing a practical plumbing solution.",
};

export const burlingtonPlumbingSeo = {
  title: "Plumbing Services in Burlington, WA",
  description:
    "Joyner Construction LLC helps residential and commercial property owners in Burlington, WA, with plumbing repairs, fixture upgrades, water line work, and new installations.",
};

/** Swap the shared template copy for the Burlington plumbing page. Images stay in place. */
export function applyBurlingtonPlumbingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Water Line Installation and Repair Services Contractor or Company Burlington, WA",
      paragraphs: [
        "Plumbing issues can range from a minor fixture leak to a damaged water line that affects several areas of a building. Choosing the right service starts with identifying the affected component and understanding how it connects to the rest of the system. Joyner Construction LLC provides plumbing installation, repair, and replacement services for homes and businesses in Burlington, WA.",
        "Our work can include residential plumbing repair, water pipe repair, leaking pipe repair, broken pipe replacement, and new pipe installation. We also assist with kitchen and bathroom plumbing, shower connections, toilet installation, and other fixture-related projects based on the property's requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of plumbing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "We discuss your concerns, property needs, and expectations to understand the purpose of the plumbing project.",
          scope:
            "We define the work required and consider the components involved before moving forward with the project.",
          layout:
            "We review the building's plumbing arrangement and identify the areas affected by the proposed installation, repair, or replacement.",
          craft:
            "We consider suitable materials and work methods in relation to the property's plumbing system and project requirements.",
          structure:
            "We assess the existing pipework and fixture connections to understand how planned changes may affect the system.",
          handoff:
            "We explain the work performed and communicate relevant details about the completed plumbing service.",
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
            "A home's plumbing system supports everyday activities, from bathing and cooking to cleaning and laundry. Residential plumbing work can address damaged pipes, leaking fixtures, and installation requirements.",
          imageAlt: "Residential plumbing work in Burlington, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Plumbing",
          description:
            "Remodeling often changes where sinks, showers, toilets, and other fixtures need to be positioned. Plumbing updates help accommodate the new arrangement and connect fixtures to the water supply and drainage system.",
          imageAlt: "Remodel plumbing installation in Burlington, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Plumbing Project Support",
          description:
            "Property improvements may involve several connected plumbing tasks. We help owners consider installation, repair, and replacement requirements so the work can be planned around the building's needs.",
          imageAlt: "Plumbing project support in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Plumbing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Faucet and Sink Installation and Replacement Contractors Installation Burlington, WA?",
      body: "Replacing an outdated faucet or sink can be part of a larger property upgrade or a focused repair project. Joyner Construction LLC can discuss installation requirements for Burlington homes and commercial buildings.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Plumbing Services",
      title:
        "Certified or Trusted Reliable Building Plumbing Contractors Services Agency Burlington, WA",
      intro:
        "A plumbing system needs properly connected pipes, working fixtures, and suitable drainage to support a building's daily use. Joyner Construction LLC provides plumbing services in Burlington, WA, for residential and commercial properties requiring installation, repair, or replacement work. From a leaking pipe to a planned kitchen or bathroom upgrade, we consider the affected components and the property's existing layout. Our services cover water heaters, water lines, drains, repiping, and plumbing fixtures, allowing owners to discuss different needs within one project.",
      sections: [
        {
          heading:
            "Water Heater Installation, Water Heater Repair, Water Heater Replacement",
          body: [
            "A water heater may require attention when hot water runs out quickly, temperatures fluctuate, or the unit develops a leak. Joyner Construction LLC can discuss water heater repair, installation, and replacement options for Burlington properties. The appropriate service depends on the equipment's condition, age, capacity, and connection requirements. If replacement is being considered, the property's hot water demand and available space should also be reviewed. Evaluating these factors helps establish a suitable project scope rather than selecting a unit based on size alone.",
          ],
        },
        {
          heading:
            "Kitchen Plumbing Repair, Kitchen Sink Installation, Kitchen Faucet Replacement Burlington, WA",
          body: [
            "Kitchen plumbing includes several connections that support sinks, faucets, and drainage. A leaking supply line, loose faucet, or damaged sink connection can affect the room's usability and may lead to moisture beneath cabinets. Joyner Construction LLC offers kitchen plumbing repair and can discuss kitchen sink installation or kitchen faucet replacement in Burlington, WA. We consider the fixture dimensions, existing connections, and intended kitchen arrangement when planning the work. These details are useful whether you are addressing a specific problem or upgrading the space.",
          ],
        },
        {
          heading:
            "Drain Cleaning Services, Clogged Drain Repair, Residential Drain Cleaning Specialists Burlington, WA",
          body: [
            "A blocked drain can make sinks, tubs, and other fixtures difficult to use. Some clogs develop from everyday residue, while repeated drainage problems may indicate an issue farther inside the plumbing line. Joyner Construction LLC provides drain cleaning services and clogged drain repair support in Burlington, WA. We consider which fixture is affected and whether the problem appears isolated or recurring. When the symptoms suggest a pipe concern, additional assessment may be needed to determine whether cleaning alone is sufficient or plumbing repair should also be considered.",
          ],
        },
        {
          heading:
            "Whole-House Repiping, Residential Repiping Services, Home Water Pipe Replacement",
          body: [
            "A home's pipe network can become less reliable as materials deteriorate or connections develop repeated leaks. If plumbing problems occur across multiple areas, whole-house repiping may be worth evaluating. Joyner Construction LLC can discuss residential repiping services and home water pipe replacement in Burlington, WA. The decision depends on the existing pipe material, condition, building access, and history of repairs. Some properties may need only selected sections replaced, while others may benefit from a larger project. A review of the system helps determine the appropriate scope.",
          ],
        },
        {
          heading: "Drain Cleaning and Plumbing Repair Contractors",
          body: [
            "A drain that repeatedly slows down or backs up can affect more than one fixture, depending on the location of the blockage. Joyner Construction LLC provides drain cleaning and plumbing repair support for Burlington homes and commercial properties. We consider the symptoms, affected drain, and possible condition of connected pipework when discussing a solution. If a blockage is isolated, cleaning may address the immediate concern. When damage or another plumbing fault is involved, additional repair work may be necessary to address the cause.",
          ],
        },
        {
          heading: "Emergency Plumbing Repair Services Company",
          body: [
            "Unexpected plumbing failures can create immediate concerns, especially when water reaches floors, cabinets, walls, or other building materials. A burst pipe, leaking connection, or overflowing fixture may require urgent attention. Joyner Construction LLC can discuss emergency plumbing repair needs for properties in Burlington, WA, and help identify the work involved. If water is actively leaking, shut off the relevant supply when safe to do so and keep away from electrical hazards. The repair approach depends on the failure's location and severity.",
          ],
        },
        {
          heading: "Water Line Installation and Repair",
          body: [
            "A property's water lines connect the supply to the fixtures and appliances that depend on running water. Leaks, damaged pipe sections, and failing connections can interfere with normal water delivery. Joyner Construction LLC provides water line installation and repair services for residential and commercial properties in Burlington, WA. We consider the affected line, pipe material, access conditions, and intended water use when discussing the project. Whether you need a new connection or repair to an existing line, the work should match the building's plumbing requirements.",
          ],
        },
        {
          heading: "Reliable Plumbing Installation Contractors",
          body: [
            "Plumbing installation is an important part of new construction, property upgrades, and room renovations. Fixture placement, water supply routes, and drainage connections all need to work with the building's layout. Joyner Construction LLC helps Burlington property owners plan plumbing installations for sinks, faucets, toilets, showers, and related components. We consider the existing system and the changes required for the new setup. By defining the installation requirements in advance, property owners can better understand the work involved and how the new fixtures will connect.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Plumbing Services in Burlington, WA",
      description:
        "Common questions about plumbing installation, repair, and replacement in Burlington, WA.",
      items: [
        {
          question:
            "Does Joyner Construction LLC offer residential and commercial plumbing services in Burlington?",
          answer:
            "Yes. Plumbing project discussions can cover homes and commercial buildings, including pipe repairs, fixture installation, water line work, drain cleaning, and replacement projects.",
        },
        {
          question: "What should I do if a pipe suddenly starts leaking?",
          answer:
            "If safe, shut off the relevant water supply, protect nearby belongings, and avoid electrical hazards. Arrange an assessment to identify the leak and required repair.",
        },
        {
          question: "Can you help with kitchen sink and faucet replacement?",
          answer:
            "Yes. Kitchen fixture projects can include sink installation, faucet replacement, and related plumbing connections. The required work depends on the fixture and existing pipe arrangement.",
        },
        {
          question: "What causes drains to keep getting clogged?",
          answer:
            "Recurring clogs may result from accumulated debris, restricted pipe sections, unsuitable connections, or other drainage problems. An assessment can help identify the likely cause.",
        },
        {
          question:
            "When is water heater replacement a better option than repair?",
          answer:
            "Replacement may be worth considering when a unit has significant deterioration, recurring faults, or repair needs that no longer make practical sense. An assessment helps compare options.",
        },
        {
          question: "How can I request a plumbing estimate in Burlington, WA?",
          answer:
            "Share your property type, location, plumbing concern, and any planned installation or renovation details with Joyner Construction LLC to discuss the project and estimate process.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Contact Joyner Construction LLC to discuss plumbing repairs, fixture upgrades, pipe replacement, or new installation requirements for your Burlington property.",
    },
  };
}
