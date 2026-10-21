# Qwen3.8-27B — findings by Gemini 3.8 Flash

- Source: Qwen/Qwen3.8-27B
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen dense 27B vision-language open-weights model; image/video understanding plus strong agentic coding and long-horizon tasks.
- **Provider / access:** [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) open weights (Apache 2.0), Alibaba Cloud DashScope API, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.8-27b).
- **Release / knowledge:** Mid-August 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `Qwen/Qwen3.8-27B`, `qwen/qwen-3.8-27b`
- **Context window:** 262,144 tokens native (extensible to 1,000,000 with YaRN; 32,768 output tokens).
- **Modalities:** Native multimodal: text, image, and video in; text and code out (thinking on by default).
- **Pricing (as of 2026-10-21):** Open weights (Apache-2.0): self-hosting free on consumer 24GB GPUs; hosted API routes ~$0.20–$0.40 / 1M input, ~$0.80–$1.20 / 1M output.
- **Architecture:** 27B dense parameter transformer with integrated vision-language attention layers.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://huggingface.co/Qwen/Qwen3.8-27B / Apache 2.0
- **SWE-bench Pro:** **61.7%**
- **GPQA Diamond:** **89.2%**
- **DeepSWE v1.1:** **42.2%**
- **Toolathlon Verified:** **67.1%**
- **Humanity's Last Exam (HLE):** **30.8%**
- **IFBench:** **79.5%**

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (67.1% Toolathlon Verified).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (89.2% GPQA Diamond).
- **Context window: 90/100.** Effective retrieval fidelity and recall across context capacity (262K native / 1M YaRN).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 86/100.** Verified software engineering capability across 61.7% SWE-bench Pro.
- **Cost efficiency: 94/100.** High cost efficiency via Apache 2.0 open weights runnable on consumer 24GB VRAM cards.
- **Overall Score: 87/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 90 + 84 + 86) / 5 = 86.8 → 87. Highly efficient open-weights dense 27B model for local coding agents and visual reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
