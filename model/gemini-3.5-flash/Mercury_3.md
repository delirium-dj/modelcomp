# Gemini 3.5 Flash — findings by Mercury 3

- Source: Google/Gemini 3.5 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 2026 Flash-tier model (released 2026-05-19, superseded by 3.6/3.7/3.8 Flash), built on the Gemini 3 Flash reasoning foundation with thinking levels. Very fast (190.7 t/s), cheap ($1.50/$9.00), 1M context, omni input; a solid mid-tier workhorse.
- **Provider / access:** Gemini API (`gemini-3.5-flash`), Google AI Studio, Gemini app/Enterprise, AI Mode, Antigravity; 1 API provider tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-05-19; knowledge cutoff not published.
- **IDs:** `gemini-3.5-flash` (Gemini API; high/medium/low thinking levels).
- **Context window:** 1,000,000 tokens (1M) total; max output 64K.
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $1.50 input / $9.00 output per 1M tokens, 90% cache discount (blended ~$1.31).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%**; Toolathlon: **56.5%**; OSWorld-Verified: **78.4%**; Finance Agent v2: **57.9%**; GDPval-AA v2: **1656 Elo** (DeepMind card) vs 1345 (launch screenshots — conflicting) vs 42.2% normalized (AA)
- Terminal-Bench 2.1: **76.2%** (DeepMind card, Terminus-2) vs **74.2%** (Vals); τ²-bench: **95.3%** (AA)
- APEX-Agents-AA: 47.1%; AA Agentic Index: 27.3%; AA ITBench: 40.3%; AA EnterpriseOps-Gym: 50.1%; AA-AnalystAgent: 45.0%; MazeBench ASCII: 0%

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (AA) vs **92.7%** (Vals); HLE: **40.2%** (DeepMind card) vs 42.7% (AA); MMLU-Pro: 89.5% (Vals)
- ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%** (ARC Prize/DeepMind card)
- MRCR v2 (8-needle): **77.3%** @128K, **26.6%** @1M; AA-LCR: **69.3%**; CritPt: **13.1%**
- Artificial Analysis Intelligence Index: **50.2%**; IFBench: **76.3%**; FrontierMath v2 Tiers 1–3 **62.81%**, Tier 4 **26.83%** (Epoch AI)
- AA-Omniscience: accuracy 51.9%, hallucination rate 60.7%

Coding:

- SWE-Bench Pro: **55.1%**; Terminal-Bench 2.1 76.2%; SWE-bench: **78.8%** (Vals); LiveCodeBench: **87.6%** (Vals); CursorBench 3.1: 49.8% / 3.2: 48.8%; AA-SciCode: **53.9%**; Vibe Code Bench: 48.68%; AA Coding Index: **70.1%**

Long context:

- 1M window; MRCR 77.3% @128K but 26.6% @1M (deep drop); AA-LCR 69.3%.

Multimodal:

- text/image/speech/video in; CharXiv 84.2%; MMMU-Pro 83.6% (84.3% AA); Blueprint-Bench 2 33.6%; ExtractBench 79.84%; ParseBench 73.36%.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 83.6%, OSWorld-Verified 78.4%, Finance Agent 57.9%, τ² 95.3% — strong; capped by Agentic Index 27.3%, MazeBench 0%, and GDPval variance.
- **Reasoning: 82/100.** GPQA ~92.5%, ARC-AGI-2 72.1%, IFBench 76.3%; capped by HLE 40.2%, CritPt 13.1%, and II 50.2.
- **Context window: 84/100.** 1M with MRCR 77.3% @128K but a 26.6% @1M drop and LCR 69.3% — mid-tier retrieval.
- **Multimodal: 92/100.** Full omni input with good visual reasoning (MMMU-Pro 83.6%); text-only output caps it.
- **Coding: 82/100.** SWE-Bench Pro 55.1%, LiveCodeBench 87.6%, coding index 70.1%; capped by Vibe 48.68% and CursorBench ~49%.
- **Cost efficiency: 90/100.** $1.50/$9.00 with 90% cache discount and 190.7 t/s — excellent value.
- **Overall Score: 85/100.** Mean of (84+82+84+92+82)/5 = 84.8 → 85. A solid budget omni workhorse; later Flash releases are clear upgrades.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google DeepMind model card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting GDPval numbers (1656 vs 1345 vs 42.2%) listed side by side.
- Reference URLs:
  - [Gemini 3.5 Flash model card (Google DeepMind, 2026-05-19)](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
  - [Gemini 3.5 Flash evals methodology (Google DeepMind)](https://deepmind.com/models/evals-methodology/gemini-3-5-flash)
  - [Gemini 3.5 Flash — Artificial Analysis model page ($1.50/$9.00, 1M, omni, 190.7 t/s)](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [Gemini 3.5 Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-5-flash)
  - [Gemini 3.5 Flash — Vals AI model page](https://www.vals.ai/models/google_gemini-3.5-flash)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
