# Grok 4.20 — findings by Laguna S 2.1

- Source: Meta AI (`https://ai.meta.com/blog/introducing-muse-spark-msl/`), Artificial Analysis (`https://artificialanalysis.ai/models/grok-4-20-beta`), BenchLM (`https://benchlm.ai/models/grok-4-20`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Reasoning)
- **Short description:** xAI's Grok 4.20 beta reasoning model. Features a 2M token context window (per BenchLM) — significantly larger than Grok 4 (256K). Benchmarked on MMLU-Pro, SWE-bench, LiveCodeBench, and multimodal evaluations. Supersedes Grok 4 (deprecated per AA model page). Meta.json lists 128K for the Zen variant.
  > Note: the repo `meta.json` lists 128K context and text-only modality; BenchLM shows 2M context and multimodal benchmark participation (MMMU-Pro, CharXiv, etc.). This file documents the full model per verified external sources.
- **Provider / access:**
  - xAI API: `grok-4.20` (reasoning) via OpenAI-compatible API at `https://api.x.ai/v1`
  - OpenCode Zen: `opencode/grok-4.20` (no Free ID per `meta.json`; standard pricing)
- **Release / knowledge:** March 9, 2026 (per Vals AI model reference `grok_grok-4.20-0309-reasoning`); knowledge cutoff not published
- **IDs:** `opencode/grok-4.20` (Zen), `grok-4.20-0309-reasoning` (Vals AI); noFreeId per `meta.json`
- **Context window:** 2M total (per BenchLM); `meta.json` lists 128K for Zen variant
- **Modalities:** Text and image input, text output; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-01):** Standard pricing per `meta.json`; no specific numbers verified in external sources
- **Architecture:** Proprietary dense transformer; parameter count not disclosed

### Raw benchmarks found

> Sources: Meta AI Muse Spark comparison chart (referenced via BenchLM), Vals AI leaderboards, ARC Prize, OpenRouter benchmarks.

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** — (Meta AI Muse Spark comparison chart via BenchLM)
- DeepSearchQA: **62.8%** — (Meta AI Muse Spark comparison chart via BenchLM)
- Terminal-Bench 2.1 (Vals): **44.2%** — (Vals AI leaderboard)
- GDPval-AA: **no verified public score found** — (not listed on BenchLM for Grok 4.20)
- OSWorld-Verified: **no verified public score found** — (not listed)
- Claw-Eval: **no verified public score found** — (not listed)

Reasoning / knowledge:

- GPQA-D: **88.5%** — (Meta AI Muse Spark comparison chart via BenchLM)
- GPQA Diamond (Vals): **88.6%** — (Vals AI leaderboard)
- MMLU-Pro (Vals): **86.3%** — (Vals AI leaderboard)
- HLE w/o tools: **31.6%** — (Meta AI Muse Spark comparison chart via BenchLM)
- AA Intelligence Index: **no verified public score found** — (BenchLM shows Overall 59.18 but individual components "Not publicly available" on AA model page; AA page for grok-4.20 returns 404)
- LCR / MLCR: **no verified public score found** — (not listed on BenchLM for Grok 4.20)
- CritPt: **no verified public score found** — (not listed)

Coding:

- SWE-bench Verified: **76.7%** — (Meta AI Muse Spark comparison chart via BenchLM)
- LiveCodeBench Pro: **74.2%** — (Meta AI Muse Spark comparison chart via BenchLM)
- SWE-bench Pro: **51.8%** — (Meta AI Muse Spark comparison chart via BenchLM)
- LiveCodeBench (Vals): **84.3%** — (Vals AI leaderboard)
- SWE-bench (Vals): **72.2%** — (Vals AI leaderboard)
- Vibe Code Bench: **4.06%** — (Vals AI Vibe Code Bench v1.1)
- AA-SciCode: **no verified public score found** — (not listed)
- AA-Coding Index: **no verified public score found** — (not listed)

