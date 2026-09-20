# GPT-6 Astra — findings by Big Pickle

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's September 2026 flagship for demanding end-to-end work — advanced analysis, long-horizon software engineering, deep research, and document creation. Not a Flash hop: it is the GPT-6 series flagship with reasoning effort up to `max`.
- **Provider / access:** OpenAI API and AWS (`gpt-6-astra`); Chat Completions + Responses API endpoints.
- **Release / knowledge:** Announced 2026-09-03, API released 2026-09-04; knowledge cutoff 2026-04-30 (llm-stats.com).
- **IDs:** `gpt-6-astra` (OpenAI; `owned_by` openai). Free-tier API not supported.
- **Context window:** 1,050,000 total / 128,000 max output (OpenAI catalog via llm-stats.com, OpenRouter); long-context pricing kicks in above 272K input.
- **Modalities:** multimodal input (text + image), text output; native reasoning (effort low–max); tool/function calling; structured output.
- **Pricing (as of 2026-09-20):** $10 / $50 per 1M (standard); $1 cached input; $12.50 cache writes; >272K input → 2× input & cache and 1.5× output for the full request; batch/flex at half, fast mode at 2×. Paid only, no free tier.
- **Architecture:** Proprietary (not open weight); undisclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **87.3%** (benchlm.ai, 2026-09-18)
- Terminal-Bench 4.0: **57.9%** (benchlm.ai)
- Terminal-Bench-Science 0.1: **64.6%** (benchlm.ai)
- OSWorld 2.0: **72.6%** (benchlm.ai)
- BrowseComp: **91.5%** (benchlm.ai)
- Agents' Last Exam: **59.3%** (benchlm.ai)
- GDPval-AA: **54.0%** / Elo **1580** (benchlm.ai)
- AA Tau3 Banking: **41.4%**; AA Agentic Index: **51.5%**; ExploitGym: **42.4%** (benchlm.ai)
- ToolAthlon / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (benchlm.ai; AA harness 96.1%)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **95%**; ARC-AGI-3: **62.7%** (benchlm.ai; OpenAI launch table trumpeted ARC-AGI-3 ~98.6% per nextbigfuture — benchlm's 62.7% is the more conservative published figure)
- AA-HLE: **54.7%**; AA-LCR: **80.7%**; MLCR-AA: **35.0%**; CritPt: **31.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **52.8%** (benchlm.ai)
- AA-Omniscience: Accuracy **62.6%**; Hallucination Rate **51.3%** (benchlm.ai)
- FrontierMath v2 (Tier 4): **97.6%** (benchlm.ai)

Coding:

- DeepSWE: **74.1%** (benchlm.ai; OpenAI self-reported)
- FrontierCode 1.1 Main / Extended: **53.3% / 64.5%** (benchlm.ai)
- AA-SciCode: **56.5%**; AA Coding Index: **76.9%** (benchlm.ai)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: **no verified public score found** on the BenchLM page (OpenAI launch table self-reported; not yet independently measured)

Multimodal / grounded:

- MMMU-Pro: **86.9%** (benchlm.ai)
- ScreenSpot Pro: **92.7%**; BenchCAD Vision2Code (tools): **0.959** (benchlm.ai)

Long context:

- MRCR v2 256K–512K: **100%**; MRCR v2 512K–1M: **96.3%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 90/100.** Verified Terminal-Bench 2.1 87.3% plus elite BrowseComp 91.5% and OSWorld 72.6%; Terminal-Bench 4.0 at 57.9% shows the frontier has room, capping it below perfect.
- **Reasoning: 96/100.** GPQA Diamond 96%, ARC-AGI-2 95%, and FrontierMath Tier 4 97.6% are class-leading; HLE 54.7% and CritPt 31.7% hint that truly hard reasoning still has headroom.
- **Context window: 96/100.** 1.05M window with near-flawless MRCR retrieval (100% at 256K–512K, 96.3% at 512K–1M) — one of the best long-context results on record.
- **Multimodal: 86/100.** Strong vision/UI grounding (MMMU-Pro 86.9%, ScreenSpot Pro 92.7%); no audio modality advertised, so it stays below native-omni models.
- **Coding: 85/100.** AA Coding Index 76.9% and DeepSWE 74.1% are strong but not the top of the pack; FrontierCode 53.3% (Main) caps it, and no independent SWE-bench Verified is published yet, so scores stay reserved.
- **Cost efficiency: 55/100.** $10/$50 per 1M is premium flagship pricing with punitive long-context multipliers (2× input over 272K); strong value only if peak quality justifies the spend.
- **Overall Score: 91/100.** Mean of the five quality dims (90+96+96+86+85)/5 = 90.6 → 91. The premier end-to-end reasoning/agent option of September 2026 — first pick when budget is secondary to accuracy on long-horizon, tool-heavy work.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (benchlm.ai, llm-stats.com, OpenRouter, lmmarketcap.com, nextbigfuture, Mashable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.