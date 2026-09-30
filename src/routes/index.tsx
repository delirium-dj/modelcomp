import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../components/Hero";
import { CompareSection } from "../components/CompareSection";
import { Methodology } from "../components/Methodology";
import { ModelCards } from "../components/ModelCards";
import { MODELS, SOURCES, virtualDimFor, slugForSource } from "../data/models";
import type { DimensionKey, ResultsView, SourceKey } from "../data/models";

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

/** Top 3 model ids for a results source: by dimension for virtual views, by that
 *  agent's own Overall for reporting agents (models it never rated sort last),
 *  else average Overall. */
function top3ForSource(source: ResultsView): [string, string, string] {
  const dim = virtualDimFor(source);
  if (dim !== undefined) return top3ByDim(dim);
  if (source !== "average") {
    const ranked = [...MODELS].sort((a, b) => {
      const sa = a.sources[source as SourceKey]?.overall;
      const sb = b.sources[source as SourceKey]?.overall;
      if (sa === undefined && sb === undefined) return b.scores.overall - a.scores.overall;
      if (sa === undefined) return 1;
      if (sb === undefined) return -1;
      return sb - sa || b.scores.overall - a.scores.overall;
    });
    return [
      ranked[0]?.id ?? "",
      ranked[1]?.id ?? "",
      ranked[2]?.id ?? "",
    ];
  }
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

function validSource(raw: string | null, fallback: ResultsView): ResultsView {
  if (!raw) return fallback;
  // "overall" is an accepted alias for the canonical "average" key.
  if (raw === "overall" || raw.toLowerCase() === "overall") return "average";
  const match = SOURCES.find(
    (s) => s.key === raw || s.key.toLowerCase() === raw.toLowerCase(),
  );
  if (match) return match.key;
  // Check if raw matches an inline model slug (e.g. deepseek-v4.1-flash) or a
  // normalized key (slug-style deep-links from model detail pages).
  const normRaw = raw.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const s of SOURCES) {
    if (s.slug !== undefined) {
      if (s.slug === raw || s.slug.toLowerCase().replace(/[^a-z0-9]/g, "") === normRaw) {
        return s.key;
      }
    }
    if (s.key.toLowerCase().replace(/[^a-z0-9]/g, "") === normRaw) {
      return s.key;
    }
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

  // Every results-source change re-seats the hexagon/table on that source's top 3
  // (dimension top-3 for virtual views, agent's own top-3 for reporting agents,
  // Overall top-3 for Overall). Slots stay user-overridable via the dropdowns.
  const handleSource = $((source: ResultsView) => {
    sel.source = source;
    const [a, b, c] = top3ForSource(source);
    sel.a = a;
    sel.b = b;
    sel.c = c;
  });

  useVisibleTask$(({ track }) => {
    // If a user navigates directly to /?source=<AgentModelName> with no explicit slots,
    // redirect them to that model's dedicated page /model/<slug>/
    const rawSource = query.get("source");
    const hasExplicitSlots = query.has("a") || query.has("b") || query.has("c");
    if (rawSource && !hasExplicitSlots) {
      const agentSlug = slugForSource(initialSource);
      if (agentSlug) {
        window.location.replace(`/model/${agentSlug}/`);
        return;
      }
    }

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
      <ModelCards source={sel.source} onSource$={handleSource} />
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
