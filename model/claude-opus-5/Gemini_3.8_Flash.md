# Claude Opus 5 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-opus-5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding and research runs, with 1M context.
- **Provider / access:** anthropic/claude-opus-5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-opus-5 (no Free ID on Zen)
- **Context window:** 1M / 128K out
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-10-11):** Paid $5/$25 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-opus-5 / Legacy flagship
- **Key Benchmarks & Findings:** July 24, 2026 release. ARC-AGI-3: 30.2%, SWE-bench Verified: 96.0%, OSWorld 2.0: 70.57%, Frontier-Bench: 43.3%. Succeeded by Opus 5.5.

### Normalized scores (1–100)

- **Tool use: 94/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 128K out).
- **Multimodal: 74/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, PDF in; text out).
- **Coding: 95/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 45/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 91.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((94 + 95 + 98 + 74 + 95) / 5 = 91.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
