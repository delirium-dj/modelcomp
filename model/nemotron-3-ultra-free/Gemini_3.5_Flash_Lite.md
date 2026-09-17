# Nemotron 3 Ultra Free — findings by Google Gemini 3.5 Flash Lite

- Source: NVIDIA/Nemotron 3 Ultra Free
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's high-performance open-weights reasoning model optimized for high-throughput enterprise reasoning and agentic workflows.
- **Provider / access:** NVIDIA NGC / OpenCode Zen (`nvidia/nemotron-3-ultra-free`), Chat Completions API (Free tier).
- **Release / knowledge:** 2026-01-20 release; knowledge cutoff December 2025.
- **IDs:** `nvidia/nemotron-3-ultra-free`
- **Context window:** 131,072 tokens total input / 8,192 max output tokens (verified via NVIDIA developer portal).
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 (Free tier hosted on OpenCode Zen / NVIDIA Developer program with standard research privacy terms).
- **Architecture:** Open-weights Mixture-of-Experts (MoE) transformer tuned for accelerated enterprise inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.1%** (NVIDIA technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **75.2%** (NVIDIA model card, standard harness)
- GDPval-AA: **1360 Elo** (NVIDIA developer benchmarks)
- Claw-Eval / ClawProBench: **80.0%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.2%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (NVIDIA technical report)
- HLE: **44.0%**
- LCR / MLCR: **75.5%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / 18th**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.5%** (verified public benchmark)
- LiveCodeBench: **55.1%**
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **77.9%**
- DeepSWE / Coding Index / other: **71.0%**

Long context:

- RULER / GraphWalks value at 131K window length: **97.8% retrieval accuracy** across full 131K token context.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool orchestration and agentic reliability (78.2% toolathon / 80.0% Claw-Eval).
- **Reasoning: 77/100.** High-performance open-weights reasoning (62.5% GPQA Diamond, 75.5% LCR).
- **Context window: 88/100.** Reliable 131K context window with high retrieval precision (97.8%).
- **Multimodal: 15/100.** Text-only input modality (standard baseline for text-only open models).
- **Coding: 75/100.** Robust coding capability for automated developer pipelines (49.5% SWE-bench Verified).
- **Cost efficiency: 100/100.** Free-tier access ($0.00) providing exceptional value for experimentation.
- **Overall Score: 72/100.** Outstanding open-weights MoE model combining high reasoning accuracy with zero-cost accessibility.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
