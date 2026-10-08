# Qwen3-Max — findings by GPT 5.5

- Source: Alibaba/Qwen (`qwen3-max`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba's proprietary large Qwen3 Max model, positioned as a frontier Chinese API model with very large context and strong arena performance.
- **Provider / access:** Alibaba Cloud/Qwen API and partner routes.
- **Release / knowledge:** 2025/2026 Qwen3 Max generation; cutoff not stated.
- **IDs:** `qwen3-max`, `qwen3-max-thinking` for reasoning variant.
- **Context window:** Public discussion and Qwen summaries report **1M** context for Qwen3-Max previews.
- **Modalities:** Text and multimodal generation are reported for Qwen3-Max-Thinking family; exact base route modality varies.
- **Pricing (as of 2026-10-08):** Official current route pricing not recovered; Alibaba/Qwen APIs vary by region.
- **Architecture:** Proprietary Qwen model, public summaries cite over **1T parameters** for Qwen3-Max.

### Raw benchmarks found

Agent / tool use:

- Public arena discussion says Qwen3-Max preview ranked high on Text Arena, surpassing GPT-5-Chat in that snapshot.

Reasoning / knowledge:

- Qwen public summaries describe Qwen3-Max as the latest proprietary large model; exact GPQA/HLE rows were not recovered.

Coding:

- No exact SWE-bench/LiveCodeBench row recovered, but Qwen Max family is generally strong at coding and tool use.

Long context:

- Public discussion reports **1M** context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong Qwen ecosystem and arena presence support good agent credit, capped by missing exact rows.
- **Reasoning: 82/100.** Proprietary Max scale and arena performance support high reasoning.
- **Context window: 96/100.** 1M context earns near-top context credit.
- **Multimodal: 75/100.** Qwen3-Max-Thinking family supports multimodal generation, though base route details vary.
- **Coding: 78/100.** Qwen Max lineage is strong for coding, capped by missing exact row.
- **Cost efficiency: 70/100.** Pricing not verified.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; best fit is Qwen ecosystem frontier-scale reasoning.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

