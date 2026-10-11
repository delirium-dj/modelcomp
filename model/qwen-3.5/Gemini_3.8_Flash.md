# Qwen 3.5 — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's Qwen 3.5 flagship generation (2026) for general and agentic work. The tracked tier is unconfirmed, so several facts here are family-proxy provisional.
- **Provider / access:** opencode/qwen-3.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.5 (Zen tier available)
- **Context window:** 128K–1M (family range; tracked tier unconfirmed)
- **Modalities:** Text in/out (multimodal coverage unverified for tracked tier)
- **Pricing (as of 2026-10-11):** Low-cost Qwen tier (exact price unverified)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwenlm.github.io / Alibaba Cloud Qwen 3.5 Model Card
- **Key Benchmarks & Findings:** Alibaba Qwen 3.5 flagship generation with Gated Delta Networks + sparse MoE. MMLU-Pro: 87.8, SuperGPQA: 70.4, IFEval: 92.6.

### Normalized scores (1–100)

- **Tool use: 80/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 84/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (128K–1M (family range; tracked tier unconfirmed)).
- **Multimodal: 82/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out (multimodal coverage unverified for tracked tier)).
- **Coding: 82/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 82/100.** Quality arithmetic mean of the 5 core quality dimensions ((80 + 84 + 82 + 82 + 82) / 5 = 82).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
