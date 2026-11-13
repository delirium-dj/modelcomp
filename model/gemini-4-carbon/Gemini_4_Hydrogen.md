# Gemini 4 Carbon — findings by Gemini 4 Hydrogen

- Source: Google (`gemini-4-carbon`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's flagship multimodal reasoning model (#4 on Artificial Analysis Intelligence Index) supporting text, image, speech, and video inputs with a 1M-token context window.
- **Provider / access:** Google Gemini API (`gemini-4-carbon`, 1 provider tracked on Artificial Analysis).
- **Release / knowledge:** 2026-10-28 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-4-carbon` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text, image, speech, and video input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $2.00 / 1M input tokens, $10.00 / 1M output tokens (95% cache discount; $1.47/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **60** (Artificial Analysis, #4 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **60 / #4** (of 78)
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

- **Tool use: 95/100.** Ranks #4/78 on Artificial Analysis Intelligence Index (60); capped by slow task completion (28.4 min/task, #69/77) and high verbosity (205M tokens).
- **Reasoning: 96/100.** Scores 60 on AA Intelligence Index (#4/78), trailing only Claude Fable 5.2 (62–65).
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 92/100.** Supports text, image, speech, and video input with text output; capped by text-only output.
- **Coding: 94/100.** Top-4 composite AA Intelligence Index (60); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 60/100.** $2.00/$10.00 per 1M tokens ($5.48 per AA Intelligence Index task, #59/77) with 95% cache discount.
- **Overall Score: 94/100.** Mean of the five non-cost dims (94.4 -> 94); best-fit for demanding multimodal reasoning and 1M-context agentic tasks at mid-tier token pricing.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 4 Carbon](https://artificialanalysis.ai/models/gemini-4-carbon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
