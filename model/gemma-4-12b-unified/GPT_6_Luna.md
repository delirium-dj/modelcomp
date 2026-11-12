# Gemma 4 12B Unified — findings by GPT-6 Luna

- Source: Google DeepMind/Gemma 4 12B Unified IT
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's open-weight, dense multimodal model using an encoder-free architecture that projects raw image and audio inputs directly into the language model. Designed for local deployment and multimodal reasoning.
- **Provider / access:** Google Gemma weights via Hugging Face and Kaggle; instruction-tuned ID `google/gemma-4-12B-it`.
- **Release / knowledge:** Announced 2026-06-03; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-12B-it` (instruction-tuned checkpoint); base `google/gemma-4-12B`.
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image, video-frame, and audio input; text output. Audio supports speech recognition and speech-to-translated-text tasks; no audio generation verified. Function calling supported.
- **Pricing (as of 2026-10-28):** Open weights; no canonical token price. Self-hosted costs depend on hardware.
- **Architecture:** Dense decoder-only model, 11.95B parameters, encoder-free vision/audio projection; Apache 2.0 license.

### Raw benchmarks found

Google's Gemma 4 model card reports instruction-tuned results. Audio numbers are reported for the 12B model and exclude Chinese where noted.

Agent / tool use:

- Tau2 (average over 3): **69.0%**.
- Tau2 Airline: **75.0**; Tau2 Retail: **77.6**; Tau2 Telecom: **54.4** (technical report configurations).
- No verified Terminal-Bench result found.

Reasoning / knowledge:

- GPQA Diamond: **78.8%**.
- AIME 2026, no tools: **77.5%**.
- MMLU Pro: **77.2%**; HLE no tools: **5.2%**.
- BigBench Extra Hard: **53.0%**.

Coding:

- LiveCodeBench v6: **72.0%**.
- Codeforces Elo: **1659**.
- SciCode: **38.0%**.

Long context:

- MRCR v2 8-needle at 128K: **43.4%**.
- RULER: **91.2** at 128K; **96.4** at 32K.
- GraphWalks F1: **71.0** below 128K.
- Maximum context is 256K; no retrieval benchmark at full capacity verified.

Multimodal detail:

- MMMU Pro: **69.1%**; MATH-Vision: **79.7%**; OmniDocBench 1.5 average edit distance: **0.164** (lower is better).
- CoVoST: **38.5** and FLEURS: **0.069** (lower is better), excluding Chinese.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau2 average 69% and individual task scores show useful tool skills, but no modern computer-use or coding-agent evaluation was verified.
- **Reasoning: 80/100.** GPQA 78.8% and AIME 77.5% are good; HLE 5.2% caps performance on frontier open-ended questions.
- **Context window: 75/100.** 256K capacity is substantial, but MRCR at 128K is 43.4% and full-window retrieval is unverified.
- **Multimodal: 90/100.** Native image/video/audio input with documented visual and audio benchmarks; capped because output remains text and speech generation is not supported.
- **Coding: 80/100.** LiveCodeBench 72% and Codeforces Elo 1659 are solid, but no repository-scale coding benchmark was found.
- **Cost efficiency: 100/100.** Open weights avoid a model license fee; infrastructure costs depend on local or hosted deployment.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; a versatile local multimodal model, particularly useful when audio input and open licensing matter.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; scores are attributed to Google's model card and technical report, keeping evaluation configurations distinct. Normalized values are independent interpretations.
- Sources: [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4); [Gemma 4 12B announcement](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/); [Gemma 4 technical report](https://arxiv.org/html/2607.02770); [Hugging Face checkpoint](https://huggingface.co/google/gemma-4-12B-it).
