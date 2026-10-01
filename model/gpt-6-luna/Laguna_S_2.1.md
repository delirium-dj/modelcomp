# GPT-6 Luna — findings by Laguna S 2.1

- Source: OpenAI (`https://openai.com/index/introducing-gpt-6-sol-and-luna/`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-luna`), BenchLM (`https://benchlm.ai/models/gpt-6-luna`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (Max)
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family. Delivers near-frontier DeepSWE performance at a fraction of the cost — $0.10 input / $0.50 output per 1M tokens, 50% cheaper than GPT-5.6 Luna. Released September 22, 2026 alongside GPT-6 Sol and Astra.
- **Provider / access:** OpenAI API — `gpt-6-luna` via OpenAI API at `https://api.openai.com/v1`; OpenCode Zen `opencode/gpt-6-luna` (no Free ID per `meta.json`)
- **Release / knowledge:** September 22, 2026; knowledge cutoff not published
- **IDs:** `openai/gpt-6-luna` (Zen), `gpt-6-luna` (OpenAI API); noFreeId per `meta.json`
- **Context window:** 1M total (per AA model page and BenchLM); OpenAI launch post confirms competitive with GPT-6 family
- **Modalities:** Text and image input, text output; reasoning yes (configurable low to max); tool calls yes
- **Pricing (as of 2026-09-22):** $0.10 input / $0.50 output per 1M tokens; cache hits discounted 90% ($0.01/M); among the most cost-efficient frontier reasoning models
- **Architecture:** Proprietary dense transformer; parameter count not disclosed

### Raw benchmarks found

> Sources: OpenAI GPT-6 Sol and Luna launch post (`https://openai.com/index/introducing-gpt-6-sol-and-luna/`), Artificial Analysis model page (`https://artificialanalysis.ai/models/gpt-6-luna`), BenchLM (`https://benchlm.ai/models/gpt-6-luna`).

Agent / tool use:

- GDPval-AA: **1367 Elo** — (Artificial Analysis model benchmarks via BenchLM)
- AA-Briefcase: **1299 Elo** — (AA leaderboard via BenchLM)
- AA-AutomationBench: **53.2%** — (AA leaderboard via BenchLM)
- AA-Terminal-Bench 4.0: **12.6%** — (AA leaderboard via BenchLM)
- GDP.pdf: **20.4%** — (AA leaderboard via BenchLM)
- ExploitGym: **11.6%** — (OpenAI GPT-6 Astra system card via BenchLM)
- AA-Agentic Index: **no verified public score found** — (not listed on BenchLM for Luna)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** — (AA model page, estimated); BenchLM normalized: **37.3%** — (AA leaderboard)
- GPQA Diamond: **no verified public score found** — (not listed on BenchLM or in launch post for Luna)
- AA-HLE: **38.5%** — (AA leaderboard via BenchLM)
- AA-Omniscience Index: **0.7%** — (AA leaderboard via BenchLM; near zero, indicates hallucination issues)
- AA-Omniscience Accuracy: **43.8%** — (AA model benchmarks via BenchLM)
- AA-Omniscience Hallucination Rate: **76.7%** — (AA model benchmarks via BenchLM; high)
- AA-LCR: **83.3%** — (AA LCR leaderboard via BenchLM)
- CritPt: **19.4%** — (AA critpt leaderboard via BenchLM)
- MLCR-AA: **16.1%** — (AA mlcr-aa leaderboard via BenchLM)
- HealthBench Professional: **60.8%** — (OpenAI GPT-6 Astra system card via BenchLM)
- HealthBench (raw): **50.0%** — (OpenAI GPT-6 Astra system card via BenchLM)

Coding:

- DeepSWE v1.1: **66.6%** — (OpenAI launch post; max effort, comparable to Claude Opus 5 and Fable 5 at medium effort)
- AA-SciCode: **54.6%** — (AA scicode leaderboard via BenchLM)
- AA-Coding Index: **no verified public score found** — (not listed on BenchLM for Luna)
- SWE-bench: **no verified public score found** — (not listed on BenchLM for Luna)
- LiveCodeBench: **no verified public score found** — (not listed on BenchLM for Luna)
- FrontierSWE: **no verified public score found**

Multimodal:
- Supports text and image input (per AA model page)
- AA-MMMU-Pro: **75.5%** — (AA mmmu-pro leaderboard via BenchLM)
- Design Arena Website: **1229** — (OpenRouter benchmarks via BenchLM)

Long context:

- 1M context window per AA model page and BenchLM; no MRCR / RULER / GraphWalks figure found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 62/100.** GDPval-AA at 1367 Elo is above the mid-range threshold (900–1200) but below frontier (1750+); AA-Briefcase at 1299 Elo is mid-range. AA-AutomationBench at 53.2% is decent but AA-Terminal-Bench 4.0 at 12.6% and GDP.pdf at 20.4% are weak. No SWE-bench or OSWorld data for Luna specifically. Capped by low agentic benchmarks and absent frontier GDPval scores.

- **Reasoning: 65/100.** Intelligence Index at 38 is above mid-range (20–35) but significantly below frontier (60+); AA-HLE at 38.5% nearly clears the 40% frontier threshold; AA-LCR at 83.3% is excellent. However, no GPQA Diamond found, and AA-Omniscience Index near zero (0.7%) with 76.7% hallucination rate indicate significant knowledge reliability issues. Capped by hallucination concerns and absence of GPQA data.

- **Context window: 95/100.** 1M token context window per AA model page and BenchLM — meets ≥1M tier. Scores 95 rather than 100 since no verified retrieval-at-512K+ percentage was found.

- **Multimodal: 65/100.** Text and image input with text output (per AA model page) — scores in the +image input range (60–70) per methodology. AA-MMMU-Pro at 75.5% supports capability.

- **Coding: 70/100.** DeepSWE v1.1 at 66.6% is near frontier (74%+), per OpenAI launch post; AA-SciCode at 54.6% is just below the 55% frontier threshold. LiveCodeBench and SWE-bench scores not found for Luna specifically on BenchLM. Capped by absence of SWE-bench/LiveCodeBench data and SciCode slightly below frontier threshold.

- **Cost efficiency: 96/100.** $0.10 input / $0.50 output per 1M tokens — among the most competitive pricing tier (methodology: ~$0.10/$0.20 ≈ 97–99). Not on Zen free tier (noFreeId per `meta.json`), but at $0.10/$0.50 commercial API pricing scores in the 90s. Exceptional value for a frontier-tier model.

- **Overall Score: 71/100.** Mean of five non-cost dimensions: (62 + 65 + 95 + 65 + 70) / 5 = 357 / 5 = 71.4 → 71. Near-frontier DeepSWE (66.6%) and exceptional cost efficiency ($0.10/$0.50), but capped by low Intelligence Index (38), absent GPQA data, and significant hallucination issues (Omniscience Index 0.7%, 76.7% hallucination rate). Best for cost-conscious coding tasks where DeepSWE performance matters; use cautiously for knowledge reliability tasks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via OpenAI launch post, Artificial Analysis model page, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `OpenAI_System_Card.md`, using the same headings.

---
