# Qwen3.5-35B-A3B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-11-11 (UTC; original research 2026-10-21, second-pass enrichment 2026-11-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-11** (user-approved). Previous Signature
> 2026-10-21 (Overall 71). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **45.47/100, #119/1020, 33/812 rows** — previous
> pass had only a compare-page point estimate 45.8–46.4) carrying new
> **Artificial Analysis** runs for this model (the direct AA slug 404s).
> Changes: **Tool use 58→64** — the named "no Tau3/Tau2 rows" gap is
> filled at the top band: **τ²-bench 89.2% (AA)**, alongside recorded
> OSWorld-Verified 54.5 and BrowseComp 61; still capped by weak terminal
> rows (TB2.0 40.5, Gert 28.96 — both re-confirm) and GDPval/Claw-Eval
> still absent. **Reasoning 84→80** — the pillar the previous score leaned
> on is now contested: **AA-HLE 21.0% vs the recorded 47.4%**
> (AnotherWrapper) — both readings recorded side by side, none converted;
> and the previously unmeasured hallucination axis is now severe: first
> **AA-Omniscience net −48.1 (accuracy 20.1 / hallucination 85.4%)** plus
> **CritPt 0.9%**. Offsets recorded: **AA-GPQA 84.5** corroborates 84.2,
> **AA-IFBench 72.5**, **AA Global-MMLU-Lite 86.4**, **IFEval 91.9**,
> **MMLU-ProX 81**. Overall held at **71** ((64+80+72+70+70)/5 = 356/5 =
> 71.2 — mean moved 70.8→71.2, both round to 71). Held: Context 72 (262K
> + LongBench v2 59 re-confirm; new **AA-LCR 72.0** is long-context
> reasoning, not 512K+ retrieval — still no MRCR/RULER row), Multimodal 70
> (new **CharXiv 77.5**, **AA-MMMU-Pro 72.7**, **ExtractBench 88.0** land
> where MMMU 81.4 / MMMU-Pro 75.1 already put the band; **MathVision 83.9
> and V\\* 92.7 are flagged misattributed** — BenchLM sources them from the
> *Qwen3.5-122B-A10B* model card, recorded but not credited), Coding 70
> (SWE-V 69.2, LCB v6 74.6, SWE-Rebench 53.7 re-confirm; DeepSWE/SciCode
> still absent), Cost 94 (no new pricing evidence; AA direct page 404).
> **AA Index 19.3 re-confirms the recorded 19 (estimated)** — not a level
> change.

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's small MoE open-weight reasoning model of the Qwen3.5 generation (36B total / 3B active per Artificial Analysis); image input, 262K context and near-frontier HLE at very low cost — a fast cheap workhorse rather than a frontier coder.
- **Provider / access:** Open weights (Apache 2.0) served by Alibaba Cloud Model Studio (bailian), DeepInfra, Novita, SiliconFlow and GMI; Chat Completions style APIs; reasoning and non-reasoning modes.
- **Release / knowledge:** released 2026-02-24 (Artificial Analysis); knowledge cutoff not published (N/A in provider tables).
- **IDs:** `qwen/qwen3.5-35b-a3b` (Model Studio), `deepinfra/qwen3.5-35b-a3b`, `novita/qwen3.5-35b-a3b`, `siliconflow/qwen3.5-35b-a3b`; weights `Qwen/Qwen3.5-35B-A3B`. No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 tokens (262.1K; Artificial Analysis, AnotherWrapper); max output ~65K tokens (AnotherWrapper provider table).
- **Modalities:** text and image in; text out; reasoning mode yes; tool calls / JSON yes.
- **Pricing (as of 2026-10-21):** Alibaba Model Studio $0.25 in / $2.00 out per 1M ($2.25 blended; AnotherWrapper verified 2026-09-23 against bailian console; Artificial Analysis lists the same); cheaper route $0.14 / $1.00 (LLM Stats). Paid; no $0 tier verified.
- **Architecture:** MoE, 36B total / 3B active at inference (Artificial Analysis); Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**agent**): **40.5%** (BenchLM mirror, AnotherWrapper — re-confirmed 2026-11-10)
- OSWorld-Verified: **54.5%** (BenchLM — re-confirmed)
- BrowseComp: **61%** (BenchLM — re-confirmed)
- Gert Labs: **28.96%** (BenchLM compare vs Claude Opus 4.8 — re-confirmed)
- **τ²-bench: 89.2%** (Artificial Analysis via BenchLM, snapshot 2026-11-10) — **new; the named "no Tau3/Tau2 rows" gap is filled at the top band**
- Tau3-Banking: no verified public score found (re-checked 2026-11-11)
- GDPval-AA / Claw-Eval: no verified public score found (re-checked 2026-11-11)

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **47.4%** (AnotherWrapper shared-benchmark table) — **conflict (new): AA-HLE 21.0%** (Artificial Analysis via BenchLM, 2026-11-10) — the "clears the 40%+ frontier reference" pillar is now contested; both readings recorded side by side, none converted
- GPQA Diamond: **84.2%** (AnotherWrapper, BenchLM) — **AA-GPQA Diamond 84.5%** independent run now corroborates (new)
- MMLU-Pro: **85.3%** (BenchLM)
- SuperGPQA: **63.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **19 (estimated)** — #12/141 in its class vs size-class median 8 (Artificial Analysis) — **AA page now shows 19.3**, re-confirming (new via BenchLM)
- **New AA rows (2026-11-10):** **AA-Omniscience net −48.1 (accuracy 20.1 / hallucination 85.4% — first measurement of this axis, severe)**, **CritPt 0.9%** (both weak), **AA-IFBench 72.5%**, **AA Global-MMLU-Lite 86.4%**, **IFEval 91.9% (model card)**, **MMLU-ProX 81 (model card)**
- LLM Stats composite: **30.8 (#132, 81 evals)** (LLM Stats)
- BenchLM overall: **45.47 (#119/1020)** snapshot 2026-11-10 (was a compare-page point estimate 45.8–46.4 — re-confirms)

Coding:

- SWE-bench Verified: **69.2%** (BenchLM, AnotherWrapper)
- LiveCodeBench v6: **74.6%** (BenchLM, AnotherWrapper)
- SWE-Rebench: **53.7%** (BenchLM)
- Arena Code Elo: **1250** (AnotherWrapper)
- SciCode / DeepSWE: no verified public score found

Long context:

- LongBench v2: **59%** (BenchLM — re-confirmed 2026-11-10)
- **AA-LCR: 72.0%** (Artificial Analysis via BenchLM — new; long-context **reasoning**, not retrieval)
- No MRCR/RULER figure found (re-checked 2026-11-11)

Multimodal:

- MMMU: **81.4%** (BenchLM, AnotherWrapper)
- MMVU: **72.3%** (BenchLM)
- MMMU-Pro: **75.1%** (BenchLM, AnotherWrapper) — **AA-MMMU-Pro 72.7%** independent run now corroborates (new)
- **CharXiv: 77.5%** (Qwen3.5-35B-A3B model card via BenchLM — **new** chart-reasoning row)
- **ExtractBench: 88.00%** (ExtractBench leaderboard, LlamaIndex, 2026-11-10 snapshot — **new** document-extraction row)
- **MathVision 83.9 / V\\* 92.7 (BenchLM) — flagged misattributed: both are sourced from the *Qwen3.5-122B-A10B* model card, recorded but NOT credited to this model** (same provenance as the sibling 27B file)

Performance notes:

- 147 output tok/s (well above the 77.7 class median), TTFT 2.09 s on Alibaba API (Artificial Analysis) — notably fast for the class.

### Normalized scores (1–100)

- **Tool use: 64/100.** The named "no Tau3/Tau2 rows" gap is now filled at the top band — **τ²-bench 89.2% (AA)** — confirming multi-turn tool reliability alongside solid OSWorld-Verified 54.5 and BrowseComp 61 → 64 (was 58); still capped by weak terminal rows (TB2.0 40.5, Gert 28.96 — both re-confirm) and GDPval/Claw-Eval still absent.
- **Reasoning: 80/100.** The pillar of the previous 84 is now contested — **AA-HLE 21.0 vs the recorded 47.4 (AnotherWrapper)**, both recorded side by side, none converted — and the previously unmeasured hallucination axis is now severe: **AA-Omniscience net −48.1 (85.4% hallucination)** plus **CritPt 0.9%** → 80 (was 84). Held up by corroborated GPQA 84.2/84.5, MMLU-Pro 85.3, and new IFBench 72.5 / Global-MMLU-Lite 86.4 / IFEval 91.9 / MMLU-ProX 81; Index 19.3 re-confirms the recorded 19 (estimated).
- **Context window: 72/100.** 262,144 native tokens → 200K–500K tier (200K = 70 reference); LongBench v2 59% shows mid long-context retrieval (re-confirmed); new AA-LCR 72.0 is long-context reasoning, not retrieval — no 512K+ measurement (no change).
- **Multimodal: 70/100.** Image + text in, text out (no video/audio, no non-text out) with MMMU 81.4% — top of the image-in tier; new CharXiv 77.5, independent AA-MMMU-Pro 72.7 and ExtractBench 88.0 land exactly where MMMU/MMMU-Pro already put the band (no change); MathVision/V\\* flagged misattributed (122B-A10B card provenance) and not credited.
- **Coding: 70/100.** SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% are respectable mid scores for 3B active (re-confirmed 2026-11-10), but Terminal-Bench 2.0 40.5% and LLM Stats' low coding sub-index (11.4, #168) cap it; SWE-Rebench 53.7 unchanged; no DeepSWE/SciCode (no change).
- **Cost efficiency: 94/100.** $0.25/$2.00 at Alibaba with routes from $0.14/$1.00 — among the cheapest hosted reasoning models tracked; no free tier found (no new pricing evidence this pass; direct AA page 404) (no change).
- **Overall Score: 71/100.** Mean of (64 + 80 + 72 + 70 + 70) / 5 = 356/5 = 71.2 → 71 — best fit: high-throughput cheap reasoning/vision workhorse whose tool reliability is now proven (τ² 89.2) but whose HLE claim is contested and whose hallucination rate is measured severe; not a primary agentic/terminal coder.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-11 (original: 2026-10-21; user-approved second-pass enrichment)
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 [45.47, #119/1020, 33/812 rows, per-row provenance incl. the model card, AA, SWE-Rebench leaderboard, Gert Labs, ExtractBench] carrying Artificial Analysis runs for this model — the direct AA slug 404s; checked against the 2026-10-21 sources: Qwen3.5-35B-A3B model card, AnotherWrapper, LLM Stats, BenchLM mirrors). Scores are normalized 1–100 interpretations, not official vendor scores; conflicting readings (HLE 47.4 vs AA 21.0) reported side by side; misattributed rows (MathVision/V\\* from the 122B-A10B card) flagged and not credited. Previous Signature 2026-10-21.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
