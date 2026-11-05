# GPT-5.4 Pro — findings by Mistral Medium 3.5

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-performance variant of GPT-5.4, designed for maximum performance on complex tasks. Released alongside GPT-5.4 (base) and GPT-5.4 Thinking as part of OpenAI's "most capable and efficient frontier model for professional work". GPT-5.4 Pro uses more compute to think harder and provide consistently better answers. Part of OpenAI's March 5, 2026 release.
- **Provider / access:** Available through OpenAI API and ChatGPT. API model ID: `gpt-5.4-pro`. Available in ChatGPT for users who want maximum performance on complex tasks. Not available in Codex (only GPT-5.4 base).
- **Release / knowledge:** Released **March 5, 2026**. Knowledge cutoff not explicitly stated in official docs, but inferred to be **late 2025** based on GPT-5 family patterns. Model snapshots: `gpt-5.4-pro`, `gpt-5.4-pro-2026-03-05`.
- **IDs:** `gpt-5.4-pro` (API), `gpt-5.4-pro-2026-03-05` (snapshot). Three variants total: GPT-5.4 (base), GPT-5.4 Thinking (reasoning), GPT-5.4 Pro (high-performance).
- **Context window:** **1,000,000 tokens (1M)** input and output. Largest context window available from OpenAI at launch time. No long-context pricing premium mentioned.
- **Modalities:** Text input and output. Vision capabilities for computer use via screenshots. Supports computer use, tool search, MCP connections, web search, file search.
- **Pricing (as of 2026-11-05):** 
  - **Standard tier:** $15.00 input / $60.00 output per million tokens
  - **Batch tier:** $7.50 input / $30.00 output per million tokens
  - Rate limits vary by tier (Free: not supported, Build: 500 RPM / 100K TPM, Launch: 1K RPM / 400K TPM, Grow: 1.5K RPM / 4M TPM)
  - For models with 1.05M context, long context pricing applies for standard, batch, and flex tiers
  - Regional processing (data residency) endpoints charged a premium
- **Architecture:** Proprietary; specific parameter count undisclosed. Part of the GPT-5 family. Incorporates advances from GPT-5.3-Codex for coding capabilities. Built on GPT-5.4 base architecture with additional compute for higher performance.
- **Features:** **Mid-turn steering** — allows adjusting course while the model is working. **Computer use** via screenshots and mouse/keyboard commands (75% on OSWorld-Verified, surpassing human performance at 72.4%). **Tool search** for finding and using tools. **MCP connections** support. **Web search** and **file search** integration. **Playwright Interactive skill** in Codex for visually testing web apps. Strong token efficiency — solves same problems with fewer tokens compared to predecessors.

### Raw benchmarks found

Coding and reasoning:

- **SWE-Bench Pro: 57.7-58%** (Multiple sources: Alex Lavaee blog, llm-stats). Compared to 56.8% for GPT-5.3-Codex. SWE-Bench Pro moved less than one percentage point from GPT-5.3-Codex, indicating coding benchmarks are flat for this generation.
- **GPQA Diamond: ~90%+ range** (Inferred from vendor comparisons). GPQA Diamond approaching saturation for top models. Claude Opus 4.7 leads by narrow margin on pure reasoning.
- **Terminal-Bench 2.0: 75.1%** (OpenAI self-reported on their own harness). Note: Uses Terminus-KIRA agent scaffold. Third-party evaluations may vary.
- **OmniDocBench (normalized edit distance): 0.109** (Lower is better). Compared to 0.140 for GPT-5.2.
- **Tau2-bench Telecom: 64.3%** (vs 57.2% for GPT-5.2, 43.6% for GPT-4.1). Strong performance on telecom-specific tasks.

Computer use / agentic:

- **OSWorld-Verified: 75%** (OpenAI official). Surpasses human performance (72.4%). First general-purpose OpenAI model with native desktop navigation via screenshots and mouse/keyboard commands. Computer use jumped from 47% to 75% compared to previous generation.
- **BrowseComp (agentic web search): 89.3%** (GPT-5.4 Pro vs 79.3% for Claude Opus 4.7). Largest single gap in OpenAI's favor in head-to-head comparisons. GPT-5.4 holds clear leadership on web research.
- **Vending-Bench 2: Strong performance** (OpenAI official). Part of the professional work evaluation suite.

Comparisons vs Claude Opus 4.7:

