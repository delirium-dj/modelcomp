# MiMo V2.5 Free — Evaluation Report

**Model:** MiMo V2.5 Free (`opencode/mimo-v2.5-free`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** MiMo V2.5 Free (capability model: MiMo-V2.5, Xiaomi)
**Short:** Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.
**Provider:** Xiaomi (MiMo team) — free OpenCode Zen tier for this slug; MIT open weights (released 2026-04-28); paid Xiaomi API from ~$0.14/$0.28 per 1M.
**Release date:** 2026-04-22 (weights open-sourced 2026-04-28).
**Architecture:** Sparse MoE, ~310B total / ~15B active, trained on ~48T tokens; native extended reasoning.
**Context window:** 1M native; the Zen free route is capped at 200K in / 32K out (repo meta).
**Modalities:** Text, image, audio, video in; text out.
**Pricing:** $0 (Zen free tier, rate-capped); native paid ~$0.14/$0.28 per 1M.

### Raw benchmarks found

**BenchLM.ai source rows (Xiaomi MiMo-V2.5, 2026-09-28):**
- Terminal-Bench 2.0: **65.8%**; Terminal-Bench 2.1 (Vals): **60.7%**
- Claw-Eval: **62.3%**; MM-ClawBench: 23.8%; ResearchClawBench: 16.9%; Gert Labs: 46.89%
- SWE-bench Pro: **56.1%**; SWE-bench (Vals): **71.0%**; LiveCodeBench (Vals): **81.5%**
- Video-MME (with subtitle): **87.7%**; CharXiv: **81.0%**; MMMU-Pro: **77.9%**; Design Arena Website Elo: 1273
- GPQA Diamond (Vals): **81.6%**; MMLU-Pro (Vals): **82.9%**

**Vendor claims (Xiaomi official page, 2026-04-22):** "level with frontier closed-source models — matching Gemini 3 Pro on video, Claude Sonnet 4.6 on multimodal agentic work, and competitive across image and document understanding" from one unified model; "Pro-level agentic performance at roughly half the inference cost" (OpenRouter listing).

**Gaps:** No HLE/AIME/SWE-bench Verified published for the base V2.5; MM-ClawBench 23.8% and ResearchClawBench 16.9% show weak research-grade multimodal agentic work; Zen route caps context at 200K.

### Normalized scores (1–100)

- **Tool use: 68/100.** TB2.0 65.8% and TB2.1 (Vals) 60.7% sit in the upper 60s — above the 45–60% → 50–70 band, well under the 80s for 2026 leaders; Claw-Eval 62.3% plus the vendor's "on par with Claude Sonnet 4.6 on multimodal agentic work" claim. MM-ClawBench 23.8% and ResearchClawBench 16.9% hold it below the 75+ tier.
- **Reasoning: 74/100.** GPQA Diamond 81.6% and MMLU-Pro 82.9% are solid upper-mid (clearly above mid models, below the 88–93 frontier band); no HLE or competition-math numbers found.
- **Context window: 86/100.** Native 1M context (official + BenchLM + release notes) with a 1M-scale model trained for long-horizon coherence; no published retrieval/synthesis measurement, and the free route itself caps at 200K — hence upper-mid of the 85–94 band rather than 90+.
- **Multimodal: 78/100.** The strongest dimension: true omni input (text/image/audio/video) with Video-MME 87.7% (subtitle-assisted — still strong), MMMU-Pro 77.9%, and CharXiv 81.0% for chart understanding. Text-only output and no published raw-audio benchmarks keep it off the 85+ tier.
- **Coding: 76/100.** SWE-bench Pro 56.1% — within 3 points of the best standardized public score found in this audit (GPT-5.4 xHigh 59.1%) and above Claude Opus 4.6 thinking (51.9%); Vals SWE-bench 71.0% and LiveCodeBench 81.5% confirm strong coding; TB2.0 65.8% caps the agentic side.
- **Cost efficiency: 100/100.** This slug is the free Zen tier — $0 per the rubric's free-model reference point (native paid ~$0.14/$0.28 is also top-decile cheap, ~96-class).
- **Overall Score: 76/100.** Half-up mean of (68 + 74 + 86 + 78 + 76) / 5 = 76.4.

### Why not higher
The capability model is a 2026 Q2 open-weights omni model: its SWE-Pro 56.1%, TB2.1 60.7%, and GPQA 81.6% trail the September 2026 frontier (80–95 SWE band, TB2.1 87–89%, GPQA 92.8–93.6%) by one generation. It wins the cohort on value: full omni modality with verified video understanding at $0 (this slug) / $0.14-$0.28 (paid), which Cost 100 and Multimodal 78 capture.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
