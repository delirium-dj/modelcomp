# MiMo V2.6 Pro — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE (Sept 2026) — #1 open-weights model on the AA Intelligence Index (46), sibling of MiMo V2.6 Flash.
- **Provider / access:** Xiaomi API (`xiaomi/mimo-v2.6-pro`) — Chat Completions API.
- **Release / knowledge:** 2026-09-01; knowledge cutoff July 2026.
- **IDs:** `xiaomi/mimo-v2.6-pro` (no Free ID on Zen)
- **Context window:** 1M total (128K max output) — verified by Xiaomi technical documentation.
- **Modalities:** Text, image, video, audio in; text out; reasoning enabled; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** Paid $0.435 / $0.87 per 1M tokens (cached input $0.0036). Paid tier.
- **Architecture:** 1.02T total parameters, 42B active MoE; open-weights (MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.2%** (Xiaomi technical report)
- Tau3-Banking: **82.5%** (Xiaomi eval suite)
- GDPval-AA: **1940 Elo** (Xiaomi benchmark)
- Claw-Eval: **91.4%** (Xiaomi eval)
- Toolathon: **88.0%** (Xiaomi benchmark)

Reasoning / knowledge:

- GPQA Diamond: **69.8%** (Xiaomi benchmark)
- HLE: **42.5%** (Xiaomi eval)
- LCR: **84.0%** (Xiaomi evaluation)
- CritPt: **80.5%** (Xiaomi technical report)
- Artificial Analysis Intelligence Index: **46 / #1 open-weights** (Artificial Analysis)
- Hallucination Rate: **2.1%** (Xiaomi benchmark)

Coding:

- SWE-bench Verified: **62.5%** (Xiaomi evaluation)
- LiveCodeBench: **58.0%** (Xiaomi benchmark)
- SciCode: **55.0%** (Xiaomi evaluation)
- Vibe Code Bench: **79.0%** (Xiaomi benchmark)

Long context:

- RULER (1M window): **94.2%** retrieval accuracy across 1M context window.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool-calling and API integration capability across diverse Agent benchmarks.
- **Reasoning: 86/100.** High performance on GPQA and complex reasoning tasks for open-weights MoE.
- **Context window: 88/100.** Full 1M token context window with reliable multi-modal ingestion.
- **Multimodal: 86/100.** Comprehensive native multimodal input support (text, image, audio, video).
- **Coding: 85.5/100.** Solid competitive coding performance on SWE-bench and LiveCodeBench.
- **Cost efficiency: 75/100.** Competitive paid pricing at $0.435/$0.87 per 1M tokens with aggressive prompt caching.
- **Overall Score: 86.5/100.** Excellent open-weights omnimodal MoE flagship with outstanding long-context and tool capabilities.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
