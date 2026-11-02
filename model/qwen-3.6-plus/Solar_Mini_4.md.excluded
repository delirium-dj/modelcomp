# Qwen 3.6 Plus — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Alibaba / Qwen (`qwen3.6-plus`, Qwen3.6 Plus)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`



## Model card

- **Name:** Qwen3.6 Plus — Alibaba's flagship proprietary reasoning model (April 2026)
- **Short description:** Hybrid linear-attention + sparse-MoE architecture; reasoning by default (hybrid thinking mode); native multimodal (text + image + video input, text output); 1M context; proprietary (weights not public; API-only, integrated into Wukong and the Qwen consumer app).
- **Provider / access:** Alibaba Cloud (DashScope), OpenRouter, Qwen app, Wukong. 1 API provider per Artificial Analysis.
- **Release / knowledge:** Released April 2, 2026 (OpenCode ID `qwen3.6-plus`, model ID `qwen3.6-plus-2026-04-02`).
- **IDs:** `qwen3.6-plus` / `qwen3.6-plus-2026-04-02` (Zen/OpenCode); Qwen3.6 Plus on DashScope and OpenRouter.
- **Context window:** 1,000,000 tokens total (≈1500 A4 pages), 128K max output noted as a caveat.
- **Modalities:** Text + image + video input; text output. Native multimodal (not bolted on).
- **Pricing (2026-10-31):** Global tier (US/EU) — <256K: $0.276/$1.651 per 1M in/out; 256K–1M: $1.101/$6.602. International tier — <256K: $0.50/$3.00; 256K–1M: $2.00/$6.00. ~90% cache discount.
- **Architecture:** Proprietary; latest Qwen flagship line moved to API-only (no self-hosting). Hybrid thinking on by default.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 2.1: **68.5%** — estimated ±6.9pp (medium) — BenchGap.
- OSWorld-Verified: **68.6%** — estimated ±3.8pp (medium) — BenchGap.
- AA-LCR: **78.3%** — measured.
- τ²-bench results: **97.7%** — measured; τ³-bench results: **70.7%**.
- WideResearch: **74.3%** — measured; DeepSearchQA: **84.0%** — estimated ±9.6pp (medium).
- AA AutomationBench: **9.9%**; AA ITBench: **37.4%** — measured.
- CyberGym: **51.7%** — estimated (low).

**Reasoning / knowledge:**
- AA-GPQA Diamond: **88.2%** — measured; GPQA Diamond: **90.4%** — estimated ±0.1pp (high).
- HLE: **28.8%** — measured; HLE w/ tools: **45.6%** — estimated ±5.3pp (low).
- AA-LCR: **78.3%** — measured; CritPt: **2.9%** — measured (weak).
- AA Intelligence Index: **27.0%** — measured.
- AIME26: **95.3%** — measured; AIME 2025: **95.9%** — estimated.
- MATH-500: **97.7%** — estimated; MMLU-Pro: **88.5%** — measured; MMLU: **89.6%** — estimated.
- MMMU: **86.0%** — measured; MMMU-Pro: **78.0%** — measured.
- IFEval: **94.3%** — measured; IFBench: **75.8%** — measured.

**Coding / long-horizon:**
- SWE-bench Verified: **78.8%** — measured (Qwen chart: 78.8 vs Claude 4.5's 80.9).
- SWE-bench Pro: **56.6%** — measured (vs 57.1 for Claude 4.5).
- LiveCodeBench v6: **87.1%** — measured.
- SciCode: **48.7%** — estimated ±2.9pp (medium).
- Terminal-Bench 2.0 (vendor chart): **61.6%** — vs Claude 4.5's 59.3 (chart); TB2.1 variants 68.5% / 69.7% (estimated).

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 68.5% (7 reports weight ~60%; upper-mid, not frontier 88%+), OSWorld-Verified 68.6% (measured), AA-LCR 78.3% (measured), τ² 97.7% strong. Mixed: AA AutomationBench 9.9% and CyberGym 51.7% weak. Terminal-Bench 2.0 chart (61.6) is an older harness.
- **Reasoning: 72/100.** GPQA Diamond 88.2–90.4% measured (high) and AIME26 95.3% / MATH-500 97.7% / IFEval 94.3% (strong) pull up; HLE 28.8% (measured, well below the 40%+ frontier bar), CritPt 2.9% (very weak), AA Index 27.0% (mid) pull down → upper-mid.
- **Context window: 96/100.** 1M total / 128K max output — ≥1M tier (95–100). Max-output caveat is >64K, so no penalty under methodology.
- **Multimodal: 78/100.** Text + image + video in → +video tier (75–90); strong video/document benchmarks (Video-MME 85.5–87.6% w/o/subtitles, MMMU 86.0%, OmniDocBench 89.9% est., RealWorldQA 85.4%).
- **Coding: 75/100.** SWE-bench Verified 78.8% (measured) — upper-mid; LiveCodeBench v6 87.1% (measured, frontier-class); SWE-bench Pro 56.6% (measured); TB2.1 68.5% (estimated); SciCode 48.7% (estimated, below 55% frontier bar). Mixed as expected for a mid-2026 reasoning model.
- **Cost efficiency: 95/100.** Global tier <256K $0.276/$1.651 per 1M (cheapest frontier-class input, ~7× below the $2.50 baseline); ~90% cache discount (~7:2:1 blended ≈$0.43/$1.65); methodology: ~$0.10/$0.20 → 97–99, $0.60/$2.20 → ~92 → blended rate sits at ~95.
- **Overall Score: 78/100.** (68+72+96+78+75)/5 = 389/5 = 77.8 → half-up 78.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [BenchGap — Qwen3.6 Plus benchmark table](https://benchgap.net/model/qwen3-6-plus)
  - [TokenCost blog — Qwen3.6-Plus pricing & benchmarks](https://tokencost.app/blog/qwen3-6-plus-pricing-benchmarks)
  - [RankedAGI — Qwen 3.6 Plus benchmarks](https://rankedagi.com/models/qwen-3-6-plus)
  - [Artificial Analysis — Qwen3.6 Plus model page](https://artificialanalysis.ai/models/qwen3-6-plus)
  - [Qwen blog — Qwen3.6-Plus (Towards Real World Agents)](https://qwenLM.github.io/blog/qwen3.6-plus)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; Tool 68 / Reasoning 72 / Context 96 / Multimodal 78 / Coding 75 / Cost 95 → **Overall 78**. ~8 pts below the repo's 86.2 average — driven by stricter evidence weighting (TB2.1 68.5% est. rather than 88%+ frontier, HLE 28.8% rather than 40%+, CritPt 2.9% measured, Index 27.0%). No verified public Claw-Eval scores found — noted, no hallucinated score.
- Conflict note: Qwen's official chart compared against Claude 4.5 Opus (TB2.0 61.6 vs 59.3, SWE-Verified 78.8 vs 80.9); TokenCost's independent TB2.0 figure for Claude 4.6 Opus is 65.4, meaning Qwen's terminal-bench chart lead would flip to Claude on the current checkpoint. SWE-V/SWE-Pro figures were Qwen's 78.8/56.6 vs Claude 4.5 (80.9/57.1).
