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
  onChange$: QRL<(id: string) => void>;
}

export const ModelSelect = component$<ModelSelectProps>(
  ({ label, selectId, value, options, excludeIds, onChange$ }) => {
    const duplicated = value !== "" && excludeIds.indexOf(value) !== -1;
    return (
      <div>
        <label for={selectId} class="mb-1 block text-sm font-medium text-slate-700">
          {label}
        </label>
        <select
          id={selectId}
          value={value}
          onChange$={(e) => onChange$((e.target as HTMLSelectElement).value)}
          class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">— Choose —</option>
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
        {duplicated && (
          <p class="mt-1 text-xs text-amber-700">Already selected in another slot — shown once in the chart.</p>
        )}
      </div>
    );
  }
);
