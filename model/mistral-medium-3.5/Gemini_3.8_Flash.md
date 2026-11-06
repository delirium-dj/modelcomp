# Mistral Medium 3.5 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistral-medium-3-5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's 128B dense parameter multimodal open-weights model consolidating general instruction following, reasoning, and coding (merging Medium 3.1, Magistral, and Devstral) into a unified architecture. Features native image input, a 256K context window, and configurable reasoning compute under a modified MIT license.
- **Provider / access:** Mistral AI Studio API (`mistral-medium-3-5`), OpenRouter (`mistralai/mistral-medium-3.5`), Hugging Face (`mistralai/Mistral-Medium-3.5-128B`), and Azure AI.
- **Release / knowledge:** 2026-04-29 release; knowledge cutoff early 2026.
- **IDs:** `mistral-medium-3-5`, `mistralai/mistral-medium-3.5`
- **Context window:** 262,144 tokens total (256K context window); max output 32,768 tokens.
- **Modalities:** Multimodal text and image input; text output; native function calling, JSON schema enforcement, and configurable test-time reasoning.
- **Pricing (as of 2026-11-06):** $1.50 per 1M input tokens ($0.15 cached read with up to 90% discount), $7.50 per 1M output tokens (standard list price on Mistral API).
- **Architecture:** 128B dense parameter multimodal transformer achieving ~100–143 tokens/second throughput; available in BF16, FP8, and INT4/NVFP4 quantizations.

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4%** (Mistral technical release)
- τ²-Bench: **94.2%**
- COLLIE: **95.8%**
- Terminal-Bench Hard: **33.3%**
- Artificial Analysis Agentic Index: **76.8**

Reasoning / knowledge:

- GPQA Diamond: **74.8%**
- AIME 2025: **86.3%**
- Humanity's Last Exam (HLE): **13.8%**
- Artificial Analysis Intelligence Index: **5 – 14** (standardized across test suite iterations)

Coding:

- SWE-bench Verified: **77.6%** (Mistral official release benchmark)
- Artificial Analysis Coding Index: **46.9**
- SciCode: **39.6% – 40.2%**

Long context:

- 262,144 tokens (256K window); Artificial Analysis Long Context Reasoning (LCR): **65.3%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong instruction-driven API tool calling shown by τ³-Telecom (91.4%) and τ²-Bench (94.2%), while terminal environments (Terminal-Bench Hard 33.3%) leave room for complex shell execution improvement.
- **Reasoning: 68/100.** Excellent competition math (AIME 86.3%) and solid GPQA Diamond (74.8%), balanced by modest HLE (13.8%) and a lower baseline on the Artificial Analysis Intelligence Index.
- **Context window: 72/100.** Solid 256K context capacity with verified 65.3% on Artificial Analysis LCR.
- **Multimodal: 68/100.** Native vision encoder supporting high-resolution image and visual document input; text-only output.
- **Coding: 77/100.** Impressive 77.6% on SWE-bench Verified at release; strong candidate for code generation and refactoring in developer workflows.
- **Cost efficiency: 74/100.** Dense 128B serving economics ($1.50 / $7.50 per 1M) are relatively steep compared to smaller open-weight models, balanced by prompt caching discounts and freely hostable weights.
- **Overall Score: 73/100.** Arithmetic mean of five quality dimensions: (78 + 68 + 72 + 68 + 77) / 5 = 363 / 5 = 72.6 -> **73/100**. A highly capable, dense open-weights foundation model offering solid coding and multimodal vision support, superseded in the frontier tier by Mistral Large 4.

---

## Signature

- Provided by: **Gemini 3.8 Flash (gemini/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research verifying Mistral AI model documentation, Artificial Analysis metrics, Hugging Face repository releases, and OpenRouter data; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Mistral AI Model Release Overview](https://mistral.ai)
  - [Artificial Analysis Mistral Medium 3.5 Model Page](https://artificialanalysis.ai/models/mistral-medium-3-5)
  - [Hugging Face Mistral-Medium-3.5-128B Repository](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
