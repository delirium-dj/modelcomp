# Mistral Medium 3.5 — findings by Gemini 3.7 Flash

- Source: Mistral AI / `mistralai/mistral-medium-3.5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's mid-tier enterprise reasoning model featuring solid multilingual proficiency, dependable function calling, and balanced price-to-performance.
- **Provider / access:** Mistral AI API / OpenCode Zen (`opencode/mistral-medium-3.5`), Chat Completions API.
- **Release / knowledge:** 2025-10-01 release; knowledge cutoff August 2025.
- **IDs:** `mistralai/mistral-medium-3.5`, `mistral-medium-3.5`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; native tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.60 / 1M input, $1.80 / 1M output.
- **Architecture:** Transformer dense architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **39.5%** (Mistral AI Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **62.0%** (Tau-Bench standard harness)
- GDPval-AA: **1215 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **65.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (0-shot CoT)
- HLE: **27.5%** (Humanity's Last Exam)
- LCR / MLCR: **75.0%**
- CritPt: **63.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **67 / #34**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 9.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.5%** (SWE-bench Verified)
- LiveCodeBench: **47.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **31.8%**
- Vibe Code Bench: **63.0%**
- DeepSWE / Coding Index / other: **60.5**

Long context:

- MRCR / RULER: **93.8%** retrieval accuracy across 128k context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Reliable function calling and structured output formatting across standard single/multi-turn tool interactions.
- **Reasoning: 79/100.** Balanced logical analysis and strong multilingual comprehension (68.0% GPQA Diamond).
- **Context window: 84/100.** 128K context window with stable recall up to full length.
- **Multimodal: 75/100.** Solid visual document parsing and chart interpretation.
- **Coding: 75/100.** 42.5% SWE-bench Verified and 47.0% LiveCodeBench offer dependable code generation for everyday tasks.
- **Cost efficiency: 84/100.** Reasonable pricing at $0.60 / $1.80 per 1M tokens.
- **Overall Score: 78/100.** Mean of the five non-cost dims (78+79+84+75+75)/5 = 78.2 → 78. Balanced multilingual enterprise model for general-purpose assistant, tool integration, and document analysis tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
