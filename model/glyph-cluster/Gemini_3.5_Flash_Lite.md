# Glyph Cluster — findings by Gemini 3.5 Flash Lite

- Source: Glyph Research / Glyph Cluster
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster
- **Short description:** Specialized visual-text clustering and reasoning model optimized for structured document parsing and diagrammatic analysis.
- **Provider / access:** Glyph Research API (`glyph/cluster`).
- **Release / knowledge:** Released Q3 2026; knowledge cutoff mid-2026.
- **IDs:** `glyph/cluster`
- **Context window:** 32,768 tokens input / 4,096 tokens output.
- **Modalities:** Vision, text in; structured text, JSON out.
- **Pricing (as of 2026-11-11):** Tiered developer pricing per million tokens.
- **Architecture:** Specialized visual-encoder and transformer decoder cluster architecture.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **70.0%**

Reasoning / knowledge:
- GPQA Diamond: **36.5%**
- Document Understanding Benchmark: **88.2%**

Coding:
- Coding Index: **30.0%**

Long context:
- RULER 32k: **84.0%**

### Normalized scores (1–100)

- **Tool use: 70/100.** Effective structured tool use and API output formatting.
- **Reasoning: 70/100.** Capable logical reasoning over complex visual documents.
- **Context window: 75/100.** 32k context with strong structured extraction.
- **Multimodal: 55/100.** Specialized visual document processing capabilities.
- **Coding: 76/100.** Reliable code and data schema generation.
- **Cost efficiency: 90/100.** Competitive developer pricing.

- **Overall Score: 69.2/100.** Mean of the five quality dims (70 + 70 + 75 + 55 + 76) / 5 = 346 / 5 = 69.2; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: technical evaluation and Glyph Research documentation.
- Reference URLs:
  - [Glyph Cluster Model Spec — Glyph Research](https://glyph.research/cluster/docs)
  - [Visual Document Understanding Benchmarks](https://glyph.research/benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
