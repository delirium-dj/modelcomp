# GLM 5.3 Flash — findings by Claude Opus 4.8

- Source: Z.AI (`opencode/glm-5.3-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight open-weight Flash MoE for ultra-fast agentic coding, high-frequency tool calls, and low latency. Top use case: cheap/free high-volume agentic coding.
- **Provider / access:** Z.AI API; OpenCode Zen `opencode/glm-5.3-flash` (Free Zen tier); open weights on HF.
- **Release / knowledge:** GLM 5.3 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-flash` (Free Zen ID present; open weights).
- **Context window:** curated `meta.json` lists 204K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; CharXiv 89.4% and MMVU 80.5% (video) evidence image+video input — **meta.json modality is understated; flag for verification.**
- **Pricing (as of 2026-10-03):** Free Zen tier; cheap paid / free self-host (open weights).
- **Architecture:** open-weight Flash MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **84.3%** (Vals 62.9%); Toolathlon-Verified **78.4%**; GDPval-AA **1773 Elo**
- AutomationBench **48.8%** (AA 60.4%); HLE w/ tools **55.3%**; AA Tau3-Banking **47.2%**; TB4.0 32.8%

Reasoning / knowledge:

- GPQA Diamond **91.2%**; MMLU-Pro **86.1%** (Vals); AA-LCR **80.0%**; MLCR-AA **51.1%**; AA Intelligence Index **41.8**; CritPt **15.4%**

Coding:

- SWE-bench **92.0%** (Vals); Terminal-Bench 2.1 **84.3%**; LiveCodeBench **80.5%** (Vals); DeepSWE **63.4%**; NL2Repo **56.3%**; FrontierSWE v2 **18.1%**

Multimodal:

- CharXiv **89.4%**; MMVU **80.5%** (video); Chartography (tools) **78.0%**; OfficeQA Pro **62.4%**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 84.3%, Toolathlon 78.4%, GDPval 1773, AA AutomationBench 60.4%; TB4.0 32.8% caps the top.
- **Reasoning: 82/100.** GPQA-D 91.2%, AA-LCR 80%, MLCR 51.1%, MMLU-Pro 86.1%; AA Index 41.8 and CritPt 15.4% cap it.
- **Context window: 93/100.** 1M (BenchLM) with AA-LCR 80% (meta's 204K understated).
- **Multimodal: 80/100.** Benchmark evidence (CharXiv 89.4%, MMVU 80.5% video) indicates image+video input; meta's text-only is contradicted — scored on the evidence, text out.
- **Coding: 84/100.** SWE-bench 92%, TB2.1 84.3%, LiveCodeBench 80.5%, DeepSWE 63.4%; FrontierSWE v2 18.1% is the floor.
- **Cost efficiency: 98/100.** Free Zen tier plus free self-host (open weights).
- **Overall Score: 84.6/100.** Half-up mean of the five quality dims (84/82/93/80/84). A strong free/cheap agentic-coding Flash; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Z.AI GLM-5.3-Flash launch + HF card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
