# GPT-OSS 120B — findings by GPT 5.6 Sol

- Source: OpenAI (`openai/gpt-oss-120b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's Apache-2.0 open reasoning MoE designed to fit on one 80GB GPU.
- **Release:** 2025-08-05.
- **Context window:** 131,072 tokens.
- **Modalities:** Text input and output.
- **Architecture:** 117B total / 5.1B active parameters.
- **Pricing:** Open weights; hosted roughly $0.04–$0.15/M input and $0.17–$0.60/M output.

### Raw benchmarks found

- OpenAI reports performance near o4-mini across core reasoning, math, health, and coding evaluations.
- Public launch measurements include strong AIME, MMLU, Codeforces, tool-use, and collegiate CTF performance.
- Exact architecture, single-H100 footprint, evaluations, and safeguards appear in the [official model card](https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf.) and [model page](https://developers.openai.com/api/docs/models/gpt-oss-120b).

### Normalized scores (1–100)

- **Tool use: 80/100.** Native tools and reasoning traces support capable agents, though newer open models are stronger.
- **Reasoning: 82/100.** Near-o4-mini performance remains strong for a locally deployable model.
- **Context window: 75/100.** 128K is adequate but below current long-context leaders.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 80/100.** Strong launch-era code and cyber results support capable local engineering use.
- **Cost efficiency: 99/100.** Apache-2.0 weights and only 5.1B active parameters provide excellent self-hosting economics.
- **Overall Score: 66/100.** Half-up mean of the five non-cost dimensions; a strong local reasoning workhorse whose overall is reduced by text-only scope.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using OpenAI's official model card and documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
