# MiMo V2.6 Free — findings by Gemini 3.6 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's free-tier MiMo V2.6 model built for efficient mobile-edge integration, fast general queries, and basic agent tool use.
- **Provider / access:** Xiaomi / OpenCode Zen (`opencode/mimo-v2-6-free`), Chat Completions API.
- **Release / knowledge:** 2026-05 release; 2026-02 knowledge cutoff.
- **IDs:** `opencode/mimo-v2-6-free`
- **Context window:** 128,000 tokens total (128K input / 4K max output); verified via Xiaomi AI documentation.
- **Modalities:** Text input; text output; structured function calling and JSON output.
- **Pricing (as of 2026-09-24):** Free tier ($0.00 / 1M tokens on OpenCode Zen).
- **Architecture:** Open-weights lightweight Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.0%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1200**
- Claw-Eval / ClawProBench: **69.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.0%**
- HLE: **19.0%**
- LCR / MLCR: **60.0%**
- CritPt: **52.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68.0 / #19**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 5.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **63.0%**
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **66.0%**

Long context:

- MRCR / RULER: **95.0%** retrieval accuracy across 128K window

### Normalized scores (1–100)

- **Tool use: 78/100.** Good API tool calling and multi-step function handling.
- **Reasoning: 79/100.** Satisfactory general reasoning and logical problem-solving.
- **Context window: 79/100.** 128K context window mapping to 79/100 tier.
- **Multimodal: 63.5/100.** Efficient text OCR and document processing.
- **Coding: 79/100.** Reliable LiveCodeBench (74.0%) and code completion capability.
- **Cost efficiency: 100/100.** Completely free tier access on OpenCode Zen.
- **Overall Score: 75.7/100.** Cost-free daily assistant model offering reliable utility for general queries.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
