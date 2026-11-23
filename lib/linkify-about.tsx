import Link from "next/link";
import type { ReactNode } from "react";
import type { AboutInternalLinks } from "@/content/related-services";

const LINK_CLASS =
  "underline decoration-copper/50 underline-offset-4 transition-colors hover:decoration-copper";

const BRAND = "Joyner Construction LLC";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function linkNode(href: string, label: string, key: string) {
  return (
    <Link key={key} href={href} className={LINK_CLASS}>
      {label}
    </Link>
  );
}

/** Split a string on the first case-insensitive phrase match and wrap it in a Link. */
function linkFirstPhrase(
  text: string,
  phrases: string[],
  href: string,
  keyPrefix: string,
): { nodes: ReactNode[]; matched: boolean } {
  let best: { index: number; length: number; matched: string } | null = null;

  for (const phrase of phrases) {
    const match = new RegExp(escapeRegExp(phrase), "i").exec(text);
    if (!match || match.index === undefined) continue;
    const length = match[0].length;
    if (
      !best ||
      match.index < best.index ||
      (match.index === best.index && length > best.length)
    ) {
      best = { index: match.index, length, matched: match[0] };
    }
  }

  if (!best) {
    return { nodes: [text], matched: false };
  }

  const before = text.slice(0, best.index);
  const after = text.slice(best.index + best.length);

  return {
    matched: true,
    nodes: [
      before,
      linkNode(href, best.matched, `${keyPrefix}-link`),
      after,
    ].filter((part) => part !== ""),
  };
}

function mapStringParts(
  parts: ReactNode[],
  transform: (text: string, key: string) => { nodes: ReactNode[]; matched: boolean },
): { parts: ReactNode[]; matched: boolean } {
  let matched = false;
  const next: ReactNode[] = [];

  parts.forEach((part, index) => {
    if (matched || typeof part !== "string") {
      next.push(part);
      return;
    }
    const result = transform(part, `p${index}`);
    next.push(...result.nodes);
    matched = result.matched;
  });

  return { parts: next, matched };
}

/**
 * Enrich About paragraphs with at most two links:
 * 1) first "Joyner Construction LLC" → homepage (when brandHref is set)
 * 2) first related-service phrase → related landing page (fallback sentence if missing)
 */
export function linkifyAboutParagraphs(
  paragraphs: string[],
  links: AboutInternalLinks,
): ReactNode[] {
  let brandLinked = links.brandHref == null;
  let relatedLinked = false;

  const sortedPhrases = [...links.relatedPhrases].sort(
    (a, b) => b.length - a.length,
  );

  const paragraphParts: ReactNode[][] = paragraphs.map((paragraph) => {
    let parts: ReactNode[] = [paragraph];

    if (!brandLinked && links.brandHref) {
      const brandHref = links.brandHref;
      const result = mapStringParts(parts, (text, key) => {
        const index = text.indexOf(BRAND);
        if (index < 0) return { nodes: [text], matched: false };
        return {
          matched: true,
          nodes: [
            text.slice(0, index),
            linkNode(brandHref, BRAND, `${key}-brand`),
            text.slice(index + BRAND.length),
          ].filter((part) => part !== ""),
        };
      });
      parts = result.parts;
      brandLinked = result.matched;
    }

    if (!relatedLinked) {
      const result = mapStringParts(parts, (text, key) =>
        linkFirstPhrase(text, sortedPhrases, links.relatedHref, key),
      );
      parts = result.parts;
      relatedLinked = result.matched;
    }

    return parts;
  });

  if (!relatedLinked) {
    const fallback = [
      " Explore our ",
      linkNode(links.relatedHref, links.relatedLabel, "related-fallback"),
      ` services in ${links.areaNameShort} as well.`,
    ];
    if (paragraphParts.length === 0) {
      paragraphParts.push(fallback);
    } else {
      paragraphParts[paragraphParts.length - 1] = [
        ...paragraphParts[paragraphParts.length - 1],
        ...fallback,
      ];
    }
  }

  return paragraphParts.map((parts, index) => (
    <p key={`about-p-${index}`}>{parts}</p>
  ));
}
