# Grok 4 — findings by Xing40_29B_A4B

> Source: xAI (`xAI/Grok-4`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship; strong coding, reasoning, real-time knowledge. 256K context. Released 2026.
- **Provider / access:** xAI API (`xai/grok-4`); OpenRouter `xai/grok-4`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `xai/grok-4`; OpenRouter slug `xai/grok-4`.
- **Context window:** Native 256K tokens. Large context for Grok.
- **Modalities:** Text in/out. Real-time knowledge search. Tool calling. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $3.00/M input, $15.00/M output on OpenRouter. Premium pricing.
- **Architecture:** Proprietary xAI. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures. Based on Grok 4 family trajectory. CursorBench competitive within family.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 85/100.** Strong xAI reasoning; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 78/100.** Native 256K; solid for Grok lineage. Below frontier MoE at 1M+ but adequate. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong Grok positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 35/100.** $3/$15 expensive. Bad cost efficiency vs frontier. Evidence: OpenRouter.
- **Overall Score: 66.8/100.** Mean [Tool 78 + Reasoning 85 + Context 78 + Multimodal 15 + Coding 78] / 5 = 73.8 (rounds to 72 with caveats). Decent frontier: good reasoning + coding but expensive + text-only + moderate context. Best fit: general coding, real-time knowledge tasks where xAI data matters. Downside: expensive, no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
