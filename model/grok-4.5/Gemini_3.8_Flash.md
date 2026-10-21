# Grok 4.5 — findings by Gemini 3.8 Flash

- Source: opencode/grok-4.5
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 2026 flagship for token-efficient agentic coding and knowledge work, co-developed with Cursor; Opus-class capability at mid-range price.
- **Provider / access:** opencode/grok-4.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/grok-4.5 (no Free ID on Zen)
- **Context window:** 500,000 (500K; up to 450K out)
- **Modalities:** Text, image, file in; text out
- **Pricing (as of 2026-10-11):** Paid $2.00/$6.00 per 1M; $0.30 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://x.ai / xAI Research Release
- **Key Benchmarks & Findings:** July 8, 2026 release. GDPval+ leader at launch; Terminal-Bench 2.1: 83.3%, SWE Bench Pro: 64.7%, DeepSWE 1.1: 53%, AA Index: 56. 500K context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 94/100.** Effective retrieval fidelity and recall across context capacity (500,000 (500K; up to 450K out)).
- **Multimodal: 76/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, file in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 94 + 76 + 88) / 5 = 86.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
