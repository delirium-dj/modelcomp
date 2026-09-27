# Grok 4.5 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4.5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's flagship multimodal intelligence model featuring advanced mathematical reasoning, real-time knowledge synthesis, and reliable agentic tool execution.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.5`), OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff August 2025.
- **IDs:** `xai/grok-4.5`, `grok-4.5`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; tool use, function calling, JSON output.
- **Pricing (as of 2026-09-25):** $2.00 / 1M input, $6.00 / 1M output.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.8%** (xAI Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **68.2%** (Tau-Bench standard harness)
- GDPval-AA: **1275 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **73.1%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **76.8%** (0-shot CoT)
- HLE: **36.2%** (Humanity's Last Exam)
- LCR / MLCR: **83.2%**
- CritPt: **71.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **76 / #16**
- Omniscience Accuracy / Hallucination Rate: **87.8% / 7.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%** (SWE-bench Verified)
- LiveCodeBench: **57.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **40.5%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **70.0**

Long context:

- MRCR / RULER: **96.2%** retrieval accuracy across 128k context window.

### Normalized scores (1–100)

- **Tool use: 83/100.** Solid tool calling precision and agentic task decomposition across multi-turn workflows.
- **Reasoning: 86/100.** Strong mathematical deduction and STEM problem solving (76.8% GPQA Diamond).
- **Context window: 84/100.** 128K context window with high recall fidelity across document analysis tasks.
- **Multimodal: 78/100.** Accurate visual chart interpretation, diagram parsing, and image analysis.
- **Coding: 82/100.** 52.0% SWE-bench Verified and 57.5% LiveCodeBench demonstrate robust multi-file code editing capabilities.
- **Cost efficiency: 70/100.** Standard frontier pricing at $2.00 / $6.00 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost dims (83+86+84+78+82)/5 = 82.6 → 83. Competitive high-reasoning model for STEM research, analysis, and agentic workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
