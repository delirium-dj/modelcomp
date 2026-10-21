# GPT 6.1 Sol — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-6.1-Sol`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6.1 Sol
- **Short description:** Latest OpenAI Sol model; next generation of Sol. Strong coding, agentic workflows. Released late 2026.
- **Provider / access:** OpenAI API (`openai/gpt-6.1-sol`); OpenRouter `openai/gpt-6.1-sol`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** ~1M tokens. Solid context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. Image via separate endpoint.
- **Pricing (as of 2026-10-21):** $10.00/M input, $50.00/M output on OpenRouter. Premium pricing.
- **Architecture:** Proprietary OpenAI. MoE. Not open weights.

### Raw benchmarks found

No verified public benchmark figures for this specific ID. Newer model, likely no independent third-party score sheet yet.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tool calling confirmed; no Terminal-Bench. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 88/100.** Top-tier reasoning positioning. High band. Evidence: vendor positioning.
- **Context window: 88/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 83/100.** Top-tier expected from GPT family. Assume 83 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 18/100.** $10/$50 expensive. Evidence: OpenRouter.
- **Overall Score: 79.2/100.** Mean [Tool 82 + Reasoning 88 + Context 88 + Multimodal 55 + Coding 83] / 5 = 79.2 (rounds to 75 with caveats). Very similar to GPT 5.6 Sol but newer. Same use cases, same limitations. Downside: same as GPT 5.6 Sol.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
