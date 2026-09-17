import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 transition-colors dark:text-slate-400">
      <p>Data updated 2026-09-17. Scores are normalized interpretations, not official vendor scores.</p>
      <p class="mt-1">Full benchmarks, sources and audit trail: model-comparison.md and model-findings.md in this repo.</p>
    </footer>
  );
});
