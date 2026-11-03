# GPT-5.6 Terra — findings by Mercury 3

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (OpenAI hyphenated style: GPT-5.6 Terra)
- **Short description:** OpenAI's balanced everyday-tier GPT-5.6 model (released 2026-07-09): performance competitive with GPT-5.5 at lower cost, with strong coding/agentic (TB2.1 87.4%, SWE-Pro 63.4%, DeepSWE 69.6%) and self-improvement capability (RSI Index 56.3). Priced $2.50/$15 at launch, reduced 20% on 2026-07-30 to $2/$12.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), ChatGPT/Codex (free tier — Terra is the default for Free/Go), 7 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-07-09 (price cut 2026-07-30); knowledge cutoff not published.
- **IDs:** `gpt-5.6-terra` (OpenAI API; medium/xhigh/max effort; programmatic tool calling; multi-agent beta).
- **Context window:** 1,050,000 tokens (1.05M) total; max output not disclosed (128K per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs; zero-data-retention compatible (programmatic tool calling).
- **Pricing (as of 2026-11-03):** $2.00 input / $12.00 output per 1M tokens (post-2026-07-30 20% cut), 90% cache discount; cache writes 1.25× input; 30-min min cache life.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI) vs **88%** (AA) vs **77.5%** (Vals — conflicting harnesses); TB3.0: 20.8%
- Agents' Last Exam: **50.4%**; BrowseComp: **87.5%**; OSWorld 2.0: **50.2%**; GDPval-AA v2: **1593 Elo** (OpenAI; AA normalized 47.6%); CyberGym: **81.8%**; ExploitGym: 23.2%; SEC-Bench Pro: 57.7%
- Toolathlon: 53.1%; τ²-bench: 86.3% (AA); APEX-Agents-AA: 38.9%; AA Agentic Index: 43.7%; AA Tau3-Banking: 40.2%; ApprenticeBench: 16%

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI) vs **92.5%** (AA) vs **90.9%** (Vals); HLE: **51.1%** verified vs 42.9% (AA); MMLU-Pro: 86.7% (Vals)
- ARC-AGI-1: **96.5%**; ARC-AGI-2: **83.9%**; ARC-AGI-3: 0.8% (ARC Prize)
- AA-LCR: **83.0%**; CritPt: **30.0%**; Artificial Analysis Intelligence Index: **55.0%** (OpenAI-cited; AA v4.1 55); LABBench2: 81.2%; HealthBench Professional: 57.7%
- AA-Omniscience: accuracy 46.8%, hallucination rate **87.9%** (very high)

Coding:

- SWE-Bench Pro: **63.4%**; DeepSWE: **69.6%**; Terminal-Bench 2.1 87.4%; FrontierCode v1.1 Extended: **55.8%** (Devin)
- SWE-bench: **95.4%**; LiveCodeBench: **85.9%** (Vals); CursorBench 3.2: 64.9% / 4.0: 41.3%; VulcanBench v3: 87.0%; AA-SciCode: 55.0%; AA Coding Index: **76.7%**
- Self-improvement: Internal Research Debugging 67.8%; KernelGen 1P 49.2%; RSI Index 56.3%; PostTrainBench Lite 51.5%

Long context:

- 1.05M window; MRCR v2: 89.6% @256K–512K, 72.5% @512K–1M; GraphWalks BFS 1M f1 71.2%; AA-LCR 83%.

Multimodal:

- text/image in, text out; MMMU-Pro 80.7%/82% (w/ Python); gdp.pdf 24.7%; BenchCAD 62.3%/78.2% (python tool); ExtractBench 92.26%; ParseBench 67.11%.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 87.4%, Agents' Last Exam 50.4%, CyberGym 81.8%, GDPval 1593 — strong mid-tier agentic; capped by OSWorld 50.2% and APEX 38.9%.
- **Reasoning: 90/100.** GPQA 92.9%, ARC-AGI-2 83.9%, II 55, FrontierMath T1–3 84.9% — excellent; capped by hallucination rate 87.9% and HLE ~51%.
- **Context window: 92/100.** 1.05M with MRCR 89.6% @256K–512K and strong LCR 83%; 72.5% @512K–1M depth drop noted.
- **Multimodal: 82/100.** image input with solid grounding (MMMU-Pro 82% w/ Python, ExtractBench 92.26%); no video/audio input.
- **Coding: 90/100.** TB2.1 87.4%, SWE-Pro 63.4%, DeepSWE 69.6%, SWE-bench 95.4%, coding index 76.7%; capped by CursorBench 4.0 41.3%.
- **Cost efficiency: 82/100.** $2/$12 (post-cut) with 90% cache discount — good value; 137.2 t/s.
- **Overall Score: 88/100.** Mean of (88+90+92+82+90)/5 = 88.4 → 88. The best performance-per-dollar GPT-5.6 tier; a strong everyday flagship.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.6 announcement/price-update, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, GPQA) and launch-vs-current pricing ($2.50/$15 → $2/$12) listed side by side.
- Reference URLs:
  - [GPT-5.6: Frontier intelligence that scales with your ambition (OpenAI, 2026-07-09)](https://openai.com/index/gpt-5-6/)
  - [Advancing the price-performance frontier with GPT-5.6 (OpenAI, 2026-07-30)](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/)
  - [GPT-5.6 system card (OpenAI)](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [GPT-5.6 Terra — Artificial Analysis model page ($2/$12, 1.05M, 137.2 t/s)](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [GPT-5.6 Terra — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-6-terra)
  - [GPT-5.6 Terra — Vals AI model page](https://www.vals.ai/models/openai_gpt-5.6-terra)
  - [ARC Prize results — GPT-5.6 Terra](https://arcprize.org/results/openai-gpt-5-6-terra)
