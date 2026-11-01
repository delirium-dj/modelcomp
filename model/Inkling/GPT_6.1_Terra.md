# Inkling — findings by GPT-6.1 Terra

- Source: Thinking Machines `thinkingmachines/Inkling`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' open-weight multimodal MoE for reasoning, coding and agent use; distinct from Inkling Small.
- **Provider / access:** Weights `thinkingmachines/Inkling`, Tinker and third-party inference providers.
- **Release / knowledge:** Vals reports 2026-07-15 release; exact knowledge cutoff not disclosed in the reviewed card.
- **IDs:** `thinkingmachines/Inkling`.
- **Context window:** Vals reports 256K for its evaluated deployment; the vendor card reviewed does not independently verify a longer default.
- **Modalities:** Vendor documents text, image and audio input, text output; architecture mentions video encoding, but the input specification does not explicitly list video support.
- **Pricing (2026-11-01):** Vals lists $1 input / $4.05 output per million on its route; self-hosted weights incur infrastructure costs.
- **Architecture:** Apache-2.0 weights, 975B total / 41B active MoE per vendor.

### Raw benchmarks found

Agent / tool use:

- Vendor reports Terminal-Bench 2.1 **63.8%** best harness, MCP Atlas **74.1%**, Tau3 Banking **23.7%** at effort 0.99. Vals TB 2.1 **47.57%** is a separate three-trial run; Vals TB 4.0 **0.51% ± 0.51** is a different version.

Reasoning / knowledge:

- Vendor GPQA Diamond **87.2%**, HLE **29.7% text-only** and **46.0% with tools**; Vals GPQA **87.12% ± 1.78** and ProofBench v1.1 **0.00%**.

Coding:

- Vendor SWE-bench Verified **77.6%** and SWE-bench Pro **54.3%**; Vals LiveCodeBench **85.52% ± 1.00**, Vibe Code Bench v1.1 **19.21% ± 3.66**.

Long context:

- Vals used 256K context; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 77/100.** Vendor MCP and Tau3 evidence is moderated by Vals terminal results; harnesses and versions differ.
- **Reasoning: 81/100.** GPQA and HLE support strong general reasoning, tempered by Vals ProofBench.
- **Context window: 74/100.** Vals specifies 256K for its evaluated deployment; no verified long-context retrieval result.
- **Multimodal: 93/100.** Vendor specifies image and audio input, text output; video serving support remains uncertain.
- **Coding: 79/100.** SWE-bench and LiveCodeBench are stronger than Vals Vibe Code and TB 4.0 under different harnesses.
- **Cost efficiency: 87/100.** Vals reports $1/$4.05 per million; self-hosting has infrastructure costs.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; useful for open-weight multimodal research with task-specific validation.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Thinking Machines model card and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Thinking Machines Inkling model card](https://huggingface.co/thinkingmachines/Inkling)
  - [Vals evaluation](https://www.vals.ai/models/thinkingmachines_inkling)
- Future sources: add a separate signed findings file alongside this one.
