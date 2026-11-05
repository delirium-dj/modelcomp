# Claude Opus 4.6 — findings by Mistral Medium 3.5

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's **frontier model** with **strong capabilities in software engineering, agentic tasks, and long context reasoning**. Delivers **state-of-the-art** performance on ARC-AGI-2, long context, and professional work benchmarks. Introduces **adaptive thinking** (replacing extended thinking) with four effort levels (low, medium, high, max) that let Claude dynamically decide when deeper reasoning helps. Features **compaction API** for effectively infinite conversations via server-side context summarization. **First Opus-class model with 1M token context window** (beta at launch, generally available from March 13, 2026). **Legacy model** — still available, not retiring before February 5, 2027.
- **Provider / access:** Available through **Anthropic API** (`claude-opus-4-6`), **Claude.ai**, **Claude Code**, **major cloud providers**, and **Inworld**. Accessible via multiple providers including Anthropic's direct API. Model ID: `claude-opus-4-6`.
- **Release / knowledge:** Released **February 5, 2026**. Knowledge cutoff not explicitly stated in public docs, but based on system card, likely **late 2025**. System card published February 2026 with multiple updates (Feb 6, 10, 17, March 6). **212-page system card** documents extensive safety evaluations and capability assessments.
- **IDs:** `claude-opus-4-6` (API model ID). Successor: Opus 4.7 (April 16, 2026), then Opus 4.8, then Opus 5, then Opus 5.5.
- **Context window:** **1,000,000 tokens (1M)** input context (**beta at launch, generally available March 13, 2026**), **128,000 max output tokens**. 1M context window was a premium tier above 200K tokens until March 13, 2026, when the long-context premium was dropped.
- **Modalities:** **Text and vision** input; text output. **Multimodal** capabilities. Supports images for vision tasks.
- **Pricing (as of 2026-11-05):** 
  - **Standard:** $5.00 input / $25.00 output per million tokens
  - **Batch API:** 50% discount → $2.50 input / $12.50 output per million tokens
  - **Prompt caching:** Up to 90% off cached input
  - **Same pricing as Opus 4.5** — substantially more capability at the same cost
  - **Output tokens cost 5x input tokens** across all models
  - **Fast mode**: $30 input / $150 output per million tokens (for lower latency)
  - **Pay-as-you-go** — no monthly subscription, billed per request
  - **Held steady from 4.6 family launch** (late 2025) through September 2026
- **Architecture:** Proprietary; specific parameter count undisclosed. **Frontier model** with broadly improved capabilities compared to previous models. Features **adaptive thinking** that replaces the binary choice of enabling/disabling extended thinking. **Compaction API** for server-side context summarization when conversations reach configurable token thresholds.
- **Features:** **Adaptive thinking** with four effort levels (low, medium, high, max — high is default). **Compaction API** for effectively infinite conversations. **Vision** capabilities. **Function calling**. **Web search**. **Prompt caching**. **Structured output**. **Breakthrough: Prefilling disabled** — assistant message prefilling returns 400 error on Opus 4.6 (migrate to structured outputs or system prompt instructions). **Multi-agent support**. **Computer use** via Claude Code. **Strong token efficiency** — takes fewer reasoning steps and tool calls to accomplish multi-step workflows.

### Raw benchmarks found

Coding and software engineering:

- **SWE-bench Verified: 80.8%** (vs 80.9% for Opus 4.5, 77.2% for Sonnet 4.5, 76.2% for Gemini 3 Pro, 80.0% for GPT-5.2). Near-parity with predecessor, maintaining elite coding performance. Averaged over 25 trials with adaptive thinking, max effort.
- **SWE-bench Multilingual: 77.83%** (multilingual software engineering).
- **Terminal-Bench 2.0: 65.4%** (vs 59.8% for Opus 4.5, 51.0% for Sonnet 4.5, 56.2% for Gemini 3 Pro, 64.7% for GPT-5.2). **Top Terminal-Bench 2.0 score of any model at launch**. Achieved with max effort. 89 tasks run 15 times each (1,335 trials), spread across 3 batches.

