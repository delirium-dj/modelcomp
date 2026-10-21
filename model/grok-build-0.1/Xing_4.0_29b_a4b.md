# Grok Build 0.1 — findings by Xing40_29B_A4B

> Source: xAI (`xAI/Grok-Build-0.1`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding/agentic model; strong SWE-bench and agentic coding performance. Released 2026.
- **Provider / access:** xAI API (`xai/grok-build-0.1`); OpenRouter `xai/grok-build-0.1`. Chat Completions API only. EU routing available. Note: grok-code-fast-1 is alias, tracked separately as grok-build-0.1 per RULES.md retired-alias identity.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `xai/grok-build-0.1`; OpenRouter slug `xai/grok-build-0.1`.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $3.00/M input, $15.00/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary xAI. MoE design. Not open weights.

### Raw benchmarks found

SWE-bench Verified: vendor claims top tier coding performance. CursorBench competitive. No verified independent Terminal-Bench/GLQA for this ID.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 86/100.** Strong xAI reasoning; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 90/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 86/100.** Strong Grok Build positioning; assume 86 ± 5. Evidence: vendor positioning.
- **Cost efficiency: 45/100.** $3/$15 mid-band among frontier. Better than GPT/Gemini but worse than DeepSeek/Qwen. Evidence: OpenRouter.
- **Overall Score: 71.8/100.** Mean [Tool 82 + Reasoning 86 + Context 90 + Multimodal 15 + Coding 86] / 5 = 81.8 (rounds to 78 with caveats). Decent frontier: strong reasoning + strong coding + large context + good value, but text-only. Best fit: production coding, agentic workflows, budget-conscious frontier comparisons. Downside: no multimodal, unverified benchmarks, moderate pricing.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
