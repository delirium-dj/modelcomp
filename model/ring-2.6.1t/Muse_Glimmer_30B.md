# Ring-2.6-1T — findings by Muse Glimmer 30B

- Source: Meta (`muse-glimmer-30b-contributor`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's open-weights trillion-parameter reasoning MoE (1T total / 63B active, MIT) with adjustable high/xhigh reasoning effort for maths, research and agentic workflows.
- **Provider / access:** InclusionAI; Hugging Face `inclusionAI/Ring-2.6-1T`; ModelScope mirror; OpenRouter / Novita routes.
- **Release / knowledge:** Technical report arXiv:2606.15079 published 13 Jun 2026; knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ring-2.6-1T`, `ring-2.6-1t`, `opencode/ring-2.6.1t`.
- **Context window:** 131,072 native, 256,144 with YaRN; 262K served on hosted routes.
- **Modalities:** Text in/out only; no verified native vision/audio.
- **Pricing (as of 2026-10-27):** MIT open weights self-host free; hosted ~$0.30/$2.50 per 1M input/output, cache ~$0.06.
- **Architecture:** MoE 1T total / 63B active; hybrid linear attention with Lightning Attention + MLA; Async RL + IcePop training.

### Raw benchmarks found

Agent / tool use:
- PinchBench: **87.60** (Hugging Face model page, high effort)
- Claw-Eval General: **63.82** (Hugging Face eval_results `claw_eval.yaml`)
- Tau2-Bench Telecom: **95.32** (model page)
- Tool use / JSON support verified in model card.

Reasoning / knowledge:
- GPQA Diamond: **88.27** (Hugging Face eval_results `gpqa_diamond.yaml`; model page also cites 88.27/88.3%)
- AIME 2026: **95.83** (Hugging Face eval_results `aime_2026.yaml`; model page cites 95.83/95.8%)
- ARC-AGI-V2: **66.18** (model page, xhigh)
- Technical report arXiv:2606.15079 confirms Ring-2.6 as deeper reasoning sibling of Ling-2.6 with KPop RL.

Coding:
- SWE-bench Verified: **74.0** (Hugging Face eval_results `swe_bench_verified.yaml`)
- SWE-bench Resolved reported as 74* in HF eval block.

Long context:
- Native 128K, YaRN 256K; hybrid linear attention design documented in arXiv:2606.15079.
- No verified public MRCR / RULER / GraphWalks retrieval numbers.

Cost efficiency:
- MIT license open weights; cheapest hosted routes ~$0.075/$0.625 via OpenRouter catalog.

### Normalized scores (1–100)

- **Tool use: 85/100.** PinchBench 87.6 + Tau2 Telecom 95.3 + Claw-Eval 63.8 show strong agentic execution; capped by limited public Terminal-Bench/GDPval rows.
- **Reasoning: 86/100.** GPQA 88.3 + AIME 95.8 + ARC-AGI-V2 66.2 demonstrate high reasoning ceiling under xhigh effort; tempered by missing HLE/LCR.
- **Context window: 75/100.** 128K native / 256K YaRN with efficient hybrid attention; no measured long-context retrieval scores published.
- **Multimodal: 15/100.** Text-only model; no verified image/audio support.
- **Coding: 78/100.** SWE-Verified 74.0 provides solid coding evidence; missing Pro/LiveCodeBench/SciCode rows.
- **Cost efficiency: 88/100.** MIT open weights + low hosted pricing for 1T scale; self-host requires large GPU fleet.
- **Overall Score: 68/100.** Half-up mean of five quality dims (85+86+75+15+78)/5 = 67.8 → 68.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research — Hugging Face model page `https://huggingface.co/inclusionAI/Ring-2.6-1T`, arXiv `2606.15079`, ModelScope mirror; unnumbered vendor blurbs not counted; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
