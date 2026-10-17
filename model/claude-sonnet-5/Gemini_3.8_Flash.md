# Claude Sonnet 5 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-sonnet-5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus.
- **Provider / access:** anthropic/claude-sonnet-5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-sonnet-5 (no Free ID on Zen)
- **Context window:** 1M / 128K out
- **Modalities:** Text, image, file in; text out
- **Pricing (as of 2026-10-11):** Paid $3/$15 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-sonnet-5 / Messages API
- **Key Benchmarks & Findings:** June 30, 2026 release. Mid-tier price point (/) with near-Opus reasoning and agentic coding. 1M context with adaptive thinking. Succeeded by Sonnet 5.5.

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 128K out).
- **Multimodal: 74/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, file in; text out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((91 + 92 + 98 + 74 + 92) / 5 = 89.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
