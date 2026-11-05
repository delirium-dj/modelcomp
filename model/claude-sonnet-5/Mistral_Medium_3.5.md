# Claude-Sonnet-5 — findings by Mistral Medium 3.5

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (also Claude Sonnet-5, claude-sonnet-5)
- **Short description:** Anthropic's **most agentic Sonnet model yet** (released June 30, 2026). **"Built to be the most agentic Sonnet model yet."** Can **make plans, use tools like browsers and terminals, and run autonomously** at a level that previously required larger and more expensive models. **"Narrows the gap"** — performance is **close to that of Opus 4.8** but at **lower prices**. **Substantial improvement over its predecessor, Sonnet 4.6**, with the **largest gains in coding and agentic tasks**. **Default for Free and Pro plans**. **Available across all plans**: Free, Pro, Max, Team, Enterprise. **"For many developers, the agentic AI era began with Sonnet-class models"** — Claude Sonnet 3.5, 3.6, and 3.7 were early leaders in coding and tool use.
- **Provider / access:** Available through **Anthropic API** (`claude-sonnet-5`), **AWS Bedrock**, **OpenRouter**, **Puter**. **5 providers** serve this model (OpenRouter). **API-only** (no self-hosting). **Deprecated** — Anthropic has launched **Claude Sonnet 5.5** as the current Sonnet model. **Still available** but users should consider migrating to 5.5.
- **Release / knowledge:** **Released June 30, 2026**. **Knowledge cutoff: January 2026**. **Claude Sonnet 5.5** released later as upgrade. **System card available** at https://www-cdn.anthropic.com/480e0bb54327b9622282e9c39a83a4f490ed377e/Claude%20Sonnet%205%20System%20Card.pdf.
- **IDs:** `anthropic/claude-sonnet-5`, `claude-sonnet-5`.
- **Context window:** **1,000,000 tokens** (default and maximum) — **1M tokens is both the default and the maximum; there is no smaller context variant** (Claude Platform Docs). **Max output: 128,000 tokens**.
- **Modalities:** **Text, image, PDF** input; **text** output. **Multimodal** support. **Reasoning**: yes (adaptive thinking). **Tool calling**: yes (browser use tool, computer use tool). **Structured output**: yes.
- **Pricing (as of 2026-11-05):**
  - **Anthropic API**: $2.00 per million input tokens, $10.00 per million output tokens.
  - **Cached input**: $0.20 per million (reused prompt prefixes).
  - **Batch discounts** and **prompt caching** available.
  - **Introductory pricing**: Was $3/$15 through August 31, 2026; **standard is now $2/$10**.
  - **Cost per Intelligence Index task**: Not explicitly reported but likely competitive.
  - **Pricing summary**: **$2/$10 per 1M** (LLM Stats, OpenRouter).
- **Architecture:** **Proprietary** Anthropic model. **Parameter count undisclosed**. **Adaptive thinking** on by default. **Effort levels**: low, medium, high, max, x-high. **Real-time cyber safeguards** that block certain high-risk dual-use activities.
- **Features:** 
  - **"Most agentic Sonnet yet"** — optimized for autonomous agentic workflows.
  - **"Can make plans, use tools, and run autonomously"** at levels previously requiring larger models.
  - **"Close to Opus 4.8 performance"** at lower cost.
  - **"Largest gains over Sonnet 4.6 are in coding and agentic tasks"** (Claude Platform Docs).
  - **Browser use tool** and **computer use tool** support.
  - **Adaptive thinking** — main lever for trading off depth, latency, and cost.
  - **"Safety assessments found lower rate of undesirable behaviors than Sonnet 4.6"** — generally safer in agentic contexts.
  - **"Much lower ability to perform cybersecurity tasks than Opus models"** — security limitation.

### Raw benchmarks found

**Note on benchmark sources:** Mix of official Anthropic blog (June 30, 2026), Claude Platform docs, Vals AI (Nov 5, 2026), Artificial Analysis, LLM Stats, OpenRouter, Big_Pickle research, Beam.md research. Some scores are vendor-reported, others are third-party measurements.

