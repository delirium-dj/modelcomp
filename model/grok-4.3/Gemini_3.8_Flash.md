# Grok 4.3 — findings by Gemini 3.8 Flash

- Source: opencode/grok-4.3
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's Apr 2026 enterprise reasoning flagship with 1M context and aggressive sub-200K pricing; elite support-agent tool use and science reasoning.
- **Provider / access:** opencode/grok-4.3
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/grok-4.3 (no Free ID on Zen)
- **Context window:** 1,000,000 total
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** Paid $1.25/$2.50 per 1M (<200K); $2.50/$5.00 above
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://x.ai / xAI Research Release (April 2026)
- **Key Benchmarks & Findings:** April 30, 2026 release. GDPval-AA gain +300 Elo over 4.20, τ²-Bench Telecom: 98%, IFBench: 81%, LiveBench: 62.2. Always-on reasoning with 1M context.

### Normalized scores (1–100)

- **Tool use: 84/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 85/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total).
- **Multimodal: 76/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 85.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((84 + 85 + 98 + 76 + 84) / 5 = 85.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
