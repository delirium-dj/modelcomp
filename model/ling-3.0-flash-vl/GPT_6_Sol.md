# Ling 3.0 Flash VL — findings by GPT 6 Sol

- Source: InclusionAI (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name / identity:** Ling 3.0 Flash VL, InclusionAI's **vision-language extension** of Ling 3.0 Flash, with its own released weights; do not treat FP8/FP4/INT4 quantizations as further base checkpoints ([official model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)).
- **Access / architecture:** MIT-licensed downloadable weights, self-hostable via SGLang/vLLM Chat Completions. **124B total / 5.5B active** sparse MoE, hybrid KDA/Gated-MLA text backbone with vision encoder and VideoRoPE; released September 2026 ([official card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL), [Artificial Analysis profile](https://artificialanalysis.ai/models/ling-3-0-flash-vl)).
- **Context / modalities:** Up to **256K** with vendor's YaRN factor-2 serving recipe (native original max-position setting **131,072**); text, image and video input, **text output**. Reasoning defaults on; structured tool calls supported by Ling-specific parsers. No native audio or image generation claimed ([official card and serving instructions](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)).
- **Price (2026-11-01):** No verified first-party hosted per-token tariff; downloadable weights are license-free but require multi-GPU infrastructure (official recipe suggests four 141GB-class or eight 80GB-class cards). Do not equate open license with free inference ([official card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL), [AA availability](https://artificialanalysis.ai/models/ling-3-0-flash-vl)).

### Raw benchmarks found

- **Agent / tool use:** Independent [GDPval-AA normalized **33.0%**](https://benchlm.ai/models/ling-3-0-flash-vl). Vendor mentions AA-protocol Terminal-Bench 2.1 (Terminus 2, three runs, two-hour timeout) but the publicly accessible text [does not state a numeric score](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL); no value inferred from its chart.
- **Reasoning:** [AA-GPQA Diamond **86.2%**, AA-HLE **22.0%**, CritPt **2.0%**](https://benchlm.ai/models/ling-3-0-flash-vl). The [vendor cites AA Intelligence Index v4.1.1 **42**](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL), but AA's current v5 page has **N/A**, so 42 is historical and not a 2026 v5 score ([AA profile](https://artificialanalysis.ai/models/ling-3-0-flash-vl)).
- **Coding:** Independent [AA-SciCode **44.2%**](https://benchlm.ai/models/ling-3-0-flash-vl). No verified SWE-bench or LiveCodeBench exact-VL figure established; don't transfer text sibling's scores.
- **Long context:** Independent [AA-LCR **78.3%**](https://benchlm.ai/models/ling-3-0-flash-vl). This supports nontrivial retrieval but does not verify the full 256K advertised context or its YaRN extension.
- **Vision:** Independent [AA-MMMU-Pro **79.0%**](https://benchlm.ai/models/ling-3-0-flash-vl); video comprehension is supported by the vendor's model and endpoint but no independent exact-ID long-video score found ([official card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)).

### Normalized scores (1–100)

- **Tool use: 73/100.** Independent GDPval 33 and native tool parser, capped by no accessible numeric terminal-agent result.
- **Reasoning: 82/100.** AA GPQA 86.2 and HLE 22, held back by very low CritPt.
- **Context window: 77/100.** 256K via YaRN; AA-LCR 78.3 is helpful but no near-limit measurement.
- **Multimodal: 83/100.** Image/video input and strong independent MMMU-Pro 79; no audio or non-text output.
- **Coding: 68/100.** AA-SciCode 44.2; repository repair remains unverified.
- **Cost efficiency: 88/100.** MIT weights and sparse 5.5B active compute, offset by 124B memory and unverified hosted pricing.
- **Overall Score: 77/100.** Half-up mean (73 + 82 + 77 + 83 + 68) / 5 = 76.6; strong visual reasoning, uncertain code-agent reliability.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate Hugging Face model, full-text and dataset searches; exact-ID official architecture/serving review against source-linked independent AA historical benchmark data. Normalized scores are judgment, not official benchmarks.
- Reference URLs:
  - [InclusionAI Ling 3.0 Flash VL weights and official evaluation](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [BenchLM source-linked exact-variant results](https://benchlm.ai/models/ling-3-0-flash-vl)
  - [Artificial Analysis model specifications and current index status](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
- Future sources: add a new file next to this one using the same headings.
