# Qwen 3.7 Plus — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.7-plus` (Qwen3.7 Plus, Alibaba/Qwen) — folder: `model/qwen-3.7-plus`

## Overall
- **Overall Score: 82.4/100.** GUI/agent-oriented Plus-tier model in the Qwen 3.7 line with long-context positioning and competitive pricing on routed providers, but primary official model details were limited in accessible sources during this pass, so several capability claims rely on repo metadata and partial provider listings.

## Scores
- **Tool use: 82/100.** OpenRouter lists tool-related/request controls for `qwen/qwen3.7-plus` (e.g. `tools`, `tool_choice`, `reasoning`, structured response options), indicating support for tool-augmented and agentic API workflows; detailed first-party tool-use benchmarks were not retrievable from official Qwen pages in this pass.
- **Reasoning: 80/100.** Provider/API exposure includes reasoning-related controls, and repo/meta positions it as a strong Plus/GUI-agent tier, but I could not verify comprehensive reasoning benchmark results from directly fetched primary Qwen sources (official blog/HF model card inaccessible/limited).
- **Context window: 90/100.** Repo metadata states a 1,000,000-token context window (with 131K output in some lanes), suggesting strong long-context suitability; exact hosted context limits may vary by provider/lane and were not fully confirmed from an accessible first-party spec page.
- **Multimodal: 78/100.** Repo metadata indicates text and image input with text output; the full GUI-agent experience is described as hosted/API-dependent in metadata, and I could not confirm broader multimodal details from accessible primary sources.
- **Coding: 82/100.** Positioned for coding/agents in repo metadata with strong claimed benchmark performance, but I did not retrieve a primary benchmark table for Qwen3.7 Plus itself during this pass; score reflects likely capability with evidence limitations.
- **Cost efficiency: 84/100.** OpenRouter lists pricing for `qwen/qwen3.7-plus` starting at $0.32/M input and $1.28/M output (Alibaba Cloud Int. route, per provider listing), offering competitive cost for long-context/agent workloads relative to frontier tiers.
- **Overall Score: 79/100.** Promising long-context agent/coding-oriented model with useful API/tooling exposure and good pricing, but limited directly verifiable primary-source detail in this pass reduces confidence in capability specifics.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://openrouter.ai/qwen/qwen3.7-plus
  - https://openrouter.ai/qwen/qwen3.7-plus/api
  - https://www.alibabacloud.com/help/en/model-studio/models

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.7-plus/meta.json
field: officialUrl
proposed: https://openrouter.ai/qwen/qwen3.7-plus
source: https://openrouter.ai/qwen/qwen3.7-plus
```