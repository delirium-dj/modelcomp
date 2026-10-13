# Grok 4.20 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4.20
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's 2026 large-context workhorse — native reasoning tokens (configurable `thinking_budget`), agentic tool calling, and single-agent (SA) / multi-agent (MA) deployment modes; positioned for X-firehose data and large-repository ingestion.
- **Provider / access:** xAI — consumer web/mobile (X Premium+), xAI API (OpenAI-compatible endpoints), enterprise contracts. Model IDs: `grok-4.20-0309-reasoning` and `grok-4.20-0309-non-reasoning` (aliases include `grok-4.20`, `grok-4.20-reasoning-latest`, `grok-4.20-beta`, `grok-4.20-multi-agent-0309`). Function calling: yes.
- **Release / knowledge:** Beta 2026-02-17, GA 2026-03-10 (ARMES); system card dated 2026-04-07. Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/grok-4.20` (repo meta.json); `grok-4.20-0309-reasoning` (official API ID).
- **Context window:** 1,000,000 tokens (official xAI docs); max output 30K (API) / 131K (playground) per ARMES. Third parties (ARMES, digitalapplied) claim a 2M-token window with >95% needle-in-a-haystack retrieval at all positions — not confirmed by official docs.
- **Modalities:** Text, image in; text out (official docs). Reasoning tokens native to the base model.
- **Pricing (as of 2026-10):** $1.25 input / $2.50 output per 1M tokens (<200K prompt); $2.50/$5.00 for requests reaching ≥200K (whole request repriced); cached input $0.20/$0.40; Batch API 20% discount; context-caching API (24h TTL). (digitalapplied's "$3/$15" table conflicts with official docs — official docs win.)
- **Architecture:** proprietary; not published in captured sources.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **64.4%** (ARMES).
- Terminal-Bench Hard: **31.0%** (ARMES).
- CyBench (unguided CTF success rate): **53%** single-agent (official system card, 2026-04-07) vs Grok 4's 43% — "does not exceed the current frontier" per xAI.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found.
- Second-pass agentic rows (2026-10-12): τ²-Bench Telecom (AA measured run, 2026-09-13): **93.0%** (#47/436 — vs ARMES's 64.4% and designforonline's 59.9%, a 33-point spread); τ-bench: **78.9** (LLMReference, observed 2026-05-13); Terminal-Bench 2.1: **44.2%** (BenchmarkList, rank 88/194, 55th pct) / **42.1%** (AA run, benchgap est ±4.4, medium conf); Terminal-Bench 2.0: **40.4%** (BenchmarkList, rank 34/68) vs 57.3% (AIIQ component — conflict); Terminal-Bench 4.0: **0.0%** (benchgap est ±14.0, low conf — severe); MCP Atlas: **43.5%** (benchgap est ±14.8, low conf); GDPval-AA: **15.6%** (benchgap est ±8.8, medium conf); CursorBench 4.0: **29.2%** (benchgap est ±3.6, medium conf); TaxBench: **12.2%** mean pass^5 (rank 11/16 — severe; Tax Knowledge pass@1 77.5%); ConsumerSimBench: **44.9%** (rank 3/13); Gert Labs: **38.36%** (BenchLM, vs Grok 4.3's 43.86%); Alpha Arena Season 1.5: **#1 overall** as the anonymous "Mystery Model" (+12.11% avg returns over two weeks, peak +50%, $11,060 from $10,000 — a live-trading showcase, not a standardized benchmark). Multi-agent variant: `grok-4.20-multi-agent` orchestrates 4 or 16 agents with built-in web_search/x_search/code_execution/collections_search and remote MCP tools (no client-side function calling).

Reasoning / knowledge:

- GPQA Diamond: **82.7%** (ARMES).
- AIME 2025: **90.2%** (ARMES). MATH-500: **87.3%** (digitalapplied).
- HLE: **22.8–30.0%** (ARMES range); system card reports HLE RMS calibration error 0.19 (overconfidence axis).
- MMLU-Pro: **83.7%** (ARMES). IFBench: **72.6%** (ARMES).
- TruthfulQA: **92.7%** and SimpleQA: **88.3%** (digitalapplied; vs GPT-5 Standard 89.4%/84.7%, Claude Sonnet 4.6 91.1%/85.9%, Gemini 3 Flash 86.8%/81.2%) — vendor-adjacent source, "lowest hallucination rate" claim.
- Second-pass reasoning rows (2026-10-12): GPQA Diamond — **88.5%** (measured, modelscale/benchgap) / **88.64%±1.59** (Vals, #6) / **88.7%** (benchgap AA-GPQA est) / **88.9%** (HokAI, vendor) / **88.6%** (BenchmarkList, rank 26/117) / 91.0–91.1% (BenchmarkList/AIIQ component tables) vs the file's 82.7% (ARMES) and 77.6% (designforonline) — the independent cluster is 88.5–88.9%, with ARMES the low outlier; AIME 2025 — **96.46%** (Vals, #5) / 95% (HokAI, vendor; 16-agent Heavy mode reportedly perfect) / 96.5% (AIIQ component) vs 90.2% (ARMES); MMLU-Pro — **86.3%** (Vals/BenchmarkList, rank 35/116) / 86.6% (HokAI, vendor) vs 83.7% (ARMES); HLE — **30.2%** (official, evals.report) / **31.6%** (modelscale) / **32.0%** (AIIQ) / **32.2%** (LLMReference) / **34.5%** (BenchmarkList rank 61/478; AA measured run #120/655) vs 22.8–30.0% (ARMES) and 24.2% (designforonline); benchgap estimates run higher (AA-HLE 40.7%±2.6 medium conf; HLE 44.8%±5.5 low conf) — kept as conflicts; IFBench — 72.6% (ARMES) vs **82.9%** (HokAI, vendor) vs 49.3% (designforonline) — a 33-point spread, kept; ARC-AGI-2 — **65.1%** (ARC Prize Foundation, #66/254; BenchmarkList 87th pct) vs 53.3% (LLMReference) vs 55% (CAIS) — strong abstract reasoning; ARC-AGI-3 — **0.1%** (#81/87 — a severe cap on the successor benchmark); AA Intelligence Index v4.3.2 — **26** (estimated; Rank.ai 25.7 #34/111, modelgrep 25.7 #62, VectorWire 25.22, benchgap 26.9±5.1; non-reasoning variant 14) vs BenchmarkList's 37 (rank 72/427 — likely an older index version); CritPt — **7.8%** (benchgap est ±4.8, high conf — weak); MathConstraint — **58.1%** (rank 2/12 — strong); ProofBench 14.0% and TextQuests 18.48 (AIIQ/CAIS components); AIIQ Composite IQ 123 (rank 34/147); CAIS Text Capabilities Index 32.5 (rank 14/41); SimpleBench / AA-Omniscience: no row found.
- WMDP Bio **91%** / Chem **90%** / Cyber **91%**, VCT **54%**, ProtocolQA **79%**, FigQA **66%**, CloningScenarios **67%**, MakeMeSay **8%** (official system card, pre-mitigation, SA mode).

Coding:

- SWE-bench Verified: **78.0%** (ARMES) / **78.4%** (digitalapplied).
- HumanEval: **94.1%** pass@1 (digitalapplied — near-saturated, low discriminative value).
- SciCode: **42.0%** (ARMES).
- LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found.
- Second-pass coding rows (2026-10-12): LiveCodeBench — **84.27%±1.03** (Vals, rank 40/143) / **84.3%** (BenchmarkList, rank 32/123, 75th pct) — a strong anchor; LiveCodeBench Pro **74.2%** (Meta Muse Spark chart); LiveBench Coding **58.5** (SWEN.AI); SWE-bench Verified — **72.20%±2.01** (Vals, rank 56/88) / **76.7%** (modelscale/LLMReference rank 34/92/BenchLM Meta chart) / **75%** (HokAI, vendor, rank 20/32) / 78.0% (ARMES) / 78.4% (digitalapplied) — independent cluster 72.2–76.7%, mid ~75%, clearing the 74% DeepSWE frontier anchor; Vals' own summary cites 74.20% (#9); SWE-bench Pro — **51.8%** (modelscale/BenchLM, 1,865 repository problems — mid); DeepSWE — **56.3%** (benchgap est ±7.2, low conf — mid); SciCode — 42.0% (ARMES) / **45.6%** (BenchmarkList, rank 72/296) / 46.0% (SWEN.AI) / **46.1%** (AA-SciCode, benchgap est ±3.8, high conf) — mid ~44–46; ALE-Bench — **1150.28** (rank 16/83, 82nd pct — strong); Vibe Code Bench v1.1 — **4.06–4.1%** (Vals/BenchmarkList, rank 66/75 — a severe cap); IOI 30.2% (rank 18/58); SAKE 93.3% (rank 7/11 — software architectural knowledge); BLXBench 79.1% (rank 6/25); HumanEval 94.1% (near-saturated). modelscale category scores: Coding 44.3, Agentic 32.9. SwarmAgent/OpenRouter lists 58.5% SWE-bench / 54.2% LiveCodeBench / 1375 Elo — an outlier cluster inconsistent with every other source, kept as a low-quality conflict.

Long context:

- No MRCR/RULER/GraphWalks score found; third-party claim of >95% needle retrieval across the full (2M) window is unverified by official docs.
- Second-pass long-context rows (2026-10-12): MRCR 8-needle, 131K–262K chars (publicus-ai cibench, n=10, strict SequenceMatcher + prefix gating, 2026-04-21): **0.443** — mid-pack, below GPT-5.4 (0.632), GLM-5 (0.727), Sonnet 4.6 (0.926) and Opus 4.6 (0.947); the independent multi-needle read does not support the vendor's ">95% needle at all positions" claim; AA-LCR: **17.3%** (designforonline, AA-sourced — weak); Context Arena: **28.8%** (rank 31/35) and **14.5%** (rank 46/51) (BenchmarkList — weak); the 2M window itself is now multi-source corroborated (AA lists 2M ~3,000 A4 pages; also BenchLM, HokAI, modelscale, ARMES, digitalapplied, designforonline) though still absent from official xAI docs (1M); max output tokens listed as 2M in Vals' hyperparameter table (likely a data quirk).

Multimodal:

- FigQA **66%** (scientific figure interpretation, official system card); no MMMU/MMMU-Pro score found.
- Second-pass multimodal rows (2026-10-12): MMMU-Pro — **83.5%** (BenchmarkList, rank 25/79, 69th pct; Vals 83.47%, #9 — the first strong vision-suite row); CAIS Vision Capabilities Index **54.6** (rank 23/43: ART 84.59, MindCube 67.7, IntPhys2 62.65, ERQA 59.08, SpatialViz 45.59, EnigmaEval 7.69); Vals Multimodal Index **39.1%** (rank 28/29 — a severe cap); BenchLM multimodal & grounded category **53.4** (vs Grok 4.3's 78.8); HieroglyphBench 16.8% (rank 11/16); vision Arena Elo 1279 (openlm).

Safety/alignment caveats (official system card + ARMES): broadly lower cooperation with misuse than Grok 4.1; high ODCV-Bench misalignment (62.8%) under KPI pressure; "brittle safety" refusals, defensive/adversarial loops in long sessions, occasional agent-sync failures; ARMES does not recommend it for unsupervised autonomous agents.

### Normalized scores (1–100)

- **Tool use: 67/100.** τ²-Bench Telecom now spans 59.9–93.0% (AA's own measured run: 93.0%, #47/436 — the strongest independent tool row; ARMES 64.4%, designforonline 59.9%), CyBench 53% (official SA) and ConsumerSimBench 44.9% (rank 3/13) are mid-tier-good, Terminal-Bench 2.1 ~42–44% is mid; the caps are Terminal-Bench Hard 16.7–38%, MCP Atlas 43.5% (est), GDPval-AA 15.6% (est), CursorBench 29.2% (est) and TaxBench 12.2% (rank 11/16). Revised 65→67 on the AA τ²-Telecom 93.0% measured fill and TB 2.1 evidence; no τ³-Banking row exists.
- **Reasoning: 74/100.** The independent cluster is stronger than the first pass captured: GPQA 88.5–88.9% (Vals measured 88.64±1.59 — ARMES's 82.7% is the low outlier), AIME 2025 96.46% (Vals #5; 90.2% ARMES), MMLU-Pro 86.3% (rank 35/116), ARC-AGI-2 65.1% (ARC Prize #66/254) and MathConstraint 58.1% (rank 2/12) are frontier-adjacent; the caps are HLE ~30–34.5% (still under the 40% anchor), CritPt 7.8% (est), ProofBench 14.0%, AA Intelligence Index 26 (v4.3.2 est) and ARC-AGI-3 0.1% (#81/87). IFBench conflicts (49.3–82.9%). Revised 70→74 on the GPQA/AIME/MMLU-Pro/ARC-AGI-2 fills.
- **Context window: 94/100.** 1M tokens is confirmed by official docs (≥1M anchor) and the 2M claim is now multi-source corroborated (AA lists 2M; BenchLM/HokAI/modelscale/ARMES/digitalapplied agree), but the only independent multi-needle measurement — MRCR 8-needle 0.443 at 131K–262K (publicus-ai, n=10) — is mid-pack (below GPT-5.4, GLM-5, Sonnet 4.6), and AA-LCR 17.3% / Context Arena 14.5–28.8% are weak; the vendor's ">95% needle at all positions" claim is not supported. Revised 95→94 on the retrieval-quality evidence (window size stays top-tier).
- **Multimodal: 70/100.** Text+image input; MMMU-Pro 83.5% (rank 25/79; Vals #9) is a strong vision-suite row that clears the >70 bar, with CAIS Vision Index 54.6 (rank 23/43) mid; the caps are Vals Multimodal Index 39.1% (rank 28/29), BenchLM multimodal 53.4 and FigQA 66%. Revised 65→70 on the MMMU-Pro fill.
- **Coding: 74/100.** LiveCodeBench 84.3% (Vals 84.27±1.03, rank 40/143) and ALE-Bench 1150 (rank 16/83) are strong anchors, and the SWE-bench Verified independent cluster (72.2–76.7%, mid ~75%) clears the 74% DeepSWE frontier anchor; the caps are Vibe Code Bench 4.1% (severe), SciCode 42.0–46.1%, LiveBench Coding 58.5, CursorBench 29.2% (est) and DeepSWE 56.3% (est). Revised 72→74 on the LiveCodeBench/SWE-bench-Pro/ALE-Bench fills.
- **Cost efficiency: 89/100.** $1.25/$2.50 per 1M (<200K) is among the cheapest frontier-tier prices; rates double at ≥200K, with $0.20 cached input and a 20% Batch discount.
- **Overall Score: 75.8/100.** Mean of the five quality dimensions (67+74+94+70+74)/5 = 75.8; a fast, cheap, huge-context model whose math/science cluster (GPQA 88.6%, AIME 96.5%) and LiveCodeBench 84.3% are frontier-adjacent, while HLE ~32%, CritPt 7.8%, Vibe Code 4.1% and mid-pack MRCR retrieval keep it below the top tier; alignment caveat under KPI pressure stands (ODCV-Bench 62.8%). Revised from 73.4.

---

## Update 2026-10-12 (deep second pass, 6 independent searches)

- **Score changes:** Tool 65→67 (AA τ²-Telecom 93.0% measured fill; TB 2.1 ~42–44% mid; TaxBench 12.2% cap), Reasoning 70→74 (GPQA 88.5–88.9% cluster, AIME 96.46%, MMLU-Pro 86.3%, ARC-AGI-2 65.1%), Context 95→94 (MRCR 8-needle 0.443 mid-pack contradicts the >95% needle claim; 2M window multi-source corroborated), Multimodal 65→70 (MMMU-Pro 83.5% — first strong vision row), Coding 72→74 (LiveCodeBench 84.3%, SWE-bench cluster mid ~75%, ALE-Bench 1150). Cost 89 stands; Overall 73.4→75.8.
- **Key fills:** AA measured runs (ModelCap, 2026-09-13): τ²-Bench Telecom 93.0% (#47/436), HLE 34.5% (#120/655); AA Intelligence Index v4.3.2: 26 est (non-reasoning 14); Vals: GPQA 88.64±1.59 (#6), AIME 96.46% (#5), MMMU-Pro 83.47% (#9), LiveCodeBench 84.27±1.03, SWE-bench 72.20±2.01, Vals Index 39.50±0.77 (#13); benchgap (23 measured/74 estimated): AA-GPQA 88.7%, CritPt 7.8%, AA-SciCode 46.1%, GDPval-AA 15.6%, MCP Atlas 43.5%, DeepSWE 56.3%, TB 2.1 42.1%, TB 4.0 0.0%, CursorBench 29.2%; ARC Prize: ARC-AGI-2 65.1% (#66/254), ARC-AGI-3 0.1% (#81/87); LMArena (2026-10-08): text 1472–1475 (#37–45/414), coding 1511 (#57/409); long context: MRCR 8-needle 0.443 (publicus-ai, n=10), AA-LCR 17.3%, Context Arena 14.5–28.8%; SWE-bench Pro 51.8%, LiveCodeBench Pro 74.2%, ALE-Bench 1150 (rank 16/83), SAKE 93.3%, BLXBench 79.1%.
- **Conflicts kept:** τ²-Telecom 59.9/64.4/93.0%; SWE-bench Verified 72.2/74.2/75/76.7/78.0/78.4% (plus SwarmAgent's outlier 58.5%); HLE 22.8–34.5% measured vs 40.7–44.8% estimated; IFBench 49.3/72.6/82.9%; GPQA 77.6/82.7 vs 88.5–88.9/91.0–91.1; TB 2.0 40.4 vs 57.3; AA Index 26 (v4.3.2) vs 37 (BenchmarkList, older version).
- **Rankings (Oct 2026):** Rank.ai #19/122 (consensus 69); ModelCap #39/492 (Index 78.5); BenchLM #59/891 (56.71, partial coverage); AA #117/218 (Index 26 est); Vals Index #13; LMArena text #37–45/414, coding #57/409; AIIQ IQ 123 (#34/147); CAIS Text Capabilities #14/41, CAIS Risk #12/54.
- **Naming note:** "Grok 4.2" (beta name, 2026-02-17) and "Grok 4.20" (GA name, 2026-03-10) are the same lineage — matching launch date, pricing and benchmark clusters; beta-phase sources (theairankings, computertech, isitgoodai) report only launch claims (SWE-bench ~75%, ARC-AGI 15.9%, 256K context — the 256K figure conflicts with the 1M/2M consensus and is kept as a beta-phase claim).
- **Status/multi-agent:** `grok-4.20-multi-agent` runs 4- or 16-agent research setups with built-in tools and remote MCP (no client-side function calling); reasoning effort low/medium/high/xhigh.
- **Still open:** a τ³-Banking row; an AA-LCR v1.1 measured row (designforonline's 17.3% is the only read); MRCR at 524K–1M (Grok 4.20 absent from the published wide-bin table); AA-Omniscience and SimpleBench rows; MCP-Atlas on the current protocol (only a low-confidence 43.5% estimate exists).
- **Safety (unchanged):** ODCV-Bench misalignment 62.8% under KPI pressure; CAIS Risk Index 44.5 (rank 12/54; components: Machiavelli 83.78, HLE miscalibration 45.76, VCT refusal 42.25, MASK 41, TextQuests Harm 9.88); MASK dishonesty 0.43, sycophancy 0.07–0.36 (system card); ARMES does not recommend unsupervised autonomous use.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-12)
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
