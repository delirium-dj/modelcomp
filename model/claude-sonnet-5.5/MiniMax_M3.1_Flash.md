# Claude Sonnet 5.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Sonnet 5.5 (`claude-sonnet-5-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast, efficient general-purpose model for everyday coding, agent, and enterprise workloads. It combines near-Opus performance on many tasks with 1M context and lower token pricing.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-sonnet-5-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-09-28; reliable and training-data knowledge cutoff June 2026.
- **IDs:** `claude-sonnet-5-5` (Claude API); `anthropic.claude-sonnet-5-5` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive reasoning on by default; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $2 per 1M input tokens, $10 per 1M output tokens, $0.10 per 1M cache reads, $2.50 per 1M five-minute cache writes, and $4 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic launch results; agentic terminal-coding evaluation)
- OSWorld 2.1: **80.1% partial** (Anthropic launch results; computer-use benchmark)
- GDPval-AA v2.1: **1844** (Artificial Analysis evaluation reported by Anthropic; 44 occupations and nine industries)
- GDPval-AA v2: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **64.5% with tools** (Anthropic launch results)
- AA-Briefcase v1.1: **1811** (Artificial Analysis evaluation reported by Anthropic)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 1.1 (Main): **52.1% at xhigh effort / 46.2% at max effort** (Anthropic launch results)
- CursorBench 4.0: **55.5%** (Anthropic launch results)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic reports a 1M-token context window and strong long-horizon work, including successful screenshot-only play of Pokémon Red, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 at 70.6%, OSWorld 2.1 at 80.1% partial, and nearly Opus-level professional-work scores demonstrate strong agent and computer-use execution, although no public Tau or MCP benchmark was located.
- **Reasoning: 93/100.** HLE with tools at 64.5%, GDPval-AA v2.1 at 1844, and AA-Briefcase at 1811 support a frontier-tier score; missing GPQA and long-context retrieval results cap it below the maximum.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 82/100.** Official support covers text and image input, with Chartography at 61.6% without tools and screenshot-only game play, but no audio or video input is documented.
- **Coding: 95/100.** Terminal-Bench 4.0 at 70.6%, FrontierCode 1.1 at up to 52.1%, and CursorBench 4.0 at 55.5% provide exceptional agentic-coding evidence.
- **Cost efficiency: 91/100.** At $2 input and $10 output per 1M tokens, with $0.10 cache reads and 50% batch discounts, Sonnet 5.5 offers exceptional value; Anthropic reports up to 30% lower per-task cost than Sonnet 5.
- **Overall Score: 93/100.** A verified 1M-context frontier model balancing near-Opus quality, fast throughput, image input, and strong coding value; best fit for production coding agents and everyday enterprise knowledge work.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 5.5 model overview](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Claude Sonnet 5.5 launch announcement and benchmarks](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5.5.md`, using the same headings.
