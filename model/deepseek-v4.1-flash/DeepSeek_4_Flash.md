# DeepSeek V4.1 Flash — findings by DeepSeek 4 Flash

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and class-leading Terminal-Bench 2.1 results at very low cost.
- **Provider / access:** DeepSeek API / OpenRouter (`deepseek/deepseek-v4.1-flash`); open weights (MIT); no Zen Free ID.
- **Release / knowledge:** V4.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,048,576 (1M) input / 384K output — verified from OpenRouter and curated metadata.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.03 in / $0.50 out per 1M (OpenRouter); curated list $0.30/$1.20.
- **Architecture:** open-weights 552B-parameter MoE (MIT), multimodal input.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek); Vals **74.5%**; Terminal-Bench 4.0 **31.2%** (AA 26.8%); terminalBench3 **30%**
- CyberGym **88.1%**; ExploitGym **15.3%**; CWE-bench v1 **55.0%**
- HLE w/ tools **63.9%**; AutomationBench **54.8%** (AA 68.9%); Agents' Last Exam **31.8%**
- GDPval-AA: **1600 Elo** (AA); AA Briefcase **1426**; AA ITBench **46.9%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek)
- HLE: **36.8%** (AA 39.2%)
- AA-LCR **84.0%**; CritPt **14.3%**; MLCR-AA **22.8%**; AA Index **39.5%**
- AA-Omniscience Accuracy / Hallucination Rate: **46.4% / 96.5%**
- Codeforces rating **3471**; Apex **65.6%**

Coding:

- Terminal-Bench 2.1 **90.6%**; DeepSWE **74.2%**; NL2Repo **65.4%**
- AA-SciCode **51.9%**; ProgramBench **20.3%**; OpenHarmony Bench **60.3%**

Long context:

- AA-LCR 84.0%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **77.0%**; Chartography (tools) **78.9%**; BabyVision w/ Python **89.6%**; ZeroBench w/ Python **49.0%**

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 2.1 90.6%, CyberGym 88.1%, HLE w/ tools 63.9% and GDPval 1600 are frontier; ExploitGym 15.3% caps it.
- **Reasoning: 80/100.** GPQA 90.9%, LCR 84% and Codeforces 3471 are strong; HLE 36.8% and a 96.5% hallucination rate are the limits.
- **Context window: 97/100.** 1M input / 384K output with AA-LCR 84%.
- **Multimodal: 78/100.** Text + image in with MMMU-Pro 77%; text-only output.
- **Coding: 88/100.** TB 2.1 90.6%, DeepSWE 74.2% and NL2Repo 65.4% are strong; SciCode 51.9% and ProgramBench 20.3% trail.
- **Cost efficiency: 97/100.** $0.03/$0.50 per 1M (OpenRouter) is among the cheapest frontier-adjacent pricing.
- **Overall Score: 87/100.** Mean of (92 + 80 + 97 + 78 + 88) / 5 = 87.0 → 87. Best-fit: input-heavy agentic/terminal coding at minimal cost.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, DeepSeek, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
