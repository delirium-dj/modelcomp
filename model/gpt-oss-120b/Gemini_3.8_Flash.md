# GPT-OSS-120B — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B
- **Short description:** OpenAI's 117B open-weights Mixture-of-Experts reasoning model (5.1B active) released under an Apache 2.0 license, capable of running on a single 80GB GPU with configurable reasoning effort and tool execution.
- **Provider / access:** OpenAI API (`gpt-oss-120b`), OpenCode Zen (`opencode/gpt-oss-120b`), NVIDIA NIM, Hugging Face open weights.
- **Release / knowledge:** August 2025.
- **IDs:** `opencode/gpt-oss-120b`, `openai/gpt-oss-120b`
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text in / text out only. Structured outputs and Python code execution tools.
- **Pricing (as of 2026-09-24):** ~$0.09 / 1M input tokens, ~$0.45 / 1M output tokens; free self-hosting via Apache 2.0 weights.
- **Architecture:** 117B total / 5.1B active MoE (36 layers, alternating dense and banded-sparse attention, MXFP4 quantization).

### Raw benchmarks found

Agent / tool use:

- Tau-Bench Retail: **67.8%** / Airline: **49.2%**
- Tau2-Bench: **65.8%**
- IFBench: **69.0%**
- Terminal-Bench Hard: **22.0%**
- Codeforces Elo: **2463** no tools / **2622** with terminal tools

Reasoning / knowledge:

- GPQA Diamond: **80.1%** no tools / **80.9%** with tools
- Humanity's Last Exam (HLE): **14.9%** no tools / **19.0%** with tools
- AIME 2024: **95.8%** / AIME 2025: **92.5%**
- MMLU: **90.0%** (MMLU-Pro: **80.8%**)
- Artificial Analysis Intelligence Index: **60.5**

Coding:

- SWE-bench Verified: **62.4%** (high reasoning subset)
- LiveCodeBench: **87.8%**
- SciCode: **38.9%**
- Aider Polyglot: **44.4%**

Long context:

- 128K tokens context window; YaRN dense layer extension.

### Normalized scores (1–100)

- **Tool use: 72/100.** Codeforces terminal tool score (2622 Elo) and Tau-Bench Retail (67.8%) demonstrate practical tool handling; TB Hard (22.0%) indicates constraints on complex OS environments.
- **Reasoning: 82/100.** High AIME performance (92.5%–95.8%) and a 60.5 AA Intelligence Index provide strong mathematical and logic foundations, tempered by moderate HLE (19.0%).
- **Context window: 56/100.** 128K context window sits comfortably in the 100K–200K range without dedicated deep-retrieval validation.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 74/100.** Strong LiveCodeBench (87.8%) and 62.4% on SWE-bench Verified provide solid day-to-day code generation.
- **Cost efficiency: 95/100.** Apache 2.0 open-weights licensing allows free local hosting, complemented by inexpensive API hosting ($0.09 / $0.45).
- **Overall Score: 60/100.** Arithmetic mean of non-cost metrics: (72 + 82 + 56 + 15 + 74) / 5 = 59.8 → 60. A highly efficient, open-weights reasoning model optimized for mathematical problem-solving and single-GPU deployments.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of OpenAI technical reports and independent open-source evaluations.
