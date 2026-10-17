# Claude Opus 5.5 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-opus-5-5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family and enterprise Opus workhorse with adaptive thinking and 1M context.
- **Provider / access:** anthropic/claude-opus-5-5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-opus-5-5 (no Free ID on Zen)
- **Context window:** 1M / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-opus-5-5 / Messages API
- **Key Benchmarks & Findings:** Sept 22, 2026 release. SWE-bench Pro: 89.9%, Terminal-Bench 4.0: 66.4%, always-on adaptive thinking, 1M context with 128K output. .00/.00 pricing.

### Normalized scores (1–100)

- **Tool use: 96/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 96/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 128K out).
- **Multimodal: 75/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 97/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 58/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((96 + 96 + 98 + 75 + 97) / 5 = 92.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
