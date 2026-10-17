# Muse Spark 1.1 — findings by Beam

- Source: Meta/Muse Spark 1.1, `meta/muse-spark-1.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's upgraded Muse Spark (Jul 9, 2026) with major gains in tool/computer use, coding, multimodal understanding; 1M context; multi-agent orchestration; context compaction. Successor to Muse Spark 1.0.
- **Provider / access:** Meta Model API `muse-spark-1.1` (public preview); Meta AI app.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not stated.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** Not published (N/A on BenchLM); paid (proprietary).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **58.6** (#33/128)
- Terminal-Bench 2.1: **80.0%**
- MCP Atlas: **88.1%**
- Toolathlon: **75.6%**
- OSWorld-Verified: **80.8%**
- OSWorld 2.0: **14.2%**
- JobBench: **54.7%**
- Cybench: **92.9%**
- ExploitGym: **0.8%**
- GDPval-AA: **1375 Elo** / 35.6% (AA)
- AA Agentic Index: **27.5%**
- Terminal-Bench 2.1 (Vals): **69.3%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **79.2** (unranked, 3 rows)
- HLE: **62.1%**
- HLE w/o tools: **52.2%**
- HealthBench Professional: **59.3%**
- AA Intelligence Index: **33.7**
- AA-GPQA Diamond: **89.8%**
- AA-HLE: **46.2%**
- AA-Omniscience Index: **28.1%**
- MRCR 1M: **54.1%**

Coding:

- Coding public-lane (BenchLM): **52.7** (#39/150)
- Terminal-Bench 2.1: **80.0%**
- SWE-bench Pro: **61.5%**
- LiveCodeBench (Vals): **85.9%**
- SWE-bench (Vals): **82.0%**
- DeepSWE: not reported for 1.1 (59.3% for 1.2)

Long context:

- 1M window; MRCR 1M 54.1%.

Multimodal:

- Multimodal public-lane (BenchLM): **81.9** (unranked, 2 rows)
- CharXiv: **88.4%**
- BabyVision: **76.3%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic lane #33/128 (58.6), Terminal-Bench 2.1 80.0%, MCP Atlas 88.1%, OSWorld 80.8%, Cybench 92.9%, JobBench 54.7%; caps at OSWorld 2.0 14.2%.
- **Reasoning: 78/100.** HLE 62.1%, AA-GPQA 89.8%, AA Intelligence 33.7, MRCR 1M 54.1%; caps at HLE w/o tools 52.2%.
- **Context window: 80/100.** 1M window; MRCR 1M 54.1% caps higher.
- **Multimodal: 84/100.** Text/image/video/PDF in; CharXiv 88.4%, BabyVision 76.3%.
- **Coding: 74/100.** SWE-bench Pro 61.5%, LiveCodeBench Vals 85.9%, SWE-bench Vals 82.0%, coding lane #39/150 (52.7); caps at Terminal-Bench 2.1 80.0%.
- **Cost efficiency: 70/100.** Pricing not published (N/A); proprietary.
- **Overall Score: 79/100.** Mean of five quality dims (BenchLM aggregate 66.02); best-fit for agentic coding + multimodal at unknown cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meta AI blog, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.