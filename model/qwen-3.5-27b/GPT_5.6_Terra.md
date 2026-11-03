# Qwen3.5-27B — findings by GPT-5.6 Terra

- Source: Qwen / Qwen3.5-27B
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Qwen's Apache-2.0 27B-class multimodal model for local or hosted reasoning, coding, and vision tasks.
- **Provider / access:** Hugging Face weights; Transformers, vLLM, SGLang, and KTransformers compatible.
- **Release / knowledge:** 2026; cutoff not specified.
- **IDs:** `Qwen/Qwen3.5-27B`.
- **Context window:** 262,144 tokens.
- **Modalities:** image-text-to-text; text, image, and video input; text output.
- **Pricing (as of 2026-11-03):** Apache-2.0 weights; host-dependent inference cost.
- **Architecture:** open-weight 27B-class model.

### Raw benchmarks found

Agent / tool use:

- ScreenSpot-Pro: **70.3%** (published model-card evaluation).

Reasoning / knowledge:

- GPQA Diamond: **81.82%**; MMLU-Pro: **86.1%**; AIME 2026: **90.83%** (published model-card evaluations).

Coding:

- SWE-bench Verified: **72.4%** (published model-card evaluation).

Long context:

- 262,144-token configuration; no public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** 70.3% ScreenSpot-Pro supports strong visual-agent behavior.
- **Reasoning: 86/100.** GPQA, MMLU-Pro, and AIME results are strong for this size class.
- **Context window: 90/100.** 262K context is substantial, though below 1M.
- **Multimodal: 87/100.** Native image/video input with strong MMMU-Pro evidence.
- **Coding: 88/100.** 72.4% SWE-bench Verified is excellent published coding evidence.
- **Cost efficiency: 95/100.** Apache-2.0 open weights provide unusually strong deployment value.
- **Overall Score: 86/100.** Mean = 86.2; a capable open multimodal coding model.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Official Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Independent model overview](https://selfhost.directory/models/qwen/qwen3.5-27b)
  - [Independent TeochewBench study](https://arxiv.org/abs/2609.18156)
