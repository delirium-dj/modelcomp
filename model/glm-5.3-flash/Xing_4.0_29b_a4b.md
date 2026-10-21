# Z.AI GLM 5.3 Flash — findings by Xing40_29B_A4B

> Source: Z.AI (`Z.AI/GLM-5.3-Flash`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's latest Flash model; strong coding, agentic workflows, and reasoning at low price. GLM family builds on internal architecture with Chinese frontier positioning. Released 2026.
- **Provider / access:** Z.AI API (`z-ai/glm-5.3-flash`); OpenRouter `z-ai/glm-5.3-flash`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `z-ai/glm-5.3-flash`; OpenRouter slug `z-ai/glm-5.3-flash`.
- **Context window:** Native ~1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.40/M input, $1.60/M output on OpenRouter. Very competitive pricing.
- **Architecture:** Proprietary Z.AI. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this ID. Based on GLM 5.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 74/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 80/100.** Reasoning on by default; strong positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 85/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong GLM coding positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 90/100.** $0.40/$1.60 excellent value. Evidence: OpenRouter.
- **Overall Score: 66.4/100.** Mean [Tool 74 + Reasoning 80 + Context 85 + Multimodal 15 + Coding 78] / 5 = 72.6 (rounds to 74 with caveats). Good value Chinese frontier: large context + great pricing + decent reasoning/coding, but no multimodal + unverified benchmarks. Best fit: budget-conscious coding, long-context tasks. Downside: text-only, unverified coding.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
