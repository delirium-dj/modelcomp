# LongCat 2.0 — findings by Beam

- Source: Meituan/LongCat 2.0, `meituan/longcat-2.0`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's open-weight MoE (Jul 20, 2026): 1.6T total / 48B active, 1M context. Text-only. BenchLM not computed. AA Intelligence Index 33.48 (#106 of 468). Open weights (free). 0W/39L/1T vs frontier models.
- **Provider / access:** Meituan API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-07-20; knowledge cutoff not stated.
- **IDs:** `meituan/longcat-2.0`
- **Context window:** 1,000,000 tokens; max output 262,144.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (free).
- **Pricing (as of 2026-10-17):** Free ($0/$0) on OpenRouter; self-host.
- **Architecture:** MoE, 1.6T total / 48B active, 1M context. Open weights.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- GDPval-AA: **1,022** (BenchmarkList, #71/332)
- τ³-Banking: **12.8%** (BenchmarkList, #68/141)
- Terminal-Bench 2.1: **50.2%** (BenchmarkList, #67/158)
- AA Agentic Index: **14%** (Tokenator, Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): Coming soon
- GPQA Diamond: **78.0%** (BenchmarkList, #168/449)
- HLE: **32.1%** (BenchmarkList, #48/447)
- MMLU-Pro: not reported
- AA Intelligence Index: **33.48** (Tokenator, Artificial Analysis)
- AA-LCR: **58.0%** (BenchmarkList, #147/378)
- AA-Omniscience: **-22.63** (BenchmarkList, #137/351)
- CritPt: **2.6%** (BenchmarkList, #95/355)

Coding:

- Coding public-lane (BenchLM): Coming soon
- SciCode: **35.4%** (BenchmarkList, #240/436)
- KernelBench Hard: **83.3%** (BenchmarkList, #10/10)
- AA Coding Index: **45.3%** (Tokenator, Artificial Analysis)
- SWE-bench: not reported
- LiveCodeBench: not reported

Long context:

- 1M window; AA-LCR **58.0%** (BenchmarkList); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 56/100.** GDPval-AA 1022 (#71/332), τ³-Banking 12.8%, Terminal-Bench 2.1 50.2%, AA Agentic 14%; caps at τ³-Banking 12.8%.
- **Reasoning: 60/100.** GPQA 78.0%, HLE 32.1%, AA Intelligence 33.48, AA-LCR 58.0%, CritPt 2.6%; caps at CritPt 2.6%.
- **Context window: 72/100.** 1M window; AA-LCR 58.0%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 58/100.** SciCode 35.4%, AA Coding 45.3%, KernelBench Hard 83.3%; caps at SciCode 35.4%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 57.2/100.** Mean of five quality dims (BenchLM not computed, AA Intelligence 33.48); best-fit for free open-weight at zero cost. Low-confidence (0W/39L/1T vs frontier).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meituan official, BenchmarkList, Tokenator, BenchLM, LMSpeed); scores are normalized 1–100 interpretations, not official vendor scores. No verified public benchmarks from official sources; all from third-party aggregators.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (LongCat 2.0 has third-party benchmarks but no official ones; not excluded.)