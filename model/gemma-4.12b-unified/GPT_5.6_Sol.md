# Gemma 4 12B Unified — findings by GPT 5.6 Sol

- Source: Google (`google/gemma-4-12B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's dense encoder-free open model that directly ingests text, image, and audio while fitting consumer-class systems.
- **Provider / access:** Downloadable Gemma weights and self-hosted inference.
- **Release / knowledge:** Released 2026-06-03; cutoff not disclosed.
- **IDs:** `google/gemma-4-12B`; no verified Zen Free ID.
- **Context window:** 256K tokens ([official model card](https://ai.google.dev/gemma/docs/core/model_card_4)).
- **Modalities:** Text, image, audio, and video input; text output; thinking and native functions.
- **Pricing (as of 2026-10-08):** Open weights under the Gemma license; hosting costs depend on infrastructure.
- **Architecture:** Dense 12B unified encoder-free model using direct input projections and MTP speculative decoding.

### Raw benchmarks found

Agent / tool use:

- Tau2 average **69.0%**; Terminal-Bench Hard **18.0%**; IFEval **97.2%** (Google model card).

Reasoning / knowledge:

- GPQA Diamond **78.8%**; MMLU-Pro **77.2%**; AIME 2026 **77.5%**; HLE no tools **5.2%**.

Coding:

- LiveCodeBench v6 **72.0%**; Codeforces Elo **1659**. No verified SWE-bench score found.

Long context:

- MRCR v2 eight-needle at 128K: **43.4%**.

Multimodal:

- MMMU-Pro **69.1%**; MATH-Vision **79.7%**; CoVoST BLEU **38.5**; FLEURS WER **0.069**, excluding Chinese.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 69 and IFEval 97.2 are strong, though Terminal-Bench Hard 18 shows limited complex terminal agency.
- **Reasoning: 79/100.** GPQA 78.8 and AIME 77.5 are excellent for 12B, while HLE 5.2 limits the frontier ceiling.
- **Context window: 82/100.** 256K capacity is useful, but MRCR 43.4 at 128K shows substantial retrieval degradation.
- **Multimodal: 90/100.** Native text, image, audio, and video understanding with strong vision and ASR evidence is unusually broad locally.
- **Coding: 82/100.** LiveCodeBench 72 and Codeforces 1659 show capable generation, capped by missing repository-agent evidence.
- **Cost efficiency: 98/100.** Open 12B weights and consumer-device deployment offer exceptional efficiency.
- **Overall Score: 82/100.** Half-up mean of the five non-cost dimensions; best for private local multimodal assistants and efficient reasoning.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Google's official Gemma model card and developer documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
