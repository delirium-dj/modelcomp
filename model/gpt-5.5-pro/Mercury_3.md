# GPT-5.5 Pro — findings by Mercury 3

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (OpenAI hyphenated style: GPT-5.5 Pro)
- **Short description:** OpenAI's April 2026 flagship reasoning model (released 2026-04-23), positioned between GPT-5.5 and GPT-5.6 Sol. Strong reasoning/math with ~922K–1M context; public benchmark coverage is sparser than the later GPT-6 family.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), ChatGPT; provider listing per Artificial Analysis (API availability may be limited post-GPT-6 release).
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not published.
- **IDs:** `gpt-5.5-pro` (OpenAI API; xhigh reasoning tier).
- **Context window:** 922,000 tokens (AA) / ~1M (BenchLM); max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** no verified public pricing found in sources reviewed (AA shows N/A; OpenAI pricing docs not surfaced) — treated as unknown.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI)
- No GDPval-AA / Terminal-Bench / agentic-index figure verified in sources reviewed (sparse coverage)

Reasoning / knowledge:

- HLE: **57.2%** with tools / 43.1% without (OpenAI)
- ARC-AGI-1: **95.0%**; ARC-AGI-2: **84.2%** (ARC Prize)
- CritPt: **30.6%** (AA)
- FrontierMath (legacy): 52.4%; FrontierMath v2 Tiers 1–3 **87.72%**, Tier 4 **78.05%** (Epoch AI)

Coding:

- No SWE-bench/DeepSWE/FrontierCode figure verified in sources reviewed — coding scores provisional on family position, not measured numbers.

Long context:

- 922K–1M window; no LCR/MRCR figure verified in sources reviewed.

Multimodal:

- text/image in, text out; no video/audio input; no verified visual benchmark row found.

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 90.1% is strong, but with no other verified agentic benchmark (no GDPval/TB/agentic index) the score is capped by missing evidence — not measured weakness.
- **Reasoning: 88/100.** HLE 57.2% with tools, ARC-AGI-2 84.2%, FrontierMath T1–3 87.72% — good frontier-adjacent profile; capped by CritPt 30.6% and no II published.
- **Context window: 89/100.** 922K–1M with no verified long-context retrieval figure; defaulted below the top band on missing evidence.
- **Multimodal: 82/100.** image input, text output; no video/audio input.
- **Coding: 84/100.** No verified coding benchmark found in sources reviewed; scored conservatively on family position (between GPT-5.5 and GPT-5.6 Sol) — flag for re-verification.
- **Cost efficiency: 60/100.** No verified public pricing found; scored at midpoint pending a confirmed price.
- **Overall Score: 85/100.** Mean of (80+88+89+82+84)/5 = 84.6 → 85. Capable but thinly documented in public benchmarks; re-verify once more evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.5 announcement via BenchLM, Artificial Analysis model page, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Missing rows marked "no verified public score found"; sparse coverage (9 BenchLM rows) flagged.
- Reference URLs:
  - [Introducing GPT-5.5 (OpenAI)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 Pro — Artificial Analysis model page (922K, text+image in, released 2026-04-23)](https://artificialanalysis.ai/models/gpt-5-5-pro)
  - [GPT-5.5 Pro — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-5-pro)
  - [ARC Prize leaderboard — GPT-5.5 Pro](https://arcprize.org/leaderboard)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
