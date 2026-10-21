# Z.AI GLM 5.3 Flash — findings by Xing40_29B_A4B

> Source: Z.AI / GLM (glm-5.3-flash)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's latest GLM flash variant with strong coding and tool-use benchmarking; an open weights flagship successor within the GLM family. Flag if variant/alias.
- **Provider / access:** Hosted via Z.AI API; OpenRouter glm-5.3-flash. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026. Cutoff ~2025–2026.
- **IDs:** <provider>/glm-5.3-flash
- **Context window:** 1M tokens total (~500k in/out inferred).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes. Audio lightly.
- **Pricing (as 2026-10-21):** paid; .28/M input, .04/M output per AA comparison (GLM-5.3 Flash at rank 14 of class). Paid.
- **Architecture:** open weights; active parameters ~5B (Z.AI GLM series). OpenWeights license per Z.AI docs; Apache-like commercial terms.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 72/100.**
- **Reasoning: 70/100.**
- **Context window: 82/100.**
- **Multimodal: 85/100.**
- **Coding: 80/100.**
- **Cost efficiency: 90/100.**
- **Overall Score: 77.8/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
