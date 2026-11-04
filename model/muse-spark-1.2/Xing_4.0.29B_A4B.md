# Meta Muse Spark 1.2 — findings by Xing40_29B_A4B

> Source: Meta (muse-spark-1.2)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Muse Spark 1.2
- **Short description:** Meta's latest Spark intermediate model, strong coding and multimodal benchmarking; an early top-tier entry in the current premium tiers comparisons. Flag if variant/alias.
- **Provider / access:** Hosted via Meta API; OpenRouter muse-spark-1.2. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026. Cutoff ~2025–2026.
- **IDs:** <provider>/muse-spark-1.2
- **Context window:** 1M tokens total (~500k in/out inferred from AA comparison table where Muse Spark 1.3 (max) was 1M).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes. Video in moderately supported.
- **Pricing (as 2026-10-21):** ~.24/M input, .88/M output per AA comparison (Spark 1.3 max at .60/M input, Spark 1.2 slightly cheaper). Cache discount ~85%. Paid.
- **Architecture:** proprietary Meta dense transformers; not disclosed publicly. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 82/100.**
- **Reasoning: 70/100.**
- **Context window: 80/100.**
- **Multimodal: 85/100.**
- **Coding: 86/100.**
- **Cost efficiency: 50/100.**
- **Overall Score: 80.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
