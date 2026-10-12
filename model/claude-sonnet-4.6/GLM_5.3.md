# Claude Sonnet 4.6 — findings by GLM 5.3

- Source: Anthropic (`claude-sonnet-4.6`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's flagship Sonnet of the 4.6 generation (released **2026-02-17**, days after Opus 4.6 on 2026-02-05 — release date resolved this pass), with adaptive thinking, upgraded coding/computer use, and a 1M-token context window that became **generally available in March 2026** (2026-03-14, no beta flags, standard pricing — nstarx Claude internals doc, dev.to GA notice). Two generations behind Sonnet 5. Top use case: cost-conscious near-frontier coding and long-document work.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API, Claude Pro/Max, AWS/GCP/Azure, OpenRouter.
- **Release / knowledge:** 2026-02-17 (BenchLeader "Released 17 Feb 2026" + theaitrack/neowin coverage); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-sonnet-4.6` (Zen ID `claude-sonnet-4-6`; no Free ID — paid only); `claude-sonnet-4-6-adaptive` (adaptive-thinking variant measured by AA)
- **Context window:** 1M tokens **GA since 2026-03-14** (default still 200K; 1M no longer beta-gated, standard per-token pricing, ~300K batch output reported); Zen/BenchLM listings still show the 200K default. Scored on the 1M GA capability this pass.
- **Modalities:** text/image in; text out; adaptive thinking (base config non-reasoning, adaptive/max modes measured); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $3.00 in / $15.00 out per 1M (cached read $0.30) — confirmed by BenchLeader ($6.00/M blended, "among the most expensive ranked" but ~1/5 of Opus 4.6) and independent reviews.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

> First pass relied on BenchLM rows. Second pass adds the full BenchLeader effort-ladder (6 configurations; best = "not stated" 58.6 **#136/760**, trend 47→55→64 rising, last measured 2026-10-09) plus independent reviews. Category scores (not stated): Reasoning 65, Maths 64, Multimodal 63, Knowledge 60, Human preference 62, Coding 56, **Agents & tools 51 (its weakest category)**. Effort ladder is mostly inverted (max 56.2 #198; high 50.8 #343 — worse than no-reasoning 54.0 #247), so the base/adaptive config is the one to use.

Agent / tool use:

- Terminal-Bench: public board **53.4% #29**; TB 2.1 (Vals) **57.3% #43** / (AA, adaptive) **71.2% #70**; TB 2.0 (Vals) 59.5% #7; TB Hard **53.0% #17** (max); TB 4.0 (AA) **3.0% #101** (adaptive — near-zero on the newest suite)
- **GDPval-AA: 36.7% #109** (adaptive — gap filled; weak) — conflicts with natural20's "beats every model at office work and finance" launch narrative; the independent number stands
- **τ³-Banking: 34.4% #51** (adaptive — gap filled; weak); τ²-Bench (AA) **79.5% #125** raw strong but mid-ranked in a stacked field; ITBench SRE **39.8% #21**; Analyst Agent **20.0% #23**; APEX-Agents (AA) **28.0% #15** / (Mercor) 43.0% #37
- **MCP Atlas: 69.5% #22** (Scale SEAL); **Tax Agent: 64.8% #20** (Vals); Finance Agent v2 **51.0% #34**; SkillsBench 49.0% #23; Legal Research 38.5% #27; HLAB **5.0% #30**; GBAEval 48.8% #8; ExploitBench 23.6% #5; Vending-Bench 2 **7204.1 #15**
- **DeepResearch Bench: 54.9% #2** (high effort; 50.4% #9 at low) — elite deep-research rank
- OSWorld-Verified 72.1% (BenchLM; vendor claims 72.5% — digitalapplied); OSWorld-Verified 2.0 **8.3–9.3% #10-11** (the 2026 suite is a wall); Claw-Eval 67.8%; Gert Labs 62.92%; JobBench 36.9%; LiveBench Agentic Coding 42.6% #57

Reasoning / knowledge:

- GPQA Diamond: Epoch **87.4% #69** / AA 87.5% #93 (max) / Vals **85.6% #44** — all independent harnesses sit **below the 90% frontier bar** (the vendor's 89.9% is the outlier); the first pass's 79.9% AA figure was the base config
- HLE: AA **33.6% #125** (max/adaptive) vs 13.3% #257 (base) — under the 40% reference even at full effort; vendor 49.0% w/ tools retained
- CritPt: **3.1% #164** (max) / 0.9% (base) — very weak at every effort
- **ForecastBench: 62.0% #2** — elite, best-in-class calibrated forecasting
- **AIME (Vals): 92.3% #20**; OTIS 85.8% #90; ProofBench 45.0% #33; LiveBench Math 87.0% #47; FrontierMath T4 8.3% (weak tier-4)
- ARC-AGI-2 **60.4% #78** (high); ARC-AGI-1 86.5% #92; Mystery Game 14.0% #93; LMCA 46.5% #67; DTBench 89.9% #73; Chess Puzzles 13.0% #117 (weak)
- LMArena: Text 1472 #44, **Hard Prompts 1503 #27**, Longer Queries 1492 #24, Document **1478 #13**, Multi-turn 1481 #39, Creative 1449 #39, EQ-Bench 4 **1207 #15**
- LiveBench: Reasoning 84.8% #38, Data Analysis 78.0% #28, Language 76.1% #45, IF 63.2% #50, global 73.0% #47
- AA Intelligence Index **24.7 #163** (weak composite); Omniscience accuracy 40.9% #112 (max) / non-hallucination **51.5% #103** (max — honesty improves with effort; base 38.6%/31.5% non-hall is the weak read)
- Knowledge: MMLU-Pro 87.3% #29; SuperGPQA 95%; MedQA 92.1% #36; **TaxEval 77.1% #4**; LegalBench 82.1% #71; CorpFin 65.3% #29; CaseLaw 64.0% #14; EMB 60.1% #31; Public Benefits 62.5% #22; SimpleQA Verified 35.5% #47 (weak short-fact accuracy); DrugDiscovery 31.3% #14; GDP.pdf 18.0% #29

Coding:

- SWE-bench Verified: vendor **79.6%** (agentmarketcap: "1.2 points behind Opus 4.6 at one-fifth the cost") / Epoch **75.2% #14** / Vals 77.4% #34 — harness spread 75–80%, all retained
- LiveCodeBench (Vals) **82.1% #55**; LiveBench Coding **79.3% #24**; LMArena Coding **1528 #25** / WebDev 1522 #47; WeirdML 66.1% #40
- SciCode **46.8–50.1% #103-122** (below the 55% reference at every effort); **DeepSWE v1.1: 29.9% #64** (gap filled — weak); Vibe Code v1.1 51.5% #47; Code Migration 39.9% #26; ProgramBench 0.5% #13 (Vals convention); SWE Atlas Refactoring 32.2% #13 / Test Writing 31.8% #15; FrontierCode 24.3% #34; ALE-Bench 1327.3 #24; TB 4.0 coding-adjacent 3.0% #101
- SWE-bench Pro: still no verified public score (unchanged)

Long context:

- **1M GA** (March 2026, standard pricing); AA-LCR **80.0% #73** at max effort vs 68.3% #224 at base — effort buys long-context quality; LMArena Document 1478 #13; no MRCR/RULER number published.

Multimodal:

- MMMU-Pro: Vals **83.6% #30** (much stronger than the dated 70.6% #136 AA base read) / AA 73.3% #119 (max); LMArena Vision 1283 #34; CharXiv 77.4%; MortgageTax 67.7% #22; SAGE 46.6% #34 (weak); Design Arena Website 1295; Blueprint-Bench 2 6.7% #25 (weak).

### Normalized scores (1–100)

- **Tool use: 66/100.** Lowered from 70: the gaps filled in weak — GDPval 36.7% #109, τ³ 34.4% #51, ITBench 39.8%, Analyst 20.0% #23, APEX-AA 28.0% #15, OSWorld-2.0 ~8-9%, TB 4.0 3.0% #101 — offset by the elite DeepResearch #2, TB Hard #17, MCP Atlas 69.5% #22, and Tax 64.8% #20. BenchLeader's own Agents & tools category: 51.
- **Reasoning: 64/100.** Lowered from 65: every independent GPQA harness lands below the 90% bar (87.4/87.5/85.6), HLE 33.6% #125 is under the 40% reference, CritPt 3.1% #164 and AA II 24.7 #163 are weak — but ForecastBench #2, AIME 92.3% #20, Hard Prompts #27, and AA-LCR 80% #73 (max) hold the mid band.
- **Context window: 95/100.** Raised from 70: the first pass scored the 200K default; 1M has since gone GA (2026-03-14) at standard pricing with no flags — full 1M-tier credit, backed by AA-LCR 80.0% #73 and Document #13.
- **Multimodal: 70/100.** Raised from 68: the Vals MMMU-Pro 83.6% #30 replaces the dated 70.6% base-config read; Vision 1283 #34 and CharXiv 77.4% are mid-pack; SAGE 46.6% and text-only output cap it.
- **Coding: 72/100.** Held: SWE-bench Verified 75–80% across harnesses (#14 Epoch), LCB 82.1% #55, LiveBench Coding #24 and LMArena Coding #25 are strong; SciCode below the reference, DeepSWE 29.9% #64, Vibe 51.5% and the SWE Atlas ~32% rows keep it out of the top band.
- **Cost efficiency: 60/100.** Held: $3/$15 matches the ≈60 anchor — though independent reviews (agentmarketcap, vtechnews, localaimaster) repeatedly crown it "best value frontier model" at ~1/5 of Opus 4.6's cost, the price itself is unchanged.
- **Overall Score: 73/100.** (66 + 64 + 95 + 70 + 72) / 5 = 73.4 → 73, up from 69.0 — mostly on the 1M-GA context correction. Best-fit: the value pick of the Claude line — near-Opus coding, elite forecasting/deep-research, and a now-ungated 1M window at Sonnet pricing; weak on the newest agent suites (TB 4.0, OSWorld 2.0), so route long-horizon agent work elsewhere.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full effort-ladder as of 2026-10-09; Epoch AI Benchmarking Hub; Artificial Analysis incl. the `-adaptive` variant; Vals AI; Scale AI SEAL; LiveBench; LMArena; DDG-lite searches surfacing the nstarx 1M-context doc, the 2026-03-14 GA notice, neowin/theaitrack launch coverage, agentmarketcap/vtechnews/localaimaster/natural20 independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
