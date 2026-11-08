# Claude Opus 4.6 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 82). Fresh sources this pass: BenchLM model page
> (updated 2026-11-07, 52/759 rows with source links) — first verified
> **Claw-Eval** row (70.4) and first measured **MMMU-Pro** row (77.3).
> Changes: Tool use 84→86 (Claw-Eval gap closed), Multimodal 65→68
> (MMMU-Pro 77.3 / AA 72.5); Reasoning 86, Context 95, Coding 82, Cost 50 held.

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** The February-2026 flagship that defined the Claude 4.6 generation (released 2026-02-05, superseded by Opus 4.7) — first Opus-class model with a **1M-token context window (beta)**, adaptive thinking at four effort levels, and at release #1 rows on Terminal-Bench 2.0, HLE, BrowseComp and GDPval-AA. BenchLM composite 62.15, #47 of 1016 (2026-11-07) — legacy tier now; guidance is to keep it only for behaviour stability of validated agents.
- **Provider / access:** Claude API (`claude-opus-4-6`), Claude Platform, Amazon Bedrock, Google Vertex, Microsoft Foundry, claude.ai (Pro/Team); US-only inference at 1.1× (`inference_geo`).
- **Release / knowledge:** released 2026-02-05; knowledge cutoff not surfaced in these sources → not scored.
- **IDs:** `anthropic/claude-opus-4-6` (gateway routes) / `claude-opus-4-6` (native; no date suffix).
- **Context window:** **200K standard / 1M beta** (usage tier 4+ or custom limits, Claude Platform only); max output 128,000; prefilling removed (400 error); Compaction API beta.
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking, four effort levels); tool calls yes.
- **Pricing (as of 2026-10-07):** **$5.00 in / $25.00 out** per 1M up to 200K context; **prompts >200K in the 1M beta bill every token at $10/$37.50**; Batch $2.50/$12.50 (50%); cache read $0.50 (90% off); US-only +1.1×. Paid. No price change found this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Anthropic-run unless noted):

