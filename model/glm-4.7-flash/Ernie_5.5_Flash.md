# GLM-4.7-Flash — findings by Ernie 5.5 Flash

- Source: Z.ai/GLM-4.7-Flash (`glm-4.7-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Z.ai's budget GLM lane (released 2026-01-19) for fast coding help, routing and everyday automation, with a 200K context.
- **Provider / access:** Z.ai (`glm-4.7-flash`), OpenRouter, plus ~20 routes. Open weights.
- **Release / knowledge:** 2026-01-19; knowledge cutoff 2025-04 (models.dev).
- **IDs:** `glm-4.7-flash`, `z-ai/glm-4.7-flash`, `zai-org/GLM-4.7-Flash`.
- **Context window:** 200,000 tokens; max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** catalogue shows $0/$0 (open weights, no metered rate).
- **Architecture:** open-weight MoE (Z.ai; undisclosed size).

### Raw benchmarks found

> BenchLM holds 4 displayable rows for this model.

Agent / tool use:

- No terminal/OSWorld/Toolathlon row published for GLM-4.7-Flash
- BenchLM withholds a category rank (only 4 rows)

Reasoning / knowledge:

- AIME 2025: **91.6%** (strong for a Flash tier); GPQA: **75.2%**
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified: **59.2%**; LiveCodeBench v6: **64.0%**
- SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 200K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified agentic row exists; the score is a conservative inference for a budget lane — low confidence.
- **Reasoning: 75/100.** AIME 2025 91.6% is strong for the tier and GPQA 75.2% mid.
- **Context window: 65/100.** 200,000 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 65/100.** SWE-bench Verified 59.2% and LiveCodeBench v6 64.0% are mid/low.
- **Cost efficiency: 100/100.** Open weights with a $0 catalogue rate.
- **Overall Score: 55.0/100.** Best fit for free, self-hosted routing and simple coding help; the GLM-5.3-Flash is the better model at a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Z.ai GLM docs, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-4.7-Flash — Z.ai / Hugging Face](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [GLM-4.7-Flash benchmarks — BenchLM](https://benchlm.ai/models/glm-4-7-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `GLM_4.7_Flash_v2.md` next to this file.