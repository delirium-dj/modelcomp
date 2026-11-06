# Mistral Small 4 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistral/mistral-small-4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's next-generation compact multimodal Mixture-of-Experts (MoE) foundation model, integrating reasoning, vision perception, and agentic coding in a high-throughput, low-latency package.
- **Provider / access:** Mistral AI Platform (La Plateforme: `mistral-small-2603`), OpenRouter, Hugging Face, Azure AI Foundry.
- **Release / knowledge:** 2026-03 release; permissive Apache 2.0 license for weights; hosted commercial API.
- **IDs:** `mistral-small-4`, `mistral-small-2603`, `mistralai/mistral-small-4`, `openrouter/mistralai/mistral-small-4`.
- **Context window:** 262,144 tokens total (256k+ window).
- **Modalities:** Native multimodal input (text, high-resolution images, document schematics); text, code, structured JSON output; configurable reasoning mode.
- **Pricing (as of 2026-11-06):** $0.15 per 1M input tokens ($0.015 cached read) / $0.60 per 1M output tokens.
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer (119B total parameters, ~6B–8B active per token across 128 experts) with unified vision and reasoning encoders.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **76.9%** (with reasoning enabled)
- AA LCR (Long Context Reasoning): **49.7%** dense output accuracy
- Strong math and analytical deduction matching mid-tier frontier models

Agent / tool use:

- Fast tool calling and structured function execution with low TTFT (0.5s–0.88s)
- High throughput exceeding 110–170 tokens/sec in production deployments

Coding:

- Native agentic coding and repository exploration inherited from Devstral enhancements
- Robust Python, JavaScript, and systems language generation

Long context / vision:

- 262,144 token context window supporting comprehensive codebase and document ingestion
- MMMU Pro: **56.8%** (multimodal document, chart, and diagram parsing)

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast, responsive tool-call coordination and structured output parsing at high execution speeds.
- **Reasoning: 87/100.** Impressive analytical performance bolstered by configurable reasoning mode (76.9% on GPQA Diamond).
- **Context window: 86/100.** Full 262k token context window supporting heavy document analysis and long-form workflows.
- **Multimodal: 80/100.** Solid native multimodal vision (56.8% MMMU Pro) handling visual diagrams, UI layouts, and charts.
- **Coding: 85/100.** Strong code completion and agentic repository understanding powered by Devstral-derived training.
- **Cost efficiency: 97/100.** Exceptional value at $0.15 input / $0.60 output per 1M tokens ($0.015 cached) with open Apache 2.0 weights.
- **Overall Score: 85/100.** Arithmetic mean of five quality dimensions: (85 + 87 + 86 + 80 + 85) / 5 = 423 / 5 = 84.6 → 85. High-efficiency open-weight multimodal compact model delivering frontier-level reasoning and speed at minimal cost.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Multi-source web research across Mistral AI technical releases, BenchGecko evaluations, Artificial Analysis throughput benchmarks, and OpenRouter specifications; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Small 4](https://mistral.ai)
  - [OpenRouter — Mistral Small 4](https://openrouter.ai)
  - [BenchGecko — Mistral Small 4 Evaluation](https://benchgecko.ai)
  - [Artificial Analysis — Mistral Small 4 Benchmarks](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

