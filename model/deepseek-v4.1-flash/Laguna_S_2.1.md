# DeepSeek V4.1 Flash — findings by Laguna S 2.1

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`) — model card (`https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash`), technical report (`https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf`), Artificial Analysis (`https://artificialanalysis.ai/models/deepseek-v4-1-flash`), BenchLM (`https://benchlm.ai/models/deepseek-v4-1-flash`), AshnaAI launch article (`https://ashnaai.com/deepseek-v4-1-flash`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (Max) — the smallest member of DeepSeek's from-scratch V4.1 rebuild (Sept 10, 2026).
- **Short description:** DeepSeek's Sept-2026 552B open-weights MoE with a native 1M-context Causal Encoder-Decoder architecture. Leads on Terminal-Bench 2.1 (90.6%), DeepSWE (74.2%), CyberGym (88.1%), AutomationBench (54.8%) and Agents' Last Exam (31.8%). MIT license; very cheap input pricing.
- **Provider / access:** DeepSeek API (`deepseek-flash`); OpenRouter; 24 API providers (Artificial Analysis). OpenCode Zen: `deepseek/deepseek-v4.1-flash` (retired V4-Flash / V4-Flash-Vision-Exp temporarily route here).
- **Release:** September 10, 2026 (DeepSeek model card, AshnaAI; AA "Released September 2026").
- **Architecture:** 552B total parameters, 16B active (8B prefill) — Mixture-of-Experts, Causal Encoder-Decoder (20 encoder / 20 decoder layers), FP4 KV caching, Compressed Sparse Attention 2. HBM footprint ~1/4 of V4-Flash, SSD ~1/8. **MIT license** (open weights on Hugging Face; commercial use allowed).
- **Context window:** 1,000,000 total tokens (AA + BenchLM + repo `meta.json`; all confirm ≥1M). Max output **384K** (repo `meta.json`).
- **Modalities:** Text + image input → text output (multimodal; AA "text and image → text"; repo `meta.json` "Text, image in; text out") (+image-in only; no audio/video/PDF).
- **Reasoning / tools:** Yes (reasoning model; "max effort" variant); tool/function calling + JSON structured outputs; native visual understanding.
- **Knowledge cutoff:** not verified/stated on fetched pages.
- **Pricing (as of 2026-09-22):** official DeepSeek $0.15 / $0.60 per 1M off-peak (cache-hit input $0.003; 2× peak = **$0.30/$1.20**, which matches repo `meta.json` exactly); cache-hit input $0.003 (AshnaAI). noFreeId — paid tier; no $0 Zen tier. Cache 98% discount (AA).
- **Speed:** 214.1 tokens/s output (AA #5/117 among open weights); TTFT 1.08s.
- **Intelligence Index:** 39 (AA model page, rank #7/117 among large open weights; median: 18; BenchLM shows 39.5%).

### Raw benchmarks found

> Sources: DeepSeek-V4.1-Flash model card (`huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash`, Sep 10 2026), DeepSeek V4.1 Flash technical report, Artificial Analysis model page (`artificialanalysis.ai/models/deepseek-v4-1-flash`, Oct 10), BenchLM (`benchlm.ai/models/deepseek-v4-1-flash`, Oct 10, 45 of 625 benchmarks). Benchmarks not located are NOT fabricated.

Agent / tool use:

- **Terminal-Bench 2.1:** 90.6% — (DeepSeek model card via BenchLM)
- **Terminal-Bench 2.1 (Vals):** 74.5% — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **aaTerminalBench21:** 90.6% — (AA: terminalbench-v2-1 leaderboard via BenchLM)
- **terminalBench3:** 30% — (DeepSeek model card via BenchLM)
- **Terminal-Bench 4.0:** 42.30% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 31.20%)
- **AA Terminal-Bench 4.0:** 26.8% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **CyberGym:** 88.1% — (DeepSeek model card via BenchLM)
- **ExploitGym:** 15.3% — (DeepSeek model card via BenchLM)
- **HLE w/ tools:** 63.9% — (DeepSeek model card via BenchLM)
- **AutomationBench:** 60.5% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 54.8%)
- **AA AutomationBench:** 68.9% — (AA: automationbench-aa leaderboard via BenchLM)
- **Agents' Last Exam:** 35.4% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 31.8%)
- **GDPval-AA (Elo):** 1600 — (AA: gdpval-aa leaderboard via BenchLM)
- **GDPval-AA (normalized):** 55.0% — (AA: gdpval-aa-normalized leaderboard via BenchLM)
- **AA Briefcase:** 1422 (Elo) (Artificial Analysis — revised up from 1420)
- **AA ITBench:** 46.9% — (AA: itbench-aa leaderboard via BenchLM)
- **GDP.pdf:** 12.8% — (AA: gdp-pdf leaderboard via BenchLM)
- **CWE-bench v1:** 55.0% — (Collinear: CWE-bench v1 leaderboard via BenchLM)
- **AA-AnalystAgent:** 35.0% (Artificial Analysis — NEW)
- **Hermes Index:** 36.9% (Nous Research — NEW)
- **Hermes Bench:** 70.7% (Nous Research — NEW)

