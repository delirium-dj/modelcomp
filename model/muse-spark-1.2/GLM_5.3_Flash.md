# Muse Spark 1.2 — findings by GLM 5.3 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.2`; Contributor tier evaluated)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-08, 2026-10-11, 2026-10-16): the material
> correction is **pricing** — Meta's own docs list the Contributor tier at $0.10/$0.20 per 1M
> (never free; Zen's $0 row could not be verified against vendor pricing), moving Cost
> 100→97. Max output 131,072 confirmed; the Contributor rate-limit catch (100 RPM, a 30x
> cut) documented; AA Index launch value 54 vs current-scale 39.6 recorded as a version
> conflict. Overall holds at 88 (87.8).

## Model card

- **Name:** Muse Spark 1.2 (Contributor tier of Meta's Muse Spark 1.2; superseded by Muse Spark 1.3, 2026-09-02, same price)
- **Short description:** Meta Superintelligence Labs' coding-focused upgrade to Muse Spark 1.1 and the model behind Meta's Muse Code terminal agent — released 2026-08-05 with 1M context, whole-repository generation and 1,000+ tool-call sessions. Evaluated here on the Contributor tier (training-data consent). BenchLM's 2026-11-04 refresh ranks it #28 of 1009 (65.41).
- **Provider / access:** Meta Model API (`muse-spark-1.2` Standard "not used to improve our products"; `muse-spark-1.2-contributor` Contributor "used to improve our products"); OpenRouter (`meta/muse-spark-1.2`); LiteLLM-tracked resellers (OpenCode Go at the same rates); inside Muse Code. Zen's `muse-spark-1.2-contributor-free` row is catalogued in this repo but **could not be verified against Meta's published pricing this pass — flag**. Proprietary, closed weights (Spark Open, 2026-10-15, is a separate 816B model, not 1.2's weights).
- **Release / knowledge:** released 2026-08-05 alongside Muse Code (lineage: Muse Spark 2026-04-08 → 1.1 2026-07-09 → 1.2 2026-08-05 → 1.3 2026-09-02 → Spark Open 2026-10-15). Knowledge cutoff not verified in this pass.
- **IDs:** `muse-spark-1.2` / `muse-spark-1.2-contributor` (Meta API); `meta/muse-spark-1.2[-contributor]` (OpenRouter); `opencode/muse-spark-1.2-contributor-free` (Zen, unverified vs vendor).
- **Context window:** 1,048,576 tokens; **max output 131,072** (LiteLLM — fills the prior gap); no long-context premium (Meta docs).
- **Modalities:** text, images, video, audio and PDF in (LMSpeed); text out. Reasoning + tool use; web-search grounding add-on ($2.50/1,000 queries).
- **Pricing (as of 2026-11-05, Meta docs verified):** Standard $1.25 in / $4.25 out / $0.15 cached; **Contributor $0.10 in / $0.20 out / $0.002 cached** (92%/95%/98.7% off Standard) in exchange for training rights. Catch: Contributor rate limits are **100 RPM / 3M TPM** vs Standard's 3,000 RPM / 4M TPM (30x request cut, per-team, rolling 5-hour token window, select countries).
- **Architecture:** proprietary, parameters undisclosed; self-improvement training loop, co-trained with the Muse Code agent (rejection-sampled harness trajectories, compaction/subagent recipes).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Muse Code harness, xhigh): **82.9%** (Meta launch table) — **Vals independent: 69.7%** (#14/50), a −13.2-pt vendor-vs-independent gap (unchanged); LMSpeed rank #17/30
- AA Agentic Index: **44.0%** (Magica refresh reads 43.2 — minor drift, flagged); AA EnterpriseOps-Gym: **47.3%** (AA measured — NEW)
- GDPval-AA: **1631 Elo** (#17/89 per LMSpeed; +260 at launch, #5 then); AA-normalized **48.6%** (drift from 48.9% flagged)
- MCP Atlas: **90.3%** (Scale AI harness, launch — highest Meta-compared score)
- Long-horizon case: **1,000+ tool calls over 24h** optimising KDA/MLA GPU kernels (Meta case study — demonstration, not a benchmark)
- Claw-Eval: no verified public score found; MazeBench ASCII: **0%**; Toolathlon-Verified 70.7% is a benchgap estimate (excluded)

Reasoning / knowledge:

- AA-GPQA Diamond: **90.4%** (AA, #35/225 per LMSpeed); AA-HLE: **45.5%** (#29/244)
- MMLU-Pro: **88.3%** (Vals)
- Artificial Analysis Intelligence Index: **54** at launch (AA, xhigh — tied with GPT-5.5/Grok 4.5, #12 of 185 per Breaking The Lines) — CONFLICT with the **39.6** current-scale row (BenchLM/AA rebase); versions not comparable, both cited
- BenchLM overall: **65.41, #28 of 1009** (2026-11-04 refresh; was 66.48 #28/889)
- AA-LCR v1.1: **79.0%**; CritPt: **17.7%**
- AA-Omniscience: launch reading **index 22 / hallucination 28% / accuracy 38% / attempt rate 67%** (heavy abstention) — CONFLICT with the BenchLM-cited rows (index 27.2 / accuracy 45.4% / non-hallucination 33.3%); different snapshots, both cited

Coding:

- SWE-bench (Vals): **86.6%** (independent); DeepSWE 1.1: **59.3%** (#16/23 per LMSpeed — below the 74%+ frontier ref)
- AA-SciCode: **57.4%**; AA Coding Index: **72.2%**
- FrontierSWE v2: **12.0%** (Proximal — weakest measured in its launch batch)
- VulcanBench v3: **87.0%**; Meta Internal Coding Bench: **70.6%** (internal, unverifiable methodology)

Long context:

- Window: 1M tokens, no long-context premium; AA-LCR v1.1: **79.0%** (only measured retrieval-adjacent number); MRCR/RULER at window length: no verified public score found

Multimodal:

- Design Arena Website: **1312** (OpenRouter via BenchLM, 2026-11-04; drift 1319→1315→1312 flagged); Magica reads best Design Arena **1328** (#10 Data Viz, 56.6% win rate); no MMMU-Pro-class row published

### Normalized scores (1–100)

- **Tool use: 88/100.** Unchanged — the Vals TB2.1 gap (69.7 vs 82.9), GDPval normalized ~48.6% and AA Agentic Index ~44 still sit below frontier refs; MCP Atlas 90.3%, the new EnterpriseOps-Gym 47.3% and the 1,000+-call session design keep it a strong long-horizon agent.
- **Reasoning: 83/100.** Unchanged — GPQA 90.4% and MMLU-Pro 88.3% solid; the AA Index is now a documented two-reading conflict (54 at launch vs 39.6 re-based), and CritPt 17.7% + abstention-heavy Omniscience keep it a band below frontier.
- **Context window: 95/100.** Unchanged — 1M window, max output now confirmed at 131,072; AA-LCR 79.0% remains the only measured retrieval signal.
- **Multimodal: 88/100.** Unchanged — text+image+video+audio+PDF in, text out; Design Arena drift to 1312 noted.
- **Coding: 85/100.** Unchanged — Vals SWE-bench 86.6% and VulcanBench 87.0% vs DeepSWE 59.3% and FrontierSWE v2 12.0% balance to the same band.
- **Cost efficiency: 97/100.** CHANGED from 100 — the evaluated Contributor tier is **$0.10/$0.20 per 1M on Meta's own rate card (never free)**, matching the methodology's ~$0.10/$0.20 = 97–99 anchor; caveats: training-data consent, 100 RPM cap, select countries. Zen's $0 row remains unverified — if real, this would return to 100.
- **Overall Score: 88/100.** (88 + 83 + 95 + 88 + 85) / 5 = 439/5 = 87.8 → 88 (unchanged). Best fit: near-frontier Contributor-tier fallback for long-horizon coding/agentic work when 1.3 is unavailable — the measured capability is a band below the launch story, and the cheap tier trains on your traffic at 100 RPM.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Meta dev.meta.ai pricing/models docs (authoritative rate card), LiteLLM/endpoints.run/toolbit/eesel/neomanex pricing + lifecycle coverage, BenchLM 2026-11-04 refresh + LMSpeed Nov 2 + Magica + benchgap measured-vs-estimated screen, AA launch post + Breaking The Lines for the Index 54 vs 39.6 conflict); pricing premise corrected against vendor docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
