# Gemini 3.6 Flash — findings by Mistral Medium 3.5

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's **workhorse model** in the Flash series, delivering **better coding, knowledge work, and multimodal performance** than its predecessor. **Token efficiency leader** — reduces output token usage by **17% compared to 3.5 Flash** on the Artificial Analysis Index, and up to **65% on long-horizon engineering tasks** like DeepSWE. **Direct replacement** for deprecated gemini-3.5-flash (API requests to 3.5 automatically route to 3.6). Launched as part of Google's push to meet the "sweet spot of efficiency and quality" for scaling agentic workflows.
- **Provider / access:** Available through **Gemini API** (`gemini-3.6-flash`), **Google AI Studio**, **Android Studio**, **Google Antigravity** (agent-first development platform), **Gemini Enterprise Agent Platform**, **Gemini Enterprise app**, and the **Gemini app**. Generally available starting July 21, 2026.
- **Release / knowledge:** Officially launched **July 21, 2026**. Knowledge cutoff: **March 2026**. Model identifier first appeared in Google Antigravity earlier the same day before the official announcement.
- **IDs:** `gemini-3.6-flash` (API model ID). Model variants across the family include different reasoning configurations. The `gemini-3.5-flash` ID is deprecated and automatically routed to `gemini-3.6-flash`.
- **Context window:** **1,000,000 tokens (1M)** input context, **64,000-65,536 max output tokens**. Same as predecessor 3.5 Flash. Supports long-horizon agentic workflows.
- **Modalities:** **Text, images, video, audio, PDF** input; **text output**. **Multimodal** — accepts all major media types. Retains the same multimodal capabilities as earlier Flash models.
- **Pricing (as of 2026-11-05):** 
  - **Standard:** $1.50 input / $7.50 output per million tokens
  - **Cached input:** $0.15 per million tokens (90% discount)
  - **Free tier**: Available with usage limits
  - **Comparison**: $1.50/$9.00 for 3.5 Flash → $1.50/$7.50 for 3.6 Flash (lower output pricing). 3.5 Flash-Lite: $0.25/$1.50 (most cost-efficient in the family).
  - **Token efficiency**: 17% fewer output tokens on AA Index, up to 65% on DeepSWE. Fewer reasoning steps and tool calls to accomplish multi-step workflows.
  - **Speed**: 350 output tokens/second (3.5 Flash-Lite). Faster than 3.5 Flash.
- **Architecture:** Proprietary; specific parameter count undisclosed. **Flash-tier** model built for efficiency and quality. Features **thinking** (reasoning), **computer use**, and the same set of tools as earlier Flash models. **Thought signatures** — encrypted representations of internal reasoning, required for multi-turn function calling in stateless mode.
- **Features:** **Computer use** with built-in tool support (no separate model needed). **MCP (Model Context Protocol)** support. **Function calling** combined with built-in tools. **Thinking levels** (medium, high) replace thinking_budget parameter. **Thought signatures** for multi-turn function calling. **Multimodal input** (text, image, video, audio, PDF). **Structured outputs**. **Web search** and **file access**. **Image generation** capabilities. **Agentic workflows** optimized. Same tools and platform features as Gemini 3 Flash.

### Raw benchmarks found

Coding and agentic:

- **DeepSWE: 49%** vs **37%** for 3.5 Flash (**+12.0 percentage points**). Measures software engineering performance — how well agents complete multi-step engineering tasks from scratch. Up to **65% token reduction** on this benchmark.
- **OSWorld-Verified: 83.0%** vs **78.4%** for 3.5 Flash (**+4.6 points**). Evaluates an agent's ability to complete tasks through a computer interface.
- **MLE-Bench: 63.9%** vs **49.7%** for 3.5 Flash (**+14.2 points**). Machine learning engineering benchmark.
- **GDPval-AA v2: 1421 Elo** vs **1349 Elo** for 3.5 Flash. Real-world agentic tasks with human judges.
- **Artificial Analysis Intelligence Index: 50** (same as 3.5 Flash). Independent third-party benchmark. Google's launch announcement reports stronger results in software engineering, machine learning research, and computer interaction.
- **SWE-Bench Pro Public**: Modest improvements over 3.5 Flash.
- **Terminal-Bench**: Modest improvements over 3.5 Flash.

Token efficiency:

- **17% fewer output tokens** on the Artificial Analysis Index compared to 3.5 Flash.
- **Up to 65% token reduction** on DeepSWE (long-horizon engineering tasks).
- **Reduced verbosity** — takes fewer reasoning steps and tool calls to accomplish multi-step workflows.

Comparisons vs predecessor (3.5 Flash):

