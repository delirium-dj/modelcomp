# Gemma 4 31B — findings by GPT 6 Astra

- Source: Google DeepMind / Gemma 4 31B instruction-tuned
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Gemma 4 31B Instruct.
- **Short description:** Dense open-weight model for economical reasoning, coding and visual document tasks.
- **Provider / access / IDs:** Weights `google/gemma-4-31B-it`; OpenRouter Chat Completions `google/gemma-4-31b-it`.
- **Release / knowledge:** April 2, 2026; pretraining cutoff January 2025.
- **Context window:** 262,144 tokens; OpenRouter advertises 16,384 maximum completion tokens.
- **Modalities:** Text/image input, video as sampled frames, text output; configurable thinking, function calling and structured output. No native audio in 31B.
- **Pricing (2026-10-05):** OpenRouter headline input/output $0.09/$0.34 per million tokens, cache read $0.05; provider selection can change rates. Self-hosted weights still incur compute costs. [Serving card](https://openrouter.ai/google/gemma-4-31b-it).
- **Architecture:** 30.7B dense model, approximately 550M vision encoder, hybrid local/global attention; Apache 2.0. [Google card](https://ai.google.dev/gemma/docs/core/model_card_4).

### Raw benchmarks found

Google's instruction-tuned 31B column:

- **Tools:** Tau2, average over three domains, 76.9%.
- **Reasoning:** GPQA Diamond 84.3%; AIME 2026 without tools 89.2%; HLE without tools 19.5%, with search 26.5%.
- **Coding:** LiveCodeBench v6 80.0%; Codeforces Elo 2150.
- **Vision/context:** MMMU Pro 76.9%; OmniDocBench 1.5 edit distance 0.131 (lower better); MRCR v2 eight-needle at 128K 66.4%.
- **Source/harness:** [Official evaluation table](https://ai.google.dev/gemma/docs/core/model_card_4), vendor-reported; do not mix with separately labeled non-reasoning evaluator results.
- **Missing:** Terminal-Bench 2.1, Tau3, GDPval-AA Elo, Claw, DeepSWE and SWE-Pro: no verified public score found in reviewed primary evidence.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2 supports useful interactive tool handling; broader production-workflow evidence is incomplete.
- **Reasoning: 77/100.** Good science and mathematics; difficult knowledge questions cap the score.
- **Context window: 72/100.** 262K capacity with measured retrieval weakness already at 128K.
- **Multimodal: 85/100.** Image, document and frame-based video support; no native audio.
- **Coding: 75/100.** Competitive programming is strong; repository-scale repair remains unverified.
- **Cost efficiency: 98/100.** Very low paid token rates; reasoning length and routing affect actual task cost.
- **Overall Score: 76/100.** Half-up mean of 72, 77, 72, 85 and 75; attractive for economical visual and coding assistance.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate report beside this file.

