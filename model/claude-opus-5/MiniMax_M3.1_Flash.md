# Claude Opus 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Opus 5 (`claude-opus-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's legacy Opus-class model for demanding daily coding, agent, and knowledge work. It combines near-Fable-5 capability with 1M context and explicit effort controls.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-opus-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-07-24; reliable and training-data knowledge cutoff May 2026.
- **IDs:** `claude-opus-5` (Claude API); `anthropic.claude-opus-5` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive reasoning on by default; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $5 per 1M input tokens, $25 per 1M output tokens, $0.50 per 1M cache reads, $6.25 per 1M five-minute cache writes, and $10 per 1M one-hour cache writes. Batch API requests receive a 50% discount; fast mode is available at twice the base price.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **75.4% partial** (Anthropic launch results; computer-use benchmark)
- AutomationBench: **26.9%** (Anthropic launch results; Zapier business-workflow benchmark)
- CursorBench 3.2: **within 0.5% of Fable 5's peak score at max effort** (Anthropic launch results; exact value embedded in a chart)
- Terminal-Bench 4.0: **52.3%** (Anthropic launch results; Claude Code harness)
- GDPval-AA v2: **1824** (Anthropic launch results)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **63.6% with tools** (Anthropic launch results; Fable 5.1 launch results)
- ARC-AGI 3: **three times the next-best model's score** (Anthropic launch results; exact value embedded in a chart)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Frontier-Bench v0.1: **state-of-the-art; more than doubles Opus 4.8's performance at lower cost per task** (Anthropic launch results; mini-SWE-agent harness, GKE backend, mean reward over five attempts per task)
- FrontierCode 1.1: **approaches Fable-level performance at half the cost** (Anthropic launch results; exact value embedded in a chart)
- Terminal-Bench-Science 0.1: **29.0%** (Anthropic launch results; Claude Code harness, three trials per task)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 1M-token context window and supports up to 300K batch output, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld 2.0 at 75.4% partial, AutomationBench at 26.9%, and state-of-the-art Frontier-Bench and near-Fable CursorBench results show strong autonomous execution; no public Tau or MCP score was found.
- **Reasoning: 94/100.** GDPval-AA v2 at 1824, HLE at 63.6% with tools, and an ARC-AGI 3 score three times the next-best model support a frontier-tier score; missing GPQA and long-context results cap it below certainty.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 82/100.** Official support covers text and image input, and Anthropic documents stronger visual outputs and a successful raw-pixel computer-vision reconstruction task; no audio or video input is listed.
- **Coding: 95/100.** State-of-the-art Frontier-Bench v0.1, near-Fable CursorBench 3.2, Terminal-Bench 4.0 at 52.3%, and FrontierCode near-Fable performance provide exceptional agentic-coding evidence.
- **Cost efficiency: 80/100.** At $5 input and $25 output per 1M tokens, Opus 5 is a premium price, though Anthropic says it is more efficient than Opus 4.8 at the same token price and supports 50% batch discounts.
- **Overall Score: 93/100.** A verified 1M-context frontier model for long-running coding, agent, and knowledge work; best fit for high-value daily workloads, though Opus 5.5 is the stronger current model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 5 model overview](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Claude Opus 5 launch announcement and benchmarks](https://www.anthropic.com/news/claude-opus-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.md`, using the same headings.
