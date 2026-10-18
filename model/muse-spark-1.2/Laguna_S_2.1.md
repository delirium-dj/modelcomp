# Muse Spark 1.2 Free — findings by Laguna S 2.1

> Source: Meta / OpenCode (`opencode/muse-spark-1.2-contributor-free`)
> Date: 2026-10-17 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's prior-gen coding/agent model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation. Free Zen tier with training-data consent; superseded by Muse Spark 1.3.
- **Provider / access:** Meta / OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`); also Meta first-party API. Free Contributor-tier access via OpenCode Zen (training-data consent agreement). Standard tier $1.25 in / $4.25 out per 1M; cached input $0.15/MTok.
- **Release / knowledge:** Released August 5, 2026 (Meta). Knowledge cutoff circa June 2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free Zen tier available).
- **Context window:** 1,048,576 (1M) — verified via Meta model page and `meta.json`.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-10):** Free Zen tier (training-data consent). Paid tiers: Contributor $0.10/$0.20, Standard $1.25/$4.25 per 1M. Cached input $0.15/MTok. Cost per task ~$0.40 (AA).
- **Architecture:** Proprietary Meta Muse-series model.

### Raw benchmarks found

> Sources: BenchLM.ai model page (Overall 65.84/100, #34/954, 23 of 639 benchmarks, 2026-10-17); AA model benchmarks (Intelligence Index 39.6 CRITICAL correction from 54, CritPt 17.7, AA-LCR 79.0, AA Coding Index 72.2, AA GPQA-D 90.4, AA-HLE 45.5, GDPval-AA normalized 48.6, GDPval-AA Elo 1631); Vals AI; VulcanBench Report 19; Meta model page; OpenRouter. Re-verified 2026-10-17.

Agent / tool use:

- Terminal-Bench v2.1: **82.9%** (Meta model page via BenchLM — revised up from 80%)
- Terminal-Bench 2.1 (Vals): **69.7%** (Vals AI — new)
- τ²-bench: **94.2%** (BenchLM — no longer on current BenchLM page, retained from prior file)
- GDPval-AA (Elo): **1631** (AA — confirmed on current BenchLM page, below 1750 frontier)
- GDPval-AA (normalized): **48.6%** (AA model benchmarks via BenchLM — new, below 50% frontier)
- μCanvas: 87.9% — (BenchLM — no longer on current BenchLM page, retained from prior file)
- MCP Atlas: 90.3% — (BenchGen — no longer on current BenchLM page, retained from prior file)
- Toolathlon-Verified: **78.4%** (Meta model page via BenchLM — new)
- Claw-Eval: no verified public score found
- τ³-Banking: **27%** (AA — no longer on current BenchLM page, retained from prior file)
- JobBench: **57.9%** (BenchLM — no longer on current BenchLM page, retained from prior file)
- GDP.pdf: **22.1%** (BenchLM — no longer on current BenchLM page, retained from prior file)
- AA Agentic Index: **44.0%** (AA model benchmarks — new)
- MazeBench: **0%** (MazeBench AI leaderboard / BenchLM — NEW)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM — confirmed on current page, ≥90 frontier threshold)
- GPQA Diamond (Vals): **86.4%** (Vals AI — new)
- AA-GPQA-D: **90.4%** (AA model benchmarks via BenchLM — confirmed)
- HLE: **45.5%** (BenchLM — confirmed, above 40% frontier threshold)
- AA-HLE: **45.5%** (AA model benchmarks via BenchLM — confirmed)
- **AA Intelligence Index: 39.6%** (Artificial Analysis — CRITICAL CORRECTION from 54 in prior file; drops from above-60 frontier to mid-range)
- AA-LCR: **79.0%** (AA model benchmarks via BenchLM — NEW, was "no verified public score found" in prior file)
- CritPt: **17.7%** (AA — revised down from 18)
- MMLU-Pro (Vals): **86.1%** (Vals AI — new)
- AA-MMLU-Pro: 90.6% — (BenchLM — no longer on current BenchLM page, retained from prior file)
- AA Global-MMLU-Lite: 91.2% — (BenchLM — no longer on current page, retained from prior file)
- AA-IFBench: 64.5% — (BenchLM — no longer on current page, retained from prior file)
- AA-Omniscience Accuracy: 59.7% — (BenchLM — no longer on current page, retained from prior file)
- AA-Omniscience Index: **27.2%** (Artificial Analysis / BenchLM — NEW, was not listed)
- AA-Omniscience Accuracy: **45.4%** (Artificial Analysis / BenchLM — NEW, was 59.7%)
- AA-Omniscience Hallucination Rate: **33.3%** (Artificial Analysis / BenchLM — NEW)
- MMLU-Pro (Vals): **88.3%** (Vals AI / BenchLM — NEW)
- MRCR / RULER / GraphWalks: no verified long-context retrieval reported (unchanged from prior file)

Coding:

- DeepSWE 1.1: **59.3%** Pass@1 (BenchLM — confirmed on current page)
- LiveCodeBench: 91.8% — (BenchLM — no longer on current BenchLM page, retained from prior file)
- SciCode: 56% — (Artificial Analysis — no longer on current page, retained from prior file)
- SWE-bench Verified: 87.5% — (BenchLM — no longer on current page, retained from prior file)
- SWE-bench (Vals): **86.6%** (Vals AI — new, confirmed on current page, ≥85 frontier)
- VulcanBench v3: **87.0%** (VulcanBench Report 19 — new, confirmed on current page, ≥85 frontier)
- VulcanBench CII v1: **86.5%** (VulcanBench — new)
- AA Coding Index: **72.2%** (AA model benchmarks — CRITICAL downgrade from 80.1%)
- AA-SciCode: **57.4%** (AA model benchmarks — revised down from 58.3%)
- Terminal-Bench 2.1: **82.9%** (Meta model page via BenchLM — confirmed)
- MCP Atlas: 90.3% — (BenchGen — no longer on current page, retained from prior file)
- SWE Marathon: **no verified public score found** for this exact ID
- FrontierSWE v2: **12.0%** (Proximal / BenchLM — NEW, very low)
- Vibe Code Bench: 71.0% — (BenchLM — no longer on current page, retained from prior file)

Multimodal:

- AA-MMMU-Pro: **76.4%** (AA model benchmarks via BenchLM — CRITICAL downgrade from AAA-MMMU-Pro 88.1%)
- AAA-MMMU-Pro: 88.1% — (BenchLM — no longer on current BenchLM page, retained from prior file)
- MathVision: 87.3% — (BenchLM — no longer on current page, retained from prior file)
- V*: 88.5% — (BenchLM — no longer on current page, retained from prior file)
- Design Arena Website: **1315** (OpenRouter — confirmed, revised down from 1318)

Long context:

- MRCR / RULER / GraphWalks: no verified long-context retrieval reported
- Context window: 1,048,576 tokens

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 65.84, #34/954, 23 of 639) and AA as of 2026-10-17.

- **Tool use: 72/100.** (Revised DOWN from 90.) CRITICAL: τ²-bench 94.2% and μCanvas 87.9% NO LONGER on current BenchLM page; MCP Atlas 90.3% no longer on page; GDPval-AA normalized 48.6% (below 50% frontier, down from 61.7%); GDPval-AA Elo 1631 (below 1750 frontier). Confirmed: TB 2.1 82.9% (revised up from 80%), TB 2.1 (Vals) 69.7%, Toolathlon-Verified 78.4% (new). Capped by loss of τ²-bench, μCanvas, MCP Atlas from current page; GDPval-AA below frontier.

- **Reasoning: 78/100.** (Revised DOWN from 88.) CRITICAL: AA Intelligence Index 39.6 (corrected from 54 — massive downgrade, drops from above-average to mid-range). GPQA Diamond 90.4% (≥90 frontier), HLE 45.5% (above 40% frontier), AA-LCR 79.0% (new, was "no data"), MMLU-Pro (Vals) 86.1% (new), CritPt 17.7% (down from 18). AA-MMLU-Pro, AA Global-MMLU-Lite, AA-IFBench, AA-Omniscience no longer on current page. Capped by Intelligence Index 39.6 (far below 60 frontier).

- **Context window: 95/100.** 1M (1,048,576) verified via Meta model page and meta.json. AA-LCR 79.0% (new, confirms long-context reasoning). No MRCR/RULER retrieval curve published for 100.
- **Multimodal: 90/100.** (Revised DOWN from 92.) Text, image, audio, video, PDF in; text out — full omni input. AA-MMMU-Pro 76.4% (down from 88.1%); MathVision and V* no longer on current page. Caps: text-only output prevents 95+ tier.
- **Coding: 86/100.** (Revised DOWN from 88.) SWE-bench (Vals) 86.6% (≥85 frontier, new), VulcanBench v3 87.0% (≥85 frontier, new), AA Coding Index 72.2% (CRITICAL downgrade from 80.1%, ≥70 frontier), DeepSWE 59.3%, TB 2.1 82.9%. LiveCodeBench 91.8% and SWE-bench Verified 87.5% NO LONGER on current BenchLM page. Capped by DeepSWE 59.3% below 74% frontier.
- **Cost efficiency: 100/100.** Free Zen tier ($0). Caps: free tier requires training-data consent; time-limited; data-sharing caveat.
- **Overall Score: 84/100.** Half-up mean: (72+78+95+90+86)/5 = 421/5 = 84.2 → 84. (Revised DOWN from 91.) CRITICAL: AA Intelligence Index corrected 54→39.6; τ²-bench, μCanvas, MCP Atlas, LiveCodeBench 91.8%, SWE-bench Verified 87.5%, AAA-MMMU-Pro 88.1% no longer on current BenchLM page (coverage dropped 50→23 of 639); GDPval-AA normalized 61.7→48.6%; AA Coding Index 80.1→72.2%; AA-MMMU-Pro 88.1→76.4%. New: AA-LCR 79.0%, SWE-bench (Vals) 86.6%, VulcanBench 87.0%, Toolathlon-Verified 78.4%. BenchLM updated 66.48 (#28/889, 50/618) → 65.84 (#34/954, 23/639).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (BenchLM `https://benchlm.ai/models/muse-spark-1-2` for overall rank/score (#34/954, 65.84, 23/639 benchmarks) and benchmark tables; AA model benchmarks for Intelligence Index 39.6, AA-LCR 79.0, AA Coding Index 72.2, GDPval-AA normalized 48.6, GDPval-AA Elo 1631, CritPt 17.7; Vals AI leaderboard; VulcanBench Report 19; Meta model page; OpenRouter). Scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai model page (Overall 65.84/100, rank #34/954, 23 of 639 benchmarks, 2026-10-17); AA model benchmarks (Intelligence Index 39.6 CRITICAL correction from 54, GDPval-AA Elo 1631, CritPt 17.7, AA-LCR 79.0, AA Coding Index 72.2); Vals AI; VulcanBench Report 19; Meta model page; OpenRouter.
- Re-verification (Oct 16→Oct 17): BenchLM confirms 65.84 (#34/954, 23/639 benchmarks). New Oct 17 benchmarks: MazeBench 0% (different run), FrontierSWE v2 12.0%, AA-SciCode revised 58.3%→57.4%, MMLU-Pro (Vals) 88.3%, AA-Omniscience Index 27.2%, AA-Omniscience Accuracy 45.4%, AA-Omniscience Hallucination Rate 33.3%. Vibe Code Bench 71.0% no longer on current BenchLM page (retained). Normalized scores unchanged (84).

---

## Re-verification (2026-10-17)

Confirmed: Overall 84, rank #34/954 (overall 65.84), 23 of 639 benchmarks on Oct 17 page. Intelligence Index 39.6% confirmed (critical correction from 54). New Oct 17 benchmarks added: MazeBench 0%, FrontierSWE v2 12.0%, AA-SciCode 57.4% (revised from 58.3%), MMLU-Pro (Vals) 88.3%, AA-Omniscience metrics. All normalized scores unchanged.
