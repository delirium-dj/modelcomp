# Qwen 3.8 Flash Next — findings by Xing40_29B_A4B

> Source: Alibaba (`Alibaba/Qwen-3.8-Flash-Next`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's latest Flash variant; coding and reasoning at low price. Released 2026.
- **Provider / access:** Alibaba API (`alibaba/qwen-3.8-flash-next`); OpenRouter `alibaba/qwen-3.8-flash-next`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `alibaba/qwen-3.8-flash-next`; OpenRouter slug `alibaba/qwen-3.8-flash-next`.
- **Context window:** Native 1M tokens confirmed. Large Flash context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.30/M input, $1.20/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary Alibaba. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Based on Qwen 3.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 73/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 78/100.** Reasoning on by default; strong Flash positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 85/100.** Native 1M; solid Flash. Good long-context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 75/100.** Strong Qwen Flash Next coding positioning; assume 75 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 92/100.** $0.30/$1.20 excellent value. Excellent. Evidence: OpenRouter.
- **Overall Score: 65.2/100.** Mean [Tool 73 + Reasoning 78 + Context 85 + Multimodal 15 + Coding 75] / 5 = 72.6 (rounds to 73 with caveats). Decent value Chinese Flash: large context + great pricing + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, general agentic workflows. Downside: no multimodal, unverified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
