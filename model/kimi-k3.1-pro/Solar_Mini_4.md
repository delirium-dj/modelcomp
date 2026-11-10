# Kimi K3.1 Pro — findings by Solar_Mini_4

- Source: Moonshot AI (`kimi-k3.1-pro`), official pricing page `https://www.kimi.ai/resources/kimi-k3-1-pro-pricing`; benchmarks Artificial Analysis model page (`https://artificialanalysis.ai/models/kimi-k3-1-pro`) and launch article (`https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks`), BenchGap 2026-11-07 (`https://benchgap.net/model/kimi-k3-1-pro`), llm-stats (`https://llm-stats.com/models/kimi-k3-1-pro`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro (Moonshot AI)
- **Short description:** Moonshot AI's most capable 3T-class open-weight model: a 2.8T-parameter MoE with 104B active, built for coding, 3D creation, financial research and long-horizon agent workflows. Released October 2026; ranks top-5 on the Artificial Analysis Intelligence Index and tops the field on Terminal-Bench 4.0.


### Raw benchmarks found

> Sources: Artificial Analysis launch article 2026-10-23 and model page (2026-11-08); BenchGap 2026-11-07; llm-stats; official Moonshot AI pricing page. Measured vs estimated noted.

> **Tool use / agentic:**
> - Terminal-Bench 4.0: **67% — highest score of any model** (Artificial Analysis 2026-10-23), up from 13% for Kimi K3; ahead of Claude Sonnet 5.5 (64%).
> - GDPval-AA: **1,846 Elo — 3rd place**, up 312 Elo from Kimi K3; behind only Claude Opus 5.5 (1,866) and Muse Wonder Full (1,857).
> - AutomationBench-AA: **73%** (up from 58% for Kimi K3).
> - AutomationBench-AA (BenchGap): **73%** estimated.
> - DeepSWE: **71.5%** measured (BenchGap).

> **Reasoning / knowledge:**
> - Humanity's Last Exam: **52%** (up from 47% for Kimi K3).
> - CritPt: **25%** (up from 23%).
> - SciCode: **61%** (up from 59%).
> - AA-Omniscience: **30** (up from 20); hallucination rate 53% → 44%; accuracy 48% → 51%.


### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 67% is the highest score of any model to date, GDPval-AA #3 with 1,846 Elo and AutomationBench-AA 73% make long-horizon agentic planning a family strength. Cap: DeepSWE 71.5% measured (lower than the 3.7 Flash sibling's 76.1% AA Coding Index family average) and no verified standalone agent harness headline for Pro.
- **Reasoning: 88/100.** Strong gains over Kimi K3 — HLE 52%, CritPt 25%, SciCode 61%, AA-Omniscience 30 with hallucination rate cut to 44%. Cap: still below frontier (e.g., GPQA Diamond 90.8% measured is a family average; no GPQA Diamond figure reported for Pro itself).
- **Context window: 96/100.** 1M input/token with the largest chat capacity (1M tokens) of any consumer model; open-weights MoE with 104B active.
- **Multimodal: 75/100.** Text + image input is the published spec (text output only); strongly outperformed by video/audio-capable rivals at the 3T class (e.g., Gemini 3.7 Flash's 92/100).
- **Coding: 90/100.** Terminal-Bench 4.0 67% is the highest score of any model, SWE-bench Verified 86.2% estimated (family) and LiveCodeBench v6 90.7% estimated back elite coding; the model's stated purpose is coding and agent workflows.
- **Cost efficiency: 77/100.** $2/$10 per 1M is well above the median ($0.47/$1.97) — expensive vs peers — though 33% cheaper than Kimi K3; $3.68 per Intelligence Index task at max effort.
- **Overall Score: 87/100.** (88 + 88 + 96 + 75 + 90) / 5 = 87.4 → 87 (half-up). Best-fit: the best open-weight coding/agent flagship (top-5 on the Intelligence Index, #1 on Terminal-Bench 4.0) at a premium price and with video/AI-native speed still behind the lab models.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Moonshot AI/Kimi K3.1 Pro pricing page 2026-10-26; Artificial Analysis launch article 2026-10-23 and model page 2026-11-08; BenchGap 2026-11-07 benchmark table; llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3.1 Pro Pricing](https://www.kimi.ai/resources/kimi-k3-1-pro-pricing)
  - [Artificial Analysis — Kimi K3.1 Pro launches at 4th on the Intelligence Index](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Artificial Analysis — Kimi K3.1 Pro model page](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [BenchGap — Kimi K3.1 Pro benchmark scores](https://benchgap.net/model/kimi-k3-1-pro)
  - [LLM Stats — Kimi K3.1 Pro](https://llm-stats.com/models/kimi-k3-1-pro)

> - MMLU-Redux: **97.9%** estimated (BenchGap); C-Eval: **93.9%** estimated.
> - GPQA Diamond: **90.8%** measured (BenchGap — family average).

> **Coding:**
> - Terminal-Bench 4.0: **67% — highest of any model** (Artificial Analysis).
> - LiveCodeBench v6: **90.7%** estimated (BenchGap).
> - SWE-bench Verified: **86.2%** estimated (BenchGap — family average for 3.7 Flash; Pro figure not separately listed in this snapshot).

> **Long context / multimodal:**
> - Context window 1M tokens with up to 1M chat capacity on membership plans.
> - Input modalities: text and image only; no video/audio output (official Kimi site).
> - MMLongBench-Doc: **60.5%** measured (BenchGap — family average).

- **Provider / access:** Moonshot AI — Kimi web, Kimi Work, Kimi Code, Kimi API; open-weight weights on Hugging Face (`Kimi-K3.1-Pro` Licence, commercial use with restrictions).
- **Release / knowledge:** Released October 2026 (Artificial Analysis model page; official Kimi site). Knowledge cutoff not disclosed in accessible official docs.
- **IDs:** `kimi-k3.1-pro` (Kimi API); weights on Hugging Face.
- **Context window:** 1,048,576 input tokens (1M), up to 1M-chat capacity on membership plans.
- **Modalities:** Text and image input; text output. Thinking enabled at low / high / max (max default).
- **Pricing (as of 2026-11-08):** Standard API — $2/MTok input, $10/MTok output, $0.20/MTok cache hit; cache writes $2/MTok (5-min TTL) / $4/MTok (1-hr TTL). Highspeed tier — $4/$20/$0.20, cache writes $4/$8. Membership (Pro): $31/mo (includes K3.1 Pro Highspeed).
- **Architecture:** Proprietary MoE — 2.8T total parameters, 104B active; weights open (Kimi K3.1-Pro Licence).
