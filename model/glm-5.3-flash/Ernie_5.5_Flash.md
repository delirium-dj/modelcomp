# GLM-5.3-Flash — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-5.3-Flash (`glm-5.3-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's native multimodal GLM model (released 2026-08-26) for efficient coding and long-horizon agent tasks, with published weights and a very low price.
- **Provider / access:** Z.ai API (`glm-5.3-flash`), OpenRouter (`z-ai/glm-5.3-flash`), OpenCode Go (`opencode-go/glm-5.3-flash`), NVIDIA NIM (free, rate-limited), Munito, Empirio Labs, plus ~86 routes. Open weights (self-hostable).
- **Release / knowledge:** 2026-08-26 (models.dev); knowledge cutoff not published.
- **IDs:** `glm-5.3-flash`, `z-ai/glm-5.3-flash`, `zai-org/glm-5.3-flash`, `opencode-go/glm-5.3-flash`.
- **Context window:** 1,048,576 tokens (1M); max output 131,072.
- **Modalities:** text, image, video and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.15 / $0.50 per 1M input/output; cache read $0.03. The NVIDIA NIM route is free (rate-limited).
- **Architecture:** open-weight MoE (Z.ai / Zhipu; config in the Hugging Face repo).

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **78.4%**; Terminal-Bench 2.1: **84.3%** (Vals **62.9%**)
- AutomationBench: **48.8%**; Terminal-Bench 4.1: **35.50%**; Hermes Index: **35.0**; Hermes Bench: **68.9%**
- Agents' Last Exam: **26.3%**; MazeBench: **0%**

Reasoning / knowledge:

- HLE with tools: **55.3%**
- CharXiv Reasoning: **89.4%**; OfficeQA Pro: **62.4%**; ParseBench: **70.55%**; ExtractBench: **80.75%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench (Vals AI): **92.0%**; LiveCodeBench (Vals AI): **80.5%**; VulcanBench v3: **81.2%**
- DeepSWE: **63.4%**; NL2Repo: **56.3%**; OpenHarmony Bench v1.0: **57.3%**
- FrontierSWE v2: **18.1%**; CursorBench 4.0: **36.8%**; Bug Hunt Bench: **17.7 fixes**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon 78.4% and TB2.1 84.3% are good, AutomationBench 48.8% decent; TB4.1 35.5% and Hermes 35.0 show it is not a modern-harness agent.
- **Reasoning: 72/100.** HLE 55.3% with tools is mid-tier; CharXiv 89.4% and ExtractBench 80.75% show strong document work, but no GPQA/ARC/FrontierMath rows exist.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, video and PDF in with CharXiv 89.4% proving genuine chart reasoning; no public video row.
- **Coding: 78/100.** SWE-bench (Vals) 92.0% is excellent for the price and DeepSWE 63.4% decent, but FrontierSWE v2 18.1% and CursorBench 36.8% cap agentic coding.
- **Cost efficiency: 97/100.** $0.15/$0.50 per 1M with $0.03 cache reads and a free NIM endpoint — the cheapest capable open-weight route in this dataset.
- **Overall Score: 82.6/100.** Best fit for cost-dominated high-volume coding and document/multimodal work; verify long-context behaviour before relying on the 1M window.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Z.ai model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3-Flash — Z.ai / Hugging Face](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [GLM-5.3-Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/glm-5-3-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash_v2.md`, using the same headings.