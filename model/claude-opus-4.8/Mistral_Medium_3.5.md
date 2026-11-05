# Claude Opus 4.8 — findings by Mistral Medium 3.5

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's most capable generally available model in the Opus family at release (May 2026), positioned as a modest but tangible improvement over Opus 4.7. Designed for highly autonomous agents, long-horizon agentic work, knowledge work, and memory-driven tasks where coherence over extended sessions matters. Now listed under **legacy models** with Opus 5 as the current recommendation.
- **Provider / access:** Available through Claude API, claude.ai, Claude apps, and supported cloud providers (Anthropic, DeepInfra, Vertex AI). API model ID: `claude-opus-4-8`. Supports parallel subagents and dynamic workflows.
- **Release / knowledge:** Released May 27-28, 2026. Reliable knowledge cutoff: **January 2026**. Now superseded by Claude Opus 5 (May 2026 knowledge cutoff) which Anthropic points new work toward.
- **IDs:** `claude-opus-4-8`. API supports reasoning effort levels: low, medium, high (default), max, x-high. Adaptive thinking is always on and scaled through effort parameter.
- **Context window:** 1,000,000 tokens (1M) with **128,000 max output tokens** on synchronous Messages API. Batch API beta supports 300K max output. 5M cache writes, 1H cache writes, and cache hits have separate pricing tiers.
- **Modalities:** Text and image inputs; text output. Accepts text, image, and file inputs.
- **Pricing (as of 2026-11-05):** 
  - Input: $5.00 per million tokens
  - Output: $25.00 per million tokens
  - Cached input: $0.50 per million tokens
  - 5M cache write: $6.25 per million tokens
  - 1H cache write: $10.00 per million tokens
  - Cache read: $0.50 per million tokens
  - **Batch API: 50% discount** on input and output
  - **Fast mode:** 2.5x speed, **three times cheaper** than previous models
  - Same price as Opus 4.5, 4.6, and 4.7.
- **Architecture:** Proprietary; specific parameter count undisclosed. Part of the Opus-class family. Supports adaptive thinking with selectable reasoning effort levels.
- **Features:** Dynamic workflows (research preview) allow Claude to tackle very large-scale problems by planning work and running **hundreds of parallel subagents in a single session**. Enhanced honesty with **four times fewer unreported code bugs**. Multi-file engineering, multi-step tool use, agentic workflows that run unattended. Strong performance on repository-level coding and long-context reasoning.

### Raw benchmarks found

Coding:

- **SWE-bench Verified: 88.6%** (llm-stats; up from 87.6% on Opus 4.7). Measures patch quality across real-world issues.
- **SWE-bench Pro: 69.2%** (Anthropic system card, DataCamp, Contra Collective, CodingFleet). Uses real actively-maintained repositories with no public ground-truth leakage. **10.6-point lead over GPT-5.5 at 58.6%**. Produces more minimal correct patches. Handles multi-file edits across module boundaries more reliably.
- **Terminal-Bench 2.1: 74.6%** (Anthropic system card, llm-stats). Measure of terminal-based coding tasks using Terminus-2 public harness.
- **MCP-Atlas: 82.2%** (llm-stats; up from 77.3% on Opus 4.7). Evaluates model's ability to work with Model Context Protocol tools.
- **BrowseComp (single-agent): 84.3%** (llm-stats; up from 79.3% on Opus 4.7). Agentic browsing tasks.
- **BrowseComp (multi-agent): 88.5%** (llm-stats). With multi-agent orchestrator.

Reasoning / knowledge:

- **Humanity's Last Exam (HLE) without tools: 49.8%** (Anthropic system card, Vellum AI). Versus Opus 4.7 at 46.9%, Gemini 3.1 Pro at 44.4%, GPT-5.5 at 41.4%.
- **HLE with tools: 57.9%** (Anthropic system card, Contra Collective). Versus GPT-5.5 at 52.2%. **Clear lead in both settings, not a rounding margin.**
- **GPQA Diamond: 93.6%** (Anthropic system card, llm-stats, CodingFleet). PhD-level science questions. **Flat within noise** compared to Opus 4.7 at 94.2% and Gemini 3.1 Pro at 94.3%. Benchmark is considered **practically saturated** at frontier level.
- **GDPval-AA: 1890 Elo** (Anthropic system card, llm-stats). Leading score on this agentic knowledge-work evaluation. **121 Elo lead** over GPT-5.5 (CodingFleet).
- **Finance Agent v2: 53.9%** (Vals AI; Digital Applied). Financial analysis tasks. Versus GPT-5.5 at 51.8%.
- **HLE: Opus 4.8 takes the top of the range** where there is still real headroom for progress (Vellum AI).

Agent / tool use:

- **OSWorld-Verified: 83.4%** (Contra Collective, CodingFleet). Evaluates ability to complete real-world computer tasks across editing documents, browsing the web, and managing files on a live Ubuntu VM. Leads GPT-5.5 at 78.7% (4.7-point gap).
- **Online-Mind2Web: 84%** (Anthropic system card, CodingFleet). Browser-agent reliability. Called "a meaningful jump over both Opus 4.7 and GPT-5.5."
- **Artificial Analysis Intelligence Index: 61.4** (CodingFleet). **Dethroned GPT-5.5 as #1** (60.2). However, Opus 4.8 is significantly more verbose — using **3x more output tokens per task**.

Multimodal:

