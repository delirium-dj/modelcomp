# GPT-6.1 Terra — findings by Mercury 3

- Source: OpenAI/GPT-6.1 Terra
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's October 2026 flagship (released 2026-10-26): top-tier math (FrontierMath v2 90.9% Tiers 1–3 / 92.7% Tier 4), strong agentic science (TB-Science 58.3%) and computer use (OSWorld 2.1 Offline 74.2%), AA II 51, at a competitive $1/$5 — one of the strongest current frontier releases.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`); 6 API providers tracked by Artificial Analysis; sibling GPT-6.1 Sol, GPT-6 Astra/Luna/Sol.
- **Release / knowledge:** Released 2026-10-26; knowledge cutoff not published (system card addendum live).
- **IDs:** `gpt-6.1-terra` (OpenAI API; max reasoning).
- **Context window:** 1,050,000 tokens total; max output 128,000.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $1.00 input / $5.00 output per 1M tokens, 95% cache discount (blended ~$0.73).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** (OpenAI) / 55.6% (AA); Terminal-Bench-Science 0.1: **58.3%**; Agents' Last Exam: **60.0%**; OSWorld 2.1 Offline: **74.2%**
- GDPval-AA: **1476 Elo**; AA Briefcase: 1402; AA AutomationBench: 60.2%; GDP.pdf: 28.6%; MazeBench ASCII: 16%

Reasoning / knowledge:

- AA II: **51** (#14/60; well above median 38); HLE: **46.2%** (AA); LCR: **82.7%**; CritPt: **28.0%**; MLCR-AA: 30.6%
- FrontierMath v2 Tiers 1–3 **90.88%**, Tier 4 **92.68%** (Epoch AI — top-tier); HealthBench Professional 62.7% / Hard 31.4%
- AA-Omniscience: accuracy 47.6%, hallucination rate 34.5%

Coding:

- Terminal-Bench 4.0 50.3% (agentic coding); AA-SciCode: 55.1%; no SWE-bench Verified/Pro row verified in sources reviewed (newer release, partial coverage)

Long context:

- 1.05M window; AA-LCR 82.7%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 85.5% (OpenAI) / 84.7% (AA); ExtractBench 94.28%; ParseBench 73.64%; ExtractBench Pro 27%.

### Normalized scores (1–100)

- **Tool use: 87/100.** ALE 60%, OSWorld 2.1 74.2%, AutomationBench 60.2%, GDPval 1476 — strong; capped by MazeBench 16% and GDP.pdf 28.6%.
- **Reasoning: 90/100.** II 51, FrontierMath ~91%, CritPt 28%, LCR 82.7%, HLE 46.2% — elite; hallucination rate 34.5% among best.
- **Context window: 92/100.** 1.05M with strong LCR 82.7%; no deep-retrieval figure verified.
- **Multimodal: 87/100.** image input with top MMMU-Pro 85.5%; text-only output.
- **Coding: 84/100.** TB4.0 50.3% and SciCode 55.1%; no SWE rows verified (new release) — capped by missing evidence.
- **Cost efficiency: 90/100.** $1/$5 with 95% cache discount — excellent value; 109.5 t/s, very high TTFT (279s on max).
- **Overall Score: 88/100.** Mean of (87+90+92+87+84)/5 = 88.0 → 88. A leading current frontier model; partial coding-row coverage is the main caveat.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-6.1 Terra announcement/system card addendum via BenchLM, Artificial Analysis model page/leaderboards, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6.1 Terra (OpenAI, 2026-10-26)](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [GPT-6.1 Terra — Artificial Analysis model page ($1/$5, 1M, II 51)](https://artificialanalysis.ai/models/gpt-6-1-terra)
  - [GPT-6.1 Terra — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-6-1-terra)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
