# Claude Opus 4.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Opus 4.5 (`claude-opus-4-5-20251101`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's legacy Opus-class model for coding, agents, computer use, and deep research. It introduced effort control and context compaction and remains a capable general-purpose model with a 200K context window.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-opus-4-5-20251101` and alias `claude-opus-4-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2025-11-24; reliable knowledge cutoff May 2025 and training-data cutoff August 2025.
- **IDs:** `claude-opus-4-5-20251101` (Claude API); `global.anthropic.claude-opus-4-5-20251101-v1:0` (Amazon Bedrock bedrock-runtime).
- **Context window:** 200,000 input tokens with up to 64,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; extended thinking with effort control; tool use, server-side web search and code execution, context compaction, memory tools, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $5 per 1M input tokens, $25 per 1M output tokens, $0.50 per 1M cache reads, $6.25 per 1M five-minute cache writes, and $10 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp-Plus: **85.30% with context management, memory, effort control, and advanced tool use** (Anthropic launch results; 70.48% without those techniques)
- SWE-bench Verified: **state-of-the-art highest score** (Anthropic launch results; exact value embedded in a chart; no thinking budget, averaged over five trials)
- Terminal-Bench: **15% improvement over Sonnet 4.5** (Anthropic launch announcement citing Warp; exact value embedded in a chart)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: **technically scored as a failure** in the Anthropic example scenario despite finding a legitimate cabin-upgrade path (Anthropic launch results)
- GDPval-AA: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **state-of-the-art highest score** (Anthropic launch results; exact value embedded in a chart)
- SWE-bench Multilingual: **leads in 7 of 8 programming languages** (Anthropic launch results; exact values embedded in a chart)
- Aider Polyglot: **state-of-the-art** (Anthropic launch results; exact value embedded in a chart)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 200K-token context window and reports strong long-context storytelling and automatic conversation summarization, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** BrowseComp-Plus at 85.30%, state-of-the-art SWE-bench Verified, 50%–75% fewer tool-calling and build errors reported by customers, and excellent multi-agent orchestration support an exceptional score.
- **Reasoning: 93/100.** Anthropic documents stronger reasoning and mathematics, state-of-the-art performance in several domains, and a technical-and-judgment take-home exam score above every human candidate; missing public GPQA/HLE figures cap the score below certainty.
- **Context window: 75/100.** Anthropic verifies a 200K-token input window with 64K output, a strong but sub-1M context tier; context compaction and memory tools partly extend usable work over long sessions.
- **Multimodal: 82/100.** Official support covers text and image input, and Anthropic documents better vision plus computer, spreadsheet, and browser use; no audio or video input is listed and no public visual benchmark figure was found.
- **Coding: 95/100.** State-of-the-art SWE-bench Verified, leadership in 7 of 8 SWE-bench Multilingual languages, state-of-the-art Aider Polyglot, and up to 65% fewer tokens on held-out coding tests provide exceptional evidence.
- **Cost efficiency: 80/100.** At $5 input and $25 output per 1M tokens, Opus 4.5 is a premium price, though it is markedly more token-efficient than predecessors and supports 50% batch discounts.
- **Overall Score: 87.8/100.** A verified high-capability model with excellent coding, agents, research, and image input; best fit for difficult professional work within a 200K context budget, though newer Opus models lead on context and cost.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.5 model overview](https://platform.claude.com/docs/en/models/opus-4-5/overview)
  - [Claude Opus 4.5 launch announcement and evaluations](https://www.anthropic.com/news/claude-opus-4-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.5.md`, using the same headings.
