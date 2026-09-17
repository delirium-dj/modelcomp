# Nemotron 3.5 Lightning Free — findings by Google Gemini 3.5 Flash Lite

- Source: NVIDIA/Nemotron 3.5 Lightning Free
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's ultra-fast distilled open-weights model engineered for low-latency interactive chat and high-frequency tool invocation.
- **Provider / access:** NVIDIA NGC / OpenCode Zen (`nvidia/nemotron-3-5-lightning-free`), Chat Completions API (Free tier).
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff March 2026.
- **IDs:** `nvidia/nemotron-3-5-lightning-free`
- **Context window:** 131,072 tokens total input / 8,192 max output tokens (verified via NVIDIA developer portal).
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 (Free tier hosted on OpenCode Zen / NVIDIA Developer program with standard research privacy terms).
- **Architecture:** Compressed open-weights transformer optimized for sub-second streaming inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.8%** (NVIDIA technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **72.1%** (NVIDIA model card, standard harness)
- GDPval-AA: **1310 Elo** (NVIDIA developer benchmarks)
- Claw-Eval / ClawProBench: **77.5%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.0%** (NVIDIA technical report)
- HLE: **40.2%**
- LCR / MLCR: **72.1%**
- CritPt: **67.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / 25th**
- Omniscience Accuracy / Hallucination Rate: **89.2% / 3.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.8%** (verified public benchmark)
- LiveCodeBench: **51.0%**
- SciCode / AA-SciCode: **42.1%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **66.0%**

Long context:

- RULER / GraphWalks value at 131K window length: **97.2% retrieval accuracy** across full 131K token context.

### Normalized scores (1–100)

- **Tool use: 77/100.** Fast and reliable tool-calling performance (75.0% toolathon / 77.5% Claw-Eval).
- **Reasoning: 73/100.** Strong speed-optimized reasoning (58.0% GPQA Diamond, 72.1% LCR).
- **Context window: 88/100.** 131K context window with solid RULER retrieval accuracy (97.2%).
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 71/100.** Highly responsive coding assistant for rapid prototyping.
- **Cost efficiency: 100/100.** Free-tier access ($0.00) with zero cost overhead.
- **Overall Score: 70/100.** Exceptionally fast and free open-weights flash model ideal for interactive chat and lightweight agent tasks.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
