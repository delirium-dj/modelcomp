# Ling 3.0 Tiny — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling-3.0-tiny
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's ultra-compact MoE model (7.9B total / 1.3B active) designed for high-volume, low-cost agentic workloads. Free on OpenRouter with 256K context and native tool use.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-tiny`, free), Vercel AI Gateway, AIMLAPI. OpenAI-compatible API.
- **Release / knowledge:** 2026-08-06.
- **IDs:** `inclusionai/ling-3.0-tiny` (also `ling-3.0-tiny-free` on some providers)
- **Context window:** 262,144 tokens (256K) — verified via OpenRouter, Pi, CloudPrice; up to 32,768 output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes. Tool calling: yes (function calling).
- **Pricing (as of 2026-10-09):** Free ($0/$0) on OpenRouter. Proprietary license.
- **Architecture:** 7.9B total / 1.3B active MoE. Designed for responsive AI agents and high-volume workloads.

### Raw benchmarks found

Agent / tool use:

- Function calling: supported (Pi, CloudPrice)
- Designed for agentic workloads (CloudPrice, LLMBase)

Reasoning / knowledge:

- Intelligence Index (CloudPrice): **15.3 / #211**
- Intelligence Index (Artificial Analysis): **23**
- Intelligence Index (LLMBase): **24.5**
- GPQA: **73.4%** (LLMBase)
- HLE: **9.3%** (LLMBase)

Coding:

- Coding Index (CloudPrice): **26.5 / #127**
- SciCode: **24.2%** (LLMBase)

Long context:

- Context window: **262,144 tokens** (256K) — verified via OpenRouter, Pi, CloudPrice
- LCR: **58.7%** (LLMBase)

Multimodal:

- Text input only (OpenRouter, Pi, CloudPrice)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling supported. Designed for agentic workloads but limited capability at 1.3B active parameters.
- **Reasoning: 62/100.** Intelligence Index 15.3-24.5, GPQA 73.4%. Moderate reasoning for its size, well above median for comparable models.
- **Context window: 82/100.** 256K token context. Good long-context capability.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 55/100.** Coding Index 26.5, SciCode 24.2%. Below average coding, limited by very small active parameter count.
- **Cost efficiency: 95/100.** Free ($0/$0) on OpenRouter. Exceptional value for high-volume workloads.
- **Overall Score: 55/100.** Mean of Tool (62), Reasoning (62), Context (82), Multimodal (15), Coding (55) = 276/5 = 55.2 → 55. Ultra-compact free model with good cost efficiency, but limited capability across all dimensions.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
