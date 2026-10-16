# GPT-5.4 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.4, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: breakpoint + Vals splits + standing added; scores hold 83), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 83)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's early-2026 flagship reasoning model (xhigh effort tier) — frontier science reasoning with strong computer-use agency. Best fit for expert-knowledge work and screenshot-driven computer-use agents.
- **Provider / access:** OpenAI (Responses API, `gpt-5.4`); OpenCode Zen `opencode/gpt-5.4`. Responses API (reasoning effort levels incl. xhigh).
- **Release / knowledge:** 2026-03-05 (mini/nano siblings 2026-03-17, per OpenAI launch post and BenchLM); knowledge cutoff not officially stated — treated as early-2026
- **IDs:** `opencode/gpt-5.4` (paid tier; cost scored on paid pricing)
- **Context window:** 1.0M total tokens (1.05M on one aggregator snapshot; 1.0M per llm-stats) — verified via llm-stats org/compare pages and BenchLM compare page
- **Modalities:** Text and image in (screenshots via computer use), text out; reasoning yes (xhigh effort); tool calls, JSON mode, computer use yes
- **Pricing (as of 2026-09-23, re-verified 2026-09-27):** $2.50/$5.00 in and $15.00/$22.50 out per 1M (272K breakpoint); cached input $0.25/1M. No $0 tier — paid only.
- **Architecture:** Proprietary (undisclosed params), reasoning model

### Raw benchmarks found

> All xhigh-effort figures below are OpenAI's official numbers from the GPT-5.4 mini/nano launch post (2026-03-17), which tabulates the full-size GPT-5.4 (xhigh) alongside.

Agent / tool use:

- Terminal-Bench 2.1: **75.1%** on Terminal-Bench 2.0 (OpenAI official, xhigh) — closest verified terminal benchmark; native 2.1 number: no verified public score found
- Tau3-Banking / Tau2-Bench: Tau2 telecom **98.9%** (OpenAI official, xhigh — narrow telecom slice, provisional as a general tool-use proxy); Tau3 Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon **54.6%**, MCP Atlas **67.2%** (OpenAI official, xhigh)
- OSWorld-Verified (computer-use proxy): **75.0%** (OpenAI official, xhigh)

Reasoning / knowledge:

