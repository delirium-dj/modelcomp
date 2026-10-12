# Pareto 26.10 Preview — findings by Gemini 3.6 Flash

- Source: Unbiased (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Multimodal composite model developed by Unbiased (Circuit & Chisel team) engineered for long-horizon research, complex coding, and agentic workflows using dynamic multi-model routing.
- **Provider / access:** OpenRouter (`unbiased/pareto-26.10-preview`), Unbiased API (`pareto`). OpenAI- and Anthropic-compatible endpoints.
- **Release / knowledge:** October 1, 2026 release; knowledge cutoff late 2025.
- **IDs:** `unbiased/pareto-26.10-preview`, `pareto`
- **Context window:** 1,048,576 tokens (1M tokens) input / 131,072 max output tokens — verified via OpenRouter API platform documentation.
- **Modalities:** Multimodal input (text, image); text and tool action output; composite reasoning; function calling; structured JSON mode.
- **Pricing (as of October 2026):** $0.80 / 1M input, $3.20 / 1M output tokens ($0.03 / 1M cached input tokens).
- **Architecture:** Proprietary composite routing system blending specialized frontier models with uniform prompt cache preservation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (vendor-reported preliminary evaluation)
- Toolathon / SWE Atlas Codebase QnA: **71.2%**
- Tool & Function Calling: High precision parameter binding across multi-turn sessions
- GDPval-AA: **1,270**

Reasoning / knowledge:

- GPQA Diamond: **92.4%**
- Humanity's Last Exam (HLE): **49.9%** (text-only expert subset)
- Artificial Analysis Intelligence Index: Preliminary top-tier composite ranking
- Omniscience Accuracy / Hallucination Rate: **86.0% / 4.8%**

Coding:

- DeepSWE v1.1: **69.9%**
- LiveCodeBench: **81.0%**
- SWE-bench Verified: **68.5%**
- Vibe Code Bench: **76.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.6%** retrieval consistency across 1M context window with $0.03 cached token access.
- Image Understanding: Clean visual document and screenshot interpretation.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong multi-step agentic execution backed by 50.8% on Terminal-Bench 4.0 and robust function calling.
- **Reasoning: 90/100.** Top-tier reasoning capabilities driven by 92.4% on GPQA Diamond and 49.9% on HLE.
- **Context window: 94/100.** Full 1M token context capacity with an expansive 131K output budget and $0.03 prompt caching.
- **Multimodal: 75/100.** Dependable multimodal vision for technical diagrams, charts, and interface screenshots.
- **Coding: 86/100.** High-caliber software engineering throughput verified by 69.9% on DeepSWE v1.1.
- **Cost efficiency: 90/100.** Highly competitive pricing at $0.80 / $3.20 per 1M tokens with ultra-low $0.03 cached reads.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 90 + 94 + 75 + 86) / 5 = 430 / 5 = 86.0 -> 86/100. High-efficiency composite reasoning engine delivering elite coding and long-context analysis.

---

## Sources

- Unbiased AI Pareto 26.10 Technical Announcement: https://unbiased.ai/blog/pareto-26-10-preview
- OpenRouter Model Specifications & Pricing: https://openrouter.ai/models/unbiased/pareto-26.10-preview
- Puter AI & OrcaRouter Benchmark Analysis: https://puter.com/models/pareto-26-10

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
