# Gemini 3 Flash — findings by Claude Opus 4.8

- Source: Google (`opencode/gemini-3-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Gemini 3 Flash — a fast, cheap non-reasoning multimodal model (predecessor to 3.5/3.6 Flash), 1M context. Top use case: high-volume cheap multimodal/coding.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3-flash`); OpenCode Zen `opencode/gemini-3-flash`.
- **Release / knowledge:** Gemini 3 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gemini-3-flash`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; AA-MMMU-Pro 78.6% evidences image input and the Gemini Flash line is multimodal — **flag for verification.**
- **Pricing (as of 2026-10-03):** Flash-tier (cheap; Gemini Flash typically has a free AI Studio tier). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **53.9%**; Claw-Eval **49.2%**; τ²-bench **43.3%**; Gert Labs **56.63%**; JobBench **11.4%**

Reasoning / knowledge:

- GPQA-D **81.2%**; MMLU-Pro **88.6%** (Vals); AA-LCR **55.3%**; AA Intelligence Index **17.9** (non-reasoning); AA-HLE **15.0%**; CritPt **1.4%**

Coding:

- LiveCodeBench **85.6%** (Vals); SWE-bench **75.0%** (Vals); Vibe Code Bench **20.2%**

Multimodal:

- AA-MMMU-Pro **78.6%**; Global-MMLU-Lite **92.7%**

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.1 53.9%, Claw-Eval 49.2%, τ²-bench 43.3%, JobBench 11.4% — weak agentics for a non-reasoning base.
- **Reasoning: 68/100.** GPQA-D 81.2% and MMLU-Pro 88.6%, but AA Index 17.9, HLE 15%, AA-LCR 55.3% and CritPt 1.4% are low.
- **Context window: 85/100.** 1M total but AA-LCR 55.3% shows weak long-context reasoning (meta's 128K understated).
- **Multimodal: 80/100.** Image input (MMMU-Pro 78.6%) with the Gemini Flash multimodal line (image/audio/PDF), text out.
- **Coding: 75/100.** LiveCodeBench 85.6%, SWE-bench 75%; Vibe Code 20.2% caps it.
- **Cost efficiency: 90/100.** Cheap Flash tier (typically free on AI Studio). Scored provisionally.
- **Overall Score: 74.6/100.** Half-up mean of the five quality dims (65/68/85/80/75). A cheap multimodal daily driver, well below the newer 3.5+ Flash; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
