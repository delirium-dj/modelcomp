# Gemma 4 26B A4B — findings by GPT 5.6 Sol

- Source: Google (`google/gemma-4-26B-A4B`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's efficient open multimodal reasoning MoE, activating roughly 4B of 26B parameters per token for workstation-class deployment.
- **Provider / access:** Downloadable weights, Hugging Face, and Amazon Bedrock; OpenAI-compatible self-hosting supported.
- **Release / knowledge:** Released 2026-04-02; cutoff not disclosed.
- **IDs:** `google/gemma-4-26B-A4B`; no verified Zen Free ID.
- **Context window:** 256K tokens ([official model card](https://ai.google.dev/gemma/docs/core/model_card_4)).
- **Modalities:** Text and image input, text output; thinking and native functions; this size does not support audio.
- **Pricing (as of 2026-10-07):** Open weights under the Gemma license; hosted pricing varies, so no universal token rate applies.
- **Architecture:** Sparse MoE, 25.2B total / 3.8B active parameters, with an MTP draft model.

### Raw benchmarks found

Agent / tool use:

- IFEval: **88.3%** (Google official instruction-tuned table).
- Terminal-Bench, Tau3, GDPval-AA, MCP-Atlas: no verified public exact score found.

Reasoning / knowledge:

- MMLU-Pro: **82.6%**; GPQA Diamond: **82.3%** (Google model-card table summarized with source tracing by [Gemma4.org](https://www.gemma4.org/gemma-4-benchmarks)).
- Arena text Elo: **1441** as of 2026-04-02 ([Google DeepMind](https://deepmind.google/models/gemma/gemma-4/)).

Coding:

- LiveCodeBench: **77.1%** (Google model-card evaluation).
- SWE-bench Verified/Pro, SciCode, DeepSWE: no verified public score found.

Long context:

- No official MRCR/RULER value was found; Google documents 256K capacity.

### Normalized scores (1–100)

- **Tool use: 75/100.** Native function support and IFEval 88.3 show strong instruction control, capped by missing agent benchmarks.
- **Reasoning: 84/100.** MMLU-Pro 82.6 and GPQA 82.3 are excellent for only 4B active parameters.
- **Context window: 86/100.** 256K is substantial, but no standardized full-window retrieval score was found.
- **Multimodal: 82/100.** Image input and MMMU-Pro 73.8 provide meaningful vision evidence; output is text-only and audio is absent.
- **Coding: 85/100.** LiveCodeBench 77.1 is strong, while repository-level agent evidence is missing.
- **Cost efficiency: 97/100.** Open weights and 3.8B active parameters provide exceptional local-inference efficiency.
- **Overall Score: 82/100.** Half-up mean of the five non-cost dimensions; best for efficient local multimodal reasoning and code generation.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Google's official Gemma pages, model card, and weights; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
