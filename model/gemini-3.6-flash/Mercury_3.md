# Gemini 3.6 Flash — findings by Mercury 3

- Source: Google/Gemini 3.6 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's workhorse Flash model (released 2026-07-21, superseded by 3.7/3.8 Flash), built on 3.5 Flash with better coding, knowledge work, and token efficiency. Very fast (194 t/s), cheap, 1M context, omni input; a solid mid-tier budget model.
- **Provider / access:** Gemini API (`gemini-3.6-flash`), Google AI Studio, Gemini app/Enterprise, Antigravity; 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff March 2026 (parts limited to Jan 2025 per model card).
- **IDs:** `gemini-3.6-flash` (Gemini API; high/medium reasoning tiers).
- **Context window:** 1,000,000 tokens (1M) total; max output 64K.
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $0.75 input / $3.75 output per 1M tokens (AA; DeepMind card lists $1.50/$7.50 no-caching — provider-tier variance), 80% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** (DeepMind card — leader among compared models); GDPval-AA v2: **1421 Elo** (card) vs **39.2%** normalized (AA)
- Terminal-Bench 2.1: **78.0%** (DeepMind card, Terminus-2 harness) vs **73.8%** (Vals — conflicting harnesses)
- MLE-Bench: **63.9%** (DeepMind card); AA Agentic Index: **30.1%**; MazeBench ASCII: 0%

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA) vs **93.4%** (Vals); HLE: **40.8%** (AA); MMLU-Pro: **89.3%** (Vals)
- GDM-MRCR v2 (8-needle): **91.8%** @128K, **54.0%** @1M (DeepMind card); AA-LCR: **80.0%**; CritPt: **10.6%**
- ARC-AGI-1: **91.17%**; ARC-AGI-2: **60.4%** (ARC Prize)
- Artificial Analysis Intelligence Index: **34.0%**; AA-Omniscience: accuracy **50.0%**, hallucination rate **55.6%**
- FrontierMath v2: Tiers 1–3 **58.95%**, Tier 4 **21.95%** (Epoch AI)

Coding:

- SWE-Bench Pro: **58.7%**; DeepSWE: **49.0%**; Terminal-Bench 2.1 78.0% (DeepMind card)
- SWE-bench: **79.6%** (Vals); LiveCodeBench: **88.1%** (Vals); CursorBench 3.2: **53.5%** (Cursor); AA-SciCode: **53.4%**; AA Coding Index: **69.2%**

Long context:

- 1M window; MRCR 91.8% @128K but 54.0% @1M (deep-retrieval drop); AA-LCR 80%.

Multimodal:

- text/image/speech/video in; CharXiv 85.2% (no tools)/89.4% (tools); MMMU-Pro 83.2%; ParseBench 69.38%.

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 83% and MLE-Bench 63.9% are strong; capped by GDPval 1421, Agentic Index 30.1%, and TB2.1 harness variance (73.8–78%).
- **Reasoning: 82/100.** GPQA ~93%, MRCR 91.8% @128K; capped by HLE 40.8%, ARC-AGI-2 60.4%, CritPt 10.6%, and II 34.
- **Context window: 89/100.** 1M with good 128K retrieval but a 54% @1M drop — below the top band at depth.
- **Multimodal: 92/100.** Full omni input with strong chart reasoning (CharXiv 89.4% tools); text-only output caps it.
- **Coding: 82/100.** SWE-bench Pro 58.7%, LiveCodeBench 88.1%, SWE-bench 79.6%; capped by DeepSWE 49% and CursorBench 3.2 53.5%.
- **Cost efficiency: 92/100.** $0.75/$3.75 with 80–90% cache discount — outstanding value for its capability.
- **Overall Score: 85/100.** Mean of (80+82+89+92+82)/5 = 85.0 → 85. A fast, cheap omni workhorse; a step below 3.7/3.8 Flash in agentic/coding ceiling.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google DeepMind model card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, GDPval scale) listed side by side.
- Reference URLs:
  - [Gemini 3.6 Flash model card (Google DeepMind, 2026-07-21)](https://deepmind.google/models/model-cards/gemini-3-6-flash/)
  - [Gemini 3.6 Flash evals methodology (Google DeepMind)](https://deepmind.com/models/evals-methodology/gemini-3-6-flash)
  - [Gemini 3.6 Flash — Artificial Analysis model page ($0.75/$3.75, 1M, 194 t/s)](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [Gemini 3.6 Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-6-flash)
  - [Gemini 3.6 Flash — Vals AI model page](https://www.vals.ai/models/google_gemini-3.6-flash)
  - [ARC Prize results — Gemini 3.6 Flash](https://arcprize.org/results/gemini-3-6-flash)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
