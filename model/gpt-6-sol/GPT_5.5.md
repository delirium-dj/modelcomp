# GPT-6 Sol — findings by GPT 5.5

- Source: OpenAI/GPT-6 Sol
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** GPT-6 Sol is OpenAI's faster and cheaper GPT-6-tier everyday reasoning model, positioned below Astra and later superseded by GPT-6.1 Sol.
- **Provider / access:** OpenAI API / ChatGPT / Codex-style products.
- **Release / knowledge:** Released around late September 2026 alongside GPT-6 Luna, with GPT-6.1 Sol noted as newer by early October.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** OpenAI docs list 1,050,000 context.
- **Modalities:** GPT-family model; exact accessible modality table was not visible.
- **Pricing (as of 2026-10-05):** OpenAI pricing docs list short-context $2/M input, $0.20/M cached input, $2.50/M output, and long-context $10/M input, $4/M cached input, $15/M output.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI model docs: list GPT-6 Sol, 1,050,000 context, and note GPT-6.1 Sol as the newer Sol model (`https://developers.openai.com/api/docs/models/gpt-6-sol`).
- OpenAI launch page: says Sol and Luna API prices were reduced 50% versus GPT-5.6 promotional pricing and discusses FrontierCode 1.1 as a coding/mergeability benchmark (`https://openai.com/index/introducing-gpt-6-sol-and-luna/`).
- Terminal-Bench 2.1: **no verified public score found**
- FrontierCode 1.1 Main: **mentioned by OpenAI, exact score not exposed in accessible text**

Reasoning / knowledge:

- OpenAI launch positions GPT-6 Sol as lower-cost GPT-6-class reasoning; community benchmark comparisons are mixed and often compare to Opus 5.5/Astra.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- FrontierCode 1.1 is highlighted by OpenAI as an eval where code is judged for correctness and mergeability, but exact Sol row was not visible.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- OpenAI docs list 1,050,000 context; no independent MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** GPT-6 lineage and FrontierCode emphasis support strong tool use, capped by sparse public rows and mixed early user reports.
- **Reasoning: 90/100.** GPT-6-class everyday reasoning, below Astra and newer 6.1 Sol.
- **Context window: 94/100.** 1,050,000 context is frontier-scale.
- **Multimodal: 80/100.** GPT-family multimodality likely, but exact route table was not verified.
- **Coding: 88/100.** FrontierCode positioning supports strong coding, though exact values are missing.
- **Cost efficiency: 84/100.** Short-context pricing is attractive for GPT-6-class work; long-context pricing is much higher.
- **Overall Score: 88/100.** Mean of the five quality dimensions; best fit is OpenAI-native GPT-6 work when Astra is overkill.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
