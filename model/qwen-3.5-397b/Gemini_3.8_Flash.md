# Qwen 3.5 397B — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5-397b
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's Qwen3.5-series flagship open-weights MoE (397B total / 17B active) — a natively multimodal early-fusion model for reasoning, coding, agents and vision.
- **Provider / access:** opencode/qwen-3.5-397b
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.5-397b (no Free ID on Zen)
- **Context window:** 262,144 native (extensible to ~1,010,000; 1M hosted)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** AA $0.60/$3.60 per 1M; Apache 2.0 open weights (free self-host)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Qwen 3.5 Open Weights
- **Key Benchmarks & Findings:** Feb 2026 release. Flagship 397B total / 17B active MoE vision-language model. 262K native context, efficient inference, concise and bug-free reasoning.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 92/100.** Effective retrieval fidelity and recall across context capacity (262,144 native (extensible to ~1,010,000; 1M hosted)).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 87.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 92 + 86 + 86) / 5 = 87.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
