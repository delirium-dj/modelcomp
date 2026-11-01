import { component$ } from "@builder.io/qwik";
import type { AiModel } from "../../data/models";

type PricingBadgeVariant = "card" | "inline" | "legend";

interface PricingBadgeProps {
  model: AiModel;
  variant: PricingBadgeVariant;
}

export const PricingBadge = component$<PricingBadgeProps>(({ model, variant }) => {
  const isFree = model.hasFreeTier;
  const title = isFree ? (model.meta.freeTierNote ?? model.meta.pricingNote) : "Cost is scored on paid pricing";

  switch (variant) {
    case "card":
      return (
        <span class={isFree ? "text-[#1c7a4d] dark:text-[#7fd6a4]" : "text-[#9a5c15] dark:text-[#e8b47e]"} title={title}>
          {isFree ? "Free tier" : "Paid"}
        </span>
      );
    case "inline":
      return (
        <span title={isFree ? title : undefined}>
          · {isFree ? "Free" : "Paid"}
        </span>
      );
    case "legend":
      return (
        <span title={isFree ? title : undefined}>
          {isFree ? "Free" : "Paid"}
        </span>
      );
  }
});
