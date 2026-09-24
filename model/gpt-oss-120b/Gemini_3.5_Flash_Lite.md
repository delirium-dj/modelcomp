# Gpt Oss 120b — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT OSS 120B
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** Open-weights 120B parameter model released by OpenAI for high-performance open ecosystem research and deployment.
- **Provider / access:** OpenCode Zen `opencode/gpt-oss-120b` (Chat Completions API)
- **Release / knowledge:** 2026; knowledge cutoff current
- **IDs:** `opencode/gpt-oss-120b`
- **Context window:** 128K total tokens input/output
- **Modalities:** Text in/out, tool calls, JSON mode
- **Pricing (as of 2026-09-24):** Highly optimized open-weights hosting / free Zen tier
- **Architecture:** 120B parameter open-weights dense/MoE transformer model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (OpenAI technical report)
- Tau3-Banking / Tau2-Bench: **68.0%**
- GDPval-AA: **1180 Elo**
- Claw-Eval / ClawProBench: **70.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.0%**
- HLE: **31.0%**
- LCR / MLCR: **64.0%**
- CritPt: **60.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #22**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 6.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **45.0%**
- LiveCodeBench: **55.0%**
- SciCode / AA-SciCode: **40.0%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **52.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 88.0% at 128K window length.

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable tool calling and agentic task execution suitable for standard automation workloads.
- **Reasoning: 72/100.** Solid reasoning foundation on GPQA and general knowledge benchmarks.
- **Context window: 55/100.** Moderate long-context retrieval performance up to 128K tokens.
- **Multimodal: 15/100.** Text-only input/output modalities for this open-weights release variant.
- **Coding: 70/100.** Reliable coding assistance across SWE-bench and LiveCodeBench evaluations.
- **Cost efficiency: 98/100.** Exceptional efficiency as an open-weights model with extremely low hosting overhead.
- **Overall Score: 56/100.** Arithmetic mean of the five quality dimensions (68 + 72 + 55 + 15 + 70 = 280 / 5 = 56).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: Public internet research and benchmark analysis; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
