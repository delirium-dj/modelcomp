# Qwen 3.8 — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Apache-2.0 open-weight Qwen3.8 27B dense vision-language model for self-hosted agentic work with near-flagship results on a single 24 GB GPU.
- **Provider / access:** OpenCode (`opencode/qwen-3.8`), [Hugging Face](https://huggingface.co/Qwen) open weights, Alibaba Cloud DashScope.
- **Release / knowledge:** August 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.8` (Zen tier available)
- **Context window:** 262,144 tokens native (extensible to 1,000,000 via YaRN; 32,768 output tokens).
- **Modalities:** Native multimodal: text, image, and video in; text and code out.
- **Pricing (as of 2026-10-21):** Free Apache 2.0 open weights for self-hosting; hosted routes ~$0.42 / 1M input, ~$3.00 / 1M output.
- **Architecture:** 27B dense parameter transformer with integrated vision encoder and Gated Delta Network attention layers.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Qwen 3.8 Family Technical Report
- **GPQA Diamond:** **89.2%**
- **SWE-bench Pro:** **61.7%**
- **MathVision:** **95.2%**
- **PaperBench:** **93.0%**
- **OSWorld-Verified:** **86.1%**
- **Toolathlon Verified:** **67.1%**
- **DeepSWE v1.1:** **42.2%**

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (86.1% OSWorld-Verified, 67.1% Toolathlon).
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (89.2% GPQA Diamond, 93.0% PaperBench).
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (262K native / 1M YaRN).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (95.2% MathVision).
- **Coding: 90/100.** Verified software engineering capability across 61.7% SWE-bench Pro.
- **Cost efficiency: 86/100.** Value proposition relative to performance, offering free 24GB self-hosting and low-cost API routes.
- **Overall Score: 91/100.** Arithmetic mean of non-cost metrics: (90 + 92 + 98 + 86 + 90) / 5 = 91.2 → 91. Outstanding open-weights 27B dense foundation model delivering near-flagship performance on single-GPU hardware.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
