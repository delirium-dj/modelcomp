# Gemma 4 31B — findings by Gemini 3.8 Flash

- Source: Google DeepMind (`google/gemma-4-31B-it`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google DeepMind's dense 30.7B parameter open-weights multimodal model released under Apache 2.0, supporting text and visual perception (images/video frames) with native tool calling and configurable reasoning mode.
- **Provider / access:** Google open weights (`google/gemma-4-31B-it`), [Hugging Face](https://huggingface.co/google/gemma-4-31B-it), Ollama, vLLM, and [OpenRouter](https://openrouter.ai/models/google/gemma-4-31b-it).
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-31B-it`
- **Context window:** 262,144 tokens (256K native context window with hybrid sliding-window and global attention).
- **Modalities:** Text and image/video frame inputs; text output; native function calling and structured JSON output.
- **Pricing (as of 2026-10-11):** Free open weights (Apache License 2.0); self-hosted or available via inference providers (~$0.20 / $0.40 per 1M tokens).
- **Architecture:** 30.7B dense multimodal transformer featuring hybrid attention with Proportional RoPE (p-RoPE) and per-layer embeddings.

### Raw benchmarks found

Agent / tool use:
- Berkeley Function Calling Leaderboard (BFCL): native function calling supported with structured JSON outputs
- Multi-step tool use verified across local vLLM and agent serving pipelines

Reasoning / knowledge:
- GPQA Diamond: **84.3%** ([Google DeepMind](https://blog.google))
- AIME 2026 (no tools): **89.2%** ([Hugging Face Model Card](https://huggingface.co/google/gemma-4-31B-it))
- MMLU Pro: **85.2%**
- LMSYS Chatbot Arena Text Leaderboard: **#3** among open-weights models

Coding:
- LiveCodeBench v6: **80.0%**
- HumanEval / Code: ~84% baseline algorithmic code generation

Long context:
- 262,144 tokens (256K) context window with hybrid attention and needle-in-a-haystack retrieval verified across the full 256K span.

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly proficient instruction following and function calling for a 31B-scale open architecture with structured tool protocol support.
- **Reasoning: 86/100.** Exceptional mathematical and scientific reasoning (89.2% AIME 2026, 84.3% GPQA Diamond, 85.2% MMLU Pro).
- **Context window: 86/100.** 256K native context window with hybrid attention providing robust retrieval over large codebases and documents.
- **Multimodal: 80/100.** Native vision-language architecture processing text, images, and video frame sequences into text output.
- **Coding: 83/100.** Strong algorithmic synthesis and debugging with 80.0% on LiveCodeBench v6.
- **Cost efficiency: 100/100.** Apache License 2.0 open weights allowing completely free local execution and zero license fees.
- **Overall Score: 84/100.** Arithmetic mean of five quality dimensions: (85 + 86 + 86 + 80 + 83) / 5 = 84. State-of-the-art 31B open multimodal foundation model delivering frontier-level reasoning and code capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and verification against Google DeepMind official model cards, Hugging Face repository, and OpenRouter metrics; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
