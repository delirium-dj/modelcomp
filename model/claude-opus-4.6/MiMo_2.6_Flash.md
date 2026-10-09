# Claude Opus 4.6 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** The February-2026 flagship that defined the Claude 4.6 generation (released 2026-02-05, superseded by Opus 4.7) — first Opus-class model with a **1M-token context window (beta)**, adaptive thinking at four effort levels, and at release #1 rows on Terminal-Bench 2.0, HLE, BrowseComp and GDPval-AA (+144 Elo over GPT-5.2, +190 over Opus 4.5). Introduced the compaction API and the agentic "manages a 50-person org across 6 repos" demo. Legacy now — Okou has dropped it from its lineup; Okou's guidance: stay only for behaviour stability of validated agents.
- **Provider / access:** Claude API (`claude-opus-4-6`), Claude Platform, Amazon Bedrock, Google Vertex, Microsoft Foundry, claude.ai (Pro/Team); US-only inference at 1.1× (`inference_geo`).
- **Release / knowledge:** released 2026-02-05; knowledge cutoff not surfaced in these sources → not scored.
- **IDs:** `anthropic/claude-opus-4-6` (gateway routes) / `claude-opus-4-6` (native; no date suffix).
- **Context window:** **200K standard / 1M beta** (usage tier 4+ or custom limits, Claude Platform only); max output 128,000; prefilling removed (400 error); Compaction API beta.
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking, four effort levels); tool calls yes.
- **Pricing (as of 2026-10-07):** **$5.00 in / $25.00 out** per 1M up to 200K context; **prompts >200K in the 1M beta bill every token at $10/$37.50**; Batch $2.50/$12.50 (50%); cache read $0.50 (AA); US-only +1.1×. Paid. (Okou's archived reseller card lists $15/$75 — a third-party markup, not Anthropic list.)
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Anthropic-run unless noted):

