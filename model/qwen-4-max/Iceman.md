# Qwen 4 Max — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-4-max` (Qwen 4 Max, Alibaba/Qwen) — folder: `model/qwen-4-max`

## Overall
- **Overall Score: 72.2/100.** Claimed frontier multimodal Qwen Max model in repo metadata, but I could not retrieve verifiable primary documentation (official blog/OpenRouter/provider pages for this exact model) in this pass, so scores are low-confidence and conservative.

## Scores
- **Tool use: 70/100.** As a purported Max-tier agentic model it would likely support tool use in hosted APIs, but I found no directly accessible primary spec/API documentation confirming capabilities for `qwen-4-max`.
- **Reasoning: 72/100.** Repo metadata positions it as a frontier multimodal MoE with elite reasoning, but no authoritative benchmark or model card was verifiable from fetched sources in this pass.
- **Context window: 75/100.** Repo metadata claims 2M context with 128K output; without primary confirmation I cannot validate this and treat it as unverified.
- **Multimodal: 74/100.** Repo metadata claims text, image, video, and audio inputs with text output, but modality support and limits were not confirmed from retrievable primary sources.
- **Coding: 70/100.** Potentially strong if claims hold, but no verifiable coding benchmark evidence or official documentation for this exact model was retrieved.
- **Cost efficiency: 60/100.** Repo metadata suggests premium paid pricing (~$2.50/$10.00 per 1M), but pricing could not be independently verified from primary/provider pages for this exact model ID.
- **Overall Score: 70/100.** Insufficient verifiable public evidence retrieved for this specific model; treat as unconfirmed/placeholder-like until primary sources are available.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://qwenlm.github.io/ (Qwen blog index; specific `qwen-4-max` post not retrievable)
  - https://www.alibabacloud.com/help/en/model-studio/models
  - https://opencode.ai/docs/zen/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-4-max/meta.json
field: statusNote
proposed: Unverified public primary documentation for this exact model ID/slug as of 2026-11-13; verify official specs/pricing before relying on metadata claims.
source: https://qwenlm.github.io/blog/qwen4-max/ (404), https://openrouter.ai/alibaba/qwen-4-max (404)
```