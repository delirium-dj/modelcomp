# Ling-2.6-1T — findings by DeepSeek 4.1 Flash

- Source: Ant Group / InclusionAI / Ling-2.6-1T (`inclusionAI/Ling-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** Ant Group's trillion-parameter open-weight **non-reasoning** (instant/instruct) MoE (released ~2026-04-23), the sibling of the reasoning Ring-2.6-1T. Optimized for fast, low-cost high-throughput text and tool use.
- **Provider / access:** Open weights self-host (`inclusionAI/Ling-2.6-1T`); OpenAI-compatible providers (~$0.30/$2.50 blended). MIT license.
- **Release / knowledge:** ~2026-04-23 (AA); tech report arXiv:2606.15079 (2026-06-13); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-1T`.
- **Context window:** 262,144 (256K) tokens. Max output not separately published.
- **Modalities:** text in; text out. Non-reasoning instruct; tool use. No image/audio/video.
- **Pricing (as of 2026-10-09):** open weights (MIT, self-host); median provider **$0.30 in / $2.50 out** per 1M.
- **Architecture:** MoE, **1T total / 63B active**; 80 layers, 256 routed experts (8 active + 1 shared), 7:1 Lightning linear + MLA hybrid; MIT.

### Raw benchmarks found

> Rows are InclusionAI's tech report / HF card (self-reported); Artificial Analysis Intelligence Index is the only independent composite.

Coding / agent:

- SWE-bench Verified **72.20** (self); LiveCodeBench-v6 65.58; terminal-bench 2.0 40.45
- PinchBench 85.24; ClawEval 51.00; BFCL-v4 70.64; Tau2-Bench 78.36 (self)

Reasoning / knowledge:

- GPQA-Diamond **76.17**; SuperGPQA 58.32; C-SimpleQA 76.53; SimpleQA-Verified 31.50; HLE 10.06
- AIME 2026 **87.40**; HMMT Nov25 81.93; IMO-AnswerBench 65.81; ARCPrize 50.94; bbeh 52.37
- IFBench 57.62; LongBenchV2 48.31
- Artificial Analysis Intelligence Index: **17** (AA, non-reasoning) — conflict: 34 (self-reported card, likely reasoning variant)

Long context:

- 262K window; MRCR (16K–256K) **80.37** (self); no independent RULER published.

### Normalized scores (1–100)

- **Tool use: 72/100.** BFCL-v4 70.6, Tau2 78.4 and PinchBench 85.2 are strong (self-reported); non-reasoning design limits planner depth.
- **Reasoning: 68/100.** GPQA 76.2% and AIME 87.4% are decent; HLE 10.1% and the independent AA Index 17 cap it.
- **Context window: 72/100.** 262K-token window with self-reported MRCR 80.37 (200K–500K band).
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** SWE-bench Verified 72.2%, LiveCodeBench 65.6% (self-reported); Terminal-Bench 2.0 40.5% caps it.
- **Cost efficiency: 93/100.** MIT open weights with ~$0.30/$2.50 provider pricing.
- **Overall Score: 60/100.** (72 + 68 + 72 + 15 + 72) / 5 = 59.8 → 60. Best fit: cheap high-throughput open-weight text/tool execution; prefer Ring-2.6-1T when reasoning depth matters.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face model card, the Ling-2.6 technical report (arXiv:2606.15079) and the Artificial Analysis model page. The card-vs-AA Intelligence-Index conflict (34 vs 17, reasoning-vs-instruct variant) is surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
