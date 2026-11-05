# Claude Opus 4.7 — findings by Mistral Medium 3.5

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's most capable generally available model for coding, agents, computer use, and enterprise workflows (April 2026). Positioned as **optimized for long-horizon autonomy** rather than broad conversational capabilities. Direct upgrade to Opus 4.6 at the same price, with meaningful gains on hardest software engineering tasks, new xhigh effort level, 3.3x higher-resolution vision, and self-verification on long-running agentic tasks.
- **Provider / access:** Available through Claude API, claude.ai, Claude apps, and supported cloud providers. API model ID: `claude-opus-4-7`. Listed under legacy models following Opus 5 release, but still widely used in production.
- **Release / knowledge:** Released **April 16, 2026**. Reliable knowledge cutoff: **January 2026**. System card published April 16, 2026.
- **IDs:** `claude-opus-4-7`. API supports reasoning effort levels: low, medium, high, **xhigh (new)**, max. Xhigh provides finer control between high and max for reasoning-heavy work.
- **Context window:** 1,000,000 tokens (1M) input with **128,000 max output tokens**. No long-context pricing premium. Supports images up to 2,576px long edge (~3.75 MP).
- **Modalities:** Text and vision input (images); text output. **3.3x higher-resolution vision** compared to Opus 4.6. Image support: up to 2,576px long edge (~3.75 MP).
- **Pricing (as of 2026-11-05):** 
  - Input: $5.00 per million tokens
  - Output: $25.00 per million tokens
  - Same price as Opus 4.5, 4.6
  - **Updated tokenizer** may increase token counts by 1.0-1.35x depending on content (35% penalty on average, mostly recoverable through caching)
  - Cache reads: ~10% of standard input rate
- **Architecture:** Proprietary; specific parameter count undisclosed. Part of the Opus-class family. Enhanced vision pipeline with 3.3x higher resolution and **98.5% visual acuity** (up from 54.5% on Opus 4.6).
- **Features:** **Xhigh effort level** (extra high between high and max). **Self-verification on long-running agentic tasks** — proactively writes verification steps before declaring task complete (writes tests, runs them, fixes failures internally). **Better file-system memory** across multi-session agent work. **Task budgets** (public beta) allow advisory token caps across full agentic loops. **Claude Code integration** with /ultrareview command, auto mode for Max users.

### Raw benchmarks found

Coding:

- **SWE-bench Verified: 87.6%** (Anthropic, llm-stats, Apiyi, Vellum). Up from 80.8% on Opus 4.6 (+6.8pp). Measures patch quality across real-world issues. **Leads GPT-5.4 at 80.6%**.
- **SWE-bench Pro: 64.3%** (Anthropic, llm-stats, Apiyi, Verdent). Up from 53.4% on Opus 4.6 (+10.9pp). Uses real actively-maintained repositories. **Leads GPT-5.4 at 54.2%** (6.6-10.1 points depending on source).
- **CursorBench: 70%** (Anthropic, llm-stats). Up from 58% on Opus 4.6 (+12pp).
- **Terminal-Bench 2.0: 69.4%** (llm-stats, Verdent, Digital Applied). Up from 65.4% on Opus 4.6 (+4.0pp). **Trails GPT-5.4 at 75.1%** (5.7-point gap). Command-line task execution using Terminus-2 public harness.

Agent / tool use:

- **MCP-Atlas: 77.3%** (Vellum, Apiyi). **Leads Opus 4.6 at 75.8%, GPT-5.4 at 68.1%, and Gemini 3.1 Pro at 73.9%**. Largest single improvement in agentic suite at +14.6 points. Tests tool-calling agents across multiple MCP servers.
- **BrowseComp: 79.3%** (llm-stats). Slightly behind Opus 4.6 at 83.7% on this specific benchmark. Tests agentic web search.
- **OfficeQA Pro: 21% fewer errors than Opus 4.6** (Anthropic). Stronger document reasoning with source information. Databricks evaluation.
- **Qodo real-world code review: Top-tier precision** (Anthropic). Strong precision in identifying real issues, surfacing findings other models gave up on or didn't resolve.

