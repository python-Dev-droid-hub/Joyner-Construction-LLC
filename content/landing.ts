import type { AboutOrbitContent } from "@/components/sections/AboutOrbit";
import type { ServiceShowcaseItem } from "@/components/ui/spatial-product-showcase";
import type { AreaDef, ServiceDef } from "@/content/pages";
import type { ServiceImagePack } from "@/content/service-images";
import { getAreaLandmark } from "@/content/service-images";
import { reviewsContent } from "@/content/site";

export type LandingPageContent = {
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    areaLabel: string;
    serviceLinkLabel: string;
    cta: { label: string; href: string };
    visualCaption: string;
    orbit: AboutOrbitContent;
  };
  services: {
    title: string;
    items: ServiceShowcaseItem[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    backgroundImage: string;
    backgroundAlt: string;
  };
  reviews: {
    title: string;
    body: string;
    testimonials: {
      name: string;
      handle: string;
      description: string;
      image: string;
    }[];
  };
  serviceArea: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: {
      heading: string;
      body: string[];
      subheadings?: { title: string; body: string[] }[];
    }[];
    note: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string; caption: string };
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    image: { src: string; alt: string; caption: string };
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    servingLabel: string;
    map: { lat: number; lng: number; zoomLabel: string };
  };
};

type ServiceFocus = {
  label: string;
  title: string;
  body: string;
};

