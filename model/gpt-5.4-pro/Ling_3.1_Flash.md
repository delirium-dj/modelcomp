# GPT 5.4 Pro — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.4-pro`; API `gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** OpenAI's maximum-performance tier of the GPT-5.4 family (launched 2026-03-05) — equal-first on the AA Intelligence Index at launch (57, xhigh, nearly tying Gemini 3.1 Pro Preview's 57.2), led the AA Coding Index (57) and AA Agentic Index (69), and set launch-era state-of-the-art on GDPval-AA, BrowseComp, Terminal-Bench-Hard, SWE-bench-Pro and MCP Atlas in independent AA tests.
- **Provider / access:** OpenAI API (Responses API only; background mode recommended — some requests take several minutes; time-to-first-token ~81–188s at xhigh), ChatGPT, Codex; reasoning effort medium (default)/high/xhigh.
- **Release / knowledge:** 2026-03-05; knowledge cutoff August 2025.
- **IDs:** `opencode/gpt-5.4-pro`.
- **Context window:** 1,050,000 (1.05M) tokens; prompts >272K input bill the FULL session at 2x input and 1.5x output. NOTE: the repo `meta.json` stub says "128K total" — stale; OpenAI API docs and AA report 1.05M.
- **Modalities:** text and image in; text out (per AA). NOTE: `meta.json` says "Text in/out" — stale; image input is supported.
- **Pricing (as of 2026-10-02):** $30.00/$180.00 per 1M input/output (the most expensive list price in this report set); GPT-5.4 (non-Pro) is $2.50/$15.00 with $0.25 cached; Batch/Flex at half the standard rate, Priority at 2x.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (GPT-5.4 Pro, xhigh, unless noted):

