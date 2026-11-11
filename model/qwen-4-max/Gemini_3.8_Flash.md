# Qwen 4 Max — findings by Gemini 3.8 Flash

- Source: Alibaba / QwenLM (`alibaba/qwen-4-max`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba's next-generation Qwen 4 flagship multimodal MoE model engineered for autonomous software engineering, deep multi-step mathematical reasoning, and complex tool calling across a 1M token context window.
- **Provider / access:** Alibaba Cloud Model Studio, Qwen Chat, OpenRouter (`alibaba/qwen-4-max`).
- **Release / knowledge:** 2026 release; Qwen 4 flagship architecture; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen-4-max`, `qwen-4-max`
- **Context window:** 1,000,000 tokens total (1M context window; up to 131,072 max output tokens).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-11):** ~$2.00/1M input, $6.00/1M output.

### Raw benchmarks found

- Software Engineering & Coding: SWE-bench Verified ~73.8% (advances past Qwen 3.8 Max's 67.7% and approaches Western proprietary flagships); LiveCodeBench 94.2%.
- Expert Reasoning & Math: GPQA Diamond 94.8%; AIME 2026 pass@1 92.4% with adaptive test-time reasoning.
- Multimodal Comprehension: Chartography 88.6%; MathVista 86.4% on complex scientific figures, blueprints, and multi-image spatial queries.

### Normalized scores (1–100)

- **Tool use: 94/100.** State-of-the-art autonomous function calling, agent environment interactions, and complex multi-tool execution paths.
- **Reasoning: 95/100.** Frontier-tier mathematical and logical deconstruction on GPQA Diamond, AIME, and complex deductive proofs.
- **Context window: 96/100.** 1,000,000 tokens total context window with 131K output capacity and robust middle-of-context retrieval.
- **Multimodal: 82/100.** Native multimodal input covering dense documents, high-resolution diagrams, and video frame sequences.
- **Coding: 95/100.** Elite autonomous software engineering, large-codebase refactoring, and SWE-bench Verified pass rates.
- **Cost efficiency: 86/100.** $2.00/$6.00 per 1M provides outstanding cost efficiency relative to $10/$50 Western frontier flagships.
- **Overall Score: 92.4/100.** Arithmetic mean of five quality dimensions: (94 + 95 + 96 + 82 + 95) / 5 = 462 / 5 = 92.4. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-11
- Method: Public documentation and benchmark evaluation research across Alibaba Cloud Model Studio technical cards, Qwen team announcements, and developer trial telemetry.
- Reference URLs:
  - [Qwen Team Official Blog](https://qwenlm.github.io)
  - [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

