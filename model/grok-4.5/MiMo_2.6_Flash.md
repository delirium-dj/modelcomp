# Grok 4.5 — findings by MiMo 2.6 Flash

- Source: xAI (SpaceXAI) — `x.ai/news/grok-4-5` launch post (2026-07-16), LLM Stats, Artificial Analysis, BenchLM
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 84 / 83.8). Fresh sources this pass: BenchLM model page
> (updated 2026-11-07, 37 rows with per-row source links).
> Changes: Tool use 86→88 (τ²/Tau3-Banking 42.1% now verified on AA's
> tau3-bench leaderboard and AA's own Terminal-Bench 2.1 harness reads 81.6% —
> both gaps the previous pass flagged as "no τ² coverage"); Reasoning 87,
> Context 90, Multimodal 70, Coding 86, Cost efficiency 85 held (FrontierMath
> v2 57.19/24.39 row added as evidence but doesn't cross a ref; AA Index still
> 38.8–39).

## Model card

- **Name:** Grok 4.5 — xAI's "smartest model built for coding, agentic tasks, and knowledge work" (launch post 2026-07-16; LLM Stats tracks Jul 16, 2026, while Artificial Analysis dates the `Grok 4.5 (High)` reasoning tier Jul 8, 2026 — tier-vs-general-release discrepancy flagged).
- **Short description:** Proprietary reasoning model **trained alongside Cursor** across tens of thousands of NVIDIA GB300 GPUs; RL scaled over hundreds of thousands of tasks centered on multi-step software engineering and multi-hour agentic rollouts. Vendor headline: **2× token efficiency vs leading models** — on SWE-bench Pro it averages **15,954 output tokens/task vs Opus 4.8 (max)'s 67,020 (4.2× fewer)**. Succeeded as flagship by Grok 4.6 (AA deprecation notice; BenchLM rank #39/1016 at 63.1 composite, 2026-11-07).
- **Provider / access:** xAI API (`api.x.ai`, model id `grok-4.5`), **Grok Build** (free usage for a limited time), **Cursor on all plans**, OpenRouter (`x-ai/grok-4.5`, 500K ctx). Proprietary weights.
- **Release / knowledge:** July 2026; knowledge cutoff **February 2026** (LLM Stats / LLMLearner).
- **Context window:** **500,000 in / up to 450,000 out** (model meta; OpenRouter, AA and BenchLM all confirm 500K in).
- **Modalities:** **text, image, file in; text out** (Office files via Grok Build plugins — native PowerPoint shapes, multi-sheet Excel models with web research).
- **Pricing (as of 2026-11-08):** **$2.00 / $6.00 per 1M** (input/output), **cached input $0.30** (85% cache discount, AA) — single tier, no long-prompt surcharge (unlike Grok 4.6/4.7's 200K doubling); AA cost per Intelligence-Index task **$0.88**.
- **Architecture:** proprietary closed weights; parameter count undisclosed (secondary sources suggest ~1.5T MoE — unconfirmed).

### Raw benchmarks found

> Primary: xAI launch post for coding/agentic rows; Artificial Analysis for
> intelligence/knowledge rows; BenchLM (updated 2026-11-07) aggregates both
> plus Vals/Cursor/leaderboard rows.

Reasoning & knowledge:

- **AA Intelligence Index (current): 38.8–39** (AA via BenchLM; v4.3.2-era reading #63/225, median for price tier 26; The AI Rankings notes AA v4.3 dropped GPQA and added TB4.0/AutomationBench so all scores shifted down).
- **AA-GPQA Diamond: 93.1** (Vals: 92.9) — well above the 90+ reasoning reference.
- **AA-HLE: 42.7** — clears the 40+ reference.
- **FrontierMath v2 (Epoch): 57.193% (Tiers 1–3), 24.390% (Tier 4)** — **new row this pass** (note: the Tiers 1–3 value is identical to Kimi K2.6's reading on the same leaderboard — possible tie or leaderboard quirk, cited as published).
- MMLU-Pro (Vals): 89.2; AA-Omniscience Index 25.3 (accuracy 51.6, hallucination 54.1); CritPt 15.4; AA-LCR 79.3.
- ARC-AGI-1: 85.67; ARC-AGI-2: 52.6; ARC-AGI-3: 0.3 (ARC Prize published results).

Coding:

- **Terminal-Bench 2.1: 83.3%** (xAI chart); **AA's own TB2.1 harness: 81.6%** — **new row this pass** (corroborates within 1.7 pts); Vals TB2.1: 67.8 (different harness).
- **SWE-bench Pro: 64.7%** (Fable 80.4, Opus 4.8 69.2, GPT-5.5 xhigh 58.6).
- **DeepSWE 1.0: 62.0%**; **DeepSWE 1.1: 53%**.
- **SWE Marathon: 29.0%** — tops xAI's chart (Opus 4.8 26.0, Fable 24.0).
- **AA Coding Index: 72.5** — clears the 70+ reference. **AA-SciCode: 55.0** — clears the 55+ reference.
- SWE-bench (Vals): 86.6; LiveCodeBench (Vals): 87.4; SWE-bench Multilingual (Cursor): 78; CursorBench 3.2: 66.7; VulcanBench v3: 89.9; Terminal-Bench 3.0: 15.7; PostTrainBench v1.1: 23.4.

Agentic / tool use:

- **Tau3-Banking (AA leaderboard): 42.1%** — **new this pass** (AA's tau3-bench leaderboard row via BenchLM; previous pass had no τ² row at all) — well above the mid-band (10–25) and approaching the 50%+ frontier ref.
- **GDPval-AA: 1430 Elo / 44.2% normalized** (AA); **AA Agentic Index: 42.1** (AA composite); **AA EnterpriseOps-Gym: 40.8%** — **new row**.
- No OSWorld / BrowseComp rows found — agentic evidence remains coding+knowledge-work shaped.

Multimodal:

- **AA-MMMU-Pro: 80.4** — strong for an image-input model; **Design Arena Website: 1278** (OpenRouter).
- No video/audio rows (not supported).

Long context:

- 500K window; **AA-LCR: 79.3** (long-context reasoning). No MRCR-style retrieval row.

### Normalized scores (1–100)

- **Tool use: 88/100.** Moved up on fresh coverage: **Tau3-Banking 42.1%** (AA leaderboard) fills the τ² gap the previous pass flagged, and **AA's independent TB2.1 harness at 81.6%** corroborates xAI's 83.3; alongside SWE Marathon win (29.0), GDPval-AA 1430, AA Agentic 42.1, CursorBench 66.7 and the 4.2× token-efficiency claim; still capped by no OSWorld/BrowseComp/MCP/Claw rows, TB3.0 15.7 (mid-pack), and second-place positions vs Fable/GPT-5.5 on most shared charts.
- **Reasoning: 87/100.** Held: both reasoning references cleared — GPQA Diamond 93.1, HLE 42.7 — with MMLU-Pro 89.2, ARC-AGI-1 85.67 and the newly added FrontierMath v2 57.19/24.39 (Epoch) as extra math evidence; capped by the AA Intelligence Index of 38.8–39 (mid-pack, well under the 60+ ref), ARC-AGI-2 52.6 trailing top Pro/Sol-class 70%+, and Omniscience hallucination 54.1.
- **Context window: 90/100.** Held: 500K native (double the 262K tier ≈ 90), under the 1M ≥95 floor; AA-LCR 79.3 supports solid long-context reasoning but no retrieval row.
- **Multimodal: 70/100.** Held: image + Office-file input with MMMU-Pro 80.4 and a 1278 Design Arena showing — top of the image band; no video/audio/PDF-native rows, output is text-only.
- **Coding: 86/100.** Held: AA Coding Index 72.5 and SciCode 55 both clear references; TB2.1 83.3 (AA harness 81.6) narrowly misses 85; SWE Pro 64.7 and DeepSWE 62.0/53 trail Fable's 80.4/66.1/70 outright — genuine frontier-adjacent but consistently #3–4 on shared charts.
- **Cost efficiency: 85/100** (excluded from Overall). Held: $2/$6 undercuts the $3/$15 ≈ 60 anchor, $0.30 cache = 85% off, no long-prompt surcharge, $0.88/AA task, and 4.2× fewer tokens than Opus 4.8 on SWE Pro; discounted for the slow serving profile (53.5 t/s measured vs 80 marketed, TTFT 12.11 s).
- **Overall Score: 84.2/100.** (88+87+90+70+86)/5 = 84.2 — xAI's mid-2026 workhorse: reference-clearing reasoning (GPQA 93.1, HLE 42.7), best-in-chart SWE Marathon, near-frontier TB2.1 with independent AA corroboration, and now a verified Tau3 row, all at a mid-range tariff with exceptional token efficiency — short of the frontier on SWE Pro/DeepSWE and on raw index standing.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with per-row source links to xAI's launch post, AA leaderboards, Epoch FrontierMath v2, ARC Prize results, Vals/Cursor evals; DuckDuckGo HTML sweep of launch coverage); scores are normalized 1–100 interpretations, not official vendor scores; competitor figures are as published by their respective developers.
- Reference URLs:
  - [BenchLM — Grok 4.5](https://benchlm.ai/models/grok-4-5)
  - [xAI — Grok 4.5 launch post](https://x.ai/news/grok-4-5)
  - [Artificial Analysis — Tau3-Banking leaderboard](https://artificialanalysis.ai/evaluations/tau3-bench)
  - [Epoch AI — FrontierMath v2 (Tiers 1–3) leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [ARC Prize — Grok 4.5 published results](https://arcprize.org/results/xai-grok-4-5)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
