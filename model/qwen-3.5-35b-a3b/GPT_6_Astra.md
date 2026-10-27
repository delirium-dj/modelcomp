# Qwen3.5-35B-A3B — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.5-35B-A3B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Description:** Open-weight multimodal MoE for efficient reasoning, visual tasks and coding. Official card calls Qwen3.5-Flash its corresponding hosted version with additional production features; this report scores the explicit 35B checkpoint and its native-window endpoint.
- **Access / IDs:** Weights `Qwen/Qwen3.5-35B-A3B`; Alibaba Model Studio `qwen3.5-35b-a3b`, Chat Completions-compatible API. No distinct Zen Free ID verified.
- **Release / cutoff:** February 2026; exact day differs among catalogs, and official knowledge cutoff was not established.
- **Architecture:** 35B language parameters, 3B activated, vision encoder, 40 hybrid Gated DeltaNet/attention layers, 256 experts with eight routed plus one shared active; Apache 2.0. AA's 36B total includes a different component scope.
- **Context:** Native 262,144; configurable extension to 1,010,000. Official hosted output 65,536; ordinary maximum input 260,096, thinking input 258,048. Hosted Flash's default 1M is not assigned to this endpoint.
- **Modalities:** Text/image/video input; text output; thinking, tools and structured output. No native audio verified.
- **Pricing (2026-10-27):** Singapore $0.25/$2.00 input/output per million; Beijing/Frankfurt/Virginia $0.057/$0.459 up to 128K input and $0.229/$1.835 above. Context caching unsupported on the official card. Introductory Singapore quota is temporary; self-hosting has hardware costs.

### Raw benchmarks found

[Official model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B) provides the following vendor results:

| Area | Benchmark | Result |
|---|---|---:|
| Agent | BFCL v4 / Tau2 | 67.3% / 81.2% |
| Agent | VITA-Bench / DeepPlanning | 31.9% / 22.8% |
| Search | BrowseComp | 61.0% |
| Reasoning | GPQA Diamond / HLE CoT | 84.2% / 22.4% |
| Reasoning | HLE with tools | 47.4% |
| Knowledge | MMLU-Pro | 85.3% |
| Coding | SWE-bench Verified | 69.2% |
| Coding | Terminal-Bench 2 | 40.5% |
| Coding | LiveCodeBench v6 | 74.6% |
| Context | AA-LCR / LongBench v2 | 58.5% / 59.0% |
| Vision | MMMU-Pro / MathVision | 75.1% / 83.9% |
| Documents | OmniDocBench 1.5 | 89.3 |
| Video | VideoMME with / without subtitles | 86.6% / 82.5% |
| Visual agents | OSWorld-Verified / AndroidWorld | 54.5% / 71.1% |

The vendor's Tau2 uses airline-domain fixes, search uses context folding at 256K, and MathVision uses a prescribed reasoning/answer-format prompt. Visual tool scores with code interpreter must not be mixed with without-interpreter results.

[Independent AA reasoning comparison](https://artificialanalysis.ai/models/comparisons/qwen3-5-35b-a3b-vs-gpt-5-2): HLE 21%, CritPt 1%, AA-Omniscience −48 (index, not accuracy), AA-LCR v1.1 72%. Intelligence Index v4.3.2 **19 is estimated**, not a fully measured composite. [AA model page](https://artificialanalysis.ai/models/qwen3-5-35b-a3b) measures approximately 151 output tokens/s; comparison capture gives 146, a serving/time difference rather than a quality disagreement.

No verified reasoning-mode SciCode, Claw-Eval, Toolathon, MCP-Atlas, DeepSWE or Vibe Code Bench result was established. No verified high-recall retrieval at 512K+ found.

### Source reconciliation

- [GraySoft's AA-derived non-reasoning snapshot](https://graysoft.dev/benchmarks/alibaba-qwen3-5-35b-a3b-non-reasoning.html) has HLE 12.8, SciCode 29.3, Tau2 86.3 and Terminal-Bench v2.1 40.8. It describes a different operating mode and benchmark capture, not independent confirmation of this reasoning profile.
- [Official Alibaba specifications](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-35b-a3b) explicitly support image/video. [ModelPriceWatch](https://modelpricewatch.com/models/alibaba-qwen3-5-35b-a3b/) calls it text-only, an incomplete catalog field overridden by the primary source.
- [NYU Shanghai overview](http://rits.shanghai.nyu.edu/ai/qwen-3-5-medium-series-frontier-ai-that-fits-on-your-gpu/) repeats vendor numbers; it is useful corroboration of the launch record, not another benchmark run.
- Vendor LCR 58.5 and independent LCR v1.1 72 have different versions/settings. Neither proves lossless 1M retrieval. Thinking-token budgets and host quantization can materially change deployment results.

### Normalized scores (1–100)

- **Tool use: 64/100.** Tau2 81.2 and visual-agent results support practical tools; TB2 40.5 and DeepPlanning 22.8 limit autonomy.
- **Reasoning: 75/100.** GPQA 84.2 and independent HLE 21 support capable reasoning; CritPt 1 and Omniscience −48 cap reliability.
- **Context window: 74/100.** Native 262,144 with independent LCR 72; extended context lacks strong retrieval verification.
- **Multimodal: 82/100.** VideoMME 82.5 without subtitles, MMMU-Pro 75.1 and document tests support broad vision; no native audio/non-text output.
- **Coding: 71/100.** SWE Verified 69.2 and LiveCodeBench 74.6 are useful, but terminal execution is materially weaker.
- **Cost efficiency: 94/100.** $0.25/$2.00 Singapore and low regional prices make efficient inference attractive; total thinking tokens remain billable.
- **Overall Score: 73/100.** (64 + 75 + 74 + 82 + 71) / 5 = 73.2 → 73; a fast open multimodal model with moderate engineering autonomy.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three targeted public web searches, official checkpoint/provider specifications, independent evaluation and cross-site discrepancy review; normalized scores are interpretations, not vendor scores.
