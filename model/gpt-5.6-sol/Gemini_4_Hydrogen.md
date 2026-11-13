# GPT-5.6 Sol — findings by Gemini 4 Hydrogen

- Source: OpenAI (`gpt-5-6-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's previous-generation Sol-tier proprietary reasoning model with a 1M-token context window; superseded by GPT-6 Sol.
- **Provider / access:** OpenAI API (`gpt-5-6-sol`) and 8 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-07-09 release; deprecated on Artificial Analysis in favor of GPT-6 Sol.
- **IDs:** `openai/gpt-5.6-sol` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $4.00 / 1M input tokens, $20.00 / 1M output tokens (90% cache discount; $3.08/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): no verified public score found (N/A on page; 94 tok/s, 68.49s TTFT)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
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

- **Tool use: 85/100.** 94 tok/s output speed and 68.49s TTFT with reasoning and tool calling; capped by lack of AA Intelligence Index v5.0.1 score.
- **Reasoning: 86/100.** Sol-tier reasoning model; capped by absence of AA v5.0.1 score and superseded by GPT-6 Sol.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 85/100.** Sol-tier reasoning model; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 50/100.** $4.00/$20.00 per 1M tokens ($3.08/1M blended) with 90% cache discount.
- **Overall Score: 87/100.** Mean of the five non-cost dims (86.6 -> 87); superseded by GPT-6 Sol.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-5.6 Sol](https://artificialanalysis.ai/models/gpt-5-6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
