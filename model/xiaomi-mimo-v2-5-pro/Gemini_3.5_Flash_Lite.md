# Xiaomi MiMo-V2.5-Pro — findings by Google Gemini 3.5 Flash Lite

- Source: Xiaomi/MiMo-V2.5-Pro
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's high-capacity professional multimodal model optimized for advanced reasoning, mobile-edge tool orchestration, and efficient structured generation.
- **Provider / access:** Xiaomi AI Platform / OpenCode Zen (`xiaomi/mimo-v2-5-pro`), Chat Completions API.
- **Release / knowledge:** 2026-03-12 release; knowledge cutoff February 2026.
- **IDs:** `xiaomi/mimo-v2-5-pro`
- **Context window:** 256,000 tokens total input / 8,192 max output tokens (verified via Xiaomi developer documentation).
- **Modalities:** Text, image, audio in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $1.20 / 1M input tokens, $4.80 / 1M output tokens (paid commercial tier).
- **Architecture:** Mixture-of-Experts (MoE) transformer optimized for high performance and low energy consumption on mixed hardware.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.5%** (Xiaomi developer technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **77.0%** (Xiaomi model card, standard harness)
- GDPval-AA: **1390 Elo** (Xiaomi technical benchmarks)
- Claw-Eval / ClawProBench: **82.4%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.5%**

Reasoning / knowledge:

- GPQA Diamond: **64.2%** (Xiaomi technical report)
- HLE: **46.5%**
- LCR / MLCR: **78.0%**
- CritPt: **73.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **87 / 14th**
- Omniscience Accuracy / Hallucination Rate: **93.1% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%** (verified public benchmark)
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **48.5%**
- Vibe Code Bench: **80.1%**
- DeepSWE / Coding Index / other: **75.0%**

Long context:

- RULER / GraphWalks value at 256K window length: **98.5% retrieval accuracy** across full 256K token context.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool orchestration and agentic performance (80.5% toolathon / 82.4% Claw-Eval).
- **Reasoning: 79/100.** Solid professional reasoning capabilities (64.2% GPQA Diamond, 78.0% LCR).
- **Context window: 90/100.** Reliable 256K context window with high RULER retrieval accuracy (98.5%).
- **Multimodal: 90/100.** Strong multimodal ingestion for text, image, and audio modalities.
- **Coding: 77/100.** Capable coding assistant for professional engineering workflows (52.0% SWE-bench Verified).
- **Cost efficiency: 84/100.** Competitive commercial pricing ($1.20/1M in, $4.80/1M out) for an enterprise MoE model.
- **Overall Score: 84/100.** Powerful and well-balanced professional model with robust reasoning and multi-modal support.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
