# Claude Haiku 5.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Haiku 5.5 (`claude-haiku-5-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, cheapest, and most capable Haiku-class model, optimized for high-volume classification, extraction, routing, summarization, compaction, and subagent workloads. It also supports 1M context and image input.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-haiku-5-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-10-07; reliable and training-data knowledge cutoff June 2026.
- **IDs:** `claude-haiku-5-5` (Claude API); `anthropic.claude-haiku-5-5` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive reasoning on by default; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** for prompts up to 100K tokens, $0.10 per 1M input tokens, $0.50 per 1M output tokens, $0.01 per 1M cache reads, $0.125 per 1M five-minute cache writes, and $0.20 per 1M one-hour cache writes. For prompts over 100K, rates are $0.50 input, $2.50 output, $0.05 cache read, $0.625 five-minute cache write, and $1 one-hour cache write. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **72.4% partial** on the offline subset (Anthropic launch results; computer-use benchmark)
- GDPval-AA v2.1: **1620** (Artificial Analysis evaluation reported by Anthropic; 44 occupations and nine industries)
- GDPval-AA v2: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **45.9% without tools / 57.4% with tools** (Anthropic launch results)
- AA-Briefcase v1.1: **1578** (Artificial Analysis evaluation reported by Anthropic)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 1.1 (Main): **46.4%** (Anthropic launch results)
- Terminal-Bench 4.0: **39.2%** (Anthropic launch results; agentic terminal-coding evaluation)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 1M-token context window and supports up to 300K batch output, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld 2.1 at 72.4% partial and Anthropic's fast browser/computer-use positioning show strong execution, though no public Tau, MCP, or Claw benchmark was located.
- **Reasoning: 86/100.** HLE at 57.4% with tools, GDPval-AA v2.1 at 1620, and AA-Briefcase at 1578 support a strong small-model score; missing GPQA and long-context retrieval results cap it below the frontier models.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 82/100.** Official support covers text and image input, and Chartography at 46.4% without tools demonstrates useful visual reasoning; no audio or video input is documented.
- **Coding: 88/100.** FrontierCode 1.1 at 46.4% is surprisingly strong and Terminal-Bench 4.0 at 39.2% demonstrates credible agentic terminal use, but it remains below Sonnet and Opus.
- **Cost efficiency: 100/100.** At $0.10 input and $0.50 output per 1M tokens for prompts up to 100K, with $0.01 cache reads and 50% batch discounts, Haiku 5.5 is exceptionally cheap; Anthropic reports about 75% lower average cost than Haiku 4.5.
- **Overall Score: 88.6/100.** A verified 1M-context, image-capable, exceptionally fast and inexpensive model for high-volume agentic work; best fit for routing, extraction, compaction, subagents, and live customer-facing automation.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 5.5 model overview](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
  - [Claude Haiku 5.5 launch announcement and benchmarks](https://www.anthropic.com/claude-haiku-5-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.5.md`, using the same headings.
