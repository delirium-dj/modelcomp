# Glm 5.2 Coding — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Glm 5.2 Coding
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glm 5.2 Coding
- **Short description:** Glm 5.2 Coding model evaluation entry optimized for programming tasks.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/glm-5.2-coding`
- **Context window:** 128K total — verified via endpoint specifications.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-22):** Standard pricing.
- **Architecture:** Specialized coding transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%**
- Tau3-Banking / Tau2-Bench: **84.5%**
- GDPval-AA: **1550 Elo**
- Claw-Eval / ClawProBench: **87.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **85.5%**

Reasoning / knowledge:

- GPQA Diamond: **76.0%**
- HLE: **56.0%**
- LCR / MLCR: **80.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.8 / #14**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 2.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **82.0%**
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **78.0%**
- Vibe Code Bench: **89.0%**
- DeepSWE / Coding Index / other: **91.0**

Long context:

- 128K context window with high precision code repository indexing.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong tool utilization for development workflows.
- **Reasoning: 83/100.** Solid reasoning supporting complex code architecture tasks.
- **Context window: 95.5/100.** 95.5/100 effective retrieval across its code context window.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 89/100.** Specialist programming and code completion benchmarks.
- **Cost efficiency: 81/100.** Competitive coding-specialist pricing.
- **Overall Score: 73.1/100.** Highly capable coding specialist model with deep repository context.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-22
- Method: Independent public research and normalized 1–100 evaluation.
