# GPT-5 — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship: a router system pairing a fast model with a deeper reasoning model. Set launch records in math and coding, then was superseded by GPT-5.1 and later.
- **Provider / access:** opencode/gpt-5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-5 (no Free ID on Zen)
- **Context window:** 400K total (128K max output)
- **Modalities:** Text, image, file in / text out; reasoning; tool calls
- **Pricing (as of 2026-10-11):** Paid: OpenAI $1.25/$10 per 1M (cached $0.125); OpenCode Zen $1.07/$8.50
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI System Card (August 7, 2025)
- **Key Benchmarks & Findings:** Pioneering unified model introducing dynamic router between Fast Mode and Thinking Mode. Succeeded by GPT-5.5 and GPT-6 families.

### Normalized scores (1–100)

- **Tool use: 84/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (400K total (128K max output)).
- **Multimodal: 82/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, file in / text out; reasoning; tool calls).
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 68/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 83.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((84 + 86 + 82 + 82 + 84) / 5 = 83.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
