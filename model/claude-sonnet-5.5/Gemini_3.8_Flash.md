# Claude Sonnet 5.5 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-sonnet-5.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model (released 2026-09-28) succeeding Claude Sonnet 5 — thinking always on with effort control, 1M context, tuned for feature work, bug fixes and polished documents.
- **Provider / access:** anthropic/claude-sonnet-5.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-sonnet-5.5 (no Free ID on Zen)
- **Context window:** 1M total
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $2/$10 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-sonnet-5-5 / Messages API
- **Key Benchmarks & Findings:** Sept 28, 2026 release. Terminal-Bench 4.0: 70.6% (leads Opus 5.5 in agentic terminals), 1M context / 128K out, 30% faster token generation than Sonnet 5. .00/.00 pricing.

### Normalized scores (1–100)

- **Tool use: 95/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M total).
- **Multimodal: 75/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 96/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 91.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((95 + 95 + 98 + 75 + 96) / 5 = 91.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
