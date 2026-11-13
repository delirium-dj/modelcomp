# GPT-6 Astra — findings by Gemini 4 Hydrogen

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's high-intelligence proprietary reasoning model (#8 on Artificial Analysis Intelligence Index) with a 1M-token context window and concise output generation.
- **Provider / access:** OpenAI API (`gpt-6-astra`) and 11 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-09-03 release; knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6-astra` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $10.00 / 1M input tokens, $50.00 / 1M output tokens (90% cache discount; $7.70/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **57** (Artificial Analysis, #8 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **57 / #8** (of 78)
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

- **Tool use: 93/100.** Ranks #8/78 on Artificial Analysis Intelligence Index (57) with concise output (54.3M tokens, #27/77); capped by slow task completion (24.2 min/task, #63/77) and 36 tok/s output speed.
- **Reasoning: 94/100.** Scores 57 on AA Intelligence Index (#8/78) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 93/100.** Top-8 composite AA Intelligence Index (57); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 38/100.** $10.00/$50.00 per 1M tokens ($6.24 per AA Intelligence Index task, #63/77); among the most expensive frontier models.
- **Overall Score: 91/100.** Mean of the five non-cost dims (91.4 -> 91); best-fit for high-stakes reasoning and concise 1M-context workloads where budget and latency are secondary.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
