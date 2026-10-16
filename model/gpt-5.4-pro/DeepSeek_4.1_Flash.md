# GPT 5.4 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 Pro (`openai/gpt-5.4-pro`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. OpenAI's GPT-5.4 launch table (Pro column) + AI Release Tracker: **BrowseComp 89.3%**, **GPQA Diamond 94.4%**, **HLE 58.7% with tools / 42.7% text-only**, **ARC-AGI-1 94.5%**, **ARC-AGI-2 83.3%**, **FrontierMath T4 38.0% / T1–3 50.0%**, **GDPval 82.0%**, **FinanceAgent v1.1 61.5%**, Investment-Banking modeling 83.6%, Frontier Science Research 36.7%. Independent: BenchLM overall **68.93/100 (#19/889)**; Artificial Analysis **CritPt 30.0%** (Pro xhigh) and launch-era Intelligence Index **57** at **$2,950/index run** (Coding 57, Agentic 69 — SOTA at launch on GDPval-AA, BrowseComp, Terminal-Bench Hard, SWE-Bench Pro and MCP Atlas, per The Batch); Epoch **ECI 150.26 (#10/354)**; IPhO 2025 Theory 93.5%; SimpleBench 74.1%; MathArena Apex 69.8%; MultiChallenge 69.2%; GeneBench 25.6%; EnigmaEval 23.8% (#1/39). CloudPrice/LLM Gateway confirm **1.05M–1.1M ctx, 128K out, cutoff 2025-08, text+image+PDF in, $30/$180 (batch $15/$90)**, deprecation 2027-09-07.
> **Conflicts surfaced:** (1) **AA has deprecated this ID** (model-page Index N/A, pointing to GPT-5.5 Pro); the launch-era **57** is on the old basket and its **$2,950/index cost** is ~3× Gemini 3.1 Pro's $892. (2) **Pro ≠ uniformly better than base 5.4** — **GDPval is lower for Pro (82.0% vs 83.0%)** while FrontierMath Tier 4 is higher (38.0% vs 27.1%): the Pro SKU buys deep-reasoning headroom, not across-the-board wins. (3) **HLE text-only** reads **45.3% (prior file)** vs **42.7% (OpenAI launch)** — launch adopted. (4) **Context** reads 1.05M (LLMReference/BenchLM) vs 1.1M (AA/LLM Gateway/CloudPrice) vs 1.0M (base 5.4) — rounding of one window. (5) **No task-mapped Terminal-Bench/SWE-bench/OSWorld row exists for the Pro ID** (OpenAI lists those only for base GPT-5.4); the launch-era AA SOTA claims are a different basket than the current v4.3.2.
> Sources: https://openai.com/index/introducing-gpt-5-4/ · https://aireleasetracker.com/model/openai/gpt-5.4-pro · https://benchlm.ai/models/gpt-5-4-pro · https://artificialanalysis.ai/models/comparisons/gpt-5-5-medium-vs-gpt-5-4-pro · https://www.deeplearning.ai/the-batch/openais-gpt-5-4-pro-and-gpt-5-4-thinking-challenge-googles-gemini-3-1-pro-preview-as-best-all-around-ai-model · https://cloudprice.net/models/openai-gpt-5-4-pro

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** OpenAI's premium extended-reasoning deployment of GPT-5.4 — the deep-research successor to o3-deep-research / o4-mini-deep-research. Built for the hardest high-stakes analysis where extra accuracy justifies a much slower, far more expensive request. Superseded by GPT-5.5 Pro / GPT-6.x.
- **Provider / access:** OpenAI API (Responses/Chat Completions), Azure AI Foundry, OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** Released 2026-03-05 (LLM Gateway dates it 2026-03-01); knowledge cutoff 2025-08; announced deprecation 2027-09-07.
- **IDs:** `gpt-5.4-pro` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.4-pro`. No Zen Free ID.
- **Context window:** 1,050,000 tokens (AA/LLM Gateway/CloudPrice record 1.1M; base 5.4 is 1.0M); **128K max output**. Requests above 272K count at 2× usage.
- **Modalities:** text, image and PDF in; text out. Reasoning yes (extended/Pro compute, efforts default/minimal/xhigh), tool and function calling, structured outputs (soft JSON — strict schema not enforced upstream), web search, prompt caching. **No explicit cache discount published.**
- **Pricing (as of 2026-10-16):** **$30 / $180 per 1M** in/out up to 272K input tokens (OpenAI, AI Release Tracker; blended 7:2:1 ≈$45/M per AA); OpenAI batch **$15 / $90**. No cache-read discount.
- **Architecture:** proprietary decoder-only; premium GPT-5.4 variant with extended reasoning. Not released.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** — state of the art at launch (OpenAI, Pro column)
- GDPval: **82.0%** (Pro; base GPT-5.4 is 83.0%); Finance Agent v1.1: **61.5%**; Investment-Banking modeling (internal): 83.6%
- Terminal-Bench Hard and MCP Atlas: launch-era AA SOTA claims (Pro xhigh); **no current task-mapped Terminal-Bench 2.x row is published for the Pro ID**
- OSWorld-Verified / Tau2-Bench / Tau3-Banking / Claw-Eval: **not reported for the Pro ID** (OpenAI lists OSWorld-Verified 75.0% only for base GPT-5.4)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (lab); HLE: **58.7% with tools / 42.7% text-only**
- Epoch / ECI: **150.26 (#10/354)**; Frontier Science Research 36.7%; IPhO 2025 Theory 93.5%
- FrontierMath Tier 4: **38.0%**; Tiers 1–3: **50.0%**; MathArena Apex: 69.8%; SimpleBench: 74.1%; CritPt: **30.0%** (AA); MultiChallenge 69.2%
- Artificial Analysis Intelligence Index: **57 at launch (old basket, $2,950/run)**; current v4.3.2 page is **N/A** (deprecated) — AA Coding 57, Agentic 69 at launch
- GeneBench: **25.6%**; GeneBench-Pro: 16.3%; EnigmaEval: 23.8% (#1/39); Vectara HHEM Hallucination Leaderboard: 91.7% (a weakness)

Coding:

- No task-mapped SWE-bench/Terminal-Bench peer row is published for the Pro ID; launch-era AA covered Terminal-Bench Hard and SWE-Bench Pro SOTA (old basket)
- BIM-Edit: 43.94 (document understanding / edit); SWE-bench Verified / SciCode / DeepSWE: **no verified public score found**

Long context:

- 1.05M-token window documented; **no MRCR/RULER/GraphWalks retrieval score published for the Pro ID** — **no verified public score found** (the base GPT-5.4 table's MRCR v2 8-needle falls from 97.3% at 4–8K to 36.6% at 512K–1M).

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% (launch SOTA), GDPval 82.0%, Finance Agent v1.1 61.5% and launch-era GDPval-AA/MCP-Atlas SOTA are frontier-class; no current Terminal-Bench or OSWorld figure exists for the Pro ID, so it is capped below the top band.
- **Reasoning: 93/100.** GPQA 94.4%, HLE 58.7% with tools, ECI #10/354 and CritPt 30% are elite; SimpleBench 74.1%, FrontierMath Tier 4 38.0% and a text-only HLE of 42.7% keep it out of the top reasoning band's ceiling.
- **Context window: 95/100.** 1.05M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text, image and PDF input, text output (+image/PDF band = 60–70); base GPT-5.4 MMMU-Pro 81.2% (no tools); no audio/video documented.
- **Coding: 76/100.** No SWE-bench/Terminal-Bench/SciCode score is published for this Pro ID — it is positioned for deep research rather than coding — so it is scored moderately on launch-era composite signals, not treated as a frontier coder.
- **Cost efficiency: 18/100.** $30 / $180 per 1M (batch $15/$90) and ~$2,950 to run a launch-era AA index are top-band pricing with no cache discount.
- **Overall Score: 84/100.** (88 + 93 + 95 + 68 + 76) / 5 = 84.0 → 84. Best fit: expensive deep-research/reasoning queries; pick a cheaper sibling for coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (OpenAI GPT-5.4 launch page Pro column, AI Release Tracker, BenchLM model page + per-eval results, Artificial Analysis comparison pages, DeepLearning.AI The Batch, CloudPrice, LLM Gateway, The Decoder). Direct launch-table and independent AA values were promoted over the prior BenchmarkList-only rows; the HLE text-only discrepancy, the Pro-vs-base GDPval inversion, the AA deprecation and the context rounding are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
