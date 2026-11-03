# Grok 4.5 — findings by Mercury 3

- Source: xAI/Grok 4.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 2026 frontier model (released 2026-07-08, superseded by Grok 4.6/4.7): strong coding (SWE Pro 64.7%, TB2.1 83.3%, VulcanBench 89.9%), GPQA 93.1%, 500K context, $2/$6 — a solid mid-frontier generation now superseded.
- **Provider / access:** xAI API (`grok-4.5`), x.ai, Cursor; 2 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-07-08; knowledge cutoff not published.
- **IDs:** `grok-4.5` (xAI API; reasoning effort low→xhigh, default high).
- **Context window:** 500,000 tokens total; max output not disclosed (500K output cap per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $2.00 input / $6.00 output per 1M tokens (<200K prompts; $4/$12 above), cached input $0.50.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI) vs **81.6%** (AA) vs **67.8%** (Vals — conflicting harnesses); TB3.0: 15.7%
- GDPval-AA: **1430 Elo** (AA; normalized 44.2%); AA Agentic Index: **42.1%**; EnterpriseOps-Gym: 40.8%; Tau3-Banking: 42.1%

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA) vs 92.9% (Vals); HLE: **42.7%**; MMLU-Pro: 89.2% (Vals)
- ARC-AGI-1: **85.67%**; ARC-AGI-2: **52.6%**; ARC-AGI-3: 0.3%
- AA-LCR: **79.3%**; CritPt: **15.4%**; AA II: **38.8%**; FrontierMath v2 Tiers 1–3 57.19%, Tier 4 24.39% (Epoch AI)
- AA-Omniscience: accuracy 51.6%, hallucination rate 54.1%

Coding:

- SWE-bench Pro: **64.7%**; SWE Multilingual: **78%**; Terminal-Bench 2.1 83.3%; CursorBench 3.2: **66.7%**; VulcanBench v3: **89.9%**; AA-SciCode: 55.0%
- LiveCodeBench: **87.4%**; SWE-bench: **86.6%** (Vals); AA Coding Index: **72.5%**; PostTrainBench v1.1: 23.4%

Long context:

- 500K window; AA-LCR 79.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; AA-MMMU-Pro 80.4%; Design Arena 1280 Elo.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 83.3% (xAI/AA) strong; capped by TB3.0 15.7%, Agentic Index 42.1%, EnterpriseOps 40.8%, and Vals TB2.1 67.8%.
- **Reasoning: 84/100.** GPQA 93.1%, LCR 79.3%, II 38.8, FrontierMath 57.2%; capped by ARC-AGI-2 52.6%, CritPt 15.4%, and HLE 42.7%.
- **Context window: 82/100.** 500K (below the 1M class) with good LCR 79.3%.
- **Multimodal: 84/100.** image input with solid MMMU-Pro 80.4%; text-only output.
- **Coding: 84/100.** SWE Pro 64.7%, SWE Multilingual 78%, VulcanBench 89.9%, LiveCodeBench 87.4%; capped by PostTrainBench 23.4% and TB3.0 15.7%.
- **Cost efficiency: 76/100.** $2/$6 with 85% cache discount — competitive; slow 57.6 t/s and 15.3s TTFT.
- **Overall Score: 82/100.** Mean of (78+84+82+84+84)/5 = 82.4 → 82. A capable mid-frontier model; TB3.0 and slow output are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (xAI launch post via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1) listed side by side.
- Reference URLs:
  - [Grok 4.5 launch post (xAI)](https://x.ai/news/grok-4-5)
  - [Grok 4.5 model docs (xAI)](https://docs.x.ai/docs/models/grok-4.5)
  - [Grok 4.5 — Artificial Analysis model page ($2/$6, 500K, 57.6 t/s)](https://artificialanalysis.ai/models/grok-4-5)
  - [Grok 4.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-5)
  - [Grok 4.5 — Vals AI model page](https://www.vals.ai/models/grok_grok-4.5)
  - [ARC Prize results — Grok 4.5](https://arcprize.org/results/xai-grok-4-5)
