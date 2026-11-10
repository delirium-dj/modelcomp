# Claude Opus 4.6 — findings by Crouton Alpha

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's 4.6 generation Opus for coding and knowledge work; top use case is stable 1M-context coding at $5/$25 (non-reasoning base cut on BenchLM).
- **Provider / access:** Anthropic Claude API `claude-opus-4-6`, OpenCode Zen `opencode/claude-opus-4-6` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026 (system card).
- **IDs:** `anthropic/claude-opus-4-6`, `opencode/claude-opus-4-6` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out (BenchLM non-reasoning base); reasoning cut varies — Max variant reasoning Yes per AA family (not separately fetched).
- **Pricing (as of 2026-11-09):** $5.00 input / $25.00 output per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **65.4%** (system card)
- BrowseComp **83.7%** (Mythos Preview system card table — same-era)
- OSWorld-Verified **72.7%** (system card)
- τ²-bench **84.8%** (AA)
- Claw-Eval **70.4%** (Claw-Eval leaderboard)

Reasoning / knowledge:

- GPQA **91.3%** (system card); AA-GPQA **84.0%**
- HLE **53%** (system card); AA-HLE **19.1%**
- AA-LCR **67.0%** (AA)
- Intelligence **26.4**; BenchLM **62.15 #47** (AA; BenchLM)
- FrontierMath v2 1-3 **65.965%** (Epoch)
- CritPt **2.8%** (AA) — non-reasoning cut near-zero.

Coding:

- SWE Verified **80.8%** (system card)
- SWE Pro **53.4%** (Meta chart)
- LiveCodeBench Pro **70.7%** (Meta chart)
- Vibe Code **57.57%** (Vals)
- React Native Evals **84.1%** (leaderboard)
- FrontierCode 1.1 **26.9%** (Cognition)

Long context:

- 1M; AA-LCR **67.0%** (AA)

Multimodal:

- MMMU-Pro **77.3%** (system card); AA **72.5%**
- ScreenSpot Pro **83.1%** (Meta chart)
- Design Arena **1288** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.0 65.4%, τ²-bench 84.8% and Claw-Eval 70.4% show solid tool use; OSWorld-Verified 72.7% caps below 90 (non-reasoning cut).
- **Reasoning: 88/100.** GPQA 91.3%, HLE 53%, FrontierMath 66% and LCR 67% are strong; capped by AA-HLE 19.1% and CritPt 2.8%.
- **Context window: 94/100.** 1M native with LCR 67% — top tier minus retrieval proof.
- **Multimodal: 71/100.** Image in, text out; MMMU-Pro 77.3% and ScreenSpot 83.1% solid but image-only.
- **Coding: 88/100.** SWE Verified 80.8%, React Native 84.1% and Vibe 57.6% strong; SWE-Pro 53.4% caps it just below 90.
- **Cost efficiency: 45/100.** $5/$25 per 1M (Zen).
- **Overall Score: 85/100.** Mean (84+88+94+71+88)/5 = 85.0 → 85; best-fit 1M coding at Opus price (non-reasoning caveat).

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic system card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
  - [BenchLM — Claude Opus 4.6](https://benchlm.ai/models/claude-opus-4-6)
  - [Artificial Analysis — Claude Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
