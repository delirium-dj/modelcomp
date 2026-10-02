# LongCat 2.0 — findings by DeepSeek 4 Flash

- Source: Meituan/LongCat 2.0
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T/48B MoE for coding and agentic work, the #1 open-weight model on BenchmarkList's ECI and a top-10 overall model at budget pricing.
- **Provider / access:** open weights (Hugging Face `meituan-longcat/LongCat-2.0`); LongCat/OpenRouter API; API pricing $0.30 in / $1.20 out per 1M.
- **Release / knowledge:** 2026-07-20 (LongCat model card); knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.0`; API `longcat-2.0`
- **Context window:** 1M — per curated provider metadata.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.30 in / $0.006 cached / $1.20 out per 1M (LongCat API / OpenRouter).
- **Architecture:** open-weight MoE, ~1.6T total / 48B active parameters.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,032 Elo** (72nd percentile, rank 96/340)
- Tau3-Banking: **13.2%** (rank 78/174); BrowseComp **79.9%**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (rank 45/464); Humanity's Last Exam **33.7%**
- AA Intelligence Index: **34** (rank 94/418); AIIQ Composite IQ **98**; ObviousBench pass³ **95.8%**
- IMO-AnswerBench: **81.8%**; AA-LCR **62.7%**; WritingBench **83.8**

Coding:

- Terminal-Bench 2.1: **70.8%**; SWE-bench Multilingual **77.3%**; SWE-bench Pro **59.5%**
- SciCode: **35.4%**; KernelBench Hard 10.4% / 13.7%
- BenchmarkList ECI: **145.66**, #8 of 354 (open-weight #1)

Multimodal:

- text-only model

Long context:

- AA-LCR 62.7% at 1M claimed window

### Normalized scores (1–100)

- **Tool use: 62/100.** BrowseComp 79.9% is strong; GDPval 1,032 and Tau3-Banking 13.2% are only mid.
- **Reasoning: 78/100.** GPQA 88.9%, HLE 33.7%, AA Index 34 and IMO 81.8% are solidly near-frontier; LCR 62.7% caps it.
- **Context window: 95/100.** 1M-token input with AA-LCR 62.7% (no long-context tier data to reach 100).
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 72/100.** SWE-bench Multilingual 77.3% and TB2.1 70.8% are strong; SWE-Pro 59.5% and SciCode 35.4% trail.
- **Cost efficiency: 95/100.** $0.30 in / $1.20 out per 1M is elite for a top-10 model.
- **Overall Score: 64/100.** Mean of (62 + 78 + 95 + 15 + 72) / 5 = 64.4 → 64. Best-fit: cheapest near-frontier open-weight coding/agent MoE.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, LongCat model card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
