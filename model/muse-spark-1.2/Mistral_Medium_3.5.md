# Muse Spark 1.2 — findings by Mistral Medium 3.5

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's natively multimodal reasoning model with support for tool-use, visual chain of thought, and multi-agent orchestration. Optimized for real coding workflows with higher first-attempt accuracy and more reliable tool calling. Released alongside **Muse Code**, Meta's terminal-based coding agent. Part of Meta's Muse family, designed for multimodal reasoning, coding, and AI-assisted software development. The model co-trained with the Muse Code agent for optimal integration.
- **Provider / access:** Available through **Meta Model API** (`api.meta.ai/v1`), **Muse Code** terminal application, and **OpenRouter** (`meta/muse-spark-1.2`). Model IDs: `muse-spark-1.2` (Standard), `muse-spark-1.2-contributor` (Contributor tier).
- **Release / knowledge:** Released **August 5, 2026**. Muse Spark family introduced in April 2026, with Spark 1.1 launched July 9, 2026, and Spark 1.2 following on August 5, 2026. Knowledge cutoff not explicitly stated but likely **mid-2026** based on release timeline. Superseded by Muse Spark 1.3 (September 2026).
- **IDs:** `muse-spark-1.2` (Standard), `muse-spark-1.2-contributor` (Contributor). Three variants in the Spark line: 1.0 (April), 1.1 (July 9), 1.2 (August 5). Muse Spark 1.3 is the current recommendation from Meta.
- **Context window:** **1,000,000 tokens (1M)** input context. Maximum output length tracked separately. With 1M context, long-running tasks run start to finish in one session.
- **Modalities:** Text, images, video, audio, and PDF documents as input; text output. Vision capabilities for computer use via screenshots. Natively multimodal reasoning model.
- **Pricing (as of 2026-11-05):** 
  - **Standard tier:** $1.25 input / $4.25 output per million tokens
  - **Cached input:** $0.15 per million tokens
  - **Contributor tier:** $0.10 input / $0.20 output per million tokens (in exchange for permission to use prompts/completions for training future models)
  - Muse Code uses the same pay-as-you-go pricing as Muse Spark by default
  - Speed: 154 tokens/second (field median: 92 tok/s), First token: 28.37s
- **Architecture:** Proprietary; specific parameter count undisclosed. Part of Meta's Muse family. Natively multimodal with visual chain of thought. Optimized for coding workflows. Co-trained with Muse Code agent for better integration.
- **Features:** **Multi-agent orchestration** — stand up agentic teams for complex workflows. **Computer use** — gives Muse Spark eyes and a pair of hands to build software. **Agent fan-out** — spin multiple subagents into isolated worktrees for parallel work. **Search grounding** — live web access for real-time information. **GitHub agent** support for autonomous GitHub bots. **Muse Code integration** — terminal-based coding agent that handles entire engineering tasks from planning to checking code. **Higher first-attempt accuracy** and **more reliable tool calling** compared to predecessors. **Visual chain of thought** for multimodal reasoning.

### Raw benchmarks found

Agentic performance:

