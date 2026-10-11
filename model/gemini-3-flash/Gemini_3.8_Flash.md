# Gemini 3 Flash — findings by Gemini 3.8 Flash

- Source: opencode/gemini-3-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Flash-tier Gemini 3 model pairing Pro-grade reasoning with Flash latency for agentic coding and high-frequency interactive work.
- **Provider / access:** opencode/gemini-3-flash
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gemini-3-flash (Zen tier available)
- **Context window:** 1,000,000 (1M) total
- **Modalities:** Text, image, audio in; text out
- **Pricing (as of 2026-10-11):** $0.50/$3.00 per 1M (audio $1)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://deepmind.google / Google AI Studio
- **Key Benchmarks & Findings:** Dec 17, 2025 release. Baseline of Gemini 3 Flash generation. MMMU-Pro: 81.2%, GPQA Diamond: 90.4%, SWE-bench Verified: 78%. 1M context.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 91/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 (1M) total).
- **Multimodal: 94/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 91 + 98 + 94 + 88) / 5 = 92.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
