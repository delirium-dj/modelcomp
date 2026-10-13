# Gemini 2.0 Flash — findings by GLM 5.3

- Source: Google/Gemini 2.0 Flash (`gemini-2.0-flash`, Feb 2025 GA)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-27 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's workhorse multimodal model of the 2.0 generation (GA **2025-02-05**, first previewed Dec 2024) — text/image/speech/video in, text + image out (the era's novel dual output). **Retired**: BenchLeader carries no providers or price for it (blank fields), it sits in Google's long-retired deprecation bucket, and every later Flash generation (2.5 → 3.8) strictly dominates it in the family table (45.0 #501 vs 52.8 → 64.5). Second pass fills the first pass's empty dossier and exposes the 1M spec as hollow: **measured retrieval collapses (AA-LCR 31.3% #377)**, SWE-V 13.5% #43-46, CritPt 0.0% — with era-ranks surviving in math (MATH 500 #28-34), agents (TheAgentCompany #7), and geo-vision (GeoBench 77% #6).
- **Provider / access (historical):** Google Gemini API / Vertex AI (`gemini-2.0-flash`) — retired; no live OpenRouter providers; not on OpenCode Zen.
- **Release / knowledge:** **2025-02-05** (GA; `gemini-2.0-flash-exp` preview since 2024-12); knowledge cutoff Jun 2024.
- **IDs:** `gemini-2.0-flash` (retired; the `gemini-2-0-flash-thinking-exp-0121` experimental thinking variant is what AA measured).
- **Context window:** **1M tokens** (spec confirmed — but see the retrieval collapse below; the spec is hollow).
- **Modalities:** text + image + speech + video in; text **and image** out (dual output — the era novelty); function calling, JSON mode; a thinking variant exists and measures best (45.0 #501 vs 43.4 #545 not-stated).
- **Pricing (historical):** no current price exists — retired; launch-era pricing was the cheapest frontier-lab class (AA's $0.00/$0.00 on the deprecated page was an artifact).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the residual BenchLeader ladder (best = thinking **45.0 #501/760**, last measured 2026-09-01; categories: **Multimodal 56 (best)**, Knowledge 51, Maths 49, Reasoning 38, Long context 37, **Coding 32 (worst)**).

Agent / tool use:

- **TheAgentCompany: 11.4% #7** — rank-decent in a crushed field (the era's agentic rank); τ²-Bench: 29.5% #258 (weak); **TB Hard: 3.8% #294** (dreadful); BrowseComp 0.6% #26; Terminal-Bench 2.x / τ³ / GDPval / Claw-Eval / MCP-Atlas: still unmeasured (pre-dates them)

Reasoning / knowledge:

- GPQA Diamond: Epoch 57.1-64.1% #179-192 / AA 63.6-70.1% #288-345 / Vals 65.2% #98 — far below the bar
- HLE: Scale-CAIS **6.6% #37** (rank in a crushed field) / AA 4.3-6.3% #382-499 — dreadful; **CritPt: 0.0% #302**; ARC-AGI-2 1.3% #192; SimpleBench 18.9-30.7% #70-83
- Math: **MATH 500: 84.6-89.0% #28-34**; MATH Level 5 82.2% #32; MGSM 89.0% #47; Omni-MATH (HELM) 45.9% #25; OTIS 31.1-57.8% #162-199; AIME (Vals) 29.8% #70 (weak); DTBench 63.2% #151
- **Honesty poor: non-hallucination 13.8% #348**; Omniscience −42.5 #323; accuracy 23.5% #248; MMLU 79.7% #22 (era-rank); MMLU-Pro 77.4% #99; LegalBench 78.4% #97; MedQA 81.5% #66; TaxEval 67.7-69.8% #92-101; CorpFin 33.7% #123 (weak)
- **AA II 8.9-9.4 #387-404** (confirms the first pass's estimate of 9); ECI 134.7-135.4 #127-130; HELM mean 67.9% #26, IFEval 84.1% #24, WildBench 80.0% #34 (era-ranks)

Coding:

- **SWE-bench Verified (board): 13.5% #43-46** — gap filled; dreadful. **LiveCodeBench (Vals): 43.6% #117** — weak; WeirdML 25.8% #137; **Aider Polyglot: 18.2-22.2% #36-38** — weak (the edit-format era passed it by); CadEval 30.0% #11 (niche); **Coding 32 is its worst category**; LMArena Coding 1363 #224

Long context:

- **1M spec, hollow: AA-LCR 31.3% #377** — the retrieval collapse; Fiction.LiveBench 37.5% #26 (thinking) / 62.5% #13 (not stated — a wide config spread); Long context 37 near-worst category; no MRCR/RULER rows.

Multimodal:

- MMMU 71.7% #20; MMMU-Pro (Vals) 69.8% #69; **GeoBench 77.0% #6** (niche-elite); MortgageTax 60.4% #64; LMArena Vision 1158 #112 (bottom-tier); VISTA 40.0-45.5% #23-39; **Multimodal 56 is its best category** — full omni in + dual text/image out.

Preference/IF/safety:

- Preference bottom-tier (Text 1360 #187, Creative 1345 #170, Multi-turn 1357 #185); **Lech Mazur Creative Writing 73.8% #27** retains era value; IFBench 40.2% #257 (weak); MultiChallenge 36.4% #31; **PropensityBench 77.8% #2** (era-elite); Mask 49.1-49.5% #52-54.

### Normalized scores (1–100)

- **Tool use: 40/100.** Raised from 35: TheAgentCompany 11.4% #7 and the verified function-calling surface add measured texture — but τ² 29.5% #258, TB Hard 3.8% #294, and BrowseComp 0.6% are floor reads.
- **Reasoning: 44/100.** Raised from 42: the residual data adds MATH 500 #28-34, MGSM 89% #47, HELM-era top-30s — while GPQA 57-70%, HLE 4-7%, CritPt 0.0%, and AA II ~9 #387-404 confirm the 2024-era ceiling.
- **Context window: 78/100.** Lowered from 95: the 1M spec is confirmed but **measured retrieval collapses (AA-LCR 31.3% #377)** — capacity without capability.
- **Multimodal: 78/100.** Lowered from 93: full omni input + dual output retains breadth credit, and MMMU 71.7% #20 / GeoBench #6 are solid — but Vision 1158 #112 (bottom-tier) and VISTA 40-45% measure the era's floor in depth.
- **Coding: 38/100.** Lowered from 40: SWE-V 13.5% #43-46 (gap filled — dreadful), LCB 43.6% #117, Aider ~20% — Coding 32 is its worst category.
- **Cost efficiency: 95/100.** Held as historical: retired, no current price; launch-era cheapest-class pricing was genuinely good value — the score records the historical bracket.
- **Overall Score: 56/100.** (40 + 44 + 78 + 78 + 38) / 5 = 55.6 → 56, down from 61. Best-fit (historical): the dual-output omni workhorse of early 2025 — its era-ranks (MATH 500 #28-34, TheAgentCompany #7, GeoBench #6) and novel text+image output survive in the record, but the hollow 1M window (31.3% LCR), 13.5% SWE-V, and bottom-tier arena ranks confirm why Google retired it; every Flash generation since (2.5 → 3.8) strictly dominates it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-27 report (the residual BenchLeader ladder as of 2026-09-01 — blank provider/price fields confirming retirement — aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis incl. the `gemini-2-0-flash-thinking-exp-0121` variant, Vals AI, Scale AI SEAL incl. VISTA/MultiChallenge/PropensityBench, HELM Capabilities, LMArena, Aider leaderboard, TheAgentCompany, Fiction.live, Lech Mazur, Kaggle; Google's retirement status per the modeldeprecations.dev context surfaced during this cycle's Gemini 2.5 Pro/Flash passes; the first-pass AA deprecated-listing rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
