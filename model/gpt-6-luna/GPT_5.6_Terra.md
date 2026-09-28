# GPT-6 Luna — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's fastest and most cost-efficient GPT-6 reasoning tier.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; ChatGPT Work and Codex.
- **Release / knowledge:** 2026-09-22; exact knowledge cutoff not verified in this scan.
- **IDs:** `openai/gpt-6-luna`; no Zen Free ID verified.
- **Context window:** the GPT-6 pricing/catalog documentation supports long-context pricing; an exact context limit was not verified in this scan.
- **Modalities:** text and image input; text output (OpenAI API changelog).
- **Pricing (as of 2026-09-28):** $0.10/M input, $0.01/M cached input, and $0.50/M output (OpenAI API changelog).
- **Architecture:** proprietary; not disclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic benchmark number found in the release materials reviewed.

Reasoning / knowledge:

- HealthBench Professional: **60.8** length-adjusted (OpenAI GPT-6 safety appendix).
- HealthBench Consensus: **95.9** length-adjusted (OpenAI GPT-6 safety appendix).

Coding:

- no verified public coding benchmark number found in the release materials reviewed.

Long context:

- no verified public long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 78/100.** The model is available in Responses/Codex workflows, but no directly comparable public tool benchmark was found.
- **Reasoning: 85/100.** Published HealthBench Professional and Consensus outcomes support strong general performance, capped by sparse public evaluation.
- **Context window: 80/100.** Long-context API pricing is documented, but the exact context specification and retrieval result were not verified in this scan.
- **Multimodal: 76/100.** Text and image input are verified; audio/video are not verified.
- **Coding: 78/100.** OpenAI describes Luna as an improved GPT-6 tier, but published numeric coding evidence was not located.
- **Cost efficiency: 100/100.** $0.10/M input and $0.50/M output are exceptionally low frontier API prices.
- **Overall Score: 79/100.** Half-up mean of the five non-cost dimensions: 79.4; suited to economical high-volume work where independently measured coding evidence is still limited.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-28
- Method: fresh public-internet research using OpenAI API and deployment-safety documentation; scores are normalized interpretations, not vendor scores.
