# GLM-5.3-FlashX — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/glm-5-3-flash`), BenchLM (`https://benchlm.ai/models/glm-5.3-flash`), HuggingFace (`https://huggingface.co/zai-org/GLM-5.3-Flash`), Vals AI (`https://www.vals.ai/models/zai_glm-5.3-flash`), Z.AI blog (`https://z.ai/blog/glm-5.3-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.AI's high-speed serving variant of GLM-5.3-Flash with identical weights, tuned for ~200 tok/s low-latency multimodal agentic coding. Same 320B total / 18B active MoE architecture, 1M context, text+image+video input, text output.
- **Provider / access:** Z.AI API; OpenCode Zen: `opencode/glm-5.3-flashx` at $0.37/$1.25 per 1M tokens; 27 API providers
- **Release / knowledge:** Released August 26, 2026 (same as GLM-5.3-Flash); knowledge cutoff not published
- **IDs:** `opencode/glm-5.3-flashx` (Zen, per `meta.json`); `zai-org/GLM-5.3-Flash` (HuggingFace, identical weights)
- **Context window:** 1,048,576 (1M) total; 128,000 output (per `meta.json` and AA model page — both agree at 1M)
- **Modalities:** Text, image, video input; text output; reasoning yes (chain-of-thought)
- **Pricing (as of 2026-10-08):** $0.37 input / $1.25 output per 1M tokens (OpenCode Zen `opencode/glm-5.3-flashx`, per `meta.json`); cache hits discounted 83% (AA model page)
- **Architecture:** Mixture-of-Experts (MoE); 320B total parameters, 18B active
- **License:** MIT (per HuggingFace model card)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** ~200 tokens/s output (FlashX high-speed serving variant; AA measures GLM-5.3-Flash base at 51.4 t/s)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/glm-5-3-flash`), BenchLM (`https://benchlm.ai/models/glm-5.3-flash`), HuggingFace model card + eval results (`https://huggingface.co/zai-org/GLM-5.3-Flash`), Vals AI leaderboards (`https://www.vals.ai/models/zai_glm-5.3-flash`), Z.AI blog (`https://z.ai/blog/glm-5.3-flash`). FlashX uses identical weights to GLM-5.3-Flash per `meta.json`, so all benchmarks for GLM-5.3-Flash are inherited. BenchLM covers 38 of 623 benchmarks.

Agent / tool use:

