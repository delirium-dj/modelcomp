# Purification record — modelcomp (Muse Spark 1.3)

Recreated 2026-09-29 (the prior copy was wiped from disk while untracked).
Living record of what was removed, renamed, and deliberately kept — and why.

## 1. Executed removals (all committed except where noted)

| Item | How | Why safe |
|---|---|---|
| `RULES copy.md` | `git rm` | 9-line outdated draft; authoritative `RULES.md` is 60+ lines |
| `scan.py`, `temp_sort.py` | `git rm` | One-off audit sorters, hardcoded local paths, unreferenced |
| `tmp_queue.cjs`, `tmp_queue.json`, `tmp_new_queue.json` | `git rm` | Stale queue snapshots, scores long outdated |
| `temp_missing.txt` | `git rm` | 0-byte empty file |
| `queue.log` | already gone from disk | Ignored (`*.log`), stale snapshot |
| `tmp/` | already gone (was empty) | Ignored (`tmp/`), unused |
| `github-desktop-gemini-setup.md` | `git rm` | Committed 95-line GitHub Desktop tutorial, zero references, off-topic |
| `public/sw.js` + SW registration (`router-head.tsx`) + SW cleanup (`root.tsx`) | `git rm` + edits | Self-sabotaging pair: registered on every load, then unregistered on every load; grep confirms zero `sw.js`/`serviceWorker` refs left in `src/`; manifest installability untouched |
| 3× `voicemodels/<slug>/Mimo_v2.6_Flash.md` refiles | `git rm` per explicit user pick "keep canonical" 2026-09-29 (sign-off logged in `REPORT.md`) | Duplicates of same-(slug, agent) canonicals in `models_voice/`; different content, user chose canonicals |

NOT removed (resurrected or skipped): `scripts/debug-sync.mjs` (restored by others, listed as judgment call in `IMPROVEMENTS.md` §5), `scripts/find-fails.mjs` (user skipped — still unwired, still `model/`-only).

## 2. Rename: `voicemodels/` → `models_voice/` (user-approved, committed)

`git mv` of 43 files across 4 slugs; `RULES.md` routing rule, `.agents/rules.md`
layout, `tasks/research.md` updated. Pre-commit hook only guards `model/`
paths so the rename commit is not blocked; `pnpm sync` never scanned the
voice tree. Later: 9 files were refiled under the dead `voicemodels/` path
post-rename — 6 non-colliding reports `git mv`'d into matching
`models_voice/<slug>/` (Kimi_K3 ×3 incl. 1 excluded, GLM_5.3_Flash ×3
excluded; excluded-beside-active same-stem pairs are convention-legal twins),
3 colliding Mimo refiles deleted per §1. `voicemodels/` directory fully gone.

## 3. Doc refreshes

- `.antigravity/history/project-map.md` (48 → 52 lines): data flow gains
  `models_voice/` + `sources.generated.ts`, `models.ts` ~330 lines, toggle
  path fixed. `AGENTS.md` must-read is five files with the map read-FIRST.
- `tasks/research.md` covers all three trees (`model/`, `models_voice/`,
  `models_finance/`) for audit/queue/discovery; `models_finance/` is
  audit-only (retired-agent mirrors — never create folders there, never
  re-route). Zero `voicemodels` strings remain.
- `IMPROVEMENTS.md` §3 updated to `models_voice/`.

## 4. Dataset notes (never delete per `RULES.md` permanence)

- `mimo-v2.6-flash` vs `mimo-v2.6-free`: verified DIFFERENT endpoints of the
  same weights (paid 1M API vs Zen free 128K tier) — keep both, never merge.
- `models_finance/`: Ling-retirement mirrors, sync tripwire exempts
  relocations there; site wiring pending (same as voice was).
- Stale by design: 4 dataset-file notes saying "Lives under `voicemodels/`"
  (uneditable), older `REPORT.md` history entries.

## 5. Open watchlist (not purification — needs eyes, not deletion)

- `model/ling-3.0-flash-fin-free/Gemini_3.7_Flash.md.excluded`,
  `model/space-bunny-alpha/Muse_Spark_1.3.md.excluded`: missing from disk,
  no approval on record — restore or sign off.
- 4 `public/` PNG icons: missing; `IMPROVEMENTS.md` §5 claims intentional
  (head/manifest use `favicon.svg` only — verified true) but user never
  approved — confirm or restore.
- Heavy concurrent agent activity (research commits landing mid-session):
  stage precisely, never sweep in-flight `??` files.

## 6. Must-keep (verified referenced, do not propose)

`src/**` (all components), `public/manifest.json` + `favicon.svg`,
`adapters/static/vite.config.ts`, `scripts/sync-data.mjs`,
`.githooks/pre-commit`, `.agents/`, `tasks/*.md` delegators + procedures,
`model-comparison.md` (linked from hundreds of findings files),
`model-findings.md`, `model-report-TEMPLATE.md`, `model/README.md`,
`REPORT.md`, `README.md`, `RULES.md`, `AGENTS.md`, `vercel.json`, configs.
Build outputs (`dist/`, `server/`, `tsconfig.tsbuildinfo`) and `PRD/`,
`instructions/`, `node_modules/` are gitignored local-only — leave alone.

Verify after any change: `pnpm sync && pnpm build.types && pnpm build`.
