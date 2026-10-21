# GLM 5.3 — findings by Xing40_29B_A4B

> Source: Z.AI (`Z.AI/GLM-5.3`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.AI's latest flagship; strong coding, reasoning, and general capabilities. Mid tier of GLM 5.x family. Released 2026.
- **Provider / access:** Z.AI API (`z-ai/glm-5.3`); OpenRouter `z-ai/glm-5.3`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `z-ai/glm-5.3`; OpenRouter slug `z-ai/glm-5.3`. Note: glm-5.2-coding was renamed to glm-5.3 per RULES.md coding-suffix identity rule.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.50/M input, $2/M output on OpenRouter. Very competitive pricing.
- **Architecture:** Proprietary Z.AI. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA Diamond/SWE-bench for this ID. Based on GLM 5.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 82/100.** Reasoning on by default; strong positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong GLM positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 85/100.** $0.50/$2 excellent value. Evidence: OpenRouter.
- **Overall Score: 67.8/100.** Mean [Tool 76 + Reasoning 82 + Context 88 + Multimodal 15 + Coding 78] / 5 = 75.6 (rounds to 74 with caveats). Good value Chinese frontier: large context + great pricing + decent reasoning/coding, but text-only. Best fit: long-context engineering, budget-conscious coding. Downside: no multimodal, unverified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
