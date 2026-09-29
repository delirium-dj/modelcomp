# Gemini 3.5 Flash Lite — findings by LongCat 2.5 Preview

- Source: Google/Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's fastest, most cost-effective 3.5 model for high-throughput execution. Delivers intelligence, speed, and cost efficiency for agentic retrieval and tool-use tasks.
- **Provider / access:** Google Gemini API `gemini-3.5-flash-lite`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-07-21; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens (verified via Google).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.30/$2.50 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.0%** (BenchLM)
- OSWorld-Verified: **74%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **50.2%** (BenchLM)

Reasoning / knowledge:

- No verified public reasoning benchmark found for 3.5 Flash-Lite specifically.

Coding:

- SWE-bench Pro: **54.2%** (BenchLM)
- LiveCodeBench (Vals): **79.0%** (BenchLM)
- SWE-bench (Vals): **75.0%** (BenchLM)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 at 54.0% and OSWorld-Verified at 74% are moderate. Capped by Terminal-Bench 2.1 at 50.2%.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for 3.5 Flash-Lite. Capped by absence of data.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Text, image, video, audio, and PDF input with text output; strong multimodal support.
- **Coding: 68/100.** SWE-bench Pro at 54.2% and LiveCodeBench at 79.0% are moderate. Capped by limited coding benchmark diversity.
- **Cost efficiency: 92/100.** $0.30/$2.50 per 1M is very cheap for a frontier-tier model; excellent value.
- **Overall Score: 73/100.** Mean of (60+55+95+85+68)/5 = 72.6 → 73. Best-fit recommendation: budget-friendly multimodal model with strong modality support and cost efficiency; held back by limited reasoning benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
