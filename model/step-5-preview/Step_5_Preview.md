# Step 5 Preview — findings by Step 5 Preview

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model (announced 2026-09-20) — a 600B-total/27B-active sparse MoE (92 layers, ~4.5% sparsity) built around an efficiency-first "Pareto Frontier" philosophy: near-frontier intelligence at a fraction of the compute, with a 1M-token context enabled by Sparse GQA with block-wise token merging (indexer/top-k costs ~1/8 of a denser baseline). Leads the open-weight class on DeepSWE v1.1, SWE-Marathon and ProgramBench, posts the best CyberGym score in its comparison set, and is the #1 open-weight model on finance (FrontierFinance 66.4%). Priced at $1.00/$2.70 per MTok with a 95% cache-hit discount.
- **Provider / access:** StepFun Open Platform / API (`step-5-preview`, api.stepfun.ai, OpenAI-compatible Chat Completions + Messages API); StepFun AI Studio; Step Plan (Claude Code integration exposing full 1M context); OpenRouter `stepfun/step-5-preview` (StepFun-only host, fp8, since 2026-10-08). Open weights (BF16, ~1.2TB, StepFun Community License) promised for 2026-10-15 — not yet on an official StepFun HF repo as of 2026-10-08.
- **Release / knowledge:** 2026-09-20 (Artificial Analysis dates the reasoning variant 2026-09-18). Knowledge cutoff not disclosed.
- **IDs:** `step-5-preview` (StepFun API/OpenRouter); planned weights repo `SHSLab/Step-5-Preview-BF16` (StepFun Community License).
- **Context window:** 1,000,000 tokens; max output 64K per platform docs (HF card: 32,768 default, configurable to 131,072).
- **Modalities:** Text, image and video in → text out (up to 60 images/request; video MP4/QuickTime/Matroska, ≤128MB, ≤5min recommended); parallel tool calling; strict JSON Schema; prompt caching; reasoning effort low/medium/high (xhigh).
- **Pricing (as of 2026-10-09):** $1.00 / MTok input (cache miss), $0.05 cache hit, $2.70 output (reasoning trace billed as output); free V0 tier (5 concurrency, 10 rpm). Measured 99.8 tok/s, 2.96s TTFT; AA measured $0.72–1.03 per Index task.
- **Architecture:** Sparse MoE, 600B total / 27B active per token; 92-layer narrow-deep Transformer; Sparse GQA + block-wise token merging; native vision encoder (unified multimodal at default resolution).

### Raw benchmarks found

Reasoning / knowledge (StepFun launch table, high effort — all vendor-reported):

