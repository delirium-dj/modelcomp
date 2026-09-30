# Nemotron 3.5 Lightning Free — findings by GPT-5.6 Terra

- Source: NVIDIA Nemotron 3.5 Lightning
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** NVIDIA Nemotron 3.5 Lightning 30B-A3B
- **Short description:** NVIDIA's open, hybrid MoE/Mamba reasoning model, represented by this free-model entry.
- **Provider / access:** [official NVIDIA Hugging Face model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16).
- **Release / knowledge:** May 2026 release; cutoff unpublished.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`.
- **Context window:** up to 1M tokens; NVIDIA documents 256K for a single-H100 deployment.
- **Modalities:** text and code.
- **Pricing (as of 2026-09-30):** open weights under NVIDIA's Open Model Development License; self-hosting cost varies.
- **Architecture:** hybrid Mamba-2, MoE and attention; 30B total / 3B active parameters.

### Raw benchmarks found

NVIDIA's exact-model card reports **81.94 MMLU-Pro** and **75.44 GPQA Diamond (no tools)**. Its published evaluation table also includes coding and agentic tasks; the model is explicitly documented as supporting a configurable thinking mode. [Model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)

### Normalized scores (1–100)

- **Tool use: 62/100.** Agentic and code-oriented use is supported, but the recovered exact-model card did not provide a directly comparable public tool-use headline result.
- **Reasoning: 76/100.** 75.44 on no-tools GPQA Diamond and 81.94 on MMLU-Pro support a strong reasoning assessment.
- **Context window: 95/100.** A documented 1M-token maximum is excellent, with an important practical 256K single-H100 note.
- **Multimodal: 15/100.** The card documents a language model, not image/audio/video inputs.
- **Coding: 72/100.** Coding-language training and published coding-task coverage support a solid score, but the retrieved evidence lacks one clean headline coding value.
- **Cost efficiency: 78/100.** Open reference weights enable self-hosting and customization, counterbalanced by the documented 80GB GPU deployment target.
- **Overall Score: 64/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-30
- Method: fresh first-party model-card research. Scores are normalized interpretations, not vendor benchmark scores.
