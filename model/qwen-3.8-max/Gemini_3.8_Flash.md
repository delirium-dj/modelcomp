# Qwen 3.8 Max — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud Model Studio (`alibaba/qwen3-8-max`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse Mixture-of-Experts model (`Qwen3.8-2.4T-A95B`, 2.4T total / 95B active per token) combining Gated Attention and Gated DeltaNet for 1M multimodal context, frontier reasoning, autonomous coding, and OSWorld desktop execution.
- **Provider / access:** `alibaba/qwen3-8-max`, `opencode/qwen-3.8-max`, Alibaba Cloud Model Studio (DashScope), Hugging Face, ModelScope.
- **Release / knowledge:** August 3, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen3-8-max`, `qwen-3.8-max`, `qwen/qwen3.8-2.4t-a95b`.
- **Context window:** 1,000,000 tokens total (1M context window; 131,072 max output).
- **Modalities:** Native multimodal (text, image, video in; text and structured code out; thinking on by default).
- **Pricing (as of 2026-11-06):** $2.00 / 1M input, $6.00 / 1M output (hosted DashScope / OpenRouter); open weights available under community license for distributed clusters.
- **Architecture:** 2.4T sparse MoE (95B active per token) with Gated Attention, Gated DeltaNet linear attention, and native vision encoder.

### Raw benchmarks found

Verified evaluations and benchmarks from official Alibaba Model Studio disclosures and third-party tracking:

- **Primary Reference:** [Alibaba Cloud Model Studio](https://alibabacloud.com) / Hugging Face Qwen3.8-2.4T-A95B
- **Key Benchmarks & Findings:**
  - GPQA Diamond: **92.6%**
  - PaperBench: **93.0%**
  - Terminal-Bench 2.1: **86.6%**
  - OSWorld-Verified: **86.1%** (top-ranked desktop GUI execution)
  - SWE-bench Pro: **67.7%**
  - Context Window: 1,000,000 tokens with 131,072 output token ceiling.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, 86.6% on Terminal-Bench 2.1, and 86.1% on OSWorld-Verified.
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and 92.6% on GPQA Diamond.
- **Context window: 98/100.** Full 1M context capacity with effective multi-hop retrieval and 131K output headroom.
- **Multimodal: 86/100.** Native vision and video reasoning across technical diagrams, paper charts, and desktop screens.
- **Coding: 91/100.** Premier software engineering capability with 67.7% on SWE-bench Pro and high-volume multi-repo refactoring.
- **Cost efficiency: 84/100.** Competitive flat $2/$6 pricing for a 2.4T-scale flagship foundation model.
- **Overall Score: 92/100.** Quality arithmetic mean of the five core dimensions: (92 + 94 + 98 + 86 + 91) / 5 = 92.2 → 92/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Cloud release documentation, Hugging Face model cards, and OSWorld/SWE-bench evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
