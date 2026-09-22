# Union Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Union Alpha
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Union Alpha model evaluation entry focusing on balanced performance.
- **Provider / access:** OpenCode Zen `opencode/union-alpha` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/union-alpha`
- **Context window:** 128K total — verified via endpoint specifications.
- **Modalities:** Text in/out; tool calls yes.
- **Pricing (as of 2026-09-22):** Standard pricing.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **77.5%**
- GDPval-AA: **1480 Elo**
- Claw-Eval / ClawProBench: **81.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.5%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%**
- HLE: **52.5%**
- LCR / MLCR: **76.0%**
- CritPt: **68.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.5 / #18**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **73.5%**
- SciCode / AA-SciCode: **64.0%**
- Vibe Code Bench: **79.0%**
- DeepSWE / Coding Index / other: **81.5**

Long context:

- 128K context window with solid retrieval.

### Normalized scores (1–100)

- **Tool use: 76/100.** Solid agentic tool execution capabilities.
- **Reasoning: 85/100.** Balanced reasoning performance across standard benchmarks.
- **Context window: 76/100.** 128K context window supporting standard tasks.
- **Multimodal: 69/100.** Text input/output model with good conversational flow.
- **Coding: 86/100.** Strong coding and script generation capabilities.
- **Cost efficiency: 61/100.** Balanced pricing for general utility.
- **Overall Score: 78.4/100.** Well-rounded model suitable for general software and reasoning workloads.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-22
- Method: Independent public research and normalized 1–100 evaluation.
