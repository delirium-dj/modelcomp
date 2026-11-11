import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

/**
 * /contact/ — the only page served by the shared layout chrome (see
 * routes/layout.tsx). Styled in the v2 design language: the same hero band,
 * facts strip, card palette and button treatments as the v2 homepage.
 */

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

// v2 field treatment: page-color fill on the card, hairline borders,
// primary-color focus ring (same tokens as the homepage selects/search).
const fieldClass =
  "w-full rounded-lg border border-[#ccdae2] bg-[color:var(--color-page)] px-3 py-2 text-sm text-[color:var(--color-ink)] placeholder:text-[#577184] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)] dark:border-[#274757] dark:placeholder:text-[#93adbe]";
const labelClass = "mb-1.5 block text-sm font-semibold";

export default component$(() => {
  const status = useSignal("");

  return (
    <div class="mx-auto max-w-[1480px] px-10 max-[800px]:px-5 max-[520px]:px-4">
      {/* Hero band — mirrors the v2 homepage hero (full-bleed to the 1480px
          container edge via negative margins). */}
      <section
        class="-mx-10 bg-[#e2edf2] px-10 pb-12 pt-14 max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]"
        aria-labelledby="contact-title"
      >
        <h1
          id="contact-title"
          class="mt-8 font-[family-name:var(--font-display)] text-[clamp(40px,4.6vw,64px)] font-medium leading-none tracking-tighter"
        >
          Report a score, suggest a model,{" "}
          <span class="text-[color:var(--color-primary)]">
            or fund the research
          </span>
        </h1>
        <p class="mt-4 text-base leading-relaxed text-[#4e6678] dark:text-[#c6d9e3]">
          Every report is researched independently from public benchmarks, and
          corrections backed by public evidence get priority.
        </p>
      </section>

      {/* Facts strip — same anatomy as the homepage "Dataset facts" row. */}
      <section
        class="grid grid-cols-3 border-b border-b-[var(--color-border)] max-[800px]:grid-cols-1 dark:border-b-[#274757]"
        aria-label="What to expect"
      >
        <div class="py-7 pr-7 max-[800px]:py-5 max-[800px]:pr-0">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">
            Corrections
          </span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base">
            Evidence links get priority review
          </strong>
        </div>
        <div class="border-l border-l-[var(--color-border)] px-7 py-7 max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:border-t-[var(--color-border)] max-[800px]:px-0 max-[800px]:py-5 max-[800px]:dark:border-t-[#274757] dark:border-l-[#274757]">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">
            New models
          </span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base">
            Name a model and we research it from scratch
          </strong>
        </div>
        <div class="border-l border-l-[var(--color-border)] px-7 py-7 max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:border-t-[var(--color-border)] max-[800px]:px-0 max-[800px]:py-5 max-[800px]:dark:border-t-[#274757] dark:border-l-[#274757]">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">
            Independence
          </span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base">
            Donations fund research, never rankings
          </strong>
        </div>
      </section>

      {/* Form + guidance — heading-with-side-copy row, then the two-column
          form card / helper card layout (footer support-section anatomy). */}
      <section class="pb-20 pt-8" aria-labelledby="contact-form-title">
        <div class="flex items-center gap-6 max-[520px]:flex-col">
          <h2
            id="contact-form-title"
            class="min-w-0 flex-[2_1_0%] font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-medium leading-none tracking-tighter max-[520px]:text-4xl"
          >
            Send a message
          </h2>
          <p class="mt-0 min-w-0 max-w-none text-sm leading-relaxed text-[#577184] dark:text-[#93adbe]">
            Every message goes straight to the researchers. Submitting opens
            your email client with a pre-filled message — the site is fully
            static and runs no form backend.
          </p>
        </div>

        <div class="mt-8 items-start gap-8">
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
              const subject = encodeURIComponent(
                `[ModelComp contact] ${topic} — ${name}`,
              );
              const body = encodeURIComponent(
                `${message}\n\n— ${name} (${email})`,
              );
              window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
              status.value =
                "Opening your email client with the pre-filled message…";
            }}
            class="border border-[#ccdae2] bg-[#f7fafb] p-[clamp(22px,2.6vw,36px)] dark:border-[#274757] dark:bg-[#132a3b]"
          >
            <div class="grid gap-5 min-[640px]:grid-cols-2">
              <div>
                <label for="contact-name" class={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  class={fieldClass}
                />
              </div>
              <div>
                <label for="contact-email" class={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class={fieldClass}
                />
              </div>
              <div class="min-[640px]:col-span-2">
                <label for="contact-topic" class={labelClass}>
                  Topic
                </label>
                <select id="contact-topic" name="topic" class={fieldClass}>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div class="min-[640px]:col-span-2">
                <label for="contact-message" class={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What should we know? Links to public evidence help corrections most."
                  class={fieldClass}
                />
              </div>
              <div class="flex flex-wrap items-center gap-3 min-[640px]:col-span-2">
                <button
                  type="submit"
                  class="inline-flex items-center rounded-lg bg-[#19384d] px-5 py-3 text-sm font-bold text-[#ecf3f6] hover:underline dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                >
                  Send message
                </button>
                {status.value && (
                  <p
                    aria-live="polite"
                    class="text-xs leading-relaxed text-[#577184] dark:text-[#93adbe]"
                  >
                    {status.value}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>

        {CONTACT_EMAIL && (
          <p class="mt-4 text-xs text-[#577184] dark:text-[#93adbe]">
            Prefer plain email? Write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              class="font-semibold text-[color:var(--color-primary)] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "ModelComp — Contact",
  meta: [
    {
      name: "description",
      content:
        "Contact the ModelComp team: score corrections, new model suggestions, sponsorship and research questions.",
    },
  ],
};
