# MiMo-V2.6-Distill-Qwen-9B — findings by GPT 6 Astra

- Source: MiMo-V2.6-Distill-Qwen-9B public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- Xiaomi MiMo, 9B dense Qwen3.5-derived SFT research checkpoint, MIT; September 2026 availability, cutoff unverified. Image/text input, text output, reasoning/tools. [Official card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).
- Native configured context 262,144; output limit unverified. [Config](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B/raw/main/config.json).
- Featherless FP8 route: 32K context, USD/M $0.1078 input/$0.0862 cached/$0.28 output; September 21 publication listing. Route limits differ from native weights. [Provider](https://featherless.ai/models/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).

### Raw benchmarks found

Vendor SFT: SWE Verified avg@3 61.1, SWE Pro avg@3 44.6; AutomationBench v1.0.6 avg@1 30.3, Terminal Bench 2.1 37.1, Toolathlon-Verified 35.2, OfficeQA 19.5. Internal visual coding mini 64.0 is not MMMU. [Vendor](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).
Independent AxionML BF16 baseline: GPQA Diamond four-run mean 51.64 with 32K generation budget; AIME2025 eight-run mean 37.92; MMMU-Pro standard 49.36 at 16K. SGLang 0.5.20, sgl-eval 0.1.2, thinking on; many generations hit limits. These are original BF16 baseline values, not quantized-column values. [Evaluator](https://huggingface.co/AxionML/MiMo-V2.6-Distill-Qwen-9B-NVFP4). HLE and long-context retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 54/100.** Moderate measured automation and terminal ability.
- **Reasoning: 48/100.** Budget-limited independent GPQA/AIME support a modest estimate.
- **Context window: 75/100.** Native configuration supports 262K, retrieval unverified; hosted route is shorter.
- **Multimodal: 63/100.** Measured image reasoning; no verified audio output capability.
- **Coding: 63/100.** SWE Pro useful; terminal result limits broader coding score.
- **Cost efficiency: 98/100.** Low-cost hosted FP8 route; self-hosting is not free compute.
- **Overall Score: 61/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

