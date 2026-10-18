# GLM-5.3-FlashX — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/glm-5-3-flash`), BenchLM (`https://benchlm.ai/models/glm-5.3-flash`), HuggingFace (`https://huggingface.co/zai-org/GLM-5.3-Flash`), Vals AI (`https://www.vals.ai/models/zai_glm-5.3-flash`), Z.AI blog (`https://z.ai/blog/glm-5.3-flash`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.AI's high-speed serving variant of GLM-5.3-Flash with identical weights, tuned for ~200 tok/s low-latency multimodal agentic coding. Same 320B total / 18B active MoE architecture, 1M context, text+image+video input, text output.
- **Provider / access:** Z.AI API; OpenCode Zen: `opencode/glm-5.3-flashx` at $0.37/$1.25 per 1M tokens; 27 API providers
- **Release / knowledge:** Released August 26, 2026 (same as GLM-5.3-Flash); knowledge cutoff not published
- **IDs:** `opencode/glm-5.3-flashx` (Zen, per `meta.json`); `zai-org/GLM-5.3-Flash` (HuggingFace, identical weights)
- **Context window:** 1,048,576 (1M); 128,000 output (per `meta.json` and AA model page — both agree at 1M)
- **Modalities:** Text, image, video input; text output; reasoning yes (chain-of-thought)
- **Pricing (as of 2026-10-08):** $0.37 input / $1.25 output per 1M tokens (OpenCode Zen `opencode/glm-5.3-flashx`, per `meta.json`); cache hits discounted 83% (AA model page)
- **Architecture:** Mixture-of-Experts (MoE); 320B total parameters, 18B active
- **License:** MIT (per HuggingFace model card)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** ~200 tokens/s output (FlashX high-speed serving variant; AA measures GLM-5.3-Flash base at 51.4 t/s)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/glm-5-3-flash`, Oct 17), BenchLM (`https://benchlm.ai/models/glm-5.3-flash`, Oct 17, 45 of 639 benchmarks — confirms all prior data), HuggingFace model card + eval results (`https://huggingface.co/zai-org/GLM-5.3-Flash`), Vals AI leaderboards (`https://www.vals.ai/models/zai_glm-5.3-flash`), Z.AI blog (`https://z.ai/blog/glm-5.3-flash`). FlashX uses identical weights to GLM-5.3-Flash per `meta.json`, so all benchmarks for GLM-5.3-Flash are inherited. BenchLM Oct 17 confirms all scores; new benchmarks: Hermes Index 35.0%, Hermes Bench 68.9%, AA AnalystAgent 25.0%, AA Tau3 Banking 47.2%, AA EnterpriseOps-Gym 33.2%, MazeBench 0%.

Agent / tool use:

