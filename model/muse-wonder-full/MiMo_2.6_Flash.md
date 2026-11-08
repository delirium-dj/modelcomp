# Muse Wonder Full — findings by MiMo 2.6 Flash

- Source: Meta `muse-wonder-full` (model id `muse-wonder-full-1.0`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-27)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-27 (Overall 86). Fresh sources this pass: BenchLM model page
> (last updated 2026-11-07, 25 rows) + Artificial Analysis leaderboards
> (HLE, LCR, CritPt, SciCode, GDPval, Omniscience) + BenchmarkList access row.
> Changes: Reasoning 89→90 (AA-HLE 53.6 and AA-LCR 83.7 now published —
> the named "no standalone GPQA/HLE" cap is gone), Context window 85→90
> (standalone AA-LCR 83.7% row now exists), Coding 89→90 (AA-SciCode 62.6
> clears the 55% frontier ref), Overall 86→87; Tool use 88, Multimodal 77,
> Cost efficiency 65 held.

## Model card

- **Name:** Muse Wonder Full (`muse-wonder-full`) — **the top tier of Meta's Muse Wonder series**, released **2026-10-12** by Meta Superintelligence Labs (MSL) alongside the standard Muse Wonder (`muse-wonder-1.0`). Not a variant of Muse Wonder: it is a **separate, more capable model** ("setting regular Muse Wonder to max reasoning doesn't turn it into Muse Wonder Full"). AA lists it as "Muse Wonder Full (Max)" ("(Max)" = reasoning-effort tier).
- **Short description:** Meta's "most advanced model yet" — frontier coding, **long-running agents** (plans work, delegates to sub-agents, calls tools in parallel, recovers from errors), advanced computer use, plus **Active Memory** (cross-conversation context retrieval) and **Active Focus** (persists through hard tasks). Trained at Meta's gigawatt-scale **Prometheus** data center.
- **Provider / access:** **Muse Code subscription only** — no public API (dev.meta.ai pricing row `muse-wonder-full-1.0` shows "-" for input/cached/output; AA: "No publicly available API"; BenchmarkList re-confirms 2026-11-08: "no API access, no per-token price, and no published weights"). Plans: **Power Usage $50.00/month** (20× Everyday usage) or **Maximum Usage $200.00/month** (80×). Standard Muse Wonder is separately on the Meta Model API at $4.00 in / $0.20 cached / $20.00 out.
- **Release / knowledge:** **2026-10-12** (about.fb.com, research.meta.ai, AA, llm-stats all agree). Knowledge cutoff not published.
- **IDs:** `muse-wonder-full-1.0` (dev.meta.ai); AA slug `muse-wonder-full`.
- **Context window:** **1,000,000** tokens (dev.meta.ai, AA, BenchLM, aireleasetracker — all agree).
- **Modalities:** **text, image, speech and video input; text output only** (AA technical specs); PDF input listed for the series; reasoning model (evaluated at max effort).
- **Pricing (as of 2026-11-08):** **no per-token price** — flat subscription: $50/mo (Power) or $200/mo (Maximum), usage-capped; re-confirmed via BenchmarkList 2026-11-08. The "$4/$20" figure seen in comparisons is the *standard Muse Wonder* API rate, not Full's.
- **Architecture:** proprietary; parameters undisclosed; weights not open.

### Raw benchmarks found

