# Gemini 3.6 Flash — findings by GLM 5.3 Flash

- Source: Google / Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-10, 2026-10-16): the lifecycle sharpens —
> **Vertex AI retires `gemini-3.6-flash` on 2026-11-19** (15 days out; the Gemini API itself
> stays active with no shutdown date, and this model is now the routing target for 3.5
> Flash traffic). Weak new AA rows (TB 4.0 7.1%, AutomationBench 0.5, Harvey 0.9, MLCR 10%)
> dock Tool use 84→82 and Coding 86→85; strong additions (LiveBench Reasoning 85.8,
> GPQA-D 94.1% #10 Epoch, CyberBench-Patch #1) hold Reasoning. Overall 88→87.

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** July 2026 Flash workhorse (successor to 3.5 Flash, superseded by 3.7 Flash on 2026-08-13 and 3.8 Flash on 2026-09-02). Same 1M multimodal window as 3.5 Flash with stronger agentic/coding/computer-use scores and ~17% fewer output tokens — the token-efficiency win compounds on scaled agent loops. Now the **routing destination for deprecated 3.5 Flash traffic**, with its own Vertex retirement set for 2026-11-19.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.6-flash`; AI Studio, Gemini app, Search AI Mode, Antigravity IDE, Android Studio, Gemini Enterprise Agent Platform. `generateContent` API; model card at deepmind.google. **Lifecycle (verified Nov 1–4):** Gemini API Active (no shutdown announced); **Vertex AI/Agent Platform deprecated, shutdown 2026-11-19, replacement Gemini 3.8 Flash**.
- **Release / knowledge:** Released 2026-07-21 (alongside 3.5 Flash-Lite). Knowledge cutoff **March 2026** (model card; some domains limited to Jan 2025).
- **IDs:** `gemini-3.6-flash` (Google). Free tier available with usage limits (free-row confirmed on the Nov 3 pricing read).
- **Context window:** 1,048,576-token input; 65,536 max output (official spec table).
- **Modalities:** text, image, audio, video, PDF in; text out. Reasoning via thinking levels; built-in function calling, structured output, code execution, **computer use (now a standard built-in client-side tool)**, search/Maps grounding, URL context. Sampling parameters (`temperature`/`top_p`/`top_k`) deprecated on this generation.
- **Pricing (as of 2026-11-05):** promotional **$0.75 in / $3.75 out / $0.075 cached** per 1M through 2026-12-31, doubling to $1.50/$7.50/$0.15 on 2027-01-01 (cache storage $0.50→$1.00/1M tok/hr); Batch/Flex $0.375/$1.875; Priority $1.35/$6.75; grounding 5k free/mo then $14/1k. 7 serving providers, $0.75–$1.01 input spread.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.5%** (AA independent, high thinking, #28-30 of ~105-161) / vendor launch **78%** / **Vals 73.8%** (#8 of 43 models, 3 trials) — three-source consistency
- Terminal-Bench 4.0: **7.1%** (AA run, #41-44 — NEW, very weak)
- AutomationBench (AA, frozen Oct 26): **0.5** — NEW, near-zero
- OSWorld-Verified: **83%** (vendor launch) — CONFLICT with OSWorld 2.0 **33.8%** (TensorFeed; benchgap's 17.8% is an estimate — version/harness split, all flagged)
- GDPval-AA v2: **Elo 1421–1423** (vendor; 39.2% normalized AA)
- CyberBench v1.1 (Vals): **45.36%** overall (#39/45) but **Patch track 85.7% — #1** (updated from 84.75)
- Harvey Lab (AA): **0.9** — NEW, near-zero; Harvey Legal Agent (Vals): 3.33% (#39/76)
- MLCR-AA: **10%** (October 2026 method, #49/88) / 14.4% (previous method) — NEW, weak
- Terminal-Bench-Science (Vals): **4.3%** — NEW, near floor; TB Hard 46.2% minimal (#30)
- LiveBench Agentic Coding: **43.4%**; APEX-SWE (Mercor): **39.4%**; AA Agentic Index 30.1-30.2; AA-Briefcase 875; APEX-Agents-AA 47.1% (#1); EnterpriseOps-Gym 50.1% (#3); Finance Agent v2 56.3%; MedCode 53.15% (#7-9); TaxEval 74.86%; MortgageTax 67.61%; CorpFin 63.33%
- LMArena: Text 1483 (#23/419), Coding 1518 (#42), WebDev 1538 (#51, +39 vs 3.5), Vision 1282, Document 1453
- Tau2/Tau3/BFCL/Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1% ±1.4** (Epoch high, #10 of 108 — strongest reading) / **93.43%** (Vals, #7/138) / **92.8%** (AA) / 92.1% (AA medium) / 82.8% (AA minimal) — five readings, strong
- MMLU Pro (Vals): **89.28-89.3%**; MMMU Pro (Vals): **88.38%**
- LiveBench: Reasoning **85.1-85.8%**, Mathematics **86.4%**, Language 83.9%, IF 75.4%, Data Analysis 63.0%, Overall 73.6
- ARC-AGI-2 **60.4%** / ARC-AGI-1 **91.2%** (ARC Prize verified); AA-HLE **40.8%** (#36/153); AA-LCR **80.0%**; CritPt 10.6% (#43/144); FrontierMath v2 **58.9%** / **22.0%** (Epoch); OTIS Mock AIME 94.2% (#38); SimpleQA Verified **66.2% ±1.5** (#13/68); Chess 40%; Mystery Game Puzzles 30%
- AA-Omniscience: 50.0% accuracy / 55.6% hallucination / index 22.1
- Artificial Analysis Intelligence Index v4.3.2: **34** (#77/227 at the 2026-10-10 read; TensorFeed Nov 2 still reads 34) — the AA Index for this model was never restated on the v5 scale

Coding:

- SWE-bench Verified (Vals): **79.60%** (#26/88); SWE-bench Pro (vendor): **58.7%**
- LiveCodeBench (Vals): **88.08%** (#8/143; LiveBench Coding 60.6-77.9)
- DeepSWE v1.1 (vendor): **49%**; MLE-Bench (vendor): **63.9%**
- Vibe Code Bench v1.1 (Vals): **64.00%**; ProgramBench (Vals): **0.00%**; IOI (Vals): **35.06-35.1%**; Code Migration (Vals): **30.93%**
- Vals Index: **55.35%, #13/43**; AA Coding Index 69.2 (frozen Sep 9 — below 3.5 Flash's 70.1); AA-SciCode 53.4% (#33/100)
- SWE-bench Multimodal 48.2% and SWE-bench Pro 57.0% are benchgap estimates (excluded)

Long context:

- GDM-MRCR v2 at full 1M depth: **54%** (vendor) — best Flash-line retrieval at the extreme but still minority retrieval; AA-LCR 80.0%

### Normalized scores (1–100)

- **Tool use: 82/100.** CHANGED from 84 — the new AA rows are severe (TB4.0 7.1%, AutomationBench 0.5, Harvey 0.9, TB-Science 4.3%) and join GDPval ~1422 mid-frontier on the debit side; OSWorld-Verified 83%, CyberBench-Patch #1 (85.7%), τ²-class strength and native computer use keep it a strong Flash agent, one band down.
- **Reasoning: 87/100.** Unchanged — GPQA now five-sourced with the Epoch 94.1% (#10) as the new ceiling reading, LiveBench Reasoning 85.8%, ARC-AGI-2 60.4%, FrontierMath 58.9%/22.0% and SimpleQA 66.2% (#13); MLCR 10% is the one new weak row.
- **Context window: 93/100.** Unchanged — 1M input with MRCR 54% at full 1M depth (best in the Flash line but minority retrieval) and AA-LCR 80.0%.
- **Multimodal: 88/100.** Unchanged — omni-input with MMMU-Pro 88.38% (Vals) / 83.2% (AA) and the strongest measured vision in the 3.x Flash line; text-only output.
- **Coding: 85/100.** CHANGED from 86 — APEX-SWE 39.4% and the TB4.0-era weakness join DeepSWE 49% and SWE-Pro 58.7% below the frontier; Vals SWE-V 79.6%, LiveCodeBench 88.08% (#8) and LiveBench Coding 77.9% hold the mid-frontier band.
- **Cost efficiency: 85/100.** Unchanged — promo $0.75/$3.75 through 2026-12-31 (then doubles), 17–65% output-token reduction vs 3.5, free tier, and the cheapest Flash economics while they last; the Vertex shutdown (Nov 19) narrows the runway on one platform.
- **Overall Score: 87/100.** CHANGED from 88 — (82 + 87 + 93 + 88 + 85) / 5 = 435/5 = 87.0 → 87. Best fit: the value pick of the 3.x Flash line while promo pricing lasts and the API route stays up — but with Vertex retiring in two weeks and 3.8 Flash at identical promo rates, new work should pin 3.8 Flash directly.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Google changelog/deprecations + TeqEngine/AIWire/AI Model Watch lifecycle checks (Vertex 2026-11-19), AA/Tokens-or-Towers/CtrlAltDebrief frozen-index rows, Vals AI Nov 4 note + LiveBench + Bad Influence + PublicAI + benchgap measured-vs-estimated screen); conflicts flagged (OSWorld 83 vs 33.8; AA Index never restated on v5); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
