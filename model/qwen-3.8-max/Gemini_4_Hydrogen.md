# Qwen 3.8 Max — findings by Gemini 4 Hydrogen

- Source: Alibaba (`qwen3-8-max`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's proprietary reasoning model (`Qwen3.8 Max (0902)`) with a 984k-token context window and text/image input support.
- **Provider / access:** Alibaba Cloud / Qwen API (`qwen3-8-max`, 2 API providers tracked on Artificial Analysis).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly specified.
- **IDs:** `alibaba/qwen3-8-max` (no Free ID on OpenCode Zen)
- **Context window:** 984k tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls supported.
- **Pricing (as of 2026-11-14):** $2.00 / 1M input tokens, $6.00 / 1M output tokens (88% cache discount; $1.18/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **34** (Artificial Analysis, #49 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **34 / #49** (of 78)
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

- no long-context retrieval reported (984k-token context window verified via Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 74/100.** Scores 34 on Artificial Analysis Intelligence Index (#49/78); capped by slowest-in-class task completion (51.2 min/task, #77/77) and high verbosity (150M tokens).
- **Reasoning: 76/100.** Scores 34 on AA Intelligence Index (#49/78) with reasoning enabled, below the 41 class median.
- **Context window: 94/100.** 984k-token context window; capped just shy of 1M and by lack of published long-context retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 75/100.** Composite AA Intelligence Index of 34; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 55/100.** $2.00/$6.00 per 1M tokens ($1.18/1M blended) with 88% cache discount, but 150M-token verbosity pushes AA task cost to $10.02 (#71/77).
- **Overall Score: 80/100.** Mean of the five non-cost dims (80.2 -> 80); best-fit for 984k-context reasoning workloads where latency is not critical.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-14
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Qwen3.8 Max](https://artificialanalysis.ai/models/qwen3-8-max)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
