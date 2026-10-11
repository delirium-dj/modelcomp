# Qwen3.8-27B — findings by Kimi K3

- Source: Alibaba / Qwen3.8-27B (`qwen-3.8-27b`; HF `Qwen/Qwen3.8-27B`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** The open-weights dense 27B of the Qwen3.8 family — a native vision-language model (images+video) with flexible thinking control. Remarkable at its size: SWE-bench (Vals) 86%, LiveCodeBench v6 90.3%, OSWorld-Verified 84.3%.
- **Provider / access:** Open weights HF `Qwen/Qwen3.8-27B` (link confirmed live); OpenRouter `qwen/qwen3.8-27b`; OpenCode Zen route present in catalog (barely used).
- **Release / knowledge:** 2026-08-14 (OpenCode Data, newly verified — first pass had "Aug 2026, alongside Qwen3.8 launch"); cutoff not published.
- **IDs:** `qwen/qwen3.8-27b`; HF `Qwen/Qwen3.8-27B`; `alibaba/qwen3.8-27b` (OpenCode Data).
- **Context window:** 262K native (OpenCode Data confirms); max output **33K** (OpenCode Data catalog — CONFLICT with my first-pass 131K figure sourced from openrouter's listing; catalog governs, both noted).
- **Modalities:** text/image/video in; text out; reasoning (thinking control); tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** OpenCode catalog: $0.50/M input, $3.00/M output, $0.10 cached (new this pass — CONFLICT with the OpenRouter $0.094/$4.40 recorded 2026-09-24; different providers, both retained); open weights → self-host free.
- **Architecture:** 27B dense (native vision-language), open weights (OpenCode Data confirms HF link).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **73** score (official HF card via OpenCode Data; matches benchlm.ai TB 2.1 73.0%; Vals 58.4%)
- Tau3-Banking (AA): **48.0%** (benchlm.ai)
- GDPval-AA: **1463 Elo** (45.4% normalized) (benchlm.ai)
- OSWorld-Verified: **84.3%** (official HF card; matches benchlm.ai); AndroidWorld: **81.9%** (official; matches); WebArena-Verified: **64.8%** (official; matches)
- CoWorkBench: **70.7%** (official; matches); JobBench: **33.4** (official, new); Agents' Last Exam: **42.9** score / **20.4%** pass@1 (official, new); ClawEval-MM: **57.4%** pass@3 / **56.9%** avg (official HF card — fills my earlier "Claw-Eval: no verified public score" gap); AA Agentic Index: **46.5%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (official HF card; matches benchlm.ai's GPQA-D 89.2; AA 90.5%; Vals 88.9%)
- HLE: **30.8%** (official HF card; matches benchlm.ai); AA-HLE 33.9%
- IFBench: **79.5%** (official HF card, new); AA-LCR: **82.0%**; MLCR-AA: **21.7%**; CritPt: **5.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **33.7**; BenchLM overall **55.35/100, #53 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **15.6% / 30.3%** (benchlm.ai)
- LiveBench overall: **75.3** (Reasoning 80.0 / Coding 75.7 / Agentic 61.4 / Math 86.2 / Data 76.6 / Language 74.3 / IF 72.7) (LiveBench 2026-06-25 via shortlyai.com)

Coding:

- SWE-bench (Vals): **86.0%**; SWE-bench Pro: **61.7%** resolved (official HF card; matches benchlm.ai); QwenSWEBench: **79** avg@3 (official, new); SWE-MM: **38.6** (official, new)
- LiveCodeBench v6: **90.3%** (official HF card; matches benchlm.ai); LiveCodeBench (Vals): **84.0%** (benchlm.ai)
- DeepSWE: **42.2%** (official; matches); NL2Repo: **42.3%** (official; matches); VulcanBench v3: **82.6%** (benchlm.ai)
- AA-SciCode: **46.6%**; AA Coding Index: **68.1** (benchlm.ai)

Long context:

- AA-LCR 82.0% within 262K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- MathVision: **90.0%** (w/ Python 94.6%; official HF card, both rows); CharXiv Reasoning: **83.7% / 90.2%** (official); OmniDocBench 1.5: **91.1%** (official; matches); RealWorldQA: **85.9%** (official, new); ERQA: **65.5**; RecreationBench: **47.1**; Vision2Web: **62.9**; BabyVision: **65.7 / 85.6** (official HF card, new); AA-MMMU-Pro: **76.3%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 74/100.** Unchanged: OSWorld-Verified 84.3%, TB 73%, GDPval 1463 excellent for 27B; capped by JobBench 33.4% and ALE 42.9%.
- **Reasoning: 72/100.** Unchanged: GPQA ~89–90%, LCR 82.0%; capped by CritPt 5.4%, HLE 30.8%, low Omniscience accuracy.
- **Context window: 70/100.** Unchanged: true 262K window with LCR 82.0%; the catalog's 33K max output (vs the 131K I recorded from OpenRouter) argues *against* an upgrade; below the 1M tier.
- **Multimodal: 85/100.** Unchanged: full vision+video suite verified on the official HF card (MathVision 90–94.6%, OmniDocBench 91.1%); text-only output caps it.
- **Coding: 80/100.** Unchanged: SWE-bench (Vals) 86%, LCB v6 90.3%, VulcanBench 82.6% — outstanding for 27B; capped by DeepSWE 42.2%.
- **Cost efficiency: 95/100.** Unchanged: open 27B weights; sub-cent input pricing on OpenRouter (Zen catalog's $0.50/$3.00 noted as the pricier managed route).
- **Overall Score: 76/100.** Mean of the five quality dims (74+72+70+85+80)/5 = 76.2 → 76. Best fit: the best small open multimodal coding model in this cohort — self-host or sub-cent input pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official Qwen HF model card `Qwen/Qwen3.8-27B` transcribed by OpenCode Data `alibaba/qwen3-8-27b`; benchlm.ai scorecard, openrouter.ai listing, shortlyai.com LiveBench from first pass). Second pass over my 2026-09-24 file: verified release (2026-08-14) and open weights; flagged the 33K-vs-131K max-output conflict and the Zen-vs-OpenRouter pricing conflict; added ClawEval-MM / Vision2Web / RealWorldQA / SWE-MM / QwenSWEBench / ALE / JobBench / IFBench rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
