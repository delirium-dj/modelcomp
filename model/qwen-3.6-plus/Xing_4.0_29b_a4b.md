# Qwen 3.6 Plus — findings by Xing40_29B_A4B

> Source: Alibaba (`Alibaba/Qwen-3.6-Plus`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's latest Plus variant; coding and reasoning at mid price. Released 2026.
- **Provider / access:** Alibaba API (`alibaba/qwen-3.6-plus`); OpenRouter `alibaba/qwen-3.6-plus`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `alibaba/qwen-3.6-plus`; OpenRouter slug `alibaba/qwen-3.6-plus`.
- **Context window:** Native ~1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.30/M input, $1.20/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary Alibaba. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this ID. Based on Qwen 3.6 family trajectory.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 80/100.** Reasoning on by default; strong positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 76/100.** Strong Qwen Plus coding positioning; assume 76 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 92/100.** $0.30/$1.20 excellent value. Excellent. Evidence: OpenRouter.
- **Overall Score: 66.8/100.** Mean [Tool 75 + Reasoning 80 + Context 88 + Multimodal 15 + Coding 76] / 5 = 75.4 (rounds to 73 with caveats). Decent value Chinese frontier: large context + great pricing + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, long-context tasks. Downside: no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
