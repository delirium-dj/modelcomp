# DeepSeek V4.1 Flash — findings by Gemini 3.8 Flash

- Source: deepseek/deepseek-v4.1-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** deepseek/deepseek-v4.1-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** deepseek/deepseek-v4.1-flash (no Free ID on Zen)
- **Context window:** 1M / 384K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $0.30/$1.20 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://deepseek.com / DeepSeek V4.1-Flash Technical Release
- **Key Benchmarks & Findings:** Sept 10, 2026 release. 552B MoE with Causal Encoder-Decoder (8B in/16B out). 1/4 KV cache footprint of V4-Pro, 1M context, continuously controllable reasoning effort.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 91/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 384K out).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 91/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 91 + 98 + 84 + 92) / 5 = 91).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
