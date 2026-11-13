# Claude Opus 5.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's frontier general-purpose model for long-running agentic coding and knowledge work. It uses adaptive, always-on reasoning and a 1M-token context window.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-opus-5-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-09-22; reliable and training-data knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5` (Claude API); `anthropic.claude-opus-5-5` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; adaptive reasoning always on; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $4 per 1M input tokens, $20 per 1M output tokens, $0.20 per 1M cache reads, $5 per 1M five-minute cache writes, and $8 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic launch results; Claude Code harness, xhigh effort, five trials per task; ±2.6 points standard error)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic launch results; Claude Code harness, three trials per task; ±3.5–5 points standard error)
- GDPval-AA v2.1: **1846 Elo** (Anthropic launch results citing Artificial Analysis's professional-work evaluation across 44 occupations)
- AutomationBench: **40.0%** (Zapier evaluation reported by Anthropic; safeguards active and no fallback model)
- OSWorld 2.1: **81.8%** (Anthropic launch results, partial-credit setting)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **67.7% with tools** (Anthropic launch results)
- FrontierCode v1.1 (Main): **54.4%** (Anthropic launch results)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- CursorBench 4.0: **57.8%** (Anthropic launch results)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic reports a 1M-token context window and that the model remains focused across very long tasks, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 at 66.4%, OSWorld 2.1 at 81.8%, and AutomationBench at 40.0% demonstrate strong command-line and computer-use execution, although no public MCP-Atlas or Tau benchmark was located.
- **Reasoning: 94/100.** HLE with tools at 67.7%, GDPval-AA v2.1 at 1846 Elo, and strong long-horizon knowledge-work results support a frontier-tier score; missing GPQA and long-context retrieval results cap it below the maximum.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 82/100.** Official support covers text and image input with strong chart-recognition and computer-use results, including Chartography at 89.0% with tools, but no audio or video input is documented.
- **Coding: 95/100.** FrontierCode v1.1 at 54.4%, Terminal-Bench 4.0 at 66.4%, CursorBench 4.0 at 57.8%, and Terminal-Bench-Science at 58.7% provide unusually strong evidence for agentic coding.
- **Cost efficiency: 80/100.** At $4 input and $20 output per million tokens, Opus 5.5 is markedly cheaper than Fable/Mythos models and Anthropic reports 40% lower typical task cost than Opus 5, but it remains a premium price point.
- **Overall Score: 93/100.** A frontier reasoning and agentic-coding model with verified 1M context and image input; best fit for long-running, high-value engineering and knowledge-work agents rather than low-latency commodity traffic.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 5.5 model overview](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Claude Opus 5.5 launch announcement and benchmarks](https://www.anthropic.com/claude-opus-5-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
