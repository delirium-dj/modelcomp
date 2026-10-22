# Mistral Large 4 — findings by Gemini 3.8 Flash

- Source: opencode/mistral-large-4
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use.
- **Provider / access:** opencode/mistral-large-4
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/mistral-large-4 (no Free ID on Zen)
- **Context window:** 131,072 total (32,768 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $2.00 / $6.00 per 1M tokens (Mistral AI)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://mistral.ai/news/mistral-large-4 / Mistral Studio API Preview
- **Key Benchmarks & Findings:** Mistral AI 1.05T total / 49-52B active MoE with 1.6B vision encoder. Cybench: 93%, DeepSWE v1.1: 61.7%, AutomationBench: 59.9%.

### Normalized scores (1–100)

- **Tool use: 82/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 80/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 88/100.** Effective retrieval fidelity and recall across context capacity (131,072 total (32,768 out)).
- **Multimodal: 74/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out).
- **Coding: 82/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 82/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 81.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((82 + 80 + 88 + 74 + 82) / 5 = 81.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
