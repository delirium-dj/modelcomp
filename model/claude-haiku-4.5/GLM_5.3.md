# Claude Haiku 4.5 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-haiku-4-5`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small-fast tier (released **2025-10-15**), pitched as "near-frontier intelligence" — near-Sonnet-4 coding at one-third the cost. Second pass adds the settled ladder and a succession event: **Claude Haiku 5.5 replaced it on 2026-10-07 at $0.10/$0.50 — 90% cheaper — with a 1M window instead of 200K and higher scores on every launch benchmark that lists both** (apidog/AWS/explainx), completing the 5.5 family nine days after Sonnet 5.5. The settled 4.5 profile: **best config is no-reasoning at 48.5 #408 (lower half — an inverted ladder; thinking reads worse)**, with elite honesty (74.3% #25), BFCL 68.7% #6, and ForecastBench 61.4% #9 — against τ³ 9.3% #147, GDPval 11.6% #188, CritPt 0.0%, and Multimodal 38 as its worst category. Top use case (remaining): pinned legacy sub-agent execution where 4.5's snapshot and shapes are load-bearing — everything else should move to 5.5.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`); Amazon Bedrock `anthropic.claude-haiku-4-5` ($1.10/$5.50); Google Vertex `claude-haiku-4-5@20251001` ($1.10/$5.50, up to 196 tok/s); Azure ($1.00/$5.00, 120 tok/s); Anthropic first-party ($1.00/$5.00) — **seven live provider rows**; on OpenCode Zen via `https://opencode.ai/zen/v1/messages` (`opencode/claude-haiku-4-5`).
- **Release / knowledge:** **2025-10-15** (confirmed); reliable knowledge cutoff Feb 2025, training data cutoff Jul 2025; **superseded 2026-10-07 by Haiku 5.5** (with 10 documented breaking changes — apidog).
- **IDs:** `claude-haiku-4-5-20251001` (alias `claude-haiku-4-5`); Zen `opencode/claude-haiku-4-5`. No Free ID on Zen.
- **Context window:** 200K in / 64K max output (confirmed) — now one-fifth of its successor's window.
- **Modalities:** text and image in, text out; vision; tool use; extended thinking via manual `budget_tokens` (no `effort` parameter — and the measured ladder shows thinking *hurts* its index); multilingual.
- **Pricing (as of 2026-10-13):** $1.00 / $5.00 per MTok (list; Vertex/Bedrock $1.10/$5.50); cached read $0.10; batch 50% off. **Successor at $0.10/$0.50 with a 100K price cliff** — 4.5's relative value has collapsed.
- **Architecture:** proprietary, size undisclosed; ASL-2; "most-aligned model at release" per Anthropic.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = no-reasoning **48.5 #408/760** — the lower half; the thinking config reads 46.8 #453, an inverted ladder where thinking hurts). Category scores: **Knowledge 58 (best)**, Agents & tools 57, Composite 47, Long context 49, IF 45, Reasoning 41, **Multimodal 38 (worst)**.

Agent / tool use:

- **BFCL Overall: 68.7% #6** — elite function calling (the "surpasses Sonnet 4 at computer use" launch claim lands here); Terminal-Bench 2.1: AA **44.2% #126** / Vals 43.8% #63 (confirms the ~41-44% official band); TB public 35.5% #54; TB Hard 27.3% #126; **TB 4.0: 0.0% #146**
- **τ²-Bench: 54.7% #185 (thinking)** / 32.5% #245; **τ³-Banking: 9.3% #147** (dreadful — gap filled); **GDPval-AA: 11.6% #188** (dreadful — gap filled)
- **DeepResearch Bench: 45.5% #29**; BALROG 31.2% #17; ExploitBench 13.7% #8; MCP Atlas 40.2% #33; ITBench 27.3% #35; Analyst 15.0% #30; **HLAB 0.8% #48**; Legal Research 10.6% #59; Tax 28.3% #54; Finance 31.0% #60; Vending-Bench 2 458.9 #57 (weak); DeepSearchQA 12.8% #12; JobBench 16% (retained); Claw-Eval: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 71.2% #163 / AA 64.7-67.2% #315-338 / **Vals 72.2% #84** — below the bar on every harness (confirmed)
- HLE: AA **4.2% #506 (no-reasoning) / 10.4% #306 (thinking)** — dreadful; **CritPt: 0.0% #302** (floor); ARC-AGI-2 1.3-4.0% #164-192; ARC-AGI-1 14.3-47.7%
- **ForecastBench: 61.4% #9** (elite — the standout); DTBench 73.6% #133; LMCA 30.9% #114; Chess 8% #140
- Math: **MATH Level 5: 96.4% #11**; MGSM 92.2% #21; AIME (Vals) 82.7% #44 (thinking); OTIS 66.7% #144; Omni-MATH (HELM) 56.1% #12; FrontierMath v2 5.9%/2.1% (weak, retained)
- **Honesty elite: AA-Omniscience non-hallucination 74.3% #25 (no-reasoning) / 72.7% #32 (thinking)** — but accuracy 14.4-18.0% #333-420 (honest, knows little); Omniscience −4.4 #153; SimpleQA 13.2% #76 (weak)
- **AA II 16.9 #256 (thinking) / 15.4 #271** (the first pass's "no AA page" gap filled); ECI 142.4 #98; **HELM mean 71.7% #22, WildBench 83.9% #15** (era-ranks); MMLU-Pro 78.7% #95; LegalBench 81.2% #79; **MedScribe 85.2% #28**; MedQA 79.6% #70; CorpFin 60.6% #66; TaxEval 67.5% #102; EMB 22.7% #59

