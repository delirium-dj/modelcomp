# Hy3 — findings by Muse Spark 1.3

- Source: Tencent/Hy3 Hunyuan (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hunyuan full release, hybrid thinking)
- **Short description:** Tencent's July 2026 open-weight Hunyuan MoE flagship (295B total / 21B active) with 256K context and hybrid fast-and-slow thinking, refined from the April preview for software development and office productivity.
- **Provider / access:** Tencent via TokenHub API + Hugging Face (`tencent/Hy3`) / ModelScope, Apache 2.0; progressive third-party routes (OpenRouter, Cline, OpenCode) (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-06 full release (supersedes 2026-04-23 preview); knowledge cutoff undisclosed
- **IDs:** `tencent/hy3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 256,000 total (262K API listing) — verified via Tencent launch release (256K) and provider catalog (262K)
- **Modalities:** text, image in; text out; reasoning yes (hybrid fast/slow thinking); tool calls yes
- **Pricing (as of 2026-09-21):** ~$0.083 in / $0.330 out per 1M (provider catalog panel, Sep 2026; preview was $0.180/$0.600)
- **Architecture:** open-weights MoE, 295B total / 21B active (+3.8B MTP layer), 80 layers, 192 experts top-8, GQA 64 heads; Apache 2.0

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Instruct numbers are vendor-reported July 2026 release figures; base-model rows are labeled as such.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (vendor release figures via dataforcee, Jul 2026)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (BrowseComp/WideSearch competitiveness claimed in launch notes without percentages)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor release figures via dataforcee, Jul 2026)
- USAMO 2026: **72.0** (same source, math-reasoning proxy)
- SuperGPQA (base): **51.60%** (GitHub Hy3-preview README_CN base table, 5-shot; vs Kimi-K2 base 51.10 — base-model row, not instruct)
- MMLU-Pro (base): **65.76%** (same base table, 5-shot)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxy: provider catalog Score **74**, Arena Elo 1455)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **78.0% SWE-bench Verified** (vendor release figures); **57.9% SWE-bench Pro** (same source); **75.8% SWE-bench Multilingual** (same source)
- LiveCodeBench: **34.86% LiveCodeBench-v6** (GitHub base table, 1-shot base-model row — not instruct; no verified instruct absolute found)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **28.0% DeepSWE** (vendor release figures); MBPP-plus base 78.71% (base-model row)

Long context:

- **256K hybrid-thinking window verified from spec** (no verified MRCR v2 / RULER / GraphWalks percentage found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 80/100.** TB2.1 71.7% with hybrid-thinking tool coordination shows strong open agency; capped by missing Tau3/GDPval/Claw harnesses.
- **Reasoning: 85/100.** GPQA 90.4% and USAMO 72.0 place it near flagship open reasoning; capped by missing HLE/LCR/CritPt absolutes.
- **Context window: 74/100.** Verified 256K (262K API) maps to the mid-70s tier; capped well below 1M models.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 80/100.** SWE-Verified 78.0% with Multilingual 75.8% and Pro 57.9% show strong open engineering; capped by the weak DeepSWE 28.0% and missing instruct LiveCodeBench.
- **Cost efficiency: 96/100.** ~$0.083/$0.330 per 1M approaches the cheapest paid band.
- **Overall Score: 77/100.** Mean of the five non-cost dims (80+85+74+65+80)/5 = 76.8; best-fit cheap open large-MoE hybrid-thinking pick for coding and productivity.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (Tencent launch release, GitHub Hy3-preview README base table, provider catalog pricing/score panel, dataforcee release-figures summary); base-model rows labeled where applicable; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
