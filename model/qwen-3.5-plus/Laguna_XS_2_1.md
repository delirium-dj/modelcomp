# Qwen3.5-Plus — findings by Laguna XS 2.1

- Source: Alibaba (`qwen3.5-plus`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus (snapshot `qwen3.5-plus-2026-02-15`)
- **Short description:** Alibaba's hosted proprietary counterpart to the open-weight Qwen3.5-397B-A17B (2026-02-15/16) — natively multimodal (text/image/video in), 1M context, hybrid linear-attention + sparse-MoE efficiency, serving the same family that matches the >1T Qwen3-Max at a fraction of the compute.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.5-plus`), OpenRouter (`qwen/qwen3.5-plus-02-15`), Qwen Chat. API-only (the 397B-A17B weights are the open sibling on HF/ModelScope).
- **Release / knowledge:** 2026-02-15 (snapshot) / 2026-02-16 (GA); knowledge cutoff not published in sources found.
- **IDs:** `qwen3.5-plus` (Model Studio); `qwen/qwen3.5-plus-02-15` (OpenRouter). No Zen Free ID found.
- **Context window:** 1M tokens default; 65,536 max output.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes (built-in tools, adaptive tool use); JSON mode yes. 201 languages/dialects.
- **Pricing (as of 2026-10-04):** Model Studio intl ≤256K: $0.40 / $2.40 per 1M (input $0.50 above 256K); OpenRouter route $0.26 / $1.56; 1M free tokens for 90 days for new accounts.
- **Architecture:** hybrid linear (Gated DeltaNet) + full attention, sparse MoE — serves the Qwen3.5 397B total / 17B active family (hosted config undisclosed).

### Raw benchmarks found

Agent / tool use:

- Adaptive built-in tool use per Model Studio docs; MCP-Atlas / Tau3 / GDPval / Agents' Last Exam: no verified public score found in sources checked
- IFBench: **51.1%** (ModelBeats)

Reasoning / knowledge:

- AIME 2026: **91.3%** (AI/TLDR)
- GPQA Diamond: **88.4%** (AI/TLDR) / **85.9%** (ModelBeats)
- SuperGPQA: **67.4%** (ModelBeats, rank #7)
- MMLU-Pro: **87.8%** (AI/TLDR) / **86.8%** (ModelBeats)
- C-Eval: **92.3%** (ModelBeats, rank #3)
- CritPt / HLE / LCR: no verified public score found in sources checked

Coding:

- SWE-bench Verified: **76.4%** (AI/TLDR) / **71.2%** (ModelBeats)
- LiveCodeBench v6: **83.6%** (AI/TLDR) / **67.1%** (ModelBeats — conflicting; treat range as provisional)
- Design Arena: Website Elo **1194**, UI Component **1184**, Code Categories **1173** (Design Arena)

Long context:

- 1M default window (Model Studio); MRCR / RULER / GraphWalks: no verified public score found

Multimodal (supporting): MMMU **85%** (AI/TLDR); MMMU-Pro **22.8%** (ModelBeats — conflicting); GUI interaction capability per Alibaba launch

### Normalized scores (1–100)

- **Tool use: 72/100.** Built-in adaptive tools and agent positioning with IFBench 51.1%; capped by the absence of any public MCP-Atlas/Tau3/GDPval row.
- **Reasoning: 80/100.** AIME 91.3%, GPQA ~86–88 and SuperGPQA 67.4% (#7) are strong for the price; capped by no HLE/CritPt evidence.
- **Context window: 95/100.** 1M default window (95–100 tier); no public retrieval-at-length number found, so the floor.
- **Multimodal: 85/100.** Native text/image/video in (video-in band 75–90) with MMMU 85% and GUI interaction; MMMU-Pro 22.8% (ModelBeats) drags it below the band top; text-only output.
- **Coding: 80/100.** SWE-bench Verified 71–76% and LiveCodeBench 67–84% (sources conflict) are good; capped by the wide disagreement between trackers and no Terminal-Bench row.
- **Cost efficiency: 92/100.** $0.40/$2.40 (intl) and $0.26/$1.56 (OpenRouter) sit right at the methodology's $0.60/$2.20 (~92) anchor, with a 1M-token free trial.
- **Overall Score: 82.4/100.** Mean of (72, 80, 95, 85, 80) = 82.4 — a very cheap multimodal workhorse; Qwen3.6/3.7-Plus improve on it across the board.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Qwen blog + Alibaba Group release + Model Studio docs, AI/TLDR, OpenRouter, ModelBeats, BenchmarkList, Design Arena); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