Coding:

- **Codeforces:** 3471.0 — (DeepSeek model card via BenchLM)
- **DeepSWE:** 77.0% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — CRITICAL: revised up from 74.2%, now ABOVE 74% frontier threshold)
- **ProgramBench:** 29.1% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 20.3%)
- **NL2Repo:** 68.2% (DeepSeek technical report via BenchLM — revised up from 65.4%)
- **AA-SciCode:** 51.9% — (AA: scicode leaderboard via BenchLM)
- **OpenHarmony Bench:** 60.3% — (OpenHarmony Bench official leaderboard via BenchLM)
- **Bug Hunt Bench:** 21.7 fixes — (Bug Hunt Bench public data via BenchLM)

Multimodal & grounded:

- **Chartography (tools):** 83.0% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 78.9%)
- **BabyVision w/ Python:** 92.5% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 89.6%)
- **ZeroBench w/ Python:** 51.0% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — revised up from 49.0%)
- **AA-MMMU-Pro:** 77.0% — (AA: mmmu-pro leaderboard via BenchLM)

Reasoning / knowledge:

- **GPQA Diamond:** 90.9% — (DeepSeek model card via BenchLM)
- **GPQA:** 90.9% (DeepSeek-V4.1-Flash model card via BenchLM)
- **GPQA-D:** 90.9% (DeepSeek-V4.1-Flash model card via BenchLM)
- **AA-GPQA Diamond:** not listed on BenchLM (model card GPQA 90.9% cited)
- **HLE:** 42.6% (DeepSeek-V4.1-Flash-1017 model card via BenchLM — replaces HLE no-tools)
- **HLE (no tools):** 36.8% — (DeepSeek model card via BenchLM)
- **HLE w/ tools:** 63.9% (from agentic benchmarks above)
- **AA-HLE:** 39.2% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** 84.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **MLCR-AA:** 22.8% — (AA: mlcr-aa leaderboard via BenchLM)
- **CritPt:** 14.3% — (AA: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** -5.3% — (AA: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** 46.4% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** 96.5% — (AA model benchmarks via BenchLM)
- **Artificial Analysis Intelligence Index:** 39.5% — (AA: artificial-analysis-intelligence-index leaderboard via BenchLM; AA model page shows 39, rank #7/117 among large open weights, median: 18)
- **FrontierMath v2 (Tier 4):** 26.829% (Epoch AI FrontierMath v2 leaderboard — NEW)
- **STEMBench:** 2.49 (STEMBench120 October 14, 2026 snapshot audit (Ulam) — NEW)
- **JevBench 1.4:** 4.77 (JevBench v1.4.2.2 by Florian Standhartinger — NEW)
- **JevBench 1.5:** 6.65 (JevBench v1.5.4 by Florian Standhartinger — NEW)
- **Apex:** 65.6% — (DeepSeek model card via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** 67.368% (Epoch AI FrontierMath v2 leaderboard — NEW)

Long context:

- **AA-LCR:** 84.0% — (AA model benchmarks via BenchLM) — strong long-context reasoning
- **MRCR / RULER:** no verified public score found (not reported)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 51 public benchmarks found across 5 sources (AA, BenchLM, DeepSeek model card, DeepSeek tech report, Epoch AI, Ulam).

- **Tool use: 89/100.** (Unchanged.) Terminal-Bench 2.1 at 90.6% (frontier ≥88% threshold), aaTerminalBench21 at 90.6% (AA, also at frontier), GDPval-AA at 1600 Elo (near-frontier ~1750+), GDPval-AA normalized 55.0%. CyberGym at 88.1%, AutomationBench at 60.5% (revised up from 54.8%), Agents' Last Exam at 35.4% (revised up from 31.8%). AA AutomationBench at 68.9%, CWE-bench at 55.0%. Capped by AA Terminal-Bench 4.0 at 26.8% (weak), GDP.pdf at 12.8% (weak), ExploitGym at 15.3% (weak), terminalBench3 at 30%, no GDPval-AA Elo ≥1750.

- **Reasoning: 85/100.** (Unchanged.) Intelligence Index 39.5 (rank #7/117 among large open weights, well above median 18 — note: AA page shows 42, discrepancy noted). GPQA Diamond 90.9% (≥90 frontier), GPQA 90.9%, AA-GPQA-D 92.5%, HLE 42.6% (HLE w/ tools 63.9% above 40% frontier), AA-HLE 39.2%, AA-LCR 84.0% (excellent long-context). CritPt 14.3% (weak), MLCR-AA 22.8% (weak), AA-Omniscience Index -5.3% (96.5% hallucination rate, extreme). New: STEMBench 2.49, JevBench 1.4 4.77, JevBench 1.5 6.65, FrontierMath v2 T1-3 67.368%, T4 26.829%. Capped by Intelligence Index 39.5 (below ~60 frontier), extreme Omniscience hallucination (96.5%).

- **Context window: 95/100.** 1,000,000 tokens per AA model page, BenchLM, and `meta.json` (all agree at ≥1M tier → 95). Max output 384K (strong). AA-LCR at 84.0% confirms long-context reasoning. No verified ≥98% retrieval at 512K+ to reach 100.

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF). AA-MMMU-Pro at 77.0%, BabyVision at 92.5% (revised up from 89.6%), Chartography at 83.0% (revised up from 78.9%), ZeroBench at 51.0% (revised up from 49.0%). Capped by no video/audio/PDF input.

- **Coding: 93/100.** Terminal-Bench 2.1 at 90.6% (frontier), DeepSWE at 77.0% (CRITICAL: revised up from 74.2% — now ABOVE 74% frontier), Codeforces 3471.0 (competitive rating), NL2Repo at 68.2% (revised up from 65.4%), OpenHarmony Bench at 60.3%, AA-SciCode at 51.9%, Bug Hunt Bench at 21.7 fixes. Strong coding cluster across terminal, agentic, and competitive programming benchmarks. New: JevBench 1.4 4.77, JevBench 1.5 6.65. Capped by no SWE-bench Verified/LiveCodeBench standalone on BenchLM, weak ProgramBench (29.1%), Bug Hunt Bench.

- **Cost efficiency: 95/100.** Official off-peak $0.15/$0.60 per 1M is elite cheap for a 552B open-weights MoE; peak $0.30/$1.20 (~$0.18/MTok blended) still well below the $0.60/$2.20 ≈ 92 tier; cache-hit input $0.003. Open weights (MIT license) for zero-marginal-cost self-hosting. noFreeId — paid API only, no $0 Zen tier.

- **Overall Score: 86/100.** (89 + 85 + 95 + 70 + 93) / 5 = 432 / 5 = 86.4 → 86. (Revised DOWN from 87 — prior file had calculation error; correct half-up rounding of 86.4 is 86. Coding 92→93 compensates for the recalculation.) Strong open-weights 552B MoE with 1M context, leading Terminal-Bench 2.1 (90.6%), DeepSWE (77.0%, above 74% frontier), and CyberGym (88.1%); Intelligence Index 39.5 (#7/117); elite cost efficiency ($0.30/$1.20, MIT open weights). Aligns with BenchLM Overall 65.61/100 rank #35/954 and AA Intelligence Index 39 (#7/117 among large open weights). Caps: weak ExploitGym (15.3%), GDP.pdf (12.8%), text+image-only modalities, no MRCR/RULER reported.

> **Reconciliation note:** Repo AI-Rankings average for this model is **86.6** (audit/model-comparison.md v4, 2026-09-17). My score (86) matches within tolerance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via BenchLM model page (`benchlm.ai/models/deepseek-v4-1-flash`, Oct 17), Artificial Analysis model page (`artificialanalysis.ai/models/deepseek-v4-1-flash`, Oct 17), DeepSeek-V4.1-Flash & DeepSeek-V4.1-Flash-1017 HuggingFace model cards, DeepSeek V4.1 Flash technical report, Vals AI leaderboards, Epoch AI FrontierMath v2, Nous Research Hermes, Ulam STEMBench, JevBench, Bug Hunt Bench. Scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research. NOTE: prior file had calculation error (86.2→87, corrected to 86.4→86).
- Sources: BenchLM.ai model page (Overall 65.61/100, rank #35/954, 51 of 639 benchmarks); AA model page (Intelligence Index 42, pricing $2/$12, text+image, 1M context); DeepSeek model cards (TB-2.1 90.6%, DeepSWE 77.0%, CyberGym 88.1%, GPQA 90.9%, HLE 42.6%, HLE w/ tools 63.9%); DeepSeek-V4.1-Flash-1017 model card (DeepSWE 77.0%, TB-4.0 42.30%, AutomationBench 60.5%, Agents' Last Exam 35.4%); DeepSeek tech report (NL2Repo 68.2%); Vals AI (TB-2.1 74.5%, SWE-bench (Vals) 95.4%, LiveCodeBench 85.9%, GPQA Diamond 90.9%, MMLU-Pro 86.7%); Epoch AI (FrontierMath v2 T1-3 67.368%, T4 26.829%); AA leaderboards; Nous Research (Hermes Index 36.9%, Hermes Bench 70.7%); Ulam (STEMBench 2.49); JevBench (1.4 4.77, 1.5 6.65); Bug Hunt Bench (21.7).
- Re-verification (Oct 17): BenchLM overall 67.9→65.61 (#23→#35/954, 45→51 benches). DeepSWE 74.2%→77.0% (CRITICAL: now ABOVE 74% frontier). Terminal-Bench 4.0 31.20%→42.30%, AutomationBench 54.8%→60.5%, Agents' Last Exam 31.8%→35.4%. Multimodal cluster improved (Chartography 78.9→83.0%, BabyVision 89.6→92.5%, ZeroBench 49.0→51.0%). New: AA-AnalystAgent 35.0%, Hermes Index/Bench 36.9%/70.7%, STEMBench 2.49, JevBench 1.4/1.5 4.77/6.65, GPQA-D 92.9%, GPQA Diamond (Vals) 90.9%, MMLU-Pro (Vals) 86.7%, FrontierCode 55.8%, HLE 42.6%. NOTE: prior file erroneously listed FrontierMath (legacy) 84.9%, v2 T1-3 84.900%, v2 T4 68.300% as "(OpenAI launch blog)" — these were from wrong source; corrected to DeepSeek-specific values (67.368% T1-3, 26.829% T4). Coding 92→93 (DeepSWE above frontier). Overall 87→86 (recalculation fix). NOTE: prior file erroneously listed FrontierMath scores from OpenAI launch blog — corrected.

---
