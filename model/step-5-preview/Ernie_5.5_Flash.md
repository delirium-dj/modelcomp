# Step 5 Preview — findings by Ernie 5.5 Flash

- Source: StepFun/Step 5 Preview (`step-5-preview`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's next-generation flagship base model (released 2026-09-16) for coding and professional knowledge work, with native text, image and video input and a 1M-token context.
- **Provider / access:** NVIDIA NIM (`nvidia/stepfun-ai/step-5-preview`, free), StepFun API (`stepfun/step-5-preview`), OpenRouter, OpenCode Go, DeepInfra, Empirio Labs, plus ~18 routes. Open weights.
- **Release / knowledge:** 2026-09-16 (models.dev); knowledge cutoff not published.
- **IDs:** `step-5-preview`, `stepfun-ai/step-5-preview`, `stepfun/step-5-preview`, `opencode-go/step-5-preview`.
- **Context window:** 1,048,576 tokens (1M), with 1,048,576 in and out declared on the NVIDIA route.
- **Modalities:** text, image (and video per the model description) in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.00 / $2.70 per 1M input/output on StepFun/OpenRouter; the NVIDIA NIM route is free (rate-limited).
- **Architecture:** open-weight MoE (StepFun; preview checkpoint).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **85.6%**; Terminal-Bench 2.1: **85.0%**; Toolathlon-Verified: **74.1%**
- BrowseComp: **88.7%**; DRACO (data research): **83.3%**; AutomationBench: **44.0%**; JobBench: **59.0%**
- Terminal-Bench 4.0: **33.30%**; Hermes Index: **32.8**; Hermes Bench: **69.2%**; Agents' Last Exam: **29.5%**; APEX-Agents: **37.8%**; CyberGym: **84.7%**

Reasoning / knowledge:

- MLS-Bench Lite: **40.5%**; CritPt: **20.9%**
- MMMU-Pro: **76%** (multimodal)
- HLE / GPQA Diamond / ARC-AGI: no verified public rows published

Coding:

- DeepSWE: **67.7%**; SciCode: **58.9%**; ProgramBench: **80.5%**; sweMarathon: **72.7%**
- Terminal-Bench 2.1: **85.0%**; Terminal-Bench 4.0: **33.3%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 85.6%, TB2.1 85.0% and Toolathlon 74.1% are strong, BrowseComp 88.7% excellent, DRACO 83.3% good; TB4.0 33.3% and Agents' Last Exam 29.5% cap it.
- **Reasoning: 70/100.** MLS-Bench Lite 40.5% and CritPt 20.9% are the only verified reasoning rows and both are weak; no GPQA/HLE/ARC publication.
- **Context window: 100/100.** 1,048,576 tokens with a 1M declared output.
- **Multimodal: 78/100.** Text, image (and video per the vendor) in with MMMU-Pro 76%; no public video benchmark row.
- **Coding: 80/100.** DeepSWE 67.7% and sweMarathon 72.7% are decent, ProgramBench 80.5% good, SciCode 58.9% mid; no SWE-bench row was published.
- **Cost efficiency: 88/100.** $1/$2.70 per 1M with a free NIM route and open weights — strong value for a 1M-context model.
- **Overall Score: 82/100.** Best fit for self-hosted long-context agent work and research browsing; verify reasoning quality before trusting it on math-heavy tasks.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (StepFun model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Step 5 Preview — StepFun / Hugging Face](https://huggingface.co/stepfun-ai/Step-5-Preview)
  - [Step 5 Preview benchmarks & sources — BenchLM](https://benchlm.ai/models/step-5-preview)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.