import { component$ } from "@builder.io/qwik";

// Sponsor tiers — created/confirmed on the GitHub Sponsors dashboard;
// the buttons below link there, where backers pick a tier.
const SPONSOR_URL = "https://github.com/sponsors/delirium-dj";
const TIERS = [
  {
    label: "$5 Coffee",
    detail: "one-time thanks",
    href: SPONSOR_URL,
    primary: true,
  },
  {
    label: "$19/mo Supporter",
    detail: "name in README",
    href: SPONSOR_URL,
    primary: false,
  },
  {
    label: "$99/mo Research backer",
    detail: "logo in footer",
    href: SPONSOR_URL,
    primary: false,
  },
];

// Extra platforms — fill in your own URLs; only entries with a
// non-empty href are rendered.
const EXTRA_DONATE_LINKS = [
  // e.g. "https://ko-fi.com/YOURNAME"
  { label: "Ko-fi", href: "" },
  // e.g. "https://www.patreon.com/YOURNAME"
  { label: "Patreon", href: "" },
  // e.g. "https://www.buymeacoffee.com/YOURNAME"
  { label: "Buy Me a Coffee", href: "" },
  // e.g. "https://www.paypal.me/YOURNAME"
  { label: "PayPal", href: "" },
  // e.g. your Stripe Payment Link "https://buy.stripe.com/..."
  { label: "Stripe", href: "" },
];

export const Footer = component$(() => {
  return (
    <footer class="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 transition-colors dark:text-slate-400">
      <div class="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
        <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">
          100% independent research — no paid promotions, no vendor funding influences scores.
        </p>
        <p class="mt-1">
          Every findings file is researched independently from public benchmarks. Donations keep it that way —
          they fund compute and research time, never rankings.
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          {TIERS.filter((l) => l.href).map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              title={l.detail}
              class={
                l.primary
                  ? "inline-flex items-center gap-1.5 rounded-md bg-pink-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-pink-700"
                  : "inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              }
            >
              <span aria-hidden="true">♥</span> {l.label}
              <span class="font-normal opacity-80">· {l.detail}</span>
            </a>
          ))}
        </div>
        <p class="mt-2">Also via:</p>
        <div class="mt-1 flex flex-wrap gap-2">
          {EXTRA_DONATE_LINKS.map((l) =>
            l.href ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {l.label}
              </a>
            ) : (
              <span
                key={l.label}
                title="Coming soon — link not configured yet"
                class="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-dashed border-slate-300 px-3 py-1.5 text-sm font-medium opacity-60 dark:border-slate-600"
              >
                {l.label} · soon
              </span>
            )
          )}
        </div>
      </div>
      <p class="mt-4">Data syncs from per-model research files on every build. Scores are normalized interpretations, not official vendor scores.</p>
      <p class="mt-1">© 2026 ModelComp — independent AI model comparisons, no sponsored rankings.</p>
    </footer>
  );
});
