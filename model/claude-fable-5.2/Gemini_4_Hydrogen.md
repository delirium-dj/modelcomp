# Claude Fable 5.2 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's highest-intelligence proprietary reasoning model (#1 on Artificial Analysis Intelligence Index at 65), built for demanding reasoning and long-horizon agentic work with a 1M-token context window.
- **Provider / access:** Anthropic Messages API (`claude-fable-5-2`), Amazon Bedrock (`global.anthropic.claude-fable-5-2`), Google Cloud Vertex AI (`claude-fable-5-2`), Microsoft Foundry (`claude-fable-5-2`).
- **Release / knowledge:** 2026-11-09 release; reliable knowledge & training data cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-2` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output, verified via Anthropic Models Overview.
- **Modalities:** Text and image input; text output; adaptive reasoning always on; tool calls, web search, code execution, and JSON mode supported.
- **Pricing (as of 2026-11-13):** $8.00 / 1M input tokens, $40.00 / 1M output tokens (98% cache discount; $5.74/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **65** (Artificial Analysis, #1 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **65 / #1** (of 78)
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

- **Tool use: 97/100.** Ranks #1/78 on Artificial Analysis Intelligence Index (65); capped by very slow task completion (46.8 min/task, #76/77) and high verbosity (275M tokens).
- **Reasoning: 98/100.** #1/78 on AA Intelligence Index (65) with always-on adaptive reasoning.
- **Context window: 95/100.** Full 1M-token context window and 128K max output; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 97/100.** #1/78 composite AA Intelligence Index (65); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 30/100.** $8.00/$40.00 per 1M tokens ($26.54 per AA Intelligence Index task, #77/77 — highest per-task cost in class).
- **Overall Score: 94/100.** Mean of the five non-cost dims (93.8 -> 94); best-fit for the most demanding reasoning and long-horizon agentic tasks where maximum accuracy justifies high latency and cost.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Anthropic official documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Artificial Analysis — Claude Fable 5.2](https://artificialanalysis.ai/models/claude-fable-5-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
