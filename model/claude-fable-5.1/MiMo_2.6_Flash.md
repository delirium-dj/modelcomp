# Claude Fable 5.1 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 88). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-07, overall 81.3, rank #7/1016) and the Artificial
> Analysis model page + leaderboards. Changes: Tool use 91→94 (TB2.1,
> Tau3-Banking 47.2% and Toolathon 77.8% now have public scores); Reasoning
> 94→92 (AA Index now 49, below the 60+ ref, and Omniscience hallucination
> 70.0%); Coding 93→94 (SciCode 63.1% and LiveCodeBench 90.5% fill named
> gaps); Overall 88→89. Held: Context window 95, Multimodal 68, Cost 36.

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Fable-line capability ceiling (released 2026-09-01) for the hardest reasoning, long-horizon agentic coding, and knowledge work — a step up from Fable 5 with a 75% cheaper cache-read price. Same underlying model as the restricted Claude Mythos 5.1 (different safeguard configuration) — Mythos is the trusted-access sibling, not a separate model entry.
- **Provider / access:** Claude API (`claude-fable-5-1`), Amazon Bedrock, Google Cloud, Microsoft Foundry/Azure, Claude Platform on AWS (AA lists 6 API providers); Claude Pro/Max/Team/Enterprise apps. Messages API (Anthropic format).
- **Release / knowledge:** released 2026-09-01; reliable knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1` (gateway routes) / `claude-fable-5-1` (native).
- **Context window:** 1,000,000 tokens (AA + BenchLM confirm 1M); max output 128,000 tokens (300K batch beta on the platform).
- **Modalities:** text + images in; text out (AA confirms text+image → text); reasoning yes (adaptive thinking always on; efforts low/medium/high/xhigh/max); tool calls yes (computer use, code execution, web tools).
- **Pricing (as of 2026-11-08):** $10 in / $50 out per 1M; **cache read $0.25/M** (AA: 98% cache discount; Anthropic: cuts typical workloads ~25%, agentic up to ~45%); 5m cache write $12.50, 1h $20; Batch API 50% off ($5/$25) — re-confirmed by the BenchLM price registry (2026-11-06) and AA. Paid, no free tier; AA measures $12.99 per Intelligence Index task (#68/68 = most expensive in class).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (AA leaderboard) / **85.0%** (Vals AI) — **new this pass** (previously "no verified public score found for Fable 5.1").
- **AA Tau3-Banking: 47.2%** (AA tau3-banking leaderboard — **new this pass**; just under the ~50%+ frontier ref). Claw-Eval: still no verified public score found.
- **Toolathlon-Verified: 77.8%** pass@1 / 81.5% pass@3 / 73.1% pass³ (system card — **new this pass**; previously listed as missing).
- Terminal-Bench 4.0: **55.8%** (Anthropic, max) / **52.0%** (AA independent); Terminal-Bench-Science 0.1: **52.6%** (Anthropic).
- GDPval-AA: **1763** Elo (AA leaderboard, independent — clears the 1750+ ref) vs the vendor **1853** (Anthropic); AA-Briefcase **1669** Elo; AA Harvey LAB v1.0 **93.0%**; AA Agentic Index **58.0%**; AA AutomationBench **59.4%** (vendor run 31.4%); AA ITBench 49.5%; AA-AnalystAgent 57.5%; ApprenticeBench 72%.
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic). AutomationBench: 31.4% (Anthropic). CursorBench 3.2.0: 73.4%; CursorBench 4.0: **51.8%** (new). CWE-bench v1 58.0%; MazeBench 10%.
- MCP-Atlas / Tau2: no verified public score found.

Reasoning / knowledge:

- HLE: **60.9%** no tools, **65.0%** with tools (Anthropic) / **59.1%** (AA independent).
- GPQA Diamond: **93.7%** (AA leaderboard — independent confirmation) / 93.4% (Vals); vendor comparison tables report 92.6–93.7 (setting-dependent; third-party default-effort harnesses 72–75%).
- Artificial Analysis Intelligence Index: **49**, rank **#19 / 69** (AA model page, v5.0.1 scale; BenchLM lists 49.2). The launch-era 66 reading in the previous pass is superseded (interim v4.3.2 snapshot: 53).
- **AA-LCR: 85.3%** (**new this pass** — fills the named "no MRCR/LCR" cap); **CritPt: 29.7%** (new); MLCR-AA 15.6% (new).
- **ARC-AGI-1: 97.50% / ARC-AGI-2: 90%** (Anthropic system card — **new this pass**; previously absent).
- FrontierMath v2: **90.175%** (Tiers 1–3) / **87.805%** (Tier 4) — Epoch AI leaderboard (corroborates the 90.2/87.8 figures).
- AA-Omniscience v1.1: index **46.3**, accuracy **68.4%**, **hallucination rate 70.0%** (new — the weakest faithfulness reading among the frontier peers).
- GraphWalks BFS 256K–1M: **65.0%** (Google cross-model chart, new). Gray Swan IPI 1.0%.

Coding:

- SWE-bench Pro: **81.2%** (system card; previous pass recorded 80.0%); SWE-bench Multilingual **89.1%**, SWE Multimodal **54.7%** (new rows).
- **AA-SciCode: 63.1%** (**new this pass** — fills the missing SciCode row; 55%+ ref cleared).
- **LiveCodeBench (Vals): 90.5%** (**new this pass** — first plain LiveCodeBench row for 5.1; corroborates the vendor90.52%).
- AA Coding Index: **81.6%** (70+ ref cleared). DeepSWE v1.1: **67.4%** (unchanged, still below the 74% ref).
- FrontierSWE v2 **56.3%**; FrontierCode 2.0 **32.4%** (new); CursorBench 4.0 51.8% (new); ProgramBench **87.6%**; Bug Hunt Bench 43.0 fixes; PostTrainBench v1.1 40.2%.
- Vibe Code Bench: no verified public score found (still absent).

Long context:

- No MRCR / RULER row published — but **GraphWalks BFS 256K–1M 65.0%** (Google chart) and ProgramBench **87.6%** (full-1M-window run) now document long-range behaviour; AA-LCR 85.3% is the independent long-context-reasoning cross-check.

Multimodal:

- ParseBench: **77.81%** (LlamaIndex snapshot 2026-11-06, new); Design Arena Website **1308** Elo (OpenRouter).
- Coverage unchanged per AA: text + image in, text out — no video/audio/PDF input, no non-text output.

### Normalized scores (1–100)

- **Tool use: 94/100.** The cap ("no TB2.1/Tau3/Claw-Eval row") is now mostly resolved — TB2.1 **91.4%** (AA) / 85.0% (Vals), Tau3-Banking **47.2%** and Toolathon-Verified **77.8%** are all newly public, and AA's independent GDPval-AA **1763** clears the 1750+ ref — hence 91→94; held below 95 only by the still-missing Claw-Eval row, Tau3 at 47.2% (just under the ~50% ref) and the vendor AutomationBench 31.4%.
- **Reasoning: 92/100.** New rows go both ways: AA-LCR **85.3%**, CritPt **29.7%**, ARC-AGI-2 **90%** and FrontierMath v2 **90.175/87.805** (Epoch) fill every previously missing reasoning slot and HLE 60.9/59.1 + GPQA 93.7 still clear the 40%+/90%+ refs — but the current AA Intelligence Index reads **49 (#19/69, v5.0.1)**, below the 60+ frontier ref that the old launch-era 66 cleared, and the new AA-Omniscience row shows a **70.0% hallucination rate**; hence 94→92.
- **Context window: 95/100.** 1M window at the ≥1M tier floor (95–100); the new GraphWalks 256K–1M 65.0% and ProgramBench 87.6% document real long-range use but fall far short of a ≥98%-at-512K+ needle score (MRCR/RULER still unpublished), so the floor stands — held at 95.
- **Multimodal: 68/100.** Text + image in, text out = the 60–70 band; ParseBench 77.81% is a solid document-parsing row but AA still lists no video/audio/PDF input and no non-text output — held at 68.
- **Coding: 94/100.** Two of the three named gaps are now filled — AA-SciCode **63.1%** (55%+ ref) and LiveCodeBench **90.5%** (Vals) — with AA Coding Index **81.6%** (70+ ref) and SWE-bench Pro **81.2%**; raised 93→94, still capped by DeepSWE **67.4%** (below the 74% ref), Vibe Code Bench remaining unpublished, and sub-frontier FrontierCode 2.0 32.4% / FrontierSWE v2 56.3%.
- **Cost efficiency: 36/100.** Headline $10/$50 is the methodology's 30 anchor, and AA re-confirms the rate (98% cache discount on $0.25 reads, $12.99 per Index task = #68/68 most expensive) — the cheap cache reads and 50% batch discount keep the +6 agentic-workload adjustment; unchanged.
- **Overall Score: 89/100.** (94+92+95+68+94)/5 = 443/5 = 88.6 → 89 — Anthropic's top general-purpose reasoning/coding ceiling for the hardest long-horizon work, best when cache-heavy agent loops amortize the $10/$50 rate.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-07, Artificial Analysis model page + tau3-banking/lcr/gpqa-diamond/scicode leaderboards, Anthropic Fable 5.1 & Mythos 5.1 system card, Epoch AI FrontierMath v2, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 (BenchLM, snapshot 2026-11-07)](https://benchlm.ai/models/claude-fable-5-1)
  - [Claude Fable 5.1 (Artificial Analysis)](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [AA Tau3-Banking leaderboard](https://artificialanalysis.ai/evaluations/tau3-banking)
  - [Claude Fable 5.1 & Claude Mythos 5.1 system card (Anthropic)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
