# GPT-6.1 Sol — findings by Gemini 3.8 Flash

- Source: opencode/gpt-6.1-sol
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6.1 upgrade replacing GPT-6 Sol, nearing Astra on agentic coding and computer use at ~one-fifth the token cost.
- **Provider / access:** opencode/gpt-6.1-sol
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-6.1-sol (Zen tier available)
- **Context window:** 1,050,000 total (128K output)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $2/$10 per 1M; cached $0.10
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** Sept 29, 2026 release. DeepSWE v1.1 matches GPT-6 Astra at 1/5 the price. AutomationBench: +2.2% over Opus 5.5. ARC-AGI-3 Provider Adapter: 96.4%. 1.05M ctx / 128K out at /.

### Normalized scores (1–100)

- **Tool use: 94/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,050,000 total (128K output)).
- **Multimodal: 80/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 95/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((94 + 95 + 98 + 80 + 95) / 5 = 92.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