- **Terminal-Bench 2.1:** **84.3%** — (Z.AI blog via BenchLM; also aaTerminalBench21 at 84.3% via AA)
- **Toolathlon-Verified:** **78.4%** — (Z.AI blog via BenchLM)
- **AutomationBench:** **48.8%** — (Z.AI blog via BenchLM)
- **Agents' Last Exam:** **26.3%** — (Z.AI blog via BenchLM)
- **GDPval-AA:** **1773** (Elo) — (Z.AI blog via BenchLM)
- **AA Briefcase:** **1454** (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** **60.4%** — (AA: automationbench-aa via BenchLM)
- **AA EnterpriseOps-Gym:** **33.2%** — (AA: enterprise-ops-gym-aa via BenchLM)
- **AA ITBench:** **51.2%** — (AA: itbench-aa via BenchLM)
- **AA Tau3 Banking:** **47.2%** — (AA: tau3-banking via BenchLM)
- **AA Terminal-Bench 4.0:** **32.8%** — (AA: terminalbench-v4-0 via BenchLM)
- **GDP.pdf:** **15.4%** — (AA: gdp-pdf via BenchLM)
- **τ²-bench:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond (Vals):** **86.4%** — (Vals AI: GPQA Diamond leaderboard via BenchLM)
- **MMLU-Pro (Vals):** **86.1%** — (Vals AI: MMLU Pro leaderboard via BenchLM)
- **AA-GPQA Diamond:** **91.2%** — (AA: gpqa-diamond via BenchLM)
- **AA-HLE:** **39.9%** — (AA: humanitys-last-exam via BenchLM)
- **HLE w/ tools:** **55.3%** — (Z.AI blog via BenchLM)
- **AA-LCR:** **80.0%** — (AA: artificial-analysis-long-context-reasoning via BenchLM)
- **MLCR-AA:** **51.1%** — (AA: mlcr-aa via BenchLM)
- **CritPt:** **15.4%** — (AA: critpt via BenchLM)
- **AA-Omniscience Index:** **7.5%** — (AA: omniscience via BenchLM)
- **Artificial Analysis Intelligence Index:** **42** — (AA model page; rank #4/117 among large open weights; median: 18)

Coding:

- **SWE-bench (Vals):** **92.0%** — (Vals AI: SWE-bench leaderboard via BenchLM)
- **LiveCodeBench (Vals):** **80.5%** — (Vals AI: LiveCodeBench via BenchLM)
- **DeepSWE:** **63.4%** — (Z.AI blog via BenchLM)
- **NL2Repo:** **56.3%** — (Z.AI blog via BenchLM)
- **AA-SciCode:** **51.6%** — (AA: scicode via BenchLM)
- **OpenHarmony Bench:** **57.3%** — (OpenHarmony Bench official leaderboard via BenchLM)
- **FrontierSWE v2:** **18.1%** — (Proximal: FrontierSWE v2 leaderboard via BenchLM)
- **AA Coding Index:** no verified public score found (not directly listed on BenchLM for GLM-5.3-Flash)

Long context:

- **AA-LCR:** **80.0%** — (AA: artificial-analysis-long-context-reasoning via BenchLM) — strong long-context reasoning
- **MRCR:** no verified public score found (RULER/MRCR not reported for GLM-5.3-Flash)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 38 public benchmarks found across 4 sources (AA, BenchLM, Vals AI, Z.AI blog). FlashX inherits identical-weight benchmark scores from GLM-5.3-Flash.

- **Tool use: 70/100.** Terminal-Bench 2.1 at 84.3% (near frontier 88%+) and GDPval-AA at 1773 Elo (near frontier threshold) are strong. Toolathlon-Verified at 78.4%, AA AutomationBench at 60.4%, and AA ITBench at 51.2% are moderate. However, GDP.pdf at 15.4%, Agents' Last Exam at 26.3%, and AA Terminal-Bench 4.0 at 32.8% are weak. AA EnterpriseOps-Gym at 33.2% is below the 40% threshold. Solid terminal/agentic benchmark performance offset by weak professional-document and exam benchmarks.

- **Reasoning: 72/100.** AA Intelligence Index at 42 (rank #4/117 among large open-weights, above median of 18). Using II + 30 formula: 42 + 30 = 72. AA-GPQA Diamond at 91.2% and GPQA Diamond (Vals) at 86.4% are exceptional. AA-LCR at 80.0% is excellent. HLE w/ tools at 55.3% is moderate (above 40% threshold). MLCR-AA at 51.1% is moderate. MMLU-Pro (Vals) at 86.1% is very good. CritPt at 15.4% is low (physics reasoning). AA-Omniscience Index at 7.5% is positive but low.

- **Context window: 95/100.** 1M tokens per AA model page, BenchLM, and `meta.json` (all agree). ≥1M tier → 95. No verified ≥98% retrieval at 512K+ to reach 100. 128K output (per `meta.json`) is strong.

- **Multimodal: 75/100.** Text, image, and video input (per `meta.json`); text output. AA lists text and image; video input is noted from `meta.json` as a higher-tier modality. No audio input or non-text output. +video/PDF in tier → 75.

- **Coding: 75/100.** Terminal-Bench 2.1 at 84.3% (strong, near frontier), SWE-bench (Vals) at 92.0% (excellent), LiveCodeBench (Vals) at 80.5% (good), DeepSWE at 63.4% (moderate), AA-SciCode at 51.6% (just above 55% frontier threshold — slightly below). Frontier refs (DeepSWE 74%+, SciCode 55%+, Coding Index 70%+) not fully met, but strong SWE-bench and Terminal-Bench scores put it at the upper end of the mid-tier (65-75).

- **Cost efficiency: 92/100.** $0.37 input / $1.25 output per 1M tokens (OpenCode Zen), well below the $0.60/$2.20 ≈ 92 tier. Open weights (MIT license) available for self-hosting at zero marginal cost. Cache hits discounted 83%. No free tier on Zen.

- **Overall Score: 77/100.** Mean of five non-cost dimensions: (70 + 72 + 95 + 75 + 75) / 5 = 387 / 5 = 77.4 → 77. Strong long-context reasoning (LCR 80.0%) and coding agentic performance (TB2.1 84.3%, SWE-bench 92.0% on Vals), 1M context, and very competitive $0.37/$1.25 pricing with MIT open weights. Limited by moderate Intelligence Index (42), weak CritPt (15.4%), and no audio/non-text output modalities.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, Vals AI, HuggingFace, and Z.AI blog; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash_Tech_Report.md`, using the same headings.

---
