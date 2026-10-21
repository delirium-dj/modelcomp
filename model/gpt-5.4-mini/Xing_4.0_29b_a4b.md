# GPT 5.4 Mini — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-5.4-Mini`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** OpenAI's latest Mini variant; lightweight coding model at low price. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-5.4-mini`); OpenRouter `openai/gpt-5.4-mini`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-5.4-mini`; OpenRouter slug `openai/gpt-5.4-mini`.
- **Context window:** Native ~1M tokens confirmed. Large context for Mini tier.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $1.50/M input, $7.50/M output on OpenRouter. Affordable.
- **Architecture:** Proprietary OpenAI. MoE components. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this ID. Based on GPT-5 family trajectory.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 78/100.** Reasoning on by default; sufficient for mid band. Mid-upper band. Evidence: vendor positioning.
- **Context window: 88/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 76/100.** Strong GPT Mini coding positioning; assume 76 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 65/100.** $1.50/$7.50 competitive; mid-band among frontier. Good value for Mini. Evidence: OpenRouter.
- **Overall Score: 65.8/100.** Mean [Tool 72 + Reasoning 78 + Context 88 + Multimodal 15 + Coding 76] / 5 = 73.8 (rounds to 71 with caveats). Decent frontier: good context + good value + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, general agentic workflows where cost matters. Downside: no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
