import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../components/Hero";
import { CompareSection } from "../components/CompareSection";
import { Methodology } from "../components/Methodology";
import { ModelCards } from "../components/ModelCards";
import { MODELS, SOURCES, virtualDimFor } from "../data/models";
import type { DimensionKey, SourceKey } from "../data/models";

/** Homepage defaults: top 3 models by average Overall Score (recomputed from MODELS). */
function top3ByOverall(): [string, string, string] {
  const sorted = [...MODELS].sort((a, b) => b.scores.overall - a.scores.overall);
  return [
    sorted[0]?.id ?? "",
    sorted[1]?.id ?? "",
    sorted[2]?.id ?? "",
  ];
}

const [TOP_A, TOP_B, TOP_C] = top3ByOverall();

const DEFAULTS = {
  a: TOP_A,
  b: TOP_B,
  c: TOP_C,
};

/** Top 3 models by one average dimension score (tiebreak Overall). */
function top3ByDim(dim: DimensionKey): [string, string, string] {
  const sorted = [...MODELS].sort(
    (a, b) => b.scores[dim] - a.scores[dim] || b.scores.overall - a.scores.overall,
  );
  return [
    sorted[0]?.id ?? "",
    sorted[1]?.id ?? "",
    sorted[2]?.id ?? "",
  ];
}

/** Top 3 model ids for a results source: by dimension for virtual views, else Overall. */
function top3ForSource(source: SourceKey): [string, string, string] {
  const dim = virtualDimFor(source);
  if (dim !== undefined) return top3ByDim(dim);
  const sorted = [...MODELS].sort((a, b) => b.scores.overall - a.scores.overall);
  return [
    sorted[0]?.id ?? "",
    sorted[1]?.id ?? "",
    sorted[2]?.id ?? "",
  ];
}

function validId(raw: string | null, fallback: string): string {
  if (raw === "") {
    return "";
  }
  if (raw && MODELS.some((m) => m.id === raw)) {
    return raw;
  }
  return fallback;
}

function validSource(raw: string | null, fallback: SourceKey): SourceKey {
  if (raw && (SOURCES as { key: string }[]).some((s) => s.key === raw)) {
    return raw as SourceKey;
  }
  return fallback;
}

export default component$(() => {
  const loc = useLocation();
  const query = loc.url.searchParams;
  // Deep links with no explicit slots open on the top-3 of the selected source.
  const initialSource = validSource(query.get("source"), "average");
  const [INIT_A, INIT_B, INIT_C] = top3ForSource(initialSource);
  const sel = useStore({
    a: validId(query.get("a"), INIT_A),
    b: validId(query.get("b"), INIT_B),
    c: validId(query.get("c"), INIT_C),
    source: initialSource,
  });

  const handleSelect = $((slot: "a" | "b" | "c", id: string) => {
    sel[slot] = id;
  });

  // Picking a virtual sort view re-seats the hexagon/table on the top-3 of that
  // dimension; switching back leaves the selection alone for the user to adjust.
  const handleSource = $((source: SourceKey) => {
    sel.source = source;
    if (virtualDimFor(source) !== undefined) {
      const [a, b, c] = top3ForSource(source);
      sel.a = a;
      sel.b = b;
      sel.c = c;
    }
  });

  useVisibleTask$(({ track }) => {
    // Track state changes to update URL query params dynamically
    track(() => sel.a + "|" + sel.b + "|" + sel.c + "|" + sel.source);

    // Only set URL query params if selections differ from defaults
    const isDefault =
      sel.a === DEFAULTS.a &&
      sel.b === DEFAULTS.b &&
      sel.c === DEFAULTS.c &&
      sel.source === "average";

    if (isDefault) {
      // Clean URL if default state
      if (window.location.search) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      const params = new URLSearchParams();
      if (sel.a) params.set("a", sel.a);
      if (sel.b) params.set("b", sel.b);
      if (sel.c) params.set("c", sel.c);
      if (sel.source !== "average") params.set("source", sel.source);

      const queryString = params.toString();
      const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
      window.history.replaceState(null, "", newUrl);
    }
  });

  return (
    <>
      <Hero />
      <CompareSection a={sel.a} b={sel.b} c={sel.c} source={sel.source} onSelect$={handleSelect} onSource$={handleSource} />
      <Methodology />
      <ModelCards source={sel.source} />
    </>
  );
});

export const head: DocumentHead = {
  title: "ModelComp — Compare AI coding models",
  meta: [
    {
      name: "description",
      content:
        "Compare AI coding models on tool use, reasoning, context, multimodal, coding and cost — normalized to 1–100 from public benchmarks.",
    },
  ],
};
