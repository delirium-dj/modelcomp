# Qwen 3.6 Plus — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.6-plus
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's April-2026 hosted Qwen flagship with a tilt to real-world agents: repository-level coding and front-end/vibe coding at low cost.
- **Provider / access:** OpenCode (`opencode/qwen-3.6-plus`), Alibaba Cloud Model Studio, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.6-plus).
- **Release / knowledge:** April 2, 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.6-plus`, `qwen/qwen-3.6-plus`
- **Context window:** 1,000,000 tokens total (~1M context window; 65,536 max output tokens).
- **Modalities:** Native multimodal: text, image, and video in; text out.
- **Pricing (as of 2026-10-21):** $0.50 / 1M input tokens, $3.00 / 1M output tokens (<=256K window; standard tier).
- **Architecture:** Linear attention + sparse MoE hybrid architecture with 1M context.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Cloud Model Studio
- **SWE-bench Verified:** **78.8%**
- **SWE-bench Pro:** **56.6%**
- **Terminal-Bench 2.0:** **61.6%**
- **GPQA Diamond:** **90.4%**

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (61.6% Terminal-Bench 2.0).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (90.4% GPQA Diamond).
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M context / 65K output headroom).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 86/100.** Verified software engineering capability across 78.8% SWE-bench Verified and 56.6% SWE-bench Pro.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 98 + 84 + 86) / 5 = 88.4 → 88. Flagship hosted agent model delivering strong SWE-bench coding and 1M context capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
