# Muse Glimmer 30B — findings by Gemini 3.8 Flash

- Source: Meta / Muse (`meta/muse-glimmer-30b`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's 29.6B dense open-weights multimodal foundation model (incorporating a 1.8B vision encoder) distilled from Muse Spark, designed under Apache 2.0 for local deployment on consumer GPUs and autonomous agent workflows.
- **Provider / access:** [Hugging Face](https://huggingface.co/meta) open weights (Apache 2.0; BF16, GGUF, vLLM, llama.cpp), [OpenRouter](https://openrouter.ai/models/meta/muse-glimmer-30b), and Fireworks AI.
- **Release / knowledge:** 2026-08-10 release; knowledge cutoff mid-2026.
- **IDs:** `meta/muse-glimmer-30b`
- **Context window:** 131,072 tokens total (128K context window with hybrid sliding-window attention).
- **Modalities:** Text and image inputs; text, code, structured JSON output, and schema-based tool calling.
- **Pricing (as of 2026-10-11):** $0.00 (open weights Apache 2.0); hosted inference routes average ~$0.30–$0.35 / 1M input tokens, $1.20–$1.50 / 1M output tokens ($0.04 cached input).
- **Architecture:** 29.6B dense multimodal transformer (including 1.8B vision encoder) featuring GQA and DFlash speculative decoding support.

### Raw benchmarks found

Agent / tool use:
- MCP Atlas: **75.5** ([Fireworks AI / Meta Report](https://fireworks.ai))
- OSWorld-Verified: **65.9%**
- DeepSearch QA: **74.6**
- Terminal-Bench 2.1: **51.7%**

Reasoning / knowledge:
- AIME 2026: **94.7%** ([Meta Model Card](https://huggingface.co))
- GPQA Diamond: **83.5%**
- Artificial Analysis Intelligence Index: **35** ([Artificial Analysis](https://artificialanalysis.ai/models/muse-glimmer-30b))
- Artificial Analysis Openness Index: **44**

Coding:
- SWE-bench Verified: **76.0%** resolved
- SWE-bench Pro: **51.2%** resolved
- Coding Index: **49.0** (Artificial Analysis)

Long context:
- 131,072 tokens (128K) context window evaluated with hybrid sliding-window attention for single-GPU local repository navigation.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong local agent execution with 75.5 on MCP Atlas, 65.9% on OSWorld-Verified, and 51.7% on Terminal-Bench 2.1.
- **Reasoning: 78/100.** High-level reasoning performance reflected by 94.7% on AIME 2026, 83.5% on GPQA Diamond, and AA Intelligence Index of 35.
- **Context window: 68/100.** 128K context window fits comfortably on single-GPU consumer hardware (24GB–32GB) while providing adequate headroom for local workflows.
- **Multimodal: 75/100.** Integrated 1.8B vision encoder providing reliable image understanding, document processing, and desktop GUI automation.
- **Coding: 78/100.** Solid coding capabilities for a 30B dense weight class, achieving 76.0% on SWE-bench Verified and 51.2% on SWE-bench Pro.
- **Cost efficiency: 100/100.** Free open weights under Apache 2.0 with low hardware requirements, plus very economical hosted API routes.
- **Overall Score: 75/100.** Arithmetic mean of five quality dimensions: (74 + 78 + 68 + 75 + 78) / 5 = 74.6 → 75. Capable local open-weights 30B model with impressive SWE-bench resolution, agent tool calling, and desktop automation prowess.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into Meta's official model announcements, Artificial Analysis benchmarks, and OpenRouter model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
