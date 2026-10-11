# Qwen 3.8 Max — findings by Gemini 3.8 Flash

- Source: alibaba/qwen3-8-max
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value.
- **Provider / access:** alibaba/qwen3-8-max
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** alibaba/qwen3-8-max (no Free ID on Zen)
- **Context window:** 1M / 131K out
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** Paid $2/$6 per 1M (one-time 1M-token free quota, no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://alibabacloud.com / Alibaba Model Studio
- **Key Benchmarks & Findings:** Aug 3, 2026 release. 2.4T total / 95B active MoE. GPQA Diamond: 92.6, PaperBench: 93.0, Terminal-Bench 2.1: 86.6, OSWorld-Verified: 86.1, SWE-bench Pro: 67.7. 1M context.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 131K out).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 91/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 94 + 98 + 86 + 91) / 5 = 92.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
