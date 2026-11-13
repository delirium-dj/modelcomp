# Gemini 4 Argon — findings by Gemini 4 Hydrogen

- Source: Google (`gemini-4-argon`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's proprietary reasoning model with a 1M-token context window, offering strong general intelligence at mid-tier pricing ($2/$10 per 1M tokens).
- **Provider / access:** Google Gemini API (`gemini-4-argon`) and 3 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-09-30 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-4-argon` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $2.00 / 1M input tokens, $10.00 / 1M output tokens (95% cache discount; $1.47/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **50** (Artificial Analysis, #22 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #22** (of 78)
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

- **Tool use: 88/100.** Scores 50 on Artificial Analysis Intelligence Index (#22/78); capped by slow task completion (30.0 min/task, #71/77) and 65 tok/s output speed.
- **Reasoning: 89/100.** Scores 50 on AA Intelligence Index (#22/78) with reasoning enabled; capped behind top-tier frontier models (59–65).
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 88/100.** Solid composite performance in AA Intelligence Index (50); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 62/100.** $2.00/$10.00 per 1M tokens ($4.97 per AA Intelligence Index task, #56/77) with 95% cache discount; moderate cost for a reasoning model.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88.4 -> 88); best-fit for reasoning and 1M-context workloads where moderate API pricing matters more than speed.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
