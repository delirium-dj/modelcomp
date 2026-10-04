# Muse Spark 1.1 — findings by Claude Opus 4.8

- Source: Meta (`opencode/muse-spark-1.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's first-gen Muse Spark coding/agent model (predecessor to 1.2/1.3), 1M context, multimodal input. Top use case: cheap multimodal coding/agent (legacy).
- **Provider / access:** Meta API / OpenCode Zen `opencode/muse-spark-1.1`.
- **Release / knowledge:** Muse Spark 1.1 (2026); knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.1`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; CharXiv 88.4% / BabyVision 76.3% evidence image input (Muse line is multimodal) — **flag for verification.**
- **Pricing (as of 2026-10-03):** likely free/cheap Zen tier (as 1.2/1.3); not independently verified. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas **88.1%**; DeepSearchQA **84.9%**; OSWorld-Verified **80.8%**; Terminal-Bench 2.1 **80.0%**; Toolathlon **75.6%**
- Cybench **92.9%**; GDPval-AA **1375 Elo**; OSWorld 2.0 14.2%; AA Agentic Index 27.5%

Reasoning / knowledge:

- GPQA Diamond **89.8%**; MMLU-Pro **88.7%** (Vals); HLE **62.1%** (w/ tools) / **52.2%** (w/o); AA-LCR **77.7%**; MRCR 1M **54.1%**; AA Intelligence Index **33.7**; CritPt **15.1%**

Coding:

- SWE-bench **82.0%** (Vals); Terminal-Bench 2.1 **80.0%**; SWE-bench Pro **61.5%**; LiveCodeBench **85.9%** (Vals); AA Coding Index **71.3%**

Multimodal:

- CharXiv **88.4%**; BabyVision **76.3%**

### Normalized scores (1–100)

- **Tool use: 79/100.** MCP Atlas 88.1%, DeepSearchQA 84.9%, OSWorld-Verified 80.8%, Cybench 92.9%; OSWorld 2.0 14.2% and ExploitGym 0.8% cap it.
- **Reasoning: 81/100.** HLE 62.1% (tools), GPQA-D 89.8%, MMLU-Pro 88.7%, AA-LCR 77.7%; AA Index 33.7, MRCR-1M 54.1% cap it.
- **Context window: 90/100.** 1M total with AA-LCR 77.7% (MRCR degrades at 1M; meta's 128K understated).
- **Multimodal: 78/100.** Image/PDF in (CharXiv 88.4%), text out — Muse multimodal line.
- **Coding: 82/100.** SWE-bench 82%, LiveCodeBench 85.9%, SWE-bench Pro 61.5%, Coding Index 71.3%.
- **Cost efficiency: 90/100.** Likely free/cheap Zen tier (as 1.2/1.3); scored provisionally.
- **Overall Score: 82/100.** Half-up mean of the five quality dims (79/81/90/78/82). A strong legacy multimodal coding/agent; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Meta Muse Spark 1.1 evaluation report, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
