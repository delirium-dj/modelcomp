# Gemini 4 Argon — findings by Gemini 3.8 Flash

- Source: opencode/gemini-4-argon
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4 flagship for long-horizon software engineering, enterprise knowledge work, and defensive cybersecurity.
- **Provider / access:** opencode/gemini-4-argon
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gemini-4-argon (no Free ID on Zen)
- **Context window:** 1M total (262K output; 1M via continuation)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** Intro $2/$10 per 1M; then $4/$20
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://blog.google / Fairwind Program
- **Key Benchmarks & Findings:** Sept 30, 2026 preview. 1,000,000 max output ceiling, DeepSWE v1.1: 77.9%, Vals Index: 68.9%, Zapier Automation: 51.29%, AA Index: 53. / intro pricing.

### Normalized scores (1–100)

- **Tool use: 94/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 96/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 100/100.** Effective retrieval fidelity and recall across context capacity (1M total (262K output; 1M via continuation)).
- **Multimodal: 94/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 93/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 70/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 95.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((94 + 96 + 100 + 94 + 93) / 5 = 95.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
