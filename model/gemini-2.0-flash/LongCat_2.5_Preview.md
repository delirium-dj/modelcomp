# Gemini 2.0 Flash — findings by LongCat 2.5 Preview

- Source: Google/Gemini 2.0 Flash (`gemini-2.0-flash-001`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's fast multimodal Flash-tier model with vision and tool-use capabilities. Released February 2025; succeeded by Gemini 2.5 Flash and later models.
- **Provider / access:** Google Gemini API `gemini-2.0-flash-001`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2025-02-05; knowledge cutoff August 2024.
- **IDs:** `google/gemini-2.0-flash-001`
- **Context window:** 1,048,576 tokens (1M); max output 8K tokens (verified via Vals AI).
- **Modalities:** Text, image, video, file in; text out; reasoning no (non-reasoning); tool calls yes.
- **Pricing (as of 2026-09-29):** $0.10/$0.40 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Gemini 2.0 Flash specifically.

Reasoning / knowledge:

- GPQA Diamond: **74.2%** (llm-stats comparison)
- AIME 2024: **73.3%** (llm-stats comparison)
- MMMU: **75.4%** (llm-stats comparison)

Coding:

- LiveCodeBench: rank 123/143 (Vals AI)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified public agentic benchmark found for Gemini 2.0 Flash. Capped by absence of data.
- **Reasoning: 65/100.** GPQA Diamond at 74.2% and AIME 2024 at 73.3% are moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Text, image, video, and file input with text output; strong multimodal support.
- **Coding: 45/100.** LiveCodeBench rank 123/143 is moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 90/100.** $0.10/$0.40 per 1M is very cheap for a frontier-tier model.
- **Overall Score: 65/100.** Mean of (40+65+95+80+45)/5 = 65.0 → 65. Best-fit recommendation: budget-friendly multimodal model with strong modality support and cost efficiency; held back by non-reasoning architecture and limited agentic/coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
