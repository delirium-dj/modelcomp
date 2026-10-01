# Grok 4.3 — findings by Laguna S 2.1

- Source: SpaceXAI/xAI (`https://x.ai/news/grok-4-7`), Artificial Analysis (`https://artificialanalysis.ai/models/grok-4-3`), BenchLM (`https://benchlm.ai/models/grok-4-3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (High)
- **Short description:** SpaceXAI's reasoning model, part of the Grok 4 family. Released April 30, 2026. The AA model page shows it as deprecated (superseded by Grok 4.6), but individual benchmarks from BenchLM and the Grok 4.7 article provide verified data. Scores 25 on the Intelligence Index; very competitively priced at $1.25/$2.50 per 1M tokens.
  > Note: the repo `meta.json` lists 128K context and text-only modality for the Zen variant; external sources (AA, BenchLM) show 1M context and text+image input for the full model. This file documents the full model per verified external sources.
- **Provider / access:**
  - xAI API: `grok-4-3` (high effort) via OpenAI-compatible API at `https://api.x.ai/v1`
  - OpenCode Zen: `opencode/grok-4.3` (no Free ID per `meta.json`)
- **Release / knowledge:** April 30, 2026; knowledge cutoff not published
- **IDs:** `opencode/grok-4.3` (Zen), `grok-4-3` (xAI API); noFreeId per `meta.json`
- **Context window:** 1M total (per AA model page and BenchLM; `meta.json` lists 128K for Zen variant)
- **Modalities:** Text and image input, text output; reasoning yes (high effort); tool calls yes
- **Pricing (as of 2026-04-30):** $1.25 input / $2.50 output per 1M tokens; cache hits discounted 75% ($0.31/M); cost per Intelligence Index task: $0.21 (per AA model page)
- **Architecture:** Proprietary dense transformer; parameter count not disclosed

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/grok-4-3`), BenchLM (`https://benchlm.ai/models/grok-4-3`), Qwen3.6-Plus comparison table (referenced via BenchLM), Vals AI leaderboards.

Agent / tool use:

- τ²-bench: **97.7%** — (Artificial Analysis model benchmarks via BenchLM)
- GDPval-AA: **1018 Elo** — (Artificial Analysis model benchmarks via BenchLM)
- Terminal-Bench 2.1 (Vals): **41.9%** — (Vals AI leaderboard via BenchLM)
- AA-Agentic Index: **17.2%** — (AA model benchmarks via BenchLM)
- IFEval: **81.3%** — (AA model benchmarks via BenchLM)
- Terminal-Bench 2.0: **no verified public score found** — (not listed on BenchLM for Grok 4.3)
- OSWorld-Verified: **no verified public score found** — (not listed on BenchLM for Grok 4.3)
- Claw-Eval: **no verified public score found** — (not listed on BenchLM for Grok 4.3)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** — (AA model benchmarks via BenchLM); AA-GPQA Diamond: **90.1%** — (AA model benchmarks)
- GPQA Diamond (Vals): **91.4%** — (Vals AI leaderboard)
- HLE: **35%** — (AA model benchmarks via BenchLM); AA-HLE: **37.2%** — (AA model benchmarks)
- MMLU-Pro (Vals): **85.8%** — (Vals AI leaderboard)
- Artificial Analysis Intelligence Index: **25** — (AA model page, estimated)
- AA-Omniscience Index: **18.0%** — (AA model benchmarks via BenchLM)
- AA-Omniscience Accuracy: **34.6%** — (AA model benchmarks via BenchLM)
- AA-Omniscience Hallucination Rate: **25.0%** — (AA model benchmarks via BenchLM)
- AA-LCR: **64.3%** — (AA model benchmarks via BenchLM)
- CritPt: **8.0%** — (AA critpt leaderboard via BenchLM; very low physics reasoning)
- MLCR-AA: **no verified public score found** — (not listed for Grok 4.3)

Coding:

- SWE-bench (Vals): **71.4%** — (Vals AI leaderboard)
- LiveCodeBench (Vals): **84.5%** — (Vals AI leaderboard)
- SWE-bench Verified: **no verified public score found** — (not listed for Grok 4.3)
- AA-SciCode: **48.3%** — (AA scicode leaderboard via BenchLM)
- AA-Coding Index: **42.3%** — (AA model benchmarks via BenchLM)
- DeepSWE: **no verified public score found** — (not listed for Grok 4.3 non-reasoning variant)
- Terminal-Bench 2.0: **no verified public score found** — (not listed on BenchLM for Grok 4.3)

Multimodal:
- Supports text and image input (per AA model page and Grok family lineage)
- MMMU-Pro: **78.1%** — (Qwen3.6-Plus multimodal comparison via BenchLM)
- AA-MMMU-Pro: **71.2%** — (AA mmmu-pro leaderboard via BenchLM)
- Design Arena Website: **1204** — (OpenRouter benchmarks via BenchLM)

Long context:

- 1M context window per AA model page and BenchLM; no MRCR / RULER / GraphWalks figure found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 65/100.** τ²-bench at 97.7% is exceptional from AA model benchmarks, but τ²-bench is distinct from the methodology's Tau3-Banking. GDPval-AA at 1018 Elo is mid-to-upper range (frontier ~1750+). Terminal-Bench 2.1 (Vals) at 41.9% is below mid-tier; no OSWorld, Claw-Eval, or GDPval Elo breakdown found. Capped by below-mid TB2.1 score and absent standard tool-use benchmarks.

- **Reasoning: 65/100.** GPQA Diamond at 90.1% is at the frontier threshold (90%+); GPQA Diamond (Vals) at 91.4% is frontier-level. HLE at 35% and AA-HLE at 37.2% are near the 40% frontier threshold. AA-LCR at 64.3% is above the 40% threshold. However, Intelligence Index estimated at only 25, CritPt at 8.0% is very low, and AA-MMLU-Pro (vals) at 85.8% shows strength but overall composite is weak. Capped by low Intelligence Index and poor CritPt.

- **Context window: 95/100.** 1M token context window per AA model page and BenchLM — meets ≥1M tier. Scores 95 rather than 100 since no verified retrieval-at-512K+ percentage was found. Note: `meta.json` lists 128K for the Zen variant, but external sources confirm 1M for the full model.

- **Multimodal: 65/100.** Text and image input with text output per AA model page — scores in the +image input range (60–70) per methodology. AA-MMMU-Pro at 71.2% supports multimodal capability.

- **Coding: 73/100.** LiveCodeBench (Vals) at 84.5% is near-frontier (80%+); SWE-bench (Vals) at 71.4% is solid. AA-SciCode at 48.3% is below the 55% frontier threshold; AA-Coding Index at 42.3% is below the 70% frontier threshold. DeepSWE data not found for this variant. Capped by weak SciCode/Coding Index and absent DeepSWE/TB2.0.

- **Cost efficiency: 89/100.** $1.25 input / $2.50 output per 1M tokens is competitive (methodology: ~$1.25/$4.25 ≈ 88, ~$0.60/$2.20 ≈ 92). Input at the ~$1.25 tier (~88); output at $2.50 between $2.20 (92) and $4.25 (88), closer to $2.20 (~90). Cost per Intelligence Index task at $0.21 is very efficient. No Free ID on Zen per `meta.json`.

- **Overall Score: 73/100.** Mean of five non-cost dimensions: (65 + 65 + 95 + 65 + 73) / 5 = 363 / 5 = 72.6 → 73. Strong coding (LiveCode 84.5%, SWE-bench 71.4%) and GPQA at 90.1%, but capped by low Intelligence Index (25), weak CritPt (8.0%), and absent DeepSWE/SciCode frontier performance. Deprecated model — consider Grok 4.6 or 4.7 instead. Good value at $1.25/$2.50 for coding tasks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis model page, BenchLM, Vals AI leaderboards, and Qwen3.6-Plus comparison table; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Grok_4_3_Article.md`, using the same headings.

---
