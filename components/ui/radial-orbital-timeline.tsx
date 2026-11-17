"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type MouseEvent,
} from "react";
import { ArrowRight, Link2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  image: string;
  borderClass: string;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  centerImage: string;
  centerLabel: string;
  centerAlt: string;
  className?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  centerImage,
  centerLabel,
  centerAlt,
  className,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {},
  );
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [radius, setRadius] = useState(190);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const updateRadius = () => {
      const width = containerRef.current?.clientWidth ?? 480;
      // Keep orbit large enough that the hub sits clearly inside the ring
      setRadius(Math.min(220, Math.max(150, width * 0.38)));
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setAutoRotate(false);
    const onChange = () => setAutoRotate(!media.matches && !activeNodeId);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [activeNodeId]);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = window.setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.2) % 360).toFixed(3)));
    }, 50);
    return () => window.clearInterval(timer);
  }, [autoRotate]);

  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId: number) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    if (nodeIndex < 0) return;
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const next: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        next[Number(key)] = false;
      });
      next[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const related = getRelatedItems(id);
        const pulses: Record<number, boolean> = {};
        related.forEach((relId) => {
          pulses[relId] = true;
        });
        setPulseEffect(pulses);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return next;
    });
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
      zIndex: Math.round(100 + 50 * Math.cos(radian)),
    };
  };

  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "border-charcoal/20 bg-charcoal text-ivory";
      case "in-progress":
        return "border-copper/40 bg-copper text-ivory";
      default:
        return "border-charcoal/15 bg-ivory text-charcoal";
    }
  };

  const hubSize = Math.min(136, Math.max(104, radius * 0.58));
  const nodeSize = Math.min(84, Math.max(68, radius * 0.38));
  const innerRing = radius * 0.7;

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={cn(
        "relative flex w-full items-center justify-center overflow-visible bg-ivory",
        className,
      )}
      role="presentation"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,115,74,0.28)_0%,rgba(243,237,227,0)_68%)]"
        aria-hidden="true"
      />

      {/* Fixed square stage so geometric center stays true */}
      <div
        ref={orbitRef}
        className="relative mx-auto"
        style={{
          width: Math.max(360, radius * 2 + nodeSize + 72),
          height: Math.max(400, radius * 2 + nodeSize + 96),
        }}
      >
        {/* Outer dashed ring — centered on stage */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-charcoal/20"
          style={{ width: radius * 2, height: radius * 2 }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-copper/35"
          style={{ width: innerRing * 2, height: innerRing * 2 }}
          aria-hidden="true"
        />

        {/* Accent dots on rings */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper shadow-sm"
          style={{
            transform: `translate(calc(-50% + ${innerRing * 0.85}px), calc(-50% + ${-innerRing * 0.35}px))`,
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-charcoal/40"
          style={{
            transform: `translate(calc(-50% + ${-radius * 0.55}px), calc(-50% + ${radius * 0.5}px))`,
          }}
          aria-hidden="true"
        />

        {/* Center hub — image exactly at circle center; label below */}
        <div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ width: hubSize, height: hubSize }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full border-[4px] border-ivory shadow-[0_16px_48px_-16px_rgba(20,18,16,0.55)] ring-1 ring-charcoal/10">
            <Image
              src={centerImage}
              alt={centerAlt}
              title={centerAlt}
              fill
              sizes="160px"
              quality={92}
              priority
              className="object-cover object-center contrast-[1.05] saturate-[1.08]"
            />
          </div>
        </div>
        <div
          className="absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-charcoal px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ivory shadow-lg"
          style={{ top: `calc(50% + ${hubSize / 2 + 12}px)` }}
        >
          {centerLabel}
        </div>

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              ref={(el) => {
                nodeRefs.current[item.id] = el;
              }}
              className="absolute left-1/2 top-1/2 transition-transform duration-700 ease-out"
              style={{
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                zIndex: isExpanded ? 200 : position.zIndex,
              }}
            >
              <button
                type="button"
                className={cn(
                  "group relative flex flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper",
                  isPulsing && "animate-pulse",
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
                aria-expanded={isExpanded}
                aria-label={`${item.title}: ${item.content}`}
              >
                <span
                  className={cn(
                    "relative block overflow-hidden rounded-full border-[3px] bg-ivory shadow-[0_12px_32px_-12px_rgba(20,18,16,0.55)] transition-transform duration-300",
                    item.borderClass,
                    isExpanded && "scale-110",
                    isRelated && "ring-2 ring-copper/60 ring-offset-2 ring-offset-[var(--ivory)]",
                  )}
                  style={{ width: nodeSize, height: nodeSize }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} stage — ${centerLabel}`}
                    title={`${item.title} stage — ${centerLabel}`}
                    fill
                    sizes="96px"
                    quality={90}
                    className="object-cover object-center contrast-[1.06] saturate-[1.1]"
                  />
                </span>
                <span className="absolute bottom-0 right-0 flex h-7 w-7 translate-x-0.5 translate-y-0.5 items-center justify-center rounded-full border border-charcoal/10 bg-ivory text-charcoal shadow-md">
                  <Icon size={13} aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    "mt-2.5 max-w-[5.5rem] text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors",
                    isExpanded ? "text-charcoal" : "text-charcoal/80",
                  )}
                >
                  {item.title}
                </span>
              </button>

              {isExpanded ? (
                <Card
                  className="absolute left-1/2 top-[calc(100%+0.5rem)] z-30 w-64 -translate-x-1/2 border-charcoal/10 bg-ivory/98 text-charcoal shadow-2xl backdrop-blur-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-charcoal/25" />
                  <CardHeader className="space-y-2 p-4 pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        className={cn(
                          "rounded-sm px-2 text-[0.6rem] tracking-wide",
                          getStatusStyles(item.status),
                        )}
                      >
                        {item.status === "completed"
                          ? "COMPLETE"
                          : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                      </Badge>
                      <span className="font-mono text-[0.65rem] text-stone">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="font-display text-base font-semibold tracking-tight">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 p-4 pt-0 text-xs leading-relaxed text-stone-ink">
                    <p>{item.content}</p>

                    <div className="border-t border-charcoal/10 pt-3">
                      <div className="mb-1 flex items-center justify-between text-[0.65rem]">
                        <span className="flex items-center gap-1 text-stone">
                          <Zap size={10} aria-hidden="true" />
                          Focus
                        </span>
                        <span className="font-mono text-charcoal">
                          {item.energy}%
                        </span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-charcoal/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-copper to-copper-bright"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {item.relatedIds.length > 0 ? (
                      <div className="border-t border-charcoal/10 pt-3">
                        <div className="mb-2 flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-stone">
                          <Link2 size={10} aria-hidden="true" />
                          Connected
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId,
                            );
                            return (
                              <button
                                key={relatedId}
                                type="button"
                                className="inline-flex h-6 items-center rounded-sm border border-charcoal/15 bg-transparent px-2 text-[0.65rem] text-charcoal/80 transition-colors hover:border-copper/40 hover:bg-copper/5 hover:text-charcoal"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight
                                  size={8}
                                  className="ml-1 text-stone"
                                  aria-hidden="true"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
