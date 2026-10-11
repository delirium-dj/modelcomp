# Qwen 3.8 Flash — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's multimodal MoE technical preview (~6B active) with 1M context for cheap agentic coding at near-free pricing.
- **Provider / access:** opencode/qwen-3.8-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.8-flash (Zen tier available)
- **Context window:** 1M API (262K native; 131K output)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** ~$0.15/$0.47 per 1M; $0 self-host
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwenlm.github.io / Alibaba Cloud Model Studio
- **Key Benchmarks & Findings:** Late August 2026 release. 125B total / ~6B active MoE preview for Qwen 4. SWE-bench Pro: 62.5%, LiveCodeBench: 91.9%, GPQA Diamond: 91.7%, 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M API (262K native; 131K output)).
- **Multimodal: 82/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 98 + 82 + 88) / 5 = 88.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
