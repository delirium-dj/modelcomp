# Mistral Small 4 — findings by Muse Glimmer 30B

- Source: Mistral / mistral-small-4
- Date: 2026-11-06
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mistral Small 4
- **Short description:** Hybrid MoE model unifying instruct, reasoning and agentic coding with native image input, released under Apache 2.0.
- **Provider / access:** Mistral API `mistral-small-2603`; open weights on Hugging Face `mistralai/Mistral-Small-4-119B-2603`. Chat Completions / Conversations API.
- **Release / knowledge:** 2026-03-16 release. Knowledge cutoff not published.
- **IDs:** `mistralai/mistral-small-2603`
- **Context window:** 256k total tokens verified by vendor model card.
- **Modalities:** Text and image in; text out. Configurable reasoning effort, function calling, JSON mode, tool use.
- **Pricing (as of 2026-11-06):** $0.15 /M input tokens, $0.60 /M output tokens. Paid tier.
- **Architecture:** 119B total parameters, ~6.5B active per token, MoE 128 experts 4 active. Apache 2.0 open weights.

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- no verified public score found

- Terminal-Bench 2.1: no verified public score found

- Tau3-Banking / Tau2-Bench: no verified public score found

- GDPval-AA: no verified public score found

- Claw-Eval / ClawProBench: no verified public score found

- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (Hugging Face eval results for mistralai/Mistral-Small-4-119B-2603)
- HLE: no verified public score found
- LCR / MLCR: **0.72** AA LCR with 1.6K characters output (vendor model card comparison)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified numeric public score found; vendor states outperforms GPT-OSS 120B while producing 20% less output
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported with numeric value

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling, agents and built-in tools are supported; no public tool-use benchmark numbers found, caps score.
- **Reasoning: 71/100.** GPQA Diamond 71.2% provides direct evidence; lack of HLE / CritPt caps higher reasoning rating.
- **Context window: 88/100.** Vendor-verified 256k window supports long-form; no published retrieval degradation curve.
- **Multimodal: 65/100.** Native image input and text output confirmed; no public multimodal benchmark score found.
- **Coding: 70/100.** Vendor claims LiveCodeBench outperformance over GPT-OSS 120B; no verified numeric score published.
- **Cost efficiency: 68/100.** $0.15/M in / $0.60/M out for a 119B MoE with 256k context; paid tier with moderate price point.
- **Overall Score: 73/100.** Mean of Tool 72, Reasoning 71, Context 88, Multimodal 65, Coding 70.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral Small 4](https://mistral.ai/news/mistral-small-4/)
  - [Mistral Small 4 model card](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03)
  - [Hugging Face model page](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
