# MiMo V2.5 Pro — findings by Muse Glimmer 30B

- Source: Xiaomi MiMo / mimo-v2.5-pro
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi MiMo Team open-source Mixture-of-Experts language model for agentic, long-horizon reasoning and software engineering. Successor to MiMo-V2-Pro with hybrid attention and Multi-Token Prediction for 1M-token context.
- **Provider / access:** Xiaomi MiMo API Platform `mimo-v2.5-pro`; open weights on Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`. Chat Completions API compatible.
- **Release / knowledge:** 2026-04-27; knowledge cutoff not publicly disclosed.
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro` (Hugging Face); `mimo-v2.5-pro` (Xiaomi API)
- **Context window:** 1.0M tokens total, verified by Xiaomi blog 2026-04-27 and Hugging Face model card.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes via agentic harness, JSON mode supported. Text-only.
- **Pricing (as of 2026-10-25):** Open weights MIT license; API pricing not publicly disclosed, previously “no change in pricing” on rollout. Self-host cost efficiency high.
- **Architecture:** MoE, 1.02T total parameters, 42B active parameters, hybrid Sliding Window + Global Attention 6:1 ratio, 3-layer Multi-Token Prediction. Open weights, MIT.

### Raw benchmarks found

> Sources: Xiaomi MiMo blog MiMo-V2.5-Pro 2026-04-27, Hugging Face model card XiaomiMiMo/MiMo-V2.5-Pro, Hugging Face evaluation results page.

Agent / tool use:

- Terminal-Bench 2.0: **68.4%** — Hugging Face eval results
- SWE-bench Verified: **78.9%** — Hugging Face eval results
- SWE-bench Pro: **57.2%** — Hugging Face eval results
- GDPval-AA / Terminal-Bench 4.0: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **66.7%** 5-shot — Hugging Face model card base eval table
- MATH: **86.2%** 4-shot — Hugging Face model card
- MMLU-Pro: **68.5%** 5-shot — Hugging Face model card
- GSM8K: **99.6%** 8-shot — Hugging Face model card
- BBH: **88.4%** 3-shot — Hugging Face model card
- MMLU: **89.4%** 5-shot — Hugging Face model card

Coding:

- HumanEval+: **75.6%** 1-shot — Hugging Face model card
- MBPP+: **74.1%** 3-shot — Hugging Face model card
- LiveCodeBench v6: **39.6%** 1-shot — Hugging Face model card
- SWE-bench AgentLess: **35.7%** 3-shot — Hugging Face model card

Long context:

- GraphWalks: **0.37 BFS / 0.62 Parents at 1M** — Xiaomi blog, OpenAI GraphWalks evaluation; V2.5 Pro retains non-zero performance at 1M vs V2 Pro collapse.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 68.4% and SWE-bench Verified 78.9% show strong agentic coding/tool use; blog reports >1k tool calls sustained in long-horizon tasks. Capped by lack of independent Terminal-Bench 4.0 / Claw-Eval public scores.
- **Reasoning: 83/100.** GPQA Diamond 66.7%, MATH 86.2%, MMLU-Pro 68.5% and GSM8K 99.6% indicate strong mathematical and general reasoning; GPQA Diamond is the limiting factor.
- **Context window: 98/100.** Verified 1M token context with hybrid attention and learnable sink bias; GraphWalks shows 0.37/0.62 at 1M. No public RULER/GraphWalks full suite, slight deduction.
- **Multimodal: 15/100.** Text-only model; no verified image/audio/video input. 15 is baseline for text-only.
- **Coding: 85/100.** HumanEval+ 75.6%, MBPP+ 74.1%, SWE-bench Verified 78.9% and SWE-bench Pro 57.2% demonstrate solid agentic software engineering; LiveCodeBench v6 39.6% caps the score.
- **Cost efficiency: 85/100.** Open weights MIT with FP8 mixed precision and MTP throughput; API pricing undisclosed, self-host viable. Assumes competitive pricing vs frontier closed models.
- **Overall Score: 73.8/100.** Mean of five quality dims (88+83+98+15+85)/5 = 73.8. Best-fit: high-capacity open MoE for long-context agentic coding and reasoning, text-only.

---
## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
