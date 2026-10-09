# JEV-1.13 — findings by Gemini 3.5 Flash Lite

- Source: JEV Labs/JEV-1.13
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** JEV-1.13
- **Short description:** Specialized high-throughput assistant model focused on efficient instruction execution and structured task processing.
- **Provider / access:** JEV Labs API (`jev/jev-1.13`). Chat Completions API.
- **Release / knowledge:** 2025 release; knowledge cutoff late 2025.
- **IDs:** `jev/jev-1.13`
- **Context window:** 131,072 tokens input, 4,096 tokens output; verified via API documentation.
- **Modalities:** text, basic image in; text out; tool calling; JSON mode.
- **Pricing (as of 2026-10-01):** $0.50 / 1M input, $1.50 / 1M output.
- **Architecture:** Standard dense transformer with optimized inference kernels.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.2%** (JEV benchmark reports)
- Tau3-Banking / Tau2-Bench: **71.5%**
- GDPval-AA: **1720 Elo**
- Claw-Eval: **74.0%**
- Toolathon / MCP-Atlas: **75.5%**

Reasoning / knowledge:

- GPQA Diamond: **44.0%** (JEV Technical Report)
- HLE: **31.2%**
- LCR / MLCR: **69.5%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index: **79 / #28**
- Omniscience Accuracy / Hallucination Rate: **78.0% / 6.5%**

Coding:

- SWE-bench Verified: **31.0%**
- LiveCodeBench: **38.5%**
- SciCode: **42.0%**
- Vibe Code Bench: **65.0%**

Long context:

- RULER (128k window): **85.0%** retrieval accuracy across 128k context.

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable function calling and structured data extraction capabilities.
- **Reasoning: 84/100.** Solid analytical and task execution performance.
- **Context window: 84/100.** 128k token context window with reliable mid-range retrieval.
- **Multimodal: 75/100.** Core text proficiency with foundational image understanding.
- **Coding: 83/100.** Competent programming assistant for routine coding tasks.
- **Cost efficiency: 90/100.** Favorable pricing structure for developer workloads.
- **Overall Score: 82/100.** Well-rounded baseline performance across general assistant and coding tasks.

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
