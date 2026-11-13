# Nemotron 3.5 Super VL 120B A12B — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `nemotron-3.5-super-vl` (NVIDIA Nemotron 3.5 Super VL 120B A12B) — folder: `model/nemotron-3.5-super-vl`

## Overall
- **Overall Score: 88/100.** Strong open-weight vision-language MoE (120B total / 12B active) with 1M context support, text/image/video inputs, configurable reasoning, and native tool-calling-oriented deployment recipes, offering excellent multimodal agent capability for self-hosted NVIDIA environments.

## Scores
- **Tool use: 86/100.** NVIDIA model card and serving examples highlight tool-call parsing/auto tool choice and agentic workflows (including coding/search/tool-assisted tasks); benchmark/results sections indicate competitive agentic performance, though some agent benchmarks vary by harness/offline setup.
- **Reasoning: 86/100.** Supports configurable reasoning (`enable_thinking`, medium effort options) and reports strong reasoning/knowledge results (e.g. GPQA Diamond ~89.9 NVFP4, HLE text-only ~31.4, MMLU-ProX ~73.8 in NVFP4 table), suitable for complex multimodal and technical tasks.
- **Context window: 92/100.** Designed for up to 1M tokens of context (deployment-dependent; repo metadata notes native 1M with host-served 262K in some contexts), enabling long documents, video frames, and extended agent interactions.
- **Multimodal: 92/100.** Native vision-language model handling text, images, and video inputs with text output; model card includes broad multimodal/document/video benchmarks and vLLM/SGLang/TRT-LLM examples for image/video serving.
- **Coding: 84/100.** Reports solid coding/agentic coding results (e.g. SWE-bench Verified ~71.07 NVFP4, Terminal-Bench 2.1 ~62.78, SWE-bench Pro ~51.3) and supports coding-agent deployments, though it is more of a multimodal generalist than a pure coding specialist.
- **Cost efficiency: 88/100.** Open-weight release (OpenMDW-1.1) with NVFP4 optimization for efficient inference and support across Hopper/Blackwell/DGX Spark/RTX systems; self-hosting can be cost-effective for teams with NVIDIA infrastructure, while hosted pricing varies.
- **Overall Score: 85/100.** A capable and efficient open multimodal/video-agent model with strong reasoning and deployment flexibility, best when paired with appropriate NVIDIA serving stacks and validated for target workloads.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4
  - https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf
  - https://developer.nvidia.com/nemotron
