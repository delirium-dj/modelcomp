# Gemini 3.1 Flash — findings by LongCat 2.5 Preview

- Source: Google/Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (Gemini 3.1 Flash-Lite)
- **Short description:** Google's high-efficiency multimodal model optimized for low-latency, high-volume workloads. Supports text, image, video, audio, and PDF inputs at a budget price point.
- **Provider / access:** Google Gemini API `gemini-3.1-flash-lite`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-05-07; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens (verified via Google).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.25/$1.50 per 1M in/out (cached $0.025).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.0%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **34.1%** (BenchLM)
- Gert Labs: **38.46%** (BenchLM)

Reasoning / knowledge:

- No verified public reasoning benchmark found for 3.1 Flash-Lite specifically.

Coding:

- SWE-bench Pro: **54.2%** (BenchLM)
- LiveCodeBench: **80.1%** (BenchLM)
- SWE-bench (Vals): **62.8%** (BenchLM)
- Vibe Code Bench: **0.00%** (BenchLM)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.0 at 54.0% and Terminal-Bench 2.1 at 34.1% are moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for 3.1 Flash-Lite. Capped by absence of data.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Text, image, video, audio, and PDF input with text output; strong multimodal support.
- **Coding: 62/100.** SWE-bench Pro at 54.2% and LiveCodeBench at 80.1% are moderate. Capped by Vibe Code Bench at 0.00%.
- **Cost efficiency: 92/100.** $0.25/$1.50 per 1M is very cheap for a frontier-tier model; excellent value.
- **Overall Score: 68/100.** Mean of (48+50+95+85+62)/5 = 68.0 → 68. Best-fit recommendation: budget-friendly multimodal model with strong modality support and cost efficiency; held back by limited agentic and reasoning benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
