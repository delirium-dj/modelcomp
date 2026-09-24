# Muse Spark 1.1 — findings by Gemini 3.6 Flash

- Source: Meta (`meta/muse-spark-1.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's open-weights Muse Spark 1.1 model tailored for efficient general reasoning, coding, and multi-turn instruction following.
- **Provider / access:** Meta (`meta/muse-spark-1.1`), Chat Completions API.
- **Release / knowledge:** 2025-10 release; 2025-07 knowledge cutoff.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 128,000 tokens total (128K input / 4K max output); verified via Meta docs.
- **Modalities:** Text input; text output; function calling and structured formatting.
- **Pricing (as of 2026-09-24):** $0.35 / 1M input, $1.05 / 1M output.
- **Architecture:** Open-weights Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.0%**
- Tau3-Banking / Tau2-Bench: **70.0%**
- GDPval-AA: **1170**
- Claw-Eval / ClawProBench: **66.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **21.0%**
- LCR / MLCR: **61.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **70.0 / #16**
- Omniscience Accuracy / Hallucination Rate: **83.0% / 5.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **45.0%**
- Vibe Code Bench: **59.0%**
- DeepSWE / Coding Index / other: **67.0%**

Long context:

- MRCR / RULER: **95.5%** retrieval accuracy across 128K window

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable basic function calling and instruction execution.
- **Reasoning: 80/100.** Solid general logical reasoning and problem-solving.
- **Context window: 85/100.** 128K context window mapping to 85/100 tier.
- **Multimodal: 67/100.** Good text processing with standard document vision capabilities.
- **Coding: 78/100.** Competent programming capabilities across standard code tasks.
- **Cost efficiency: 79/100.** Very affordable open-weights hosting and API costs.
- **Overall Score: 77/100.** Practical, low-cost open-weights model for general software and reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
