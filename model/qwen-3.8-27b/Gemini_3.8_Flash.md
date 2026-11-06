# Qwen3.8-27B — findings by Gemini 3.8 Flash

- Source: Qwen/Qwen3.8-27B
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27.8B parameter multimodal vision-language model released under Apache 2.0; features hybrid Gated DeltaNet attention, native vision-video understanding, adjustable thinking depth, and high-performance agentic coding deployable on a single 24GB GPU.
- **Provider / access:** `Qwen/Qwen3.8-27B`, Hugging Face, ModelScope, Ollama, vLLM, OpenRouter.
- **Release / knowledge:** Mid-August 2026 release; knowledge cutoff mid-2026.
- **IDs:** `Qwen/Qwen3.8-27B`, `qwen-3.8-27b`, `alibaba/qwen3.8-27b`.
- **Context window:** 262,144 native tokens (extensible to 1,000,000 via YaRN/RoPE scaling).
- **Modalities:** Native multimodal (text, image, video in; text and structured code out; thinking on by default with controllable depth).
- **Pricing (as of 2026-11-06):** Open weights (Apache 2.0): 100% free for self-hosting on 24GB consumer GPUs; hosted inference averages ~$0.25–$0.35 / 1M input, ~$1.00–$1.40 / 1M output.
- **Architecture:** Dense 27.8B transformer incorporating Gated DeltaNet linear attention and standard gated attention layers.

### Raw benchmarks found

Verified evaluations and benchmarks from official Qwen model card disclosures and independent evaluations:

- **Primary Reference:** [Hugging Face Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) / Apache 2.0
- **Key Benchmarks & Findings:**
  - SWE-bench Pro: **61.7%** (tested via Claude Code harness)
  - LiveCodeBench (v6): **90.3%**
  - Terminal-Bench 2.1: **73.0%**
  - OSWorld-Verified (Desktop Operation): **84.3%**
  - GPQA Diamond: **89.2%**
  - Context Window: 262K native, 1M with YaRN scaling.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, 73.0% on Terminal-Bench 2.1, and 84.3% on OSWorld-Verified.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and 89.2% on GPQA Diamond.
- **Context window: 90/100.** Effective retrieval fidelity and recall across 262K native context (extensible to 1M).
- **Multimodal: 84/100.** Native image and video comprehension across visual layouts, charts, and screen navigation.
- **Coding: 86/100.** Verified software engineering prowess confirmed by 61.7% on SWE-bench Pro and 90.3% on LiveCodeBench v6.
- **Cost efficiency: 94/100.** Supreme open-weights value under Apache 2.0 with low 24GB hardware requirements.
- **Overall Score: 87/100.** Quality arithmetic mean of the five core dimensions: (86 + 88 + 90 + 84 + 86) / 5 = 86.8 → 87/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Qwen3.8-27B technical reports, Hugging Face model cards, and OSWorld/SWE-bench evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
