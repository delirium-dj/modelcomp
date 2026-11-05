# Claude Opus 5 — findings by Mistral Medium 3.5

- Source: Anthropic/Claude Opus 5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's advanced Opus-tier model delivering near-Fable-5 intelligence at half the price. Released July 24, 2026 as a thoughtful and proactive model for long-running agents, coding, and knowledge work. State-of-the-art on coding and knowledge work evaluations (Frontier-Bench, GDPval-AA) while remaining behind Mythos 5 on cybersecurity tasks.
- **Provider / access:** `anthropic/claude-opus-5` via Anthropic API (Messages API), Claude Platform, AWS Bedrock, Google Cloud, Microsoft Azure
- **Release / knowledge:** July 24, 2026; knowledge cutoff May 2026
- **IDs:** `claude-opus-5` (API), `anthropic/claude-opus-5` (Messages API)
- **Context window:** 200,000 tokens (200K) standard; supports up to 1,048,576 (1M) in some configurations; 300K output tokens supported via Message Batches API (beta)
- **Modalities:** Text + image input; text output; adaptive thinking (always-on); tool calls; JSON mode; computer use via toolset
- **Pricing (as of 2026-11-05):** $5.00 / $25.00 per 1M input/output tokens (same as Opus 4.8); Fast mode at $10/$50 per 1M; cache reads at $0.20/1M (5% of standard input). Source: Anthropic announcement, Claude Platform pricing
- **Architecture:** Proprietary dense autoregressive decoder-only transformer; parameter count not disclosed; adaptive thinking with always-on extended thinking
- **Thinking modes:** Low, Medium, High, Xhigh, Max (adaptive thinking on by default)
- **Speed:** Fast mode runs ~2.5x default speed; standard mode speeds not specified
- **Status:** Legacy model; Opus 5.5 is current Opus model

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1: **State-of-the-art** (surpasses all other models, >2x Opus 4.8 performance; source: Anthropic announcement)
- CursorBench 3.2: **Within 0.5% of Fable 5's peak score** at max effort, but at half the cost per task (source: Anthropic announcement)
- Zapier AutomationBench: **~1.5x pass rate** of next-best model for same cost per task; even at lowest effort, passes more tasks than any other model (source: Anthropic announcement)
- OSWorld 2.0: **Outperforms every other model** at any given cost, surpasses Fable 5's best at ~1/3 the cost (source: Anthropic announcement)
- Terminal-Bench 2.1: **89.1%** (source: MorphLLM)
- DeepSWE v1.1: **68.8%** (vs GPT-5.6 Sol's 72.7%; source: Tosea.ai)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- ARC-AGI 3: **3x higher** than next-best model (novel problem solving; source: Anthropic announcement)
- GDPval-AA: **State-of-the-art** (source: Anthropic announcement)
- Artificial Analysis Intelligence Index: **no verified public score found** (Opus 5.5 scores 57)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **No published score** (Anthropic reported Frontier-Bench and CursorBench but not SWE-bench; source: MorphLLM)
- SWE-bench Pro: **No published score** (Opus 4.8 at 69.2% Pro, 88.6% Verified for reference; source: MorphLLM)
- FrontierCode v1.1: **Approaches Fable-level performance** at half the cost (source: Devin CEO quote in Anthropic announcement)
- LiveCodeBench: **89.0%** (source: BenchmarkList)

Long context:

- 200K standard context, supports 1M in some configurations
- 300K output tokens via Batches API

### Normalized scores (1–100)

- **Tool use: 96/100.** Exceptional agentic performance: State-of-the-art on Frontier-Bench v0.1 (>2x Opus 4.8), ~1.5x pass rate on AutomationBench, outperforms all on OSWorld 2.0 at any cost, 89.1% Terminal-Bench 2.1. Near-Fable-5 intelligence at Opus pricing. Capped only by Fable 5 on some edge cases.
- **Reasoning: 92/100.** Strong reasoning: State-of-the-art on GDPval-AA, 3x higher than next-best on ARC-AGI 3. Adheres to Constitution better than Opus 4.8, Sonnet 5, or Fable 5. Lowest misaligned behavior score (2.3) among recent models. Capped by lack of some public benchmark scores.
- **Context window: 90/100.** 200K standard context with 1M support in some configurations and 300K output via Batches API. Slightly below maximum tier (1M).
- **Multimodal: 85/100.** Native image input with strong vision capabilities. Produces stronger visual outputs than predecessors. Not full video support. Capped by output being text-only.
- **Coding: 94/100.** Outstanding coding: Approaches Fable-level on FrontierCode at half cost, within 0.5% of Fable 5 on CursorBench 3.2, state-of-the-art on Frontier-Bench. 68.8% DeepSWE v1.1 (trails GPT-5.6 Sol). No published SWE-bench scores. Capped by trailing on DeepSWE vs. GPT-5.6 Sol.
- **Cost efficiency: 85/100.** $5/$25 per 1M input/output with $0.20 cached input (5% of standard). Fast mode at $10/$50. Same pricing as Opus 4.8 but with significantly better performance. Good value for Opus tier but more expensive than Sonnet tier.
- **Overall Score: 91.4/100.** Near-Fable-5 intelligence at half the price. Best-in-class for long-running agents, coding, and knowledge work. State-of-the-art on multiple evaluations. Slightly below Fable 5 and Opus 5.5 but excellent cost-performance ratio.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5 — Anthropic](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 System Card (PDF)](https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf)
  - [Claude Opus 5 - Claude Platform Docs](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [What's new in Claude Opus 5 — Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/models/whats-new-opus-5)
  - [Pricing - Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Claude Benchmarks (2026) — MorphLLM](https://www.morphllm.com/claude-benchmarks)
  - [How to Use Claude Opus 5 — Tosea.ai](https://tosea.ai/blog/claude-opus-5-complete-guide)
  - [Claude Opus 5 Benchmark Scores — BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-5/)
  - [System cards — Anthropic](https://www.anthropic.com/system-cards)
