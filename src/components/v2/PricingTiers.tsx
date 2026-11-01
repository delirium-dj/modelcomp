import { component$ } from "@builder.io/qwik";
import type { AiModel } from "../../data/models";
import { withFreeZenLink } from "../freeZenLink";

interface PricingTiersProps {
  model: AiModel;
}

export const PricingTiers = component$<PricingTiersProps>(({ model }) => {
  const tiers = model.meta.pricingTiers ?? [model.meta.pricingNote];
  const links = model.meta.pricingLinks ?? [];
  return (
    <>
      {tiers.map((tier, i) => {
        const content = withFreeZenLink(tier);
        const source = links[i];
        const hasLinkInContent = content.some((part) => typeof part !== "string");
        return (
          <span key={`${tier}-${i}`}>
            {i > 0 ? "; " : ""}
            {source && !hasLinkInContent ? (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-dotted underline-offset-2 hover:text-[#557ddd] dark:hover:text-[#7ba0ef]"
                title="Source claiming this pricing"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </span>
        );
      })}
    </>
  );
});
