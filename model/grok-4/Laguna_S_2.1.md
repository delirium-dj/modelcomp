# Grok 4 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/grok-4`), BenchLM (`https://benchlm.ai/models/grok-4`), Epoch AI
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** SpaceXAI's July 2025 non-reasoning multimodal reasoning model (deprecated; recommends Grok 4.20 0309). 256K context, text+image input, text output.
- **Provider / access:** SpaceXAI API
- **Release / knowledge:** Released July 10, 2025; knowledge cutoff not published; marked deprecated by AA (recommends Grok 4.20 0309)
- **IDs:** `opencode/grok-4` (per `meta.json`); `grok-4` (AA slug); `grok-4` (BenchLM slug)
- **Context window:** 256k total (per AA model page FAQ); `meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output per 1M tokens (based on median across providers serving the model; blended $4.20/1M at 7:2:1 cache ratio)
- **Reasoning:** Yes (extended thinking / chain-of-thought) — AA model page states "This page shows the reasoning version of this model"
- **Speed:** N/A (per AA)

### Raw benchmarks found

> Sources: Artificial Analysis (`https://artificialanalysis.ai/models/grok-4`), BenchLM (`https://benchlm.ai/models/grok-4`), Epoch AI FrontierMath v2 leaderboard. BenchLM covers 15 of 618 benchmarks.

Agent / tool use:

- **tau2-bench:** **74.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **Gert Labs:** **42.34%** — (Gert Labs rankings via BenchLM)
- **GDPval-AA (normalized):** no verified public score found for this specific model

Coding:

- **React Native Evals:** **72.6%** — (React Native Evals leaderboard via BenchLM)

Multimodal & grounded:

- **AA-MMMU-Pro:** **68.8%** — (Artificial Analysis model benchmarks via BenchLM)

Reasoning:

- **AA-LCR:** **68.0%** — (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** **2.0%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **AA-GPQA Diamond:** **87.7%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **AA-HLE:** **26.7%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-Omniscience Index:** **2.1%** — (Artificial Analysis: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** **40.5%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** **64.5%** — (Artificial Analysis model benchmarks via BenchLM)

Instruction following:

- **AA-IFBench:** **53.7%** — (Artificial Analysis: aaifbench leaderboard via BenchLM)

Mathematics:

- **FrontierMath v2 (Tiers 1-3):** **19.66%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** **2.08%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM)

### AA Intelligence Index

- **Artificial Analysis Intelligence Index:** **22** (estimated, rank #141/224 among all models, #225/689 on AA's full model list). AA page notes: "Estimate (independent evaluation forthcoming)" — all individual AA benchmarks show "Not publicly available."

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 15 public benchmarks found across 3 sources (AA, BenchLM, Epoch AI).

- **Tool use: 59/100.** tau2-bench at 74.9% (AA, via BenchLM) is decent above the 40% threshold. Gert Labs at 42.34% (Gert Labs rankings) is just above the 40% benchmark threshold. React Native Evals at 72.6% is good for a coding eval. However, GDPval-AA has no verified score and AA agentic evaluations are "Not publicly available." Average agentic performance is moderate.

- **Reasoning: 58/100.** AA Intelligence Index estimated at 22 (rank #141/224), which is below average for a 224-model class. AA-LCR at 68.0% is moderate-to-good. GPQA Diamond at 87.7% is strong. However, HLE at 26.7%, CritPt at 2.0%, Omniscience Index at 2.1%, and Omniscience Accuracy at 40.5% are all weak-to-moderate. The low AA Intelligence Index suggests weaker overall reasoning performance relative to peers.

- **Context window: 75/100.** 256k tokens (per AA model page). In the 1M–260K tier → 75. Meta.json claims 128K (discrepancy noted); AA FAQ explicitly states 260k context window.

- **Multimodal: 55/100.** Supports text and image input, text output (per AA model page: "Supports: text and image"). This qualifies for the multimodal input dimension. MMMU-Pro at 68.8% (AA, via BenchLM) is a moderate multimodal reasoning result, justifying the mid-tier multimodal score.

- **Coding: 61/100.** React Native Evals at 72.6% (via BenchLM) is solid. Terminal-Bench 2.1 has no verified public score for this specific model. AA Coding Index not listed in BenchLM coverage for Grok 4 specifically. The single coding benchmark (React Native Evals 72.6%) is a positive signal but limited coverage.

- **Cost efficiency: 35/100.** $3.00 input / $15.00 output per 1M tokens — somewhat expensive (median $2.00/$10.00). Blended $4.20/1M. Placed in the $1–$3/$4–$15 tier ≈ 35.

- **Overall Score: 61.6/100.** Mean of five non-cost dimensions: (59 + 58 + 75 + 55 + 61) / 5 = 308 / 5 = 61.6 → 59. Grok 4 has moderate agentic and coding performance (tau2-bench 74.9%, React Native Evals 72.6%) but weaker reasoning (AA II estim. 22, GPQA 87.7% but HLE 26.7%, CritPt 2.0%) and is expensive on API pricing. The model is marked deprecated by AA in favor of Grok 4.20 0309.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Artificial Analysis and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `SpaceXAI_Grok_4_Tech_Report.md`, using the same headings.

---