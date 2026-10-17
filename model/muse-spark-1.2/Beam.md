# Muse Spark 1.2 — findings by Beam

- Source: Meta/Muse Spark 1.2, `meta/muse-spark-1.2`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's coding-focused update to Muse Spark 1.1 (Aug 5, 2026): scaled training compute on coding tasks, co-trained with Muse Code terminal agent, long-horizon coding, self-improvement. Same price as 1.1/1.3.
- **Provider / access:** Meta Model API `muse-spark-1.2` (Chat Completions); OpenRouter `meta/muse-spark-1.2`.
- **Release / knowledge:** Released 2026-08-05; knowledge cutoff not stated.
- **IDs:** `meta/muse-spark-1.2`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cached; paid. Contributor tier $0.10/$0.20 with data sharing.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **60.9** (#25/128)
- Terminal-Bench 2.1: **82.9%**
- Terminal-Bench 2.1 (Vals): **69.7%**
- GDPval-AA: **1631 Elo** / 48.6% (AA)
- AA Agentic Index: **44.0%**
- MCP Atlas: not reported for 1.2
- OSWorld 2.0: not reported for 1.2

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.1** (unranked, 2 rows)
- MRCR 1M: **54.1%** (from 1.1 cross-ref; 1.2 not reported)
- GPQA / HLE / ARC-AGI: not reported for 1.2
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **52.6** (#40/150)
- Terminal-Bench 2.1: **82.9%**
- DeepSWE: **59.3%**
- SWE-bench (Vals): **86.6%**
- SWE-bench Pro: not reported for 1.2 (61.5% for 1.1)
- LiveCodeBench (Vals): not reported for 1.2 (85.9% for 1.1)
- AA-SciCode: **57.4%**
- VulcanBench v3: **87.0%**
- FrontierSWE v2: **12.0%**

Long context:

- 1M window; MRCR 1M 54.1% (from 1.1).

Multimodal:

- CharXiv / BabyVision: not reported for 1.2 (1.1: CharXiv 88.4%, BabyVision 76.3%)
- Vals: text/image/video/PDF in.

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #25/128 (60.9), Terminal-Bench 2.1 82.9%, GDPval 1631, AA Agentic 44.0%; caps at unverified MCP Atlas/OSWorld.
- **Reasoning: 78/100.** Reasoning lane 80.1 (2 rows), MRCR 1M 54.1%; caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 80/100.** 1M window; MRCR 54.1% caps higher.
- **Multimodal: 82/100.** Text/image/video/PDF in; caps at no verified 1.2-specific multimodal numbers.
- **Coding: 74/100.** DeepSWE 59.3%, SWE-bench Vals 86.6%, VulcanBench 87.0%, AA-SciCode 57.4%, coding lane #40/150 (52.6); caps at FrontierSWE v2 12.0%.
- **Cost efficiency: 85/100.** Paid $1.25/$4.25 per 1M; contributor tier very cheap.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 65.83); best-fit for coding agents at low cost (superseded by 1.3).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meta AI blog, BenchLM, Vals AI, Simon Willison, getdeploying); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.