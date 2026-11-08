# Muse Spark 1.1 — findings by MiMo 2.6 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.1`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: BenchLM model page
> (updated 2026-11-07) surfacing the full Meta Muse Spark 1.1 evaluation
> report table, plus an LLM Stats pricing re-check (unchanged).
> Changes: Tool use 84→85 (first Toolathlon row, 75.6), Reasoning 83→86
> (Vals GPQA 91.2 clears the 90%+ ref; vendor HLE-no-tools 52.2), Coding
> 82→83 (first LiveCodeBench row, 85.9); Context 95, Multimodal 91, Cost 89 held.

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' second model (released 2026-07-09 with the public preview of the Meta Model API) — a multimodal reasoning model for agentic tasks with **native computer use**, active management of its full 1M window (remember/retrieve/compact), and what MSL called a "step-change" over the April original. AA launch analysis: Index **51**, most token-efficient of its tie group, ~**$0.26 per Index task**; on today's scale the Index reads **33.7** (v4.3.x re-base). BenchLM composite 65.67, #28 of 1016 (2026-11-07) — ahead of sibling Muse Spark 1.2's 65.62.
- **Provider / access:** Meta Model API public preview (launch US-only/waitlisted; OpenRouter listing `meta/muse-spark-1.1` appeared ~2026-09-11), Meta AI app/meta.ai (Thinking mode), Command Code; $20 free credits at signup.
- **Release / knowledge:** released 2026-07-09; knowledge cutoff not published.
- **IDs:** `muse-spark-1-1` / `meta/muse-spark-1.1`.
- **Context window:** **1,048,576 tokens** (1.0M via Meta Model API per LLM Stats), max output 131,072; self-managed context (retrieve + compact).
- **Modalities:** **text + images + video + audio + PDF documents in** (AI Atlas/OpenRouter/LLM Stats), text out; reasoning yes (`reasoning_effort`, thinking billed as output); tool calls yes (computer use, function calling, OpenAI/Anthropic SDK-compatible).
- **Pricing (as of 2026-11-08):** **$1.25 in / $4.25 out** per 1M, cache read **$0.15** (~88% off) — re-confirmed on LLM Stats 2026-11-08; $20 one-time credits; thinking tokens bill as output so heavy reasoning raises real cost.
- **Architecture:** proprietary (closed weights), size undisclosed.

### Raw benchmarks found

Agent / tool use:

- **Toolathlon: 75.6** (Meta evaluation report, via BenchLM 2026-11-07 — **first verified Toolathlon row**; far above GPT-5.6 Sol 58, Fable 5 61.7, Opus 4.8 59.9 in the same table).
- OSWorld-Verified: **80.8** (Meta, xhigh — clears the 75% ref). MCP Atlas (1,000 tasks / 36 servers): **88.1 ±1.95** (Scale AI benchmark owner — clears the 75% ref). WebArena-Verified: **69.0** (Meta). DeepSearchQA: **84.9** (Meta). Finance Agent v2: 57.2 (Vals). JobBench: 54.7. Cybench: 92.9 pass@1.
- Terminal-Bench 2.1: **80.0** (Meta) / **77.9** (AA, e2b) / **69.3** (Vals — first Vals reading, the low end of the spread). Terminal-Bench 4.0: **6.06** (AA — floor). OSWorld 2.0: **14.2** (Meta; the newer harness reads far below OSWorld-Verified). ExploitGym: 0.8.
- GDPval-AA v2: **1375** Elo (Meta report) / 35.6% normalized (AA) / 1376 at launch. AA Agentic Index: 27.5 (AA). τ³-Banking: 31.75 (AA). Claw-Eval / ALE: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **89.8** (AA independent, xhigh — misses the 90%+ ref by 0.2) / **91.2 (Vals — clears it)** (first independent ≥90 reading). MMLU-Pro (Vals): 88.7.
- HLE: **62.1** with tools / **52.2 no tools** (Meta evaluation report — the no-tools figure is new and clears the 40%+ ref decisively); AA independent text-only **46.2** (also clears).
- AA Intelligence Index: **33.7** (AA current, via BenchLM — confirms the 33.7–34.3 re-based reading; launch-era 51) — under the 60+ ref on every scale.
- CritPt: 15.1 (AA). AA-Omniscience: index 28.1 / accuracy 52.1 / hallucination 50.0 (AA). HealthBench Professional: 59.3 (Meta).

Coding:

