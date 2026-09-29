import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../components/Hero";
import { CompareSection } from "../components/CompareSection";
import { Methodology } from "../components/Methodology";
import { ModelCards } from "../components/ModelCards";
import { MODELS, SOURCES, top3ForSource } from "../data/models";
import type { SourceKey } from "../data/models";

// Junior Developer Tip: DEFAULTS uses top3ForSource("average") which is pre-computed at build time
// via rankings.generated.ts, providing an instant O(1) lookup.
const [TOP_A, TOP_B, TOP_C] = top3ForSource("average");

const DEFAULTS = {
  a: TOP_A,
  b: TOP_B,
  c: TOP_C,
};

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

  // Every results-source change re-seats the hexagon/table on that source's top 3
  // (dimension top-3 for virtual views, agent's own top-3 for reporting agents,
  // Overall top-3 for Overall). Slots stay user-overridable via the dropdowns.
  const handleSource = $((source: SourceKey) => {
    sel.source = source;
    const [a, b, c] = top3ForSource(source);
    sel.a = a;
    sel.b = b;
    sel.c = c;
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
