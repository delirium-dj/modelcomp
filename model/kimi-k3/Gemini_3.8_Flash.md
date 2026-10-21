# Kimi K3 — findings by Gemini 3.8 Flash

- Source: moonshotai/kimi-k3
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (104B active) with native Kimi Delta Attention, 1M context input and output window, frontier multimodal document/math reasoning, and terminal-agent coding.
- **Provider / access:** Moonshot AI API, [OpenRouter](https://openrouter.ai/models/moonshotai/kimi-k3) (`moonshotai/kimi-k3`), Hugging Face open weights.
- **Release / knowledge:** July 2026 release; knowledge cutoff mid-2026.
- **IDs:** `moonshotai/kimi-k3`, `kimi-k3`
- **Context window:** 1,048,576 tokens total (1M in / 1M out).
- **Modalities:** Native multimodal input (text, images, documents, audio); text and code output.
- **Pricing (as of 2026-10-21):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M cached input); open weights available for self-hosting.
- **Architecture:** 2.8T total / 104B active MoE with Kimi Delta Attention and Attention Residuals.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **GPQA Diamond:** 93.5%
- **GDPval-AA v2 Elo:** 1,668
- **AutomationBench-AA:** Rank #1 (53%)
- **Humanity's Last Exam (HLE-Full):** 43.5%
- **SWE-bench Verified:** ~84.8%
- **Terminal-Bench 2.1:** 72.5%

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and complex function calling (AutomationBench-AA #1 at 53%, 72.5% Terminal-Bench 2.1).
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (93.5% GPQA Diamond, 43.5% HLE).
- **Context window: 98/100.** Effective retrieval fidelity and recall across full 1,048,576 token bidirectional context capacity.
- **Multimodal: 90/100.** Input modality comprehension across images, video, and dense technical documents.
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability (~84.8% SWE-bench Verified).
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 93/100.** Arithmetic mean of non-cost metrics: (92 + 94 + 98 + 90 + 92) / 5 = 93.2 → 93. Frontier 2.8-trillion parameter multimodal MoE with 1M context and top-tier agentic coding.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Moonshot AI technical reports, OpenRouter endpoints, and third-party AI benchmarks.
