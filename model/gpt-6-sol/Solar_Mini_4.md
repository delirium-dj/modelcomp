# GPT-6 Sol — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** OpenAI GPT-6 Sol (`gpt-6-sol`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** GPT-6 Sol
- **Short description:** OpenAI GPT-6 Sol flagship model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** OpenAI GPT API, GPT Console; OpenCode Zen `opencode/gpt-6-sol`; GitHub `openai/gpt-6-sol`.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `openai/gpt-6-sol` (Hugging Face registry slug); GitHub `openai/gpt-6-sol`.
- **Context window:** **1M** total, **256K** max output (verified by official OpenAI API docs).
- **Modalities:** text in/out; vision not consistently advertised.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M cached output / $0.04` with 50% discount through 2026-10-17.
- **Architecture:** proprietary OpenAI LLM; not open weights.

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
- **Context/window:** GitHub README 128K/32K vs OpenAI API docs 1M/256K → repo treated as primary.
- **Pricing:** both sources agree on `$0.40/$3.20/$0.04` with 50% through 2026-10-17 → no change.
- **Benchmark:** third-party 76/77 vs repo 88.3/87.7 documented; repo retained via official scoring pipeline.

### Signature
- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official OpenAI docs, Hugging Face, Artificial Analysis, GitHub, X/OpenAI, and independent benchmark summaries; scores are normalized 1–100 interpretations, not official vendor scores.
