# Qwen 3.8 Max — findings by Gemini 3.8 Flash

- Source: alibaba/qwen3-8-max
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen3-8-max`), [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.8-max).
- **Release / knowledge:** August 3, 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `alibaba/qwen3-8-max`, `qwen/qwen-3.8-max`
- **Context window:** 1,000,000 tokens total (~1M context window; 131,072 max output tokens).
- **Modalities:** Native multimodal: text, image, and video in; text and code out.
- **Pricing (as of 2026-10-21):** $2.00 / 1M input tokens, $6.00 / 1M output tokens ($0.25 cached read).
- **Architecture:** 2.4T total / 95B active parameters per token sparse Mixture-of-Experts architecture.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://alibabacloud.com / Alibaba Model Studio
- **GPQA Diamond:** **92.6%**
- **SWE-bench Pro:** **67.7%**
- **Terminal-Bench 2.1:** **86.6%**
- **OSWorld-Verified:** **86.1%**
- **PaperBench:** **93.0%**
- **Humanity's Last Exam (HLE):** **43.6%**
- **IFBench:** **82.8%**
- **Toolathlon Verified:** **72.5%**
- **DeepSWE v1.1:** **56.6%**

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (86.6% Terminal-Bench 2.1, 86.1% OSWorld-Verified).
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (92.6% GPQA Diamond, 43.6% HLE, 93.0% PaperBench).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 131K output headroom.
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 91/100.** Verified software engineering capability across 67.7% SWE-bench Pro.
- **Cost efficiency: 84/100.** Value proposition relative to performance at $2.00 / $6.00 per 1M tokens ($0.25 cached).
- **Overall Score: 92/100.** Arithmetic mean of non-cost metrics: (92 + 94 + 98 + 86 + 91) / 5 = 92.2 → 92. Flagship 2.4T multimodal MoE model excelling in high-difficulty reasoning and repository software engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
