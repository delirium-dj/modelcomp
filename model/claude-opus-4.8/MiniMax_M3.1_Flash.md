# Claude Opus 4.8 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Opus 4.8 (`claude-opus-4-8`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's legacy Opus-class model for coding, agents, and knowledge work, with explicit effort control and a 1M context window. It emphasizes reliable judgment and efficient tool use.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-opus-4-8`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-05-28; reliable and training-data knowledge cutoff January 2026.
- **IDs:** `claude-opus-4-8` (Claude API); `anthropic.claude-opus-4-8` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive reasoning on by default; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $5 per 1M input tokens, $25 per 1M output tokens, $0.50 per 1M cache reads, $6.25 per 1M five-minute cache writes, and $10 per 1M one-hour cache writes. Batch API requests receive a 50% discount; fast mode costs $10 input and $50 output per 1M.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Online-Mind2Web: **84%** (Anthropic launch announcement citing a customer evaluation; browser/computer-use benchmark)
- Terminal-Bench 2.1: no text-extractable public score found (Anthropic launch benchmark table is embedded as an image; Terminus-2 public harness noted in the launch footnotes)
- OSWorld-Verified: no text-extractable public score found
- GDPval-AA v2.1: no verified public score found
- GDPval-AA v2: no verified public score found
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

- CursorBench: **exceeds prior Opus models at every effort level** (Anthropic launch announcement; exact numeric values embedded in an image)
- Frontier-Bench / other coding: **not text-extractable** (Anthropic's launch benchmark table is an image)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 1M-token context window and supports up to 300K batch output, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** Online-Mind2Web at 84%, strong CursorBench results at every effort level, clean tool calling, and dynamic workflows with hundreds of subagents provide exceptional agent evidence; no public Tau or MCP score was found.
- **Reasoning: 92/100.** Anthropic documents sharper judgment, better planning, proactive uncertainty flagging, and a roughly fourfold reduction in unflagged code flaws; the launch benchmark values are image-only and no public GPQA/HLE score was located.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 82/100.** Official support covers text and image input, and customers report reasoning directly over PDFs and diagrams; no audio or video input is listed and no public visual benchmark figure was found.
- **Coding: 93/100.** CursorBench leadership and reported codebase-scale migration capability provide strong coding evidence, though Anthropic's launch table is image-only.
- **Cost efficiency: 80/100.** At $5 input and $25 output per 1M tokens, Opus 4.8 is a premium price, though it is more token-efficient than Opus 4.7, supports 50% batch discounts, and Anthropic reports better performance at the same cost.
- **Overall Score: 91.8/100.** A verified 1M-context frontier model for long-running coding, agent, and knowledge work; best fit for high-value workloads, though Opus 5.5 is the stronger current model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.8 model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Claude Opus 4.8 launch announcement](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.8.md`, using the same headings.
