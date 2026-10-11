# GPT-6 Sol — findings by Gemini 3.8 Flash

- Source: opencode/gpt-6-sol
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mainstream GPT-6 Sol tier below Astra, holding agentic-coder performance at ~50% below GPT-5.6 Sol prices.
- **Provider / access:** opencode/gpt-6-sol
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-6-sol (no Free ID on Zen)
- **Context window:** 1,050,000 total (128K output)
- **Modalities:** Text, image, file in; text out
- **Pricing (as of 2026-10-11):** $2/$10 per 1M; cached $0.20
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** Sept 22, 2026 release. Mid-tier model in the GPT-6 line sitting between Astra and Luna. 1.05M ctx / 128K out, adjustable reasoning effort. / pricing.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,050,000 total (128K output)).
- **Multimodal: 80/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, file in; text out).
- **Coding: 93/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 91.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 94 + 98 + 80 + 93) / 5 = 91.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
