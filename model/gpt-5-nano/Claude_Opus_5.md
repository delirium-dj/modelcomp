# GPT-5 nano — findings by Claude Opus 5

- Source: OpenAI (`gpt-5-nano`, snapshot `gpt-5-nano-2025-08-07`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's **fastest and cheapest GPT-5 tier**, shipped alongside GPT-5 and GPT-5 mini and aimed at "summarization and classification tasks with average reasoning capabilities and very fast speed" (llm-stats). It is a **reasoning model with a selectable effort ladder**, and that ladder matters more than almost any other fact about it — see the ObviousBench progression below. In late 2026 this is a **legacy model**: OpenAI steers new speed-tier work to later releases. Distinct model; `gpt-5.4-nano`, `gpt-5.4-mini`, `gpt-5.3-codex-spark` and `gpt-oss-120b` all have their own folders.
- **Provider / access:** **API-only** ([BenchmarkList](https://benchmarklist.com/models/openai-gpt-5-nano/) classifies access as API-only) — OpenAI API, **Azure OpenAI**, and **OpenCode Zen**. No open weights; Artificial Analysis scores its **Openness Index at 5.56, rank 201 of 204 (1st percentile)**, with zero on model transparency, pre-training and post-training data access, licensing and methodology transparency.
- **Release / knowledge:** **2025-08-07** (snapshot `gpt-5-nano-2025-08-07`). Knowledge cutoff: no verified public date found.
- **IDs:** `gpt-5-nano`, `gpt-5-nano-2025-08-07` (OpenAI), plus Azure deployment names. **No free tier / no free ID.**
- **Context window:** **400,000 tokens** total with **128,000 max output** ([BenchLM](https://benchlm.ai/models/gpt-5-nano)).
- **Modalities:** **Text + image in → text out.** No generated media. Note a real ambiguity I could not resolve: the ALL Bench Multimodal aggregate records **Video-MME 66.2%, Video-MMMU 63.0%, MLVU 69.2% and MMVU 63.1%** for this model, which are video benchmarks — most likely evaluated by sampling frames as images rather than through a native video path. I am **not** claiming native video input on that basis. Reasoning: **yes**, with at least four selectable effort levels (minimal / low / medium / high). Tool calls: yes.
- **Pricing (as of 2026-10-08):** **$0.05 / MTok input, $0.40 / MTok output, $0.005 / MTok cached input** (a 10× cached discount). Azure: **$0.055 / $0.44**. [BenchLeader](https://www.benchleader.com/models/gpt-5-nano) computes a **$0.138 / MTok blended** rate and places it "among the cheapest fifth of ranked models".
- **Architecture:** **Not disclosed** — proprietary, no parameter count, no expert configuration. The one architectural fact OpenAI effectively exposes is the **reasoning-effort ladder**, and the measured spread across it is large (below).

### Raw benchmarks found

> **Coverage note and a source conflict.** [BenchLM's](https://benchlm.ai/models/gpt-5-nano) machine-readable endpoint reports **"Benchmarks covered: 0 of 626 — coming soon"** and leaves the model unranked, while its own HTML page is indexed as "scores 37.6 out of 100 and ranks #144 of 218". I therefore rely on **BenchmarkList, which has 102 matched benchmarks** for this model — the densest coverage I have encountered in this research pass — supplemented by Artificial Analysis, CAIS, OpenVLM and BenchLeader. All figures below are **third-party**; the only vendor-sourced rows are the four OpenAI launch-post numbers, which are labelled as such.

**The effort ladder — the single most actionable finding.** On ObviousBench, answer pass@3 by reported effort:

| Effort | Score |
|---|---|
| Minimal | **37.5%** |
| Low | **91.0%** |
| Medium | **95.1%** |
| High | **97.2%** (62/254, 76th pct; leader O-5 at 100.0%) |

A **59.7-point swing** between minimal and high. Artificial Analysis's older Intelligence Index snapshot shows the same shape — minimal 7.1, medium 12.5, high 13.0. **Every other number in this report is at high effort unless stated**, and running this model at minimal effort gets you a materially different, far weaker model.

Agent / tool use (16 agentic evals, median 36th percentile; 3 tool-use evals, median 67th):

- **AndroidWorld: 91.4% success@1 — rank 4 of 22, 86th percentile.** The model's single best agentic result, and surprising for a nano.
- **Berkeley Function-Calling Leaderboard (BFCL-V4): 51.5% overall — 20 of 85, 77th percentile.** Breakdown is informative: Non-Live AST 68.0%, Live 59.4%, **Web Search 72.5%**, **Irrelevance Detection 89.1%**, Relevance Detection 75.0%, but **Multi-Turn only 34.5%** and **Memory 24.7%**. Mean latency 10.36 s (p95 23.56 s).
- **BFCL v3 Multi-Turn: 34.5%** — 31 of 85, 64th percentile (Base 44.0%, Missing-Function 23.5%, Missing-Parameter 32.5%, Long-Context 38.0%)
- **Hindsight LLM Memory: 83.9% quality accuracy** — 9 of 20, 58th percentile, with a 100% retain success rate
- **Terminal-Bench Hard: 17.4%** — 118 of 326, 64th percentile (Artificial Analysis; leader North Mini Code 31.1%)
- **GDPval-AA: 756 Elo** — 165 of 352, 53rd percentile
- **Tau2-Bench Telecom: 36.5%** — 164 of 332, 51st percentile
- MiniWoB++ 64.8%; PinchBench best 68.8%; LLM-WikiRace 71.5% easy / 24.7% medium / **4.0% hard**; WorkArena-L1 40.6%
- **The failures are specific and consistent: MCPMark Pass@1 6.3%** (38 of 41, 7th percentile — at $4.06 per run, 14.5 turns and ~472K tokens), **WorkArena-L2 3.4%**, MemTrace saturated overall 27.7%, **ARC-AGI-2 2.6%** and ARC-AGI-1 20.7%
- Pattern: strong at **short, single-shot tool calls and mobile GUI control**; collapses on **long-horizon MCP orchestration and L2 enterprise workflows**

Reasoning / knowledge (15 intelligence evals, median 28th pct; 4 reasoning evals, median 29th):

- **Artificial Analysis Intelligence Index: 19.87** — 166 of 427, 61st percentile. Components: GPQA Diamond 67.6%, AA-LCR 41.7%, SciCode 36.6%, HLE 8.2%, **AA-Omniscience −27.75**, **CritPt 0.0%**
- **MMLU-Pro: 78.0%** — 132 of 312, 58th percentile (a second harness records 76.1%)
- **GPQA Diamond: 67.6%** — 227 of 468, 52nd percentile (a second harness records 63.4%)
- **Humanity's Last Exam: 9.5%** — 211 of 478, 56th percentile
- **AIIQ Composite IQ: 95** — 126 of 147. The sub-scores are the interesting part: **Programmatic Reasoning 111, Academic 107, Mathematical 105, Reliability 99**, but **Abstract Reasoning only 73 and Computer Use 76**
- **ChemBench: 0.63** — 8 of 53, **87th percentile**; FormationEval (petroleum geoscience) 0.93 — 58th percentile
- **FutureEval: −6.17 forecasting skill** — 73 of 78, 6th percentile. Metaculus anchors GPT-4o at zero, so this model forecasts **worse than GPT-4o**.
- LisanBench path length 1,238 transitions (validity 97.6%) — 37 of 126, 71st percentile
- CAIS Text Capabilities Index **5.7** — 39 of 41, 5th percentile (HLE 8.2, ARC-AGI-2 2.6, TextQuests 5, **SWE-bench Pro 7.1**)

Mathematics — a genuine strength (4 evals, median 55th pct):

- **AIME 2025: 83.7%** — 49 of 226, **79th percentile**
- **MATH 500: 93.8%** — 16 of 58, 74th percentile
- **MGSM: 89.3%**; AIME (second harness): 81.2%
- **ProofBench: 12.0%** — 37 of 53, 31st percentile, at a 3,729-second latency. Formal proof is out of reach.

Factuality and truthfulness — **the most surprising result in this report** (factuality median 90th pct with one #1; truthfulness 100th pct with one #1):

- **HalluHard (hard multi-turn hallucination): 85.1% — rank 1 of 14, 100th percentile.** Research Questions 96.9%, Medical Guidelines 95.3%, Legal Cases 77.3%, Coding 71.0%
- **CommunityFact (multilingual misinformation detection, with web search): 75.6% — rank 1 of 13, 100th percentile**
- **ClaimDB fact verification: 0.79 accuracy** — 5 of 40, 90th percentile
- **Vectara HHEM: 89.5% factual consistency, 10.5% hallucination rate, 100% answer rate**
- The counterweight: **AA-Omniscience −27.75** and a CAIS **HLE miscalibration of 80** — it is well-calibrated on grounded, verifiable tasks and badly calibrated on frontier-difficulty knowledge

Coding (3 evals, median 50th pct):

- **LiveCodeBench: 70.2%** — 77 of 123, 38th percentile (leader O-5 89.0%), at **$0.01 per test** and 136 s latency
- **ALE-Bench: 718.67 with one self-refine pass, rising to 1,016.25 at 16 passes** — for $0.01 and $0.10 respectively. Cheap retries buy real gains.
- **No SWE-bench Verified score exists anywhere I could find.** The only software-engineering signal is CAIS's **SWE-bench Pro component at 7.1**, and **Terminal-Bench Hard at 17.4%**
- MLX Benchmark V2 41.92 overall — but **coding accuracy 0** and debugging 14.29 on that harness; MedCode 30.4% (8th percentile); DSAEval code 7.48

Long context (2 evals, median 32nd pct; 2 search evals, median 17th):

- **OpenAI-MRCR, 2-needle @ 128K: 43.2%** (OpenAI launch post) — a real retrieval figure, and a weak one
- **AA-LCR: 45.0%** — 209 of 408, 49th percentile (the AA index breakdown lists 41.7%)
- **BrowseComp Long Context: 80.4% @ 128K and 68.4% @ 256K** (OpenAI launch post) — notably good, and the 12-point degradation from 128K to 256K is mild
- Graphwalks BFS <128K 64.0%, Graphwalks parents <128K 43.8% (launch post); MMLongBench 31.8%

Multimodal (7 evals, median 28th pct; multimodal understanding median 65th):

- **OpenVLM Leaderboard average: 72.2 — rank 45 of 285, 85th percentile.** MMBench_V11 79.2, MMStar 68.3, MMMU_VAL 72.6, MathVista 73.1, **OCRBench 747**, AI2D 81.4, HallusionBench 60.9, MMVet 67.4
- **MMMU 75.8%, MMMU Pro 70.9%** (a second harness: 57.2%), **AI2D 81.9%, MMBench-EN 80.3%, OCRBench 75.3%, CountBench 80.0%, DynaMath 78.0%, RealWorldQA 74.1%, MathVista 71.5%, EmbSpatialBench 74.2%, VLMs Are Blind 66.7%, MathVision 62.2%, WeMath 62.5%, CCOCR 58.9%, HallusionBench 58.4%, OmniDocBench 55.9%, CharXiv 50.1%, SimpleVQA 46.0%**
- Video-by-frames: **Video-MME 66.2%** (subtitled 71.7%), **Video-MMMU 63.0%, MLVU 69.2%, MMVU 63.1%, LingoQA 57.0%**
- Document intelligence: **IDP Leaderboard 54.81** (OCR 69.6, KIE 84.7, Table 45.3, VQA 63.5) at **$0.61 per 1,000 pages**
- **The vision failures are stark: ZeroBench 3.0%, ScreenSpot-Pro 0.0%, OSWorld 0.0%, RefSpatialBench 12.6%, BabyVision 14.4%, CADGenBench 0.124, CAIS Vision Capabilities Index 43.4 (42 of 43, 2nd percentile)**
- Arenas: **Design Arena 1121 Elo** (48.9% win rate over 5,413 battles, 246 of 343); LMArena-style text #222 at 1337, vision #105 at 1146

Safety (6 evals, median 27th pct):

- **HELM AIR-Bench refusal rate: 87.8% — rank 6 of 80, 94th percentile.** Self-harm 100%, Fundamental Rights 100%, Manipulation 99.3%, Security Risks 99.1%, Criminal Activities 98.3%; weakest on Sexual Content 55.2% and Operational Misuses 60.5%
- **CAIS Risk Index 53.6** (lower better) — 29 of 54, 47th percentile; **VCT refusal risk 94.6**, Machiavelli 79.36, MASK 12.3, TextQuests harm 1.96
- MonitoringBench baseline catch rate **5.3%**; SycoEval-EM acquiescence 30.7% / appropriate rejection 69.3%

Domain results worth noting: **MedQA 93.3%** (75th pct), MedScribe 72.9%, TaxEval v2 67.4%, GSMA Open Telco 60.3% (68th pct), EHRBench 57.8%, MortgageTax 53.6%, CaseLaw v2 52.6%, **LegalBench 50.1% (120 of 122, 2nd percentile)**, SAGE 30.4% (8th pct), Xent Games 23.27 (13 of 13).

### Normalized scores (1–100)

- **Tool use: 52/100.** A genuinely split profile, and the split is clean enough to act on. **AndroidWorld 91.4% at the 86th percentile** and **BFCL-V4 51.5% at the 77th** with **89.1% irrelevance detection** mean this model is reliable at *short* tool interactions — it calls the right function and, crucially, knows when not to call one. **Terminal-Bench Hard 17.4% at the 64th percentile** is respectable for the price tier. Then everything long-horizon fails: **MCPMark 6.3% (7th percentile), WorkArena-L2 3.4%, BFCL multi-turn 34.5%, BFCL memory 24.7%, WikiRace-hard 4.0%**. The MCPMark economics make the point concretely — $4.06 and 472K tokens per run for a 6.3% pass rate. Scored at the midpoint because the single-turn competence is real and independently top-quartile.
- **Reasoning: 58/100.** **Mathematics is the strength and it is not marginal: AIME 2025 83.7% (79th percentile) and MATH 500 93.8% (74th)** are strong absolute scores for a model at $0.05/MTok, with MMLU-Pro 78.0% and ChemBench at the 87th percentile behind them. The **AIIQ sub-scores explain the shape precisely** — Programmatic 111, Academic 107, Mathematical 105, but **Abstract Reasoning 73**: it executes learned procedures well and generalizes poorly. That is confirmed by **CritPt 0.0%, ARC-AGI-2 2.6%, ProofBench 12.0%** and a **FutureEval score of −6.17 that puts it below GPT-4o at forecasting**. GPQA Diamond 67.6% and HLE 9.5% sit mid-field. The **59.7-point ObviousBench effort spread** is also a reasoning-quality caveat: the number you get depends entirely on what you pay for.
- **Context window: 58/100.** **400K in / 128K out** is a large nominal window for this tier, and the long-context *browsing* evidence is better than expected — **BrowseComp 80.4% at 128K and 68.4% at 256K**, a mild 12-point degradation across a doubling. But the direct retrieval measurements are weak: **OpenAI's own MRCR 2-needle at 128K is 43.2%**, **AA-LCR is 45.0%** (49th percentile), Graphwalks-parents is 43.8% and MMLongBench 31.8%. A window you can browse but should not expect to recall precisely. Scored on measured retrieval, with credit for the browsing results.
- **Multimodal: 64/100.** The best-evidenced dimension, with roughly 40 distinct vision numbers. **OpenVLM Leaderboard average 72.2 at the 85th percentile of 285 models** is the headline, supported by **MMMU 75.8%, MMMU Pro 70.9%, OCRBench 747, AI2D 81.9%, MMBench-EN 80.3%, CountBench 80.0%, DynaMath 78.0%** and credible video-by-frames results (**Video-MME 66.2%, MLVU 69.2%**). Document intelligence is practical and cheap — **IDP OCR 69.6, KIE 84.7, at $0.61 per 1,000 pages**. The deductions are equally clear: **text-only output**, **ZeroBench 3.0%**, **ScreenSpot-Pro and OSWorld at 0.0%** (no GUI grounding), RefSpatialBench 12.6%, and a **CAIS Vision Index at the 2nd percentile**. It reads images well and cannot act on screens.
- **Coding: 42/100.** **LiveCodeBench 70.2%** is a solid competitive-programming result, and **ALE-Bench improving from 718.67 to 1,016.25 across 16 self-refine passes for ten cents** is a genuinely useful property — cheap retries convert into real quality here. But there is **no SWE-bench Verified number at all**, the only software-engineering proxies are **SWE-bench Pro 7.1** and **Terminal-Bench Hard 17.4%**, and one harness measured its coding accuracy at **0** with debugging at 14.29. MedCode 30.4% sits at the 8th percentile. This model writes self-contained functions; it does not maintain software.
- **Cost efficiency: 93/100.** Outstanding, and the per-test telemetry proves it rather than implying it. **$0.05 in / $0.40 out with cached input at $0.005** — a 10× cache discount — works out to **$0.138/MTok blended, "among the cheapest fifth of ranked models"**, with most individual benchmark runs costing **$0.00–0.01** (ARC-AGI-1 at $0.01/task, MMMU Pro and GPQA at $0.00/test, document OCR at $0.61 per thousand pages). For **MMLU-Pro 78%, AIME 2025 83.7%, MATH 500 93.8%, MMMU 75.8%, MedQA 93.3%, an OpenVLM 85th-percentile vision average and the #1 HalluHard truthfulness score**, that is exceptional value. Four deductions: no free tier, legacy status, an **Openness Index at the 1st percentile** (fully closed, zero methodology transparency), and the effort ladder — the cheapest setting is also a 37.5% ObviousBench model, so the headline price is not the price of the quality quoted here.
- **Overall Score: 54.8/100.** Mean of the five non-cost dims (52 + 58 + 58 + 64 + 42) / 5 = 54.8. The genuinely unexpected finding is **reliability**: a 2025 nano model holds **rank 1 of 14 on HalluHard (85.1%), rank 1 of 13 on CommunityFact, 90th percentile on ClaimDB, a 10.5% Vectara hallucination rate with a 100% answer rate, and the 94th percentile on HELM AIR-Bench refusals** — it is markedly more trustworthy on grounded tasks than many models several times its price. Best fit: **high-volume grounded work** — classification, summarization, fact-checking and misinformation triage, document OCR and key-information extraction, image reading, single-turn function calling, and school-to-competition-level mathematics. Avoid it for: software engineering (no SWE-bench number, SWE-bench Pro 7.1), long-horizon agents (MCPMark 6.3%, WorkArena-L2 3.4%), GUI automation (OSWorld and ScreenSpot-Pro 0.0%), abstraction (Abstract Reasoning IQ 73, ARC-AGI-2 2.6%), forecasting (below GPT-4o), and frontier knowledge (AA-Omniscience −27.75). And **set reasoning effort deliberately** — minimal effort costs you 59.7 points on ObviousBench.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **BenchmarkList's 102-benchmark profile** for OpenAI GPT-5 Nano (the API-only access classification, $0.05/$0.40 pricing, 2025-08-07 release date, all category median percentiles, and every individual score with its rank, percentile, field leader, sub-metrics, per-test cost and latency telemetry quoted above — including the complete ObviousBench effort ladder from minimal 37.5% through high 97.2%, AndroidWorld 91.4%, the full BFCL-V4 breakdown, MCPMark 6.3% with its $4.06/run and 472K-token cost, WorkArena L1/L2, Terminal-Bench Hard 17.4%, GDPval-AA 756 Elo, Tau2-Telecom 36.5%, Hindsight memory 83.9%, LiveCodeBench 70.2%, the ALE-Bench self-refine cost/quality curve, AIME 2025 83.7%, MATH 500 93.8%, ProofBench 12.0%, MMLU-Pro 78.0%/76.1%, GPQA Diamond 67.6%/63.4%, HLE 9.5%, FutureEval −6.17 against Metaculus's GPT-4o-at-zero anchor, LisanBench, ChemBench 0.63, the HalluHard and CommunityFact #1 rankings, ClaimDB 0.79, Vectara HHEM 89.5%/10.5%, AA-LCR 45.0%, OpenAI-MRCR 43.2%, BrowseComp 80.4%/68.4%, Graphwalks, the ~40-entry ALL Bench Multimodal and OpenVLM vision sets, the IDP document-intelligence breakdown with its $0.61/1,000-pages cost, Design Arena 1121 Elo, HELM AIR-Bench 87.8% with its per-category refusal rates, the CAIS Text/Vision/Risk indices with their components, the AIIQ composite and its six sub-IQs, the Artificial Analysis Openness Index at the 1st percentile, MedQA 93.3%, LegalBench 50.1%, and the remaining domain, game, safety and efficiency rows), plus BenchLM's model page (400K context, 128K max output, Proprietary, Reasoning type), BenchLeader's $0.138 blended-rate and cheapest-fifth placement, onlysota's Artificial Analysis effort ladder and arena placements, and llm-stats' positioning summary. **Two source conflicts are reported rather than resolved silently:** BenchLM's machine-readable endpoint says "0 of 626 benchmarks — coming soon / unranked" while its HTML page is indexed at 37.6 / #144 of 218, and the same benchmarks appear at different values across harnesses (MMLU-Pro 78.0% vs 76.1%, GPQA Diamond 67.6% vs 63.4%, MMMU Pro 70.9% vs 57.2%, AA-LCR 45.0% vs 41.7%) — both ranges are given rather than averaged. The **video benchmark results are explicitly flagged as probably frame-sampled rather than treated as evidence of native video input**, and the ALL Bench entries recording 0.0% for AndroidWorld, OSWorld and ScreenSpot-Pro are read as not-run placeholders where they contradict a measured score elsewhere, and as genuine failures where they do not. No data was imported from `gpt-5.4-nano`, `gpt-5.4-mini`, `gpt-5.3-codex-spark` or `gpt-oss-120b`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
