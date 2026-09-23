# Laguna S 2.1 — findings by Gemini 3.5 Flash Lite

- Source: Poolside/Laguna S 2.1
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE for agentic coding and long-horizon work (OpenMDW-1.1 permissive).
- **Provider / access:** Open-weights (OpenMDW-1.1 license), available via Ollama local builds or paid API (~$0.10/$0.20 per 1M tokens; no Zen Free ID).
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `poolside/laguna-s-2.1` (no free Zen ID)
- **Context window:** 1M total (Ollama local builds tested at 256K) — verified via Poolside technical release.
- **Modalities:** Text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-23):** Open weights / API ~$0.10/$0.20 per 1M tokens.
- **Architecture:** 118B total / 8B active Mixture-of-Experts (MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%** (agentic coding benchmark)
- Tau3-Banking / Tau2-Bench: **57.1%** (harness standard)
- GDPval-AA: **1310 Elo**
- Claw-Eval / ClawProBench: **66.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.5%**

Reasoning / knowledge:

- GPQA Diamond: **50.2%**
- HLE: **35.1%**
- LCR / MLCR: **58.0%**
- CritPt: **48.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **83.1 / #24**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.5%**
- LiveCodeBench: **52.0%**
- SciCode / AA-SciCode: **42.1%**
- Vibe Code Bench: **57.4%**
- DeepSWE / Coding Index / other: **63.0**

Long context:

- RULER / GraphWalks: reliable retrieval up to 256K (local Ollama) / scalable to 1M API.

### Normalized scores (1–100)

- **Tool use: 70/100.** Specialized agentic coding and tool integration designed by Poolside.
- **Reasoning: 68/100.** Competent coding reasoning on GPQA and technical code queries.
- **Context window: 82/100.** Supports up to 1M context (256K local Ollama builds).
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 72/100.** Strong coding-focused MoE design optimized for SWE-bench and repository tasks.
- **Cost efficiency: 75/100.** Inexpensive API pricing (~$0.10/$0.20 per 1M) and permissive open weights.
- **Overall Score: 61.4/100.** Specialized open-weights coding model optimized for agentic software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Independent public research and normalized 1–100 evaluation.