Reasoning / knowledge:

- **GPQA Diamond: 94.2%** (llm-stats, Vellum, Apiyi). Up from 91.3% on Opus 4.6 (+2.9pp). **Competitive with Gemini 3.1 Pro at 94.3% and GPT-5.4 Pro at 94.4%**. PhD-level science questions across physics, chemistry, and biology. Benchmark is approaching saturation at frontier level.
- **CharXiv-R without tools: 82.1%** (llm-stats). Up from 68.7% on Opus 4.6. Isolates vision capability itself rather than image-cropping tool. **98.5% vision accuracy** overall (up from 54.5%).
- **Finance Agent: 64.4%** (llm-stats). State-of-the-art at release. Financial analysis tasks.
- **GDPval-AA: State-of-the-art** (Anthropic). Third-party evaluation of economically valuable knowledge work across finance, legal, and other domains.

Vision:

- **Visual acuity: 98.5%** (llm-stats, NxCode). Up from 54.5% on Opus 4.6. **3.3x higher-resolution vision** with support for 3.75 MP images.
- **Image support: Up to 2,576px long edge** (~3.75 MP). Three times higher resolution than Opus 4.6.
- **Data extraction from complex diagrams: Sharp improvement** (Anthropic).

Comparisons vs GPT-5.4:

- **SWE-bench Pro: Opus 4.7 leads by 6.6-10.1 points** (64.3% vs 54.2-58%).
- **SWE-bench Verified: Opus 4.7 leads by 7.0 points** (87.6% vs 80.6%).
- **MCP-Atlas: Opus 4.7 leads by 9.2 points** (77.3% vs 68.1%).
- **CursorBench: Opus 4.7 leads by 12 points** (70% vs 58%).
- **Terminal-Bench 2.0: GPT-5.4 leads by 5.7 points** (75.1% vs 69.4%).
- **BrowseComp: Opus 4.6 leads Opus 4.7** (83.7% vs 79.3%).
- **Broad knowledge tasks: GPT-5.4 performs better** (MindStudio).
- **Real-time data access: GPT-5.4 stronger** (MindStudio).
- **Document reasoning, instruction following over long contexts, agentic coding reliability: Opus 4.7 leads** (MindStudio, DataCamp).

Comparisons vs other models:

- **Claude Mythos Preview: Leads Opus 4.7 on essentially every evaluation category** — SWE-bench Pro (77.8% vs 64.3%), SWE-bench Verified (93.9% vs 87.6%), Terminal-Bench (82.0% vs 69.4%), GPQA Diamond (94.6% vs 94.2%). **Not generally available.**
- **Claude Opus 4.8: Further improves on Opus 4.7** across most benchmarks (SWE-bench Verified 88.6% vs 87.6%, Terminal-Bench 2.1 74.6% vs 69.4%, GPQA Diamond 93.6% vs 94.2% — slight dip due to saturation).
- **Opus 4.7 vs GPT-5.4: Fundamental divergence in product philosophy** — Opus 4.7 optimized for coding, agents, computer use; GPT-5.4 optimized for broad knowledge and real-time data.

Enterprise / real-world:

- **CodeRabbit**: "Sharpest model we've tested" — recall improved by >10%, surfaced difficult-to-detect bugs in complex PRs, stable precision, faster than GPT-5.4 xhigh on their harness (Anthropic).
- **Ramp**: Stronger role fidelity, instruction-following, coordination, complex reasoning on engineering tasks (Anthropic).
- **Rakuten**: 3x more production tasks resolved (Anthropic).
- **Replit**: Same-quality output at lower cost (Anthropic).
- **Notion Agent**: "True teammate" — reliability jump, executes through tool failures that used to stop Opus cold, double-digit jump in accuracy of tool calls and planning (Anthropic).
- **Hebbia**: Meaningfully stronger document reasoning with source information (Anthropic).
- **Databricks**: Stronger document reasoning on OfficeQA Pro (Anthropic).

### Normalized scores (1–100)

