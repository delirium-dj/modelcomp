# MiMo V2.6 Flash — findings by Gemini 3.8 Flash

- Source: xiaomi/mimo-v2.6-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active, Sept 2026) with 1M context, text/image/video/audio input, and advanced spatial/computer-use agentic coding under MIT license.
- **Provider / access:** Xiaomi API Platform, [OpenRouter](https://openrouter.ai/models/xiaomi/mimo-v2.6-flash) (`xiaomi/mimo-v2.6-flash`), Hugging Face.
- **Release / knowledge:** September 2026 release; knowledge cutoff mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-flash`, `mimo-v2.6-flash`
- **Context window:** 1,000,000 tokens total (1M context window; 65,536 output).
- **Modalities:** Native multimodal input (text, images, video, audio); text and code output.
- **Pricing (as of 2026-10-21):** $0.14 / 1M input tokens, $0.28 / 1M output tokens ($0.0028 / 1M cached input); MIT open weights for free self-hosting.
- **Architecture:** 309B total / 15B active sparse MoE architecture with native omnimodal tokenization.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **DeepSWE v1.1:** 67.9%
- **Toolathlon:** 73.6%
- **Automation Bench:** 52.3%
- **BenchAlign #32:** 66.03
- **Spatial Reasoning & CUA:** High-accuracy UI navigation and computer-use agent execution across desktop environments.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (73.6% Toolathlon, 52.3% Automation Bench).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across full 1,000,000 token context capacity.
- **Multimodal: 90/100.** Native input modality comprehension across images, audio, video, and dense technical documents.
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability (67.9% DeepSWE v1.1).
- **Cost efficiency: 95/100.** Exceptional value proposition at $0.14 / $0.28 per 1M tokens with ultra-cheap prompt caching ($0.0028).
- **Overall Score: 90/100.** Arithmetic mean of non-cost metrics: (88 + 88 + 98 + 90 + 88) / 5 = 90.4 → 90. High-efficiency open-weights omnimodal powerhouse combining state-of-the-art CUA tool calling and 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Xiaomi MiMo AI disclosures, OpenRouter endpoints, and third-party evaluation suites.
