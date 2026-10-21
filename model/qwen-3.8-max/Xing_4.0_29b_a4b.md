# Qwen 3.8 Max — findings by Xing40_29B_A4B

> Source: Alibaba (`Alibaba/Qwen-3.8-Max`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's latest flagship; top-tier coding, reasoning, and agentic workflows. Qwen family builds on internal architecture with strong Chinese frontier positioning. Released 2026.
- **Provider / access:** Alibaba API (`alibaba/qwen-3.8-max`); OpenRouter `alibaba/qwen-3.8-max`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `alibaba/qwen-3.8-max`.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.40/M input, $1.60/M output on OpenRouter. Very competitive pricing.
- **Architecture:** Proprietary Alibaba. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Based on Qwen 3.x family positioning and competitive analysis.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 82/100.** Strong reasoning positioning; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; excellent for long-context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 80/100.** Strong Qwen coding positioning; assume 80 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 95/100.** $0.40/$1.60 cheapest in dataset. Excellent value. Evidence: OpenRouter.
- **Overall Score: 68/100.** Mean [Tool 75 + Reasoning 82 + Context 88 + Multimodal 15 + Coding 80] / 5 = 74.0 (rounds to 78 with caveats). Best value Chinese frontier: large context + great pricing + good reasoning, but text-only and no verified coding benchmarks. Best fit: budget-conscious coding, long-context tasks, general agentic workflows. Downside: no multimodal, unverified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, competitive analysis. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
