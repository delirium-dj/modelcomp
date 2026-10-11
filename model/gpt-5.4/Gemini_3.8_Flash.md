# GPT-5.4 — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5.4
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March-2026 professional-work reasoning flagship, superseded by the 5.5/5.6 and 6 generations; best for expert-knowledge work and screenshot-driven computer-use agents.
- **Provider / access:** opencode/gpt-5.4
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-5.4 (no Free ID on Zen)
- **Context window:** 1.0-1.05M (1,050,000 listed)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $1.25-$2.50 in / $7.50-$15.00 out per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** March 5, 2026 release. Unified GPT & Codex line. OSWorld-Verified: 75.0%, GDPval: 83.0%, SWE-Bench Pro: 57.7%, GPQA Diamond: 92.4%, MMMU Pro: 81.2%, 1.05M ctx.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1.0-1.05M (1,050,000 listed)).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 90/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 78/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 91.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 92 + 98 + 88 + 90) / 5 = 91.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
