# GPT-5.2 — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5.2
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December-2025 Thinking-tier flagship family (Instant/Thinking/Pro) for professional knowledge work and multi-language code fixing.
- **Provider / access:** opencode/gpt-5.2
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-5.2 (no Free ID on Zen)
- **Context window:** 400,000 (400K); 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $1.75/$14.00 per 1M; $0.175 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** Dec 11, 2025 release. Thinking and Pro variants. GDPval: 70.9%, SWE-Bench Pro: 55.6%, GPQA Diamond: 92.4%, AIME 2025: 100%, 400K context / 128K out.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 89/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 86/100.** Effective retrieval fidelity and recall across context capacity (400,000 (400K); 128K out).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 68/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 89 + 86 + 84 + 86) / 5 = 86.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
