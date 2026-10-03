import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Where contact messages go. Fill in your inbox — the form opens the
// visitor's email client with a pre-filled message to this address
// (the site is fully static, so there is no form backend).
const CONTACT_EMAIL = "";

const TOPICS = [
  "Score correction",
  "New model suggestion",
  "Sponsorship / donations",
  "Research question",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500";

export default component$(() => {
  const status = useSignal("");

  return (
    <section class="mx-auto max-w-6xl px-4 py-10">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h1>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Found a wrong score, missing a model, or want to support independent research? Send a message —
        every report is researched independently, and corrections with public evidence get priority.
      </p>

      <form
        preventdefault:submit
        onSubmit$={(e) => {
          const form = e.target as HTMLFormElement;
          const data = new FormData(form);
          const name = String(data.get("name") || "").trim();
          const email = String(data.get("email") || "").trim();
          const topic = String(data.get("topic") || "Other");
          const message = String(data.get("message") || "").trim();
          if (!CONTACT_EMAIL) {
            status.value =
              "Contact inbox is not configured yet — please reach out via GitHub in the meantime.";
            return;
          }
          const subject = encodeURIComponent(`[ModelComp contact] ${topic} — ${name}`);
          const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
          window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
          status.value = "Opening your email client with the pre-filled message…";
        }}
        class="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50"
      >
        <div class="grid gap-4">
          <div>
            <label for="contact-name" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input id="contact-name" name="name" type="text" required placeholder="Your name" class={inputClass} />
          </div>
          <div>
            <label for="contact-email" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              class={inputClass}
            />
          </div>
          <div>
            <label for="contact-topic" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Topic
            </label>
            <select id="contact-topic" name="topic" class={inputClass}>
              {TOPICS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label for="contact-message" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder="What should we know? Links to public evidence help corrections most."
              class={inputClass}
            />
          </div>
          <div class="flex items-center gap-3">
            <button
              type="submit"
              class="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Send message
            </button>
            {status.value && (
              <p aria-live="polite" class="text-xs text-slate-600 dark:text-slate-400">
                {status.value}
              </p>
            )}
          </div>
        </div>
      </form>

      {CONTACT_EMAIL && (
        <p class="mt-4 text-xs text-slate-500 dark:text-slate-400">
          Prefer plain email? Write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} class="text-indigo-600 hover:underline dark:text-indigo-400">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </section>
  );
});

export const head: DocumentHead = {
  title: "ModelComp — Contact",
  meta: [
    {
      name: "description",
      content: "Contact the ModelComp team: score corrections, new model suggestions, sponsorship and research questions.",
    },
  ],
};
