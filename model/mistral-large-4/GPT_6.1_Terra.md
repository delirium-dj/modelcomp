# Mistral Large 4 — findings by GPT-6.1 Terra

- Source: Mistral `mistral-large-4`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's public-preview multimodal MoE for knowledge work, coding and agents.
- **Provider / access:** Mistral API `mistral-large-4`; Vals evaluates the October 6 release, not its separately listed later OSS variant.
- **Release / knowledge:** Announced 2026-10-06; knowledge cutoff not verified.
- **IDs:** `mistral-large-4`.
- **Context window:** Mistral currently lists 1M; Vals used a 512K deployment with 256K maximum output.
- **Modalities:** Text and image input, text output; structured outputs and function calling.
- **Pricing (2026-11-01):** Mistral lists $0.70 input / $2.10 output / $0.07 cached per million.
- **Architecture:** Mistral lists 1.05T total / 52B active parameters plus a vision encoder; Mistral Ecosystem Open Weight License, not presumed Apache or MIT.

### Raw benchmarks found

Agent / tool use:

- Mistral reports AutomationBench **59.9%** and Terminal-Bench 4.0 **28.3%**; Vals TB 4.0 **27.78% ± 1.82** is a separate evaluation.

Reasoning / knowledge:

- Vals ProofBench v1.1 **10.00% ± 3.02**, BioMysteryBench **67.04% ± 2.67**, HLAB-Vals-1.1 **17.50% ± 3.22**. GPQA and HLE: no verified exact-model results found.

Coding:

- Mistral cites DeepSWE v1.1 **61.7%**; Vals Vibe Code Bench v1.1 **78.40% ± 3.55**, Code Migration **30.56% ± 4.22**. Vals's later OSS variant is not merged into these results.

Long context:

- Mistral documents 1M while Vals lists 512K for its deployment; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 83/100.** AutomationBench and independent TB 4.0 support agent capability, with harness differences.
- **Reasoning: 74/100.** Provisional: mixed specialized Vals results without verified GPQA or HLE.
- **Context window: 96/100.** Mistral now lists 1M, although the Vals deployment is shorter and full-window retrieval is unverified.
- **Multimodal: 65/100.** Image and text input with text output; audio and video input not established here.
- **Coding: 83/100.** DeepSWE and Vibe Code are strong, tempered by lower Code Migration.
- **Cost efficiency: 90/100.** Mistral lists $0.70/$2.10 per million, excluding additional tool charges.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Mistral documentation and independent Vals evaluation; benchmark version and deployment differences are identified.
- Reference URLs:
  - [Mistral model specifications and pricing](https://docs.mistral.ai/models/mistral-large-4)
  - [Mistral announcement](https://mistral.ai/news/mistral-large-4)
  - [Vals evaluation](https://www.vals.ai/models/mistralai_mistral-large-4)
- Future sources: add a separate signed findings file alongside this one.
