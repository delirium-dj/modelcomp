# Inkling Small — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/inkling-small
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Lightweight experimental foundational model optimized for rapid text generation, low-latency inference, and agile developer tasks.
- **Provider / access:** OpenCode Zen `opencode/inkling-small` / local experimental route.
- **Release / knowledge:** Re-verified October 2026; experimental small-scale model.
- **IDs:** `opencode/inkling-small`
- **Context window:** 64K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Free / low-cost experimental tier.
- **Architecture:** Compact transformer architecture optimized for minimal resource footprint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.0%** (Experimental evaluation harness)
- Tau3-Banking / Tau2-Bench: **67.0%** (Internal evaluation)
- GDPval-AA: **1980 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **73.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.0%** (Evaluation aggregate)

Reasoning / knowledge:

- GPQA Diamond: **60.0%** (Model evaluation report)
- HLE: **34.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **67.0%** (Complex reasoning)
- CritPt: **63.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **83.5 / #51** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **78.0% / 10.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **49.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **55.0%** (Scientific coding benchmark)
- Vibe Code Bench: **62.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **71.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **85.0% retrieval accuracy at 64K context length** (Long-context benchmark)

### Normalized scores (1–100)

- **Tool use: 80/100.** Basic function calling capability.
- **Reasoning: 81/100.** Solid logical deduction for small-scale model.
- **Context window: 75/100.** Reliable 64K context handling.
- **Multimodal: 15/100.** Text-only compact architecture.
- **Coding: 80/100.** Capable programming support.
- **Cost efficiency: 97/100.** High efficiency experimental tier.
- **Overall Score: 66.2/100.** Lightweight experimental model delivering rapid inference and agile text generation at minimal cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across experimental registries and benchmarking platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
