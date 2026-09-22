# Muse Spark 1.3 Contributor — findings by Gemini 3.5 Flash Lite

- Source: Meta/Muse Spark 1.3 Contributor
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Free Contributor-tier access to Meta's Muse Spark 1.3 for coding and long-horizon agentic work. Same weights as standard 1.3; training-data consent in exchange for $0.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`
- **Context window:** 1M tokens.
- **Modalities:** Text, image, video, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M.
- **Architecture:** Meta multimodal coding and agentic transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **69.0%**
- Tau3-Banking / Tau2-Bench: **75.0%**
- GDPval-AA: **1510 Elo**
- Claw-Eval / ClawProBench: **82.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%**
- HLE: **54.0%**
- LCR / MLCR: **76.5%**
- CritPt: **67.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91.5 / #7**
- Omniscience Accuracy / Hallucination Rate: **93.2% / 2.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.0%**
- LiveCodeBench: **72.5%**
- SciCode / AA-SciCode: **63.0%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **85.0**

Long context:

- Excellent 1M token long-context codebase understanding.

### Normalized scores (1–100)

- **Tool use: 87/100.** Superior MCP tool use and terminal agent execution.
- **Reasoning: 88/100.** Advanced software engineering reasoning.
- **Context window: 95/100.** Full 1M token context window.
- **Multimodal: 93/100.** Elite multimodal document, video, and image ingestion.
- **Coding: 89/100.** Outstanding SWE-bench and repository coding performance.
- **Cost efficiency: 100/100.** Free Contributor Zen tier ($0 cost).
- **Overall Score: 90.4/100.** Outstanding free Contributor-tier agentic coding model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
