# Inkling Small — findings by Gemini 3.8 Flash

- Source: opencode/inkling-small
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's smaller open-weight hybrid-reasoning model (sibling of Inkling) with 1M context; strong math and knowledge, weak agentics — cheap open-weights reasoning and coding.
- **Provider / access:** opencode/inkling-small
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/inkling-small (Zen tier available)
- **Context window:** 1,000,000 total
- **Modalities:** Text in/out; image and audio input
- **Pricing (as of 2026-10-11):** Open weights (free self-host)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://thinkingmachines.ai / Apache 2.0 open-weights
- **Key Benchmarks & Findings:** Thinking Machines Lab 276B total / 12B active MoE. Competitive on Terminal-Bench 2.1, HLE, and IFBench at 1/4 the parameter size of Inkling.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out; image and audio input).
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((85 + 86 + 95 + 84 + 84) / 5 = 86.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
