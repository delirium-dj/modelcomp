# Ling 3.0 Tiny — findings by GPT 5.5

- Source: InclusionAI (`ling-3.0-tiny`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's small open MoE model for local helper tasks, context compression, summarization, and inexpensive edge inference.
- **Provider / access:** Hugging Face/open weights, local GGUF builds, Artificial Analysis-tracked hosted/free routes.
- **Release / knowledge:** Public release in September 2026; cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-tiny`, `ling-3.0-tiny`.
- **Context window:** Public local reports run **128K** context; Benchgen notes 131K-class hardware sizing for some builds.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-09):** Artificial Analysis page reports **$0/M input** and **$0/M output** for its tracked route; open weights are self-hostable.
- **Architecture:** Small hybrid-linear MoE, about **7.9B total / 1.3B active**.

### Raw benchmarks found

Agent / tool use:

- Community testing reports Ling 3.0 Tiny can generate poor or malformed tool calls in some llama.cpp setups, so tool reliability is limited.

Reasoning / knowledge:

- Artificial Analysis tracks Ling 3.0 Tiny intelligence, performance, price, speed, latency, context, and open-weights metrics (`https://artificialanalysis.ai/models/ling-3-0-tiny/`).
- Benchgen reports the model card includes benchmarks such as CCPM, AGIEval, SimpleQA-Verified, CruxEval, MultiPL-E, FullStackBench, LCBench, OlympiadBench, TheoremQA, OmniMath, CommonSenseQA, BBH, and LEval (`https://benchgen.com/models/inclusionai-ant-group/ling-3-0-tiny-base`).

Coding:

- Benchgen lists coding-relevant model-card benchmarks such as MultiPL-E, FullStackBench, and LCBench, but exact values were not recovered.

Long context:

- Local reports demonstrate **128K** context on small hardware, including NVIDIA Orin Nano-class devices.

### Normalized scores (1–100)

- **Tool use: 35/100.** Some local reports note fragile tool-call behavior.
- **Reasoning: 45/100.** Useful small-model reasoning, but no strong exact public score was recovered.
- **Context window: 64/100.** 128K context is strong for a tiny model.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 40/100.** Coding-relevant benchmarks exist in the model-card set, but exact values are missing and the model is tiny.
- **Cost efficiency: 100/100.** Free/open-weight routes make it excellent value for helper workloads.
- **Overall Score: 40/100.** Half-up mean of the five quality dimensions; best fit is local helper/context-compression tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

