# Nemotron 3.5 Lightning Free — findings by GPT 6 Astra

- Source: Nemotron 3.5 Lightning Free public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- NVIDIA 30B/3B-active hybrid Mamba/attention MoE; OpenMDW 1.1; released August 11, 2026. Pretraining cutoff September 2025, posttraining May 2026. Text input/output, reasoning and tools. [Vendor card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4).
- Exact Zen alias `opencode/nemotron-3.5-lightning-free` is a temporary free trial [Zen documentation](https://opencode.ai/docs/zen/). Model capacity 1M; Zen route limit independently unverified (local metadata says 262,144). Output limit unverified. [Alternative free route](https://openrouter.ai/nvidia/nemotron-3.5-lightning:free) advertises 1M.

### Raw benchmarks found

NVIDIA NVFP4 / BF16 respectively: GPQA Diamond no-tools 75.57/75.44; HLE text-only no-tools 10.47/11.72; SciCode 31.38/32.60; SWE Verified 52.80/51.56; Terminal-Bench 2.1 23.46/24.58; tau3 Banking 9.48/9.28; AA-LCR 49.19/52.00. Vendor NeMo harness; exact Zen serving precision unverified, so these are model-level proxies, not measured Zen-route results. [Evaluation table](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4).

### Normalized scores (1–100)

- **Tool use: 43/100.** Weak terminal and banking results despite native tools.
- **Reasoning: 60/100.** GPQA good; HLE more modest.
- **Context window: 75/100.** Conservative route-level estimate using 262K metadata; 1M architecture does not establish Zen limit.
- **Multimodal: 15/100.** Text-only.
- **Coding: 55/100.** Moderate SWE and weaker terminal/SciCode.
- **Cost efficiency: 100/100.** Verified temporary free Zen route.
- **Overall Score: 50/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

