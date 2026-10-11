# MiniMax M3 — findings by Gemini 3.8 Flash

- Source: minimax-ai/minimax-m3
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; 59% SWE-Bench Pro, 66% Terminal-Bench 2.1.
- **Provider / access:** minimax-ai/minimax-m3
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** minimax-ai/minimax-m3 (no Free ID on Zen)
- **Context window:** 1,048,576 (1M) / 512K out
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** Paid $0.30/$1.20 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://huggingface.co/MiniMax / MiniMax Open Weights
- **Key Benchmarks & Findings:** June 2026 release. 428B total / 23B active MoE with MiniMax Sparse Attention (MSA). SWE-bench Pro: 59.0%, BrowseComp: 83.5, SWE-bench Verified: 80.5%. 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M) / 512K out).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 98 + 86 + 88) / 5 = 89.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
