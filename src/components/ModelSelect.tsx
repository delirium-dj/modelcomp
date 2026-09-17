import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";

export interface ModelOption {
  id: string;
  name: string;
}

interface ModelSelectProps {
  label: string;
  selectId: string;
  value: string;
  options: ModelOption[];
  excludeIds: string[];
  /** Show the "— Choose —" empty option. Defaults to true (model slots); set false for always-valid selectors. */
  allowEmpty?: boolean;
  onChange$: QRL<(id: string) => void>;
}

export const ModelSelect = component$<ModelSelectProps>(
  ({ label, selectId, value, options, excludeIds, allowEmpty = true, onChange$ }) => {
    const duplicated = value !== "" && excludeIds.indexOf(value) !== -1;
    return (
      <div>
        <label for={selectId} class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
        <select
          id={selectId}
          value={value}
          onChange$={(e) => onChange$((e.target as HTMLSelectElement).value)}
          class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
        >
          {allowEmpty && <option value="">— Choose —</option>}
          {options.map((o) => (
            <option key={o.id} value={o.id} class="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
              {o.name}
            </option>
          ))}
        </select>
        {duplicated && (
          <p class="mt-1 text-xs text-amber-700 dark:text-amber-400">Already selected in another slot — shown once in the chart.</p>
        )}
      </div>
    );
  }
);
