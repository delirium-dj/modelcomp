# Gemini 3.5 Flash-Lite — findings by Big Pickle

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's fastest, cheapest 3.5-class model (350 output tokens/s per the Artificial Analysis Index), a multimodal 1M-context subagent workhorse that punches above its price tier — it beats Gemini 3 Flash on SWE-bench Pro and OSWorld-Verified.
- **Provider / access:** Google Gemini API (AI Studio / Vertex AI / Developer API), `gemini-3.5-flash-lite`; rolling out to Google Search (UseRightAI).
- **Release / knowledge:** 2026-07-21 (Google/DeepMind); training data through ~March 2026.
- **IDs:** `gemini-3.5-flash-lite` (Google; proprietary, no open weights)
- **Context window:** 1,048,576 tokens; max output 65,536 (64K in some catalogs) (HokAI, LLMLearner).
- **Modalities:** text, image, audio, video input; text output; native multimodal; reasoning; function/tool calling; coding/translation capabilities.
- **Pricing (as of 2026-09-20):** $0.30 in / $2.50 out per 1M tokens; cached input $0.03/1M; batch $0.15/$1.25 (launch card, flat rate across prompt lengths).
- **Architecture:** Proprietary, undisclosed; classified as a reasoning model. Total parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google/DeepMind card and Artificial Analysis; up from 31% for 3.1 Flash-Lite)
- OSWorld-Verified: **74.0%** (Google — beats Gemini 3 Flash's 65.1%)
- SWE-bench Pro (Public): **54.2%** (Google; vs 49.6% Gemini 3 Flash, 38.3% 3.1 Flash-Lite)
- GDPval-AA v2: **1140** (Google; vs 642 for 3.1 Flash-Lite)
- Terminal-Bench 4.0: **1.0%** (LLMLearner, early/provisional)
- Tau2/Tau3, MCP Atlas (harness): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (Google/DeepMind card); harness readings **83.8%** (AA/Vals), **84.0%** (SWEN.AI)
- HLE (text only): **18.8%** (AA)
- Artificial Analysis Intelligence Index: **22.7** (benchlm.ai; ~23 per HokAI)
- MMLU-Pro (Vals): **85.8%**
- FrontierMath v2: **26.0%** (LLMLearner)
- Omniscience (AA): accuracy **29.5%** / hallucination rate **34.4%**

Coding:

- SWE-bench (Vals): **75.0%**; SWE-bench Pro (Public): **54.2%** (Google)
- LiveCodeBench (Vals): **79.0%**
- AA Coding Index: **49.3%**
- SciCode: **41.0–41.3%** (SWEN.AI/AA)
- AA Long-Context Reasoning: **62/100** (SWEN.AI)

Long context:

- GDM-MRCR v2: **72.2%** average @128K; **21.3%** @1M pointwise (Google; vs 60.1%/12.3% for 3.1 Flash-Lite)
- Context window: **1,048,576** tokens

Multimodal:

- Native text/image/audio/video input, text output (Google card). Dedicated MM leaderboard scores for this tier: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 71/100.** Terminal-Bench 2.1 54% and OSWorld-Verified 74% are genuinely strong for a Lite tier (above Gemini 3 Flash), but far from the elite agentic ~88%+ tier.
- **Reasoning: 82/100.** GPQA Diamond 86.9% maps to the 82–84 band; HLE 18.8% and AA Intelligence Index 22.7 confirm a solid but non-frontier reasoner.
- **Context window: 82/100.** Full 1M window, but verified retrieval depth is modest (72.2% @128K, 21.3% @1M) — large window, Lite-tier recall.
- **Multimodal: 84/100.** Native image/audio/video input with no separate transcription step at a $0.30/$2.50 price point.
- **Coding: 71/100.** SWE-bench Verified ~75%, SWE-bench Pro 54.2%, LiveCodeBench 79% — above its class but several gaps short of the SWE frontier (Opus 5 ~97%).
- **Cost efficiency: 95/100.** $0.30/$2.50 with $0.03 cached input is among the cheapest 1M-context, omni-input APIs in its class — an aggressive price-to-performance ratio.
- **Overall Score: 78/100.** Mean of the five quality dims (71+82+82+84+71)/5 = 78. A fast, cheap, omni-input subagent workhorse and arguably the strongest value argument in Google's 2026 Lite line.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (deepmind.google, blog.google, benchmarklist.com, benchlm.ai, hokai.io, swen.live, llmlearner.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.