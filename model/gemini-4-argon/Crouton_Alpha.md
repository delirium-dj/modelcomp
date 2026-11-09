# Gemini 4 Argon — findings by Crouton Alpha

- Source: Google/Gemini 4 Argon
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's proprietary reasoning flagship for agentic long-context work, enterprise automation, and multimodal vision; top use case is 1M-context coding and knowledge tasks.
- **Provider / access:** Google Gemini API `gemini-4-argon`, OpenCode Zen `opencode/gemini-4-argon` via `https://opencode.ai/inference/google/v1beta/models/gemini-4-argon`.
- **Release / knowledge:** 2026-09-30 release (Artificial Analysis; DeepMind eval methodology page).
- **IDs:** `google/gemini-4-argon`, `opencode/gemini-4-argon` (Zen 50% promo through 2026-11-30).
- **Context window:** 1M tokens total (Artificial Analysis; BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** Google Gemini API $2.00/$10.00 per 1M (BenchLM; Zen 50%-off promo through 2026-11-30, then $4/$20); cached $0.10. Paid only.
- **Architecture:** Proprietary, parameter count not disclosed (AA: proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (Google: Gemini 4 Argon evaluation methodology)
- AutomationBench: **51.3%** (Google eval methodology); AA AutomationBench **77.5%** (Artificial Analysis)
- OSWorld 2.0: **69.2%** (Google eval methodology)
- Agents' Last Exam: **39.5%** (Google eval methodology)

Reasoning / knowledge:

- AA-HLE: **57.1%** (Artificial Analysis: humanitys-last-exam leaderboard)
- AA-LCR: **79.7%** (Artificial Analysis model benchmarks)
- CritPt: **27.1%** (Artificial Analysis)
- ARC-AGI-2: **91.3%** (ARC Prize published results)
- Artificial Analysis Intelligence Index: **50.4 / 50, #15 of 69; BenchLM 82.1/100 #5 of 1017** (AA; BenchLM)

Coding:

- DeepSWE: **77.9%** (Google eval methodology)
- Vibe Code Bench: **91.90%** (Google eval methodology)
- FrontierSWE v2: **55.0%** (Proximal: FrontierSWE v2)
- AA-SciCode: **61.8%** (Artificial Analysis)
- FrontierCode 2.0: **26.3%** (Cognition: FrontierCode 2.0)

Long context:

- GraphWalks BFS 128K: **99.7%**; GraphWalks BFS 256K–1M: **84.2%** (Google eval methodology)
- AA-LCR **79.7%** (Artificial Analysis)

Multimodal:

- LVBench: **91.7%** (Google eval methodology)
- Chartography (no tools): **71.6%** (Google eval methodology)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 57.4%, AA AutomationBench 77.5% and OSWorld 2.0 69.2% show frontier tool use; capped by harness variance (51.3% on Google's own AutomationBench cut).
- **Reasoning: 94/100.** HLE 57.1%, LCR 79.7%, ARC-AGI-2 91.3% and Intelligence Index 50 (#15, median 37) are frontier-level; capped by CritPt 27.1% on hard physics.
- **Context window: 97/100.** Native 1M with 99.7% retrieval at 128K and 84.2% across 256K–1M is best-in-class; only one point held back for CritPt/LCR tail.
- **Multimodal: 72/100.** Text + image in, text out; LVBench 91.7% shows elite vision, but no video/audio/non-text output, so methodology caps at image-in tier.
- **Coding: 93/100.** DeepSWE 77.9% and Vibe Code Bench 91.9% exceed frontier refs; capped by FrontierCode 2.0 26.3% and FrontierSWE 55%.
- **Cost efficiency: 73/100.** Zen promo $2/$10 per 1M through 2026-11-30 ($0.03 per 10K-in/1K-out request); standard rises to $4/$20 from 2026-12-01, which alone would be ~55.
- **Overall Score: 89/100.** Mean (90+94+97+72+93)/5 = 89.2 → 89; best-fit 1M-context reasoning at promo pricing.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google/DeepMind evaluation methodology, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Argon evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-argon)
  - [Artificial Analysis — Gemini 4 Argon (High)](https://artificialanalysis.ai/models/gemini-4-argon)
  - [BenchLM — Gemini 4 Argon](https://benchlm.ai/models/gemini-4-argon)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Google Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
