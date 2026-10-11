# Claude Haiku 5.5 — findings by Gemini 3.8 Flash

- Source: opencode/claude-haiku-5.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest Claude 5.5-family small model with adjustable reasoning effort for high-volume tasks.
- **Provider / access:** opencode/claude-haiku-5.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/claude-haiku-5.5 (Zen tier available)
- **Context window:** 1,000,000 total (128K max output)
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-10-11):** $0.10/$0.50 per 1M in/out (prompts ≤100K), $0.50/$2.50 above 100K
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-haiku-5-5 / https://openrouter.ai/models/anthropic/claude-haiku-5.5
- **Key Benchmarks & Findings:** Anthropic October 2026 release. OSWorld 2.1: 72.4%, GDPval-AA: 1620, HLE no-tools: 45.9%. Tiered pricing .10/.50 per 1M (prompts <=100K).

### Normalized scores (1–100)

- **Tool use: 80/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 82/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total (128K max output)).
- **Multimodal: 72/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, PDF in; text out).
- **Coding: 78/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 96/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 81.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((80 + 82 + 95 + 72 + 78) / 5 = 81.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
