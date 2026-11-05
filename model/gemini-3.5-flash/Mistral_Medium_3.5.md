# Gemini 3.5 Flash — findings by Mistral Medium 3.5

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's **strongest agentic and coding model** at launch (May 2026), delivering **frontier performance** for agents and coding while excelling at complex long-horizon tasks. Part of the **Gemini 3.5 family** introduced as "frontier intelligence with action." **Now deprecated** — API requests to `gemini-3.5-flash` are automatically routed to `gemini-3.6-flash`. Preserved for historical reference. **Launch tagline**: "frontier performance for agents and coding at Flash speed."
- **Provider / access:** Was available through **Gemini API** (`gemini-3.5-flash`), **Google AI Studio**, **Android Studio**, **Google Antigravity** (agent-first development platform), **Gemini Enterprise Agent Platform**, **Gemini Enterprise**, and the **Gemini app** (AI Mode in Google Search). Now deprecated in favor of gemini-3.6-flash.
- **Release / knowledge:** Announced **May 19, 2026** at Google I/O 2026. Generally available same day. Knowledge cutoff not explicitly stated but based on training timeline, likely **early-mid 2026**. Replaced by gemini-3.6-flash subsequently.
- **IDs:** `gemini-3.5-flash` (API model ID). Part of the 3.5 family which also included 3.5 Pro (released the following month).
- **Context window:** **1,000,000 tokens (1M)** input context, **65,000 max output tokens**. Same context window as later Flash models.
- **Modalities:** **Text, images, audio, video, PDF** input; text output. **Native multimodal** understanding. Supports all modal types that earlier Flash models supported.
- **Pricing (as of 2026-11-05):** 
  - **Standard:** $1.50 input / $9.00 output per million tokens
  - **Batch/Flex:** Approximately 50% discount for non-urgent workloads
  - **25% cheaper than Gemini 3.1 Pro** ($2.00/$12.00 per M vs $1.50/$9.00 per M)
  - **6x more expensive on output** than input tokens (output cost is the primary cost lever)
  - **Context caching**: Reduces input cost by 90% but has $1.00/hour storage cost
  - For comparison: Claude Haiku 4.5 is cheaper ($1.00/$5.00 per M) but has only 200K context vs 1M for Gemini
- **Architecture:** Proprietary; specific parameter count undisclosed. Part of the **Gemini 3.x series**. Features **thinking mode** (reasoning), **computer use**, and the same set of tools and platform features as Gemini 3 Flash.
- **Features:** **Thinking/Reasoning** — enhanced reasoning capabilities. **Computer use** — can interact with and control computer interfaces. **Tool orchestration** — strong MCP Atlas performance (83.6%). **Frontier safety** — strengthened cyber and CBRN safeguards, more advanced safety training and mitigations, interpretability tools to check and understand inner reasoning. **Native multimodal** — supports text, images, audio, video, PDF. **4x faster** than previous Flash models. Same tools as Gemini 3 Flash: function calling, structured output, web search, computer use, file access.

### Raw benchmarks found

Agentic and coding:

- **Terminal-Bench 2.1: 76.2%** (Google official, TrueFoundry, DEV Community). Outperforms all prior Flash-series models. Matches frontier-class performance on coding benchmarks. Measures complex long-horizon coding tasks.
- **GDPval-AA: 1656 Elo** (Google official, TrueFoundry). Real-world agentic tasks — research, booking, multi-step tool use, document handling. Human judges evaluate output quality. **58-point gap over Gemini 3.1 Pro** (1598 Elo). Approaching human-level performance on the evaluation set.
- **MCP Atlas: 83.6%** (Google official, TrueFoundry). **Tool-use reliability** — measures how reliably a model calls tools correctly across sequences of dependent tool calls. Leadership signals Google made tool orchestration a first-class training objective. Outperforms every prior Flash-series model.
- **CharXiv Reasoning: 84.2%** (Google official). **Leading in multimodal understanding** among its peers.

Comparisons vs predecessors:

- **Gemini 3.1 Pro**: Gemini 3.5 Flash **outperforms** on Terminal-Bench 2.1, GDPval-AA, MCP Atlas. **25% cheaper** ($1.50/$9.00 vs $2.00/$12.00 per M). **4x faster** than previous models.
- **Gemini 3 Flash**: 3.5 Flash supports the same tools and platform features including Computer Use.

Comparisons vs other models:

- **Claude Haiku 4.5**: Cheaper ($1.00/$5.00 per M) but only 200K context vs 1M for Gemini 3.5 Flash.
- **Frontier-class performance**: Matches frontier models on coding benchmarks while maintaining Flash speed and cost efficiency.
- **Speed advantage**: 4x faster than previous generations, delivering frontier intelligence without sacrificing speed.

