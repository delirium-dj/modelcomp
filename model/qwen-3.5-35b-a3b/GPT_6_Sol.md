# Qwen3.5-35B-A3B — findings by GPT 6 Sol

- Source: Qwen/Alibaba (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B. Released February 2026 under Apache-2.0. Its **35B total / 3B active** sparse MoE language model plus vision encoder uses gated DeltaNet and attention. Hugging Face's automated **36B** tensor count is a rounded repository inventory, not evidence of another checkpoint ([Qwen official card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B), [Artificial Analysis profile](https://artificialanalysis.ai/models/qwen3-5-35b-a3b)).
- **Identity:** Qwen explicitly says its hosted `Qwen3.5-Flash` corresponds to these weights, adding production tools and a 1M serving window; it is **not an independently verified new set of weights**. This report scores the downloadable 35B-A3B checkpoint, not a second Flash tier. Thinking/nonthinking settings and quantizations likewise do not make new checkpoints ([official card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)).
- **Context/modalities:** Native **262,144** tokens; optional YaRN extension to ~1,010,000 is extrapolation that may degrade short-input quality, not a native million-token guarantee. Text, image and video input with text output; no native audio generation or perception shown in the model card. AA's older deployment profile lists only text/image input because its evaluated API configuration was narrower ([Qwen](https://huggingface.co/Qwen/Qwen3.5-35B-A3B), [AA](https://artificialanalysis.ai/models/qwen3-5-35b-a3b)).
- **Cost:** Open weights have no model license fee but do incur GPU and power costs. AA's historical Alibaba API sample lists **$0.25 input / $2.00 output per million**, **151.6 tokens/s**; that price is deployment-specific, not a universal tariff for self-hosted weights. AA now says its intelligence series is deprecated and **no publicly available API** for current Index v5, not that weights vanished ([AA](https://artificialanalysis.ai/models/qwen3-5-35b-a3b)).

### Raw benchmarks found

- **Tool use:** Vendor [BFCL-V4 **67.3%**, τ²-Bench **81.2%** (airline fixes specified), BrowseComp **61.0%**, OSWorld-Verified **54.5%**, AndroidWorld **71.1%**](https://huggingface.co/Qwen/Qwen3.5-35B-A3B). [BenchLM's AA-credited historical τ² **89.2%**](https://benchlm.ai/models/qwen3-5-35b-a3b) is 8 points higher; independent harness/snapshot is not documented sufficiently to resolve the discrepancy. Preserve both with attribution, rather than silently replacing the official result.
- **Reasoning:** Qwen [GPQA Diamond **84.2%**, MMLU-Pro **85.3%**, HLE with CoT **22.4%**](https://huggingface.co/Qwen/Qwen3.5-35B-A3B). A separately submitted [Hugging Face GPQA evaluation **85.35%**](https://huggingface.co/Qwen/Qwen3.5-35B-A3B/discussions/78) differs by 1.15 points, not a new model; [BenchLM source-linked AA historical GPQA **84.5%**, HLE **21.0%**, Omniscience hallucination **85.4%**](https://benchlm.ai/models/qwen3-5-35b-a3b) indicate strong examinations but weaker factual calibration. AA v5 N/A is *not* zero.
- **Coding:** Vendor [SWE-bench Verified **69.2%**, Terminal-Bench 2 **40.5%**, LiveCodeBench v6 **74.6%**](https://huggingface.co/Qwen/Qwen3.5-35B-A3B). Source-linked independent [SWE-Rebench **53.7%**](https://benchlm.ai/models/qwen3-5-35b-a3b) covers a different repository sample/harness, not a direct replication of SWE Verified. Do not transfer performance from the hosted Flash variant or another Qwen size.
- **Context and multimodal:** Qwen [AA-LCR **58.5%**, LongBench v2 **59.0%**, MMMU-Pro **75.1%**, VideoMME without subtitles **82.5%**, ScreenSpot Pro **68.6%**](https://huggingface.co/Qwen/Qwen3.5-35B-A3B). [BenchLM source-linked AA historical AA-LCR **72.0%** and AA-MMMU-Pro **72.7%**](https://benchlm.ai/models/qwen3-5-35b-a3b) do not match the vendor's similarly named LCR result (13.5-point difference); protocol/snapshot may differ but is not established. The two MMMU-Pro results are from different evaluators. No measured near-1M retrieval proof for the optional YaRN stretch.

### Normalized scores (1–100)

- **Tool use: 73/100.** Good τ²/BFCL and computer-use scores tempered by the 81.2/89.2 measurement gap and 54.5 OSWorld.
- **Reasoning: 77/100.** GPQA ~84–85, MMLU-Pro 85.3 and HLE ~21–22, discounted for hallucination.
- **Context window: 72/100.** 262K native, weaker vendor long-context results and unsupported near-1M reliability.
- **Multimodal: 77/100.** Vision/video understanding with MMMU-Pro ~73–75 and VideoMME 82.5; text output only.
- **Coding: 73/100.** SWE Verified 69.2 and LCB 74.6, but tougher independent SWE-Rebench 53.7 and TB2 40.5.
- **Cost efficiency: 86/100.** Apache weights and low active parameter count; provider-specific output pricing and GPU footprint still matter.
- **Overall Score: 74/100.** Half-up mean (73 + 77 + 72 + 77 + 73) / 5 = 74.4; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model, dataset and full-text catalog searches; direct Qwen weight/card and independent AA/BenchLM source-linked archive review. Vendor and independent benchmark protocols and hosted-route identity are explicitly distinguished.
- Reference URLs:
  - [Qwen official model card, benchmark tables, architecture and YaRN caveats](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Independent Hugging Face GPQA evaluation submission](https://huggingface.co/Qwen/Qwen3.5-35B-A3B/discussions/78)
  - [Artificial Analysis Qwen3.5-35B-A3B deployment profile](https://artificialanalysis.ai/models/qwen3-5-35b-a3b)
  - [BenchLM source-linked benchmark archive](https://benchlm.ai/models/qwen3-5-35b-a3b)
- Future sources: add a new file next to this one using the same headings.
