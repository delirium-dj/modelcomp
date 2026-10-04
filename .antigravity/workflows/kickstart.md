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

3. Verify type health live (no committed snapshot — a frozen receipt goes stale
   and cannot prove it matches git state):
   run `pnpm build.types` (Windows: `pnpm build.types:direct`) and treat its
   output as the receipt.

4. Confirm cache activation to user:
   Report that local context cache is active and project structure is fully loaded into memory.