Multimodal:

- Supports text and image input (per Grok family lineage and multimodal benchmark participation)
- MMMU-Pro: **75.2%** — (Meta AI Muse Spark comparison chart via BenchLM)
- CharXiv: **60.9%** — (Meta AI Muse Spark comparison chart via BenchLM)
- ERQA: **54.1%** — (Meta AI Muse Spark comparison chart via BenchLM)
- SimpleVQA: **57.4%** — (Meta AI Muse Spark comparison chart via BenchLM)
- MedXpertQA (MM): **65.8%** — (Meta AI Muse Spark comparison chart via BenchLM)
- MedXpertQA (Text): **50.2%** — (Meta AI Muse Spark comparison chart via BenchLM)
- Design Arena Website: **1237** — (OpenRouter benchmarks via BenchLM)

Reasoning benchmarks:

- ARC-AGI-2: **53.3%** — (Meta AI Muse Spark comparison chart via BenchLM)
- ARC-AGI-3: **0.1%** — (ARC Prize official leaderboard)

Long context:

- 2M context window per BenchLM; no MRCR / RULER / GraphWalks figure found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 55/100.** Terminal-Bench 2.0 at 47.1% is below the mid-tier range (45–60%); GDPval-AA, OSWorld, Claw-Eval, and τ²-bench data not found. DeepSearchQA at 62.8% is decent. Terminal-Bench 2.1 (Vals) at 44.2% is below mid-tier. Capped by lack of GDPval-AA Elo, absent standard tool-use benchmarks, and mid-range TB2.0 score.

- **Reasoning: 70/100.** GPQA-D at 88.5% and GPQA Diamond (Vals) at 88.6% are near-frontier (90%+); MMLU-Pro (Vals) at 86.3% is very strong. HLE w/o tools at 31.6% is below the 40% frontier threshold but above 10% mid-tier. No AA Intelligence Index found (AA page returns 404); no LCR or CritPt data available. Scores well due to strong GPQA and MMLU-Pro but capped by missing composite index and LCR data.

- **Context window: 95/100.** 2M token context window per BenchLM — meets ≥1M tier (95–100). Scores 95 rather than 100 since no verified retrieval-at-512K+ percentage was found. Note: `meta.json` lists 128K for the Zen variant.

- **Multimodal: 65/100.** Text and image input with text output — scores in the +image input range (60–70) per methodology. Multimodal benchmarks (MMMU-Pro 75.2%, CharXiv 60.9%, MedXpertQA 65.8%) confirm capability.

- **Coding: 73/100.** SWE-bench Verified at 76.7% and SWE-bench (Vals) at 72.2% are solid; LiveCodeBench (Vals) at 84.3% is near-frontier (80%+); LiveCodeBench Pro at 74.2% is strong. Vibe Code Bench at 4.06% is very low. AA-SciCode and AA-Coding Index not found. Capped by low Vibe Code and absent SciCode/Coding Index data.

- **Cost efficiency: 65/100.** No verified per-1M-token pricing found for Grok 4.20 in external sources; `meta.json` lists "Standard pricing." Using Grok 4 family pricing ($3/$15 for Grok 4) as a proxy → ~60 tier. Scoring 65 as a structural estimate; lower confidence due to unverified pricing.

- **Overall Score: 72/100.** Mean of five non-cost dimensions: (55 + 70 + 95 + 65 + 73) / 5 = 358 / 5 = 71.6 → 72. Strong GPQA (88.5%) and coding benchmarks (LiveCode 84.3%, SWE-bench 76.7%), exceptional 2M context window, but capped by weak tool use (no GDPval), absent Intelligence Index (AA page 404), and low HLE (31.6%). Consider Grok 4.6 or 4.7 for better overall performance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Meta AI Muse Spark comparison chart, Vals AI leaderboards, ARC Prize, OpenRouter benchmarks, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `XAI_Release_Post.md`, using the same headings.

---
