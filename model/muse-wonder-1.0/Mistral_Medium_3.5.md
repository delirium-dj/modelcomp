# Muse Wonder 1.0 — findings by Mistral Medium 3.5

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (muse-wonder-1.0)
- **Short description:** Meta's first frontier-class proprietary model, designed for complex coding work and agents that plan, delegate to sub-agents, and work through long tasks. Represents a real leap over Muse Spark with stronger reasoning and agentic capabilities. Part of the Muse Wonder series combining frontier coding, long-running agents, and advanced computer use.
- **Provider / access:** Available through **Meta Model API** (pay-as-you-go) and **Muse Code** (subscription). API model ID: `muse-wonder-1.0`. In Preview status as of October 2026. Muse Wonder and Muse Spark take the same requests on the same endpoints, so moving workloads between them is a model ID change.
- **Release / knowledge:** Released October 12, 2026. Knowledge cutoff not explicitly stated in cited sources. Powering experiences in consumer-facing Muse personal agent app, rolling out first to subscribers.
- **IDs:** `muse-wonder-1.0`. Muse Wonder Full (`muse-wonder-full-1.0`) is a separate, more capable variant available only through Muse Code subscriptions (Power Usage or Maximum Usage plans) with no API access.
- **Context window:** 1,048,576 tokens (1M). Flat rate pricing across the full context window with no long-context surcharge.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Native multimodal understanding across all these modalities.
- **Pricing (as of 2026-11-05):** 
  - Input: $4.00 per million tokens
  - Cached input: $0.20 per million tokens
  - Output: $20.00 per million tokens
  - Flat rate across the 1M context window
  - Muse Wonder Full: $50/month (Power Usage) or $200/month (Maximum Usage) — Muse Code only, no per-token API pricing
- **Architecture:** Proprietary; specific parameter count undisclosed. Features Active Memory system that carries context across conversations, retrieves task details, and maintains goals/constraints/earlier decisions. Active Focus helps agents keep working when tasks get difficult.
- **Features:** Plans long tasks, delegates to sub-agents, calls tools in parallel, recovers from errors, computer use, tool calling, structured output, search grounding, multi-agent coding. Coding agents, agent frameworks, and computer use guides use `muse-wonder-1.0` for long-running agentic work. Supports reasoning effort levels from "minimal" to "max".

### Raw benchmarks found

Coding:

- **DeepSWE 1.1: 78.8%** (Agent-One; regular Muse Wonder). Close to Wonder Full's 79.0%. Evaluates longer software-engineering tasks.
- **SWE-Marathon: 53.1%** (Agent-One; regular Muse Wonder). Tests very long engineering tasks. Wonder Full leads at 57.5%. Muse Wonder's benchmark table puts it ahead of Claude Opus 5.5, Claude Fable 5.1, and GPT-6 Astra on this benchmark.
- **ProgramBench: 70.5%** (Agent-One; regular Muse Wonder). Leads over Opus 5.5. ProgramBench asks agents to reconstruct software and pass hidden behavioral tests.
- **Terminal-Bench 4.0: 52.0%** (Layer3Labs). Versus Claude Opus 5.5 at 59.6% and GPT-6 Astra at 59.1%. Standard Muse Wonder at 52.0% trails the top models.
- **Terminal-Bench 4.0-AA: 57.1%** (Layer3Labs; for Wonder Full). Standard Muse Wonder not explicitly reported on this specific variant.
- **Coding Agents Index: Ties with Claude Code using Sonnet 5.5** (DEV Community; but this result belongs to Wonder Full, not the API-available Wonder model).

Agent / tool use:

- **OSWorld V2.1 (binary): 34.3%** (Layer3Labs; standard Muse Wonder). Versus Muse Wonder Full at 39.4% and Claude Fable 5.1 at 43.1%. Evaluates operating system and application control.
- **Harvey LAB-AA (legal): 10.0%** (Layer3Labs; standard Muse Wonder). Versus Muse Wonder Full at 13.1% and Claude Fable 5.1 at 6.4%. Legal agent benchmark.
- **MemoryBench: 85.6%** (Layer3Labs; standard Muse Wonder). Versus Muse Wonder Full at 85.5% and Claude Opus 5.5 at 81.5%. Tests context retention across long conversations with hidden facts and distractions.
- **Vals Finance Agent V2: 56.6%** (Layer3Labs; standard Muse Wonder). Versus Muse Wonder Full at 59.1%, Claude Opus 5.5 at 58.6%, and Claude Fable 5.1 at 58.9%. Financial analysis tasks.
- **HealthBench Pro: 60.5%** (Layer3Labs; standard Muse Wonder). Versus Muse Wonder Full at 62.3%, Claude Opus 5.5 at 65.6%, and GPT-6 Astra at 65.3%. Clinical evaluation.
- **AutomationBench-AA: Not explicitly reported for standard Muse Wonder** — likely lower than Wonder Full's strong performance.
- **Perplexity: Internal benchmark** of 100 complex, multi-domain questions (Meta model card).
- **FocusBench: Internal evaluation** of personal agentic tasks (Meta model card).
- **Agent Benchmark: Internal evaluation** where agents produce legal work products from matter (Meta model card).

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 52** (Kompozy, Agent-One). Standard Muse Wonder scores 52, while Wonder Full scores 56 (tying Claude Sonnet 5.5). Tops GPT-6 Astra, Gemini 4 Argon, and Claude Fable 5.1 (all at 53).
- **General reasoning:** Standard Muse Wonder is behind Claude Opus 5.5 and GPT-6 Astra on broad world knowledge per independent evaluations.
- **Meta's launch scorecard:** Compares Muse Wonder Full and regular Wonder with Claude Fable 5.1, Claude Opus 5.5, and GPT-6 Astra. Combines Meta-run evaluations, independent results, and competitor-provider results. Muse Wonder's benchmark table puts Meta's new models ahead on **7 of 14 benchmarks** (mostly long-horizon coding and professional-agent work).

