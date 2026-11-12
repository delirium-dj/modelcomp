# GLM-5.1 — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-5.1 (`glm-5.1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.ai's GLM coding model (released 2026-04-07) for agentic engineering, terminals and repository generation. `glm-5.1-coding` is a retired dataset label of this model — never a second folder.
- **Provider / access:** Z.ai API (`glm-5.1`), OpenRouter (`z-ai/glm-5.1`), plus ~43 routes.
- **Release / knowledge:** 2026-04-07; knowledge cutoff not published.
- **IDs:** `glm-5.1`, `z-ai/glm-5.1`, `zai-org/GLM-5.1`.
- **Context window:** 200,000 tokens; max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.40 / $4.40 per 1M input/output; cache read $0.26.
- **Architecture:** open-weight MoE (Z.ai; undisclosed size).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **71.8%**; BrowseComp: **68%**; Terminal-Bench 2.0: **63.5%**
- Terminal-Bench 4.x / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for GLM-5.1
- BenchLM ranks Instruction Following as its strongest category (#7)

Coding:

- LiveCodeBench (Vals AI): **81.4%**; SWE-bench (Vals AI): **76.4%**; SWE-Rebench: **62.7%**
- SWE-bench Pro: **58.4%**; NL2Repo: **42.7%**; OpenHarmony Bench v1.0: **52.3%**; Vibe Code Bench v1.1: **31.46%**

Long context:

- 200K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 71.8% and TB2.0 63.5% are mid, BrowseComp 68% decent; no modern-harness row was published.
- **Reasoning: 65/100.** No public reasoning benchmark exists for GLM-5.1; the score is derived from its #7 instruction-following rank — low confidence.
- **Context window: 65/100.** 200,000 tokens with 131,072 max output — the smallest window in the GLM line.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 78/100.** LiveCodeBench 81.4% and SWE-bench (Vals) 76.4% are good for an open model, SWE-Rebench 62.7% mid; Vibe Code Bench 31.5% is weak.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M with open weights.
- **Overall Score: 59.0/100.** Best fit for self-hosted text coding at 200K; the text-only modality and small window put it well behind GLM-5.3-Flash.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Z.ai GLM-5.1 docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.1 — Z.ai / Hugging Face](https://huggingface.co/zai-org/GLM-5.1)
  - [GLM-5.1 benchmarks & sources — BenchLM](https://benchlm.ai/models/glm-5-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GLM_5.1_v2.md`, using the same headings.