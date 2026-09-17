import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" class="text-lg font-bold tracking-tight text-slate-900">
          ModelComp
        </a>
        <nav aria-label="Primary" class="flex items-center gap-4 text-sm font-medium">
          <a href="#compare" class="text-slate-600 hover:text-slate-900">
            Compare
          </a>
          <a href="#methodology" class="text-slate-600 hover:text-slate-900">
            Scoring
          </a>
          <a href="#models" class="text-slate-600 hover:text-slate-900">
            Models
          </a>
        </nav>
      </div>
    </header>
  );
});
