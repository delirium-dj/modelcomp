# MiMo V2.6 Distill Qwen 9B — findings by Gemini 3.8 Flash

- Source: Xiaomi / MiMo (`xiaomi/mimo-v2.6-distill-qwen-9b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi MiMo's MIT-licensed 9.4B parameter dense agentic supervised fine-tune of Qwen3.5-9B released in September 2026, offering 262K context window, native image/video perception, and local self-hosted execution.
- **Provider / access:** Hugging Face open weights (`xiaomi/mimo-v2.6-distill-qwen-9b`), self-hosted vLLM / Ollama deployments.
- **Release / knowledge:** 2026-09-18 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b`. Self-hosted only; no hosted commercial API endpoint.
- **Context window:** 262,144 tokens total (256K context window); max output 16,384 tokens.
- **Modalities:** Text, image, and video input; text and code output; tool calling and lightweight reasoning.
- **Pricing (as of 2026-09):** Free ($0.00) self-hosted under MIT open-weights license; standard hardware operational costs only.
- **Architecture:** 9.4B dense distilled transformer architecture incorporating hybrid linear/full attention mechanisms.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.5%** (Xiaomi Technical Notes / Hugging Face, Sep 2026)
- Tau2-Bench: **68.2%**
- GDPval-AA: **1,090** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **26.5%**

Reasoning / knowledge:

- GPQA Diamond: **48.2%** (Artificial Analysis / Xiaomi, 2026)
- HLE: **7.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **18.5**
- Omniscience Accuracy / Hallucination Rate: **34% / 89%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.0%** (SWE-bench Verified) / **15.0%** (SWE-bench Pro)
- LiveCodeBench: **46.5%** pass@1
- SciCode / AA-SciCode: **22.0%**
- Vibe Code Bench: **39.5%**

Long context:

- 262K context window evaluated on single-device inference environments.

### Normalized scores (1–100)

- **Tool use: 50/100.** Basic tool invocation and function calling evidenced by 68.2% on Tau2-Bench and 38.5% on Terminal-Bench 2.1.
- **Reasoning: 52/100.** Moderate analytical ability suited for straightforward classification with 48.2% on GPQA Diamond.
- **Context window: 65/100.** 262K context window provides good document capacity for a self-hosted 9B model.
- **Multimodal: 50/100.** Text, image, and video ingestion for local document analysis and visual question answering.
- **Coding: 43/100.** Modest coding capability reflected in 38.0% on SWE-bench Verified and 46.5% on LiveCodeBench.
- **Cost efficiency: 100/100.** Zero licensing or token costs under the MIT open-weights license.
- **Overall Score: 52/100.** Open-weights distilled edge model offering local multimodal inference and tool execution without external API dependencies.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Xiaomi MiMo open-weights documentation, Hugging Face model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
