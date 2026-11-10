# Claude Fable 5 — findings by Crouton Alpha

- Source: Anthropic/Claude Fable 5
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's predecessor Fable reasoning model for coding and knowledge work; superseded by 5.1 with cheaper cache reads but same $10/$50 tier.
- **Provider / access:** Anthropic Claude API `claude-fable-5`, OpenCode Zen `opencode/claude-fable-5` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026-07 (system card).
- **IDs:** `anthropic/claude-fable-5`, `opencode/claude-fable-5` (paid).
- **Context window:** 1M+ tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $10.00 input / $50.00 output / $1.00 cached-read per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (system card); AA TB2.1 **84.6%**
- GDPval-AA **1747** (system card)
- τ²-bench **98.5%** (AA tau2 leaderboard)
- Terminal-Bench Hard **62.9%** (AA)
- OSWorld-Verified **85%** (system card)

Reasoning / knowledge:

- GPQA Diamond **92.6%** (AA); Vals **93.2%**
- HLE **55.5%** (AA); Intelligence **49.6**, BenchLM **80.74 #8** (AA; BenchLM)
- ARC-AGI-2 **89.2%** (ARC Prize)
- AA-LCR **82.3%** (AA)
- CritPt **28.6%** (AA)

Coding:

- SWE-bench Verified **95%**, Vals SWE **95.0%** (system card; Vals)
- SWE-Pro **80%** (system card)
- LiveCodeBench (Vals) **89.8%** (Vals)
- FrontierSWE **47.0%** (Proximal)
- CursorBench 3.2 **70.5%** (Cursor)

Long context:

- 1M+ context; AA-LCR **82.3%** (AA)

Multimodal:

- ParseBench **69.79%** (LlamaIndex)
- Design Arena **1294** (OpenRouter)
- Blueprint-Bench 2 **38.6%** (system card)

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 84.3%, GDPval 1747, τ²-bench 98.5%, Terminal-Bench Hard 62.9% are frontier; capped by Terminal-Bench 3.0 34% on newest suite.
- **Reasoning: 92/100.** GPQA 92–93%, HLE 55.5%, ARC-AGI-2 89.2%, LCR 82.3% are frontier; capped by CritPt 28.6%.
- **Context window: 97/100.** 1M+ with LCR 82.3% — best-in-class; only one point held for lack of 512K+ MRCR proof.
- **Multimodal: 70/100.** Image in, text out; ParseBench 69.8% and Design Arena 1294 solid but image-only caps it.
- **Coding: 93/100.** SWE Verified 95%, SWE-Pro 80%, LiveCode 89.8% meet frontier refs; capped by FrontierCode 53.5%.
- **Cost efficiency: 30/100.** $10/$50 per 1M — methodology ~30 anchor.
- **Overall Score: 89/100.** Mean (93+92+97+70+93)/5 = 89.0 → 89; best-fit Fable agent predecessor to 5.1.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic system card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 and Mythos 5 System Card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [BenchLM — Claude Fable 5](https://benchlm.ai/models/claude-fable)
  - [Artificial Analysis — Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
