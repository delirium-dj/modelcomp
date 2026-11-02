# Nemotron 3.5 Bolt 74B-A9B — findings by GPT-6.1 Terra

- Source: NVIDIA `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (IQ2)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's locally deployable vision-language agent; results below are for its quantized 24GB checkpoint, not BF16.
- **Provider / access:** Open weights `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, self-hosted through vLLM.
- **Release / knowledge:** NVIDIA lists 2026-10-15 release and May 2026 post-training cutoff.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`; BF16 is a separate precision variant.
- **Context window:** Up to 256K shared by input and output; deployments may support less.
- **Modalities:** Text, images and video input; text output and tool calling.
- **Pricing (as of 2026-11-02):** Downloadable weights; local hardware and operation cost extra; hosted rates not verified.
- **Architecture:** Hybrid Mamba-2 Transformer MoE with vision encoder, 74B total / 9B active; IQ2 experts, OpenMDW 1.1 license.

### Raw benchmarks found

- NVIDIA reports IQ2 Terminal-Bench 2.1 **50.98%**, TAU3 Banking **17.01%**, MCP-Atlas **52.20%**, BrowseComp **66.75%**, and WebArena vision **50.86%**.
- NVIDIA reports IQ2 GPQA Diamond **86.43%**, HLE without tools **25.30%**, SciCode **41.02%**, and AA-LCR **64.06%**. No exact-checkpoint SWE score or full-window retrieval measurement verified.
- Important limitation: NVIDIA discloses synthetic training data targeted at GPQA, Terminal-Bench 2.1, SciCode and AA-LCR, and MCP-targeted training. These scores may overstate generalization to uncontaminated tasks.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal and MCP results are useful, but targeted training and weak banking constrain confidence.
- **Reasoning: 78/100.** GPQA and HLE are promising; benchmark-targeted training limits interpretation.
- **Context window: 74/100.** 256K documented; full-window retrieval is unverified.
- **Multimodal: 70/100.** Text, images and video input with text output; WebArena vision offers task evidence.
- **Coding: 70/100.** SciCode and terminal results are useful but targeted training limits confidence.
- **Cost efficiency: 90/100.** Downloadable weights require local compute; licensing and deployment costs apply.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: NVIDIA's exact IQ2 model card; normalized scores are interpretations, not vendor ratings.
- Reference URLs:
  - [NVIDIA 24GB IQ2 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - [NVIDIA technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-Technical-Report.pdf)
