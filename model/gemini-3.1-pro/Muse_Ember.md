# Gemini 3.1 Pro — findings by Crouton Alpha

- Source: Google/Gemini 3.1 Pro
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's proprietary 1M-context reasoning model for multimodal enterprise and coding work; superseded by Gemini 4 Argon in the lineup but still a strong all-rounder.
- **Provider / access:** Google Gemini API `gemini-3.1-pro-preview`, OpenCode Zen `opencode/gemini-3.1-pro` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.1-pro`.
- **Release / knowledge:** 2026-02-19 release (AA; Google blog).
- **IDs:** `google/gemini-3.1-pro-preview`, `opencode/gemini-3.1-pro` (paid).
- **Context window:** 1M tokens total (AA; BenchLM).
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $12.00 output per 1M (Google API via AA; Zen ≤200K $2/$12, >200K $4/$18); cached 90% off.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **95.6%** (Meta AI: Muse Spark comparison chart)
- Terminal-Bench 2.1 (Vals): **70.8%** (Vals AI)
- GDPval-AA: **904** (Artificial Analysis)
- Claw-Eval: **57.8%** (Claw-Eval leaderboard)
- Terminal-Bench Hard: **53.8%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA-Diamond: **94.3%** (Meta chart); AA-GPQA Diamond **94.1%** (Artificial Analysis); Vals **95.5%**
- HLE w/o tools: **45.4%** (Meta chart); AA-HLE **47.0%**
- ARC-AGI-2: **77.1%** (Google blog)
- AA-LCR: **82.0%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)

Coding:

- LiveCodeBench Pro **82.9%** (Meta chart); LiveCodeBench (Vals) **88.5%**
- SWE-bench (Vals): **78.8%**
- AA Coding Index: **68.8** (Artificial Analysis)
- AA-SciCode: **58.7%** (Artificial Analysis)
- Vibe Code Bench: **32.03%** (Vals AI)

Long context:

- 1M context (AA; BenchLM)
- AA-LCR **82.0%** (Artificial Analysis)

Multimodal:

- MMMU-Pro **83.9%** (Meta chart); AA-MMMU-Pro **82.4%**
- CharXiv **80.2%**, ScreenSpot Pro **84.4%** (Meta chart)
- Inputs include speech + video (AA technical specs) — multimodal inputs broad, text-only output.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ²-bench 95.6% and Terminal-Bench Hard 53.8% show heavy-harness tool strength; capped by GDPval-AA 904 (mid-tier) and BenchLM Agentic Index 10.3.
- **Reasoning: 92/100.** GPQA ~94–95%, HLE ~47%, LCR 82% and ARC-AGI-2 77.1% are frontier; capped by CritPt 17.7% and FrontierMath Tier 4 26.8%.
- **Context window: 96/100.** Native 1M with 82% LCR; capped below the ≥98%-retrieval tier for lack of 512K+ retrieval proof.
- **Multimodal: 80/100.** Text/image/speech/video in (widest input set in this batch) with MMMU-Pro 83–84% and ScreenSpot 84%; text-only output keeps it below full omni.
- **Coding: 88/100.** LiveCodeBench 83–89% and SWE-bench 78.8% are strong; capped by Vibe Code Bench 32% and ScarfBench 37.6%.
- **Cost efficiency: 70/100.** $2/$12 per 1M (Zen), blended $1.74; between $1.25/$4.25 (~88) and $3/$15 (~60), so ~70.
- **Overall Score: 89/100.** Mean (88+92+96+80+88)/5 = 88.8 → 89; best-fit multimodal enterprise coder at moderate price.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google blog, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Artificial Analysis — Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [BenchLM — Gemini 3.1 Pro](https://benchlm.ai/models/gemini-3-1-pro)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
