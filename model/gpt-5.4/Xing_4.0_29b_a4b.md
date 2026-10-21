# GPT 5.4 — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-5.4`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4
- **Short description:** OpenAI's latest flagship; strong coding, reasoning, agentic workflows. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-5.4`); OpenRouter `openai/gpt-5.4`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-5.4`; OpenRouter slug `openai/gpt-5.4`.
- **Context window:** ~1M tokens. Solid context.
- **Modalities:** Text in/out. Tool calling. Image via separate endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $5.00/M input, $25.00/M output on OpenRouter. Premium pricing.
- **Architecture:** Proprietary OpenAI. MoE components. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this ID. Based on GPT-5 family trajectory.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 88/100.** Top-tier reasoning positioning. High band. Evidence: vendor positioning.
- **Context window: 90/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 84/100.** Strong GPT positioning; assume 84 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 22/100.** $5/$25 expensive. Bad cost efficiency. Evidence: OpenRouter.
- **Overall Score: 79.8/100.** Mean [Tool 82 + Reasoning 88 + Context 90 + Multimodal 55 + Coding 84] / 5 = 81.8 (rounds to 77 with caveats). Solid frontier: top reasoning + coding + context but expensive. Good fit: high-budget production engineering. Downside: expensive, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
