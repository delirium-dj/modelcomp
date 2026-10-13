# Mistral Medium 3.5 — findings by GLM 5.3

- Source: Mistral AI (`mistral-medium-3.5-128b` / `mistral-medium-3-5-26-04`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's first flagship merged model (released **2026-04-29**, confirmed): a dense 128B open-weights checkpoint consolidating **three previously separate models — Medium 3.1, Magistral, and Devstral 2** — into one set of weights for instruction-following, reasoning, and coding; the engine behind Vibe remote coding agents and Le Chat Work Mode. Second pass replaces the thin vendor-only picture with a settled independent ladder that lands **in the lower half (BenchLeader 49.4 #382)**: the τ³-Telecom 91.4 vendor claim partially survives as τ² 94.2% #34, but **SWE-V Vals measured 66.4% #69 vs the widely-circulated vendor 77.6% — an 11-point gap** — and the agent/knowledge floors are deep (τ³-Banking 15.1% #116, GDPval 13.0% #184, LMArena Agent −12.6 #48). Top use case: fast, self-hostable instruction-following and τ²-class telecom work — not the frontier coding agent it was billed as.
- **Provider / access:** Mistral API `mistral-medium-3-5-26-04` (Chat Completions, Agents & Conversations API; 2 Mistral OpenRouter rows at $1.50/$7.50, 112-116 tok/s); open weights `mistralai/Mistral-Medium-3.5-128B` (Modified MIT); NVIDIA build.nvidia.com and NIM; no OpenCode Zen listing.
- **Release / knowledge:** **2026-04-29** (confirmed); knowledge cutoff not stated publicly.
- **IDs:** `mistral-medium-3-5-26-04`; no verified Zen listing.
- **Context window:** **262K tokens** (confirmed — the 256K docs figure and AA's 260K are the same window).
- **Modalities:** text and image in / text out (from-scratch variable-size vision encoder); reasoning configurable per request (3 settings measured — **not-stated is best by ~8 index points over medium; the medium config reads dreadfully on LMArena, #285-306**); tool calls; structured outputs; document QnA; batching.
- **Pricing (as of 2026-10-13):** $1.50 in / $7.50 out per 1M (confirmed; blended $3.00/M — "pricier than most"); cache read $0.15; **163 tok/s (fastest quarter)**, 14 s first answer; $0.502 per II-run; Modified-MIT self-host (4+ GPUs).
- **Architecture:** dense 128B; merged flagship (instruct+reasoning+coding in one checkpoint); Modified MIT license.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = not-stated **49.4 #382/760 — the lower half**, trend 35→46→58 rising, last measured 2026-10-09; BenchLM corroborates at 34.4/100 #161/220). Category scores: **Instruction following 68 (best)**, Long context 60, Maths 52, Human preference 47, Multimodal 51, Knowledge 45, Reasoning 46, Agents & tools 42, **Coding 38 (worst)**.

Agent / tool use:

- **τ²-Bench: 94.2% #34** — good (the τ³-Telecom 91.4 vendor claim partially survives here) — but **τ³-Banking: 15.1% #116** (dreadful — gap filled) and **GDPval-AA: 13.0% #184** (dreadful — gap filled)
- Terminal-Bench: 2.1 **50.6% #115 (AA)** / 39.0% #67 (Vals); 2.0 (Vals) 30.3% #43; TB Hard 33.3% #93; **TB 4.0 (AA): 0.0% #146**
- **LMArena Agent: −12.6 #48** — the worst agent-arena score measured this cycle; Analyst Agent 12.5% #32; **HLAB 0.4% #50**; Legal Research 9.1% #61; Tax 27.3% #55; Finance 32.1% #59; Claw-Eval / Toolathlon / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: AA 35.0% #482 (medium) / **74.8% #248 (not stated)** / Vals 34.9% #126 — far below the bar at every effort
- HLE: AA 3.5% #573 (medium) / **13.8% #256 (not stated)** — dreadful; **CritPt: 0.0% #302** (floor); Kagi 41.4-50.0% #84-102 (weak); LMCA 26.1% #127; DTBench 75.5% #129
- **Honesty poor: AA-Omniscience non-hallucination 18.4% #294**; index −36.8 #297; accuracy 24.7% #229
- **AA II 14.2 #286 (not stated)** / 5.5 #558 (medium) — the first pass's "14, #6/65 in class" confirmed in absolute terms; ECI 141.3 #103; ProofBench 9.0% #63 (weak)
- Knowledge: MMLU-Pro 75.3% #104; CorpFin 58.8% #80; TaxEval 68.0% #99; CaseLaw 44.2% #51; **EMB 11.2% #63** (weak); MedCode 33.8% #79; MedScribe 67.7% #92; PRBench Finance 39.4% #24

Coding:

- **SWE-bench (Vals): 66.4% #69** — gap filled; vs the vendor's **77.6% SWE-bench Verified claim that circulates in every review without independent confirmation — an 11-point vendor-vs-independent gap, both retained and scored on the measured value**
- **SciCode 40.2% #152-163** (weak); **FrontierCode 8.0% #41** (dreadful); **Vibe Code v1.1: 2.9% #96** (dreadful); **Code Migration 5.1% #60** (dreadful); ALE 764.0 #74; Surface Evolver 26.9% #25; WeirdML 43.7% #89; WebDev 1264 #116; **Coding 38 is its worst BenchLeader category** — LMArena Coding 1478 #107 (not-stated) is the one decent preference row; TB 2.1 50.6% doubles as the agentic-coding signal

Long context:

- 262K window confirmed; **AA-LCR: 69.3% #218** (mid); no MRCR/RULER rows.

Multimodal:

- **The from-scratch vision encoder measures weak**: MMMU-Pro 64.9% #176; LMArena Vision 1223 #80; MortgageTax 28.9% #90; SAGE 37.6% #63; **Vals MM Index 34.8% #31**. Text+image in, text out.

Preference/IF:

- **IFBench: 68.8% #77** — IF-68 is its best category (the merged-model instruction-following strength is real); preference mid at the best config (Text 1426 #111, Multi-turn 1432 #107, Hard 1445 #115) — but the medium config collapses to #285-306 across every arena; **EQ-Bench 993 #27**.

### Normalized scores (1–100)

- **Tool use: 50/100.** Lowered from 74: the vendor's τ³-Telecom 91.4 claim survives only as τ² 94.2% #34 — against τ³-Banking 15.1% #116, GDPval 13.0% #184, HLAB 0.4% #50, Legal Research 9.1%, Analyst 12.5%, TB 4.0 0.0%, and the worst-in-cycle LMArena Agent −12.6 #48; Agents & tools 42. The "long-horizon agentic workhorse" billing did not survive measurement.
- **Reasoning: 54/100.** Lowered from 62: GPQA 34.9-74.8% below the bar at every effort, HLE 3.5-13.8%, CritPt 0.0%, AA II 14.2 #286, and poor honesty (18.4% #294) — offset by IF-68, DTBench 75.5%, and decent Long-context-60.
- **Context window: 72/100.** Lowered from 73: 262K confirmed; measured retrieval mid (AA-LCR 69.3% #218).
- **Multimodal: 58/100.** Lowered from 68: the vision encoder's measured rows are uniformly weak (MM Index 34.8% #31, SAGE 37.6%, MortgageTax 28.9%) — text+image in, text out.
- **Coding: 52/100.** Lowered from 72: the independent SWE-V is 66.4% #69 (not the vendor's 77.6%), SciCode 40.2%, FrontierCode 8.0%, Vibe 2.9%, Code Migration 5.1%, and Coding 38 as the worst category — LMArena Coding #107 and TB 2.1 50.6% are the only decent rows; the Devstral-2-consolidation coding story did not survive.
- **Cost efficiency: 82/100.** Lowered from 84: $1.50/$7.50 with blended $3.00/M is "pricier than most" for its measured capability; the offsets remain real — 163 tok/s (fastest quarter), 90% cache discounts, Modified-MIT 4-GPU self-host.
- **Overall Score: 57/100.** (50 + 54 + 72 + 58 + 52) / 5 = 57.2 → 57, down from 70 — the vendor table did not survive independent measurement. Best-fit: a fast, self-hostable instruction-following and τ²-class-telecom model with genuine IF strength (68.8% #77) at $1.50/$7.50 — but its coding (SWE-V 66.4% vs the 77.6% claim), agents (τ³ 15.1%, GDPval 13.0%, arena −12.6), knowledge reliability, and vision all measured at or near the floor; treat the three-model-consolidation marketing with caution and benchmark it on your own harness before committing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader full ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL, LMArena; two Mistral OpenRouter provider rows; DDG-lite searches surfacing BenchLM's corroborating 34.4/100 #161/220 profile, buildfastwithai's three-model-consolidation history (Medium 3.1 + Magistral + Devstral 2), chatforest/theairankings/aimadetools reviews circulating the unconfirmed 77.6% vendor SWE-bench, datallmlab's hands-on 9/9 internal coding note, and progressiverobot/awesomeagents/ailearningguides/llm-stats coverage; the first-pass vendor rows retained with their measured conflicts flagged); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
