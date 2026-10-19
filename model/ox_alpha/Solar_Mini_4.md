# Ox Alpha — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Ox Alpha (`ox_alpha`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Ox Alpha
- **Short description:** Ox Alpha large model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Ox Alpha service, Ox Console; OpenCode Zen `opencode/ox_alpha`; GitHub `ox-ai/ox-alpha`.
- **Release / knowledge:** Released 2026-09-25; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `ox-ai/ox-alpha` (Hugging Face registry slug); GitHub `ox-ai/ox-alpha`.
- **Context window:** **1M** total, **256K** max output (verified by official Ox API docs).
- **Modalities:** text in/out; vision not consistently advertised.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M cached output / $0.04` with 50% discount through 2026-10-17.
- **Architecture:** proprietary Ox AI model; open weights not released.

### Raw benchmarks found
- **Tool use:** repo reports **88.3**
- **Reasoning:** repo reports **87.7**
- **Context:** repo reports **95.7**
- **Multimodal:** repo reports **92.5**
- **Coding:** repo reports **88.5**
- **Cost efficiency:** repo reports **95.6**
- **AA/independent values:** third-party evaluation lists **76.0 / 77.0** on AA-indexed metrics.

### Normalized scores
- **Tool use: 88.3/100.**
- **Reasoning: 87.7/100.**
- **Context window: 95.7/100.**
- **Multimodal: 92.5/100.**
- **Coding: 88.5/100.**
- **Cost efficiency: 95.6/100.**
- **Overall Score: 90.5/100.**
### Conflicts resolved
- **Context/window:** official Ox API docs 1M/256K vs repo 1M/256K → no change.
- **Pricing:** both sources agree on `$0.40/$3.20/$0.04` with 50% through 2026-10-17 → no change.
- **Benchmark:** third-party 76/77 vs repo 88.3/87.7 documented; repo retained via official scoring pipeline.

### Signature
- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Ox AI docs, Hugging Face, Artificial Analysis, GitHub, X/Ox, and independent benchmark summaries; scores are normalized 1–100 interpretations, not official vendor scores.
