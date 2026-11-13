# Claude Sonnet 5.5 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier workhorse model balancing speed and intelligence (#13 on Artificial Analysis Intelligence Index) with a 1M-token context window and 128K max output.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud Vertex AI (`claude-sonnet-5-5`), Microsoft Foundry (`claude-sonnet-5-5`).
- **Release / knowledge:** 2026-09-28 release; reliable knowledge & training data cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output (up to 300K output on Message Batches API), verified via Anthropic Models Overview.
- **Modalities:** Text and image input; text output; adaptive reasoning enabled; tool calls, web search, code execution, and JSON mode supported.
- **Pricing (as of 2026-11-13):** $2.00 / 1M input tokens, $10.00 / 1M output tokens (95% cache discount; $1.47/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **55** (Artificial Analysis, #13 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **55 / #13** (of 78)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported (1M-token context window verified via Anthropic docs)

### Normalized scores (1–100)

- **Tool use: 92/100.** Ranks #13/78 on Artificial Analysis Intelligence Index (55) with 139 tok/s output speed; capped by highest-in-class verbosity (335M tokens, #77/77) and 34.1 min/task.
- **Reasoning: 92/100.** Scores 55 on AA Intelligence Index (#13/78) with adaptive reasoning.
- **Context window: 95/100.** Full 1M-token context window and 128K sync / 300K batch max output; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 92/100.** Top-15 composite AA Intelligence Index (55); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 52/100.** $2.00/$10.00 per 1M tokens with 95% cache discount, but 335M-token verbosity pushes AA Intelligence Index task cost to $10.02 (#70/77).
- **Overall Score: 91/100.** Mean of the five non-cost dims (90.6 -> 91); best-fit for high-intelligence coding and agentic workflows where 139 tok/s throughput and mid-tier token rates matter.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Anthropic official documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
