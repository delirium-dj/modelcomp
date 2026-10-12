# GPT 5.4 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 Pro (`openai/gpt-5.4-pro`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from OpenAI's own GPT-5.4 launch table (Pro column) and AI Release Tracker: **BrowseComp 89.3%**, **GPQA Diamond 94.4%**, **HLE 58.7% with tools / 42.7% text-only**, **ARC-AGI-1 94.5%**, **ARC-AGI-2 83.3%**, **FrontierMath Tier 4 38.0% / Tiers 1–3 50.0%**, **GDPval 82.0%**, **FinanceAgent v1.1 61.5%**, Investment-Banking modeling 83.6%, Frontier Science Research 36.7%. BenchLM overall **68.93/100 (#19/889)**; independent rows added: **CritPt 30.0% (AA)**, IPhO 2025 Theory 93.5%.
> **Conflicts surfaced:** (1) **HLE text-only** reads **45.3% (prior BenchmarkList)** vs **42.7% (OpenAI launch)** — the launch figure is adopted. (2) **Economic value**: GPT-5.4 Pro is *not* uniformly better than base GPT-5.4 — **GDPval is lower for Pro (82.0% vs 83.0%)** and FrontierMath Tier 4 is higher (38.0% vs 27.1%), so the Pro SKU buys deep-reasoning headroom, not across-the-board wins. (3) **AA has deprecated this ID** (Index N/A; points to GPT-5.5 Pro); the file's ECI/GPQA rows remain the only live composite evidence. (4) **Context** reads 1.05M (prior/BenchLM) vs 1.0M (AA) vs 1.1M (AA FAQ) — rounding of the same window.
> Sources: https://openai.com/index/introducing-gpt-5-4/ · https://benchlm.ai/models/gpt-5-4-pro · https://artificialanalysis.ai/models/gpt-5-4-pro · https://aireleasetracker.com/model/openai/gpt-5.4-pro

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** OpenAI's premium extended-reasoning deployment of GPT-5.4 — the deep-research successor to o3-deep-research / o4-mini-deep-research. Built for the hardest high-stakes analysis where extra accuracy justifies a much slower, far more expensive request. Superseded by GPT-5.5 Pro / GPT-6.x.
- **Provider / access:** OpenAI API (Responses/Chat Completions), OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff 2025-08-31 (AA / AI Release Tracker).
- **IDs:** `gpt-5.4-pro` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.4-pro`. No Zen Free ID.
- **Context window:** 1,050,000 tokens total (**922K input / 128K max output**); AA records 1M, its FAQ 1.1M — same window, rounding only.
- **Modalities:** text and image in; text out. Reasoning yes (extended/Pro compute), tool use, structured outputs, code execution, batch API. **No prompt-caching discount.**
- **Pricing (as of 2026-10-11):** **$30 / $180 per 1M** in/out up to 272K input tokens (OpenAI, AI Release Tracker; blended 7:2:1 ≈$45/M per AA); OpenAI batch $15 / $90. No cache discount.
- **Architecture:** proprietary decoder-only; premium GPT-5.4 variant with extended reasoning. Not released.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** — new state of the art at launch (OpenAI, Pro column; rank 6/44 per BenchmarkList)
- GDPval: **82.0%** (Pro; base GPT-5.4 is 83.0%); Finance Agent v1.1: **61.5%** (rank 3/51); Investment-Banking modeling (internal): 83.6%
- ARC-AGI-2: **83.3%**; ARC-AGI-1: **94.5%** (ARC Prize, XHigh verified); MultiChallenge: 69.2% (rank 3/34)
- Terminal-Bench 2.0 / Terminal-Bench 2.1 / OSWorld-Verified / Tau2-Bench / Tau3-Banking / Claw-Eval: **not reported for the Pro ID** (OpenAI lists these only for base GPT-5.4)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** — rank **#6 of 464** (BenchmarkList)
- HLE (Humanity's Last Exam): **58.7%** with tools; **42.7%** text-only (OpenAI launch; prior file had 45.3%) (rank 2/64)
- Epoch/ECI: **150.26** — rank **#10 of 354**; Frontier Science Research 36.7%; IPhO 2025 Theory 93.5%
- FrontierMath Tier 4: **38.0%**; Tiers 1–3: 50.0%; MathArena Apex: 69.8%; SimpleBench: 74.1%; CritPt: **30.0%** (AA)
- GeneBench: **25.6%** (rank 2/16); GeneBench-Pro: 16.3%; EnigmaEval: 23.8% (rank 1/39, 100th pct)
- Vectara HHEM Hallucination Leaderboard: **91.7%** (bottom 60th pct — a weakness)

Coding:

- BIM-Edit: **43.94** (document understanding / edit); no task-mapped SWE-bench/Terminal-Bench peer row is published for this Pro ID
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 1.05M-token window documented; **no MRCR/RULER/GraphWalks retrieval score published for the Pro ID** — **no verified public score found** (the base GPT-5.4 table's MRCR v2 8-needle falls from 97.3% at 4–8K to 36.6% at 512K–1M).

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% (launch SOTA), GDPval 82.0% and Finance Agent v1.1 61.5% are frontier-class agentic/knowledge-work results; no Terminal-Bench or OSWorld figure exists for the Pro ID, so it is capped below the top band.
- **Reasoning: 93/100.** GPQA 94.4% (#6/464), HLE 58.7% with tools and ECI #10/354 are elite; SimpleBench 74.1%, FrontierMath Tier 4 38.0% and a now-confirmed text-only HLE of 42.7% keep it out of the top reasoning band's ceiling.
- **Context window: 95/100.** 1.05M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); base GPT-5.4 MMMU-Pro 81.2% (no tools); no audio/video documented.
- **Coding: 76/100.** No SWE-bench/Terminal-Bench/SciCode score is published for this Pro ID — it is positioned for deep research rather than coding — so it is scored moderately on the sparse edit/understanding signal, not treated as a frontier coder.
- **Cost efficiency: 18/100.** $30 / $180 per 1M (batch $15/$90) is top-band pricing with no cache discount.
- **Overall Score: 84/100.** (88 + 93 + 95 + 68 + 76) / 5 = 84.0 → 84. Best fit: expensive deep-research/reasoning queries; pick a cheaper sibling for coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-11
- Method: deep second-pass public internet research (OpenAI GPT-5.4 launch page Pro column, BenchLM model page + per-eval results, Artificial Analysis model page, AI Release Tracker). Direct launch-table and independent AA values were promoted over the prior BenchmarkList-only rows; the HLE text-only discrepancy, the Pro-vs-base GDPval inversion and the AA deprecation are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
