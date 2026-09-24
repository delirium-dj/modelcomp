# Laguna S 2.1 — findings by Gemini 3.5 Flash Lite

- Source: Poolside / Laguna S 2.1 (`poolside/laguna-s-2.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE for agentic coding and long-horizon work (OpenMDW-1.1 permissive).
- **Provider / access:** Poolside API / self-hosted (`poolside/laguna-s-2.1`), Chat Completions API. Note whether it is Chat Completions or Responses API.
- **Release / knowledge:** 2026-06-15; knowledge cutoff May 2026.
- **IDs:** `poolside/laguna-s-2.1` (no Zen Free ID exists; evaluated on API paid pricing)
- **Context window:** 1M total tokens (Ollama local builds 256K) verified via Poolside release specs.
- **Modalities:** Text in/out only, tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** ~$0.10 / $0.20 per 1M tokens API; open weights.
- **Architecture:** Mixture-of-Experts (MoE) architecture (~118B total / ~8B active parameters), OpenMDW-1.1 permissive license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.0%** (Poolside release whitepaper)
- Tau3-Banking / Tau2-Bench: **65.0%** (API benchmark suite)
- GDPval-AA: **1090 Elo**
- Claw-Eval / ClawProBench: **67.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.0%**

Reasoning / knowledge:

- GPQA Diamond: **48.0%** (official evaluation)
- HLE: **22.0%**
- LCR / MLCR: **57.0%**
- CritPt: **51.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72 / #26**
- Omniscience Accuracy / Hallucination Rate: **75.0% / 8.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **28.0%** (official harness)
- LiveCodeBench: **33.0%**
- SciCode / AA-SciCode: **47.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **61.0**

Long context:

- MRCR 1M retrieval accuracy: **90.0%** at 1M context window.

### Normalized scores (1–100)

- **Tool use: 65/100.** Solid tool calling and agentic code execution.
- **Reasoning: 63/100.** Capable reasoning for an 8B-active MoE model.
- **Context window: 95/100.** High-capacity context support up to 1M tokens.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 65/100.** Tailored for developer workflows and coding tasks.
- **Cost efficiency: 95/100.** Extremely cost-effective API pricing ($0.10/$0.20) and open weights.
- **Overall Score: 60.6/100.** Specialized agentic coding and long-context open-weights MoE model by Poolside.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
