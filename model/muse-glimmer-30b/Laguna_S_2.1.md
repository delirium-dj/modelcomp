# Muse Glimmer 30B — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/muse-glimmer`), BenchLM (`https://benchlm.ai/models/muse-glimmer-30b`), Meta AI Research launch post (`https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B (High)
- **Short description:** Meta Superintelligence Labs' August 2026 Apache-2.0 30B dense multimodal agent model distilled from Muse Spark, built for always-on local agent workflows on a single consumer GPU.
- **Provider / access:** Meta AI (open weights); served via 4 API providers including OpenRouter ($0.30 in / $1.10 out per 1M) and Together/Vercel/NVIDIA
- **Release / knowledge:** Released August 10, 2026; knowledge cutoff January 4, 2026
- **IDs:** `meta/muse-glimmer-30b` (per `meta.json`); `muse-glimmer-30b` (Hugging Face: `meta-models/Muse-Glimmer-30B`)
- **Context window:** 131K total (per BenchLM and HF model card). Meta.json says 131,072 (128K default per Meta docs) — all sources agree (~130K).
- **Modalities:** Text and image input, text output (per AA model page, HF model card, and BenchLM). Note: `meta.json` lists "Text in/out" — discrepancy; public sources confirm image input support.
- **Pricing (as of 2026-10-01):** Open weights (Apache 2.0): self-host free. OpenRouter $0.30 input / $1.10 output per 1M; Together/Vercel $0.35 / $1.50; NVIDIA NIM $0. No Zen Free ID found.
- **Architecture:** Dense transformer; 30B total parameters
- **License:** Apache 2.0 (commercial use allowed)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/meta-models/Muse-Glimmer-30B)
- **Reasoning:** Yes (chain-of-thought)
- **Speed:** 140.8 tokens/s output (median across providers, per AA model page)

### Raw benchmarks found

> Sources: Meta AI Research launch post (`https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model`), BenchLM (`https://benchlm.ai/models/muse-glimmer-30b`), AA model benchmarks (`https://artificialanalysis.ai/models/muse-glimmer`). BenchLM covers 36 of 618 benchmarks. Note: AA model page slug is `muse-glimmer` (not `muse-glimmer-30b`).

Agent / tool use:

