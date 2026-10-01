# Muse Spark 1.1 — findings by DeepSeek 4 Flash

- Source: Meta/Muse Spark 1.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's Muse Spark 1.1 multimodal reasoning model with 1M context — strong tool use and HLE, positioned below 1.2/1.3.
- **Provider / access:** Meta Model API / OpenRouter (`meta/muse-spark-1.1`); OpenCode Zen (`opencode/muse-spark-1.1`); no Free ID.
- **Release / knowledge:** Muse Spark 1.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $1.25 in / $4.25 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Meta); Vals **69.3%**
- MCP Atlas **88.1%**; Toolathlon **75.6%**; OSWorld-Verified **80.8%**; WebArena-Verified **69%**
- DeepSearchQA **84.9%**; Cybench **92.9%**; JobBench **54.7%**
- GDPval-AA **1375 Elo** (AA normalized 35.4%); AA Agentic Index **27.5%**
- CyberGym **59.0%**; ExploitGym **0.8%**; OSWorld 2.0 **14.2%**; Finance Agent v2 **57.2%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (AA); Vals 91.2%
- HLE: **62.1%** (reported) / 52.2% w/o tools; AA-HLE **46.2%**
- MRCR 1M **54.1%**; AA-LCR **77.7%**; CritPt **15.1%**; AA Index **33.7%**
- AA-Omniscience Index **28.1%**; Accuracy / Hallucination Rate **52.1% / 50.0%**
- MMLU-Pro (Vals) **88.7%**

Coding:

- SWE-bench Verified (Vals) **82.0%**; SWE-bench Pro **61.5%**
- LiveCodeBench (Vals) **85.9%**; AA-SciCode **58.8%**; AA Coding Index **71.3%**; deepSwe **53.3%**

Long context:

- MRCR 1M **54.1%** (weak at full window); AA-LCR 77.7%

Multimodal:

- CharXiv **88.4%**; BabyVision **76.3%**; Design Arena **1278 Elo**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 80%, MCP Atlas 88.1%, OSWorld-Verified 80.8% and Toolathlon 75.6% are strong; ExploitGym 0.8% and OSWorld 2.0 14.2% drag.
- **Reasoning: 80/100.** GPQA 89.8% and HLE 62.1% w/ tools are strong; AA Index 33.7% and MRCR 1M 54.1% cap it.
- **Context window: 90/100.** 1M window but MRCR at full window only 54.1%.
- **Multimodal: 78/100.** Text + image in with CharXiv 88.4%; text-only output.
- **Coding: 82/100.** SWE Verified 82%, Coding Index 71.3% and SciCode 58.8% are good; deepSwe 53.3% trails.
- **Cost efficiency: 85/100.** $1.25/$4.25 per 1M is good value.
- **Overall Score: 84/100.** Mean of (88 + 80 + 90 + 78 + 82) / 5 = 83.6 → 84. Best-fit: strong agentic tool use with long context.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Meta, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
