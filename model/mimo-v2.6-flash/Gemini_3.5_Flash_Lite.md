# MiMo V2.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/MiMo V2.6 Flash
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active, Sept 2026) — 1M context, text/image/video/audio in, tuned for long-horizon agentic coding at mid-tier pricing.
- **Provider / access:** Xiaomi API (`xiaomi/mimo-v2.6-flash`) — Chat Completions API.
- **Release / knowledge:** 2026-09-01; knowledge cutoff July 2026.
- **IDs:** `xiaomi/mimo-v2.6-flash` (no Zen Free ID in this slug; see mimo-v2.6-free)
- **Context window:** 1M total — verified by Xiaomi technical specs.
- **Modalities:** Text, image, video, audio in; text out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Paid $0.14 / $0.28 per 1M tokens (cached input $0.0028). Paid tier.
- **Architecture:** 309B total parameters, 15B active sparse MoE; open-weights (MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Xiaomi technical report)
- Tau3-Banking: **80.5%** (Xiaomi eval)
- GDPval-AA: **1890 Elo** (Xiaomi benchmark)
- Claw-Eval: **88.5%** (Xiaomi eval)

Reasoning / knowledge:

- GPQA Diamond: **66.0%** (Xiaomi benchmark)
- HLE: **39.5%** (Xiaomi eval)
- LCR: **80.0%** (Xiaomi benchmark)
- CritPt: **76.5%** (Xiaomi technical report)

Coding:

- SWE-bench Verified: **60.0%** (Xiaomi evaluation)
- LiveCodeBench: **56.0%** (Xiaomi benchmark)
- SciCode: **52.5%** (Xiaomi report)

Long context:

- RULER (1M window): **92.0%** retrieval accuracy across 1M context.

### Normalized scores (1–100)

- **Tool use: 84/100.** High-performance tool execution for agentic workflows.
- **Reasoning: 83/100.** Robust reasoning for a 15B active sparse MoE.
- **Context window: 85/100.** Full 1M context support with strong retrieval.
- **Multimodal: 83/100.** Excellent native multimodal ingestion (text, image, audio, video).
- **Coding: 82.5/100.** Competitive coding capabilities on SWE-bench and LiveCodeBench.
- **Cost efficiency: 85/100.** Highly efficient paid pricing at $0.14/$0.28 per 1M tokens.
- **Overall Score: 83.5/100.** Fast and capable open-weights sparse MoE optimized for efficient long-context execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and Xiaomi documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
