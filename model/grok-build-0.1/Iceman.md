# Grok Build 0.1 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `grok-build-0.1` (Grok Build 0.1, xAI) — folder: `model/grok-build-0.1`

## Overall
- **Overall Score: 82.4/100.** Fast, coding-focused model for agentic software workflows with tool/function calling, structured outputs, and multimodal text/image input, but with a moderate 256K context window and limited published benchmark detail in primary launch/docs pages.

## Scores
- **Tool use: 86/100.** xAI positions it for agentic coding tasks with MCP support and strong tool-calling use cases; official model docs list function calling and structured outputs as supported.
- **Reasoning: 80/100.** Model docs list reasoning capability and it is described as suitable for coding/debugging and general-purpose agentic workflows, but primary pages provide limited quantitative reasoning benchmark evidence.
- **Context window: 82/100.** Official docs specify a 256,000-token context window, sufficient for many coding sessions but below the largest 1M-class contexts.
- **Multimodal: 76/100.** Supports text and image inputs with text output per xAI model docs, useful for screenshot/UI-assisted coding tasks, but no broader audio/video modality support is indicated.
- **Coding: 88/100.** Explicitly trained/presented for agentic coding (web development, debugging, MCP support) and promoted for use in coding harnesses (Grok Build, Cursor, OpenCode, etc.), with emphasis on speed (100+ tokens/s).
- **Cost efficiency: 84/100.** Priced at $1.00/$2.00 per 1M input/output tokens (<200K prompt tokens; higher above 200K) with fast serving, offering good value for coding/agentic workloads.
- **Overall Score: 79/100.** Strong practical choice for fast agentic coding and tool-using workflows, with good price/performance but less evidence of frontier-level reasoning breadth and a smaller context than top long-context models.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://x.ai/news/grok-build-0-1
  - https://docs.x.ai/developers/models/grok-build-0.1
  - https://docs.x.ai/build/overview#getting-started

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/grok-build-0.1/meta.json
field: officialUrl
proposed: https://docs.x.ai/developers/models/grok-build-0.1
source: https://docs.x.ai/developers/models/grok-build-0.1
```