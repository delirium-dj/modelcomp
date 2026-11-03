# DeepSeek V4.1 Flash — findings by Mercury 3

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (API name `deepseek-flash`; the legacy `deepseek-v4-flash` route now serves this model. DeepSeek retired the V4.1 Flash name in favor of DeepSeek-V4.1-Flash-1017 — the current checkpoint serving this route, billed at Flash price. 1017 is tracked separately in the queue.)
- **Short description:** DeepSeek's open-weights (MIT) MoE reasoning model (released 2026-09-10): 552B total / 16B active, 1M context, text+image input, very fast (212.5 t/s) and very cheap ($0.30/$1.20). Strong agentic/coding value; high hallucination-rate flag on AA.
- **Provider / access:** DeepSeek API (`deepseek-flash` / `deepseek-v4-pro`), plus 19 API providers tracked by Artificial Analysis; MIT open weights on Hugging Face.
- **Release / knowledge:** Released 2026-09-10 (V4.1 Flash); 1017 checkpoint released 2026-10-17; knowledge cutoff not published.
- **IDs:** `deepseek-flash` (DeepSeek API; thinking enabled by default, `reasoning_effort` control).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; JSON mode.
- **Pricing (as of 2026-11-03):** $0.30 input / $1.20 output per 1M tokens, 98% cache discount (blended ~$0.18).
- **Architecture:** 552B total / 16B active MoE, MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek card) vs **74.5%** (Vals — conflicting harnesses); TB4.0: **42.3%** (1017 card); TB3: **30%**
- CyberGym: **88.1%**; AutomationBench: **60.5%**; Agents' Last Exam: **35.4%**; ExploitGym: 15.3%
- GDPval-AA normalized: **55.0%** (AA); AA ITBench: 46.9%; CWE-bench v1: 55.0%; AA Cyber Index: 40.8%

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek card); HLE: **63.9%** with tools (card) vs **42.6%** (1017 card) vs **39.2%** (AA)
- AA-LCR: **84.0%**; CritPt: **14.3%**; Artificial Analysis Intelligence Index: **39.5%**
- AA-Omniscience: accuracy **46.4%**, hallucination rate **96.5%** (highest across all researched models — honesty caveat)
- Apex: **65.6%**; FrontierMath v2 Tiers 1–3 **67.37%**, Tier 4 **26.83%** (Epoch AI); Codeforces: **3471**
- JevBench 1.4: 4.77 / 1.5: 6.65

Coding:

- DeepSWE: **77.0%** (1017 card); Terminal-Bench 2.1 90.6%; NL2Repo: **68.2%**; ProgramBench: 29.1%; OpenHarmony Bench: 60.3%; Bug Hunt: 39.1 fixes
- AA-SciCode: **51.9%**; FrontierCode 2.0: **19.3%** (Cognition); ExtractBench: 87.11%

Long context:

- 1M window; AA-LCR 84.0%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; Chartography 83.0% (tools); BabyVision w/Python 92.5%; ZeroBench w/Python 51.0%; AA-MMMU-Pro 77.0%; ParseBench 64.56%.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 90.6%, CyberGym 88.1%, AutomationBench 60.5% — strong; capped by TB4.0 42.3%, Agents' Last Exam 35.4%, and TB2.1 harness variance (74.5% Vals).
- **Reasoning: 84/100.** GPQA 90.9%, HLE 63.9% with tools, LCR 84% — good; capped by CritPt 14.3%, II 39.5, and the 96.5% hallucination rate.
- **Context window: 91/100.** 1M with strong LCR 84%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 80/100.** image input with solid chart/vision work (Chartography 83% tools, BabyVision 92.5%); no video/audio input.
- **Coding: 86/100.** DeepSWE 77% and TB2.1 90.6% are excellent; capped by FrontierCode 2.0 19.3%, ProgramBench 29.1%, and SciCode 51.9%.
- **Cost efficiency: 98/100.** $0.30/$1.20 with 98% cache discount + MIT open weights — exceptional value.
- **Overall Score: 85/100.** Mean of (84+84+91+80+86)/5 = 85.0 → 85. Outstanding price/performance and open-weights option; the hallucination concern argues for verification-heavy workflows.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (DeepSeek API docs, model cards via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, Epoch AI, Cognition); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, HLE) and the 1017-checkpoint swap are flagged.
- Reference URLs:
  - [DeepSeek API docs — model names & retirement note](https://api-docs.deepseek.com/)
  - [DeepSeek-V4.1-Flash model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [DeepSeek-V4.1-Flash-1017 model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek V4.1 Flash — Artificial Analysis model page ($0.30/$1.20, 1M, 552B/16B, MIT)](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [DeepSeek V4.1 Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [DeepSeek V4.1 Flash — Vals AI model page](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
