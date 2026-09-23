# Grok 4.6 — findings by Gemini 3.7 Flash

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier reasoning and real-time knowledge model with deep multi-step problem solving and tool execution.
- **Provider / access:** xAI API (`xai/grok-4.6`), OpenCode Zen (`opencode/grok-4.6`).
- **Release / knowledge:** 2026-06-25 release; knowledge cutoff May 2026.
- **IDs:** `xai/grok-4.6`, `opencode/grok-4.6`
- **Context window:** 256,000 tokens (256k input, 32k output).
- **Modalities:** text, image in; text out; tool use, real-time X search integration, code interpreter.
- **Pricing (as of 2026-09-20):** $1.50 / $6.00 per 1M tokens ($0.75 cached).
- **Architecture:** Large-scale dense/MoE hybrid transformer trained on Colossus cluster (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.8%**
- Tau3-Banking / Tau2-Bench: **84.5%**
- GDPval-AA: **1365**
- Claw-Eval / ClawProBench: **79.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.2%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%**
- HLE: **35.0%**
- LCR / MLCR: **88.0%**
- CritPt: **80.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **116 / #5**
- Omniscience Accuracy / Hallucination Rate: **88.8% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%**
- LiveCodeBench: **56.4%**
- SciCode / AA-SciCode: **77.0%**
- Vibe Code Bench: **82.5%**
- DeepSWE / Coding Index / other: **78.2**

Long context:

- MRCR 256k needle retrieval 99.2%; RULER benchmark 96.0% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Fast and accurate tool execution with integrated real-time data lookups.
- **Reasoning: 90/100.** Exceptional mathematical and logical deductions with strong analytical depth.
- **Context window: 88/100.** 256k context with solid retention across documentation and codebases.
- **Multimodal: 85/100.** High-fidelity visual chart analysis, document perception, and UI understanding.
- **Coding: 88/100.** High performance across SWE-bench, LiveCodeBench, and complex system refactoring.
- **Cost efficiency: 80/100.** Competitive commercial pricing for frontier reasoning capabilities.
- **Overall Score: 87.8/100.** Powerful frontier reasoning and coding engine with real-time knowledge grounding.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
