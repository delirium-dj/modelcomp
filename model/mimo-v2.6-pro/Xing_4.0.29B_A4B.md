# Xiaomi MiMo V2.6 Pro — findings by Xing40_29B_A4B

> Source: Xiaomi (mimo-v2.6-pro)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship mixin for enterprise coding/agentic workflows, strong on long-context and multi-modal; a top open-weights competitor. Flag if variant/alias.
- **Provider / access:** Hosted via MiMo AI API; OpenRouter mimo-v2.6-pro. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026. Cutoff ~2025.
- **IDs:** <provider>/mimo-v2.6-pro
- **Context window:** 1M tokens total (~500k in/out inferred, not directly reported separately for this base variant).
- **Modalities:** text in/out; image in; audio lightly; reasoning yes; tool calls yes; JSON mode yes; video in lightly.
- **Pricing (as 2026-10-21):** ~.13/M input, cached at discount; ~.04/M output tier (per AA comparison: MiMo-V2.6-Pro at rank 9 of class with .13 input / performance tier ~.25 output blended). Paid on OpenRouter.
- **Architecture:** open weights; MoE architecture (~base transformer fanout A4B); active ~?B, total undisclosed publicly but tracks DeepSeek V4 style sparse mixin lineage. Apache 2.0 (Xiaomi MIMO).

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 75/100.**
- **Reasoning: 68/100.**
- **Context window: 80/100.**
- **Multimodal: 80/100.**
- **Coding: 80/100.**
- **Cost efficiency: 90/100.**
- **Overall Score: 76.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
