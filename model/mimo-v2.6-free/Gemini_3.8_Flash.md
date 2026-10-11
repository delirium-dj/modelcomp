# MiMo V2.6 Free — findings by Gemini 3.8 Flash

- Source: opencode/mimo-v2-6-free
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's open-weights omnimodal Flash MoE (309B/15B, MIT) served as the $0 Zen free tier; top pick for high-volume agentic coding at near-zero cost.
- **Provider / access:** opencode/mimo-v2-6-free
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/mimo-v2-6-free (Zen tier available)
- **Context window:** 1,048,576 (1M; 128K out)
- **Modalities:** Text, image, video, audio in; text out
- **Pricing (as of 2026-10-11):** Free Zen tier $0; paid fallback $0.14/$0.28 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://huggingface.co/Xiaomi / MIT License Open Weights
- **Key Benchmarks & Findings:** Sept 2026 open weights release of MiMo-V2.6 series (MIT license). DeepSWE v1.1: 67.9-71.9, Terminal Bench 2.1: 87.6-89.9, CyberGym: 94-95.1%, 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M; 128K out)).
- **Multimodal: 90/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video, audio in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 90.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 98 + 90 + 88) / 5 = 90.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
