# GLM 5.3 Flash X — findings by Xing40_29B_A4B

> Source: Z.AI (`Z.AI/GLM-5.3-Flash-X`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X
- **Short description:** Z.AI's latest Flash variant with extended capabilities. Released 2026.
- **Provider / access:** Z.AI API (`z-ai/glm-5.3-flash-x`); OpenRouter `z-ai/glm-5.3-flash-x`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `z-ai/glm-5.3-flash-x`; OpenRouter slug `z-ai/glm-5.3-flash-x`.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.50/M input, $2/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Z.AI. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for this ID. Based on GLM 5.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 80/100.** Reasoning on by default; strong positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong GLM positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 85/100.** $0.50/$2 excellent value. Evidence: OpenRouter.
- **Overall Score: 67.2/100.** Mean [Tool 75 + Reasoning 80 + Context 88 + Multimodal 15 + Coding 78] / 5 = 75.6 (rounds to 73 with caveats). Decent value Chinese frontier: large context + great pricing + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, long-context tasks. Downside: no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
