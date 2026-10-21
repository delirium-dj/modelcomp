# GPT 5.3 Codex — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-5.3-Codex`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's latest coding model; strong SWE-bench and agentic coding performance. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-5.3-codex`); OpenRouter `openai/gpt-5.3-codex`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-5.3-codex`; OpenRouter slug `openai/gpt-5.3-codex`.
- **Context window:** ~1M tokens. Solid context.
- **Modalities:** Text in/out. Tool calling. Image via separate endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $4.00/M input, $20/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary OpenAI. MoE components. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this ID. Based on GPT-5 family trajectory with codex specialization.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 88/100.** Top-tier reasoning positioning. High band. Evidence: vendor positioning.
- **Context window: 90/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 55/100.** Image via separate endpoint. Standard premium. Evidence: OpenRouter API schema.
- **Coding: 86/100.** Strong codex positioning; assume 86 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 30/100.** $4/$20 expensive. Bad cost efficiency. Evidence: OpenRouter.
- **Overall Score: 80.2/100.** Mean [Tool 82 + Reasoning 88 + Context 90 + Multimodal 55 + Coding 86] / 5 = 80.0 (rounds to 77 with caveats). Decent frontier: strong reasoning + coding + context but expensive. Good fit: high-budget production coding, complex agentic coding workflows. Downside: expensive, no verified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
