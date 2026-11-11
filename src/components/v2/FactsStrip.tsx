import { component$ } from "@builder.io/qwik";
import type { AiModel } from "../../data/models";
import { VendorIcon } from "../VendorIcon";

interface FactsStripProps {
  modelCount: number;
  sourceCount: number;
  leaders: LeaderFact[];
}

export interface LeaderFact {
  key: string;
  label: string;
  model: AiModel;
  value: number;
}

/** Homepage "Dataset facts" strip: tracked models, rotating leader, scoring rule. */
export const FactsStrip = component$<FactsStripProps>(
  ({ modelCount, sourceCount, leaders }) => {
    return (
      <section
        class="grid grid-cols-3 border-b border-b-[var(--color-border)] max-[800px]:grid-cols-2 max-[800px]:block dark:border-b-[#274757]"
        aria-label="Dataset facts"
      >
        <div class="py-7 pr-7 text-right max-[800px]:text-center max-[800px]:border-b max-[800px]:border-b-[var(--color-border)] max-[800px]:px-0 max-[800px]:py-4 max-[800px]:dark:border-b-[#274757]">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Models tracked</span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[800px]:text-md">
            <span class="relative inline-block">
              Independent — {modelCount} models · {sourceCount} results sources
              <span
                aria-hidden="true"
                class="absolute bottom-0 left-0 h-[2px] w-full bg-current animate-pulse [animation-duration:3s] motion-reduce:animate-none"
              />
            </span>
          </strong>
        </div>
        <div class="border-l border-l-[var(--color-border)] px-7 py-7 pb-8 text-center max-[800px]:border-b max-[800px]:border-l-0 max-[800px]:border-b-[var(--color-border)] max-[800px]:px-0 max-[800px]:py-4 max-[800px]:dark:border-b-[#274757] dark:border-l-[#274757]">
          {/* All six dimension leaders are rendered; the 30s keyframe in
              global.css fades each one in for 5s (6 × 5s cycle). Pure CSS on
              purpose: the old client timer never advanced on the deployed
              build, which left this label frozen on "Leader overall" (and
              rotation shouldn't depend on hydration at all). */}
          <div class="relative h-[52px]">
            {leaders.map((leader, i) => (
              <div
                key={leader.key}
                class="leader-slide absolute inset-0"
                style={{ animationDelay: `${i * 5}s` }}
                aria-hidden={i === 0 ? undefined : "true"}
              >
                <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">{leader.label}</span>
                <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[800px]:text-md">
                  <span class="inline-flex items-center gap-2 leading-none whitespace-nowrap">
                    <span class="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                      <VendorIcon id={leader.model.id} name={leader.model.name} />
                    </span>
                    <span class="tabular-nums">
                      {leader.model.name} — {leader.value}
                    </span>
                  </span>
                </strong>
              </div>
            ))}
          </div>
        </div>
        <div class="border-l border-l-[var(--color-border)] px-7 py-7 pb-8 text-left max-[800px]:col-span-full max-[800px]:border-l-0 max-[800px]:border-t border-t-[var(--color-border)] max-[800px]:pl-0 max-[800px]:text-center max-[800px]:dark:border-t-[#274757] dark:border-l-[#274757] max-[800px]:px-0 max-[800px]:py-4">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Scoring</span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[800px]:text-md">
            Overall = mean of 5 quality dims, cost excluded
          </strong>
        </div>
      </section>
    );
  },
);
