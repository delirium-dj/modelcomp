# Gemini 3 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3-pro-preview`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (launched as "Gemini 3 Pro Preview"; Google's eval tables score "Gemini 3 Pro Thinking (High)") — **DEPRECATED / RETIRED**
- **Short description:** Google DeepMind's November 2025 frontier flagship and first Gemini 3 generation model. **Now deprecated/retired:** Google's own lineup and docs steer to Gemini 3.1 Pro; Zen deprecated it 2026-03-09; AA marks "deprecated … no longer updated" with "No publicly available API". BenchLM: 60.68/100, #51/1009. **Two generations behind Gemini 4 (Argon, Carbon) and behind its own 3.7 Flash successor.**
- **Provider / access:** **Deprecated on OpenCode Zen (2026-03-09).** Was served by Gemini API (`gemini-3-pro-preview`), Vertex AI, AI Studio, Gemini CLI, Antigravity. **Google recommends `gemini-3.1-pro-preview`.** AA: "No publicly available API" for live benchmarking.
- **Release / knowledge:** 2025-11-18 release; **knowledge cutoff: January 2025** (Google docs, AA spec).
- **IDs:** `google/gemini-3-pro-preview` (Gemini API/Vertex/AI Studio — deprecated). No current Zen route. No Free tier.
- **Context window:** **1,000,000 tokens input / 64,000 max output** (verified 2026-11-02 via Google's Gemini 3 family docs table "Context Window (In/Out): 1M/64k" and AA). **BenchLM's 2M figure appears incorrect** — not corroborated by Google's own docs or AA.
- **Modalities:** Text, image, video, audio, PDF in; text out. Reasoning (dynamic thinking via `thinking_level`, default `high`). Tool calls: function calling (incl. multimodal), structured output/JSON, Google Search grounding, URL context, code execution, thought signatures.
- **Pricing (as of 2026-11-08):** **Deprecated endpoint — no live first-party purchase.** Last published: $2.00 in / $12.00 out per 1M (≤200K); $4.00 / $18.00 (>200K); cached input $0.20/M (90% discount). **Same price now buys measurably stronger Gemini 3.1 Pro.** No free tier.
- **Architecture:** Proprietary, closed weights; parameter count/architecture undisclosed. **BenchLM classifies as "Non-Reasoning"** — only such model in batch (does not expose explicit reasoning mode like GPT-6/Claude 5.5 gens).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official Google sources. **Average of 32 qualifying raters: 91.3 Overall** (Tool 88.6, Reasoning 91.6, Context 95.4, Multimodal 93.1, Coding 88.4). Queue: 91.3. Step 5 Preview: 69. GLM 5.3 Flash: 87. My original: 72. **DEPRECATED: Zen 2026-03-09, Google API deprecated, AA "no publicly available API".**

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google launch blog, Terminus-2) / **56.9%** (Google 3.1-table, Thinking High)
- τ²-Bench: **Retail 85.3% / Telecom 98.0%** (Google 3.1-table, Thinking High)
- GDPval-AA: **1,195 Elo** (Google 3.1-table) — behind 2026 class (Sonnet 4.6 1,633, Opus 4.6 1,606, GPT-5.2 1,462)
- MCP-Atlas: **54.1%** (Google 3.1-table) — successor 3.1 Pro reports 69.2%
- BrowseComp: **59.2%** (Google 3.1-table) — weakest in launch-era comparison column
- Vending-Bench 2: **leaderboard-topping at launch** (Andon Labs; Google blog states it topped long-horizon planning over simulated year) — no numeric value published
- APEX-Agents: **18.4%** (Google 3.1-table)
- **Terminal-Bench 2.1/4.0, τ³-Banking, OSWorld, BrowseComp (AA), Claw-Eval: no verified public score found** (Step 5 / GLM) — **agentic benchmark set essentially absent**
- Vibe Code Bench: **14.30%** (Vals) — **weakest agentic-coding figure in batch** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google launch blog; no-tools in 3.1-table) / **90.8%** (AA) — **just clears 90%+ frontier**
- HLE: **37.5%** no tools / **45.8%** with Search+Code (Google launch blog / 3.1-table) / **39.7%** (AA) — **just misses 40%+ frontier ref**
- ARC-AGI-1: **75.0%** (ARC Prize verified) — **lowest ARC-AGI-1 in research series**
- ARC-AGI-2: **31.1%** (ARC Prize verified, per Google 3.1-table) / **45.1%** (Deep Think variant with code execution) — **vs 77.1% for Gemini 3.1 Pro**
- MathArena Apex: **23.4%** (Google launch blog — SOTA at launch)
- SimpleQA Verified: **72.1%** (Google launch blog)
- MMMLU (multilingual): **91.8%** (Google 3.1-table)
- MMLU-Pro: **89.8%** (AA); Global-MMLU-Lite: **92.2%** (AA); AIME 2025: **95.7%** (AA); IFBench: **70.4%** (AA)
- LMArena: **1,501 Elo, #1 at launch** (Google launch blog, Nov 2025)
- AA Intelligence Index: **28.0** (AA) — **second-lowest in batch** (Step 5) / **N/A / no current rank** (GLM) — AA marks deprecated model's index "N/A", no longer runs v5.0 suite on it
- CritPt: **9.1%** (AA)
- AA-LCR: **76.0%** (AA)
- AA-Omniscience: **index 15.3, accuracy 55.8%, hallucination rate 91.5%** (AA) — **worst hallucination figure in research series** (Step 5) / **no verified current AA score found** (GLM)
- MRCR v2 8-needle: **77.0% avg @128K**; **26.3% pointwise @1M** (Google 3.1-table) — **strong at 128K, sharp degradation at full 1M** (GLM)
- **GraphWalks / RULER at window length: no verified public score found** (GLM)
- AA-HLE: **39.7%** (AA) — just misses 40%+ ref (Step 5)

