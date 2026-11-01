import { component$ } from "@builder.io/qwik";
import type { AiModel } from "../../data/models";
import { VendorIcon } from "../VendorIcon";

interface FactsStripProps {
  modelCount: number;
  sourceCount: number;
  leaderDimLabel: string;
  leaderModel: AiModel;
  leaderValue: number;
}

/** Homepage "Dataset facts" strip: tracked models, rotating leader, scoring rule. */
export const FactsStrip = component$<FactsStripProps>(
  ({ modelCount, sourceCount, leaderDimLabel, leaderModel, leaderValue }) => {
    return (
      <section
        class="grid grid-cols-3 border-b border-b-[#ccdae2] max-[800px]:grid-cols-2 max-[520px]:block dark:border-b-[#274757]"
        aria-label="Dataset facts"
      >
        <div class="py-7 pr-7 text-right max-[800px]:text-center max-[520px]:border-b max-[520px]:border-b-[#ccdae2] max-[520px]:px-0 max-[520px]:py-4 max-[520px]:dark:border-b-[#274757]">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Models tracked</span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-md">
            <span class="relative inline-block">
              Independent — {modelCount} models · {sourceCount} results sources
              <span
                aria-hidden="true"
                class="absolute bottom-0 left-0 h-[2px] w-full bg-current animate-pulse [animation-duration:3s] motion-reduce:animate-none"
              />
            </span>
          </strong>
        </div>
        <div class="border-l border-l-[#ccdae2] px-7 py-7 pb-8 text-center max-[520px]:border-b max-[520px]:border-l-0 max-[520px]:border-b-[#ccdae2] max-[520px]:px-0 max-[520px]:py-4 max-[520px]:dark:border-b-[#274757]">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">{leaderDimLabel}</span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-md">
            <span class="inline-flex items-center gap-2 leading-none whitespace-nowrap">
              <span class="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                <VendorIcon key={leaderModel.id} id={leaderModel.id} name={leaderModel.name} />
              </span>
              <span class="tabular-nums">
                {leaderModel.name} — {leaderValue}
              </span>
            </span>
          </strong>
        </div>
        <div class="border-l border-l-[#ccdae2] px-7 py-7 pb-8 text-left max-[800px]:col-span-full max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:border-t-[#ccdae2] max-[800px]:pl-0 max-[800px]:text-center max-[800px]:dark:border-t-[#274757] max-[520px]:border-0 max-[520px]:px-0 max-[520px]:py-4">
          <span class="mb-2 block text-xs text-[#577184] dark:text-[#93adbe]">Scoring</span>
          <strong class="block break-words text-lg font-semibold leading-normal max-[800px]:text-base max-[520px]:text-md">
            Overall = mean of 5 quality dims, cost excluded
          </strong>
        </div>
      </section>
    );
  },
);
