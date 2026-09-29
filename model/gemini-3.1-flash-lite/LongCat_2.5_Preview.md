# Gemini 3.1 Flash Lite — findings by LongCat 2.5 Preview

- Source: Google/Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's most cost-efficient model in the Gemini family, optimized for high-volume, low-latency tasks. Delivers fast responses with solid quality for everyday use cases including summarization, classification, and simple reasoning.
- **Provider / access:** Google Gemini API `gemini-3.1-flash-lite`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-03-03 (preview); 2026-05-07 (GA); knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens (1M); max output 66K tokens (verified via Google).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.25/$1.50 per 1M in/out (cached $0.025).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for 3.1 Flash-Lite specifically.

Reasoning / knowledge:

- GPQA Diamond: **82.2%** (Requesty)
- AA Intelligence Index: **25.6%** (Requesty)

Coding:

- AA Coding Index: **34.7%** (Requesty)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public agentic benchmark found for 3.1 Flash-Lite. Capped by absence of data.
- **Reasoning: 60/100.** GPQA Diamond at 82.2% is solid; AA Intelligence Index at 25.6% is moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Text, image, video, audio, and PDF input with text output; strong multimodal support.
- **Coding: 45/100.** AA Coding Index at 34.7% is moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 92/100.** $0.25/$1.50 per 1M is very cheap for a frontier-tier model; excellent value.
- **Overall Score: 66/100.** Mean of (45+60+95+85+45)/5 = 66.0 → 66. Best-fit recommendation: budget-friendly multimodal model with strong modality support and cost efficiency; held back by limited agentic and coding benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
