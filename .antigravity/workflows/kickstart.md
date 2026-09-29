---
description: Warm up local project cache and prime Antigravity with instant context
---

// turbo-all
# Kickstart Antigravity Local Context Cache

This workflow reads the local memory cache in `.antigravity/history/` to prime Antigravity with full project awareness in a single fixed step, enabling prompt caching and eliminating redundant codebase scanning.

1. Read the high-level Project Map:
   `view_file` -> `.antigravity/history/project-map.md`

2. Read the Dependency Graph:
   `view_file` -> `.antigravity/history/dependency-graph.md`

3. Read the Last Lint Result receipt:
   `view_file` -> `.antigravity/history/last-lint-result.json`

4. Apply check-first logic (bundled — no extra command needed):
   - Treat steps 1-3 as truth for structure, stack, routes, data flow.
   - Do NOT Glob/Grep/scan `src/`, `model/` to re-discover what history already covers.
   - Only scan when receipt is stale/mismatched or task needs file content beyond the map.
   - Prefer `average.md` Overall lines / `meta.json` over full findings files.

5. Confirm cache activation to user:
   Report that local context cache is active and project structure is fully loaded into memory.
