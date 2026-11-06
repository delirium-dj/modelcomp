# Qwen 3.8 Max — findings by Mistral Large 4

- Source: Alibaba / Qwen (`qwen/qwen3.8-max-0902`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's most capable Qwen-family flagship — 2.4T-param MoE (95B active), first Max-class model with open-sourced weights; "second only to Fable 5" claim at GA, beaten on DeepSWE/TB 3.0 by Claude per DataCamp. Preview July 2026, GA 2026-08-03, 0902 checkpoint 2026-09-05.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (dashscope-intl compatible-mode), Bailian, OpenRouter (`qwen/qwen3.8-max-0902`), Qwen Chat app (free consumer); open weights on Hugging Face (`Qwen3.8-2.4T-A95B` custom license, text-only; `Qwen3.8-27B` Apache 2.0).
- **Release / knowledge:** Preview 2026-07-19, GA 2026-08-03 (release-date conflict between sources noted: Jul 19 vs Aug 3 vs Aug 12-13 for weights); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-0902` (API); `qwen/qwen3.8-max-0902` (OpenRouter); HF `Qwen/Qwen3.8-2.4T-A95B`.
- **Context window:** 1,000,000 tokens (BenchLM); MRCR v2 measured at 256K.
- **Modalities:** Text + image in (image input added in 3.8), text out; reasoning mode; tool calls; agentic. Max-class weights checkpoint is text-only.
- **Pricing (as of 2026-11-05):** $2.00 / $6.00 per 1M in/out via Alibaba Cloud (developer.puter, Sep 2026); free consumer app; self-host via open weights. No free API tier.
- **Architecture:** Open-weight 2.4T MoE, 95B active, built on Qwen 3.5 foundation; custom license for the 2.4T checkpoint (400GB+ even quantized), Apache 2.0 for 27B.

### Raw benchmarks found

Official qwen.ai blog + GA table cross-checked against kingy, DataCamp, emergent, Yotta Labs, BenchLM, AA, orcarouter; conflicts noted:

Agent / tool use:

- CoWorkBench: **74.8**; WideSearch: **81.9**; IFBench: **82.8** (kingy, Alibaba GA table)
- Leads PaperBench, IFBench, Terminal-Bench vs Fable 5 in vendor table; trails HLE and SWE-bench Pro (emergent.sh)
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (kingy); AA Intelligence Index ~36–46 band (AA model page, median 36 — version drift noted)
- MMMU-Pro: **82.3%** (multimodal row, kingy)
- HLE: trails Fable 5 (emergent.sh; exact % not captured)

Coding:

- Terminal-Bench 2.1: **86.6** (kingy); Claude still leads TB 3.0 (DataCamp)
- SWE-bench Pro: **67.7%**; DeepSWE v1.1: **56.6%** (kingy)
- SWE-bench Verified / LiveCodeBench: no verified public score found for qwen3.8-max specifically (3.7-Max lineage: SWE-V 80.4, LCB 91.6 — labelled predecessor, not merged)

Long context:

- MRCR v2: **92.9% at 256K** (kingy) inside the 1M window; no verified ≥512K retrieval

### Normalized scores (1–100)

- **Tool use: 87/100.** CoWorkBench 74.8 / WideSearch 81.9 / IFBench 82.8 strong agentic rows; no OSWorld/Claw-Eval.
- **Reasoning: 87/100.** GPQA 92.6% and IFBench 82.8% strong; AA Index reading drifts (~36 median); HLE trails Fable 5.
- **Context window: 96/100.** 1M window with MRCR 92.9% at 256K; below the 98%-at-512K bar.
- **Multimodal: 80/100.** Text + image in (MMMU-Pro 82.3), text out; API model multimodal, weights checkpoint text-only.
- **Coding: 89/100.** TB 2.1 86.6 and SWE-Pro 67.7% lead the open-weight class; DeepSWE 56.6% trails proprietary frontier.
- **Cost efficiency: 82/100.** $2/$6 per 1M between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; free consumer app and Apache-2.0 27B for self-hosting; no free API tier.
- **Overall Score: 88/100.** Half-up mean of (87 + 87 + 96 + 80 + 89) / 5 = 87.8 → 88. Best fit: strongest open-weight flagship API — 2.4T MoE at $2/$6 with 1M context; proprietary frontier still leads DeepSWE/HLE.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches, official qwen.ai blog + OpenRouter cited, 2026-11-05 UTC); cross-checked against kingy, DataCamp, emergent.sh, Yotta Labs, BenchLM, AA, orcarouter, developer.puter, felloai, AIToolsReview; conflicts (release Jul 19 preview vs Aug 3 GA vs Aug 12 weights; AA ~36 vs higher readings) listed side by side; predecessor 3.7-Max figures labelled, not merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8 — Qwen official blog (GA table)](https://qwen.ai/blog?id=qwen3.8)
  - [OpenLM — Qwen3.8-Max release (2.4T, first open-sourced Max)](https://openlm.ai/qwen3.8/)
  - [kingy — Qwen3.8-Max specs/benchmarks (TB 86.6, SWE-Pro 67.7, GPQA 92.6, MRCR 92.9@256K)](https://kingy.ai/blog/qwen3-8-max-benchmarks-specs-kimi-k3-deepseek-v4-flash/)
  - [BenchLM — qwen3-8-max (1M ctx, open weights Qwen3.8-2.4T-A95B)](https://benchlm.ai/models/qwen3-8-max)
  - [DataCamp — Qwen3.8-Max (Claude still leads TB 3.0/DeepSWE)](https://www.datacamp.com/blog/qwen3-8-max)
  - [emergent.sh — Qwen 3.8 benchmarks (leads PaperBench/IFBench/TB vs Fable 5; trails HLE/SWE-Pro)](https://emergent.sh/learn/qwen-3-8-benchmarks)
  - [orcarouter — 3.8-Max vs 3.7-Max (3.7 3-4x faster, ~5x cheaper per task)](https://www.orcarouter.ai/blog/qwen-3-8-max-vs-qwen-3-7-max)
  - [developer.puter — Qwen API pricing Sep 2026 (3.8-Max $2/$6)](https://developer.puter.com/tutorials/qwen-api-pricing/)
  - [Yotta Labs — Qwen3.8-Max release/specs/weights access](https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
  - [Artificial Analysis — qwen3-8-max model page](https://artificialanalysis.ai/models/qwen3-8-max)
  - [OpenRouter — qwen/qwen3.8-max-0902](https://openrouter.ai/qwen/qwen3.8-max-0902)
