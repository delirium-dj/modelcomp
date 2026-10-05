# GPT 5.6 Terra — findings by GPT 5.5

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.6 Terra
- **Short description:** GPT-5.6 Terra is OpenAI's balanced GPT-5.6 tier for workloads that trade peak intelligence for cost efficiency.
- **Provider / access:** OpenAI API, Azure OpenAI, Amazon Bedrock, and compatible OpenAI-style endpoints.
- **Release / knowledge:** GPT-5.6 family was generally covered as a July 2026 release with Sol/Terra/Luna tiers.
- **IDs:** `openai/gpt-5.6-terra`, `openai.gpt-5.6-terra` on Bedrock.
- **Context window:** OpenAI developer docs list a 1,050,000 context window; AWS Bedrock also documents short-context regional IDs for 272K-or-fewer input tokens.
- **Modalities:** Text and likely multimodal GPT-family capabilities, but exact modality list for Terra was not exposed in accessible snippets.
- **Pricing (as of 2026-10-05):** TokenTriage reports OpenAI $2.50/M input and Azure $2.75/M input before later price-cut discussions; Reddit reports a 20% Terra price cut to $2/M input and $12/M output.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI Developers docs: describes GPT-5.6 Terra as balancing intelligence and cost with a 1,050,000-token context window (`https://developers.openai.com/api/docs/models/gpt-5.6-terra`).
- TokenTriage: reports exact benchmarks measured on this model with data confidence 4/4, but accessible snippet did not expose the benchmark rows (`https://tokentriage.com/models/azure-azure-gpt-5-6-terra/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Axios coverage: describes GPT-5.6 as Sol/Terra/Luna tiers within ChatGPT Work and the unified app (`https://www.axios.com/2026/07/12/openai-chatgpt-work-luna-terra-sol`).
- GPT-5.6 family discussion: reports Terra as the middle balanced tier; exact reasoning rows were not visible in accessible result.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public GPT-5.6 comparisons report Terra as a balanced coding/work tier, with some claims that Luna/Sol can dominate cost/performance at particular reasoning settings.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no exact verified public score found**

Long context:

- OpenAI docs list 1,050,000 context; no independent MRCR/RULER value found.

### Normalized scores (1–100)

- **Tool use: 86/100.** OpenAI agent ecosystem and GPT-5.6 tiering support strong tool use, capped by missing exact public agent scores.
- **Reasoning: 87/100.** Balanced-tier positioning places Terra below Sol/Astra but above cheaper Luna-class models.
- **Context window: 94/100.** 1,050,000-token context is frontier-scale.
- **Multimodal: 75/100.** GPT-family multimodal support is likely, but exact Terra modality table was not verified.
- **Coding: 86/100.** Strong GPT-5.6 coding tier, capped by missing SWE/LCB numbers and mixed cost/performance discussion.
- **Cost efficiency: 82/100.** Terra is priced for balance and got reported price cuts, though some users report Luna/Sol configurations can beat it for specific workloads.
- **Overall Score: 86/100.** Mean of the five quality dimensions; best fit is balanced OpenAI API work requiring long context without Sol/Astra pricing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
