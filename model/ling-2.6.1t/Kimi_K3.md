# Ling-2.6-1T — findings by Kimi K3

- Source: inclusionAI / Ant Group (`ling-2.6-1t`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** inclusionAI's trillion-parameter **instant (instruct)** flagship (released 2026-04-23) for fast agent execution at scale — hybrid MLA/linear-attention MoE with process-redundancy suppression for concise outputs. Non-thinking counterpart to the Ring thinking line.
- **Provider / access:** OpenRouter `inclusionai/ling-2.6-1t`; Hugging Face `inclusionAI/Ling-2.6-1T` (open weights); Opper gateway ($0.30/$2.50, zero data retention); free route via Kilo.
- **Release / knowledge:** 2026-04-23 (OpenRouter; llmdb notes an Apr-29 refresh); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-2.6-1t` (OpenRouter), `inclusionAI/Ling-2.6-1T` (HF). No OpenCode Zen Free ID verified.
- **Context window:** 262,144 tokens (OpenRouter).
- **Modalities:** text in → text out; instant/instruct behavior (no extended-thinking variant here); tool calling trained for agents; ~110 tok/s decode (BLXBench measurement).
- **Pricing (as of 2026-10-09):** $0.075 / $0.625 per 1M in/out (benchmarklist panel) — Opper lists $0.30/$2.50; free on Kilo route; open weights for self-host.
- **Architecture:** trillion-parameter hybrid MLA + linear-attention MoE (exact active params not on the card I verified; llmdb describes the hybrid design). Open weights (AA Openness Index 38.89).

### Raw benchmarks found

(BenchmarkList consolidated table; AA rows = Artificial Analysis independent, dates noted)

Agent / tool use:

- Tau2-Bench Telecom: **89.8%** (#53/332, 84th pct; AA 2026-06-10)
- Terminal-Bench Hard: **31.1%** (#70/326; AA)
- ClawProBench: **57.4** final (tool use 62.4%, planning 70.5%, efficiency 91.3%)
- GDPval-AA: **1045 Elo** (#104/352; AA)
- Gert Labs game agents: **25.0%** GScore (2nd pct — weak)

Coding:

- BLXBench: **75.3%** (#8/25; 109.6 tok/s decode measured)
- SciCode: **37.0%** (#141/296; AA-verified)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.2%** (#173/468; AA)
- HLE: **8.7%** (#220/478); CritPt: **0.3%** (AA bundle row)
- AA Intelligence Index: **26.05** (#122/427)
- AA-Omniscience Index: **-51** (negative — more wrong than right on closed-book facts); ObviousBench pass³ **68.8%**; NYT Connections Extended **10.8%** (bottom)

Long context:

- AA-LCR: **41.7%** (#217/408 — mid-pack despite the 262K window)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 74/100.** Tau2-Telecom 89.8% + TB-Hard 31.1% + ClawProBench 57.4 = real sequential-agent ability at speed; capped by bottom-tier GertLabs game agents (25%).
- **Reasoning: 58/100.** GPQA 75.2% mid-pack; HLE 8.7% and CritPt 0.3% plus a *negative* AA-Omniscience index show shallow frontier knowledge for a 1T-class instant model.
- **Context window: 60/100.** 262K window, but AA-LCR 41.7% (47th pct) shows average retrieval inside it.
- **Multimodal: 15/100.** Text-only (all listings agree) — methodology floor.
- **Coding: 58/100.** BLXBench 75.3% is solid; SciCode 37% and missing SWE-bench/LCB figures cap it.
- **Cost efficiency: 92/100.** $0.075/$0.625 hosted, open weights, free routes, and fast decode — excellent $/task for agent pipelines.
- **Overall Score: 53/100.** Mean of 74/58/60/15/58 = 53.0 → 53. Best fit: cheap, fast text-agent fleets (support/telecom-style tool loops) with open-weight control; skip for hard reasoning, vision, or deep coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (benchmarklist.com consolidated table with AA/verified rows, OpenRouter, opper.ai, llmdb, benchable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
