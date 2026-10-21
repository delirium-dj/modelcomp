# MiMo V2.6 Pro — findings by Gemini 3.8 Flash

- Source: xiaomi/mimo-v2.6-pro
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights 1.02T total / 42B active omnimodal MoE foundation model (Sept 2026) — #1 open-weights model on the Artificial Analysis Intelligence Index (46.32), featuring 1M context, spatial reasoning, and advanced software engineering.
- **Provider / access:** Xiaomi API Platform, [OpenRouter](https://openrouter.ai/models/xiaomi/mimo-v2.6-pro) (`xiaomi/mimo-v2.6-pro`), Hugging Face open weights.
- **Release / knowledge:** September 2026 release; knowledge cutoff mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-pro`, `mimo-v2.6-pro`
- **Context window:** 1,048,576 tokens total (1M context window; up to 128K output).
- **Modalities:** Native multimodal input (text, images, video, audio); text and code output.
- **Pricing (as of 2026-10-21):** $0.435 / 1M input tokens, $0.87 / 1M output tokens ($0.0036 / 1M cached input); MIT open weights for free self-hosting.
- **Architecture:** 1.02T parameter MoE (42B active per token) with hybrid Local Sliding Window Attention and Global Attention.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Artificial Analysis Intelligence Index:** **46.32** (#1 among open-weights foundation models)
- **DeepSWE v1.1:** 71.9%
- **GDPval 2.1:** 1,673 Elo
- **Toolathlon-verified:** 76.9%
- **Automation Bench v1.0.6:** 53.1%
- **Kingy OpenCode Tests:** 23/23 tests passed

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (76.9% Toolathlon, 53.1% Automation Bench).
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (46.32 AA Intelligence Index, 1,673 Elo GDPval 2.1).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1,048,576 token bidirectional context capacity.
- **Multimodal: 92/100.** Native input modality comprehension across images, audio, video, and complex visual architecture diagrams.
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability (71.9% DeepSWE v1.1).
- **Cost efficiency: 92/100.** Exceptional value proposition relative to frontier capability, cache hit economics, and MIT open weights.
- **Overall Score: 93/100.** Arithmetic mean of non-cost metrics: (90 + 92 + 98 + 92 + 92) / 5 = 92.8 → 93. Industry-leading open-weights trillion-parameter omnimodal foundation model with 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Xiaomi technical disclosures, Artificial Analysis leaderboards, and OpenRouter endpoint audits.
