# Qwen 3.5 397B — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.5-397b`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba Cloud's flagship open-weights multimodal Mixture-of-Experts (MoE) foundation model, featuring 397B total parameters (17B active per token) and native text, image, and video comprehension.
- **Provider / access:** Alibaba Cloud Model Studio, OpenRouter (`qwen/qwen-3.5-397b`), DeepInfra, HuggingFace open-weights release (Apache 2.0).
- **Release / knowledge:** 2026-02-16 release; knowledge cutoff late 2025.
- **IDs:** `qwen/qwen-3.5-397b`, `deepinfra/qwen3.5-397b`
- **Context window:** 262,144 tokens native context window (256K native input, expandable up to 1,000,000 tokens with YaRN on hosted endpoints).
- **Modalities:** Native multimodal input (text, image, video); text output; native tool calling, function calling, and structured JSON output.
- **Pricing (as of 2026-10):** $0.39 – $0.48 / 1M input, $2.34 – $3.00 / 1M output (standard hosted serverless API).
- **Architecture:** Sparse Mixture-of-Experts with 397B total parameters and 17B active parameters per token, combining Gated Delta Networks (linear attention) with full attention.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Retail: **85.5%**
- Tau2-Bench Airline: **76.0%**
- TerminalBench Hard: **36.0%**

Reasoning / knowledge:

- GPQA Diamond: **88.4%**
- AIME 2026: **91.3%**
- Artificial Analysis Intelligence Index: **45 / #12 open-weights rank**

Coding:

- LiveCodeBench v6: **83.6%**
- SWE-bench Verified: **76.4%**

Multimodal & Long context:

- MMMU: **85.0%**
- Video-MME: Frontier-class open-weights video understanding
- Needle-In-A-Haystack (262K): 99.1% retrieval fidelity across native 256K window

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool execution in customer workflows on Tau2-Bench (85.5% Retail) with reliable API dispatch.
- **Reasoning: 86/100.** High-caliber mathematical and scientific deduction on GPQA Diamond (88.4%) and AIME (91.3%).
- **Context window: 88/100.** Native 262K token context window with hosted 1M long-context scaling.
- **Multimodal: 82/100.** Unified native vision-language architecture scoring 85.0% on MMMU with robust video comprehension.
- **Coding: 85/100.** Top-tier open-weights coding engine scoring 76.4% on SWE-bench Verified and 83.6% on LiveCodeBench.
- **Cost efficiency: 86/100.** Outstanding open-weights hosted economics at $0.39–$0.48 in / $2.34–$3.00 out per 1M tokens.
- **Overall Score: 85/100.** Integer half-up mean of (82 + 86 + 88 + 82 + 85) / 5 = 84.6 -> 85/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research and official technical report extraction; normalized 1–100 interpretations.
