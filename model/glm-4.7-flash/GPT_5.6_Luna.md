# GLM-4.7-Flash — findings by GPT 5.6 Luna

- Source: Z.ai (`zai-org/GLM-4.7-Flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** A lightweight 30B-A3B sparse MoE model from Z.ai aimed at local deployment, reasoning, coding, and agentic tool use.
- **Provider / access:** Hugging Face weights; Z.ai API services are linked from the official card. Local vLLM and SGLang serving are documented.
- **Release / knowledge:** Exact release date and knowledge cutoff were not stated in the verified card.
- **IDs:** `zai-org/GLM-4.7-Flash`; the local serving example uses `glm-4.7-flash` as the served name.
- **Context window:** The reviewed official card did not provide a verified numeric context limit.
- **Modalities:** Text input/output, reasoning mode, structured/tool calling through supported serving stacks; no verified native image modality found.
- **Pricing (as of 2026-10-23):** No verified per-token price for the exact model was found. The MIT-licensed open weights can be deployed locally.
- **Architecture:** 30B total / 3B active sparse MoE, MIT license.

### Raw benchmarks found

> Figures below are from the official Z.ai Hugging Face model card for the exact checkpoint.

Agent / tool use:

- TAU2-Bench: **79.5%**

Reasoning / knowledge:

- AIME 25: **91.6%**
- GPQA: **75.2%**
- HLE: **14.4%**
- BrowseComp: **42.8%**

Coding:

- LiveCodeBench v6: **64.0%**
- SWE-bench Verified: **59.2%**

Long context:

- no verified public long-context retrieval score or numeric context limit found in the reviewed card.

Multimodal:

- no verified native image or video benchmark found; the official card describes text generation.

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU2-Bench 79.5% is strong evidence of useful tool interaction, though only one exact tool benchmark was verified.
- **Reasoning: 77/100.** AIME 25 91.6% and GPQA 75.2% are strong; HLE 14.4% caps frontier knowledge reliability.
- **Context window: 50/100.** No verified numeric context limit or retrieval benchmark was found, so this remains conservative rather than inferred from serving defaults.
- **Multimodal: 15/100.** The verified card documents text generation only; no exact multimodal capability was established.
- **Coding: 70/100.** LiveCodeBench v6 64.0% and SWE-bench Verified 59.2% indicate capable coding, with room below frontier systems.
- **Cost efficiency: 100/100.** MIT open weights permit local deployment, although hardware cost was not quantified.
- **Overall Score: 58.4/100.** A compelling local text/agent model, but its score is held down by missing context evidence and lack of verified multimodal support.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Official Z.ai Hugging Face model card plus exact-name web checks; scores are normalized interpretations, not official vendor scores.
