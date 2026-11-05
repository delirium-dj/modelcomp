# Claude Sonnet 5.5 — findings by Mistral Medium 3.5

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's upgraded Sonnet-class model, 30%+ faster and up to 30% cheaper than Sonnet 5. Released September 28, 2026 as the second model in the Claude 5.5 family. Designed for well-scoped everyday tasks, coding, agents, and knowledge work with improved efficiency and alignment.
- **Provider / access:** `anthropic/claude-sonnet-5-5` via Anthropic API (Messages API), Claude Platform, AWS Bedrock, Google Cloud, Microsoft Azure
- **Release / knowledge:** September 28, 2026; reliable knowledge cutoff June 2026
- **IDs:** `claude-sonnet-5-5` (API), `anthropic/claude-sonnet-5-5` (Messages API)
- **Context window:** 1,048,576 tokens (1M) verified from official documentation
- **Modalities:** Text + image input; text output; adaptive thinking (always-on); tool calls; JSON mode; computer use via toolset
- **Pricing (as of 2026-11-05):** $2.00 / $10.00 per 1M input/output tokens; cached input $0.10/1M (50% reduction from Sonnet 5's $0.20); cache writes $2.50/1M (5-min) or $4/1M (1-hour); Batch API: $1/$5 per 1M input/output. Source: Anthropic pricing page, Claude Platform docs
- **Architecture:** Proprietary dense autoregressive decoder-only transformer; parameter count not disclosed; adaptive thinking with always-on extended thinking
- **Thinking modes:** Low, Medium (default in apps), High (default on Platform), Xhigh, Max; new `between_tools` setting for no up-front thinking
- **Speed:** 30%+ faster output generation than Sonnet 5; 138 tokens/second median (BenchLM)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (source: Anthropic announcement, Apidog, Kingy.ai, BenchLM)
- AutomationBench v1.0.6: **44.7%** (edges past Opus 5.5's 42.5%; source: ComputingForGeeks, Apidog)
- OSWorld 2.1: **80.1%** (partial reward; source: Apidog)
- GDPval-AA v2.1: **1844 Elo** (knowledge work; source: Anthropic announcement, Apidog)
- AA-Briefcase v1.1: **1811 Elo** (long-horizon knowledge work; source: Anthropic announcement)

Reasoning / knowledge:

- GPQA Diamond: **64.5%** (with tools; source: Anthropic announcement table)
- CharXiv/Chartography: **61.6%** (no tools; source: Anthropic announcement table)
- Artificial Analysis Intelligence Index v4.3.2: **56** (#3 of 216; source: Apidog, Emergent.sh, BenchLM)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **81.3%** (vs Sonnet 5's 63.2%, Opus 5.5's 89.9%; source: Apidog, ComputingForGeeks)
- SWE-bench Multilingual: **90.3%** (source: ComputingForGeeks)
- FrontierCode v1.1 Main: **46.2%** (Max effort), **52.1%** (Xhigh effort; source: Anthropic announcement, Apidog)
- CursorBench 4.0: **55.5%** (source: Apidog, ComputingForGeeks, BenchLM)
- FrontierSWE v2: **61.9%** (vs Opus 5.5's 62.3%, GPT-6 Astra's 65.5%; source: ComputingForGeeks)

Long context:

- 1M token context window verified
- Supports up to 300K output tokens with Message Batches API (beta)

### Normalized scores (1–100)

- **Tool use: 93/100.** Exceptional agentic performance: 70.6% Terminal-Bench 4.0 (dramatic improvement from Sonnet 5's 10.3%), 44.7% AutomationBench (beats Opus 5.5), 80.1% OSWorld 2.1. First Sonnet model with cyber safeguards. Capped only by Opus 5.5 on some edge cases.
- **Reasoning: 90/100.** Strong reasoning: 56 on Artificial Analysis Intelligence Index (#3 overall), 64.5% GPQA Diamond with tools, 61.6% Chartography no tools, 1844 GDPval-AA Elo. Capped by frontier models on complex reasoning tasks.
- **Context window: 100/100.** 1M token context window with 300K output token support via Batches API. Maximum tier.
- **Multimodal: 85/100.** Native image input with strong vision capabilities. First Sonnet to beat Pokémon Red from screenshots. Not full video support. Capped by output being text-only.
- **Coding: 95/100.** Outstanding coding: 81.3% SWE-bench Pro, 90.3% SWE-bench Multilingual, 55.5% CursorBench 4.0, 70.6% Terminal-Bench 4.0. Strong improvement over Sonnet 5 across all coding benchmarks.
- **Cost efficiency: 92/100.** $2/$10 per 1M input/output with $0.10 cached input (50% cheaper than Sonnet 5). Up to 30% cheaper per task than Sonnet 5 due to token efficiency. Batch API at $1/$5. Best-in-class for Sonnet tier.
- **Overall Score: 92.5/100.** Major upgrade over Sonnet 5 with near-Opus-level performance on many tasks at Sonnet pricing. Best cost-performance ratio in Anthropic's Sonnet lineup.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 — Anthropic](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 System Card (PDF)](https://www.anthropic.com/claude-sonnet-5-5-system-card)
  - [Claude Sonnet 5.5 - Claude Platform Docs](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Pricing - Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Claude Sonnet 5.5 Benchmarks, Pricing & Speed — BenchLM.ai](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 Benchmarks Explained — Apidog](https://apidog.com/blog/claude-sonnet-5-5-benchmarks/)
  - [Claude Sonnet 5.5 Review — Kingy.ai](https://kingy.ai/blog/claude-sonnet-5-5-review/)
  - [Claude Sonnet 5.5 Benchmarks — Emergent.sh](https://emergent.sh/learn/claude-sonnet-5-5-benchmarks)
  - [Claude Sonnet 5.5: Benchmarks, Pricing, Tested — ComputingForGeeks](https://computingforgeeks.com/claude-sonnet-5-5-released-features-benchmarks/)
  - [System cards — Anthropic](https://www.anthropic.com/system-cards)
