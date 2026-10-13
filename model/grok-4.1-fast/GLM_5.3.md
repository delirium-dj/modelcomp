# Grok 4.1 Fast — findings by GLM 5.3

- Source: xAI (`xai/grok-4-1-fast-reasoning`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-03 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's high-speed agentic tool-calling model, launched **2025-11-19** alongside the Agent Tools API — "our best tool-calling model". Second pass validates the launch claims and corrects two first-pass errors: (1) **τ² 93.3% #44 and BFCL 69.6% #5 (thinking) held up** on independent harnesses (the 100%/72% launch figures were directionally right); (2) **the model takes image input** — AA/Vals MMMU-Pro rows and an LMArena Vision 1201 #90 row exist, so the first pass's "text-only" claim was wrong. **Retired: the `grok-4-1-fast` slug auto-redirects to grok-4.3 since 2026-05-15** (promptfoo), deprecated on partner clouds in favor of 4.2/4.3.
- **Provider / access:** xAI API (`https://api.x.ai` — retired, redirecting); OpenRouter `x-ai/grok-4.1-fast` (historical); Microsoft Copilot Studio, Google Cloud, Oracle OCI (deprecated listings). No OpenCode Zen listing.
- **Release / knowledge:** **2025-11-19** (confirmed); knowledge cutoff not published.
- **IDs:** `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (retired; redirecting to grok-4.3).
- **Context window:** 2,000,000 tokens (launch post + OpenRouter — retained; BenchLeader's retired header shows no live spec).
- **Modalities:** **text + image in** (corrected — measured MMMU-Pro on AA and Vals plus an LMArena Vision row; the first pass's text-only read was wrong); text out; reasoning/non-reasoning variants (thinking measures best); native tool calls; Agent Tools API (web search, X search, remote code execution, document collections, MCP).
- **Pricing (historical, at launch):** $0.20 input / $0.05 cached / $0.50 output per 1M; tool calls from $5 per 1,000 successful invocations; live requests now bill at Grok 4.3 rates via redirect.
- **Architecture:** undisclosed; RL-trained in simulated tool environments; the "halved hallucination vs Grok 4 Fast" claim is directionally consistent (non-hall 26.6% #227 vs Grok 4 Fast's 31.7% #205, thinking configs).

### Raw benchmarks found

> Second pass finds the measurements: BenchLeader's Grok 4.1 page tracks the AA `grok-4-1-fast` harness rows directly (best = not-stated **57.4 #168/760**; the thinking config carries most measured rows; last measured 2026-10-08). Category scores (thinking): **Human preference 66 / Agents & tools 70**; not-stated: Reasoning 64, Coding 63, Human preference 65, Maths 61, Agents 56.

Agent / tool use:

- **τ²-Bench Telecom (AA): 93.3% #44 (thinking)** — the launch's 100% claim lands at elite-but-not-perfect; **BFCL Overall: 69.6% #5 (thinking)** — elite rank (the 72% launch figure held); **Cybench: 39.0% #6**; Poker Agent 1079.2% #5
- **TB Hard: 24.2% #142 (thinking)**; TB 2.0 (Vals) 24.7% #51; ITBench SRE 17.9% #41; Vending-Bench 2 1106.6 #51 — the terminal/professional rows are weak despite the tool-calling pitch
- Launch rows retained: Research-Eval 63.9 at $0.046/task, FRAMES 87.6, X Browse 56.3 (internal multihop X-search); TB 2.1 / τ³ / GDPval / Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: AA **85.3% #126 (thinking)** / Vals **84.3% #51** — near-bar, below it (gap filled)
- **HLE (AA): 19.3% #211 (thinking)** — far below the 40% reference (gap filled); **CritPt 2.9% #172** (weak); SimpleBench 56.0% #37
- Math: **AIME (Vals) 91.9% #21; AIME 2026 94.2% #20; HMMT Feb 2026 86.4% #20; MGSM 89.5% #42** — elite; ProofBench 4.0% #69 (dreadful); Apex 5.2% #25; **ForecastBench 61.0% #18**; DTBench 87.7% #81
- Honesty weak: **non-hallucination 26.6% #227**; accuracy 25.1% #222; Omniscience −29.9 #270; **AA II 20.4 #222 (thinking)** / 11.3 #342 (no-reasoning)
- Knowledge: MMLU-Pro 84.2% #64; MedQA 92.1% #34; **CorpFin 66.0% #24; CaseLaw 60.5% #24**; TaxEval 73.1% #50; LegalBench 82.5% #67; MedScribe 78.7% #59; MedCode 28.1% #94 (weak); FActScore parity (vendor, retained)

Coding:

- LiveCodeBench (Vals): **80.6% #64 (thinking)** — decent (gap filled); but **SWE-bench (Vals): 41.4% #82** — weak (gap filled); **Vibe Code v1.1: 1.2% #97** (dreadful — gap filled); ALE-Bench 394.9 #102; LMArena Coding 1500 #78 / WebDev 1242 #122; SWE-Pro: still unmeasured

Long context:

- 2M window (launch/OpenRouter evidence); **AA-LCR: 74.0% #161 (thinking)** / 31.3% #377 (no-reasoning) — mid; the "consistent multi-turn across 2M" claim remains vendor-only.

Multimodal:

- **Image input confirmed**: MMMU-Pro Vals **72.7% #60** / AA 63.3% #187 (thinking); LMArena Vision 1201 #90; SAGE 31.3% #75 (weak grounding); MortgageTax 42.6% #85; text+image in, text out.

Preference/IF:

- **Human preference 65-66 — its best category**: LMArena Text 1465 #52, Multi-turn 1458-1461 #75-76, Hard Prompts 1477 #70, Creative 1426-1431 #71-76; IFBench 52.7% #157 (weak).

### Normalized scores (1–100)

- **Tool use: 70/100.** Lowered from 80: the tool-calling core held (τ² 93.3% #44, BFCL #5, Cybench #6, Poker #5 — the launch pitch validated) — but the terminal/professional rows measured weak (TB Hard 24.2% #142, TB 2.0 24.7% #51, ITBench 17.9% #41, Vending #51) and TB 2.1/τ³/GDPval remain unmeasured.
- **Reasoning: 62/100.** Lowered from 65: the gaps filled split — elite competition math (AIME 91.9% #21, AIME 2026 #20, HMMT #20), ForecastBench #18, and near-bar GPQA against HLE 19.3% #211, CritPt 2.9%, ProofBench 4%, AA II 20.4 #222, and weak honesty (26.6% #227).
- **Context window: 92/100.** Lowered from 95: the 2M capacity stands but measured retrieval is mid (AA-LCR 74.0% #161) and the long-horizon-RL consistency claim stays vendor-only.
- **Multimodal: 62/100.** Raised from 15 — the first pass's text-only read was wrong: measured MMMU-Pro rows (Vals 72.7% #60) and a Vision arena row confirm image input; weak grounding (SAGE 31.3%) caps it.
- **Coding: 58/100.** Lowered from 60: LCB 80.6% #64 is decent — but SWE-V 41.4% #82, Vibe 1.2% #97, and ALE #102 are floor reads; it was pitched as a tool-caller, not a coder, and the data agrees.
- **Cost efficiency: 95/100.** Held as historical: $0.20/$0.50 with $0.05 cached was near-free for elite tool-calling — but the slug is retired and redirects to grok-4.3 at its rates.
- **Overall Score: 69/100.** (70 + 62 + 92 + 62 + 58) / 5 = 68.8 → 69, up from 63. Best-fit (historical): the cheap 2M-context tool-calling specialist whose τ²/BFCL launch claims genuinely held — elite function calling, elite competition math, and unexpectedly good arena preference at $0.20/$0.50; retired 2026-05-15 (redirects to grok-4.3), so treat this entry as comparison-only.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-03 report (BenchLeader's Grok 4.1 page as of 2026-10-08 — whose Artificial Analysis rows track the `grok-4-1-fast` harness ID directly — aggregating AA, Vals AI, Epoch AI Benchmarking Hub incl. Cybench, BFCL, MathArena, ForecastBench, LMArena, Andon Labs; the retirement/redirect evidence from the promptfoo provider doc verified 2026-10-08; modality corrected via the measured MMMU-Pro/Vision rows; the first-pass launch-post rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
