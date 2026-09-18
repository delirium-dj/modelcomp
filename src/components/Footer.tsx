import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 transition-colors dark:text-slate-400">
      <p>Data syncs from per-model research files on every build. Scores are normalized interpretations, not official vendor scores.</p>
      <p class="mt-1">Full benchmarks, per-model findings and audit trail: see the model/ directory and REPORT.md in this repo.</p>
    </footer>
  );
});