**Official comparison table (dev.meta.ai / Meta Muse Wonder model card, effort = max; Full is #1 on 7 of 14 rows vs four rival/sibling flagships):**

| Benchmark | **Full** | Wonder | Fable 5.1 | GPT-6 Astra | Opus 5.5 |
|---|---|---|---|---|---|
| Personal Superintelligence Index (Meta-internal) | **59.1** | 54.3 | 49.9 | 54.5 | 55.2 |
| Harvey LAB-AA (legal agent work) | **13.1** | 10.0 | 6.4 | 8.6 | 4.2 |
| Vals Finance Agent V2 | **59.1** | 56.6 | 58.9 | 53.5 | 58.6 |
| HealthBench Pro | 62.3 | 60.5 | 62.1 | 65.3 | 65.6 |
| AutomationBench-AA | **45.4** | 39.1 | 32.1 | 41.6 | 41.2 |
| GDP.pdf | 33.2 | 30.8 | 27.6 | 34.2 | 30.6 |
| JobBench | 75.3 | 70.5 | 73.1 | 66.1 | 75.4 |
| OSWorld V2.1 (partial / binary) | 78.4 / 39.4 | 72.6/34.3 | 80.7/43.1 | 75.8/34.3 | 81.8/– |
| MemoryBench | 85.5 | 85.6 | 79.0 | 81.4 | 81.5 |
| Terminal-Bench 4.0-AA | 57.1 | 52.0 | 52.0 | 59.1 | 59.6 |
| DeepSWE 1.1 | **79.0** | 78.8 | 67.4 | 74.1 | 74.2 |
| SWE-Marathon | **57.5** (xhigh) | 53.1 | 45.6 | 42.5 | 46.3 |
| ProgramBench | 59.0 | 50.0 | 55.5 | 52.5 | 70.5 |
| Artificial Analysis Intelligence Index | 56 | 52 | 53 | 53 | 58 |

Agent / tool use:

- **GDPval-AA: 1857 Elo** (AA gdpval-aa leaderboard, via BenchLM 2026-11-08 — new: no GDPval row existed in the previous pass) / normalized 67.9%; **AA Briefcase: 1729 Elo** (AA leaderboard, new).
- AA Terminal-Bench 4.0: 57.1%; AA AutomationBench: 45.4%; Harvey LAB-AA v1.1: 13.1%; JobBench: 75.3%; Finance Agent v2: 59.1%; OSWorld 2.1: 78.4%; MazeBench (ASCII, tools): **17%** (new, MazeBench leaderboard run 2026-10-14); GDP.pdf (AA): 32.6%.
- Tau3-Banking / Claw-Eval / Terminal-Bench 2.1: no verified public score found (re-checked 2026-11-08).

Reasoning / knowledge:

- **AA-HLE: 53.6%** (AA humanitys-last-exam leaderboard, via BenchLM — new; previously "no standalone GPQA/HLE figure published").
- **AA-LCR: 83.7%** (AA long-context-reasoning leaderboard, new) · **MLCR-AA: 22.2%** · **CritPt: 32.9%** (AA critpt leaderboard, new).
- Artificial Analysis Intelligence Index: **56 (#4 of 704)** (AA model page, Oct 2026 — ties Claude Sonnet 5.5) vs **50.1** on the AA intelligence-index leaderboard snapshot (via BenchLM, 2026-11-07) — both below the 60+ frontier ref; harness/effort variance reported side by side.
- AA-Omniscience: Accuracy 41.0% / Hallucination Rate 17.6% / Index 30.6 (AA, new).
- GPQA Diamond: no verified public score found (re-checked 2026-11-08).

Coding:

- **AA-SciCode: 62.6%** (AA scicode leaderboard, via BenchLM — new; clears the 55% frontier ref; previously no SciCode row).
- DeepSWE 1.1: **79.0%** (#1, above the 74% frontier ref); SWE-Marathon: **57.5%** (#1); ProgramBench: 59.0% (#2 behind Opus 5.5 70.5); JobBench 75.3; Bug Hunt Bench: 42.0 fixes (new, public data); BenchLM overall 69.44/100, **#18 of 1016** (2026-11-07, partial coverage 25/759).
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: no verified public score found (re-checked 2026-11-08).

Long context:

- **AA-LCR: 83.7%** — the first standalone long-context-reasoning row for Full (previously the named cap: "no MRCR/AA-LCR standalone row"); MRCR / RULER / GraphWalks: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** New GDPval-AA 1857 Elo and AA Briefcase 1729 (frontier-class, 1750+ ref) fill the previous gap, alongside best-of-five PS Index 59.1, AutomationBench-AA 45.4, Harvey LAB-AA 13.1 and OSWorld 78.4; held because Terminal-Bench 4.0-AA (57.1) sits in the mid band vs the ~88% frontier ref, MazeBench is 17%, and Tau3-Banking / Claw-Eval still have no verified public score (2026-11-08 re-check).
- **Reasoning: 90/100.** Moved 89→90: the named cap ("no standalone GPQA/HLE figure published") is half-resolved — AA-HLE **53.6%** clears the 40%+ frontier ref and AA-LCR **83.7%** / CritPt 32.9 give the cross-checks that were missing; capped below 92 because GPQA is still unpublished and AA Index 50.1–56 sits below the 60+ frontier ref (verbosity caveat: 140M output tokens on the index).
- **Context window: 90/100.** Moved 85→90: the named cap ("no MRCR/AA-LCR standalone row") is gone — AA-LCR **83.7%** is now a published standalone long-context-reasoning measurement on the 1M-token window; still short of 95 because there is no ≥98% needle-retrieval row at 512K+ (MRCR/RULER absent 2026-11-08).
- **Multimodal: 77/100.** Broad input side — text, image, **speech** and video (plus PDF; GDP.pdf 33.2 / AA 32.6 measured) with OSWorld V2.1 78.4 partial grounding; output text-only and no MMMU-style vision-understanding score → unchanged (no new modality evidence this pass).
- **Coding: 90/100.** Moved 89→90: AA-SciCode **62.6%** fills a missing row and clears the 55% frontier ref, joining DeepSWE 79.0 (≥74 ref) and SWE-Marathon 57.5 #1; still capped by Terminal-Bench 4.0 at 57.1 (below the 85% ref), no SWE-bench Verified/Pro figure, and ProgramBench 59.0 behind Opus 5.5's 70.5.
- **Cost efficiency: 65/100.** No API and no token price: flat **$50/mo** (Power) or $200/mo (Maximum) gets an AA-#4-class model with 20–80× usage caps — outstanding flat-rate value for committed power users but zero accessibility for API-embedded or casual use, no cache pricing, subscription lock-in; BenchmarkList (2026-11-08) re-confirms no API/no per-token price. Unchanged.
- **Overall Score: 87/100.** (88 + 90 + 90 + 77 + 90) / 5 = 435 / 5 = 87.0 → 87 — best fit: long-horizon agentic coding and personal/professional agent work inside Muse Code where its #1 DeepSWE/SWE-Marathon and Active Memory/Active Focus features are fully usable; not the pick for API-embedded products (no API exists) or benchmark-maxed math/program-synthesis work (ProgramBench behind Opus 5.5).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page last updated 2026-11-07, Artificial Analysis leaderboards for HLE/LCR/CritPt/SciCode/GDPval/Omniscience, BenchmarkList access row, official Meta Muse Wonder model card table); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder Full — BenchLM](https://benchlm.ai/models/muse-wonder-full)
  - [Muse Wonder Full — Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Meta: Muse Wonder model card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder Full — BenchmarkList](https://benchmarklist.com/models/meta-muse-wonder-full/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
