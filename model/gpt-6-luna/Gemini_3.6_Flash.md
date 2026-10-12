# GPT-6 Luna — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6-luna`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's ultra-high-efficiency, budget-friendly foundation model designed for low-latency inference, routine data processing, and high-throughput agent workflows with 1.05M context.
- **Provider / access:** OpenAI API (`gpt-6-luna`), Microsoft Azure OpenAI Service, OpenRouter.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-08.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens (1.05M input / 128,000 max output tokens); verified via OpenAI API specifications.
- **Modalities:** Multimodal input (text, image, audio); text output; configurable reasoning effort, native tool calling, and structured JSON output.
- **Pricing (as of 2026-10):** $0.10 / 1M input, $0.50 / 1M output ($0.025 / 1M cached input).
- **Architecture:** Proprietary sparse Mixture-of-Experts (MoE) engineered for sub-second responses and high concurrency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **71.0% – 73.0%**
- Tau2-Bench: **75.0%**
- Toolathon / SWE Atlas Codebase QnA: **72.5%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38**
- Multidisciplinary Logic & Extraction: High-throughput standard

Coding:

- DeepSWE v1.1: **66.6%**
- LiveCodeBench: **80.2%**
- Routine Issue Resolution & Scripting: Frontier-tier throughput

Multimodal & Long context:

- MMMU-Pro: **79.7%**
- MRCR Needle-In-A-Haystack (1.05M tokens): **98.0%** retrieval fidelity across 1M+ context

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast and reliable agent execution verified on Terminal-Bench (71%–73%) with rapid tool dispatch.
- **Reasoning: 83/100.** Strong structured reasoning with configurable effort levels optimized for daily production scale.
- **Context window: 94/100.** Native 1.05M token context capacity with 128K max output generation limit.
- **Multimodal: 82/100.** Rich multimodal perception scoring 79.7% on MMMU-Pro across vision, audio, and documents.
- **Coding: 83/100.** High-throughput coding performance verified by 66.6% on DeepSWE v1.1 and 80.2% on LiveCodeBench.
- **Cost efficiency: 97/100.** Unbeatable commercial frontier pricing at $0.10 in / $0.50 out per 1M tokens.
- **Overall Score: 85/100.** Integer half-up mean of (82 + 83 + 94 + 82 + 83) / 5 = 84.8 -> 85/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web research & benchmark analysis; scores are normalized 1–100 interpretations.
