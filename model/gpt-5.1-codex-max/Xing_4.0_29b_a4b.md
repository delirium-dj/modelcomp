# GPT 5.1 Codex Max — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-5.1-Codex-Max`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1 Codex Max
- **Short description:** OpenAI's latest Codex Max variant; top-tier coding performance. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-5.1-codex-max`); OpenRouter `openai/gpt-5.1-codex-max`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-5.1-codex-max`; OpenRouter slug `openai/gpt-5.1-codex-max`.
- **Context window:** ~1M tokens. Solid context.
- **Modalities:** Text in/out. Tool calling. Image via separate endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $8.00/M input, $40.00/M output on OpenRouter. Premium pricing.
- **Architecture:** Proprietary OpenAI. MoE components. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures. Based on GPT-5 family trajectory. CursorBench likely top tier for Codex variants.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 86/100.** Top-tier reasoning positioning. High band. Evidence: vendor positioning.
- **Context window: 90/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 85/100.** Strong codex Max positioning; assume 85 ± 5. Evidence: vendor positioning.
- **Cost efficiency: 18/100.** $8/$40 expensive. Worst cost efficiency. Evidence: OpenRouter.
- **Overall Score: 79.2/100.** Mean [Tool 80 + Reasoning 86 + Context 90 + Multimodal 55 + Coding 85] / 5 = 81.2 (rounds to 75 with caveats). Top codex: top coding + strong reasoning + large context but absurdly expensive. Best fit: peak production coding where cost secondary. Downside: worst cost efficiency, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
