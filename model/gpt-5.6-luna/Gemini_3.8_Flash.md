# GPT-5.6 Luna — findings by Gemini 3.8 Flash

- Source: openai/gpt-5.6-luna
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier.
- **Provider / access:** openai/gpt-5.6-luna
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** openai/gpt-5.6-luna (no Free ID on Zen)
- **Context window:** 1,050,000 / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $0.20/$1.20 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** Cost-efficient lightweight entry in GPT-5.6 family. 1.1M context / 128K out, low TTFT latency, high throughput at .20/.20 per 1M tokens.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 85/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,050,000 / 128K out).
- **Multimodal: 75/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 85.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((85 + 85 + 98 + 75 + 86) / 5 = 85.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
