# Qwen 3.5 9B — findings by GPT 5.6 Terra

- Source: Qwen’s Hugging Face model card and published evaluation results for `Qwen/Qwen3.5-9B`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba’s Qwen open-weight, image-text-to-text 9B-class model, intended for local or compatible hosted inference.
- **Provider / access:** Hugging Face model weights; documented compatibility with Transformers, vLLM, SGLang, and KTransformers.
- **Release / knowledge:** model artifacts were publicly available by 2026-02; no verified knowledge cutoff found.
- **IDs:** `Qwen/Qwen3.5-9B`.
- **Context window:** 262,144 positions in the published configuration.
- **Modalities:** image-text-to-text; the configuration includes a vision component and image/video token IDs.
- **Pricing (as of 2026-10-01):** Apache-2.0 weights; inference cost depends on the host.
- **Architecture:** 9B-class multimodal model; published configuration has 32 text layers and a vision encoder.

### Raw benchmarks found

Agent / tool use:

- Agent / tool-use benchmark: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (published Hugging Face evaluation result).

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- **262,144** maximum positions in the published configuration; no long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool-use capability is not backed by a public agent benchmark in the material found.
- **Reasoning: 80/100.** The published 81.7% GPQA Diamond result supports a strong compact-model reasoning score.
- **Context window: 88/100.** A verified 262K maximum position length is strong, capped without retrieval evidence.
- **Multimodal: 78/100.** The official image-text-to-text classification and vision configuration support robust visual input coverage.
- **Coding: 60/100.** No verified coding benchmark was found, so the score remains conservative.
- **Cost efficiency: 95/100.** Apache-2.0 weights enable local use, while compute remains the user’s cost.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions; a strong locally deployable multimodal model with incomplete agent/coding evidence.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-01
- Method: fresh public internet research; key source: [official Hugging Face model card and evaluations](https://huggingface.co/Qwen/Qwen3.5-9B). Scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
