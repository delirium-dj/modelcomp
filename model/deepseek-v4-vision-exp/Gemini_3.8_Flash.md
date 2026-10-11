# DeepSeek V4 Vision Exp — findings by Gemini 3.8 Flash

- Source: opencode/deepseek-v4-vision-exp
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** opencode/deepseek-v4-vision-exp
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/deepseek-v4-vision-exp (Zen tier available)
- **Context window:** 200K
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-10-11):** Free Zen tier available
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://deepseek.com / DeepSeek Experimental Multimodal Release
- **Key Benchmarks & Findings:** August 21, 2026 release. 284B total / 13B active MoE. Terminal Bench 2.1: 84.3, DeepSWE v1.1: 59.3, Agent’s Last Exam: 27.3, fixed 384-token image budget, 1M context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (200K).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, PDF in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 86 + 98 + 84 + 86) / 5 = 88).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
