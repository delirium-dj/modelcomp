- Source: Alibaba/Qwen3.8-Flash-Next
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba Qwen's 2026-08-26 open-source **Qwen4-architecture preview** — a 125B/6B-active multimodal MoE released early for community validation before the full Qwen4 family. A distinct model; Qwen3.8-Flash (production API SKU), Qwen3.8-Max, Qwen3.8-27B and Qwen4-Max are separate.
- **Provider / access:** Open weights on Hugging Face and ModelScope (plus FP8 quantisation); SGLang Day-0 support; the production version is served as `Qwen3.8-Flash` on the 千问 AI 平台 (OpenAI Chat Completions, Responses API and Anthropic-compatible interfaces) and powers 千问办公 standard mode.
- **Release / knowledge:** open-sourced 2026-08-26 23:00 Beijing time; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.8-flash-next` (research preview weights); production ID `qwen3.8-flash`. Licence: **Qwen Community License 1.0** per secondary launch coverage (the sibling Flash-Next). No free Zen ID verified.
- **Context window:** no verified figure in the retrieved Baike page — the related Qwen3.8-Flash lists 262K native / 1M via YaRN, but that is a different SKU and is not attributed here; no verified public score found.
- **Modalities:** multimodal (text and image in, text out per the family); AndroidWorld, MathVision and ERQA multimodal/embodied evaluations. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); no rate card in the retrieved page — no verified public price found.
- **Architecture:** MoE, **125B total / 6B active** parameters; next-generation Qwen4 "Next" architecture (GDN+QSA hybrid attention / gated residual / N-gram embedding per secondary coverage); **~90% lower training cost** than Qwen3.7-Plus; FP8 quantised release.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **+9.1 points** over Claude Opus 4.6 (relative delta, no absolute score)
- JobBench: **~+20 points** over Claude Opus 4.6 (relative delta)
- CoWorkBench and Toolathlon Verified: beat DeepSeek-V4-Flash (directional, no scores)
- 10 text tasks: **#1** among Qwen3.8-27B, Qwen3.7-Plus, DeepSeek-V4-Flash-0731 and Claude Opus 4.6 (Max)
- 13 multimodal tasks: **#1** against the same comparands
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AndroidWorld: **+22.5 points** over Claude Opus 4.6; MathVision **+25.1**; ERQA (embodied) **+31.5** — relative deltas
- Base (pretraining-only) checkpoint: **best result in 8 of 14 benchmarks** incl. MMLU-Pro, SuperGPQA, BBH, SWEBench-Pretrain, MGSM, MMMU, outperforming a Qwen3.7-Plus base model **3x its size**
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public absolute score found

Coding:

- SWE-bench Pro and JobBench relative deltas above; SWEBench-Pretrain among the base model's 8 wins
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** #1 in 10 text and 13 multimodal tasks against four strong comparands, +9.1 SWE-bench Pro and ~+20 JobBench over Opus 4.6, with CoWorkBench/Toolathlon wins; capped by all published figures being relative deltas without absolute scores.
- **Reasoning: 88/100.** 8-of-14 best base-checkpoint results including MMLU-Pro / SuperGPQA / BBH and +25.1 MathVision; capped by no absolute reasoning benchmark score.
- **Context window: 85/100.** Scored conservatively: no verified window for this exact checkpoint (the 262K/1M figures belong to the separate Qwen3.8-Flash SKU).
- **Multimodal: 90/100.** 13-of-13 multimodal task wins, +22.5 AndroidWorld, +31.5 ERQA and MMMU among the base model's wins; capped by no absolute multimodal score and no verified audio/video input.
- **Coding: 90/100.** +9.1 SWE-bench Pro over Opus 4.6, SWEBench-Pretrain win and CoWorkBench/Toolathlon results at only 6B active params; capped by no absolute coding score.
- **Cost efficiency: 97/100.** Free open weights, 6B active params from 125B, ~90% lower training cost than Qwen3.7-Plus, FP8 release and Day-0 SGLang support. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 90, 88, 85, 90, 90 = 88.6 → 89. Best fit: community/self-hosted evaluation of the Qwen4 architecture, efficient multimodal agents and local deployment research; not a production API SKU.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.8-Flash-Next article (release, 125B/6B, ~90% training-cost reduction, full relative benchmark deltas, 10-text/13-multimodal #1 claims, base-model 8-of-14 wins, open-source/API split), plus search excerpts for the Qwen Community License 1.0 and the separate Qwen3.8-Flash SKU — explicitly labelled. All comparison figures measured under other model IDs (Claude Opus 4.6, Qwen3.7-Plus, DeepSeek-V4-Flash, Qwen3.8-27B) are labelled by harness and never merged; relative deltas are never converted to absolute scores. The 262K/1M context of the production Qwen3.8-Flash is NOT attributed to this preview. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Qwen3.8-Flash-Next — 百度百科 (release, architecture, benchmark deltas, open weights)](https://baike.baidu.com/item/Qwen3.8-Flash-Next/68707034)
  - [Qwen3.8-Flash — 百度百科 (retrieved via search excerpt; separate production SKU identity)](https://baike.baidu.com/item/Qwen3.8-Flash/68721556)
