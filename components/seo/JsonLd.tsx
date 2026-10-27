import { buildSeoJsonLdGraph } from "@/lib/seo";

export function JsonLd() {
  const data = buildSeoJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