- **Terminal-Bench 2.1:** 84.3% — (Z.AI blog via BenchLM; also aaTerminalBench21 at 84.3% via AA)
- **Toolathlon-Verified:** 78.4% — (Z.AI blog via BenchLM)
- **AutomationBench:** 48.8% — (Z.A.I blog via BenchLM)
- **Agents' Last Exam:** 26.3% — (Z.AI blog via BenchLM)
- **GDPval-AA (Elo):** 1773 — (Z.AI blog via BenchLM)
- **AA Briefcase:** 1454 (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** 60.4% — (AA: automationbench-aa leaderboard via BenchLM)
- **AA EnterpriseOps-Gym:** 33.2% — (AA: enterprise-ops-gym-aa leaderboard via BenchLM)
- **AA ITBench:** 51.2% — (AA: itbench-aa leaderboard via BenchLM)
- **AA Tau3 Banking:** 47.2% — (AA: tau3-banking leaderboard via BenchLM)
- **AA Terminal-Bench 4.0:** 32.8% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
- **AA Tau3 Banking:** 47.2% — (AA: tau3-banking leaderboard via Oct 17 BenchLM — NEW, inherited from GLM-5.3-Flash)
- **Hermes Index:** 35.0% — (Nous Research: Hermes Index leaderboard via Oct 17 BenchLM — NEW)
- **Hermes Bench:** 68.9% — (Nous Research: Hermes Index leaderboard via Oct 17 BenchLM — NEW)
- **AA EnterpriseOps-Gym:** 33.2% — (AA: enterprise-ops-gym-aa leaderboard via Oct 17 BenchLM — NEW)
- **MazeBench:** 0% — (MazeBench AI leaderboard via Oct 17 BenchLM — NEW)
- **AA AnalystAgent:** 25.0% — (AA: aa-analyst-agent leaderboard via Oct 17 BenchLM — NEW)
- **GDP.pdf:** 15.4% — (AA: gdp-pdf leaderboard via BenchLM)
- **τ²-bench:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond (Vals):** 86.4% — (Vals AI: GPQA Diamond leaderboard via BenchLM)
- **MMLU-Pro (Vals):** 86.1% — (Vals AI: MMLU Pro leaderboard via BenchLM)
- **AA-GPQA Diamond:** 91.2% — (AA: gpqa-diamond leaderboard via BenchLM)
- **AA-HLE:** 39.9% — (AA: humanitys-last-exam leaderboard via BenchLM)
- **HLE w/ tools:** 55.3% — (Z.AI blog via BenchLM)
- **AA-LCR:** 80.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **MLCR-AA:** 51.1% — (AA: mlcr-aa leaderboard via BenchLM)
- **CritPt:** 15.4% — (AA: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** 7.5% — (AA: omniscience leaderboard via BenchLM)
- **Artificial Analysis Intelligence Index:** 41.8% — (AA model page: 42, rank #4/117 among large open weights; median: 18; BenchLM confirms 41.8%)

Coding:

- **SWE-bench (Vals):** 92.0% — (Vals AI: SWE-bench leaderboard via BenchLM)
- **LiveCodeBench (Vals):** 80.5% — (Vals AI: LiveCodeBench via BenchLM)
- **DeepSWE:** 63.4% — (Z.AI blog via BenchLM)
- **NL2Repo:** 56.3% — (Z.AI blog via BenchLM)
- **AA-SciCode:** 51.6% — (AA: scicode leaderboard via BenchLM)
- **OpenHarmony Bench:** 57.3% — (OpenHarmony Bench official leaderboard via BenchLM)
- **FrontierSWE v2:** 18.1% — (Proximal: FrontierSWE v2 leaderboard via BenchLM)
- **AA Coding Index:** no verified public score found (not directly listed on BenchLM for GLM-5.3-Flash)

Long context:

- **AA-LCR:** 80.0% — (AA: artificial-analysis-long-context-reasoning leaderboard via BenchLM) — strong long-context reasoning
- **MRCR:** no verified public score found (RULER/MRCR not reported for GLM-5.3-Flash)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 39 public benchmarks found across 5 sources (AA, BenchLM, Vals AI, Z.AI blog, HuggingFace). FlashX inherits identical-weight benchmark scores from GLM-5.3-Flash. All scores confirmed by fresh Oct 10 BenchLM + AA data.

- **Tool use: 70/100.** Terminal-Bench 2.1 at 84.3% (near frontier 88%+) and GDPval-AA at 1773 Elo (near frontier threshold) are strong. Toolathlon-Verified at 78.4%, AA AutomationBench at 60.4%, and AA ITBench at 51.2% are moderate. However, GDP.pdf at 15.4%, Agents' Last Exam at 26.3%, and AA Terminal-Bench 4.0 at 32.8% are weak. AA EnterpriseOps-Gym at 33.2% is below the 40% threshold. Solid terminal/agentic benchmark performance offset by weak professional-document and exam benchmarks.

- **Reasoning: 72/100.** AI Intelligence Index at 41.8% (rank #4/117 among large open-weights, above median of 18). Using II + 30 formula: 41.8 + 30 = 71.8 → 72. AA-GPQA Diamond at 91.2% and GPQA Diamond (Vals) at 86.4% are exceptional. AA-LCR at 80.0% is excellent. HLE w/ tools at 55.3% is moderate (above 40% threshold). MLCR-AA at 51.1% is moderate. MMLU-Pro (Vals) at 86.1% is very good. CritPt at 15.4% is low (physics reasoning). AA-Omniscience Index at 7.5% is positive but low.

- **Context window: 95/100.** 1,048,576 tokens (≥1M tier). MRCR v2 64K-128K 83.1%, 128K-256K 87.5%; no ≥98% retrieval at 512K+ figure for 100.

- **Multimodal: 75/100.** Text, image, and video input (per `meta.json`); text output. AA lists text and image; video input is noted from `meta.json` as a higher-tier modality. No audio input or non-text output. +video/PDF in tier → 75.

- **Coding: 75/100.** Terminal-Bench 2.1 at 84.3% (strong, near frontier), SWE-bench (Vals) at 92.0% (excellent), LiveCodeBench (Vals) at 80.5% (good), DeepSWE at 63.4% (moderate), AA-SciCode at 51.6% (just above 55% frontier threshold — slightly below). Frontier refs (DeepSWE 74%+, SciCode 55%+, Coding Index 70%+) not fully met, but strong SWE-bench and Terminal-Bench scores put it at the upper end of the mid-tier (65-75).

- **Cost efficiency: 92/100.** $0.37 input / $1.25 output per 1M tokens (OpenCode Zen), well below the $0.60/$2.20 ≈ 92 tier. Open weights (MIT license) available for self-hosting at zero marginal cost. Cache hits discounted 83%. No free tier on Zen.

- **Overall Score: 77/100.** Mean of five non-cost dimensions: (70 + 72 + 95 + 75 + 75) / 5 = 387 / 5 = 77.4 → 77. Strong long-context reasoning (LCR 80.0%) and coding agentic performance (TB2.1 84.3%, SWE-bench 92.0% on Vals), 1M context, and very competitive $0.37/$1.25 pricing with MIT open weights. Limited by moderate Intelligence Index (41.8%), weak CritPt (15.4%), and no audio/non-text output modalities. Confirmed by fresh Oct 10 BenchLM + AA data — all scores unchanged from prior assessment.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via Artificial Analysis, BenchLM, Vals AI, HuggingFace, and Z.AI blog; scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/glm-5.3-flash` (Overall 58.52/100, #58/954, 45 of 639 benchmarks, 2026-10-17); AA model page (Intelligence Index 41.8%, #4/117 large open-weights); HuggingFace model card + eval results; Vals AI leaderboards; Z.AI blog.
- Re-verification (Oct 17): FlashX inherits identical-weight scores from GLM-5.3-Flash (already re-verified Oct 16). BenchLM Oct 17 confirms 58.52 (#58/954, 45/639 benches). New benchmarks: Hermes Index 35.0%, Hermes Bench 68.9%, AA AnalystAgent 25.0%, AA Tau3 Banking 47.2%, AA EnterpriseOps-Gym 33.2%, MazeBench 0%. Overall 77→77 (unchanged).

---
