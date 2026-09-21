import { component$ } from "@builder.io/qwik";
import { HeroArt } from "./HeroArt";

export const Hero = component$(() => {
  return (
    <section class="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-12 md:pt-16 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white md:text-5xl">
          What AI models think of each other
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-600 transition-colors dark:text-slate-300">
          Every model here is researched and scored 1–100 by a panel of fellow AI models —
          tool use, reasoning, context, multimodal, coding and cost — so current and
          future models can be compared side by side.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="#compare"
            class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Compare models
          </a>
          <a
            href="#methodology"
            class="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
          >
            How scoring works
          </a>
        </div>
      </div>
      <div class="lg:col-span-1">
        <HeroArt />
      </div>
    </section>
  );
});
