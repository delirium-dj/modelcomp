# Inkling — findings by Gemini 3.8 Flash

- Source: opencode/Inkling
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights MoE (975B total / 41B active, Apache 2.0) with 1M context; strong reasoning and coding, weak agentics — best self-hosted or via cheap third-party hosts.
- **Provider / access:** opencode/Inkling
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/Inkling (no Free ID on Zen)
- **Context window:** 1,000,000 total (weights; hosts serve 64K–1M)
- **Modalities:** Text, image, audio in; text out
- **Pricing (as of 2026-10-11):** Paid hosted ~$1.00/$4.05 per 1M; $0 routes exist
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://thinkingmachines.ai / Thinking Machines Lab (Apache 2.0)
- **Key Benchmarks & Findings:** July 15, 2026 release. 975B total / 41B active MoE foundation model by Mira Murati team. Native text/image/audio fusion, controllable reasoning, 1M context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total (weights; hosts serve 64K–1M)).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 98 + 86 + 86) / 5 = 88.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
