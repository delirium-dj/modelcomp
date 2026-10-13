# Grok 4.1 — findings by GLM 5.3

- Source: xAI (`grok-4.1`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (Thinking and Non-Thinking modes)
- **Short description:** xAI's November-2025 conversational-flagship refinement of Grok 4 (released **2025-11-19** per BenchLeader; quiet rollout 2025-11-01→14, per the first pass) — not a new reasoning base, but a reliability and warmth pass that took #1 on LMArena at launch (1483 Elo claim). Second pass fills the empty dossier from BenchLeader's Grok 4.1 page (whose AA rows track the family harness ID): **τ² 93.3% #44, BFCL 69.6% #5, Cybench 39% #6, AIME (Vals) 91.9% #21** — and surfaces a **major honesty conflict: the launch's "~4.2% hallucination rate, down 65%" claim vs the AA-measured non-hallucination of 26.6% #227** (the vendor figure is a different metric/suite; scored on the AA measurement). Superseded by 4.2/4.3; family slugs are being redirected to grok-4.3 (2026-05-15 retirement wave).
- **Provider / access:** xAI API (`grok-4.1`); consumer free with daily limits (Grok app), higher via SuperGrok ($30/mo) / X Premium+ ($40/mo); the Fast variant redirects to grok-4.3 since 2026-05-15 (promptfoo).
- **Release / knowledge:** **2025-11-19** (BenchLeader; quiet rollout from 11-01); knowledge cutoff not disclosed.
- **IDs:** `grok-4.1` (xAI); the separate 2M-context Fast variant is tracked in its own folder and is redirecting.
- **Context window:** 256,000 tokens (base; 2M on the Fast variant — noted, not scored here).
- **Modalities:** text and image input; text output; Thinking/Non-Thinking modes (thinking measures best); no native video (arrived with 4.3); tool calls.
- **Pricing (as of 2026-10-13):** ~$0.20 per 1M input tier (Grok-4-family pricing; the first pass's read retained — no updated public rate card found this pass); free consumer tier with daily limits; superseded status means price stability is not guaranteed as the family consolidates on 4.3+.
- **Architecture:** proprietary; a refinement of Grok 4 (same reasoning base); parameter count undisclosed.

### Raw benchmarks found

> Second pass imports the BenchLeader Grok 4.1 page (best = not-stated **57.4 #168/760**, last measured 2026-10-08; attribution caveat: the page's AA rows track the `grok-4-1-fast`-family harness ID — the family shares the base model, with the Fast variant differing in serving). Category scores (not stated): **Reasoning 64, Coding 63, Human preference 65, Maths 61, Agents & tools 56**; (thinking): **Human preference 66, Agents & tools 70**.

Agent / tool use:

- **τ²-Bench: 93.3% #44 (thinking)** — elite; **BFCL Overall: 69.6% #5** — elite rank; **Cybench: 39.0% #6**; Poker Agent 1079.2% #5
- **TB Hard: 24.2% #142 (thinking)**; TB 2.0 (Vals) 24.7% #51; ITBench SRE 17.9% #41; Vending-Bench 2 1106.6 #51 — the terminal/professional rows are weak (the family's tool-calling elite lives in τ²/BFCL, not in terminal suites)
- Real-time X-data access was the distinctive capability (retained); TB 2.1 / τ³ / GDPval / Claw-Eval: still no dedicated rows for the base ID

Reasoning / knowledge:

- GPQA Diamond: AA **85.3% #126 (thinking)** / Vals **84.3% #51** — near-bar, below it on both
- **HLE (AA): 19.3% #211 (thinking)** — far below the 40% reference; **CritPt 2.9% #172** (weak); SimpleBench 56.0% #37; ARC-AGI-1 63.7% #136; ARC-AGI-2 13.6% #134
- Math: **AIME (Vals): 91.9% #21; AIME 2026: 94.2% #20; HMMT Feb 2026: 86.4% #20; MGSM 89.5% #42** — elite; ProofBench 4.0% #69 (dreadful); Apex 5.2% #25; **ForecastBench 61.0% #18**; DTBench 87.7% #81
- **Honesty conflict: vendor launch claim "~4.2% hallucination rate, down ~65% from Grok 4" vs AA-measured non-hallucination 26.6% #227 (thinking)** — both retained, scored on the AA row; accuracy 25.1% #222; Omniscience −29.9 #270; **AA II 20.4 #222 (thinking)**
- Knowledge: MMLU-Pro 84.2% #64; MedQA 92.1% #34; **CorpFin 66.0% #24; CaseLaw 60.5% #24**; TaxEval 73.1% #50; LegalBench 82.5% #67; MedScribe 78.7% #59; MedCode 28.1% #94 (weak)
- The LMArena launch claim (#1 at 1483 Elo) has settled to mid-field: Text 1465 #52, Hard 1477 #70, Multi-turn 1458-1461 #75-76, Creative 1426-1431 #71-76 — the arena moved past it; the 64.8% blind-preference launch row retained as vendor-era narrative

Coding:

- **LiveCodeBench (Vals): 80.6% #64 (thinking)** — decent; but **SWE-bench (Vals): 41.4% #82** — weak (the family's coding gap confirmed); **Vibe Code v1.1: 1.2% #97** (dreadful); ALE-Bench 394.9 #102; LMArena Coding 1500 #78 / WebDev 1242 #122 (weak preference)
- The family narrative (coding improvements arrived with 4.2) matches the measured weak profile; SWE-bench Verified / DeepSWE / SciCode: still no dedicated rows

Long context:

- 256K base; **AA-LCR: 74.0% #161 (thinking)** / 31.3% #377 (no-reasoning) — mid; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro: Vals 72.7% #60 / AA 63.3% #187 (thinking); LMArena Vision 1201 #90; **SAGE 31.3% #75** (weak grounding); MortgageTax 42.6% #85. Text+image in, text out.

### Normalized scores (1–100)

- **Tool use: 64/100.** Raised from 55: the family data shows genuine tool-calling elite — τ² 93.3% #44, BFCL #5, Cybench #6, Poker #5 — offset by weak terminal/professional rows (TB Hard 24.2% #142, TB 2.0 24.7% #51, ITBench 17.9% #41, Vending #51); real-time X access retained as the differentiator.
- **Reasoning: 62/100.** Held: GPQA 84.3-85.3% near-bar, AIME 91.9% #21 / AIME 2026 #20 elite, ForecastBench #18 — against HLE 19.3% #211, CritPt 2.9%, ProofBench 4%, AA II 20.4 #222, and the honesty conflict resolved against the launch claim (AA non-hall 26.6% #227).
- **Context window: 72/100.** Held: 256K base with mid measured retrieval (AA-LCR 74.0% #161 at thinking); the 2M Fast variant is a separate redirecting product.
- **Multimodal: 60/100.** Lowered from 65: MMMU-Pro 72.7% #60 (Vals) is decent, but Vision 1201 #90, SAGE 31.3% #75, and MortgageTax 42.6% #85 measured weak; text+image only.
- **Coding: 58/100.** Lowered from 60: LCB 80.6% #64 is the lone decent row — SWE-V 41.4% #82, Vibe 1.2% #97, ALE #102, and WebDev 1242 #122 confirm the family's coding gap that 4.2 was billed to fix.
- **Cost efficiency: 86/100.** Lowered from 88: the ~$0.20/1M input tier and free consumer access remain cheap, but the superseded status and the family's redirect consolidation (Fast → 4.3 since 2026-05-15) make the base tier's longevity and price stability uncertain.
- **Overall Score: 63/100.** (64 + 62 + 72 + 60 + 58) / 5 = 63.2 → 63, unchanged. Best-fit (historical): the November-2025 chat-quality champion whose tool-calling elite (τ²/BFCL) and competition math survived measurement — but whose launch honesty claim did not (AA non-hall 26.6% vs the ~4.2% vendor figure), whose coding measured weak, and whose arena crown has long been taken; still a cheap conversational API with real-time X data, but new agentic/coding work belongs on Grok 4.7+.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader's Grok 4.1 page as of 2026-10-08 — attribution caveat documented: its AA rows track the `grok-4-1-fast` family harness ID sharing this base model — aggregating AA, Vals AI, Epoch AI Benchmarking Hub incl. Cybench, BFCL, MathArena, ForecastBench, LMArena, Andon Labs; retirement/redirect evidence from the promptfoo provider doc verified 2026-10-08 and hundredtabs' xAI→SpaceXAI coverage; the first-pass launch-coverage rows — the 1483-Elo arena claim, the ~4.2% hallucination claim (now in measured conflict with AA's 26.6% non-hallucination), and the 64.8% blind-preference row — retained and flagged rather than credited at face value); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
