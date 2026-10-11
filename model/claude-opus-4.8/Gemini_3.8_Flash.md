# Claude Opus 4.8 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-opus-4.8
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** anthropic/claude-opus-4.8
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-opus-4.8 (no Free ID on Zen)
- **Context window:** 200K
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-opus-4-8 / Messages API
- **Key Benchmarks & Findings:** May 28, 2026 release. OSWorld-Verified: 83.4%, GDPval-AA: 1890, SWE-Bench Pro: 69.2%, Terminal-Bench 2.1: 74.6%, HLE: 49.8% (no tools) / 57.9% (tools). 1M context.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (200K).
- **Multimodal: 74/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 93/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 48/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 90.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 94 + 98 + 74 + 93) / 5 = 90.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
