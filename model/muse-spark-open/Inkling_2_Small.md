# Muse Spark Open — findings by Inkling 2 Small

- Source: Meta (`muse-spark-open`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight Muse Spark family flagship — an 816B-total / 42B-active MoE released for open use (the open counterpart to the API-only Muse Spark 1.x line). Strong MCP/tool-use and vision benchmarks at open-weights cost.
- **Provider / access:** Open weights on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`); OpenRouter (`meta/muse-spark-open`); self-host via vLLM/SGLang.
- **Release / knowledge:** 2026; knowledge cutoff not publicly stated.
- **IDs:** `meta-models/Muse-Spark-Open-816B-A42B` (HF); `meta/muse-spark-open` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output undisclosed.
- **Modalities:** text + image in (vision encoder); text out; reasoning yes; tool calls yes (MCP-oriented).
- **Pricing (as of 2026-11-10):** open weights (self-host, license per Meta's model card); no hosted per-token price published by Meta; OpenRouter pricing varies by provider.
- **Architecture:** Mixture-of-Experts, 816B total / 42B active.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **89.2%** (Meta Muse Spark Open scorecard)
- Toolathlon-Verified: **72.8%** (HF model card)
- JobBench: **61.8%** (Meta scorecard / launch post)
- HLE w/ tools: **61.0%** (HF model card)
- GDPval-AA normalized: **45.1%** (Artificial Analysis)
- MazeBench: **0%** (ASCII mode)

Reasoning / knowledge:

- AA-GPQA Diamond: **89.0%** (Artificial Analysis)
- AA Intelligence Index: **24.9%** (Artificial Analysis); BenchLM **51.08/100** (#95/1020)
- AA-HLE: **43.9%**; CritPt: **14.9%**
- AA-LCR: **78.3%** (Artificial Analysis LCR leaderboard)
- AA-Omniscience: Index **25.8**, Accuracy **42.0%**, Hallucination **28.0%**

Coding:

- DeepSWE: **60.0%** (Meta scorecard)
- SWE-Atlas Codebase QnA: **58.0%** (HF model card)
- AA-SciCode: **58.4%** (Artificial Analysis)
- FrontierCode 2.0: **6.2%** (Cognition)

Long context:

- AA-LCR: **78.3%** at 1M tokens.

Multimodal:

- AA-MMMU-Pro: **80.9%** (Artificial Analysis)
- BabyVision: **80.2%**; ZeroBench: **50.0%**; SimpleVQA: **73.6%** (Meta scorecard)
- Design Arena Website: **1302** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Atlas 89.2% is flagship-tier; Toolathlon 72.8% and JobBench 61.8% ground it; capped by GDPval-AA 45.1%.
- **Reasoning: 58/100.** GPQA 89.0% stands out, but AA Index 24.9, HLE 43.9%, CritPt 14.9% drag the frontier-reasoning profile.
- **Context window: 92/100.** 1M tokens, AA-LCR 78.3%.
- **Multimodal: 76/100.** Text+image in; MMMU-Pro 80.9%, BabyVision 80.2%, SimpleVQA 73.6%; no audio/video I/O.
- **Coding: 58/100.** DeepSWE 60.0%, SWE-Atlas QnA 58.0%, AA-SciCode 58.4%; capped hard by FrontierCode 2.0 6.2%.
- **Cost efficiency: 80/100.** Open weights — very competitive at 42B-active scale; hosted price unverified.
- **Overall Score: 72/100.** (74 + 58 + 92 + 76 + 58) / 5 = 71.6 → 72. Best fit: open-weight deployments prioritizing MCP/tool-use and 1M context at low cost; weak for hardest frontier coding/reasoning.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Meta launch/scorecard post, HF model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark Open — Meta AI Research blog](https://research.meta.ai/blog/muse-spark-open)
  - [Muse-Spark-Open-816B-A42B — Hugging Face](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Muse Spark Open — BenchLM](https://benchlm.ai/models/muse-spark-open)
  - [Muse Spark Open — Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-open)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
