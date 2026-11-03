# GPT-5.4 Pro — findings by Mercury 3

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (OpenAI hyphenated style: GPT-5.4 Pro)
- **Short description:** OpenAI's March 2026 high-end Pro reasoning model (released 2026-03-05, superseded by GPT-5.5 Pro): strong reasoning/math (ARC-AGI-2 83.3%, HLE 58.7%) at an extreme $30/$180 price point — the most expensive token pricing in the GPT line.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`), ChatGPT; 1 API provider tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.4-pro` (OpenAI API; xhigh reasoning tier).
- **Context window:** 1,100,000 tokens (1.1M per AA) / 1.05M (BenchLM); max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $30.00 input / $180.00 output per 1M tokens (AA; blended ~$45).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI)
- No GDPval-AA/Terminal-Bench/agentic-index figure verified in sources reviewed (sparse coverage)

Reasoning / knowledge:

- HLE: **58.7%** with tools / 42.7% without (OpenAI); FrontierScience: **36.7%**
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **83.3%** (ARC Prize/OpenAI); CritPt: **30.0%** (AA)
- FrontierMath v2: Tiers 1–3 **82.46%**, Tier 4 **58.54%** (Epoch AI); IPhO 2025 (Theory): 93.5% (Meta chart)
- No AA Intelligence Index published (sparse coverage)

Coding:

- No SWE/DeepSWE/FrontierCode figure verified in sources reviewed — coding provisional on family position.

Long context:

- 1.1M window; no LCR/MRCR figure verified in sources reviewed.

Multimodal:

- text/image in, text out; no video/audio input; no verified visual benchmark row found.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 89.3% strong; no other verified agentic benchmark — capped by missing evidence.
- **Reasoning: 89/100.** HLE 58.7% with tools, ARC-AGI-2 83.3%, FrontierMath T1–3 82.46% — strong reasoning; capped by CritPt 30% and no II.
- **Context window: 89/100.** 1.1M with no verified long-context retrieval figure; defaulted below the top band on missing evidence.
- **Multimodal: 82/100.** image input, text output; no video/audio input.
- **Coding: 82/100.** No verified coding benchmark found; scored conservatively on family position (below GPT-5.5/5.6 Sol).
- **Cost efficiency: 15/100.** $30/$180 — the most expensive per-token pricing of any researched model (worst in class).
- **Overall Score: 85/100.** Mean of (84+89+89+82+82)/5 = 85.2 → 85. Capable but thinly documented and extremely expensive; re-verify when more evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.4 announcement via BenchLM, Artificial Analysis model page, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Missing rows marked "no verified public score found"; sparse coverage (12 BenchLM rows) flagged.
- Reference URLs:
  - [Introducing GPT-5.4 (OpenAI)](https://openai.com/index/introducing-gpt-5-4/)
  - [GPT-5.4 Pro — Artificial Analysis model page ($30/$180, 1.1M, cutoff Aug 2025)](https://artificialanalysis.ai/models/gpt-5-4-pro)
  - [GPT-5.4 Pro — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-4-pro)
  - [ARC Prize leaderboard — GPT-5.4 Pro](https://arcprize.org/leaderboard)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
