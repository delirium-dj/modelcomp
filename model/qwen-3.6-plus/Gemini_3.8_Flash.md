# Qwen 3.6 Plus — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.6-plus
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's April-2026 hosted Qwen flagship with a tilt to real-world agents: repository-level coding and front-end/vibe coding at low cost.
- **Provider / access:** opencode/qwen-3.6-plus
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.6-plus (no Free ID on Zen)
- **Context window:** 1,000,000 (1M); 65K out
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** $0.50/$3.00 per 1M (<=256K)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Cloud Model Studio
- **Key Benchmarks & Findings:** April 2, 2026 release. Linear attention + sparse MoE hybrid with 1M context. SWE-bench Verified: 78.8%, Terminal Bench 2.0: 61.6%, GPQA Diamond: 90.4%.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 (1M); 65K out).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 98 + 84 + 86) / 5 = 88.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
