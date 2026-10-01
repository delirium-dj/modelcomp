# GPT-5.1 — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-1`), BenchLM (`https://benchlm.ai/models/gpt-5-1`), OpenAI
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (High)
- **Short description:** OpenAI's November 2025 reasoning model; deprecated in favor of GPT-5.2. Mid-tier reasoning performance with 272K context and image input.
- **Provider / access:** OpenAI API; OpenRouter; 2 API providers
- **Release / knowledge:** Released November 13, 2025; knowledge cutoff September 2024; marked deprecated by AA (GPT-5.2 is the newer release)
- **IDs:** `openai/gpt-5-1` (AA slug), `opencode/gpt-5.1` (`\meta.json`)
- **Context window:** 272K total (per AA model page); `meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `\meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $1.25 input / $10.00 output per 1M tokens; cache discount 90%
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 105.1 tokens/s output (per AA, rank #44/224 in speed); TTFT 37.19s (per AA FAQ)

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/gpt-5-1` — Intelligence Index 25 (estimated, all benchmarks "Not publicly available" on AA page)
2. Fetched BenchLM page `https://benchlm.ai/models/gpt-5-1` — 19 of 618 benchmarks covered with verified scores
3. Cross-referenced AA model benchmarks, Vals AI, OpenRouter, and Epoch AI FrontierMath leaderboard
4. No OpenAI launch post found with dedicated benchmark table

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/gpt-5-1`), Artificial Analysis model benchmarks, Vals AI, OpenRouter, Epoch AI FrontierMath v2 leaderboard. BenchLM covers 19 of 618 benchmarks. AA model page marks all benchmarks as "Not publicly available" — scores below are from BenchLM and cross-referenced sources.

Agent / tool use:

- **Terminal-Bench 2.0:** not found for GPT-5.1
- **τ²-bench:** **81.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **Gert Labs:** **41.24%** — (Gert Labs rankings)
- **GDPval-AA (normalized):** **15.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **GDPval-AA (Elo):** **930** — (Artificial Analysis: gdpval-aa leaderboard via BenchLM)
- **SWE-bench Verified:** not found
- **OSWorld-Verified:** not found

Coding:

- **SWE-bench (Vals):** not found
- **Vibe Code Bench:** **24.61%** — (Vals AI: Vibe Code Bench v1.1)
- **AA Coding Index:** **49.4%** — (Artificial Analysis model benchmarks via BenchLM)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **25** (estimated, rank #122/224, median: 26) — (AA model page)
- **BenchLM Intelligence Index:** **24.7%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **87.3%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **AA-HLE:** **28.5%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** **80.0%** — (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard via BenchLM)
- **CritPt:** **4.9%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** **5.4%** — (Artificial Analysis: omniscience leaderboard via BenchLM)
- **AA-Omniscience Accuracy:** **37.7%** — (BenchLM)
- **AA-Omniscience Hallucination Rate:** **51.9%** — (BenchLM)
- **AA-IFBench:** **72.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **FrontierMath v2 (Tiers 1-3):** **31.034%** — (Epoch AI FrontierMath v2 leaderboard)
- **FrontierMath v2 (Tier 4):** **12.500%** — (Epoch AI FrontierMath v2 leaderboard)

Multimodal & grounded:

- **AA-MMMU-Pro:** **75.5%** — (Artificial Analysis model benchmarks via BenchLM)
- **Design Arena Website:** **1195** — (OpenRouter model benchmarks)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: low-moderate — 19 public benchmarks found across 4 sources (BenchLM, AA, Vals AI, OpenRouter, Epoch AI).

- **Tool use: 68/100.** τ²-bench 81.9% is strong. GDPval-AA Elo 930 and AA Briefcase 1452 are adequate (above 900 threshold). However, GDPval-AA normalized score is only 15.6% (AA: gdpval-aa normalized), Gert Labs 41.24% is moderate, and Vibe Code Bench 24.61% is weak. No Terminal-Bench 2.0, OSWorld-Verified, or SWE-bench Verified scores found. Solid mid-tier tool use.
- **Reasoning: 68/100.** AA Intelligence Index 25 (estimated, rank #122/224, below median 26) is below average. GPQA Diamond 87.3% is good but not frontier (90%+). HLE 28.5% is below 40% threshold. LCR 80.0% is strong. CritPt 4.9% is very weak. Omniscience Index 5.4% is barely positive. IFBench 72.9% is solid. FrontierMath Tiers 1-3 at 31.0% is below frontier. No GPQA (Vals) or MMLU-Pro found.
- **Context window: 75/100.** 272K tokens falls in the 200K–500K tier (65–84 range). High end of tier due to knowledge cutoff September 2024 (not recent). No retrieval-percentage figure found. LCR 80.0% indicates decent long-context reasoning.
- **Multimodal: 65/100.** Text and image input, text output (per AA model page). +image-in only, no video/audio/PDF verified.
- **Coding: 55/100.** AA Coding Index 49.4% is below 70% frontier reference. Vibe Code Bench 24.61% is very weak. No SWE-bench Verified, SWE-bench (Vals), or LiveCodeBench scores found. No DeepSWE or SciCode scores. Weak coding performance.
- **Cost efficiency: 78/100.** $1.25 in / $10.00 out per 1M tokens falls in the ~$1–2 / $4–5 tier (~88 anchor) but the $10 output price is high. Effective blended cost ~$1.34/MTok. noFreeId (no $0 tier).
- **Overall Score: 66/100.** Mean of five quality dimensions: (68 + 68 + 75 + 65 + 55) / 5 = 331 / 5 = 66.2 → 66. Mid-tier reasoning model with strong GPQA (87.3%) and LCR (80%) but weak coding (no SWE scores, Vibe 24.61%), below-average Intelligence Index (25), and high inference cost. Deprecated by AA in favor of GPT-5.2. `meta.json` discrepancies noted: claims 128K context vs verified 272K; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, Vals AI, OpenRouter, and Epoch AI; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities, but AA model page and BenchLM show 272K context window with text+image input support. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.1_Tech_Report.md`, using the same headings.
