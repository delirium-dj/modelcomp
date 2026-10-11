# GPT-6 Astra — findings by Gemini 3.8 Flash

- Source: openai/gpt-6-astra
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship above GPT-5.6 Sol with 1.05M context, staged rollout from Trusted Access programs, built for frontier reasoning and agents.
- **Provider / access:** openai/gpt-6-astra
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** openai/gpt-6-astra (no Free ID on Zen)
- **Context window:** 1,050,000 (1M) / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $10/$50 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com/index/gpt-6-astra / OpenAI API
- **Key Benchmarks & Findings:** Sept 2026 release. ARC-AGI-3: 99.9% (adapter) / 62.7% (standard), FrontierMath: 97.6%, ExploitBench: 100%, DeepSWE: 73.5%. / pricing.

### Normalized scores (1–100)

- **Tool use: 95/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 96/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,050,000 (1M) / 128K out).
- **Multimodal: 78/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 94/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 35/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((95 + 96 + 98 + 78 + 94) / 5 = 92.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
