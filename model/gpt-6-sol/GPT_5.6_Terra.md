# GPT-6 Sol — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI reasoning model for complex coding and agentic workflows.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; ChatGPT Work and Codex.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `openai/gpt-6-sol`; no Zen Free ID verified.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens ([OpenAI model page](https://developers.openai.com/api/docs/models/gpt-6-sol)).
- **Modalities:** text and image input; text output; reasoning and function calling.
- **Pricing (as of 2026-09-28):** $2/M input, $0.20/M cached input, and $10/M output (OpenAI model page).
- **Architecture:** proprietary; not disclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic benchmark number found in the model catalog scan.

Reasoning / knowledge:

- HealthBench Professional: **60.8** length-adjusted (OpenAI GPT-6 safety appendix).
- HealthBench Consensus: **96.2** length-adjusted (OpenAI GPT-6 safety appendix).

Coding:

- no verified public coding benchmark number found in the model catalog scan.

Long context:

- no verified public long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Officially built for agentic workflows with Responses API tools, but a directly comparable public tool-use score was not located.
- **Reasoning: 88/100.** Strong HealthBench Professional and Consensus results support a high but evidence-capped score.
- **Context window: 88/100.** The verified 1.05M-token context is excellent; no retrieval result was published in this scan.
- **Multimodal: 78/100.** Image input is verified, but audio/video are unsupported.
- **Coding: 83/100.** OpenAI explicitly positions Sol for complex coding, but no numeric coding evaluation was published in the sources reviewed.
- **Cost efficiency: 80/100.** $2/M input and $10/M output are competitive for a million-context frontier model.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dimensions: 83.8; a capable long-context agent model pending fuller public benchmark disclosure.

---

## Refresh note

OpenAI confirms GPT-6 Sol is now in ChatGPT Work, Codex and the API at $2/$10 per-MTok input/output—50% below GPT-5.6 Sol's promotional price. On the cited OSWorld 2.0 offline evaluation, Sol at xhigh reaches 60.5%, close to Claude Opus 5 at medium (60.3%), at approximately 80% lower task cost. [Official announcement](https://openai.com/index/introducing-gpt-6-sol-and-luna/)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using OpenAI model documentation and deployment-safety material; scores are normalized interpretations, not vendor scores.
