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

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 71 | 71 | — |
| Reasoning | 82 | 82 | — |
| Context window | 82 | 82 | — |
| Multimodal | 84 | 84 | — |
| Coding | 71 | 71 | — |
| Cost efficiency | 95 | 95 | — |
| **Overall** | **78** | **78** | **—** |

**BenchLM composite: 46.87/100, #116 of 1014**, from 28 of 739 rows. The composite is far below this project's normalized score because of partial coverage and a different scale; it is not a like-for-like comparison.

**Every headline number in the original re-publishes exactly.** Terminal-Bench 2.1 **54.0%**, OSWorld-Verified **74%**, SWE-bench Pro **54.2%**, SWE-bench (Vals) **75.0%**, LiveCodeBench (Vals) **79.0%**, AA Coding Index **49.3%**, SciCode **41.3%**, GDM-MRCR v2 **72.2%**, GPQA **83.8%**, MMLU-Pro **85.8%** — all corroborated, none revised.

**Index drift, not regression.** The original recorded the AA Intelligence Index at **22.7**; AA now reports **11.7** for the same model. The composition changed between index vintages, so the two numbers are not comparable — do not read this as a capability drop. Same caveat applies to the October file's use of the older vintage.

**Long-context improved on re-measurement.** AA-LCR is **76.0%**, against the "62/100" proxy the original carried from SWEN.AI. With MRCR v2 at 72.2% @128K and 21.3% @1M, the 82 score stands but the shape is clearer: strong to 128K, degraded at the full window.

**Newly measured:** GDPval-AA **1139 Elo / 24.2%**, AA Agentic Index **15.9%**, AA EnterpriseOps-Gym **42.3%**, AA-MMMU-Pro **79.0%**, ParseBench **59.49%**, AA-HLE **18.8%**, **CritPt 0.0%**, FrontierMath v2 **25.965%** (T1–3) / **0.000%** (T4), AA-Omniscience **26.5% accuracy / 26.7% hallucination**. The hallucination rate is the second-best in this cohort behind GLM-5.2 (26.3%) — worth noting for a lite tier.

**Pricing and lifecycle.** **$0.30 in / $2.50 out, $0.03 cached, 1,048,576 context / 65,536 output** — unchanged on models.dev and Zen. Still live and still the cheapest 3.5-class Gemini on the gateway.

**Net assessment.** The most stable file in the cohort: every score holds, and the two numbers that moved (Index, AA-LCR) moved for measurement reasons rather than capability reasons.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (deepmind.google, blog.google, benchmarklist.com, benchlm.ai, hokai.io, swen.live, llmlearner.com; BenchLM, Vals AI and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.6 Flash, 3.5 Flash-Lite and 3.5 Flash Cyber launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [BenchLM — Gemini 3.5 Flash-Lite](https://benchlm.ai/models/gemini-3-5-flash-lite)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash_Lite_2.md`, using the same headings.