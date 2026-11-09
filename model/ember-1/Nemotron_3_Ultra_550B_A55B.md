# Ember-1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Fireworks (`ember-1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1 (Research Preview) — **NOT A GA MODEL, UNRANKED ON BENCHLM** (5 vendor rows only, no overall score)
- **Short description:** Specialized reasoning model from Fireworks Research, **fine-tuned from Kimi K3 to "think less"** (~40% fewer reasoning tokens at equal quality). Research Preview status still LIVE past nominal window. **Only 5 vendor benchmarks originally; Vals now has 16 rows.** BenchLM: unranked. **NO COMPOSITE INDEX, NO MULTIMODAL ROW, NO LONG-CONTEXT ROW.**
- **Provider / access:** Fireworks Serverless (Research Preview); **OpenRouter `fireworks/ember-1` (Chat Completions)**. **No OpenCode Zen route.** No Free ID found.
- **Release / knowledge:** 2026-09-22/24 release; **knowledge cutoff: not disclosed.**
- **IDs:** `fireworks/ember-1` (Fireworks); `fireworks/ember-1` (OpenRouter). No Free ID on Zen.
- **Context window:** **1,048,576 tokens**; max completion **943,718 per OpenRouter** — **CONFLICT: Vals lists max output 131K** (their serving config). Flag both.
- **Modalities:** Text + image in; text out; reasoning yes; tool calls yes; JSON mode. **No multimodal benchmark exists** — coverage undocumented.
- **Pricing (as of 2026-11-08):** **$3.00 / $15.00 per 1M** (cached $0.30; blended $6.00) — unchanged. **No public rate card in launch post/model page.** No free tier; no open weights.
- **Architecture:** **Fine-tune of Kimi K3 on Fireworks Serverless Training** (cuts ~40% reasoning tokens at equal quality); proprietary weights.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Fireworks sources. **Average of 30 qualifying raters: 87 Overall** (Tool 85.9, Reasoning 87.1, Context 94.6, Multimodal 76.4, Coding 90.7). Queue: 87. Step 5 Preview: 64. GLM 5.3 Flash: 78. My original: 67. **RESEARCH PREVIEW: 5 vendor benchmarks originally; Vals now 16; BenchLM unranked; NO reasoning/knowledge/reliability/long-context refs measured.**

Agent / tool use:

- Terminal-Bench 2.1 (vendor, N=189): **82.0%** (vs K3-max 80.9%) (GLM / Step 5)
- Terminal-Bench 4.0 (Vals, Mini-SWE-agent): **20.71% ±3.64** #33/60 (updated from 19.70%) (GLM)
- TB Science (Vals): **5.71%** (NEW, weak) (GLM)
- τ²-Bench Airline (vendor, N=50): **66.0%**; SWE-Interact (vendor): **20.0%** (GLM / Step 5)
- Vals Index: **49.03%** (was 50.81% #27/45 — **drift flagged**) (GLM)
- CyberBench v1.1 (Vals): **69.52%**; Harvey LAB (Vals): **9.17%** (GLM)
- SAGE (Vals): **86.38% ±1.89** #12/28 (NEW, strong); Public Benefits **66.17%**; MysteryMechanism **22.52%** (GLM)
- Bedside Bench (Doximity): **Pareto-frontier cost/task lead** — no absolute score (GLM)
- **Claw-Eval, GDPval-AA, Toolathon, MCP-Atlas: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **τ³-Banking, OSWorld, BrowseComp, JobBench, MazeBench, ALE, TB 4.0 (vendor): NO VERIFIED SCORE** (Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- **GPQA Diamond, HLE, LCR, MLCR, CritPt, AA Intelligence Index, AA-Omniscience: NO VERIFIED PUBLIC SCORE** (AA has no Ember-1 page — re-checked via BenchLM Nov 4) (GLM / Step 5) — **EVERY REASONING/KNOWLEDGE/RELIABILITY REFERENCE ABSENT**
- ProofBench v1.1 (Vals): **61.00%**; IOI (Vals): **46.33%** (GLM)
- EMB (Vals): **63.37%** (NEW); BioMysteryBench (Vals): **67.04% ±3.03** (NEW); MysteryMechanism **22.52%** (NEW) (GLM)
- Bedside Bench (SII): **Pareto-frontier cost/task lead**; quality claimed at K3 level (GLM)
- **NO AA Index, NO AA-LCR, NO MRCR, NO AA-Omniscience** — reliability entirely unmeasured

Coding:

- SWE-bench Verified (vendor, N=500): **92.2%** (vs K3-max 93.2%) (GLM / Step 5)
- DeepSWE 1.1 (vendor): **75.2%** (+8.8 over K3-max) — **CLEARS 74%+ FRONTIER REF** (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **83.87% ±3.15** #21/124 (rank slipped from #16/110, score unchanged) (GLM)
- **LiveCodeBench, SciCode, AA Coding Index, SWE-bench Pro: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **4 of 5 coding refs unmeasured**

Long context:

- 1.0M window; **NO MRCR / RULER / GraphWalks RETRIEVAL NUMBERS FOUND** (GLM / Step 5)
- Token efficiency (core claim): Live A/B **71.3% reasoning-token reduction, 39% total-token reduction at equal quality**; cost/task vs K3-max: TB **−51.9%**, SWE-V **−15.5%**, DeepSWE **−23.7%** (GLM)
- Vals latency: **61 min 58s average** — **token savings do NOT translate to wall-clock speed on Vals' harness** (GLM)

Multimodal:

- Text + image in; text out. **NO MULTIMODAL BENCHMARK EXISTS** — modality coverage undocumented (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **87 Overall** (Tool 85.9, Reasoning 87.1, Context 94.6, Multimodal 76.4, Coding 90.7). Queue: 87. Step 5 Preview: 64. GLM 5.3 Flash: 78. My original: 67. **RESEARCH PREVIEW: 5 vendor benchmarks; Vals 16; BenchLM unranked; NO reasoning/knowledge/reliability refs; 62-min Vals latency.**

- **Tool use: 55/100.** (was 72) TB 2.1 **82.0% vendor** (6pts under 88%+ frontier); τ² Airline **66.0%**; Vals TB 4.0 **20.71% #33/60**; TB Science **5.71%**; CyberBench **69.52%**; Vals Index **49.03%** (drift 50.81→49.03); SAGE **86.38% #12/28**; Bedside Bench **Pareto cost/task lead**. **Capped by:** **NO TB 4.0 vendor/τ³-Banking/GDPval-AA/MCP-Atlas/OSWorld/BrowseComp/Toolathlon/Claw-Eval/JobBench/MazeBench/ALE** — 2 of 3 frontier refs unmeasured; all measured numbers vendor-published or Vals independent but generation-bound.
- **Reasoning: 55/100.** (was 55) ProofBench **61.0%**; IOI **46.33%**; SAGE **86.38%**; EMB **63.37%**; BioMystery **67.04%**; MysteryMechanism **22.52%**; Bedside Bench **Pareto cost/task**. **Capped by: EVERY REASONING/KNOWLEDGE/RELIABILITY REFERENCE ABSENT** — NO GPQA/HLE/LCR/MLCR/CritPt/AA Index/AA-Omniscience/ARC-AGI/FrontierMath/MRCR. Scored at 45 floor lifted to 55 because DeepSWE 75.2% + SWE-V 92.2% require reasoning substrate — **floor on missing evidence, not measurement.**
- **Context window: 95/100.** (was 90) **1,048,576 verified** (≥1M tier); **NO MRCR/GraphWalks/AA-LCR AT ANY LENGTH** — usable depth entirely unmeasured. **Max output conflict: 943,718 (OpenRouter) vs 131K (Vals config).**
- **Multimodal: 45/100.** (was 30) Text + image in; text out. **NO MULTIMODAL BENCHMARK EXISTS** — coverage undocumented. Scored mid-band placeholder (not 10-20 text-only floor) because strong coding results consistent with code-reading model. **Explicitly placeholder for unknown — if Fireworks documents image input → 60-70; if text-only → 10-20.**
- **Coding: 80/100.** (was 90) SWE-V **92.2%** (vendor, N=500) — among highest in series (behind Opus 5 96-97%, level with GLM-5.3-Flash 92.0%); DeepSWE **75.2%** (CLEARS 74%+ FRONTIER); TB 2.1 **82.0%** (6pts under 85% ref); Vibe Code **83.87%** #21/124. **Capped by:** **NO LiveCodeBench/SciCode/AA Coding Index/SWE-Pro; all 3 strong figures vendor-published from single launch post; NO INDEPENDENT REPLICATION OF 92.2%.**
- **Cost efficiency: 55/100.** (was 40) **$3/$15 per 1M** (cached $0.30; blended $6.00); **Pareto token-efficiency lead**: 71.3% reasoning-token reduction, 39% total-token reduction at equal quality; cost/task vs K3-max: TB −51.9%, SWE-V −15.5%, DeepSWE −23.7%. **Offset by:** **62-min Vals latency** — token savings do NOT translate to wall-clock speed. **No public rate card in launch post/model page — estimate flagged.**
- **Overall Score: 66/100.** (was 67) Half-up mean of (55 + 55 + 95 + 45 + 80) / 5 = 330 / 5 = 66 → **66**. **Far below queue (87), average of 30 qualifying raters (87).** Best-fit: **RESEARCH PREVIEW CAPABILITY CLAIM, NOT DEPLOYABLE MODEL CHOICE.** Evidence for headline SWE-V 92.2%/DeepSWE 75.2% rests entirely on Fireworks' launch post with **no independent replication, no composite index, no multimodal row, no reasoning row, no published price**. 66 is floor on missing evidence across 2 whole dimensions. **Re-score when third party (AA, Vals, Epoch, ARC) measures it, or Fireworks publishes rate card + modality statement.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 64), GLM 5.3 Flash (2026-11-05, Overall 78) + official Fireworks sources (Ember-1 launch post, model page, BenchLM, Vals AI 16-row suite). **Average of 30 qualifying raters: 87 Overall.** Queue: 87. **Critical findings:** Research Preview (BenchLM unranked, 5 vendor rows); **NO reasoning/knowledge/reliability/long-context refs measured**; SWE-V 92.2% (vendor), DeepSWE 75.2% (clears 74% ref); Vals Index 49.03% (drift); 62-min Vals latency (token savings ≠ wall-clock speed); fine-tune of Kimi K3; NO AA/ARC/Epoch/GPQA/HLE/LCR; NO multimodal benchmark; cost estimate flagged.
- Reference URLs:
  - [Fireworks Research — Ember-1 launch post (source of all 5 measured figures)](https://fireworks.ai/blog/ember-1)
  - [Fireworks — Ember-1 model page](https://fireworks.ai/models/fireworks/ember-1)
  - [BenchLM — Ember-1 (5 source-displayable rows, unranked)](https://benchlm.ai/models/ember-1)
  - [Vals AI — Ember-1 model page (16-row suite, Vals Index, new rows)](https://www.vals.ai/models/fireworks_ember-1)
  - [OpenCode Zen — model list and Console pricing (no Ember-1 route)](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---