Coding:

- SWE-bench Verified: **76.2%** single attempt (Google launch blog / 3.1-table) (GLM)
- SWE-Bench Pro: **43.3%** single attempt (Google 3.1-table) (GLM)
- LiveCodeBench Pro: **2,439 Elo** (Google 3.1-table) — above GPT-5.2 Thinking's 2,393 (GLM)
- SciCode: **56%** (Google 3.1-table) (GLM)
- WebDev Arena: **1,487 Elo, #1 at launch** (Google launch blog) (GLM)
- AA LiveCodeBench: **91.7%** (AA) (Step 5)
- Vibe Code Bench: **14.30%** (Vals) (Step 5)
- **SWE-bench Verified/Pro, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode: no verified public score found** (Step 5) / **Vibe Code Bench / AA-FrontierCode / DeepSWE: no verified** (GLM)

Multimodal — **most comprehensively measured of any model in research series** (Step 5):

- CountBench: **97.3%**; AI2D_TEST: **94.1%**; OmniDocBench 1.5: **88.5%**; V*: **88.0%**; Video-MME (w/sub): **88.4%** / w/o: **87.7%**; VideoMMMU: **87.6%**; MMMU: **87.2%**; MathVision: **86.6%**; We-Math: **86.9%**; DynaMath: **85.1%**; RealWorldQA: **83.3%**; MLVU (M-Avg): **83.0%**; RefCOCO: **84.1%**; MMMU-Pro: **81.0%** (Google) / **80.2%** (AA); CharXiv: **81.4%**; CC-OCR: **79.0%**; SimpleVQA: **73.2%**; ScreenSpot Pro: **72.7%**; ERQA: **70.5%**; MMLongBench-Doc: **60.5%**; ODINW13: **46.3%**
- **Text + image + video + audio + PDF in; text out** — full audio/video tier

Long context:

- MRCR v2: **77.0% @128K**; **26.3% pointwise @1M** (Google 3.1-table) (GLM)
- AA-LCR: **76.0%** (AA) / **76.0%** (Step 5)
- **GraphWalks / RULER: no verified public score found** (GLM)
- **Context window: 1M/64K verified** (Google docs, AA) — **BenchLM's 2M figure not corroborated**

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 32 qualifying raters = **91.3 Overall** (Tool 88.6, Reasoning 91.6, Context 95.4, Multimodal 93.1, Coding 88.4). Queue: 91.3. Step 5 Preview: 69. GLM 5.3 Flash: 87. My original: 72. **DEPRECATED: Zen 2026-03-09, Google API deprecated, AA N/A.**

