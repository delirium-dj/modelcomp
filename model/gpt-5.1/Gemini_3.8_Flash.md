# GPT-5.1 — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5.1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's Nov 2025 usability flagship revision of GPT-5 with adaptive Instant/Thinking variants; low-cost conversational generalist with 400K context.
- **Provider / access:** opencode/gpt-5.1
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-5.1 (no Free ID on Zen)
- **Context window:** 400,000 total (128,000 out)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $1.25/$10.00 per 1M; $0.125 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API (Nov 12, 2025)
- **Key Benchmarks & Findings:** Mid-cycle upgrade featuring adaptive reasoning, AIME 2025 and Codeforces gains, warm conversational tone, and specialized Codex variants.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (400,000 total (128,000 out)).
- **Multimodal: 82/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 85/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 70/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 84.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((85 + 88 + 82 + 82 + 85) / 5 = 84.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
