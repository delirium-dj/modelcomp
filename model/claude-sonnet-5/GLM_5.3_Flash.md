# Claude Sonnet 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): status sharpens to
> **Superseded** — Sonnet 5.5 (2026-09-28) replaced it at the same $2/$10 price, with
> retirement set for 2027-06-30 and a $1/$5 discounted route now visible. New Vals rows
> split the picture: Vibe v1.1 81.3% and ProofBench 77.0% are strong, but the TB4.0
> generation is weak (Vals 10.61%, official board 12.4% vs the successor's 70.6%) —
> Tool use 87→84, Coding 88→87, Cost 57→58. Overall 88→87.

## Model card

- **Name:** Claude Sonnet 5 (superseded Sonnet tier — replaced by Claude Sonnet 5.5, 2026-09-28, same price)
- **Short description:** Anthropic's June 2026 agentic Sonnet: plans autonomously, uses browser and terminal tools, and approached Opus 4.8 on agentic-search and computer-use evaluations at a fraction of the price. The $2/$10 launch rate was made standard on 2026-08-10 (scheduled $3/$15 increase cancelled). Still served, but the successor beats it decisively on the current terminal boards.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5`; Vertex `claude-sonnet-5`; Bedrock `anthropic.claude-sonnet-5`); Claude Platform on AWS, Google Cloud, Microsoft Foundry, Claude Code. Messages (not Chat Completions) API. A discounted $1/$5 route is visible on one gateway.
- **Release / knowledge:** released 2026-06-30. Knowledge cutoff **January 2026**.
- **IDs:** `claude-sonnet-5` (API/Vertex), `anthropic.claude-sonnet-5` (Bedrock). No API free tier; chat default on claude.ai Free/Pro at launch (now Sonnet 5.5).
- **Lifecycle (verified Nov):** Available but **Superseded** — Sonnet 5.5 (2026-09-28) is the current Sonnet at the identical list price; Anthropic's schedule lists Sonnet 5 retirement **2027-06-30**.
- **Context window:** 1,000,000 tokens / 128K max output on the synchronous Messages API.
- **Modalities:** text + image (vision) in; text out. Adaptive thinking always on; effort defaults high.
- **Pricing (as of 2026-11-05):** $2.00 in / $10.00 out per 1M (standard since 2026-08-10; the scheduled rise was cancelled); cached reads $0.20; Batch 50%; one gateway routes at $1/$5 (~50% below list). Cost caveat: measured agentic runs are expensive (Vals TB4.0 $26.05/test at 1h45m; Vibe-1-100 $71.15/test).
- **Architecture:** proprietary, parameters undisclosed; adaptive-thinking transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card) / **Vals 74.5%**; Terminal-Bench 3.0: 14.6% (weak)
- **Terminal-Bench 4.0: 10.61% ±1.51** (Vals, #43-44/59 — NEW, very weak) / **12.4% ±3.1** (official tbench.ai board, max, Claude Code, #21 — both weak; successor Sonnet 5.5 scores 70.6/64.1%)
- Terminal-Bench-Science (Vals): **5.71%** (NEW, weak); SRE Bench (Vals): 0.38% (NEW, weak)
- BrowseComp: **84.7%** (system card); OSWorld-Verified: **81.2%** (system card)
- GDPval-AA: **1603 Elo** (system card; near Opus 4.8's 1600) / AA-normalized 48.3%; AA Agentic Index 44.3%
- Vals x-high rows (NEW): Vibe Code Bench v1.1 **81.33% ±3.05** (#28/123), ProofBench v1.1 **77.00% ±4.23** (#16/52), TaxEval v2 **75.63%** (#15/145), MortgageTax **70.03%** (#4/98), Legal Research 41.83%, LegalBench 83.92%, Public Benefits 66.03%, Tax Agent 29.37%, SkillsBench 46.48%, IOI 45.00%
- ApprenticeBench 16%; MazeBench 0%; Vals Index at launch: **#3 of the field (68.61%)** behind Fable 5 and Opus 4.8
- Tau2/Tau3/Claw-Eval/Toolathon: no verified public score found for Sonnet 5 specifically

Reasoning / knowledge:

- HLE: **57.4% with tools** / **43.2%** without; HLE-Verified 31.0% (Gemini 3.8 Flash card cross-table); AA-HLE 41.3%
- AA-GPQA Diamond: **91.1%** (AA) / **88.89% ±2.22** (Vals)
- AA-LCR: **82.0%**; CritPt 16.9%
- FrontierMath v2: Tiers 1–3 **65.6%** / Tier 4 **29.3%** (Epoch)
- LABBench2: **80.1%** (3.8 Flash card cross-table)
- Artificial Analysis Intelligence Index: **38.2** (AA); AA-Omniscience: index 16.5, accuracy 40.1%, hallucination 39.4% (honest)
- MMLU-Pro (Vals): **87.5%**; MMMU-Pro (Vals): **83.01%** (NEW)

Coding:

- SWE-bench Verified: **85.2%** (system card) — **Vals independent: 79.60% ±1.80** (#27/88; the launch note had flagged a slight slip vs 4.6 on this harness)
- SWE-bench Pro: **63.2%**; SWE Multilingual 78.3%; SWE Multimodal 28.1%
- SWE-bench (Vals): 79.6%; LiveCodeBench (Vals): **82.43%**; Vibe Code Bench v1.1 (Vals): **81.33%** (see above)
- Terminal-Bench 2.1 (coding harness): 80.4%; FrontierCode 1.1 Main: 42.7% (Cognition); CursorBench 3.2 61.5% / 4.0 34.1%
- AA-SciCode: **54.3%**; AA Coding Index: **71.5%**; VulcanBench CII v1: 89.2%
- TB4.0-era weakness (10.6–12.4%) is the new coding debit

Long context:

- 1M / 128K out; AA-LCR **82.0%**; no MRCR/RULER at window length verified

Multimodal / vision:

- CharXiv: **88.3%** with tools / 77% without; AA-MMMU-Pro 77.3%; MMMU-Pro (Vals) 83.01%; Design Arena Website: **1281**

### Normalized scores (1–100)

- **Tool use: 84/100.** CHANGED from 87 — the newly measured TB4.0 rows (10.61% Vals / 12.4% official), TB-Science 5.71% and SRE 0.38% show the agentic edge does not extend to the current terminal generation, despite TB2.1 80.4%, BrowseComp 84.7%, OSWorld 81.2% and GDPval 1603 on the established ones.
- **Reasoning: 89/100.** Unchanged — HLE 43.2/57.4%, GPQA 88.9–91.1%, FrontierMath 65.6/29.3%, the strong new ProofBench 77.0% (#16) and honest 39.4% hallucination rate hold the band; AA Index 38.2 and CritPt 16.9% cap it.
- **Context window: 95/100.** Unchanged — 1M / 128K with AA-LCR 82.0%; no ≥98% retrieval at depth verified.
- **Multimodal: 82/100.** Unchanged — vision in with CharXiv 88.3%, AA-MMMU-Pro 77.3% and the new Vals MMMU-Pro 83.01%; text-only output.
- **Coding: 87/100.** CHANGED from 88 — Vibe 81.33% (#28) and the SWE-V 79.6% Vals reading are solid, but the TB4.0-era weakness (10.6–12.4% vs the successor's 70.6%) and CursorBench 4.0 34.1% drag the current-generation picture below the prior score.
- **Cost efficiency: 58/100.** CHANGED from 57 — the $2/$10 standard rate stands (hike cancelled), a $1/$5 discounted route appeared, and the cancelled-hike signal remains positive; measured agentic runs ($26/test TB4.0, $71/test Vibe-1-100) temper it.
- **Overall Score: 87/100.** CHANGED from 88 — (84 + 89 + 95 + 82 + 87) / 5 = 437/5 = 87.4 → 87. Best-fit: a still-strong superseded Sonnet for pinned integrations — but Sonnet 5.5 at the same price dominates it on every current-generation board, so new work should default there.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: official Anthropic pricing/release notes + CloudQuell/aitokensai/Bertrande lifecycle and route checks, Vals AI model page + TB4.0/tbench.ai boards + Vals comparison pages, benchgap measured-vs-estimated screen + successor Sonnet 5.5 coverage); estimates excluded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_5.6.md`, using the same headings.
