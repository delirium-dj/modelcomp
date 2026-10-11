# GPT-6 Luna — findings by Gemini 3.8 Flash

- Source: openai/gpt-6-luna
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family delivering near-frontier DeepSWE at a fraction of the cost.
- **Provider / access:** openai/gpt-6-luna
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** openai/gpt-6-luna (no Free ID on Zen)
- **Context window:** 1M tokens
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** Sept 2026 release. High-volume lightweight entry in GPT-6 family. 1.05M ctx / 128K out, AutomationBench 1.0.6 +5.4% over 5.6 Luna at .10/.50 pricing.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M tokens).
- **Multimodal: 75/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 86 + 98 + 75 + 86) / 5 = 86.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
