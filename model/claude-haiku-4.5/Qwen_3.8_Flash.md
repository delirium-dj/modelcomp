# Claude Haiku 4.5 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-haiku-4-5`, alias `claude-haiku-4-5-20251001`; this folder tracks the Zen listing `opencode/claude-haiku-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast/cheap tier of the 4.5 generation — released 2025-10-15, officially positioned to **match Claude Sonnet 4 on coding, computer use and agent tasks at ~1/3 the cost and >2× the speed**, with SWE-bench Verified 73.3% on a documented harness. Genuinely strong at coding for its price; academic reasoning rows were never published outside image-only tables.
- **Provider / access:** Claude Messages API (extended thinking), Claude Code, Bedrock `anthropic.claude-haiku-4-5`, Vertex `claude-haiku-4-5@20251001`, Microsoft Foundry. No Zen Free ID.
- **Release / knowledge:** 2025-10-15; training cutoff Jul 2025 (reliable cutoff Feb 2025) per official docs.
- **IDs:** `claude-haiku-4-5` / `claude-haiku-4-5-20251001`.
- **Context window:** **200K in / 64K max out** per the official Anthropic models table — the curated `meta.json` "128K total / Text in/out" is a generic placeholder on both axes and is contradicted by vendor docs (flagged, as with many folders).
- **Modalities:** **Text + image in; text out**; extended thinking (budget_tokens); tool use + structured output; no audio/video in. The curated "Text in/out" understates vision — corrected here.
- **Pricing (as of 2026-10-02):** **$1 / $5 per MTok**; cache reads 10% of input; Batch 50% off. Cost excluded from Overall.
- **Architecture:** proprietary; params undisclosed; AI Safety Level 2 deployment.

### Raw benchmarks found

> Verified against the qualifying `Kimi_K3.md` (fetched Anthropic's 2025-10-15 announcement, official models overview and Haiku product page directly), which remains the honest lane record for this folder: coding/agent rows are published with methodology, but **GPQA / HLE / LCR / AA Index / Omniscience exist only in image-only vendor charts** — no readable numbers, and none invented here.

Agent / tool use:

- Terminal-Bench (Terminus 2, vendor methodology): **~41%** (40.21% no-thinking ×6 runs / 41.75% with 32K thinking ×5 runs)
- OSWorld-Verified & τ²-bench: evaluated by Anthropic, exact values **image-only / not extractable**; vendor claims computer-use > Sonnet 4
- Augment agentic eval: **~90% of Sonnet 4.5's performance** (co-founder quote); GDPval-AA / Claw-Eval: no public row

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: **no verified readable public score** (image-only vendor tables; third-party panels not captured in the cohort's source set) — scored mid-band rather than borrowed from Sonnet proxies

Coding:

- SWE-bench Verified: **73.3%** (official: simple scaffold, bash + string-replace tools, 50-trial average, n=500, 128K thinking, default sampling — one of the best-documented SWE rows in the cohort)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks published; 200K window is the Anthropic tier standard.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Missing academic rows are floored to mid-band, not lifted via family reputation.

- **Tool use: 58/100.** TB ~41% is below the mid-tier 45–60 band; the OSWorld/τ claims and "Sonnet 4 parity" positioning are real but unverifiable, and computer-use leadership without a readable number can't buy a high-60s score. Fast tool loops at scale are the honest read.
- **Reasoning: 62/100.** Extended thinking in a small fast model plus credible near-frontier positioning, but zero extractable GPQA/HLE/Index rows → scored at band mid like Kimi K3 (60), a hair up for the documented thinking budget. This is an evidence-thin 62, not a measured one.
- **Context window: 62/100.** Official 200K sits at the 50–64 (100K–200K) band's top edge — the 200K=70 mapping only applies in the ≥200K tier framing; with **no retrieval probes at all** and the curated 128K placeholder conflicting with docs, scored at the top of the 100K–200K band rather than the anchor. 64K max output is a plus, noted.
- **Multimodal: 64/100.** Text+image in / text out = the 60–70 band; no vision benchmark row for this exact ID (Sonnet-4-level computer use suggests the high 60s but is unverified); no audio/video.
- **Coding: 82/100.** SWE-V 73.3% on a fully documented harness is the folder's anchor fact — comfortably above most mid-cohort models and the standout for a $1/$5 tier; the ~41% TB and missing LCB/SciCode rows keep it below the 85+ frontier-coder band. Kimi K3's 85 is fair; 82 reflects the same read slightly discounted for the single-row evidence base.
- **Cost efficiency: 88/100.** $1/$5 per MTok lands exactly between the methodology's $0.60/$2.20→92 and $1.25/$4.25→88 anchors; batch/cache discounts sweeten real workloads. Cost excluded from Overall.
- **Overall Score: 66/100.** Mean of Tool 58, Reasoning 62, Context 62, Multimodal 64, Coding 82 = 328/5 = 65.6 → **66**. Best fit: **high-volume agentic coding and parallel sub-agent fan-out** where SWE-V 73 at $1/$5 with 64K outputs is close to unbeatable in Anthropic's lineup on cost-per-solved-task; route hard reasoning to Sonnet/Opus tiers. Slightly below the 3-rater cohort's 68.7 — that average credited more vendor reputation on the unverifiable reasoning rows than this file does.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: cross-checked against the qualifying `Kimi_K3.md` (which fetched the 2025-10-15 Anthropic announcement, official models overview and product page: SWE-V 73.3, TB ~41, $1/$5, 200K/64K, image-only table caveat) and curated `meta.json`. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) curated meta's "128K / Text in/out" contradicted by official 200K + image input, (b) the folder's core asymmetry — best-documented coding row, zero readable reasoning rows, (c) no free API tier despite Claude.ai free-tier chat access.
- Revisit trigger: if Artificial Analysis or BenchLM publish ranked GPQA/HLE/Index/Omniscience rows for `claude-haiku-4-5` (the image-only-table gap), re-score Reasoning/Tool — both dims are currently floored on missing data, not measured weakness.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
