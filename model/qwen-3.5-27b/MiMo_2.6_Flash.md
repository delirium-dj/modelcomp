# Qwen3.5-27B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-27B`)
- Date: 2026-11-11 (UTC) — second-pass enrichment re-research (previous 2026-10-21)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-11** (user-approved). Previous Signature
> 2026-10-21 (Overall 76). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **48.3/100, #106/1020, 34/812 rows** — previous
> pass had only a compare-page point estimate 48.9–50.0) and the
> **Artificial Analysis model page** (independent). Changes: **Tool use
> 64→70** — the named "no Tau3/Tau2-Bench figure" gap is filled at the
> top band: **τ²-bench 93.9% (AA)** (methodology frontier ref τ³ ~50%+ →
> 90–100), alongside recorded OSWorld-V 56.2 and BrowseComp 61; still
> capped by TB2.0 41.6 / TB Hard 32.6 (weak terminal rows, re-confirm),
> GDPval absent, and new weak rows Gert 39.41, AA-ITBench 35.5. **Reasoning
> 86→83** — the two pillars the previous score leaned on both moved
> against it: (1) **HLE conflict — AA-HLE 23.9% vs the recorded 48.5%**
> (LLM Stats vs-Gemma comparison) — the "exceeds the 40%+ frontier
> reference" claim is now contested by an independent run, both readings
> recorded side by side; (2) the "absent hallucination metrics" cap is
> resolved and severe: first **AA-Omniscience net −44.0** (accuracy 20.7,
> **hallucination 81.5%**) plus **CritPt 0.9%**. Offsets recorded:
> **AA-GPQA 85.8** corroborates 85.5/85.8, **AA-IFBench 75.6**,
> **Global-MMLU-Lite 86.8**, **MMLU-ProX 82.2**. Overall 76→**77**
> ((70+83+72+82+78)/5 = 385/5 = 77.0). Held: Context 72 (262K re-confirmed
> AA; new **AA-LCR 77.7** is long-context reasoning, not 512K+ retrieval —
> no MRCR/RULER row exists), Multimodal 82 (new **CharXiv 79.5** and
> **AA-MMMU-Pro 75.0** land where MMMU 82.3/MMVU 73.3 already put the
> band; **MathVision 86.0 and V\* 93.7 are flagged misattributed** —
> BenchLM sources them from the *Qwen3.5-122B-A10B* model card, recorded
> but not credited), Coding 78 (SWE-V 72.4, LCB v6 80.7, SWE-Rebench 58.9
> re-confirm byte-identically; SciCode/DeepSWE still absent), Cost 92
> (AA re-verifies $0.30/$2.40 Alibaba-API rate — matches recorded Novita
> tier; cheaper $0.20/$1.56 route still tracked). Conflicts recorded:
> **AA Index 34.6 (Puter card) vs 22.9 (AA page now)** — both mid, not
> converted; **AA modality spec says text+image only vs repo meta
> text/image/video in**; AA now marks the model **deprecated in favor of
> Qwen3.6 27B** (BenchLM: successor scores an identical 48.3).
> **EVA-Bench** voice row (official paper, "evaluated system", no score)
> recorded, not scored.

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba Qwen Team's 27B **dense** open-weight reasoning model (the only dense member of the Qwen3.5 generation), mixing Gated DeltaNet linear attention with standard gated attention; strong science/coding performance for its size, aimed at efficient single-node and edge-adjacent deployment. **Deprecated on Artificial Analysis (2026-11-11): "Alibaba has launched a newer release, Qwen3.6 27B"** — BenchLM shows the successor at an identical 48.3 (this model 48.3, #106/1020, 34/812 rows).
- **Provider / access:** Open weights (Apache 2.0) hosted by DeepInfra, Novita AI, Alibaba Cloud PAI-EAS / Model Studio, OpenRouter and Featherless; Chat Completions style APIs.
- **Release / knowledge:** released 2026-02-24 (LLM Stats; Puter card dated 2026-02-23); knowledge cutoff not published.
- **IDs:** `deepinfra/qwen3.5-27b`, `novita/qwen3.5-27b`, `qwen/qwen3.5-27b` (Model Studio), `qwen/qwen3.5-27b` on OpenRouter; weights `Qwen/Qwen3.5-27B`. No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 tokens native (262K), extendable to 1,000,000 tokens (Puter developer card; BenchLM lists 262K); max output ~65,536 tokens (LLM Stats provider table; Puter cites ~66K).
- **Modalities:** text, image and video in; text out; reasoning model; tool calls and JSON mode yes (LLMReference capability flags).
- **Pricing (as of 2026-10-21):** DeepInfra $0.26 in / $2.60 out per 1M; Novita $0.30 / $2.40 (LLM Stats, verified 2026-10-02); a cheaper route at $0.20 / $1.56 also tracked (LLMReference). Paid open-weight model; no $0 tier verified.
- **Architecture:** 27B dense, decoder-only; 64 layers of hybrid Gated DeltaNet linear attention + gated attention; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**agent**): **41.6%** (BenchLM mirror — re-confirmed 2026-11-10)
- Terminal-Bench Hard: **32.6%** (Puter developer card)
- OSWorld-Verified: **56.2%** (BenchLM — re-confirmed)
- BrowseComp: **61%** (BenchLM — re-confirmed)
- **τ²-bench: 93.9%** (Artificial Analysis via BenchLM — **new; the named "no Tau2/Tau3" gap is filled at the top band**)
- **New weak rows (2026-11-10):** **Gert Labs 39.41%**, **AA-ITBench 35.5%** (Kubernetes incident root-cause)
- GDPval-AA: no verified public score found (re-checked 2026-11-11)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (BenchLM; Puter card independently reports 85.8%) — **AA-GPQA Diamond 85.8%** independent run now corroborates (new)
- HLE (Humanity's Last Exam): **48.5%** (LLM Stats vs-Gemma comparison) — **conflict: AA-HLE 23.9%** (Artificial Analysis, new 2026-11-11) — the previous score's "exceeds the 40%+ frontier reference" pillar is now contested; both readings recorded side by side
- LCR (long-context reasoning): **67.3%** (Puter card); **AA-LCR 77.7%** (new, independent — same axis, higher reading)
- MMLU-Pro: **86.1%** (BenchLM, LLMReference, LLM Stats)
- SuperGPQA: **65.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **34.6** (Puter card) — **conflict: BenchLM now shows 22.9 from the AA page** (2026-11-10) — both mid, recorded side by side, not converted
- **New knowledge/instruction rows (2026-11-10):** **AA-Omniscience net −44.0** (accuracy 20.7 / **hallucination 81.5%** — the previously "absent hallucination metric" is now measured and severe), **CritPt 0.9%** (very weak), **AA-IFBench 75.6%**, **AA Global-MMLU-Lite 86.8%**, **MMLU-ProX 82.2%**, IFEval 95% (model card)
- BenchLM overall: **48.3 (#106/1020)** snapshot 2026-11-10 (was 48.9–50.0 point estimate); successor Qwen3.6-27B: 48.3 (tied)

Coding:

- SWE-bench Verified: **72.4%** (BenchLM; ties GPT-5 mini per Puter card — re-confirmed 2026-11-10)
- LiveCodeBench v6: **80.7%** (BenchLM, LLMReference — re-confirmed)
- SWE-Rebench: **58.9%** (BenchLM — re-confirmed)
- SciCode / AA-SciCode: no verified public score found (re-checked 2026-11-11)
- DeepSWE: no verified public score found

Long context:

- LongBench v2: **60.6%** (BenchLM — re-confirmed 2026-11-10)
- LCR 67.3% at the long-context lane (Puter card); **AA-LCR 77.7%** (new); no MRCR/RULER figure at 512K+ found (re-checked)

Multimodal:

- MMMU: **82.3%** (BenchLM)
- MMVU: **73.3%** (BenchLM)
- MMMU-Pro: **75%** (BenchLM compare) — **AA-MMMU-Pro 75.0%** independent run now corroborates (new)
- **CharXiv: 79.5%** (Qwen3.5-27B model card via BenchLM — **new** chart-reasoning row)
- **MathVision 86.0 / V\* 93.7 (BenchLM) — flagged misattributed: both are sourced from the *Qwen3.5-122B-A10B* model card, recorded but NOT credited to this model**
- **EVA-Bench** voice row (official paper; BenchLM: "evaluated system", no weighted score) — recorded, not scored; AA modality spec lists **text+image only** vs repo meta text/image/video in (conflict)

### Normalized scores (1–100)

- **Tool use: 70/100.** The named "no Tau3/Tau2" gap is now filled at the top band — **τ²-bench 93.9% (AA)** — confirming genuine multi-turn tool reliability alongside solid OSWorld-Verified 56.2 and BrowseComp 61 → 70 (was 64); still capped by weak terminal rows (TB2.0 41.6, TB Hard 32.6 — both re-confirm), GDPval absent, and new weak rows Gert 39.41 / AA-ITBench 35.5.
- **Reasoning: 83/100.** Both pillars of the previous 86 moved against it: the **HLE 48.5 "frontier-exceeding" claim is contested by AA-HLE 23.9** (independent; both recorded side by side, none converted), and the "absent hallucination metrics" cap is resolved severe — **AA-Omniscience net −44.0 (81.5% hallucination)** plus **CritPt 0.9%** → 83 (was 86). Held up by corroborated GPQA 85.5/85.8, MMLU-Pro 86.1, and new IFBench 75.6 / Global-MMLU-Lite 86.8 / MMLU-ProX 82.2; Index conflict (34.6 vs 22.9) recorded, both mid.
- **Context window: 72/100.** 262,144 native tokens lands in the 200K–500K tier (200K = 70 reference; re-confirmed AA); 1M extension is available but unproven at scale in public retrieval suites (LongBench v2 60.6 re-confirms; new AA-LCR 77.7 is long-context reasoning, not retrieval-at-512K — no MRCR/RULER row) (no change).
- **Multimodal: 82/100.** Text+image+video input with text output, backed by MMMU 82.3 / MMVU 73.3 — new CharXiv 79.5 and independent AA-MMMU-Pro 75.0 land exactly where the band already sits (no change); MathVision/V\* rows flagged misattributed (122B-A10B provenance) and not credited; AA's text+image-only modality spec conflicts with the video claim (recorded).
- **Coding: 78/100.** SWE-bench Verified 72.4 (near-frontier for a 27B dense) and LiveCodeBench v6 80.7 re-confirm byte-identically on the 2026-11-10 snapshot; SWE-Rebench 58.9 unchanged; Terminal-Bench 2.0 41.6 (agentic coding) and still-missing DeepSWE/SciCode keep it capped below 80 (no change).
- **Cost efficiency: 92/100** (excluded from Overall). $0.26/$2.60 (DeepInfra) with routes down to $0.20/$1.56 — cheap open-weight serving; AA re-verifies the Alibaba-API rate at $0.30/$2.40 (matches the recorded Novita tier; AA frames it "expensive" only against the open-weight-class median $0.12/$0.30); no free tier found (no change).
- **Overall Score: 77/100.** Mean of (70 + 83 + 72 + 82 + 78) / 5 = 385/5 = 77.0 → 77 — best fit: the strongest dense ~27B open model for science QA and SWE-class coding under a 262K window, now with a top-band τ² 93.9 on record offsetting a contested HLE reading and a severe measured hallucination rate; step up to Qwen3.5-122B-A10B/397B for harder agentic terminal work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-11
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 [48.3, #106/1020, 34/812 rows, per-row provenance incl. the model card, AA, SWE-Rebench leaderboard, Gert Labs] and the Artificial Analysis model page [independent τ² 93.9, GPQA 85.8, HLE 23.9, LCR 77.7, Index 22.9, Omniscience −44.0/20.7/81.5, CritPt 0.9, IFBench 75.6, Global-MMLU-Lite 86.8, MMMU-Pro 75.0, pricing $0.30/$2.40, deprecation → Qwen3.6 27B]; checked against the 2026-10-21 sources: Qwen3.5-27B model card, Puter developer card, LLM Stats, LLMReference, BenchLM mirrors). Scores are normalized 1–100 interpretations, not official vendor scores; conflicting readings (HLE 48.5 vs 23.9, Index 34.6 vs 22.9, video-in vs text+image spec) reported side by side; misattributed rows (MathVision/V\* from the 122B-A10B card) flagged and not credited. Previous Signature 2026-10-21.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
