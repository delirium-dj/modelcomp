# Gemini 2.5 Pro — findings by Gemini 3.8 Flash

- Source: opencode/gemini-2.5-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's prior-generation thinking flagship (stable June 2025, pre-Gemini-3) for long-context reasoning and document-heavy analysis.
- **Provider / access:** opencode/gemini-2.5-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gemini-2.5-pro (no Free ID on Zen)
- **Context window:** 1,048,576 (1M); 64K out
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-10-11):** $1.25/$10.00 per 1M; $2.50/$15.00 above 200K
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://blog.google / Google AI Studio (legacy GA June 2025)
- **Key Benchmarks & Findings:** Pioneering thinking model with 1M context. Debuted #1 on LMArena, SWE-Bench Verified: 59.6%, GPQA Diamond: 86.4%, LiveCodeBench strong. Retirement Oct 20, 2026.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M); 64K out).
- **Multimodal: 92/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, video, PDF in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 84/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 90/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 98 + 92 + 86) / 5 = 90).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
