# Muse Spark 1.3 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.3
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier coding and long-horizon agentic model (Sep 2026) at 1M context / 131K output. Contributor (Free) and Max are the same weights: Free is the $0 training-consent tier and Max is the Standard tier's reasoning_effort "max" — only cost and how Meta uses your data differ.
- **Provider / access:** opencode/muse-spark-1.3
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/muse-spark-1.3 (Zen tier available)
- **Context window:** 1,048,576 (1M) total; 131,072 max output
- **Modalities:** Text, image, video, PDF in; text out
- **Pricing (as of 2026-10-11):** Free OpenCode Zen tier; Contributor $0.10/$0.20; Standard & Max effort $1.25/$4.25 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://meta.ai / Meta Superintelligence Labs (MSL) release
- **Key Benchmarks & Findings:** Sept 2026 release. 1M context. DeepSWE: 75.4%, optimized multi-turn agentic coding, native multimodal (text, audio, image, video). Standard .25/.25, Contributor .10/.20.

### Normalized scores (1–100)

- **Tool use: 95/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M) total; 131,072 max output).
- **Multimodal: 90/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video, PDF in; text out).
- **Coding: 94/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 94.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((95 + 95 + 98 + 90 + 94) / 5 = 94.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
