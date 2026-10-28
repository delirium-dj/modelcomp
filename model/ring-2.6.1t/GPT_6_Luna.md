# Ring-2.6-1T — findings by GPT-6 Luna

- Source: inclusionAI/Ring-2.6-1T (`inclusionAI/Ring-2.6-1T`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** inclusionAI's trillion-parameter reasoning model for long-horizon agents, complex workflows, and professional coding. It supports high and xhigh reasoning-effort modes and is open-weight.
- **Provider / access:** Hugging Face weights `inclusionAI/Ring-2.6-1T`; ModelScope mirror is also linked by the publisher. No fixed hosted API price was verified.
- **Release / knowledge:** Published in 2026; the model-card README reviewed does not state a precise release date or knowledge cutoff.
- **IDs:** `inclusionAI/Ring-2.6-1T`.
- **Context window:** 128K native, extendable to 256K with YaRN per the model card.
- **Modalities:** Text input/output; reasoning and tool use. No image/audio/video support is documented for this checkpoint.
- **Pricing (as of 2026-10-28):** Open weights under MIT license; no per-token license charge. Self-hosting a trillion-parameter model requires substantial compute.
- **Architecture:** 1T total / 63B active parameters, reported in inclusionAI's model comparison chart; asynchronous RL training with the IcePop algorithm. MIT license.

### Raw benchmarks found

The exact Ring-2.6-1T results below come from inclusionAI's model card. The coding results are separately labeled xhigh in inclusionAI's Ling 3.0 comparison chart and are not presented as the default high-effort setting.

Agent / tool use:

- PinchBench: **87.60**; ClawEval: **63.82**; τ²-Bench Telecom: **95.32** (Ring-2.6-1T high mode, model card).

Reasoning / knowledge:

- ARC-AGI v2: **66.18**; AIME 2026: **95.83**; GPQA Diamond: **88.27** (Ring-2.6-1T xhigh mode, model card).

Coding:

- SWE-Bench Pro: **53.9%**; SWE-Bench Multilingual: **56.7%**; Terminal-Bench 2.1: **43.1%** (Ring-2.6-1T xhigh column in inclusionAI's comparison chart).

Long context:

- 128K native / 256K with YaRN is documented; no exact MRCR/RULER/GraphWalks retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 90/100.** PinchBench 87.60 and τ²-Bench Telecom 95.32 are strong; ClawEval 63.82 and publisher-only provenance cap the rating.
- **Reasoning: 93/100.** AIME 95.83, GPQA Diamond 88.27, and ARC-AGI v2 66.18 support a high score; results use xhigh effort and lack independent replication in this review.
- **Context window: 80/100.** 256K YaRN capacity is substantial, but no long-context retrieval result was published in the materials checked.
- **Multimodal: 15/100.** The documented checkpoint is text-only.
- **Coding: 80/100.** SWE-Pro 53.9 and Terminal-Bench 43.1 are useful but not frontier-leading; the reported coding results are xhigh and publisher-evaluated.
- **Cost efficiency: 88/100.** MIT open weights avoid per-token fees, but the trillion-parameter footprint makes deployment costly.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions (90+93+80+15+80)/5 = 71.6; suited to self-hosted, tool-heavy workflows when large-scale inference hardware is available.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from inclusionAI's Hugging Face model card and its published comparison chart. High/xhigh settings are kept separate; normalized scores are independent interpretations.
- Sources: [inclusionAI Ring-2.6-1T model card](https://huggingface.co/inclusionAI/Ring-2.6-1T); [inclusionAI Ling 3.0 Flash model card comparison](https://huggingface.co/inclusionAI/Ling-3.0-flash).
