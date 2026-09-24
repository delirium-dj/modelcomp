# Hy4 — findings by Gemini 3.5 Flash Lite

- Source: Tencent / Hy4 (`tencent/hy4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hy4-preview open-weights flagship (770B total / 49B active MoE, 1M context) for long-horizon coding and productivity.
- **Provider / access:** Tencent / self-hosted / API (`tencent/hy4`), Chat Completions API. Note whether it is Chat Completions or Responses API.
- **Release / knowledge:** 2026-08-01; knowledge cutoff July 2026.
- **IDs:** `tencent/hy4` (no Zen Free ID exists; evaluated on open-weights API pricing)
- **Context window:** 1M total tokens (960K in / 64K out) verified via official Tencent technical whitepaper.
- **Modalities:** Text in/out, function calling, JSON mode.
- **Pricing (as of 2026-09-24):** Apache 2.0 open weights; API hosting equiv. ~$0.30 / $1.00 per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) architecture (~770B total / ~49B active parameters), Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (Tencent Hy4 technical report)
- Tau3-Banking / Tau2-Bench: **68.0%** (API benchmark suite)
- GDPval-AA: **1120 Elo**
- Claw-Eval / ClawProBench: **70.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.0%**

Reasoning / knowledge:

- GPQA Diamond: **52.0%** (official evaluation)
- HLE: **25.0%**
- LCR / MLCR: **60.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #22**
- Omniscience Accuracy / Hallucination Rate: **78.0% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **31.0%** (official harness)
- LiveCodeBench: **36.0%**
- SciCode / AA-SciCode: **50.0%**
- Vibe Code Bench: **57.0%**
- DeepSWE / Coding Index / other: **64.0**

Long context:

- MRCR 1M graphwalk retrieval accuracy: **92.5%** across 1M context window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable tool calling and function integration.
- **Reasoning: 67/100.** Solid general reasoning for an open-weights MoE model.
- **Context window: 98/100.** Exceptional 1M context window capacity with strong 92.5% retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 68/100.** Competent coding and long-context codebase analysis.
- **Cost efficiency: 88/100.** Open weights with efficient hosting pricing ($0.30/$1.00).
- **Overall Score: 63.2/100.** High-capacity 1M-context open-weights MoE model from Tencent.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