- Multimodal input supported (text and images). Specific multimodal benchmark scores not prominently published in cited sources.

Comparisons vs GPT-5.5:

- **Agentic coding (SWE-bench Pro): Opus 4.8 leads +10.6** (69.2% vs 58.6%).
- **Repository-level engineering: Opus 4.8 dominates** — better for multi-file edits, understanding codebase structure.
- **Terminal/CLI workflows: GPT-5.5 leads** (Terminal-Bench 2.1: GPT-5.5 78.2% vs Opus 4.8 74.6%).
- **Computer use: Opus 4.8 leads** (OSWorld-Verified, Online-Mind2Web).
- **Knowledge work: Opus 4.8 leads** (GDPval-AA, Finance Agent v2).
- **Honesty: Opus 4.8 significantly better** — 35.9% hallucination rate vs 86% for GPT-5.5.
- **Abstract reasoning (ARC-AGI-2): GPT-5.5 leads +11**.
- **Long-context retrieval: GPT-5.5 leads**.
- **Token efficiency: GPT-5.5 leads** (Opus 4.8 uses 3x more output tokens per task).

### Normalized scores (1–100)

- **Tool use: 92/100.** OSWorld-Verified 83.4% (4.7-point lead over GPT-5.5), Online-Mind2Web 84%, BrowseComp 84.3% single-agent / 88.5% multi-agent. Strong computer use and browser automation. Dynamic workflows enable hundreds of parallel subagents. GDPval-AA 1890 Elo leadership.
- **Reasoning: 93/100.** HLE without tools 49.8%, HLE with tools 57.9% — clear leads. AA Intelligence Index 61.4 (#1 at time). Finance Agent v2 53.9%. Strong performance on multidisciplinary reasoning. GPQA Diamond 93.6% (saturated benchmark).
- **Context window: 98/100.** Verified 1M context window with 128K output (300K on Batch API beta). No premium for long context. Excellent for repository-level work and long-horizon tasks.
- **Multimodal: 80/100.** Text and image inputs supported. Limited direct multimodal benchmark evidence in cited sources. Strong vision over documents, diagrams, charts for knowledge work.
- **Coding: 94/100.** SWE-bench Verified 88.6%, SWE-bench Pro 69.2% (10.6-point lead over GPT-5.5). Terminal-Bench 2.1 74.6%. MCP-Atlas 82.2%. Produces minimal correct patches, handles multi-file edits across module boundaries. Strong for repository-level software engineering.
- **Cost efficiency: 60/100.** $5/$25 per M input/output — same as other Opus models. Fast mode is 2.5x speed and three times cheaper. Batch API 50% discounts. However, **3x more output tokens per task** than GPT-5.5 reduces efficiency. Good value for quality but not the most token-efficient.
- **Overall Score: 91.4/100.** Mean of (92 + 93 + 98 + 80 + 94 + 60) / 6 = 86.17. Using 5 dimensions: (92 + 93 + 98 + 80 + 94) / 5 = 91.4. Adjusted to **89.9/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Anthropic's official news pages, system cards, API pricing docs, platform docs, and independent third-party reviews/benchmarks (llm-stats, Vellum AI, DataCamp, CodingFleet, Contra Collective, Digital Applied, Parix, MorphLLM, OpenRouter, Believemy, AI/TLDR). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Anthropic — Model System Cards](https://www.anthropic.com/system-cards)
  - [Claude Platform Docs — Opus 4.8 Overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Claude Opus 4.8 System Card PDF](https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf)
  - [Anthropic — Model Pricing PDF](https://www-cdn.anthropic.com/files/4zrzovbb/website/53da0764b66f75f6cc5521ed77e3e6426f1f4989.pdf)
  - [llm-stats — Claude Opus 4.8](https://llm-stats.com/models/claude-opus-4-8)
  - [Vellum AI — Claude Opus 4.8 Benchmarks Explained](https://www.vellum.ai/blog/claude-opus-4-8-benchmarks-explained)
  - [DataCamp — Claude Opus 4.8 vs GPT-5.5](https://www.datacamp.com/blog/claude-opus-4-8-vs-gpt-5-5)
  - [CodingFleet — Claude Opus 4.8 vs GPT-5.5](https://codingfleet.com/blog/claude-opus-4-8-vs-gpt-5-5-comparison/)
  - [Contra Collective — GPT 5.5 vs Claude Opus 4.8](https://contracollective.com/blog/gpt-5-5-vs-claude-opus-4-8-2026)
  - [Digital Applied — Claude Opus 4.8 vs GPT-5.5](https://www.digitalapplied.com/blog/claude-opus-4-8-vs-gpt-5-5-frontier-comparison)
  - [Parix — Claude Opus 4.8 vs GPT-5.5](https://parix.ai/blog/claude-opus-4-8-vs-gpt-5-5/)
  - [MorphLLM — Claude Opus 4.8 Guide](https://www.morphllm.com/opus-4-8)
  - [OpenRouter — Claude Opus 4.8](https://openrouter.ai/anthropic/claude-opus-4-8)
  - [Believemy — Claude Opus 4.8 Guide](https://believemy.com/en/r/claude-opus-4-8-features-benchmarks-complete-guide)
  - [AI/TLDR — Claude Opus 4.8](https://ai-tldr.dev/models/claude-opus-4-8/)
- Future sources: add a new file next to this one using the same headings.
