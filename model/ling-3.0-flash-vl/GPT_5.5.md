# Ling 3.0 Flash VL — findings by GPT 5.5

- Source: InclusionAI (`ling-3.0-flash-vl`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's vision-language Flash model with long context, low token pricing, tool-calling support, and visual agent capabilities.
- **Provider / access:** OpenRouter and compatible providers; some routes include a free variant.
- **Release / knowledge:** Public listings report September 2026 release; cutoff not stated.
- **IDs:** `inclusionai/ling-3.0-flash-vl`, `ling-3.0-flash-vl`.
- **Context window:** Public listings report **262K** context and about **33K** max output; some token-ceiling pages show 131K depending on route.
- **Modalities:** Image, text, and video input; text output; reasoning and tool calling in model-price listings.
- **Pricing (as of 2026-10-05):** Artificial Analysis reports **$0.07/M input** and **$0.22/M output**; CompareLLM reports about **$0.06/M input**, **$0.012/M cached input**, **$0.18/M output**; free route exists on OpenRouter-like listings.
- **Architecture:** Open-weight/route listings mention open weights, but exact parameter count not verified.

### Raw benchmarks found

Agent / tool use:

- ModelCap ranks Ling 3.0 Flash VL **#50 of 280** with preliminary Index **65.6**, measured on **1 public benchmark**.
- OpenRouter/Artificial Analysis list standardized benchmark summary for the exact model.

Reasoning / knowledge:

- Artificial Analysis has an Intelligence/Performance/Price page for Ling-3.0-flash-VL; exact row values were not visible in snippets.

Coding:

- No exact SWE-bench/LiveCodeBench value found.

Long context:

- Context reported as **262K** by price/model catalogs, with some route-specific 131K ceilings.

### Normalized scores (1–100)

- **Tool use: 58/100.** Tool calling is listed and the model has public benchmark tracking, but exact tool rows are sparse.
- **Reasoning: 63/100.** ModelCap 65.6 preliminary index supports above-average capability with limited benchmark coverage.
- **Context window: 78/100.** 262K context is strong, reduced slightly for route variability.
- **Multimodal: 76/100.** Image and video input are strong for a cheap Flash VL model.
- **Coding: 54/100.** No direct coding benchmark was found.
- **Cost efficiency: 96/100.** $0.06-$0.07 input and $0.18-$0.22 output is excellent.
- **Overall Score: 66/100.** Half-up mean of the five quality dimensions; best fit is low-cost visual extraction and support workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

