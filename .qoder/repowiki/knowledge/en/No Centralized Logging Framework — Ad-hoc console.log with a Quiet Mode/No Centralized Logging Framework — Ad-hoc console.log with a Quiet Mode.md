---
kind: logging_system
name: No Centralized Logging Framework — Ad-hoc console.log with a Quiet Mode
category: logging_system
scope:
    - '**'
source_files:
    - scripts/sync-data.mjs
    - src/data/models.ts
    - scripts/debug-sync.mjs
    - scripts/find-fails.mjs
---

## What system/approach is used

The repository has **no centralized logging framework, logger library, or structured log abstraction**. All output goes through Node's built-in `console` methods (`console.log`, `console.error`, `console.warn`). There is no `log/` or `logging/` directory, no Winston/Pino/Bunyan configuration, and no log-level management.

Two patterns are observed:

1. **CLI scripts** (`scripts/sync-data.mjs`, `scripts/debug-sync.mjs`, `scripts/find-fails.mjs`) use plain `console.log` / `console.error` for human-readable status lines.
2. **Frontend code** (`src/data/models.ts`) uses `console.warn` to surface build-time data integrity issues (missing `average.md`, missing `meta.json`, duplicate IDs, overall-score drift).

## Key files

- `scripts/sync-data.mjs` — the only file that defines a local `log` helper and a `fail` helper; it is the central place where CLI output is produced.
- `src/data/models.ts` — the only frontend consumer of `console.warn`, wrapped in a per-process deduplication helper.
- `scripts/debug-sync.mjs`, `scripts/find-fails.mjs` — minimal debug scripts that pipe child-process output straight to `console.log`.

## Architecture and conventions

### CLI output helpers in `sync-data.mjs`

```js
const QUIET = process.argv.includes("--quiet") || process.argv.includes("-q");
const log = (...args) => {
  if (!QUIET) console.log(...args);
};
let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`  FAIL  ${msg}`);
};
```

- The `log` helper suppresses all non-error output when `--quiet` / `-q` is passed (used by `pnpm sync:quiet`).
- The `fail` helper increments a counter and writes every failure to `stderr` with a fixed `  FAIL  ` prefix, so failures can be grepped even in quiet mode.
- A final summary line is printed via raw `console.log` at the end of the script (line 525), regardless of the `log` helper.
- Exit code is driven by the failure count: `process.exitCode = failures > 0 ? 1 : 0;`.

### Structured-ish prefixes

All CLI messages follow a two-token prefix convention, making them easy to filter:

| Prefix | Meaning |
|--------|---------|
| `INFO` | Informational (e.g. git HEAD unreadable, no active findings files) |
| `WARN` | Warning (e.g. auto-scaffolded meta.json with slug-guess name) |
| `FAIL` | Hard failure (validation errors, hygiene violations, missing required fields) |
| `QUAR` | Auto-quarantine of evidence-free findings |
| `SKIP` | Self-excluded `.md.excluded` files |
| `AUTO` | Auto-corrected value (e.g. Overall score rewritten from quality-dim mean) |
| `GATE` | Rater gate filtering |
| `FALLBACK` | Fallback averaging when no rater clears the gate |
| `NEW` | Newly created `average.md` |
| `WRITE` | File written (averages, generated registry, generated scores) |
| `REG` | New reporting source appended to `SourceKey` + `SOURCE_DEFS` |

These prefixes are conventions enforced by the single writer (`sync-data.mjs`); there is no shared formatter.

### Frontend warnings

`src/data/models.ts` defines a module-scoped `warned: Set<string>` and a `warnOnce(msg)` wrapper around `console.warn`. This exists because the module is re-evaluated per build environment (SSR bundle, client bundle, SSG prerender), which would otherwise spam the same warning 3–4 times per build. The comment explicitly calls this out as a workaround for `console.warn`'s behavior.

Warnings emitted this way include:
- Missing `average.md` for a model (suggests running `pnpm sync`).
- Missing required `meta.json` fields.
- Duplicate model IDs.
- Findings files without a corresponding `meta.json`.
- Overall-score drift beyond rounding tolerance (dev-only, guarded by `if (import.meta.env.DEV)`).

## Conventions and constraints

- **No global logger singleton.** Each script owns its own output helpers.
- **Structured-ish output is achieved via fixed text prefixes**, not JSON or key-value pairs. Consumers grep for `FAIL`, `WARN`, `INFO`, etc.
- **Quiet mode** is opt-in via CLI flags (`--quiet` / `-q`); it does not change error output or exit codes.
- **Failures always go to stderr** via `console.error`; informational/warning/status lines go to stdout via the local `log` helper.
- **Exit codes are numeric**: 0 means in-sync, non-zero means human action required. The script sets `process.exitCode` based on the failure counter rather than calling `process.exit()` directly.
- **Frontend warnings are deduplicated per process** using a `Set` keyed on the message string; there is no log level, sampling, or transport configuration.
- **There is no log rotation, file sink, remote collector, or log level configuration** anywhere in the repo.