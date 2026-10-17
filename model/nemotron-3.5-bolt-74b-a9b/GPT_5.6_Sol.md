# NVIDIA Nemotron 3.5 Bolt 74B-A9B — findings by GPT 5.6 Sol

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's open-weight vision-language MoE for local, everyday agentic work. The production-oriented checkpoint uses native 2-bit quantization to fit in 24GB, while a BF16 checkpoint is available for customization and post-training.
- **Provider / access:** Self-hosted through vLLM or llama.cpp using the [24GB checkpoint](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB); NVIDIA also publishes a [BF16 checkpoint](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16). The documented local server exposes an OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released 2026-10-15; post-training data cutoff is May 2026 ([NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b)).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` and `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`; no OpenCode Zen Free ID or metered public API route was verified.
- **Context window:** Up to 262,144 tokens shared by prompts, visual inputs, tool results, and output. NVIDIA notes that practical deployments may reduce this for memory or concurrency ([NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)).
- **Modalities:** Text, image, and video input with text output; reasoning modes, JSON output, and tool calling are supported. Video support is documented up to two minutes with resolution-dependent frame sampling ([NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)).
- **Pricing (as of 2026-10-17):** Open weights for local deployment; no verified per-token hosted price was published. The evaluated IQ2 checkpoint fits in 24GB of GPU memory, but hardware and operations remain real costs ([NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b)).
- **Architecture:** 74B total / 9B active Mamba-2–Transformer hybrid LatentMoE with a C-RADIO v4-H vision encoder. The deployment checkpoint uses native IQ2 quantization; both checkpoints use the OpenMDW-1.1 license ([24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).

### Raw benchmarks found

Agent / tool use:

- 24GB checkpoint: Terminal-Bench 2.1 **50.98%**, Tau3 Banking **17.01%**, MCP-Atlas **52.20%**, BrowseComp **66.75%**, PinchBench **87.82%**, and vision-enabled WebArena **50.86%** ([NVIDIA 24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)).
- GDPVal-AA-v2 normalized: **28.47%** on NVIDIA's 24GB evaluation; Artificial Analysis' independent feed reports **24.0%**, indicating a harness/run difference ([NVIDIA 24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)).
- BF16 checkpoint: Terminal-Bench 2.1 **53.93%**, MCP-Atlas **55.60%**, BrowseComp **70.00%**, and PinchBench **90.35%**. These are variant results and do not replace the 24GB production-checkpoint scores ([NVIDIA BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).

Reasoning / knowledge:

- 24GB checkpoint: GPQA Diamond **86.43%**, HLE without tools **25.30%**, AA-LCR **64.06%**, and Omniscience Accuracy **16.90%** with **61.27%** non-hallucination ([NVIDIA 24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)).
- Artificial Analysis' independent run reports Intelligence Index **21.4**, HLE **24.7%**, LCR **69.7%**, CritPt **4.3%**, Omniscience Accuracy **17.1%**, and hallucination rate **43.7%** ([Artificial Analysis](https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b), [BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)).
- BF16 checkpoint: GPQA Diamond **88.83%**, HLE **28.73%**, and AA-LCR **67.38%**, labeled separately from the scored 24GB variant ([NVIDIA BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).

Coding:

- 24GB checkpoint SciCode: **41.02%**; Artificial Analysis independently reports **39.7%** ([NVIDIA 24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)).
- Terminal-Bench 2.1 is **50.98%** on the 24GB checkpoint and **53.93%** on BF16; no verified public SWE-bench accuracy was found ([24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [BF16 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).

Long context:

- AA-LCR is **64.06%** in NVIDIA's 24GB evaluation and **69.7%** in Artificial Analysis' independent run, against a verified 256K context limit ([NVIDIA 24GB model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB), [BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 50.98%, Tau3 17.01%, and GDPVal 24–28% are mid-band, while MCP-Atlas 52.2%, BrowseComp 66.75%, and PinchBench 87.82% show useful breadth without frontier consistency.
- **Reasoning: 68/100.** GPQA 86.43% and LCR around 64–70% are strong, but HLE near 25%, Intelligence Index 21.4, CritPt 4.3%, and weak Omniscience reliability cap the score.
- **Context window: 74/100.** The verified 256K tier maps to 65–84; independently measured LCR 69.7% supports the middle of that range, not a frontier retrieval score.
- **Multimodal: 85/100.** Native image and video input plus a 50.86% vision-enabled WebArena result establish substantial visual capability; text-only output and no audio support prevent a 90s score.
- **Coding: 72/100.** SciCode around 40% and Terminal-Bench around 51% are useful mid-to-strong evidence, but no exact SWE-bench result or frontier coding-index score was published.
- **Cost efficiency: 88/100.** A 74B/9B-active multimodal model fitting in 24GB is unusually deployment-efficient, but absent hosted token pricing means it cannot receive a free- or ultra-cheap-API score.
- **Overall Score: 74/100.** The five quality dimensions average 73.8; the model best fits local multimodal agents that need broad tools and a large context on a single 24GB deployment footprint.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Fresh public internet research across NVIDIA's official 24GB and BF16 model cards, Artificial Analysis, and BenchLM; production and full-precision variant results are explicitly separated, and scores are normalized 1–100 interpretations rather than official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
