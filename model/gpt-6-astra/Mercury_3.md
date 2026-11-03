# GPT-6 Astra — findings by Mercury 3

- Source: OpenAI/GPT-6 Astra
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (OpenAI hyphenated style: GPT-6 Astra)
- **Short description:** OpenAI's frontier reasoning model (released 2026-09-03), positioned for deep research, real-world software engineering, and long-context problem solving with a 1.05M context window and 922K max input. Top use case: hardest knowledge/coding tasks where budget is secondary.
- **Provider / access:** OpenAI API (`gpt-6-astra`), ChatGPT; 11 API providers tracked by Artificial Analysis (incl. Azure, gateways).
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff April 30, 2026.
- **IDs:** `gpt-6-astra` (OpenAI API; max/high reasoning effort tiers).
- **Context window:** 1,050,000 tokens total (922K max input, 128K max output) — per OpenAI model page; AA lists ~1M.
- **Modalities:** text + image input, text output; reasoning model (extended thinking); tool calls; parallel tool use; structured outputs.
- **Pricing (as of 2026-11-03):** $10.00 input / $50.00 output per 1M tokens (2.5x GPT-5.6 Sol); cached input $1.00, cache writes $12.50; prompts >272K input tokens charged 2x input/cache and 1.5x output; Batch/Flex −50%, Fast mode +2x. No free tier.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.5%**; ScreenSpot Pro: **92.7%**; Agents' Last Exam: **59.3%**; OSWorld 2.0: **72.6%** / 2.1: **75.8%**; ExploitGym: **42.4%** (OpenAI)
- Terminal-Bench 4.0: **57.9%** (OpenAI) vs **59.1%** (Artificial Analysis — conflicting harnesses)
- AutomationBench: **41.4%** (OpenAI) vs **68.5%** (AA AutomationBench-AA)
- Terminal-Bench-Science 0.1: **64.6%**; GDPval-AA: **1584 Elo** (AA leaderboard; normalized 53.7%)
- CWE-bench v1: **68.0%** (Collinear, tie-first); AA Cyber Index 33.4%; AA ITBench 48.6%; AA-AnalystAgent 51.2%; ApprenticeBench GUI 68% (NeoCognition)
- AA Tau3-Banking: **41.4%**; AA Agentic Index: **51.5%**; AA-Briefcase Elo 1568

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; AA 96.1%)
- HLE: **57.2%** with tools (OpenAI) vs **54.7%** (AA)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **95%**; ARC-AGI-3: **62.7%** (98.55% with provider adapter) (ARC Prize, semi-private)
- MRCR v2: **100.0%** at 256K–512K, **96.3%** at 512K–1M (OpenAI)
- Artificial Analysis Intelligence Index: **57/100**, #5 of 60 (max mode)
- AA-LCR: **80.7%**; CritPt: **31.7%**; MLCR-AA: **41.7%**; GraphWalks BFS 256K–1M: **71.8%**
- FrontierMath v2: Tier 4 **97.6%**, Tiers 1–3 **93.68%** (Epoch AI/OpenAI); HealthBench Hard 36.6% (system card)
- AA-Omniscience: accuracy **61.6%**, hallucination rate **49.8%**; Gray Swan IPI (15 attempts): **8.5%**

Coding:

- DeepSWE: **74.1%**; FrontierCode v1.1 Main: **53.3%** / Extended: **64.5%**; FrontierCode 2.0: **42.8%** (Cognition)
- AA Coding Index: **76.9%**; AA-SciCode: **56.5%**; FrontierSWE v2: **65.5%** (Proximal); PostTrainBench v1.1: 44.3%; Bug Hunt Bench: 45.0 fixes

Long context:

- 1.05M total / 922K input / 128K output; MRCR 100%/96.3% at 256K–1M; AA-LCR 80.7%; GraphWalks 256K–1M 71.8%.

Multimodal:

- text/image in, text out; ScreenSpot Pro 92.7% (GUI grounding), BenchCAD Vision2Code 0.959 (tools), AA-MMMU-Pro 86.9%, ExtractBench 91.91% / Pro 58%; no video/audio input verified.

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite agentic profile (BrowseComp 91.5%, OSWorld 2.1 75.8%, Agents' Last Exam 59.3%, CWE 68% tie-first); capped below Opus 5.5 by TB4.0 ~58% and Zapier AutomationBench 41.4% (AA harness 68.5%).
- **Reasoning: 96/100.** GPQA 96%, ARC-AGI-2 95% (best public), MRCR 100% @256–512K, II 57 (#5); capped by HLE ~55–57% and hallucination rate ~50%.
- **Context window: 97/100.** 1.05M total with near-perfect MRCR; 128K output cap (vs Argon's 1M output) and GraphWalks 71.8% at depth keep it shy of the top band.
- **Multimodal: 84/100.** image input with strong GUI/vision grounding (ScreenSpot Pro 92.7%, MMMU-Pro 86.9%); no video/audio input, text-only output.
- **Coding: 94/100.** DeepSWE 74.1%, coding index 76.9%, FrontierSWE v2 65.5%, FrontierCode Extended 64.5%; capped by FrontierCode 2.0 at 42.8% and SciCode 56.5%.
- **Cost efficiency: 35/100.** $10/$50 premium pricing (2.5x GPT-5.6 Sol); cost/task $6.24 (AA #45/58) — among the most expensive frontier offerings.
- **Overall Score: 93/100.** Mean of (93+96+97+84+94)/5 = 92.8 → 93. A top-tier reasoning/coding flagship; the premium price is the main drawback.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI model page/system card via BenchLM transcription, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Collinear, Epoch AI, Cognition/Proximal); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB4.0, AutomationBench, HLE) listed side by side.
- Reference URLs:
  - [GPT-6 Astra — OpenAI model page](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra — OpenAI API model docs/pricing](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [GPT-6 Astra — OpenAI system card](https://deploymentsafety.openai.com/gpt-6-astra)
  - [GPT-6 Astra — Artificial Analysis model page (II 57 #5/60, 1M, $10/$50, cutoff Apr 2026)](https://artificialanalysis.ai/models/gpt-6-astra)
  - [GPT-6 Astra — BenchLM benchmark aggregation (86.07/100, #3/1004)](https://benchlm.ai/models/gpt-6-astra)
  - [ARC Prize results — GPT-6 Astra](https://arcprize.org/results/openai-gpt-6-astra)
  - [CWE-bench v1 leaderboard (Collinear)](https://cwe-bench.com/)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
