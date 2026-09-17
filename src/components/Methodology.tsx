import { component$ } from "@builder.io/qwik";

export const Methodology = component$(() => {
  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      class="border-y border-slate-200 bg-slate-50"
    >
      <div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
        <h2 id="methodology-heading" class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          How scoring works
        </h2>
        <p class="mt-2 max-w-3xl text-sm text-slate-600">
          Scores are normalized interpretations from 1 to 100 (higher is better), synced from{" "}
          <code class="rounded bg-slate-100 px-1">model-comparison.md</code> in this repo. Overall Score is
          the rounded mean of the six dimensions.
        </p>
        <ul class="mt-4 max-w-3xl list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>Tool use: Terminal-Bench, Tau-bench, GDPval and tool-call efficiency.</li>
          <li>Reasoning: GPQA, Humanity&apos;s Last Exam, long-context retrieval and intelligence indexes.</li>
          <li>Context window: tiered by size; 1M+ scores 95–100, 200K scores around 70.</li>
          <li>Multimodal: text-only scores low; image, video, audio or PDF input scores higher.</li>
          <li>Coding: SWE-bench, DeepSWE, LiveCodeBench, SciCode and terminal coding tasks.</li>
          <li>Cost efficiency: inverse pricing on the evaluated tier; $0 free tiers score 100.</li>
        </ul>
      </div>
    </section>
  );
});
