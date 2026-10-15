import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MODELS } from "../../data/models";

/**
 * /v2 — UI redesign playground.
 * Same infrastructure (MODELS from pnpm sync), completely new UI.
 * This file is the only place to experiment: it must not change
 * scores, sync scripts, model/ data, or the / homepage.
 * Delete this folder if the experiment is abandoned — / is untouched.
 */
export default component$(() => {
  const top = [...MODELS].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, 6);
  return (
    <div class="v2 min-h-screen bg-zinc-950 text-zinc-100">
      <header class="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <p class="text-xs uppercase tracking-[0.3em] text-emerald-400">v2 experiment — safe to delete</p>
        <h1 class="mt-3 text-4xl font-bold md:text-6xl">ModelComp, reimagined.</h1>
        <p class="mt-4 max-w-2xl text-zinc-400">
          Blank canvas reusing the same <code>MODELS</code> data layer. Replace everything below with the new
          design. The homepage at <code>/</code> is unaffected.
        </p>
      </header>
      <main class="mx-auto grid max-w-6xl gap-4 px-6 pb-24 md:grid-cols-3">
        {top.map((m) => (
          <article key={m.id} class="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <h2 class="text-lg font-semibold">{m.name}</h2>
            <p class="mt-1 text-3xl font-bold text-emerald-400">{m.scores.overall}</p>
            <p class="mt-2 text-sm text-zinc-400">
              Tool {m.scores.tool} · Reason {m.scores.reasoning} · Code {m.scores.coding}
            </p>
            <a href={`/model/${m.slug}/`} class="mt-4 inline-block text-sm text-emerald-300 underline">
              Open detail →
            </a>
          </article>
        ))}
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "ModelComp v2 — redesign experiment",
  meta: [{ name: "robots", content: "noindex" }],
};
