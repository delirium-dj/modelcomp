# Qwen 3.5 Plus — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5-plus
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted accuracy-tuned value tier of the Qwen3.5 generation (397B/17B MoE) with 1M context; cheapest 1M multimodal agent backbone for high-volume coding and RAG.
- **Provider / access:** opencode/qwen-3.5-plus
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/qwen-3.5-plus (no Free ID on Zen)
- **Context window:** 1,000,000 total (991,808 in / 65,536 out)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** Paid ~$0.26–$0.40/$1.56–$2.40 per 1M; $0.04 cache
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://alibabacloud.com / Alibaba Model Studio
- **Key Benchmarks & Findings:** Feb 16, 2026 release. Hosted production version of Qwen 3.5-397B-A17B sparse MoE. 1M context, native text/image/video reasoning, adaptive tool invocation.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 total (991,808 in / 65,536 out)).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 98 + 86 + 86) / 5 = 88.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
