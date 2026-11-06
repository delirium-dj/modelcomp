# Pareto 26.10 Preview — findings by Gemini 3.8 Flash

- Source: opencode/pareto-26.10-preview
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's composite multi-model system (engineered by Circuit & Chisel) blending parallel frontier and open-weights models behind a unified API endpoint for advanced research, coding, and autonomous agents.
- **Provider / access:** `opencode/pareto-26.10-preview`, `unbiased/pareto-26.10-preview`, OpenRouter, Neura Market.
- **Release / knowledge:** October 1, 2026 preview launch; succeeded by Pareto 26.10 stable in mid-October 2026; knowledge cutoff late 2026.
- **IDs:** `opencode/pareto-26.10-preview`, `unbiased/pareto-26.10-preview`.
- **Context window:** 1,048,576 tokens input; 131,072 max output tokens.
- **Modalities:** Text and image input; text and structured code output; tool/function calling and prompt caching.
- **Pricing (as of 2026-11-06):** $0.80 / 1M input tokens, $3.20 / 1M output tokens ($0.03 cached read).
- **Architecture:** Composite blended multi-model execution layer (black-box parallel inference synthesizing multi-model consensus dynamically per request).

### Raw benchmarks found

Verified evaluations and benchmarks from Unbiased AI release disclosures and independent tracking:

- **Primary Reference:** [Unbiased AI](https://unbiased.ai) / [OpenRouter](https://openrouter.ai/models/unbiased/pareto-26.10-preview) / BenchLM
- **Key Benchmarks & Findings:**
  - GPQA-Diamond: **92.4%**
  - Humanity's Last Exam (HLE) [Text-only]: **49.9%**
  - DeepSWE v1.1: **69.9%**
  - Terminal-Bench 4.0: **50.8%**
  - Context Window: 1,048,576 tokens with 131,072 token generation headroom.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and 50.8% on Terminal-Bench 4.0.
- **Reasoning: 87/100.** High-level composite reasoning backed by 92.4% on GPQA-Diamond and 49.9% on HLE text-only.
- **Context window: 95/100.** Full 1M input token context window with 131K output capacity.
- **Multimodal: 68/100.** Capable image understanding and document OCR input, with text-only generation.
- **Coding: 82/100.** Strong software engineering performance demonstrated by 69.9% on DeepSWE v1.1.
- **Cost efficiency: 90/100.** Very competitive pricing for a synthesized frontier ensemble ($0.80/$3.20 per 1M, $0.03 cached).
- **Overall Score: 82/100.** Quality arithmetic mean of the five core dimensions: (78 + 87 + 95 + 68 + 82) / 5 = 82/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Unbiased AI release documentation, OpenRouter catalog, and BenchLM tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
