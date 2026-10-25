AGENT_SOURCE_STEM: <YOUR_STEM> — READ-ONLY AUDIT, you write NO files.
BRIEF: small-context (include this line only if your runtime has <200k context)

TASK: Model-existence audit of the dataset. Do NOT score anything and do NOT
write, create, overwrite, rename, move, or delete any file or folder.

1. Roster (single source — do not hand-scan model/ for this):
   - Read `model-queue.md` (repo root). Its `<Overall> <slug>` lines ARE the
     roster; file order IS the order. This is the ONLY permitted roster source.
   - Then run ONE directory listing: `model/*/` — folders NOT present as a slug
     in `model-queue.md` are orphans (= no average.md yet). Audit those too.
   - Sanctioned exception for this task only: you may list `model/` once to
     find orphans. Never open `average.md` or any findings file for content.
2. Read `model-aliases.generated.md` (repo root): parked/merged/retired/alias
   identities. These are already-known phantoms/duplicates — audit them LAST
   and mark them "PARKED/RESOLVED", not as new hallucinations.
3. For EVERY slug in the roster (queue order, orphans appended A-Z), do fresh
   public web research and decide whether the model genuinely exists and was
   released by the vendor its slug/meta implies. Evidence required: official
   vendor model page/docs, model card, weights repo, or a provider gateway
   listing. Vendor blogs/social alone = weak. Zero evidence = suspicious.
4. Verdict per slug, exactly one of:
   - VERIFIED — official vendor route + released; cite URL.
   - UNCERTAIN — name plausible, no official confirmation found; cite what
     you checked.
   - SUSPECTED-HALLUCINATED — no vendor route; name appears only in
     AI-generated/mirror/aggregator content; specs implausible;
     likely invented by another model.
   - PARKED/RESOLVED — listed in model-aliases.generated.md (not a new finding).
5. Output ONE consolidated report in your final message (no file writes):
   TABLE A — SUSPECTED-HALLUCINATED (highest priority): each as
   `<slug> | <Overall or "no average.md"> | <why> | <URLs checked>`
   TABLE B — UNCERTAIN: same columns.
   TABLE C — PARKED/RESOLVED: slug + resolving target from the roster (one line).
   Then a one-line count: total audited / verified / uncertain / suspected /
   parked. VERIFIED models need no listing — report only the count.

HARD RULES:

- Read-only. No `write`/`edit`/`bash` mutations, no scaffolding, no `pnpm`
  commands (I run those). Never read peer findings files (zero influence).
- `RULES.md` is the ultimate authority; if this task conflicts with it, follow
  RULES.md and surface the conflict.
- Run the whole queue to completion in one unbroken chain — no mid-task
  questions, no "should I continue?", no stopping at "enough models".
- Don't invent URLs; cite only pages you actually opened.
- Finish with the handover line:
  `pnpm sync && pnpm build.types && pnpm build` (Windows: `pnpm sync && pnpm build.types:direct && pnpm build:direct`)
