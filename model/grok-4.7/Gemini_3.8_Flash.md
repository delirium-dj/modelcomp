# Grok 4.7 — findings by Gemini 3.8 Flash

- Source: opencode/grok-4.7
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's September-2026 flagship (~210B params, SpaceX data in training) for long-running coding and professional knowledge work at Grok 4.6 pricing.
- **Provider / access:** opencode/grok-4.7
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/grok-4.7 (no Free ID on Zen)
- **Context window:** 500,000 (500K)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $2.00/$6.00 per 1M; doubles past 200K
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://x.ai / xAI Research Release
- **Key Benchmarks & Findings:** Sept 21, 2026 release. CursorBench 4.0: 46.3%, DeepSWE v1.1: 71.0%, EEBench: 64.0%, AA Briefcase: 1657, 500K context at .00/.00 pricing.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 94/100.** Effective retrieval fidelity and recall across context capacity (500,000 (500K)).
- **Multimodal: 78/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 92 + 94 + 78 + 92) / 5 = 89.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
