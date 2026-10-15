# v2 promotion + rollback — read this before touching the homepage

On 2026-10-15 the v2 redesign (`experiment/ui-redesign-experiment`, ~60 commits)
was promoted to primary: `/` serves the study-language homepage, model profiles
live at `/v2/[slug]/`, and the last v1 homepage is frozen at `/v1/`.
**Any human or AI agent can undo this.** Follow the recipes below exactly.

## Where things live now

| Route | Content | Source file(s) |
|---|---|---|
| `/` | v2 homepage (primary) | `src/routes/index.tsx` (+ `src/components/v2/*`) |
| `/model/[slug]/` | v1 model pages, untouched, linked from the homepage | `src/routes/model/[slug]/index.tsx` |
| `/design-6sol/` etc. | Original design studies, local-only (gitignored), untouched | `src/routes/design-*/` |

Section anchors on `/` kept their v1 contracts: `#compare`, `#methodology`,
`#models` (All-models section). Old bookmarks and deep links keep working.

Retired after promotion (deleted, recoverable from git history or tag
`v1-final`): the `/v1` v1-homepage snapshot and the `/v2/[slug]/` experiment
profiles. Profile links point at `/model/[slug]/` again.

Bundle work (same promotion era, separate commits): benchmark evidence was
split out of the shared data barrel — `src/data/evidence.ts` (`getEvidence`)
is imported only by profile routes, so list pages never bundle the ~400 KB
`evidence.generated.ts`. Meta prose (`model/*/meta.json`, 73 KB total) was
deliberately left eager: cards need it at SSR for SEO, and lazy-loading it
would trade first-paint content for negligible savings (see commit history).

## Safety nets (in order of preference)

1. **Tag `v1-final`** — permanent bookmark of the last v1 `master`
   (`99d82900`). `git checkout v1-final`, `git diff v1-final master` anytime.
2. **Merge commit** — the promotion used `git merge --no-ff`, so the entire
   v2 promotion is ONE revertable commit. History was not rewritten.
3. **Branch `experiment/ui-redesign-experiment`** — kept published, never
   deleted. All v2 work survives there even if `master` moves on.
4. **Live `/v1` fallback** — the old homepage still renders; compare
   `/` vs `/v1` side by side before deciding anything is broken.

## Recipe A — revert the whole promotion (v1 back as primary)

```powershell
git checkout master
git pull origin master
git revert -m 1 HEAD
git push origin master
```

This assumes `HEAD` is still the promotion merge. If later commits landed on
top, revert in reverse chronological order (newest first), or:

```powershell
git log --oneline --merges -5   # find the promotion merge hash
git revert -m 1 <merge-hash>
git push origin master
```

Verify: `pnpm sync && pnpm build.types:direct && pnpm build:direct`,
then open `/` — the v1 homepage is back. To return to v2 afterwards,
`git revert` the revert commit (same command, newest-first).

## Recipe B — recover a single v1 file (surgical, no full revert)

```powershell
git checkout v1-final -- <path>   # e.g. src/routes/index.tsx
git commit -m "Restore v1 <path> from v1-final"
```

## Recipe C — resurrect v1 from the tag (nuclear, rewrites history)

Only with explicit team sign-off — it rewrites published `master`:

```powershell
git checkout master
git reset --hard v1-final
git push --force-with-lease origin master
```

Prefer Recipe A. Never `reset --hard` casually (see `RULES.md`
agent restore rule — same spirit, for humans too).

## Notes for agents

- `model/**` permanence rules (`RULES.md`) are unaffected by this promotion:
  the redesign touched only `src/` routes/components/css plus docs.
- `stash@{0}` ("wip before ui-redesign", 2026-10-15) is pre-experiment WIP
  parked during branching — unrelated dataset work, still in the drawer.
  `git stash show -p stash@{0}` to inspect; do NOT drop it silently.
- `vite.config.ts` disables Qwik Click-to-Source in dev
  (`globalThis.qInspector: false`) — dev-only, production was always clean.
  Revert that hunk alone if Alt+click-to-source is missed.
- After any revert or re-promotion, the reporter runs:
  `pnpm sync && pnpm build.types:direct && pnpm build:direct`
  (agents don't run builds per `AGENTS.md`).
