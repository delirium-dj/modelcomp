# Nemotron 3.5 Lightning Free — findings by GPT 5.6 Sol

- Source: NVIDIA (`NVIDIA-Nemotron-3.5-Lightning-30B-A3B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Efficient open 30B-A3B hybrid model for customizable, high-volume reasoning and agent execution.
- **Release:** 2026-08-11.
- **Context window:** Up to 1M tokens; common deployment profile 262K.
- **Modalities:** Text input and output.
- **Architecture:** 30B total / 3B active LatentMoE with Mamba-2, attention, and multi-token prediction.
- **Pricing:** Free Zen/NVIDIA trial access; open weights under OpenMDW-1.1.

### Raw benchmarks found

- MMLU-Pro **81.94**, GPQA Diamond **76.89**, HLE **11.72**, and SciCode **32.60**.
- SWE-bench Verified **51.56**, Terminal-Bench 2.1 **24.58**, BrowseComp **36.97**, and PinchBench **85.37**.
- AA-LCR **52.00** ([official NVIDIA model card](https://catalog.ngc.nvidia.com/orgs/nim/nvidia/models/nemotron-3.5-lightning/hf-3db7814)).

### Normalized scores (1–100)

- **Tool use: 70/100.** BrowseComp and PinchBench are useful, though terminal performance is modest.
- **Reasoning: 77/100.** GPQA 76.89 and MMLU-Pro 81.94 are strong for 3B active parameters.
- **Context window: 92/100.** Up to 1M is exceptional, with moderate AA-LCR retention.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 70/100.** SWE-bench 51.56 is capable, while terminal and SciCode results limit the score.
- **Cost efficiency: 100/100.** Free access, open weights, and only 3B active parameters are exceptional.
- **Overall Score: 65/100.** Half-up mean of the five non-cost dimensions; optimized for cheap execution rather than frontier depth.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using NVIDIA's official model card and benchmark table; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
