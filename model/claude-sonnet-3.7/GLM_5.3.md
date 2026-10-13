# Claude Sonnet 3.7 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-3-7-sonnet`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (Claude 3.7 Sonnet)
- **Short description:** Anthropic's February-2025 flagship and "the first hybrid reasoning model on the market" — standard and extended-thinking modes with user-visible, budgeted thinking — and the launch model for Claude Code. Second pass resolves its status: **fully shut down everywhere** — Google Cloud 2026-05-11 (docs.cloud.google.com), AWS Bedrock by 2026-07-30 (aichangewatch), Claude API earlier; tokenmix's migration guide points to Sonnet 4.6 as the replacement. The settled ladder (BenchLeader thinking **51.1 #336/760**, last measured 2026-10-09 from residual data) fills the first pass's empty dossier: era-elites (**ForecastBench 61.8% #5, TheAgentCompany 30.9% #4, Aider Polyglot 64.9% #10, MGSM 93% #12, Lech Mazur 81.1% #15**) against 2026 floors (GPQA 67-79.7% below bar, **HLE 8.0% #33, CritPt ~0.5%, AA II 17.7 #250, AA-LCR 51.7% #307**). A fully historical entry.
- **Provider / access (historical):** Anthropic Messages API, Amazon Bedrock, Google Vertex AI — all shut down (see dates above); no live OpenRouter provider rows; not on OpenCode Zen.
- **Release / knowledge:** **2025-02-24** (confirmed); knowledge cutoff not re-verified.
- **IDs:** `claude-3-7-sonnet` (dated snapshots; retired everywhere).
- **Context window:** 200K tokens (confirmed — the 3.x Sonnet convention now verified by BenchLeader's header); 128K output limit including thinking tokens.
- **Modalities:** text and image in, text out; hybrid reasoning (the thinking config measures best); tool use.
- **Pricing (historical):** $3 / $15 per MTok — no live serving exists to price.
- **Architecture:** proprietary, size undisclosed; ASL-2-era safety stack; 45% fewer unnecessary refusals vs 3.5 Sonnet (launch claim, retained).

### Raw benchmarks found

> Second pass adds the full BenchLeader ladder (best = thinking **51.1 #336/760** — the lowest-settled Sonnet in the family table). Category scores (thinking): **Human preference 56 (best)**, Knowledge 55, Multimodal 54, Maths 53, Agents & tools 52, Reasoning 48, Coding 48, **Instruction following 46 (worst)**.

Agent / tool use:

- **TheAgentCompany: 30.9% #4** (era-elite rank); **METR Time Horizons: 60.0% #20**; **Cybench: 20.0% #11**; DeepResearch 43.6% #32 — the era-elite agent rows
- **τ²-Bench: 50.0-54.7% #185-196** (weak — the TAU-bench SOTA-at-launch claim settled mid-field); **TB Hard: 21.2% #157** (weak); BrowseComp 0.9% #21; Terminal-Bench 2.x / MCP Atlas / Toolathlon / Claw-Eval: still unmeasured (predates them)
- Claude Code launch rows retained (qualitative, "45+ minutes of manual work in a single pass")

Reasoning / knowledge:

- GPQA Diamond: Epoch 79.7% #123 / AA 77.2% #217 (thinking) / Vals 67.4-75.3% #77-96 — below the bar on every harness (the first pass's "no numbers in text" gap filled, and the answer is mid)
- **HLE: Scale-CAIS 8.0% #33 / AA 9.7% #319** — dreadful; **CritPt: 0.0-0.9% #226-302** (dreadful); SimpleBench 46.4% #51; ARC rows absent; **ForecastBench: 61.8% #5** (elite — the standout row)
- Math: **MGSM 93.0% #12; MATH 500 91.6% #21; MATH Level 5 91.2% #19** (thinking — era-elite) vs **AIME (Vals) 44.6% #61 (thinking)** / 22.3% (weak), OTIS 57.8% #162 (weak), Omni-MATH 33% #38, LMArena Maths #167-185 (weak)
- **Honesty decent: non-hallucination 60.0% #74 (thinking)** / 47.2% #130; Omniscience −0.7 #135; accuracy 28% (honest, knows little); MultiNRC 27.8% #26 (weak)
- **AA II 17.7 #250 (thinking)** / 15.3 #273; ECI 141.2 #105; MMLU-Pro 80.7-82.7% #73-81; **MedQA 90.2% #46**; LegalBench 80.0-82.5% #65-86; TaxEval 72.4-74.0% #41-61; CorpFin 60.4% #68

Coding:

- **SWE-bench Verified: Epoch 61.0% #29 / official board 52.8% #33-34** — consistent with the launch's 63.7% minimal-scaffold figure (n=489 methodology retained); the 70.3% high-compute launch row retained
- **Aider Polyglot: 64.9% #10 (not stated) / 60.4% #14** — era-elite edit-format coding; **CadEval 54.0% #5** (niche)
- Weak: LiveCodeBench 56.7-60.4% #101-106; GSO-Bench 3.8% #30; LMArena Coding 1432-1452 #141-169; Coding 48 category

Long context:

- 200K; **AA-LCR: 51.7% #307** (weak); Fiction.LiveBench 53.1% #20 (weak); no MRCR/RULER rows (unchanged).

Multimodal:

- MMMU 75.0% #14; MMMU-Pro: Vals 71.5-75.1% #54-66 (AA 60.1% #208); **MortgageTax 66.8-68.7% #12-31** (good); **GeoBench 68.0% #13; SpatialViz 33.9% #5**; LMArena Vision 1151-1169 #106-115 (weak); VISTA 43.0-48.2% #16-35. Text+image in, text out.

Preference/IF/safety:

- **IF 46 is its worst category: IFBench 44.0-48.3% #182-216** — the budgeted-thinking pioneer measures weak on modern IF; MultiChallenge 51.6% #23; HELM IFEval 83.4% #32 (era)
- Preference weak ranks (Text 1372-1388 #161-178, Multi-turn 1399-1400 #149-150) — yet **Lech Mazur Creative Writing 81.1% #15** retains elite legacy value; Human preference 56 is its best BenchLeader category
- Safety: **Mask 72.3-82.1% #23-30**; FORTRESS 38.0% #21

### Normalized scores (1–100)

- **Tool use: 56/100.** Lowered from 58: era-elites hold (TheAgentCompany #4, METR #20, Cybench #11, DeepResearch #32) — against weak settled τ² 50-55% (the TAU-SOTA claim settled mid-field), TB Hard 21.2% #157, BrowseComp 0.9%, and the unmeasured modern harnesses.
- **Reasoning: 58/100.** Lowered from 60: GPQA 67-79.7% below the bar everywhere, HLE 8.0% #33, CritPt ~0.5%, AA II 17.7 #250, and weak AIME — offset by the elite ForecastBench 61.8% #5, era-elite MGSM/MATH rows, and decent thinking-mode honesty (60.0% #74).
- **Context window: 70/100.** Held: 200K anchor tier; measured retrieval weak (AA-LCR 51.7% #307).
- **Multimodal: 66/100.** Raised from 65: MMMU 75.0% #14, MortgageTax 68.7% #12, GeoBench #13, and SpatialViz #5 are solid rows — Vision 1151-1169 and weak MMMU-Pro grounding temper it; text+image in, text out.
- **Coding: 62/100.** Lowered from 72: the settled SWE-V cluster is 52.8-61% (fine for Feb-2025, consistent with the launch methodology) with Aider #10 the era-elite — but LCB ~57-60% #101-106, GSO 3.8%, weak arena preference, and Coding 48 as a tied-worst category mark the five-generation drift.
- **Cost efficiency: 60/100.** Held as historical: $3/$15 matched the ~60 anchor — and no live serving exists to buy at any price.
- **Overall Score: 62/100.** (56 + 58 + 70 + 66 + 62) / 5 = 62.4 → 62, down from 65. Best-fit (historical): the first hybrid reasoner and Claude Code's launch model — genuinely era-defining architecture (budgeted thinking), elite forecasting (#5) and creative writing (#15 Lech Mazur), and honest (60% non-hall at thinking) — but fully shut down since mid-2026, with its GPQA/HLE/CritPt/IF floors showing how far the field moved in 20 months. A museum piece; migrate to any current Sonnet.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified and Cybench, Artificial Analysis, Vals AI, Scale AI SEAL, HELM Capabilities, MathArena/ForecastBench, METR, TheAgentCompany, Aider leaderboard, Fiction.live, Lech Mazur, Kaggle; DDG-lite searches surfacing the shutdown record — docs.cloud.google.com partner-deprecations page (2026-05-11), aichangewatch's Bedrock 2026-07-30 notice, presenc.ai's deprecation tracker, and tokenmix's Sonnet-4.6 migration guide; first-pass announcement rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