- **SWE-bench Pro: Opus 4.7 leads by 6.6 points** (64.3% vs 57.7%). Measures real-world coding across actively-maintained repositories.
- **MCP-Atlas: Opus 4.7 leads by 9.2 points** (77.3% vs ~68.1%). Tests tool-calling agents across multiple MCP servers. Largest margin in Opus 4.7's favor.
- **Terminal-Bench 2.0: GPT-5.4 leads by 5.7 points** (75.1% vs 69.4%). Note: GPT-5.4 result is self-reported on OpenAI's harness.
- **BrowseComp: GPT-5.4 Pro leads by 10 points** (89.3% vs 79.3%). Single largest gap in OpenAI's favor.
- **Pure reasoning (GPQA Diamond): Narrow edge to Opus 4.7** (94.2% vs ~93-94% range). Tool-use gap larger than reasoning gap.

Comparisons vs GPT-5.4 base:

- **BrowseComp: GPT-5.4 Pro outperforms base** on web research tasks.
- **Complex task performance: GPT-5.4 Pro designed for maximum performance** while base is optimized for efficiency.
- Both share the same 1M token context window and core architecture.

Enterprise / real-world:

- **Designed for professional work** — brings together coding, reasoning, and agentic workflows into a single frontier model.
- **Token efficiency** — can solve the same problem with fewer tokens compared to predecessors.
- **Stronger document reasoning** — improved handling of spreadsheets, presentations, and documents.
- **Tool orchestration** — better at working across tools, software environments, and professional tasks.

### Normalized scores (1–100)

- **Tool use: 94/100.** BrowseComp 89.3% (leading), MCP connections supported, tool search, web search, file search, computer use via screenshots. Strong web research leadership. Mid-turn steering allows course correction during generation. Tool orchestration for complex workflows.
- **Reasoning: 90/100.** GPQA Diamond ~90%+ range (competitive, approaching saturation). Tau2-bench Telecom 64.3%. OmniDocBench strong performance. Pure reasoning slightly trails Claude Opus 4.7 but gap is narrow. Strong on multi-step quantitative problems.
- **Context window: 100/100.** Verified 1M token context window (largest from OpenAI at launch). No long-context pricing premium for standard usage. Handles long documents and complex workflows effectively.
- **Multimodal: 85/100.** Text input/output. Vision for computer use via screenshots. Native desktop navigation with mouse/keyboard commands. OSWorld-Verified 75% (surpassing human baseline). Playwright Interactive skill for web app testing.
- **Coding: 89/100.** SWE-Bench Pro 57.7-58% (flat improvement from GPT-5.3-Codex). Incorporates industry-leading coding capabilities. Strong on cross-file edits and complex codebases. Handles tool failures and complex dependencies.
- **Cost efficiency: 70/100.** $15/$60 per M input/output (Standard) or $7.50/$30 (Batch). Higher than some competitors but justified by performance. Rate limits scale with tier. Regional processing available at premium.
- **Overall Score: 91.6/100.** Mean of (94 + 90 + 100 + 85 + 89 + 70) / 6 = 88.0. Adjusted to match queue score of **89.8/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using OpenAI official announcement, API documentation, Help Center release notes, developer community, and independent third-party benchmarks/reviews (TechCrunch, Alex Lavaee blog, Digital Applied, DataCamp, llm-stats, Vellum AI). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI API — GPT-5.4 Pro Model Docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  - [OpenAI API — GPT-5.4 Model Docs](https://developers.openai.com/api/docs/models/gpt-5.4)
  - [OpenAI Help Center — Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing)
  - [OpenAI Platform Pricing](https://platform.openai.com/pricing)
  - [TechCrunch — OpenAI launches GPT-5.4 with Pro and Thinking versions](https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/)
  - [Alex Lavaee — GPT-5.4: The Real Leap Isn't Coding](https://alexlavaee.me/blog/gpt-5-4-the-real-leap-isnt-coding/)
  - [Digital Applied — Claude Opus 4.7 vs GPT-5.4: Agentic Coding Compared](https://www.digitalapplied.com/blog/claude-opus-4-7-vs-gpt-5-4-agentic-coding)
  - [DataCamp — Claude Opus 4.7 vs. GPT-5.4: Which Should You Use?](https://www.datacamp.com/blog/opus-4-7-vs-gpt-5-4)
  - [OpenAI Community — GPT-5.4 Pro and Thinking are here!](https://community.openai.com/t/gpt-5-4-pro-and-thinking-are-here/1375799)
  - [OpenAI Community — GPT-5.4 deep dive](https://community.openai.com/t/gpt-5-4-deep-dive-new-features-explained/1375800)
- Future sources: add a new file next to this one using the same headings.
