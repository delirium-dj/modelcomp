# Qwen 3.8 Flash — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.8-flash`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** High-throughput sparse Mixture-of-Experts (MoE) foundation model previewing Qwen 4 architecture, engineered for ultra-low latency, agentic loops, coding, and multimodal reasoning.
- **Provider / access:** Alibaba Cloud DashScope (`qwen-3.8-flash`), OpenRouter (`qwen/qwen-3.8-flash`), open-weight research checkpoint `qwen-3.8-flash-next`.
- **Release / knowledge:** August 2026 release; knowledge cutoff June 2026.
- **IDs:** `alibaba/qwen-3.8-flash`, `qwen/qwen-3.8-flash-next`
- **Context window:** 1,000,000 tokens (1M tokens) in production API tier; 262,144 tokens native in open-weights checkpoint.
- **Modalities:** Multimodal input (text, image, video); text output; function calling; structured JSON mode.
- **Pricing (as of October 2026):** ~$0.16 / 1M input, $0.47 / 1M output (hosted API); open-weights freely downloadable under community license.
- **Architecture:** Sparse MoE with ~125B total parameters (activating ~6B per token) plus a 51B n-gram embedding table and hybrid gated attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau2-Bench / Tau3-Banking: **72.0%**
- CoWorkBench: **73.9%**
- Toolathon / SWE Atlas Codebase QnA: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **91.7%**
- HLE (Humanity's Last Exam): **35.9%**
- LCR / MLCR: **64.0%**
- Artificial Analysis Intelligence Index: **75.0 / #14**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 4.8%**

Coding:

- LiveCodeBench v6: **91.9%**
- SWE-bench Pro: **62.5%**
- SWE-bench Verified: **66.0%**
- SciCode / AA-SciCode: **50.0%**
- Vibe Code Bench: **68.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.0%** across 1M context in API tier.
- Multimodal chart, document, and video parsing verified across standard vision evaluations.

### Normalized scores (1–100)

- **Tool use: 84/100.** Fast, dependable tool calling and agentic task planning backed by 73.9% on CoWorkBench and 71.0% on Toolathon.
- **Reasoning: 87/100.** Exceptional STEM reasoning for a lightweight model (91.7% GPQA Diamond, 35.9% HLE).
- **Context window: 93/100.** 1M context window in hosted API and 262K native open-weights with solid retrieval stability.
- **Multimodal: 81/100.** Native vision and video handling suited for document parsing and GUI inspection.
- **Coding: 86/100.** Outstanding code generation throughput, highlighted by 91.9% on LiveCodeBench v6 and 62.5% on SWE-bench Pro.
- **Cost efficiency: 94/100.** Industry-leading economics at ~$0.16 / $0.47 per 1M tokens driven by sparse 6B active parameter routing.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (84 + 87 + 93 + 81 + 86) / 5 = 431 / 5 = 86.2 -> 86/100. Exceptional cost-to-performance ratio for large-scale agentic code execution and processing pipelines.

---

## Sources

- Alibaba Qwen 3.8 Flash Announcement & GitHub Docs: https://github.com/QwenLM/Qwen
- Qwen 3.8 Flash-Next Model Card on Hugging Face: https://huggingface.co/Qwen/Qwen-3.8-Flash-Next
- Codersera Technical Evaluation & Benchmark Synthesis: https://codersera.com/blog/qwen-3-8-flash-benchmarks

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
