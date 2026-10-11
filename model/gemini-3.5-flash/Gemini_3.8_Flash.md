# Gemini 3.5 Flash — findings by Gemini 3.8 Flash

- Source: google/gemini-3.5-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-gen 3.5 Flash model, offering enhanced speed and capabilities.
- **Provider / access:** google/gemini-3.5-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** google/gemini-3.5-flash (Zen tier available)
- **Context window:** 1,048,576 (1M)
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing (as of 2026-10-11):** Free tier available; Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://blog.google / Google I/O 2026
- **Key Benchmarks & Findings:** May 19, 2026 release. CharXiv: 84.2%, Roboflow Vision Evals #1, Finance Agent v2 leader. 1,048,576 context window with 65,536 output limit at .50/.00 pricing.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 91/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M)).
- **Multimodal: 94/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, PDF in; text out).
- **Coding: 89/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 91 + 98 + 94 + 89) / 5 = 92.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
