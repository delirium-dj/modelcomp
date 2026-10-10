# Qwen 3.5 9B — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud / Qwen (`alibaba/qwen-3.5-9b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's open-weights dense 9B parameter vision-language reasoning model under the Apache 2.0 license, featuring native chain-of-thought reasoning, advanced OCR, 262K context window, and exceptional efficiency for local and edge deployments.
- **Provider / access:** Hugging Face open weights, Alibaba Cloud DashScope API (`qwen-3.5-9b`), OpenRouter, vLLM / Ollama self-hosting.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen-3.5-9b`. Self-hostable open weights; low-cost hosted APIs.
- **Context window:** 262,144 tokens total (262K context window); max output 32,768 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; default thinking mode.
- **Pricing (as of 2026-03):** ~$0.10 / 1M input tokens, ~$0.15 / 1M output tokens (self-hostable at $0 under Apache 2.0).
- **Architecture:** 9B dense transformer with integrated multimodal vision encoder and rotary positional embeddings.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.0%** (Artificial Analysis / Alibaba Technical Report, 2026)
- Tau2-Bench: **80.5%**
- GDPval-AA: **1,175** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **38.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.4%** (Artificial Analysis, 2026)
- HLE: **16.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **70.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **31.2**
- Omniscience Accuracy / Hallucination Rate: **45% / 85%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.5%** (SWE-bench Verified) / **29.0%** (SWE-bench Pro)
- LiveCodeBench: **66.0%** pass@1
- SciCode / AA-SciCode: **34.2%**
- Vibe Code Bench: **56.5%**

Long context:

- 262K context window evaluated across document retrieval, dense OCR scanning, and compact codebase navigation.

### Normalized scores (1–100)

- **Tool use: 66/100.** Competent lightweight tool execution and JSON function calling, evidenced by 80.5% on Tau2-Bench and 52.0% on Terminal-Bench 2.1.
- **Reasoning: 70/100.** Strong mathematical and analytical reasoning for a 9B model, achieving 72.4% on GPQA Diamond.
- **Context window: 75/100.** Native 262K context window offers substantial capacity for a small footprint model.
- **Multimodal: 72/100.** Strong document OCR, chart analysis, and image comprehension capabilities.
- **Coding: 64/100.** Solid everyday coding utility with 58.5% on SWE-bench Verified and 66.0% on LiveCodeBench.
- **Cost efficiency: 98/100.** Near-zero operational cost with Apache 2.0 self-hosting and sub-$0.20 hosted API tiers.
- **Overall Score: 69/100.** Premier open-weights small model excelling in local vision-language tasks, math, and high-frequency tool calls.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Alibaba Qwen releases, Hugging Face model cards, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