- Terminal-Bench 2.0: **65.4** (Anthropic, max effort — #1 at release vs GPT-5.2's 64.7 Codex-CLI; public Terminus-2 leaderboard entry 62.9 ±2.7). Terminal-Bench 2.1: **62.9 ±2.7** (leaderboard, Terminus-2, 2026-02-06) — well under the 88% frontier ref that later models hold.
- GDPval-AA: **1606** Elo (vs GPT-5.2 1462, Opus 4.5 1416) — the release's #1 claim, but **under the 1750+ ref**.
- BrowseComp: **84.0** (#1 at release; vs GPT-5.2 Pro 77.9). OSWorld: **72.7** (+6.4 over 4.5). Finance Agent: **60.7**. τ²-bench Retail: **91.9**. OpenRCA: 34.9.
- MCP-Atlas: known trade-off (multiple reviews note weaker large-scale tool orchestration vs gains elsewhere; no score surfaced). AutomationBench: no row for this model.

Reasoning / knowledge:

- GPQA Diamond: **91.3** — clears the 90%+ ref (GPT-5.2 Pro 93.2, Gemini 3 Pro 91.9 above).
- HLE with tools: **53.1** — clears the 40%+ ref (GPT-5.2 Pro 50.0). No-tools HLE not published by Anthropic; AA's **non-reasoning** config reads 19 (not comparable to reasoning-mode scores).
- AA Intelligence Index: **26** for the measured non-reasoning/high configuration (AA) — the reasoning-mode index value did not surface; on either reading it is under the 60+ ref (later-era scale).
- Anthropic's release framing: #1 on HLE among frontier models at 2026-02-05.

Coding (Anthropic-run unless noted):

- SWE-bench Verified: **80.8** (flat vs Opus 4.5's 80.9; GPT-5.2 80.0) — mid-saturation era; **below the 85%+ band** later frontier rows occupy, and OpenAI flagged cross-frontier SWE-V contamination in this period (Okou note).
- Terminal-Bench 2.0/2.1 as above (65.4 / 62.9). OpenRCA 34.9. No DeepSWE/SciCode/AA Coding Index row found.

Long context:

- **MRCR v2 (8-needle): 93% at 256K, 76% at 1M** (Anthropic) vs Sonnet 4.5's 10.8/18.5 — a "qualitative shift against context rot"; the strongest 1M retrieval evidence among early-2026 models, though 76 at 1M is still short of the ≥98% condition and the whole tier is premium-gated/beta.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 84.0 (#1), OSWorld 72.7, τ² 91.9 and FinanceAgent 60.7 are strong release-day rows; GDPval 1606 misses the 1750 ref, TB2.1 ~63 is far under the modern frontier bar, and MCP-Atlas is a noted weakness.
- **Reasoning: 86/100.** GPQA 91.3 (90+) and HLE-tools 53.1 (40+) both clear, and Anthropic led the field on HLE at release; no published no-tools HLE, a non-reasoning-only AA Index row (26), and no ARC/AlphaProof-class evidence cap it at 86.
- **Context window: 95/100.** 1M exists (beta) with MRCR 93/76 — real retrieval proof — but the window is gated to top tiers, billed at $10/$37.50 above 200K, and 76% at 1M misses the ≥98% condition → floor with an asterisk.
- **Multimodal: 65/100.** Text + image in, text out = image band (60–70); OSWorld/BrowseComp show strong visual grounding, no video/audio/PDF-native input or non-text output.
- **Coding: 82/100.** TB2.0 #1 at release (65.4) and SWE-V 80.8 led the February cohort, OpenRCA 34.9 solid; absolute rows are well below the later frontier refs (TB2.1 88, SWE-V 85+) and SWE-V was in its contamination-flagged era.
- **Cost efficiency: 50/100.** $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (≈48–50); batch halves, 90%-off cache reads, and flat pre-200K pricing hold it at 50 — the 200K+ premium doubling input to $10/$37.50 is the structural negative.
- **Overall Score: 82/100.** (84+86+95+65+82)/5 = 82.4 → 82 — the model that made 1M context and adaptive thinking standard for Claude, judged now as a legacy tier: four #1-at-release rows and excellent MRCR evidence, weighed against a 200K-gated window, GDPval below the frontier ref, and absolute benchmark rows the 4.7/4.8/5.x line has left behind.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic launch post + research page, Digital Applied, TechInformed, Vellum, Code Velocity, Okou, Artificial Analysis comparison pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Opus 4.6 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-opus-4-6`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic flagship Feb–Apr 2026 (released 2026-02-05): first Opus with **1M context (beta)**; launch SOTA on Terminal-Bench 2.0 (65.4%), HLE, BrowseComp, GDPval-AA (+144 Elo over GPT-5.2); topped LMArena text/code/search at launch. Superseded by Opus 4.7 (2026-04-16) and 4.8 but still GA.
- **Provider / access:** Claude API `claude-opus-4-6`; claude.ai, Amazon Bedrock, Google Vertex AI, Microsoft Foundry. 1M context initially beta (Tier 4 / custom limits on Claude Platform; Vertex preview). US-only inference 1.1×. Paid — not free.
- **Release / knowledge:** 2026-02-05; knowledge cutoff **May 2025 reliable / August 2025 training data** (The AI Rankings).
- **IDs:** `claude-opus-4-6`.
- **Context window:** **200K standard / 1M beta** (all tokens billed at long-context rates above 200K); 128K max output (300K Batch API beta).
- **Modalities:** text + image in; text out; adaptive thinking (low/medium/high/max effort); tool calls yes; prompt caching; Batch API; context compaction beta; **prefilling removed** (400 error vs 4.5).
- **Pricing (as of 2026-09-22):** **$5.00 in / $25.00 out per 1M ≤200K**; **$10.00 / $37.50 for >200K input** (1M beta — whole request repriced); cache read $0.50 (90% off); batch $2.50/$12.50 (50% off). Paid API.
- **Architecture:** proprietary hybrid-reasoning (Claude Opus 4.6).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **65.4%** (Anthropic; **SOTA at launch** — first model >65; vs Opus 4.5 59.8, GPT-5.2 Codex-CLI 64.7, Gemini 3 Pro 56.2). Terminal-Bench Hard: **48.5%** (BenchmarkList 2026-10-06, rank 12/326). TB2.1: no verified public score found (4.6 predates 2.1 tables; re-checked 2026-10-06)
- OSWorld: **72.7%** (Anthropic/Digital Applied; +6.4 vs 4.5 — best computer-use at launch); OSWorld-Verified **72.7% (rank 27/70)** — BenchmarkList 2026-10-06 confirms the same figure
- GDPval-AA: **1619 Elo** (BenchmarkList 2026-10-06, rank 25/352; Anthropic launch cited 1606, +144 over GPT-5.2 1462 — both rows kept)
- BrowseComp: **84.0%** single-agent / **86.57%** multi-agent harness (Anthropic; SOTA at launch)
- Finance Agent: **60.7%** (Anthropic; SOTA at launch)
- MCP Atlas (high effort): **62.7%** (Anthropic) / **76.8%** (BenchmarkList 2026-10-06, rank 21/48 — harness/config spread noted)
- τ²-Bench Telecom: **99.3%** (Anthropic; vs GPT-5.2 98.7); Tau2-Bench Telecom **92.1%** (BenchmarkList, rank 43/332)
- BrowseComp: **83.7%** (BenchmarkList, rank 27/60 — confirms the Anthropic 84.0 single-agent row)
- OpenRCA: **34.9%** (Anthropic)
- Toolathlon / Tau3 / Claw-Eval: no verified public score found (re-checked 2026-10-06)

Reasoning / knowledge:

- Humanity's Last Exam with tools: **53.0–53.1%** (Anthropic; leads frontier at launch vs GPT-5.2 Pro 50.0, Gemini 3 Pro 45.8)
- GPQA Diamond: **91.3%** (Digital Applied comparison)
- ARC-AGI-2: **68.8%** (The AI Rankings) / **69.2%** (BenchmarkList 2026-10-06, rank 20/99 — ~2× Opus 4.5 37.6, vs GPT-5.2 54.2 — largest single-gen jump cited); ARC-AGI-1: **94.0%** (rank 17/97)
- Artificial Analysis Intelligence Index: no verified public score found for 4.6 specifically (re-checked 2026-10-06)
- FrontierMath / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **80.8%** (25-trial avg Anthropic; **81.42% with prompt modification**; flat vs Opus 4.5 80.9; Digital Applied cites 80.8)
- Terminal-Bench 2.0: **65.4%** (SOTA at launch; see agent row)
- DeepSWE / LiveCodeBench / SWE-Pro: no verified public score found for 4.6 in sources read

Long context:

- MRCR v2 8-needle **1M: 76.0%** (Anthropic qualitative shift vs Sonnet 4.5 18.5%, ~3× Gemini 3 Pro ~26%)
- MRCR v2 8-needle **256K: 93.0%** (Anthropic)
- Community caveat: "context rot" reports beyond ~40% window utilization → practical ~400K for some production loads (The AI Rankings / HN)

Multimodal:

- Text + image in (vision); no video/audio, no non-text out. Vision noted as trailing GPT-5.2 / Gemini 3 Pro at launch (The AI Rankings). MMMU/CharXiv: no verified public score found for 4.6.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.0 65.4% SOTA-at-launch, GDPval 1606, BrowseComp 84/86.6, Finance 60.7, OSWorld 72.7, τ²-Telecom 99.3; capped by MCP 62.7 mid, no TB2.1/Tau3/Claw, and launch-era scores now behind 4.7/4.8/Opus 5.
- **Reasoning: 91/100.** HLE-tools 53.0 (launch-leading), GPQA 91.3, ARC-AGI-2 68.8 (gen-doubling); capped by no AA Index/FrontierMath row and HLE-without-tools figure not isolated.
- **Context window: 91/100.** 1M beta with **MRCR 76% @1M / 93% @256K** — qualitatively strong retrieval (well above Gemini-class 26%); minus points for beta gating (Tier 4), >200K **$10/$37.50 premium**, and community rot reports past ~40% utilization → 91 not 95.
- **Multimodal: 65/100.** Text + image in only; vision trails GPT-5.2/Gemini at launch → 60–70 band → 65.
- **Coding: 88/100.** SWE-V 80.8/81.42 solid, TB2.0 65.4 launch-SOTA; capped by no DeepSWE/SWE-Pro/LCB rows and TB2.0 now well behind TB2.1-era 80–90% class (version skew).
- **Cost efficiency: 40/100.** $5/$25 standard is premium; **$10/$37.50 above 200K** is among the harshest long-context cliffs in the queue; cache 90% off and batch 50% off help but list+cliff dominate → 40.
- **Overall Score: 85/100.** Mean of five quality dims (89+91+91+65+88)/5 = 84.8 → 85. Best-fit: long-context agentic retrieval and knowledge-work where 1M MRCR 76% and GDPval/BrowseComp matter — but budget the >200K premium carefully; prefer 4.7/4.8 for new builds unless locked to 4.6 behavior.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic Opus 4.6 research + announcement pages, Benchgen, Digital Applied, Code Velocity, The AI Rankings); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (200 benchmarks) — confirmed OSWorld-Verified 72.7 (rank 27), extended GDPval to 1619 (rank 25), added TB-Hard 48.5, MCP Atlas 76.8, Tau2-Telecom 92.1, BrowseComp 83.7, ARC-AGI-1/2 rows; TB2.1/Toolathlon/Tau3/Claw/AA-Index gaps re-confirmed. Scores unchanged: (89+91+91+65+88)/5 = 84.8 → 85. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

