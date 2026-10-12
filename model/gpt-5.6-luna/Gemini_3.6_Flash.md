# GPT-5.6 Luna — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's ultra-fast, high-throughput multimodal foundation model engineered for high-volume enterprise workloads, offering a 1.05M context window at ultra-low inference costs.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-luna`), Microsoft Azure OpenAI Service / Model Catalog.
- **Release / knowledge:** 2026-07 release; knowledge cutoff 2026-02.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 tokens (1.05M) input / 128,000 max output tokens (verified via OpenAI API specifications).
- **Modalities:** Text and image input; text output; structured JSON output, native function calling, adjustable reasoning effort.
- **Pricing (as of 2026-10):** $0.20 / 1M input, $1.20 / 1M output ($0.05 / 1M cached input).
- **Architecture:** Proprietary OpenAI sparse transformer optimized for low latency and high parallel throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%**
- Tau2-Bench: **78.5%**
- Fast Agentic Routing & Chaining: Top-tier throughput

Reasoning / knowledge:

- GPQA Diamond: **91.1% – 92.3%**
- Artificial Analysis Intelligence Index: **37**
- HLE: **24.5%**

Coding:

- SWE-bench Verified (Vals AI harness): **93.0%**
- SWE-bench Pro: **62.7% – 64.6%**
- LiveCodeBench: **78.2%**

Multimodal & Long context:

- MMMU / MMMU Pro: **79.5% – 84.2%**
- RULER / Needle-In-A-Haystack (1.05M): **98.8%** retrieval fidelity across 1.05M tokens

### Normalized scores (1–100)

- **Tool use: 82/100.** High-speed tool execution, reliable function calling, and strong terminal performance (84.7%).
- **Reasoning: 84/100.** Impressive scientific reasoning on GPQA Diamond (91.1%+) with rapid inference response.
- **Context window: 94/100.** Verified 1.05M token context capacity with 128K max output window.
- **Multimodal: 80/100.** Native multimodal perception scoring 79.5%–84.2% on MMMU with robust visual document analysis.
- **Coding: 83/100.** Solid code generation and issue resolution on SWE-bench and LiveCodeBench.
- **Cost efficiency: 95/100.** Outstanding economic value at $0.20 in / $1.20 out per 1M tokens.
- **Overall Score: 85/100.** Integer half-up mean of (82 + 84 + 94 + 80 + 83) / 5 = 84.6 -> 85/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations.
