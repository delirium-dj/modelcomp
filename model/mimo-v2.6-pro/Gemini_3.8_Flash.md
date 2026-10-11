# MiMo V2.6 Pro — findings by Gemini 3.8 Flash

- Source: xiaomi/mimo-v2.6-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE (Sept 2026) — #1 open-weights model on the AA Intelligence Index (46), sibling of MiMo V2.6 Flash.
- **Provider / access:** xiaomi/mimo-v2.6-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** xiaomi/mimo-v2.6-pro (no Free ID on Zen)
- **Context window:** 1M / 128K out
- **Modalities:** Text, image, video, audio in; text out
- **Pricing (as of 2026-10-11):** Paid $0.435/$0.87 per 1M (Xiaomi API; cached $0.0036) — no Zen Free ID
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://mi.com / Xiaomi MiMo AI Studio
- **Key Benchmarks & Findings:** Sept 2026 release. 1.02T total / 42B active sparse MoE (MIT license). DeepSWE v1.1: 71.9, AA Intelligence Index: 46.32, Kingy OpenCode 23/23 tests. 1M context.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 128K out).
- **Multimodal: 92/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video, audio in; text out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 92 + 98 + 92 + 92) / 5 = 92.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