- SciCode (AA): **58.8** — **clears the 55%+ ref** (#3 of all models at launch). AA Coding Index: **71.3** — **clears the 70+ ref**.
- SWE-bench Pro (public): **61.5 ±3.1** (Scale AI, mini-swe-agent). DeepSWE 1.1: **53.0/53.3** (DataCurve/Meta — under the 74% ref).
- **LiveCodeBench (Vals): 85.9** and **SWE-bench (Vals): 82.0** (Vals AI leaderboards, via BenchLM 2026-11-07 — **first LiveCodeBench row found for 1.1**).
- Terminal-Bench 2.1/4.0 as above. No SWE-bench Verified row.

Long context:

- **MRCR v2 1M: 54.1** (Meta evaluation report, via BenchLM — **first MRCR row for 1.1**; solid pointwise-at-1M but far short of the ≥98% condition).
- AA-LCR: **77.7** (AA current; prior read 81.3). 1M window with active compaction.

Multimodal (vendor rows):

- CharXiv Reasoning: **88.4**; BabyVision: 76.3. Full modality list includes video/audio/PDF, but no audio/video benchmark rows were published.

### Normalized scores (1–100)

- **Tool use: 85/100.** The new **Toolathlon 75.6** — board-topping against Sol/Fable/Opus in Meta's own table — plus existing ref-clearers OSWorld 80.8 and MCP Atlas 88.1 lift this a point (84→85); capped below the frontier band by TB2.1 69.3–80 (under the 85 ref, wide harness spread), TB4.0 6.06, GDPval 1375 (<1750), no Tau3/Claw/ALE rows.
- **Reasoning: 86/100.** Two old near-misses are now cleared: **Vals GPQA 91.2** clears the 90%+ ref (AA's 89.8 still a hair under) and vendor **HLE no-tools 52.2** clears the 40%+ ref outright (AA text-only 46.2 agrees) → 83→86; capped below 87+ by AA Intelligence Index 33.7 (re-based, far under 60+) and CritPt 15.1.
- **Context window: 95/100.** Held: 1.05M → ≥1M floor; the new **MRCR 1M 54.1** row is real pointwise retrieval evidence (with AA-LCR 77.7 independent) but still nowhere near the ≥98%-at-512K+ condition needed to exceed the floor.
- **Multimodal: 91/100.** Held: full non-text suite (image + video + audio + PDF) in → audio/non-text band (90–100); CharXiv-R 88.4 and BabyVision 76.3 remain the only concrete rows, so it sits near the floor of its band.
- **Coding: 83/100.** The first **LiveCodeBench 85.9** row (Vals) plus Vals SWE-bench 82.0 lift this a point (82→83) alongside the two already-cleared refs (SciCode 58.8, Coding Index 71.3) and SWE-Pro 61.5; still capped by DeepSWE 53 (far under the 74 ref), TB2.1 under the 85 ref and TB4.0 at 6.
- **Cost efficiency: 89/100.** Held: $1.25/$4.25 re-confirmed 2026-11-08 sits exactly on the mid-tier anchor (~88) with ~88% cache reads, ~$0.26 per Index task (cheapest in its intelligence tier but for GPT-5.6 Luna) and $20 free credits; docking for thinking-tokens-as-output inflation.
- **Overall Score: 88/100.** (85+86+95+91+83)/5 = 88.0 → 88 — Meta's strongest value play: full-modality input, ref-clearing OSWorld/MCP-Atlas/SciCode/Toolathlon/GPQA/HLE, 1M self-managing context with a measured MRCR row, at anchor pricing — held to 88 by an Index that re-based into the 30s, DeepSWE at 53, and a TB4.0 that never got off the floor.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with Meta's evaluation-report table rows, Meta Muse Spark 1.1 evaluation report, Vals AI leaderboards, LLM Stats pricing re-check); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI — Muse Spark 1.1 evaluation report](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [BenchLM — Muse Spark 1.1 (updated 2026-11-07)](https://benchlm.ai/models/muse-spark-1-1)
  - [Artificial Analysis — Muse Spark 1.1](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [LLM Stats — Muse Spark 1.1 (pricing/specs)](https://llm-stats.com/models/muse-spark-1.1)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Muse Spark 1.1 — findings by Mimo V2.6 Flash

- Source: Meta/`muse-spark-1.1`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July 2026 Muse Spark refresh — +8 AA Intelligence Index points over Muse Spark 1.0 in three months, driven by agentic knowledge work (GDPval +232 Elo), coding (SciCode #3 overall), and HLE; 1M context (up from 262K), native multimodal perception, proprietary weights. Superseded in-market by Muse Spark 1.2 (AA notes deprecation toward 1.2) but still served.
- **Provider / access:** Meta AI app/web (Thinking mode), Meta Model API public preview (U.S. developers), gateways; site meta `opencode/muse-spark-1.1`. Proprietary — no open weights.
- **Release / knowledge:** 2026-07-09 (Meta evaluation report / LLMLearner / AA article); knowledge cutoff not published.
- **IDs:** `muse-spark-1-1` / `muse-spark-1-1-xhigh` (AA/eval harnesses); API via Meta Model API.
- **Context window:** 1,000,000 tokens in (AA / Meta — up from 262K on 1.0); max output not published in rows reviewed.
- **Modalities:** text, image, speech (audio), video in; text out; Thinking mode; reasoning up to xhigh (eval config). Docsbot: also document perception (native multimodal across images/videos/documents).
- **Pricing (as of 2026-09-23):** $1.25 / $4.25 per 1M in/out; cache hits $0.15/1M (AA / Meta API). Paid; public-preview API for U.S. developers.
- **Architecture:** proprietary closed weights (Facebook AI Research / Meta Superintelligence Labs).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). AA independent runs marked; Meta first-party marked. Note: AA Intelligence Index reported as **51** at launch article (2026-07-10, Index v4.x era) vs **34** on the current AA model page (2026-09, possible Index-version recalibration) and **50.6** on Docsbot (v4.1.1) — all three cited; score calibrated primarily on launch-era 51 + component benches.

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** thinking w/ tools (LLMLearner / Meta table; rank 26/110); AA independent **77.9%** e2e / **76.2%** verified mini-SWE-agent (Lumina)
- Cybench (unguided): **92.9%** pass@1 / **97.0%** pass@10 (Meta evaluation report — near saturation; Muse 1.0 was 65.4/79.0)
- GDPval-AA v2: **1376** Elo (+232 vs 1.0's 1144) (AA article); Lumina lists **43.66%** win-style row
- AA Coding Agents composite: **54.9** ($1.44/task, 55.5 steps) (Lumina/AA)
- AA-Briefcase / AutomationBench / OSWorld / MCP Atlas: **no verified public score found** in rows reviewed
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (LLMLearner / AA independent 89.798% no tools xhigh)
- HLE: **45%** no tools (AA article — within a point of Opus 4.8 max 46) / **62.1%** with tools thinking (LLMLearner, rank 6/218)
- AA Intelligence Index: **51** at launch (AA article 2026-07-10 — tied GLM-5.2 max, GPT-5.4 xhigh, GPT-5.6 Luna max; behind Grok 4.5 54, Fable 5 60); current model page **34** (Index v4.3.2 recalibration); Docsbot **50.6** (v4.1.1)
- AA Coding Index: **71** (+12 vs 1.0's 59) (AA article)
- CritPt: **15.1** no tools (LLMLearner, rank 28/118)
- AA-LCR: **81.33%** (Lumina/AA independent)
- AA-Omniscience: accuracy **18** (+14 vs 1.0) (AA article)
- CharXiv Reasoning: **88.4%** (Meta table via Docsbot)
- ProtocolQA: **88.0** (Meta eval report snippet)
- LCR (MLCR) / Omniscience non-hallucination rate: **no verified public score found** as separate rows

Coding:

- SWE-bench Pro: **61.5%** thinking w/ tools (Meta/LLMLearner, rank 14/56)
- DeepSWE 1.1: **53.3%** mini-swe-agent (Meta/LLMLearner)
- SciCode: **58%** no tools xhigh (AA — **#3 all models** behind Fable 5 60, Gemini 3.1 Pro 59); LLMLearner 58.8 rank 8/83
- SWE-bench Verified / LiveCodeBench / Vibe: **no verified public score found** in rows reviewed
- Terminal-Bench 4.0: **6.1** with tools xhigh (LLMLearner — early TB4 numbers very low field-wide)

Long context:

- 1M window (up from 262K); AA-LCR **81.33%** verifies long-context reasoning at depth (not a pure MRCR % — noted as proxy-adjacent but measured)
- MRCR / RULER: **no verified public score found**

Multimodal:

- Text/image/speech/video in confirmed (AA model page / LLMLearner); text out.
- MMMU / video suites: **no verified public score found** in rows reviewed (native coverage without extracted %).

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 77.9–80, Cybench 92.9 near-ceiling, GDPval-AA 1376 (+232 gen-over-gen), AA Coding Agents 54.9 — strong agentic stack; capped by no public Tau3/OSWorld/MCP/Claw rows and TB4.0 still single-digit (field-wide immature harness).
- **Reasoning: 90/100.** GPQA 89.8, HLE 45/62.1-tools (near Opus 4.8), launch Index 51 (frontier-tied cluster) — top-tier profile; capped by current-page Index 34 recalibration ambiguity and CritPt 15.1 still mid-pack.
- **Context window: 96/100.** Full 1M (≥1M tier) with AA-LCR 81.3% proving long-context reasoning quality; no classic MRCR % row for the perfect-100 bar.
- **Multimodal: 92/100.** Text/image/speech/video in (audio input → 90–100 band); text-only out; no extracted MMMU % keeps it shy of 95+.
- **Coding: 87/100.** SciCode #3 (58–58.8), SWE-Pro 61.5, DeepSWE 53.3, TB2.1 ~78–80 — high coding for the price tier; capped by no public SWE-V row and DeepSWE still behind Fable-class 70.
- **Cost efficiency: 89/100.** $1.25/$4.25 matches the ~$1.25/$4.25≈88 anchor exactly, with ~$0.26/AA-task and 94M-token Index efficiency beating GPT-5.4/GLM-5.2 on cost-per-intelligence; $0.15 cache reads help agentic loops.
- **Overall Score: 90/100.** Mean of Tool 86 + Reasoning 90 + Context 96 + Multimodal 92 + Coding 87 = 451/5 = 90.2 → **90** (best-fit: best-value frontier-adjacent multimodal agent at $1.25/$4.25 when 1M context + speech/video input matter; accept Index-version noise and watch 1.2 succession).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Artificial Analysis model page + launch article, Meta Muse Spark 1.1 Evaluation Report, LLMLearner, Lumina, Docsbot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
