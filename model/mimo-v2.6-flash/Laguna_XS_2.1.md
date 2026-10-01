# MiMo V2.6 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, llm-stats, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE workhorse (309B total/15B active), cost-efficient sibling of MiMo V2.6 Pro for long-horizon agentic coding.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-flash` (Chat Completions); OpenRouter (`xiaomi/mimo-v2.6-flash`); aggregated providers.
- **Release / knowledge:** Released 2026-09-21/22; knowledge cutoff not publicly stated.
- **IDs:** `xiaomi/mimo-v2.6-flash`; sibling `opencode/mimo-v2-6-free` for free tier.
- **Context window:** 1,048,576 tokens (1M) input; output unspecified.
- **Modalities:** Text, image, video, audio in; text out; hybrid reasoning; tool calling enabled; JSON mode unconfirmed.
- **Pricing (as of 2026-10-01):** $0.14 input / $0.28 output per 1M tokens; cached $0.0028; AA cost rank #6/116.
- **Architecture:** Sparse MoE 309B total/15B active per token; hybrid attention; MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%**
- OSWorld-Verified: **80.8%**
- Toolathlon-Verified: **73.6%**
- MiMo Cyber Bench: **77.2%**
- CyberGym: **95.1%**
- GDPval-AA: **55.0%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37.9** (#8 of 116)
- HLE: **35.1%**
- AA-LCR v1.1: **74.3%**
- CritPt: **12.0%**
- AA-Omniscience Accuracy: **27.0%**, Hallucination: **45.6%**

Coding:

- SciCode (AA): **51.3%**

Long context:

- 1,048,576-token window; no MRCR/RULER retrieval benchmarks found.

Multimodal:

- Omnimodal text/image/video/audio input per llm-stats; only text+image validated by Artificial Analysis.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 85/100.** Terminal-Bench 87.6%, OSWorld 80.8%, CyberGym 95.1%; strong agentic performance but missing Tau3/GDPval-style numbers caps from higher tier.
- **Reasoning: 72/100.** AA-LCR 74.3% + HLE 35.1% + Index 37.9; mid-tier reasoning; CritPt 12% very low; capped by missing GPQA/MMLU-Pro data.
- **Context window: 95/100.** Full 1M verified; excellent context length slot.
- **Multimodal: 92/100.** Native audio/video input support; 90+ tier for omnimodal; capped by no independent validation of video/audio outputs.
- **Coding: 82/100.** Terminal-Bench 87.6% frontier-adjacent; SciCode 51.3% moderate; missing SWE-bench/LiveCodeBench caps scoring.
- **Cost efficiency: 97/100.** $0.14/$0.28 + $0.0028 cache = extremely cost-effective; #6 cost rank at $0.06 per Index task.
- **Overall Score: 85/100.** Mean of (85 + 72 + 95 + 92 + 82) / 5 = 85.2 → 85. Best fit: cheap, long-horizon agentic coder with vision/audio capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Xiaomi docs, Artificial Analysis, llm-stats, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores. Self-reported source file available at `Mimo_v2.6_Flash.md`.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.