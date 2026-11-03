import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS, SOURCES, virtualDimFor, isDecisionModel } from "../data/models";
import type { DimensionKey, ResultsView, SourceKey } from "../data/models";
import { V2Header } from "../components/v2/V2Header";
import { V2Footer } from "../components/v2/V2Footer";
import { usePageTheme } from "../components/v2/theme";
import { HeroSection } from "../components/v2/HeroSection";
import { FactsStrip } from "../components/v2/FactsStrip";
import { CompareSection } from "../components/v2/CompareSection";
import { MethodologySection } from "../components/v2/MethodologySection";
import { ModelsSection, PAGE_SIZE } from "../components/v2/ModelsSection";
import { DecisionShelf } from "../components/v2/DecisionShelf";
import { modelMatchesQuery } from "../components/v2/modelView";

/**
 * / — the v2 homepage (primary since the 2026-10-15 promotion), in the
 * design-6sol language. See docs/v2-promotion-rollback.md for the
 * promotion history and recovery recipes.
 *
 * The page owns the shared state (theme, results source, compare slots,
 * search/leader rotation); each visual band lives in its own component under
 * `src/components/v2/` (`HeroSection`, `FactsStrip`, `CompareSection`,
 * `MethodologySection`, `ModelsSection`, `DecisionShelf`).
 */

const LEADER_DIMS: { key: "overall" | DimensionKey; label: string }[] = [
  { key: "overall", label: "Leader overall (Overall)" },
  { key: "tool", label: "Leader in tool use (Tool)" },
  { key: "reasoning", label: "Leader in reasoning (Reason)" },
  { key: "context", label: "Leader in context (Context)" },
  { key: "coding", label: "Leader in coding (Code)" },
  { key: "multimodal", label: "Leader in multimodal (Multi)" },
];

// Hero animation cast size (top-N of the current source ranking).
const HERO_CAST = 12;

/** Top-3 generative model ids for a results source (mirrors the v1 homepage:
 *  dimension top-3 for virtual views, the agent's own top-3 for reporting
 *  agents, Overall top-3 otherwise). Used to re-seat the compare slots
 *  whenever the results source changes. */
function top3Ids(src: ResultsView): [string, string, string] {
  const sd = virtualDimFor(src);
  const mapped = MODELS.filter(
    (m) => src === "average" || sd !== undefined || m.sources[src as SourceKey] !== undefined,
  ).map((m) =>
    src === "average" || sd !== undefined ? m : { ...m, scores: m.sources[src as SourceKey]! },
  );
  const gen = mapped.filter((m) => !isDecisionModel(m));
  gen.sort((a, b) =>
    sd !== undefined
      ? b.scores[sd] - a.scores[sd] || b.scores.overall - a.scores.overall
      : b.scores.overall - a.scores.overall,
  );
  return [gen[0]?.id ?? "", gen[1]?.id ?? "", gen[2]?.id ?? ""];
}

