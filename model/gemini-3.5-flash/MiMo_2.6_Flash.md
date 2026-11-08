# Gemini 3.5 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 86). Fresh sources this pass: BenchLM model page
> (last updated 2026-11-07, full benchmark tables with source links) and the
> Artificial Analysis model page (deprecated notice, pricing/specs refresh).
> Changes: Tool use 84→86 (first verified τ²-bench row), Reasoning 85→89
> (first verified GPQA row), Coding 78→83 (AA Coding Index 70.1 + Vals
> LiveCodeBench/SciCode rows); Context 95, Multimodal 88, Cost 78 held.

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** First model of the Gemini 3.5 family (Google I/O 2026, released 2026-05-19) — built on the Gemini 3 Flash reasoning foundation, pitched as "frontier intelligence at Flash speed": the strongest agentic/coding Flash of its generation, beating Gemini 3.1 Pro on TB2.1, MCP-Atlas, FinanceAgent and GDPval-AA. AA now marks it **deprecated** (superseded by Gemini 3.7 Flash, re-benchmarked every 18h instead of 6h).
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI, Google Antigravity, Android Studio, Gemini Enterprise; free tier available; OpenRouter/second-party routes. Chat-style `generateContent` API; Computer Use (Preview) supported.
- **Release / knowledge:** released 2026-05-19 (AA confirms date); knowledge cutoff **January 2026** per launch coverage (the developer FAQ still lists Jan 2025 — flagged as likely stale).
- **IDs:** `google/gemini-3.5-flash` (gateway routes) / `gemini-3.5-flash` (native, internal `3.5-flash-05-2026`); AA page id `gemini-3-5-flash` (high effort).
- **Context window:** 1,048,576 tokens; max output 65,536 (Google FAQ).
- **Modalities:** text, images, video, speech/audio, PDF in; text out; reasoning yes (dynamic thinking, effort minimal/low/medium/high); tool calls yes (function calling, structured outputs, code execution, file search, search grounding, URL context, Computer Use Preview); no image/audio generation.
- **Pricing (as of 2026-11-08):** **$1.50 in / $9.00 out** per 1M, cached input **$0.15** (90% discount) — confirmed on the Artificial Analysis page 2026-11-08. Batch/Flex/Priority options; free tier. AA measured full-index run cost $1,552 (5.5× Gemini 3 Flash) due to heavier agentic token usage.
- **Architecture:** proprietary (params undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **95.3** (Artificial Analysis, via BenchLM 2026-11-07 — first verified tau row for this ID; old report had none).
- MCP-Atlas: **83.6** (Google launch, via BenchLM — field-leading at release). OSWorld-Verified: **78.4**. Finance Agent v2: **57.9** (#1 in Google's table, Vals). Terminal-Bench 2.1: **76.2** (Google) / 74.2 (Vals).
- GDPval-AA: **1345** Elo (Google launch screenshots, via BenchLM 2026-11-07; older reads of 1656/1349 exist — all under the 1750+ frontier ref). Toolathlon: 56.5. AA AutomationBench / ITBench-AA: 40.3. AA Agentic Index: 27.3. APEX-Agents-AA: 47.1.
- Claw-Eval: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.2** (Artificial Analysis, via BenchLM 2026-11-07 — clears the 90% frontier ref; Vals mirror 92.7; old report had no GPQA row).
- HLE: **40.2** (Google launch) / **42.7** (AA, via BenchLM) — clears the 40%+ ref.
- AA Intelligence Index: **50.2** (BenchLM/AA 2026-11-07) — still under the 60+ ref (earlier reads: launch-era 55, AA v4.3.2 refresh 33).
- ARC-AGI-2: **72.1** (Google). ARC-AGI-1: 92.5 (ARC Prize verified, high). CritPt: **13.1** (AA). AA-Omniscience Accuracy / hallucination: 51.9 / 60.7. FrontierMath v2 T1-3: 62.8 (Epoch). IFBench: 76.3 (AA).
- BenchLM overall: **61.69/100, #48 of 1016** (snapshot 2026-11-07, 55/759 benchmarks covered — conservative).

Coding:

- AA Coding Index: **70.1** (AA, via BenchLM 2026-11-07 — hits the 70% frontier ref).
- LiveCodeBench (Vals mirror): **87.6**. SWE-bench (Vals mirror): **78.8**. SciCode / AA-SciCode: **53.1 / 53.9** (AA — just under the 55% ref).
- SWE-bench Pro (Public): **55.1** (Google). Terminal-Bench 2.1: **76.2** (Google). DeepSWE 1.1: **37.0 ±2** (Google/AA harness, prior verified run — long-horizon deficit at default effort). Vibe Code Bench (Vals): 48.7. CursorBench 3.1/3.2: 49.8 / 48.8.

Long context:

- MRCR v2 (8-needle): **77.3% at 128K**, **26.6% at 1M pointwise** (Google; retrieval falls off hard at 1M).
- AA-LCR: **69.3** (BenchLM/AA 2026-11-07; prior reads 61.3–74.3 by effort). Window 1M, retrieval far short of the ≥98% condition.

Multimodal:

- CharXiv Reasoning: **84.2** (Google, #1 in its table). MMMU-Pro: **83.6** (Google) / 84.3 (AA). Blueprint-Bench 2: 33.6. ExtractBench (LlamaIndex): 79.8; ParseBench: 73.2 (2026-11-06 snapshots). LMArena Documents: 1461.

### Normalized scores (1–100)

- **Tool use: 86/100.** New τ²-bench **95.3** (AA) plus MCP-Atlas 83.6 / OSWorld 78.4 / FinanceAgent 57.9 / TB2.1 76.2 keep this among the best Flash-class agentic stacks (84→86); capped by GDPval-AA 1345 (well under the 1750 ref), Toolathlon 56.5 and AA Agentic Index 27.3 — no Claw-Eval row (N/A, slight penalty).
- **Reasoning: 89/100.** First verified **GPQA Diamond 92.2** (AA) clears the 90% frontier ref and HLE 40.2/42.7 clears the 40% ref (85→89); capped below 90+ by AA Intelligence Index 50.2 (<60), CritPt 13.1 and MRCR 1M retrieval weakness.
- **Context window: 95/100.** 1M capacity = ≥1M tier floor (held); MRCR 77.3% at 128K but 26.6% at 1M and AA-LCR 69.3 show retrieval well short of the ≥98% condition — the floor, not the ceiling.
- **Multimodal: 88/100.** Held: text + image + video + speech + PDF in with CharXiv 84.2 (#1 in Google's table) and MMMU-Pro 83.6/84.3 in the upper band (75–90); text-only out and no audio/image generation keep it under 90.
- **Coding: 83/100.** New AA Coding Index **70.1** (hits the 70% ref) plus Vals LiveCodeBench 87.6 / SWE-bench 78.8 and AA SciCode 53.1 justify 78→83; capped by TB2.1 76.2 (<88 ref), SWE-Pro 55.1 and the DeepSWE 37.0 long-horizon deficit.
- **Cost efficiency: 78/100.** Held: $1.50/$9.00 re-confirmed on AA 2026-11-08 sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (≈75), lifted to 78 by the 90%-off cache, free tier and batch/flex options — offset by AA's finding that real agentic runs cost 5.5× a Gemini 3 Flash run.
- **Overall Score: 88/100.** (86+89+95+88+83)/5 = 88.2 → 88 — the speed-intelligence Pareto pick: frontier GPQA/τ² rows at Flash latency and sub-Pro pricing, with deep-1M retrieval and default-effort long-horizon coding as the honest drags.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07, Artificial Analysis model page, Google launch benchmarks via their source links); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind / Gemini 3.5 Flash launch benchmarks](https://deepmind.google/models/gemini/flash/)
  - [BenchLM — Gemini 3.5 Flash (updated 2026-11-07)](https://benchlm.ai/models/gemini-3-5-flash)
  - [Artificial Analysis — Gemini 3.5 Flash (deprecated notice, specs/pricing)](https://artificialanalysis.ai/models/gemini-3-5-flash)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 3.5 Flash — findings by Mimo V2.6 Flash

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's I/O 2026 Flash flagship (GA) — most intelligent Flash at release, successor to Gemini 3 Flash, tuned for agentic execution, MCP tool orchestration, and full multimodal ingestion (video/PDF/audio). Not the same as `gemini-3.6-flash` or Flash-Lite tiers.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.5-flash`, GA stable), Vertex AI (incl. EU multi-region GDPR endpoint), OpenRouter. Chat-style generateContent API. Computer Use (Preview) supported.
- **Release / knowledge:** Released / GA 2026-05-19 (Google I/O; DeepMind model card; HokAI). Knowledge cutoff January 2025 (Google FAQ).
- **IDs:** `google/gemini-3.5-flash`. No dedicated Zen Free ID verified; Vertex/Gemini API paid (free-quota status not confirmed in sources — treat as paid for scoring).
- **Context window:** 1,048,576 tokens input; max output 65,536 tokens (Google FAQ / HokAI).
- **Modalities:** text, image, audio, video, PDF in; text + tool-calls out (no image/audio/video generation); reasoning yes (thinking levels minimal/low/medium/high, default medium); tool calls + code execution + Search grounding yes; structured outputs / JSON mode yes.
- **Pricing (as of 2026-09-23):** $1.50 in / $9.00 out per 1M; cached input $0.15 / 1M (90% discount) (Google/HokAI/modelpricewatch, stable since Jun 2026). ~3× Gemini 3 Flash Preview pricing.
- **Architecture:** proprietary (params undisclosed; natively multimodal transformer per HokAI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agent**): **76.2%** (DeepMind model card, Terminus-2 harness)
- MCP Atlas: **83.6%** (HokAI — highest tool-orchestration result of any model as of June 2026)
- OSWorld-Verified: **78.4%** (HokAI lineage vs 3.6's 83.0)
- GDPval-AA v2: **1349** (HokAI — vs 3.6 Flash's 1421)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon: no verified public score found for this ID in sources consulted

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (HokAI)
- HLE: no verified public score found as a distinct 3.5 Flash row in sources consulted
- ARC-AGI-2: **72.1%** (HokAI)
- Artificial Analysis Intelligence Index: **33** (AA v4.3.2 model page, 2026-09-28 — high effort; supersedes both the launch-era 55 and the v4.3-row 34 previously noted; see Fresh-source note). BenchLeader AA rows (2026-10-06): medium **33.6 (#93)**, high **32.6 (#98)**, minimal 23.9 (#167) — consistent with the 33 refresh
- IF Bench: **76.30** (DataLearner catalog); DataLearner also lists a GPQA Diamond 92.80 row — treat 90.4% (HokAI) as primary, 92.80 as alternate catalog figure
- CritPt / Omniscience numeric: no verified public score found in sources consulted
- BenchLeader composite index (2026-10-06): **63.1, #66 of 750** (medium effort, best config; high 62.6 #76, minimal 56.5 #186) — categories Instruction-following 73 / Knowledge 71 / Agents&tools 68 / Maths 67 / Multimodal 67 / Human-preference 67 / Long-context 62 / Reasoning 62 / Coding 57
- LiveBench: **74.6% (#38)**; IFBench **76.3% high (#21) / 74.6% medium (#35)**; MMMU-Pro **84.3% high (#20) / 83.9% medium (#24)** (AA) and **88.3% (#8)** (Vals); Vals Index **44.8 (#31)**; Epoch Capabilities Index **154.5 (#35)**; LMArena Text **1476–1477**, Vision **1308–1310** (BenchLeader 2026-10-06)

Coding:

- SWE-bench Verified: **78%** (HokAI — vendor-aligned; +42% relative claim vs prior Flash generation noted in HokAI copy, absolute comparison to 3 Flash's 78% is what Google published for the earlier model — use 78% as the measured 3.5 Flash value)
- SWE-bench Pro (Public): **55.1%** (DeepMind model card)
- DeepSWE v1.1: **37%** (DeepMind model card)
- LiveCodeBench / SciCode / Vibe: no verified public score found as distinct 3.5 Flash rows in sources consulted

Long context:

- 1M input confirmed; independent recall above 100K **not published for the 3.5 generation** (HokAI) → no long-context retrieval percentage reported. AA-LCR (independent): **61.3% minimal / 74.3% medium / 73.3% high** (#149–255 by effort) and MLCR **18.3% (#20)** (Artificial Analysis via BenchLeader, 2026-10-06 — first measured long-context rows for 3.5 Flash)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 33** (high effort) resolves the earlier 55-vs-34 conflict; AA now marks Gemini 3.5 Flash **deprecated** (superseded by Gemini 3.7 Flash, benchmarking frozen to the default 10K workload) — scores unchanged pending re-derivation.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 83.6% (field-leading at June 2026), TB2.1 76.2%, OSWorld 78.4%, GDPval-AA v2 1349 — clearly above mid-tier and among the best Flash-class agentic tool stacks; capped below 88+ because GDPval trails Claude 1800+ and Tau3/Claw rows are missing.
- **Reasoning: 87/100.** GPQA 90.4% hits the frontier-adjacent band and ARC-AGI-2 72.1% is strong (below 3.1 Pro's 77.1); discounted from 90+ due to no HLE row for this ID and AA Index 33 (v4.3.2 refresh — see Fresh-source note), mid-band absolute; the GPQA/ARC rows carry the frontier-adjacent claim.
- **Context window: 93/100.** 1,048,576-token window qualifies for the ≥1M tier; no MRCR/RULER ≥98% retrieval proof for 3.5 gen (explicitly unpublished); AA-LCR 74.3% medium (BenchLeader 2026-10-06) is decent but well short of the 98% bar → held at 93.
- **Multimodal: 95/100.** Full text/image/audio/video/PDF in with MMMU-Pro **84.2%** — HokAI/AA call it the highest multimodal reasoning score AA had recorded at launch; text+tool-calls out only prevents 100, but audio/video/PDF input puts it in the top methodology band (75–90+) with a peak-quality bump to 95.
- **Coding: 85/100.** SWE-V 78%, SWE-Pro 55.1%, TB2.1 76.2% is excellent Flash-tier coding (beats Gemini 3.1 Pro on some real-world rows per HokAI); capped below 88 because DeepSWE 37% is well behind frontier (~70) and no LiveCodeBench/SciCode rows for this ID.
- **Cost efficiency: 80/100.** $1.50/$9.00 with $0.15 cached input (90% cache discount) — cheaper than Opus/Fable/GPT-5.4 output and reasonable for a multimodal agentic Flash; above the $0.50/$3 Flash Preview tier and well under $3/$15, so ~80 not 92+.
- **Overall Score: 89/100.** Mean of the five quality dims: (84 + 87 + 93 + 95 + 85) / 5 = 88.8 → 89. Best-fit: production default for MCP-heavy multimodal agents and video/PDF pipelines that need GPQA ~90 and SWE ~78 without Pro-tier bills.

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (DeepMind Gemini 3.5 Flash model card, Google AI what's-new FAQ, HokAI/DataLearner/modelpricewatch/AA release aggregations); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 63.1 #66/750 medium, AA 33.6 #93 confirming the 33 refresh, LiveBench 74.6, AA-LCR 61.3–74.3 + MLCR 18.3 filling the long-context gap, MMMU-Pro 84.3 #20, IFBench 76.3) — scores unchanged: (84+87+93+95+85)/5 = 88.8 → 89. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
