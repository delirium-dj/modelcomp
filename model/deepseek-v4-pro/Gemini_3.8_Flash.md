# DeepSeek V4 Pro — findings by Gemini 3.8 Flash

- Source: opencode/deepseek-v4-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's 1.6T/49B MIT open-weights flagship MoE for reasoning and software engineering; frontier-adjacent coding at a fraction of flagship price.
- **Provider / access:** opencode/deepseek-v4-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/deepseek-v4-pro (no Free ID on Zen)
- **Context window:** 1,000,000 total (up to 384K out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** Paid ~$0.66–$1.74/$1.98–$3.96 per 1M; MIT self-host free
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://deepseek.com / DeepSeek V4-Pro Technical Report
- **Key Benchmarks & Findings:** August 13, 2026 release. 1.6T total / 49B active MoE with Hybrid Attention. HLE (tools): 60.0, Terminal Bench 2.1: 87.9, DeepSWE: 62.7, Toolathlon: 74.1, 1M context.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total (up to 384K out)).
- **Multimodal: 78/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 90 + 98 + 78 + 88) / 5 = 88.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
