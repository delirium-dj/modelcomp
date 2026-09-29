# Qwen 3.7 — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.7 (Qwen3.7-Max flagship), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: MRCR/spreadsheet/output-cap variance rows added; scores hold 84); re-verified 2026-09-29 (UTC, user-signed-off re-research: Max proven TEXT-ONLY by 3 sources + LiveCode 91.6 + SWE-Multi 78.3 + MMLU-Pro/IFBench + Terminal-Hard + Arena + Index-revision added; Tool 78 → 79, Multimodal 80 → 15, Coding 84 → 86, Overall 84 → 72)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (evaluated via the Qwen3.7-Max flagship; Plus/Flash siblings noted)
- **Short description:** Alibaba's mid-2026 agent-flagship family — Qwen3.7-Max leads its peer group on the harder SWE-Pro coding benchmark with documented 35-hour autonomous runs. Best fit for long-horizon coding agents and tool orchestration. Variant note: the `opencode/qwen-3.7` ID does not name a sub-variant, so this report scores the Max flagship (richest verified data) and labels Plus/Flash numbers as siblings.
- **Provider / access:** Alibaba Cloud (Model Studio API); OpenCode Zen `opencode/qwen-3.7`. Chat Completions-compatible API.
- **Release / knowledge:** Qwen3.7-Max 2026-05-19/21 (announced at Alibaba Cloud Summit; per FrankX and GIGAZINE); Plus 2026-06-01 (Vals); Flash 2026-07-27 (LM Market Cap). Knowledge cutoff: no verified public statement found.
- **IDs:** `opencode/qwen-3.7` (sub-variant ambiguous; cost scored on Max≈$1.50/$4.50 paid pricing)
- **Context window:** 1M total tokens, 65–66K max output — verified via Vals (Plus page), pricepertoken (Max page), and BenchLM compare page (swfte directory lists Max output 33K — variance noted, not scored)
- **Modalities:** Text-only in/out for scored Max flagship (Model Studio pure-text interface; aimodelsnavi/airankings consensus — corrects filed text+image — re-verified 2026-09-29); image/video live on Plus sibling only; reasoning yes; tool/function calls yes (BFCL v4 75.0%)
- **Pricing (as of 2026-09-23):** Max $1.48–$2.50/$4.42–$7.50, Plus $0.40/$1.60, Flash $0.03/$0.13 per 1M in/out (verified via pricepertoken, Vals, LM Market Cap). Zen `qwen-3.7` tier price unverified — scored on Max-class paid pricing. No $0 tier confirmed.
- **Architecture:** Proprietary closed weights, reasoning agent model (params undisclosed)

### Raw benchmarks found

> Max rows are Alibaba's official launch-table figures (via FrankX analysis, GIGAZINE, BenchLM sourced rows) unless marked otherwise. Plus rows are Alibaba launch benchmarks (via BenchLM) or Vals independent evals.

Agent / tool use:

