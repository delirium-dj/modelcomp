# Claude Opus 4.6 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's late-2025 Opus model (released 2025-12-17 — second-pass fact), two generations behind Opus 5; deployed under the AI Safety Level 3 Standard per its 112-page system card, which pitches "1M token context window (beta) with state-of-the-art retrieval performance". Top use case: legacy Opus-class coding/computer-use continuity on existing pipelines.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); Anthropic API and cloud partners. Composite trackers: BenchLeader **63.1, #64 of 760** ("not stated" config best; effort ladder: no-reasoning 56.8 #180, high 60.8 #99, max 57.6 #163, thinking 62.5 #78; trend 49→68 rising; last measured 9 Oct 2026), BenchLM **62.12, #45 of 889** (36 rows). **Agents & tools 69 is its best BenchLeader category**.
- **Release / knowledge:** 2025-12-17; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-opus-4.6` (Zen ID `claude-opus-4-6`; no Free ID — paid only); an "Adaptive"/thinking sibling (`claude-opus-4-6-thinking`) exists and carries several of the best rows.
- **Context window:** 1M tokens total (system card: beta with SOTA-retrieval claim; one review lists 1.2M — unverified, 1M retained).
- **Modalities:** text/image in; text out; base config non-reasoning (adaptive/thinking sibling available and measurably stronger); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $5.00 in / $25.00 out per 1M (cached read $0.50); BenchLeader blended $10.00/M — among the most expensive; 40 tok/s (slowest quarter, OpenRouter traffic), ~1.6 s first token.
- **Architecture:** proprietary; parameter count undisclosed. System-card situational-awareness note: the model distinguishes evaluation environments from real deployment 80% of the time, identifies simulated interactions from a single conversation 45.5% of the time, but verbalizes that awareness in only 2.3% of interactions (down from 11% in previous models).

### Raw benchmarks found

Agent / tool use:

- **Cybench: 93.0% #1** (effort not stated — the board's best); **Terminal-Bench (public): 79.8% #5**; Terminal-Bench 2.0: 65.4% vendor / **58.4% #10** (Vals); Terminal-Bench Hard: 46.2-48.5% #26-30 (AA)
- **DeepResearch Bench: 55.3% #1** (high); **METR Time Horizons: 78.9% #2** (effort not stated); Vending-Bench 2: 8017.6 #12
- Tau2-Bench Telecom: 84.8% (no-reasoning) → **92.1% #53** (max, AA); MCP-Atlas: **76.8% #16** (Scale SEAL, max); HiL-Bench 38.3% #8; Claw-Eval 70.4%
- OSWorld-Verified **72.7%**; BrowseComp **83.7%**; DeepSearchQA 73.7%; CyberGym 66.6%; Gert Labs 61.85%; JobBench 36.7%; APEX-Agents 46.3% #33; AA-APEX 33.0% #10; Remote Labor Index 4.2% #8; LiveBench Agentic Coding 49.0% #45
- GDPval-AA / Tau3-Banking: no verified public score found for this ID (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (vendor-era BenchLM row) / **90.5% #40** (Epoch, not stated) / 88.4% #57 (thinking) / **89.7% #28** (Vals, thinking) / 84.0% #147 (AA, no-reasoning)
- HLE — wide spread retained: **53.0% w/ tools / 40.0% w/o** (vendor) / **34.4% #10** (Scale board, max) / 39.9% #80 (AA, max) / 19.1% #211 (AA, no-reasoning)
- **LMArena (high effort): Hard Prompts 1533 #3 / 1527 #5, Instruction Following 1513 #3 / 1500 #6, Coding 1550 #4 / 1548 #6, Maths 1518 #6 / 1507 #9** — four top-6 boards
- LiveBench Reasoning **88.7% #20** (high); SimpleBench 67.6% #16; Kagi LLM Benchmark **83.6% #5** (thinking) / 72.4% #23
- ARC-AGI-2: 64.6-69.2% #55-69 (ladder); ARC-AGI-3: **0.5% #35** (max — near-total miss); ARC-AGI-1: 94.0% #41 (high)
- CritPt: 12.6% #98 (max) / 2.8% #176 (no-reasoning — the first-pass read was the weak config); Mystery Game 25.0% #44 (max); Chess 14-17% #101-110; LMCA 55.8% #30 (max); DTBench 91.2% #58 (max); CL-bench Life 17.0% #5 (high); ForecastBench 60.0% #33
- Math: AIME25 **99.8%** / AIME 2026 **96.7% #6**, HMMT Feb 2026 **96.2% #5**, AIME (Vals) 95.6% #8, MathArena Apex 34.5% #8, OTIS 94.4% #49 (thinking), FrontierMath 66.0% #30 / 26.8% #39 (max), LiveBench Math 89.3% #38, ProofBench 50.0% #28
- Knowledge: MMLU-Pro **89.1% #15** (thinking); SimpleQA Verified 47.0% #33; LegalBench 85.3% #20; CorpFin 67.0% #13; TaxEval **76.0% #8**; MedQA **95.4% #12**; PRBench Finance **53.3% #4** / Legal **52.3% #5** (no-reasoning); MultiNRC 57.1% #8; CaseLaw 62.1% #20; MedScribe 86.1-86.7% #19-22; MedCode 48.2-49.1% #23-28; DrugDiscovery 27.7% #17; EBR 12.7% #17
- Omniscience: index 13.7 #83 (max), accuracy 47.0% #76, **non-hallucination 37.2% #170** — hallucination ~63% at max (the first-pass 80.1% was the no-reasoning config: non-hallucination 19.9% #271 — effort-dependent honesty, both retained)
- AA Intelligence Index: 26.4 (the dated no-reasoning-era listing — retained with the effort caveat); AA-LCR **67.0%**; MLCR: no row found this pass

Coding:

- SWE-bench Verified: **80.8%** (vendor-era) / **78.7% #4** (Epoch, effort not stated) / **75.6% #4** (bash-only, swebench.com) / **78.2% #30** (Vals)
- **SWE-Bench Pro: 51.9% #4** (Scale SEAL, thinking — #4 rank on a low absolute); LiveCodeBench Pro 70.7%; LiveCodeBench (Vals) **84.7% #36** (thinking); SWE-Rebench 65.3%; WeirdML 78.0% #21; LiveBench Coding 78.2% #31
- GSO-Bench 41.2% #8; React Native Evals 84.1%; Vibe Code 53.5-57.6% #43-45; FrontierCode 26.6% #31; SWE Atlas Refactoring 35.6% #11 / Test Writing 36.7% #14; ALE-Bench 996.5 #52; AlgoTune 1.5 #12; CursorBench rows n/a
- DeepSWE: no verified public score found (unchanged)

Long context:

- 1M window (beta, SOTA-retrieval claim per system card); AA-LCR 67.0% (mid); no MRCR/RULER number in independent coverage (unchanged).

Multimodal (grounding):

- MMMU-Pro **77.3%** (AA 72.5%); ScreenSpot Pro **83.1%**; MedXpertQA-MM 64.8%; ERQA 51.6%; Design Arena Website **1302** — text+image band.

### Normalized scores (1–100)

- **Tool use: 82/100.** Raised from 80: the second pass surfaced a top-tier cyber/research-agent cluster the first pass missed — Cybench 93.0% #1, DeepResearch 55.3% #1, METR Time Horizons 78.9% #2, Terminal-Bench 79.8% #5, plus τ² 92.1%, MCP-Atlas 76.8% #16, Claw-Eval 70.4%, OSWorld 72.7%, BrowseComp 83.7%. Capped by RLI 4.2%, LiveBench Agentic #45, APEX #33, and the still-missing GDPval/Tau3 rows.
- **Reasoning: 80/100.** Raised from 78: the high/thinking configs are genuinely elite on preference and controlled boards — LMArena Hard Prompts #3, IF #3, Maths #6, Kagi #5, AIME 96.7% #6, HMMT 96.2% #5, LiveBench Reasoning #20, SimpleBench #16 — and the first-pass CritPt 2.8% read turns out to be the no-reasoning config (max: 12.6% #98, still weak but less damning). Remaining caps: ARC-AGI-3 0.5%, ARC-AGI-2 ~69% #55, ~63% hallucination at max, AA-LCR 67.0%.
- **Context window: 95/100.** Held: 1M total (beta) with the system card's SOTA-retrieval claim; no independent ≥512K retrieval number to verify it.
- **Multimodal: 70/100.** Held: text+image in, text out; MMMU-Pro 77.3% / ScreenSpot Pro 83.1% keep the top of the image-in band.
- **Coding: 76/100.** Held: SWE-bench Verified 78.7% #4 (Epoch) and LMArena Coding 1550 #4 anchor; SWE-Pro 51.9% #4 (low absolute), FrontierCode 26.6%, SWE Atlas ~36%, Vibe Code #43-45, ALE #52 cap.
- **Cost efficiency: 55/100.** Held: $5/$25 Opus-class pricing for two-generation-old intelligence at 40 tok/s (slowest quarter); poor value vs Opus 5 at the same price.
- **Overall Score: 80.6/100.** (82 + 80 + 95 + 70 + 76) / 5 = 80.6, up from 79.8 via the Tool and Reasoning corrections. Best-fit updated: less "continuity pick" than the first pass thought — still a top-5 terminal agent and the board's best cyber model (Cybench #1) with elite preference scores — but Opus 4.8/5 strictly dominate it at equal price, so it remains a legacy-pipeline choice.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Anthropic's Opus 4.6 system card PDF and landing page — release date, AI Safety Level 3, retrieval claim, situational-awareness findings via thezvi/aireflects/geeky-gadgets coverage, Artificial Analysis model benchmarks, BenchLeader data as of 2026-10-12 with the 7-setting effort ladder, BenchLM composite via its October snapshot, Vals AI, LiveBench, LMArena, Epoch hub, ARC Prize, Scale SEAL, Mercor APEX, Cybench, METR, OSWorld, Andon Labs; three web-search attempts — one successful multi-result search, one blocked by a bot challenge, one engine-irrelevant — alongside the aggregator fetches; reviews: aitoolsreview, benchmarklist); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
