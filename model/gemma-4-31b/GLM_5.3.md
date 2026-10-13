# Gemma 4 31B — findings by GLM 5.3

- Source: Google (`gemma-4-31b`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights Gemma 4 flagship size — released **2026-04-02** (resolving the first pass's "late 2025"), 262K context, positioned for "self-hosted document analysis and research work, not autonomous coding agents" (hokai — and the data agrees: **SAGE 55.0% #2 elite grounding, MMMU-Pro 76.9% #5, Maths 66 best category** against **Knowledge category 25 — the worst measured this cycle** and GDPval 6.0% #197). Fourteen OpenRouter providers with the floor at **$0.09/$0.34**. Top use case: self-hosted multimodal document/research assistant and fine-tuning base.
- **Provider / access:** Hugging Face `google/gemma-4-31B-it` (open weights); 14 OpenRouter providers — **DeepInfra Turbo fp4 $0.09/$0.34, CoreWeave fp4 $0.10/$0.34**, Venice $0.12/$0.36, Friendli $0.14/$0.40, NovitaAI bf16, Crusoe bf16, SiliconFlow fp8, SambaNova, ModelRun, io.net, Parasail, Chutes, DeepInfra; **no OpenCode Zen ID**.
- **Release / knowledge:** **2026-04-02** (BenchLeader + hokai); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemma-4-31b` (HF); no Zen ID, no Free ID — open weights.
- **Context window:** **262K tokens** (confirmed; two providers serve 131K).
- **Modalities:** text/image in; text out; reasoning (thinking config measures best on most rows); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** open weights (Gemma license) — self-host at cost; hosted floor **$0.09/$0.34** (DeepInfra Turbo fp4); blended $0.205/M — "cheaper than most ranked models"; 29 tok/s reference (up to 120 tok/s on ModelRun fp4); $0.010 per agentic session.
- **Architecture:** open weights, dense ~31B (the family also ships 26B-A4B MoE and E-variants); full spec not published.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = not-stated **52.2 #307/760**, trend 39→51→63 rising, last measured 2026-10-09). Category scores: **Maths 66 (best)**, Reasoning 61, Multimodal 62, Human preference 56, Coding 48, **Knowledge 25 (worst)**.

Agent / tool use:

- **τ²-Bench: 59.9-65.5% #168-180** — decent for the class — but **τ³-Banking: 8.9-14.8% #117-150** and **GDPval-AA: 2.4-6.0% #197-204** (both dreadful)
- Terminal-Bench: 2.1 (AA) **29.2% #153 (no-reasoning) / 43.5% #129 (thinking)**; 2.0 (Vals) 39.3% #35; TB Hard 30.3-36.4% #71-113; **TB 4.0 (AA): 0.0% #146**
- ITBench SRE 37.3% #25; Gert Labs 35.26% (retained); AA Agentic Index 6.7% (retained); Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 75.8% #140 / AA 76.3% #232 (no-reasoning) / **85.7% #117 (thinking)** — near-bar at thinking, below it otherwise
- HLE (AA): 11.8% #277 / 23.6% #183 (thinking) — weak; **CritPt 1.4% #199**; Kagi 63.5% #42 (decent); DTBench 82.7% #99; LMCA 39.3% #90
- Math: OTIS 73.3% #124; LMArena Maths 1470 #52; Maths 66 is its best category
- **Knowledge catastrophic: AA-Omniscience −47.9 to −51.7 #355-389; accuracy 16.6-20.0% #294-370; non-hallucination 15.0-18.1% #299-332; SimpleQA 10.4% #81** (near-floor short-fact accuracy) — the worst knowledge-reliability profile measured this cycle; MMLU-Pro 85.2% (retained — the paradox: exam-strong, recall-dead)
- **AA Intelligence Index 13.9-14.7 #280-292**; ECI 142.7 #94

Coding:

- SciCode 43.4-45.5% #134 (below the 55% reference); WeirdML 52.3% #66; Surface Evolver 30.6% #24; ALE-Bench 925.5 #56; SWE-Rebench 41.6% (retained); **TB 4.0 0.0%**; LMArena Coding 1503 #70 (decent preference) / WebDev 1366 #96; **SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe: still no verified public score** (unchanged gaps)

Long context:

- 262K window; **AA-LCR 69.7% #215 (thinking)** / 46.7% #317 (no-reasoning); LMArena Document 1445 #34; no MRCR/RULER rows.

Multimodal:

- **SAGE: 55.0% #2** — elite grounding, the standout row; **MMMU-Pro official 76.9% #5**; MMMU-Pro (AA) 70.3-73.4% #118-139; LMArena Vision 1277 #38 (decent); MortgageTax 61.4% #58; text+image in, text out.

Preference/IF:

- **IFBench 75.6% #29 (thinking)** — good; LMArena preference mid: Text 1452 #72, Maths 1470 #52, Multi-turn 1466 #69, Longer 1470 #60, Hard 1476 #72; EQ-Bench 1120 #21; Creative 1418 #83.

### Normalized scores (1–100)

- **Tool use: 46/100.** Lowered from 48: the gaps filled at the floor — τ³ 14.8% #117, GDPval 6.0% #197, TB 4.0 0.0%, AA Agentic Index 6.7% — offset by decent-for-the-class τ² 59.9-65.5%, TB 2.1 43.5% (thinking), TB Hard #71, ITBench #25.
- **Reasoning: 56/100.** Raised from 55: GPQA 85.7% #117 at thinking is near-bar, Kagi 63.5% #42 and OTIS 73.3% are class-leading (hokai's "class-leading GPQA and AIME 2026" corroborated), and Maths 66 is its best category — capped by HLE 23.6%, CritPt 1.4%, AA II 14.7 #280, and the catastrophic knowledge recall.
- **Context window: 76/100.** Lowered from 78: 262K confirmed; measured retrieval mid (AA-LCR 69.7% #215 at thinking).
- **Multimodal: 74/100.** Raised from 68: **SAGE 55.0% #2** (elite grounding) and MMMU-Pro 76.9% #5 are genuine class-leading rows; Vision 1277 #38 decent — text+image only.
- **Coding: 46/100.** Raised from 45: TB 2.1 43.5% (thinking), WeirdML 52.3% #66, and Coding-arena 1503 #70 add mid-band texture — but SciCode ~44%, Surface Evolver 30.6%, SWE-Rebench 41.6%, TB 4.0 0.0%, and the still-missing SWE-V/LCB rows hold it near the bottom.
- **Cost efficiency: 94/100.** Raised from 92: the hosted floor fell to **$0.09/$0.34** (DeepInfra Turbo fp4) with 14 providers competing; open weights keep single-node self-host the cheapest path.
- **Overall Score: 60/100.** (46 + 56 + 76 + 74 + 46) / 5 = 59.6 → 60, up from 58.8. Best-fit: a self-host multimodal document/research assistant with elite visual grounding (SAGE #2) and class-leading math at $0.09-$0.14/M — but its knowledge recall is the worst measured this cycle (SimpleQA 10.4%, Omniscience −48: never trust a fact it states unverified) and it is explicitly not an agent engine; pair it with retrieval and keep it on documents.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, LMArena, MMMU official board; 14 OpenRouter provider rows and price history to the $0.09/$0.34 floor; DDG-lite search — a thin pool of one corroborating result (hokai) plus a no-results page, both disclosed — confirming the 2026-04-02 release and the document/research-not-agents positioning; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
