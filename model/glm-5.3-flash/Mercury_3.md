# GLM-5.3-Flash — findings by Mercury 3

- Source: Z.ai/GLM-5.3-Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's first natively multimodal GLM-5-series open-weights (MIT) model (released 2026-08-26): 320B total/18B active with a hybrid sparse+linear attention architecture, 1M context, and Opus-4.8-approaching coding/agentic performance at one-tenth the price.
- **Provider / access:** Z.ai API Platform (`glm-5.3-flash`), plus 26 providers tracked by Artificial Analysis; MIT open weights on Hugging Face (`zai-org/GLM-5.3-Flash`).
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not published.
- **IDs:** `glm-5.3-flash` (Z.ai API; `reasoning_effort` low/high/max, default max).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.15 input / $0.50 output per 1M tokens, 80% cache discount (blended ~$0.10).
- **Architecture:** 320B total / 18B active MoE, hybrid sparse (SWA) + linear attention, Manifold-Constrained Hyper-Connections (mHC), 30T-token multimodal pretraining; MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai/AA) vs **62.9%** (Vals — conflicting harnesses); Agents' Last Exam: 26.3%; AutomationBench v1.0.6: **48.8%**; Toolathlon-Verified: **78.4%**; GDPval-AA v2: **1773 Elo** (Z.ai)
- AA Tau3-Banking: **47.2%**; AA ITBench: 51.2%; AA Cyber Index: 49.9%; CyberGym-E2E-AA: 74.0%; MazeBench ASCII: 0%

Reasoning / knowledge:

- HLE: **55.3%** with tools (Z.ai); GPQA Diamond: **86.4%** (Vals); MMLU-Pro: **86.1%** (Vals)
- Artificial Analysis Intelligence Index: **28**, #8 of 23 open-weight (AA)
- FrontierMath v2: Tiers 1–3 **55.79%**, Tier 4 **17.07%** (Epoch AI)
- No LCR/CritPt figure verified in sources reviewed for this checkpoint

Coding:

- Terminal-Bench 2.1 84.3%; DeepSWE: **63.4%**; NL2Repo: **56.3%**; SWE-bench: **92.0%**; LiveCodeBench: **80.5%** (Vals); OpenHarmony Bench: 57.3%; FrontierSWE v2: 18.1%; Bug Hunt: 17.7 fixes

Long context:

- 1M window; no MRCR/LCR figure verified in sources reviewed.

Multimodal:

- text/image in; CharXiv 89.4%; Chartography 78% (tools); MMVU 80.5%; BabyVision 53.4%; OfficeQA Pro 62.4%; ExtractBench 80.75%; ParseBench 70.75%.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 84.3%, Toolathlon 78.4%, GDPval 1773 — strong open agentic; capped by Vals TB2.1 62.9% and Agents' Last Exam 26.3%.
- **Reasoning: 82/100.** HLE 55.3% w/tools is good; capped by GPQA 86.4%, II 28, FrontierMath T1–3 55.8%, and no LCR/CritPt rows.
- **Context window: 88/100.** 1M with no verified retrieval figure; defaulted below the top band on missing evidence.
- **Multimodal: 84/100.** Image input with strong chart/document work (CharXiv 89.4%, ExtractBench 80.75%); no video/audio input.
- **Coding: 87/100.** TB2.1 84.3%, SWE-bench 92%, DeepSWE 63.4%; capped by FrontierSWE v2 18.1% and no FrontierCode figure.
- **Cost efficiency: 97/100.** $0.15/$0.50 with 80% cache discount + MIT weights — exceptional value.
- **Overall Score: 85/100.** Mean of (86+82+88+84+87)/5 = 85.4 → 85. A top open-weight value pick; sparse independent reasoning/context coverage flagged.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Z.ai model card + launch post, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1) listed side by side.
- Reference URLs:
  - [GLM-5.3-Flash model card (Hugging Face)](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [GLM-5.3-Flash launch post (Z.ai)](https://z.ai/blog/glm-5.3-flash)
  - [GLM-5 technical report (arXiv 2602.15763)](https://arxiv.org/abs/2602.15763)
  - [GLM-5.3-Flash — Artificial Analysis model page ($0.15/$0.50, 1M, 320B/18B, MIT)](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [GLM-5.3-Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/glm-5-3-flash)
  - [GLM-5.3-Flash — Vals AI model page](https://www.vals.ai/models/zai_glm-5.3-flash)