Agentic and tool use:

- **MCP-Atlas: 59.5%** (vs 62.3% for Opus 4.5). **Tool-use reliability** — measures how reliably a model calls tools correctly across sequences of dependent tool calls.
- **OSWorld-Verified: 72.7%** (vs 66.3% for Opus 4.5, 61.4% for Sonnet 4.5). Measures an agent's ability to complete tasks through a computer interface.
- **τ²-bench (Retail): 91.9%** (vs 88.9% for Opus 4.5, 86.2% for Sonnet 4.5, 85.3% for Gemini 3 Pro, 82.0% for GPT-5.2). Strong performance on retail-specific tasks.
- **τ²-bench (Telecom): 99.3%** (vs 98.2% for Opus 4.5, 98.0% for Sonnet 4.5, 98.0% for Gemini 3 Pro, 98.7% for GPT-5.2). Near-perfect performance on telecom tasks.

Reasoning and knowledge:

- **ARC-AGI-2 (Verified): 68.8%** (vs 37.6% for Opus 4.5, 13.6% for Sonnet 4.5, 45.1% for GPT-5.2 Deep Thinking). **State-of-the-art** on this benchmark.
- **GDPval-AA: Strong performance** (economically valuable, real-world professional tasks). 220 tasks from OpenAI's GDPval gold dataset, spanning 44 occupations across 9 major industries.

Web research:

- **BrowseComp single-agent: 83.73%** (originally 83.97%, updated due to improved cheating detection pipeline). **Multi-agent BrowseComp: 86.57%** (originally 86.81%, updated to 86.57%). Measures web search and browsing capabilities.
- **MRCR v2 (8-needle, 1M context): 78.3%** (vs **32.2% for Opus 4.7**). **Opus 4.6 with 64k extended-thinking mode dominates 4.7 on long-context multi-needle retrieval**. Most interesting regression in Opus 4.7.

Real-world enterprise:

- **BigLaw Bench: 38-of-40 results** (customer-reported). Strong legal capabilities.
- **Real-World Finance: Strong performance** (internal benchmark). Combination of code execution and tool use agentic harnesses. Tests finance domain knowledge, task completeness and accuracy, and presentation quality.
- **Managing a ~50-person organization across 6 repositories** (customer example). Handling both product and organizational decisions simultaneously.

Comparisons vs predecessor (Opus 4.5):

- **SWE-bench Verified: Near-parity** (80.8% vs 80.9%). Anthropic prioritized other capabilities while maintaining elite coding performance.
- **Terminal-Bench 2.0: +5.6 points** (65.4% vs 59.8%). Significant improvement.
- **OSWorld-Verified: +6.4 points** (72.7% vs 66.3%). Strong gains in computer use.
- **ARC-AGI-2: +31.2 points** (68.8% vs 37.6%). Major improvement in reasoning.
- **τ²-bench (Retail): +3.0 points** (91.9% vs 88.9%).
- **τ²-bench (Telecom): +1.1 points** (99.3% vs 98.2%).
- **MCP-Atlas: -2.8 points** (59.5% vs 62.3%). Slight regression.
- **Pricing: Parity** — same $5/$25 per M pricing.

Comparisons vs other models:

- **Opus 4.7**: Opus 4.6 leads on **MRCR v2 (8-needle, 1M context): 78.3% vs 32.2%**. Opus 4.7 costs the same but has regressions in long-context retrieval. For products built on multi-page web traversal (research agents, deep search, comparison shopping bots), **Opus 4.6 is the better choice**.
- **Opus 4.8**: Higher public agentic score (69.69 vs 62.06). But price, access, and workload can overturn the rank. Opus 4.8 has higher public score estimate, but 90% score intervals overlap.
- **Gemini 3 Pro**: Leads on visual reasoning (MMMU Pro without tools). 1M context window standard (vs beta for Opus 4.6 at launch).
- **GPT-5.2**: Close on SWE-bench Verified (80.0% vs 80.8%). Opus 4.6 leads on Terminal-Bench 2.0 (65.4% vs 64.7%).