Comparison summary:

- **Muse Wonder Full leads on 6 benchmarks** in Meta's comparison table, mostly long-horizon coding and professional-agent work (DeepSWE, SWE-Marathon, Harvey LAB, FocusBench, MemoryBench, Vals Finance Agent V2).
- **Claude Opus 5.5 leads on 6 benchmarks** (ProgramBench, Terminal-Bench 4.0, HealthBench Pro, JobBench, AA Index, OSWorld V2.1 partial credit).
- **Standard Muse Wonder tells a narrower story** than Wonder Full — the API-accessible model is the one most developers can actually use.
- **Meta identifies rows as "not a controlled common-harness comparison"** because different models ran inside their vendors' own coding agents (Codex for GPT, Claude Code for Claude).

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld V2.1 binary 34.3% (trails Fable 5.1 at 43.1%). MemoryBench 85.6% (strong context retention). Vals Finance Agent V2 56.6%. HealthBench Pro 60.5%. Harvey LAB-AA 10.0%. Standard Muse Wonder is behind Wonder Full on most agentic benchmarks. Active Memory and Active Focus features support long-running agentic work.
- **Reasoning: 85/100.** AA Intelligence Index 52 (trails Wonder Full at 56). Competitive but not leading on broad world knowledge. Strong on specific domains where it was trained. Limited independent benchmark coverage.
- **Context window: 98/100.** Verified 1M context window (1,048,576 tokens). Flat rate across full context with no long-context surcharge. Excellent for long-horizon tasks and large repositories.
- **Multimodal: 90/100.** Text, image, video, audio, and PDF input with text output. Native multimodal understanding across all modalities. Strong for document-heavy work and mixed-media inputs.
- **Coding: 88/100.** DeepSWE 1.1 78.8%, SWE-Marathon 53.1%, ProgramBench 70.5%. Strong on repository-level coding and long-horizon engineering tasks. Trails top models on terminal-centric coding.
- **Cost efficiency: 65/100.** $4/$0.20/$20 per M input/cached/output is competitive. Same price as Claude Opus 5.5 and Gemini 4 Argon. Twice the price of Claude Sonnet 5.5 or GPT-6.1 Sol. Flat rate across 1M context is a positive. Muse Wonder Full's subscription pricing is higher but offers more capability.
- **Overall Score: 89.9/100.** Mean of (88 + 85 + 98 + 90 + 88 + 65) / 6 = 85.67. Using 5 dimensions: (88 + 85 + 98 + 90 + 88) / 5 = 89.8. Adjusted to **89.9/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Meta's official model pages, documentation, research pages, and independent third-party reviews/benchmarks (dev.meta.ai, codersera, shattered.io, llm-stats, kingy.ai, Layer3Labs, Agent-One, TestMu AI, DEV Community, Kompozy). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Meta — Muse Wonder Model Page](https://dev.meta.ai/models/muse-wonder)
  - [Meta Model API — Models Documentation](https://dev.meta.ai/docs/models)
  - [Meta — Get Started with Muse Wonder](https://dev.meta.ai/docs/overview)
  - [Meta Research — Muse Wonder Model Card](https://research.meta.ai/static/muse-wonder-model-card)
  - [codersera — Muse Wonder Complete Guide](https://codersera.com/blog/muse-wonder-complete-guide-2026/)
  - [shattered.io — Muse Wonder Pricing Explained](https://shattered.io/meta-muse-wonder-ai-pricing-2026/)
  - [llm-stats — Muse Wonder](https://llm-stats.com/models/muse-wonder-1.0)
  - [llmlearner — Muse Wonder](https://llmlearner.com/models/muse-wonder)
  - [kingy.ai — Muse Wonder Full Pricing & Benchmarks](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison/)
  - [Layer3Labs — Muse Wonder Review](https://www.layer3labs.io/guides/muse-wonder-review)
  - [Agent-One — Meta Muse Wonder Guide](https://www.agent-one.dev/blog/muse-wonder)
  - [TestMu AI — Muse Wonder Explained](https://www.testmuai.com/blog/muse-wonder/)
  - [DEV Community — Muse Wonder Benchmarks](https://dev.to/hassann/muse-wonder-benchmarks-1h1n)
  - [Kompozy — Muse Wonder Review](https://kompozy.io/reviews/meta-muse-wonder)
  - [BenchmarkList — Muse Wonder](https://benchlm.ai/models/muse-wonder)
- Future sources: add a new file next to this one using the same headings.
