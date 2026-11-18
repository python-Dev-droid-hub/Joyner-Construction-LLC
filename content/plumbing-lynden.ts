import type { LandingPageContent } from "@/content/landing";

export function isLyndenPlumbing(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "plumbing" && areaSlug === "lynden-wa";
}

export const lyndenPlumbingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Plumbing Installation Repair or Replacement Services Contractor Lynden, WA",
  supporting:
    "Joyner Construction LLC helps homeowners and businesses in Lynden, WA, address plumbing repairs, fixture installations, pipe replacements, and water line concerns. Whether you are improving an older property or resolving a plumbing issue, we focus on understanding the system and the work your building requires.",
};

export const lyndenPlumbingSeo = {
  title:
    "Expert Plumbing Services in Lynden, WA | Residential & Commercial Plumbing Installation, Pipe Repair, Drain Cleaning, Water Heater Replacement & Emergency Plumbing – Joyner Construction LLC",
  description:
    "Looking for dependable plumbing services in Lynden, WA? Joyner Construction LLC provides professional plumbing installation, pipe repair, water line replacement, drain cleaning, water heater installation, kitchen and bathroom plumbing, whole-house repiping, and emergency plumbing solutions. Get reliable workmanship for your residential or commercial property.",
};

/** Swap the shared template copy for the Lynden plumbing page. Images stay in place. */
export function applyLyndenPlumbingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [residential, remodel, support] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Water Line Installation and Repair Services Contractor or Company Lynden, WA",
      paragraphs: [
        "A well-maintained plumbing system is essential for reliable water delivery throughout a home or commercial building. When pipes become damaged, fixtures stop working correctly, or a renovation calls for new connections, property owners need a clear plan for the work. Joyner Construction LLC provides plumbing installation, repair, and replacement services in Lynden, WA.",
        "Our services cover residential plumbing repair, home plumbing repair, leaking pipe repair, broken pipe replacement, and water line projects. We also help with bathroom plumbing installation, shower connections, toilet repair, and fixture upgrades. Each project is considered according to the building's layout and the property's specific plumbing requirements.",
      ],
      visualCaption: "Tap a node to explore each stage of plumbing work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "We listen to your concerns and discuss the results you want from the repair, replacement, or installation project.",
          scope:
            "We outline the required plumbing tasks and consider the work needed to address the property's specific needs.",
          layout:
            "We examine the proposed fixture arrangement and existing pipe locations to understand how the plumbing work should be organized.",
          craft:
            "We consider appropriate installation techniques and materials to suit the property's plumbing requirements and intended use.",
          structure:
            "We review existing connections and system components before planning changes that may affect the building's water supply.",
          handoff:
            "We communicate the work completed and provide relevant information about the plumbing improvements or repairs.",
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
            "Home plumbing systems include supply lines, drains, water heaters, and fixtures that must work together. Our residential plumbing services address repair and installation needs across these essential components.",
          imageAlt: "Residential plumbing work in Lynden, WA",
        },
        {
          ...remodel,
          label: "Remodel",
          title: "Remodel Plumbing",
          description:
            "Changing a kitchen or bathroom layout can require more than replacing visible fixtures. Remodel plumbing may involve adjusting water lines, drain connections, and fixture locations to suit the updated space.",
          imageAlt: "Remodel plumbing installation in Lynden, WA",
        },
        {
          ...support,
          label: "Service",
          title: "Plumbing Project Support",
          description:
            "From a single plumbing repair to a larger property improvement, we help owners identify the work involved. Project support can include installation planning, pipe replacement, and fixture upgrades.",
          imageAlt: "Plumbing project support in Lynden, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Plumbing services",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Buildings Faucet and Sink Installation and Replacement Contractors Installation Lynden, WA?",
      body: "A new sink or faucet can improve the function of a kitchen, bathroom, or commercial space. Joyner Construction LLC can discuss fixture replacement and installation requirements for properties in Lynden, WA.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Plumbing Services",
      title:
        "Certified or Trusted Reliable Building Plumbing Contractors Services Agency Lynden, WA",
      intro:
        "Plumbing projects should account for the condition of existing pipes, the location of fixtures, and the property's daily water demands. Joyner Construction LLC offers residential and commercial plumbing services in Lynden, WA, for owners planning repairs, replacements, and system improvements. Whether you need help with a leaking connection or want to update plumbing during a renovation, we can discuss the work involved. Our services include water line projects, drain cleaning, bathroom fixtures, kitchen plumbing, and water heater installation or replacement.",
      sections: [
        {
          heading:
            "Water Heater Installation, Water Heater Repair, Water Heater Replacement",
          body: [
            "Inconsistent hot water, unusual noises, or visible moisture around a water heater can signal a need for service. Joyner Construction LLC can discuss water heater installation, repair, and replacement options for properties in Lynden, WA. The best approach depends on the unit's age, condition, capacity, and existing plumbing connections. A replacement project may also require consideration of the property's hot water demand and available installation space. Understanding these details helps determine a suitable direction for the water heating system.",
          ],
        },
        {
          heading:
            "Kitchen Plumbing Repair, Kitchen Sink Installation, Kitchen Faucet Replacement Lynden, WA",
          body: [
            "A kitchen depends on working water connections and reliable drainage. Leaks beneath the sink, loose faucet fittings, and damaged drain connections can make everyday tasks more difficult. Joyner Construction LLC provides kitchen plumbing repair and can help plan kitchen sink installation or kitchen faucet replacement in Lynden, WA. We consider the current fixture arrangement, pipe connections, and the changes planned for the space. Whether you are replacing a worn fixture or updating the kitchen during a remodel, the installation should suit the existing plumbing system.",
          ],
        },
        {
          heading:
            "Drain Cleaning Services, Clogged Drain Repair, Residential Drain Cleaning Specialists Lynden, WA",
          body: [
            "Drain problems can develop gradually as residue and debris collect inside plumbing lines. A sink that empties slowly or a drain that repeatedly backs up may need more than a temporary fix. Joyner Construction LLC provides drain cleaning services and clogged drain repair support in Lynden, WA. We consider the location and symptoms of the blockage when discussing the appropriate work. If recurring problems suggest a damaged or restricted pipe, further assessment may help identify whether plumbing repair is also needed.",
          ],
        },
        {
          heading:
            "Whole-House Repiping, Residential Repiping Services, Home Water Pipe Replacement",
          body: [
            "When several plumbing lines show signs of deterioration, repairing one section at a time may not address the wider problem. Whole-house repiping can be considered when a home's water pipes have recurring leaks, corrosion, or other significant wear. Joyner Construction LLC can discuss residential repiping services and home water pipe replacement in Lynden, WA. The scope depends on the building's size, pipe materials, accessibility, and condition of the existing system. An assessment helps establish whether selective replacement or a broader repiping project is appropriate.",
          ],
        },
        {
          heading: "Drain Cleaning and Plumbing Repair Contractors",
          body: [
            "Drain cleaning can restore normal flow when a blockage is responsible for slow or backed-up drainage. However, repeated clogs may point to a deeper plumbing concern, such as a damaged pipe or an unsuitable connection. Joyner Construction LLC helps residential and commercial property owners in Lynden, WA, address drain cleaning and related plumbing repair needs. We consider the symptoms and affected components before discussing the next step. This approach helps distinguish a straightforward blockage from a problem that may require additional pipe work.",
          ],
        },
        {
          heading: "Emergency Plumbing Repair Services Company",
          body: [
            "A sudden plumbing problem can affect several parts of a property in a short time. Leaking supply lines, damaged fittings, and overflowing fixtures may require prompt action to reduce water exposure. Joyner Construction LLC can discuss emergency plumbing repair requirements for properties in Lynden, WA. If a leak is active, turn off the appropriate water supply if it is safe and accessible. The repair needed will depend on the source, location, and extent of the failure. Early assessment helps clarify the work involved.",
          ],
        },
        {
          heading: "Water Line Installation and Repair",
          body: [
            "Water line problems can affect pressure, water delivery, and the operation of connected fixtures. A damaged section or an unsuitable connection may need repair or replacement to restore the system's function. Joyner Construction LLC provides water line installation and repair services in Lynden, WA, for residential and commercial properties. We consider the pipe route, material, access conditions, and building requirements when planning the work. Whether the project involves a new line or an existing connection, the installation should be suited to the property's water needs.",
          ],
        },
        {
          heading: "Reliable Plumbing Installation Contractors",
          body: [
            "Installing plumbing in a new space or replacing existing components requires attention to fixture placement and pipe connections. Joyner Construction LLC helps property owners in Lynden, WA, plan plumbing installations for kitchens, bathrooms, and other areas that require water access. Projects may involve new supply lines, drain connections, toilets, sinks, or faucets. We consider how the planned installation will work with the existing system and the intended layout. Defining these details early helps property owners understand the project before installation begins.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Plumbing Services in Lynden, WA",
      description:
        "Common questions about plumbing installation, repair, and replacement in Lynden, WA.",
      items: [
        {
          question:
            "What types of plumbing projects can Joyner Construction LLC help with in Lynden?",
          answer:
            "Projects may include pipe repairs, plumbing installations, water line work, drain cleaning, water heater services, kitchen fixtures, bathroom plumbing, and residential or commercial replacements.",
        },
        {
          question: "What are common signs of a damaged water pipe?",
          answer:
            "Warning signs can include unexplained damp areas, visible leaks, reduced water pressure, discolored water, and recurring moisture near plumbing lines or building surfaces.",
        },
        {
          question: "Can you install or replace toilets in Lynden homes?",
          answer:
            "Toilet projects may include installing a new unit, replacing an existing toilet, or addressing certain connection and plumbing issues. The work depends on the bathroom's existing setup.",
        },
        {
          question: "Is whole-house repiping necessary for every older home?",
          answer:
            "No. Age alone does not determine whether repiping is needed. Pipe condition, leak history, material, and water performance help establish the appropriate repair or replacement scope.",
        },
        {
          question: "Can plumbing work be included in a bathroom renovation?",
          answer:
            "Yes. Renovation plumbing can involve shower connections, sink and toilet installation, supply line changes, and drain adjustments based on the updated bathroom design.",
        },
        {
          question: "How do I get an estimate for plumbing work in Lynden?",
          answer:
            "Contact Joyner Construction LLC and describe the issue, property type, and planned work. These details help clarify the project requirements and the information needed for an estimate.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Discuss your plumbing concerns with Joyner Construction LLC and request an estimate for installation, repair, replacement, or plumbing improvements in Lynden.",
    },
  };
}
