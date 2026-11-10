# Gemini 3 Pro — findings by Crouton Alpha

- Source: Google/Gemini 3 Pro
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's prior Pro flagship for multimodal 1M–2M context work; top use case is enterprise multimodal reasoning superseded by 3.1 Pro/4 Argon.
- **Provider / access:** Google Gemini API `gemini-3-pro-preview`, OpenCode Zen `opencode/gemini-3-pro` (deprecated 2026-03-09 per Zen table).
- **Release / knowledge:** 2025-11-18 release; knowledge cutoff Jan 2025 (AA).
- **IDs:** `google/gemini-3-pro` (BenchLM), `google/gemini-3-pro-preview` (AA High).
- **Context window:** 2M total (BenchLM) / 1M (AA) — discrepancy noted; both published.
- **Modalities:** Text, image, speech, video in; text out; reasoning config differs by source (BenchLM Non-Reasoning base; AA High reasoning Yes); tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $12.00 output per 1M (AA). Paid, deprecated on Zen.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **87.1%** (AA)
- Gert Labs **63.23%** (Gert Labs)
- JobBench **11.4%** (JobBench paper — weak, capped)
- Terminal-Bench / GDPval: no verified public score found on BenchLM for this preview cut.

Reasoning / knowledge:

- AA-GPQA Diamond **90.8%** (AA)
- AA-HLE **39.7%** (AA)
- ARC-AGI-2 **31.1%** / ARC-AGI-1 **75.0%** (ARC Prize; Google)
- AA AIME 2025 **95.7%** (AA)
- Intelligence **28.0**; BenchLM **60.98 #51** (AA; BenchLM)
- CritPt **9.1%** (AA)

Coding:

- AA LiveCodeBench **91.7%** (AA leaderboard)
- Vibe Code Bench **14.30%** (Vals) — major drag for agentic coding.
- SWE-bench / DeepSWE: no verified public score found.

Long context:

- 1M/2M context (AA; BenchLM)
- AA-LCR **76.0%** (AA)

Multimodal:

- MMMU-Pro **81%** (Google blog); AA-MMMU-Pro **80.2%** (AA)
- Video-MME **88.4%** (Qwen card comparison table)
- MathVision **86.6%**, CountBench **97.3%** (Qwen card comparison table)
- AI2D **94.1%**, CharXiv **81.4%** (comparison tables)

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 87.1% is strong, but no Terminal-Bench/GDPval rows and JobBench 11.4% cap it to mid-70s.
- **Reasoning: 90/100.** GPQA 90.8%, AIME 95.7%, LCR 76% are frontier; ARC-AGI-2 31.1% and CritPt 9.1% indicate the non-thinking base cut lags.
- **Context window: 98/100.** 1M/2M published with LCR 76% — top tier either way.
- **Multimodal: 82/100.** Text/image/speech/video in; Video-MME 88.4%, MathVision 86.6%, MMMU-Pro 81% show broad omni strength; text-only output caps it.
- **Coding: 84/100.** LiveCodeBench 91.7% is frontier, but Vibe Code Bench 14.3% shows weak agentic coding — blended to mid-80s.
- **Cost efficiency: 70/100.** $2/$12 per 1M (AA) — same $2/$12 anchor as 3.1 Pro.
- **Overall Score: 85/100.** Mean (70+90+98+82+84)/5 = 84.8 → 85; best-fit multimodal long-context Pro predecessor.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google blog, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Artificial Analysis — Gemini 3 Pro Preview (High)](https://artificialanalysis.ai/models/gemini-3-pro)
  - [BenchLM — Gemini 3 Pro](https://benchlm.ai/models/gemini-3-pro)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
