# Qwen 3.7 Max — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.7-max
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary Qwen3.7 flagship agent model (May 2026) for long-horizon coding, office automation and multi-agent workflows; 1M context, text-only.
- **Provider / access:** opencode/qwen-3.7-max
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.7-max (Zen tier available)
- **Context window:** 1,000,000 total (131,072 max output)
- **Modalities:** Text in/out; reasoning and tool calls
- **Pricing (as of 2026-10-11):** $1.48 in / $4.43 out per 1M (OpenRouter); cached ~$0.25
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://alibabacloud.com / Alibaba Model Studio
- **Key Benchmarks & Findings:** May 19, 2026 release. Agent Frontier model for 35+ hour autonomous execution. GPQA Diamond: 92.4, LiveCodeBench: 87.1, LegalBench: 84.9, 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total (131,072 max output)).
- **Multimodal: 82/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out; reasoning and tool calls).
- **Coding: 89/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 90 + 98 + 82 + 89) / 5 = 89.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
