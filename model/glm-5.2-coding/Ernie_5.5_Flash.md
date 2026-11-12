# GLM-5.2 Coding — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-5.2 (coding label) (`glm-5.2-coding`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Coding)
- **Short description:** The coding-positioned label of Z.ai's open flagship GLM-5.2 (released 2026-06-13) for long-horizon coding agents and million-token context work. Per the repo's `-coding` identity rule, this is a dataset label for the GLM-5.2 weights, not a separate SKU.
- **Provider / access:** Z.ai API (`glm-5.2`), OpenRouter (`z-ai/glm-5.2`), Mistral router (`mistral/zai-glm-5-2`), OpenCode Go, NVIDIA NIM (free), plus ~91 routes. Open weights.
- **Release / knowledge:** 2026-06-13; knowledge cutoff not published.
- **IDs:** `glm-5.2-coding`, `glm-5.2`, `z-ai/glm-5.2`, `zai-org/GLM-5.2`.
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text in / text out only (models.dev); reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.40 / $4.40 per 1M input/output; cache read $0.14.
- **Architecture:** open-weight MoE (Z.ai; undisclosed size).

### Raw benchmarks found

> No benchlm profile exists for the `-coding` label (404). The rows below are the GLM-5.2 measurements, cited labelled with the measured ID — same weights, different dataset label.

Agent / tool use:

- MCP Atlas: **76.8%**; Terminal-Bench 2.1: **81.0%** (Vals AI **67.8%**); Toolathlon: **48.2%**
- Terminal-Bench 3.0: **4.6%** (near-floor on the newer harness)
- Terminal-Bench 4.x / OSWorld: no verified public rows published

Reasoning / knowledge:

- HLE with tools: **54.7%**; ProgramBench: **63.7%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for GLM-5.2
- BenchLM ranks Mathematics as its strongest category (#3)

Coding:

- SWE-bench (Vals AI): **82.8%**; SWE-bench Pro: **62.1%**; LiveCodeBench (Vals AI): **69.5%**
- NL2Repo: **48.9%**; OpenHarmony Bench v1.0: **58.4%**; PostTrainBench v1.1: **31.7%**; CursorBench 3.2: **55.0%**
- DeepSWE / FrontierSWE: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 76.8% and TB2.1 81.0% are good, Toolathlon 48.2% mid; Terminal-Bench 3.0 at 4.6% is a near-floor outlier on the newer harness.
- **Reasoning: 75/100.** HLE 54.7% with tools is mid-frontier and ProgramBench 63.7% decent; no GPQA/ARC/FrontierMath row was published.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out) — unlike GLM-5.3-Flash, which is natively multimodal.
- **Coding: 80/100.** SWE-bench (Vals) 82.8% is strong for open weights, SWE-bench Pro 62.1% decent, LiveCodeBench 69.5% mid, PostTrainBench 31.7% weak.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M with open weights and a free NIM route.
- **Overall Score: 69.6/100.** Best fit for self-hosted text coding at 1M context; the text-only modality keeps it well below GLM-5.3-Flash, which is the better default.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Z.ai GLM-5.2 docs, BenchLM GLM-5.2 profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.2 — Z.ai / Hugging Face](https://huggingface.co/zai-org/GLM-5.2)
  - [GLM-5.2 benchmarks & sources — BenchLM](https://benchlm.ai/models/glm-5-2)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GLM_5.2_Coding_v2.md`, using the same headings.