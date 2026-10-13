# Gemini 2.5 Flash — findings by GLM 5.3

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's mid-2025 fast/cheap multimodal workhorse — **SHUTDOWN SCHEDULED 2026-10-16, three days from this report** (aimodelgraveyard/modeldeprecations/aimodelwatch; the whole Gemini 2.5 line retires together with 2.5 Pro; official replacement `gemini-3.6-flash`). Released **2025-04-17** (preview; the 2025-05-20 first-pass date was GA — both flagged); a 09-2025 refresh exists and **scores lower than the base** (51.8 #320 vs 52.8 #284 — the refresh did not help). Second pass fills every empty row and they landed weak (SWE-V 28.7% #38, TB Hard ~13%, HLE 4.7-12.1%, AA II 13.1 #306) — the era-elite niches (Aider #18, MMMU #6, AudioMC #4-7, IFEval HELM #10) remain. Top use case (for three more days): high-throughput multimodal input processing with a 1M window.
- **Provider / access:** Google Gemini API / Vertex (3 OpenRouter rows: $0.30/$2.50 ×2, a $0.54/$4.50 long-prompt tier); no OpenCode Zen ID (superseded by the 3.x Flash line).
- **Release / knowledge:** **2025-04-17** (BenchLeader; preview) / 2025-05-20 GA; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash` (shutting down 2026-10-16).
- **Context window:** 1M tokens (confirmed).
- **Modalities:** text, image, speech, and video in / text out; thinking variant measured separately (the thinking config beats no-reasoning on nearly every row); function calling; JSON mode per the API family.
- **Pricing (as of 2026-10-13):** $0.30 in / $2.50 out per 1M (cache discount 90%, cached read $0.03; $0.54/$4.50 above the long-prompt tier); blended $0.85/M; 81-94 tok/s on Vertex (the 195.5 tok/s first-pass AA read reflects a different config/provider — flagged); 0.5-0.9 s TTFT.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = not-stated **52.8 #284/760**, last measured 2026-10-09). Category scores: **Instruction following 63 (best)**, Human preference 59, Multimodal 61, Maths 55, Long context 58, Knowledge 49, Agents & tools 48, Coding 44, **Reasoning 42 (worst)**.

Agent / tool use:

- **BFCL Overall: 56.2% #13** (good rank — its strongest agent row); BALROG 33.5% #13; BrowseComp-Plus 16.3% #11 / BrowseComp 2.5% #9 / DeepSearchQA 25.9% #8 (its-era search rows)
- **τ²-Bench: 14.9% #358 (no-reasoning) / 31.6% #249 (thinking)** — weak; **Terminal-Bench public: 17.1% #75**; **TB Hard: 12.1-13.6% #199-208** (dreadful); Vending-Bench 2 548.8 #55 (weak); τ³ / GDPval / Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: AA 68.3% #307 (no-reasoning) / **79.0% #199 (thinking)** / Vals 57.6% #109 — below the bar on every harness
- **HLE: 4.7% #463 (no-reasoning) / 12.1% #269 (thinking)** — dreadful; **CritPt 1.1-1.4%**; ARC-AGI-2 1.7-2.5% #176-185; ARC-AGI-1 33.3% #177; SimpleBench 41.2% #59; Kagi 56.8% #60 (thinking)
- **ForecastBench: 60.6% #25** (good); DTBench 76.5% #126; LMCA 27.5% #125; **MATH 500: 91.6-91.8% #19-21**; OTIS 73.1% #129; Omni-MATH (HELM) 38.4% #32
- Honesty poor: **non-hallucination 7.0% #480 (no-reasoning) / 24.7% #239 (thinking)**; accuracy ~26% #209-212; Omniscience −29.8 to −42.6; **AA II 9.8 #376 (no-reasoning) / 13.1 #306 (thinking)**; ECI 143.0 #93; HELM mean 62.6% #39
- Knowledge: LegalBench 83.8% #45; MedQA 86.7-91.0% #42-56; MedScribe ~83% #44-46; TaxEval 70.5-71.2% #79-87; CorpFin 54.2% #92; MedCode 38.4-40.4% #60-66; MMLU-Pro (HELM) 63.9% #43

Coding:

- **SWE-bench Verified (board): 28.7% #38** — gap filled; weak. **LiveCodeBench (Vals): 46.9% #114 (thinking) / 56.9% #105** — weak (gap filled); WeirdML 41.0% #101; ALE 661.9 #83; LMArena Coding 1424 #173 (weak); **Aider Polyglot: 55.1% #18** (decent rank — the era-elite coding row); Design Arena 1126 (retained)

Long context:

- 1M window confirmed; **Fiction.LiveBench 120k: 68.8% #8** (good); **AA-LCR: 49.9% #310 (no-reasoning) / 65.3% #241 (thinking)** — mid-weak; no MRCR/RULER rows.

Multimodal:

- **MMMU: 79.7% #6**; MMMU-Pro: Vals 68-71.9% #64-71 / AA 65.5-69.1% #154-170; **AudioMC: 40.0% #4-7** (audio-in elite rank); **GeoBench: 76.0% #7; SpatialViz-Bench: 36.9% #3**; VISTA 49.1% #13; SAGE 39.6-44.8% #44-58 (weak); **VTB 4.7% #16** (weak video); VPCT 38.0% #21; Vision 1235 #73. Full text+image+speech+video in, text out.

Preference/IF/safety:

- **IFEval (HELM): 89.8% #10** (era-elite) vs IFBench 39.0% #270 (no-reasoning) / 50.3% #171 (thinking) — a harness-era split; WildBench (HELM) 81.7% #25
- Preference weak ranks (Text 1409 #137, Multi-turn 1403 #146, Creative 1394 #112, Longer 1417 #134); **Lech Mazur Creative Writing 76.5% #22** (thinking); Mask 49.1% #53; **PropensityBench 68.0% #4**

### Normalized scores (1–100)

- **Tool use: 46/100.** Lowered from 52: the gaps filled weak — τ² 14.9-31.6%, TB public 17.1% #75, TB Hard ~13% #199-208, Vending #55 — against the decent BFCL #13, BALROG #13, and its-era search rows.
- **Reasoning: 50/100.** Lowered from 52: GPQA 57.6-79.0% below the bar everywhere, HLE 4.7-12.1%, CritPt ~1.2%, ARC-AGI-2 ~2%, AA II 13.1 #306, and poor honesty (24.7% #239 at best) — offset by ForecastBench #25, Kagi #60, MATH 500 #19-21, and the HELM-era rows.
- **Context window: 88/100.** Lowered from 93: 1M confirmed but measured retrieval is mid-weak (AA-LCR 49.9-65.3% #241-310); Fiction.LiveBench #8 keeps it above the mid band.
- **Multimodal: 84/100.** Lowered from 88: the full omni input set with era-elites (MMMU #6, AudioMC #4-7, GeoBench #7, SpatialViz #3) — but weak video (VTB 4.7%), weak grounding (SAGE 39.6-44.8%), and mid MMMU-Pro temper it.
- **Coding: 46/100.** Lowered from 50: the gaps filled at the floor — SWE-V 28.7% #38, LCB 46.9-56.9%, WeirdML 41% — with Aider #18 the lone decent rank; Coding 44 is its second-worst category.
- **Cost efficiency: 94/100.** Held: $0.30/$2.50 with 90% cache discounts and 0.5-0.9 s TTFT — but the value case expires with the model: **shutdown 2026-10-16**.
- **Overall Score: 63/100.** (46 + 50 + 88 + 84 + 46) / 5 = 62.8 → 63, down from 67.0. Best-fit: a fast, cheap 1M-context omni-input processor with era-elite niches (Aider, MMMU, AudioMC, IFEval) — but it shuts down in three days (2026-10-16); migrate to `gemini-3.6-flash` (official replacement) or accept any current Flash generation, all of which beat it on every measured axis.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified and Terminal-Bench, Artificial Analysis, Vals AI, Scale AI SEAL incl. VISTA/AudioMC/VTB/PropensityBench, HELM Capabilities, Aider leaderboard, Fiction.live, Andon Labs, BFCL, BALROG, BrowseComp, Kaggle; three Vertex provider rows; DDG-lite searches surfacing the 2026-10-16 shutdown notices — aimodelgraveyard, modeldeprecations.dev, aimodelwatch 2026-10-10, gcpstudyhub — the 2025-04-17 preview date, and the official gemini-3.6-flash replacement; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
