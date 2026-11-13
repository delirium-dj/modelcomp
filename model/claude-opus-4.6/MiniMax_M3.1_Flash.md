# Claude Opus 4.6 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Opus 4.6 (`claude-opus-4-6`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's legacy Opus-class model for advanced coding, agentic search, and professional knowledge work. It introduced adaptive thinking, effort controls, context compaction, and the first Opus-class 1M-token context window.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-opus-4-6`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-02-05; reliable knowledge cutoff May 2025 and training-data cutoff August 2025.
- **IDs:** `claude-opus-4-6` (Claude API); `global.anthropic.claude-opus-4-6-v1` (Amazon Bedrock bedrock-runtime).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header. Prompts over 200K tokens use premium $10/$37.50 pricing on the Claude Platform.
- **Modalities:** Text and images in; text out; adaptive thinking and extended thinking; tool use, server-side web search and code execution, context compaction, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $5 per 1M input tokens and $25 per 1M output tokens for prompts up to 200K; $10 input and $37.50 output above 200K. Cache reads cost $0.50 per 1M, five-minute cache writes $6.25, and one-hour cache writes $10. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **state-of-the-art highest score** (Anthropic launch results; Terminus-2 harness, 1× guaranteed / 3× ceiling resource allocation, 5–15 samples per task)
- MCP Atlas: **62.7% at high effort**; industry-leading score (Anthropic launch results; run at max effort unless noted)
- BrowseComp: **86.8% with a multi-agent harness** (Anthropic launch results; web search, web fetch, programmatic tool calling, context compaction, and max reasoning effort)
- BigLaw Bench: **90.2%** (Anthropic launch announcement citing Harvey; 40% perfect scores and 84% above 0.8)
- Box multi-source analysis eval: **68% versus a 58% baseline** (Anthropic launch announcement citing Box)
- GDPval-AA: **144 Elo points above GPT-5.2 and 190 above Opus 4.5** (Anthropic launch results; independent Artificial Analysis evaluation)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **53.0% with tools** (Anthropic launch results; updated after improved cheating detection; web search, code execution, programmatic tool calling, compaction, and max reasoning effort)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **81.42% with a prompt modification** (Anthropic launch results; main score averaged over 25 trials)
- SWE-bench Verified / SWE-Pro: main reported score embedded in an image; no text-extractable public value found
- Terminal-Bench 2.0: **state-of-the-art highest score** (Anthropic launch results; exact value embedded in a benchmark image)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR v2, 8-needle 1M variant: **76%** (Anthropic launch results; Sonnet 4.5 scored 18.5%)
- Anthropic reports that Opus 4.6 holds and tracks information across hundreds of thousands of tokens with less drift and picks up buried details missed by Opus 4.5.

### Normalized scores (1–100)

- **Tool use: 97/100.** Terminal-Bench 2.0 state of the art, MCP Atlas at 62.7%, BrowseComp at 86.8% with a multi-agent harness, and strong customer evidence for planning, parallel subagents, and tool use support an exceptional score.
- **Reasoning: 94/100.** HLE with tools at 53.0%, a 144-point GDPval-AA lead over GPT-5.2, and strong long-context document reasoning support a frontier score; missing GPQA and general AA-index figures cap it below certainty.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta) and strong MRCR v2 retrieval.
- **Multimodal: 82/100.** Official support covers text and image input, and Anthropic documents vision-enhanced computer use and document work; no audio or video input is listed and no public visual benchmark figure was found.
- **Coding: 95/100.** State-of-the-art Terminal-Bench 2.0, SWE-bench Verified at 81.42% with the documented prompt modification, strong code review and debugging, and multi-million-line migration capability provide exceptional evidence.
- **Cost efficiency: 80/100.** At $5 input and $25 output per 1M tokens, Opus 4.6 is a premium price, though it adds context compaction and effort controls that can materially reduce task cost; over-200K prompts cost more.
- **Overall Score: 93.6/100.** A verified 1M-context frontier model for long-running coding, agentic search, and professional work; best fit for difficult multi-step tasks, though Opus 5.5 is the stronger current model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.6 model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview)
  - [Claude Opus 4.6 launch announcement and evaluations](https://www.anthropic.com/news/claude-opus-4-6)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.6.md`, using the same headings.