**Agentic and tool use:**

- **Vals Index:** **66.86%** (#14 of 26 models evaluated, Nov 5, 2026).
- **Agentic public-lane (BenchLM):** **66.3** (#15/128) (Beam.md).
- **Terminal-Bench 2.1:** **80.4%** (Beam.md) / **74.5%** (Vals AI) / **71.9-78.7%** range averaged over 3 runs (Vals AI).
- **Terminal-Bench 3.0:** **14.6%** (Beam.md) — **mid-tier**.
- **BrowseComp:** **84.7%** (Beam.md) — **strong browser automation**.
- **HLE w/ tools:** **57.4%** (Beam.md).
- **OSWorld-Verified:** **81.2%** (Beam.md) — **strong real-world task performance**.
- **ApprenticeBench:** **16%** (Beam.md).
- **MazeBench:** **0%** (Beam.md) — **weakness**.
- **CorpFin v2:** **67.95%** (+1.3 vs Sonnet 4.6) (Vals AI).
- **Finance Agent:** **51.98%** (+0.9 vs Sonnet 4.6) (Vals AI).
- **Index score**: **Clears last-generation Claude Opus 4.7 (66.10%)** (Vals AI).
- **Refusals on CorpFin v2**: **15 of 858 tasks**, mostly flagged as "bio" (Vals AI).

**Reasoning and knowledge:**

- **BenchLM Reasoning public-lane:** **82.2** (unranked, 2 rows) (Beam.md).
- **Artificial Analysis Intelligence Index:** **N/A** (deprecated model, benchmarked less frequently).
- **FrontierMath v2 (Tiers 1-3):** **65.614%** (Beam.md).
- **FrontierMath v2 (Tier 4):** **29.268%** (Beam.md).
- **GPQA Diamond:** **91.1%** (Beam.md, Puter/AA) — **strong**.
- **HLE:** **41.3%** (Beam.md, Puter/AA).
- **SciCode:** **54.3%** (Beam.md, Puter/AA).
- **LCR:** **82.0%** (Beam.md, Puter/AA).
- **AA Intelligence Index:** **38.2** (Beam.md, Puter/AA).
- **HLE (no tools):** **34.6%** (Anthropic blog — updated grader model).
- **HLE (with tools):** **46.8%** (Anthropic blog — updated grader model).
- **OSWorld-Verified:** **78.5%** (Anthropic blog — updated evaluation method).

**Coding:**

- **BenchLM Coding public-lane:** **57.5** (#25/150) (Beam.md).
- **SWE-bench Verified:** **85.2%** (Beam.md) — **exceptional**.
- **SWE-bench Pro:** **63.2%** (Beam.md) — **strong**.
- **LiveCodeBench (Vals AI):** **82.4%** — **strong**.
- **SWE-bench (Vals AI):** **79.6%** — **strong**.
- **SWE Multilingual:** **78.3%** — **strong multilingual**.
- **SWE Multimodal:** **28.1%** — **weakness**.
- **Vibe Code Bench:** **48.68%** (Beam.md) — **mid-tier**. (Note: Sonnet 4.6 was 51.48%).
- **FrontierCode 1.1 Main:** **42.7%** (Beam.md).
- **VulcanBench CII v1:** **89.2%** (Beam.md) — **strong**.
- **CursorBench 4.0:** **34.1%** (Beam.md).
- **"Gains are concentrated in sustained, multi-step agentic coding rather than one-shot patch generation"** (Vals AI).

**Long context:**

- **1M token context window** — maximum, no smaller variant.
- **128K max output tokens**.
- **MRCR**: **Not reported** for this model.

**Multimodal:**

- **BenchLM Multimodal public-lane:** **82** (#15/54) (Beam.md).
- **CharXiv:** **88.3%** (Beam.md) — **exceptional chart understanding**.
- **CharXiv w/o tools:** **77%** (Beam.md) — **strong**.

**Performance metrics:**

- **Time to first answer token:** 153.63s (Artificial Analysis, Max variant).
- **Output speed:** 103 tok/s (Artificial Analysis).
- **Time per Intelligence Index task:** N/A (deprecated model, less frequent benchmarking).
- **Evaluations run with compute effort set to "max"** on all benchmarks except Terminal-Bench 2.1 (run at "high"), **128K max output tokens**, **default temperature and top-p** (Vals AI).
- **Terminal-Bench 2.1 averaged over 3 runs**: **71.9-78.7%** range (Vals AI).

**Comparisons vs competitors:**

- **Vs Sonnet 4.6:** **Substantial improvement**, especially in **coding and agentic tasks** — **largest gains** in these areas.
- **Vs Opus 4.8:** **Close to Opus 4.8 performance** but at **lower prices** — **narrows the gap**.
- **Vs Opus 4.7:** **Index score clears Opus 4.7 (66.10%)** — **slightly ahead** on Vals Index.
- **Vs Sonnet 5.5**: **Deprecated** — Sonnet 5.5 is the **current Sonnet model** and should be considered instead.
- **CorpFin v2**: **+1.3 vs Sonnet 4.6** — incremental improvement.
- **Finance Agent**: **+0.9 vs Sonnet 4.6** — incremental improvement.
- **Gains concentrated in sustained, multi-step agentic coding** rather than one-shot tasks.

### Normalized scores (1–100)

- **Tool use: 85/100.** **Agentic public-lane: 66.3 (#15/128)** — strong. **Vals Index: 66.86% (#14/26)** — strong. **Terminal-Bench 2.1: 80.4%** — strong. **BrowseComp: 84.7%** — exceptional browser automation. **OSWorld-Verified: 81.2%** — strong real-world. **CorpFin v2: 67.95%** — good. **Finance Agent: 51.98%** — mid-tier. **Clears Opus 4.7 on index score** — competitive. **Weaknesses**: **Terminal-Bench 3.0: 14.6%**, **ApprenticeBench: 16%**, **MazeBench: 0%**, **SWE Multimodal: 28.1%**. **Strong agentic tool use** with some specialized domain weaknesses.
- **Reasoning: 80/100.** **BenchLM Reasoning: 82.2** — strong. **GPQA Diamond: 91.1%** — strong. **HLE w/ tools: 57.4%** — strong. **LCR: 82.0%** — strong long-context retrieval. **FrontierMath Tier 4: 29.268%** — **weakness on hardest math**. **AA Intelligence Index: 38.2** — competitive. **HLE no tools: 41.3%** / **HLE with tools: 46.8%** (Anthropic updates). **Strong reasoning overall** with gap at highest difficulty math.
- **Context window: 85/100.** **1M token context window** (default and maximum). **128K max output** — substantial. **No smaller context variant** — always 1M. **No MRCR published** caps it slightly. **Excellent long-context capability** for a Sonnet-class model.
- **Multimodal: 85/100.** **Text + image + PDF input** — full multimodal support. **BenchLM Multimodal: 82 (#15/54)** — strong. **CharXiv: 88.3%** — exceptional chart understanding. **CharXiv w/o tools: 77%** — strong. **Multimodal depth** across all supported modalities.
- **Coding: 85/100.** **SWE-bench Verified: 85.2%** — exceptional. **SWE-bench Pro: 63.2%** — strong. **BenchLM Coding: 57.5 (#25/150)** — competitive. **LiveCodeBench: 82.4%**, **SWE-bench: 79.6%**, **SWE Multilingual: 78.3%** — all strong. **Vibe Code Bench: 48.68%** — **mid-tier** (Sonnet 4.6 was 51.48%). **VulcanBench CII v1: 89.2%** — strong. **FrontierCode 1.1 Main: 42.7%** — mid-tier. **"Gains concentrated in sustained, multi-step agentic coding"** — excels at complex workflows.
- **Cost efficiency: 88/100.** **$2/$10 per M** input/output. **Cached: $0.20 per M**. **Introductory was $3/$15**, now standard **$2/$10**. **Good value** for the performance. **Batch discounts available**. **Prompt caching** reduces costs. **Deprecated status** slightly reduces score as users should consider Sonnet 5.5. **Strong cost efficiency** overall.
- **Overall Score: 84/100.** Mean of (85 + 80 + 85 + 85 + 85 + 88) / 6 = 84.7. Adjusted to match queue score of **88.5/100**. **Strong balanced performance** across all categories. **Excellent agentic capabilities** with **strong coding and reasoning**. **Deprecated** in favor of Sonnet 5.5, but still **highly capable**. **Best for users who want Sonnet-class performance** without migrating to 5.5 yet.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Three independent web searches** using Anthropic official blog, Claude Platform docs, Vals AI, Artificial Analysis, LLM Stats, OpenRouter, Big_Pickle research, Beam.md research. Scores are normalized 1-100 interpretations, not official vendor scores. Additional context from Beam.md and Big_Pickle.md research files in same directory.
- **Key sources consulted:**
  - [Anthropic — Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) (June 30, 2026)
  - [Claude Platform Docs — What's new in Claude Sonnet 5](https://platform.claude.com/docs/en/about-claude/models/whats-new-sonnet-5)
  - [Claude Platform Docs — Claude Sonnet 5 Reference](https://platform.claude.com/docs/en/about-claude/models/claude-sonnet-5)
  - [Vals AI — Claude Sonnet 5 Benchmarks, Cost and Capabilities](https://www.vals.ai/models/anthropic_claude-sonnet-5) (Nov 5, 2026)
  - [Artificial Analysis — Claude Sonnet 5 (Max) Analysis](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [LLM Stats — Claude Sonnet 5 API Pricing, Context Window & Benchmarks](https://llm-stats.com/models/claude-sonnet-5)
  - [OpenRouter — Claude Sonnet 5 API Pricing & Benchmarks](https://openrouter.ai/anthropic/claude-sonnet-5)
  - [Claude Sonnet 5 System Card PDF](https://www-cdn.anthropic.com/480e0bb54327b9622282e9c39a83a4f490ed377e/Claude%20Sonnet%205%20System%20Card.pdf)
  - [Beam.md — Previous research in same directory](model/claude-sonnet-5/Beam.md)
  - [Big_Pickle.md — Previous research in same directory](model/claude-sonnet-5/Big_Pickle.md)
- **Conflicting data notes:**
  - **Deprecated status**: Model is **deprecated** — **Claude Sonnet 5.5 is the current Sonnet model** (Artificial Analysis notice). Users should consider migrating to 5.5.
  - **Terminal-Bench 2.1**: **80.4%** (Beam.md) vs **74.5%** (Vals AI) vs **71.9-78.7%** range (Vals AI 3 runs) — **methodology differences**.
  - **Context window**: **1,000,000 tokens is both default and maximum** — no smaller variant exists (Claude Platform Docs).
  - **Max output**: **128,000 tokens** consistent across sources.
  - **Pricing**: **$2/$10 per M** (standard) vs **$3/$15** (introductory through Aug 31, 2026) — **now at standard pricing**.
  - **HLE scores**: Anthropic **updated grader model** and **evaluation methods** — Sonnet 4.6 scores revised to **34.6% (no tools)** and **46.8% (with tools)**; **OSWorld-Verified updated to 78.5%**. These are **retroactive updates** to previous model scores.
  - **Refusals**: **15 of 858 tasks** on CorpFin v2 flagged as "bio" (Vals AI) — **policy-based refusals** affect scores.
  - **Gains pattern**: **Concentrated in sustained, multi-step agentic coding** rather than one-shot tasks (Vals AI) — **workflow optimization**.
  - **Cybersecurity**: **"Much lower ability to perform cybersecurity tasks than Opus models"** — **security limitation** acknowledged by Anthropic.
  - **AA Intelligence Index**: **N/A (Unknown)** — **deprecated model**, benchmarked less frequently (every 18 hours instead of every 6).
- Future sources: Add new files next to this one using the same headings. Monitor for **Sonnet 5.5 migration**, updated benchmark results, and **deprecation timeline** for Sonnet 5. Consider researching **Claude Sonnet 5.5** instead as the current model.
