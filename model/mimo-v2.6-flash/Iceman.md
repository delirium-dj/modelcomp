# MiMo V2.6 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `mimo-v2.6-flash` (MiMo V2.6 Flash, Xiaomi) — folder: `model/mimo-v2.6-flash`

## Overall
- **Overall Score: 85.6/100.** Cost-efficient omni-modal Flash model positioned for long-horizon agentic tasks with 1M context and competitive pricing on routed providers, but primary first-party model documentation/cards were not fully accessible in this pass, limiting verification of detailed architecture/benchmark claims.

## Scores
- **Tool use: 84/100.** OpenRouter lists tool-calling and agent-relevant API controls for `xiaomi/mimo-v2.6-flash` (e.g. `tools`, `tool_choice`, `parallel_tool_calls`, `reasoning`, structured output options), indicating suitability for tool-augmented workflows; detailed first-party tool-use evaluations were not directly retrievable.
- **Reasoning: 81/100.** Provider/API exposure includes reasoning-related parameters, and repo metadata positions it as a capable agentic Flash model; however, I could not verify comprehensive reasoning benchmark results from an accessible primary Xiaomi/HF model card in this pass.
- **Context window: 94/100.** Repo metadata states a 1M total context window, aligning with long-horizon agent/document use cases; exact hosted limits/behavior may vary by provider and were not confirmed from a directly fetched first-party spec page.
- **Multimodal: 86/100.** Repo metadata indicates omni-modal inputs (text, image, video, audio in; text out), suggesting broad multimodal understanding potential, but modality support details were not fully verified from an accessible primary source during this pass.
- **Coding: 83/100.** Positioned for terminal/agentic coding workloads in repo metadata (with strong claimed benchmark performance), but I could not retrieve a primary benchmark table for direct verification; score reflects likely capability with evidence limitations.
- **Cost efficiency: 90/100.** OpenRouter provider listings show low pricing (roughly ~$0.10-$0.18/M input and ~$0.224-$0.36/M output depending on provider, plus cached/input variants), making it attractive for high-volume agentic use.
- **Overall Score: 82/100.** Promising low-cost long-context multimodal/agentic model with practical API tooling support, but confidence is reduced by limited directly verifiable primary documentation in this pass.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://openrouter.ai/xiaomi/mimo-v2.6-flash
  - https://openrouter.ai/xiaomi/mimo-v2.6-flash/api
  - https://mimo.mi.com/models/en-US/mimo-v2.6-flash

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/mimo-v2.6-flash/meta.json
field: officialUrl
proposed: https://openrouter.ai/xiaomi/mimo-v2.6-flash
source: https://openrouter.ai/xiaomi/mimo-v2.6-flash
```