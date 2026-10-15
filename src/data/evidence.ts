import { EVIDENCE, type EvidenceItem } from "./evidence.generated";

export type { EvidenceItem };

/**
 * Benchmark figures cited by 2+ independent reports, per model slug.
 * Lives in its own module (NOT in models.ts) so list pages never bundle it:
 * evidence.generated.ts is ~400 KB and only profile pages render it.
 * Profile routes import { getEvidence } from here; everyone else ignores it
 * and Qwik/Vite code-splits it into profile-only chunks.
 */
export function getEvidence(slug: string): EvidenceItem[] {
  return EVIDENCE[slug] ?? [];
}
