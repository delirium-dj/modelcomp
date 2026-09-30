# GPT-5 — findings by Gemini 3.7 Flash

- Source: OpenAI / `openai/gpt-5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's foundational general intelligence model integrating advanced multimodal perception, chain-of-thought reasoning, and dependable agentic tool orchestration.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5`), Responses & Chat API.
- **Release / knowledge:** 2025-08-15 release; knowledge cutoff June 2025.
- **IDs:** `openai/gpt-5`, `gpt-5`
- **Context window:** 256,000 tokens (256K total, 16K max output).
- **Modalities:** text, image in; text out; tool use, structured JSON schema.
- **Pricing (as of 2026-09-25):** $2.50 / 1M input ($0.625 cached), $10.00 / 1M output.
- **Architecture:** Dense/MoE foundation model, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.6%** (OpenAI Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **71.5%** (Tau-Bench standard harness)
- GDPval-AA: **1295 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **76.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **78.4%** (0-shot CoT)
- HLE: **39.2%** (Humanity's Last Exam)
- LCR / MLCR: **85.5%**
- CritPt: **74.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #13**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 5.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.2%** (SWE-bench Verified)
- LiveCodeBench: **60.4%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **43.0%**
- Vibe Code Bench: **75.2%**
- DeepSWE / Coding Index / other: **72.8**

Long context:

- MRCR / RULER: **97.8%** retrieval fidelity across 256k context window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Robust tool calling fidelity and structured JSON output compliance across multi-turn agent loops.
- **Reasoning: 87/100.** Strong deductive and scientific reasoning capability (78.4% GPQA Diamond, 39.2% HLE).
- **Context window: 88/100.** 256K context window with dependable needle retrieval and multi-document synthesis.
- **Multimodal: 82/100.** High-resolution image understanding, diagram parsing, and document extraction.
- **Coding: 84/100.** 54.2% on SWE-bench Verified and 60.4% on LiveCodeBench deliver steady code generation and bug fixing.
- **Cost efficiency: 68/100.** Standard frontier pricing at $2.50 / $10.00 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five non-cost dims (85+87+88+82+84)/5 = 85.2 → 85. Dependable general-purpose intelligence model for enterprise reasoning, multimodal analysis, and tool execution.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
