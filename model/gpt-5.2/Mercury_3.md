# GPT-5.2 — findings by Mercury 3

- Source: OpenAI/GPT-5.2
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (OpenAI hyphenated style: GPT-5.2)
- **Short description:** OpenAI's December 2025 frontier model (released 2025-12-11, superseded by GPT-5.4/5.5): strong math (AIME 2025 100%) and solid multimodal (MMMU 86.7%), but a 400K context cap and weaker agentic profile than its successors; $1.75/$14.
- **Provider / access:** OpenAI API (`gpt-5.2`), ChatGPT/Codex; 2 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.2` (OpenAI API; xhigh reasoning; cyber safeguards deployed at this generation).
- **Context window:** 400,000 tokens total; max output not disclosed (128K per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $1.75 input / $14.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **65.8%**; OSWorld-Verified: **47.3%**; τ²-bench: **84.8%** (AA); LifeVal: **49.3%**; GERT Labs: 46.54%; JobBench: 34.3%; TB Hard: 47%
- No GDPval-AA figure verified in sources reviewed (sparse agentic coverage)

Reasoning / knowledge:

- GPQA: **92.4%** (Qwen table) vs 90.3% (AA); AIME 2025: **100%** (OpenAI) / 99.0% (AA); AI Index: 30.4% (AA)
- ARC-AGI-1: **86.17%**; ARC-AGI-2: **52.9%**; AA-LCR: **82.7%**; CritPt: **11.6%**
- FrontierMath v2: Tiers 1–3 **67.4%**, Tier 4 **31.7%** (Epoch AI); MMLU-Pro: 87.4% (AA)
- AA-Omniscience: accuracy 44.3%, hallucination rate **81.2%** (very high)

Coding:

- SWE-bench Verified: **80%**; SWE-bench Pro: **55.6%**; Vibe Code Bench: **53.50%**; no TB/FrontierCode figure verified in sources reviewed

Long context:

- 400K window; AA-LCR 82.7%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU 86.7%, MMMU-Pro 79.5%, Video-MME 86.0% (w/ sub), VideoMMMU 85.9%, MLVU 85.6%, OmniDocBench 1.5 85.7%, RealWorldQA 83.3%, AI2D 92.2%, CountBench 91.9%, MathVision 83%, DynaMath 86.8%, CharXiv 82.1%.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 84.8% and LifeVal 49.3% decent; capped by OSWorld-Verified 47.3%, JobBench 34.3%, TB Hard 47%, and missing GDPval.
- **Reasoning: 87/100.** GPQA 92.4%, AIME 100%, LCR 82.7%; capped by ARC-AGI-2 52.9%, CritPt 11.6%, II 30.4, and hallucination rate 81.2%.
- **Context window: 78/100.** 400K (below the 1M class) with good LCR 82.7%.
- **Multimodal: 84/100.** Image input with strong video-adjacent visual scores (MMMU 86.7%, VideoMMMU 85.9%); no verified video input, text-only output.
- **Coding: 80/100.** SWE-bench Verified 80%, SWE-Pro 55.6%, Vibe 53.5%; no TB/FrontierCode verification.
- **Cost efficiency: 82/100.** $1.75/$14 with 90% cache discount — fair; 81.7 t/s.
- **Overall Score: 81/100.** Mean of (78+87+78+84+80)/5 = 81.4 → 81. A strong math-first 2025 flagship; the 400K cap and weak agentic profile date it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.2/5.4 pages, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Epoch AI, Qwen tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.2 (OpenAI, 2025-12-11)](https://openai.com/index/introducing-gpt-5-2/)
  - [GPT-5.2 — Artificial Analysis model page ($1.75/$14, 400K, cutoff Aug 2025)](https://artificialanalysis.ai/models/gpt-5-2)
  - [GPT-5.2 — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-2)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
