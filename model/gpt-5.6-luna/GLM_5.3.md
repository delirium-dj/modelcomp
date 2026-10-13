# GPT-5.6 Luna — findings by GLM 5.3

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's July 2026 budget tier of the GPT-5.6 family — "the fastest and most cost-efficient tier" (llm-stats), "OpenAI's cheapest model with 1M+ context" (getapipulse), hands-on 8.6/10 (theplanettools). Second pass confirms the value story with the full 7-setting effort ladder (best = xhigh 59.6 #117) and fills the LCB/Vibe/IOI gaps. Notable: its successor **GPT-6 Luna (2026-09-22) currently scores LOWER (58.9 #128)** — the new generation has not yet caught up on settled measurements. Knowledge cutoff resolved: **2026-02-16** (userightai). Top use case: high-volume agentic coding and math on a budget.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); OpenAI API.
- **Release / knowledge:** 2026-07-09 (GPT-5.6 family launch); knowledge cutoff **2026-02-16**.
- **IDs:** `opencode/gpt-5.6-luna` (Zen; no Free ID — paid but cheap).
- **Context window:** **1.1M tokens** (BenchLeader + llm-stats + aimodelwatch; the 1.05M listing is the same 1,050,000 figure).
- **Modalities:** text/image in; text out; reasoning (7 effort settings; xhigh best-value, max 18× the cost of low for +7.7 index); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $0.20 in / $1.20 out per 1M ≤272K tokens ($0.40/$1.80 above 272K; cached read $0.02); blended $0.45/M, "cheaper than most ranked models"; 111 tok/s; **$0.085 per full Intelligence Index run** — the cheapest II run in this batch by far. (Two outlier pages quoting $1/$6 are wrong — discarded.)
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = xhigh **59.6 #117/760**, trend 49→57→65 rising, last measured 2026-10-09). Category scores (xhigh): **Composite 69 (best)**, Maths 66, Human preference 64, Long context 66, Multimodal 61, Coding 58, Reasoning 58, Knowledge 57, **Agents & tools 53 (worst)**.

Agent / tool use:

- Terminal-Bench 2.1: AA **80.9% #41 (max)** / Vals **79.0% #11** (confirms the ~80-85% band); **TB 4.0: 11.6% #80 (AA) / 11.6% #28 (Vals)**; TB public board 17.3% #73; TB Science 0.0% #29
- **GDPval-AA: 48.2% #54** (max; updated from 1582 Elo / 47.2%); **τ³-Banking: 31.1% #62** (max — weak, confirmed)
- **HLAB (Vals): 1.3% #45 — dreadful; the first pass's "AA Harvey LAB 87.9%" row is flagged as a suspect metric/misread and not credited** (no AA-harness Harvey row appears anywhere on the current ladder)
- ITBench SRE **40.3% #18**; APEX-Agents (AA) **35.8% #7** (good rank) / (Mercor) 43.0% #37; **CyberBench 73.6% #9**; Finance Agent v2 55.0% #19; **SkillsBench 60.5% #7**; Tax 60.8% #29; Legal Research 36.5% #33; BALROG **45.6% #8**; Vending-Bench 2 4094.7 #39; **FACTS Search 79.3% #13**; LiveBench Agentic 48.4% #47; LMArena Agent −1.5 #35 (weak); BrowseComp 83.3%, OSWorld 2.0 45.6%, CyberGym 77.9%, Toolathlon 53.4%, EnterpriseOps-Gym 40.8% (first-pass rows retained); Claw-Eval still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch **91.6% #29 (max)** / AA 91.1% #50 / Vals **91.7% #18** — elite, clears the frontier bar at max
- HLE (AA): **39.5% #84 (max)** — just misses the 40% reference; **ARC-AGI-2 59.6% #82**; ARC-AGI-1 90.7% #65; ARC-AGI-3 0.2% (dreadful); CritPt 20.6% #55 (mid); SimpleBench 46.8% #48; Kagi 49.1% #86 (weak)
- **Math is the standout for the tier: FrontierMath T1-3 82.1% #14 / T4 61.0% #20** (updated on the v2 rerun from 78.6/58.5); **OTIS 98.3% #21; ProofBench 60.0% #18**; LiveBench Math 87.2% #45; LMArena Maths 1477 #42
- **Honesty catastrophic and effort-inverse: AA-Omniscience non-hallucination 7.4% #468 at max** (7.5% xhigh, 25.0% no-reasoning) — confirms the 92.6% hallucination rate; accuracy 42.7% #102, index −10.3 #186; SimpleQA 41.0% #42
- MMLU-Pro 86.0% #48; LegalBench 84.0% #41; **TaxEval 76.2% #6**; MedScribe 84.4% #33; CorpFin 64.2% #39; EMB 67.1% #16; Public Benefits 61.2% #26; BioMystery 61.5% #17; MedCode 42.4% #48

