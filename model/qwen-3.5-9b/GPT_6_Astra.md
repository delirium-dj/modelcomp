# Qwen3.5 9B — findings by GPT 6 Astra

- Source: Alibaba Qwen / Qwen3.5-9B
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Qwen3.5-9B, post-trained model, not Base.
- **Short description:** Compact open-weight vision-language model for reasoning and tool-assisted tasks.
- **Provider / access / IDs:** OpenRouter Chat Completions `qwen/qwen3.5-9b`; weights `Qwen/Qwen3.5-9B`. No verified Zen Free ID found. [API listing](https://openrouter.ai/qwen/qwen3.5-9b)
- **Release / knowledge:** OpenRouter listing dated March 10, 2026; not asserted as the original weight-release date. Knowledge cutoff not verified. [Listing](https://openrouter.ai/qwen/qwen3.5-9b)
- **Context window:** Native 262,144; configurable extension to 1,010,000 is not the hosted default. [Publisher card](https://huggingface.co/Qwen/Qwen3.5-9B). Hosted maximum completion 65,536. [API limits](https://openrouter.ai/qwen/qwen3.5-9b)
- **Modalities:** Text/image/video input, text output; reasoning, tools and structured outputs, with host-dependent support. [API listing](https://openrouter.ai/qwen/qwen3.5-9b)
- **Pricing (2026-10-05):** Paid Darkbloom route: $0.08 input / $0.13 output / $0.04 cache reads per million tokens. Self-hosting still incurs compute expense. [Provider prices](https://openrouter.ai/qwen/qwen3.5-9b)
- **Architecture:** Apache-2.0, 9B dense language model with vision encoder; hybrid DeltaNet/attention. The family-wide MoE description does not make this checkpoint MoE. [Architecture](https://huggingface.co/Qwen/Qwen3.5-9B)

### Raw benchmarks found

Publisher-reported post-training results; no independent replication claimed. [Benchmark tables](https://huggingface.co/Qwen/Qwen3.5-9B)

| Group | Benchmark | Result |
|---|---|---:|
| Tools | BFCL v4 | 66.1% |
| Tools | Tau2-Bench | 79.1% |
| Tools | VITA-Bench / DeepPlanning | 29.8% / 18.0% |
| Reasoning | GPQA Diamond | 81.7% |
| Reasoning | MMLU-Pro | 82.5% |
| Coding | LiveCodeBench v6 | 65.6% |
| Coding | OJBench | 29.2% |
| Context | AA-LCR / LongBench v2 | 63.0% / 55.2% |
| Vision | MMMU / MMMU-Pro | 78.4% / 70.1% |
| Documents | OmniDocBench 1.5 | 87.7 |
| Video | VideoMME, without subtitles | 78.4% |

Tau2 uses airline-domain fixes described by Qwen; long-context reasoning is not equivalent to perfect retrieval at the extended maximum. Terminal-Bench 2.1, Tau3-Banking, GDPval-AA Elo, Claw-Eval, Toolathlon, MCP-Atlas, HLE, CritPt, Omniscience, SWE-bench Verified/Pro, SciCode and Vibe Code Bench: no verified public score recovered from primary sources in this pass. Aggregated third-party scores were not substituted for directly verified evaluation records.

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling and service agents are promising; weaker planning and VITA results cap broader agent confidence.
- **Reasoning: 70/100.** Strong science/knowledge performance, with limited verified hard-reasoning coverage.
- **Context window: 75/100.** Scores the native 256K tier, not the optional million-token extension.
- **Multimodal: 85/100.** Substantial document, image and video evidence; no native audio verified.
- **Coding: 61/100.** Useful competitive programming results, without verified repository-repair evidence.
- **Cost efficiency: 99/100.** Extremely low paid rates and a small deployable checkpoint; hosting is not free.
- **Overall Score: 71/100.** Half-up mean: (62 + 70 + 75 + 85 + 61) / 5 = 70.6. Best fit is inexpensive multimodal processing and bounded tools.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate signed report alongside this file.
