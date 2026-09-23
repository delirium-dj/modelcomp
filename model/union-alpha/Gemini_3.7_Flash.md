# Union Alpha — findings by Gemini 3.7 Flash

- Source: Union AI (`union/union-alpha`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Enterprise orchestrator model tailored for multi-agent workflows, data pipelines, and workflow automation.
- **Provider / access:** Union Platform API (`union/union-alpha`), OpenCode Zen (`opencode/union-alpha`).
- **Release / knowledge:** 2026-03-22 release; knowledge cutoff January 2026.
- **IDs:** `union/union-alpha`, `opencode/union-alpha`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text in; text out; tool use, DAG orchestration schema mode.
- **Pricing (as of 2026-09-20):** $0.50 / $1.50 per 1M tokens ($0.25 cached).
- **Architecture:** Transformer fine-tuned on pipeline graphs and orchestration traces (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%**
- Tau3-Banking / Tau2-Bench: **75.0%**
- GDPval-AA: **1275**
- Claw-Eval / ClawProBench: **71.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **64.5%**
- HLE: **24.5%**
- LCR / MLCR: **78.5%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **102 / #16**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.5%**
- LiveCodeBench: **45.0%**
- SciCode / AA-SciCode: **67.0%**
- Vibe Code Bench: **72.5%**
- DeepSWE / Coding Index / other: **66.5**

Long context:

- MRCR 256k needle retrieval 98.0%; RULER benchmark 93.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong structured DAG generation and tool dispatch, capped on interactive terminal execution.
- **Reasoning: 78/100.** Solid workflow planning and system logic, capped on abstract science.
- **Context window: 86/100.** 256k context tailored for data pipeline logs and schema definitions.
- **Multimodal: 74/100.** Text-only model with external schema visualization parsers.
- **Coding: 76/100.** Good Python, SQL, and data engineering script generation.
- **Cost efficiency: 88/100.** Fair enterprise pricing for pipeline automation.
- **Overall Score: 78.0/100.** Specialized workflow orchestration and data engineering assistant.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
