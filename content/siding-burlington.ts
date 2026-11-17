import type { LandingPageContent } from "@/content/landing";

export function isBurlingtonSiding(serviceSlug: string, areaSlug: string) {
  return serviceSlug === "siding" && areaSlug === "burlington-wa";
}

export const burlingtonSidingHero = {
  headline:
    "Your Trusted & Professional Residential or Commercial Siding Repair or Replacement Services Contractor Burlington, WA",
  supporting:
    "Improve your property's exterior with dependable siding solutions from Joyner Construction LLC. We help homeowners and commercial property owners in Burlington, WA, address damaged siding, replace aging materials, and plan new installations with attention to building design, exterior protection, and quality workmanship.",
};

export const burlingtonSidingSeo = {
  title: "Siding Repair & Installation in Burlington, WA",
  description:
    "Improve your property's exterior with dependable siding solutions from Joyner Construction LLC. We help homeowners and commercial property owners in Burlington, WA, address damaged siding, replace aging materials, and plan new installations.",
};

/** Swap the shared template copy for the Burlington siding page. Images stay in place. */
export function applyBurlingtonSidingContent(
  content: LandingPageContent,
): LandingPageContent {
  const [install, replace, repair] = content.services.items;

  return {
    ...content,
    about: {
      ...content.about,
      heading:
        "Joyner Construction LLC Best Choice for Commercial or Residential Building Custom Siding Install or Replace or Repair Services Contractor or Company Burlington, WA",
      paragraphs: [
        "A properly maintained exterior helps your property retain its appearance and withstand changing outdoor conditions. Joyner Construction LLC provides residential and commercial siding solutions in Burlington, WA, for property owners dealing with aging materials or planning exterior improvements. Our siding repair services address issues such as damaged corners, separated panels, and worn sections.",
        "Whether you need house siding repair, residential siding repair, or exterior siding repair, we consider the affected surfaces before recommending an approach. We also assist with new siding installations and complete replacements. Our team emphasizes appropriate material choices, organized project preparation, and installation details that support a consistent exterior finish.",
      ],
      visualCaption: "Tap a node to explore each stage of siding work.",
      orbit: {
        ...content.about.orbit,
        steps: {
          inquire:
            "Tell us what needs improvement and explore possible siding solutions.",
          scope:
            "Project details reflect your property's condition, goals, and agreed requirements.",
          layout:
            "We arrange exterior elements to complement the property's overall architectural appearance.",
          craft:
            "Our workmanship emphasizes accurate fitting, clean edges, and consistent detailing.",
          structure:
            "We inspect affected surfaces to understand existing exterior installation conditions.",
          handoff:
            "We explain project completion details and address outstanding client questions.",
        },
      },
    },
    services: {
      title: "New Siding Installation, Replacement, and Repair",
      items: [
        {
          ...install,
          label: "Install",
          title: "New Siding Installation",
          description:
            "Start your exterior project with siding that suits your building's design. We help plan new installations around material preferences, surface preparation, building requirements, and the desired finished appearance.",
          imageAlt: "New siding installation on a property in Burlington, WA",
        },
        {
          ...replace,
          label: "Replace",
          title: "Siding Replacement",
          description:
            "Give an aging exterior a fresh direction with replacement siding. Updating worn or unsuitable materials can improve visual consistency and provide an opportunity to reconsider your property's exterior design.",
          imageAlt: "Siding replacement on a property in Burlington, WA",
        },
        {
          ...repair,
          label: "Repair",
          title: "Siding Repair",
          description:
            "Address exterior siding problems before damaged sections affect surrounding materials. We assess loose panels, cracks, and deteriorating areas to identify repair options suited to your building's condition.",
          imageAlt: "Siding repair on a property in Burlington, WA",
        },
      ],
    },
    cta: {
      ...content.cta,
      eyebrow: "Siding installation",
      heading:
        "Are You Looking for a Joyner Construction LLC for Your Residential or Commercial Siding Installation Burlington, WA?",
      body: "Planning to upgrade your property's exterior? Reach out to Joyner Construction LLC for residential or commercial siding installation in Burlington, WA. Let's discuss your building's improvement requirements.",
      layout: "editorial",
    },
    serviceArea: {
      ...content.serviceArea,
      eyebrow: "Siding Services",
      title:
        "Certified or Trusted Siding Installation or Replacement Services Agency Burlington, WA",
      intro:
        "A well-planned siding project can give your building a more cohesive appearance while addressing exterior material concerns. Joyner Construction LLC offers siding installation and replacement solutions for residential and commercial properties in Burlington, WA. We consider the building's existing surfaces, architectural style, and preferred materials when approaching each project. From replacing outdated siding to completing a new exterior installation, our focus is on preparation, proper fitting, and finishing quality.",
      sections: [
        {
          heading: "Vinyl Siding",
          body: [
            "Vinyl siding provides a flexible way to change your property's exterior without choosing a single traditional appearance. Different panel profiles, colors, and textures allow homeowners to coordinate siding with windows, roofing, and architectural features. Joyner Construction LLC helps Burlington, WA, property owners explore vinyl siding for renovation projects. Before installation, consider panel quality, color preferences, and manufacturer requirements. Proper fitting and fastening contribute to a uniform finish across exterior walls.",
          ],
        },
        {
          heading: "Fiber Cement Siding",
          body: [
            "Fiber cement siding is an option for property owners who want a defined exterior appearance with multiple design possibilities. Its profiles can complement different architectural styles, while its composition offers a durable alternative to several conventional siding materials. Joyner Construction LLC helps Burlington, WA, customers consider this option for exterior renovations. Proper installation requires attention to product specifications, cutting procedures, fastening, joint details, and finishing recommendations.",
          ],
        },
        {
          heading: "General Siding",
          body: [
            "Exterior siding is an important part of a building's overall construction and visual character. Selecting suitable materials involves considering wall conditions, architectural details, expected maintenance, and exposure to weather. Joyner Construction LLC provides general siding solutions for homes and commercial properties in Burlington, WA. Whether your goal is to correct deteriorating surfaces or change the appearance of your building, careful planning helps guide material selection and installation decisions.",
          ],
        },
        {
          heading: "Local Siding Installation Company",
          body: [
            "Every exterior project comes with its own design preferences, property conditions, and practical considerations. Joyner Construction LLC works with residential and commercial property owners in Burlington, WA, to plan siding improvements around these requirements. From selecting a suitable exterior profile to understanding preparation needs, each decision contributes to the finished result. Discussing your expectations and project details beforehand helps establish a clear direction for your building's siding installation.",
          ],
        },
        {
          heading: "Siding Repair and Installation Services",
          body: [
            "Siding issues are not always limited to visible surface damage. Loose connections, damaged trim, open joints, and deteriorating panels can affect different parts of an exterior. Joyner Construction LLC provides siding repair and installation services in Burlington, WA, for homeowners and commercial property owners. We consider the location and extent of the problem when evaluating possible solutions, helping determine whether localized repairs or broader replacement work is appropriate.",
          ],
        },
        {
          heading: "Licensed and Insured Siding Contractors",
          body: [
            "Before choosing a siding contractor, review their qualifications and confirm that applicable licensing and insurance requirements are satisfied. It is also helpful to understand the proposed materials, installation responsibilities, project schedule, and estimate details. Joyner Construction LLC encourages property owners in Burlington, WA, to make informed decisions before starting exterior improvements. Clear expectations and documented project details help establish a professional working relationship from the initial consultation onward.",
          ],
        },
      ],
    },
    faq: {
      ...content.faq,
      eyebrow: "FAQs",
      title: "Siding Choices, Repairs, and Installation",
      description:
        "Understand siding choices, repair considerations, replacement decisions, and installation expectations.",
      items: [
        {
          question: "What Should I Do About Loose or Separating Siding Panels?",
          answer:
            "Loose panels should be inspected to identify fastening problems, damaged materials, or underlying issues. Addressing the cause helps determine whether refastening or replacement is appropriate.",
        },
        {
          question:
            "Does New Siding Require Removing the Existing Exterior Material?",
          answer:
            "Removal depends on the existing siding's condition, building construction, and applicable installation requirements. A contractor should evaluate the exterior before recommending an installation approach.",
        },
        {
          question: "Which Siding Option Offers Different Exterior Design Styles?",
          answer:
            "Vinyl and fiber cement siding come in various profiles, textures, and finishes. Comparing available styles helps you choose materials that complement your property's architecture.",
        },
        {
          question: "Can Commercial Properties Benefit From Siding Replacement?",
          answer:
            "Yes, replacing outdated commercial siding can refresh a building's exterior and address deteriorating materials. Project planning should consider the building's design, use, and installation requirements.",
        },
        {
          question: "How Can I Maintain Newly Installed Siding?",
          answer:
            "Follow the manufacturer's maintenance recommendations, inspect exterior surfaces periodically, and remove accumulated dirt when appropriate. Promptly addressing visible damage helps maintain the siding's condition.",
        },
        {
          question:
            "What Information Should I Provide When Requesting a Siding Estimate?",
          answer:
            "Share your property type, approximate project size, existing siding condition, preferred materials, and desired improvements. Photographs can also help explain the exterior work needed.",
        },
      ],
    },
    contact: {
      ...content.contact,
      title: "Request an Estimate!",
      description:
        "Ready to discuss your Burlington siding project? Contact Joyner Construction LLC today and request an estimate for your property.",
    },
  };
}
