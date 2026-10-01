---
kind: error_handling
name: 'Error Handling in ModelComp: Script Failures vs. Silent Browser Fallbacks'
category: error_handling
scope:
    - '**'
source_files:
    - scripts/sync-data.mjs
    - scripts/lib/validate.mjs
    - scripts/lib/quarantine.mjs
    - scripts/lib/parse.mjs
    - scripts/lib/codegen.mjs
    - scripts/lib/average.mjs
    - src/data/models.ts
    - src/root.tsx
    - src/components/theme-toggle/theme-toggle.tsx
---

## Overview

ModelComp is a QwikCity frontend plus Node.js data-sync tooling. Error handling splits cleanly along that boundary:

- **Frontend (src/)** — no custom error types, no middleware, no global error boundaries. Errors are either swallowed silently or surfaced as raw `Error` strings.
- **Build/sync scripts (scripts/)** — the only place with structured error reporting. Uses a local `fail()` accumulator + `process.exitCode` rather than throwing; pure helpers return typed result objects instead of throwing.

## Frontend (QwikCity)

There is no error-handling framework in use. The only `try/catch` blocks are defensive guards around browser APIs:

- `src/root.tsx` wraps the anti-flash theme script in `try { ... } catch (e) {}` so a `localStorage` / `matchMedia` failure does not block page load.
- `src/components/theme-toggle/theme-toggle.tsx` similarly swallows `localStorage` access errors when toggling themes.

The two places where runtime errors do surface are in `src/data/models.ts`, which uses bare `throw new Error(...)` for internal invariant violations during registry construction:

- Line 195: `throw new Error(\`[models] unexpected meta path: ${path}\`)`
- Line 320: `throw new Error("[models] SOURCE_DEFS is missing the average entry")`

These are build-time / module-load-time failures — there is no user-facing error UI to render them.

## Sync Scripts (`scripts/sync-data.mjs`)

The sync pipeline centralizes error reporting through a local pattern:

```js
let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`  FAIL  ${msg}`);
};
```

Failures are accumulated across all model folders and reported at the end via:

```js
process.exitCode = failures > 0 ? 1 : 0;
```

This means the script never throws from validation paths — it keeps running, collects every problem, and exits non-zero. The top-of-file docstring documents this contract explicitly: "Exit code: 0 = in sync … Non-zero = human action required (see error lines)."

### Pure helpers return results, not throw

All validation logic lives in side-effect-free modules under `scripts/lib/`:

- `validate.mjs`: returns `null` on success, a string message on failure (`checkFilename`, `checkMetaFile`, `deletionFailMessage`).
- `quarantine.mjs`: `quarantineReason(content)` returns `null` when the file is legitimate, or a human-readable reason string otherwise.
- `parse.mjs`: `parseScoresPure` returns `{ ok: boolean, scores?, missingLabel? }`; callers check `r.ok` and call `fail()` with a localized message.
- `codegen.mjs`: exposes `collisionFailMessage`, `appendPendingSources` — helper functions that produce messages rather than throwing.
- `average.mjs`: pure computation helpers used by the sync loop.

This separation is intentional and documented in each file's header (e.g. `"Zero dependencies. Covered by validate.test.mjs."`, `"Everything here is side-effect free"`). Tests live alongside sources as `*.test.mjs` files and lock the behavior.

### Git tripwire

The permanence tripwire (forbidding deletion of git-tracked research files) is wrapped in its own `try/catch`:

```js
try {
  // git ls-tree walk ...
} catch {
  log("  WARN  git HEAD unreadable — tripwire skipped (treat run as untrusted)");
}
```

If git is unavailable (e.g. running outside a repo), the tripwire degrades to a warning rather than failing the whole sync.

## Conventions Observed

1. **Sync scripts never throw from validation paths** — they accumulate `FAIL` lines and set `process.exitCode` at the end.
2. **Pure helpers return typed values** (`null`/message, `{ok, scores}`, reason strings) so callers can decide whether to fail, skip, or quarantine.
3. **Error messages are human-actionable** — e.g. `deletionFailMessage` tells the user exactly how to restore the file with `git restore --source=HEAD -- "..."`.
4. **Browser-side errors are swallowed** — `catch (e) {}` blocks around `localStorage`/`matchMedia` ensure the UI remains usable even if storage is blocked.
5. **Internal invariants in the client bundle throw raw `Error`** — there is no error boundary to catch them; these represent programmer mistakes in registry construction.
6. **No custom error classes, no error codes, no middleware** — the project has no centralized error taxonomy beyond the `FAIL` prefix convention in sync output.