- GPQA Diamond: **93.5%** (GPT-6 Astra 96.1%, Fable 5.1 93.7%, Opus 5 93.2%, Kimi K3 93.5%, GLM-5.3 91.7%)
- HLE: **46.5%** no-tools (K3 46.9%, GLM-5.3 42.3%, Astra 54.7%, Fable 5.1 59.1%); **59.4% with tools**
- AA-LCR v1.1: **88.3%** (#2, statistically tied with Kimi K3's 88.7%); CritPt: 20.9%; SciCode: **58.9%** (above Astra's 56.5% and Opus 5's 56.4%)
- Artificial Analysis Intelligence Index: **44** (v4.3.2 — level with Grok 4.6 and Kimi K3 Max; AA measured 160M output tokens, i.e. very verbose)

Coding:

- DeepSWE v1.1: **67.7%** (#1 open-weight; K3 67.5, GLM-5.3 66.9, Fable 5.1 67.4, Astra 74.1, Opus 5 74.0)
- Terminal-Bench 2.1: **85.0%** (tied with K3; Fable 5.1 leads at 91.4%)
- Terminal-Bench 4.0: **33.3%** (#17/60; 2.6x Kimi K3's 12.6%, 1.24x DeepSeek V4.1 Flash; GLM-5.3 41.9, Opus 5 52.3, Astra 57.9)
- SWE-Marathon v1.1: **72.7%** (#1 open-weight; Opus 5 85.6, K3 84.4 lead overall)
- ProgramBench: **80.5%** (#2/17); SWE-Atlas-QnA: **63.6%** (#1/7); RoadmapBench 54.3%; MLS-Bench-Lite 40.5%
- StepCodeBench (in-house, 553 repos / 33 languages): 49.0% avg@4 — leads open peers (K3 43.9, GLM-5.3 40.2) but trails closed (Opus 5 63.9)
- CyberGym: **84.7%** — best in the comparison set (K3 80.0, GLM-5.3 84.5)

Agentic / finance / knowledge work:

- FrontierFinance: **66.4%** (#2 overall, #1 open-weight; only Opus 5's 69.7% is higher; beats Astra's 55.0%)
- BrowseComp: **88.7%** (K3 91.2%, Astra 91.5%); DRACO: 83.3%; MCP-Atlas: **85.6%**; Toolathlon-Verified: 74.1%; JobBench: 59.0%
- GDPval-AA v2.1: **Elo 1566–1571** (AA's rescaled v2.1 reading; Opus 5 1735 leads)
- AutomationBench-AA: 51.0%; τ³-Banking: 42.5%; Agents' Last Exam: 29.5%; OfficeQA Pro 60.3%; SpreadsheetBench 2: 29.4%
- FinStepBench suite (in-house): LiveSearch 74.5%, CorporateValuation 60.6%, FinanceDR 55.8%

Multimodal:

- MMMU-Pro: **76.0%** (K3 81.0%, Astra 87.0% — trailing); **GDP.pdf: 14.8%** (StepFun's own labeled weak spot; Astra 31.0%)

Long context:

- 1M-token window with Sparse GQA; AA-LCR 88.3% (#2 overall, tied with K3); no MRCR/RULER figure published

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 85.6%, BrowseComp 88.7%, Toolathlon 74.1% and JobBench 59.0% are solidly mid-frontier agentic evidence; capped by Terminal-Bench 4.0 at 33.3%, AutomationBench-AA 51.0%, Agents' Last Exam 29.5%, τ³-Banking 42.5% and every headline number being StepFun's own run at high effort against rivals' max.
- **Reasoning: 86/100.** GPQA 93.5%, HLE 46.5% (59.4% with tools), AA-LCR 88.3% and SciCode 58.9% are frontier-band, with the AA Intelligence Index at 44 (level with Grok 4.6 and Kimi K3 Max); capped by CritPt 20.9% and HLE trailing the Fable-5.1/Astra leaders by 8–13 points.
- **Context window: 94/100.** 1M-token window in the ≥1M tier with the Sparse GQA block-merging design as genuine long-context engineering, backed by AA-LCR 88.3% (#2 overall); the 100 tier's ≥98% verified retrieval at 512K+ is unverifiable with no MRCR published.
- **Multimodal: 78/100.** Native text + image + video in → text out is the 75–90 band with a unified multimodal encoder and 60-image requests; MMMU-Pro 76.0% trails K3/Astra and GDP.pdf 14.8% is the model's own flagged weak spot.
- **Coding: 84/100.** DeepSWE 67.7% (#1 open-weight), SWE-Marathon 72.7%, Terminal-Bench 2.1 85.0%, ProgramBench 80.5% and SWE-Atlas-QnA 63.6% (#1) lead the open class; capped by Terminal-Bench 4.0 at 33.3% (vs Astra's 57.9%), StepCodeBench 49.0% vs Opus 5's 63.9%, and all numbers being vendor-reported.
- **Cost efficiency: 90/100.** $1.00/$2.70 per MTok with $0.05 cache hits maps just above the methodology's ~$1.25/$4.25 ≈ 88 tier — the best price-for-intelligence in its tier per both StepFun and Artificial Analysis ($0.72–1.03 per Index task); capped by the model's verbosity (160M output tokens per Index run, ~2x median) and the free tier being evaluation-only.
- **Overall Score: 84/100.** Best-fit recommendation: the open-weight value frontier — best-in-class open-weight agentic coding (DeepSWE/SWE-Marathon), #1 finance reasoning and a real 1M context at $1.00/$2.70; verify on your own harness since every benchmark is self-reported, and watch the output-token bill on high-effort runs.

---

## Signature

- Provided by: **Step 5 Preview (StepFun step-5-preview)** — 2026-10-09
- Method: public internet research (StepFun product page + platform docs, HuggingFace model-card mirrors, Artificial Analysis, eesel AI, CellCog, LLMLearner, waitwhichmodel); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_3.7_Flash.md`, using the same headings.
