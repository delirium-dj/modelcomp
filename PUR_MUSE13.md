# Purification report — modelcomp (Muse Spark 1.3)

Date: 2026-09-27. Full repo scan: root, `src/`, `scripts/`, `tasks/`,
`model/`, `voicemodels/`, `public/`, `adapters/`, configs. Every candidate
cross-checked against git tracking (`git ls-files`, `git status --ignored`)
and code references (grep over `src/`, `package.json` scripts, docs).
`RULES.md` permanence treated as absolute: nothing under `model/` or
`voicemodels/` is a deletion candidate.

## Safe to eliminate (12 items, zero functional impact)

Stale one-off audit scripts and queue snapshots. Nothing imports or
references them (verified via grep — the only mention is `IMPROVEMENTS.md`
section 5, which itself proposes deleting them).

### Tracked in git — remove with `git rm`

Already covered by `.gitignore` patterns (`tmp_*`, `temp_*`), so they will
not return once untracked.

| File | What it is | Evidence it is dead |
|---|---|---|
| `RULES copy.md` | 9-line outdated draft; authoritative `RULES.md` is 60 lines | No references; content superseded |
| `scan.py` | One-off average-score sorter | No imports; hardcoded local path |
| `temp_sort.py` | One-off sorter for missing `Muse_Glimmer_30B` | No imports; single-use |
| `tmp_queue.cjs` | One-off queue generator for `Gemini_3.1_Pro` | Not wired in `package.json` |
| `tmp_queue.json` | Stale queue snapshot (scores outdated) | Unreferenced data dump |
| `tmp_new_queue.json` | Stale queue snapshot | Unreferenced data dump |
| `temp_missing.txt` | 0-byte empty file | Literally empty |
| `scripts/debug-sync.mjs` | 7-line wrapper (run sync, grep FAIL) | Not in `package.json` scripts; duplicates `pnpm sync` output |
| `scripts/find-fails.mjs` | 20-line checker (scans `model/` only, ignores `voicemodels/`) | Not wired; logic duplicated inside `sync-data.mjs` |

### Local-only, gitignored — plain `Remove-Item` (invisible to git)

| Path | Status |
|---|---|
| `queue.log` | Ignored (`*.log`), stale snapshot, unreferenced |
| `tmp/` | Ignored (`tmp/`), empty directory |
| `dist/`, `server/`, `tsconfig.tsbuildinfo` | Ignored build outputs/cache — regenerate via build; delete only for disk hygiene |
| `instructions/` (`HAMBURGER.md`, `LIGHTDARK.md`, `PWA.md`) | Ignored, consumed build guides per `README.md:76` — already out of git |
| `node_modules/` | Regenerable via pnpm — leave alone |

### Proposed commands (do NOT run without user sign-off)

```powershell
git rm "RULES copy.md" scan.py temp_sort.py tmp_queue.cjs tmp_queue.json tmp_new_queue.json temp_missing.txt scripts/debug-sync.mjs scripts/find-fails.mjs
Remove-Item queue.log -ErrorAction SilentlyContinue; Remove-Item tmp -Recurse -Force -ErrorAction SilentlyContinue
```

Verify afterwards: `pnpm sync && pnpm build.types && pnpm build`.

## Must keep — do NOT delete

- `model/**` and `voicemodels/**` — `RULES.md` permanence plus
  `.githooks/pre-commit` rejection plus `pnpm sync` FAIL tripwire. Includes
  the untracked new research files in `git status` (dataset growth, not trash).
- `model/ox_alpha/Gemini_3.5_Flash_Lite.md.exclude` — typo'd extension
  (missing `d`), currently tracked. Fix = rename to `.excluded`, not delete
  (deletion would trip the pre-commit hook).
- `voicemodels/gpt-live-1-astra/` — incomplete scaffold (no `average.md` /
  `meta.json`), but permanence applies. Needs scaffolding, not deletion.
- `model-comparison.md` — frozen v1–v3 history, but linked via
  `../../model-comparison.md` from hundreds of findings files. Deleting breaks
  those links.
- `model-findings.md` (signed log), `model-report-TEMPLATE.md` (new-agent
  starting point), `model/README.md` (schema) — workflow infrastructure.
- `tasks/*.md` (all 42 tracked: `research.md` + `sync-data.md` + 40 agent
  prompts) — audit trail and active research queue.
- `src/**`, `public/sw.js` (registered in `src/components/router-head.tsx:20`),
  `HeroArt.tsx` (used in `Hero.tsx:31`),
  `adapters/static/vite.config.ts` (used by `build.server`),
  `scripts/sync-data.mjs` (behind `pnpm sync`), `.githooks/pre-commit`,
  `.agents/` (incl. `gemma-rate-limits.md` — legitimate agent doc),
  `vercel.json`, all configs.
- `REPORT.md`, `README.md`, `RULES.md`, `IMPROVEMENTS.md` (untracked roadmap —
  current work, keep).
- `PRD/` — gitignored local-only, but it is the tooltip spec referenced by
  `.agents/rules.md` and `README.md`. Do not delete without a replacement.
- `.antigravity/` — tracked IDE metadata; zero build impact, but removal is a
  user-preference call, so excluded from the delete list.

## Status

Nothing deleted. Awaiting user decision on which items (if any) to remove.
