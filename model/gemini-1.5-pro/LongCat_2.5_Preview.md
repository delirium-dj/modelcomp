# Gemini 1.5 Pro — findings by LongCat 2.5 Preview

- Source: Google/Gemini 1.5 Pro (`gemini-1.5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's high-capability multimodal model with a long context window, designed for complex reasoning, document analysis, and rich media understanding. Released May 2024; succeeded by later Gemini models.
- **Provider / access:** Google Gemini API `gemini-1.5-pro`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2024-05-01; knowledge cutoff November 2023.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,000,000 tokens (2.1M); max output 8.2K tokens (verified via AnotherWrapper).
- **Modalities:** Text in; text out; reasoning no (non-reasoning); tool calls yes.
- **Pricing (as of 2026-09-29):** $2.50/$10.00 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Gemini 1.5 Pro specifically.

Reasoning / knowledge:

- GPQA: **59.1%** (AnotherWrapper)
- MMLU: **85.9%** (AnotherWrapper)
- MMLU-Pro: **75.8%** (AnotherWrapper)
- Big Bench Hard: **89.2%** (AnotherWrapper)

Coding:

- HumanEval: **84.1%** (AnotherWrapper)
- LiveCodeBench: **0.3%** (CloudPrice)

Long context:

- 2.1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified public agentic benchmark found for Gemini 1.5 Pro. Capped by absence of data.
- **Reasoning: 60/100.** GPQA at 59.1% and MMLU at 85.9% are moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 98/100.** 2.1M token context window is best-in-class; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output per CloudPrice data.
- **Coding: 50/100.** HumanEval at 84.1% is solid; LiveCodeBench at 0.3% is weak. Capped by limited coding benchmark coverage.
- **Cost efficiency: 65/100.** $2.50/$10.00 per 1M is moderate for a legacy model.
- **Overall Score: 53/100.** Mean of (40+60+98+15+50)/5 = 52.6 → 53. Best-fit recommendation: legacy model with best-in-class context window and solid knowledge/reasoning; held back by text-only modality, non-reasoning architecture, and limited agentic/coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
