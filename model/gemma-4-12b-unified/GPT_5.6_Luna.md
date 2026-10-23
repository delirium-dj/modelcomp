# Gemma 4 12B Unified - findings by GPT 5.6 Luna

- Source: Google (`google/gemma-4-12B-IT` / Gemma 4 12B Unified)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's dense open-weight multimodal Gemma 4 model with an encoder-free unified architecture for reasoning, coding, vision, and audio.
- **Provider / access:** The official Google Gemma 4 model card documents local Transformers usage and the 12B Unified family variant.
- **Release / knowledge:** The card cites the Gemma 4 Technical Report (arXiv:2607.02770); training-data cutoff is January 2025.
- **IDs:** Gemma 4 12B Unified; instruction-tuned family ID is documented as `google/gemma-4-12B-it`.
- **Context window:** 256K tokens.
- **Modalities:** Text, image, audio, and video input with text output; configurable thinking and native function calling.
- **Pricing (as of 2026-10-23):** No verified hosted per-token price found for the exact checkpoint. Apache-2.0 open weights support local deployment.
- **Architecture:** 11.95B dense parameters; encoder-free unified multimodal architecture; Apache-2.0.

### Raw benchmarks found

> All figures are for Gemma 4 12B Unified instruction-tuned evaluation in Google's official Gemma 4 model card.

Agent / tool use:

- Tau2 average over 3: **69.0%**

Reasoning / knowledge:

- MMLU Pro: **77.2%**
- GPQA Diamond: **78.8%**
- AIME 2026, no tools: **77.5%**
- HLE, no tools: **5.2%**
- BigBench Extra Hard: **53.0%**
- MMMLU: **83.4%**

Coding:

- LiveCodeBench v6: **72.0%**
- Codeforces Elo: **1659**

Long context:

- MRCR v2 8-needle 128K average: **43.4%**
- Maximum context: **256K tokens**

Multimodal:

- MMMU Pro: **69.1%**
- MATH-Vision: **79.7%**
- MedXpertQA MM: **48.7%**
- OmniDocBench 1.5 average edit distance: **0.164** (lower is better)
- CoVoST: **38.5%** (Chinese excluded)
- FLEURS average edit distance: **0.069** (lower is better)

### Normalized scores (1-100)

- **Tool use: 72/100.** Tau2 69.0% is solid evidence for structured tool use, but no broader public agent or terminal suite was reported.
- **Reasoning: 75/100.** MMLU Pro 77.2%, GPQA 78.8%, and AIME 77.5% are good, while HLE 5.2% caps difficult open-ended reasoning.
- **Context window: 72/100.** The 256K limit is in the 200K-500K tier, with MRCR 43.4% indicating moderate long-context retrieval.
- **Multimodal: 86/100.** This unified variant supports image, audio, and video inputs, with public vision and audio results; document and speech scores leave room below the frontier.
- **Coding: 74/100.** LiveCodeBench 72.0% and Codeforces Elo 1659 show capable coding, with no verified SWE-bench or terminal-agent score.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and local deployment make the model highly cost-efficient, although hardware cost was not quantified.
- **Overall Score: 76/100.** A balanced open multimodal model for local assistants and coding systems that benefit from audio support as well as vision.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: Official Google Gemma 4 Hugging Face model card and technical-report references; scores are normalized interpretations, not official vendor scores.
