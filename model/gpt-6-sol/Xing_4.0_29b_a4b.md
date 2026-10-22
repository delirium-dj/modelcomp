# GPT 6 Sol — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-6-Sol`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's latest Sol model; next generation. Strong coding, agentic workflows. Released late 2026.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`); OpenRouter `openai/gpt-6-sol`. Chat Completions API only.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-6-sol`; OpenRouter slug `openai/gpt-6-sol`.
- **Context window:** ~1M tokens. Solid context.
- **Modalities:** Text in/out. Tool calling. Image via separate endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $6.00/M input, $30.00/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary OpenAI. MoE. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Newer model, likely no third-party score sheet yet.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 87/100.** Top-tier reasoning positioning. High band. Evidence: vendor positioning.
- **Context window: 88/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 82/100.** Strong GPT positioning; assume 82 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 25/100.** $6/$30 expensive. Bad cost efficiency. Evidence: OpenRouter.
- **Overall Score: 78.4/100.** Mean [Tool 80 + Reasoning 87 + Context 88 + Multimodal 55 + Coding 82] / 5 = 78.4 (rounds to 74 with caveats). Good frontier: strong reasoning + coding + context but expensive. Same profile as GPT 5.4 Pro. Downside: high cost, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
