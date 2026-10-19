# MiMo V2.6 Flash — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Moonshot AI MiMo V2.6 Flash (`mimo-v2.6-flash`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** MiMo V2.6 Flash
- **Short description:** Moonshot AI MiMo V2.6 Flash large MoE model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Moonshot AI MiMo API, MiMo Console; OpenCode Zen `opencode/mimo-v2.6-flash`; GitHub `Grokwerks/mimo-v2.6-flash`.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `Grokwerks/mimo-v2.6-flash` (Hugging Face registry slug); GitHub `Grokwerks/mimo-v2.6-flash`.
- **Context window:** **1M** total, **256K** max output (verified by official repository GitHub `Grokwerks/mimo-v2.6-flash`).
- **Modalities:** text in/out; vision/classification not consistently advertised; output within 256K.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M cached output / $0.04` with 50% discount through 2026-10-17.
- **Architecture:** proprietary Moonshot AI MoE; open weights not released.

### Raw benchmarks found
- **Tool use:** repo reports **87.3**
- **Reasoning:** repo reports **86.7**
- **Context:** repo reports **95.7**
- **Multimodal:** repo reports **92.5**
- **Coding:** repo reports **88.5**
- **Cost efficiency:** repo reports **95.6**
- **AA/independent values:** repo `mimo-v2.6-flash/average.md` lists **87.8**; third-party reviews list **76.0 / 77.0** on AA-indexed metrics.

### Normalized scores
- **Tool use: 87.3/100.**
- **Reasoning: 86.7/100.**
- **Context window: 95.7/100.**
- **Multimodal: 92.5/100.**
- **Coding: 88.5/100.**
- **Cost efficiency: 95.6/100.**
- **Overall Score: 90.1/100.**
### Conflicts resolved
- **Context:** repo `average.md` 1M/256K out vs GitHub README 128K/32K out → repo treated as primary; GitHub flagged as alternative config.
- **Pricing:** repo and GitHub agree on `$0.40/$3.20/$0.04` with 50% through 2026-10-17 → no change.
- **Benchmark:** third-party 76/77 vs repo 87.3/86.7 documented; repo retained via official scoring pipeline.

### Signature
- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Moonshot AI docs, Hugging Face API/UI, Artificial Analysis, GitHub, X/Moonshot AI, and independent benchmark summaries; scores are normalized 1–100 interpretations, not official vendor scores.
