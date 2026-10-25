AGENT_SOURCE_STEM: <YOUR_STEM> — READ-ONLY AUDIT, you write NO files.
BRIEF: small-context (include this line only if your runtime has <200k context)

TASK: Provider-plan audit. Verify every billing plan the /providers/ page
renders still matches the provider's real, current offering. Do NOT score
anything and do NOT write, create, overwrite, rename, move, or delete any
file or folder.

1. Source of truth = the files, not the page: the /providers/ page is derived
   live from `providers/<slug>/meta.json` (`src/data/providers.ts`). A single
   listing of `providers/*/meta.json` gives you all ~95 provider folders; read
   every file (each is small). Each holds `name`, `kind`, `short`,
   `officialUrl`, and `plans[]` with `name` / `price` / `notes` / `evidenceUrl`.
   - Skip any meta.json with `"retired": true` (parked/hidden) — note it once,
     never audit its plans.
   - Schema + editing rules: read `providers/README.md` once.
2. For EACH provider, open its `officialUrl` plus every plan's `evidenceUrl`
   and verify against the CURRENT provider page:
   - plan still offered? price still correct? notes still accurate?
   - any NEW public plan/tier that `plans[]` omits?
   - evidenceUrl dead / redirected / no longer states that price?
   - provider `name` casing, `kind` (vendor vs aggregator), and status
     (retired / renamed / acquired / site gone) still right?
     Fresh public web research only; cite only pages you actually opened. Never
     invent a price. A price visible only behind login/region-lock/aggregator
     (not the provider's own page) is UNVERIFIABLE, not guessed.
3. Verdict per plan — exactly one:
   - VERIFIED — official page still states this plan + price.
   - PRICE-CHANGED — plan exists, price differs.
   - PLAN-GONE — provider no longer offers it.
   - EVIDENCE-DEAD — evidenceUrl 404/redirects/no longer claims that price.
   - UNVERIFIABLE — plan exists but its price has no public claimant.
     Plus one provider-level flag when true: MISSING-PLANS (a public plan exists
     that `plans[]` omits) or PROVIDER-STATUS (retired/renamed/acquired/site down).
4. Output ONE consolidated report in your final message (no file writes):
   - TABLE A — CHANGED / NEEDS-A-FIX (highest priority), one row per finding:
     `<provider-slug> | <plan name> | <verdict> | <old price> → <new price> |
<evidenceUrl checked>`
   - TABLE B — MISSING-PLANS: `<provider-slug> | <new plan> | <price> | <URL>`
   - TABLE C — PROVIDER-STATUS + EVIDENCE-DEAD + UNVERIFIABLE: one line each.
   - PATCH-PROPOSALS: for every fix, the exact minimal `meta.json` edit (field:
     old → new, each with its `evidenceUrl`), grouped by provider folder —
     proposals only, apply NOTHING.
   - Count line: providers audited / plans audited / verified / changed /
     missing / dead / unverifiable. VERIFIED plans need no listing — count only.

HARD RULES:

- Read-only. No write/edit, no scaffolding, no `pnpm` commands (I run those).
- Claim culture (`providers/README.md`, `RULES.md`): every price must trace to
  an evidenceUrl. Never write a price without a claimant page; never invent
  numbers, plans, or URLs.
- Provider folders are permanent like `model/<slug>/` — never rename/move/delete.
- `RULES.md` is the ultimate authority; on conflict follow it and surface it.
- Run all providers to completion in one unbroken chain — no mid-task
  questions, no "should I continue?", no stopping at "enough providers".
- Finish with the handover line:
  `pnpm build.types && pnpm build` (Windows: `pnpm build.types:direct && pnpm build:direct`)

Note: `providers/` is NOT scanned by `pnpm sync` (that covers `model/` only);
only the website build consumes it, so no sync is needed even if a fix is later
approved.
