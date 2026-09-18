import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../components/Hero";
import { CompareSection } from "../components/CompareSection";
import { Methodology } from "../components/Methodology";
import { ModelCards } from "../components/ModelCards";
import { MODELS } from "../data/models";
import type { SourceKey } from "../data/models";

const DEFAULTS = {
  a: "opencode/muse-spark-1.3-contributor-free",
  b: "opencode/muse-spark-1.2-contributor-free",
  c: "opencode/mimo-v2.5-free",
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
  if (raw === "average" || raw === "big-pickle" || raw === "Muse Spark 1.3" || raw === "Ling 3.0") {
    return raw;
  }
  return fallback;
}

export default component$(() => {
  const loc = useLocation();
  const query = loc.url.searchParams;
  const sel = useStore({
    a: validId(query.get("a"), DEFAULTS.a),
    b: validId(query.get("b"), DEFAULTS.b),
    c: validId(query.get("c"), DEFAULTS.c),
    source: validSource(query.get("source"), "average"),
  });

  const handleSelect = $((slot: "a" | "b" | "c", id: string) => {
    sel[slot] = id;
  });

  const handleSource = $((source: SourceKey) => {
    sel.source = source;
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
