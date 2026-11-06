# Qwen 3.8 Flash Next — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8-flash-next
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weights experimental architectural preview for Qwen 4 (125B total language parameters, 6B active per token, plus 51B N-gram embedding table and MTP module); introduces hybrid Gated DeltaNet (GDN), Qwen Sparse Attention (QSA), and Gated Residuals (GR) for ultra-fast agent execution.
- **Provider / access:** `opencode/qwen-3.8-flash-next`, Hugging Face, ModelScope, Unsloth, Ollama, Vercel AI Gateway.
- **Release / knowledge:** August 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen-3.8-flash-next`, `qwen/qwen-3.8-flash-next`.
- **Context window:** 262,144 native tokens (extensible to 1,000,000 via YaRN).
- **Modalities:** Native multimodal (text, image, video in; text and structured code out; tool use).
- **Pricing (as of 2026-11-06):** Vercel / hosted routes ~$0.12 / 1M input, ~$0.40 / 1M output tokens; open weights available under Qwen Community license for local self-hosting.
- **Architecture:** 125B sparse MoE (6B active per token) with 51B offloadable N-gram embedding table, Multi-Token Prediction (MTP), Gated DeltaNet, and Qwen Sparse Attention.

### Raw benchmarks found

Verified evaluations and benchmarks from official Alibaba Qwen Team disclosures and third-party tracking:

- **Primary Reference:** [Hugging Face Qwen Team](https://huggingface.co/Qwen) / GitHub Qwen4 Preview
- **Key Benchmarks & Findings:**
  - SWE-bench Pro: **62.5%**
  - CoWorkBench: **73.9%**
  - RealWorldQA: **88.5%**
  - Context Window: 262K native, 1M extensible with YaRN.
  - Active Parameters: 6B active per token ensures high generation throughput (>160 tok/s).

### Normalized scores (1–100)

- **Tool use: 82/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and CoWorkBench integration.
- **Reasoning: 85/100.** High-level reasoning supported by hybrid GDN and QSA attention mechanisms.
- **Context window: 90/100.** Effective retrieval fidelity and recall across 262K native context (extensible to 1M).
- **Multimodal: 80/100.** Native image and video understanding across document OCR and RealWorldQA (88.5%).
- **Coding: 84/100.** Verified software engineering prowess demonstrated by 62.5% on SWE-bench Pro.
- **Cost efficiency: 94/100.** Phenomenal economics with 6B active parameter footprint and $0.12/$0.40 hosted pricing.
- **Overall Score: 84/100.** Quality arithmetic mean of the five core dimensions: (82 + 85 + 90 + 80 + 84) / 5 = 84.2 → 84/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Qwen Team's Qwen3.8-Flash-Next technical documentation, Hugging Face model cards, and community benchmarks; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
