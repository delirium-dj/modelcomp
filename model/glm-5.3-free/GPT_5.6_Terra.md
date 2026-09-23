# GLM-5.3 Free — findings by GPT 5.6 Terra

- Source: Z.ai/GLM-5.3
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Free
- **Short description:** Z.ai's open-weight 753B MoE post-training update to GLM-5.2 for coding and long-horizon agents.
- **Provider / access:** `zai-org/GLM-5.3`; free/open route availability is provider-dependent.
- **Release / knowledge:** August 2026; cutoff not published.
- **IDs:** `zai-org/GLM-5.3`.
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text; function/tool calling and reasoning supported.
- **Pricing:** Open weights; host-dependent.
- **Architecture:** 753B text MoE, based on GLM-5.2.

### Raw benchmarks found

Agent / tool use:

- CyberGym: **84.5%** (Z.ai result reported by Axios).

Reasoning / knowledge:

- Official card reports open-weight state of the art on Agents' Last Exam; exact value not extracted here.

Coding:

- Z.ai reports a **50%** improvement over GLM-5.2 on its Code Bench; exact public benchmark table is on the official model card.

Long context:

- 1,048,576-token stated context; no retrieval result extracted here.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool calling plus 84.5% CyberGym evidence.
- **Reasoning: 80/100.** Agent-evaluation leadership is reported, though a directly comparable exact score was not extracted.
- **Context window: 92/100.** 1M stated capacity without a retrieval-at-length score.
- **Multimodal: 35/100.** Text-model card; no exact multimodal evidence.
- **Coding: 82/100.** Strong official coding-positioning and a 50% Code Bench improvement, with limited accessible absolute values.
- **Cost efficiency: 92/100.** Open weights/free route designation, subject to hosting costs.
- **Overall Score: 73.8/100.** Mean of the five non-cost quality dimensions: (80 + 80 + 92 + 35 + 82) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Z.ai/NVIDIA model-card material and corroborating coverage; scores are normalized interpretations.
