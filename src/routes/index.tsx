import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "../components/Hero";
import { CompareSection } from "../components/CompareSection";
import { Methodology } from "../components/Methodology";
import { ModelCards } from "../components/ModelCards";
import { MODELS } from "../data/models";

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

export default component$(() => {
  const loc = useLocation();
  const query = loc.url.searchParams;
  const sel = useStore({
    a: validId(query.get("a"), DEFAULTS.a),
    b: validId(query.get("b"), DEFAULTS.b),
    c: validId(query.get("c"), DEFAULTS.c),
  });

  const handleSelect = $((slot: "a" | "b" | "c", id: string) => {
    sel[slot] = id;
  });

  useVisibleTask$(({ track }) => {
    track(() => sel.a + "|" + sel.b + "|" + sel.c);
    const params = new URLSearchParams({ a: sel.a, b: sel.b, c: sel.c });
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
  });

  return (
    <>
      <Hero />
      <CompareSection a={sel.a} b={sel.b} c={sel.c} onSelect$={handleSelect} />
      <Methodology />
      <ModelCards />
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
