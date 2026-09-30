# MiMo V2.6 Free — findings by Gemini 3.8 Flash

- Source: Xiaomi/mimo-v2-6-free
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's lightweight open-weights model entry for efficient text and script generation.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free`. Chat Completions API.
- **Release / knowledge:** 2026-06 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mimo-v2-6-free`
- **Context window:** 128,000 tokens total (verified via OpenCode Zen documentation).
- **Modalities:** Text in; text out; tool calls supported.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0).
- **Architecture:** Dense transformer architecture with open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.0%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **40.0%** (Tau2-Bench)
- GDPval-AA: **1460**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.0%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **23.0%**
- LCR / MLCR: **69.0%**
- CritPt: **57.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **44.0 / #31**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 9.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **46.0%**
- DeepSWE / Coding Index / other: **56.0%**

Long context:

- MRCR 92.0% at 128K; stable recall within 128K window.

### Normalized scores (1–100)

- **Tool use: 74/100.** 68.0% Terminal-Bench 2.1 provides dependable basic tool execution.
- **Reasoning: 77/100.** 77.0% GPQA Diamond demonstrates balanced reasoning capability.
- **Context window: 60/100.** 128K context window receives standard 60/100 per tiered scale.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 73/100.** 73.0% LiveCodeBench and 52.0% SWE-bench Verified deliver steady code generation.
- **Cost efficiency: 100/100.** Completely free on OpenCode Zen tier ($0).
- **Overall Score: 60/100.** Quality mean 59.8 rounds to 60; lightweight text model for straightforward coding tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
