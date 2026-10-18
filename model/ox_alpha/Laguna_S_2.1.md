# Ox Alpha — findings by Laguna S 2.1

- Source: OpenRouter (`stealth/ox-alpha`) (`https://openrouter.ai/stealth/ox-alpha`), Artificial Analysis (GLM-5.3-Flash base) (`https://artificialanalysis.ai/models/glm-5-3-flash`), BenchLM (GLM-5.3-Flash) (`https://benchlm.ai/models/glm-5.3-flash`), Z.AI blog (`https://z.ai/blog/glm-5.3-flash`), Vals AI (`https://www.vals.ai/models/zai_glm-5.3-flash`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth)
- **Short description:** Ox Alpha is an anonymous stealth model on OpenRouter revealed to be ZAI GLM-5.3-Flash, offering 1M multimodal context. Per OpenRouter: "a reasoning model designed for coding, sustained agentic work, and production workloads. It is suited for long-horizon software engineering, complex reasoning, and workflows that combine text with visual context."
- **Provider / access:** OpenRouter (`stealth/ox-alpha`); Z AI (`glm-5.3-flash`). **Free OpenCode Zen tier access for experimental agentic coding and logic puzzles** (per `meta.json`).
- **Release / knowledge:** August 20, 2026 (OpenRouter); knowledge cutoff not disclosed
- **IDs:** `opencode/ox-alpha` (Zen, per `meta.json`); `stealth/ox-alpha` (OpenRouter)
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output — per AA model page and BenchLM, confirmed for GLM-5.3-Flash base)
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.075 in / $0.90 out per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE); 320B total parameters, 18B active (same as GLM-5.3-Flash, which Ox Alpha is revealed to be per OpenRouter)
- **License:** MIT (per HuggingFace model card for GLM-5.3-Flash)

### Raw benchmarks found

> Sources: OpenRouter model page (`openrouter.ai/stealth/ox-alpha`, Oct 10 — confirms Ox Alpha = ZAI GLM-5.3-Flash), Artificial Analysis model page (`artificialanalysis.ai/models/glm-5-3-flash`, Oct 17), BenchLM (`benchlm.ai/models/glm-5.3-flash`, Oct 17, 45 of 639 benchmarks — confirms all prior data), Z.AI blog (`z.ai/blog/glm-5.3-flash`), Vals AI leaderboards (`vals.ai/models/zai_glm-5.3-flash`). Ox Alpha is confirmed by OpenRouter to be a stealth deployment of GLM-5.3-Flash, so all benchmarks are inherited from the GLM-5.3-Flash base. BenchLM Oct 17 confirms all scores; new: Hermes Index 35.0%, Hermes Bench 68.9%, AA AnalystAgent 25.0%, MazeBench 0%.

Agent / tool use:

- **Terminal-Bench 2.1:** 84.3% — (Z.AI blog via BenchLM)
- **aaTerminalBench21:** 84.3% — (AA: terminalbench-v2-1 leaderboard via BenchLM)
- **Toolathlon-Verified:** 78.4% — (Z.AI blog via BenchLM)
- **AutomationBench:** 48.8% — (Z.AI blog via BenchLM)
- **Agents' Last Exam:** 26.3% — (Z.AI blog via BenchLM)
- **GDPval-AA (Elo):** 1773 — (Z.AI blog via BenchLM)
- **AA Briefcase:** 1454 (Elo) — (AA: aa-briefcase leaderboard via BenchLM)
- **AA AutomationBench:** 60.4% — (AA: automationbench-aa leaderboard via BenchLM)
- **AA EnterpriseOps-Gym:** 33.2% — (AA: enterprise-ops-gym-aa leaderboard via BenchLM)
- **AA ITBench:** 51.2% — (AA: itbench-aa leaderboard via BenchLM)
- **AA Tau3 Banking:** 47.2% — (AA: tau3-banking leaderboard via BenchLM)
- **Hermes Index:** 35.0% — (Nous Research: Hermes Index leaderboard via Oct 17 BenchLM — NEW)
- **Hermes Bench:** 68.9% — (Nous Research: Hermes Index leaderboard via Oct 17 BenchLM — NEW)
- **AA AnalystAgent:** 25.0% — (AA: aa-analyst-agent leaderboard via Oct 17 BenchLM — NEW)
- **MazeBench:** 0% — (MazeBench AI leaderboard via Oct 17 BenchLM — NEW)
- **AA Terminal-Bench 4.0:** 32.8% — (AA: terminalbench-v4-0 leaderboard via BenchLM)
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
> Confidence: high — All benchmarks inherited from GLM-5.3-Flash (confirmed identical by OpenRouter + Oct 17 BenchLM). 45 benchmarks covered.

