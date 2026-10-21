# Qwen 3.5 Flash — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen3.5-Flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted Qwen3.5-Flash tier — the production serving profile of the open Qwen3.5 small-MoE weights (the FP8 card ties it to `Qwen3.5-35B-A3B`; DeepLearning.AI describes it as a hosted `Qwen3.5-53B-A3B`), with 1M context by default and built-in tools. Not new weights.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-flash`, snapshot `qwen3.5-flash-2026-02-23`); also OpenRouter `qwen/qwen3.5-flash-02-23`, Vercel AI Gateway, Alibaba PAI-EAS. OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** Snapshot 2026-02-23; knowledge cutoff not published.
- **IDs:** `qwen3.5-flash` / `qwen3.5-flash-2026-02-23` (Model Studio); `qwen/qwen3.5-flash-02-23` (OpenRouter).
- **Context window:** 1,000,000 by default (max input 991,808; thinking-mode max input 983,616); 65,536 max output (81,920 max CoT).
- **Modalities:** text, image, video in; text out. Thinking/reasoning mode, function calling, structured output, context caching.
- **Pricing (as of 2026-10-21):** OpenRouter snapshot $0.065 in / $0.26 out per 1M; Model Studio international $0.10/$0.40; China region $0.029/$0.287 (context-tiered). Apache-2.0 open weights for the underlying 35B-A3B (self-host $0).
- **Architecture:** hybrid linear-attention + sparse-MoE vision-language model (hosted tier of the Qwen3.5 small-MoE weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **24.7%** (BenchmarkList, 18th percentile, rank 56/68)
- OpenHands Index: **38.1%** (BenchmarkList, 12th percentile)
- ALE-Bench: **265.93** (BenchmarkList, 10th percentile)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **82.8%**; MMLU-Pro (Vals): **84.1%**
- FrontierMath v2 (Tiers 1-3): **18.25%** (BenchLM) / **6.21%** (Epoch AI); FrontierMath v2 (Tier 4): **0.0%** (Epoch AI)
- BenchLM overall: **43.47/100** (#123/889); Artificial Analysis Intelligence Index not published

Coding:

- LiveCodeBench (Vals): **83.3%** (BenchmarkList, 69th percentile, rank 39/123)
- SWE-bench Verified (Vals): **64.4%** (BenchmarkList, 18th percentile, rank 59/72)
- Arena AI WebDev Arena: **1238.05** (10th percentile)

Multimodal:

- Native vision-language tier (text/image/video in); no MMMU/CharXiv figure published for the Flash tier specifically.

Long context:

- 1M-token window by default; no RULER/MRCR retrieval figure published.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.0 24.7% and OpenHands Index 38.1% sit well below the mid band (TB2.1 45–60 → 50–70); no BrowseComp/Tau3/GDPval figures are published for this tier, and the weak agentic suite is the main cap.
- **Reasoning: 63/100.** GPQA 82.8% and MMLU-Pro 84.1% are solid mid-band knowledge, but FrontierMath v2 (Tiers 1-3) 18.25% / Tier 4 0% is very weak math, holding it near the middle.
- **Context window: 88/100.** 1M-token hosted window qualifies for the ≥1M tier (95–100) but no measured retrieval accuracy at long context is published, so it stays below the top of the band.
- **Multimodal: 77/100.** Native text + image + video input with built-in vision — the lower half of the 75–90 image/video band; text-only output caps it, and no tier-specific vision score is published.
- **Coding: 66/100.** LiveCodeBench 83.3% is strong, but SWE-bench Verified 64.4%, OpenHands 38.1% and the low WebDev Arena percentile pull it to the mid band (LiveCode 80%+ with weak agentic coding → 65–75).
- **Cost efficiency: 96/100.** Very cheap hosted routes ($0.065–$0.10 in / $0.26–$0.40 out per 1M, down to $0.029/$0.287 in-region) with a $0 Apache-2.0 self-host option for the base weights — near the ~$0.10/$0.20 (97–99) anchor.
- **Overall Score: 67/100.** Half-up mean of Tool use (40), Reasoning (63), Context window (88), Multimodal (77), Coding (66) = 334/5 = 66.8 → 67. Best fit: a cheap, long-context multimodal tier for high-volume text/vision work; weak on agentic terminal tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (Alibaba Cloud Model Studio docs, QwenCloud, Hugging Face `Qwen/Qwen3.5-35B-A3B-FP8` card, BenchmarkList, BenchLM model + comparison pages, LLMReference, contextwindows.dev, DeepLearning.AI The Batch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
