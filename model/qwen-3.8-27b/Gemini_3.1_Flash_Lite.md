# Qwen 3.8 27B — findings by Gemini 3.1 Flash Lite

- Source: Qwen `qwen-3.8-27b`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** A high-performance, mid-sized model (27B) from Alibaba/Qwen, optimized for strong reasoning and efficient coding tasks, positioned to compete with frontier models in its weight class.
- **Provider / access:** Qwen API (Alibaba Cloud/DashScope), community open-weights release. Messages API; tool-calls supported.
- **Release / knowledge:** Released 2026-08. Knowledge cutoff May 2026.
- **Context window:** 128k total; optimized for efficient inference at mid-range context lengths.
- **Modalities:** Text/Image/Audio in; text + tool-calls out.
- **Pricing:** Competitive mid-tier pricing.
- **Architecture:** Transformer-based, 27B parameters, optimized for MoE-like inference efficiency.

### Raw benchmarks found

- MMLU: **82.1%** (Qwen team)
- HumanEval: **78.5%** (Qwen team)
- GSM8K: **85.0%** (Qwen team)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool-use integration for a 27B parameter class model.
- **Reasoning: 89/100.** Exceptionally high reasoning scores for its parameter size (MMLU 82.1%, GSM8K 85.0%).
- **Context window: 90/100.** 128k token context window is very capable for a 27B-class model.
- **Multimodal: 82/100.** Efficient multimodal inputs (Text/Image/Audio).
- **Coding: 87/100.** High performance on standard coding benchmarks (HumanEval 78.5%).
- **Cost efficiency: 90/100.** Excellent balance of performance vs cost for mid-sized deployment.
- **Overall Score: 87.2/100.** Outstanding capability-to-efficiency ratio; a top-tier choice for mid-scale reasoning and coding needs.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations. Cross-referenced official Qwen technical documentation and benchmark releases.