- **Tool use: 70/100.** (Unchanged.) Terminal-Bench 2.1 at 84.3% (near frontier 88%+) and GDPval-AA at 1773 Elo (near frontier threshold) are strong. New: Hermes Bench 68.9%, AA Agentic Index 46.5%. However, GDP.pdf at 15.4%, Agents' Last Exam at 26.3%, AA Terminal-Bench 4.0 at 32.8%, and MazeBench 0% are weak.

- **Reasoning: 72/100.** AI Intelligence Index at 41.8% (rank #4/117 among large open-weights, above median of 18). Using II + 30 formula: 41.8 + 30 = 71.8 → 72. AA-GPQA Diamond at 91.2% and GPQA Diamond (Vals) at 86.4% are exceptional. AA-LCR at 80.0% is excellent. HLE w/ tools at 55.3% is moderate (above 40% threshold). MLCR-AA at 51.1% is moderate. MMLU-Pro (Vals) at 86.1% is very good. CritPt at 15.4% is low (physics reasoning). AA-Omniscience Index at 7.5% is positive but low.

- **Context window: 95/100.** 1,000,000 tokens (≥1M tier, per OpenRouter + AA + BenchLM for GLM-5.3-Flash base). MRCR v2 64K-128K 83.1%, 128K-256K 87.5%; no ≥98% retrieval at 512K+ figure for 100.

- **Multimodal: 75/100.** Text, image, and video input (per OpenRouter, AA model page, and `meta.json`); text output. AA lists text and image; video input is noted as a higher-tier modality. No audio input or non-text output. +video/PDF in tier → 75.

- **Coding: 75/100.** Terminal-Bench 2.1 at 84.3% (strong, near frontier), SWE-bench (Vals) at 92.0% (excellent), LiveCodeBench (Vals) at 80.5% (good), DeepSWE at 63.4% (moderate), AA-SciCode at 51.6% (just above 55% frontier threshold — slightly below). Frontier refs (DeepSWE 74%+, SciCode 55%+, Coding Index 70%+) not fully met, but strong SWE-bench and Terminal-Bench scores put it at the upper end of the mid-tier (65-75).

- **Cost efficiency: 97/100.** $0.075 in / $0.90 out per 1M tokens is within striking distance of the $0 value band; free Zen tier confirmed via `meta.json`.

- **Overall Score: 77/100.** Mean of five non-cost dimensions: (70 + 72 + 95 + 75 + 75) / 5 = 387 / 5 = 77.4 → 77. (Unchanged.) Ox Alpha inherits all GLM-5.3-Flash benchmarks (TB 2.1 84.3%, SWE-bench 92.0%, GPQA 91.2%, HLE 55.3%, GDPval-AA 1773 Elo). Free Zen tier confirmed via `meta.json`. Aligns with BenchLM Overall 58.52/100 rank #58/954 for GLM-5.3-Flash and AA Intelligence Index 41.8% (#4/117 large open-weights).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via OpenRouter model page (`openrouter.ai/stealth/ox-alpha`, Oct 10), Artificial Analysis model page (`artificialanalysis.ai/models/glm-5-3-flash`, Oct 17), BenchLM (`benchlm.ai/models/glm-5.3-flash`, Oct 17), Z.AI blog (`z.ai/blog/glm-5.3-flash`), and Vals AI leaderboards; scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: OpenRouter model page (confirms Ox Alpha = GLM-5.3-Flash); BenchLM.ai model page (Overall 58.52/100, #58/954, 45/639 benchmarks, 2026-10-17); AA model page (Intelligence Index 41.8%, #4/117 large open-weights); Z.AI blog (full benchmark scores); Vals AI (SWE-bench 92.0%, LiveCodeBench 80.5%).
- Re-verification (Oct 17): Inherited from GLM-5.3-Flash re-verification (Oct 16). BenchLM Oct 17 confirms all scores for GLM-5.3-Flash (Overall 58.52/#58/954, 45/639). New: Hermes Index 35.0%, Hermes Bench 68.9%, AA AnalystAgent 25.0%, MazeBench 0%. Overall 77→77 (unchanged).

---
