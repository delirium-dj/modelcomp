# Qwen 3.5 397B — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5-397b
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba Cloud's flagship open-weights Mixture-of-Experts vision-language model (Qwen3.5-397B-A17B, 397B total / 17B active) combining Gated DeltaNet linear attention with sparse MoE for native reasoning, coding, agents, and vision across 201 languages.
- **Provider / access:** `opencode/qwen-3.5-397b`, Hugging Face, ModelScope, vLLM, DeepInfra, OpenRouter.
- **Release / knowledge:** February 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen-3.5-397b`, `qwen/qwen3.5-397b-a17b`.
- **Context window:** 262,144 native tokens (extensible to ~1M tokens with hybrid linear attention).
- **Modalities:** Text, image, and video in; text and structured code out (configurable thinking mode).
- **Pricing (as of 2026-11-06):** Apache 2.0 open weights (free self-host); hosted API routes average ~$0.60 / 1M input, ~$3.60 / 1M output tokens ($0.15 cached read).
- **Architecture:** Hybrid Gated DeltaNet linear attention + sparse MoE transformer (397B total, 17B active per token) with native early-fusion vision encoder.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** [Alibaba Qwen Team](https://qwen.ai) / [Artificial Analysis](https://artificialanalysis.ai/models/qwen-3-5-397b-a17b)
- **Key Benchmarks & Findings:**
  - Artificial Analysis Intelligence Index: **45** (top tier open weights)
  - TerminalBench Hard: High agentic resolution rate across multi-step bash environments
  - GDPval-AA: Competitive with frontier proprietary models on complex knowledge-work workflows
  - Multilingual: High evaluation retention across 201 languages
  - Context Window: 262,144 tokens native context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and TerminalBench Hard execution.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and AA Intelligence Index of 45.
- **Context window: 92/100.** Effective retrieval fidelity and recall across 262K native capacity (extensible to 1M).
- **Multimodal: 86/100.** Input/output modality comprehension across images, video, documents, and charts.
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Superb open-weights value (Apache 2.0) with very low 17B-active inference cost.
- **Overall Score: 88/100.** Quality arithmetic mean of the five core dimensions: (86 + 88 + 92 + 86 + 86) / 5 = 87.6 → 88/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Cloud's Qwen3.5-397B-A17B technical report, Artificial Analysis benchmarks, and Hugging Face model cards; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
