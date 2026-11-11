# Ling 3.2 Flash — findings by GPT_5.6_Terra

**Research date:** 2026-11-11  
**Subject:** `ling-3.2-flash`  
**Verdict:** Scored with caution. The vendor has published exact-model multimodal results, but I found no independently reproduced benchmark evaluation for this newly released model.

## Identity and availability

Ant Ling lists Ling-3.2-Flash as a proprietary native-multimodal model released on 2026-11-05. Its published architecture is 560B total parameters with 25B active parameters, a 1M-token shared context window, and text, image, and video understanding. The official API documentation lists `ling-3.2-flash` as a supported model.

The launch offered a two-week free-access period. Independent coverage reports an intended post-promotion price of $0.30 per million input tokens and $0.90 per million output tokens, while noting that stable public per-token pricing was not listed at launch; this price is therefore treated as indicative rather than confirmed.

## Evidence reviewed

### Official sources

- [Ant Ling model documentation](https://developer.ant-ling.com/en/docs/models/ling) — model identity, 1M context, modalities, release information, and architecture claims.
- [Ant Ling API FAQ](https://developer.ant-ling.com/en/docs/faq/) — confirms API availability for `ling-3.2-flash`.

### Independent sources and comparison

- [IT Home launch coverage](https://www.ithome.com/1/023/043.htm) reports the vendor's published exact-model results: 92.21 on OmniDocBench 1.5, 43.71 on ZEROBench (Sub), 85.86 on Vision2Web, and 1238 Elo on DesignArena image-to-frontend. These are useful raw signals, but remain vendor-reported rather than independent reproductions.
- [Sumus analysis](https://sumus.im/blog/ling-3-2-flash) likewise describes the launch metrics as vendor evaluation results and explicitly notes the absence of independent benchmark validation; it also supplies the indicative post-launch pricing.
- [OrcaRouter release analysis](https://www.orcarouter.ai/blog/ling-3-2-flash-native-multimodal-release) independently confirms the advertised 560B/25B architecture and 1M context, but warns that public pricing and third-party benchmark evidence were not yet settled.

The sources agree on the released model's native multimodality and very long context. They conflict only in confidence level: launch reports repeat strong benchmark numbers, whereas independent analyses correctly frame them as unverified vendor claims. No text-only coding or agent benchmark was found for the exact 3.2 Flash release; scores do not borrow Ling 3.1 results.

## Score rationale

- **Tool use:** Long-horizon agent positioning and API support are credible capability evidence, but no independently run tool-use benchmark is available.
- **Reasoning:** ZEROBench provides a limited vendor-reported visual-reasoning signal; lack of validated general-reasoning results limits the score.
- **Context window:** Officially documented 1M-token shared context is unusually strong.
- **Multimodal:** Vendor results on document, web-vision, and image-to-frontend tasks are consistently strong, with an independent-validation discount.
- **Coding:** DesignArena's image-to-frontend result is relevant but narrow; no exact-model SWE-bench or equivalent result was found.
- **Cost efficiency:** The reported intended price is highly competitive, but launch-only/free-access ambiguity prevents a top score.

- **Tool use: 75/100"
- **Reasoning: 72/100"
- **Context window: 99/100"
- **Multimodal: 92/100"
- **Coding: 70/100"
- **Cost efficiency: 94/100"
- **Overall Score: 82/100"
