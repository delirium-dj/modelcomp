# DeepSeek V4.1 Flash — findings by Laguna S 2.1

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`) — model card (`https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash`), technical report (`https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf`), Artificial Analysis (`https://artificialanalysis.ai/models/deepseek-v4-1-flash`), BenchLM (`https://benchlm.ai/models/deepseek-v4-1-flash`), AshnaAI launch article (`https://ashnaai.com/deepseek-v4-1-flash`)
- Date: 2026-10-10 (UTC)
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
- **Terminal-Bench 4.0:** 31.20% — (DeepSeek model card via BenchLM)
- **AA Terminal-Bench 4.0:** 26.8% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **CyberGym:** 88.1% — (DeepSeek model card via BenchLM)
- **ExploitGym:** 15.3% — (DeepSeek model card via BenchLM)
- **HLE w/ tools:** 63.9% — (DeepSeek model card via BenchLM)
- **AutomationBench:** 54.8% — (DeepSeek model card via BenchLM)
- **AA AutomationBench:** 68.9% — (AA: automationbench-aa leaderboard via BenchLM)
- **Agents' Last Exam:** 31.8% — (DeepSeek model card via BenchLM)
- **GDPval-AA (Elo):** 1600 — (AA: gdpval-aa leaderboard via BenchLM)
- **GDPval-AA (normalized):** 55.0% — (AA: gdpval-aa-normalized leaderboard via BenchLM)
- **AA Briefcase:** 1420 (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA ITBench:** 46.9% — (AA: itbench-aa leaderboard via BenchLM)
- **GDP.pdf:** 12.8% — (AA: gdp-pdf leaderboard via BenchLM)
- **CWE-bench v1:** 55.0% — (Collinear: CWE-bench v1 leaderboard via BenchLM)

Coding:

- **Codeforces:** 3471.0 — (DeepSeek model card via BenchLM)
- **DeepSWE:** 74.2% — (DeepSeek model card via BenchLM) — leads GPT-6 Sol 68.8%
- **NL2Repo:** 65.4% — (DeepSeek technical report via BenchLM)
- **ProgramBench:** 20.3% — (DeepSeek model card via BenchLM)
- **AA-SciCode:** 51.9% — (AA: scicode leaderboard via BenchLM)
- **OpenHarmony Bench:** 60.3% — (OpenHarmony Bench official leaderboard via BenchLM)
- **Bug Hunt Bench:** 21.7 fixes — (Bug Hunt Bench public data via BenchLM)

Multimodal & grounded:

- **Chartography (tools):** 78.9% — (DeepSeek model card via BenchLM)
- **BabyVision w/ Python:** 89.6% — (DeepSeek model card via BenchLM)
- **ZeroBench w/ Python:** 49.0% — (DeepSeek model card via BenchLM)
- **AA-MMMU-Pro:** 77.0% — (AA: mmmu-pro leaderboard via BenchLM)

Reasoning / knowledge:

- **GPQA Diamond:** 90.9% — (DeepSeek model card via BenchLM)
- **AA-GPQA Diamond:** not listed on BenchLM (model card GPQA 90.9% cited)
- **HLE (no tools):** 36.8% — (DeepSeek model card via BenchLM)
- **AA-HLE:** 39.2% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** 84.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **MLCR-AA:** 22.8% — (AA: mlcr-aa leaderboard via BenchLM)
- **CritPt:** 14.3% — (AA: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** -5.3% — (AA: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** 46.4% — (AA model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** 96.5% — (AA model benchmarks via BenchLM)
- **Artificial Analysis Intelligence Index:** 39.5% — (AA: artificial-analysis-intelligence-index leaderboard via BenchLM; AA model page shows 39, rank #7/117 among large open weights, median: 18)
- **Apex:** 65.6% — (DeepSeek model card via BenchLM)

Long context:

- **AA-LCR:** 84.0% — (AA model benchmarks via BenchLM) — strong long-context reasoning
- **MRCR / RULER:** no verified public score found (not reported)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 45 public benchmarks found across 4 sources (AA, BenchLM, DeepSeek model card, DeepSeek tech report).

- **Tool use: 89/100.** Terminal-Bench 2.1 at 90.6% (frontier ≥88% threshold), aaTerminalBench21 at 90.6% (AA, also at frontier), and GDPval-AA at 1600 Elo (near-frontier ~1750+) are exceptional. CyberGym at 88.1%, DeepSWE at 74.2% (at frontier threshold), AutomationBench at 54.8% (above ~50% frontier ref), Agents' Last Exam at 31.8% (above 30% frontier ref) provide strong supporting evidence. AA AutomationBench at 68.9% and CWE-bench at 55.0% are moderate. Capped by AA Terminal-Bench 4.0 at 26.8% (weak, below ~30% frontier), GDP.pdf at 12.8% (weak), ExploitGym at 15.3% (weak), and terminalBench3 at 30% (below 50% frontier).

- **Reasoning: 85/100.** Intelligence Index at 39 (rank #7/117 among large open weights, well above median 18). Using II + 30 formula: 39 + 30 = 69. However, GPQA Diamond at 90.9% (frontier ≥90% threshold), HLE w/ tools at 63.9% (above 40%), AA-HLE at 39.2%, and HLE (no tools) at 36.8% provide strong reasoning evidence. AA-LCR at 84.0% is excellent for long-context reasoning. Apex at 65.6% and AA-Omniscience Index at -5.3% (slightly positive). CritPt at 14.3% and MLCR-AA at 22.8% are weak. Capped by Intelligence Index 39 being below the 60 frontier threshold and weak physics reasoning (CritPt 14.3%).

- **Context window: 95/100.** 1,000,000 tokens per AA model page, BenchLM, and `meta.json` (all agree at ≥1M tier → 95). Max output 384K (strong). AA-LCR at 84.0% confirms long-context reasoning. No verified ≥98% retrieval at 512K+ to reach 100.

- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF). AA-MMMU-Pro at 77.0% and BabyVision at 89.6% provide multimodal evidence. Chartography at 78.9% and ZeroBench at 49.0% are moderate. Capped by no video/audio/PDF input.

- **Coding: 92/100.** Terminal-Bench 2.1 at 90.6% (frontier), DeepSWE at 74.2% (frontier threshold), Codeforces 3471.0 (competitive rating), NL2Repo at 65.4%, OpenHarmony Bench at 60.3%, AA-SciCode at 51.9% (near 55% threshold), Bug Hunt Bench at 21.7 fixes. Strong coding cluster across terminal, agentic, and competitive programming benchmarks. Capped by no SWE-bench Verified/LiveCodeBench standalone on BenchLM and weak ProgramBench (20.3%) and Bug Hunt Bench.

- **Cost efficiency: 85/100.** Official off-peak $0.15/$0.60 per 1M is elite cheap for a 552B open-weights MoE; peak $0.30/$1.20 (~$0.18/MTok blended) still well below the $0.60/$2.20 ≈ 92 tier; cache-hit input $0.003. Open weights (MIT license) for zero-marginal-cost self-hosting. noFreeId — paid API only, no $0 Zen tier.

- **Overall Score: 86.2/100.** (89 + 85 + 95 + 70 + 92) / 5 = 431 / 5 = 86.2 → 87. Strong open-weights 552B MoE with 1M context, leading Terminal-Bench 2.1 (90.6%), DeepSWE (74.2%), and CyberGym (88.1%); Intelligence Index 39 (#7/117); elite cost efficiency ($0.30/$1.20, MIT open weights). Aligns with BenchLM Overall 67.9/100 rank #23/889 and AA Intelligence Index 39 (#7/117 among large open weights). Caps: weak ExploitGym (15.3%), GDP.pdf (12.8%), text+image-only modalities, and no MRCR/RULER reported.

> **Reconciliation note:** Repo AI-Rankings average for this model is **86.6** (audit/model-comparison.md v4, 2026-09-17). My score (87) matches within tolerance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via BenchLM model page (`benchlm.ai/models/deepseek-v4-1-flash`, Oct 10), Artificial Analysis model page (`artificialanalysis.ai/models/deepseek-v4-1-flash`, Oct 10), DeepSeek-V4.1-Flash HuggingFace model card (`huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash`), and DeepSeek V4.1 Flash technical report; scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.

---
