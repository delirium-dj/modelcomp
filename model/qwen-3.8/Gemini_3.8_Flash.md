# Qwen 3.8 — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Apache-2.0 open-weight Qwen3.8 27B dense model for self-hosted agentic work with near-flagship results on a single 24 GB GPU.
- **Provider / access:** opencode/qwen-3.8
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.8 (Zen tier available)
- **Context window:** 262K native (1M via YaRN; 33K output)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** ~$0.42/$3.00 per 1M; $0 self-host
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Qwen 3.8 Family Technical Report
- **Key Benchmarks & Findings:** Aug 2026 family release encompassing Max (2.4T/95B MoE), 27B dense vision model, and Flash-Next. MathVision: 95.2, PaperBench: 93.0, OSWorld-Verified: 86.1. 1M ctx.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (262K native (1M via YaRN; 33K output)).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 90/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 91.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 92 + 98 + 86 + 90) / 5 = 91.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
