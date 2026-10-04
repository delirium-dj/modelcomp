# Gemini 3.5 Flash Lite — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.5-flash-lite`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's ultra-low-latency 3.5 Flash Lite — full multimodal input, 1M context, cheap. Top use case: high-volume cheap multimodal/agentic tasks.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.5-flash-lite`), also OpenCode Zen.
- **Release / knowledge:** Gemini 3.5 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemini-3.5-flash-lite` (Free tier present on AI Studio and Zen).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on AI Studio and Zen (rate-limited); low Flash-Lite paid pricing.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified **74%**; Terminal-Bench 2.1 **54.0%** (Vals 50.2%); GDPval-AA **1139 Elo**; AA Agentic Index **15.9%**

Reasoning / knowledge:

- GPQA Diamond **83.8%** (Vals); MMLU-Pro **85.8%** (Vals); AA-LCR **76.0%**; MRCRv2 **72.2%**; AA Intelligence Index **22.2**; HLE **18.8%**; CritPt **0.0%**

Coding:

- SWE-bench **75.0%** (Vals); LiveCodeBench **79.0%** (Vals); SWE-bench Pro **54.2%**; AA Coding Index **49.3%**; AA-SciCode **41.3%**

Multimodal:

- AA-MMMU-Pro **79.0%**

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 74% is solid, but TB2.1 54%, GDPval 1139 and AA Agentic Index 15.9% are weak — lite-tier agentics.
- **Reasoning: 70/100.** GPQA-D 83.8%, MMLU-Pro 85.8%, AA-LCR 76%; AA Index 22.2, HLE 18.8% and CritPt 0% cap it.
- **Context window: 90/100.** 1M total with AA-LCR 76% (MRCRv2 72.2%).
- **Multimodal: 86/100.** Image+audio+PDF in (MMMU-Pro 79%), text out.
- **Coding: 73/100.** SWE-bench 75%, LiveCodeBench 79%, SWE-bench Pro 54.2%; Coding Index 49.3% caps it.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen plus low Flash-Lite paid pricing.
- **Overall Score: 77.4/100.** Half-up mean of the five quality dims (68/70/90/86/73). A very cheap multimodal lite model; reasoning/agentic depth is the limit.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google blog, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
