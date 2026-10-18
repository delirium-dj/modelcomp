# Gemini 3.8 Flash — findings by Space Bunny

- Source: Google (`gemini-3.8-flash`; high reasoning mode)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 90.2).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for long-horizon software engineering, autonomous agents, and enterprise workflows. As of 2026-10-08 it is also the default route that `gemini-3.7-flash` traffic is silently served by (Google API changelog), so the "3.7 → 3.8" distinction is nominal for new API callers.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, GA); Google AI Studio; Gemini Enterprise Agent Platform (`bedrock`-style docs confirm `gemini-3.8-flash` GA, global + multi-region). Thinking levels low / medium / high (default medium); minimal not supported.
- **Release / knowledge:** Released 2026-09-02. Knowledge cutoff reported as **March 2026, with some domains only to January 2025** (third-party API guide; not restated on the model card reviewed). First-party release note: "Google documentation lists September 2026 as the latest update."
- **IDs:** `gemini-3.8-flash`; default family identifier `google/gemini-3.8-flash`; effort variants `gemini-3.8-flash (high | medium | low)` on Artificial Analysis.
- **Context window:** 1,048,576 input tokens; 65,536 max output tokens — **first-party confirmed** on Google Cloud's Gemini Enterprise Agent Platform developer guide (accessors: 1,048,576 / 65,536 for 3.8 Flash, identical to 3.7 Flash).
- **Modalities:** Text, image, video, audio, PDF input; text output; reasoning/thinking; code execution, computer use (preview), function calling, structured outputs, URL context, search grounding per Google. Audio generation, image generation and the Live API are **not** supported. Output prices include thinking tokens, so reasoning effort is billed at the output rate.
- **Pricing (as of 2026-10-17):** **$0.75 in / $3.75 out per 1M, introductory, expires 2026-12-31.** From **2027-01-01 the standard rate is $1.50 / $7.50** — 2× on both sides. Cached input doubles $0.075 → $0.15, cache storage $0.50 → $1.00 per 1M per hour. Batch/Flex move $0.375/$1.875 → $0.75/$3.75; Priority $1.35/$6.75 → $2.70/$13.50. Google states this in its own Gemini API docs ("introductory prices … through December 31, 2026; standard prices take effect January 1, 2027") and in a footnote to the 2026-09-02 launch post. Artificial Analysis still quotes the promotional $0.75/$3.75. **Every headline price quoted for this model today is a promo that has ~10 weeks left.**
- **Architecture:** Proprietary; Google has not disclosed parameter count. Snorkel's Terminal-Bench 4.0 board lists an estimated 17.2B for the model — unconfirmed by Google.

### Raw benchmarks found

Vendor rows are marked **[vendor]** (Google DeepMind model card / API docs); independent rows are marked **[indep]**; aggregator-relayed rows are marked **[agg]** where the number is second-hand.

Agent / tool use:

