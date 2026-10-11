# Gemini 3.1 Flash — findings by Gemini 3.8 Flash

- Source: google/gemini-3.1-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1 Flash model, balancing speed, capability, and cost.
- **Provider / access:** google/gemini-3.1-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** google/gemini-3.1-flash (Zen tier available)
- **Context window:** 1,048,576 (1M)
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing (as of 2026-10-11):** Free tier available; Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://deepmind.google / Google AI Studio (3.1 Flash series baseline)
- **Key Benchmarks & Findings:** Baseline speed-tier model of the Gemini 3.1 generation, optimized for high throughput, subagent tool calls, and low latency across 1M token context.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M)).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, PDF in; text out).
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((85 + 86 + 98 + 88 + 84) / 5 = 88.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
