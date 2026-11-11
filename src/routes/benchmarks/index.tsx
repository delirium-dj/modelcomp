import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BENCHMARKS_DATA } from "../../data/benchmarks.generated";
import { V2Header } from "../../components/v2/V2Header";
import { V2Footer } from "../../components/v2/V2Footer";
import { usePageTheme } from "../../components/v2/theme";

/**
 * /benchmarks/ — the authority hub of per-benchmark leaderboards.
 *
 * Reads the build-time leaderboard bundle (`src/data/benchmarks.generated.ts`,
 * emitted by `pnpm sync` from the agreed-evidence index): every benchmark the
 * dataset tracks, each with a top-10 table of models whose figure was cited by
 * two or more independent raters. Nothing is parsed from markdown at runtime.
 */

// Short editorial definitions for the tracked benchmark vocabulary. Unknown
// names fall back to a generic description so new trackers still render.
const BENCHMARK_DESC: Record<string, string> = {
  "SWE-bench Verified": "Real GitHub engineering tasks; the verified human-checked subset measures autonomous bug-and-feature patch resolution.",
  "SWE-bench Pro": "A harder, longer-horizon software-engineering split stressing multi-file reasoning and repo-scale edits.",
  DeepSWE: "Deep, multi-step software engineering evaluations beyond single-patch tasks.",
  LiveCodeBench: "Rolling, contamination-resistant coding problems drawn from recent competitive-programming sets.",
  "LiveCodeBench Pro": "Elo-rated competitive-programming variant of LiveCodeBench (rating scale, not a pass rate).",
  HumanEval: "The classic function-level code-completion suite: write Python from a docstring prompt.",
  "Aider Polyglot": "Polyglot code-editing benchmark run through the Aider pair-programming harness.",
  "Vibe Code Bench": "Application-building evaluations measured end-to-end in an agentic coding harness.",
  "Terminal-Bench": "Agentic terminal and command-line task success across shells, files and tooling.",
  "GPQA Diamond": "Graduate-level multiple-choice questions in science, written by domain experts.",
  HLE: "Humanity's Last Exam: frontier-level, broad academic reasoning across many disciplines.",
  AIME: "Olympiad-style mathematics problems requiring multi-step reasoning.",
  FrontierMath: "Research-level mathematics problems designed as a frontier ceiling.",
  MMMU: "Massive multi-discipline multimodal understanding and reasoning benchmark.",
  "MMMU-Pro": "A stricter, vision-only controls version of MMMU that reduces textual shortcuts.",
  SciCode: "Scientific computing programming tasks expressed as multi-step research problems.",
  "Tau2-bench": "Tool-agent-user interaction benchmark over API workflows and policy adherence.",
  "Tau3-bench": "Successor agentic tool-use suite over banking-style and enterprise workflows.",
  GDPval: "Real-world economically valuable professional tasks, rated by domain experts (Elo).",
  OSWorld: "Computer-use agent tasks across real operating-system environments.",
  BrowseComp: "Agentic web-browsing and information-retrieval difficulty benchmark.",
  "MMLU-Pro": "A harder, reasoning-heavy rebuild of the 57-subject MMLU knowledge suite.",
  MMLU: "Massive Multitask Language Understanding across 57 academic subjects.",
  "ARC-AGI": "Abstract visual-reasoning puzzles rewarding novel generalization rather than memorization.",
  CritPt: "Critical-point physics reasoning at research-paper difficulty.",
  LiveBench: "Weekly-refreshed, contamination-resistant mix of reasoning, math and coding tasks.",
  LMArena: "Crowd-sourced pairwise preference arena (Elo) across open model comparisons.",
  "AA-GPQA": "Artificial Analysis re-run of GPQA on a controlled harness (separate from the vendor figure).",
  "AA-HLE": "Artificial Analysis re-run of Humanity's Last Exam on a controlled harness.",
  "AA-LCR": "Artificial Analysis long-context retrieval suite.",
  "AA Coding Index": "Artificial Analysis composite coding capability index.",
  "AA Intelligence Index": "Artificial Analysis composite intelligence/reasoning index.",
};

const benchmarkNames = Object.keys(BENCHMARKS_DATA).sort();
const trackedModelCount = new Set(
  benchmarkNames.flatMap((n) => BENCHMARKS_DATA[n].map((e) => e.modelSlug)),
).size;

// Deterministic order: the flagship coding/reasoning trackers first, then A-Z.
const PRIORITY_ORDER = [
  "SWE-bench Verified",
  "LiveCodeBench",
  "HumanEval",
  "Terminal-Bench",
  "GPQA Diamond",
  "HLE",
  "GDPval",
];
const orderedNames = [
  ...PRIORITY_ORDER.filter((n) => benchmarkNames.includes(n)),
  ...benchmarkNames.filter((n) => !PRIORITY_ORDER.includes(n)),
];

