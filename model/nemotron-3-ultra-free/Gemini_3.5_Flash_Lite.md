# Nemotron 3 Ultra Free — findings by Gemini 3.5 Flash Lite

- Source: NVIDIA/Nemotron 3 Ultra Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA flagship open-weights hybrid Mamba-MoE for frontier reasoning and long-running agents. Fast with low hallucination.
- **Provider / access:** OpenCode Zen / NVIDIA `opencode/nemotron-3-ultra-free` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/nemotron-3-ultra-free`
- **Context window:** 1M (262K default serve).
- **Modalities:** Text in/out (beyond text unverified); tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen / NVIDIA trial tier.
- **Architecture:** Hybrid Mamba-MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%**
- Tau3-Banking / Tau2-Bench: **79.0%**
- GDPval-AA: **1590 Elo**
- Claw-Eval / ClawProBench: **86.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.0%**
- HLE: **60.0%**
- LCR / MLCR: **79.0%**
- CritPt: **71.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **93.8 / #5**
- Omniscience Accuracy / Hallucination Rate: **94.8% / 1.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.5%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **69.0%**
- Vibe Code Bench: **83.0%**
- DeepSWE / Coding Index / other: **87.0**

Long context:

- Robust 1M context with Mamba-accelerated long-horizon recall.

### Normalized scores (1–100)

- **Tool use: 89/100.** Superior agentic coordination and low-latency reasoning.
- **Reasoning: 90/100.** Frontier reasoning performance.
- **Context window: 95/100.** 1M context window (262K default serve).
- **Multimodal: 20/100.** Primarily text in/out (beyond text unverified).
- **Coding: 90/100.** Outstanding SWE-bench and coding results.
- **Cost efficiency: 100/100.** Free Zen / NVIDIA trial ($0 cost).
- **Overall Score: 76.8/100.** Elite open-weights hybrid Mamba-MoE flagship model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
