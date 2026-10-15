import { component$ } from "@builder.io/qwik";

/**
 * V2Footer — shared footer for the whole /v2 tree (homepage + model profiles).
 * Same functionality as the v1 Footer (sponsor tiers, soon-links, research
 * backers, fine print, bottom bar), restyled in the design-6sol language.
 * v1 Footer.tsx is untouched.
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
    <footer class="d6-footer">
      <div class="d6-support">
        <div class="d6-support-copy">
          <p class="d6-family">
            ModelComp <span aria-hidden="true">/</span> funding
          </p>
          <h2>Independent research, funded by readers</h2>
          <p>
            <strong>100% independent — no paid promotions, no vendor funding influences scores.</strong>
          </p>
          <p>
            Every findings file is researched independently from public benchmarks. Donations keep it
            that way — they fund compute and research time, never rankings.
          </p>
        </div>
        <div class="d6-support-panel">
          <div class="d6-tiers">
            {TIERS.map((tier) => (
              <a
                key={tier.label}
                href={SPONSOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={tier.detail}
                class={`d6-tier${tier.primary ? " d6-tier-primary" : ""}`}
              >
                <span class="d6-tier-label">
                  <span aria-hidden="true">♥</span> {tier.label}
                </span>
                <span class="d6-tier-detail">{tier.detail}</span>
              </a>
            ))}
          </div>
          <p class="d6-also">Also via:</p>
          <div class="d6-tiers d6-tiers-soon">
            {EXTRA_DONATE_LINKS.map((l) =>
              l.href ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="v2-donate-link"
                >
                  {l.label}
                </a>
              ) : (
                <span key={l.label} title="Coming soon — link not configured yet" class="d6-soon">
                  {l.label} · soon
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <div class="d6-backer-row">
        <span>Research backer</span>
        {RESEARCH_BACKERS.map((backer) => (
          <a
            key={backer.name}
            href={backer.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            title={`${backer.name} — Research backer (logo placement thanks, never influences scores)`}
            class="d6-backer"
          >
            <img src={backer.imgSrc} alt={backer.alt} width={32} height={32} loading="lazy" />
            {backer.name}
          </a>
        ))}
      </div>
      <div class="d6-fine">
        <p>
          Data syncs from per-model research files on every build. Scores are normalized
          interpretations, not official vendor scores.
        </p>
        <p>Independent AI model comparisons, no sponsored rankings.</p>
      </div>
      <div class="d6-bottom">
        <span>© 2026 ModelComp</span>
        <span>
          <a href="/">All models</a> · <a href="/contact/">Contact</a>
        </span>
      </div>
    </footer>
  );
});
