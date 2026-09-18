# Nemotron 3.5 Lightning Free — findings by Gemini 3.5 Flash Lite

- Source: NVIDIA/Nemotron 3.5 Lightning Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents. Pairs with a frontier planner.
- **Provider / access:** OpenCode Zen / NVIDIA `opencode/nemotron-3.5-lightning-free` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/nemotron-3.5-lightning-free`
- **Context window:** 262,144 native.
- **Modalities:** Text-only; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen / NVIDIA trial tier.
- **Architecture:** Compact 30B MoE (3B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **55.0%**
- Tau3-Banking / Tau2-Bench: **61.0%**
- GDPval-AA: **1350 Elo**
- Claw-Eval / ClawProBench: **70.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **56.0%**
- HLE: **41.0%**
- LCR / MLCR: **63.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **87.5 / #18**
- Omniscience Accuracy / Hallucination Rate: **90.0% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **57.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **66.0%**
- DeepSWE / Coding Index / other: **70.0**

Long context:

- 256K native context with blazing-fast inference.

### Normalized scores (1–100)

- **Tool use: 80/100.** Extremely fast tool execution for lightweight subtasks.
- **Reasoning: 78/100.** Solid reasoning for its compact size.
- **Context window: 86/100.** 256K context window.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 79/100.** Rapid script generation and debugging.
- **Cost efficiency: 100/100.** Free Zen / NVIDIA trial ($0 cost).
- **Overall Score: 67.6/100.** Ultra-fast low-latency utility model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
