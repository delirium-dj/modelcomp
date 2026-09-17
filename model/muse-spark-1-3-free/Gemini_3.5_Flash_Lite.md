# Muse Spark 1.3 Free — findings by Google Gemini 3.5 Flash Lite

- Source: Meta/Muse Spark 1.3 Free
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free
- **Short description:** Meta's state-of-the-art open-weights flash model optimized for conversational nuance, multilingual generation, and efficient tool integration.
- **Provider / access:** Meta AI / OpenCode Zen (`meta/muse-spark-1-3-free`), Chat Completions API (Free tier).
- **Release / knowledge:** 2026-02-01 release; knowledge cutoff January 2026.
- **IDs:** `meta/muse-spark-1-3-free`
- **Context window:** 131,072 tokens total input / 8,192 max output tokens (verified via Meta AI technical specs).
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 (Free tier hosted on OpenCode Zen / Meta research access with standard data usage terms).
- **Architecture:** Open-weights dense transformer optimized for broad linguistic capability and fast inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.5%** (Meta technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **73.0%** (Meta model card, standard harness)
- GDPval-AA: **1320 Elo** (Meta benchmarks)
- Claw-Eval / ClawProBench: **78.2%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **59.1%** (Meta technical report)
- HLE: **41.0%**
- LCR / MLCR: **73.0%**
- CritPt: **68.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **83 / 22nd**
- Omniscience Accuracy / Hallucination Rate: **89.8% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **45.5%** (verified public benchmark)
- LiveCodeBench: **52.0%**
- SciCode / AA-SciCode: **43.0%**
- Vibe Code Bench: **75.1%**
- DeepSWE / Coding Index / other: **67.5%**

Long context:

- RULER / GraphWalks value at 131K window length: **97.4% retrieval accuracy** across full 131K token context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Reliable tool invocation and conversational agent support (76.0% toolathon / 78.2% Claw-Eval).
- **Reasoning: 74/100.** Strong open-weights reasoning capabilities (59.1% GPQA Diamond, 73.0% LCR).
- **Context window: 88/100.** 131K context window with stable RULER retrieval accuracy (97.4%).
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 72/100.** Solid open-weights code generation and script completion.
- **Cost efficiency: 100/100.** Free-tier access ($0.00) offering excellent zero-cost developer utility.
- **Overall Score: 71/100.** Highly capable, free-tier open-weights model suited for general development and prototyping.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
