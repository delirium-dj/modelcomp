# GLM-5.3-FlashX — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-5.3-FlashX (`glm-5.3-flashx`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's high-speed GLM-5.3-Flash serving option (released 2026-09-18) for coding and agent workflows — the same Flash weights sold at a higher price for a faster serving tier, not a different checkpoint.
- **Provider / access:** Z.ai API (`glm-5.3-flashx`), OpenRouter (`z-ai/glm-5.3-flashx`), Vercel AI Gateway, LLM Gateway, ZenMux, plus ~10 routes.
- **Release / knowledge:** 2026-09-18 (models.dev); knowledge cutoff not published.
- **IDs:** `glm-5.3-flashx`, `z-ai/glm-5.3-flashx`, `zai-org/GLM-5.3-FlashX`, `opencode-go/glm-5.3-flashx`.
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** text, image, video and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.37 / $1.25 per 1M input/output; cache read $0.075 — roughly 2.5× the plain Flash rate for the faster lane.
- **Architecture:** open-weight MoE (same GLM-5.3-Flash weights, Z.ai).

### Raw benchmarks found

> BenchLM publishes no separate profile for the FlashX SKU (404 on `glm-5-3-flashx`); the figures below are the GLM-5.3-Flash rows, which is the same weight set. They are cited labelled with the measured ID.

Agent / tool use:

- Toolathlon-Verified: **78.4%** (measured on GLM-5.3-Flash)
- Terminal-Bench 2.1: **84.3%** (Vals **62.9%**); AutomationBench: **48.8%**; Terminal-Bench 4.1: **35.50%**
- Hermes Index: **35.0**; Hermes Bench: **68.9%**; Agents' Last Exam: **26.3%**; MazeBench: **0%**

Reasoning / knowledge:

- HLE with tools: **55.3%**; CharXiv Reasoning: **89.4%**
- OfficeQA Pro: **62.4%**; ParseBench: **70.55%**; ExtractBench: **80.75%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench (Vals AI): **92.0%**; LiveCodeBench (Vals AI): **80.5%**; VulcanBench v3: **81.2%**
- DeepSWE: **63.4%**; NL2Repo: **56.3%**; OpenHarmony Bench v1.0: **57.3%**
- FrontierSWE v2: **18.1%**; CursorBench 4.0: **36.8%**; Bug Hunt Bench: **17.7 fixes**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon 78.4% and TB2.1 84.3% are good, AutomationBench 48.8% decent; TB4.1 35.5% and Hermes 35.0 show it is not a modern-harness agent.
- **Reasoning: 72/100.** HLE 55.3% with tools is mid-tier; CharXiv 89.4% is strong for document reasoning, but no GPQA/ARC/FrontierMath rows exist.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, video and PDF in with CharXiv 89.4% proving chart reasoning; no public video row.
- **Coding: 78/100.** SWE-bench (Vals) 92.0% is excellent for the price and DeepSWE 63.4% decent, but FrontierSWE v2 18.1% and CursorBench 36.8% cap agentic coding.
- **Cost efficiency: 85/100.** $0.37/$1.25 per 1M is 2.5× the plain Flash rate for the same weights — you pay for throughput, not quality.
- **Overall Score: 82.6/100.** Best fit for latency-sensitive high-volume GLM-5.3-Flash workloads; choose plain `glm-5.3-flash` unless the faster lane is required.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Z.ai model docs, BenchLM GLM-5.3-Flash profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3-Flash — Z.ai](https://z.ai/blog/glm-5.3-flash)
  - [GLM-5.3-Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/glm-5-3-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GLM_5.3_FlashX_v2.md`, using the same headings.