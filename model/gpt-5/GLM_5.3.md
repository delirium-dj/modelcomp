# GPT-5 — findings by GLM 5.3

- Source: OpenAI/GPT-5 (`gpt-5`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-27 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's flagship system released 2025-08-07 — a unified model with a real-time router between fast responses and "GPT-5 thinking" (plus GPT-5 pro). Second pass replaces the launch-narrative-only picture with a full year of independent measurement: still elite at its era's niches (**Aider Polyglot 88.0% #1, MATH L5 98.1% #1, IMO 2025 #1, BrowseComp-Plus #1, Lech Mazur creative writing #1, METR #10**), but the 2026 agent/coding suites sank it (TB 2.1 35.2% #144, τ³ 22.1% #86, Vibe 20.1% #71). Deprecated in AA's tracking, but **still served** (Zen lists it; BenchLeader last measured 2026-10-09; base GPT-5.1 similarly remains in the API catalog as of 2026-08-11 while its chat/Codex variants were shut down 2026-07-23 — the family pattern).
- **Provider / access:** OpenAI API (`gpt-5`, Responses API), OpenCode Zen (`opencode/gpt-5`, still listed), 2 API providers tracked by AA.
- **Release / knowledge:** 2025-08-07; knowledge cutoff Sep 2024 (AA).
- **IDs:** `gpt-5` (+ `gpt-5-pro` variant). On Zen: `opencode/gpt-5` (paid, $1.07/$8.50 per 1M) — no Free ID.
- **Context window:** 400K tokens (confirmed).
- **Modalities:** text + image in; text out; adaptive thinking router (minimal/low/medium/high/thinking efforts measured — high is best); function calling; JSON mode.
- **Pricing (as of 2026-10-12):** $1.25 in / $10.00 out per 1M via OpenAI API (90% cache discount); Zen resells at $1.07/$8.50; blended $3.44/M — "among the most expensive" for its now-mid capability; 99 tok/s, 65 s first answer at high.
- **Architecture:** proprietary; parameter count undisclosed; trained on Microsoft Azure AI supercomputers.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = high **58.1 #148/760**, trend 50→57→64 stable, last measured 2026-10-09). Category scores (high): **Instruction following 71 (best)**, Human preference 62, Long context 64, Knowledge 58, Maths 57, Coding 56, Agents & tools 54, Multimodal 55, Reasoning 53, Composite 55.

Agent / tool use:

- **Terminal-Bench 2.1 (AA): 35.2% #144** — gap filled; weak. TB 2.0 (Vals) 37.1% #38; TB public board 49.6% #34; TB Hard 32.6-37.9% #63-98
- **τ³-Banking: 22.1% #86** — gap filled; weak (τ² 84.8% #96 remains solid); **GDPval-AA v2.1: 20.8% #169** (weak — vs its era's original GDPval 34.8% #6); Remote Labor Index 1.7% #13
- **METR Time Horizons: 69.4-69.6% #10-11 — elite long-horizon autonomy**; **DeepResearch Bench 48.1-49.6% #12-20**; **BrowseComp-Plus 57.6% #1 / BrowseComp 20.1% #2 / DeepSearchQA 59.4% #5** (its-era search elite); Poker Agent 1103.2% #2; BALROG 32.8% #14
- Launch-era honesty rows (deception 2.1%, 45-80% fewer errors) retained as vendor narrative — but see Omniscience below for the field-relative picture.

Reasoning / knowledge:

- GPQA Diamond: Epoch 86.2% #78 (high) / AA 85.3% #125 / Vals 85.6% #44 / HELM 79.1% — **below the 90% bar on every current harness** (the 88.4% pro extended-reasoning launch claim remains the outlier)
- HLE: Scale-CAIS 25.3% #13 / AA 28.5% #153 — below the 40% reference; **CritPt 5.7% #138** (weak); ARC-AGI-2 9.9% #142 (weak); SimpleBench 56.7% #36; LMCA 40.0% #88; DTBench 90.7% #64
- Math elite: **AIME (Vals) 93.4% #14; MATH Level 5 98.1% #1; Math500 96.0% #3; MGSM 92.8% #14**; OTIS 91.4% #63; FrontierMath T1-3 55.4% #44 / T4 21.9% #47; **IMO 2025 38.1% #1** (MathArena, its era); ProofBench 18.0% #51 (weak); Apex 1.0% #35
- **Honesty field-relative collapse: AA-Omniscience non-hallucination 9.8-21.0% #267-415** (accuracy 29.6-40.3%, index −8.7 to −33.8) — the launch-era "6× fewer hallucinations than o3" was true against o3, not against the 2026 field; SimpleQA 50.1% #25
- Knowledge: MMLU-Pro 86.5% #40; **MedQA 96.3% #4**; LegalBench 86.0% #15; TaxEval 73.4% #47; CaseLaw 66.5% #6; MedScribe 83.7% #41; CorpFin 61.1% #59; MedCode 49.6% #19; EBR 12.7% #17; ForecastBench 61.4% #9; Kagi 72.7% #21

Coding:

- SWE-bench Verified: **Epoch 73.5% #19 (high) / Vals 69.0% #64 / SWE-bench board 65.0% #19** vs the launch 74.9% — the independent cluster sits 65-73.5%; **SWE-Bench Pro (Scale): 41.8% #10**; **Vibe Code v1.1: 20.1% #71** (weak — gap filled); GSO-Bench 6.9% #24; SciCode 42.9% #138 (weak); WebDev 1418 #77
- **Aider Polyglot 88.0% #1 of 46 — elite legacy edit-format coding**; LiveCodeBench (Vals) **85.9% #27**; WeirdML 60.7% #48; ALE-Bench 1162.5 #39; AlgoTune 1.7 #8; launch-era SOTA rows (74.9% n=477, 50-80% token efficiency) retained

Long context:

- 400K window; Long context category 64; no MRCR/RULER rows (unchanged gap).

Multimodal:

- MMMU-Pro: Vals 81.5% #39 / AA 74.2% #109 (launch MMMU 84.2% retained); LMArena Vision 1208 #87; VISTA 49.7% #11; MortgageTax 65.5% #41; SAGE 43.7% #47; **VTB 17.0-18.7% #6-7** (weak video); text+image in, text out.

Preference/IF:

- **IFBench 73.1% #44 (high)** — IF-71 is its best category; MultiChallenge 63.2% #9; **Lech Mazur Creative Writing 86.0% #1**; LMArena preference ranks are now bottom-half (Text #101, Creative #140, Multi-turn #124, Longer #140, Hard #109) — the field moved past it.

### Normalized scores (1–100)

- **Tool use: 66/100.** Lowered from 78: the year filled the gaps in badly — TB 2.1 35.2% #144, τ³ 22.1% #86, GDPval 20.8% #169, Remote Labor 1.7%, TB Hard ~33% — against still-elite METR #10-11, DeepResearch #12-20, BrowseComp-Plus #1, τ² 84.8%, and TB public #34.
- **Reasoning: 72/100.** Lowered from 84: GPQA 85.3-86.2% now sits below the bar on every harness, HLE ~25-28.5%, CritPt 5.7%, ARC-AGI-2 9.9%, and non-hallucination 9.8-21% is poor by 2026 standards — offset by elite competition math (AIME 93.4% #14, MATH L5 #1, Math500 #3, IMO 2025 #1), ForecastBench #9, and Kagi #21.
- **Context window: 78/100.** Held: 400K confirmed; no retrieval-quality rows exist; category 64.
- **Multimodal: 66/100.** Lowered from 68: MMMU-Pro 81.5% #39 remains good, but Vision 1208 #87, VTB ~17%, and SAGE 43.7% #47 are dated; category 55.
- **Coding: 74/100.** Lowered from 82: independent SWE-V 65-73.5% (vs the 74.9% launch figure), SWE-Pro 41.8%, Vibe 20.1%, GSO 6.9%, SciCode 42.9% — but Aider Polyglot #1, LCB 85.9% #27, and WeirdML 60.7% #48 keep the legacy-elite band.
- **Cost efficiency: 72/100.** Held: $1.25/$10 (Zen $1.07/$8.50) with blended $3.44/M is "among the most expensive" for its measured 2026 capability; strong token efficiency is the remaining offset.
- **Overall Score: 71/100.** (66 + 72 + 78 + 66 + 74) / 5 = 71.2 → 71, down from 78. Best-fit: a deprecated-but-served former flagship whose era-elite niches (Aider edit-format coding, competition math, deep research, creative writing) survive, but whose agent, coding-harness, honesty, and multimodal profiles have all been passed — every GPT-5.1+ successor beats it at the same or lower price; keep it only for legacy-pipeline continuity.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-27 report (BenchLeader full effort-ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified and Terminal-Bench, Artificial Analysis, Vals AI, Scale AI SEAL incl. SWE-Bench Pro, HELM Capabilities, MathArena, METR, Aider leaderboard, Lech Mazur, Andon Labs; DDG-lite searches surfacing the GPT-5.1 family deprecation timeline — udit.co, GitHub Copilot changelog 2026-04-03, chat-got.ai API-catalog verification 2026-08-11 — establishing the deprecated-but-served pattern; first-pass launch-era rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
