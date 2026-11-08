# Muse Spark 1.3 — findings by MiMo 2.6 Flash

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 91). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-07, 35 benchmark rows, unranked) and the Artificial
> Analysis model page + leaderboards. Changes: Tool use 90→93 (AA Tau3-Banking
> 50.5% fills the standing gap); Reasoning 91→88 (AA Index now 37, #35/69);
> Coding 93→90 (independent CursorBench 41.6% and FrontierSWE v2 25.8%).
> Held: Context window 98, Multimodal 85, Cost 88, Overall 91 (90.8).

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary long-horizon agentic/coding reasoning model (Muse Spark line), released 2026-09-02 for long-horizon agentic workflows, coding agents, and professional knowledge work. Not a variant/alias — the flagship 1.3 release (Contributor/Free/Standard/Max are pricing/effort tiers of the same weights, per Meta's developer page). AA now banners it as **deprecated in favour of Meta's newer Muse Wonder release** (AA model page, 2026-11-08).
- **Provider / access:** Meta Model API (`muse-spark-1.3`, `meta/muse-spark-1.3` on OpenRouter/NanoGPT/Vercel AI Gateway), OpenCode Zen `opencode/muse-spark-1.3`, plus Muse Code CLI. Chat Completions-compatible gateway routes; Meta hosts the primary API (AA: 1 API provider).
- **Release / knowledge:** 2026-09-02 release (Meta dev.meta.ai model page; AA "Released September 2026"); knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3` (OpenRouter/NanoGPT/Vercel), `muse-spark-1.3` (Meta native), `opencode/muse-spark-1.3` (Zen) — all three exist; Contributor tier shares the same ID.
- **Context window:** 1,048,576 tokens (1M) — Meta dev page + AA and BenchLM both list 1M; max output 131,072 tokens (per project meta; long-context verified by MRCR v2 runs at 256K–1M bands).
- **Modalities:** text/image/video in; text out (AA confirms text, image and video input → text output); reasoning yes (effort tiers: max / xhigh); tool calls yes (agentic harnesses, Terminal-Bench runs); JSON mode listed on AA provider tables — audio in and non-text out not verified.
- **Pricing (as of 2026-11-08):** Standard $1.25 in / $4.25 out / $0.15 cached per 1M (AA confirms: $1.25/$4.25, 88% cache discount, $2.39 per Intelligence Index task); privacy: no training use on Standard. Contributor/Free $0.10 in / $0.20 out per 1M **but opts prompts+completions into Meta's training data** — do not use for confidential code. Paid on the Standard route.
- **Architecture:** proprietary (parameters, license, cutoff undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard, thinking=max; BenchmarkList rank 8/194, 96th pct) — independent runs: **84.3%** (Artificial Analysis, max tier) / 85.4% (xhigh) / **72.3%** (Vals AI leaderboard — new this pass, a wide spread).
- **AA Tau3-Banking: 50.5%** (Artificial Analysis tau3-banking leaderboard, via BenchLM 2026-11-07 — **new this pass**; clears the ~50%+ frontier ref; previously "no verified public score found").
- GDPval-AA v2: **1754** (Meta launch scorecard; normalized 59.0% on AA). Knowledge-work JobBench **64.9%**.
- AA Agentic Index: **55.7%** (AA, new this pass). AutomationBench **49.4%**; OSWorld 2.0 **66.9%** (Meta table); DeepSearchQA **89.4%**.
- ApprenticeBench: **19%** (NeoCognition GUI results, new); MazeBench (ASCII, no tools): **0%** (new); CWE-bench v1: **55.0%** (Collinear, new).
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Tau2: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA — now independently confirmed on BenchLM's AA-GPQA row) / 94.1% (AA xhigh, LLMLearner rank 10/189); benchmark flagged saturated by The Model Gap.
- HLE (no tools): **48.7%** (AA).
- Artificial Analysis Intelligence Index: **37**, rank **#35 / 69** on the current v5.0.1 scale (AA model page, 2026-11-08) — an earlier snapshot read 48.1, rank 8/68 (BenchLM still displays 48.1); scale/rollout changed and the relative standing clearly fell.
- AA-Omniscience v1.1: index **25.0**, accuracy **43.6%**, hallucination rate **32.9%** (**new this pass** — weak knowledge reliability).
- FrontierMath v2: **74.035%** (Tiers 1–3) and **46.341%** (Tier 4) — Epoch AI leaderboard (**new this pass**; well behind Opus 5.5's 91.2/95.0 and Gemini 4 Argon's 86.0/78.0).
- LCR: AA-LCR **83.0%** (BenchmarkList rank 20/408). CritPt: **24.9%** (AA; earlier snapshot 26.0). LiveBench overall **81.6** (xHigh, livebench.ai 2026-09-03).

Coding:

- DeepSWE v1.1: **75.4%** (Meta launch scorecard, rank 2/49–52 — still unverified by a third party).
- AA-SciCode: **58.8%** (AA; earlier 59.7% at extra-high). SWE-Atlas Codebase QnA: **59.4%** (Meta/Scale protocol).
- Vibe Code Bench v1.1: **85.9%** (AA, max, rank 11/63). AA Coding Index: **75.8%**.
- **CursorBench 4.0: 41.6%** (Cursor evals, new this pass — vs Opus 5.5 57.8%).
- **FrontierSWE v2: 25.8%** (Proximal leaderboard, new this pass — vs Opus 5.5 62.3%, Gemini 4 Argon 55.0%).
- Bug Hunt Bench: **32.2 fixes** (new). Terminal-Bench 2.1 88.8% also counts as agentic coding.
- SWE-bench Verified / LiveCodeBench: no verified public score found (Meta never publishes these).

Long context:

- MRCR v2 8-needle: **98.5%** at 256K–512K (rank 2/8) and **98.1%** at 512K–1M (rank 1/9, 100th pct) — Meta self-reported, re-listed on BenchLM 2026-11-07; AA-LCR 83.0% independent.

Multimodal:

- Input text + image + video (AA technical spec, current page); Design Arena Website: **1354** Elo (OpenRouter).
- MMMU-Pro / Video-MME / audio input: no verified public score found for 1.3.

### Normalized scores (1–100)

- **Tool use: 93/100.** The standing cap is now partly lifted: AA Tau3-Banking **50.5%** (new) clears the ~50%+ frontier ref alongside TB2.1 88.8% and GDPval-AA 1754, so all three named agentic anchors (TB ~88%+, Tau3 ~50%+, GDPval ~1750+) are met; held below mid-90s by the missing Claw-Eval row and the new Vals TB2.1 reading of 72.3% (well under Meta's 88.8%), plus weak MazeBench 0% / ApprenticeBench 19%.
- **Reasoning: 88/100.** GPQA Diamond 93.5% (AA) and HLE 48.7% still clear the 90%+/40%+ frontier refs, but the AA Intelligence Index now reads **37 (#35/69, cohort median)** — down from 48.1 (#8/68) and far short of the 60+ ref — and the new AA-Omniscience row shows a 32.9% hallucination rate, while FrontierMath v2 74.0/46.3 trails frontier peers; hence 91→88.
- **Context window: 98/100.** 1M total (≥1M tier = 95–100) with 98.1% MRCR retrieval in the 512K–1M band re-confirmed on BenchLM; held at 98 (not 100) because those MRCR figures are Meta self-reported and the independent AA-LCR run is 83.0%.
- **Multimodal: 85/100.** AA's current spec confirms text, image and video input with text output (+video-in band = 75–90); no audio input or non-text output verified, and no MMMU-Pro/Video-MME row exists for 1.3, which caps it below 90.
- **Coding: 90/100.** DeepSWE 75.4% (74%+ ref), TB2.1 88.8%, AA-SciCode 58.8% (55%+ ref) and Coding Index 75.8 (70%+ ref) all clear the frontier refs, but two new independent rows cut the other way — CursorBench 4.0 **41.6%** and FrontierSWE v2 **25.8%**, both far behind Opus 5.5 (57.8% / 62.3%) — and DeepSWE remains vendor-run with no SWE-bench Verified/LiveCodeBench; hence 93→90.
- **Cost efficiency: 88/100.** $1.25/$4.25 Standard is exactly the ~88 anchor in the methodology and AA re-confirms it ($1.25/$4.25, 88% cache discount, $2.39 per Index task); the $0.10/$0.20 Contributor tier is cheaper but training-data-gated — unchanged, so held at 88.
- **Overall Score: 91/100.** (93+88+98+85+90)/5 = 454/5 = 90.8 → 91 — best-fit top-tier long-horizon paid agent/coding pick when 1M context and multimodal input matter; note Meta has since launched Muse Wonder and AA now flags 1.3 as deprecated.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-07, Artificial Analysis model page + tau3-banking/omniscience/scicode leaderboards, Epoch AI FrontierMath v2, Vals AI and Cursor evals, Meta launch scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.3 (BenchLM, snapshot 2026-11-07)](https://benchlm.ai/models/muse-spark-1-3)
  - [Muse Spark 1.3 (Artificial Analysis)](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [AA Tau3-Banking leaderboard](https://artificialanalysis.ai/evaluations/tau3-banking)
  - [Muse Spark 1.3 launch scorecard (Meta AI Research)](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
