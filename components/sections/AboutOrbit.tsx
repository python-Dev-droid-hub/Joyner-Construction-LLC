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

export type AboutOrbitContent = {
  centerImage: string;
  centerAlt: string;
  centerLabel: string;
  nodes: {
    inquire: string;
    scope: string;
    layout: string;
    craft: string;
    structure: string;
    handoff: string;
  };
  /** Short service name for node copy, e.g. "framing" or "roofing" */
  serviceName: string;
  areaName: string;
  areaShort: string;
};

/** Homepage default — same framing orbit assets as framing service pages. */
const DEFAULT_ORBIT: AboutOrbitContent = {
  centerImage: "/images/services/framing/02-orbit-center.jpg",
  centerAlt: "Residential wood framing under construction",
  centerLabel: "Bellingham · Framing",
  nodes: {
    inquire: "/images/services/framing/03-orbit-inquire.jpg",
    scope: "/images/services/framing/04-orbit-scope.jpg",
    layout: "/images/services/framing/05-orbit-layout.jpg",
    craft: "/images/services/framing/06-orbit-craft.jpg",
    structure: "/images/services/framing/07-orbit-structure.jpg",
    handoff: "/images/services/framing/08-orbit-handoff.png",
  },
  serviceName: "Framing",
  areaName: "Bellingham, WA",
  areaShort: "Bellingham",
};

function buildTimeline(orbit: AboutOrbitContent): TimelineItem[] {
  const service = orbit.serviceName.toLowerCase();
  return [
    {
      id: 1,
      title: "Inquire",
      date: "Step 01",
      content: `Share your residential ${service} needs in ${orbit.areaShort}—new work, updates, or a full project.`,
      category: "Start",
      icon: MessagesSquare,
      relatedIds: [2],
      status: "completed",
      energy: 100,
      image: orbit.nodes.inquire,
      borderClass: "border-copper",
    },
    {
      id: 2,
      title: "Scope",
      date: "Step 02",
      content: `We review plans, access, and project goals so the ${service} scope is clear before estimating.`,
      category: "Planning",
      icon: ClipboardList,
      relatedIds: [1, 3],
      status: "completed",
      energy: 90,
      image: orbit.nodes.scope,
      borderClass: "border-[#c4845a]",
    },
    {
      id: 3,
      title: "Layout",
      date: "Step 03",
      content: `Accurate planning and layout keep ${service} work aligned with the home, site, and next trades.`,
      category: "Craft",
      icon: Ruler,
      relatedIds: [2, 4],
      status: "in-progress",
      energy: 70,
      image: orbit.nodes.layout,
      borderClass: "border-stone",
    },
    {
      id: 4,
      title: "Craft",
      date: "Step 04",
      content: `Residential ${service} built with careful workmanship and clear communication on site.`,
      category: "Build",
      icon: Hammer,
      relatedIds: [3, 5],
      status: "in-progress",
      energy: 55,
      image: orbit.nodes.craft,
      borderClass: "border-copper-bright",
    },
    {
      id: 5,
      title: "Structure",
      date: "Step 05",
      content: `${orbit.serviceName} work comes together as a dependable stage of the home project in ${orbit.areaShort}.`,
      category: "Build",
      icon: Home,
      relatedIds: [4, 6],
      status: "pending",
      energy: 35,
      image: orbit.nodes.structure,
      borderClass: "border-[#8a847a]",
    },
    {
      id: 6,
      title: "Handoff",
      date: "Step 06",
      content: `We wrap this stage and coordinate follow-up so the next steps of your ${orbit.areaShort} project can move forward.`,
      category: "Finish",
      icon: CheckCircle2,
      relatedIds: [5],
      status: "pending",
      energy: 20,
      image: orbit.nodes.handoff,
      borderClass: "border-charcoal/40",
    },
  ];
}

type AboutOrbitProps = {
  content?: AboutOrbitContent;
};

export function AboutOrbit({ content }: AboutOrbitProps = {}) {
  const orbit = content ?? DEFAULT_ORBIT;

  return (
    <RadialOrbitalTimeline
      timelineData={buildTimeline(orbit)}
      centerImage={orbit.centerImage}
      centerAlt={orbit.centerAlt}
      centerLabel={orbit.centerLabel}
      className="bg-ivory py-2 sm:py-4"
    />
  );
}