- Terminal-Bench 2.1: Max Terminus-2 TB 2.0 **69.7%** (vendor table via FrankX/GIGAZINE); Plus TB 2.0 **70.3%** (vendor via BenchLM), TB 2.1 (Vals independent) **52.81%**
- Terminal Hard: **50.8%** (+6.9pp over Qwen3.6 Max — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: QwenClawBench **64.3%** (BenchLM sourced row, Max)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP-Atlas **76.4%** (vendor, beats Opus 4.6 Max 75.8%), MCP-Mark **60.8%** (vendor via GIGAZINE); BFCL v4 **75.0%**, VITA-Bench **47.9%** (BenchLM sourced rows)
- Gert Labs: **64.27%** (BenchLM sourced row, Max)
- Arena Text Elo: **~1489 #14**; WebDev Arena: **1541 #4** (aimodelsnavi — re-verified 2026-09-29)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** Max (vendor via FrankX; pricepertoken lists 92.3)
- HLE: **53.5%** with tools (BenchLM sourced row, Max); without-tools: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **56.6** v4.0 launch (#5); **46** mid-2026 revision; **30** re-based v4.3 68th/200 (airankings revision trail — re-verified 2026-09-29); BenchLM overall Max 68.56 / Plus 62.29
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Apex reasoning: **44.5** (vendor-claimed via FrankX — provisional)
- MMLU-Pro: **89.6%**; IFBench: **80.5%** (aimodelsnavi third-party page — re-verified 2026-09-29)
- MRCR-v2 128K: **90.4%** (Alibaba launch table via DigitalApplied); **SpreadSheetBench v1 87.0%** (same table); lowest hallucination rate among frontier models **22.9%** (launch table — amended 2026-09-27)

Coding:

- SWE-bench Verified / SWE-Pro: Verified **80.4%** Max (vendor — trails Opus 4.6 Max 80.8 by a hair), Plus **77.7%** (vendor via BenchLM); SWE-Pro **60.6%** Max — leads Kimi K2.6 Thinking (59.5) and DeepSeek V4 Pro Max (59.0); Plus **57.6%**; SWE Multilingual: **78.3%** top-reported (aimodelsnavi — re-verified 2026-09-29)
- LiveCodeBench: **91.6%** Max (aimodelsnavi third-party page — re-verified 2026-09-29; replaces Qwen3.6-Plus proxy)
- SciCode / AA-SciCode: Plus **51.3%** (vendor via BenchLM)
- Vibe Code Bench: Plus full-bench **46.39%** / Index subset 46.94% (Vals independent)
- DeepSWE / Coding Index / other: no verified public score found for 3.7 (pricepertoken Coding percentile 66.0 for Max — index, not a pass rate, noted only)
- Kernel Bench L3 (compute-kernel proxy): median **1.98×** PyTorch speedup, faster than torch.compile in 96% of cases (vendor via GIGAZINE)

Long context:

- 1M window verified; 35-hour autonomous CUDA-kernel run with 1,000+ tool calls demonstrates effective long-horizon use (vendor demo via GIGAZINE/FrankX) — but no verified MRCR/RULER/GraphWalks retrieval percentage found, so extreme-end retrieval is unscored

### Normalized scores (1–100)

- **Tool use: 79/100.** TB 2.0 ~70% plus Terminal-Hard 50.8%, MCP-Atlas 76.4% and BFCL 75% show strong orchestration; no Tau3/GDPval numbers and a 52.8% independent TB-2.1 row cap it.
- **Reasoning: 90/100.** GPQA 92.4% with HLE 53.5% (tools) and AA Index 56.6 clears the frontier bar.
- **Context window: 90/100.** Full 1M window proven in 35-hour autonomous runs, but zero verified retrieval-percentage evidence keeps it off the 95+ tier.
- **Multimodal: 15/100.** Max flagship is text-only (3-source consensus); image/video live on Plus sibling, out of scored scope — text-only floor applies.
- **Coding: 86/100.** SWE-V 80.4% plus LiveCode 91.6%, SWE-Multi 78.3% and peer-leading SWE-Pro 60.6% show strong coding; SciCode 51.3% and no DeepSWE flagship numbers cap it short of 90.
- **Cost efficiency: 85/100.** Max-class ~$1.50/$4.50 paid pricing undercuts $2+/$7+ frontier peers; Plus/Flash siblings are far cheaper but the scored ID prices at Max class.
- **Overall Score: 72/100.** Mean of (79 + 90 + 90 + 15 + 86) / 5 = 72.0 → 72; best fit as a long-horizon coding-agent flagship at below-frontier pricing — multimodal correction applied, see row.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (Alibaba launch tables via FrankX and GIGAZINE, Vals Qwen 3.7 Plus eval, BenchLM MiniMax-M3-vs-Max and Qwen3.6 Plus pages, pricepertoken Max pricing, LM Market Cap Flash page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
