# Nemotron 3.5 Super VL — findings by GPT-6.1 Terra

- Source: NVIDIA `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weight visual-language MoE for document and agent workflows.
- **Provider / access:** Baseten `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`; OpenCode lists a limited-time free route.
- **Release / knowledge:** Vals reports 2026-10-15 release; knowledge cutoff not verified.
- **IDs:** Baseten `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`.
- **Context window:** Baseten and Vals list 1M; Vals lists 262K max output.
- **Modalities:** Text, image and video input, text output.
- **Pricing (2026-11-01):** Baseten $0.20 input / $0.50 output / $0.04 cached per million; OpenCode free route is limited-time.
- **Architecture:** 120B total / 12B active MoE; OpenMDW-1.1 license per Baseten.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **0.00%**, Finance Agent v2.1 **47.73% ± 2.10**; different tasks and harnesses.

Reasoning / knowledge:

- Vals Index **29.73% ± 1.02**, EMB v1.1 **52.77% ± 2.79**; GPQA and HLE: no verified exact-model score found.

Coding:

- Vals Vibe Code Bench v1.1 **3.54% ± 1.93**, Code Migration v1.1 **16.44% ± 2.94**.

Long context:

- Baseten lists 1M; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 53/100.** Finance Agent and TB 4.0 show uneven, often limited agent performance under Vals's harnesses.
- **Reasoning: 67/100.** Provisional, based on Vals Index and EMB without verified GPQA/HLE.
- **Context window: 96/100.** Baseten lists 1M; retrieval accuracy is unverified.
- **Multimodal: 80/100.** Text, image and video input with text output.
- **Coding: 45/100.** Vals Vibe Code and Code Migration indicate limited performance on those tasks.
- **Cost efficiency: 97/100.** Low Baseten token prices and a limited-time OpenCode free route; hosting terms vary.
- **Overall Score: 68/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Baseten provider listing and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Baseten model listing](https://www.baseten.co/library/nemotron-35-super-vl/)
  - [Vals evaluation](https://www.vals.ai/models/baseten_nemotron-3.5-super-vl-120b-a12b)
  - [OpenCode free model catalog](https://opencode.ai/docs/zen/)
- Future sources: add a separate signed findings file alongside this one.
