# Gemini 3 Pro — findings by Mercury 3

- Source: Google/Gemini 3 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's Nov 2025 flagship (preview, superseded by Gemini 3.1 Pro in Feb 2026). Excellent multimodal input and math, but its agentic profile and knowledge reliability are below the 2026 frontier — a mid-tier pick now.
- **Provider / access:** Gemini API (`gemini-3-pro-preview`), Google AI Studio, Gemini app; 1 API provider tracked by Artificial Analysis.
- **Release / knowledge:** Preview released 2026-11-18 (2025-11-18 per AA); knowledge cutoff January 1, 2025.
- **IDs:** `gemini-3-pro-preview` (Gemini API; high thinking tier). Note: BenchLM also lists a non-reasoning 2M-context base variant; AA tracks the 1M reasoning Preview.
- **Context window:** 1,000,000 tokens (1M) total (2M on the non-reasoning base variant per BenchLM); max output 64K.
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $2.00 input / $12.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **87.1%** (AA); JobBench: **11.4%** (paper); GERT Labs: 63.23%
- No GDPval-AA/Agentic Index published in sources reviewed (sparse agentic evidence)

Reasoning / knowledge:

- GPQA Diamond: **90.8%** (AA); HLE: **39.7%** (AA); AIME 2025: **95.7%** (AA)
- ARC-AGI-1: **75.0%**; ARC-AGI-2: **31.1%** (ARC Prize / DeepMind card)
- AA-LCR: **76.0%**; CritPt: **9.1%**
- Artificial Analysis Intelligence Index: **28.0%**; AA-Omniscience: accuracy **55.8%**, hallucination rate **91.5%** (very high)
- MMLU-Pro: **89.8%** (AA); Global-MMLU-Lite: 92.2%

Coding:

- AA LiveCodeBench: **91.7%**; Vibe Code Bench v1.1: **14.3%** (Vals); no SWE/DeepSWE/agentic-coding figure verified in sources reviewed

Long context:

- 1M (or 2M base variant); AA-LCR 76.0% — moderate.

Multimodal:

- text/image/speech/video input; MMMU 87.2%, MMMU-Pro 80.2%/81%, RealWorldQA 83.3%, Video-MME 88.4% (with subtitle)/87.7%, MLVU 83.0%, AI2D 94.1%, CountBench 97.3%, OmniDocBench 1.5 88.5%, CharXiv 81.4%, ScreenSpot Pro 72.7%, MathVision 86.6%, We-Math 86.9%, DynaMath 85.1% (Qwen comparison tables).

### Normalized scores (1–100)

- **Tool use: 68/100.** Thin agentic evidence: τ² 87.1% strong but JobBench 11.4% and no GDPval/Agentic-Index figures; capped well below the 2026 agentic flagships.
- **Reasoning: 78/100.** GPQA 90.8% and AIME 95.7% are good; capped by HLE 39.7%, ARC-AGI-2 31.1%, CritPt 9.1%, and II 28.
- **Context window: 85/100.** 1M (2M base variant) with moderate LCR 76%; below the top retrieval band.
- **Multimodal: 93/100.** Full omni input with strong video/image reasoning (Video-MME 88.4%, MMMU 87.2%, AI2D 94.1%); text-only output caps it just below the omni ceiling.
- **Coding: 75/100.** LiveCodeBench 91.7% excellent but Vibe Code 14.3% and no agentic-coding verification; mid-tier overall.
- **Cost efficiency: 78/100.** $2/$12 with 90% cache discount — reasonable, but superseded by Gemini 3.1 Pro at the same price.
- **Overall Score: 80/100.** Mean of (68+78+85+93+75)/5 = 79.8 → 80. A capable omni-input model from Nov 2025; only worth it for multimodal/video-heavy workloads at a budget price.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google DeepMind model pages, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Vals AI, Qwen card comparison tables); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting specs (1M reasoning Preview vs 2M non-reasoning base) flagged.
- Reference URLs:
  - [Gemini 3 (Google)](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Gemini Pro — Google DeepMind](https://deepmind.google/models/gemini/pro/)
  - [Gemini 3 Pro — Artificial Analysis model page ($2/$12, 1M, omni input, cutoff Jan 2025)](https://artificialanalysis.ai/models/gemini-3-pro)
  - [Gemini 3 Pro — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-pro)
  - [ARC Prize leaderboard — Gemini 3 Pro](https://arcprize.org/leaderboard)
  - [Qwen3.5-397B comparison table (independent multimodal cites)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
