# Claude Sonnet 5.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast flagship-class Sonnet, released 2026-09-28 — the #2 model on the Artificial Analysis Intelligence Index (56, just behind Claude Opus 5.5's 58) and the strongest model in the catalog on Terminal-Bench 4.0 in the public leaderboard. "Sonnet 5.5 generates outputs 30%+ faster than Sonnet 5, making it our fastest Sonnet model to date." Distinct from `claude-sonnet-5` and `claude-sonnet-4.6`; not a tier alias.
- **Provider / access:** Claude API `claude-sonnet-5-5`; AWS Bedrock `anthropic.claude-sonnet-5-5`; Google Vertex, Microsoft Foundry and Claude Platform on AWS `claude-sonnet-5-5`; OpenRouter `anthropic/claude-sonnet-5.5` (+ `:batch`); OpenCode Zen `opencode/claude-sonnet-5-5` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-09-28**; retirement "Not sooner than September 28, 2027". Reliable knowledge cutoff **June 2026**, training-data cutoff June 2026.
- **IDs:** `claude-sonnet-5-5` (Claude API), `anthropic.claude-sonnet-5-5` (Bedrock), `anthropic/claude-sonnet-5.5` + `anthropic/claude-sonnet-5.5:batch` (OpenRouter), `opencode/claude-sonnet-5-5` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (300K output on the Batch API with the `output-300k-2026-03-24` beta header). OpenRouter: context 1,000,000, `max_completion_tokens` 128,000.
- **Modalities:** "Text and images → text". Adaptive thinking, **default effort `high`**, all five levels (low/medium/high/xhigh/max) supported. Full Claude tool stack plus web search and code-execution server tools.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$2**, output **$10**; 5-minute cache write **$2.50**, 1-hour cache write **$4**, cache read **$0.10** (0.05× base); Batch **$1 / $5**. **Fast mode is not offered for Sonnet 5.5** (Opus 5.5 only, $8/$40). OpenCode Zen lists $2.00 / $10.00 / $0.20 cached read / $2.50 cached write.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card published with the model (148 pages).

### Raw benchmarks found

