import { component$ } from "@builder.io/qwik";
import { REFERENCES } from "../../data/references.generated";

/**
 * ReferencesSection — the "Evidence & Research Citations" disclosure drawer
 * placed under the model profile's agreed-benchmarks section.
 *
 * Reads the build-time harvested URLs for one model slug
 * (`src/data/references.generated.ts`, emitted by `pnpm sync`), so the profile
 * never parses findings markdown at runtime. Renders nothing when a model has
 * no external citations. External links carry `rel="nofollow noopener
 * noreferrer"` to keep editorial credit clean (we cite sources, we don't pass
 * PageRank through them).
 */
interface ReferencesSectionProps {
  slug: string;
}

export const ReferencesSection = component$<ReferencesSectionProps>(({ slug }) => {
  const references = REFERENCES[slug] ?? [];
  if (references.length === 0) return null;

  return (
    <details class="group mt-10 rounded-2xl border border-[#ccdae2] bg-[#f7fafb] p-6 dark:border-[#274757] dark:bg-[#132a3b]">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[color:var(--color-ink)]">
        <span>Evidence &amp; Research Citations ({references.length})</span>
        <span aria-hidden="true" class="text-[#577184] transition-transform group-open:rotate-180 dark:text-[#93adbe]">
          ▼
        </span>
      </summary>
      <p class="mt-2 text-xs leading-relaxed text-[#577184] dark:text-[#93adbe]">
        External sources cited across the independent reports for this model. Links open the
        claiming page directly.
      </p>
      <ul class="mt-4 divide-y divide-[#e2edf2] dark:divide-[#274757]">
        {references.map((ref) => (
          <li key={ref.url} class="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3">
            <span class="min-w-0 flex-1 break-words text-sm text-[color:var(--color-ink)]">
              {ref.title}
            </span>
            <span class="flex-none rounded-full border border-[#b7cad6] px-2 py-0.5 text-[11px] text-[#425f71] dark:border-[#3a5a6e] dark:text-[#a9c2d2]">
              {ref.domain}
            </span>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="flex-none text-sm font-medium text-[#275bad] hover:underline dark:text-[#9dbdf5]"
              title={`Open source (${ref.url})`}
            >
              Source ↗
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
});
