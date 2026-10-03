# Grok 4.1 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** xAI never published GPQA, AIME, MMLU-Pro, SWE-bench, or ARC-AGI-2 scores for Grok 4.1. Numbers for those suites commonly attributed to "Grok 4.1" online belong to Grok 4 or later releases. This report scores only what was actually measured (LMArena, EQ-Bench, AA/Vals/BenchLeader runs, the vendor's own A/B preference test).

## Model card

- **Name:** Grok 4.1 (variants: Grok 4.1 Thinking, codename `quasarflux`; Grok 4.1 Non-Reasoning, codename `tensor`; Grok 4.1 Fast, released 2025-11-19 as the developer-facing API variant)
- **Short description:** xAI's November 2025 flagship refresh — same ~3T-parameter MoE pretrained base as Grok 4 with post-training refinement (RL on style, personality, helpfulness, alignment), not a new architecture. Debuted at #1 on LMArena (Thinking Elo 1483) but is now deprecated.
- **Provider / access:** xAI — grok.com, X (iOS/Android/web); API was **not exposed at launch** for the flagship — developers were pointed to Grok 4.1 Fast (2025-11-19) plus Agent Tools API. Consumer tiers: Free (~5–10 queries/day), X Premium $8, X Premium+ $16, SuperGrok $30, SuperGrok Heavy $300.
- **Release / knowledge:** 2025-11-17, after a two-week silent live-traffic A/B rollout (Nov 1–14); knowledge cutoff ~November 2024.
- **IDs:** `grok-4.1` / `grok-4.1-thinking` / `grok-4.1-non-reasoning` (Fast: `grok-4.1-fast-reasoning` / `grok-4.1-fast-non-reasoning`); repo folder `grok-4.1`.
- **Context window:** 256K tokens (flagship), ~8K max output; Grok 4.1 Fast variant exposes 2M.
- **Modalities:** Text and image in (AA measured MMMU-Pro 63.3%, implying vision input); text out. Thinking mode toggle on the Thinking variant.
- **Pricing (as of 2026-10):** Flagship $3.00/$15.00 per 1M (llm-stats); Grok 4.1 Fast $0.20/$0.50 per 1M, cached $0.05 (75% off); tool invocation $5/1K web/X-search & code-execution calls, $10/1K file attachments; Batch 50% off; new API accounts $25 free credits + $150/mo with data sharing. **Deprecated** — HokAI: "Grok 4.1 is now deprecated… historical snapshot, not a model to integrate today."
- **Architecture:** MoE, ~3T total parameters (undisclosed officially; same base as Grok 4 per xAI's rollout communications); active-parameter count not published.

### Raw benchmarks found

**Vendor-published (xAI, 2025-11-17 rollout report):**
- LMArena Text Arena Elo **1483** (Thinking, debuted #1 — 31 points ahead of the strongest non-xAI model at the time) / **1465** (Non-Reasoning, #2; Grok 4 previously #33).
- EQ-Bench3 **1586** (Thinking #1) / **1585** (#2). Creative Writing v3 **1721.9** (Thinking #2) / **1708.6** (#3).
- Blind real-traffic pairwise (Nov 1–14): preferred over prior production Grok **64.78%** of the time.
- Hallucination rate 12.09% → **4.22%** (65% reduction); FActScore error 9.89% → **2.97%**; MASK dishonesty 0.43 → 0.46–0.49 (worse); sycophancy 0.07 → 0.19–0.23 (tripled).

**Third-party (Artificial Analysis / BenchLeader / Vals / isitgoodai):**
- Thinking mode: GPQA Diamond **85.3%** (BenchLeader) / **84.3%** (Vals); HLE **19.3%** (AA); τ²-bench **63.7%** (isitgoodai); CritPt **2.9%**; IFBench **52.7%**; MMMU-Pro **63.3%**; AA-LCR **74%**; SimpleBench **56.0%**; DTBench **87.7%**; ForecastBench **61.0%**; LiveCodeBench **80.6%** (Vals); SWE-bench **41.4%** (Vals); Vibe Code Bench **1.2%**; ALE-Bench **394.9**; LMArena Coding **1500** / WebDev **1241** / Hard Prompts **1477**.
- No-reasoning mode: GPQA Diamond **63.7%** (AA) / **65.2%** (Vals); HLE **5.1%**; CritPt **0.0%**; LiveCodeBench **42.6%**; LMArena Hard Prompts **1474**.
- shawnhack aggregate: MMLU **93.1%**, ARC-C **98.5%**, HumanEval **96.1%**, MATH **98.4%**, HellaSwag **97.2%**, SWE-bench **74.6%** (conflicts with Vals' 41.4% — harness/version mismatch, unverified), MMMU **72.7%**, Terminal-Bench **24.2%**, MMLU-Pro **84.2%**, Arena Elo **1483**.
- AA Intelligence Index **23.56** (isitgoodai; "significantly below frontier models"); BenchLeader Index **57.5** (#164/748; thinking 55.6, no-reasoning 42.7).
- Grok 4.1 Fast Reasoning (AnotherWrapper): GPQA Diamond **84.3%**, SWE-bench Verified **41.4%**.

## Scores

- **Tool use: 59/100.** τ²-bench 63.7% (isitgoodai) is the only tool-use measurement; Terminal-Bench 24.2% (shawnhack) drags; no MCP-Atlas or tool-decathlon score found. Mid-band.
- **Reasoning: 67/100.** GPQA Diamond 85.3%/84.3% (thinking) is frontier-adjacent, but HLE 19.3% (AA) is weak and AIME/MMLU-Pro-class suites were never published for 4.1; no-reasoning mode collapses (GPQA 63.7%, HLE 5.1%). Solidly above average, below the 2026-10 frontier.
- **Context window: 72/100.** 256K flagship (2M on the Fast variant); no long-context retrieval benchmark (MRCR-class) published for 4.1; 256K lands in the 70–74 band per methodology.
- **Multimodal: 65/100.** Image input confirmed by AA's MMMU-Pro 63.3% run (text-only would score 10–20); no video, no audio; MMMU-Pro is mid-pack for 2026-10.
- **Coding: 67/100.** LiveCodeBench 80.6% (Vals, thinking) is strong; SWE-bench 41.4% (Vals) is weak and conflicts with shawnhack's 74.6%; Terminal-Bench 24.2% weak; HumanEval 96.1% (shawnhack) dated. Net: above average.
- **Cost efficiency: 93/100.** Scored on the developer-accessible Grok 4.1 Fast pricing ($0.20/$0.50 per 1M, blended ≈$0.275/M, cached $0.05) — deep-discount tier; the unexposed flagship's $3/$15 would score ~60. Deprecated status noted.
- **Overall Score: 66.0/100.** Mean of Tool use 59, Reasoning 67, Context window 72, Multimodal 65, Coding 67 = 66.0 (Cost efficiency excluded per methodology).

> **Gap vs folder average (73.2): −7.2.** Peers appear to have weighted the LMArena #1 debut (Elo 1483) heavily; this score weights the measured benchmark suite (HLE 19.3%, SWE-bench 41.4%, Terminal-Bench 24.2%) and the model's deprecated status. The LMArena Elo is reported above and is the strongest single data point for the model.

## Notes

- Verification trail: xAI rollout communications (2025-11-17; two-week silent A/B; 64.78% preference; variant codenames), LMArena (1483/1465 debut), EQ-Bench/Creative Writing leaderboards, AA/BenchLeader/Vals/isitgoodai/shawnhack/AnotherWrapper measurement tables, HokAI model card (deprecated status, $6.00/M blended flagship note), llm-stats ($3/$15 flagship), OCI/Azure listings (Fast variant pricing).
- Known conflicts: SWE-bench 41.4% (Vals) vs 74.6% (shawnhack) — unresolved; likely different SWE-bench versions/harnesses. Both reported, neither used to lift the score.
- Open questions: were the shawnhack numbers run on the Thinking variant with a specific scaffold? Is the 256K flagship context still servable post-deprecation?
- Future sources: any xAI retrospective benchmark release for 4.1; archived LMArena trend data; third-party re-runs of SWE-bench with a fixed harness.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Grok 4.1 Overall=66.0 (Tool=59 Reasoning=67 Context=72 Multimodal=65 Coding=67 Cost=93; LMArena 1483 debut; xAI published no GPQA/SWE-bench; deprecated)`
