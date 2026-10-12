# Gemini 3.6 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 2026 Flash reasoning model — the efficiency release of the Flash line: 17% fewer output tokens than 3.5 Flash, native computer use built in (OSWorld-Verified 83%), DeepSWE improved 37%→49% and MLE-Bench 49.7%→63.9% over 3.5. Second-pass verdict: the vendor claims it "beats 3.5 on every benchmark", but the independent composite disagrees — BenchLeader places 3.6 Flash **#104 (60.4) BELOW 3.5 Flash (#67, 63.0)**: "faster and cheaper, but not smarter" (emergent.sh). Top use case: budget computer-use and high-throughput agentic work.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.6-flash` (Google AI SDK); Google AI Studio / Gemini API (official docs page published); Google AI Studio + Vertex endpoints on OpenRouter at $0.75/$3.75 (plus a $0.375/$1.88 discount tier and $1.35/$6.75 routed tier).
- **Release / knowledge:** 2026-07-21; **knowledge cutoff March 2026** (official DeepMind model card — some domains limited to January 2025 per the Gemini 3 family baseline; second-pass fact).
- **IDs:** `opencode/gemini-3.6-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (AA/BenchLM; all endpoints serve 1.0M).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (effort levels; high is the best-measured setting); tool calls; JSON mode; **computer use built in** (launch feature).
- **Pricing (as of 2026-10-12):** launched at $1.50/$7.50, **since cut to $0.75/$3.75 first-party** (felloai; BenchLeader blended $1.50/M; price history shows ~$0.825/$4.13 current effective) — half of 3.5 Flash's price; cached read $0.075-0.15. 197 tok/s (fastest quarter), ~14 s first answers, chat ~$0.0014, agentic session ~$0.06; $1.60 per Intelligence-Index run (the 17% token-efficiency gain is partly offset by max-effort verbosity).
- **Architecture:** proprietary; parameter count undisclosed. Composite trackers: BenchLeader 60.4 #104 (trend 46→65 rising; last measured 9 Oct 2026), BenchLM 63.15 #41 (10 rows), Epoch ECI 154.3 #36, AA II 34.0 #92 (a launch-era "AA Index 50" press claim is discarded as pre-settling noise — same pattern as 3.5 Flash).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83%** (vendor — elite, the computer-use headline); Terminal-Bench 2.1: **77.5% #57** (AA, high) / **73.8% #21** (Vals); Terminal-Bench 4.0: **7.1% #88** (AA — near-total miss); Terminal-Bench Science: **4.3% #17** (Vals)
- GDPval-AA: **1423 Elo** vendor / **39.1% #98 normalized** (AA, high — bottom-third); AA Agentic Index 30.1%; AA-Briefcase: no row found
- **LMArena Agent: −7.8 #44** (negative — the worst in this batch); LiveBench Agentic Coding **43.4% #56**; APEX-Agents 46.9% #32
- τ³-Banking: **29.9% #64** (AA, high — found this pass; weak); CyberBench 45.4% #35; Finance Agent **56.3% #16**; Tax Agent 49.9% #39; Legal Research 25.0% #45; Harvey HLAB 3.3% #35; FACTS Search 68.2% #15
- Claw-Eval / Toolathlon / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **94.1% #9** (Epoch, high) / **92.8% #28** (AA) / **93.4% #7** (Vals) — top-10 across all three harnesses, the model's strongest axis
- HLE (AA): **40.8% #76** (high) — right at the 40% reference; CritPt: **10.6% #108** (weak)
- ARC-AGI-2: ladder 2.6% (minimal) → **60.4% #78** (high); ARC-AGI-1: 91.2% #59
- Math: AIME 2026 **96.7% #6**, HMMT Feb 2026 89.4% #14, MathArena Apex 26.0% #12, OTIS 94.2% #51, FrontierMath Tiers 1-3 59.0% #38 / Tier 4 21.9% #47, LiveBench Mathematics 86.4% #50, LMArena Maths **1503 #12**, ProofBench 36.0% #37
- LiveBench: Reasoning 85.2% #37, global 73.6% #43, Data Analysis 63.0% #59, Language **83.9% #17**, IF **75.4% #9**; LMArena: Text 1482 #23, Hard Prompts 1501 #30, Creative Writing **1471 #15**, Multi-turn 1487 #23
- Chess 40.0% #24; Mystery Game 30.0% #31; LMCA 44.9% #73; DTBench 95.5% #29
- MMLU-Pro **89.3% #13** (Vals); SimpleQA Verified **66.2% #11**; LegalBench **86.7% #11**; TaxEval 74.9% #25; EMB 65.4% #22; MedCode 53.1% #11; MedScribe 79.7% #57; Public Benefits 56.6% #34; BioMysteryBench 58.5% #20; CorpFin 63.3% #45
- Omniscience: index 22.1 #54, accuracy 50.0% #60, non-hallucination 44.4% #138 (hallucination ~55.6% — weak honesty, slightly better than 3.5 Flash's 61%); AA-LCR 80.0% #73; MLCR: no row found this pass
- Composites: AA II 34.0 #92; Epoch ECI 154.3 #36; Vals Multimodal Index 65.1% #13

Coding:

- LiveCodeBench (Vals): **88.1% #8** — top-10; SWE-bench (Vals): 79.6% #25; LiveBench Coding 77.9% #34
- Vibe Code Bench v1.1: 64.0% #39 (found this pass); Code Migration 30.9% #34; IOI 35.1% #32; ProgramBench 0.0%; ALE-Bench 715.5 #78
- DeepSWE: **46.7% #51** (Epoch; vendor 49.0% — the 37%→49% launch improvement over 3.5); SciCode **52.7% #72-78** (below the 55% reference); AA Coding Index 69.2%; CursorBench 3.2 53.5%; FrontierCode 34.4% #26; WeirdML 56.1% #57
- LMArena Coding 1518 #39 / WebDev 1538 #43 (mid-weak)
- SWE-bench Verified (Vals) 79.6% retained as the Verified proxy (unchanged)

Long context:

- 1M window; AA-LCR 80.0% #73 (mid); LMArena Document 1453 #28; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- LMArena Vision **1298 #20**; MMMU-Pro Vals **88.4% #7** / AA 83.2% #26; Vals Multimodal Index **65.1% #13**; SAGE 48.7% #25; MortgageTax 67.6% #24; Blueprint-Bench 2 31.2% #13; Design Arena 1310 — full text+image+speech+video input with top-20 vision.

### Normalized scores (1–100)

- **Tool use: 75/100.** Lowered from 78: the independent professional-agent picture is worse than the 2026-09-24 read — GDPval normalized 39.1% #98, LMArena Agent −7.8 (negative), LiveBench Agentic 43.4% #56, τ³ 29.9% #64, TB 4.0 7.1% #88, TB Science 4.3%. OSWorld-Verified 83% (the built-in computer-use feature), TB2.1 73.8-77.5%, Finance Agent #16, APEX #32, and FACTS #15 keep it a computer-use specialist — not an all-round agent.
- **Reasoning: 80/100.** Lowered from 82: GPQA 94.1% #9 is elite and AIME 96.7% #6 / LMArena Maths #12 lift, but AA II 34.0 #92, ARC-AGI-2 60.4% #78, CritPt 10.6% #108, HLE at the 40% line, and 55.6% hallucination place the composite mid-high — corroborated by the "not smarter than 3.5" independent verdict.
- **Context window: 95/100.** Held: 1M total (≥1M tier); AA-LCR 80.0% #73 does not meet a ≥98% bar.
- **Multimodal: 90/100.** Held: text+image+speech+video input with Vision #20, Vals MMMU-Pro #7, and Vals Multimodal Index #13.
- **Coding: 75/100.** Held: LiveCodeBench 88.1% #8 and SWE-bench 79.6% #25 anchor; DeepSWE 46.7% #51, SciCode below the reference, IOI #32, ALE #78, TB 4.0 7.1% cap.
- **Cost efficiency: 84/100.** Raised from 80: the post-launch price cut to **$0.75/$3.75 first-party** (half of 3.5 Flash, half of its own launch price) plus 197 tok/s and the 17% token-efficiency gain move it near the ~$0.60/$2.20 (≈92) anchor's neighborhood; the $1.60/II-run verbosity and router-tier markups temper it.
- **Overall Score: 83/100.** (75 + 80 + 95 + 90 + 75) / 5 = 83.0 → 83, down from 84.0: the second pass revealed the general-agent regression behind the efficiency story. Best-fit: budget computer-use and high-throughput multimodal agent jobs at the Flash line's best price — but the measured intelligence is a half-step back from 3.5 Flash, and 3.7/3.8 Flash supersede it at equal or lower cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Google's Gemini 3.6 Flash official docs page and DeepMind model card PDF — knowledge-cutoff fact, Artificial Analysis model benchmarks, BenchLeader data as of 2026-10-12 with the effort ladder, BenchLM composite via its October snapshot, Vals AI, LiveBench, LMArena, Epoch hub, ARC Prize, Scale SEAL, Mercor APEX, MathArena, Kaggle/Google FACTS; three successful web searches; independent reviews: ai-geminiomni, emergent.sh, tryfriday, apidog, myclaw, aimadetools ×2, aitoolsrecap, musespark, aitoolsreview, felloai, ai-tldr, praveentechworld); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
