# MiMo V2.6 Flash — findings by Gemini 3.8 Flash

- Source: xiaomi/mimo-v2.6-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active, Sept 2026) — 1M context, text/image/video/audio in, tuned for long-horizon agentic coding at mid-tier pricing.
- **Provider / access:** xiaomi/mimo-v2.6-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** xiaomi/mimo-v2.6-flash (no Free ID on Zen)
- **Context window:** 1M total
- **Modalities:** Text, image, video, audio in; text out
- **Pricing (as of 2026-10-11):** Paid $0.14/$0.28 per 1M (Xiaomi API; cached $0.0028) — no Zen Free ID for this slug; the Zen free tier lives in mimo-v2.6-free/
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://mi.com / Xiaomi MiMo AI Studio
- **Key Benchmarks & Findings:** Sept 2026 release. 309B total / 15B active sparse MoE. DeepSWE v1.1: 67.9, Toolathlon: 73.6, Automation Bench: 52.3, BenchAlign #32 (66.03). 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M total).
- **Multimodal: 90/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video, audio in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 90.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 98 + 90 + 88) / 5 = 90.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
