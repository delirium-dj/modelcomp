# Pareto 26.10 Preview — findings by GPT 5.5

- Source: Unbiased/Pareto 26.10 Preview
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's Pareto 26.10 Preview is a composite hosted model blending multiple models into one answer, with 1M context and text/image input.
- **Provider / access:** Unbiased direct API and OpenRouter/AnyRouter-style routes.
- **Release / knowledge:** Published in early October 2026.
- **IDs:** `unbiased/pareto-26.10-preview`
- **Context window:** 1,048,576 input / 131,072 max completion on router listings.
- **Modalities:** Text and image input; text output; tool use supported on some routes.
- **Pricing (as of 2026-10-05):** Direct/API reports vary: Unbiased/ModelScale mention $2.50/M input, $0.25/M cached input, $7.50/M output; other coverage cites lower blended or OpenRouter route prices.
- **Architecture:** Composite model / model blend.

### Raw benchmarks found

Agent / tool use:

- Unbiased blog: reports Pareto 26.10 Preview ran on four benchmarks; one visible row shows **69.9%** at **$0.24/task**, and says the preview slug and price will remain stable (`https://unbiased.ai/blog/pareto-26-10-preview/`).
- AnyRouter: describes Pareto 26.10 Preview as a newer composite model with text/image input, text output, 1,048,576-token context, and 131,072 max completion (`https://anyrouter.dev/model/unbiased/pareto-26.10-preview`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- YFarmX compares Pareto 26.10 Preview against GPT-6.1 Sol and Claude Sonnet 5.5 in benchmark tables; exact reasoning rows were not visible in accessible snippets.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- No exact SWE/LCB row found in accessible sources.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1,048,576 context and 131,072 completion documented by routers; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 83/100.** Benchmark row at 69.9% and composite/tool route support strong use, with limited public detail.
- **Reasoning: 84/100.** Composite model likely strong, but exact GPQA/HLE rows absent.
- **Context window: 94/100.** 1M / 131K context-output capacity is excellent.
- **Multimodal: 75/100.** Text/image input is useful, not full omnimodal.
- **Coding: 82/100.** Likely competent, but no exact coding rows found.
- **Cost efficiency: 84/100.** $0.24/task evidence and moderate token pricing are attractive, though route prices vary.
- **Overall Score: 84/100.** Mean of the five quality dimensions; best fit is composite long-context work where provider blend is acceptable.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
