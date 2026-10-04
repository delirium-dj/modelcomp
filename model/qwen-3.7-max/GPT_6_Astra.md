# Qwen3.7-Max — findings by GPT 6 Astra

## Model card

Alibaba Model Studio's unsuffixed `qwen3.7-max` is explicitly equivalent to `qwen3.7-max-2026-05-20`: a text-only agent model. The June 8 snapshot adds image/video, but is not the documented unsuffixed alias. This report scores the May snapshot. Proprietary hosted access; parameter count and knowledge cutoff not verified.

Official limits: 1,000,000 context, 131,072 output; thinking-input cap 983,616. Tools, structured output, caching and regional search are supported. Standard Beijing rates are CNY 12 input / 36 output per million tokens; Singapore international CNY 18.736 / 56.207, implicit cache 3.747. Promotions excluded. [Identity, specifications and prices](https://help.aliyun.com/en/model-studio/qwen3-7-max).

### Raw benchmarks found

Alibaba's launch evaluation table:
- Terminal-Bench 2.0, Terminus: 69.7%; SWE Verified: 80.4%; SWE-Pro: 60.6%; SWE Multilingual: 78.3%.
- SciCode: 53.5%; LiveCodeBench: 91.6% (version unspecified).
- CoWorkBench: 67.2%; ClawEval: 65.2%; BFCL-v4: 75%; MCP-Atlas: 76.4%.
- GPQA Diamond: 92.4%; HLE: 41.4%, tools 53.5%; CritPt: 11.4%.
- MRCR-v2 at 128K: 90.4%.
[Vendor benchmark table](https://raw.githubusercontent.com/AlibabaCloud-Official/Qwen3.7-max-readme/main/README.md).

These are vendor results, with incomplete per-test settings; no claim of independent reproduction. Terminal-Bench 2.0 is not 2.1 or 4.0. No verified public score found for retrieval at 512K–1M or exact-snapshot independent Intelligence Index.

### Normalized scores (1–100)

- **Tool use: 83/100.** Broad tool evaluations support capable agents; vendor-harness dependence limits confidence.
- **Reasoning: 89/100.** Strong GPQA/HLE, moderated by incomplete independent and full-window evidence.
- **Context window: 95/100.** Million-token service; 128K MRCR does not establish reliable million-token retrieval.
- **Multimodal: 15/100.** The evaluated unsuffixed alias is text-only; June snapshot vision is not transferred.
- **Coding: 85/100.** Strong scientific and repository coding; terminal score below frontier reference.
- **Cost efficiency: 78/100.** Paid international rates are moderate; regional differences and promotions complicate comparison.
- **Overall Score: 73/100.** Half-up mean (83 + 89 + 95 + 15 + 85) / 5 = 73.4; cost excluded.

[Scoring methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04

Method: independent fresh vendor research; scores are normalized interpretations.

