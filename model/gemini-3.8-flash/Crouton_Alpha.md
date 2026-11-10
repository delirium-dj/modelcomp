# Gemini 3.8 Flash — findings by Crouton Alpha

- Source: Google/Gemini 3.8 Flash
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's fast Flash reasoning model for high-throughput agentic and multimodal coding; top use case is cost-sensitive 1M-context work.
- **Provider / access:** Google Gemini API `gemini-3.8-flash`, OpenCode Zen `opencode/gemini-3.8-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.8-flash`.
- **Release / knowledge:** 2026 (model card; AA).
- **IDs:** `google/gemini-3.8-flash`, `opencode/gemini-3.8-flash` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $1.50 input / $7.50 output per 1M (Zen table); BenchLM $1.50/$7.50 cached $0.15. Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (model card); Vals TB2.1 **81.3%**; AA TB2.1 **87.6%**
- GDPval-AA **1545** (model card)
- OSWorld 2.0 **59.0%** (model card)
- Finance Agent v2 **61.4%** (model card)
- Terminal-Bench 4.0 **19.1%** (model card); AA TB4.0 **19.7%** — major caveat.
- AA Tau3 **44.9%** (Artificial Analysis)

Reasoning / knowledge:

- AA-GPQA Diamond **95.3%** (Artificial Analysis); Vals **94.4%**
- AA-HLE **47.8%**, HLE-Verified **54.9%** (AA; model card)
- ARC-AGI-2 **89.2%** (ARC Prize)
- AA-LCR **81.3%** (Artificial Analysis)
- Intelligence Index **30.9**; BenchLM **66.79 #22** (AA; BenchLM)

Coding:

- DeepSWE **73.8%** (DeepSWE v1.1 leaderboard)
- LiveCodeBench (Vals) **89.5%**; SWE-bench (Vals) **80.0%**
- AA Coding Index **76.3** (Artificial Analysis)
- CursorBench 3.2 **69.2%** (Cursor)
- AA-SciCode **56.6%** (Artificial Analysis)

Long context:

- 1M context; AA-LCR **81.3%** (Artificial Analysis); MLCR-AA **10.6%**

Multimodal:

- AA-MMMU-Pro **85.6%** (Artificial Analysis)
- CharXiv **86.2%**, LVBench **87.1%** (model card)
- ExtractBench **80.71%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 87–89% and GDPval 1545 are frontier for Flash; severely capped by Terminal-Bench 4.0 19.1% (newest harness gap).
- **Reasoning: 92/100.** GPQA 95.3%, ARC-AGI-2 89.2%, HLE 48–55% and LCR 81.3% are Pro-class; capped by CritPt 18.3%.
- **Context window: 96/100.** 1M native with LCR 81.3% strong; capped by MLCR-AA 10.6%.
- **Multimodal: 78/100.** Image in, text out; MMMU-Pro 85.6%, LVBench 87.1%, CharXiv 86.2% are excellent vision, but image-only caps the tier.
- **Coding: 93/100.** DeepSWE 73.8%, LiveCodeBench 89.5%, SWE-bench 80% meet frontier coding refs; capped by FrontierSWE 19.6%.
- **Cost efficiency: 66/100.** $1.50/$7.50 per 1M — Zen same rate; between $1.25/$4.25 (~88) and $3/$15 (~60), with high output price pulling down, so ~66.
- **Overall Score: 89/100.** Mean (88+92+96+78+93)/5 = 89.4 → 89; best-fit fast 1M multimodal coder.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google model card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [BenchLM — Gemini 3.8 Flash](https://benchlm.ai/models/gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
