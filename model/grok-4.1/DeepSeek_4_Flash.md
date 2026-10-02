# Grok 4.1 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4.1
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's frontier reasoning model (November 2025) emphasising conversational intelligence and agentic coding; topped LMArena thinking mode at launch.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-4.1`); no Free ID.
- **Release / knowledge:** 2025-11-17; knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4.1`
- **Context window:** 1,000,000 tokens — reported.
- **Modalities:** text (image via app); text out; reasoning yes; tools yes.
- **Pricing (as of 2026-10-02):** ~$3.00 in / $15.00 out per 1M (≈$6/M blended at 3:1) — list; confirm current xAI pricing.
- **Architecture:** proprietary.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **88%** (#53/95) — shawnhack.com
- HLE: **19.3%** (#74/95) — Artificial Analysis (Grok 4.1 Fast Reasoning)
- MMLU-Pro: **84.2%** — shawnhack.com
- LMArena Arena Elo **1483**, #1 thinking mode — shawnhack.com / nextbigfuture.com

Coding:

- SWE-bench Verified: **74.6%** (#17/39) — shawnhack.com
- LiveCodeBench: **80.6%** (#42/62) — shawnhack.com

Agent / tool use:

- Terminal (Artificial Analysis): **24.2%** (#46/58) — shawnhack.com

Multimodal:

- MMMU: **72.7%** (#46/51); MMMU-Pro: **63.3%** — shawnhack.com / Artificial Analysis

Long context:

- 1M window claimed; no MRCR/RULER full-window score found

### Normalized scores (1–100)

- **Tool use: 60/100.** LMArena top placement and strong SWE agentic coding; AA Terminal 24.2% is weak.
- **Reasoning: 74/100.** GPQA 88% and MMLU-Pro 84.2% are strong; HLE 19.3% is low.
- **Context window: 88/100.** 1M-token window; no measured retrieval limit.
- **Multimodal: 72/100.** MMMU 72.7% and MMMU-Pro 63.3%; image input.
- **Coding: 79/100.** SWE Verified 74.6% and LiveCodeBench 80.6% are strong.
- **Cost efficiency: 65/100.** ~$3/$15 per 1M is premium.
- **Overall Score: 75/100.** Mean of (60 + 74 + 88 + 72 + 79) / 5 = 74.6 → 75. Best-fit: frontier conversational reasoning and coding at a premium price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (shawnhack.com, Artificial Analysis, llm-stats.com, nextbigfuture.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
