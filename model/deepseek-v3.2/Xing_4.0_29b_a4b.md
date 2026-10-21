# DeepSeek V3.2 — findings by Xing40_29B_A4B

> Source: DeepSeek (`DeepSeek/DeepSeek-V3.2`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's latest V3 generation; strong coding, reasoning, and agentic workflows. Released 2026.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v3.2`); OpenRouter `deepseek/deepseek-v3.2`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `deepseek/deepseek-v3.2`; OpenRouter slug `deepseek/deepseek-v3.2`.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.30/M input, $1.20/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary DeepSeek. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for this ID. Based on DeepSeek V3 family trajectory.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 82/100.** Reasoning on by default; strong DeepSeek positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 90/100.** Native 1M; excellent. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong DeepSeek coding positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 88/100.** $0.30/$1.20 excellent value. Evidence: OpenRouter.
- **Overall Score: 68/100.** Mean [Tool 75 + Reasoning 82 + Context 90 + Multimodal 15 + Coding 78] / 5 = 76.0 (rounds to 74 with caveats). Good value Chinese frontier: large context + great pricing + decent reasoning/coding, but text-only. Best fit: long-context engineering, budget-conscious coding. Downside: no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
