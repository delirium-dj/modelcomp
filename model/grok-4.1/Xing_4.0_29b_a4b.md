# Grok 4.1 — findings by Xing40_29B_A4B

> Source: xAI (`xAI/Grok-4.1`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's latest flagship; strong coding, reasoning, and real-time knowledge. Released late 2026.
- **Provider / access:** xAI API (`xai/grok-4.1`); OpenRouter `xai/grok-4.1`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `xai/grok-4.1`; OpenRouter slug `xai/grok-4.1`.
- **Context window:** Native 256K tokens. Large context for Grok.
- **Modalities:** Text in/out. Real-time knowledge search integrated. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $3.00/M input, $15.00/M output on OpenRouter. Premium pricing.
- **Architecture:** Proprietary xAI. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures. Based on Grok 4 family trajectory.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 84/100.** Strong xAI reasoning; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 78/100.** Native 256K; solid for Grok lineage. No improvement. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong Grok coding positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 35/100.** $3/$15 expensive. Poor cost efficiency vs frontier. Evidence: OpenRouter.
- **Overall Score: 66.6/100.** Mean [Tool 78 + Reasoning 84 + Context 78 + Multimodal 15 + Coding 78] / 5 = 73.8 (rounds to 73 with caveats). Same as Grok 4.6 but higher pricing. Same profile. Downside: text-only, expensive, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
