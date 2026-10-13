# Claude Opus 4.5 — findings by GLM 5.3

- Source: Anthropic/Claude Opus 4.5 (`claude-opus-4-5-20251101`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-27 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship "Opus" model released 2025-11-24, pitched as "the best model in the world for coding, agents, and computer use" — now a legacy tier (superseded by 4.6 → 4.7 → 4.8 → 5 → 5.5; migration guides since March 2026). Second pass validates the launch story better than most: **SWE-bench Verified board #1 at high effort (76.8%), BFCL 77.5% #1, Cybench 82.0% #2, GDPval 45.5% #2 (original), METR 75.0% #5** — Agents & tools 75 is its best category — while its general reasoning has clearly aged (GPQA 85.9-86.6% below the bar; **IF 54 is its worst category**). Still served (last measured 2026-10-07).
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock (`anthropic.claude-opus-4-5-20251101-v1:0`), Google Cloud (`claude-opus-4-5@20251101`), Microsoft Foundry.
- **Release / knowledge:** 2025-11-24 (confirmed); reliable knowledge cutoff May 2025, training data cutoff Aug 2025.
- **IDs:** `claude-opus-4-5-20251101` (alias `claude-opus-4-5`). No Free ID on Zen; paid only.
- **Context window:** 200K tokens / 64K max output (confirmed).
- **Modalities:** text + image in; text out; extended thinking (thinking is its best config); tool calls, JSON mode, prompt caching, batch API.
- **Pricing (as of 2026-10-12):** $5 in / $25 out per 1M (cache write $6.25 5m / $10 1h; cache read $0.50; batch 50% off); blended $10.00/M — "among the most expensive ranked models"; 53 tok/s (slower than most), 19 s first answer.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass replaces the announcement-only picture with the full BenchLeader ladder (best = thinking **60.0 #108/760**, trend 51→57→64 stable, last measured 2026-10-07). Category scores (thinking): **Agents & tools 75 (best)**, Maths 64, Composite 62, Knowledge 61, Coding 61, Long context 64, Multimodal 57, Reasoning 54, **Instruction following 54 (worst)**.

Agent / tool use:

- **GDPval (original OpenAI board): 45.5% #2** — elite for its era; **Cybench: 82.0% #2** (elite security); **BFCL Overall: 77.5% #1** (elite function calling — the launch "best tool calling" claim independently confirmed)
- **METR Time Horizons: 75.0% #5** (elite long-horizon autonomy); **DeepResearch Bench: 54.8% #3 (high) / 53.7% #5 (low)**; **MCP Atlas: 69.8% #21**
- **Terminal-Bench public board: 63.1% #13** — the first pass's derived "low-60s" estimate was exact; TB 2.0 (Vals) 53.9% #16 / 58.4% #10; **TB Hard: 47.0% #27 (thinking)**
- **τ²-Bench: 85.3% #2 (official board) / 89.5% #68 (AA, thinking)** — τ³: still no verified public score; **Remote Labor Index: 3.8% #9** (weak)
- Vending-Bench 2: 4967.1 #32; BALROG 43.0% #11; Poker 1033.4% #10; LiveBench Agentic Coding 39.7% #62 (weak); DeepSearchQA 24.0% #10; BrowseComp-Plus 85.3% w/ tools (launch row retained); Claw-Eval / Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 86.0% #79 / AA 86.6% #106 (thinking) / Vals 85.9% #43 — below the 90% bar on every harness
- HLE: Scale-CAIS 25.2% #15 / AA 30.1% #140 (thinking) — below the 40% reference; **CritPt 4.6% #152** (very weak); ARC-AGI-2 37.6% #110; ARC-AGI-1 80.0% #107
- Math: **AIME (Vals) 95.4% #12; MGSM 95.2% #1**; OTIS 86.1% #89; LiveBench Math 90.4% #35 (high); FrontierMath T1-3 34.4% #63 / **T4 4.9% #61** (weak); ProofBench 36.0% #37; SimpleBench 62.0% #22; **Kagi 80.2% #8; SciPredict 23.1% #2**; ForecastBench 60.7% #22; CL-bench 21.1% #4
- Honesty mediocre: **AA-Omniscience non-hallucination 39.0% #161 (thinking)** (accuracy 46.6% #78, index 14.0 #83); SimpleQA 45.7% #36; EBR 14.3% #16
- Knowledge: MMLU-Pro 87.3% #31; **MedQA 95.9% #10**; LegalBench 84.6% #29; TaxEval 74.9% #25; MedScribe 85.3% #26; CaseLaw 62.6% #18; CorpFin 65.1% #34; MedCode 49.2% #22

Coding:

- **SWE-bench Verified: 76.8% #1 (high, bash-only board) / 74.4% #5 (medium) / Epoch 76.7% #9 / Vals 76.4% #35** — elite for its era (the first pass's derived 81.5% was a few points high; the 76-77% cluster is the verified reality); **SWE-Bench Pro: 45.9% #6** (Scale)
- **LiveCodeBench (Vals): 83.7% #45** — gap filled; **LMArena Coding 1531 #20** (strong preference); LiveBench Coding 79.7% #23 (high); WeirdML 63.7% #41; Aider Polyglot +10.6 pp (launch row retained); SWE Multilingual 7-of-8 lead (launch row retained)
- Caps: **Vibe Code v1.1: 20.6% #69** (weak — gap filled); GSO-Bench 26.5% #14; ALE-Bench 1025.4 #48; AlgoTune 1.8 #5; WebDev 1494 #56

Long context:

- 200K / 64K out; **AA-LCR 77.3% #126 (thinking)** — decent; LMArena Document 1465 #21; no MRCR/RULER rows (unchanged).

Multimodal:

- **MMMU 80.7% #5**; MMMU-Pro: Vals 83.0% #36 / AA 74.0% #111 / official 73.9% #8; **SAGE 52.1% #8** (good grounding); GeoBench 75.0% #9; VISTA 46.4% #21; VPCT 40.0% #16. Text+image in, text out.

Preference/IF:

- Preference holds up: LMArena Text 1474 #41, **Creative 1469 #17**, Multi-turn 1486 #27, **Longer Queries 1495 #21**, Hard Prompts 1501 #30, IF 1484 #18
- **IF is the weak spot: IFBench 58.0% #131, LiveBench IF 62.5% #54, MultiChallenge 59.0% #14 — the IF-54 category (its worst)**; TutorBench 51.2% #16

### Normalized scores (1–100)

- **Tool use: 84/100.** Raised from 82: the year confirmed the launch claims — GDPval #2, BFCL #1, Cybench #2, METR #5, DeepResearch #3, τ² 85.3% #2, MCP Atlas #21, TB public 63.1% #13 — the best tool-calling legacy profile measured this cycle; capped by Remote Labor 3.8%, weak LiveBench Agentic 39.7%, and the still-missing τ³ row.
- **Reasoning: 70/100.** Lowered from 78: GPQA 85.9-86.6% is below the bar on every harness, HLE ~25-30%, CritPt 4.6%, FrontierMath T4 4.9%, and mediocre honesty (39.0% #161) — offset by AIME 95.4% #12, MGSM #1, Kagi #8, SciPredict #2, and SimpleBench #22.
- **Context window: 70/100.** Held: 200K/64K — the anchor tier; AA-LCR 77.3% #126 decent but no large-window option exists.
- **Multimodal: 70/100.** Raised from 66: MMMU 80.7% #5, MMMU-Pro 83.0% #36, SAGE 52.1% #8 and GeoBench #9 measure stronger than the launch-era picture; still image-in/text-out only.
- **Coding: 82/100.** Lowered from 88: the verified SWE-V cluster is 74.4-76.8% (elite ranks — board #1 at high — but not the derived 81.5%), SWE-Pro 45.9% #6 is mid, and Vibe 20.6% #69, GSO 26.5% and ALE #48 cap it; LCB 83.7% #45 and Coding #20 preference keep the upper band.
- **Cost efficiency: 48/100.** Held: $5/$25 with $10/M blended ("among the most expensive"), 53 tok/s; the offsets remain the 48-76% token-efficiency gains, $0.50 cache reads, and 50% batch.
- **Overall Score: 75/100.** (84 + 70 + 70 + 70 + 82) / 5 = 75.2 → 75, down from 77. Best-fit: the strongest legacy tool-caller measured — function calling (#1 BFCL), security (#2 Cybench), long-horizon autonomy (#5 METR) and SWE-V board-topping at high effort; its general reasoning, honesty, and instruction following have aged, and every Opus successor (4.6 → 5.5) beats it per dollar — keep it for tool-heavy legacy pipelines only.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-27 report (BenchLeader full effort-ladder as of 2026-10-07 aggregating the SWE-bench official board, Terminal-Bench public board, METR, τ²-bench official, Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas/SWE-Pro/SciPredict, LiveBench, LMArena, Cybench, BALROG, Andon Labs, Kaggle; DDG-lite searches surfacing the cometapi Opus 4/4.5 pricing retrospective and the zoer.ai Opus 4.5→4.6 migration guide; first-pass launch rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