const SERVICE_FOCUS: Record<string, [ServiceFocus, ServiceFocus, ServiceFocus]> =
  {
    framing: [
      {
        label: "New Home",
        title: "New Home Framing",
        body: "Structural framing for new residential construction—from layout through walls, floors, and roof framing as the project requires.",
      },
      {
        label: "Addition",
        title: "Home Addition Framing",
        body: "Framing for additions with careful attention to how new structure meets the existing home.",
      },
      {
        label: "Renovation",
        title: "Renovation Framing",
        body: "Framing within renovation projects where walls, openings, or structural updates need precise carpentry.",
      },
    ],
    siding: [
      {
        label: "Install",
        title: "New Siding Installation",
        body: "Exterior siding installation that protects the home envelope and finishes the look of the exterior.",
      },
      {
        label: "Replace",
        title: "Siding Replacement",
        body: "Removal and replacement of worn or damaged siding with careful prep and weather-aware sequencing.",
      },
      {
        label: "Repair",
        title: "Siding Repair",
        body: "Targeted siding repairs where damaged sections need clean, matching workmanship.",
      },
    ],
    roofing: [
      {
        label: "Install",
        title: "Roof Installation",
        body: "Residential roofing installation focused on weather protection and dependable fastening.",
      },
      {
        label: "Replace",
        title: "Roof Replacement",
        body: "Roof replacement planned around access, material choices, and protecting the home during the work.",
      },
      {
        label: "Repair",
        title: "Roof Repair",
        body: "Roof repairs for leaks, damaged sections, or maintenance needs discussed before pricing.",
      },
    ],
    plumbing: [
      {
        label: "Residential",
        title: "Residential Plumbing",
        body: "Plumbing support for homes and remodeling projects with clear scope and coordination.",
      },
      {
        label: "Remodel",
        title: "Remodel Plumbing",
        body: "Plumbing updates tied to kitchen, bath, or renovation layouts—planned with the rest of the build.",
      },
      {
        label: "Service",
        title: "Plumbing Project Support",
        body: "Practical plumbing project conversations so estimates match access, materials, and timing.",
      },
    ],
    electrical: [
      {
        label: "Residential",
        title: "Residential Electrical",
        body: "Electrical work for homes and remodeling projects with careful coordination and clear scope.",
      },
      {
        label: "Remodel",
        title: "Remodel Electrical",
        body: "Electrical updates during renovations—openings, circuits, and finish locations planned together.",
      },
      {
        label: "Service",
        title: "Electrical Project Support",
        body: "Estimate conversations that stay focused on the electrical work your home project actually needs.",
      },
    ],
    decks: [
      {
        label: "New Deck",
        title: "New Deck Construction",
        body: "Custom residential decks built for outdoor living, structure, and lasting usability.",
      },
      {
        label: "Rebuild",
        title: "Deck Rebuilds",
        body: "Deck rebuilds that replace worn structure while matching how you use the outdoor space.",
      },
      {
        label: "Repair",
        title: "Deck Repair",
        body: "Targeted deck repairs for boards, railings, or structural concerns discussed before work begins.",
      },
    ],
    fences: [
      {
        label: "Install",
        title: "Fence Installation",
        body: "Residential fencing for privacy, boundaries, and clean property definition.",
      },
      {
        label: "Replace",
        title: "Fence Replacement",
        body: "Fence replacement planned around property lines, access, and material preferences.",
      },
      {
        label: "Repair",
        title: "Fence Repair",
        body: "Fence repairs for damaged panels, posts, or gates with practical scope discussion first.",
      },
    ],
    painting: [
      {
        label: "Interior",
        title: "Interior Painting",
        body: "Interior residential painting for clean, finished living spaces with careful prep.",
      },
      {
        label: "Exterior",
        title: "Exterior Painting",
        body: "Exterior painting planned around weather, surface prep, and lasting coverage.",
      },
      {
        label: "Refresh",
        title: "Paint Refresh Projects",
        body: "Room or whole-home paint refreshes scoped to the surfaces and finishes you need.",
      },
    ],
    windows: [
      {
        label: "Install",
        title: "Window Installation",
        body: "Window installation for comfort, light, and weather performance on residential homes.",
      },
      {
        label: "Replace",
        title: "Window Replacement",
        body: "Window replacement with attention to openings, flashing, and finish details.",
      },
      {
        label: "Upgrade",
        title: "Window Upgrades",
        body: "Window upgrade projects discussed around energy goals, style, and site access.",
      },
    ],
    "flat-work-concrete": [
      {
        label: "Driveways",
        title: "Driveway Concrete",
        body: "Flatwork concrete for residential driveways with careful base prep and finishing.",
      },
      {
        label: "Walks",
        title: "Sidewalks & Paths",
        body: "Sidewalks, paths, and related flatwork that improve access and outdoor flow.",
      },
      {
        label: "Patios",
        title: "Patio Flatwork",
        body: "Patio and outdoor flatwork concrete scoped to drainage, size, and how you use the space.",
      },
    ],
    remodeling: [
      {
        label: "Interior",
        title: "Interior Remodeling",
        body: "Interior remodeling that updates living spaces with practical scope and clear communication.",
      },
      {
        label: "Kitchen/Bath",
        title: "Kitchen & Bath Remodels",
        body: "Kitchen and bath remodel support planned around layout, finishes, and trade coordination.",
      },
      {
        label: "Whole Home",
        title: "Whole-Home Remodeling",
        body: "Larger remodel scopes broken into clear phases so estimates match the real work.",
      },
    ],
    "home-renovation": [
      {
        label: "Update",
        title: "Home Updates",
        body: "Home renovation projects that improve function and finish while keeping structure first.",
      },
      {
        label: "Restore",
        title: "Renovation Restorations",
        body: "Renovation work that refreshes worn spaces with careful sequencing through occupied homes.",
      },
      {
        label: "Improve",
        title: "Space Improvements",
        body: "Targeted renovations that improve rooms or flow—scoped before finishes are locked in.",
      },
    ],
    "adu-additions": [
      {
        label: "ADU",
        title: "ADU Construction",
        body: "Accessory dwelling unit projects that expand living space with careful structural planning.",
      },
      {
        label: "Addition",
        title: "Home Additions",
        body: "Home additions that tie new space into the existing structure with intentional layout.",
      },
      {
        label: "Expand",
        title: "Living Space Expansion",
        body: "Expansion projects discussed around plans, access, permits context, and how new space will be used.",
      },
    ],
  };

const accents = ["copper", "charcoal", "stone"] as const;

const sampleHandles = [
  "Homeowner · New project",
  "Homeowner · Remodel",
  "Homeowner · Renovation",
  "Builder · Residential",
  "Homeowner · Exterior",
  "Homeowner · Addition",
  "Homeowner · Refresh",
  "Project coordinator",
] as const;

const sampleQuotes = [
  (service: string, area: string) =>
    `Clear communication on our ${service.toLowerCase()} project in ${area}. Scope stayed practical from the first conversation through the estimate.`,
  (service: string, area: string) =>
    `Scheduling updates were straightforward for our ${area} ${service.toLowerCase()} work—no pressure, just a clear discussion of what was needed.`,
  (service: string, area: string) =>
    `Careful workmanship and honest scope talk. Exactly what we wanted for ${service.toLowerCase()} on our ${area} home.`,
  (service: string, area: string) =>
    `Reliable residential partner in ${area}. The ${service.toLowerCase()} scope was defined before pricing, which made planning easier.`,
  (service: string, area: string) =>
    `We always knew where the project stood. Clean communication made the ${service.toLowerCase()} process easier to follow in ${area}.`,
  (service: string, area: string) =>
    `Questions were answered without sales pressure. Solid approach to ${service.toLowerCase()} work for our ${area} property.`,
  (service: string, area: string) =>
    `Attention to detail made a real difference. Our ${service.toLowerCase()} project in ${area} moved forward with clear next steps.`,
  (service: string, area: string) =>
    `Good sequencing and clear scope talk. ${service} stayed organized so the rest of the residential work could move forward in ${area}.`,
];

