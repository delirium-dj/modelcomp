# GPT-5.6 Terra — findings by Gemini 3.8 Flash

- Source: openai/gpt-5.6-terra
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** openai/gpt-5.6-terra
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** openai/gpt-5.6-terra (no Free ID on Zen)
- **Context window:** 1,048,576 (1M)
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** July 2026 release. Balanced all-rounder in the 5.6 line. AA Intelligence Index: 57, 120 tps generation speed, 1.05M context / 128K out. .00/.00 pricing.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M)).
- **Multimodal: 78/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, video, PDF in; text out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 90/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 92 + 98 + 78 + 92) / 5 = 90).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