Coding:

- **SWE-bench Verified (Vals): 93.0% #9 (max)** — elite for the tier, confirmed; **LiveBench Coding: 82.9% #9 (max)** — gap filled, elite; **IOI: 61.8% #14** — gap filled; **Vibe Code v1.1: 77.1% #26 (max)** — gap filled, good; **ALE-Bench 1667.4 #11**; DeepSWE ladder 1.6% (low) → **67.2% #21 (max)** — effort buys 42 points
- Caps: SciCode 53.6% #66 (just below the 55% reference); ProgramBench 0.0% #23; Code Migration 44.5% #18; **CursorBench 35.9% #36 (max)** — the current-era Cursor eval reads far below the first pass's 3.2-era 61.1%; TB 4.0 ~11.6%; LMArena Coding 1501 #75 / WebDev 1519 #50; FrontierCode 39.8% #24; WeirdML 60.9% #46 (high)

Long context:

- **1.1M window confirmed**; AA-LCR 83.7% (retained); Long context category 66; no MRCR/RULER rows (unchanged).

Multimodal:

- **MMMU-Pro (Vals): 85.0% #25 (max)** — better than the AA 78.5% read; LMArena Vision 1258 #58; category 61; text+image in, text out.

### Normalized scores (1–100)

- **Tool use: 76/100.** Lowered from 80: TB 2.1 ~80% and the professional-agent good ranks (ITBench #18, APEX-AA #7, CyberBench #9, Skills #7, Finance #19, BALROG #8) hold — but τ³ 31.1% #62, HLAB 1.3% #45 (with the suspect 87.9% first-pass row discarded), TB 4.0 ~11.6%, TB public 17.3% #73, and LMArena Agent −1.5 drag it down; Agents & tools 53 is its worst category.
- **Reasoning: 82/100.** Lowered from 84: GPQA 91.6-91.7% elite and FrontierMath 82.1% #14 / T4 61.0% #20 with ProofBench 60% #18 are outstanding for the price — but HLE 39.5% just misses, ARC-AGI-3 0.2%, Kagi 49.1% #86, and the effort-inverse honesty collapse (non-hall 7.4% #468) cap it.
- **Context window: 95/100.** Held: 1.1M confirmed across three trackers; AA-LCR 83.7% good; no ≥98% retrieval evidence.
- **Multimodal: 72/100.** Raised from 70: the Vals MMMU-Pro 85.0% #25 read beats the AA number; Vision 1258 #58 mid; text+image only.
- **Coding: 84/100.** Raised from 82: SWE-V 93.0% #9 confirmed, LiveBench Coding 82.9% #9 and IOI 61.8% #14 fill the biggest gaps elite, Vibe 77.1% #21-26 solid — capped by SciCode 53.6%, ProgramBench 0%, current-era CursorBench 35.9%, and TB 4.0 ~11.6%.
- **Cost efficiency: 93/100.** Held: $0.20/$1.20 ≤272K, $0.02 cached, blended $0.45/M, 111 tok/s, $0.085 per Intelligence Index run — the cheapest II run measured this cycle; xhigh is the value sweet spot (max costs 18× low for +7.7).
- **Overall Score: 82/100.** (76 + 82 + 95 + 72 + 84) / 5 = 81.8 → 82, essentially unchanged from 82.2. Best-fit: still the price-performance pick for high-volume coding/math agents — elite SWE-V, frontier-tier math, and a 1.1M window at $0.085 per II-run; its knowledge recall is unusable without retrieval (non-hall #468), and the 2026 terminal suites (TB 4.0/Science) and legal agents break it. Note the successor GPT-6 Luna currently measures lower — keep this one.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full 7-setting effort-ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, LMArena, Mercor APEX, BALROG, Andon Labs, Kaggle FACTS Search; DDG-lite searches surfacing llm-stats/userightai/theplanettools/getapipulse/aimodelwatch spec-and-review pages — pricing, 1.1M context, 2026-02-16 knowledge cutoff, hands-on verdicts — with two $1/$6 outlier pages discarded; the suspect first-pass "AA Harvey LAB 87.9%" row flagged and not credited); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
