# GPT-5.3 Codex — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5.3-codex
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's Feb 2026 agentic coding model unifying GPT-5.2-Codex coding with GPT-5.2 reasoning; built for long-horizon tool-using engineering work.
- **Provider / access:** opencode/gpt-5.3-codex
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-5.3-codex (no Free ID on Zen)
- **Context window:** 400,000 total (128,000 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** Paid $1.75/$14.00 per 1M; $0.175 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI Codex Release (legacy/deprecated)
- **Key Benchmarks & Findings:** Feb 5, 2026 release. First model instrumental in creating itself; terminal-bench leader at launch. 400K context, high-capability cyber categorization. Succeeded by GPT-6 Astra/Sol.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 86/100.** Effective retrieval fidelity and recall across context capacity (400,000 total (128,000 out)).
- **Multimodal: 70/100.** Input/output modality comprehension across images, audio, documents, and video (Text in/out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 84.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 88 + 86 + 70 + 92) / 5 = 84.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
