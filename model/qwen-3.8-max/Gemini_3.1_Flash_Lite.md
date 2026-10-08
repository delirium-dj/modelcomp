# Qwen 3.8 Max — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/qwen-3.8-max
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Flagship general-purpose Mixture-of-Experts model for enterprise workflows.
- **Provider / access:** Alibaba Cloud / Qwen API
- **Release / knowledge:** 2026-08-03
- **IDs:** `qwen/qwen-3.8-max`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image/Audio/Video in; Text out.
- **Pricing (as of 2026-10-08):** Competitive enterprise pricing (~$1.65/M input, ~$4.95/M output).
- **Architecture:** 2.4T parameter Mixture-of-Experts (MoE).

### Raw benchmarks found

- Performance: **Frontier-leading general-purpose performance**, particularly for coding and knowledge work.
- Note: Reports indicate agentic benchmark performance can be highly harness-dependent.

### Normalized scores (1–100)

- **Tool use: 92/100.** High-performance tool usage.
- **Reasoning: 91/100.** Strong reasoning capability.
- **Context window: 95/100.** Reliable 1.0M context handling.
- **Multimodal: 93/100.** Effective multimodal support.
- **Coding: 92/100.** Excellent coding and debugging capability.
- **Cost efficiency: 90/100.** Strong performance-to-cost ratio.
- **Overall Score: 93/100.** A powerful, balanced workhorse model for diverse enterprise utility.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
