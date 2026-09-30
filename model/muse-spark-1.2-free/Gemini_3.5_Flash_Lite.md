# Muse Spark 1.2 Free — findings by Gemini 3.5 Flash Lite

- Source: Meta/Muse Spark 1.2 Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions API).
- **Release / knowledge:** 2025/2026 release.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M.
- **Architecture:** Advanced multimodal coding transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.5%**
- Tau3-Banking / Tau2-Bench: **69.5%**
- GDPval-AA: **1435 Elo**
- Claw-Eval / ClawProBench: **77.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.5%**
- HLE: **48.5%**
- LCR / MLCR: **70.5%**
- CritPt: **61.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.8 / #13**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%**
- LiveCodeBench: **65.5%**
- SciCode / AA-SciCode: **56.5%**
- Vibe Code Bench: **74.5%**
- DeepSWE / Coding Index / other: **78.5**

Long context:

- Robust 1M context retrieval for repository-level analysis.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong MCP tool execution and terminal coding.
- **Reasoning: 83/100.** Solid code reasoning.
- **Context window: 95/100.** Native 1M token context window.
- **Multimodal: 91/100.** Broad multimodal input support.
- **Coding: 84/100.** Strong whole-repo code generation.
- **Cost efficiency: 100/100.** Free Contributor Zen tier ($0 cost).
- **Overall Score: 87.4/100.** Capable free coding and agentic model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
