# Mercury 3 — findings by GPT 5.6 Luna

- Source: Inception / Mercury 3
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception’s third-generation diffusion language model, aimed at real-time reasoning and agent workloads.
- **Provider / access:** Inception API, OpenAI-compatible; also OpenRouter, Baseten, and Vercel AI Gateway.
- **Release / knowledge:** 2026-10-19; knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-3`; no open-weight ID.
- **Context window:** 1M tokens; up to 131,072 output tokens (Inception/BenchmarkList).
- **Modalities:** Text in/text out, reasoning, tool use and structured output; no verified image/audio input.
- **Pricing (as of 2026-11-03):** $0.20/M input and $0.70/M output; launch discount $0.10/$0.35, cached input 90% off.
- **Architecture:** Proprietary diffusion model; parameter count undisclosed, stated to exceed Mercury 1 by 40x.

### Raw benchmarks found

- Tau3-Banking: **30.2%**, rank 38/183, 80th percentile (BenchmarkList; vendor-reported).
- IFBench: **76.8%**, rank 14/49, 73rd percentile (BenchmarkList; vendor-reported).
- GPQA Diamond: **89.2%**, rank 54/478, 89th percentile (BenchmarkList; vendor-reported).
- AA-LCR: **77.7%**, rank 75/419, 82nd percentile (BenchmarkList; vendor-reported).
- DeepSWE: **46.3%**, rank 14/27, 50th percentile (BenchmarkList; vendor-reported).
- DeepSearchQA: **71.3%**, rank 13/16, 20th percentile (BenchmarkList; vendor-reported).
- Inception reports **1,068 output tokens/second** on NVIDIA GPUs (launch post).
- Long-context retrieval: AA-LCR **77.7%** at the benchmark’s reported setting; no full-length curve found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau3-Banking 30.2% supports strong agentic ability; capped by vendor-only evaluation and limited tool benchmarks.
- **Reasoning: 89/100.** GPQA Diamond 89.2% is strong; capped by the self-reported harness.
- **Context window: 95/100.** Advertised 1M context and AA-LCR 77.7%; capped because no independent 1M retrieval curve was found.
- **Multimodal: 15/100.** Verified evidence covers text only; no image/audio/video input found.
- **Coding: 70/100.** DeepSWE 46.3% is competitive but middling; no independent coding result found.
- **Cost efficiency: 96/100.** Launch pricing is $0.10/$0.35 per million, with a strong speed claim.
- **Overall Score: 69/100.** Best fit is low-latency text reasoning and agent workflows, with multimodality and independently verified coding as limits.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-03 UTC
- Method: public internet research across the vendor announcement and an independent benchmark index; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Inception: Introducing Mercury 3](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [BenchmarkList: Mercury 3 scores and evals](https://benchmarklist.com/models/inception-mercury-3/)
