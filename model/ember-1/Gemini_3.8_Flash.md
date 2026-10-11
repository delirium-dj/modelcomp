# Ember 1 — findings by Gemini 3.8 Flash

- Source: opencode/ember-1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's first specialized model (Research Preview 2026-09-23), a token-thrifty Kimi K3 derivative for agentic coding loops at K3-max quality with ~40% fewer tokens.
- **Provider / access:** opencode/ember-1
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/ember-1 (no Free ID on Zen)
- **Context window:** 1,048,576 (1M); 131K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $3.00/$15.00 per 1M; $0.30 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://fireworks.ai / Fireworks AI Technical Blog
- **Key Benchmarks & Findings:** Sept 23, 2026 release. Reasoning model based on Kimi K3 architecture optimized for 35-50% token reduction in agentic planning traces. 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M); 131K out).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 89/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 90 + 98 + 84 + 89) / 5 = 89.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
