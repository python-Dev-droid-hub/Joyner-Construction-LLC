"use client";

import {
  ClipboardList,
  Hammer,
  Home,
  Ruler,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";

export type OrbitStageKey =
  | "inquire"
  | "scope"
  | "layout"
  | "craft"
  | "structure"
  | "handoff";

export type AboutOrbitContent = {
  centerImage: string;
  centerAlt: string;
  /** Optional title for the center photo; defaults to centerAlt. */
  centerTitle?: string;
  centerLabel: string;
  nodes: Record<OrbitStageKey, string>;
  /** Optional per-stage image alt/title overrides. */
  nodeAlts?: Partial<Record<OrbitStageKey, string>>;
  nodeTitles?: Partial<Record<OrbitStageKey, string>>;
  /** Short service name for node copy, e.g. "framing" or "roofing" */
  serviceName: string;
  areaName: string;
  areaShort: string;
  /** Optional per-page step copy. Falls back to the shared service wording. */
  steps?: Record<OrbitStageKey, string>;
};

function defaultNodeAlt(
  stage: OrbitStageKey,
  serviceName: string,
  areaName: string,
): string {
  const service = serviceName.toLowerCase();
  const labels: Record<OrbitStageKey, string> = {
    inquire: `Inquire stage — discussing ${service} project needs with Joyner Construction LLC in ${areaName}`,
    scope: `Scope stage — outlining ${service} project requirements for Joyner Construction LLC in ${areaName}`,
    layout: `Layout stage — planning ${service} measurements and site layout in ${areaName}`,
    craft: `Craft stage — ${service} installation craftsmanship by Joyner Construction LLC in ${areaName}`,
    structure: `Structure stage — building the ${service} framework in ${areaName}`,
    handoff: `Handoff stage — completed ${service} work ready for next trades in ${areaName}`,
  };
  return labels[stage];
}

/** Homepage default — same framing orbit assets as framing service pages. */
const DEFAULT_ORBIT: AboutOrbitContent = {
  centerImage: "/images/services/framing/02-orbit-center.jpg",
  centerAlt:
    "Residential wood framing under construction by Joyner Construction LLC in Bellingham, WA",
  centerTitle:
    "Joyner Construction LLC structural framing — Bellingham, WA orbit center",
  centerLabel: "Bellingham · Framing",
  nodes: {
    inquire: "/images/services/framing/03-orbit-inquire.jpg",
    scope: "/images/services/framing/04-orbit-scope.jpg",
    layout: "/images/services/framing/05-orbit-layout.jpg",
    craft: "/images/services/framing/06-orbit-craft.jpg",
    structure: "/images/services/framing/07-orbit-structure.jpg",
    handoff: "/images/services/framing/08-orbit-handoff.png",
  },
  nodeAlts: {
    inquire:
      "Inquire stage — discussing framing project needs with Joyner Construction LLC in Bellingham, WA",
    scope:
      "Scope stage — outlining framing project requirements for Joyner Construction LLC in Bellingham, WA",
    layout:
      "Layout stage — planning framing measurements and site layout in Bellingham, WA",
    craft:
      "Craft stage — framing installation craftsmanship by Joyner Construction LLC in Bellingham, WA",
    structure:
      "Structure stage — building the framing framework in Bellingham, WA",
    handoff:
      "Handoff stage — completed framing work ready for next trades in Bellingham, WA",
  },
  nodeTitles: {
    inquire: "Framing inquire stage — Joyner Construction LLC, Bellingham WA",
    scope: "Framing scope stage — Joyner Construction LLC, Bellingham WA",
    layout: "Framing layout stage — Joyner Construction LLC, Bellingham WA",
    craft: "Framing craft stage — Joyner Construction LLC, Bellingham WA",
    structure:
      "Framing structure stage — Joyner Construction LLC, Bellingham WA",
    handoff: "Framing handoff stage — Joyner Construction LLC, Bellingham WA",
  },
  serviceName: "Framing",
  areaName: "Bellingham, WA",
  areaShort: "Bellingham",
};

function buildTimeline(orbit: AboutOrbitContent): TimelineItem[] {
  const service = orbit.serviceName.toLowerCase();
  const stageMeta: {
    id: number;
    key: OrbitStageKey;
    title: string;
    date: string;
    content: string;
    category: string;
    icon: TimelineItem["icon"];
    relatedIds: number[];
    status: TimelineItem["status"];
    energy: number;
    borderClass: string;
  }[] = [
    {
      id: 1,
      key: "inquire",
      title: "Inquire",
      date: "Step 01",
      content:
        orbit.steps?.inquire ??
        `Share your residential ${service} needs in ${orbit.areaShort}—new work, updates, or a full project.`,
      category: "Start",
      icon: MessagesSquare,
      relatedIds: [2],
      status: "completed",
      energy: 100,
      borderClass: "border-copper",
    },
    {
      id: 2,
      key: "scope",
      title: "Scope",
      date: "Step 02",
      content:
        orbit.steps?.scope ??
        `We review plans, access, and project goals so the ${service} scope is clear before estimating.`,
      category: "Planning",
      icon: ClipboardList,
      relatedIds: [1, 3],
      status: "completed",
      energy: 90,
      borderClass: "border-[#c4845a]",
    },
    {
      id: 3,
      key: "layout",
      title: "Layout",
      date: "Step 03",
      content:
        orbit.steps?.layout ??
        `Accurate planning and layout keep ${service} work aligned with the home, site, and next trades.`,
      category: "Craft",
      icon: Ruler,
      relatedIds: [2, 4],
      status: "in-progress",
      energy: 70,
      borderClass: "border-stone",
    },
    {
      id: 4,
      key: "craft",
      title: "Craft",
      date: "Step 04",
      content:
        orbit.steps?.craft ??
        `Residential ${service} built with careful workmanship and clear communication on site.`,
      category: "Build",
      icon: Hammer,
      relatedIds: [3, 5],
      status: "in-progress",
      energy: 55,
      borderClass: "border-copper-bright",
    },
    {
      id: 5,
      key: "structure",
      title: "Structure",
      date: "Step 05",
      content:
        orbit.steps?.structure ??
        `${orbit.serviceName} work comes together as a dependable stage of the home project in ${orbit.areaShort}.`,
      category: "Build",
      icon: Home,
      relatedIds: [4, 6],
      status: "pending",
      energy: 35,
      borderClass: "border-[#8a847a]",
    },
    {
      id: 6,
      key: "handoff",
      title: "Handoff",
      date: "Step 06",
      content:
        orbit.steps?.handoff ??
        `We wrap this stage and coordinate follow-up so the next steps of your ${orbit.areaShort} project can move forward.`,
      category: "Finish",
      icon: CheckCircle2,
      relatedIds: [5],
      status: "pending",
      energy: 20,
      borderClass: "border-charcoal/40",
    },
  ];

  return stageMeta.map((stage) => {
    const imageAlt =
      orbit.nodeAlts?.[stage.key] ??
      defaultNodeAlt(stage.key, orbit.serviceName, orbit.areaName);
    const imageTitle = orbit.nodeTitles?.[stage.key] ?? imageAlt;

    return {
      id: stage.id,
      title: stage.title,
      date: stage.date,
      content: stage.content,
      category: stage.category,
      icon: stage.icon,
      relatedIds: stage.relatedIds,
      status: stage.status,
      energy: stage.energy,
      image: orbit.nodes[stage.key],
      imageAlt,
      imageTitle,
      borderClass: stage.borderClass,
    };
  });
}

type AboutOrbitProps = {
  /** Full orbit pack, or a partial override (e.g. homepage step copy). */
  content?: Partial<AboutOrbitContent>;
};

export function AboutOrbit({ content }: AboutOrbitProps = {}) {
  const orbit: AboutOrbitContent = content
    ? {
        ...DEFAULT_ORBIT,
        ...content,
        nodes: { ...DEFAULT_ORBIT.nodes, ...content.nodes },
        nodeAlts: { ...DEFAULT_ORBIT.nodeAlts, ...content.nodeAlts },
        nodeTitles: { ...DEFAULT_ORBIT.nodeTitles, ...content.nodeTitles },
        steps: content.steps
          ? { ...content.steps }
          : DEFAULT_ORBIT.steps
            ? { ...DEFAULT_ORBIT.steps }
            : undefined,
      }
    : DEFAULT_ORBIT;

  const centerTitle = orbit.centerTitle ?? orbit.centerAlt;

  return (
    <RadialOrbitalTimeline
      timelineData={buildTimeline(orbit)}
      centerImage={orbit.centerImage}
      centerAlt={orbit.centerAlt}
      centerTitle={centerTitle}
      centerLabel={orbit.centerLabel}
      className="bg-ivory py-2 sm:py-4"
    />
  );
}