- **MCP Atlas:** **75.5%** — (Meta AI Research: Muse Glimmer launch post)
- **DeepSearchQA:** **74.6%** — (Meta AI Research: Muse Glimmer launch post)
- **OSWorld-Verified:** **65.9%** — (Meta AI Research: Muse Glimmer launch post)
- **skillsBench:** **44.3%** — (Meta AI Research: Muse Glimmer launch post)
- **GDPval-AA (normalized):** **13.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA Agentic Index:** **10.5%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA Terminal-Bench 2.1:** **51.7%** — (Meta AI Research: Muse Glimmer launch post)
- **AA Terminal-Bench 4.0:** **0.5%** — (Artificial Analysis: terminalbench-v4-0 leaderboard via BenchLM)
- **GDP.pdf:** **10.0%** — (Artificial Analysis: gdp-pdf leaderboard via BenchLM)
- **AA Briefcase:** **474** (Elo) — (Artificial Analysis: aa-briefcase leaderboard via BenchLM)
- **AA EnterpriseOps-Gym:** **34.7%** — (Artificial Analysis: enterprise-ops-gym-aa leaderboard via BenchLM)
- **AA Tau3 Banking:** **23.5%** — (Artificial Analysis: tau3-banking leaderboard via BenchLM)
- **τ²-bench:** no verified public score found
- **Terminal-Bench 2.1 (Vals):** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **17** — (AA model page, rank #14/142, above open-weight large-class median of 8)
- **BenchLM Intelligence Index:** **17.5%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **83.5%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **AA-HLE:** **22.0%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** **83.3%** — (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** **2.6%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **MLCR-AA:** **20.0%** — (Artificial Analysis: mlcr-aa leaderboard via BenchLM)
- **AA-Omniscience Index:** **-32.8%** — (Artificial Analysis: omniscience leaderboard via BenchLM; more incorrect than correct)
- **AA-Omniscience Accuracy:** **27.0%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** **81.9%** — (Artificial Analysis model benchmarks via BenchLM)

Coding:

- **SWE-bench Verified:** **76%** — (Meta AI Research: Muse Glimmer launch post)
- **SWE-bench Pro:** **51.2%** — (Meta AI Research: Muse Glimmer launch post)
- **Terminal-Bench 2.1:** **51.7%** — (Meta AI Research: Muse Glimmer launch post)
- **SciCode:** **43.6%** — (Meta AI Research: Muse Glimmer launch post)
- **AA-SciCode:** **44.9%** — (Artificial Analysis: scicode leaderboard via BenchLM)
- **AA Coding Index:** **49.0%** — (Artificial Analysis model benchmarks via BenchLM)
- **LiveCodeBench (Vals):** no verified public score found
- **DeepSWE:** no verified public score found

Multimodal:

- Supports text and image input; text output (per AA model page, HF model card, BenchLM)
- **MMMU-Pro:** **74%** — (Meta AI Research: Muse Glimmer launch post)
- **AA-MMMU-Pro:** **74.3%** — (Artificial Analysis: mmmu-pro leaderboard via BenchLM)
- **CharXiv:** **78.8%** — (Meta AI Research: Muse Glimmer launch post)
- **ScreenSpot Pro:** **75.4%** — (Meta AI Research: Muse Glimmer launch post)
- **OmniDocBench 1.5:** **75.8%** — (Meta AI Research: Muse Glimmer launch post)

Mathematics:

- **AIME26:** **94.7%** — (Meta AI Research: Muse Glimmer launch post)

Instruction following:

- **IFBench:** **77%** — (Meta AI Research: Muse Glimmer launch post)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
  > Confidence: high — 36 public benchmarks found across 3 sources (Meta launch post, BenchLM, AA model benchmarks).

- **Tool use: 45/100.** Mixed agentic performance: OSWorld-Verified at 65.9% (above 40% threshold) and MCP Atlas at 75.5% are decent. Terminal-Bench 2.1 at 51.7% is moderate. However, GDPval-AA at 13.7% (below 40% threshold), AA Terminal-Bench 4.0 at 0.5% (essentially zero), AA Agentic Index at 10.5% (very low), and GDP.pdf at 10.0% are all very poor. OSWorld-Verified barely above threshold, but the low AA Agentic Index and GDPval drag the score down significantly.

- **Reasoning: 48/100.** AA Intelligence Index at 17 (rank #14/142, above open-weight large-class median of 8). GPQA Diamond at 83.5% is very good. HLE at 22.0% is poor. LCR at 83.3% is excellent. CritPt at 2.6% is extremely low (physics reasoning failure). AA-Omniscience Index at -32.8% (worse than random — more incorrect than correct answers) is very concerning. II + 30 formula: 17.5 + 30 = 47.5 → 48.

- **Context window: 62/100.** 131K tokens (per BenchLM and Meta docs; meta.json says 131,072). At the methodology's 100K+ tier (60–68, 131K ≈ 62). Slightly above the 128K class.

- **Multimodal: 65/100.** Text and image input, text output (per AA model page). AA-MMMU-Pro at 74.3% and MMMU-Pro at 74% are the primary multimodal benchmarks. CharXiv, ScreenSpot Pro, and OmniDocBench all above 75%. Text+image input scores in the +image tier (60–70) per methodology.

- **Coding: 60/100.** SWE-bench Verified at 76% is the strongest coding signal (above 70% threshold). However, SWE-bench Pro at 51.2% and Terminal-Bench 2.1 at 51.7% are moderate, while AA Terminal-Bench 4.0 at 0.5% and AA Coding Index at 49.0% are below average. Strong SWE-bench offset by weak other coding benchmarks.

- **Cost efficiency: 75/100.** $0.30 input / $1.10 output per 1M (OpenRouter, per meta.json and launch post). Also open weights (Apache 2.0) with self-host free option and NVIDIA NIM at $0. In the methodology's $0.15–0.50 / $0.50–1.50 tier (≈70–75). No Zen Free ID found, but open weights availability boosts cost efficiency.

- **Overall Score: 56/100.** Mean of five non-cost dimensions: (45 + 48 + 62 + 65 + 60) / 5 = 280 / 5 = 56. Strong GPQA (83.5%), SWE-bench Verified (76%), and AIME (94.7%) offset by very low Intelligence Index (17), poor HLE (22%), extremely low CritPt (2.6%), and near-zero Terminal-Bench 4.0 (0.5%). Open weights under Apache 2.0 license.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Meta AI Research launch post, BenchLM, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Meta_Launch_Post.md`, using the same headings.

---
