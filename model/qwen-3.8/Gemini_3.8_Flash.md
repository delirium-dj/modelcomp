# Qwen 3.8 — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Apache 2.0 open-weight Qwen 3.8 base/dense model family flagship (serving as the default base deployment behind `opencode/qwen-3.8`), delivering near-frontier multimodal reasoning, OSWorld GUI execution, and 1M context via YaRN on local workstations.
- **Provider / access:** `opencode/qwen-3.8`, Hugging Face, ModelScope, Ollama, vLLM, OpenRouter.
- **Release / knowledge:** August 2026 family release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen-3.8`, `qwen/qwen-3.8`.
- **Context window:** 262,144 native tokens (extensible to 1,000,000 via YaRN; 32,768 output tokens).
- **Modalities:** Native multimodal (text, image, video in; text and structured code out; thinking mode traces).
- **Pricing (as of 2026-11-06):** ~$0.42 / 1M input, ~$3.00 / 1M output tokens (hosted); $0.00 free open weights under Apache 2.0 for self-hosting.
- **Architecture:** Dense multimodal transformer featuring GQA, native early-fusion vision encoder, and YaRN context scaling.

### Raw benchmarks found

Verified evaluations and benchmarks from official Alibaba Qwen 3.8 technical reports and independent evaluations:

- **Primary Reference:** [Alibaba Qwen Team](https://qwen.ai) / Qwen 3.8 Family Technical Report
- **Key Benchmarks & Findings:**
  - MathVision: **90.0 – 95.2** (95.2 family max, 90.6 direct without CI)
  - OSWorld-Verified: **84.3 – 86.1%** (top-tier open OS agent navigation)
  - PaperBench: **93.0%**
  - Context Window: 262K native, 1M extensible with full needle retrieval.

### Normalized scores (1–100)

- **Tool use: 90/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and 84.3%+ OSWorld-Verified GUI automation.
- **Reasoning: 92/100.** High-level reasoning confirmed by 90.0+ on MathVision and 93.0% on PaperBench.
- **Context window: 98/100.** Effective retrieval fidelity across 262K native and 1M YaRN extended context.
- **Multimodal: 86/100.** Native early-fusion image and video comprehension across technical diagrams and mathematical charts.
- **Coding: 90/100.** High-level software engineering and multi-file code refactoring capability.
- **Cost efficiency: 86/100.** Solid hosted economics combined with 100% free Apache 2.0 self-hosting.
- **Overall Score: 91/100.** Arithmetic mean of five quality dimensions: (90 + 92 + 98 + 86 + 90) / 5 = 91.2 → 91/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Qwen 3.8 technical reports, Hugging Face model cards, and OSWorld-Verified benchmarks; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
