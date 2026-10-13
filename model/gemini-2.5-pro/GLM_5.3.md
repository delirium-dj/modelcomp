# Gemini 2.5 Pro — findings by GLM 5.3

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's March-2025 Pro reasoning model — the former frontier, now several generations behind the Gemini 3.x line. **SHUTDOWN SCHEDULED 2026-10-16 — four days from this report** (aimodelwatch 2026-10-10; modeldeprecations.dev; official replacement `gemini-3.1-pro-preview`; GitHub Copilot deprecated it 2026-07-31). Second pass adds the full legacy measurement profile: still elite at its era's niches (VISTA #1, Aider Polyglot #3, Fiction.LiveBench #4, TutorBench #3) but collapsing on every 2026 agent suite. Top use case (for four more days): cheap long-context multimodal analysis.
- **Provider / access:** Google AI Studio/Gemini API, Vertex AI (two OpenRouter rows: $1.25/$10.00 and a $2.25/$18.00 long-prompt tier); **no OpenCode Zen ID**.
- **Release / knowledge:** **25 Mar 2025** (BenchLeader; the first pass's 2025-06-05 was the preview-06-05 snapshot date); knowledge cutoff January 2025.
- **IDs:** Google `gemini-2.5-pro` (no Zen ID; no Free ID).
- **Context window:** 1M tokens (confirmed; the $2.25/$18 tier applies to long prompts).
- **Modalities:** text/image/speech/video in; text out; reasoning (thinking config measured separately — Reasoning 36 at that setting); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** $1.25 in / $10.00 out per 1M (cache read $0.125, 90% discount; blended $3.44/M — "among the most expensive" for its measured capability); 116 tok/s, 24 s first answer.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader legacy profile (best config 54.0 **#242/760**, trend 51→54→58 stable, last measured 2026-10-09). Category scores: **Long context 67 (best)**, Human preference 63, Multimodal 64, Knowledge 54, IF 53, Maths 53, Reasoning 52, Coding 49, **Agents & tools 41 (worst)**.

Agent / tool use:

- **GDPval split: original GDPval 23.3% #9 (near-top for its era) vs GDPval-AA v2.1 0.0% #208** — the 2026 rerun of the same task family scores it at absolute floor
- **τ³-Banking: 9.7% #143**; **τ² 54.1% #187**; Remote Labor Index **0.8% #15**; Terminal-Bench public 32.6% #58; **TB 2.1 (AA): 28.5% #155**; **TB 4.0 (AA): 0.0% #144**; TB Hard 26.5% #129; TB 2.0 (Vals) 30.3% #43
- METR Time Horizons 55.4% #23; TheAgentCompany 30.3% #5 (good rank, weak absolute); BALROG 43.3% #11; DeepResearch 42.8% #33; Vending-Bench 2 **573.6 #54** (weak); BrowseComp 7.8% #4 / BrowseComp-Plus 19.9% #9 / DeepSearchQA 24.6% #9 (its era's search results — weak absolute)

Reasoning / knowledge:

- GPQA Diamond: Epoch 85.3% #87 / AA 84.4% #139 / **Vals 80.8% #64** / HELM 74.9% #5 — all below the 90% bar
- HLE: Scale-CAIS 21.6% #18 / AA 22.5% #188 (well below the 40% reference); CritPt **2.6% #177** (very weak); ARC-AGI-2 3.8-4.9% (dreadful); ARC-AGI-1 33-41%
- Legacy bright spots: **SimpleBench 62.4% #21; Kagi 70.3% #26; ForecastBench 61.3% #13**; SciPredict 17.0% #11; DTBench 82.4% #102
- Math: MATH L5 95.9% #12; Math500 95.2% #5; AIME (Vals) 85.8% #35; OTIS 84.7% #92; FrontierMath T1-3 24.6% #76 / **T4 0.0% #67**; IMO 2025 31.6% #2 (MathArena, its era); Apex 0.5% #41
- **Honesty catastrophic: AA-Omniscience −16.4 #215, non-hallucination 9.1% #424** (accuracy 39.0% #123) — worse than the first pass's 90.9% hallucination implied; **AA II 16.1 #261**; ECI 145.3 #81; HELM Capabilities mean 74.5% #15 (HELM's rank set is its era's)
- Knowledge: MMLU-Pro 84.1% #65 (Vals) / 86.3% #4 (HELM); MedQA 93.1% #25; LegalBench 84.3% #33; TaxEval 72.9% #55; CaseLaw 63.9% #15; CorpFin 60.8% #63; MedCode 50.6% #16; MedScribe 73.5% #78

Coding:

- **Aider Polyglot 83.1% #3 of 46 — elite legacy edit-format coding**; LiveCodeBench (Vals) 79.2% #71; **CadEval 64.0% #2** (niche elite)
- SWE-bench Verified: Epoch **57.6% #31** / Vals **54.4% #79** / SWE-bench board 53.6% #32 (vs the first pass's 63.8% — the independent cluster sits lower); SciCode 42.8-46.3% #128-139 (weak); WeirdML 54.0% #62; GSO-Bench 3.9% #29; **Vibe Code v1.1 0.4% #98** (confirmed dreadful); ALE 785.5 #70; AlgoTune 1.5 #11; LMArena Coding 1464 #120 / WebDev 1227 #125 (weak preference)

Long context:

- **Fiction.LiveBench 120k: 90.6% #4** (elite long-fiction coherence); **AA-LCR 69.0% #222** (mid-weak); LMArena Document 1431 #39; 1M window confirmed; no MRCR/RULER rows.

Multimodal:

- **VISTA 54.6% #1 of 57** (elite visual-language understanding); GeoBench 86.0% #2; SpatialViz-Bench 44.7% #1; MMMU 79.6% #7; MMMU-Pro: Vals 81.3% #40 / AA 74.9% #102 / official 68.0% #12; Vision 1263 #51; MortgageTax 68.9% #8; AudioMC 46.9% #5; **VTB 11.8% #9** (weak video); SAGE 41.9% #54; VPCT 48.0% #11
- Preference: Lech Mazur Creative Writing **83.8% #6** (elite legacy creative writing); LMArena Text 1446 #84, Creative 1443 #53; IFBench 48.7% #180 (weak); TutorBench 55.6% #3; WildBench (HELM) 85.7% #6
- Safety: FORTRESS 61.7% #3; PropensityBench 79.0% #1

### Normalized scores (1–100)

- **Tool use: 40/100.** Lowered from 42: the 2026 suites are merciless — GDPval-AA v2.1 0.0% #208, τ³ 9.7% #143, Remote Labor 0.8%, TB 4.0 0.0% #144, TB 2.1 28.5% #155 — against its era's GDPval #9 and METR 55.4% #23. Agents & tools 41 is its worst category.
- **Reasoning: 56/100.** Lowered from 58: GPQA below the bar on every harness (80.8-85.3%), HLE ~22%, CritPt 2.6%, ARC-AGI-2 ~4%, non-hallucination 9.1% #424, AA II 16.1 #261 — offset by SimpleBench #21, ForecastBench #13, Kagi #26, and legacy math (Math500 #5).
- **Context window: 92/100.** Lowered from 95: 1M confirmed, but measured long-context reasoning is mixed — Fiction.LiveBench 90.6% #4 elite vs AA-LCR 69.0% #222 mid-weak.
- **Multimodal: 86/100.** Lowered from 88: VISTA #1 and GeoBench #2 remain elite, MMMU-Pro 81.3% #40 good — but VTB 11.8% #9 (weak video understanding), SAGE 41.9% #54, and Vision #51 temper the full omni-input band.
- **Coding: 54/100.** Lowered from 55: independent SWE-V lands 53.6-57.6% (below the first pass's 63.8%), Vibe 0.4%, SciCode ~46% — Aider Polyglot #3 and CadEval #2 are the legacy elite exceptions.
- **Cost efficiency: 75/100.** Held: $1.25/$10 with 90% cache discount and 116 tok/s is reasonable input pricing — but the value case expires with the model: **shutdown 2026-10-16**.
- **Overall Score: 66/100.** (40 + 56 + 92 + 86 + 54) / 5 = 65.6 → 66, down from 67.6. Best-fit: a legacy long-context omni-input workhorse with elite niche wins (VISTA, Aider, long-fiction) — but it shuts down in four days (2026-10-16); migrate to `gemini-3.1-pro-preview` or accept any current Gemini Flash generation, which beats it on intelligence at lower cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader legacy profile as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL incl. VISTA/GeoBench/PropensityBench, HELM Capabilities, MathArena, METR, TheAgentCompany, BALROG, Aider leaderboard, Fiction.live, Lech Mazur; DDG-lite searches surfacing the 2026-10-16 shutdown notices — aimodelwatch 2026-10-10 and modeldeprecations.dev — and the 2026-07-31 GitHub Copilot deprecation changelog); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
