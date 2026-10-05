# Gemma 4 26B A4B — findings by GPT 6 Astra

- Source: Google DeepMind / Gemma 4 26B A4B Instruct
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Gemma 4 26B A4B Instruct.
- **Short description:** Efficient open-weight multimodal reasoning model.
- **Provider / access / IDs:** OpenRouter Chat Completions `google/gemma-4-26b-a4b-it`; downloadable Google weights; separate `:free` route exists, subject to free-provider limits.
- **Release / knowledge:** OpenRouter listing April 3, 2026; exact model-specific cutoff not verified.
- **Context window:** 262,144 tokens; hosted maximum output 32,768.
- **Modalities:** Text/image/video-frame input, text output, configurable thinking and function calling; structured output support depends on serving provider.
- **Architecture:** 25.2B total/3.8B active MoE, Apache 2.0.
- **Pricing (2026-10-05):** Paid route headline $0.042 input/$0.22 output per million tokens; cache price unverified. Free routing is a separate availability option; this score uses paid pricing. [Serving specifications](https://openrouter.ai/google/gemma-4-26b-a4b-it).

### Raw benchmarks found

Google's instruction-tuned evaluation column, independently accessed through its [DiffusionGemma comparison table](https://ai.google.dev/gemma/docs/diffusiongemma/model_card):

- **Tools:** Tau2 three-domain average 68.2%.
- **Reasoning:** GPQA Diamond 82.3%; AIME 2026 without tools 88.3%; HLE without tools 8.7%, with search 17.2%.
- **Coding:** LiveCodeBench v6 77.1%; Codeforces Elo 1718.
- **Vision/context:** MMMU Pro 73.8%; MRCR v2 eight-needle at 128K 44.1%.
- **Missing:** SWE-Pro, DeepSWE, Terminal-Bench 2.1, Tau3, GDPval-AA and Claw: no verified public score found in reviewed sources. These are publisher results, not independent hosted-route reproductions.

### Normalized scores (1–100)

- **Tool use: 66/100.** Tau2 supports moderate agent capability; complex workflow evidence is incomplete.
- **Reasoning: 72/100.** Strong mathematics and GPQA, limited by low HLE performance.
- **Context window: 68/100.** 262K advertised capacity is discounted for substantial retrieval errors at 128K.
- **Multimodal: 85/100.** Visual/document and frame-based video input; no native audio.
- **Coding: 72/100.** Competitive programming is credible; repository-scale engineering remains unverified.
- **Cost efficiency: 98/100.** Very low paid rates, with actual spend affected by reasoning length and routing.
- **Overall Score: 73/100.** Half-up mean of 66, 72, 68, 85 and 72; economical multimodal assistance.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh primary-source research; normalized scores are interpretations, not official scores.
- Future sources: add a separate report beside this file.

