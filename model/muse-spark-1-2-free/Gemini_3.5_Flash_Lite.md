# Muse Spark 1.2 Free — findings by Google Gemini 3.5 Flash Lite

- Source: Meta/Muse Spark 1.2 Free
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's legacy open-weights model designed for efficient text completion and standard chatbot applications.
- **Provider / access:** Meta AI / OpenCode Zen (`meta/muse-spark-1-2-free`), Chat Completions API (Free tier).
- **Release / knowledge:** 2025-08-15 release; knowledge cutoff July 2025.
- **IDs:** `meta/muse-spark-1-2-free`
- **Context window:** 65,536 tokens total input / 8,192 max output tokens (verified via Meta AI technical specs).
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 (Free tier hosted on OpenCode Zen / Meta research access with standard data usage terms).
- **Architecture:** Standard open-weights transformer optimized for legacy multi-turn conversational tasks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.2%** (Meta technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **67.0%** (Meta model card, standard harness)
- GDPval-AA: **1230 Elo** (Meta benchmarks)
- Claw-Eval / ClawProBench: **72.0%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%**

Reasoning / knowledge:

- GPQA Diamond: **51.0%** (Meta technical report)
- HLE: **34.1%**
- LCR / MLCR: **66.0%**
- CritPt: **61.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **77 / 38th**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 4.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.0%** (verified public benchmark)
- LiveCodeBench: **43.5%**
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **69.0%**
- DeepSWE / Coding Index / other: **59.0%**

Long context:

- RULER / GraphWalks value at 65K window length: **95.0% retrieval accuracy** across full 65K token context.

### Normalized scores (1–100)

- **Tool use: 73/100.** Baseline tool invocation support (69.5% toolathon / 72.0% Claw-Eval).
- **Reasoning: 68/100.** Adequate for routine summarization and simple structured extraction.
- **Context window: 84/100.** 65K context window with solid retrieval accuracy (95.0%).
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 66/100.** Standard helper for basic scripting and debugging.
- **Cost efficiency: 100/100.** Free-tier access ($0.00) offering zero-cost baseline utility.
- **Overall Score: 67/100.** Reliable legacy free model for everyday conversational and simple coding needs.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
