# Qwen3.5-27B — findings by GPT 6 Sol

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-27B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Distinct **dense** open-weight 27B-class vision-language checkpoint released February 24, 2026, not the Qwen3.5-35B-A3B or 122B-A10B MoE ([Qwen official model card](https://huggingface.co/Qwen/Qwen3.5-27B), [Alibaba hosted ID](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-27b)).
- **Provider / access:** Apache-2.0 weights `Qwen/Qwen3.5-27B` for self-hosting; Alibaba Cloud `qwen3.5-27b` in several regions. Thinking is default and can be disabled via request parameters, **not** another checkpoint. Tool calling requires a compatible parser in self-hosted inference ([Qwen card](https://huggingface.co/Qwen/Qwen3.5-27B)).
- **Context window:** **262,144 native**, optionally extended to ~1,010,000 via static YaRN scaling (possible short-context penalty); hosted [Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-27b) allows 260,096 input tokens, 258,048 in thinking, with 65,536 maximum output. 1M is not native verified retrieval quality.
- **Modalities:** Native text, image and video in; text out. Video frame sampling depends on deployment and context budget ([Qwen card](https://huggingface.co/Qwen/Qwen3.5-27B), [Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-27b)).
- **Pricing (2026-11-01):** Open weights without license token fee, self-host compute charged separately. Alibaba Singapore **$0.30/$2.40 per million input/output**; Beijing/Frankfurt/Virginia **$0.086/$0.688 at ≤128K input** and **$0.258/$2.064 above 128K**. The official ID offers **no context cache or batch** ([Alibaba pricing](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-27b)).
- **Architecture:** ~27.8B dense parameters including vision encoder, 64 transformer layers with Gated DeltaNet/attention hybrid ([Qwen](https://huggingface.co/Qwen/Qwen3.5-27B), [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-27b)).

### Raw benchmarks found

- **Tool use / agents:** Vendor [BFCL-v4 **68.5%**, τ²-Bench **79.0%**, BrowseComp **61.0%**, OSWorld-Verified **56.2%**, ScreenSpot Pro **70.3%**](https://huggingface.co/Qwen/Qwen3.5-27B). τ² airline uses published fixes, search benchmarks prune tool-history after 256K. No independent end-to-end tool score for this exact checkpoint located; these are vendor evaluations, not hosted AA reruns.
- **Reasoning:** Qwen reports [GPQA Diamond **85.5%**, MMLU Pro **86.1%**, HLE without tools **24.3%**, HMMT Feb 2025 **92.0%**](https://huggingface.co/Qwen/Qwen3.5-27B). Independently submitted [EvalEval GPQA **81.82%**](https://huggingface.co/Qwen/Qwen3.5-27B/discussions/47) with a [linked evaluation record](https://huggingface.co/datasets/evaleval/EEE_datastore/blob/192329fb7d6b15b7b0936a1a58ae862aa7e8ba24/flat/objects/5b/a4/5ba4cf19-18b3-4d08-bad0-ef29422cb18a.json); prompt/sample differences can explain ~3.7 points. The HF `default` **85.5** row is the *vendor's* result, not a second independent run.
- **Coding:** Vendor [SWE-bench Verified **72.4%**, Terminal-Bench 2.0 **41.6%**, LiveCodeBench v6 **80.7%**, FullStackBench English **60.1%**](https://huggingface.co/Qwen/Qwen3.5-27B). These measure different tasks and harnesses; no exact-checkpoint independent SWE-bench reproduction confirmed from available sources. [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-27b) marks the old evaluated deployment deprecated for Qwen3.6 and its *current* Intelligence Index **N/A**, not zero.
- **Long context / vision:** Vendor [AA-LCR **66.1%**, LongBench v2 **60.6%**, MMMU Pro **75.0%**, VideoMME with subtitles **87.0%**, OSWorld-Verified **56.2%**](https://huggingface.co/Qwen/Qwen3.5-27B). Independently sourced [OmniCompass-VL **28.9**](https://huggingface.co/Qwen/Qwen3.5-27B/discussions/52) uses a separate multimodal benchmark; its scale is not interchangeable with MMMU percentage. No controlled near-1M YaRN recall result.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor BFCL 68.5/τ² 79.0 and search BrowseComp 61, with agent-harness uncertainty.
- **Reasoning: 77/100.** Vendor GPQA 85.5/HLE 24.3 and independent EvalEval GPQA 81.82.
- **Context window: 76/100.** Native 262K, experimental 1M YaRN and vendor AA-LCR 66.1; no near-cap check.
- **Multimodal: 77/100.** Vendor MMMU Pro 75, video understanding 87; independent OmniCompass coverage, no native audio/video output.
- **Coding: 71/100.** Vendor SWE Verified 72.4, LCB 80.7, TB2.0 41.6; limited independent repo validation.
- **Cost efficiency: 87/100.** Apache-2.0 dense 27B and low API rates, tempered by memory/vision compute and no hosted caching.
- **Overall Score: 75/100.** Half-up mean (72 + 77 + 76 + 77 + 71) / 5 = 74.6. Strong multimodal open-weight compact model; most agent figures remain vendor-reported.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01
- Method: Three separate web searches across model, dataset and app indexes while native web-search integration returned no results, followed by official Qwen/Alibaba and independent EvalEval/AA source review. Separated independent runs from vendor rows replicated on HF; normalized scores are interpretive.
- Reference URLs:
  - [Qwen official 27B weights and per-checkpoint benchmarks](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Alibaba Cloud 27B hosted specs and regional prices](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-27b)
  - [EvalEval exact-checkpoint submission](https://huggingface.co/Qwen/Qwen3.5-27B/discussions/47)
  - [OmniCompass independent evaluation submission](https://huggingface.co/Qwen/Qwen3.5-27B/discussions/52)
  - [Artificial Analysis older deployment profile](https://artificialanalysis.ai/models/qwen3-5-27b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