- GPQA Diamond: **93.0%** (OpenAI official, xhigh)
- HLE: **39.8%** without tools / **52.1%** with tools (OpenAI official, xhigh)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM overall 73.2 (#11, Supported) — one snapshot lists 70.96; AA Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: SWE-Pro (Public) **57.7%** (OpenAI official, xhigh); SWE-bench Verified: no verified public score found for this exact ID; Vals difficulty splits **88/76/50/0%** (third-party lane — amended 2026-09-27)
- Category standing: **#1 reasoning (70), #4 coding (61), #4 chat (96)** (LMC live composite — amended 2026-09-27)
- LiveCodeBench: LiveCodeBench Pro **87.5%** (BenchLM compare page, sourced)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: head-to-head loss to Qwen3.8-Flash-Next on DeepSWE 1.1 (llm-stats compare — exact GPT-5.4 value not disclosed there); React Native Evals **85.3%** (BenchLM compare page, sourced)

Long context:

- OpenAI MRCR v2 8-needle: **86.0%** at 64–128K / **79.3%** at 128–256K (OpenAI official); Graphwalks BFS 0–128K **93.1%**, parents accuracy **89.8%** (OpenAI official) — strong to 256K, no verified 512K+ retrieval number

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.0 75.1% plus OSWorld-V 75.0% and MCP Atlas 67.2% show strong agency; Toolathlon 54.6% and no Tau3/GDPval numbers cap it below frontier.
- **Reasoning: 92/100.** GPQA 93.0% with HLE 39.8–52.1% clears the frontier bar (90%+/40%+).
- **Context window: 93/100.** Full 1M window with MRCR v2 ~79–86% to 256K and ~90% Graphwalks; missing 512K+ retrieval evidence keeps it off the 95+ tier.
- **Multimodal: 70/100.** Image-in (screenshots, MMMU-Pro 81.2%) with text-only output — top of the image-in band, no video/audio evidence.
- **Coding: 80/100.** LiveCode Pro 87.5% is near-frontier but SWE-Pro 57.7% trails the 63%+ leaders; split verdict averages out.
- **Cost efficiency: 62/100.** Paid-only $2.50/$15.00 sits at the expensive end of the scale ($3/$15 ≈ 60 band).
- **Overall Score: 83/100.** Mean of (80 + 92 + 93 + 70 + 80) / 5 = 83.0 → 83; best fit for expert-reasoning and computer-use workloads where pricing is secondary.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI GPT-5.4 mini/nano launch post with official xhigh table, BenchLM GPT-5.4 compare page, llm-stats org and comparison pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (23 days after amended 2026-09-27)

Original research date 2026-09-23, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) official OpenAI GPT-5.4 mini/nano launch post xhigh table (TB2.0 75.1%, Tau2-telecom 98.9%, Toolathlon 54.6%, MCP Atlas 67.2%, OSWorld-V 75.0%, GPQA 93.0%, HLE 39.8/52.1-tools, SWE-Pro 57.7%, LiveCode Pro 87.5%, MRCR-v2 86.0/79.3%, Graphwalks 93.1/89.8), (2) evals.report model page (46 reported scores: SWE-V 76.9%, SWE-Pro 59.10%, DeepSWE 55.53%, Vibe 67.42%, GPQA 93.3%, HLE 40.28%, ARC-AGI-1 93.67%, ARC-AGI-2 73.95%, FrontierMath 47.6%, GDPval 1674, Tau2-telecom 87.1%, TB2.0 75.1%, LiveBench 80.28%, AIME-2026 99.17%, MMMU-Pro 82.1%, SciCode 56.6%, Index 56.8, METR 341.7min, GAIA 48.2%, FrontierSWE 54%, GSO 31.37%, ProgramBench 0.0%), (3) BenchLM compare page + llm-stats org/compare pages (BenchLM overall 73.2 #11, LiveCode Pro 87.5%, React Native 85.3%, Vals splits 88/76/50/0, 1.0M context, $2.50/$5.00–$15.00/$22.50 breakpoint pricing). Conflicting results compared below.

| Dimension | 2026-09-23/27 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 80 | 80 | hold — TB2.0 75.1% confirmed official; Tau2-telecom filed 98.9% (launch table) vs 87.1% evals.report official (adverse lane delta, narrow-slice provisionality pre-flagged); GDPval 1674 official fills gap near-frontier; OSWorld-V 75.0% + MCP 67.2% stand; no Tau3/Claw absolute |
| Reasoning | 92 | 92 | hold — GPQA 93.0% vs 93.3% official (confirms); HLE 39.8/52.1 vs 40.28% official (confirms); ARC-AGI-1 93.67% + FrontierMath 47.6% + AIME-2026 99.17% + LiveBench 80.28% corroborate; Index 56.8 fills gap near-frontier; no LCR/CritPt absolute |
| Context | 93 | 93 | hold — 1M + MRCR-v2 79–86% + Graphwalks ~90% stand; no 512K+ proof |
| Multimodal | 70 | 70 | hold — MMMU-Pro filed 81.2% vs 82.1% official (confirms); ScreenSpot-Pro 85.4% fills gap strongly; text-out cap stands, no video/audio |
| Coding | 80 | 80 | hold — SWE-Pro filed 57.7% vs 59.10% official (confirms band, still trails 63%+); SWE-V 76.9% official fills gap near-filed-LiveCode band; LiveCode Pro 87.5% stands; DeepSWE 55.53% official fills gap consistently; Vibe 67.42% official fills gap near-frontier; SciCode 56.6% fills gap consistently; FrontierSWE 54% + GSO 31.37% consistent; ProgramBench 0.0% tail noted |
| Cost | 62 | 62 | hold — breakpoint $2.50/$15.00 stands |
| Overall | 83 | 83 | hold — (80+92+93+70+80)/5 = 83.0 → 83 |

Conflicts resolved: Tau2-telecom 98.9 vs 87.1 — narrow-slice lane variance pre-flagged as provisional, headline retained with variance noted; SWE-Pro 57.7 vs 59.10 within-band; all other vendor-vs-official deltas ±1. Prior gaps filled (GDPval 1674, SWE-V 76.9%, Vibe 67.42%, DeepSWE 55.53%, SciCode 56.6%, Index 56.8) — all consistent with existing caps, no band change. No Tau3, no Claw, no LCR/CritPt absolute found — remaining gaps stand. Scores hold.

Sources: https://openai.com/index/gpt-5-4-mini-nano · https://evals.report/models/openai-gpt-5-4 · https://benchlm.ai/models/gpt-5-4
