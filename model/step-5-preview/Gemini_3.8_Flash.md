# Step 5 Preview — findings by Gemini 3.8 Flash

- Source: opencode/step-5-preview
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model — 600B-total/27B-active sparse MoE with 1M context; near-frontier coding at $1.00/$2.70 per MTok.
- **Provider / access:** opencode/step-5-preview
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/step-5-preview (Zen tier available)
- **Context window:** 1M total (1,000,000 in / 64K out)
- **Modalities:** Text, image, video in; text out (tool calling, JSON mode, reasoning effort control)
- **Pricing (as of 2026-10-11):** $1.00/$2.70 per MTok ($0.05 cache hit); free V0 eval tier
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://stepfun.com / StepFun API
- **Key Benchmarks & Findings:** StepFun 600B total / 27B active MoE. KingBench agent tasks: 83.75%, AA Intelligence Index: 44, HLE: 46.5%, AA-LCR: 88.3%. 1M context, 64K out.

### Normalized scores (1–100)

- **Tool use: 83/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 81/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1M total (1,000,000 in / 64K out)).
- **Multimodal: 78/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out (tool calling, JSON mode, reasoning effort control)).
- **Coding: 83/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 84/100.** Quality arithmetic mean of the 5 core quality dimensions ((83 + 81 + 95 + 78 + 83) / 5 = 84).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
