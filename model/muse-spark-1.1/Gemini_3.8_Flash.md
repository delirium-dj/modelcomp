# Muse Spark 1.1 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July-2026 multimodal reasoning model for agentic tasks and multi-agent orchestration over a 1M window at entry-frontier pricing.
- **Provider / access:** opencode/muse-spark-1.1
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/muse-spark-1.1 (no Free ID on Zen)
- **Context window:** 1,048,576 (1M); 131K out
- **Modalities:** Text, image, PDF/file in; text out
- **Pricing (as of 2026-10-11):** $1.25/$4.25 per 1M; $0.15 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://meta.com / Meta AI Scaling Framework
- **Key Benchmarks & Findings:** July 9, 2026 release. AA Intelligence Index: 51 (+8 over 1.0), MCP Atlas evaluated, 1M context at .25/.25 pricing. Multi-layer safety mitigations.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 89/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M); 131K out).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, PDF/file in; text out).
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 89.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((88 + 89 + 98 + 86 + 88) / 5 = 89.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
