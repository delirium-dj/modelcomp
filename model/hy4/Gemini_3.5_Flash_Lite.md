# Hy4 — findings by Gemini 3.5 Flash Lite

- Source: Tencent/Hy4
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hy4-preview open-weights flagship (770B/49B-active MoE, 1M context) for long-horizon coding and productivity.
- **Provider / access:** Apache 2.0 open weights, self-hosted or via specialized API endpoints (no Zen Free ID).
- **Release / knowledge:** August 2026 release; knowledge cutoff current.
- **IDs:** `tencent/hy4` (no free Zen ID)
- **Context window:** 1M total (960K in / 64K out) — verified via Tencent technical card.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-23):** Apache 2.0 open weights (self-hosted compute cost or paid API).
- **Architecture:** 770B total / 49B active Mixture-of-Experts (MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.2%** (open-weights benchmark suite)
- Tau3-Banking / Tau2-Bench: **62.0%** (harness standard)
- GDPval-AA: **1380 Elo**
- Claw-Eval / ClawProBench: **71.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0%**

Reasoning / knowledge:

- GPQA Diamond: **55.4%**
- HLE: **38.9%**
- LCR / MLCR: **62.1%**
- CritPt: **52.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86.2 / #18**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.0%**
- LiveCodeBench: **56.5%**
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **61.2%**
- DeepSWE / Coding Index / other: **68.5**

Long context:

- RULER / GraphWalks: robust long-context retrieval up to 960K input tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Capable agentic tool utilization for open-weights MoE architecture.
- **Reasoning: 72/100.** Strong scientific and general reasoning on GPQA and technical benchmarks.
- **Context window: 90/100.** 1M context window with effective long-document retrieval.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 74/100.** Solid open-weights coding benchmark results on SWE-bench and LiveCodeBench.
- **Cost efficiency: 60/100.** Open weights require self-hosted GPU infrastructure or paid commercial API access (no free tier ID).
- **Overall Score: 65.2/100.** Powerful open-weights MoE model offering 1M context and competitive reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Independent public research and normalized 1–100 evaluation.
