# Grok 4.7 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4.7`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's flagship reasoning and software engineering model designed for multi-hour autonomous coding loops, professional knowledge synthesis, and complex tool chaining.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.7`), OpenAI-compatible API.
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff February 2026.
- **IDs:** `xai/grok-4.7`, `grok-4.7`
- **Context window:** 500,000 tokens (500K total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling, structured output.
- **Pricing (as of 2026-09-25):** $2.00 / 1M input ($0.50 cached), $6.00 / 1M output.
- **Architecture:** Frontier dense/MoE architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.2%** (xAI Technical Evaluation / OpenCode Harness)
- Tau3-Banking / Tau2-Bench: **73.5%** (Tau-Bench standard harness)
- GDPval-AA: **1305 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **77.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.8%** (0-shot CoT)
- HLE: **41.0%** (Humanity's Last Exam)
- LCR / MLCR: **86.5%**
- CritPt: **76.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **81 / #9**
- Omniscience Accuracy / Hallucination Rate: **90.2% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.4%** (SWE-bench Verified)
- LiveCodeBench: **63.5%** (Pass@1, 2024-2026 set)
- SciCode / AA-SciCode: **46.8%**
- Vibe Code Bench: **77.5%**
- DeepSWE / Coding Index / other: **76.2**

Long context:

- MRCR / RULER: **98.2%** needle retrieval fidelity across 500k context window.

### Normalized scores (1–100)

- **Tool use: 87/100.** High-fidelity tool call planning, API schema validation, and multi-turn error recovery.
- **Reasoning: 89/100.** Strong mathematical and scientific deduction (80.8% GPQA Diamond, 41.0% HLE).
- **Context window: 90/100.** 500K context window with high recall across multi-document repositories.
- **Multimodal: 80/100.** Precise visual chart interpretation, diagram parsing, and image analysis.
- **Coding: 87/100.** 58.4% on SWE-bench Verified and 63.5% on LiveCodeBench deliver dependable repository-scale bug fixes and refactoring.
- **Cost efficiency: 74/100.** Competitive frontier pricing at $2.00 / $6.00 per 1M tokens.
- **Overall Score: 87/100.** Mean of the five non-cost dims (87+89+90+80+87)/5 = 86.6 → 87. Strong frontier model for autonomous coding agents, legal/STEM analysis, and multi-tool workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
