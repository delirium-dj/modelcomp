# Gemini 3.6 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's 3.6 fast-tier Gemini with improved reasoning, full multimodal input, 1M context. Top use case: high-volume multimodal + coding on a free/cheap tier.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.6-flash`), also OpenCode Zen.
- **Release / knowledge:** Gemini 3.6 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemini-3.6-flash` (Free tier present on AI Studio and Zen).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`).
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on AI Studio and Zen (rate-limited); low Flash paid pricing.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified **83%**; GDPval-AA **1423 Elo**; Terminal-Bench 2.1 (Vals) **73.8%**; AA Agentic Index **30.1%**

Reasoning / knowledge:

- GPQA Diamond **92.8%**; MMLU-Pro **89.3%** (Vals); ARC-AGI-1 **91.2%** / ARC-AGI-2 **60.4%**
- AA-LCR **80.0%**; AA Intelligence Index **34.0**; AA-HLE **40.8%**; CritPt **10.6%**

Coding:

- LiveCodeBench **88.1%** (Vals); SWE-bench **79.6%** (Vals); DeepSWE **49.0%**; AA Coding Index **69.2%**; AA-SciCode **53.4%**

Multimodal:

- AA-MMMU-Pro **83.2%**; Design Arena Website **1306 Elo**

### Normalized scores (1–100)

- **Tool use: 77/100.** OSWorld-Verified 83%, GDPval 1423, TB2.1 73.8%; AA Agentic Index 30.1% caps it — Flash-class agentics.
- **Reasoning: 82/100.** GPQA-D 92.8%, MMLU-Pro 89.3%, ARC-AGI-1 91.2%, AA-LCR 80%; AA Index 34 and CritPt 10.6% cap it.
- **Context window: 94/100.** 1M total with AA-LCR 80%.
- **Multimodal: 88/100.** Image+audio+PDF in (MMMU-Pro 83.2%), text out.
- **Coding: 81/100.** LiveCodeBench 88.1%, SWE-bench 79.6%, Coding Index 69.2%; DeepSWE 49% is the floor.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen plus low Flash paid pricing.
- **Overall Score: 84.4/100.** Half-up mean of the five quality dims (77/82/94/88/81). A strong free/cheap multimodal daily driver between 3.5 and 3.7 Flash.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google blog, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
