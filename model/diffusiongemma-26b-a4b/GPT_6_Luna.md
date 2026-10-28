# DiffusionGemma 26B A4B — findings by GPT-6 Luna

- Source: Google DeepMind/DiffusionGemma 26B A4B IT
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's open-weight multimodal model built on Gemma 4 26B A4B, using discrete block diffusion for faster text generation. It is a separate diffusion-based checkpoint, not the autoregressive Gemma 4 model.
- **Provider / access:** Hugging Face weights `google/diffusiongemma-26B-A4B-it`; self-hostable with supported Transformers/vLLM/SGLang implementations.
- **Release / knowledge:** Released June 2026; training data cutoff January 2025 per model card.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (instruction-tuned checkpoint).
- **Context window:** Up to 256,000 tokens; canvas length 256.
- **Modalities:** Text, image, and video-frame input; text output. Function calling and optional reasoning are supported. No audio input or non-text output documented.
- **Pricing (as of 2026-10-28):** Open weights; no canonical token rate. Hosted providers have varying prices.
- **Architecture:** 25.2B total / 3.8B active MoE parameters, 128 routed experts with 8 active plus one shared, discrete diffusion encoder-decoder; Apache 2.0.

### Raw benchmarks found

Google's model card reports instruction-tuned results using its recommended Entropy Bound sampler unless otherwise stated.

Agent / tool use:

- Tau2 average over 3 runs: **56.2%**.
- No verified Terminal-Bench, Toolathlon, or computer-use benchmark score found.

Reasoning / knowledge:

- GPQA Diamond: **73.2%**.
- AIME 2026 no tools: **69.1%**.
- HLE no tools: **11.0%**; HLE with search: **11.9%**.
- MMLU Pro: **77.6%**.

Coding:

- LiveCodeBench v6: **69.1%**.
- Codeforces Elo: **1429**.

Long context:

- MRCR v2 8-needle at 128K: **32.0%**.
- Documented maximum context is 256K; no retrieval score at the full window verified.

Multimodal:

- MMMU Pro: **54.3%**.
- MATH-Vision: **70.5%**.
- OmniDocBench 1.5 average edit distance: **0.319** (lower is better).

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2 average 56.2% shows some tool competence, but modern agent/computer-use scores were not found.
- **Reasoning: 75/100.** GPQA 73.2%, AIME 69.1%, and HLE 11% support a capable mid-tier reasoner, below frontier results.
- **Context window: 70/100.** The 256K capacity is useful, but MRCR at 128K is 32%, limiting confidence in long-range retrieval.
- **Multimodal: 75/100.** Image/video input and vision benchmark results are documented; audio and multimodal output are absent, and MMMU Pro 54.3% caps the score.
- **Coding: 74/100.** LiveCodeBench 69.1% and Codeforces Elo 1429 indicate useful coding skill, but repository-agent evaluations were not verified.
- **Cost efficiency: 100/100.** Open Apache 2.0 weights allow self-hosting without token licensing fees; hardware costs remain.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions (68+75+70+75+74)/5 = 72.4; most compelling for fast, locally hosted multimodal generation rather than long-context retrieval or complex agents.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from Google DeepMind's Hugging Face model card. Evaluation configuration and sampler details are retained; normalized scores are independent interpretations.
- Sources: [Google DiffusionGemma model card](https://huggingface.co/google/diffusiongemma-26B-A4B-it); [Gemma 4 documentation](https://ai.google.dev/gemma/docs/core/model_card_4).
