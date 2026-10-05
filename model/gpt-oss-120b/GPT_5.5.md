# GPT-OSS-120B — findings by GPT 5.5

- Source: OpenAI (`gpt-oss-120b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B
- **Short description:** OpenAI's largest open-weight reasoning model, designed to run on a single H100 while providing strong open-model reasoning and coding capability.
- **Provider / access:** Open weights, local/self-hosted deployment, and API/hosted routes.
- **Release / knowledge:** OpenAI introduced GPT-OSS in August 2025; cutoff not stated.
- **IDs:** `openai/gpt-oss-120b`, `gpt-oss-120b`.
- **Context window:** **131,072 tokens**.
- **Modalities:** Text/code reasoning model; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Open weights/self-hosting; hosted route prices vary by provider.
- **Architecture:** MoE, **117B total parameters**, **5.1B active parameters** per token, designed to fit one H100.

### Raw benchmarks found

Agent / tool use:

- OpenAI GPT-OSS release says the models were evaluated on coding, competition math, health, and agentic tool use against o3, o3-mini, and o4-mini.

Reasoning / knowledge:

- OpenAI model card states GPT-OSS-120B performance is comparable to OpenAI reasoning models such as o4-mini/o3-mini on canonical benchmarks.
- Independent papers evaluate GPT-OSS models and generally treat 120B as the strongest GPT-OSS model.

Coding:

- OpenAI release includes coding benchmark evaluation; no exact SWE/LCB row recovered from snippets.

Long context:

- Official context: **131,072** tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** OpenAI evaluated agentic tool use and the model supports local scaffolding, capped by missing exact values.
- **Reasoning: 74/100.** Comparable-to-o4-mini/o3-mini positioning supports strong reasoning for open weights.
- **Context window: 66/100.** 128K context is useful but not frontier long-context.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 70/100.** Coding evaluations and local reports support strong open coding, capped by missing exact rows.
- **Cost efficiency: 92/100.** Open weights and 5.1B active parameters make it efficient if hosted well.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is open-weight reasoning on controlled infrastructure.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