export default component$(() => {
  const theme = usePageTheme();

  return (
    <main
      class={`min-h-screen font-[family-name:var(--font-body)] text-sm leading-normal antialiased bg-[color:var(--color-page)] text-[color:var(--color-ink)]${theme.value === "dark" ? " dark" : ""}`}
      id="top"
    >
      <V2Header theme={theme} navBase="/" />
      <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "ModelComp benchmark leaderboards",
            description:
              "Per-benchmark AI model leaderboards where each figure is corroborated by two or more independent research agents.",
            license: "https://creativecommons.org/licenses/by/4.0/",
            isAccessibleForFree: true,
            measurementTechnique: "Multi-agent independent web research with agreement gating",
            creator: { "@type": "Organization", name: "ModelComp" },
          }).replace(/</g, "\\u003c")}
        />

        <section class="mx-[-40px] bg-[#173c53] px-10 py-[clamp(48px,6vw,80px)] text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]">
          <p class="text-sm text-[#a8c2d0]">Benchmarks <span aria-hidden="true">/</span> leaderboards</p>
          <h1 class="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-medium leading-[0.98] tracking-tighter">
            Every tracked benchmark, ranked
          </h1>
          <p class="mt-6 max-w-[60ch] text-[17px] leading-[1.65] text-[#c6d9e3]">
            {benchmarkNames.length} benchmarks · {trackedModelCount} models. A figure appears here
            only when two or more independent research agents cite the same number for the same
            test — single-source claims never surface.
          </p>
        </section>

        {orderedNames.length === 0 ? (
          <p class="py-[60px] text-[#577184] dark:text-[#93adbe]">
            No benchmark leaderboards yet — run <code>pnpm sync</code> to build them from the
            research files.
          </p>
        ) : (
          <div class="divide-y divide-[#ccdae2] dark:divide-[#274757]">
            {orderedNames.map((name) => {
              const rows = BENCHMARKS_DATA[name].slice(0, 10);
              return (
                <section class="py-[56px]" key={name} aria-labelledby={`bm-${name.replace(/[^a-z0-9]/gi, "-")}`}>
                  <h2 id={`bm-${name.replace(/[^a-z0-9]/gi, "-")}`} class="font-[family-name:var(--font-display)] text-[clamp(24px,3vw,36px)] font-medium leading-tight tracking-tight">
                    {name}
                  </h2>
                  <p class="mt-2 max-w-[70ch] text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
                    {BENCHMARK_DESC[name] ??
                      `Independent ${name} results corroborated across multiple ModelComp research agents.`}
                  </p>
                  <div class="mt-6 overflow-x-auto">
                    <table class="w-full min-w-[560px] border-collapse text-[13px]">
                      <caption class="sr-only">Top 10 models on {name}</caption>
                      <thead>
                        <tr class="text-left text-xs text-[#496779] dark:text-[#a9c2d2]">
                          <th scope="col" class="w-10 border-b border-[#ccdae2] py-2 font-medium dark:border-[#274757]">#</th>
                          <th scope="col" class="border-b border-[#ccdae2] py-2 pr-3 font-medium dark:border-[#274757]">Model</th>
                          <th scope="col" class="border-b border-[#ccdae2] py-2 pr-3 text-right font-medium dark:border-[#274757]">Score</th>
                          <th scope="col" class="border-b border-[#ccdae2] py-2 text-right font-medium dark:border-[#274757]">Raters</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((e, i) => (
                          <tr key={e.modelSlug} class="even:bg-[#e5eff3] dark:even:bg-[#122636]">
                            <td class="border-b border-[#e2edf2] py-2.5 text-[#577184] dark:border-[#274757] dark:text-[#93adbe]">{i + 1}</td>
                            <td class="border-b border-[#e2edf2] py-2.5 pr-3 dark:border-[#274757]">
                              <a href={`/model/${e.modelSlug}/`} class="font-semibold text-[#275bad] hover:underline dark:text-[#9dbdf5]">
                                {e.modelName}
                              </a>
                            </td>
                            <td class="border-b border-[#e2edf2] py-2.5 pr-3 text-right font-[family-name:var(--font-display)] text-base font-semibold tabular-nums dark:border-[#274757]">
                              {e.value}
                            </td>
                            <td class="border-b border-[#e2edf2] py-2.5 text-right tabular-nums text-[#577184] dark:border-[#274757] dark:text-[#93adbe]">
                              {e.ratersCount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <V2Footer />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "AI model benchmark leaderboards | ModelComp",
  meta: [
    {
      name: "description",
      content:
        "Ranked leaderboards for every AI benchmark ModelComp tracks — SWE-bench Verified, LiveCodeBench, HumanEval, Terminal-Bench, GPQA Diamond, HLE, GDPval and more — each figure corroborated by two or more independent research agents.",
    },
  ],
};
