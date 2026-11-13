# Muse Spark 1.3 — findings by Gemini 4 Hydrogen

- Source: Meta (`muse-spark-1-3`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary multimodal reasoning model supporting text, image, and video inputs with a 1M-token context window; now superseded by Muse Wonder.
- **Provider / access:** Meta API (`muse-spark-1-3`, 1 provider tracked on Artificial Analysis).
- **Release / knowledge:** 2026-09-02 release; deprecated on Artificial Analysis in favor of Muse Wonder.
- **IDs:** `meta/muse-spark-1-3` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text, image, and video input; text output; reasoning enabled; tool calls supported.
- **Pricing (as of 2026-11-13):** $1.25 / 1M input tokens, $4.25 / 1M output tokens (88% cache discount; $0.78/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **37** (Artificial Analysis, #43 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **37 / #43** (of 78)
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

- **Tool use: 78/100.** Scores 37 on Artificial Analysis Intelligence Index (#43/78) with 11.0 min/task (#33/77); capped by below-median composite intelligence and high verbosity (123M tokens).
- **Reasoning: 78/100.** Scores 37 on AA Intelligence Index (#43/78) with reasoning enabled, below the 41 class median.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 88/100.** Supports text, image, and video input with text output; capped by lack of native audio input or image/video output.
- **Coding: 78/100.** Composite AA Intelligence Index of 37; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 76/100.** $1.25/$4.25 per 1M tokens ($2.39 per AA Intelligence Index task, #35/77) with 88% cache discount.
- **Overall Score: 83/100.** Mean of the five non-cost dims (83.4 -> 83); best-fit for cost-conscious multimodal (video/image) and 1M-context tasks, though superseded by Muse Wonder.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Spark 1.3](https://artificialanalysis.ai/models/muse-spark-1-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
