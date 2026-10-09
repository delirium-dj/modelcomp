# Gemini 3.5 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** First model of the Gemini 3.5 family (Google I/O 2026, released 2026-05-19) — built on the Gemini 3 Flash reasoning foundation, pitched as "frontier intelligence at Flash speed": the strongest agentic/coding Flash yet, beating Gemini 3.1 Pro on TB2.1, MCP-Atlas, FinanceAgent and GDPval-AA, top-right of the AA Intelligence vs Speed Pareto frontier (Index 55 at launch, 280 tok/s). GA-stable since Sep 2026; default thinking effort changed high→medium. Default model in the Gemini app and AI Mode in Search.
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI (non-global $1.65/$9.90), Google Antigravity, Android Studio, Gemini Enterprise; free tier available; OpenRouter/second-party routes ($2.70/$16.20 premium tier rows on BenchLeader).
- **Release / knowledge:** released 2026-05-19; knowledge cutoff **January 2026** per launch coverage (the developer FAQ still lists Jan 2025 — flagged as likely stale).
- **IDs:** `google/gemini-3.5-flash` (gateway routes) / `gemini-3.5-flash` (native, internal `3.5-flash-05-2026`; preview was `gemini-3-flash-preview`).
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, images, video, audio, PDF in; text out; reasoning yes (dynamic thinking on by default; effort minimal/low/medium/high — low improved for code/agent tasks); tool calls yes (function calling, structured outputs, code execution, file search, search grounding, URL context, **Computer Use Preview**); no image/audio generation.
- **Pricing (as of 2026-10-07):** **$1.50 in / $9.00 out** per 1M, cached input **$0.15** (90% discount); Batch/Flex/Priority options. AA measured run cost $1,552 for its full index (5.5× Gemini 3 Flash) due to heavier agentic token usage. Free tier. Paid.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Google-run unless noted):

- MCP-Atlas: **83.6** (vs Opus 4.7 79.1, GPT-5.5 75.3 — clear lead). OSWorld-Verified: **78.4** (near GPT-5.5 78.7). Finance Agent v2: **57.9** (#1 in Google's table). Terminal-Bench 2.1: **76.2** (vs GPT-5.5 78.2, 3.1 Pro 70.3 — second).
- GDPval-AA: **1656** Elo (3.1 Pro 1314 — big jump; still under the 1750+ frontier ref, between Sonnet 4.6's 1676 and 3.1 Pro's 1314).
- Toolathlon: 56.5 (vs GPT-5.5 55.6 — middling absolute). AutomationBench-AA: **42.6** (AA independent, guardrail-aware).
- Tau3 / Claw-Eval / ExploitBench: no verified public score found.

Reasoning / knowledge (Google-run unless noted):

- HLE (full set text+MM): **40.2** (just clears the 40%+ ref; 3.1 Pro 44.4, Opus 4.7 46.9 above). No GPQA Diamond row published.
- ARC-AGI-2: **72.1** (vs GPT-5.5 84.6 — mid-high). LiveBench 2026-06-25: **74.6** (benchmark-owner run).
- AA Intelligence Index: **55** at launch (up 9 from Gemini 3 Flash; BenchLeader's own index rates medium effort 63.1, #68 of 758 — its scale differs). Both readings are under the 60+ ref.

Coding (Google-run unless noted):

- Terminal-Bench 2.1: **76.2** (below the 88% ref). SWE-bench Pro (Public): **55.1** (vs 3.1 Pro 54.2, Opus 4.7 64.3).
- DeepSWE 1.1: **37.0 ±2** (DataCurve/AA harness, medium effort — far under the 74% frontier ref; long-horizon weakness at default effort).
- BenchLeader category coding: 57 (their index, lowest category for this model). SWE-bench Verified / Codeforces / AA Coding Index: no verified public score found.

Long context:

- MRCR v2 (8-needle): **77.3% at 128K**, **26.6% at 1M pointwise** (Google; 3.1 Pro 84.9/26.3) — retrieval is real at 128K but falls off hard at 1M.
- AA-LCR (medium): **74.3** (#150); MLCR: 18.3. Window capacity 1M, retrieval well short of the ≥98% condition.

Multimodal (Google-run unless noted):

- CharXiv Reasoning: **84.2** (#1 in Google's table, edges GPT-5.5 84.1). MMMU-Pro: **83.6** (no tools; beats 3.1 Pro 80.5, GPT-5.5 81.2). Blueprint-Bench 2: 33.6. LMArena Documents: 1461 (#25).

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP-Atlas 83.6 and OSWorld 78.4/FinanceAgent 57.9 are board-topping rows, but GDPval 1656 misses the 1750 ref, TB2.1 76.2 and Toolathlon 56.5 are mid, and AA AutomationBench 42.6 is mid-pack.
- **Reasoning: 85/100.** HLE 40.2 barely clears the 40% ref, ARC-AGI-2 72.1 and LiveBench 74.6 are strong; no GPQA row and AA Index 55 (both scales under 60+) hold it at 85.
- **Context window: 95/100.** 1M capacity = ≥1M tier floor; MRCR 77.3/26.6 and AA-LCR 74.3 show the retrieval story is the weak face of the model → floor.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in (upper band, 75–90); CharXiv 84.2 #1 and MMMU-Pro 83.6 lead the table, Blueprint mid; text-only output and no audio/image generation keep it under 90.
- **Coding: 78/100.** TB2.1 76.2 and SWE-Pro 55.1 beat or match 3.1 Pro but trail the frontier refs (88/…); DeepSWE 37.0 at default effort is a clear long-horizon deficit; no SWE-Verified row.
- **Cost efficiency: 78/100.** $1.50/$9.00 sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (≈75), lifted to 78 by the 90%-off cache, free tier, and batch/flex options — offset by AA's finding that real agentic runs cost 5.5× a Gemini 3 Flash run.
- **Overall Score: 86/100.** (84+85+95+88+78)/5 = 86.0 → 86 — the speed-intelligence Pareto pick: frontier-class agentic/multimodal scores at Flash latency and sub-Pro pricing, with deep 1M retrieval and default-effort long-horizon coding as the honest drags.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (DeepMind model card, Google blog, AI for Developers, Artificial Analysis, BenchLeader, LLM Stats, Writingmate); scores are normalized 1–100 interpretations, not official vendor scores.
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

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

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

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`.

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

