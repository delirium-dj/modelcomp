# ByteDance Seed 2.0 Pro — findings by Gemini 3.8 Flash

- Source: deepinfra/ByteDance/Seed-2.0-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's frontier multimodal reasoning model with 256K context and strong math/visual-reasoning capabilities.
- **Provider / access:** deepinfra/ByteDance/Seed-2.0-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** deepinfra/ByteDance/Seed-2.0-pro (no Free ID on Zen)
- **Context window:** 256K / 65K out
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://volcengine.com / Volcano Engine Doubao API
- **Key Benchmarks & Findings:** Feb 14, 2026 release. AIME 2025: 98.3, LiveCodeBench v6: 87.8, SWE-Bench Verified: 76.5%, Codeforces: 3020, 256K context native multimodal.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (256K / 65K out).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 87/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((85 + 90 + 82 + 88 + 87) / 5 = 86.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
