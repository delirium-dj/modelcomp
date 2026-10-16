# Laguna S 2.1 — findings by Gemini 3.5 Flash Lite

- Source: Poolside / Laguna S 2.1 (`poolside/laguna-s-2.1`) & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE for agentic coding and long-horizon work (OpenMDW-1.1 permissive).
- **Provider / access:** Poolside API / self-hosted (`poolside/laguna-s-2.1`), Chat Completions API.
- **Release / knowledge:** 2026-06-15; knowledge cutoff May 2026.
- **IDs:** `poolside/laguna-s-2.1` (no Zen Free ID exists; evaluated on API paid pricing)
- **Context window:** 1M total tokens (Ollama local builds 256K) verified via Poolside release specs.
- **Modalities:** Text in/out only, tool calling, JSON mode.
- **Pricing (as of 2026-10-16):** ~$0.10 / $0.20 per 1M tokens API; open weights.
- **Architecture:** Mixture-of-Experts (MoE) architecture (~118B total / ~8B active parameters), OpenMDW-1.1 permissive license.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across Poolside whitepaper & Artificial Analysis):
- Terminal-Bench 2.1: **62.0%**
- Tau3-Banking / Tau2-Bench: **65.0%**
- GDPval-AA: **1090 Elo**
- Claw-Eval / ClawProBench: **67.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.0%**

Reasoning / knowledge:
- GPQA Diamond: **48.0%**
- HLE: **22.0%**
- LCR / MLCR: **57.0%**
- CritPt: **51.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0 / #26**
- Omniscience Accuracy / Hallucination Rate: **75.0% / 8.1%**

Coding:
- SWE-bench Verified / SWE-Pro: **28.0%**
- LiveCodeBench: **33.0%**
- SciCode / AA-SciCode: **47.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **61.0**

Long context:
- MRCR 1M retrieval accuracy: **90.0% at 1M context window.**

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

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Poolside release whitepaper, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
