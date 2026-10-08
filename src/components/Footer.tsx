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

// Research backers ($99/mo tier) earn a logo in the footer.
// Logos are vendored under public/backers/ so the footer never hotlinks
// third-party assets. To add a backer: drop their logo in public/backers/
// and append an entry here.
const RESEARCH_BACKERS = [
  {
    name: "ExtraWebSite",
    href: "https://extraweb.site",
    imgSrc: "/backers/extrawebsite.png",
    alt: "ExtraWebSite — website design & development",
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
  // e.g. your Lemon Squeezy checkout "https://YOURSTORE.lemonsqueezy.com/checkout/buy/..."
  { label: "Lemon Squeezy", href: "" },
];

export const Footer = component$(() => {
  return (
    <footer class="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 transition-colors dark:text-slate-400">
      {/* PageSpeed contrast: body copy here is slate-600 (7.2:1 on slate-50),
        not the footer-wide slate-500 (~4.3:1 on slate-50 — fails 4.5:1).
        Headings and buttons inside carry their own explicit colors. */}
      <div class="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
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
                  // PageSpeed contrast: white on pink-700 is 6.3:1 (pink-600 is ~4.0:1 — fails 4.5:1).
                  ? "inline-flex items-center gap-1.5 rounded-md bg-pink-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-pink-800"
                  : "inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              }
            >
              <span aria-hidden="true">♥</span> {l.label}
              {/* No opacity here — faded white-on-pink fails contrast; font-weight alone sets it apart. */}
              <span class="font-normal">· {l.detail}</span>
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
              /* No opacity-60 here: faded slate on slate-50 fails contrast. The
                 dashed border + cursor-not-allowed + "· soon" already signal
                 disabled; text color inherits the box's slate-600/slate-300. */
              <span
                key={l.label}
                title="Coming soon — link not configured yet"
                class="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-dashed border-slate-300 px-3 py-1.5 text-sm font-medium dark:border-slate-600"
              >
                {l.label} · soon
              </span>
            )
          )}
        </div>
      </div>
      <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span class="font-medium uppercase tracking-wide">Research backer:</span>
        {RESEARCH_BACKERS.map((b) => (
          <a
            key={b.name}
            href={b.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            title={`${b.name} — Research backer (logo placement thanks, never influences scores)`}
            class="inline-flex items-center gap-2 rounded-md px-1 py-1 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline dark:text-slate-200 dark:hover:text-white"
          >
            <img
              src={b.imgSrc}
              alt={b.alt}
              width={32}
              height={32}
              loading="lazy"
              class="h-8 w-auto bg-transparent"
            />
            {b.name}
          </a>
        ))}
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <p>Data syncs from per-model research files on every build. Scores are normalized interpretations, not official vendor scores.</p>
          <p>Independent AI model comparisons, no sponsored rankings.</p>
        </div>
        <div class="flex items-center justify-between gap-4 pt-6 px-2">
          <p>
            © 2026{" "}
            <a
              href="/"
              class="text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-400 dark:hover:text-white"
            >
              ModelComp
            </a>
          </p>
          <a
            href="/contact"
            class="text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-400 dark:hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
});
