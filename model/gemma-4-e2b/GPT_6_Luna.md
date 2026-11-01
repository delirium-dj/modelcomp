# Gemma 4 E2B — findings by GPT-6 Luna

- Source: Google DeepMind/google/gemma-4-E2B-it
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's smallest Gemma 4 open-weight model, designed for on-device multimodal assistance. This report uses the instruction-tuned E2B checkpoint for its published benchmark scores and does not transfer results from Gemma 4 E4B or larger models.
- **Provider / access:** Apache-2.0 weights at Hugging Face `google/gemma-4-E2B` and `google/gemma-4-E2B-it`, plus official Kaggle checkpoints. It runs locally through Transformers, LiteRT-LM, llama.cpp, vLLM and other supported runtimes; mobile deployment is available via LiteRT-LM. No stable, first-party hosted API route or price was verified for this exact SKU.
- **Release / knowledge:** Announced April 2, 2026. Google's model card gives a January 2025 pretraining-data cutoff.
- **IDs:** `google/gemma-4-E2B` (pretrained) and `google/gemma-4-E2B-it` (instruction-tuned evaluation checkpoint).
- **Context window:** 128K tokens, including input and generated output; Google's Gemma 4 documentation specifies 128K for E2B/E4B. No separate universal output limit was verified; generation limits depend on the runtime.
- **Modalities:** Text, image, audio, and video-frame input; text output. Audio is supported natively on E2B. Supports configurable thinking mode and function calling; Google documents JSON output and native system prompts.
- **Pricing (as of 2026-11-01):** Apache-2.0 weights are free to download and self-host, subject to hardware and service costs. Google estimates about 2.9 GB for Q4_0 GPU/TPU weights and 1.1 GB for its mobile configuration; these are weight-load estimates, not full runtime or context costs. No official per-token hosted price verified.
- **Architecture:** Dense decoder with Per-Layer Embeddings; 2.3B effective parameters and 5.1B including embeddings, 35 layers, 512-token sliding window plus global attention. Apache-2.0 license.

### Raw benchmarks found

Google's official Gemma 4 model card says these figures are for instruction-tuned checkpoints. E2B reasoning-mode/settings are not reported as separate numbers in the main table, so the values below are reported as shown without assuming a specific inference mode beyond each explicitly labeled benchmark.

Agent / tool use:

- Tau2 (average over three tasks): **24.5%**. The card does not list per-domain E2B values in this row.
- Native function calling is documented, but no exact-E2B Terminal-Bench, Claw-Eval, or SWE-bench result was verified.

Reasoning / knowledge:

- MMLU Pro: **60.0%**; AIME 2026, no tools: **37.5%**; GPQA Diamond: **43.4%**; BigBench Extra Hard: **21.9%**.
- HLE: no E2B result reported in the official table.

Multimodal:

- MMMU Pro: **44.2%**; MATH-Vision: **52.4%**; MedXPertQA MM: **23.5%**.
- OmniDocBench 1.5 average edit distance: **0.290** (lower is better).
- CoVoST: **33.47** (Google excludes Chinese); FLEURS: **0.09** (lower is better; Chinese excluded). These are the card's audio evaluation scores; it does not specify a percentage unit in the table.

Coding:

- LiveCodeBench v6: **44.0%**; Codeforces: **633 Elo**.
- No exact-E2B SWE-bench Verified/Pro or Terminal-Bench score verified.

Long context:

- MRCR v2, eight needles at 128K (average): **19.1%**. The score is low despite the 128K advertised limit.

### Normalized scores (1–100)

- **Tool use: 48/100.** Tau2 average at 24.5% is modest, although the model has native function-calling support; no terminal-agent benchmark verifies long-horizon reliability. [Official Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4).
- **Reasoning: 53/100.** MMLU Pro 60.0% and GPQA Diamond 43.4% show useful compact-model knowledge, while AIME 2026 at 37.5%, BigBench Extra Hard at 21.9%, and no HLE score cap the result. [Official Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4).
- **Context window: 58/100.** The verified 128K window falls in the 100K–200K tier, but MRCR v2 at 128K is only 19.1%, so reliable use near the limit is not established. [Official Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4); [Gemma 4 documentation](https://ai.google.dev/gemma/docs/core).
- **Multimodal: 68/100.** E2B accepts image, audio, and video-frame input; MMMU Pro 44.2%, MATH-Vision 52.4%, and the audio rows confirm real multimodal evaluation, but MedXPertQA MM is 23.5% and output remains text-only. [Official Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4).
- **Coding: 44/100.** LiveCodeBench v6 at 44.0% and Codeforces 633 Elo demonstrate basic coding competence, but no repository-repair or terminal-agent benchmark was verified. [Official Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4).
- **Cost efficiency: 100/100.** Apache-2.0 downloadable weights and mobile-sized deployment provide a zero-license-cost lane; hardware and integration costs remain. [Google Gemma 4 launch post](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/); [Gemma 4 documentation](https://ai.google.dev/gemma/docs/core).
- **Overall Score: 54/100.** Half-up mean of the five quality dimensions: (48 + 53 + 58 + 68 + 44) / 5 = 54.2 → 54. Cost is excluded. Best suited to privacy-sensitive, offline mobile image/audio assistance and lightweight coding; do not assume strong tool reliability or accurate retrieval across its full advertised context.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches, followed by checks of Google's official Hugging Face model card and Gemma documentation, the April 2 launch post, and the Gemma 4 technical report. All benchmark figures are taken from the E2B instruction-tuned column; larger Gemma variants and base-model results are not transferred. Higher-is-better and lower-is-better measures are labeled, as are missing scores and mode caveats. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Google Gemma 4 E2B instruction-tuned model card](https://huggingface.co/google/gemma-4-E2B-it)
  - [Google Gemma 4 documentation](https://ai.google.dev/gemma/docs/core)
  - [Google DeepMind launch post, April 2, 2026](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
  - [Gemma 4 technical report](https://arxiv.org/abs/2607.02770)
  - [Hugging Face model metadata](https://huggingface.co/api/models/google/gemma-4-E2B-it)
  - [Independent benchmark/spec reference](https://benchmarklist.com/models/google-gemma-4-e2b-it/)

---
