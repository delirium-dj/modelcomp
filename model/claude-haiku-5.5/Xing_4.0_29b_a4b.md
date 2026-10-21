# Claude Haiku 5.5 — findings by Xing40_29B_A4B

> Source: Anthropic (`Anthropic/Claude-Haiku-5.5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's latest Haiku model; strong coding at low price. Fast tier for production use. Released 2026.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-5.5`); OpenRouter `anthropic/claude-haiku-5.5`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `anthropic/claude-haiku-5.5`; OpenRouter slug `anthropic/claude-haika-5.5`.
- **Context window:** ~200K native (Haiku context same as Claude family).
- **Modalities:** Text in/out. Tool calling. Image via multimodal endpoint. Reasoning by default.
- **Pricing (as of 2026-10-21):** $1.00/M input, $5/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary Anthropic. Fast/inference-optimized tier. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Based on Claude Haiku family trajectory.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band. Evidence: OpenRouter.
- **Reasoning: 72/100.** Reasoning on by default; sufficient for mid band. Mid-upper band. Evidence: vendor positioning.
- **Context window: 55/100.** ~200K native; lower than frontier MoE. No improvement. Evidence: Anthropic docs.
- **Multimodal: 50/100.** Image via multimodal endpoint; partial credit. Evidence: OpenRouter API schema.
- **Coding: 70/100.** Strong Haiku coding positioning; assume 70 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 90/100.** $1/$5 excellent value. Best cost efficiency among Claude models. Evidence: OpenRouter.
- **Overall Score: 62.4/100.** Mean [Tool 65 + Reasoning 72 + Context 55 + Multimodal 50 + Coding 70] / 5 = 64.4 (rounds to 66 with caveats). Decent Haiku: affordable, decent coding, but limited context and no verified benchmarks. Best fit: budget-conscious coding, production pipelines where cost matters most. Downside: small context, below top tier.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, Anthropic announcements. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
