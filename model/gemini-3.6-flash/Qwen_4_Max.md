# Gemini 3.6 Flash — findings by Qwen 4 Max

- Source: Google/gemini-3.6-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 21, 2026 "workhorse" refresh of 3.5 Flash — better coding, knowledge work, and computer use while consuming **17% fewer output tokens** on the AA Index (up to 65% fewer on DeepSWE) with fewer reasoning steps and tool calls. Launch list $1.50/$7.50; currently served at **$0.75/$3.75** intro rates (AA + OpenRouter). Computer use became a **built-in client-side tool** in the Gemini API / Gemini Enterprise. Now **deprecated** per AA — Gemini 3.7 Flash (Aug 13) is the suggested successor.
- **Provider / access:** Gemini API via Google AI Studio / Android Studio, Google Antigravity, Gemini Enterprise Agent Platform + app, Gemini app, OpenRouter (`google/gemini-3.6-flash`); proprietary, size undisclosed. AA tracks the **High** reasoning variant.
- **Release / knowledge:** Released 2026-07-21 (blog; AA says July 2026). Knowledge cutoff not stated in sources read. Shipped with enhanced Frontier Safety safeguards (CBRN + cyber-offense jailbreak resistance, minimized refusals for beneficial uses). Same launch wave as 3.5 Flash-Lite and 3.5 Flash Cyber (CodeMender); blog notes 3.5 Pro still in partner testing and Gemini 4 pre-training started.
- **IDs:** `gemini-3.6-flash`; AA slug `gemini-3-6-flash` (High); predecessor Gemini 3.5 Flash; successor Gemini 3.7 Flash; siblings 3.5 Flash-Lite, 3.5 Flash Cyber (separate SKUs).
- **Context window:** **1M tokens** (AA, OpenRouter). AA-LCR **80.0** (up from 3.5 Flash's 69.3); no MRCR-1M row published for this model, so deep 1M retrieval is unverified (3.5 Flash scored 26.6 there). No long-context surcharge tier documented in sources read; 80% cache discount.
- **Modalities:** **Text, image, speech (audio), and video in; text out** — AA-confirmed. MMMU-Pro 83.2 (AA), ParseBench 69.12, Design Arena Website 1,294; Hebbia/Harvey cite document parsing, chart/data analysis, report drafting; third-party vision coverage calls it strong on video.
- **Pricing (as of 2026-11-12):** Launch list **$1.50 in / $7.50 out per 1M** (official blog); current effective **$0.75 / $3.75** (AA + OpenRouter — intro rate, labelled), **80% cache discount**; blended ~$0.63/1M (AA provider page, cheapest via AI Studio). AA cost-per-index-task: **N/A** (deprecated).
- **Architecture:** Proprietary, undisclosed; reasoning model (High variant); efficiency-tuned post-training of the 3.5 Flash line — fewer reasoning steps/tool calls per workflow, built-in computer-use tool.

### Raw benchmarks found

Vendor-reported (blog.google launch post, July 21, 2026; comparisons vs 3.5 Flash in parentheses):

- DeepSWE **49.0** (vs 37), MLE-Bench **63.9** (vs 49.7), OSWorld-Verified **83.0** (vs 78.4), GDPval-AA v2 **1,421** (vs 1,349) — BenchLM's Google-reported row says **1,423** (minor same-vendor discrepancy, both labelled)
- Token efficiency: −17% output tokens on AA Index, up to −65% on DeepSWE; fewer unwanted code edits and execution loops

Independent runs:

- Artificial Analysis: live index **N/A** (deprecated); BenchLM carries a historical AA Intelligence Index **34.0** (version unstated — never compared with v5.0.1 indices); AA-GPQA-D **92.8**, AA-HLE **40.8**, AA-Omniscience Index **22.1** (accuracy 50.0, hallucination 55.6), AA-LCR **80.0**, CritPt **10.6**, AA Coding Index **69.2**, AA Agentic Index **30.1**, AA-SciCode 53.4, GDPval-AA normalized **39.2%**; performance **159 tok/s**, TTFT 12.29s
- ARC Prize (semi-private): ARC-AGI-1 **91.17**, ARC-AGI-2 **60.4**
- Epoch AI: FrontierMath v2 T1-3 **58.947**, Tier 4 **21.951**
- Vals AI: SWE-bench **79.6**, TB2.1 **73.8**, LiveCodeBench **88.1**, GPQA-D **93.4**, MMLU-Pro **89.3**
- Other: CursorBench 3.2 **53.5**, ParseBench 69.12 (LlamaIndex), Design Arena Website 1,294, MazeBench 0; BenchLM aggregate **62.38/100, #43 of 1026** (34/815 coverage, conservative per BenchLM)

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-V 83.0 (built-in computer-use tool), GDPval-AA v2 1,421/1,423, AA Agentic 30.1, fewer tool calls per workflow — a real step up in computer use over 3.5 Flash; capped by TB2.1 73.8 (Vals), GDPval normalized 39.2%, MazeBench 0, and no Toolathlon/MCP-Atlas rows for this generation.
- **Reasoning: 83/100.** GPQA-D 92.8 (AA) / 93.4 (Vals), MMLU-Pro 89.3, AA-HLE 40.8; capped by ARC-2 **60.4** (semi-private, below 3.5 Flash's vendor 72.1), FrontierMath v2 T4 22.0 / T1-3 58.9 (both below 3.5 Flash), CritPt 10.6, hallucination rate 55.6 — efficiency tuning traded away some hard-reasoning ceiling.
- **Context window: 82/100.** Full 1M, AA-LCR **80.0** (clear improvement over 3.5 Flash's 69.3), 80% cache discount, flat pricing; deducted because no MRCR-1M evidence exists for this model and the predecessor's 1M-depth retrieval was weak (26.6).
- **Multimodal: 84/100.** Text + image + audio + video in (AA-confirmed), MMMU-Pro 83.2, strong document/chart workflow endorsements (Hebbia, Harvey), Design Arena 1,294; capped by ParseBench 69.12 (down from 73.22) and no CharXiv/Video-MME rows published for this generation.
- **Coding: 84/100.** DeepSWE **49.0** (vs 37 on 3.5 Flash), MLE-Bench 63.9, SWE-V 79.6, LCB 88.1, CursorBench 3.2 53.5 (up from 48.8), fewer unwanted edits/loops; capped by TB2.1 73.8, AA Coding 69.2, SciCode 53.4 — better than 3.5 Flash across the board but still below Pro-tier and 3.7/3.8 Flash on hardest repos.
- **Cost efficiency: 88/100.** Effective $0.75/$3.75 (half the launch list) with 80% cache discount, −17% output tokens, fewer steps/tool calls, 159 tok/s and 12.29s TTFT — excellent cost-per-completed-task for agentic work; deducted for deprecated status (3.7 Flash is the newer replacement at the same intro rate) and AA index/cost-per-task no longer computed.
- **Overall Score: 83.6/100.** Mean of the five quality dims (85+83+82+84+84)/5 = 83.6. Best-fit (historical): the July–August 2026 production workhorse for multimodal agents, document/chart knowledge work, and computer-use automation at low cost-per-task; today prefer Gemini 3.7/3.8 Flash — 3.6 Flash remains a capable, token-efficient fallback whose hard-math and ARC-2 ceilings sit below its predecessor's claims.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Google's official July 21 launch blog fetched in full with vendor comparison rows, Artificial Analysis' live model page with specs and deprecation banner, BenchLM's 34-row sourced profile, OpenRouter rate card and third-party coverage via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **GDPval-AA v2 1,421 (blog prose) vs 1,423 (BenchLM's Google-reported row)** — minor same-vendor discrepancy, both cited; pricing **$1.50/$7.50 (launch list, official blog)** vs **$0.75/$3.75 (current AA/OpenRouter intro rate)** — both labelled with as-of dates; AA Intelligence Index **34.0** is historical and version-unstated while the live page shows N/A (deprecated) — never compared with v5.0.1 indices or with 3.5 Flash's 50.2. ARC-1/2 are ARC Prize semi-private runs (not vendor claims). Identity: Gemini 3.6 Flash ≠ 3.5 Flash ≠ 3.5 Flash-Lite ≠ 3.7 Flash; DeepSWE ≠ SWE-bench Verified; GDPval-AA Elo ≠ normalized %; FrontierMath v2 tiers separate.
- Reference URLs:
  - [Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [Gemini 3.6 Flash (High) Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [Gemini 3.6 Flash benchmark profile — BenchLM](https://benchlm.ai/models/gemini-3-6-flash)
  - [Gemini 3.6 Flash — OpenRouter](https://openrouter.ai/google/gemini-3.6-flash)
  - [ARC Prize — Gemini 3.6 Flash semi-private results](https://arcprize.org/results/gemini-3-6-flash)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Vals AI — Gemini 3.6 Flash independent runs](https://www.vals.ai/models/google_gemini-3.6-flash)
  - [Gemini 3.6 Flash for Vision — Roboflow blog](https://roboflow.com/blog/gemini-3-6-flash-for-vision)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.