# GPT-6.1 Sol — findings by Gemini 4 Hydrogen

- Source: OpenAI (`gpt-6-1-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's high-intelligence, concise proprietary reasoning model (#12 on Artificial Analysis Intelligence Index at 55) with a 1M-token context window and strong per-task cost efficiency ($1.27/task).
- **Provider / access:** OpenAI API (`gpt-6-1-sol`) and 10 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-09-29 release; knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-6.1-sol` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $2.00 / 1M input tokens, $10.00 / 1M output tokens (95% cache discount; $1.47/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **55** (Artificial Analysis, #12 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **55 / #12** (of 78)
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

- **Tool use: 92/100.** Ranks #12/78 on Artificial Analysis Intelligence Index (55) with concise output (63.7M tokens, #35/77); capped by slow task completion (23.3 min/task, #60/77) and 49 tok/s output speed.
- **Reasoning: 92/100.** Scores 55 on AA Intelligence Index (#12/78) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 92/100.** Top-12 composite AA Intelligence Index (55); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 78/100.** $2.00/$10.00 per 1M tokens with 95% cache discount and concise output, yielding $1.27 per AA Intelligence Index task (#20/77).
- **Overall Score: 91/100.** Mean of the five non-cost dims (90.6 -> 91); best-fit for high-intelligence, cost-efficient 1M-context reasoning workloads where latency is secondary.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
