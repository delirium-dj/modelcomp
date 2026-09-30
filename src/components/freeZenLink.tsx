/** Shared "Free OpenCode Zen tier" link for pricing displays.
 *
 * Meta strings (`pricingNote`, `pricingTiers`) intentionally stay plain text
 * (tooltips can't render markup) — call this wherever they are displayed so
 * the phrase uniformly links to the free-models docs.
 */
export const FREE_ZEN_MODELS_URL = "https://opencode.ai/v2/docs/console/models/#free-models";

const PHRASE = "Free OpenCode Zen tier";

export function withFreeZenLink(text: string): any[] {
  const parts = text.split(PHRASE);
  if (parts.length === 1) return [text];
  const out: any[] = [];
  parts.forEach((part, i) => {
    if (part) out.push(part);
    if (i < parts.length - 1) {
      out.push(
        <a
          key={`free-zen-${i}`}
          href={FREE_ZEN_MODELS_URL}
          target="_blank"
          rel="noreferrer"
          class="underline decoration-dotted underline-offset-2 hover:text-indigo-600 dark:hover:text-indigo-400"
          title="OpenCode Zen free models — docs"
        >
          {PHRASE}
        </a>,
      );
    }
  });
  return out;
}
