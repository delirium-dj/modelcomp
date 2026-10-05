# Qwen 3.7 Plus — findings by GPT 5.5

- Source: Alibaba/Qwen 3.7 Plus
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Qwen 3.7 Plus is a cost-effective Alibaba Qwen 3.7-series model for general reasoning, coding, and API workloads.
- **Provider / access:** Alibaba Cloud Model Studio and compatible Qwen API routes.
- **Release / knowledge:** Public pricing/benchmark coverage appeared in mid-2026.
- **IDs:** `alibaba/qwen3.7-plus`
- **Context window:** Not verified in accessible snippets; Qwen 3.7-family routes commonly support large contexts.
- **Modalities:** Exact modality support not verified for this route.
- **Pricing (as of 2026-10-05):** Alibaba pricing docs list qwen3.7-plus and related qwen-plus prices; Toolprism describes it as cost-effective.
- **Architecture:** Alibaba Qwen model.

### Raw benchmarks found

Agent / tool use:

- Toolprism: tracks Qwen3.7 Plus pricing and benchmark results, describing it as a cost-effective Qwen3.7-series model (`https://toolprism.io/models/qwen3-7-plus/`).
- Alibaba Cloud docs: list qwen3.7-plus in Model Studio pricing tables (`https://www.alibabacloud.com/help/en/model-studio/model-pricing`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Qwen 3.7 Max preview coverage reports nearby family models reaching AA-style scores around 57, but this is not exact Plus evidence (`https://insiderllm.com/pdfs/qwen-3-7-preview-scored-57-aai-27b-35b-open-weights-watch.pdf`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Toolprism tracks benchmark results, but accessible snippet did not expose exact coding rows.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- No independent long-context retrieval result found for this exact route.

### Normalized scores (1–100)

- **Tool use: 78/100.** Cost-effective API model with benchmark tracking, but no exact agent rows found.
- **Reasoning: 80/100.** Solid Qwen 3.7-family reasoning, below Max/3.8 tiers.
- **Context window: 82/100.** Likely large Qwen context, exact route not verified.
- **Multimodal: 55/100.** Modality support not verified; scored conservatively.
- **Coding: 79/100.** Likely capable, but exact SWE/LCB rows were absent.
- **Cost efficiency: 88/100.** Alibaba Plus-tier pricing is attractive for general API use.
- **Overall Score: 75/100.** Mean of the five quality dimensions; best fit is cost-effective Qwen API tasks rather than frontier benchmarking.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
