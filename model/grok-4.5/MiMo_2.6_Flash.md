# Grok 4.5 — findings by MiMo 2.6 Flash

- Source: xAI (SpaceXAI) — `x.ai/news/grok-4-5` launch post (2026-07-16), LLM Stats, Artificial Analysis, BenchLM
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 — xAI's "smartest model built for coding, agentic tasks, and knowledge work" (launch post 2026-07-16; LLM Stats tracks the release date as Jul 16, 2026, while Artificial Analysis dates the `Grok 4.5 (High)` reasoning tier Jul 8, 2026 — flagged as a tier-vs-general-release discrepancy).
- **Short description:** Proprietary reasoning model **trained alongside Cursor** across tens of thousands of NVIDIA GB300 GPUs; RL scaled over hundreds of thousands of tasks centered on multi-step software engineering with automated/model-based grading and multi-hour agentic rollouts. Vendor headline: **2× token efficiency vs leading models** — on SWE-bench Pro it averages **15,954 output tokens/task vs Opus 4.8 (max)'s 67,020 (4.2× fewer)**; marketed at 80 TPS fast-model speed (Artificial Analysis measures 53.5 t/s and TTFT 12.11 s on xAI's API — flagged: slower than the pitch).
- **Provider / access:** xAI API (`api.x.ai`, model id `grok-4.5`), **Grok Build** (free usage for a limited time), **Cursor on all plans**, OpenRouter (`x-ai/grok-4.5`, 500K ctx, $2/$6 confirmed). Proprietary weights.
- **Release / knowledge:** July 2026; knowledge cutoff **February 2026** (LLM Stats).
- **Context window:** **500,000 in / up to 450,000 out** (model meta; OpenRouter and AA both confirm 500K in).
- **Modalities:** **text, image, file in; text out** (Office files via Grok Build plugins for Word/PowerPoint/Excel/Outlook — the model renders native PowerPoint shapes, multi-sheet Excel models with web research).
- **Pricing:** **$2.00 / $6.00 per 1M** (input/output), **cached input $0.30** (85% cache discount, AA) — single tier, no long-prompt surcharge (unlike Grok 4.6/4.7's 200K doubling); AA cost per Intelligence-Index task **$0.88**. Succeeded as flagship by Grok 4.6 (AA deprecation notice).

### Raw benchmarks found

> Primary: xAI launch post (2026-07-16) for coding/agentic rows; Artificial Analysis
> (model page, benchmarking continuing despite deprecation) for intelligence/knowledge rows;
> BenchLM (updated 2026-10-07) aggregates both plus Vals/Cursor/leaderboard rows.

Reasoning & knowledge:

- **AA Intelligence Index (v4.3.2): 39** (#63/225; median for price tier 26) — current reading, 10-eval composite. BenchLM logs 38.8.
- **AA-GPQA Diamond: 93.1** (Vals: 92.9) — well above the 90+ reasoning reference.
- **AA-HLE: 42.7** — clears the 40+ reference.
- MMLU-Pro (Vals): 89.2; AA-Omniscience Index 25.3 (accuracy 51.6, hallucination 54.1); CritPt 15.4; AA-LCR 79.3.
- ARC-AGI-1: 85.67; ARC-AGI-2: 52.6; ARC-AGI-3: 0.3 (ARC Prize leaderboards).

Coding:

- **Terminal-Bench 2.1: 83.3%** (xAI chart: Fable 84.3, GPT-5.5 xhigh 83.4, then Grok 4.5; Opus 4.8 78.9) — just under the 85% reference. Vals TB2.1: 67.8 (different harness).
- **SWE-bench Pro: 64.7%** (Fable 80.4, Opus 4.8 69.2, Opus 4.7 64.3, GLM 5.2 62.1, GPT-5.5 xhigh 58.6).
- **DeepSWE 1.0 (Datacurve/AA): 62.0%** — 3rd, ahead of Opus 4.8 (max) 55.75; behind Fable 66.1 and GPT-5.5 64.31. **DeepSWE 1.1 (mini-swe-agent): 53%** (Fable 70, GPT-5.5 67, Opus 4.8 59).
- **SWE Marathon: 29.0%** — tops xAI's chart (Opus 4.8 26.0, Fable 24.0, Opus 4.7 16.0).
- **AA Coding Index: 72.5** — clears the 70+ reference. **AA-SciCode: 55.0** — clears the 55+ reference.
- SWE-bench (Vals): 86.6; LiveCodeBench (Vals): 87.4; SWE-bench Multilingual (Cursor): 78; CursorBench 3.2: 66.7; VulcanBench v3: 89.9; Terminal-Bench 3.0: 15.7 (frontier-new, low everywhere); PostTrainBench v1.1: 23.4.

Agentic / tool use:

- **GDPval-AA: 44.5% (Elo 1430)**; **AA Agentic Index: 42.1** (AA composite of Briefcase/GDPval/AutomationBench-class evals).
- No OSWorld / τ²-bench / BrowseComp rows found — agentic evidence is coding+knowledge-work shaped.

Multimodal:

- **AA-MMMU-Pro: 80.4** — strong for an image-input model; **Design Arena Website: 1287** (OpenRouter benchmark page).
- No video/audio rows (not supported).

Long context:

- 500K window; **AA-LCR: 79.3** (long-context reasoning). No MRCR-style retrieval row.

### Normalized scores (1–100)

- **Tool use: 86/100.** SWE Marathon win (29.0), TB2.1 83.3, GDPval-AA 1430/44.5%, AA Agentic 42.1, CursorBench 66.7, plus the 4.2× token-efficiency claim that makes long agentic loops genuinely cheap; held back by no OSWorld/τ²/BrowseComp coverage and second-place (not winning) positions vs Fable/GPT-5.5 on most shared charts.
- **Reasoning: 87/100.** Both reasoning references cleared — GPQA Diamond 93.1, HLE 42.7 — with MMLU-Pro 89.2 and strong ARC-AGI-1; the AA Intelligence Index of 39 is only mid-pack for its price tier, which caps the score below its 4.6/4.7 siblings' peaks.
- **Context window: 90/100.** 500K native (double the 262K tier ≈ 90), under the 1M ≥95 floor; AA-LCR 79.3 supports solid long-context reasoning but no retrieval row.
- **Multimodal: 70/100.** Image + Office-file input with MMMU-Pro 80.4 and a 1287 Design Arena showing — top of the image band; no video/audio/PDF-native rows, output is text-only.
- **Coding: 86/100.** AA Coding Index 72.5 and SciCode 55 both clear references; TB2.1 83.3 narrowly misses 85; SWE Pro 64.7 and DeepSWE 62.0/53 trail Fable's 80.4/66.1/70 outright — genuine frontier-adjacent but consistently #3–4 on shared charts.
- **Cost efficiency: 85/100** (excluded from Overall). $2/$6 undercuts the $3/$15 ≈ 60 anchor, $0.30 cache = 85% off, no long-prompt surcharge, $0.88/AA task, and 4.2× fewer tokens than Opus 4.8 on SWE Pro; discounted slightly for the slow serving profile (53.5 t/s measured vs 80 marketed, TTFT 12.11 s).
- **Overall Score: 84/100.** (86+87+90+70+86)/5 = 83.8 → 84 — xAI's mid-2026 workhorse: reference-clearing reasoning (GPQA 93.1, HLE 42.7), best-in-chart SWE Marathon, near-frontier TB2.1, all at a mid-range tariff with exceptional token efficiency — short of the frontier on SWE Pro/DeepSWE and on raw index standing.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — x.ai launch post (full benchmark charts transcribed), LLM Stats model page (release date, cutoff, pricing, modalities), Artificial Analysis model page (AA Index 39, GPQA 93.1, HLE 42.7, Coding Index 72.5, SciCode 55, MMMU-Pro 80.4, LCR 79.3, speed/cost telemetry), BenchLM aggregate (Vals/Cursor/leaderboard rows, updated 2026-10-07), OpenRouter API (pricing/context cross-check). Scores are normalized 1–100 interpretations, not official vendor scores; competitor figures are as published by their respective developers.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Grok 4.5 — findings by Mimo V2.6 Flash

- Source: xAI/`grok-4.5`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 2026 coding/agentic-workflow model (trained jointly with Cursor on real developer session data), pitched as a faster, more token-efficient Opus-class worker at $2/$6 — roughly 4× fewer output tokens per SWE-Pro task than Opus 4.8. Sits alongside the larger Grok 4.20 flagship rather than replacing it; context cut to 500K from Grok 4.3's 1M.
- **Provider / access:** xAI API (Responses + Chat Completions, `grok-4.5`), Grok Build terminal agent (Apache 2.0 runtime license — model weights proprietary), Cursor, Microsoft Office add-ins, OpenRouter, Vercel AI Gateway, Cloudflare Workers AI, Snowflake Cortex, Databricks Mosaic; Zen `opencode/grok-4.5`. EU API console not available at launch.
- **Release / knowledge:** 2026-07-08 (xAI / DataLearner; launch news 2026-07-16); knowledge cutoff not published.
- **IDs:** `grok-4.5` (xAI API); `x-ai/grok-4.5` on gateways.
- **Context window:** 500,000 tokens (DataLearner / HokAI / Awesome Agents — half of Grok 4.3's 1M; extended-tier pricing above 200K).
- **Modalities:** text, image in; text out; `reasoning_effort` low/medium/high (default high); tool calls; function calling; structured output.
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out up to 200K; extended tier >200K $4.00 / $12.00; cached input $0.50 (up to $1.00 extended). Paid; no free tier published.
- **Architecture:** proprietary closed weights; ~1.5T MoE per Awesome Agents (HokAI: parameter count and dense/MoE status undisclosed by xAI — treat 1.5T as secondary-source). No system card/model card published at launch (gap vs prior Grok releases).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI launch / AA — ties GPT-5.5 83.4, trails Fable 5 84.3); best-reported-harness row **79.3% ±1.5** (BenchmarkList)
- Long-Horizon Terminal-Bench: **0.51** mean reward — **#1 of 21**, 100th percentile (BenchmarkList, 2026-08-27)
- Terminal-Bench 3.0: **15.7%** Pass@1 (#11/17; field leader O-5 42.7) (BenchmarkList)
- Tau3-Banking: **42.1%** (#13/174, 93rd pct) (BenchmarkList)
- AutomationBench-AA: **51.4%** (#3/13) (BenchmarkList)
- APEX-Agents-AA: **47.1%** (#4/33) (BenchmarkList)
- GDPval-AA: **1535** Elo (BenchmarkList; Awesome Agents cites v2 1543)
- AA-Briefcase: **1313** (BenchmarkList)
- BrowseComp: **75.8% ±6.1** (BenchmarkList)
- Agents' Last Exam: **27.0%** (BenchmarkList)
- Claw-Eval / ClawProBench / MCP Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchmarkList / AA, 2026-07-28; DataLearner 93.43 — xAI did not publish at launch)
- HLE: **42.7%** (BenchmarkList)
- MMLU Pro: **89.2%** (BenchmarkList)
- ARC-AGI-1: **87.2%**; ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%** (BenchmarkList)
- AA Intelligence Index: **54** (#4 frontier at launch per Awesome Agents / HokAI; BenchmarkList rank 17/418 across all time)
- AA-LCR: **74.0%** (BenchmarkList)
- SimpleBench: **70** (DataLearner)
- CritPt / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **86.6%** (BenchmarkList, 2026-07-28, thinking=high — rank 7/72)
- SWE-bench Pro: **64.7%** (xAI / AA / BenchmarkList — Opus 4.8 69.2, Fable 5 80.4, GPT-5.5 58.6)
- DeepSWE 1.0: **62.0%** (xAI, provider harness — beats Opus 4.8 55.75); DeepSWE 1.1: **53%** (xAI, neutral mini-swe-agent) / **56.6%** (BenchmarkList — harness drift, both noted)
- SWE Marathon: **29.0%** pass@1 (xAI — beats Opus 4.8 26.0, Fable 24.0)
- LiveCodeBench: **87.4%** (BenchmarkList, #9/123)
- SciCode: **54.1%**; Vibe Code Bench v1.1: **69.0%**; FrontierSWE: **5.47**; CursorBench: **3.2** (contaminated — Cursor training-data overlap disclosed) (BenchmarkList)
- AA Coding Index: **76** (HokAI / AA)
- Avg output tokens / SWE-Pro task: **~15,954** vs Opus 4.8 ~67,020 (~4.2× efficiency) (AA / Awesome Agents)

Long context:

- MRCR-v2 128K (8-needle): **81.4%** (BenchmarkList, self-reported via Qwen launch comparison — field leader G-5.6 Terra 93.5)
- 500K window; retrieval at 512K+: **no verified public score found**

Multimodal:

- MMMU-Pro: **61.8%** (BenchmarkList — weak, #69/79); Vals Multimodal Index: **63.4** (BenchmarkList)
- Image in, text out only; no audio/video.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 83.3 plus #1 Long-Horizon TB, Tau3 42.1, AutomationBench 51.4, GDPval 1535, BrowseComp 75.8 — elite long-horizon agent profile; capped by TB3.0 15.7 (mid-pack) and missing public MCP/Claw rows.
- **Reasoning: 90/100.** GPQA 92.9, HLE 42.7, AA Index 54 (frontier #4 at launch), MMLU-Pro 89.2; capped by ARC-AGI-2 52.6 trailing top Pro/Sol-class 70%+ and Index still below Fable/Mythos tier.
- **Context window: 86/100.** 500K lands in the 500K–1M tier (85–94); MRCR 81.4% at only 128K is mid-pack and there is no ≥512K retrieval proof — plus an unexplained cut from Grok 4.3's 1M and extended pricing above 200K.
- **Multimodal: 65/100.** Text + image in only (no audio/video/PDF, text out) → image-in band 60–70; MMMU-Pro 61.8 is weak for the class, anchoring the lower half of that band.
- **Coding: 90/100.** SWE-V 86.6, TB2.1 83.3, SWE-Pro 64.7, LCB 87.4, Vibe 69.0, SWE Marathon lead over Opus/Fable — frontier coding/agent; capped slightly by DeepSWE 1.1 53–56.6 trailing Fable 70 and CursorBench contamination.
- **Cost efficiency: 84/100.** $2/$6 matches the Qwen3.8-Max flat tier and beats $3/$15≈60 by a wide margin; ~4× token efficiency compounds real-world savings; docked for the >200K $4/$12 extended tier and no free tier.
- **Overall Score: 84/100.** Mean of Tool 88 + Reasoning 90 + Context 86 + Multimodal 65 + Coding 90 = 419/5 = 83.8 → **84** (best-fit: high-volume coding/agentic worker at $2/$6 when ≤500K context and image-in-only suffice; step up to 4.20/Opus/Fable for 1M docs or top HLE depth).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (xAI launch post, BenchmarkList, Awesome Agents, HokAI, DataLearnerAI, DataLLM Lab); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

