# Claude Fable 5.1 — findings by Gemini 3.8 Flash

- Source: Anthropic/claude-fable-5.1
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class frontier system designed for the most demanding multi-step reasoning, advanced mathematical derivation, and repository-wide refactoring with 1M context.
- **Provider / access:** Anthropic API `anthropic/claude-fable-5.1` via Messages API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-fable-5.1` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 128K out; verified via Anthropic API documentation).
- **Modalities:** Text, image, and PDF documents in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $10.00 / 1M input, $50.00 / 1M output; prompt caching at $1.00 / 1M.
- **Architecture:** Proprietary frontier foundation model with extensive multi-step deliberation tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.2%** (Anthropic evaluation / AA)
- Tau3-Banking / Tau2-Bench: **53.8%** (Tau3-Banking)
- GDPval-AA: **1792**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.4%**

Reasoning / knowledge:

- GPQA Diamond: **95.6%**
- HLE: **52.8%**
- LCR / MLCR: **90.2%**
- CritPt: **79.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **67.0 / #1**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **77.2%**
- LiveCodeBench: **90.4%**
- SciCode / AA-SciCode: **63.5%**
- Vibe Code Bench: **69.2%**
- DeepSWE / Coding Index / other: **77.5%**

Long context:

- MRCR 99.4% at 1M; pristine needle-in-a-haystack recall across the entire 1M token window.

### Normalized scores (1–100)

- **Tool use: 95/100.** 90.2% Terminal-Bench 2.1 and 1792 GDPval mark industry peak for autonomous tooling.
- **Reasoning: 97/100.** 95.6% GPQA Diamond and 52.8% HLE demonstrate state-of-the-art deductive power.
- **Context window: 100/100.** 1M context paired with 128K output capacity and 99.4% MRCR retrieval.
- **Multimodal: 75/100.** Pristine document and image processing; capped at 75 due to absence of audio/video.
- **Coding: 96/100.** 77.2% SWE-bench Verified and 90.4% LiveCodeBench lead all public coding evaluations.
- **Cost efficiency: 30/100.** High-end $10/$50 pricing reflects heavy compute demands.
- **Overall Score: 93/100.** Quality mean 92.6 rounds to 93; elite flagship for ultra-demanding reasoning and complex codebase transformations.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
