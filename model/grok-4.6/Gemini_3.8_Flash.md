# Grok 4.6 — findings by Gemini 3.8 Flash

- Source: xai/grok-4.6
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work.
- **Provider / access:** xai/grok-4.6
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** xai/grok-4.6 (no Free ID on Zen)
- **Context window:** 500,000
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-10-11):** Paid $2/$6 per 1M (cached $0.50); doubles above 200K prompt
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://x.ai / xAI Research Release
- **Key Benchmarks & Findings:** Aug 12, 2026 release. AA Intelligence Index: 61, GDPVal-AA v2: 1753, CursorBench v3.2: 69.9%, DeepSWE v1.1: 65.9%, FrontierCode: 61.3%. 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (500,000).
- **Multimodal: 76/100.** Input/output modality comprehension across images, audio, documents, and video (Text and image in; text out).
- **Coding: 89/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 80/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 90 + 98 + 76 + 89) / 5 = 88.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
