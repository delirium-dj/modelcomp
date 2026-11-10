# DeepSeek V4.1 Flash 1017 — findings by Inkling 2 Small

- Source: DeepSeek (`deepseek-v4.1-flash-1017`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** The 2026-10-17 snapshot of DeepSeek V4.1 Flash — DeepSeek's fast, open-weight MoE reasoning model. A dated serving snapshot of the V4.1 Flash line (not a separate architecture); strong agentic coding and terminal benchmarks at low cost.
- **Provider / access:** DeepSeek API; open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`); also routed via OpenRouter (`deepseek/deepseek-v4.1-flash-1017`) and SGLang/vLLM.
- **Release / knowledge:** Snapshot dated 1017 (Oct 17, 2026); V4.1 Flash line released 2026; knowledge cutoff not publicly stated.
- **IDs:** `deepseek-v4.1-flash-1017` (API/OpenRouter); `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HF weights)
- **Context window:** 1,000,000 tokens; max output undisclosed.
- **Modalities:** text + image in; text out; reasoning (thinking) yes; tool calls yes.
- **Pricing (as of 2026-11-10):** open weights (self-host); hosted API pricing not verified on the card — DeepSeek Flash-tier pricing is typically very low; exact 1017 rate not published in sources found.
- **Architecture:** open-weight MoE; parameter count not disclosed on the snapshot card (V4.1 Flash family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor model card); **74.5%** (Vals AI); Terminal-Bench 4.0 **42.3%**
- CyberGym: **88.1%** (vendor card); CyberGym-E2E-AA **22.9%** (Artificial Analysis)
- AutomationBench: **60.5%** (vendor card)
- Agents' Last Exam: **35.4%** (vendor card)
- HLE w/ tools: **63.9%** (vendor card)
- GDPval-AA normalized: **55.0%** (Artificial Analysis)
- AA cyber: CWE-Bench-AA **68.3%**, CWE-bench v2 **57.6%**; AA Cyber Index **40.8%**

Reasoning / knowledge:

- GPQA / GPQA-D: **90.9%** (vendor card)
- HLE: **42.6%** (vendor card); AA-HLE **39.2%**
- AA Intelligence Index: **39.5%** (Artificial Analysis); BenchLM **65.19/100** (#32/1020)
- FrontierMath v2 (Tiers 1–3): **67.4%**; Tier 4: **26.8%** (Epoch AI)
- CritPt: **14.3%** (Artificial Analysis)
- AA-LCR: **84.0%** (Artificial Analysis)
- AA-Omniscience: Index **-5.3**, Accuracy **46.4%**, Hallucination **96.5%** (Artificial Analysis)

Coding:

- DeepSWE: **77.0%** (vendor card)
- Codeforces: **3471** (vendor card)
- Terminal-Bench 2.1: **90.6%** (vendor) / **74.5%** (Vals)
- NL2Repo: **68.2%**; ProgramBench: **29.1%** (vendor card)
- AA-SciCode: **51.9%** (Artificial Analysis)
- ScarfBench: **69.0%** (IBM Research/Kaggle)
- FrontierCode 2.0: **19.3%** (Cognition)

Long context:

- AA-LCR: **84.0%** at 1M tokens.

Multimodal:

- AA-MMMU-Pro: **77.0%** (Artificial Analysis)
- Chartography (tools): **83.0%**; BabyVision w/ Python: **92.5%**; ZeroBench w/ Python: **51.0%**; ExtractBench **87.11%**; ParseBench **64.38%**

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor-claimed TB2.1 90.6% and CyberGym 88.1% look elite but Vals measures TB2.1 at 74.5% and TB4.0 at 42.3%; AutomationBench 60.5% — strong but not consistent across harnesses.
- **Reasoning: 62/100.** GPQA 90.9%; capped by AA Index 39.5, HLE 42.6%, CritPt 14.3% and a 96.5% AA hallucination rate.
- **Context window: 94/100.** 1M tokens with AA-LCR 84.0%.
- **Multimodal: 74/100.** Text+image in; AA-MMMU-Pro 77.0%, BabyVision 92.5%, ExtractBench 87.1%; no audio/video I/O.
- **Coding: 80/100.** DeepSWE 77.0%, Codeforces 3471, TB2.1 90.6%/74.5%, NL2Repo 68.2%; capped by ProgramBench 29.1% and FrontierCode 2.0 19.3%.
- **Cost efficiency: 85/100.** Open weights; very low hosted pricing typical of the Flash tier; exact 1017 rate unverified.
- **Overall Score: 76/100.** (72 + 62 + 94 + 74 + 80) / 5 = 76.4 → 76. Best fit: open-weight agentic coding at flash pricing with 1M context; weak where factual reliability (hallucination ~96.5%) is critical.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (DeepSeek HF cards, Vals AI, Artificial Analysis, BenchLM, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V4.1-Flash-1017 — Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek-V4.1-Flash — Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [DeepSeek V4.1 Flash 1017 — BenchLM](https://benchlm.ai/models/deepseek-v4.1-flash-1017)
  - [DeepSeek V4.1 Flash — Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
