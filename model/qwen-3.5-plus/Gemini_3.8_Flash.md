# Qwen 3.5 Plus — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5-plus
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted accuracy-tuned value tier of the Qwen3.5 generation (397B/17B MoE) with 1M context; cheapest 1M multimodal agent backbone for high-volume coding and RAG.
- **Provider / access:** OpenCode (`opencode/qwen-3.5-plus`), Alibaba Model Studio, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.5-plus).
- **Release / knowledge:** February 16, 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.5-plus`, `qwen/qwen-3.5-plus`
- **Context window:** 1,000,000 tokens total (991,808 in / 65,536 out).
- **Modalities:** Native multimodal: text, image, and video in; text out.
- **Pricing (as of 2026-10-21):** Paid ~$0.26–$0.40 / 1M input, ~$1.56–$2.40 / 1M output ($0.04 cached read).
- **Architecture:** Foundation model architecture with sparse MoE (397B total / 17B active) and advanced tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://alibabacloud.com / Alibaba Model Studio
- **GPQA Diamond:** **88.4%**
- **SWE-bench Verified:** **76.4%**
- **IFEval:** **92.1%**
- **Terminal-Bench 2.0:** **59.2%**

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (88.4% GPQA Diamond).
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M context / 65K output headroom).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 86/100.** Verified software engineering capability across 76.4% SWE-bench Verified.
- **Cost efficiency: 92/100.** Value proposition relative to performance at ~$0.30 / $1.80 per 1M tokens ($0.04 cached).
- **Overall Score: 89/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 98 + 86 + 86) / 5 = 88.8 → 89. Highly cost-effective 1M-context multimodal workhorse model for coding and agent automation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
