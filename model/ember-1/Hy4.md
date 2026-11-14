- Source: Fireworks AI/Ember 1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** A Fireworks AI model built on Moonshot's Kimi K3, identified by a third-party October 2026 agentic-coding benchmark board. A distinct model from Meta's `muse-ember` (a separate tracked folder) and from `ember-1`'s similarly-named benchmark `EMBER-Bench` (a household-task diagnostic, not a model).
- **Provider / access:** Fireworks AI (per the third-party benchmark board's model notes); no vendor product page was retrieved this pass.
- **Release / knowledge:** no verified release date or knowledge cutoff found.
- **IDs:** `ember-1` family ID as cited. No free Zen ID verified.
- **Context window:** no verified figure — no verified public score found.
- **Modalities:** text/code agentic workflows (benchmark context); no verified modality list.
- **Pricing (as of 2026-11-14):** no verified public price found.
- **Architecture:** Not disclosed; described only as Fireworks' model **built on Kimi K3** by the third-party board (lineage, not a verified vendor spec).

### Raw benchmarks found

Agent / tool use:

- Forge 2.0 agentic-coding board (October 2026, third-party): median **0.5011**, range **0.4710–0.5312**, rank **8**; Gauntlet 7.2 rank **8** at **0.7909** in the adjacent results table — both explicitly third-party and group-relative (the board warns that ranks across comparison groups are the author's reading)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Forge 2.0 / Gauntlet 7.2 results above are the only measured figures; no standard named coding benchmark was found
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 80/100.** Rank 8 on a third-party agentic-coding board with a 0.5011 Forge 2.0 median; capped by that being group-relative and no independent harness score.
- **Reasoning: 78/100.** Kimi K3 lineage implies strong reasoning, but no verified reasoning benchmark for this exact ID was retrieved — scored conservatively.
- **Context window: 78/100.** No verified window; scored conservatively at the neutral floor.
- **Multimodal: 72/100.** No verified modality list; scored at the conservative floor.
- **Coding: 82/100.** Rank 8 / 0.7909 Gauntlet and 0.5011 Forge 2.0 on agentic coding; capped by group-relative, third-party-only measurement.
- **Cost efficiency: 78/100.** No published price; scored at the neutral floor. Excluded from Overall.
- **Overall Score: 78/100.** Half-up mean of 80, 78, 78, 72, 82 = 78.0 → 78. Best fit: no production recommendation — this is an evidence-limited record for a Fireworks model identifiable mainly through one third-party agentic-coding board.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: a third-party October 2026 agentic-coding benchmark board retrieved via public web search excerpt (Forge 2.0 / Gauntlet 7.2 tables with Ember 1's rank, median and range, plus the note "Ember 1 is Fireworks' model built on Kimi K3"). Additional targeted searches returned only Meta's Muse Ember (a different model), the EMBER-Bench academic diagnostic (not a model) and unrelated framework articles — none of which are attributed here. All capability figures are explicitly third-party and group-relative; every row without a verified figure is marked "no verified public score found", and several dimensions are scored at a declared conservative neutral floor rather than estimated. `muse-ember` is a separate tracked folder and is never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Best Model for Agentic Coding: October 2026 Benchmarks — Web Pulse (Forge 2.0 / Gauntlet 7.2, Ember 1 identity note)](https://wpnews.pro/news/best-model-for-agentic-coding-october-2026-benchmarks)
