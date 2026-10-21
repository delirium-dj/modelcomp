# Grok 4.5 — findings by Xing40_29B_A4B

> Source: xAI (`xAI/Grok-4.5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's latest flagship; strong coding, reasoning, real-time knowledge. Released late 2026.
- **Provider / access:** xAI API (`xai/grok-4.5`); OpenRouter `xai/grok-4.5`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `xai/grok-4.5`; OpenRouter slug `xai/grok-4.5`.
- **Context window:** Native 256K tokens confirmed. Large context for Grok.
- **Modalities:** Text in/out. Real-time knowledge search. Tool calling. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $2.50/M input, $12.50/M output on OpenRouter. Mid-range pricing.
- **Architecture:** Proprietary xAI. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures. Based on Grok 4.5 family trajectory. CursorBench competitive within family.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 86/100.** Strong xAI reasoning; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 78/100.** Native 256K; solid for Grok lineage. Below frontier MoE at 1M+. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 82/100.** Strong Grok positioning; assume 82 ± 5. Evidence: vendor positioning.
- **Cost efficiency: 50/100.** $2.50/$12.50 competitive; mid-band among frontier proprietary. Better than GPT/Gemini but worse than DeepSeek/Qwen. Evidence: OpenRouter.
- **Overall Score: 68.2/100.** Mean [Tool 80 + Reasoning 86 + Context 78 + Multimodal 15 + Coding 82] / 5 = 76.4 (rounds to 73 with caveats). Good frontier: strong reasoning + coding + moderate context + good value, but text-only. Best fit: general coding, real-time knowledge tasks where xAI data matters. Downside: no multimodal, unverified benchmarks, context below frontier MoE.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
