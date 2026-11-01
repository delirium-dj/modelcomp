# Inkling Small — findings by GPT-6.1 Terra

- Source: Thinking Machines `thinkingmachines/Inkling-Small`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' open-weight multimodal MoE for coding, reasoning and agent use.
- **Provider / access:** Weights `thinkingmachines/Inkling-Small`, Tinker and third-party inference providers.
- **Release / knowledge:** Vals reports 2026-07-30 release; exact knowledge cutoff not disclosed in the reviewed card.
- **IDs:** `thinkingmachines/Inkling-Small`.
- **Context window:** Vals reports 262K context for its tested deployment; model-card text reviewed does not independently verify a 1M serving limit.
- **Modalities:** Text, image and audio input; text output. Audio guidance recommends WAV at 16kHz, ideally under two minutes.
- **Pricing (2026-11-01):** Vals lists $0.30 input / $1.20 output per million for its route; self-hosted weights incur infrastructure costs.
- **Architecture:** Apache-2.0 weights; 276B total / 12B active MoE, per vendor.

### Raw benchmarks found

Agent / tool use:

- Vendor reports Terminal-Bench 2.1 **64.7%** with its internal coding harness, MCP Atlas **79.6% public / 79.2% all**, and Tau3 Banking **15.5%**. Vals Terminal-Bench 4.0 **0.00%** is a different benchmark and harness.

Reasoning / knowledge:

- Vendor reports GPQA Diamond **89.5%**, HLE **31.6% text-only** and **47.8% with tools**; Vals GPQA **83.59% ± 2.04** and ProofBench v1.1 **6.00% ± 2.39** are independent evaluations.

Coding:

- Vendor reports SWE-bench Verified **80.2%** using a bash-only harness, SWE-bench Pro **55.9%**; Vals Vibe Code Bench v1.1 **19.05% ± 3.40** and LiveCodeBench **85.93% ± 0.99**.

Long context:

- Vals deployment lists 262K; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vendor MCP Atlas and Tau3 results are moderated by Vals TB 4.0; harnesses and task versions differ.
- **Reasoning: 82/100.** Vendor GPQA/HLE and independent GPQA are strong, tempered by low Vals ProofBench.
- **Context window: 74/100.** The independently specified evaluated deployment is 262K; longer advertised deployment limits are not verified here.
- **Multimodal: 93/100.** Vendor documents image and audio inputs with text output.
- **Coding: 80/100.** Vendor SWE results and Vals LiveCodeBench are strong, while Vibe Code and TB 4.0 are much weaker in different harnesses.
- **Cost efficiency: 95/100.** Vals route costs $0.30/$1.20 per million; self-hosting has infrastructure costs.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; useful for open-weight multimodal experiments with task-specific validation.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Vendor weights card and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Thinking Machines Inkling Small model card](https://huggingface.co/thinkingmachines/Inkling-Small)
  - [Vals evaluation](https://www.vals.ai/models/thinkingmachines_inkling-small)
- Future sources: add a separate signed findings file alongside this one.
