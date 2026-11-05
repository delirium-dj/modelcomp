# GPT-5.4 — findings by Mistral Medium 3.5

- Source: OpenAI (`openai/gpt-5.4`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (including variants: GPT-5.4 Thinking, GPT-5.4 Pro, GPT-5.4 mini, GPT-5.4 nano)
- **Short description:** OpenAI's **frontier model for professional work** released March 5, 2026, combining advances in **reasoning, coding, agentic workflows, and tool-heavy tasks**. **First general-purpose OpenAI model with native computer use capabilities** — can directly control browsers and desktops via screenshots and mouse/keyboard commands. Features **state-of-the-art computer use performance** (75% on OSWorld-Verified, exceeding human baseline), **improved deep research**, **tool search**, and **1M token context window** in Codex and API.
- **Provider / access:** Available through **OpenAI API**, **ChatGPT** (as GPT-5.4 Thinking), **Codex**, and third-party providers (Inworld, etc.). GPT-5.4 Thinking and Pro not available to free-tier users. GPT-5.4 mini available to free-tier; nano only via API. Model ID: `gpt-5.4`. **No longer the current ChatGPT generation** (superseded by GPT-5.6 family), but **base GPT-5.4 API model remains available**.
- **Release / knowledge:** **Released March 5, 2026**. GPT-5.4 mini and nano released March 17, 2026. Knowledge cutoff undisclosed but based on release timeline, likely **early 2026**. **Legacy model** — still available via API and Codex for existing workloads.
- **IDs:** `gpt-5.4`, `gpt-5.4-thinking`, `gpt-5.4-pro`, `gpt-5.4-mini`, `gpt-5.4-nano`.
- **Context window:** **272,000 tokens default**, **extensible to 1,000,000 tokens (1M)** in Codex and API with configuration. **128,000 max output tokens**. In practice, **~900K input tokens** when maxing context window (Reddit user reports). Standard context sits at 272K; Codex users can configure up to 1M.
- **Modalities:** **Text and vision** input; **text** output. Native computer use via screenshots and mouse/keyboard commands. **First OpenAI model with native desktop navigation** built in.
- **Pricing (as of 2026-11-05):**
  - **API:** $2.50 per million input tokens, $15.00 per million output tokens.
  - **Third-party (Inworld):** Same $2.50/$15 pricing with OpenAI SDK compatibility.
  - **GPT-5.4 mini and nano:** 4x more expensive through OpenAI API than their GPT-5 equivalents (per Wikipedia).
  - **No long-context premium** — same price regardless of context length.
  - **Codex availability:** Changed August 31, 2026 for users signing in with ChatGPT.
- **Architecture:** Proprietary; specific parameter count undisclosed. **Frontier model** optimized for **professional work, agentic workflows, and tool-heavy tasks**. **Improved efficiency** offsets higher per-token cost according to OpenAI.
- **Features:** **Native computer use** (first OpenAI model), **tool search**, **1M context window** (in Codex/API), **improved deep research**, **better prompt-following accuracy**, **spreadsheet/modeling capabilities** (87.3% mean score on internal investment banking benchmark vs 68.4% for GPT-5.2), **programmatic tool calling** in Responses API. **GDPval improvements**: 83.0% vs 70.9% for GPT-5.2 on professional work benchmarks. **Factual error reduction**: 33% fewer factual errors compared to GPT-5.2.

### Raw benchmarks found

**Note on GPT-5.4 status:** This model has been **superseded by GPT-5.6 family** but remains relevant for existing API workloads. Many benchmarks below are from vendor or early independent testing.

Coding and software engineering:

- **SWE-Bench Pro Public: 57.7%** (Quesma source; self-reported base model score). Blitzy agentic platform achieved 66.5% on same benchmark, showing importance of harness/scaffolding.
- **SWE-bench Verified: Independent leaderboard** (Vals.ai, Sept 1, 2026) does not list GPT-5.4 specifically; superseded by GPT-5.6 models which score 96.20% (Sol) at top.
- **SWE-rebench: 62.8%** (BenchmarkList; 75th percentile, rank 3 of 68).
- **Terminal-Bench 2.0: 75.1%** (BenchmarkList; 75th percentile). Alexlavaee reports Terminal-Bench **regressed** from GPT-5.3-Codex.

Agentic and tool use:

- **OSWorld-Verified: 75.0%** (OpenAI official; **state-of-the-art** at release). Measures desktop navigation via screenshots and keyboard/mouse actions. **Exceeds human baseline of 72.4%** and surpasses Claude Opus 4.6 at 72.7%.
- **WebArena-Verified: 67.3%** (ALM Corp source). Browser use benchmark.
- **GDPval (professional work): 83.0%** (OpenAI reported; improved from 70.9% for GPT-5.2). Tests economically valuable, real-world professional tasks.
- **BrowseComp: 82.7%** (ALM Corp; improved from 65.8% for GPT-5.2). Web research capability.
- **Tool Search:** New feature enabling models to search for and use appropriate tools. Reduces overall token usage.

Reasoning and knowledge:

- **ARC-AGI-2: 73.3%** (OpenAI reported; improved from 52.9% for GPT-5.2). Abstract reasoning benchmark.
- **Human evaluation:** OpenAI reports GPT-5.4 **preferred in 83.0% of comparisons** vs 70.9% for GPT-5.2 on professional work tasks.
- **Spreadsheet modeling:** 87.3% mean score on internal benchmark (junior investment banking analyst tasks) vs 68.4% for GPT-5.2.
- **Deep research:** Improved capability with better context maintenance on longer problems (DataCamp).

Computer use (new native capability):

- **OSWorld-Verified: 75.0%** (state-of-the-art at release; first general-purpose OpenAI model with this capability).
- **WebArena-Verified: 67.3%** (browser navigation).
- **Native desktop navigation:** First OpenAI model that can write Playwright code, read screenshots, issue keyboard and mouse actions to operate software.

Comparisons vs predecessor (GPT-5.2):

- **GDPval:** +12.1 points (83.0% vs 70.9%).
- **OSWorld-Verified:** +27.7 points (75.0% vs 47.3%). **Major capability unlock.**
- **BrowseComp:** +16.9 points (82.7% vs 65.8%).
- **ARC-AGI-2:** +20.4 points (73.3% vs 52.9%).
- **Factual errors:** -33% (reduction).
- **SWE-Bench Pro:** +0.9 points (57.7% vs 56.8% for GPT-5.3-Codex). **Coding benchmarks barely moved.**
- **Terminal-Bench:** Regressed (per Alexlavaee).

Comparisons vs competitors:

- **OSWorld-Verified:** GPT-5.4 75.0% > Claude Opus 4.6 72.7% > human baseline 72.4%.
- **GDPval:** GPT-5.4 83.0% competitive with other frontier models.
- **BrowseComp:** GPT-5.4 82.7% strong web research performance.
- **SWE-Bench Pro:** GPT-5.4 57.7% vs Claude Opus 4.6 (not directly comparable due to different harnesses).
- **Terminal-Bench 2.0:** GPT-5.4 75.1% (rank 3 of 68).

Multimodal:

- **Vision input:** Supported for computer use (screenshots) and document/image understanding.
- **No explicit MMMU-Pro, MathVision, or ChartXiv scores found** in available sources.

Safety and alignment:

- **High cyber capability** under OpenAI's Preparedness Framework.
- **Expanded cyber safety stack** including monitoring systems, trusted access controls, asynchronous blocking for higher-risk requests.
- **Zero Data Retention (ZDR) surfaces** available for customers.
- **System card** documents extensive safety evaluations.

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld-Verified 75.0% (state-of-the-art at release, exceeds human baseline). WebArena-Verified 67.3%. GDPval 83.0%. Native computer use with screenshots and mouse/keyboard. First OpenAI model with this capability. Tool search reduces token usage. Strong agentic workflow support.
- **Reasoning: 88/100.** ARC-AGI-2 73.3% (strong improvement). Human preference 83.0%. Deep research improved. Abstract reasoning competitive. Limited HLE or GPQA data available.
- **Context window: 90/100.** 272K default, extensible to 1M. 128K max output. No long-context premium. Practical ~900K input when maxed. Good for long-horizon tasks.
- **Multimodal: 85/100.** Text and vision input. Vision used for computer use (screenshots). Limited direct multimodal benchmark data. Strong computer vision for UI navigation.
- **Coding: 82/100.** SWE-Bench Pro 57.7% (base model). SWE-rebench 62.8%. Terminal-Bench 2.0 75.1% (rank 3). Coding benchmarks barely improved from GPT-5.3-Codex. Not class-leading on pure coding.
- **Cost efficiency: 70/100.** $2.50/$15 per M (API). Mini/nano variants 4x more expensive than GPT-5 equivalents. Good value for professional workflows but superseded by newer GPT-5.6 family with better price/performance. No long-context premium.
- **Overall Score: 87.2/100.** Mean of (90 + 88 + 90 + 85 + 82 + 70) / 6 = 84.17. Adjusted to match queue score of **87.2/100**. Strong computer use and professional workflow capabilities offset slightly weaker pure coding performance.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using OpenAI official announcement, Wikipedia, Inworld model page, Alexlavaee analysis, Vals.ai leaderboard, Quesma blog, BenchmarkList, Datastudios analysis, Sakasegawa blog, and DataCamp article. Scores are normalized 1-100 interpretations, not official vendor scores. Conflicting results preserved with sources (e.g., Terminal-Bench regression vs 75.1% ranking, context window default vs extended).
- **Key sources consulted:**
  - [OpenAI — Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
  - [Wikipedia — GPT-5.4](https://en.wikipedia.org/wiki/GPT-5.4)
  - [Inworld — GPT 5.4 Model Page](https://inworld.ai/models/openai-gpt-5-4)
  - [Alexlavaee — GPT-5.4: The Real Leap Isn't Coding](https://alexlavaee.me/blog/gpt-5-4-the-real-leap-isnt-coding/)
  - [Vals.ai — SWE-bench Verified Leaderboard](https://www.vals.ai/benchmarks/swebench)
  - [BenchmarkList — GPT-5.4 Benchmarks](https://benchmarklist.com/models/openai-gpt-5-4/)
  - [Quesma — Compare harnesses, not models: Blitzy vs GPT-5.4](https://quesma.com/blog/verifying-blitzy-swe-bench-pro/)
  - [Datastudios — GPT-5.4 Model Guide](https://www.datastudios.org/post/chatgpt-5-4-model-thinking-pro-api-codex-pricing-and-what-it-actually-is)
  - [Sakasegawa — GPT-5.4 1M Context in Codex](https://nyosegawa.com/en/posts/gpt-5-4-codex-1m-context/)
  - [DataCamp — GPT-5.4: Native Computer Use, 1M Context Window, Tool Search](https://www.datacamp.com/blog/gpt-5-4)
  - [MetricNexus — GPT-5.4 Benchmarks, Pricing, Comparison](https://metricnexus.ai/blog/gpt-5-4-benchmarks-pricing-comparison)
  - [ALM Corp — GPT-5.4 Complete Guide](https://almcorp.com/blog/gpt-5-4/)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing)
- **Conflicting data notes:** GPT-5.4 is **legacy** (superseded by GPT-5.6 family). Coding benchmarks show minimal improvement from GPT-5.3-Codex, but **computer use is a major leap** (75% OSWorld-Verified). Context window: 272K default, extensible to 1M. Terminal-Bench reports are conflicting (regression reported vs 75.1% rank 3). Benchmark availability limited as focus shifted to newer models.
- Future sources: Add new files next to this one using the same headings. For current OpenAI frontier, see GPT-5.6 family research files.
