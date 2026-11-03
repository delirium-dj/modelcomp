# Gemma 4 31B — findings by Mercury 3

- Source: Google/Gemma 4 31B
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights (Apache 2.0) dense multimodal model (released 2026-04-02): 30.7B params, text/image/video input, 256K context, strong agent security (b3 83%), good coding (LCB 80%), free ($0) — a deploy-friendly open mid-size workhorse.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-31B-it`), self-host; 12 API providers tracked by Artificial Analysis ($0 routes).
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not published.
- **IDs:** `google/gemma-4-31B-it` (HF; reasoning variant; siblings E2B/E4B/12B/26B-A4B).
- **Context window:** 262,144 tokens (256K) total; max output 32,768 (models.dev).
- **Modalities:** text + image + video input, text output; reasoning; tool calls.
- **Pricing (as of 2026-11-03):** $0.00 input / $0.00 output (free routes); Apache 2.0 open weights.
- **Architecture:** 30.7B dense; Apache 2.0, open weights.

### Raw benchmarks found

Agent / tool use:

- b3 Agent Security: **83.0%**; Cyber Misuse Refusal: **84.0%**; τ²-bench: **59.9%** (AA); ITBench-AA: 37.3%; GERT Labs: 35.26%
- GDPval-AA: 755 (5.9%); AA Agentic Index: 6.7%

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (card) / 85.7% (AA); MMLU-Pro: 85.2%; HLE: **26.5%** (19.5% w/o tools; AA 23.6%); AA-IFBench: 75.6%
- AA-LCR: **69.7%**; CritPt: 1.4%; MRCRv2: **66.4%**

Coding:

- LiveCodeBench v6: **80.0%**; React Native Evals: **75.2%**; SWE-Rebench: 41.6%; AA-SciCode: 45.5%; AA Coding Index: 43.4%

Long context:

- 256K window; MRCRv2 66.4%; AA-LCR 69.7%.

Multimodal:

- text/image/video in; MMMU-Pro 76.9% (card) / 73.4% (AA); ParseBench 62.40%.

### Normalized scores (1–100)

- **Tool use: 68/100.** b3 83% and cyber refusal 84% strong; capped by GDPval 5.9%, Agentic Index 6.7%, τ² 59.9%, and ITBench 37.3%.
- **Reasoning: 77/100.** GPQA 85.7%, MMLU-Pro 85.2%, MRCRv2 66.4%; capped by HLE 23.6%, CritPt 1.4%, and LCR 69.7%.
- **Context window: 82/100.** 256K with verified MRCRv2 66.4%.
- **Multimodal: 84/100.** Image + video input with solid MMMU-Pro 76.9%; text-only output.
- **Coding: 76/100.** LCB 80%, React Native 75.2%; capped by coding index 43.4%, SciCode 45.5%, and SWE-Rebench 41.6%.
- **Cost efficiency: 95/100.** $0/$0 free routes + Apache 2.0 — exceptional value; slow 35.5 t/s.
- **Overall Score: 77/100.** Mean of (68+77+82+84+76)/5 = 77.4 → 77. A solid open mid-size workhorse; weak agentic/knowledge-work rows are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google Gemma 4 model card/blog, Artificial Analysis model page/leaderboards, BenchLM aggregation); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemma 4 31B model card (Hugging Face)](https://huggingface.co/google/gemma-4-31B-it)
  - [Gemma 4 blog (Google)](https://huggingface.co/blog/gemma4)
  - [Gemma 4 31B — Artificial Analysis model page ($0/$0, 256K, 30.7B, Apache 2.0)](https://artificialanalysis.ai/models/gemma-4-31b)
  - [Gemma 4 31B — BenchLM benchmark aggregation](https://benchlm.ai/models/gemma-4-31b)
