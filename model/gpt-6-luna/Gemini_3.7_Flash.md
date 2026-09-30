# GPT-6 Luna — findings by Gemini 3.7 Flash

- Source: OpenAI / `openai/gpt-6-luna`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's ultra-efficient high-volume GPT-6 model designed for high-throughput batch processing, long-context data extraction, and low-cost agent pipelines.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-6-luna`), Responses & Chat API.
- **Release / knowledge:** 2026-03-22 release; knowledge cutoff January 2026.
- **IDs:** `openai/gpt-6-luna`, `gpt-6-luna`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text, image in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input ($0.05 cached), $1.20 / 1M output.
- **Architecture:** Sparse Mixture of Experts (MoE), proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.2%** (OpenAI Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **66.8%** (Tau-Bench standard harness)
- GDPval-AA: **1250 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%**

Reasoning / knowledge:

- GPQA Diamond: **73.5%** (0-shot CoT)
- HLE: **33.0%** (Humanity's Last Exam)
- LCR / MLCR: **81.0%**
- CritPt: **69.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #20**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.5%** (SWE-bench Verified)
- LiveCodeBench: **54.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **70.2%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- MRCR / RULER: **96.5%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 81/100.** Fast and reliable function calling and schema formatting in high-volume agent pipelines.
- **Reasoning: 83/100.** Good analytical and mathematical reasoning (73.5% GPQA Diamond) with low latency.
- **Context window: 92/100.** 1M context window with high recall across massive document archives.
- **Multimodal: 78/100.** Reliable document OCR, diagram parsing, and image analysis.
- **Coding: 80/100.** 49.5% on SWE-bench Verified and 54.5% on LiveCodeBench provide steady code generation.
- **Cost efficiency: 95/100.** Outstanding value at $0.20 / $1.20 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost dims (81+83+92+78+80)/5 = 82.8 → 83. Cost-effective high-throughput model for 1M context processing, document extraction, and bulk agent workloads.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
