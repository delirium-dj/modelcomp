# Ternary Bonsai 27B — findings by GPT-5.6 Terra

- Source: PrismML (`Ternary-Bonsai-27B`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** PrismML's ternary-weight derivative of Qwen3.6-27B, optimized to run a 27B-class reasoning model in roughly 7 GB of local weights.
- **Provider / access:** Downloadable GGUF variants for local inference; execution fidelity and speed vary by backend and file variant.
- **Release / knowledge:** Released July 2026; knowledge cutoff not verified.
- **IDs:** `prism-ml/Ternary-Bonsai-27B` and quantization-specific GGUF IDs.
- **Context window:** 262K was demonstrated in a reproducible 16 GB local setup; exact supported maximum depends on KV-cache quantization.
- **Modalities:** Text; separate multimodal capability is not verified for this first-generation model.
- **Pricing:** Open-weight local deployment; no stable API price was verified.
- **Architecture:** 27B-class ternary derivative of Qwen3.6-27B; published artifacts range from about 4 GB binary to about 7 GB ternary variants.

### Raw benchmarks found

Reasoning / knowledge:

- Vendor category averages: math **93.40**, knowledge/reasoning **76.96**, and 15-benchmark thinking average **80.49**; all are PrismML results.
- Independent 16 GB replication: AIME26 **86.7%** at a 60K budget and MMLU-Redux **87.1%** (n=342). The same study shows that token-budget caps materially affect results.

Agent / tool use:

- Vendor category average for agentic tool calling: **74.01**.

Coding:

- Vendor category average for coding: **85.96**.
- Independent 16 GB replication: LiveCodeBench **52.0%** (n=50, 14K budget); terminal-agent community testing on a 2-bit variant reports Terminal-Bench 2.0 at **7.9%**.

Long context:

- Independent test demonstrated **262K** context in 12.9 GiB VRAM with q4 KV cache. No benchmarked long-context retrieval score was found.

Multimodal:

- Vendor category average for vision: **65.19**. No exact-model independent multimodal evaluation was found.

### Normalized scores (1–100)

- **Tool use: 74/100.** PrismML reports 74.01 for agentic tool calling, but no independent tool-use replication was found.
- **Reasoning: 82/100.** Strong independent AIME26/MMLU-Redux results support real reasoning ability, while the vendor's broader 76.96 category and budget-sensitive convergence prevent a higher rating.
- **Context window: 83/100.** A reproducible 262K context on a 16 GB GPU is excellent for the footprint, but no long-context retrieval benchmark validates quality across that window.
- **Multimodal: 70/100.** The only available vision figure is PrismML's 65.19 category average; modality support and independent testing are insufficient for a strong score.
- **Coding: 75/100.** Vendor coding average is 85.96, but independent LiveCodeBench at 52.0% and Terminal-Bench at 7.9% identify a pronounced gap on agentic coding.
- **Cost efficiency: 97/100.** A 27B-class model running locally in roughly 7 GB and fitting a 262K context in 16 GB VRAM offers exceptional cost and hardware efficiency.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions: (74 + 82 + 83 + 70 + 75) / 5 = 76.8. Best for local, token-budgeted reasoning workloads, not unattended terminal agents.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across vendor documentation, independent reproducible low-bit evaluation, a fidelity study, and local-use analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Independent 16 GB reproducible evaluation](https://github.com/Astezelex/bonsai-27b-16gb-bench)
  - [Independent fidelity study](https://github.com/Tsotchke-Corporation/bonsai-fidelity-study)
  - [Vendor-vs-independent review](https://wavect.io/blog/bonsai-27b-phone-local-ai-review/)
  - [Benchmark field guide](https://chaiwithjai.com/blog/ternary-bonsai-27b-quality-benchmarks)
  - [Community runtime benchmarks](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/community-benchmarks/ternary-bonsai/README.md)
