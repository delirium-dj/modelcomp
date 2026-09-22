# Gemma 4 31B IT — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemma 4 31B IT
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's open weights 31B instruction-tuned model with strong reasoning, tool use, and coding capabilities.
- **Provider / access:** Open weights / OpenCode Zen `google/gemma-4-31b-it` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 128K total — verified via open weights specification.
- **Modalities:** Text in/out only; tool calls yes.
- **Pricing (as of 2026-09-22):** Free open weights / standard API hosting.
- **Architecture:** 31B open weights transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.5%**
- Tau3-Banking / Tau2-Bench: **83.0%**
- GDPval-AA: **1530 Elo**
- Claw-Eval / ClawProBench: **86.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%**
- HLE: **58.5%**
- LCR / MLCR: **81.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.2 / #12**
- Omniscience Accuracy / Hallucination Rate: **93.8% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.0%**
- LiveCodeBench: **78.0%**
- SciCode / AA-SciCode: **69.5%**
- Vibe Code Bench: **83.5%**
- DeepSWE / Coding Index / other: **85.0**

Long context:

- 128K context window with dependable local retrieval.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong open-weights tool execution and function calling.
- **Reasoning: 83/100.** Impressive reasoning benchmarks for a 31B parameter open-weights model.
- **Context window: 79/100.** 128K context window supporting robust document tasks.
- **Multimodal: 60/100.** Text-only input/output modality.
- **Coding: 80/100.** Solid software engineering performance outperforming older open models.
- **Cost efficiency: 96/100.** Free open weights offering maximum cost advantage when self-hosted.
- **Overall Score: 76.8/100.** Excellent open-weights model delivering high utility and efficiency.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-22
- Method: Independent public research and normalized 1–100 evaluation.
