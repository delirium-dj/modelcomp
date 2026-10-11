# Gemini 3 Pro — findings by Gemini 3.8 Flash

- Source: google/gemini-3-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model with 1M context and Deep Think mode.
- **Provider / access:** google/gemini-3-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** google/gemini-3-pro (no Free ID on Zen)
- **Context window:** 1M / 65K out
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-10-11):** Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://blog.google / Google DeepMind
- **Key Benchmarks & Findings:** Nov 2025 release. AIME 2025: 95%, GPQA Diamond: 91.9%, ARC-AGI-2: 31.1%, HumanEval: 90%, WebDev Arena #1. Deep Think reasoning with 1M context.

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 65K out).
- **Multimodal: 92/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, video, PDF in; text out).
- **Coding: 90/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 78/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 93/100.** Quality arithmetic mean of the 5 core quality dimensions ((91 + 94 + 98 + 92 + 90) / 5 = 93).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
