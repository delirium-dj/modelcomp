# Claude Sonnet 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's legacy Sonnet-class model for agentic software engineering and everyday knowledge work. It combines near-Opus-4.8 capability in many agentic tasks with 1M context and low token pricing.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-sonnet-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-06-30; reliable and training-data knowledge cutoff January 2026.
- **IDs:** `claude-sonnet-5` (Claude API); `anthropic.claude-sonnet-5` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive reasoning on by default; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $2 per 1M input tokens, $10 per 1M output tokens, $0.20 per 1M cache reads, $2.50 per 1M five-minute cache writes, and $4 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.5%** for Sonnet 4.6 under the updated methodology (Anthropic launch-page footnote); the Sonnet 5 launch charts compare against this baseline but expose the Sonnet 5 value only graphically.
- BrowseComp: no text-extractable public score found (Anthropic launch charts show Sonnet 5 cost-performance curves against Sonnet 4.6 and Opus 4.8)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 4.0: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- Public benchmark table: **not text-extractable** (Anthropic's Sonnet 5 launch benchmark table is embedded as an image; the surrounding announcement describes Sonnet 5 as close to Opus 4.8 on reasoning, tool use, coding, and knowledge work)

Long context:

- Anthropic verifies a 1M-token context window and supports up to 300K batch output, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Anthropic documents browsers, terminals, autonomous planning, and improved OSWorld-Verified cost-performance relative to Opus 4.8, but the Sonnet 5 benchmark values are image-only and no public Tau or MCP score was found.
- **Reasoning: 90/100.** Anthropic describes near-Opus-4.8 performance and lower hallucination and sycophancy rates than Sonnet 4.6; the lack of a text-extractable GPQA, HLE, or AA score caps the score below certainty.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 82/100.** Official support covers text and image input, and Anthropic documents vision-enhanced computer use, but no audio or video input is listed and no public visual benchmark figure was found.
- **Coding: 91/100.** Anthropic and early-access partners describe top-tier agentic coding close to Opus-class quality, including completing difficult pull requests and root-cause debugging, but the launch benchmark table is image-only.
- **Cost efficiency: 91/100.** At $2 input and $10 output per 1M tokens, with $0.20 cache reads and 50% batch discounts, Sonnet 5 is highly cost-efficient, though Sonnet 5.5 now offers cheaper cache reads.
- **Overall Score: 90.6/100.** A verified 1M-context, image-capable, highly efficient agentic model; best fit for production coding agents and enterprise workflows, though the legacy Sonnet 5.5 is the stronger current choice.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 5 model overview](https://platform.claude.com/docs/en/models/sonnet-5/overview)
  - [Claude Sonnet 5 launch announcement](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5.md`, using the same headings.
