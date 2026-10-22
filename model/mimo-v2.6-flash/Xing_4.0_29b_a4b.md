# MiMo V2.6 Flash — findings by Xing40_29B_A4B

> Source: Xiaomi (`Xiaomi/MiMo-V2.6-Flash`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's latest Flash model; strong coding, agentic workflows, and reasoning at low price. Versatile flash tier. Released 2026.
- **Provider / access:** Xiaomi API (`xiaomi/mimo-v2.6-flash`); OpenRouter `xiaomi/mimo-v2.6-flash`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `xiaomi/mimo-v2.6-flash`; OpenRouter slug `xiaomi/mimo-v2.6-flash`.
- **Context window:** Native 1M tokens confirmed by OpenRouter. Large Flash context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.20/M input, $0.80/M output on OpenRouter. Excellent value.
- **Architecture:** Proprietary Xiaomi. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for this ID. Based on MiMo family trajectory.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 76/100.** Reasoning on by default; strong Flash positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 85/100.** Native 1M; solid Flash. Good long-context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 74/100.** Strong MiMo Flash coding positioning; assume 74 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 95/100.** $0.20/$0.80 best value among major models. Excellent. Evidence: OpenRouter.
- **Overall Score: 64/100.** Mean [Tool 70 + Reasoning 76 + Context 85 + Multimodal 15 + Coding 74] / 5 = 72.2 (rounds to 72 with caveats). Good value Chinese Flash: large context + excellent pricing + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, long-context tasks. Downside: no multimodal, no verified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-ai:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
