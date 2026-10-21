# Qwen 3.7 Max — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.7-max
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary Qwen3.7 flagship agent model (May 2026) for long-horizon coding, office automation, and multi-agent workflows across 1M context.
- **Provider / access:** OpenCode (`opencode/qwen-3.7-max`), Alibaba Model Studio, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.7-max).
- **Release / knowledge:** May 19, 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.7-max` (Zen tier available)
- **Context window:** 1,000,000 tokens total (~1M context window; 131,072 max output tokens).
- **Modalities:** Text in/out; native reasoning traces and structured tool calling.
- **Pricing (as of 2026-10-21):** $1.48 / 1M input tokens, $4.43 / 1M output tokens ($0.25 cached read).
- **Architecture:** Frontier proprietary transformer architecture engineered for 35+ hour autonomous agent execution loops.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://alibabacloud.com / Alibaba Model Studio
- **GPQA Diamond:** **92.4%**
- **SWE-bench Pro:** **60.6%**
- **SWE-bench Verified:** **80.4%–80.8%**
- **Terminal-Bench 2.0:** **69.7%**
- **LiveCodeBench:** **87.1%**
- **LegalBench:** **84.9%**

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (69.7% Terminal-Bench 2.0).
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (92.4% GPQA Diamond).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 131K output headroom.
- **Multimodal: 82/100.** High-level document and structured data reasoning (text-focused foundation).
- **Coding: 89/100.** Verified software engineering capability across 60.6% SWE-bench Pro and 80.8% SWE-bench Verified.
- **Cost efficiency: 84/100.** Value proposition relative to performance at $1.48 / $4.43 per 1M tokens ($0.25 cached).
- **Overall Score: 89/100.** Arithmetic mean of non-cost metrics: (88 + 90 + 98 + 82 + 89) / 5 = 89.4 → 89. Frontier proprietary agent model with exceptional SWE-bench Pro resolution and extended autonomous execution.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
