# Nemotron 3.5 Bolt 74B-A9B — findings by GPT 5.6 Luna

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's open-weight vision-language MoE for local agentic work. The exact tracked checkpoint is an IQ2 24GB build intended to balance tool-use quality and single-device memory/speed.
- **Provider / access:** Self-hosted through an OpenAI-compatible local server using Transformers/vLLM; no hosted API endpoint is claimed by the official card.
- **Release / knowledge:** Released 2026-10-15; post-training data cutoff May 2026 (NVIDIA model card).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (Hugging Face); no OpenCode Zen Free ID or per-token hosted price verified.
- **Context window:** Up to 262,144 tokens (256K), including text, visual inputs, history, tool results, and response; verified in the official model card and vLLM launch configuration. Individual deployments may choose a smaller limit.
- **Modalities:** Text, image, and video input; text output; optional thinking mode; tool calls and JSON output supported. The official card documents `enable_thinking=True/False`, automatic tool choice, and JSON-capable output.
- **Pricing (as of 2026-10-23):** Open weights under OpenMDW-1.1; no per-token list price because this exact entry is self-hosted. Local hardware and serving costs still apply.
- **Architecture:** 74B total / 9B active, Mamba-2–Transformer hybrid LatentMoE with a C-RADIO v4-H vision encoder; IQ2 2-bit quantization with quantization-aware distillation; OpenMDW-1.1 license.

### Raw benchmarks found

> Exact-model figures below are for `NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` only. Results for other Nemotron sizes, precisions, or family members were excluded.

Agent / tool use:

- GDPVal-AA-V2 (**NVIDIA model-card evaluation**): **28.47**.
- Terminal-Bench 2.1 (**NVIDIA model-card evaluation**): **50.98%**.
- Tau3 Banking (**NVIDIA model-card evaluation**): **17.01**.
- MCP-Atlas (**NVIDIA model-card evaluation, 500 public-task subset**): **52.20**.
- BrowseComp (**NVIDIA model-card evaluation**): **66.75**.
- WebArena (vision) (**NVIDIA model-card evaluation**): **50.86%**.
- PinchBench (**independent PinchBench leaderboard, 10 runs**): **87.8% average**, **90.1% best**; the NVIDIA card reports **87.82%**. The 0.02-point difference is rounding, not a model-identity conflict.
- AIPerf SPEED-Bench-Coding (**NVIDIA measurement on RTX Spark, IQ2 with the exact model's published serving setup**): **83.99 tokens/s**.
- AA AgentPerf Local (**NVIDIA replay measurement**): **600.80 seconds** replay duration.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond (**NVIDIA model-card evaluation**): **86.43%**.
- HLE, no tools (**NVIDIA model-card evaluation**): **25.30%**.
- Artificial Analysis LCR (**NVIDIA model-card evaluation**): **64.06%**.
- Artificial Analysis Omniscience accuracy (**NVIDIA model-card evaluation**): **16.90%**.
- Artificial Analysis Omniscience non-hallucination (**NVIDIA model-card evaluation**): **61.27%**.
- MRCR, CritPt, and Artificial Analysis Intelligence Index: **no verified public score found**.

Coding:

- SciCode (**NVIDIA model-card evaluation**): **41.02%**.
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- DeepSWE: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- Terminal-Bench 2.1: **50.98%** (NVIDIA model-card evaluation).

Long context:

- **No verified long-context retrieval benchmark reported.** The exact model card documents a 256K maximum context and training/recovery work at 128K, but that is not a measured retrieval score.

### Normalized scores (1–100)

- **Tool use: 73/100.** Terminal-Bench 50.98%, Tau3 Banking 17.01, MCP-Atlas 52.20, BrowseComp 66.75, WebArena 50.86%, and the independently listed PinchBench 87.8% show strong practical agent use, but the mid-range Terminal-Bench/Tau3 results and absent Claw-Eval cap the score.
- **Reasoning: 76/100.** GPQA Diamond 86.43%, HLE 25.30%, and LCR 64.06% are above the methodology's mid-band overall, while the lower omniscience accuracy and missing Index/MRCR/CritPt evidence prevent a frontier score.
- **Context window: 75/100.** The verified native limit is 256K, which falls in the methodology's 200K–500K tier; no retrieval result establishes a higher practical score.
- **Multimodal: 80/100.** The exact checkpoint accepts text, images, and video and returns text, matching the methodology's strong video-input tier but not the higher audio or non-text-output tier.
- **Coding: 75/100.** SciCode 41.02% and Terminal-Bench 50.98% provide verified coding evidence, but the absence of SWE-bench, LiveCodeBench, DeepSWE, and Vibe Code Bench results caps confidence.
- **Cost efficiency: 100/100.** The weights have no per-token charge; this is the methodology's $0/open-weight score, with local hardware costs noted separately.
- **Overall Score: 76/100.** The half-up mean of the five non-cost dimensions is `(73 + 76 + 75 + 80 + 75) / 5 = 75.8`, rounded to 76; best fit is a local multimodal agent with strong browsing/tool capability where 24GB deployment matters more than frontier coding depth.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: At least seven independent fresh web searches followed by exact-ID verification against NVIDIA's official research/model-card materials and independent benchmark listings. Conflicting figures were retained only when they were the same exact checkpoint and explained by rounding or harness context; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Sources

- NVIDIA official model card: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
- NVIDIA official technical blog: https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/
- NVIDIA official technical report: https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-Technical-Report.pdf
- PinchBench independent leaderboard: https://pinchbench.com/?slm=true
- Steel.dev WebArena leaderboard: https://leaderboard.steel.dev/leaderboards/webarena/?weights=open&sizes=tiny%2Csmall%2Cmedium
- Steel.dev BrowseComp leaderboard: https://leaderboard.steel.dev/leaderboards/browsecomp/?weights=open&sizes=tiny%2Csmall%2Cmedium
- Artificial Analysis AgentPerf Local benchmark repository: https://github.com/ArtificialAnalysis/aa-agentperf-local
- OpenMDW-1.1 license: https://openmdw.ai/license/1-1/
