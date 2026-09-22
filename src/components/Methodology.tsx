import { component$ } from "@builder.io/qwik";

export const Methodology = component$(() => {
  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      class="scroll-mt-20 border-y border-slate-200 bg-slate-50 transition-colors dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div class="mx-auto max-w-6xl px-4 py-10">
        <h2 id="methodology-heading" class="text-2xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white md:text-3xl">
          How scoring works
        </h2>
        <p class="mt-2 max-w-3xl text-sm text-slate-600 transition-colors dark:text-slate-300">
          Scores are normalized interpretations from 1 to 100 (higher is better), based on public benchmarks.
          Overall Score is the rounded mean of the five quality dimensions — Cost efficiency is scored separately
          and never counts toward Overall.
        </p>
        <ul class="mt-4 max-w-3xl list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>
            Independently researched: each model is checked across multiple public sources, and every benchmark
            number cites its source. Missing data is marked as no verified score — never invented.
          </li>
          <li>Tool use: Terminal-Bench, Tau-bench, GDPval and tool-call efficiency.</li>
          <li>Reasoning: GPQA, Humanity&apos;s Last Exam, long-context retrieval and intelligence indexes.</li>
          <li>Context window: tiered by size; 1M+ scores 95–100, 200K scores around 70.</li>
          <li>Cost efficiency: inverse pricing on the evaluated tier; $0 free tiers score 100.</li>
          <li>Coding: SWE-bench, DeepSWE, LiveCodeBench, SciCode and terminal coding tasks.</li>
          <li>Multimodal: text-only scores low; image, video, audio or PDF input scores higher.</li>
        </ul>
      </div>
    </section>
  );
});
