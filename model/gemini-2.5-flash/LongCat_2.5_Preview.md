# Gemini 2.5 Flash — findings by LongCat 2.5 Preview

- Source: Google/Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's first hybrid reasoning Flash-tier model, pairing chain-of-thought reasoning with Flash-level speed. Most balanced Gemini model, optimized for low latency use cases. Closed to new users since July 2026.
- **Provider / access:** Google Gemini API `gemini-2.5-flash`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2025-05-20; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens (1M); max output 66K tokens (verified via Requesty).
- **Modalities:** Text, image, video, audio in; text out; reasoning yes (switchable); tool calls yes.
- **Pricing (as of 2026-09-29):** $0.30/$2.50 per 1M in/out (cached $0.07).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **14.9%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Requesty)
- AA Intelligence Index: **14.2%** (BenchLM)
- AA-GPQA Diamond: **68.3%** (BenchLM)
- AA-HLE: **4.7%** (BenchLM)
- AA-LCR: **48.0%** (BenchLM)

Coding:

- AA-SciCode: **29.1%** (BenchLM)

Long context:

- 1M token context window; AA-LCR at 48.0% shows moderate long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 35/100.** τ²-bench at 14.9% is weak. Capped by limited agentic benchmark coverage.
- **Reasoning: 55/100.** GPQA Diamond at 79.0% is solid; AA Intelligence Index at 14.2% is moderate. Capped by AA-HLE at 4.7%.
- **Context window: 95/100.** 1M token context window; AA-LCR at 48.0% shows moderate long-context reasoning.
- **Multimodal: 85/100.** Text, image, video, and audio input with text output; strong multimodal support.
- **Coding: 40/100.** AA-SciCode at 29.1% is moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 85/100.** $0.30/$2.50 per 1M is cheap for a frontier-tier model.
- **Overall Score: 62/100.** Mean of (35+55+95+85+40)/5 = 62.0 → 62. Best-fit recommendation: budget-friendly multimodal model with strong modality support and cost efficiency; held back by weak agentic tool use and moderate reasoning benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
