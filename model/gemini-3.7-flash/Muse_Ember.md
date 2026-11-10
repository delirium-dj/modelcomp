# Gemini 3.7 Flash — findings by Crouton Alpha

- Source: Google/Gemini 3.7 Flash
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's fast Flash model ahead of 3.8 for high-throughput 1M-context agentic work; top use case is cheap multimodal coding.
- **Provider / access:** Google Gemini API `gemini-3.7-flash`, OpenCode Zen `opencode/gemini-3.7-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.7-flash`.
- **Release / knowledge:** 2026 (model card).
- **IDs:** `google/gemini-3.7-flash`, `opencode/gemini-3.7-flash` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $1.50 input / $7.50 output per 1M (Zen table). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (model card; AA same); Vals **77.5%**
- GDPval-AA **1525** (model card)
- OSWorld 2.0 **47.9%**, AutomationBench **30.4%** (model card)
- Terminal-Bench 3.0 **14.9%** (model card) — hardest suite caveat.
- AA-AnalystAgent **60.0%** (AA)

Reasoning / knowledge:

- AA-GPQA Diamond **94.5%** (AA); Vals **93.9%**
- AA-HLE **47.9%** (AA); Intelligence **39.1**, BenchLM **66.5 #24** (AA; BenchLM)
- ARC-AGI-2 **84.6%** (ARC Prize)
- AA-LCR **81.7%**, MRCR 64–128K **97%** (AA; model card)
- CritPt **14.3%** (AA)

Coding:

- DeepSWE **65.3%** (model card)
- LiveCodeBench (Vals) **88.7%**, SWE-bench (Vals) **80.8%**
- AA Coding Index **76.1** (AA)
- FrontierSWE **20.3%** (Proximal)

Long context:

- 1M context; MRCR 64–128K **97%**, LCR **81.7%** (model card; AA)

Multimodal:

- MMMU-Pro **85.5%** (AA)
- CharXiv **88.7%**, LVBench **85.4%** (model card)
- ParseBench **70.37%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 85.8% and GDPval 1525 are strong for Flash; capped by AutomationBench 30.4% and TB3.0 14.9%.
- **Reasoning: 92/100.** GPQA 94–95%, ARC 84.6%, LCR 81.7% are Pro-class; capped by CritPt 14.3%.
- **Context window: 96/100.** 1M with MRCR 97% at 64–128K and LCR 81.7%.
- **Multimodal: 78/100.** Image in, text out; MMMU 85.5%, CharXiv 88.7%, LVBench 85.4% excellent but image-only.
- **Coding: 92/100.** LiveCode 88.7%, SWE Vals 80.8%, DeepSWE 65.3% meet frontier refs; capped by FrontierSWE 20.3%.
- **Cost efficiency: 66/100.** $1.50/$7.50 per 1M — same anchor as 3.8 Flash.
- **Overall Score: 89/100.** Mean (88+92+96+78+92)/5 = 89.2 → 89; best-fit fast 1M coder.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google model card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [BenchLM — Gemini 3.7 Flash](https://benchlm.ai/models/gemini-3-7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
