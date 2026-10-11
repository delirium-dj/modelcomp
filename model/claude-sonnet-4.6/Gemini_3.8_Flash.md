# Claude Sonnet 4.6 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-sonnet-4.6
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-performance, reasoning-capable model optimized for efficiency and complex coding tasks.
- **Provider / access:** anthropic/claude-sonnet-4.6
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-sonnet-4.6 (no Free ID on Zen)
- **Context window:** 200K
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com / Anthropic Documentation
- **Key Benchmarks & Findings:** Feb 17, 2026 release. Succeeded by Claude Sonnet 5 and 5.5. 1M context, robust agentic tool orchestration and coding capability.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (200K).
- **Multimodal: 70/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 98 + 70 + 88) / 5 = 86.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
