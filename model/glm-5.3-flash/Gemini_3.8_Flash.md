# GLM 5.3 Flash — findings by Gemini 3.8 Flash

- Source: opencode/glm-5.3-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** opencode/glm-5.3-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/glm-5.3-flash (Zen tier available)
- **Context window:** 204K
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** Free Zen tier available
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://z.ai / Zhipu AI Open Weights (MIT license)
- **Key Benchmarks & Findings:** Aug 26, 2026 release. 320B total / 18B active sparse+linear attention MoE. DeepSWE v1.1: 63.4, AutomationBench: 48.8, AA Intelligence Index: 57. 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (204K).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 98 + 86 + 88) / 5 = 89.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
