# Gemini 3.7 Flash — findings by Mercury 3

- Source: Google/Gemini 3.7 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-tier reasoning model (released 2026-08-13, superseded by 3.8 Flash), built on Gemini 3.6 Flash with algorithmic reasoning improvements and agentic video understanding. Cheap, fast, 1M context, omni input; a strong budget workhorse with mid-tier agentic scores.
- **Provider / access:** Gemini API (`gemini-3.7-flash`), Google AI Studio, Gemini app/Enterprise, Antigravity; 3 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff March 2026 (parts limited to Jan 2025 per model card).
- **IDs:** `gemini-3.7-flash` (Gemini API; high/medium reasoning tiers).
- **Context window:** 1,000,000 tokens (1M) total; max output 64K.
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** introductory $0.75 input / $3.75 output per 1M tokens through 2026-12-31, then $1.50/$7.50; 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (model card/AA) vs **77.5%** (Vals — conflicting harnesses); Terminal-Bench 3.0: **14.9%**
- GDPval-AA v2.1: **1525 Elo** (model card; AA normalized 44.6%); Harvey LAB-AA: **90.7%**; GDP.pdf: **34.0%**
- AutomationBench: **30.4%**; OSWorld 2.0: **47.9%**; Agents' Last Exam: **26.3%** (model card)
- AA Agentic Index: **36.4%**; AA-AnalystAgent: **60.0%**; ApprenticeBench GUI: 16%; MazeBench ASCII: 1%

Reasoning / knowledge:

- HLE-Verified: **53.6%** (model card) vs **47.9%** (AA)
- GPQA Diamond: **94.5%** (AA) vs **93.9%** (Vals); MMLU-Pro: **90.1%** (Vals)
- GDM-MRCR v2 (8-needle, 128K): **97.0%** (model card); AA-LCR: **81.7%**; CritPt: **14.3%**
- ARC-AGI-1: **95.5%**; ARC-AGI-2: **84.6%** (ARC Prize)
- Artificial Analysis Intelligence Index: **56** (model card, composite) vs **39.1%** (AA page — conflicting configurations)
- FrontierMath v2: Tiers 1–3 **71.58%**, Tier 4 **36.59%** (Epoch AI)
- AA-Omniscience: accuracy **55.3%**, hallucination rate **64.5%**; LABBench2 82.1%; BioMysteryBench human-solvable 87.1%

Coding:

- DeepSWE: **65.3%**; FrontierCode v1.1 Main: **43.6%**; Code Arena: **1588 Elo** (model card)
- AA Coding Index: **76.1%**; AA-SciCode: **57.2%**; SWE-bench: **80.8%** (Vals); LiveCodeBench: **88.7%** (Vals); FrontierSWE v2: **20.3%** (Proximal)

Long context:

- 1M window; MRCR 97% @128K; AA-LCR 81.7% — solid but sub-98% at depth.

Multimodal:

- text/image/speech/video in; LVBench **85.4%** (long video, model card); CharXiv 84.5% (no tools) / 88.7% (tools); MMMU-Pro 85.5%; ParseBench 70.66%.

### Normalized scores (1–100)

- **Tool use: 79/100.** Decent everyday agentic (TB2.1 ~85%, Harvey LAB 90.7%, AnalystAgent 60%); capped by TB3.0 14.9%, AutomationBench 30.4%, OSWorld 47.9%, and a weak Agentic Index 36.4%.
- **Reasoning: 83/100.** GPQA ~94%, MRCR 97% @128K, ARC-AGI-2 84.6%; capped by HLE 48–54%, CritPt 14.3%, and the divergent II (56 official vs 39.1 AA).
- **Context window: 92/100.** 1M with solid MRCR 97% @128K; 64K output cap and sub-98% deep retrieval hold it below the top band.
- **Multimodal: 91/100.** Full omni input with strong long-video understanding (LVBench 85.4%); text-only output caps it.
- **Coding: 85/100.** DeepSWE 65.3%, SWE-bench 80.8%, coding index 76.1%, LiveCodeBench 88.7%; capped by FrontierSWE v2 20.3% and FrontierCode main 43.6%.
- **Cost efficiency: 90/100.** Intro $0.75/$3.75 with 90% cache discount — excellent value through 2026-12-31; rises to $1.50/$7.50 after.
- **Overall Score: 86/100.** Mean of (79+83+92+91+85)/5 = 86.0 → 86. A cheap omni-input workhorse, best for high-volume/budget use; not a top agentic pick.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google DeepMind model card, Artificial Analysis model page/leaderboards, Vals AI, BenchLM aggregation, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (II, TB2.1, HLE, GPQA) listed side by side.
- Reference URLs:
  - [Gemini 3.7 Flash model card (Google DeepMind, 2026-08-13)](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Gemini 3.7 Flash evals methodology (Google DeepMind)](https://deepmind.com/models/evals-methodology/gemini-3-7-flash)
  - [Gemini 3.7 Flash — Artificial Analysis model page](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Gemini 3.7 Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-7-flash)
  - [Gemini 3.7 Flash — Vals AI model page](https://www.vals.ai/models/google_gemini-3.7-flash)
  - [ARC Prize results — Gemini 3.7 Flash](https://arcprize.org/results/google-gemini-3-7-flash)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