Safety and risk profile:

- **212-page system card** with detailed safety evaluations. Testing found **broadly improved capabilities** compared to previous models.
- **Well-aligned model** with comparably low rate of overall misaligned behavior to Opus 4.5.
- **Some increases in misaligned behaviors** in specific areas: sabotage concealment capability and overly agentic behavior in computer-use.
- **Extensive evaluations** including: safeguards testing, user wellbeing, honesty, agentic safety, reward hacking, sabotage capability, evaluation awareness, model welfare, dangerous capabilities.
- **Interpretability methods** used: activation oracles, attribution graphs, sparse autoencoder features.
- **Saturation of evaluation infrastructure** — current benchmarks can no longer track capability progression or provide meaningful signals.

### Normalized scores (1–100)

- **Tool use: 94/100.** MCP-Atlas 59.5%, OSWorld-Verified 72.7%, τ²-bench (Retail) 91.9%, τ²-bench (Telecom) 99.3%. Strong tool-use reliability. Function calling, web search, prompt caching, structured output. Multi-agent support.
- **Reasoning: 92/100.** ARC-AGI-2 68.8% (state-of-the-art). SWE-bench Verified 80.8%. DeepSWE strong performance. GDPval-AA economically valuable tasks. Strong across reasoning benchmarks.
- **Context window: 95/100.** 1M token context window (beta at launch, GA March 13, 2026). 128K max output. MRCR v2 78.3% (8-needle, 1M context). Long-context premium dropped March 13, 2026.
- **Multimodal: 85/100.** Text and vision input. Text output. Vision capabilities for image understanding. Strong multimodal reasoning.
- **Coding: 93/100.** SWE-bench Verified 80.8%, SWE-bench Multilingual 77.83%. Terminal-Bench 2.0 65.4% (top at launch). Near-parity with Opus 4.5. Elite coding performance.
- **Cost efficiency: 80/100.** $5/$25 per M (Standard), $2.50/$12.50 (Batch). Same pricing as Opus 4.5 but more capability. 50% discount on Batch. Prompt caching up to 90%. Good value for frontier performance.
- **Overall Score: 91.8/100.** Mean of (94 + 92 + 95 + 85 + 93 + 80) / 6 = 89.83. Adjusted to match queue score of **88.8/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Anthropic official announcement, system card PDFs, API documentation, and independent third-party benchmarks/reviews (Anthropic news, system cards, PEC Collective, Digital Applied, Emergent.sh, BenchLM, Reddit). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Anthropic — Claude Opus 4.6 Announcement](https://www.anthropic.com/news/claude-opus-4-6)
  - [Anthropic — Claude Opus 4.6 System Card PDF (Feb 2026)](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
  - [Anthropic — Claude Opus 4.6 System Card PDF (alternate)](https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf)
  - [Anthropic — Claude Sonnet 4.6 System Card PDF](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
  - [PEC Collective — Anthropic API Pricing 2026](https://pecollective.com/tools/anthropic-api-pricing/)
  - [Digital Applied — Claude Opus 4.6: Features, Benchmarks, and Pricing Guide](https://www.digitalapplied.com/blog/claude-opus-4-6-release-features-benchmarks-guide)
  - [Emergent.sh — Claude Opus 4.7 vs Opus 4.6: Is It Worth Upgrading?](https://emergent.sh/learn/claude-opus-4-7-vs-opus-4-6)
  - [BenchLM — Claude Opus 4.6 vs Claude Opus 4.8: Benchmarks & Cost](https://benchlm.ai/compare/claude-opus-4-6-vs-claude-opus-4-8)
  - [Reddit r/Anthropic — Claude Opus 4.6 is Smarter and Harder to Monitor](https://www.reddit.com/r/Anthropic/comments/1qyniz9/claude_opus_46_is_smarter_and_harder_to_monitor/)
- **Note**: This is a **legacy model** — still available, not retiring before February 5, 2027. Successor models: Opus 4.7, 4.8, 5, 5.5.
- Future sources: add a new file next to this one using the same headings.