- **Claw-Eval: 70.4** (Claw-Eval leaderboard, via BenchLM 2026-11-07 — **first verified Claw-Eval row for 4.6**; previous passes had none).
- Terminal-Bench 2.0: **65.4** (Anthropic system card, max effort — #1 at release). Terminal-Bench Hard: **48.5** (AA leaderboard). TB2.1: no verified public score found (4.6 predates the 2.1 tables).
- τ²-bench: **84.8** (AA, via BenchLM; Anthropic's own τ²-Bench Retail row 91.9). AndroidWorld: **62.0** (Qwen3.8-27B card comparison). ScreenSpot Pro: **83.1** (Meta Muse Spark chart).
- GDPval-AA: **1606** Elo (Anthropic; BenchmarkList 1619) — release #1 claim, **under the 1750+ ref**. BrowseComp: **84.0** (Anthropic). OSWorld-Verified: **72.7** (Anthropic). Finance Agent: **60.7**. OpenRCA: 34.9.
- MCP-Atlas: no verified public score found this pass (prior reads 62.7 Anthropic / 76.8 BenchmarkList — harness spread). AutomationBench: no row.

Reasoning / knowledge:

- GPQA Diamond: **91.3** (Anthropic system card — clears the 90%+ ref); AA independent **84.0** (lower config reading). HLE with tools: **53.1** (Anthropic — clears 40%+); **HLE w/o tools: 40** (Meta Muse Spark chart — fills the previously missing no-tools row); AA-HLE **19.1** (AA non-reasoning config).
- FrontierMath v2: **65.965% T1-3 / 26.829% T4** (Epoch AI leaderboard — **first math rows found for 4.6**).
- AA Intelligence Index: **26.4** (AA — non-reasoning/measured config; reasoning-mode index never surfaced). AA-Omniscience accuracy 45.8 / hallucination 80.1. CritPt: **2.8** (AA). ARC-AGI-3: 0.5 (ARC Prize). AA-IFBench: 44.6.

Coding (Anthropic-run unless noted):

- SWE-bench Verified: **80.8** (Anthropic system card; flat vs Opus 4.5's 80.9 — contamination-flagged era per OpenAI note).
- **SWE-bench Pro: 53.4** (Meta Muse Spark chart — **first SWE-Pro row for 4.6**). **LiveCodeBench Pro: 70.7** (same chart). SWE-Rebench: 65.3 (leaderboard). Vibe Code Bench: 57.6 (Vals). FrontierCode 1.1 Main: **26.9** (Cognition).
- Terminal-Bench 2.0: 65.4. No DeepSWE / AA Coding Index row found.

Long context:

- **MRCR v2 (8-needle): 93% at 256K, 76% at 1M** (Anthropic) — strongest 1M retrieval evidence among early-2026 models, still short of the ≥98% condition; window premium-gated. AA-LCR: **67.0** (AA, via BenchLM 2026-11-07 — first independent LCR row).

Multimodal:

- **MMMU-Pro: 77.3** (Anthropic system card — **first measured multimodal row for 4.6 in this file**) / **72.5** (AA mirror). ParseBench: 53.8 (LlamaIndex, 2026-11-06). MedXpertQA-MM: 64.8; ERQA: 51.6 (Meta chart). Text + image in; no video/audio-native input, no non-text output.

### Normalized scores (1–100)

- **Tool use: 86/100.** The previously missing **Claw-Eval 70.4** row lands (84→86): BrowseComp 84.0 (#1 at release), OSWorld 72.7, τ² 84.8–91.9, FinanceAgent 60.7 and AndroidWorld 62.0 are a broad agentic stack; capped by GDPval 1606 (<1750 ref), TB2.0 65.4 / TB-Hard 48.5 far under the modern TB2.1 88 ref, and no MCP-Atlas row.
- **Reasoning: 86/100.** Held: GPQA 91.3 (90+) and HLE-tools 53.1 (40+) clear both refs, and the new FrontierMath v2 65.97/26.8 rows plus HLE-no-tools 40 fill old gaps — but AA-GPQA 84.0 (independent) and AA-HLE 19.1 undercut the vendor configs, AA Index 26.4 stays far under 60+, CritPt 2.8 is weak → no uplift past 86.
- **Context window: 95/100.** Held: 1M exists (beta) with MRCR 93/76 — real retrieval proof (AA-LCR 67.0 now independent) — but the window is gated to top tiers, billed $10/$37.50 above 200K, and 76% at 1M misses the ≥98% condition → floor with an asterisk.
- **Multimodal: 68/100.** First measured rows justify the move (65→68): **MMMU-Pro 77.3** (Anthropic) / 72.5 (AA) plus ScreenSpot Pro 83.1 put image-input reasoning at the top of the 60–70 band; still no video/audio-native input or non-text output → capped at 70.
- **Coding: 82/100.** Held: SWE-V 80.8 and TB2.0 65.4 led the February cohort; the new SWE-Pro 53.4, LiveCodeBench Pro 70.7 and SWE-Rebench 65.3 are mid-band rows that confirm rather than change the level, and FrontierCode 26.9 is weak — absolute rows stay well under the later frontier refs (TB2.1 88, SWE-V 85+, DeepSWE 74).
- **Cost efficiency: 50/100.** Held: $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (~48–50); batch halves and 90%-off cache reads hold it at 50 — the >200K premium doubling input to $10/$37.50 is the structural negative (no price change found this pass).
- **Overall Score: 83/100.** (86+86+95+68+82)/5 = 83.4 → 83 — the model that made 1M context and adaptive thinking standard for Claude, judged now as a legacy tier: broad agentic rows including the newly verified Claw-Eval 70.4 and excellent MRCR evidence, weighed against a 200K-gated window, GDPval below the frontier ref, and absolute benchmark rows the 4.7/4.8/5.x line has left behind.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with per-row source links, Claw-Eval leaderboard, Anthropic Opus 4.6 system card, AA mirror rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
  - [BenchLM — Claude Opus 4.6 (updated 2026-11-07)](https://benchlm.ai/models/claude-opus-4-6)
  - [Artificial Analysis — Claude Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
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
