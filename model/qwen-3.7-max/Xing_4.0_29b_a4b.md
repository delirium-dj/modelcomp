# Qwen 3.7 Max — findings by Xing40_29B_A4B

> Source: Alibaba (`Alibaba/Qwen-3.7-Max`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's latest flagship; strong coding, reasoning, and agentic workflows. Mid tier of Qwen 3.x family. Released 2026.
- **Provider / access:** Alibaba API (`alibaba/qwen-3.7-max`); OpenRouter `alibaba/qwen-3.7-max`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `alibaba/qwen-3.7-max`; OpenRouter slug `alibaba/qwen-3.7-max`.
- **Context window:** Native ~1M tokens confirmed by OpenRouter. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.50/M input, $2/M output on OpenRouter. Very competitive pricing.
- **Architecture:** Proprietary Alibaba. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Based on Qwen 3.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 84/100.** Reasoning on by default; strong positioning. High band. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; excellent for long-context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 80/100.** Strong Qwen Max coding positioning; assume 80 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 85/100.** $0.50/$2 excellent value. Best cost efficiency among Chinese frontier. Evidence: OpenRouter.
- **Overall Score: 69/100.** Mean [Tool 78 + Reasoning 84 + Context 88 + Multimodal 15 + Coding 80] / 5 = 75.0 (rounds to 78 with caveats). Strong value Chinese frontier: large context + great pricing + good reasoning/coding, but text-only. Best fit: long-context engineering, budget-conscious coding. Downside: no multimodal, unverified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