> Anthropic's system-card and launch-page numbers are marked "vendor"; Artificial Analysis, the official Terminal-Bench board, Vals AI, Zapier's AutomationBench host, Epoch AI and the BenchLM ledger are independent. Anthropic publishes at **max effort with adaptive thinking** unless stated.

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (vendor, Claude Code harness) / **61.82% (61.8% ± 2.9)** (official tbench.ai board, Claude Code, max effort, **rank 2**; Opus 5.5 64.85%) / **64.14% ± 1.01** (Vals AI, #2/50) / **63.6%** (AA, mini-swe-agent; the AA article says "In Terminal-Bench 4.0, Claude Sonnet 5.5 reaches 64% against 60% for Opus 5.5")
- Terminal-Bench 2.1: **no verified public score found** for Sonnet 5.5
- Toolathlon-Verified: **77.8%** Pass@1 / **68.5%** Pass³ (vendor); Zapier private eval set 1.0.6 **44.70%**; Hermes Index 53.1%; 150 agent tasks graded on files/state 73.5%
- GDPval-AA v2.1: **1844 Elo** (vendor) / **1837.82** (AA); AA-Briefcase v1.1 **1811 Elo** (vendor)
- AutomationBench: **44.7%** (vendor / Zapier strict pass rate) / **71.77%** (AA AutomationBench-AA objective-share) — different metrics
- OSWorld 2.1: **80.1% partial** (vendor); OSWorld 2.0: **not published** for Sonnet 5.5
- Agents' Last Exam: 64.5% with tools / 56.9% without tools; Chartography 61.6% without tools; Harvery held-out 10.0% / 93.1% criterion-pass; Hermes Bench 73.5%; Research and Analysis with Complex Operations 87.0%
- Claw-Eval / ClawProBench / MCP-Atlas: **no verified public score found** for Sonnet 5.5

Reasoning / knowledge:

- HLE: **54.96%** (AA) / **56.9%** without tools, **64.5%** with tools (vendor)
- LCR / MLCR: AA-LCR v1.1 **82.67%** (AA); MLCR-AA **75.0%** (AA) — among the best in the catalog
- CritPt: **31.43%** (AA)
- GPQA Diamond: **no verified public score found** for Sonnet 5.5 (AA `gpqa: null`)
- Artificial Analysis Intelligence Index by effort: **Max 56 (#2/217)**, xhigh 52 (#11), high 47 (#29), medium 41 (#52), low 36 (#73) — a large, cheap spread ("~193k Output Tokens per Intelligence Index Task" at max; 23M output tokens at low)
- FrontierMath v2: Tiers 1–3 **88.772%** (#7/64), Tier 4 **80.488%** (#8/51) (Epoch AI, via BenchLM) — 2.5 / 14.5 points behind GPT-6 Astra and GPT-6.1 Sol
- ArXivMath (Aug 2026): **86.8%** no tools / **95.2%** with tools (vendor)
- HealthBench raw **69.4%** (best-verified in the catalog) / length-adjusted 65.4%; HealthBench Professional **69.2%** (raw 77.1%, both best-verified); BioMysteryBench 89.2% human-solvable / 44.7% human-difficult; SpatialBench Verified 72.5%; SingleCellBench 59.1%; Protein Design 51.0%; medicinal chemistry 65.3%; protein-design library ranking 54.8%; de novo protein-binder 82.3%; Protocols troubleshooting 67.3% / understanding 66.6%; GMMLU 92.1%; MILU 91.6%
- Omniscience index 41.53, accuracy **53.95%**, hallucination rate **47.01%** (AA)

Coding:

- SWE-bench Pro **81.3%**, SWE Multilingual **90.3%**, SWE Multimodal **54.3%** (vendor system card)
- DeepSWE: **71.0%** (vendor) — 8.0 behind Muse Wonder Full's 79.0%
- FrontierSWE v2: **61.9%** (vendor) — 3.6 behind GPT-6 Astra
- Terminal-Bench 4.0: 70.6% (vendor) / 61.8% (tbench.ai) / 64.14% (Vals) / 63.6% (AA)
- Terminal-Bench-Science 0.1: **59.9%** (vendor) / 58.10% (AA)
- FrontierCode 1.1: Main **46.2%** (Max) / 42.4% (High) (vendor) / 45.83% (AA); Extended **59.1%**
- CursorBench 4.0: **55.5%** at max effort, 53.1% at xhigh, 47.8% at high, 39.2% at medium (vendor) / 55.5% (BenchLM)
- SciCode **60.995%** (AA); Bug Hunt Bench **51.3 fixes** (best-verified in the catalog); Vibe Code Bench **92.39%** (Vals AI, #1); LiveCodeBench: **no verified public score found**; SWE-bench Verified: **no verified public score found**

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Sonnet 5.5. AA-LCR v1.1 82.67% covers the short band only. 1M context, 128K max output, 300K output on Batch.
- AA verbosity by effort: 420M output tokens at max, 110M at xhigh, 52M at high, 31M at medium, 23M at low — a large price/quality lever.

Performance profile (AA): Max — output **134.3 t/s** (#35/185), cost per Index task **$5.46** (#109/114), TTFT 388.54s; xhigh $2.01/task; high $0.88; medium $0.48; low $0.35 (TTFT 1.11s). "used ~193k Output Tokens per Intelligence Index Task"; "fall back in ~0.1% of tasks across the Intelligence Index."

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 90/100.** Frontier-tier agentic profile — Terminal-Bench 4.0 70.6% (vendor) with the official board at 61.8% ± 2.9 and Vals at 64.14% (the best public-leaderboard score among the flagships here), GDPval-AA 1837.82–1844 Elo (rubric anchor ~1750+), Toolathlon-Verified 77.8% Pass@1 with Pass³ 68.5%, AA-Briefcase 1811, OSWorld 2.1 80.1% partial, Agents' Last Exam 64.5% with tools, Hermes Bench 73.5%. Capped below 95 by the absence of any Terminal-Bench 2.1, τ-bench, Claw-Eval, MCP-Atlas or Toolathon figure for this model, by AutomationBench at 44.7% in the strict Zapier run, and by the 8.8-point spread between Anthropic's 70.6% and the independent 61.8–64.1% measurements.
- **Reasoning: 89/100.** HLE 54.96–64.5%, AA-LCR 82.67%, MLCR-AA 75.0% (best-in-class), CritPt 31.43%, FrontierMath v2 88.772% (T1–3) and 80.488% (T4), ArXivMath 95.2% with tools, HealthBench Professional 69.2% and HealthBench 69.4% (both best-verified), BioMysteryBench 89.2%, ARC-AGI-level results absent. Held below 90 because the Artificial Analysis Intelligence Index is **56** — just under the rubric's 60+ anchor for the 90–100 band — and because **GPQA Diamond is unmeasured** for Sonnet 5.5, so the clearest reasoning anchor cannot be checked.
- **Context window: 95/100.** 1,000,000-token context with a 128,000 max output (300K on Batch) — the rubric's top tier (≥1M = 95–100), and the output cap clears the 64K line. Not 100: the rubric reserves that for "≥98% retrieval at 512K+", and **no long-context retrieval measurement exists** for Sonnet 5.5 — AA-LCR 82.67% covers only the short band.
- **Multimodal: 70/100.** Image input with text output and benchmark-leading vision/tooling results — Chartography 61.6% without tools and **90.2%** with tools (best-verified), BenchCAD Vision2Code voxel IoU **0.747 / 0.963** (best-verified), Anthropic biomedical-image-analysis **72.2%** (best-verified), OfficeQA 76.9%, OfficeQA Pro 65.6%. The rubric's "+image in = 60–70" band is the ceiling: no video, audio or PDF input is documented for Claude Sonnet 5.5, and no MMMU-Pro has been published for it.
- **Coding: 88/100.** SWE-bench Pro 81.3% / Multilingual 90.3% / Multimodal 54.3%, FrontierCode 1.1 46.2% Main / 59.1% Extended, SciCode 60.995% (anchor 55%+), Terminal-Bench 4.0 61.8–70.6%, Terminal-Bench-Science 59.9%, CursorBench 4.0 55.5%, Vibe Code Bench 92.39% (#1 on Vals), Bug Hunt Bench 51.3 fixes (best-verified). Capped by DeepSWE 71.0% (under the rubric's 74% anchor), FrontierSWE v2 61.9% (3.6 behind the leader), and the absence of SWE-bench Verified, LiveCodeBench and a public Terminal-Bench 2.1.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/claude-sonnet-5-5` — is billed at **$2.00 in / $10.00 out** per 1M with a $0.20 cached read and $2.50 cached write; Anthropic's own list is $2/$10 with cache read $0.10 (0.05×) and Batch at $1/$5. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) bracket that at roughly 78. The real cost lever is effort, not tier: Artificial Analysis measures **$5.46 per Index task at max, $2.01 at xhigh, $0.88 at high and $0.35 at low**, i.e. the same model spans 15× in task cost.
- **Overall Score: 86.4/100.** (90 + 89 + 95 + 70 + 88) / 5 = 86.4 — best-fit: the best value in this batch for agentic-terminal and coding work (public-board Terminal-Bench 4.0 leader, 134 t/s, 30%+ faster than Sonnet 5, $2/$10 with a 0.05× cache read); run it at high or xhigh effort rather than max unless you need max, since quality per dollar drops steeply above that.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 70.6% (Anthropic) vs 61.82% (official tbench.ai) vs 64.14% (Vals) vs 63.6% (AA).** Anthropic's number comes from a Claude Code `--bare` configuration without internet egress; the public board, Vals and AA all land ~61.8–64.1% with mini-swe-agent or a differently-configured Claude Code. All four are listed; the independent board figure is the anchor and the 70.6% claim is not treated as the model score.
2. **AutomationBench — 44.7% (Zapier strict pass rate) vs 71.8% (AA objective-share).** Different metrics, not comparable: AA's "headline metric represent[s] the average share of each task's objectives" while Zapier's leaderboard reports tasks completed fully. (Note: **no source shows 69.5%** for this model.)
3. **CursorBench 4.0 effort ladder.** Anthropic publishes 55.5% (max), 53.1% (xhigh), 47.8% (high), 39.2% (medium) — an 16-point spread that makes unlabelled numbers meaningless; the ladder is reproduced above.
4. **FrontierCode — 54.4%-style max-vs-default conflict reported for Opus 5.5; for Sonnet 5.5 Anthropic states 46.2% at max and 42.4% at high**, while AA measures 45.83% — consistent once the effort label is applied. AA also notes "Sonnet 5.5 scores lower at Max effort than at Xhigh" on FrontierCode, an Anthropic observation consistent with the published effort tables.
5. **Cache-read price — $0.10 (Anthropic, 0.05× base) vs $0.20 (OpenCode Zen).** OpenCode also lists Sonnet 5 at $0.20, which suggests a stale Zen row; the Anthropic figure is used and the Zen difference is recorded.
6. **AA index ordering.** Max 56 > xhigh 52, but the Terminal-Bench article notes Anthropic's own statement that Sonnet 5.5 can score *lower* at max than at xhigh on some evaluations — so a single "max" number is not the whole picture; the effort ladder is documented.
7. **Terminal-Bench-Science 59.9% (vendor) vs 58.10% (AA)** — close agreement.
8. **Index version drift.** The current AA index (v4.3.2) is what is quoted; older AA articles quote higher scores for the same model, and BenchLM's overall (82.22, #6/956) is a different scale.

### Notes on identity

- `claude-sonnet-5-5` is a distinct model from `claude-sonnet-5` (Sonnet 5 scores 10.3% on Terminal-Bench 4.0 against Sonnet 5.5's 70.6%, and 63.2% SWE-bench Pro) and from `claude-sonnet-4.6` / `claude-sonnet-5.5`'s stable siblings; it is not a tier alias.
- Effort levels (low/medium/high/xhigh/max) are parameters on one model — the AA index spread 36 → 56 shows how large the effect is, so the "Max" figure is one configuration, not the model.
- No OpenRouter `gpt`-style Pro/Lite variant exists; only the `:batch` route.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and effort docs, the Claude Sonnet 5.5 launch page and its 148-page system card (PDF text extracted); independent trackers Artificial Analysis (model page, all five effort variants, launch article), the official Terminal-Bench 4.0 leaderboard (embedded JSON), Vals AI's own runs, Zapier's AutomationBench host, Epoch AI FrontierMath via the BenchLM ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5.5.md`, using the same headings.
