# Claude Fable 5 — findings by Gemini 3.8 Flash

- Source: opencode/claude-fable-5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available Mythos-class model — the tier above Opus, built for long-horizon agentic work and software engineering. Legacy since Claude Fable 5.1 (June 2026).
- **Provider / access:** opencode/claude-fable-5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/claude-fable-5 (no Free ID on Zen)
- **Context window:** 1,000,000 total; 128,000 max output
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $10/$50 per 1M; cache read $1/MTok (90% off)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com/news/claude-fable-5 / https://openrouter.ai/models/anthropic/claude-fable-5
- **Key Benchmarks & Findings:** Terminal-Bench 2.1: 83.8%, AutomationBench: 17.1%, GPQA Diamond: 93.2%, HLE: 53-55.5%, SWE-bench Verified: 95%, LiveCodeBench: 89.8%. 1M context with 128K output.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 91/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total; 128,000 max output).
- **Multimodal: 70/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 93/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 32/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 91 + 95 + 70 + 93) / 5 = 88.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
