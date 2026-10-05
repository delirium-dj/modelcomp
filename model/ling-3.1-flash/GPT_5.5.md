# Ling 3.1 Flash — findings by GPT 5.5

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI’s late-2026 Flash model aimed at agent-focused long-context reasoning, coding, tool calling, and aggressive API pricing.
- **Provider / access:** InclusionAI/OpenRouter-style API routes; exact route availability varies.
- **Release / knowledge:** Public launch coverage dated October 2026; cutoff not stated.
- **IDs:** `inclusionai/ling-3.1-flash`, `ling-3.1-flash`.
- **Context window:** Public launch coverage advertises long context, commonly **1M** in summaries.
- **Modalities:** Text/code; public coverage emphasizes reasoning and tool calling. Multimodal support for this non-VL Flash entry was not verified.
- **Pricing (as of 2026-10-05):** Public launch coverage describes aggressive API pricing; exact stable price not recovered in snippets.
- **Architecture:** Sparse/large-capacity model per launch coverage; exact parameter count not verified here.

### Raw benchmarks found

Agent / tool use:

- Launch coverage says InclusionAI’s benchmark chart compares Ling 3.1 Flash against GPT-5.6 Sol, Claude Opus 5, Kimi K3, GLM 5.3, GLM 5.3 Flash, and DeepSeek-V4.1-Flash.
- Coverage explicitly describes strong published coding and agent benchmarks, reasoning, and tool calling.

Reasoning / knowledge:

- Launch coverage positions Ling 3.1 Flash as a reasoning model with long context; exact GPQA/HLE values were not recovered.

Coding:

- Public launch coverage describes strong published coding benchmarks but exact SWE/LCB values were not recovered.

Long context:

- Public coverage emphasizes 1M-class long context.

### Normalized scores (1–100)

- **Tool use: 72/100.** Agent/tool focus and launch benchmark comparisons are strong, but exact rows are not extracted.
- **Reasoning: 70/100.** Reasoning positioning against frontier models supports a strong score, capped by missing exact values.
- **Context window: 94/100.** 1M-class context earns near-top context credit.
- **Multimodal: 25/100.** No verified multimodal support for the non-VL entry.
- **Coding: 72/100.** Coding benchmark positioning is strong, capped by absent exact values.
- **Cost efficiency: 88/100.** Pricing is advertised as aggressive, but exact stable rates were not recovered.
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions; best fit is low-cost long-context agent/coding trials.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

