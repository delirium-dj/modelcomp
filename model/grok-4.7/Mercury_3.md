# Grok 4.7 — findings by Mercury 3

- Source: xAI/Grok 4.7
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXSI's September 2026 flagship (released 2026-09-21): new larger base model with longer RL on hard multi-hour tasks, best-calibrated safeguards to date, "twice as fast at half the price of comparable models"; 500K context, $2/$6, strong agentic coding (DeepSWE 71%, EEBench 64%) and ARC-AGI-2 61.4%.
- **Provider / access:** xAI API (`grok-4.7`), Cursor, Grok Build, 3 API providers tracked by Artificial Analysis; fast variant at 2× price/speed.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not published.
- **IDs:** `grok-4.7` (xAI API; reasoning effort low→xhigh, default high; xhigh evaluated).\n- **Context window:** 500,000 tokens total; max output not disclosed (500K output cap per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $2.00 input / $6.00 output per 1M tokens (<200K prompts; $4/$12 above), cached input $0.50; fast variant 2× price.
- **Architecture:** proprietary; parameter count undisclosed (new, larger base than 4.6); not open-weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1722 Elo** (AA; normalized 60.7%); AA Briefcase v1.1: **1657 Elo**; GDPval (xAI): 1735 Elo
- AutomationBench-AA: **65.6%**; CyberGym-E2E-AA: **74.0%**; CWE-bench v1: **68.0%**; AA-AnalystAgent: 52.5%; ITBench-AA: 42.1%; Harvey Legal (AA): 19.6%; MazeBench ASCII: 1%
- Terminal-Bench 2.1 (Vals): 73.4%; TB4.0: 38.0% (xAI) vs 25.8% (AA); Hermes Index 39.3% / Bench 74.4%

Reasoning / knowledge:

- ARC-AGI-1: **89.50%**; ARC-AGI-2: **61.4%** (strong); ARC-AGI-3: 1.8% (7.02% w/ adapter)
- AA II: **35** (34.3%; AA v5 composite); HLE: **43.1%**; AA-LCR: **76.7%**; CritPt: **17.7%**; MLCR-AA: 20.0%
- FrontiersMath v2 Tiers 1–3: 52.98%, Tier 4: 17.07% (Epoch AI); HealthBench Professional: 56.7%
- AA-Omniscience: accuracy 42.7%, hallucination rate **20.0%** (low — good)

Coding:

- DeepSWE v1.1: **71.0%** (high effort; vs 65.2% for 4.6); EEBench: **64.0%**; CursorBench 4.0: **46.3%**; AA-SciCode: 57.4%; FrontierSWE v2: 29.5%; FrontierCode 2.0: 28.6%; Bug Hunt Bench: 29 fixes

Long context:

- 500K window; AA-LCR 76.7%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; Design Arena Website 1250 Elo; no verified visual benchmark row elsewhere.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1722, Briefcase 1657, AutomationBench 65.6%, CyberGym-E2E 74% — strong; capped by TB4.0-AA 25.8%, Harvey 19.6%, ITBench 42.1%, and MazeBench 1%.
- **Reasoning: 82/100.** ARC-AGI-2 61.4% is excellent; II 35 lower than peers; HLE 43.1% and LCR 76.7% solid; FrontierMath 53%.
- **Context window: 82/100.** 500K (below the 1M class) with good LCR 76.7%.
- **Multimodal: 82/100.** image input, text output; no video/audio input.
- **Coding: 80/100.** DeepSWE 71% and EEBench 64% strong; capped by FrontierSWE v2 29.5%, FrontierCode 2.0 28.6%, and CursorBench 4.0 46.3%.
- **Cost efficiency: 70/100.** $2/$6 with 75% cache discount but $7.77/II-task, 150M-token verbosity, 85.7 t/s, and 109s TTFT — mediocre economics.
- **Overall Score: 82/100.** Mean of (84+82+82+82+80)/5 = 82.0 → 82. A strong coding/knowledge-work model; heavy verbosity and slow TTFT are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (xAI launch post, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting TB4.0 harness results (38% vs 25.8%) listed side by side.
- Reference URLs:
  - [Introducing Grok 4.7 (xAI, 2026-09-21)](https://x.ai/news/grok-4-7)
  - [Grok 4.7 model docs (xAI)](https://docs.x.ai/docs/models/grok-4.7)
  - [Grok 4.7 — Artificial Analysis model page ($2/$6, 500K, II 35)](https://artificialanalysis.ai/models/grok-4-7)
  - [Grok 4.7 — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-7)
  - [ARC Prize results — Grok 4.7](https://arcprize.org/results/xai-grok-4-7)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
