# Grok 4.20 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4.20`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's high-capacity reasoning model featuring a 2M context window, strong factual grounding, and robust tool-calling integration for large document processing.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.20`), OpenAI-compatible API.
- **Release / knowledge:** 2025-12-20 release; knowledge cutoff October 2025.
- **IDs:** `xai/grok-4.20`, `grok-4.20`
- **Context window:** 2,000,000 tokens (2M total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input ($0.3125 cached), $5.00 / 1M output.
- **Architecture:** Large-scale transformer architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%** (xAI Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **67.0%** (Tau-Bench standard harness)
- GDPval-AA: **1250 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.8%**

Reasoning / knowledge:

- GPQA Diamond: **75.0%** (0-shot CoT)
- HLE: **34.2%** (Humanity's Last Exam)
- LCR / MLCR: **82.5%**
- CritPt: **70.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #18**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 7.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.5%** (SWE-bench Verified)
- LiveCodeBench: **55.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **39.0%**
- Vibe Code Bench: **70.5%**
- DeepSWE / Coding Index / other: **68.2**

Long context:

- MRCR / RULER: **97.5%** needle retrieval fidelity across 2M context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable function calling and multi-tool orchestration across large-context queries.
- **Reasoning: 85/100.** Strong analytical deduction and scientific comprehension (75.0% GPQA Diamond).
- **Context window: 98/100.** 2M context window with high recall and low degradation over massive inputs.
- **Multimodal: 78/100.** Capable visual parsing for charts, diagrams, and technical documents.
- **Coding: 80/100.** 50.5% SWE-bench Verified and 55.0% LiveCodeBench deliver steady code generation and refactoring.
- **Cost efficiency: 78/100.** Affordable pricing for a 2M context window at $1.25 / $5.00 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five non-cost dims (82+85+98+78+80)/5 = 84.6 → 85. Balanced 2M-context workhorse for massive document analysis, research Q&A, and tool-assisted workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