- Artificial Analysis Intelligence Index: **41** (#51/217) at the 2026-10-17 reading; **40.9%** on the AA leaderboard [indep]. Three readings now agree (41 → 40.9 → 41): **held**.
- Output speed: **147.1 t/s** (#30/188) at the 2026-10-17 reading [indep]; **$1.24** per Intelligence Index task, unchanged. Note the speed reading has fallen across passes (296.8 → 224 → 280.8 → 147.1 t/s across AA and third-party captures) — treat any single speed figure as unstable.
- Terminal-Bench 4.0: **19.1% ±3.4** (Snorkel AI Terminal-Bench 4.0 leaderboard, rank **#17 of 23**, harness named **mini-SWE-agent**, 2026-09-02) [indep]; **19.10%** [vendor, Google DeepMind model card]; **19.7%** (AA Terminal-Bench 4.0 leaderboard) [indep]. **Triple-sourced 19.1–19.7%, harness named, a measured weakness — held.**
- Terminal-Bench 2.1: **89.4%** [vendor]; **81.3%** (Vals AI) [indep]; **87.6%** (AA Terminal-Bench v2.1 leaderboard) [indep]. DataCamp additionally quotes **90.8%** — a fourth value that matches no other source; treat 89.4 / 87.6 / 81.3 as the working range.
- Tau3-Banking: **44.9%** (AA) [indep]. DataCamp quotes **τ³-bench Banking 38.1%** [agg] — a different banking variant, recorded as a conflict, not a correction.
- AA Agentic Index **41.1%**; AA ITBench **52.5%**; AA AutomationBench **59.9%**; AA-AnalystAgent **46.3%** (Artificial Analysis) [indep]
- GDPval-AA: **1545 Elo** / **46.8%** normalized (AA); **45.6%** normalized (first pass reading) — the Elo is stable, the normalized % drifted 45.6 → 46.8 on re-anchor. AA-Briefcase **1203 Elo**; GDP.pdf **21.0%** [indep]
- OSWorld 2.0 **59.0%** [vendor]; Finance Agent v2 **61.4%** [vendor]
- ApprenticeBench **24%** (NeoCognition) [indep] — weak.
- **New:** Hermes Index **38.1%**; Hermes Bench **62.2%**; MazeBench **4%** (BenchLM, pages dated 2026-10-16) [agg]. Gemini 3.5 Flash and 3.6 Flash both score **0%** on MazeBench, so 4% is a family-wide wall, not a regression.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found.** (DataCamp quotes SWE-Atlas **51.9%** [agg] — single aggregator, uncorroborated.)

Reasoning / knowledge:

- GPQA Diamond **95.3%** (AA) [indep]; **94.4%** (Vals AI) [indep]; MMLU-Pro **90.2%** (Vals AI) [indep]
- HLE-Verified **54.9%** [vendor]; AA-HLE **47.8%** [indep]. DataCamp quotes HLE **45.4%** [agg] — third value, conflicts with the model card.
- CritPt **18.3%**; AA-LCR **81.3%**; AA-MLCR **21.7%** (Artificial Analysis) [indep]
- AA-Omniscience Index **29.6%**; Accuracy **54.6%**; Hallucination Rate **55.2%** (Artificial Analysis) [indep]
- ARC-AGI-1 **98.5%**; ARC-AGI-2 **89.2%**; ARC-AGI-3 **10.4%** (ARC Prize verified) [indep]
- LABBench2 **86.2%**; BioMysteryBench human-solvable **88.8%** / human-difficult **56.5%** [vendor]
- **New:** FrontierMath v2 **Tiers 1–3 = 68.421%** (Epoch AI, via BenchLM relay) [indep]. **Deliberately excluded: FrontierMath v2 Tier 4 = 21.951%** — see the artifact note below.
- **New:** Gray Swan IPI (15 attempts) **5.5%** (BenchLM) [agg].
- ⚠️ **FrontierMath v2 Tier 4 = 21.951% is an aggregation artifact and must not be used.** BenchLM prints byte-identical `21.951%` for **both** Gemini 3.6 Flash and Gemini 3.8 Flash, and labels the comparison a **Tie** — while giving the sibling models distinct values (Gemini 3.7 Flash 36.585%, Gemini 3.5 Flash-Lite 0.000%, Gemini 4 Argon 78.049%). Note that the Tiers 1–3 lane in the same tables *does* differ between 3.6 (58.947%) and 3.8 (68.421%), so the collision is specific to the Tier 4 column. Do not cite 21.951% for this model on any tier-4 claim.

Coding:

- DeepSWE **73.8%** (DeepSWE v1.1 leaderboard) [indep]; a parallel third-party capture of the same board shows **74%** at **$2.36/task** on 143k output tokens / 166 steps
- SWE-bench **80.0%** (Vals AI) [indep]; LiveCodeBench **89.5%** (Vals AI) [indep]
- AA-SciCode **56.6%**; AA Coding Index **76.3%** (Artificial Analysis) [indep]
- CursorBench 3.2 **69.2%**; CursorBench 4.0 **39.6%** (Cursor evals) [indep]
- **New:** Bug Hunt Bench **18.0 fixes** [agg]
- FrontierSWE v2 **19.6%** (Proximal leaderboard) [indep] — a measured weakness.
- SWE-bench Verified / SWE-Pro / Vibe Code Bench / PostTrainBench: **no verified public score found.**

Long context:

- 1,048,576 input / 65,536 output, first-party confirmed (see model card).
- AA-LCR **81.3%** (Artificial Analysis Long-Context Reasoning leaderboard) [indep] — an independent retrieval result and one of the strongest in the comparison.
- No independent measurement of the 256K–1M band exists for this model (GraphWalks at 256K–1M is published for Gemini 4 Argon but not for 3.8 Flash).

Multimodal:

- AA-MMMU-Pro **85.6%**; CharXiv w/o tools **86.2%** (DataCamp quotes CharXiv multimodal 86.2% — consistent); LVBench **87.1%** (BenchLM) [indep]
- Text / image / video / audio / PDF in, text out — first-party [vendor].

Succession (context for scoring, not a scored row):

- **Gemini 4 Argon** — announced 2026-09-30, **GA 2026-10-13** (Google DeepMind model card, published 13 October 2026; Gemini Enterprise docs give release date 2026-10-13, retirement 2027-10-13 or later). First-party Argon numbers on the **hard** suites it shares with 3.8 Flash: **Terminal-bench 4.0 = 57.4%** vs 19.1–19.7%; **FrontierSWE v2 = 55.0%** vs 19.6%; **DeepSWE v1.1 = 77.9%** vs 73.8%; **PostTrainBench = 45.3%** (no 3.8 Flash row); **Vibe Code Bench = 91.9%** (no 3.8 Flash row); **OSWorld-2.0 = 69.2%** vs 59.0%; **AutomationBench = 51.3%** vs 59.9% (3.8 Flash *leads* here). Argon does **not** publish a Terminal-Bench 2.1 row, so 3.8 Flash's 89.4% remains unopposed on that suite. Net: Argon beats 3.8 Flash on every shared hard suite except AA AutomationBench, by very large margins on the two hardest.
- Argon pricing: introductory **$2 / $10** through 2026-11-30, then **$4 / $20** from 2026-12-01.

Aggregator-relabeling warnings found this pass:

- **DataCamp** quotes Terminal-Bench 2.1 90.8%, HLE 45.4%, SWE-Atlas 51.9%, τ³-bench Banking 38.1% — none of which match the model card or any leaderboard. Read DataCamp's benchmark table as secondary.
- **BenchLM** carries the 21.951% FrontierMath Tier 4 collision described above; its per-model rows otherwise track the underlying leaderboards closely (page dated 2026-10-16).

Sources consulted (2026-10-17): [Google DeepMind Gemini 4 Argon model card](https://deepmind.google/models/model-cards/gemini-4-argon/), [Google Cloud Gemini Enterprise Agent Platform — Gemini 3.8 Flash developer guide](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash), [Google AI for Developers — Gemini API latest-model/pricing notes](https://ai.google.dev/gemini-api/docs/latest-model), [Artificial Analysis Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash), [Artificial Analysis Terminal-Bench 4.0 leaderboard](https://artificialanalysis.ai/evaluations/terminalbench-4-0), [Snorkel AI Terminal-Bench 4.0 leaderboard](https://snorkel.ai/leaderboard/terminal-bench-4-0), [Epoch AI FrontierMath Tier 4 (v2)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2), [BenchLM Gemini 3.8 Flash](https://benchlm.ai/models/gemini-3-8-flash) and its Gemini 3.6 / 3.7 Flash and Argon comparison pages, [DataCamp Gemini 3.8 Flash](https://www.datacamp.com/blog/gemini-3-8-flash-cyber).

### Normalized scores (1–100)

- **Tool use: 85/100. HELD.** No raise, no cut. The agentic picture is unchanged and internally consistent: Terminal-Bench 2.1 89.4% [vendor] / 87.6% AA / 81.3% Vals, GDPval-AA 1545 Elo, AA ITBench 52.5%, AA AutomationBench 59.9%, OSWorld 2.0 59.0%, Finance Agent v2 61.4%. Still capped by the same three things: **Terminal-Bench 4.0 at 19.1–19.7%**, ApprenticeBench 24%, GDP.pdf 21.0% and AA-Briefcase at 1203 Elo. Newly added rows land inside patterns already priced rather than moving them — MazeBench 4% and Hermes Index 38.1% are new weaknesses consistent with the Terminal-Bench 4.0 wall; Hermes Bench 62.2%, AA-AnalystAgent 46.3% and AA Terminal-Bench 2.1 87.6% are neutral-to-positive.
- **Reasoning: 88/100. HELD.** The only materially new independent datapoint is FrontierMath v2 **Tiers 1–3 at 68.421%** (285 private problems, Epoch AI) — genuine hard-core math evidence that would on its own argue for a raise. It is offset by two new negatives: **MazeBench 4%** is not a reasoning measure and does not apply here, but **Gray Swan IPI 5.5%** and the un-reconciled HLE spread (54.9% model card vs 47.8% AA vs 45.4% DataCamp) argue against one. CritPt 18.3%, AA-MLCR 21.7% and ARC-AGI-3 10.4% continue to cap. Existing strong rows all reconfirmed: GPQA-D 95.3/94.4, MMLU-Pro 90.2, HLE 54.9, ARC-AGI-1 98.5, ARC-AGI-2 89.2, LABBench2 86.2. **The 21.951% FrontierMath Tier 4 figure is excluded as an artifact, so it did not cap this score.**
- **Context window: 97/100. HELD.** 1,048,576 / 65,536 is now **first-party verified** rather than AA-only, and AA-LCR 81.3% remains an independent strong retrieval result. Not raised: the 256K–1M band is still unmeasured for this model, and Google Cloud confirms a hard 65,536-token output cap that Argon no longer has (Argon uses a unified 1,048,576 window for input *and* output).
- **Multimodal: 96/100. HELD.** Text/image/video/audio/PDF in, text out, first-party, with AA-MMMU-Pro 85.6%, CharXiv 86.2%, LVBench 87.1%. Broadest non-text coverage in the comparison. No new evidence either way.
- **Coding: 85/100. HELD.** DeepSWE 73.8%, Vals SWE-bench 80.0%, LiveCodeBench 89.5%, AA Coding Index 76.3%, AA-SciCode 56.6%, CursorBench 3.2 69.2%, plus the new Bug Hunt Bench 18.0 fixes. Still capped by **FrontierSWE v2 at 19.6%** and CursorBench 4.0 39.6%. Note the shape of the evidence: this model wins short/medium-horizon coding suites and loses badly on long-horizon repository work — the exact axis on which Gemini 4 Argon takes 55.0% and Opus 5.5 takes 62.3%.
- **Cost efficiency: 84/100. CUT from 88.** Not because the sticker price rose — because the sticker price is **documented as a promotion that expires in 10 weeks.** $0.75/$3.75 is introductory through 2026-12-31; from 2027-01-01 the standard rate is **$1.50/$7.50**, cached input doubles to $0.15, and cache storage doubles to $1.00/1M/hr. Batch/Flex roughly return to today's standard rate. Mitigating, and why this is 84 and not lower: from January it is still roughly a third of Opus 5.5's $5/$25, Argon's step is to $4/$20, and the AA-measured cost per Intelligence Index task ($1.24) does not change mid-promo. Any cost model for 2027 must use the January number.
- **Overall Score: 90.2/100. UNCHANGED.** (85 + 88 + 97 + 96 + 85) / 5 = 451 / 5 = **90.2**, cost excluded. This pass moved no quality dimension: one genuinely new positive (FrontierMath v2 Tiers 1–3 68.4%) and two new negatives (MazeBench 4%, Gray Swan IPI 5.5%) offset, and the only score that moved was Cost, which is outside the mean. Best fit: fast, inexpensive multimodal agent and software-engineering work at high volume through 2026; on 2027 budgets use $1.50/$7.50 and test long-horizon repository tasks independently — Terminal-Bench 4.0 (19.1–19.7%) and FrontierSWE v2 (19.6%) are where this model falls short, and Gemini 4 Argon is now the better default above ~$2/1M of output.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: Public web research of Google model documentation, the Google DeepMind Gemini 4 Argon and Gemini 3.8 Flash model cards, Google Cloud Gemini Enterprise developer guides, Artificial Analysis (incl. Terminal-Bench 4.0 and Intelligence Index v4.3.2 boards), Snorkel AI Terminal-Bench 4.0, Epoch AI FrontierMath, Vals AI, Cursor evals, DeepSWE, Proximal FrontierSWE, ARC Prize, NeoCognition, BenchLM and DataCamp. Scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported rows are labelled **[vendor]**, independent rows **[indep]**, aggregator-relayed rows **[agg]**. Cost efficiency is excluded from Overall.
- What this pass changed vs. the first pass: (a) cost efficiency 88 → **84** on the documented 2027-01-01 step-up to $1.50/$7.50; (b) context window and the 65,536 output cap are now **first-party verified**; (c) Terminal-Bench 4.0 is **triple-sourced at 19.1–19.7% with the harness named (Vals mini-SWE-agent, rank #17/23)**; (d) the AA Intelligence Index held at 41 / 40.9% across a third reading; (e) new rows recorded (MazeBench 4%, Hermes Index 38.1%, Hermes Bench 62.2%, Bug Hunt Bench 18.0 fixes, AA-AnalystAgent 46.3%, AA Terminal-Bench 2.1 87.6%, Gray Swan IPI 5.5%, FrontierMath v2 Tiers 1–3 68.421%); (f) **Gemini 4 Argon (GA 2026-10-13) recorded as successor** — it beats this model on every shared hard suite (TB4.0 57.4% vs 19.1–19.7%; FrontierSWE v2 55.0% vs 19.6%); (g) **FrontierMath v2 Tier 4 = 21.951% rejected as an aggregation artifact** — BenchLM prints it byte-identically for both Gemini 3.6 Flash and 3.8 Flash and calls it a tie.
- Conflicts recorded, not averaged: Terminal-Bench 2.1 has four published values (89.4 / 90.8 / 87.6 / 81.3); HLE has three (54.9 / 47.8 / 45.4); τ³-Banking appears as both 44.9% and 38.1% across benchmark variants; AA output speed readings range 147.1–296.8 t/s across passes; the knowledge cutoff is only stated third-party (March 2026, some domains to January 2025).
- **Re-run when:** (1) 2027-01-01, to re-price Cost efficiency against the $1.50/$7.50 standard rate; (2) when Epoch AI or an independent harness publishes a clean Gemini 3.8 Flash FrontierMath v2 Tier 4 number, to replace the rejected 21.951%; (3) when any independent harness runs Terminal-Bench 4.0 or FrontierSWE v2 with a *named* harness — the two suites that cap Coding and Tool use; (4) when an independent 256K–1M long-context result appears, to test whether AA-LCR 81.3% holds at full window; (5) when Google publishes a first-party knowledge-cutoff statement for 3.8 Flash.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.