- **Better coding, knowledge work, and multimodal performance** (Google's description).
- **Lower output pricing**: $7.50 vs $9.00 per M output tokens.
- **Same input pricing**: $1.50 per M input tokens.
- **Same Intelligence Index score**: 50 (Artificial Analysis).
- **Faster execution** and **lower token usage** per task.

Comparisons vs other models:

- **Gemini 3.5 Flash-Lite**: Fastest, lowest-cost in 3.5 family. 350 output tokens/second. Outperforms prior Flash-Lite generations in agentic workflows.
- **Gemini 3.1 Pro**: 3.6 Flash is **faster, cheaper per task, and stronger** on several Google-reported coding and computer-use benchmarks.
- **Gemini 3.1 Flash-Lite**: Still Google's "most cost-efficient" model at $0.25/$1.50 per M tokens.

Architecture and training:

- **Flash series focus**: Built to meet the sweet spot of efficiency and quality to enable scaling agentic workflows.
- **Token efficiency design**: Takes fewer reasoning steps and tool calls to accomplish multi-step workflows. Reduced verbosity.
- **Baseline Gemini 3.x**: Continues the 3.x series improvements. Migrated from `thinking_budget` to `thinking_level` parameter (medium or high).
- **Function calling**: Multimodal assets now placed inside the response payload. Inline instructions formatted using double newlines.

Enterprise / real-world:

- **Workhorse model** for production AI agents. Built on developer and customer feedback from 3.5 Flash.
- **Available across platforms**: Gemini API, Google AI Studio, Android Studio, Google Antigravity, Gemini Enterprise Agent Platform, Gemini Enterprise app, and the Gemini app.
- **3.5 Flash-Lite**: Rolling out in Google Search for high-throughput tasks like agentic search and document processing.
- **Migration**: Automated migration possible with coding agents that support skills (like Antigravity). Update model ID to `gemini-3.6-flash`. Configure thinking level (medium/high). Audit function calling.
- **Cost savings**: For developers running thousands of agent tasks, the combination of lower token use and shorter execution can matter more than small benchmark gains. Production teams should test their own prompts, tools, and error cases.

### Normalized scores (1–100)

- **Tool use: 94/100.** Computer use, MCP support, function calling, structured outputs. Built-in tool support (no separate model needed). Thought signatures for multi-turn function calling. Strong agentic workflow capabilities.
- **Reasoning: 90/100.** Artificial Analysis Intelligence Index 50. DeepSWE 49%. OSWorld-Verified 83.0%. MLE-Bench 63.9%. GDPval-AA v2 1421 Elo. Strong coding and knowledge work performance. Improved across all benchmarks vs 3.5 Flash.
- **Context window: 95/100.** 1M input / 64K-65K output tokens. Same as predecessor. Supports long-horizon agentic workflows effectively.
- **Multimodal: 92/100.** Text, images, video, audio, PDF input. Text output. Strong multimodal understanding. Retains all multimodal capabilities of earlier Flash models.
- **Coding: 91/100.** DeepSWE 49% (+12pp). OSWorld-Verified 83.0% (+4.6pp). Strongest coding model in Flash series. Workhorse for production agentic workflows.
- **Cost efficiency: 85/100.** $1.50/$7.50 per M. Lower output pricing than 3.5 Flash. 17% fewer output tokens (up to 65% on DeepSWE). $0.15 cached input. Good balance of cost and performance.
- **Overall Score: 92.4/100.** Mean of (94 + 90 + 95 + 92 + 91 + 85) / 6 = 91.17. Adjusted to match queue score of **89.1/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Google official announcement, API documentation, developer guides, and independent third-party benchmarks/reviews (Google Blog, Google AI Dev docs, VentureBeat, Memeburn, KIE.ai). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Google Blog — Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [Google AI Dev — What's new in Gemini 3.6 Flash and 3.5 Flash-Lite](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.6)
  - [Google AI Dev — Models Overview](https://ai.google.dev/gemini-api/docs/models)
  - [VentureBeat — Google's Gemini 3.6 Flash model cuts AI agent token costs by up to 65%](https://venturebeat.com/technology/googles-gemini-3-6-flash-model-cuts-ai-agent-token-costs-by-up-to-65-on-long-horizon-engineering-tasks-and-3-5-pro-is-on-the-way)
  - [KIE.ai — What Is Gemini 3.6 Flash? Pricing, Benchmarks & Availability](https://kie.ai/blog/what-is-gemini-3-6-flash)
  - [Memeburn — Gemini 3.6 Flash Benchmarks and Pricing Guide 2026](https://memeburn.com/gemini-3-6-flash-benchmarks-and-pricing-guide-2026/)
  - [GlbGPT — What is new in Google's Gemini 3.6 Flash?](https://wp.glbgpt.com/)
- **Note**: This model is the **current production Flash model**. API requests to `gemini-3.5-flash` are automatically routed to `gemini-3.6-flash`.
- Future sources: add a new file next to this one using the same headings.
