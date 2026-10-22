# Muse Spark 1.2 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.2
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation. Contributor, Free and Max are the same weights — only price and how Meta uses your data differ (one model, one folder).
- **Provider / access:** opencode/muse-spark-1.2
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/muse-spark-1.2 (Zen tier available)
- **Context window:** 1,048,576 (1M)
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-10-11):** Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://artificialanalysis.ai / Meta Superintelligence Labs
- **Key Benchmarks & Findings:** Aug 5, 2026 release. AA Intelligence Index: 54, GDPval-AA v2 Elo: 1631 (#5), Terminal-Bench v2.1: 80%, MCP Atlas: 90.3%, DeepSWE 1.1: 59.3%. 1M context.

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M)).
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, video, PDF in; text out).
- **Coding: 91/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 92/100.** Quality arithmetic mean of the 5 core quality dimensions ((91 + 92 + 98 + 88 + 91) / 5 = 92).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