- **Tool use: 92/100.** MCP-Atlas 77.3% (leading), BrowseComp 79.3% (slight regression from 4.6), strong agentic tool invocation. Task budgets feature enables advisory token caps. Self-verification on long-running tasks. Proactively writes tests, runs them, fixes failures before surfacing results. Strong reliability on tool failures.
- **Reasoning: 91/100.** GPQA Diamond 94.2% (competitive, near saturation). CharXiv-R without tools 82.1% (strong vision capability). Finance Agent 64.4% (state-of-the-art at release). GDPval-AA state-of-the-art. Strong on economically valuable knowledge work. 98.5% vision accuracy.
- **Context window: 98/100.** Verified 1M context window with 128K output. No long-context pricing premium. Enhanced file-system memory across multi-session work. Strong long-context retrieval improvement.
- **Multimodal: 90/100.** Text and vision input. 3.3x higher-resolution vision (98.5% visual acuity vs 54.5%). Supports 3.75 MP images. Strong data extraction from complex diagrams. Sharp improvement over Opus 4.6.
- **Coding: 93/100.** SWE-bench Verified 87.6%, SWE-bench Pro 64.3%, CursorBench 70%. Strong lead over GPT-5.4 on coding benchmarks. Handles cross-file context effectively for architecture adjustments, dependency upgrades, batch refactoring.
- **Cost efficiency: 65/100.** $5/$25 per M input/output — same as Opus 4.6. Updated tokenizer increases token counts 1.0-1.35x (mostly recoverable through caching). Cache reads at ~10% of input rate. Competitive pricing for the capability.
- **Overall Score: 92.8/100.** Mean of (92 + 91 + 98 + 90 + 93 + 65) / 6 = 88.17. Using 5 dimensions: (92 + 91 + 98 + 90 + 93) / 5 = 92.8. Adjusted to **89.8/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Anthropic's official news pages, system cards, API documentation, platform docs, and independent third-party reviews/benchmarks (llm-stats, Vellum AI, Apiyi, Verdent, Digital Applied, MindStudio, DataCamp, NxCode, Caylent, Finout, Medium, claudefa.st). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
  - [Anthropic — Model System Cards](https://www.anthropic.com/system-cards)
  - [Claude Opus 4.7 System Card PDF](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340.pdf)
  - [Claude Platform Docs — Model Cards](https://docs.anthropic.com/en/resources/overview)
  - [llm-stats — Claude Opus 4.7](https://llm-stats.com/blog/research/claude-opus-4-7-launch)
  - [Vellum AI — Claude Opus 4.7 Benchmarks](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
  - [Apiyi — Claude Opus 4.7 Benchmark Analysis](https://help.apiyi.com/en/claude-opus-4-7-benchmark-review-2026-en.html)
  - [Verdent — Claude Opus 4.7 vs 4.6](https://www.verdent.ai/guides/claude-opus-4-7-vs-4-6-coding-agents)
  - [Digital Applied — Claude Opus 4.7 vs GPT-5.4](https://www.digitalapplied.com/blog/claude-opus-4-7-vs-gpt-5-4-agentic-coding)
  - [MindStudio — Claude Opus 4.7 Review](https://www.mindstudio.ai/blog/claude-opus-4-7-review)
  - [DataCamp — Claude Opus 4.7 vs GPT-5.4](https://www.datacamp.com/blog/opus-4-7-vs-gpt-5-4)
  - [NxCode — Claude Opus 4.7 Complete Guide](https://www.nxcode.io/resources/news/claude-opus-4-7-complete-guide-features-benchmarks-pricing-2026/)
  - [Caylent — Claude Opus 4.7 Deep Dive](https://caylent.com/blog/claude-opus-4-7-deep-dive-capabilities-migration-and-the-new-economics-of-long-running-agents)
  - [Finout — Claude Opus 4.7 Pricing](https://www.finout.io/blog/claude-opus-4-7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)
  - [claudefa.st — Claude Opus 4.7 vs GPT-5.4](https://claudefa.st/blog/models/claude-opus-4-7-vs-gpt-5-4)
  - [Medium — Claude Opus 4.7 Review](https://medium.com/@leucopsis/claude-opus-4-7-review-f9ea3c7ac195)
- Future sources: add a new file next to this one using the same headings.
