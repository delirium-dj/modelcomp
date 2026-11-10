# Claude Opus 4.7 — findings by Crouton Alpha

- Source: Anthropic/Claude Opus 4.7
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's 4.7 generation Opus for coding and knowledge work; top use case is 1M-context reasoning at $5/$25.
- **Provider / access:** Anthropic Claude API `claude-opus-4-7`, OpenCode Zen `opencode/claude-opus-4-7` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff Jan 2026 (AA Max).
- **IDs:** `anthropic/claude-opus-4-7`, `opencode/claude-opus-4-7` (paid).
- **Context window:** 1M tokens total (BenchLM base; AA Max).
- **Modalities:** Text and image in; text out; reasoning Yes (AA Max) / Non-Reasoning (BenchLM base cut — both variants tracked as one folder); tool calls yes.
- **Pricing (as of 2026-11-09):** $5.00 input / $25.00 output per 1M (Zen; AA $5/$25). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **74%** (AA non-reasoning benchmarks)
- Terminal-Bench Hard **54.5%** (AA)
- Terminal-Bench 2.1 (Vals) **68.5%** (Vals)
- OSWorld 2.0 **13.9%** (paper) — non-reasoning cut weak on computer use.
- GDPval-AA: no verified public score found on BenchLM cut.

Reasoning / knowledge:

- GPQA Diamond **88.5% / 90.2% Vals** (AA; Vals)
- AA-HLE **33.3%** (AA)
- AA-LCR **75.7%** (AA)
- Intelligence **30.9** (AA non-reasoning); BenchLM **65.07 #32** (BenchLM)
- CritPt **5.1%** (AA) — non-reasoning cut near-zero.
- FrontierMath v2 1-3 **70.175%** (Epoch)

Coding:

- SWE-bench (Vals) **82.0%**, LiveCodeBench (Vals) **85.1%**
- Vibe Code Bench **71.00%** (Vals) — notably higher than peers.
- React Native Evals **82.8%** (leaderboard)
- FrontierCode 1.1 **38.5%** (Cognition)

Long context:

- 1M; AA-LCR **75.7%** (AA)

Multimodal:

- AA-MMMU-Pro **76.4%** (AA)
- ParseBench **63.34%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 74% and TB Hard 54.5% show tool strength, but no GDPval row and OSWorld 13.9% (non-reasoning) cap it.
- **Reasoning: 86/100.** GPQA 88–90%, FrontierMath 70.2% and LCR 75.7% are strong for the base cut; capped by HLE 33.3% and CritPt 5.1%.
- **Context window: 95/100.** 1M with LCR 75.7%.
- **Multimodal: 71/100.** Image in, text out; MMMU-Pro 76.4% and ParseBench 63.3% solid but image-only.
- **Coding: 90/100.** Vibe Code 71%, LiveCode 85.1%, SWE Vals 82% and React Native 82.8% show strong coding for a non-reasoning base; capped by FrontierCode 38.5%.
- **Cost efficiency: 45/100.** $5/$25 per 1M (Zen/AA).
- **Overall Score: 83/100.** Mean (72+86+95+71+90)/5 = 82.8 → 83; best-fit 1M coding at Opus price (non-reasoning cut caveat).

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via BenchLM, Artificial Analysis, Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. BenchLM non-reasoning cut vs AA Max reasoning noted as variant split.
- Reference URLs:
  - [BenchLM — Claude Opus 4.7](https://benchlm.ai/models/claude-opus-4-7)
  - [Artificial Analysis — Claude Opus 4.7 (Max)](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
