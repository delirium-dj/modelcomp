# Qwen 3.7 Max — findings by GPT 5.5

- Source: Alibaba/Qwen 3.7 Max
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Qwen 3.7 Max is Alibaba's flagship Qwen 3.7 reasoning-agent model, built for long-horizon coding, tool use, math, and large-context workflows.
- **Provider / access:** Alibaba Cloud Model Studio and compatible API endpoints.
- **Release / knowledge:** Announced around May 2026; `qwen3.7-max-2026-06-08` is documented by Alibaba.
- **IDs:** `alibaba/qwen3.7-max`
- **Context window:** 1,000,000 tokens, with 983,616 max input in thinking mode per Alibaba docs.
- **Modalities:** Reasoning/tools/JSON route; exact multimodal support not fully verified here.
- **Pricing (as of 2026-10-05):** Alibaba pricing docs list qwen-max style pricing; public pages report roughly $0.345/M input and $1.377/M output in some mainland route tables, with provider variance.
- **Architecture:** Proprietary Alibaba Qwen model.

### Raw benchmarks found

Agent / tool use:

- Alibaba docs: list Qwen3.7 Max with 1,000,000 context and 983,616 max input in thinking mode (`https://www.alibabacloud.com/help/en/model-studio/qwen3-7-max`).
- The AI Rankings: describes Qwen3.7-Max as a closed-weight API-only reasoning agent with 1M context, built for long-horizon agentic coding and tool use, sitting just below top proprietary frontier models on independent intelligence index (`https://theairankings.com/alibaba/qwen-3-7-max/`).
- Public launch video/report: claims a 35-hour long-horizon agent run with 1,000+ tool calls and no human intervention, but this is secondary coverage.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- InsiderLLM report: Qwen 3.7 Max preview scored **57** on Artificial Analysis-style intelligence index (`https://insiderllm.com/pdfs/qwen-3-7-preview-scored-57-aai-27b-35b-open-weights-watch.pdf`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- ModelBench lists Qwen3.7 Max against SWE-Bench Pro in benchmark/price plotting, but exact accessible value was not exposed.
- SWE-bench Verified / SWE-Pro: **tracked by providers, exact accessible score not found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1M context documented by Alibaba; no independent MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 86/100.** 1M thinking-mode context and long-horizon agent positioning support strong tool use.
- **Reasoning: 85/100.** AA-style score 57 and flagship status support strong reasoning, below newer 3.8/Max models.
- **Context window: 94/100.** 1M context is excellent.
- **Multimodal: 65/100.** Exact multimodal support not verified.
- **Coding: 86/100.** Strong long-horizon coding positioning, capped by missing exact SWE/LCB rows.
- **Cost efficiency: 90/100.** Alibaba pricing is very competitive for flagship-level context.
- **Overall Score: 83/100.** Mean of the five quality dimensions; best fit is low-cost long-context Qwen agentic coding.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
