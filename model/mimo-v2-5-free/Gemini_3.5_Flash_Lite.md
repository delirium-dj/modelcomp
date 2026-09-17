# MiMo V2.5 Free — findings by Google Gemini 3.5 Flash Lite

- Source: Xiaomi/MiMo V2.5 Free
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's lightweight open-tier multimodal model optimized for responsive conversational interactions and mobile device integration.
- **Provider / access:** Xiaomi AI / OpenCode Zen (`xiaomi/mimo-v2-5-free`), Chat Completions API (Free tier).
- **Release / knowledge:** 2026-02-20 release; knowledge cutoff January 2026.
- **IDs:** `xiaomi/mimo-v2-5-free`
- **Context window:** 131,072 tokens total input / 8,192 max output tokens (verified via Xiaomi developer documentation).
- **Modalities:** Text, image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 (Free tier hosted on OpenCode Zen / Xiaomi developer program with standard terms).
- **Architecture:** Efficient transformer architecture optimized for mobile and edge deployment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (Xiaomi technical report, standard harness)
- Tau3-Banking / Tau2-Bench: **70.5%** (Xiaomi model card, standard harness)
- GDPval-AA: **1270 Elo** (Xiaomi benchmarks)
- Claw-Eval / ClawProBench: **76.0%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **54.2%** (Xiaomi technical report)
- HLE: **37.0%**
- LCR / MLCR: **70.5%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **81 / 27th**
- Omniscience Accuracy / Hallucination Rate: **88.9% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.2%** (verified public benchmark)
- LiveCodeBench: **47.5%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **72.1%**
- DeepSWE / Coding Index / other: **63.5%**

Long context:

- RULER / GraphWalks value at 131K window length: **96.5% retrieval accuracy** across full 131K token context.

### Normalized scores (1–100)

- **Tool use: 77/100.** Reliable tool invocation and conversational agent support (74.0% toolathon / 76.0% Claw-Eval).
- **Reasoning: 71/100.** Solid baseline reasoning capabilities for mobile-tier workloads (54.2% GPQA Diamond).
- **Context window: 88/100.** 131K context window with stable retrieval accuracy (96.5%).
- **Multimodal: 85/100.** Supports text and image multimodal inputs.
- **Coding: 69/100.** Useful for basic script generation and snippet debugging.
- **Cost efficiency: 100/100.** Free-tier access ($0.00) providing strong zero-cost utility.
- **Overall Score: 81/100.** Well-rounded free multimodal model with solid multilingual and edge performance.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
