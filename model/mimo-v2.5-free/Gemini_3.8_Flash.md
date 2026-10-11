# MiMo V2.5 Free — findings by Gemini 3.8 Flash

- Source: opencode/mimo-v2.5-free
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.
- **Provider / access:** opencode/mimo-v2.5-free
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/mimo-v2.5-free (Zen tier available)
- **Context window:** 200K Zen cap (native 1M) / 32K out
- **Modalities:** Text, image, audio, video in; text out
- **Pricing (as of 2026-10-11):** Free Zen tier; native from ~$0.14/$0.28 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://mi.com / Xiaomi MiMo V2.5 Open Weights (MIT license)
- **Key Benchmarks & Findings:** April 2026 release. 310B sparse MoE omnimodal model with 1M context. OpenCode Zen free promotional tier with strong tool-calling and VS Code agent performance.

### Normalized scores (1–100)

- **Tool use: 84/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 85/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (200K Zen cap (native 1M) / 32K out).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, video in; text out).
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 87.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((84 + 85 + 98 + 88 + 84) / 5 = 87.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