- AA Agentic Index: **69** — led all models tested at launch (Claude Opus 4.6 max: 68)
- BrowseComp: **82.7%** (RankedAGI) — SOTA at launch per AA
- OSWorld-Verified (computer use): **75%** (above the 72.4% human baseline)
- Terminal-Bench Hard: **SOTA at launch** (AA; GPT-5.4 non-Pro: 57.6%, #4; current field leader Fable 5: 62.9%)
- GDPval: **83%** win-or-tie rate vs professionals (OpenAI internal); GDPval-AA: SOTA at launch (AA; GPT-5.4 non-Pro: 1667 Elo on v2, 1233 on v2.1)
- MCP Atlas: SOTA at launch (AA; figure not captured — Muse Spark 1.2 now leads at 90.3%)
- MultiChallenge: **69.23%**; BilliardPhys-Bench: **72.3%** (#2); SimpleBench: **74.1%** (#6); LLMEval-Logic: **33.0%** (#3)
- Claw-Eval / ClawProBench / Agents' Last Exam / τ-Bench: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index (v4.x, xhigh): **57** — equal-first at launch (Gemini 3.1 Pro Preview: 57.2; Opus 4.6 max: 53; GPT-5.3 Codex xhigh: 54; GLM-5: 50); full-index run cost ~$2,950
- GPQA Diamond: **94.4%** (launch; #6 of 464; DataLearner 94.6%)
- Humanity's Last Exam (with tools): **58.7%** (system card; #6 of 466; field leader Opus 5: 64.7%); HLE text-only: **45.3%** ± 2.1
- CritPt: **30%** (vs GPT-5.4 23%, GPT-5 6%)
- FrontierMath: **47.6%** (GPT-5.4 non-Pro, #1 of tracked); MultiNRC: **58.29%** (non-Pro)
- MMLU-Pro: **84.6%**; MMMU: **79.2%**; MATH: **96.7%**; ARC-AGI: **73.3%** (all non-Pro third-party)

Coding:

- AA Coding Index: **57** — led all models tested at launch (Gemini 3.1 Pro Preview: 56)
- SWE-bench Pro: **57.7%** (official launch; SOTA at launch per AA; GPT-5.4 non-Pro: 56.8%)
- Terminal-Bench 2.0: **75.1%** / Terminal-Bench 2.1: **78.3%** (non-Pro, BenchmarkList)
- SWE-bench Verified: **78.2%** (non-Pro); LiveCodeBench: **84.1%** (non-Pro); SciCode: **56.6%** (non-Pro)
- DeepSWE: **55.5–56.0%** (non-Pro, third-party); Vibe Code Bench v1.1: **67.4%**; OpenHands Index: **64.3%**; IOI: **67.8%**; ALE-Bench: **1607** (#3); CUDABeaver **29.1%** and CUDAHercules **46.3%** (#1 each, non-Pro)

Long context:

- 1.05M-token window; AA-LCR: **82%** (non-Pro); no MRCR/RULER/GraphWalks score published for Pro

### Normalized scores (1–100)

- **Tool use: 86/100.** The AA Agentic Index of 69 led all models at launch, with BrowseComp 82.7% (SOTA), OSWorld-Verified 75% and Terminal-Bench Hard at launch-SOTA (~58–60%, now #4 behind Fable 5's 62.9%); GDPval-AA/MCP Atlas launch-SOTA claims are now dated (Muse Spark 1.2 leads MCP Atlas at 90.3%).
- **Reasoning: 90/100.** GPQA Diamond 94.4% and HLE-with-tools 58.7% (#6; leader 64.7%) are frontier-band, the AA Intelligence Index of 57 was equal-first at launch, and CritPt 30% (Pro) matches the current leader; the August-2025 knowledge cutoff and HLE-text-only 45.3% are the caveats.
- **Context window: 95/100.** 1.05M-token window with AA-LCR 82% (non-Pro); no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU 79.2% (non-Pro) supports it; no audio/video input.
- **Coding: 82/100.** The AA Coding Index of 57 led all models at launch, with LiveCodeBench 84.1%, SWE-bench Verified 78.2% and SciCode 56.6% (clears the 55% reference) strong; SWE-bench Pro 57.7%, DeepSWE 55.5–56.0% and Terminal-Bench 2.1 78.3% (non-Pro) sit below 2026 frontier bars.
- **Cost efficiency: 12/100.** $30/$180 per 1M is ~3x the $10/$50 reference (~30) on both axes; the full AA Intelligence Index run costs ~$2,950 (vs $892 for Gemini 3.1 Pro); Batch/Flex at half rate is the only offset.
- **Overall Score: 84/100.** (86+90+95+65+82)/5 = 83.6 → 84 — launch-era co-leader on intelligence, coding and agentic indices with frontier GPQA/HLE, but the $30/$180 list price makes it the cost outlier of the set.

---

## Update 2026-10-08 (6-day re-research)

Benchmark Atlas, BenchGecko and comparison-table rows found:

- BrowseComp: **89.3%** (Pro's own row — ahead of GPT-5.5's 84.4% on the same table; BenchLM comparison)
- FrontierMath (Benchmark Atlas, private sets): Tiers 1–3 v2 **82.5%** (v1: 50.0%), Tier 4 v2 **58.5%** (v1: 38.0%) — strong research-math reads
- Reasoning cross-checks: GPQA Diamond **92.8%** (BenchGecko; launch 94.4%, DataLearner 94.6%), HLE **44.3%** (Atlas) / 45.3% text-only ± 2.1 (system card), SimpleQA Verified **47.8%**, ArXivMath 02/2026 75.8%, MultiNRC 62.3%, MASK 91.7%, PrinzBench 79.0% (legal research 59.0%, search 20.0%), Chess Puzzles 58.6%, MineBench BT rating 1830 (conservative 1671), MultiChallenge 69.2%, CritPt (avg@5) 30.0%, FORTRESS ARS 14.8
- Composites: Epoch Capabilities Index **159**, BenchGecko average 80.7 (rank #20), Vector Wire tracks 19 results on 17 benchmarks
- GeneBench-Pro breakdown (Atlas): 16.3 overall — AA subset 9.2, externally reviewed 15.4, not-externally-reviewed 17.9, public-release subset 20.0
- No score change: BrowseComp 89.3% and FrontierMath v2 (82.5%/58.5%) sit within the Tool 86 / Reasoning 90 rationale

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 86 / Reasoning 90 / Context 95 / Multimodal 65 / Coding 82 / Cost 12 / Overall 84.** New data and confirmations this pass:

- **AA has not re-run GPT-5.4 Pro on the current v4.3.2 scale** — its model page reads "Unknown" for the Pro's Index (the v4.3.2 component table only carries GPT-5.4 xhigh: Index 39 est., GDPval-AA v2.1 1246, HLE 44%, CritPt 23%, AA-Omniscience 6, AA-LCR 82%). The launch-era reads (Index 57 equal-first, Coding Index 57, Agentic Index 69, CritPt 30%) remain the Pro's best public composite evidence; DeepLearning.AI's launch writeup confirms the full-index run cost **~$2,950 vs Gemini 3.1 Pro Preview's $892** (57.0 vs 57.2 points — "nearly tied"), and notes that in **OpenAI's own tests GPT-5.4 Pro underperformed Gemini 3.1 Pro Preview in several tasks** while costing more to run the same tests.
- **API detail confirmed:** Responses API **only** (to enable multi-turn model interactions before responding); some requests take several minutes — OpenAI recommends **background mode**; default snapshot `gpt-5.4-pro-2026-03-05`; reasoning effort medium (default)/high/xhigh; >272K input bills the full session at 2× input and 1.5× output across standard, batch and flex; regional processing +10%; no cached-input price is published for Pro (cache hit column blank) — unlike the non-Pro's $0.25/M.
- **Microsoft Foundry catalog:** "OpenAI's most capable frontier model" with **native computer use (keyboard, mouse, screenshots)** and **Tool Search** for large tool ecosystems — the computer-use and tool-search surfaces are first-party features, not just eval results.
- **Score impact:** none — every new read (AA's "Unknown" status, the $2,950 run cost, the Responses-only/background-mode detail, Foundry's feature list) lands inside the existing bands or is operational; the 10-08 fills (BrowseComp 89.3%, FrontierMath v2 82.5%/58.5%) remain the evidence base.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (OpenAI GPT-5.4 launch and API docs, Artificial Analysis, DeepLearning.AI, Microsoft Foundry catalog, Benchmark Atlas, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Pro.md`, using the same headings.
