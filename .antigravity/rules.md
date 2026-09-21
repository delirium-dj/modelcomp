# Antigravity Local Caching & Startup Protocol

> This file is specific to **Antigravity AI Agent** (`.antigravity/`) and does NOT affect other IDEs or agents.

## Why Prompt Cache shows 0B
LLM Prompt Caching (e.g. Gemini / OpenAI prompt caching) requires an **identical, static prompt prefix** at the start of every request. When files are loaded dynamically or context starts with varying conversation history without a static initial anchor, prompt cache reads equal 0B.

## Local Cache & Kickstart Protocol

To ensure instant context warming, zero-token re-scanning, and deterministic cache hits:

1. **Local Memory Store:** All static project memory is pre-built in `.agent/history/`:
   - `.agent/history/project-map.md`: High-level GPS of components, routes, data flow.
   - `.agent/history/dependency-graph.md`: Tech stack, libraries, scripts.
   - `.agent/history/last-lint-result.json`: Typecheck receipt file.

2. **The `/kickstart` Slash Command:**
   - Command: `/kickstart`
   - Workflow file: `.antigravity/workflows/kickstart.md` (and `.agents/workflows/kickstart.md`)
   - Effect: Reads `.agent/history/project-map.md`, `.agent/history/dependency-graph.md`, and `.agent/history/last-lint-result.json` in a single fixed step at conversation start.

3. **Check-First Logic:**
   - Before executing code analysis or full codebase searches, verify `.agent/history/` receipt files.
   - If files match current git state, leverage cached memory instead of scanning the workspace.
