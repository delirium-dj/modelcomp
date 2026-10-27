# Nemotron 3.5 Bolt 74B-A9B — findings by GPT 6 Astra

- Source: NVIDIA / Nemotron 3.5 Bolt 74B-A9B 24GB
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Local vision-language agent model; this assessment uses the released 24GB IQ2 deployment. Higher BF16 research-checkpoint scores are listed separately, not mixed into the deployment result.
- **Release / cutoff:** October 15, 2026, [NVIDIA release](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/); knowledge cutoff not verified.
- **Access / IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` and `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF`; local vLLM/llama.cpp. No public metered endpoint or Zen Free ID established.
- **Architecture:** 74B total/9B active, Mamba-2/Transformer LatentMoE, C-RADIO v4-H vision encoder, compressed from 120B-A12B Super VL with Star Elastic and quantization-aware distillation. Experts use IQ2_XXS at 2.0625 bits/element; OpenMDW-1.1 license.
- **Context:** Up to 262,144; prompt, visuals, tools and generated output share the window. Independent universal maximum-output limit not established. Actual deployment recipes may reduce context.
- **Modalities:** Text/images/video in, text out; thinking toggled through chat template; agentic tool workflows supported. No native audio verified.
- **Cost:** No verified per-token API tariff. Open weights remove license-token fees, not GPU/energy costs. The 24GB packed model claim is not a universal end-to-end VRAM requirement.

### Raw benchmarks found

[NVIDIA checkpoint card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB) and [technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-Technical-Report.pdf), vendor IQ2 results:

| Benchmark | IQ2 24GB | BF16 comparison, not scored |
|---|---:|---:|
| Terminal-Bench 2.1 | 50.98% | 53.93% |
| Tau3 Banking | 17.01% | 17.01% |
| MCP-Atlas public | 52.20% | 55.60% |
| PinchBench | 87.82% | 90.35% |
| BrowseComp | 66.75% | 70.00% |
| WebArena vision | 50.86% | 50.25% |
| GPQA Diamond | 86.43% | 88.83% |
| HLE no tools | 25.30% | 28.73% |
| SciCode | 41.02% | 44.49% |
| AA-LCR | 64.06% | 67.38% |
| Omniscience accuracy | 16.90% | 21.80% |
| Omniscience non-hallucination | 61.27% | 56.14% |

Vendor GDPVal-AA-V2 reports 28.47 on its table scale, **not Elo**; no conversion to an Elo score is assumed. IFBench instruction-loose 66.17%. No measured exact-checkpoint SWE-bench, LiveCodeBench, DeepSWE or Claw-Eval score established.

[AA independent launch](https://artificialanalysis.ai/articles/nemotron-3-5-super-and-bolt) reports Intelligence Index 21.4, AutomationBench 15.5%, AA-Briefcase 912 Elo, HLE approximately 25%, and AA-LCR approximately 70%. [Current comparison](https://artificialanalysis.ai/models/comparisons/nemotron-3-5-bolt-74b-a9b-vs-nemotron-3-5-super-vl) gives GDPval-AA v2.1 979 Elo, TB4 0%, SciCode 40%, HLE 25%, CritPt 4%, Omniscience −19, AA-LCR v1.1 70%, and 82K output tokens/task (65K reasoning). AA's public display does not fully specify the deployed quantization in the retrieved comparison, so these are corroborating named-model results rather than a guaranteed reproduction of IQ2.

### Efficiency and discrepancies

[NVIDIA research page](https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/) measures 83.99 tokens/s on SPEED-Bench-Coding and AA-AgentPerf Local replay 600.80 seconds with LiLiCorr on its RTX Spark configuration. Those are **vendor-run** benchmarks even when the benchmark name includes AA. Qwen/Gemma comparison systems are faster in that table, so Bolt is not universally fastest.

The report's memory estimate at 131,072 context is 22.01GB weights, 0.87GB cache/activations and 0.96GB drafter, approximately 23.83GB total; vision components are separately listed. [Qovery's deployment review](https://www.qovery.com/blog/self-host-nemotron-3-5-bolt-single-gpu-agentic-inference) discusses larger practical GPUs and idle-hour costs. Its quoted L40S cloud instance $1.861/hour is a deployment example, not a model API price; combining it with another GPU's 84 tokens/s would produce an invalid cost estimate.

[ANTM](https://www.antm.ai/articles/nvidia-nemotron-3-5-bolt-74b-in-24gb-local-agent-model) reproduces NVIDIA's quantization losses rather than running independent evaluations. [BenchmarkList](https://benchmarklist.com/models/nvidia-nemotron-3.5-bolt-74b-a9b/) headlines BF16 PinchBench 90.35 and BrowseComp 70 under a generic name; the IQ2 numbers are lower. [Benchgap](https://benchgap.net/model/nemotron-3-5-bolt-74b-a9b) includes 81 estimated rows: predicted SWE, LiveCodeBench, MRCR and Claw results are excluded. [QAI](https://qai.io/models/nvidia/nemotron-3.5-bolt-74b-a9b) corroborates absence of a listed metered provider.

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.1 50.98, Tau3 17.01 and MCP 52.2 support moderate agent competence; weak independent automation caps autonomy.
- **Reasoning: 77/100.** GPQA 86.43 and HLE approximately 25 are strong, tempered by low factual accuracy and CritPt approximately 4.
- **Context window: 74/100.** Native 262K and measured LCR 64–70 support this tier; practical memory constraints and absent full-window retrieval cap confidence.
- **Multimodal: 78/100.** Verified image/video input and WebArena vision 50.86 support visual agents; missing broad vision quality tests and audio cap breadth.
- **Coding: 70/100.** SciCode approximately 40–41 and TB2.1 approximately 51 support useful coding; no verified repository-repair result.
- **Cost efficiency: 70/100.** Provisional deployment-efficiency judgment from 24GB packing and measured local throughput; no verified per-token price, and utilization/hardware dominate actual cost. This is not a claim of $0 inference.
- **Overall Score: 73/100.** (65 + 77 + 74 + 78 + 70) / 5 = 72.8 → 73; promising local visual agents with quantization and factual-reliability tradeoffs.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three targeted public web searches, primary checkpoint/report, independent evaluation and deployment/quantization reconciliation; normalized scores are interpretations, with cost explicitly provisional.
