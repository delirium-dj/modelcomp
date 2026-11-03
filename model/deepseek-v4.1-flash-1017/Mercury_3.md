# DeepSeek V4.1 Flash 1017 — findings by Mercury 3

- Source: DeepSeek/DeepSeek-V4.1-Flash-1017
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017
- **Short description:** DeepSeek's minor update to V4.1-Flash (released 2026-10-17): 552B total/16B active MoE with text/image input, 1M context, MIT license — now the #1 open-weight model on the Artificial Analysis Intelligence Index (32, v5) with top agentic coding (TB2.1 90.6%, DeepSWE 77%) at $0.30/$1.20.
- **Provider / access:** DeepSeek API, open weights on Hugging Face; 24 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-10-17; knowledge cutoff not published.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HF; `deepseek-v4.1-flash-1017` API; non-think/High/Max reasoning modes).
- **Context window:** 1,000,000 tokens (1M) total; max output 384,000 (models.dev; ≥256K recommended).
- **Modalities:** text + image input, text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.30 input / $1.20 output per 1M tokens, 98% cache discount (blended ~$0.18); open weights free.
- **Architecture:** 552B total / 16B active MoE (HF on-disk 763B incl. all shards); MIT license, open weights.

### Raw benchmarks found

Agent / tool use (DeepSeek card / AA / BenchLM):

- Terminal-Bench 2.1: **90.6%** (DeepSeek) vs 74.5% (Vals — conflicting); TB4.0: **42.3%**; TB3.0: 30%
- CyberGym: **88.1%**; AutomationBench v1.0.6: **60.5%**; Agents' Last Exam: **35.4%**; Apex Bench v1.1: **72.1%**; GDPval-AA: 55.0% normalized; AA ITBench: 46.9%; CWE-bench v1: 55.0%; MazeBench ASCII: 1%; AA Cyber Index: 40.8%; CyberGym-E2E-AA: 22.9%

Reasoning / knowledge:

- GPQA Diamond: **90.9%**; HLE: **42.6%** w/o tools (44.0% text-only) / **63.9%** w/ tools; AA-LCR: **84.0%**; CritPt: 14.3%; STEMBench: 2.54
- AA II: **32** (#1 of 23 open-weight — top open, AA); FrontierMath v2 Tiers 1–3 67.37%, Tier 4 26.83% (Epoch AI)
- AA-Omniscience: accuracy 46.4%, hallucination rate **96.5%** (very high)

Coding:

- DeepSWE v1.1: **77.0%**; Terminal-Bench 2.1 90.6%; NL2Repo-Bench: **68.2%**; ProgramBench: 29.1%; Codeforces rating: **3471**; FrontierCode 2.0: 19.3%; AA-SciCode: 51.9%; OpenHarmony Bench: 60.3%; Bug Hunt Bench: 39.1 fixes

Long context:

- 1M window; AA-LCR 84.0%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; Chartography (w/tools): **83.0%**; BabyVision (w/tools): **92.5%**; ZeroBench-main (w/tools): 51.0%; AA-MMMU-Pro 77.0%; ExtractBench 87.11%; ParseBench 64.56%.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 90.6%, CyberGym 88.1%, AutomationBench 60.5%, Apex 72.1% — excellent agentic; capped by MazeBench 1%, TB3.0 30%, and Vals TB2.1 74.5%.
- **Reasoning: 89/100.** GPQA 90.9%, HLE 63.9% w/tools, LCR 84%, II 32 (#1 open); capped by hallucination rate 96.5% and CritPt 14.3%.
- **Context window: 92/100.** 1M with strong LCR 84%; no ≥98%-retrieval figure at depth.
- **Multimodal: 87/100.** Image input with strong vision-agent rows (Chartography 83%, BabyVision 92.5%); text-only output caps it.
- **Coding: 88/100.** DeepSWE 77%, TB2.1 90.6%, NL2Repo 68.2%, Codeforces 3471; capped by ProgramBench 29.1% and FrontierCode 19.3%.
- **Cost efficiency: 95/100.** $0.30/$1.20 with 98% cache discount + 170.7 t/s — exceptional value.
- **Overall Score: 89/100.** Mean of (88+89+92+87+88)/5 = 88.8 → 89. A top open-weight all-rounder; very high hallucination rate is the main caveat.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (DeepSeek-V4.1-Flash-1017 model card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1 90.6 vs 74.5) listed side by side.
- Reference URLs:
  - [DeepSeek-V4.1-Flash-1017 model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek V4.1 Flash 1017 — Artificial Analysis model page ($0.30/$1.20, 1M, 552B/16B, II 32)](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017)
  - [DeepSeek V4.1 Flash 1017 — BenchLM benchmark aggregation](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
