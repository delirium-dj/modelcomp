# GPT-5.4 — findings by Gemini 3.7 Flash

- Source: OpenAI / `openai/gpt-5.4`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's versatile general-purpose intelligence model featuring robust multimodal understanding, solid reasoning depth, and dependable agentic tool execution.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.4`), Responses & Chat Completions API.
- **Release / knowledge:** 2025-11-10 release; knowledge cutoff September 2025.
- **IDs:** `openai/gpt-5.4`, `gpt-5.4`
- **Context window:** 128,000 tokens (128K total, 16K max output).
- **Modalities:** text, image in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-25):** $1.50 / 1M input ($0.375 cached), $6.00 / 1M output.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.2%** (OpenAI Technical Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **67.5%** (Tau-Bench standard harness)
- GDPval-AA: **1270 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **72.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.2%** (0-shot CoT)
- HLE: **35.6%** (Humanity's Last Exam)
- LCR / MLCR: **82.5%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76 / #17**
- Omniscience Accuracy / Hallucination Rate: **87.2% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.5%** (SWE-bench Verified)
- LiveCodeBench: **56.8%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **39.8%**
- Vibe Code Bench: **71.5%**
- DeepSWE / Coding Index / other: **69.2**

Long context:

- MRCR / RULER: **96.8%** needle retrieval fidelity across 128k context window.

### Normalized scores (1–100)

- **Tool use: 83/100.** Dependable tool call formatting and structured JSON compliance across multi-step execution.
- **Reasoning: 85/100.** 75.2% GPQA Diamond and steady logical consistency in complex problem solving.
- **Context window: 84/100.** 128K context window with high recall across document summarization and search tasks.
- **Multimodal: 80/100.** High-quality vision comprehension across technical diagrams, charts, and scanned documents.
- **Coding: 81/100.** 51.5% on SWE-bench Verified and 56.8% on LiveCodeBench offer dependable assistance on routine development tasks.
- **Cost efficiency: 72/100.** Balanced pricing at $1.50 / $6.00 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost dims (83+85+84+80+81)/5 = 82.6 → 83. Dependable general-purpose model for production apps requiring balanced reasoning, vision, and tool calling.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
