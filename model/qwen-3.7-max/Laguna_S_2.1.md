# Qwen 3.7 — findings by Laguna S 2.1

> Source: opencode/qwen-3.7 (Alibaba), e.g. FrankX, GIGAZINE, BenchLM, modelscale, pricepertoken
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Qwen 3.7 (scored via the Qwen3.7-Max flagship; Plus/Flash siblings noted).
- Short description: Alibaba's mid-2026 agent-flagship family — Qwen3.7-Max leads its peer group on the harder SWE-Pro coding benchmark with documented 35-hour autonomous runs. Best fit for long-horizon coding agents and tool orchestration.
- Provider / access: Alibaba Cloud (Model Studio API); OpenCode Zen `opencode/qwen-3.7`. Chat Completions-compatible API.
- Release / knowledge: Qwen3.7-Max 2026-05-19/21 (Alibaba Cloud Summit); Plus 2026-06-01; Flash 2026-07-27. Knowledge cutoff: not verified.
- IDs: `opencode/qwen-3.7` (sub-variant ambiguous; cost scored on Max-class paid ~$1.50/$4.50). No $0 tier confirmed.
- Context window: 1,000,000 total tokens, 65–66K max output (≥1M tier; clears 64K caveat). Verified via Vals/Pricepertoken/BenchLM.
- Modalities: text + image input → text output (+image-in); Plus documented to add video input. Text-only output. Reasoning yes; tool/function calls yes (BFCL v4 75.0%). No audio/PDF-video verified for Max.
- Pricing (as of 2026-09-23): Max $1.48–$2.50/$4.42–$7.50, Plus $0.40/$1.60, Flash $0.03/$0.13 per 1M in/out (pricepertoken/Vals/LM Market Cap). Zen tier unverified — scored on Max-class paid pricing.
- Architecture: proprietary closed weights, reasoning agent model (params undisclosed).

### Raw benchmarks found

> Verified public numbers: Max rows are Alibaba official launch-table figures (via FrankX/GIGAZINE/BenchLM) unless marked; Plus rows via BenchLM/Vals. Benchmarks not located are NOT fabricated.

Agent / tool use:
- Terminal-Bench 2.1: Max TB 2.0 **69.7%** (vendor); Vals independent TB 2.1 **52.81%**; Plus TB 2.0 **70.3%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- MCP-Atlas: **76.4%** (vendor Max — beats Opus 4.6 Max 75.8%); MCP-Mark **60.8%**; VITA-Bench **47.9%**; Gert Labs **64.27%**
- BFCL v4 (tool calling): **75.0%** (BenchLM sourced)
- QwenClawBench: **64.3%** (BenchLM, Max)

Reasoning / knowledge:
- GPQA Diamond: **92.4%** Max (FrankX/pricepertoken 92.3)
- HLE: **53.5%** with tools (BenchLM, Max); without-tools: no verified number
- Artificial Analysis Intelligence Index v4.0: **56.6** (Max — highest Chinese-model placement, global top 5, per FrankX); BenchLM overall Max 68.56 / Plus 62.29
- Apex reasoning: **44.5** (vendor-claimed, provisional — not scored on)

Coding:
- SWE-bench Verified: **80.4%** Max (vendor — trails Opus 4.6 Max 80.8 by a hair); Plus **77.7%**
- SWE-Pro: **60.6%** Max (vendor — leads Kimi K2.6 Thinking 59.5 and DeepSeek V4 Pro Max 59.0); Plus **57.6%**
- SciCode: **51.3%** (BenchLM, Plus)
- Vibe Code Bench: Plus full-bench **46.39%** / Index subset 46.94% (Vals independent — not scored on)
- No verified LiveCodeBench/DeepSWE flagship numbers; pricepertoken Coding percentile 66.0 for Max (index only)

Long context:
- 1M window verified; 35-hour autonomous CUDA-kernel run with 1,000+ tool calls demonstrates long-horizon use (vendor demo) — but no verified MRCR/RULER/GraphWalks retrieval percentage found.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Independent re-normalization of Alibaba official Max launch figures + Vals/BenchLM independent evals per methodology bands.

- **Tool use: 78/100.** TB 2.0 ~70% + MCP-Atlas 76.4% and BFCL 75.0% show strong orchestration; capped by the Vals independent TB 2.1 52.81% row and no Tau3/GDPval numbers.
- **Reasoning: 90/100.** GPQA 92.4% + HLE 53.5% (tools, above the ~40% frontier ref) + AA Index 56.6 clears the frontier bar.
- **Context window: 90/100.** Full 1M window proven in 35-hour autonomous 1,000+-tool runs, but no verified retrieval-percentage evidence (no MRCR/RULER) keeps it off the 95+ tier.
- **Multimodal: 80/100.** Image input (Plus adds video); text-only output (+image-in; video only on Plus sibling) — mid-band for image-in families.
- **Coding: 84/100.** SWE-Verified 80.4% + peer-leading SWE-Pro 60.6% is near-frontier; capped by SciCode 51.3% and no flagship LiveCode/DeepSWE numbers.
- **Cost efficiency: 85/100.** Max-class ~$1.50/$4.50 undercuts $2+/$7+ frontier peers; Plus/Flash siblings far cheaper but the scored ID prices at Max class.
- **Overall Score: 84/100.** (78 + 90 + 90 + 80 + 84) / 5 = 422 / 5 = 84.4 → 84. Independent re-normalization of the Qwen3.7-Max ledger; scores track the repo Muse Spark 1.3 rater (84).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Alibaba Qwen3.7 launch tables via FrankX/GIGAZINE; BenchLM sourced rows; Vals Plus independent eval; pricepertoken; modelscale). Re-normalized via model-comparison.md v4. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.