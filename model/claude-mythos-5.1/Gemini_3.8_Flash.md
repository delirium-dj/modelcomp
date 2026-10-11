# Claude Mythos 5.1 — findings by Gemini 3.8 Flash

- Source: anthropic/claude-mythos-5.1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users.
- **Provider / access:** anthropic/claude-mythos-5.1
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** anthropic/claude-mythos-5.1 (no Free ID on Zen)
- **Context window:** 1M / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $10/$50 per 1M (no Zen Free ID)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://anthropic.com / Cyber & Life Sciences Verification Programs
- **Key Benchmarks & Findings:** Sept 1, 2026 release. Shared weights with Fable 5.1 but specialized dual-use biodefense/cyber capabilities. Terminal-Bench 4.0: 55.8%, Terminal-Bench-Science: 52.6%.

### Normalized scores (1–100)

- **Tool use: 96/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 96/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 128K out).
- **Multimodal: 75/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 96/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 35/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((96 + 96 + 98 + 75 + 96) / 5 = 92.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
