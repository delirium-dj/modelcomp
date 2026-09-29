# Grok 4.3 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4.3`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's balanced intelligence and agentic model featuring a 1M context window, high reasoning precision, and robust tool-calling integration for enterprise workflows.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.3`), OpenAI-compatible API.
- **Release / knowledge:** 2026-01-10 release; knowledge cutoff November 2025.
- **IDs:** `xai/grok-4.3`, `grok-4.3`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $1.50 / 1M input ($0.375 cached), $5.00 / 1M output.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.0%** (xAI Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **67.8%** (Tau-Bench standard harness)
- GDPval-AA: **1260 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **72.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.8%**

Reasoning / knowledge:

- GPQA Diamond: **76.0%** (0-shot CoT)
- HLE: **35.2%** (Humanity's Last Exam)
- LCR / MLCR: **83.0%**
- CritPt: **71.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #17**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%** (SWE-bench Verified)
- LiveCodeBench: **56.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **71.2%**
- DeepSWE / Coding Index / other: **69.0**

Long context:

- MRCR / RULER: **97.0%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool call execution and multi-step agent chaining across 1M token contexts.
- **Reasoning: 86/100.** Strong mathematical and analytical reasoning (76.0% GPQA Diamond).
- **Context window: 92/100.** 1M context window with high recall and low needle degradation.
- **Multimodal: 78/100.** Capable visual parsing for charts, diagrams, and technical documents.
- **Coding: 81/100.** 51.2% on SWE-bench Verified and 56.5% on LiveCodeBench deliver steady code refactoring.
- **Cost efficiency: 76/100.** Balanced pricing at $1.50 / $5.00 per 1M tokens.
- **Overall Score: 84/100.** Mean of the five non-cost dims (82+86+92+78+81)/5 = 83.8 → 84. Dependable 1M-context model for enterprise reasoning, tool use, and long-document synthesis.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
