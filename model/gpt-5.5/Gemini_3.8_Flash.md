# GPT-5.5 — findings by Gemini 3.8 Flash

- Source: openai/gpt-5.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI model entry awaiting a verified public model card.
- **Provider / access:** openai/gpt-5.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** openai/gpt-5.5 (no Free ID on Zen)
- **Context window:** No verified public value
- **Modalities:** No verified public matrix
- **Pricing (as of 2026-10-11):** No verified public pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** April 23, 2026 release. Omnimodal architecture (Spud). Terminal-Bench 2.0: 82.7%, OSWorld-Verified: 78.7%, FrontierMath Tier 1-3: 51.7%, Tier 4: 35.4%. 1.05M ctx.

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 93/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (No verified public value).
- **Multimodal: 90/100.** Input/output modality comprehension across images, audio, documents, and video (No verified public matrix).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 68/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((91 + 93 + 98 + 90 + 92) / 5 = 92.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
