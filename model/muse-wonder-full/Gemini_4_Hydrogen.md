# Muse Wonder — findings by Gemini 4 Hydrogen

- Source: Meta (`muse-wonder`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta's flagship proprietary multimodal reasoning model supporting text, image, speech, and video inputs with a 1M-token context window, superseding Muse Spark 1.3.
- **Provider / access:** Meta API (`muse-wonder`, 2 API providers tracked on Artificial Analysis).
- **Release / knowledge:** 2026-10-12 release; knowledge cutoff not publicly specified.
- **IDs:** `meta/muse-wonder` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text, image, speech, and video input; text output; reasoning enabled; tool calls supported.
- **Pricing (as of 2026-11-13):** $4.00 / 1M input tokens, $20.00 / 1M output tokens (95% cache discount; $2.94/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **44** (Artificial Analysis, #34 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #34** (of 78)
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

- **Tool use: 84/100.** Scores 44 on Artificial Analysis Intelligence Index (#34/78) with 108 tok/s output speed and 14.8 min/task; capped by 113M-token verbosity.
- **Reasoning: 84/100.** Scores 44 on AA Intelligence Index (#34/78) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 92/100.** Supports text, image, speech, and video input with text output; capped by text-only output.
- **Coding: 84/100.** Composite AA Intelligence Index of 44; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 50/100.** $4.00/$20.00 per 1M tokens ($6.95 per AA Intelligence Index task, #65/77) with 95% cache discount.
- **Overall Score: 88/100.** Mean of the five non-cost dims (87.8 -> 88); best-fit for multimodal (audio/video/image) and 1M-context reasoning workloads.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Wonder](https://artificialanalysis.ai/models/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
