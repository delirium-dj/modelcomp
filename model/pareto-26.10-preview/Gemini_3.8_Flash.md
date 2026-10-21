# Pareto 26.10 Preview — findings by Gemini 3.8 Flash

- Source: opencode/pareto-26.10-preview
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal preview model for research, coding, and autonomous agents with 1M context.
- **Provider / access:** OpenCode (`opencode/pareto-26.10-preview`), [OpenRouter](https://openrouter.ai/models/unbiased/pareto-26.10-preview).
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** `opencode/pareto-26.10-preview`
- **Context window:** 1,000,000 tokens in; 131,000 max output tokens.
- **Modalities:** Text and image in; text and code out.
- **Pricing (as of 2026-10-21):** $0.80 / 1M input tokens, $3.20 / 1M output tokens ($0.03 cached read).
- **Architecture:** Composite routing architecture blending specialized expert backbones with multi-agent orchestration.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://unbiased.ai / https://openrouter.ai/models/unbiased/pareto-26.10-preview
- **Key Benchmarks & Findings:** Unbiased AI composite routing model. GPQA-Diamond: **92.4%**, DeepSWE v1.1: **69.9%**, Terminal-Bench 4.0: **50.8%**, HLE text: **49.9%**. 1M context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (50.8% Terminal-Bench 4.0).
- **Reasoning: 87/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (92.4% GPQA Diamond, 49.9% HLE text).
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 tokens in; 131,000 max output).
- **Multimodal: 68/100.** Input/output modality comprehension across images and documents (Text + image in; text out).
- **Coding: 82/100.** Verified software engineering capability across 69.9% DeepSWE v1.1.
- **Cost efficiency: 90/100.** Value proposition relative to performance at $0.80 / $3.20 per 1M tokens ($0.03 cached).
- **Overall Score: 82/100.** Arithmetic mean of non-cost metrics: (78 + 87 + 95 + 68 + 82) / 5 = 82.0. Composite routed architecture delivering solid benchmark performance across long context and coding tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
