import { component$ } from "@builder.io/qwik";

/**
 * V2Footer — shared footer for the v2 homepage, in the v1 Tailwind dialect.
 * Same functionality as the v1 Footer (sponsor tiers, soon-links, research
 * backers, fine print, bottom bar). v1 Footer.tsx is untouched.
 */

const SPONSOR_URL = "https://github.com/sponsors/delirium-dj";
const TIERS = [
  { label: "$5 Coffee", detail: "one-time thanks", primary: true },
  { label: "$19/mo Supporter", detail: "name in README", primary: false },
  { label: "$99/mo Research backer", detail: "logo in footer", primary: false },
];
const RESEARCH_BACKERS = [
  {
    name: "ExtraWebSite",
    href: "https://extraweb.site",
    imgSrc: "/backers/extrawebsite.png",
    alt: "ExtraWebSite — website design & development",
  },
];
// Extra platforms — fill in your own URLs; entries with an empty href render
// as dashed "soon" placeholders, exactly like the v1 footer.
const EXTRA_DONATE_LINKS = [
  { label: "Ko-fi", href: "" },
  { label: "Patreon", href: "" },
  { label: "Buy Me a Coffee", href: "" },
  { label: "PayPal", href: "" },
  { label: "Stripe", href: "" },
];

export const V2Footer = component$(() => {
  return (
    <footer class="-mx-10 bg-[#173c53] px-10 pb-10 pt-[clamp(56px,7vw,92px)] text-[#f3f8fa] max-[800px]:-mx-5 max-[800px]:px-5 max-[520px]:-mx-4 max-[520px]:px-4 dark:bg-[#0a1822]">
      <div class="grid items-start gap-[5%] min-[800px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div>
          <p class="text-sm text-[#a8c2d0]">
            ModelComp <span aria-hidden="true">/</span> funding
          </p>
          <h2 class="mt-10 font-[var(--font-display)] text-[clamp(34px,4vw,56px)] font-medium leading-none tracking-tighter">
            Independent research, funded by readers
          </h2>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-[#c6d9e3]">
            <strong class="text-[#f3f8fa]">100% independent — no paid promotions, no vendor funding influences scores.</strong>
          </p>
          <p class="mt-4 max-w-md text-sm leading-relaxed text-[#c6d9e3]">
            Every findings file is researched independently from public benchmarks. Donations keep it
            that way — they fund compute and research time, never rankings.
          </p>
        </div>
        <div class="bg-[#eff5f8] p-[clamp(22px,2.6vw,36px)] text-[#19384d] dark:bg-[#132a3b] dark:text-[#e8f1f6]">
          <div class="grid gap-px border border-[#ccdae2] bg-[#ccdae2] dark:border-[#274757] dark:bg-[#274757]">
            {TIERS.map((tier) => (
              <a
                key={tier.label}
                href={SPONSOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={tier.detail}
                class={
                  tier.primary
                    ? "flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 bg-[#17384d] px-4 py-4 text-[#f3f8fa] dark:bg-[#e8f1f6] dark:text-[#0e1e2a]"
                    : "flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 bg-[#f7fafb] px-4 py-4 text-[#19384d] hover:bg-white dark:bg-[#173a52] dark:text-[#e8f1f6] dark:hover:bg-[#1d4761]"
                }
              >
                <span class="font-semibold">
                  <span aria-hidden="true" class="pr-2 text-[#dfab77] dark:text-[#e8b47e]">♥</span> {tier.label}
                </span>
                <span class={tier.primary ? "text-xs text-[rgba(243,248,250,0.78)] dark:text-[rgba(14,30,42,0.7)]" : "text-xs text-[#577184] dark:text-[#93adbe]"}>
                  {tier.detail}
                </span>
              </a>
            ))}
          </div>
          <p class="mt-6 text-xs text-[#577184] dark:text-[#93adbe]">Also via:</p>
          <div class="mt-3 flex flex-wrap gap-2.5">
            {EXTRA_DONATE_LINKS.map((l) =>
              l.href ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center rounded-full border border-[#ccdae2] px-3.5 py-1.5 text-xs font-semibold text-[#19384d] hover:border-[#19384d] dark:border-[#274757] dark:text-[#e8f1f6] dark:hover:border-[#e8f1f6]"
                >
                  {l.label}
                </a>
              ) : (
                <span key={l.label} title="Coming soon — link not configured yet" class="inline-flex cursor-not-allowed items-center rounded-full border border-dashed border-[#b7cad6] px-3.5 py-1.5 text-xs font-medium text-[#577184] dark:border-[#3a5a6e] dark:text-[#93adbe]">
                  {l.label} · soon
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <div class="mt-[clamp(38px,4.6vw,58px)] flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[rgba(243,248,250,0.16)] pt-6">
        <span class="text-xs text-[#a8c2d0]">Research backer</span>
        {RESEARCH_BACKERS.map((backer) => (
          <a
            key={backer.name}
            href={backer.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            title={`${backer.name} — Research backer (logo placement thanks, never influences scores)`}
            class="inline-flex items-center gap-2.5 text-base font-semibold text-[#f3f8fa] hover:underline"
          >
            <img src={backer.imgSrc} alt={backer.alt} width={32} height={32} loading="lazy" class="h-8 w-8 object-contain" />
            {backer.name}
          </a>
        ))}
      </div>
      <div class="mt-8 grid gap-x-11 gap-y-1.5 text-xs leading-relaxed text-[#a9c2d2] min-[800px]:grid-cols-2">
        <p>
          Data syncs from per-model research files on every build. Scores are normalized
          interpretations, not official vendor scores.
        </p>
        <p>Independent AI model comparisons, no sponsored rankings.</p>
      </div>
      <div class="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[rgba(243,248,250,0.16)] pt-5 text-xs text-[#a8c2d0] max-[520px]:flex-col max-[520px]:items-start">
        <span>© 2026 ModelComp</span>
        <span>
          <a href="/" class="font-semibold text-[#f3f8fa] hover:underline">All models</a> · <a href="/contact/" class="font-semibold text-[#f3f8fa] hover:underline">Contact</a>
        </span>
      </div>
    </footer>
  );
});