export default component$(() => {
  const theme = usePageTheme();
  const source = useSignal<ResultsView>("average");
  const query = useSignal("");
  const searchRef = useSignal<HTMLInputElement>();
  const displayCount = useSignal(PAGE_SIZE);
  // Hero animation spotlight: cycles through the top-12 models, one at a
  // time. Skipped entirely under prefers-reduced-motion (static hexagon).
  const heroActive = useSignal(0);

  // The header's "Models" link lands on #models — put the caret straight into
  // the search field so typing can begin without a second click.
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const focusSearch = () => {
      if (window.location.hash !== "#models") return;
      searchRef.value?.focus({ preventScroll: true });
    };
    focusSearch();
    window.addEventListener("hashchange", focusSearch);
    cleanup(() => window.removeEventListener("hashchange", focusSearch));
  });

  // Results-source mapping mirrors the v1 All-models logic: average numbers,
  // virtual dimension views, or one reporting agent's own scores.
  const sortDim = virtualDimFor(source.value);
  const withSource = MODELS.filter(
    (m) =>
      source.value === "average" ||
      sortDim !== undefined ||
      m.sources[source.value as SourceKey] !== undefined,
  ).map((m) =>
    source.value === "average" || sortDim !== undefined
      ? m
      : { ...m, scores: m.sources[source.value as SourceKey]! },
  );
  const rankBase = [...withSource].sort((a, b) =>
    sortDim !== undefined
      ? b.scores[sortDim] - a.scores[sortDim] || b.scores.overall - a.scores.overall
      : b.scores.overall - a.scores.overall,
  );
  const generative = rankBase.filter((m) => !isDecisionModel(m));
  const decisions = rankBase.filter((m) => isDecisionModel(m));
  const q = query.value.trim().toLowerCase();
  const decisionFiltered = decisions.filter((m) => modelMatchesQuery(m, q));
  const top = rankBase.find((m) => !isDecisionModel(m)) ?? rankBase[0];
  // Leader spotlight: one entry per score dimension. The cycle itself is pure
  // CSS (see FactsStrip + global.css) so it never depends on a client timer
  // starting after hydration — the old interval left the label frozen on
  // "Leader overall (Overall)".
  const leaderFacts = LEADER_DIMS.map(({ key, label }) => {
    const model =
      [...generative].sort(
        (a, b) =>
          b.scores[key] - a.scores[key] ||
          b.scores.overall - a.scores.overall ||
          a.name.localeCompare(b.name),
      )[0] ?? top;
    return { key, label, model, value: model.scores[key] };
  });
  // Hero animation cast: top 12 of the current source ranking, spotlighted
  // in random order (see interval task below).
  const heroTop12 = generative.slice(0, HERO_CAST);
  const heroActiveSafe = heroTop12.length > 0 ? heroActive.value % heroTop12.length : 0;

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      // Random next model, never the same one twice in a row. The cast is
      // HERO_CAST long (rendering modulos by the real length as a guard).
      let n = heroActive.value;
      let guard = 0;
      while (n === heroActive.value && guard++ < 20) {
        n = Math.floor(Math.random() * HERO_CAST);
      }
      heroActive.value = n;
    }, 2600);
    cleanup(() => window.clearInterval(t));
  });

  // Compare slots default to the top 3 of the current source ranking.
  const cmpOptions = generative
    .map((m) => ({ id: m.id, name: m.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const cmpA = useSignal(generative[0]?.id ?? "");
  const cmpB = useSignal(generative[1]?.id ?? "");
  const cmpC = useSignal(generative[2]?.id ?? "");
  const cmpModels = [cmpA.value, cmpB.value, cmpC.value]
    .map((id) => generative.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => m !== undefined);
  const activeSourceLabel = SOURCES.find((s) => s.key === source.value)?.label ?? source.value;
  const activeSourceFile = SOURCES.find((s) => s.key === source.value)?.file ?? "";
  const contributors = SOURCES.filter(
    (s) => s.key !== "average" && virtualDimFor(s.key) === undefined,
  );
  // Shared source-change handler (compare sidebar + All-models toolbar):
  // switch the source and re-seat the compare slots on that source's top 3,
  // exactly like the v1 homepage. Slots stay user-overridable afterwards.
  // NOTE: must be a QRL ($(...)) — a plain closure cannot be serialized into
  // the onChange$ handlers that reference it.
  const handleSourceChange$ = $((v: string) => {
    const next = v as ResultsView;
    // SOURCES only contains views with data, but never let a stale/manual value
    // put the page into the zero-model state (no way back without a refresh).
    source.value = SOURCES.some((s) => s.key === next) ? next : "average";
    displayCount.value = PAGE_SIZE;
    const [a, b, c] = top3Ids(source.value);
    cmpA.value = a;
    cmpB.value = b;
    cmpC.value = c;
  });

  if (!top) {
    return <main class="px-6 py-20 text-center">No models in the current dataset.</main>;
  }

  return (
    <main
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
      id="top"
    >
      <V2Header theme={theme} navBase="" />
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
        <HeroSection
          activeSourceLabel={activeSourceLabel}
          heroTop12={heroTop12}
          heroActiveSafe={heroActiveSafe}
        />
        <FactsStrip
          modelCount={generative.length}
          sourceCount={SOURCES.length}
          leaders={leaderFacts}
        />
        <CompareSection
          source={source}
          cmpA={cmpA}
          cmpB={cmpB}
          cmpC={cmpC}
          cmpOptions={cmpOptions}
          cmpModels={cmpModels}
          contributors={contributors}
          activeSourceLabel={activeSourceLabel}
          activeSourceFile={activeSourceFile}
          handleSourceChange$={handleSourceChange$}
        />
        <MethodologySection />
        <ModelsSection
          source={source}
          generative={generative}
          query={query}
          searchRef={searchRef}
          displayCount={displayCount}
          activeSourceLabel={activeSourceLabel}
          handleSourceChange$={handleSourceChange$}
        />

        {/* Decision shelf stays hidden until the mix grows (3+ decision models);
            a single non-comparable entry adds noise, not signal. */}
        {decisionFiltered.length >= 3 && <DecisionShelf models={decisionFiltered} />}

        <V2Footer />
      </div>
    </main>
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
