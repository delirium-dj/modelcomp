// Provider (seller / console) data is curated in providers/<slug>/meta.json —
// one file per provider — and loaded here at build time via import.meta.glob,
// the same pattern models.ts uses for model metas. This folder is NOT scanned
// by `pnpm sync`; the website build is the only consumer.
//
// The "models offered" list is derived, never curated: a model matches a
// provider when its id starts with one of the provider's `idPrefixes`, or one
// of its claimant URLs (officialUrl / pricingLinks) lives on one of the
// provider's `hosts`. Every price on the Providers page traces to an
// evidenceUrl, mirroring the claim culture of model metas (RULES.md).

import { MODELS, type AiModel } from "./models";

export interface ProviderPlan {
  name: string;
  price: string;
  notes?: string;
  evidenceUrl?: string;
}

/** Provider kind: `vendor` sells its own models, `aggregator` bills others'. */
export type ProviderKind = "vendor" | "aggregator";

export interface ProviderMeta {
  name: string;
  kind?: string;
  short: string;
  officialUrl?: string;
  hosts?: string[];
  idPrefixes?: string[];
  /** Model slugs the provider sells, for catalogs model metas do not cite. */
  covers?: string[];
  /** Official catalog page backing `covers` (claim culture). */
  catalogUrl?: string;
  plans: ProviderPlan[];
}

export interface Provider extends ProviderMeta {
  /** Folder name under providers/ — the canonical key. */
  slug: string;
  kind: ProviderKind;
  /** Covered models (derived from MODELS), best Overall first. */
  models: AiModel[];
}

const REQUIRED = ["name", "short", "plans"] as const;

function warnOnce(msg: string): void {
  // Deduped per process: this module is re-evaluated per build environment
  // (SSR, client, SSG) and must not spam (same pattern as models.ts).
  const seen = (warnOnce as unknown as { s?: Set<string> }).s ?? new Set<string>();
  if (seen.has(msg)) return;
  seen.add(msg);
  (warnOnce as unknown as { s?: Set<string> }).s = seen;
  console.warn(msg);
}

const providerModules = import.meta.glob("../../providers/*/meta.json", {
  eager: true,
  import: "default",
}) as Record<string, unknown>;

function hostOf(url: string): string | undefined {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

function matchModels(meta: ProviderMeta): AiModel[] {
  const prefixes = meta.idPrefixes ?? [];
  const hosts = new Set(meta.hosts ?? []);
  const matched = new Map<string, AiModel>();
  for (const m of MODELS) {
    const prefix = m.id.split("/")[0];
    if (prefixes.includes(prefix)) {
      matched.set(m.slug, m);
      continue;
    }
    const urls = [m.meta.officialUrl, ...(m.meta.pricingLinks ?? [])];
    if (urls.some((u) => u && hostOf(u) && hosts.has(hostOf(u)!))) matched.set(m.slug, m);
  }
  if (meta.covers?.length) {
    const bySlug = new Map(MODELS.map((m) => [m.slug, m]));
    for (const slug of meta.covers) {
      const m = bySlug.get(slug);
      if (m) matched.set(m.slug, m);
      else warnOnce(`[providers] covers references unknown model slug "${slug}" — ignored`);
    }
  }
  return [...matched.values()].sort(
    (a, b) => b.scores.overall - a.scores.overall || (a.name < b.name ? -1 : 1),
  );
}

const PROVIDER_MODULES = Object.entries(providerModules) as [string, unknown][];

export const PROVIDERS: Provider[] = (() => {
  const raw: { slug: string; meta: ProviderMeta }[] = [];
  const seenSlugs = new Set<string>();
  for (const [path, value] of PROVIDER_MODULES) {
    const m = path.match(/^\.\.\/\.\.\/providers\/([^/]+)\/meta\.json$/);
    if (!m) throw new Error(`[providers] unexpected meta path: ${path}`);
    const slug = m[1];
    const meta = value as Partial<ProviderMeta>;
    let valid = true;
    for (const k of REQUIRED) {
      if (meta[k] === undefined) {
        warnOnce(`[providers] providers/${slug}/meta.json: missing required field "${k}" — skipped`);
        valid = false;
      }
    }
    if (!Array.isArray(meta.plans) || meta.plans.length === 0) {
      warnOnce(`[providers] providers/${slug}/meta.json: "plans" must be a non-empty array — skipped`);
      valid = false;
    }
    if (valid && seenSlugs.has(slug)) {
      warnOnce(`[providers] duplicate provider slug: ${slug} — keeping first occurrence`);
      valid = false;
    }
    seenSlugs.add(slug);
    if (!valid) continue;
    raw.push({ slug, meta: meta as ProviderMeta });
  }
  const providers = raw.map(({ slug, meta }) => ({
    ...meta,
    slug,
    kind: meta.kind === "aggregator" ? ("aggregator" as const) : ("vendor" as ProviderKind),
    plans: meta.plans,
    models: matchModels(meta),
  }));
  providers.sort(
    (a, b) => b.models.length - a.models.length || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
  );
  return providers;
})();

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}
