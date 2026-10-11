# Claude Opus 4.6 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-opus-4.6
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with thinking capabilities for complex, multi-step tasks.
- **Provider / access:** anthropic/claude-opus-4.6
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-opus-4.6 (no Free ID on Zen)
- **Context window:** 200K
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-opus-4-6 / Messages API
- **Key Benchmarks & Findings:** Feb 5, 2026 release. Terminal-Bench 2.0: 65.4%, OSWorld: 72.7%, BrowseComp: 84.0%, ARC AGI 2: 68.8%, SWE-bench Verified: 80.8%. 1M context.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (200K).
- **Multimodal: 72/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 91/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 45/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 92 + 98 + 72 + 91) / 5 = 88.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
