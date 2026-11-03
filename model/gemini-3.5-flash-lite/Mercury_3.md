# Gemini 3.5 Flash-Lite — findings by Mercury 3

- Source: Google/Gemini 3.5 Flash-Lite
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's fast, cheap tier of the Gemini 3.5 Flash family (released 2026-07-21): 1M context with full omni input (text/image/speech/video), 402 t/s (#4 speed), moderate agentic (OSWorld-Verified 74%, SWE Pro 54.2%), $0.30/$2.50 — a high-volume latency-sensitive workhorse, superseded by Gemini 3.8 Flash-Lite.
- **Provider / access:** Gemini API (`gemini-3.5-flash-lite`), Vertex AI; 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not published.
- **IDs:** `gemini-3.5-flash-lite` (Gemini API; reasoning).
- **Context window:** 1,048,576 tokens (1M) total; max output 65,536.
- **Modalities:** text + image + speech + video input, text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.30 input / $2.50 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google) / 50.2% (Vals); OSWorld-Verified: **74%**; GDPval-AA: **1139 Elo** (24.2% normalized); AA Agentic Index: 15.9%; EnterpriseOps-Gym: 42.3%

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (AA/Vals); HLE: **18.8%** (AA); MMLU-Pro: 85.8% (Vals)
- AA II: **12** (#22/26; AA); AA-LCR: **76.0%**; CritPt: 0.0%; FrontierMath v2 Tiers 1–3 25.97%, Tier 4 0.0% (Epoch AI)
- AA-Omniscience: accuracy 26.5%, hallucination rate 26.7%

Coding:

- SWE-bench Pro: **54.2%**; Terminal-Bench 2.1 54.0%; LiveCodeBench: **79.0%** (Vals); SWE-bench: 75.0% (Vals); AA Coding Index: 49.3%; AA-SciCode: 41.3%

Long context:

- 1M window; MRCRv2: **72.2%**; AA-LCR 76.0%.

Multimodal:

- text/image/speech/video in; MMMU-Pro 79.0% (AA); ParseBench 59.66%; no verified video benchmark row found in sources reviewed.

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld-Verified 74% solid; capped by TB2.1 54%, GDPval 24.2%, Agentic Index 15.9%, and EnterpriseOps 42.3%.
- **Reasoning: 71/100.** GPQA 83.8%, LCR 76%; capped by II 12, HLE 18.8%, CritPt 0%, and FrontierMath 26%.
- **Context window: 85/100.** 1M with decent MRCRv2 72.2% and LCR 76%.
- **Multimodal: 88/100.** Full omni input (text/image/speech/video); text-only output caps it.
- **Coding: 73/100.** SWE Pro 54.2%, LCB 79%; capped by Coding Index 49.3%, SciCode 41.3%, and TB2.1 54%.
- **Cost efficiency: 75/100.** $0.30/$2.50 — expensive relative to class (median $0.23/$0.83) despite 402 t/s.
- **Overall Score: 77/100.** Mean of (70+71+85+88+73)/5 = 77.4 → 77. A fast omni workhorse; low reasoning rows and pricier than peers cap it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google Gemini 3.5 Flash-Lite blog via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1 54 vs 50.2) listed side by side.
- Reference URLs:
  - [Gemini 3.6 Flash, 3.5 Flash-Lite, 3.5 Flash Cyber (Google)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [Gemini 3.5 Flash-Lite — Artificial Analysis model page ($0.30/$2.50, 1M, II 12)](https://artificialanalysis.ai/models/gemini-3-5-flash-lite)
  - [Gemini 3.5 Flash-Lite — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-5-flash-lite)
  - [Gemini 3.5 Flash-Lite — Vals AI model page](https://www.vals.ai/models/google_gemini-3.5-flash-lite)