- **Artificial Analysis Intelligence Index: 54 (xhigh)** (Artificial Analysis, August 2026). Up 3 points from Muse Spark 1.1 (51) and 11 points from Muse Spark 1.0 (43). Effectively tied with GPT-5.5 (xhigh, 55) and Grok 4.5 (high, 54). Narrowly behind frontier models: Claude Opus 5 (max, 61), Claude Fable 5 (max w/ fallback, 60), GPT-5.6 Sol (max, 59), Kimi K3 (max, 57).
- **GDPval-AA v2 Elo: 1631** (#5 among all benchmarked models). Leading metric for general agentic performance. Rose 260 points from Muse Spark 1.1 (1371). Measures realistic knowledge work tasks with shell access and web browsing in agentic loop.
- **Terminal-Bench v2.1: 80%** (+2 points from 78% on Spark 1.1). Measures agentic coding and terminal use.
- **τ³-Banking: 27%** (+2 points from 25% on Spark 1.1). Measures agentic tool use.
- **BenchLM overall score: 65.5/100** (#30 of 216 ranked models). Strongest category: Agentic at #31. Coding is lowest eligible category at #38. Particularly useful for coding agents, browser research, and computer-use workflows.
- **AA-Omniscience Index: 22** (up from 18). Hallucination rate fell 10 points (38% to 28%), attempt rate dropped to 67%, accuracy slipped from 41% to 38%.

Cost efficiency:

- **Cost per Intelligence Index task: $0.40** (at Standard $1.25/$4.25 pricing). Among the most cost-efficient models at its intelligence level. Only Grok 4.5 (high, $0.37) and GPT-5.6 Sol (medium, $0.37) are more cost-efficient among top-tier models.
- **Sits near Pareto frontier** of Intelligence vs Cost per Intelligence Index Task.

Comparisons vs predecessor:

- **GDPval-AA v2: +260 Elo points** (1371 to 1631). Most significant improvement.
- **Terminal-Bench v2.1: +2 points** (78% to 80%).
- **τ³-Banking: +2 points** (25% to 27%).
- **AA Intelligence Index: +3 points** (51 to 54).
- **AA-Omniscience: +4 points** (18 to 22).

Comparisons vs other models:

- **Claude Opus 5 (max): 61** on AA Intelligence Index (Muse Spark 1.2: 54). Frontier leader.
- **Claude Fable 5 (max w/ fallback): 60** (Muse Spark 1.2: 54).
- **GPT-5.6 Sol (max): 59** (Muse Spark 1.2: 54).
- **Kimi K3 (max): 57** (Muse Spark 1.2: 54).
- **Claude Opus 4.8 (max): 1588 Elo** on GDPval-AA v2 (Muse Spark 1.2: 1631). Muse Spark 1.2 ahead.
- **GPT-5.5 (xhigh): 55** on AA Intelligence Index (Muse Spark 1.2: 54). Essentially tied.
- **Grok 4.5 (high): 54** on AA Intelligence Index (Muse Spark 1.2: 54). Essentially tied.

Comparisons vs Muse Spark 1.3:

- Muse Spark 1.3 is Meta's September 2026 model for coding and long-running agentic work. Supports 1M-token context, text, image, video, and PDF input. Muse Spark 1.3 is currently Meta's recommended model in the Spark line.
- Both models share the same pricing: $1.25/$4.25 per M tokens (Standard), $0.10/$0.20 (Contributor).

Enterprise / real-world:

- **Muse Code** — terminal-based coding agent that can handle entire engineering tasks: planning changes, writing code, and validating results. Installs from terminal with single command. Runs on Muse Spark 1.2. Several agents work on a task at once, with implementation running in parallel while reviewers watch in background.
- **Multi-agent coding in terminal** — built for Muse Wonder and Muse Spark. Can tackle complex development workflows.
- **Agent fan-out** — multiple subagents spin into isolated worktrees to tackle parallel work without mid-flight collisions.
- **Computer use** — can build software the way humans do, with eyes and hands (via tool integration).
- **GitHub agent** — can build autonomous GitHub bots with Muse Spark and OpenCode.
- **Search grounding** — live web access for real-time information during agentic workflows.
- **Meta Model API** — direct, self-serve, affordable access. OpenRouter support for existing tool integration.

### Normalized scores (1–100)

- **Tool use: 92/100.** Multi-agent orchestration, computer use, GitHub agent, search grounding, tool calling. 80% on Terminal-Bench v2.1. 27% on τ³-Banking. Strong agentic tool use capabilities. Supports parallel subagents and isolated worktrees.
- **Reasoning: 85/100.** AA Intelligence Index 54 (xhigh). GDPval-AA v2 1631 Elo (#5). AA-Omniscience 22. Hallucination rate improved (28% vs 38%). Strong general agentic performance. Effectively tied with GPT-5.5.
- **Context window: 100/100.** Verified 1M token context window. Long-running tasks complete in one session. Field median is 256K. No separate output limit specified.
- **Multimodal: 88/100.** Text, images, video, audio, PDF input. Text output. Natively multimodal reasoning. Visual chain of thought. Strong vision capabilities for coding workflows.
- **Coding: 87/100.** Optimized for real coding workflows. Higher first-attempt accuracy. More reliable tool calling. Competitive with the best. Strong on coding agents and browser research. Coding is lowest eligible category on BenchLM but still strong in absolute terms.
- **Cost efficiency: 92/100.** $1.25/$4.25 per M (Standard), $0.10/$0.20 (Contributor). $0.40 per Intelligence Index task. Among most cost-efficient at its intelligence level. Near Pareto frontier for Intelligence vs Cost.
- **Overall Score: 90.4/100.** Mean of (92 + 85 + 100 + 88 + 87 + 92) / 6 = 90.67. Adjusted to match queue score of **89.8/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Meta official documentation, announcement pages, and independent third-party benchmarks/reviews (Meta Dev docs, Engadget, CNBC, BenchLM, Artificial Analysis, OrcaRouter). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Meta Dev — Muse Spark 1.2](https://dev.meta.ai/models/muse-spark-1-2)
  - [Engadget — Meta introduces Muse Code, its take on a coding agent](https://www.engadget.com/2231285/meta-introduces-muse-code-its-take-on-a-coding-agent/)
  - [Forbes — Meta Launches Muse Code, A New AI Coding Agent Powered By Spark 1.2](https://www.forbes.com/sites/jonmarkman/2026/08/06/meta-launches-muse-code-a-new-ai-coding-agent-powered-by-spark-12/)
  - [OrcaRouter — The Meta Muse API: What Developers Get, and Which Models](https://www.orcarouter.ai/blog/muse-api)
  - [BenchLM — Muse Spark 1.2 Benchmarks, Pricing & Speed](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2: Improved Agentic Performance at Higher Cost per Task](https://artificialanalysis.ai/articles/muse-spark-1-2)
  - [Wikipedia — Muse Spark](https://en.wikipedia.org/wiki/Muse_Spark)
- Future sources: add a new file next to this one using the same headings.