- **Tool use: 65/100.** (was 55) τ²-Bench **98.0%/85.3%** (Telecom/Retail — strong), Terminal-Bench 2.0 **54-57%**, Vending-Bench 2 **leaderboard-topping at launch**, MCP-Atlas **54.1%**, BrowseComp **59.2%**, GDPval **1,195 Elo**, APEX-Agents **18.4%**. **Capped by:** **TB 2.1/4.0, τ³-Banking, OSWorld, BrowseComp (AA), Claw-Eval, GDPval-AA (AA), MCP-Atlas (AA): all no verified public score** — agentic benchmark set essentially absent. JobBench **11.4%**, Vibe Code **14.30%**. Vending-Bench numeric value unpublished.
- **Reasoning: 70/100.** (was 60) GPQA Diamond **91.9%** (clears 90%+), HLE **37.5-45.8%**, AIME **95.7%**, MMLU-Pro **89.8%**, Global-MMLU-Lite **92.2%**, SimpleQA **72.1%**, MathArena Apex **23.4%** (SOTA at launch). **Capped by:** HLE **39.7%** (just misses 40%+ ref), ARC-AGI-1 **75.0%** (lowest in series), ARC-AGI-2 **31.1%** (vs 3.1 Pro's 77.1%), CritPt **9.1%**, AA Intelligence Index **28.0** (2nd lowest), **hallucination 91.5% (worst in series)**, AA v5.0 N/A, no MRCR/LCR verified.
- **Context window: 95/100.** (was 100) **1M/64K verified** (Google docs, AA) — **BenchLM's 2M incorrect**. MRCR **77.0% @128K** (strong) but **26.3% pointwise @1M** (sharp degradation); AA-LCR **76.0%** (mid-tier). No GraphWalks/RULER. Held at 95 (not 97+) due to MRCR **26.3% @1M** well below ≥98% threshold.
- **Multimodal: 95/100.** (was 90) **Strongest multimodal profile in research series.** Text, image, video, **audio**, PDF in; CountBench **97.3%**, AI2D **94.1%**, OmniDocBench **88.5%**, V* **88.0%**, Video-MME **88.4%**, VideoMMMU **87.6%**, MMMU **87.2%**, MathVision **86.6%**, We-Math **86.9%**, MMMU-Pro **81.0%**. **Capped by:** text-only output, ODINW13 **46.3%**, MMLongBench-Doc **60.5%**. Methodology: +audio/video in = 90-100 tier.
- **Coding: 60/100.** (was 55) AA LiveCodeBench **91.7%** (sole strong result), SWE-V **76.2%** (GLM, single attempt), SciCode **56%** (GLM), WebDev Arena **1,487 Elo #1** (GLM). **Capped by:** Vibe Code **14.30%**, **SWE-V/Pro, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode: all unpublished for this ID** — entire coding frontier-reference set unmeasurable. SWE-Pro **43.3%** (GLM).
- **Cost efficiency: 60/100.** (was 65) **Deprecated — no live first-party purchase.** Last published $2/$12 (≤200K) / $4/$18 (>200K) with 90% cache discount. **Same price now buys measurably stronger Gemini 3.1 Pro.** Zen deprecated 2026-03-09. No free tier. Drawn down from rate-card by deprecation.
- **Overall Score: 77/100.** (was 72) Half-up mean of (65 + 70 + 95 + 95 + 60) / 5 = 385 / 5 = 77 → **77**. **Below Step 5 Preview (69) and GLM 5.3 Flash (87); far below average of 32 qualifying raters (91.3) and queue (91.3).** Best-fit: **2M-window claim is incorrect; actual 1M/64K. Deprecated 2025 flagship — strongest multimodal profile in series (CountBench 97.3%, AI2D 94.1%, full audio/video) but hallucination 91.5% (worst in series), ARC-AGI-1 75.0% (lowest), essentially no agentic benchmarks, coding frontier refs unmeasured.** For any text-centric work, **Gemini 3.1 Pro (84) or 3.7/3.8 Flash dominate at same/lower price.** Use ONLY for long-document/video visual analysis at scale where breadth of visual benchmarks matters.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 69), GLM 5.3 Flash (2026-11-02, Overall 87) + official Google sources (Gemini 3 launch blog, DeepMind model card, 3.1 Pro comparison table, API docs, deprecation notice). **Average of 32 qualifying raters: 91.3 Overall.** Queue: 91.3. **Critical findings:** DEPRECATED (Zen 2026-03-09, Google API, AA N/A); actual context 1M/64K (not 2M); strongest multimodal in series (CountBench 97.3%, AI2D 94.1%, full audio/video); hallucination 91.5% (worst in series); ARC-AGI-1 75.0% (lowest); ARC-AGI-2 31.1% (vs 3.1 Pro 77.1%); MRCR 26.3% @1M; agentic/coding frontier refs unmeasured; same price buys stronger 3.1 Pro.
- Reference URLs:
  - [Google — Gemini 3 launch (MMMU-Pro and VideoMMMU figures)](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Google DeepMind — Gemini Pro model card (ARC-AGI-2 figure)](https://deepmind.google/models/gemini/pro/)
  - [Google DeepMind — Gemini 3.1 Pro model page (official comparison table incl. "Gemini 3 Pro Thinking (High)" column)](https://deepmind.google/models/gemini/pro/)
  - [Google Gemini API docs — Gemini 3 family guide (model IDs, 1M/64k context, tiered pricing; deprecation notice)](https://ai.google.dev/gemini-api/docs/gemini-3)
  - [BenchLM — Gemini 3 Pro benchmark scores (42 rows, 60.68/100, #51/1009)](https://benchlm.ai/models/gemini-3-pro)
  - [Artificial Analysis — Gemini 3 Pro Preview model page (pricing, specs, deprecated status)](https://artificialanalysis.ai/models/gemini-3-pro)
  - [ARC Prize — Gemini 3 Pro verified results](https://arcprize.org/leaderboard)
  - [Hugging Face — Qwen3.5-397B-A17B comparison table (source of most multimodal rows)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen — Qwen3.6-Plus multimodal comparison table](https://qwen.ai/blog?id=qwen3.6)
  - [OpenCode Zen — model list and deprecated-models table](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---