export const site = {
  businessName: "Joyner Construction LLC",
  contactName: "Michael Joyner",
  email: "joynerconstllc@gmail.com",
  /** Public listing phone — confirm before marketing push. */
  phone: "(360) 595-8365",
  phoneHref: "tel:+13605958365",
  hours: "Monday–Saturday, 8:00 AM–7:00 PM",
  hoursShort: "Mon–Sat, 8 AM–7 PM",
  /** Displayed with hours; Bellingham, WA uses Pacific Time. */
  hoursTimezoneLabel: "Pacific Time",
  service: "Residential framing",
  location: "Bellingham, Washington",
  locationShort: "Bellingham, WA",
  /** Areas named in the footer. Primary focus of this page remains Bellingham. */
  servingAreas: [
    "Bellingham, WA",
    "Ferndale, WA",
    "Lynden, WA",
    "Burlington, WA",
  ] as const,
  /** Static for Cache Components / prerender — update yearly. */
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
] as const;

/** Optional verified social profile URLs for Organization sameAs schema. */
export const socialProfiles = [] as const;

export const heroContent = {
  eyebrow: "Joyner Construction LLC",
  /** Primary H1 — one service, one location */
  headline: "Residential Framing in Bellingham, WA",
  brandLine: "A Strong Frame. A Better Home.",
  supporting:
    "Structural framing for new homes, additions, and residential projects in the Bellingham area. Request an estimate from Joyner Construction LLC.",
  primaryCta: { label: "Request an Estimate", href: "#contact" },
  secondaryCta: { label: "About Us", href: "#about" },
} as const;

export const aboutContent = {
  eyebrow: "About Us",
  heading: "Framing the Foundation of Your Home.",
  paragraphs: [
    "Quality framing is the structural backbone of a home. Walls, floors, and roofs depend on accurate layout, solid connections, and careful workmanship long before finishes go on.",
    "Joyner Construction LLC provides residential framing for new construction and home projects in Bellingham, Washington—focused on clean, dependable structure that supports the rest of the build.",
  ],
  cta: { label: "Request an Estimate", href: "#contact" },
  image: {
    src: "/images/hero/frame-beams.jpg",
    alt: "Residential wood framing under construction for a home project",
  },
} as const;

export const servicesContent = {
  eyebrow: "Framing Services",
  title: "Residential Framing for Homes in Bellingham",
  description:
    "This page focuses on residential framing—the structural woodwork that shapes walls, floors, and roof systems. Scope is confirmed during project discussion so every estimate matches the work you need.",
  items: [
    {
      title: "New Home Framing",
      body: "Structural framing for new residential construction, from layout through walls, floors, and roof framing as the project requires.",
      image: "/images/hero/frame-main.jpg",
      alt: "New residential home framing with exposed wall and floor structure",
    },
    {
      title: "Home Addition Framing",
      body: "Framing support for residential additions, with careful attention to how new structure meets the existing home.",
      image: "/images/hero/frame-beams.jpg",
      alt: "Timber framing details for a residential addition project",
    },
    {
      title: "Renovation Framing",
      body: "Framing work within renovation projects where walls, openings, or structural updates need precise carpentry.",
      image: "/images/hero/frame-detail.jpg",
      alt: "Structural framing work on an active residential construction site",
    },
  ],
} as const;

