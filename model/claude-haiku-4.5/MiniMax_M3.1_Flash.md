# Claude Haiku 4.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Haiku 4.5 (`claude-haiku-4-5-20251001`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's legacy small model for low-latency coding, agents, computer use, and customer-facing applications. It offered near-Sonnet-4 coding quality at one-third the cost and more than twice the speed.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-haiku-4-5-20251001` and alias `claude-haiku-4-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2025-10-15; reliable knowledge cutoff February 2025 and training-data cutoff July 2025.
- **IDs:** `claude-haiku-4-5-20251001` (Claude API); `global.anthropic.claude-haiku-4-5-20251001-v1:0` (Amazon Bedrock bedrock-runtime).
- **Context window:** 200,000 input tokens with up to 64,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; manual extended thinking via `budget_tokens`; tool use, server-side web search and code execution, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $1 per 1M input tokens, $5 per 1M output tokens, $0.10 per 1M cache reads, $1.25 per 1M five-minute cache writes, and $2 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **73.3%** (Anthropic launch results; simple bash and file-edit scaffold, averaged over 50 trials, 128K thinking budget, no test-time compute)
- Terminal-Bench: **40.21% without thinking / 41.75% with a 32K thinking budget** (Anthropic launch results; Terminus 2, average of 11 runs)
- τ2-bench: **scores reported in the launch benchmark table** (Anthropic launch results; averaged over 10 runs, 128K thinking budget, with policy prompt addenda; exact values embedded in an image)
- OSWorld: **scores reported in the launch benchmark table** (Anthropic launch results; OSWorld-Verified, 100 max steps, average of four runs, 128K total thinking budget; exact values embedded in an image)
- GDPval-AA: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME: **scores reported in the launch benchmark table** (Anthropic launch results; average over 10 independent runs, pass@1 over 16 trials, 128K thinking budget; exact values embedded in an image)
- MMMLU: **scores reported in the launch benchmark table** (Anthropic launch results; average over 10 runs across 14 non-English languages, 128K thinking budget; exact values embedded in an image)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- HLE: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** (Anthropic launch results; 50-trial average with the documented tool-encouragement prompt)
- Augment agentic coding evaluation: **90% of Sonnet 4.5's performance** (Anthropic launch announcement citing Augment)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 200K-token context window with 64K output, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 87/100.** SWE-bench Verified at 73.3%, Terminal-Bench at 41.75% with thinking, and reported computer-use strength support a strong small-model tool score, though no public Tau, MCP, or Claw score was located.
- **Reasoning: 86/100.** Anthropic describes near-frontier small-model intelligence, a 90% Sonnet-4.5 coding-eval result, and stronger general reasoning than predecessors; missing public GPQA, HLE, and AA-index figures cap the score below certainty.
- **Context window: 75/100.** Anthropic verifies a 200K-token input window with 64K output, a strong but sub-1M context tier.
- **Multimodal: 82/100.** Official support covers text and image input, and Anthropic documents stronger computer and visual use than Sonnet 4; no audio or video input is listed and no public visual benchmark figure was found.
- **Coding: 91/100.** SWE-bench Verified at 73.3%, Terminal-Bench at up to 41.75%, and near-Sonnet-4.5 quality at one-third the cost provide exceptional small-model coding evidence.
- **Cost efficiency: 93/100.** At $1 input and $5 output per 1M tokens, with $0.10 cache reads and 50% batch discounts, Haiku 4.5 is very inexpensive, though Haiku 5.5 is now substantially cheaper.
- **Overall Score: 84.2/100.** A verified fast, image-capable small model with excellent coding quality and low cost; best fit for latency-sensitive production agents, though Haiku 5.5 supersedes it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 4.5 model overview](https://platform.claude.com/docs/en/models/haiku-4-5/overview)
  - [Claude Haiku 4.5 launch announcement and benchmarks](https://www.anthropic.com/news/claude-haiku-4-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_4.5.md`, using the same headings.