/** Localized landing copy + unique service imagery for a service × area page. */
export function buildLandingContent(
  service: ServiceDef,
  area: AreaDef,
  images: ServiceImagePack,
): LandingPageContent {
  const focuses =
    SERVICE_FOCUS[service.slug] ??
    ([
      {
        label: "Residential",
        title: `Residential ${service.name}`,
        body: service.blurb,
      },
      {
        label: "Projects",
        title: `${service.name} Projects`,
        body: `${service.name} for home projects with scope confirmed before estimating.`,
      },
      {
        label: "Estimates",
        title: `${service.name} Estimates`,
        body: `Practical estimate conversations for ${service.name.toLowerCase()} work on residential properties.`,
      },
    ] as [ServiceFocus, ServiceFocus, ServiceFocus]);

  const showcaseImages = [
    images.showcase1,
    images.showcase2,
    images.showcase3,
  ] as const;

  const items: ServiceShowcaseItem[] = focuses.map((focus, index) => ({
    id: `${service.slug}-${index + 1}`,
    label: focus.label,
    title: focus.title,
    description: `${focus.body} Serving homeowners in ${area.name}. Share plans, photos, access notes, and timing when you request an estimate so the conversation stays practical—work is discussed before it is priced.`,
    image: showcaseImages[index],
    imageAlt: `${focus.title} — ${service.imageAlt} in ${area.name}`,
    accent: accents[index % accents.length],
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  }));

  const serviceLower = service.name.toLowerCase();
  const landmark = getAreaLandmark(area.slug);

  return {
    about: {
      eyebrow: "About Us",
      heading: `${service.name} Built Around Your ${area.nameShort} Home.`,
      paragraphs: [
        `${service.blurb} Joyner Construction LLC approaches each job with clear communication—scope first, then a practical estimate conversation.`,
        `Homeowners in ${area.name} plan projects against Pacific Northwest weather, mixed neighborhoods, and real site access. Those details belong in the estimate talk, not in generic national copy.`,
      ],
      areaLabel: area.name,
      serviceLinkLabel: `${serviceLower} services`,
      cta: { label: "Request an Estimate", href: "#contact" },
      visualCaption: `Tap a node to explore each stage of ${serviceLower} work.`,
      orbit: {
        centerImage: images.orbitCenter,
        centerAlt: `${service.name} in ${area.name}`,
        centerLabel: `${area.nameShort} · ${service.name}`,
        nodes: {
          inquire: images.orbitInquire,
          scope: images.orbitScope,
          layout: images.orbitLayout,
          craft: images.orbitCraft,
          structure: images.orbitStructure,
          handoff: images.orbitHandoff,
        },
        serviceName: service.name,
        areaName: area.name,
        areaShort: area.nameShort,
      },
    },
    services: {
      title: `${service.name} Services in ${area.nameShort}`,
      items,
    },
    cta: {
      eyebrow: "Ready to build",
      heading: `Let's talk ${serviceLower} for your next project in ${area.nameShort}.`,
      body: `Tell Michael Joyner about your ${serviceLower} needs in ${area.name}. You'll get a clear conversation focused on scope—not pressure.`,
      backgroundImage: images.cta,
      backgroundAlt: `${service.name} project imagery for ${area.name}`,
    },
    reviews: {
      title: `Trusted for ${serviceLower} in ${area.nameShort}`,
      body: `Sample homeowner feedback for layout. Replace these with verified Joyner Construction LLC reviews for ${serviceLower} in ${area.name} when you have them—no invented star ratings.`,
      testimonials: reviewsContent.testimonials.map((t, index) => ({
        name: t.name,
        handle: `${sampleHandles[index % sampleHandles.length]} · ${area.nameShort}`,
        description: sampleQuotes[index % sampleQuotes.length](
          service.name,
          area.nameShort,
        ),
        image: t.image,
      })),
    },
    serviceArea: {
      eyebrow: "Service Area",
      title: `${service.name} in ${area.name}`,
      intro: `Joyner Construction LLC focuses this page on ${serviceLower} for homeowners and residential projects in ${area.name}. If you are planning work that needs clear scope, dependable workmanship, and a straightforward estimate conversation, this is where that talk starts.`,
      sections: [
        {
          heading: `Built around ${area.nameShort} and one trade focus`,
          body: [
            `This page is written for ${serviceLower} in ${area.name}—not every trade and every town at once. That focus keeps the message honest: the work is specific, the geography is local, and the next step is a clear estimate conversation with Michael Joyner.`,
            `${area.nameShort} homeowners plan against Pacific Northwest weather, neighborhood access, and real lot conditions. Those realities belong in the project discussion so sequencing and materials match the site—not a generic brochure.`,
          ],
        },
        {
          heading: `What ${serviceLower} projects usually cover`,
          body: [
            `${focuses[0].body} ${focuses[1].body}`,
            `When you request an estimate for ${serviceLower} in ${area.nameShort}, share whatever you already have: photos, plans, preferred timing, and site access notes. Scope is confirmed in discussion. Timelines depend on readiness of the site, material lead times, and how this work fits the broader project schedule.`,
          ],
          subheadings: [
            {
              title: "What a clear scope supports",
              body: [
                `A well-defined ${serviceLower} scope protects every trade and finish that follows. That is the practical standard Joyner Construction LLC brings to residential work in the ${area.nameShort} area.`,
              ],
            },
          ],
        },
        {
          heading: "Working with plans, builders, and other trades",
          body: [
            `Residential ${serviceLower} rarely happens in isolation. Plans change and other trades need access windows. A useful partner keeps communication practical: what is locked, what is still open, and what must happen next.`,
            `Bring questions about access, materials, sequencing, and site logistics early. The clearer those details are, the cleaner the estimate once ${serviceLower} work is defined.`,
          ],
        },
        {
          heading: "How to start an estimate",
          body: [
            `Use the contact form on this page or email Michael Joyner directly. Include a short project description, your ${area.nameShort} location or neighborhood context, preferred timing, and any plans or photos you can share.`,
            `After the scope is understood, you receive an estimate tied to the discussed work. Scheduling depends on project readiness and coordination with other trades.`,
          ],
        },
      ],
      note: `This page focuses on ${service.name} in ${area.name}. Other services and nearby communities are covered on their own pages.`,
      cta: { label: "Request an Estimate", href: "#contact" },
      image: {
        src: landmark,
        alt: `${area.name} service area`,
        caption: area.name,
      },
    },
    faq: {
      eyebrow: "FAQs",
      title: `Questions About ${service.name}`,
      description: `Straight answers about ${serviceLower} in ${area.name}—scope, estimates, and what to share before we talk.`,
      image: {
        src: images.faq,
        alt: `${service.name} work in ${area.name}`,
        caption: `${service.name} · ${area.nameShort}`,
      },
      items: [
        {
          question: `What ${serviceLower} work do you focus on?`,
          answer: `This page covers ${serviceLower} for residential projects in the ${area.nameShort} area. ${service.blurb} Specific scope is confirmed during project discussion.`,
        },
        {
          question: "How do I request an estimate?",
          answer: `Use the estimate form on this page or email Michael Joyner directly. Include a short project description, location in ${area.nameShort}, and any plans or photos you can share.`,
        },
        {
          question: "What should I prepare before we talk?",
          answer:
            "Helpful details include project address, whether the work is new construction or renovation-related, approximate size, and preferred timing. Plans or photos are useful when available, but early conversations can start without a full drawing set.",
        },
        {
          question: "How is scheduling handled?",
          answer: `Scheduling depends on project scope, site readiness, and coordination with other trades. Timeline expectations for ${serviceLower} work are discussed after the scope is understood—not before.`,
        },
        {
          question: `Do you serve areas outside ${area.nameShort}?`,
          answer: `This page is focused on ${area.name}. Nearby communities may be discussed case by case, and other location pages cover additional cities we serve.`,
        },
        {
          question: "Will I get a fixed price on first contact?",
          answer: `Estimates are based on discussed scope. Early outreach helps start the conversation; a meaningful ${serviceLower} estimate follows once the work is clearly defined.`,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request an Estimate",
      description: `Tell us about your ${serviceLower} project in ${area.name}. Michael Joyner will follow up using the contact details you provide.`,
      servingLabel: area.name,
      map: {
        lat: area.geo.lat,
        lng: area.geo.lng,
        zoomLabel: area.name,
      },
    },
  };
}
