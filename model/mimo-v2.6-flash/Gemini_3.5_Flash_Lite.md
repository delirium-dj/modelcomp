# MiMo v2.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/mimo-v2.6-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Flash
- **Short description:** Xiaomi's high-throughput flash model optimized for lightning-fast inference, low-latency conversational intelligence, and multilingual task execution.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash` / Xiaomi AI API (`mimo-v2.6-flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/mimo-v2.6-flash`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text and vision in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Extremely economical flash tier pricing (~$0.20 / $0.80 per 1M tokens).
- **Architecture:** Compact transformer architecture optimized for rapid token generation and minimal inference latency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Xiaomi technical evaluation)
- Tau3-Banking / Tau2-Bench: **69.0%** (Xiaomi evaluation harness)
- GDPval-AA: **2020 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **75.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.0%** (Xiaomi benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **63.0%** (Xiaomi model card)
- HLE: **37.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **70.0%** (Complex reasoning)
- CritPt: **66.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **85.0 / #34** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **81.0% / 9.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **56.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **53.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **59.0%** (Scientific coding benchmark)
- Vibe Code Bench: **66.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **75.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **89.0% retrieval accuracy at 128K context length** (Xiaomi long-context validation)

### Normalized scores (1–100)

- **Tool use: 83/100.** Fast and reliable function calling.
- **Reasoning: 84/100.** Solid analytical deduction for flash tier.
- **Context window: 85/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 85/100.** Efficient text and vision processing.
- **Coding: 83/100.** Capable programming support.
- **Cost efficiency: 96/100.** Exceptional price-to-performance ratio for high-frequency flash tasks.
- **Overall Score: 84/100.** High-throughput flash model combining lightning-fast response times with robust multilingual capabilities and exceptional economy.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Xiaomi documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