Coding:

- **SWE-bench Verified: official board 66.6% #15-16 (high)** / Vals 66.6% #68 (confirms the 73.3% official 50-trial figure's band); SWE-Bench Pro 39.5% #12; VulcanBench 76.2% (retained)
- Weak: LiveCodeBench 41.2% #124 (confirms); SciCode 42.3-43.3% #135-152; **Vibe Code v1.1: 11.4% #84** (gap filled — weak); **Code Migration 7.5% #55; ProgramBench 0.0%**; ALE 653.5 #85; WeirdML 45.4% #86; TB 4.0 0.0%; LMArena Coding 1481 #102 / WebDev 1330 #110

Long context:

- 200K/64K; AA-LCR 49.7% #311 (no-reasoning) / **74.3% #156 (thinking)**; LMArena Document 1419 #42; no MRCR/RULER rows.

Multimodal:

- **Category 38 — its worst.** MMMU-Pro: Vals 46.1% #88 (weak) / AA 55.1-58.5% #213-224; SAGE 31.8% #73 (weak); MortgageTax 62.2% #54; Blueprint 0.0% #27; Vals MM Index 42.9% #28. Text+image in, text out.

Preference/IF:

- IFBench 42.0-54.3% #151-237 (weak); MultiChallenge 50.5% #25; preference mid-low (Text 1414 #131, Multi-turn 1425 #117, EQ-Bench 1064 #25).

### Normalized scores (1–100)

- **Tool use: 58/100.** Raised from 55: BFCL 68.7% #6 is elite and DeepResearch #29 / BALROG #17 / ExploitBench #8 are decent — against τ³ 9.3% #147, GDPval 11.6% #188, HLAB 0.8% #48, TB 4.0 0.0%, and mid-low terminal rows; the launch's computer-use claim lands in the function-calling elite, not the agent suites.
- **Reasoning: 54/100.** Lowered from 62: GPQA 64.7-72.2% below the bar everywhere, HLE 4-10%, CritPt 0.0%, ARC-AGI-2 1-4%, and AA II 16.9 #256 — offset by ForecastBench 61.4% #9, MATH L5 96.4% #11, MGSM 92.2% #21, and the elite honesty (74.3% #25) that the "most-aligned" claim corroborates.
- **Context window: 70/100.** Held: 200K/64K anchor tier — but its successor's 1M window makes this the family's smallest.
- **Multimodal: 54/100.** Lowered from 65: category 38 is its worst — Vals MMMU-Pro 46.1% #88, SAGE 31.8%, Blueprint 0.0%; the image-in band floor.
- **Coding: 62/100.** Lowered from 75: the SWE-V cluster (66.6% #15-16 board) is genuinely decent for the class — but LCB 41.2% #124, SciCode ~43%, Vibe 11.4% #84 (gap filled), Code Migration 7.5%, and ProgramBench 0.0% cap it well below the "near-Sonnet-4" pitch.
- **Cost efficiency: 72/100.** Lowered from 88: $1/$5 with 10%-price cache reads and 50% batch was good value — until **Haiku 5.5 shipped at $0.10/$0.50 (90% cheaper) with 1M context and better scores on every shared benchmark**; 4.5's price didn't change, but its value proposition did.
- **Overall Score: 60/100.** (58 + 54 + 70 + 54 + 62) / 5 = 59.6 → 60, down from 65. Best-fit: a legacy pinned-snapshot sub-agent — elite function calling and honesty, elite forecasting, decent SWE-V per dollar *at its own price* — but with a 2026-10-07 successor that is 90% cheaper, 5× the context, and strictly better measured, every unpinned workload should migrate to Haiku 5.5.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full 5-setting ladder aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL incl. SWE-Pro/MCP Atlas, HELM Capabilities, BFCL, BALROG, ExploitBench, ForecastBench, Andon Labs, Kaggle; seven live provider rows; DDG-lite searches surfacing the Haiku 5.5 succession coverage — computingforgeeks/qcode/cellcog/we0/oflight/explainx/threatfrontier/apidog and the AWS Bedrock announcement — the 2026-10-07 release date, the $0.10/$0.50 pricing, the 1M-vs-200K context jump, the 90%-cheaper claim, and the 10 breaking changes; first-pass official rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
