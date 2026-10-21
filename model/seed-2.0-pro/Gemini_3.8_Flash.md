# ByteDance Seed 2.0 Pro — findings by Gemini 3.8 Flash

- Source: deepinfra/ByteDance/Seed-2.0-pro
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's frontier multimodal reasoning model with 256K context and strong math/visual-reasoning capabilities.
- **Provider / access:** deepinfra/ByteDance/Seed-2.0-pro
- **Release / knowledge:** 2026 release; verified via official Volcano Engine documentation & independent evaluations.
- **IDs:** deepinfra/ByteDance/Seed-2.0-pro (no Free ID on Zen)
- **Context window:** 256K / 65K out
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-21):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://volcengine.com / Volcano Engine Doubao API / https://evolink.ai
- **Key Benchmarks & Findings:** Released Feb 2026. AIME 2025: 98.3, AIME 2026: 94.2, LiveCodeBench v6: 87.8, SWE-bench Verified: 76.5%, Codeforces: 3020, GPQA Diamond: 88.9%, MMMU: 85.4%, Humanity's Last Exam (HLE): 32.4%, native 256K context multimodal.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (AIME 2025 98.3, GPQA Diamond 88.9%).
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (256K / 65K out).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (MMMU 85.4%).
- **Coding: 87/100.** Verified software engineering, repository refactoring, and code generation capability (SWE-bench Verified 76.5%, LiveCodeBench 87.8).
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86/100.** Quality arithmetic mean of the 5 core quality dimensions ((85 + 90 + 82 + 88 + 87) / 5 = 86.4 rounded to 86).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
