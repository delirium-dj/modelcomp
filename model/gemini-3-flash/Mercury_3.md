# Gemini 3 Flash — findings by Mercury 3

- Source: Google/Gemini 3 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (preview)
- **Short description:** Google's Dec 2025 Flash-tier model (preview released 2025-12-17, superseded by 3.5/3.6/3.7/3.8 Flash). Very fast (190.6 t/s) and cheap ($0.50/$3.00) with 1M context and omni input, but its agentic/reasoning profile is well below later Flash releases.
- **Provider / access:** Gemini API (`gemini-3-flash-preview`), Google AI Studio, Gemini app; 2 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Preview released 2025-12-17; knowledge cutoff January 1, 2025.
- **IDs:** `gemini-3-flash-preview` (Gemini API; non-reasoning + reasoning variants).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed (65K per models.dev family block).
- **Modalities:** text + image + speech + video input, text output; non-reasoning default variant (reasoning variant exists); tool calls.
- **Pricing (as of 2026-11-03):** $0.50 input / $3.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **49.2%**; τ²-bench: **43.3%** (AA); GERT Labs: 56.63%; JobBench: **11.4%**; Terminal-Bench 2.1 (Vals): **53.9%**
- No GDPval-AA/OSWorld figure verified in sources reviewed

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA) vs **87.9%** (Vals); HLE: **15.0%** (AA); MMLU-Pro: 88.6% (Vals)
- AA-LCR: **55.3%**; CritPt: **1.4%**; Artificial Analysis Intelligence Index: **17.9%**
- FrontierMath v2: Tiers 1–3 **51.23%**, Tier 4 **17.07%** (Epoch AI); Global-MMLU-Lite: 92.7%
- AA-Omniscience: accuracy 45.8%, hallucination rate **92.4%** (very high)

Coding:

- LiveCodeBench: **85.6%**; SWE-bench: **75.0%**; Vibe Code Bench: **20.20%** (Vals)

Long context:

- 1M window; AA-LCR 55.3% — weak at depth.

Multimodal:

- text/image/speech/video in; MMMU-Pro 78.6%; ParseBench 75.05%.

### Normalized scores (1–100)

- **Tool use: 60/100.** Mid agentic (Claw-Eval 49.2%, τ² 43.3%); capped by JobBench 11.4%, TB2.1 53.9%, and no GDPval/OSWorld figures.
- **Reasoning: 68/100.** GPQA 81–88% decent; capped by HLE 15%, CritPt 1.4%, II 17.9, and the 92.4% hallucination rate.
- **Context window: 78/100.** 1M but weak LCR 55.3% and no deep-retrieval figure.
- **Multimodal: 91/100.** Full omni input with acceptable visual reasoning (MMMU-Pro 78.6%); text-only output caps it.
- **Coding: 77/100.** LiveCodeBench 85.6% and SWE-bench 75% solid; capped by Vibe Code 20.2% and no agentic-coding figure.
- **Cost efficiency: 95/100.** $0.50/$3.00 with 90% cache discount — excellent value; 190.6 t/s.
- **Overall Score: 75/100.** Mean of (60+68+78+91+77)/5 = 74.8 → 75. A cheap, fast omni workhorse from Dec 2025; later Flash releases are major upgrades.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Primary evidence is the non-reasoning variant; a reasoning variant exists but lacks verified separate public benchmark rows.
- Reference URLs:
  - [Gemini 3 Flash — Artificial Analysis model page ($0.50/$3.00, 1M, omni input, 190.6 t/s, cutoff Jan 2025)](https://artificialanalysis.ai/models/gemini-3-flash)
  - [Gemini 3 Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-flash)
  - [Gemini 3 Flash — Vals AI model page](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
