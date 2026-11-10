# Qwen 3.7 Max — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.7-max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Max
- **Short description:** Alibaba's May 2026 flagship agent-first LM (1M context, text-only, GPT-5.2-class); superseded Aug 3 by Qwen3.8-Max.
- **Provider / access:** Alibaba Model Studio (`qwen3.7-max`), OpenRouter (`qwen/qwen3.7-max`), Together, Novita.
- **Release / knowledge:** 2026-05-19/21.
- **IDs:** `qwen/qwen3.7-max`
- **Context window:** 1,000,000 tokens; 65,536 max output at launch (131K per Epoch/AA).
- **Modalities:** text in/out; no image/audio/video input (text-only flagship).
- **Pricing (as of 2026-10-02):** $2.50/M in, $0.25/M cache, $7.50/M out (cut from promo $1.25/$3.75); OpenRouter lower routes at $1.475/$4.425.
- **Architecture:** proprietary, API-only, 35-hour autonomous-run demonstrations; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (Terminus; ≈matches Opus 4.6); Terminal-Bench 2.1 (AA): ~67.3% class
- GDPval-AA: 30.7% class (AA v4.x); τ²-Bench Telecom: **94.7%** (AA); Automation-Bench Pass@1: 14.2%
- MCP-Atlas: **76.4%**; ScreenSpot? none published (text-only model)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (launch) / **90.9%** (Epoch AI default)
- HLE no-tools: **40.5–41.4%**; AA Intelligence Index v4.0 at launch: **56.6** (#5 overall, top Chinese)
- IFBench: **80.5%**; AA-LCR: **79.0%**; CritPt: 13.4%; SciCode: 49.5%
- SimpleQA Verified: 55.8; FrontierMath Tiers 1–3 v2: 64.6; MMLU-Pro: 89.6

Coding:

- SWE-bench Verified: **80.4%**; SWE-bench Pro: **60.6%**; LiveCodeBench v6: 91.6%
- DeepSWE 1.1: **21.6%** (the weak flagship row — replaced against peers in Qwen3.8)
- SWE-bench Pro 60.6; Terminal-Bench 2.1 class ~67

Multimodal: not applicable (text-only flagship).

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-Telecom 94.7%, MCP-Atlas 76.4%, Terminal-Bench 2.0 69.7% — strong; AutomationBench 14.2% is the weakest row.
- **Reasoning: 80/100.** GPQA 92.4%, HLE 41.4%, AA Index 56.6 at launch — a top-5 AA entry at the time.
- **Context window: 92/100.** 1M window with a >256K input-tier hike on DashScope.
- **Multimodal: 15/100.** Text-only — no image/audio/video input.
- **Coding: 78/100.** SWE-bench Verified 80.4% and Pro 60.6% at launch matched peers, but DeepSWE 21.6% is the weakest documented coding row of the 3.x Max series.
- **Cost efficiency: 72/100.** $2.50/$7.50 with 90% cache discount; OpenRouter discount route improves it, but it's a pure cost premium over Qwen3.7-Plus for modest gains.
- **Overall Score: 69/100.** Mean of the five quality dims. Text-only and a weak DeepSWE row drag the aggregate; superseded by Qwen3.8-Max for any new build.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Qwen AA pages via OpenRouter, AI/TLDR card, Epoch AI via modelbenchmark.io, codersera/techfastforward launch coverage, userightai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
