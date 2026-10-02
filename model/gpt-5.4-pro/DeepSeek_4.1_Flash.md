# GPT 5.4 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 Pro (`openai/gpt-5.4-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** OpenAI's premium extended-reasoning deployment of GPT-5.4 — the deep-research successor to o3-deep-research / o4-mini-deep-research. Built for the hardest high-stakes analysis where extra accuracy justifies a much slower, far more expensive request.
- **Provider / access:** OpenAI API (Responses/Chat Completions), OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff August 2025.
- **IDs:** `gpt-5.4-pro` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.4-pro`. No Zen Free ID.
- **Context window:** 1,050,000 tokens total (**922K input / 128K max output**); LLM Reference records 1.05M context, 128,000 max output.
- **Modalities:** text and image in; text out. Reasoning yes (extended/Pro compute), tool use, structured outputs, code execution, batch API. **No prompt-caching discount.**
- **Pricing (as of 2026-10-01):** **$30 / $180 per 1M** in/out (OpenAI, OpenRouter, Vercel); OpenAI batch $15 / $90. No cache discount.
- **Architecture:** proprietary decoder-only; premium GPT-5.4 variant with extended reasoning. Not released.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (rank 6/44; BenchmarkList, observed) — note the GPT-5.5 Pro datapack lists the standard-weights single-agent figure at 84.4%
- GDPval: **82.0%** (general knowledge/work products, rank 4/106); Finance Agent v1.1: **61.5%** (rank 3/51)
- ARC-AGI-2: **83.3%**; ARC-AGI-1: **94.5%**; MultiChallenge: **69.2%** (rank 3/34)
- Terminal-Bench 2.1 / OSWorld-Verified / Tau3-Banking / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** — rank **#6 of 464** (BenchmarkList)
- HLE (Humanity's Last Exam): **58.7%** with tools; **45.3%** text-only (rank 2/64)
- Epoch/ECI: **150.26** — rank **#10 of 354**
- FrontierMath Tier 4: **38.0%**; MathArena Apex: **69.8%**; SimpleBench: **74.1%**; CritPt: **30.0%**
- GeneBench: **25.6%** (rank 2/16); GeneBench-Pro: **16.3%**; EnigmaEval: **23.8%** (rank 1/39, 100th pct)
- Vectara HHEM Hallucination Leaderboard: **91.7%** (bottom 60th pct — a weakness)

Coding:

- BIM-Edit: **43.94** (document understanding / edit); BenchmarkList's coding lane shows no task-mapped SWE-bench/Terminal-Bench peer row for this Pro ID
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 1.05M-token window documented; **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3%, GDPval 82.0% and ARC-AGI-2 83.3% are frontier-class agentic/knowledge-work results; no Terminal-Bench or OSWorld figure exists, so it is capped below the top band.
- **Reasoning: 93/100.** GPQA 94.4% (#6/464), HLE 58.7% with tools and ECI #10/354 are elite; SimpleBench 74.1% and FrontierMath Tier 4 38.0% keep it out of the 90+-only top reasoning band's ceiling.
- **Context window: 95/100.** 1.05M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 76/100.** No SWE-bench/Terminal-Bench/SciCode score is published for this Pro ID — it is positioned for deep research rather than coding — so it is scored moderately on the sparse edit/understanding signal, not treated as a frontier coder.
- **Cost efficiency: 18/100.** $30 / $180 per 1M (batch $15/$90) is top-band pricing with no cache discount.
- **Overall Score: 84/100.** (88 + 93 + 95 + 68 + 76) / 5 = 84.0 → 84. Best fit: expensive deep-research/reasoning queries; pick a cheaper sibling for coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (BenchmarkList model page with dated rows/percentiles/ranks, OpenRouter model page incl. its Artificial Analysis row, LLM Reference datapack); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.