export const serviceAreaContent = {
  eyebrow: "Service Area",
  title: "Residential Framing in Bellingham, WA",
  intro:
    "Joyner Construction LLC focuses this page on residential framing for homeowners and residential projects in Bellingham, Washington. If you are planning a new home, addition, or renovation that needs a clean, dependable structural frame, this is where that conversation starts.",
  sections: [
    {
      heading: "Built around one city, one trade",
      body: [
        "Many construction sites try to cover every trade and every town at once. This page does the opposite. It is written for residential framing in Bellingham—walls, floors, roofs, and the structural skeleton that everything else depends on. That focus keeps the message honest: the work is structural, the geography is local, and the next step is a clear estimate conversation with Michael Joyner.",
        "Bellingham homeowners plan projects against a specific backdrop—Pacific Northwest weather, mixed older and newer neighborhoods, hillside lots, and waterfront-adjacent sites. Framing decisions here are not abstract. Layout accuracy, fastening, openings, and sequencing all matter more when the rest of the build has to move through rain seasons, inspections, and coordination with other trades.",
      ],
    },
    {
      heading: "New home framing in Bellingham",
      body: [
        "New residential construction needs a frame that matches the plans and stands ready for mechanicals, insulation, and finishes. From sill plates and floor systems to wall panels and roof framing, the goal is square, solid structure—not shortcuts that show up later as out-of-plumb walls or uneven floors.",
        "When you request an estimate for a new home in Bellingham, share whatever you already have: architectural drawings, engineer notes, preferred timing, and site access details. Scope is confirmed in discussion. Timelines depend on readiness of the site, material lead times, and how framing fits into the broader build schedule. Those variables are talked through directly instead of being buried in marketing promises.",
      ],
      subheadings: [
        {
          title: "What a strong new-home frame supports",
          body: [
            "A well-executed frame protects every trade that follows. Plumbers, electricians, HVAC crews, and finish carpenters all work more cleanly when openings are right, walls are true, and connections are solid. That is the practical standard Joyner Construction LLC brings to residential framing work in the Bellingham area.",
          ],
        },
      ],
    },
    {
      heading: "Home additions that tie into existing structure",
      body: [
        "Additions are often more nuanced than new builds because the new frame has to meet an existing home. Matching floor elevations, aligning wall planes, protecting openings, and planning load paths all require careful layout. Homeowners in Bellingham commonly expand for bedrooms, living space, or multi-generational living—projects where the connection between old and new has to feel intentional, not patched on.",
        "An addition estimate conversation usually covers access, temporary protection, sequencing around occupied living space, and how the framed addition will hand off to exterior and interior finishes. Bring sketches or plans if you have them. If you are earlier in the process, a short written description of the rooms and goals is still a useful starting point.",
      ],
    },
    {
      heading: "Renovation framing and structural changes",
      body: [
        "Renovation framing can mean opening walls, reframing for new layouts, strengthening areas for new loads, or rebuilding portions of a structure after selective demolition. These jobs reward careful measuring and clear communication because the existing home sets constraints that a blank lot never will.",
        "Joyner Construction LLC approaches renovation framing as structural work first. The conversation stays on scope: what is being removed, what is being rebuilt, what needs temporary support, and how the finished frame should leave the project ready for the next phase. No inflated claims—just a practical path from inquiry to scoped estimate.",
      ],
      subheadings: [
        {
          title: "When renovation framing is the right conversation",
          body: [
            "If your remodel changes room layouts, creates larger openings, or affects floors and roofs, you need framing clarity before finishes are selected. Starting that discussion early helps avoid redesign mid-project and keeps expectations aligned with what the structure can support.",
          ],
        },
      ],
    },
    {
      heading: "Local context: weather, sites, and sequencing",
      body: [
        "Bellingham’s climate and topography influence how residential framing projects should be planned. Moisture, access on narrower lots, and coordination around school-year or seasonal schedules can all affect when framing starts and how the site is kept organized. Those realities belong in the estimate conversation, not in generic national copy.",
        "A focused Bellingham service-area page also helps you know what this business is—and is not—claiming. This page is for residential framing in Bellingham. Nearby communities may be discussed case by case, and separate location pages can be published later if coverage expands in a documented way. Until then, the commitment on this site stays specific.",
      ],
    },
    {
      heading: "Working with plans, builders, and other trades",
      body: [
        "Residential framing rarely happens in isolation. Plans change, engineers issue clarifications, and other trades need access windows. A useful framing partner keeps communication practical: what is locked, what is still open, and what the frame must accommodate next. That matters whether you are a homeowner managing your own project or coordinating with a broader residential build team in Bellingham.",
        "Bring questions about openings, bearing walls, roof transitions, and site logistics early. The clearer those details are, the cleaner the estimate and the smoother the handoff once framing is complete. Joyner Construction LLC stays focused on the structural stage so the rest of the home can proceed on a solid base.",
      ],
    },
    {
      heading: "How to start an estimate",
      body: [
        "Use the contact form on this page or email Michael Joyner directly. Include a short project description, your Bellingham location or neighborhood context, preferred timing, and any plans or sketches you can share. You will get a conversation focused on scope—not pressure and not invented reviews or ratings.",
        "After the scope is understood, you receive an estimate tied to the discussed work. Scheduling depends on project readiness and coordination with other trades. That is the honest order of operations for residential framing: clarify the work, price the work, then plan the calendar.",
      ],
    },
  ],
  note: "Other nearby communities may be covered on separate location pages when those pages are published.",
  cta: { label: "Request an Estimate", href: "#contact" },
  image: {
    src: "/images/service-area/bellingham-landmark.jpg",
    alt: "Historic 1892 brick landmark with clock tower in snowy Bellingham, Washington",
    caption: "Bellingham, WA",
  },
} as const;

