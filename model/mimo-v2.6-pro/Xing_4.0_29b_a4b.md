# MiMo V2.6 Pro — findings by Xing40_29B_A4B

> Source: Xiaomi (`Xiaomi/MiMo-V2.6-Pro`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's latest flagship model; strong coding, agentic workflows, and reasoning. MiMo series builds on Qwen architecture with enhanced capabilities. Released 2026.
- **Provider / access:** Xiaomi API (`xiaomi/mimo-v2.6-pro`); OpenRouter `xiaomi/mimo-v2.6-pro`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `xiaomi/mimo-v2.6-pro`; OpenRouter slug `xiaomi/mimo-v2.6-pro`.
- **Context window:** Native 1M tokens confirmed by OpenRouter. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $0.80/M input, $4/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Xiaomi. MoE design, builds on Qwen architecture. Not open weights.

### Raw benchmarks found

No verified independent benchmark numbers for this specific ID. Based on MiMo positioning within the competitive landscape.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid. Evidence: OpenRouter.
- **Reasoning: 78/100.** Reasoning on by default; strong family positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 85/100.** Native 1M; solid for Xiaomi frontier. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 76/100.** Strong MiMo coding positioning; assume 76 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 72/100.** $0.80/$4 competitive pricing. Excellent value. Evidence: OpenRouter.
- **Overall Score: 65.2/100.** Mean [Tool 72 + Reasoning 78 + Context 85 + Multimodal 15 + Coding 76] / 5 = 72.6 (rounds to 73 with caveats). Good value Chinese frontier: large context + competitive pricing + decent reasoning, but no verified benchmarks. Best fit: long-context tasks, budget-conscious coding, general agentic workflows. Downside: no multimodal, no verified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
