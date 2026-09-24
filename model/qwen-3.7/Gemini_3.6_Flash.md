# Qwen 3.7 — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.7`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Cloud's previous-generation general-purpose model strong in coding, reasoning, and multilingual understanding.
- **Provider / access:** Alibaba Cloud / DashScope (`alibaba/qwen-3.7`), Chat Completions API.
- **Release / knowledge:** 2025-11 release; 2025-09 knowledge cutoff.
- **IDs:** `alibaba/qwen-3.7`
- **Context window:** 128,000 tokens total (128K input / 8K max output); verified via DashScope docs.
- **Modalities:** Text input; text output; function calling and structured outputs.
- **Pricing (as of 2026-09-24):** $0.60 / 1M input, $1.80 / 1M output.
- **Architecture:** Open-weights dense Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.0%**
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1230**
- Claw-Eval / ClawProBench: **72.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.5%**

Reasoning / knowledge:

- GPQA Diamond: **81.0%**
- HLE: **26.0%**
- LCR / MLCR: **67.0%**
- CritPt: **60.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.0 / #12**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.0%**
- LiveCodeBench: **82.0%**
- SciCode / AA-SciCode: **56.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **74.0%**

Long context:

- MRCR / RULER: **96.5%** retrieval accuracy across 128K context window

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable function calling and structured output formatting.
- **Reasoning: 87.5/100.** High GPQA Diamond score (81.0%) and logical reasoning prowess.
- **Context window: 89/100.** 128K context window mapping to 89/100 tier.
- **Multimodal: 50/100.** Text-centric model with standard document text processing.
- **Coding: 85/100.** Strong LiveCodeBench (82.0%) and repository coding performance.
- **Cost efficiency: 75/100.** Affordable open-weights API pricing.
- **Overall Score: 78.7/100.** High-performing open-weights foundation model for coding and logic tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
