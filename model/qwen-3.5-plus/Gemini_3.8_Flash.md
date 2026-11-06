# Qwen 3.5 Plus — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud DashScope (`alibaba/qwen-3.5-plus`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's hosted production flagship tier of the Qwen 3.5 generation (powered by Qwen3.5-397B-A17B sparse MoE with Gated DeltaNet attention) featuring native 1M context window; industry-leading value tier for whole-codebase agent workflows, deep reasoning, and high-volume multimodal RAG.
- **Provider / access:** `opencode/qwen-3.5-plus`, Alibaba Cloud DashScope (Model Studio), OpenRouter.
- **Release / knowledge:** February 16, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen-3.5-plus`, `qwen-3.5-plus`, `alibaba/qwen-3.5-plus`.
- **Context window:** 1,000,000 total tokens (991,808 input / 65,536 output).
- **Modalities:** Native multimodal (text, image, video in; text and structured code out; adaptive thinking mode).
- **Pricing (as of 2026-11-06):** ~$0.26–$0.40 / 1M input, ~$1.56–$2.40 / 1M output tokens ($0.04 cached read).
- **Architecture:** Sparse Mixture-of-Experts (397B total, 17B active parameters per forward pass) integrated with Gated DeltaNet hybrid linear attention.

### Raw benchmarks found

Verified evaluations and benchmarks from official DashScope release disclosures and independent evaluations:

- **Primary Reference:** [Alibaba Cloud Model Studio](https://alibabacloud.com) / [Qwen Technical Report](https://qwen.ai)
- **Key Benchmarks & Findings:**
  - GPQA / GPQA Diamond: **87.4% – 92.4%**
  - MMLU-Pro: **87.1% – 87.8%**
  - LiveCodeBench: **85.3% – 87.7%**
  - SWE-bench Verified: **71.2% – 76.4%**
  - IFEval: **92.6% – 94.8%**
  - Long Context & Retrieval: AA-LCR **68.7% – 72.7%**, LongBench v2 **63.2%** across 1M context.
  - Tool / Agent: TAU2-Bench, BFCL-V4 high multi-step tool-calling fidelity.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and BFCL-V4 function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and 87.4%–92.4% on GPQA.
- **Context window: 98/100.** Full 1M token context capacity with verified 68.7%–72.7% AA-LCR long-context recall.
- **Multimodal: 86/100.** Early-fusion native multimodal perception across images, diagrams, video, and documents.
- **Coding: 86/100.** High-level coding capability evidenced by 71.2%–76.4% SWE-bench Verified and 85.3%–87.7% LiveCodeBench.
- **Cost efficiency: 92/100.** Industry-leading cost-performance ratio for a 1M frontier-class model ($0.26/$1.56 per 1M, $0.04 cached).
- **Overall Score: 89/100.** Arithmetic mean of five quality dimensions: (86 + 88 + 98 + 86 + 86) / 5 = 88.8 → 89/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Cloud DashScope documentation, Qwen technical disclosures, and independent benchmark tracking; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
