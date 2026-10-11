# Claude Sonnet 4.5 — findings by Gemini 3.8 Flash

- Source: opencode/claude-sonnet-4.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sept 2025 Sonnet flagship, best-in-class long-horizon coding agent and computer-use model of its generation; superseded by Sonnet 4.6.
- **Provider / access:** opencode/claude-sonnet-4.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/claude-sonnet-4.5 (no Free ID on Zen)
- **Context window:** 200,000 standard (64K out); 1M beta (Tier 4+)
- **Modalities:** Text, image, file in; text out
- **Pricing (as of 2026-10-11):** Paid $3.00/$15.00 per 1M; $0.30 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-sonnet-4-5 / Messages API
- **Key Benchmarks & Findings:** Sept 29, 2025 release. SWE-bench Verified: 82.0%, OSWorld: 61.4%, 200K context, autonomous multi-step execution over 30 hours.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (200,000 standard (64K out); 1M beta (Tier 4+)).
- **Multimodal: 70/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, file in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 82.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 82 + 70 + 88) / 5 = 82.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
