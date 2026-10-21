# Inkling — findings by Gemini 3.8 Flash

- Source: opencode/Inkling
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weights MoE foundation model (975B total / 41B active, Apache 2.0) with native text/image/audio fusion, 1M context, and dynamic controllable thinking effort.
- **Provider / access:** Thinking Machines Lab, [OpenRouter](https://openrouter.ai/models/thinkingmachines/inkling) (`thinkingmachines/inkling`), Hugging Face (`thinkingmachines/Inkling`), Tinker platform.
- **Release / knowledge:** July 15, 2026.
- **IDs:** `opencode/Inkling`, `thinkingmachines/inkling`, `Inkling`
- **Context window:** 1,000,000 tokens (1M context window; hosts serve 64K–1M).
- **Modalities:** Native multimodal input (text, images, audio); text output.
- **Pricing (as of 2026-10-21):** Paid hosted ~$1.00 / 1M input tokens, ~$4.05 / 1M output tokens (free tier routes and community endpoints available on OpenRouter; Apache 2.0 open weights).
- **Architecture:** 975B total / 41B active Mixture-of-Experts (6 of 256 experts + 2 shared experts active per token) with controllable thinking effort parameter.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **SWE-bench Verified:** ~74.2%
- **Humanity's Last Exam (HLE):** 46.8%
- **GPQA Diamond:** 88.4%
- **Terminal-Bench 2.1:** 62.4%
- **Audio / Vision Multimodal Perception:** Top-tier cross-modal reasoning across complex spoken dialogue and high-res imagery.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (88.4% GPQA Diamond, 46.8% HLE).
- **Context window: 98/100.** Effective retrieval fidelity and recall across full 1,000,000 token context window.
- **Multimodal: 86/100.** Native input modality comprehension across images, audio, and documents with unified cross-modal tokenization.
- **Coding: 86/100.** Strong software engineering, repository refactoring, and code generation capability (~74.2% SWE-bench Verified).
- **Cost efficiency: 92/100.** Value proposition relative to performance, open-weights Apache 2.0 license, and affordable hosting tiers.
- **Overall Score: 89/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 98 + 86 + 86) / 5 = 88.8 → 89. Frontier-grade open-weights multimodal reasoning powerhouse with native 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Thinking Machines Lab technical documentation, OpenRouter endpoints, and open-weights leaderboards.