export const reviewsContent = {
  eyebrow: "Customer Reviews",
  title: "Trusted for residential framing in Bellingham",
  body: "Sample homeowner feedback for layout. Replace these with verified Joyner Construction LLC reviews when you have them—no invented star ratings.",
  cta: { label: "Talk About Your Project", href: "#contact" },
  testimonials: [
    {
      name: "Elena Brooks",
      handle: "Homeowner · New construction",
      description:
        "The walls were square and the layout matched the plans. Communication stayed clear from first walkthrough to final framing check.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Marcus Hale",
      handle: "Homeowner · Addition",
      description:
        "Our addition frame lined up cleanly with the existing structure. Scheduling updates were straightforward—no surprises on site.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Priya Nair",
      handle: "Homeowner · Renovation",
      description:
        "Careful measuring and solid connections. The crew coordinated framing around the renovation scope without rushing the details.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "James Ortega",
      handle: "Builder · Residential",
      description:
        "Reliable framing partner for residential work in Bellingham. Layout was accurate and the job was left ready for the next trades.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Hannah Cole",
      handle: "Homeowner · New home",
      description:
        "We always knew where the frame stood. Clean workmanship and a calm, organized site made the process easier to follow.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Daniel Kim",
      handle: "Homeowner · Addition",
      description:
        "Structure first—exactly what we needed. Floors and walls felt solid, and questions were answered without sales pressure.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Sofia Alvarez",
      handle: "Homeowner · Renovation",
      description:
        "Attention to fastening and openings made a real difference. The frame was ready for mechanicals without rework drama.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Ryan Patel",
      handle: "Project coordinator",
      description:
        "Good sequencing and clear scope talk. Framing stayed organized so the rest of the residential build could move forward.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
    },
  ],
} as const;

export const faqContent = {
  eyebrow: "FAQs",
  title: "Questions About Residential Framing",
  description:
    "Straight answers about residential framing in Bellingham—scope, estimates, and what to share before we talk.",
  image: {
    src: "/images/hero/framing-neighborhood.webp",
    alt: "Residential wood framing under construction in a neighborhood setting",
    caption: "Residential framing · Bellingham",
  },
  items: [
    {
      question: "What residential framing work do you focus on?",
      answer:
        "This page covers residential framing for new construction, additions, and renovation projects in the Bellingham area. Specific scope is confirmed during project discussion.",
    },
    {
      question: "How do I request an estimate?",
      answer:
        "Use the estimate form on this page or email Michael Joyner directly. Include a short project description, location in Bellingham, and any plans or sketches you can share.",
    },
    {
      question: "What should I prepare before we talk?",
      answer:
        "Helpful details include project address, whether the work is new construction or renovation, approximate size, and preferred timing. Plans are useful when available, but early conversations can start without a full drawing set.",
    },
    {
      question: "How is scheduling handled?",
      answer:
        "Scheduling depends on project scope, site readiness, and coordination with other trades. Timeline expectations are discussed after the scope is understood—not before.",
    },
    {
      question: "Do you serve areas outside Bellingham?",
      answer:
        "This page is focused on Bellingham, WA. If you are elsewhere, contact us and we can tell you whether the project can be considered or whether a different location page applies.",
    },
    {
      question: "Will I get a fixed price on first contact?",
      answer:
        "Estimates are based on discussed scope. Early outreach helps start the conversation; a meaningful estimate follows once the framing work is clearly defined.",
    },
  ],
} as const;

export const contactContent = {
  eyebrow: "Contact",
  title: "Request an Estimate",
  description:
    "Tell us about your residential framing project in Bellingham. Michael Joyner will follow up using the contact details you provide.",
  map: {
    /** Downtown Bellingham, WA */
    lat: 48.7519,
    lng: -122.4787,
    zoomLabel: "Bellingham, WA",
  },
} as const;

export const heroImages = {
  main: {
    src: "/images/hero/framing-neighborhood.webp",
    alt: "Residential wood framing on new home construction sites under a clear sky",
  },
} as const;
