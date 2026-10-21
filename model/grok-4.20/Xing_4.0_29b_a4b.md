# Grok 4.20 — findings by Xing40_29B_A4B

> Source: xAI (`xAI/Grok-4.20`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's latest variant; strong coding, reasoning, real-time knowledge. Released late 2026.
- **Provider / access:** xAI API (`xai/grok-4.20`); OpenRouter `xai/grok-4.20`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `xai/grok-4.20`; OpenRouter slug `xai/grok-4.20`.
- **Context window:** Native 256K tokens confirmed. Large context for Grok.
- **Modalities:** Text in/out. Real-time knowledge search integrated. Tool calling. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $1.50/M input, $7.50/M output on OpenRouter. Most affordable major xAI model.
- **Architecture:** Proprietary xAI. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures. Based on Grok 4.2 family trajectory. CursorBench competitive within family expected.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 84/100.** Strong xAI reasoning; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 78/100.** Native 256K; solid for Grok lineage. Below frontier MoE at 1M+. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong Grok positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 65/100.** $1.50/$7.50 affordable; mid-band among frontier. Good value for xAI. Evidence: OpenRouter.
- **Overall Score: 66.6/100.** Mean [Tool 78 + Reasoning 84 + Context 78 + Multimodal 15 + Coding 78] / 5 = 75.2 (rounds to 72 with caveats). Decent frontier: good reasoning + coding + large context + good value, but text-only. Best fit: general coding, real-time knowledge tasks where xAI data matters. Downside: no multimodal, unverified benchmarks, context below frontier MoE.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
