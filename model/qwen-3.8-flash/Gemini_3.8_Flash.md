# Qwen 3.8 Flash — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's multimodal MoE technical preview (~125B total / ~6B active parameters) with 1M context for cheap agentic coding at near-free pricing.
- **Provider / access:** OpenCode (`opencode/qwen-3.8-flash`), Alibaba Cloud Model Studio, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.8-flash).
- **Release / knowledge:** Late August 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.8-flash` (Zen tier available)
- **Context window:** 1,000,000 tokens API context (262,144 native; 131,072 max output).
- **Modalities:** Native multimodal: text, image, and video in; text and code out.
- **Pricing (as of 2026-10-21):** ~$0.15 / 1M input tokens, ~$0.47 / 1M output tokens ($0.03 cached read).
- **Architecture:** 125B total / ~6B active sparse Mixture-of-Experts architecture previewing next-gen Qwen efficiency.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwenlm.github.io / Alibaba Cloud Model Studio
- **GPQA Diamond:** **91.7%**
- **SWE-bench Pro:** **62.5%**
- **DeepSWE v1.1:** **58.7%**
- **Toolathlon Verified:** **73.5%**
- **LiveCodeBench:** **91.9%**
- **IFBench:** **81.3%**

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (73.5% Toolathlon Verified).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (91.7% GPQA Diamond).
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M context / 131K output headroom).
- **Multimodal: 82/100.** Native text, image, and video input comprehension.
- **Coding: 88/100.** Verified software engineering capability across 62.5% SWE-bench Pro, 58.7% DeepSWE v1.1, and 91.9% LiveCodeBench.
- **Cost efficiency: 95/100.** Ultra-high cost efficiency at $0.15 / $0.47 per 1M tokens with prompt caching.
- **Overall Score: 89/100.** Arithmetic mean of non-cost metrics: (88 + 88 + 98 + 82 + 88) / 5 = 88.8 → 89. High-velocity flash-tier MoE delivering premier agentic coding and math reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
