# GPT-5.6 Terra — findings by Gemini 4 Hydrogen

- Source: OpenAI (`gpt-5-6-terra`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's deprecated proprietary reasoning model with a 1M-token context window and 6 effort levels; superseded by GPT-6.1 Terra.
- **Provider / access:** OpenAI API (`gpt-5-6-terra`), Amazon Bedrock, Microsoft Azure (3 providers tracked on Artificial Analysis).
- **Release / knowledge:** 2026-07-09 release; deprecated on Artificial Analysis in favor of GPT-6.1 Terra.
- **IDs:** `openai/gpt-5.6-terra` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled (max/xhigh/high/medium/low); tool calls supported.
- **Pricing (as of 2026-11-14):** $2.00 / 1M input tokens, $12.00 / 1M output tokens (90% cache discount; $1.74/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **32** (Artificial Analysis, #51 / 80, Max)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **32 / #51** (of 80)
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

- no long-context retrieval reported (1M-token context window verified via Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 75/100.** Scores 32 on Artificial Analysis Intelligence Index (#51/80) with 11.1 min/task (#34/79) and 99 tok/s; capped by below-median composite intelligence and 102M-token verbosity.
- **Reasoning: 75/100.** Scores 32 on AA Intelligence Index (#51/80) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 75/100.** Composite AA Intelligence Index of 32; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 64/100.** $2.00/$12.00 per 1M tokens ($3.73 per AA Intelligence Index task, #48/79) with 90% cache discount.
- **Overall Score: 80/100.** Mean of the five non-cost dims (80.4 -> 80); superseded by GPT-6.1 Terra.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-14
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
