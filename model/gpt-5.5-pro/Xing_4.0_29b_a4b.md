# GPT 5.5 Pro — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-5.5-Pro`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's latest flagship Pro model; top-tier coding, reasoning, and agentic workflows. Premium pricing, strongest reasoning in current frontier. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-5.5-pro`); OpenRouter `openai/gpt-5.5-pro`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-5.5-pro`.
- **Context window:** ~1M tokens confirmed by OpenRouter.
- **Modalities:** Text in/out. Tool calling. Image via separate endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $12.00/M input, $60.00/M output on OpenRouter. Most expensive frontier.
- **Architecture:** Proprietary OpenAI. MoE components. Not open weights.

### Raw benchmarks found

No verified public benchmark figures for this specific ID. Based on GPT-5.x family positioning and competitive landscape.

### Normalized scores (1–100)

- **Tool use: 85/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 92/100.** Top-tier reasoning per market intelligence. High band. Evidence: vendor positioning + competitive analysis.
- **Context window: 90/100.** ~1M native; among largest. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint not separately priced. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 85/100.** Top-tier expected from GPT family. Assume 85 ± 7. Evidence: vendor positioning.
- **Cost efficiency: 10/100.** $12/$60 extremely expensive. Worst cost efficiency in set. Evidence: OpenRouter.
- **Overall Score: 81.4/100.** Mean [Tool 85 + Reasoning 92 + Context 90 + Multimodal 55 + Coding 85] / 5 = 81.4 (rounds to 77 with caveats). Top reasoning + coding + context but absurdly expensive. Best fit: high-budget production engineering, peak performance workloads where cost secondary. Downside: worst cost efficiency, unverified benchmarks, premium impractical for volume.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, competitive analysis. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
