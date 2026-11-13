# Claude Sonnet 4.6 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's legacy Sonnet-class model for coding, computer use, long-context reasoning, and professional work. It was the first Sonnet with a 1M-token context window and combined near-Opus intelligence with production-friendly pricing.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-sonnet-4-6`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-02-17; reliable knowledge cutoff August 2025 and training-data cutoff January 2026.
- **IDs:** `claude-sonnet-4-6` (Claude API); `global.anthropic.claude-sonnet-4-6` (Amazon Bedrock bedrock-runtime).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive and extended thinking; tool use, server-side web search and code execution, context compaction, memory tools, programmatic tool calling, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $3 per 1M input tokens, $15 per 1M output tokens, $0.30 per 1M cache reads, $3.75 per 1M five-minute cache writes, and $6 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.5%** (Anthropic launch results; updated methodology reported in the launch-page footnote)
- Pace insurance computer-use benchmark: **94%** (Anthropic launch announcement citing Pace; highest model tested by that customer)
- SWE-bench Verified: **80.2% with a prompt modification** (Anthropic launch results; main score averaged over 10 trials)
- Terminal-Bench 2.0: **reported with thinking turned off** (Anthropic launch results; Terminus-2 harness, exact value embedded in a benchmark image)
- BrowseComp: no text-extractable public score found (Anthropic launch results; web search, web fetch, programmatic tool calling, compaction, and max reasoning effort)
- GDPval-AA: no text-extractable public score found (Anthropic launch announcement states near-Opus-level performance on Artificial Analysis's GDPval-AA)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: no text-extractable public score found (Anthropic launch results list the evaluation and its harness configuration)
- ARC-AGI-2: **60.4% at high effort**; max-effort score embedded in a benchmark image (Anthropic launch results)
- OfficeQA: **matches Opus 4.6** (Anthropic launch announcement citing Databricks; exact value embedded in a chart)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.2% with a prompt modification** (Anthropic launch results; main score averaged over 10 trials)
- Terminal-Bench 2.0: **reported with thinking turned off** (Anthropic launch results; exact value embedded in a benchmark image)
- Box heavy-reasoning Q&A over enterprise documents: **15 percentage points above Sonnet 4.5** (Anthropic launch announcement citing Box)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 1M-token context window and reports that Sonnet 4.6 reasons effectively across entire codebases, lengthy contracts, or dozens of research papers; no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld-Verified at 78.5%, a 94% insurance computer-use benchmark, and strong customer evidence for orchestration and multi-agent workflows support an exceptional score, though no public Tau or MCP score was located.
- **Reasoning: 93/100.** ARC-AGI-2 at 60.4% at high effort, OfficeQA parity with Opus 4.6, and user preference over Opus 4.5 in 59% of Claude Code comparisons support a frontier-tier score; missing GPQA and general AA-index figures cap it below certainty.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta) and context compaction.
- **Multimodal: 82/100.** Official support covers text and image input, and customers report OfficeQA parity with Opus 4.6 on enterprise charts, PDFs, and tables plus polished frontend visuals; no audio or video input is listed.
- **Coding: 93/100.** SWE-bench Verified at 80.2% with a prompt modification, strong Terminal-Bench 2.0 performance, and frontier-level bug detection and app-build results provide exceptional evidence.
- **Cost efficiency: 87/100.** At $3 input and $15 output per 1M tokens, with $0.30 cache reads and 50% batch discounts, Sonnet 4.6 offers strong value, though Sonnet 5.5 is now cheaper.
- **Overall Score: 92.4/100.** A verified 1M-context frontier-tier model for coding, computer use, and professional work; best fit for production agents, though Sonnet 5.5 supersedes it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.6 model overview](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)
  - [Claude Sonnet 4.6 launch announcement and evaluations](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.6.md`, using the same headings.
