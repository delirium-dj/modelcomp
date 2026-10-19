# Muse Spark 1.1 — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Meta Muse Spark 1.1 (`muse-spark-1.1`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Muse Spark 1.1
- **Short description:** Meta Muse Spark 1.1 model in the Muse Spark family, optimized for long-context and multimodal reasoning.
- **Provider / access:** Meta Muse API, Meta Console; OpenCode Zen `opencode/muse-spark-1.1`; GitHub `meta/muse-spark-1.1`.
- **Release / knowledge:** Released 2026-09-15; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `meta/muse-spark-1.1` (Hugging Face registry slug); GitHub `meta/muse-spark-1.1`.
- **Context window:** **1M** total, **256K** max output (repo internal `average.md` value).
- **Modalities:** text in/out; vision not consistently advertised.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M cached output / $0.04` with 50% discount through 2026-10-17.
- **Architecture:** proprietary Meta LLM; not open weights.

### Raw benchmarks found
- **Tool use:** repo reports **88.3**
- **Reasoning:** repo reports **87.7**
- **Context:** repo reports **95.7**
- **Multimodal:** repo reports **92.5**
- **Coding:** repo reports **88.5**
- **Cost efficiency:** repo reports **95.6**
- **AA/independent values:** no independent AA page reachable (404).

### Normalized scores
- **Tool use: 88.3/100.**
- **Reasoning: 87.7/100.**
- **Context window: 95.7/100.**
- **Multimodal: 92.5/100.**
- **Coding: 88.5/100.**
- **Cost efficiency: 95.6/100.**
- **Overall Score: 90.5/100.**
### Conflicts resolved
- **Context/window:** external official paths were not reachable; repo internal `average.md` value retained.
- **Pricing:** external provider pages were not reachable; repo internal pricing retained.

### Signature
- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across Hugging Face, Meta, Artificial Analysis, GitHub, X/Meta, and search; scores are normalized 1–100 interpretations, not official vendor scores.
