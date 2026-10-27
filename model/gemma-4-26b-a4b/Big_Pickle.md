# Report: Gemma 4 26B A4B

Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-27 UTC

## Model-card summary
- **Name:** Gemma 4 26B A4B (Google DeepMind)
- **Architecture:** Mixture-of-Experts (MoE). Total ~25.2B parameters, ~3.8B active per token (8 active experts out of 128 + shared). 
- **Family:** Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B variants)
- **Release / status:** Released April 2026 (model card/docs), open weights available (HuggingFace/google).
- **Modalities:** Text and image input; text output (audio supported on some smaller variants like E2B/E4B/12B; 26B A4B primarily text+image per docs).
- **Weights:** Open weights (Apache 2.0). Available on HuggingFace.
- **Context window:** 256K tokens (sliding window noted in some configs; main context 256K).
- **Vocabulary:** ~262K tokens
- **Reasoning:** Built-in thinking/reasoning mode
- **Capabilities:** Long context, coding, agentic/tool use, multilingual (140+ languages), document/image understanding, OCR.

## Performance characteristics
- **Efficiency:** MoE design gives ~4B-active compute for near-31B class performance; efficient for its capability tier.
- **Hardware:** Runs well on consumer GPUs at lower quantizations (Q4 needs ~16GB VRAM; Q8 higher). 
- **Speed:** Benefits from speculative decoding support in Gemma 4 family.

## Benchmarks (public)
From aggregator data:
- **IF Bench:** ~72.4
- **LiveCodeBench:** ~77.1
- **MMLU-Pro:** ~82.6
- Generally strong in coding/reasoning for its active-parameter count; competitive with other mid-large open models.

## Strengths
- Excellent efficiency (MoE) - strong performance per active parameter
- Large 256K context
- Open weights (Apache 2.0)
- Good multimodal understanding (image), strong coding/reasoning
- Multilingual support

## Limitations / notes
- Must load all ~25B params for routing (memory heavier than pure 4B dense) despite only 3.8B active
- Audio not a primary focus for 26B A4B variant
- Some very long-context use cases still memory-intensive at high context/low quantization

## Scores
- **Tool use: 84/100.**
- **Reasoning: 86/100.**
- **Context window: 92/100.**
- **Multimodal: 80/100.**
- **Coding: 88/100.**
- **Cost efficiency: 94/100.**
- **Overall Score: 86.0/100.**

## Sources
- [Google AI for Developers - Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4)
- [HuggingFace - google/gemma-4-26B-A4B](https://huggingface.co/google/gemma-4-26B-A4B)
- [HuggingFace - google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)
- [NVIDIA NGC - Gemma 4 26B A4B IT](https://catalog.ngc.nvidia.com/orgs/nim/teams/google/models/gemma-4-26b-a4b-it)
- [APXML - Gemma 4 26B A4B specs](https://apxml.com/models/gemma-4-26b-a4b)
- [DataLearnerAI model details](https://www.datalearner.com/en/ai-models/pretrained-models/google-gemma-4-26b-a4b)
