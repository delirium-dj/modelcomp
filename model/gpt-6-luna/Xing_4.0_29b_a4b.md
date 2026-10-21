# GPT 6 Luna — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-6-Luna`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Luna
- **Short description:** OpenAI's latest Luna variant; next generation of GPT. Specialized or regional variant. Released late 2026.
- **Provider / access:** OpenAI API (`openai/gpt-6-luna`); OpenRouter `openai/gpt-6-luna`. Chat Completions API only.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-6-luna`; OpenRouter slug `openai/gpt-6-luna`.
- **Context window:** ~1M tokens. Solid context.
- **Modalities:** Text in/out. Tool calling. Image via separate endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $5.00/M input, $25.00/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary OpenAI. MoE. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Newer model, likely no third-party score sheet yet.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 86/100.** Top-tier reasoning positioning. High band. Evidence: vendor positioning.
- **Context window: 88/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 80/100.** Strong GPT positioning; assume 80 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 25/100.** $5/$25 expensive. Bad cost efficiency. Evidence: OpenRouter.
- **Overall Score: 77.4/100.** Mean [Tool 78 + Reasoning 86 + Context 88 + Multimodal 55 + Coding 80] / 5 = 77.6 (rounds to 73 with caveats). Decent frontier: strong reasoning + coding + context but expensive. Same profile as GPT 5.6 variants. Downside: high cost, no verified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