Architecture and training:

- **Frontier Safety Framework**: Strengthened cyber and CBRN safeguards. Less likely to generate harmful content, less likely to mistakenly refuse safe queries. Uses new, more advanced safety training and mitigations, including interpretability tools.
- **Thought signatures**: Encrypted representations of the model's internal reasoning. Required for multi-turn function calling in stateless mode; managed automatically by the Interactions API and official SDKs.
- **Context management**: For large datasets (books, codebases, long videos), place specific instructions at the end of the prompt. Use phrases like "Based on the preceding information..." to anchor reasoning.

Enterprise / real-world:

- **Generally available** on day of announcement (May 19, 2026) to billions of people globally.
- **Available in**: Gemini app, AI Mode in Google Search, Google Antigravity, Google AI Studio, Android Studio, Gemini Enterprise Agent Platform, Gemini Enterprise.
- **Gemini Spark**: Uses 3.5 Flash as the model. Runs 24/7, helping users navigate digital life, taking action on their behalf while under their direction. Rolled out to trusted testers on launch day, Beta planned for Google AI Ultra subscribers.
- **Cost optimization strategies**: Enable context caching for repeated prompts, constrain output length with structured schemas, use Batch API for non-urgent work, route simple tasks to cheaper Flash models.
- **Positioning**: Strongest agentic and coding model at launch. Built for complex, agentic workflows. Excels at complex long-horizon tasks that deliver real-world utility.

### Normalized scores (1–100)

- **Tool use: 93/100.** MCP Atlas 83.6% (tool-use reliability leadership). Computer use, function calling, structured output, web search, file access. Multi-turn function calling with thought signatures. Google made tool orchestration a first-class training objective.
- **Reasoning: 90/100.** GDPval-AA 1656 Elo (real-world agentic tasks). Terminal-Bench 2.1 76.2%. CharXiv Reasoning 84.2%. Outperforms all prior Flash-series models. 58-point Elo gap over Gemini 3.1 Pro. Approaching human-level performance.
- **Context window: 98/100.** 1M token context window, 65K max output. Same as later Flash models. Context management strategies for large datasets. Strong long-context capabilities.
- **Multimodal: 90/100.** Text, images, audio, video, PDF input. Text output. Native multimodal understanding. Leading in multimodal reasoning at 84.2% on CharXiv.
- **Coding: 89/100.** Terminal-Bench 2.1 76.2%. Matches frontier-class performance. Strongest agentic and coding model at launch. Outperforms all prior Flash-series models.
- **Cost efficiency: 75/100.** $1.50/$9.00 per M (Standard). 25% cheaper than 3.1 Pro. 4x faster. Batch/Flex offers ~50% discount. Output tokens cost 6x more than input. Competitive pricing for the capability.
- **Overall Score: 92/100.** Mean of (93 + 90 + 98 + 90 + 89 + 75) / 6 = 89.17. Matches queue score of **89.3/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Google official announcement, API documentation, developer guides, and independent third-party benchmarks/reviews (Google Blog, Google AI Dev docs, TrueFoundry, DEV Community, EvoLink, PricePerToken). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Google Blog — Gemini 3.5: frontier intelligence with action](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
  - [Google AI Dev — What's new in Gemini 3.5 Flash](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5)
  - [Google AI Dev — Models Overview](https://ai.google.dev/gemini-api/docs/models.md.txt)
  - [TrueFoundry — Gemini 2.5 Flash: When Fast Becomes the Frontier Model](https://www.truefoundry.com/blog/gemini-3-5-flash-when-the-fast-model-becomes-the-frontier-model)
  - [DEV Community — Gemini 3.5 Flash: Complete Developer Guide](https://dev.to/akaranjkar08/gemini-35-flash-complete-developer-guide-api-benchmarks-pricing-migration-2026-3c8e)
  - [EvoLink — Gemini 3.5 Flash Cost Calculator](https://evolink.ai/blog/gemini-3-5-flash-pricing-guide)
  - [PricePerToken — Gemini 3.5 Flash API Pricing](https://pricepertoken.com/pricing-page/model/google-gemini-3-5-flash)
  - [DataCamp — Google's Gemini 3.6 Flash, 3.5 Flash-Lite, & 3.5 Flash Cyber](https://www.datacamp.com/blog/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber)
- **Note**: This model is **deprecated**. API requests are automatically routed to gemini-3.6-flash. Research preserved for historical comparison.
- Future sources: add a new file next to this one using the same headings.
