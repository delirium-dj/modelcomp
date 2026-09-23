# DeepSeek V4 Pro — findings by Mimo V2.6 Flash

- Source: DeepSeek/`deepseek-v4-pro`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's April 2026 MIT-licensed flagship — 1.6T-parameter MoE (49B active), 1M context, SWE-V 80.6 (74.0 CAISI neutral harness) and LCB 93.5 at $0.435/$0.870 open-API pricing. The price/performance disruptor: near-frontier coding at a fraction of Pro-tier cost, text-only (no native vision).
- **Provider / access:** DeepSeek API (`deepseek-chat` / platform.deepseek.com Chat Completions), major aggregators; open weights under MIT. Site meta `opencode/deepseek-v4-pro`.
- **Release / knowledge:** 2026-04-24 (DeepSeek release / HokAI-era rows); knowledge cutoff not published in rows reviewed.
- **IDs:** `deepseek-v4-pro` (API family); HF / ModelScope open weights (MIT).
- **Context window:** 1,000,000 tokens input; 384,000 max output (DeepSeek docs / models.dev-class rows).
- **Modalities:** text in; text out; reasoning / thinking mode; tool calls; JSON mode. **No image/audio/video input** (text-only flagship for this generation).
- **Pricing (as of 2026-09-23):** $0.435 / $0.870 per 1M in/out (DeepSeek standard cache-miss); cache-hit input far cheaper. Paid API; open weights free under MIT.
- **Architecture:** sparse MoE, 1.6T total / 49B active (DeepSeek release); MIT open weights.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- SWE-bench Verified: **80.6%** DeepSeek harness / **74.0%** CAISI neutral mini-swe-agent (BenchmarkList / DeepSeek — harness drift noted)
- Terminal-Bench 2.0-Terminus: **67.9%** (vs Qwen3.7-Max 69.7 per Qwen launch comparison — secondary cross-table)
- MCP Atlas / GDPval-AA / OSWorld / Toolathlon / Claw-Eval: **no verified public score found** in rows reviewed for this id

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (DeepSeek / BenchmarkList)
- HLE: **42.7%** no tools / **60%** alternate snapshot 0813 with tools (DeepSeek rows — snapshot drift noted)
- MMLU-Pro / AA Intelligence Index / ARC-AGI: **no verified public score found** in rows reviewed
- CritPt / Omniscience: **no verified public score found**

Coding:

- LiveCodeBench: **93.5%** (DeepSeek / BenchmarkList — top-tier competitive coding)
- SWE-bench Verified: **80.6%** harness / **74.0%** CAISI (see agent section)
- DeepSWE / SciCode / Vibe Code Bench: **no verified public score found** for this exact id in this pass

Long context:

- MRCR v2: **94%** @128K (DeepSeek / BenchmarkList — very strong near-window retrieval)
- 1M window; retrieval at 512K+: **no verified public score found**

Multimodal:

- Text-only input/output (DeepSeek release — no vision encoder claimed for V4 Pro this generation)
- MMMU / MMMU-Pro / video suites: **no verified public score found** (and not applicable — no image in)

### Normalized scores (1–100)

- **Tool use: 85/100.** SWE-V 80.6 harness / 74.0 CAISI and TB2.0-Terminus 67.9 show real long-horizon coding agents; capped by missing MCP/GDPval/OSWorld/Toolathlon/Claw public rows for this id.
- **Reasoning: 88/100.** GPQA 90.1, HLE 42.7/60-tools — strong science/reasoning; capped by missing AA Index / ARC-AGI and HLE snapshot ambiguity (42.7 vs 60).
- **Context window: 96/100.** Full 1M with MRCR 94@128K proving near-ceiling near-window retrieval; not 100 because no public ≥512K multi-depth MRCR row extracted.
- **Multimodal: 15/100.** Text-only (no image/audio/video in) → text-only band 10–20.
- **Coding: 89/100.** LCB 93.5 (elite), SWE-V 80.6 harness / 74.0 neutral, TB2.0 67.9 — near-frontier coding at open-weight MIT; capped by CAISI neutral 74 still behind Fable/Opus 80+ multi-harness and no public DeepSWE/SciCode row for this id.
- **Cost efficiency: 96/100.** $0.435/$0.870 undercuts almost every Pro/frontier tier by 3–10× while delivering SWE-V 80+ and LCB 93.5 — among the best dollar-per-capability rows in this batch; MIT self-host improves further at scale (hardware cost excluded from score).
- **Overall Score: 75/100.** Mean of Tool 85 + Reasoning 88 + Context 96 + Multimodal 15 + Coding 89 = 373/5 = 74.6 → **75** (best-fit: high-volume text-only coding/agentic worker at $0.435/$0.870 when vision/multimodal coverage is not required; multimodal dims cap the overall hard — step up to a vision model if image/video-in matters).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (DeepSeek release notes, BenchmarkList, Qwen launch cross-table for TB2.0-Terminus, models.dev-class pricing rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
